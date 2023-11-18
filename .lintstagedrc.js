const path = require('path')

const buildTypeScriptCommand = () => `tsc --noEmit`

const buildFormatCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{ts,tsx}': [
    buildTypeScriptCommand,
    buildFormatCommand,
    buildEslintCommand,
  ],
  '*.{js,jsx,mjs,cjs}': [buildFormatCommand, buildEslintCommand],
  '*.{json,html,css,md,yml,yaml}': [buildFormatCommand],
}
