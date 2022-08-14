import { readFile } from 'fs/promises'

async function main() {
  try {
    const content = await readFile('gitmand.json', 'utf8')
    console.log('🚀 ~ file: index.ts ~ line 6 ~ main ~ content', content)
  } catch (error) {
    console.log('🚀 ~ file: index.ts ~ line 8 ~ main ~ error', error)
  }
}

main()
