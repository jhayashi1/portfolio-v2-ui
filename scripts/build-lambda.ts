import {build} from 'esbuild';
import config from '../esbuild.config';
import JSZip from 'jszip';
import {rm} from 'node:fs/promises';
import {writeFileSync, readdirSync, readFileSync} from 'node:fs';
import {resolve, join} from 'node:path';

const __dirname = resolve();
const root = resolve(__dirname, 'lambda');
const fromRoot = (path: string): string => resolve(root, path);

try {
    await rm(fromRoot('../dist/lambda'), {recursive: true, force: true});
    await rm(fromRoot('../terraform/lambda.zip'), {recursive: true, force: true});

    const zip = new JSZip();
    await build(config);

    const files = readdirSync(fromRoot('../dist/lambda'));
    files.forEach((file) => {
        const path = join(fromRoot('../dist/lambda'), file);
        const fileContent = readFileSync(path);
        zip.file(file, fileContent);
    });

    const zipBuffer = await zip.generateAsync({type: 'nodebuffer'}) ?? '';
    writeFileSync(fromRoot('../lambda.zip'), zipBuffer, {flag: 'w'});

    await rm(fromRoot('../dist/lambda'), {recursive: true, force: true});
} catch (e) {
    console.error(`Error while building lambda: ${e}`);
}
