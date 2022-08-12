import { writeFile } from 'fs/promises'
import { shellHistory } from 'shell-history'

async function main() {
  const historyMap = new Map<string, number>([])
  shellHistory().forEach((item) => {
    const command = item.split(' ')[0]
    if (!historyMap.has(command)) {
      historyMap.set(command, 1)
    } else {
      historyMap.set(command, historyMap.get(command)! + 1)
    }
  })

  const sorted = [...historyMap.entries()].sort((a, b) => b[1] - a[1])

  // map to json
  const json = sorted.map(([command, count]) => ({
    command,
    count,
  }))

  // write to file
  try {
    await writeFile('history.json', JSON.stringify(json, null, 2))
    // eslint-disable-next-line no-console
    console.log('history.json written!')
  } catch (error) {
    console.error(error)
  }
}

main()
