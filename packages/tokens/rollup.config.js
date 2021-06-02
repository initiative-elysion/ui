import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';


const plugins = [
  typescript(),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    include: ['src/**/*'],
    rootMode: 'upward'
  })
]

export default [
  {
    input: 'src/index.ts',
    plugins,
    output: {
      file: pkg.main,
      format: 'esm'
    }
  }
]
