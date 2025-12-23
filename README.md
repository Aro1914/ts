# TypeScript example (ts)

A minimal TypeScript project demonstrating compilation into `./build` using `tsconfig.json`.

## Prerequisites

- Node.js (14+ recommended)
- Optional: install TypeScript locally for reproducible builds:

```bash
npm init -y
npm install --save-dev typescript
```

## Build

- Compile using `tsconfig.json` (recommended):

```bash
npx tsc
```

This reads `tsconfig.json` and outputs compiled files into the configured `outDir` (`./build`).

- Compile a single file and explicitly set `outDir`:

```bash
npx tsc ./src/hello.ts --outDir ./build
```

Note: invoking `tsc` with an explicit input file on the command line does not use the project file-discovery behavior that `npx tsc` (no args) uses. To ensure compiler options from `tsconfig.json` are applied, run `npx tsc` (or `npx tsc -p .`).

## Run

```bash
node build/hello.js
```

## Watch mode

```bash
npx tsc -w
```

## What you'll find

- `src/` — TypeScript source (`hello.ts`)
- `build/` — emitted JavaScript, source maps, and declaration files when compiling
- `tsconfig.json` — compiler configuration used by `npx tsc`

## Next steps

- Add `package.json` scripts for `build` and `watch` if you want shortcuts.
