// import { terser } from 'rollup-plugin-terser'
import babel from 'rollup-plugin-babel'

const config = {
  input: 'src/commands.js',
  output: {
    format: 'umd',
    name: 'commands',
    globals: {
      react: "Cypress"
    }
  },
  plugins: [
    babel({
        exclude: "node_modules/**"
    }),
    // terser()
  ],
}
export default config