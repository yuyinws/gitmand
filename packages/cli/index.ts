import { writeFile } from 'fs/promises'
import { shellHistory } from 'shell-history'

async function main() {
  const historyMap = new Map<string, number>([])
  const historyList = shellHistory()
  const total = historyList.length
  historyList.forEach((item) => {
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
    percent: `${(count / total * 100).toFixed(2)}%`,
  }))
  // write to file
  try {
    await writeFile('gitmand.json', JSON.stringify(json, null, 2))
    // eslint-disable-next-line no-console
    console.log('\x1B[32m', 'gitmand.json saved!')
  } catch (error) {
    console.error(error)
  }
}

main()
