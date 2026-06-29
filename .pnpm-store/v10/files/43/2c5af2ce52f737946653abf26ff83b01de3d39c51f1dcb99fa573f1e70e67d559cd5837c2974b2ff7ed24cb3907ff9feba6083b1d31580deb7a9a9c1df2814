'use strict'

const log = require('./log')
const { promises: fs } = require('./fs')

async function clean (gyp, argv) {
  // Remove the 'build' dir
  const buildDir = 'build'

  log.verbose('clean', 'removing "%s" directory', buildDir)
  await fs.rm(buildDir, { recursive: true, force: true })
}

module.exports = clean
module.exports.usage = 'Removes any generated build files and the "out" dir'
