import ts from 'rollup-plugin-typescript2';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename);
console.log(__dirname, __filename);
// => /Users/xulei/code/js++/i/zhufeng/ts
// => /Users/xulei/code/js++/i/zhufeng/ts/rollup.config.js

export default {
  input: resolve(__dirname, 'src/5_basic/index.ts'),
  output: {
    format: 'iife',
    file: resolve(__dirname, 'dist/bundle.js'),
    sourcemap: true
  },
  plugins: [
    nodeResolve({
       extensions: ['.js', '.ts']
    }),
    ts({
      tsconfig: resolve(__dirname, 'tsconfig.json')
    }),
    serve({
      port: 3300,
      openPage: '/public/index.html',
      // open: true
    }),
    livereload()
  ],
 
}