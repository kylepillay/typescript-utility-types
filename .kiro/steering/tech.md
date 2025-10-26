# Technology Stack

## Core Technologies

- **TypeScript 3.0.3**: Primary language with strict mode enabled
- **Target**: ES5 for broad compatibility
- **Module System**: ES2015 modules

## Build System

- **Rollup**: Module bundler for creating UMD and ES5 builds
- **TypeScript Compiler**: Generates type definitions and CommonJS output
- **Rollup Plugins**:
  - rollup-plugin-typescript2: TypeScript compilation
  - rollup-plugin-node-resolve: Node module resolution
  - rollup-plugin-commonjs: CommonJS module support
  - rollup-plugin-sourcemaps: Source map generation
  - rollup-plugin-json: JSON file imports

## Testing

- **Jest**: Test framework with ts-jest for TypeScript support
- **Coverage Requirements**:
  - Branches: 90%
  - Functions: 95%
  - Lines: 95%
  - Statements: 95%

## Code Quality

- **TSLint**: Linting with tslint-config-standard and tslint-config-prettier
- **Prettier**: Code formatting with single quotes and no semicolons
- **Husky**: Git hooks for pre-commit linting
- **lint-staged**: Run linters on staged files

## CI/CD

- **Travis CI**: Continuous integration
- **Semantic Release**: Automated versioning and publishing
- **Commitizen**: Conventional commit messages
- **Coveralls**: Code coverage reporting

## Common Commands

```bash
# Development
npm install              # Install dependencies
npm run start           # Start development mode with file watching

# Building
npm run build           # Build library and generate type definitions
npm run prebuild        # Clean dist directory (runs automatically)

# Testing
npm test                # Run tests with coverage
npm run test:watch      # Run tests in watch mode
npm run test:prod       # Run linting and tests

# Code Quality
npm run lint            # Lint TypeScript files

# Documentation
npm run deploy-docs     # Deploy documentation to GitHub Pages

# Release
npm run semantic-release-prepare  # Prepare for semantic release
npm run semantic-release          # Publish new version
```

## Output Structure

- **dist/types/**: TypeScript declaration files (.d.ts)
- **dist/lib/**: Compiled CommonJS modules
- **dist/typescript-utility-types.umd.js**: UMD bundle
- **dist/typescript-utility-types.es5.js**: ES5 module bundle
