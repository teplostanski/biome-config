# @teplostanski/biome-config

Shared Biome formatting and lint rules for TypeScript, JavaScript, JSON, Markdown, and YAML.
Requires Biome 2.6.5 or later within version 2.

## Installation

After this package is published to npm:

```sh
pnpm add -D -E @biomejs/biome @teplostanski/biome-config
```

Create `biome.json` in your project:

```json
{
  "$schema": "./node_modules/@biomejs/biome/configuration_schema.json",
  "extends": ["@teplostanski/biome-config/configs/base"]
}
```

Add scripts to your project's `package.json`:

```json
{
  "scripts": {
    "lint": "biome check .",
    "lint:fix": "biome check --write .",
    "format": "biome format --write ."
  }
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

## Development

```sh
pnpm install
pnpm check
pnpm pack
```

The package exports its configuration through `biome-manifest.json`, supported since Biome 2.6.
See the [Biome package documentation](https://biomejs.dev/guides/publish-packages/).

## License

[MIT](./LICENSE) License © 2026-present [Teplostanski Igor](https://github.com/teplostanski)
