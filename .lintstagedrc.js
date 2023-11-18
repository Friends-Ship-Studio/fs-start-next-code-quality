const path = require('path')

const buildTypeScriptCommand = () => `tsc --noEmit`

const buildFormatCommand = (filenames) =>
  `prettier --write ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' ')}`

const buildLintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`

module.exports = {
  '*.{ts,tsx}': [buildTypeScriptCommand, buildFormatCommand, buildLintCommand],
  '*.{js,jsx,mjs,cjs}': [buildFormatCommand, buildLintCommand],
  '*.{json,html,css,md,yml,yaml}': [buildFormatCommand],
}
