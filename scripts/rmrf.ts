import { existsSync, lstatSync } from 'node:fs'
import { rmdir, rm, readdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dirRoot = path.join(__dirname, '../')
const dirDist = path.join(dirRoot, '/dist')

const deleteDirContent = async (dirPath: string): Promise<void> => {
  const contents = await readdir(dirPath)
  for (const item of contents) {
    const itemPath = path.join(dirPath, item)
    const itemLstat = lstatSync(itemPath)
    if (itemLstat.isFile()) {
      await rm(itemPath)
    } else if (itemLstat.isDirectory()) {
      await deleteDirContent(itemPath)
    } else {
      console.error('File is something other than a file or a directory')
    }
  }
  const updatedContents = await readdir(dirPath)
  if (updatedContents.length === 0) {
    rmdir(dirPath)
  }
}

const dirDistExists = existsSync(dirDist)
if (dirDistExists) {
  try {
    await deleteDirContent(dirDist)
  } catch (error) {
    console.error(error)
  }
}
