import { readFile } from 'fs/promises'
import * as core from '@actions/core'

const svg = `<svg width="501" height="500" viewBox="0 0 501 500" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="250.412" cy="250" rx="249.56" ry="250" fill="black"/>
<path d="M190.275 170.253C190.66 169.586 191.623 169.586 192.008 170.253L298.34 354.751C298.724 355.417 298.243 356.25 297.474 356.25H84.8094C84.0399 356.25 83.5588 355.417 83.943 354.751L190.275 170.253Z" fill="white"/>
<path d="M223.201 162.878C222.817 162.211 223.297 161.378 224.066 161.378L436.73 161.378C437.5 161.378 437.981 162.212 437.597 162.879L331.264 347.377C330.88 348.044 329.918 348.043 329.533 347.376L223.201 162.878Z" fill="white"/>
</svg>
`
async function main() {
  try {
    const content = await readFile('gitmand.json', 'utf8')
    core.info(content)
    core.setOutput('svg', svg)
  } catch (error) {
    core.error(`🚀 ~ file: index.ts ~ line 8 ~ main ~ error + ${error}`)
  }
}

main()
