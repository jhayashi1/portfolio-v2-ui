import {build} from 'esbuild';
import config from '../esbuild.config';
import {rm} from 'node:fs/promises';
import {writeFileSync} from 'node:fs';
import JSZip from 'jszip';
import {resolve} from 'node:path';

const __dirname = resolve();
const root = resolve(__dirname, 'lambda');
const fromRoot = (path: string): string => resolve(root, path);

try {
    await rm(fromRoot('../dist/lambda'), {recursive: true, force: true});
    await rm(fromRoot('../terraform/lambda.zip'), {recursive: true, force: true});

    const zip = new JSZip();
    await build(config);

    zip.folder('../dist/lambda');
    const file = await zip.generateAsync({type: 'string'});
    writeFileSync(fromRoot('../terraform/lambda.zip'), file, {flag: 'w'});

    await rm(fromRoot('../dist/lambda'), {recursive: true, force: true});
} catch (e) {
    console.error(`Error while building lambda: ${e}`);
}
