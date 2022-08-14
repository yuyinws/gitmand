import { readFile } from 'fs/promises'
import * as core from '@actions/core'
import type { List } from './render'
import { render } from './render'

async function main() {
  try {
    const LIMIT: string = core.getInput('limit', { required: false })
    let limit: number = parseInt(LIMIT) || 10
    limit = Math.max(limit, 5)
    limit = Math.min(limit, 20)
    const content = await readFile('gitmand.json', 'utf8')
    let lists: List[] = JSON.parse(content)
    lists = lists.slice(0, limit)
    core.setOutput('svg', render(lists))
  } catch (error) {
    core.error(`${error}`)
  }
}

main()
