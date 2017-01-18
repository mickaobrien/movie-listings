import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';
import svelte from 'rollup-plugin-svelte';

export default {
  entry: 'src/main.js',
  dest: 'bundle.js',
  format: 'iife',
  plugins: [
    //buble(),
    nodeResolve({
      jsnext: true,
      main: true,
      //browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    svelte({
      // By default, all .html and .svelte files are compiled
      //extensions: [ '.my-custom-extension' ],

      // You can restrict which files are compiled
      // using `include` and `exclude`
      include: 'src/components/**/*.html',

      // By default, the client-side compiler is used. You
      // can also use the server-side rendering compiler
      //generate: 'ssr',

      // If you're doing server-side rendering, you may want
      // to prevent the client-side compiler from duplicating CSS
      //css: false
    }),
  ]
}
