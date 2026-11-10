import { readFile, writeFile } from 'node:fs/promises'

type PackageManifest = {
  peerDependencies: { '@biomejs/biome': string }
}

const manifestPath = new URL('../package.json', import.meta.url)
const readmePath = new URL('../README.md', import.meta.url)
const manifest: PackageManifest = JSON.parse(await readFile(manifestPath, 'utf8'))
const range = manifest.peerDependencies['@biomejs/biome']

const readme = await readFile(readmePath, 'utf8')
const pattern = /<!-- biome-requirement:start -->[\s\S]*?<!-- biome-requirement:end -->/

if (!pattern.test(readme)) {
  throw new Error('README.md is missing the Biome requirement markers')
}

const updated = readme.replace(
  pattern,
  `<!-- biome-requirement:start -->\nRequires Biome \`${range}\`.\n<!-- biome-requirement:end -->`,
)

if (updated !== readme) {
  if (process.argv.includes('--check')) {
    throw new Error('The Biome requirement is outdated. Run pnpm readme:update.')
  }
  await writeFile(readmePath, updated)
  console.log('Updated the Biome requirement in README.md.')
  if (process.argv.includes('--pre-commit')) {
    console.error('Review and stage README.md, then retry the commit.')
    process.exitCode = 1
  }
}
