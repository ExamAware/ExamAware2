const gracefulFs = require('graceful-fs')
const promises = gracefulFs.promises

/**
 * Add fs.rm for older versions of node
 */
async function rm(...args) {
  const pathToRemove = args[0]
  const options = args[1] || {}

  try {
    const stat = await promises.stat(pathToRemove, { throwIfNoEntry: false })
    const isDirectory = stat.isDirectory()

    if (isDirectory) {
      await promises.rmdir(pathToRemove, options)
    } else {
      await promises.unlink(pathToRemove)
    }
  } catch (err) {
    if (err.code === 'ENOENT' && options.force) {
      return
    }

    throw err
  }
}

module.exports = {
  ...gracefulFs,
  promises: {
    rm,
    ...promises,
  }
}
