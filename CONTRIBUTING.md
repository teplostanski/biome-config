# Contributing

## Development

Use Node.js 26 (`.nvmrc`) and the pnpm version pinned in `package.json`.

```sh
pnpm install --frozen-lockfile
pnpm check
npm pack --dry-run
```

CI checks pull requests and pushes to `main` on Node.js 22 and 24.
Dependabot checks npm dependencies and GitHub Actions weekly.
When changing Biome versions, review the peer dependency range.
Husky installs the Git hooks during `pnpm install`. Before each commit, a TypeScript script
updates the required Biome version range in README from `peerDependencies`.
If README changes, the hook stops the commit so you can review and stage the update before retrying.
Run `pnpm readme:update` to update it manually or `pnpm readme:check` to check it without writing.
The script runs directly in Node.js without a build step (Node.js 22.18+ or 24+).

## Release setup

Push this repository to `teplostanski/biome-config` on GitHub.
Configure the npm package's Trusted Publisher with:

- Organization or user: `teplostanski`
- Repository: `biome-config`
- Workflow filename: `release.yml`
- Environment: leave empty
- Allow direct publishing with `npm publish`

No `NPM_TOKEN` secret is required. The workflow requests an OIDC token and uses npm trusted publishing.
See [npm trusted publishing](https://docs.npmjs.com/trusted-publishers/).
If the package does not yet exist on npm, publish its initial version manually before configuring its Trusted Publisher.
Do not then push a release tag for that already-published version: the workflow would attempt to publish it again.

## Releases

1. Update `version` in `package.json` and commit the change on `main`.
2. Push `main` and a matching tag, such as `v1.0.1`.
3. The release workflow validates the version, installs from the lockfile, checks the configuration and package contents, publishes to npm, and creates a GitHub Release with generated notes.

The tag must exactly match `v` followed by the package version.
Stable versions publish under `latest`. Prereleases such as `1.1.0-beta.1` or
`1.1.0-rc.1` publish under `beta` or `rc` and create prerelease GitHub Releases.
Use a lowercase channel name starting with a letter; `latest` is reserved for stable releases.
Publishing runs on Node.js 24 with the latest npm CLI.
