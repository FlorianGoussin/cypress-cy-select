import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

const getPlugins = ({ uglify = false } = {}) => {
  const plugins = [
    babel({
      exclude: 'node_modules/**',
    }),
  ]
  return uglify ? [terser(), ...plugins] : plugins
}

export default [{
  input: 'src/commands.js',
  plugins: getPlugins({ uglify: true }),
  output: {
    file: 'dist/commands.min.js',
    name: 'commands',
    format: 'umd',
  }
}, {
  input: 'src/commands.js',
  plugins: getPlugins(),
  output: {
    file: 'dist/commands.js',
    name: 'commands',
    format: 'umd',
  }
}]
