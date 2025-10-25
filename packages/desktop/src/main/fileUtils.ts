import * as fs from 'fs'

export const readFile = (filePath: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

export const writeFile = (filePath: string, content: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.writeFile(filePath, content, 'utf8', (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export const readJSONFile = async (filePath: string): Promise<any> => {
  const content = await readFile(filePath)
  return JSON.parse(content)
}

export const writeJSONFile = (filePath: string, jsonData: any): Promise<void> => {
  const content = JSON.stringify(jsonData, null, 2)
  return writeFile(filePath, content)
}

export const fileExists = (filePath: string): Promise<boolean> => {
  return new Promise((resolve) => {
    fs.access(filePath, fs.constants.F_OK, (err) => {
      resolve(!err)
    })
  })
}

export const createDirectory = (dirPath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, { recursive: true }, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export const deleteFile = (filePath: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    fs.unlink(filePath, (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

export const fileApi = {
  readFile: (filePath: string) => readFile(filePath),
  writeFile: (filePath: string, content: string) => writeFile(filePath, content),
  readJSONFile: (filePath: string) => readJSONFile(filePath),
  writeJSONFile: (filePath: string, jsonData: any) => writeJSONFile(filePath, jsonData),
  fileExists: (filePath: string) => fileExists(filePath),
  createDirectory: (dirPath: string) => createDirectory(dirPath),
  deleteFile: (filePath: string) => deleteFile(filePath)
}
