import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const plugins = () => [
  babel({
    exclude: 'node_modules/**',
  }),
]

export default {
  input: 'src/commands.js',
  output: [
    {
      format: 'umd',
      name: 'commands',
      entry: 'src.js',
      dest: 'dist/commands.js',
      plugins: [plugins()],
    },
    {
      format: 'umd',
      name: 'commands',
      entry: 'src/commands.js',
      dest: 'dist/commands.min.js',
      plugins: [...plugins(), terser()],
    }
  ]
}
