import type {BuildOptions} from 'esbuild';

export default {
    bundle           : true,
    format           : 'cjs',
    keepNames        : true,
    loader           : {'.css': 'text', '.html': 'text'},
    logLevel         : 'info',
    minifyIdentifiers: false,
    minifySyntax     : true,
    minifyWhitespace : true,
    outdir           : 'dist',
    platform         : 'node',
    sourcemap        : true,
    sourcesContent   : false,
    target           : 'node24.5',
} satisfies BuildOptions;
