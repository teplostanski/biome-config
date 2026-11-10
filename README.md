# @teplostanski/biome-config

[![npmx version](https://npmx.dev/api/registry/badge/version/@teplostanski/biome-config?style=shieldsio&label=npmx&labelColor=0a0a0a)](https://npmx.dev/package/@teplostanski/biome-config)
[![Monthly downloads](https://npmx.dev/api/registry/badge/downloads/@teplostanski/biome-config?style=shieldsio&labelColor=0a0a0a)](https://npmx.dev/package/@teplostanski/biome-config)
[![License](https://npmx.dev/api/registry/badge/license/@teplostanski/biome-config?style=shieldsio&labelColor=0a0a0a)](./LICENSE)
[![Required Biome version](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Fraw.githubusercontent.com%2Fteplostanski%2Fbiome-config%2Fmain%2Fpackage.json&query=%24.peerDependencies%5B%22%40biomejs%2Fbiome%22%5D&label=Biome&logo=biome&style=flat&labelColor=0a0a0a&color=60a5fa)](./package.json)

Shared Biome formatting and lint rules for TypeScript, JavaScript, JSON, Markdown, and YAML.
Requires an existing [Biome setup](https://biomejs.dev/guides/getting-started/).
<!-- biome-requirement:start -->
Requires Biome `^2.6.6`.
<!-- biome-requirement:end -->

## Installation

Install the shared configuration in your project:

```sh
pnpm add -D -E @teplostanski/biome-config
```

## Usage

Add the shared configuration to `extends` in your project's `biome.json` or `biome.jsonc`:

```json
{
  "extends": ["@teplostanski/biome-config/configs/base"]
}
```

## Rules

- Two-space indentation and a line width of 100.
- Single quotes, optional semicolons, and omitted arrow parentheses where possible in JavaScript and TypeScript.
- Recommended lint rules.
- Arrow functions instead of non-generator function expressions that do not use `this` (`useArrowFunction`).
- Function expressions assigned to variables instead of declarations (`useConsistentFunctionStyle`, experimental nursery rule). Both rules report errors. Methods, default exports, and TypeScript overloads retain the applicable rule exceptions.
- Markdown and YAML formatting, including Markdown frontmatter parsing.

Keep project-specific file exclusions, VCS settings, and overrides in the consuming project's config.
Local settings can override shared settings. Use the same exact Biome version across projects for consistent output.
This package does not install Git hooks or change project scripts automatically.

> The package exports its configuration through `biome-manifest.json`, supported since Biome 2.6.
> See the [Biome package documentation](https://biomejs.dev/guides/publish-packages/).

## License

[MIT](./LICENSE) License © 2026-present [Teplostanski Igor](https://github.com/teplostanski)
