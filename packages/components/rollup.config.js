import babel from '@rollup/plugin-babel'
import typescript from '@rollup/plugin-typescript';
import pkg from './package.json';

const plugins = [
  typescript(),
  babel({
    exclude: 'node_modules/**',
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    rootMode: 'upward'
  })
]

export default [
  {
    input: 'src/index.tsx',
    plugins,
    external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
    output: // [
      {
        file: pkg.main,
        format: 'esm'
      }
      /*,
      {
        file: pkg.cjs,
        format: 'cjs',
      },
      {
        file: pkg.module,
        format: 'es',
      },*/
    // ]
  }
]