import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';
import postcss from 'rollup-plugin-postcss';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';
import commonjs from 'rollup-plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
const dependencies = Object.keys(require("./package.json").dependencies)

const plugins = [
  peerDepsExternal(),
  replace({ 'process.env.NODE_ENV': JSON.stringify('production') }),
  nodeResolve({
    jsnext: true,
    main: true
  }),
  commonjs({
    include: 'node_modules/**'
  }),
  babel({
    exclude: 'node_modules/**'
  }),
  postcss({
    extract: false
  }),

];

export default [
  {
    external: dependencies,
    input: 'src/index.js',
    plugins,
    output: [
      {
        file: pkg.main,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      }
    ]
  }
];