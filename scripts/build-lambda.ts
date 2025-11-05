import {build} from 'esbuild';
import JSZip from 'jszip';
import {readdirSync, readFileSync, writeFileSync} from 'node:fs';
import {rm} from 'node:fs/promises';
import {join, resolve} from 'node:path';

import config from '../esbuild.config';

const [,, keepOutput] = process.argv;

const __dirname = resolve();
const root = resolve(__dirname);
const fromRoot = (path: string): string => resolve(root, path);

try {
    await rm(fromRoot('dist'), {force: true, recursive: true});

    const endpointNames = readdirSync(fromRoot('lambda')).filter((name) => name.split('.').length < 2);
    const endpointDirectories = endpointNames.map((name) => `lambda/${name}/index.ts`);

    await build({
        ...config,
        entryPoints: endpointDirectories,
    });

    for (const name of endpointNames) {
        const zip = new JSZip();
        const zipPath = join('terraform', `${name}.zip`);
        const dir = endpointNames.length === 1 ? 'dist' : `dist/${name}`;
        const files = readdirSync(fromRoot(dir));

        files.forEach((file) => {
            const path = join(fromRoot(dir), file);
            const fileContent = readFileSync(path);
            zip.file(file, fileContent);
        });

        const zipBuffer = await zip.generateAsync({type: 'nodebuffer'}) ?? '';
        writeFileSync(zipPath, zipBuffer, {flag: 'w'});
    }

    if (!keepOutput) {
        await rm(fromRoot('dist'), {force: true, recursive: true});
    }
} catch (e) {
    console.error(`Error while building lambdas: ${e}`);
}
