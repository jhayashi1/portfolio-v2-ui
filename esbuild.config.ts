import type {BuildOptions} from 'esbuild';

export default {
    format           : 'cjs',
    platform         : 'node',
    target           : 'node24.5',
    outdir           : 'dist',
    loader           : {'.html': 'text', '.css': 'text'},
    bundle           : true,
    minifySyntax     : true,
    minifyWhitespace : true,
    minifyIdentifiers: false,
    keepNames        : true,
    sourcemap        : true,
    sourcesContent   : false,
    logLevel         : 'info',
} satisfies BuildOptions;
