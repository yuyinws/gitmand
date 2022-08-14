import type { List } from './render'

export function createGist(lists: List[]): string {
  let gistText = ''
  lists.forEach((list) => {
    gistText += `${list.command.padEnd(10)}${list.count} (${list.percent})\n`
  })

  return gistText
}
