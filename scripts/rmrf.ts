import path from 'node:path'
import { exit } from 'node:process'
import { fileURLToPath } from 'node:url'
import { existsSync, lstatSync } from 'node:fs'
import { rmdir, rm, readdir } from 'node:fs/promises'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const dirRoot = path.join(__dirname, '../../')
const dirDist = path.join(dirRoot, '/dist')

/**
 * Delete a directory and all it's contents
 *
 * @param dirPath Path of the directory to be deleted
 * @returns An empty promise
 */
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
      throw new Error('File is something other than a file or a directory')
    }
  }
  const updatedContents = await readdir(dirPath)
  if (updatedContents.length === 0) rmdir(dirPath)
}

if (!existsSync(dirDist)) exit()

try {
  await deleteDirContent(dirDist)
} catch (error) {
  if (error instanceof Error) throw error
  else throw new Error(`${error}`)
}
