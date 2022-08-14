import { readFile, writeFile } from 'fs/promises'
import * as core from '@actions/core'
import type { List } from './render'
import { render } from './render'
import { createGist } from './createGist'

async function main() {
  try {
    const LIMIT: string = core.getInput('limit', { required: false })
    const GIST_ID: string = core.getInput('gist_id', { required: false })

    let limit: number = parseInt(LIMIT) || 10
    limit = Math.max(limit, 5)
    limit = Math.min(limit, 20)
    const content = await readFile('gitmand.json', 'utf8')
    let lists: List[] = JSON.parse(content)
    lists = lists.slice(0, limit)
    core.setOutput('svg', render(lists))

    if (GIST_ID) {
      const gistText = createGist(lists)
      await writeFile('Gitmand', gistText, 'utf8')
      core.setOutput('gist_id', GIST_ID)
    }
  } catch (error) {
    core.error(`${error}`)
  }
}

main()
