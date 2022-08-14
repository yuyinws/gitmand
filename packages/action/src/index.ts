import { readFile } from 'fs/promises'
import * as core from '@actions/core'

async function main() {
  try {
    const content = await readFile('gitmand.json', 'utf8')
    core.info(content)
  } catch (error) {
    core.error(`🚀 ~ file: index.ts ~ line 8 ~ main ~ error + ${error}`)
  }
}

main()
