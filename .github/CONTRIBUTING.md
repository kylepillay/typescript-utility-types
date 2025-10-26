# Contributing to TypeScript Utility Types

First off, thank you for considering contributing to TypeScript Utility Types! It's people like you that make this library better for everyone.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
  - [Reporting Bugs](#reporting-bugs)
  - [Suggesting New Utility Types](#suggesting-new-utility-types)
  - [Improving Documentation](#improving-documentation)
  - [Submitting Pull Requests](#submitting-pull-requests)
- [Development Setup](#development-setup)
- [Style Guidelines](#style-guidelines)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Testing Guidelines](#testing-guidelines)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to kylepillay@gmail.com.

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible using our bug report template.

**Good bug reports include:**
- A clear and descriptive title
- Exact steps to reproduce the problem
- The TypeScript and Node.js versions you're using
- A minimal code sample demonstrating the issue
- Expected vs actual behavior

### Suggesting New Utility Types

We love new utility type suggestions! Before suggesting a new type:

1. **Check if it already exists** in the library or in TypeScript's built-in types
2. **Search existing issues** to see if someone else has suggested it
3. **Consider the use case** - is this a commonly needed type?
4. **Look at similar libraries** (type-fest, utility-types, ts-toolbelt) to see if they have it

When suggesting a new utility type, please include:
- A clear description of what the type does
- Real-world use cases
- Example usage code
- How it differs from existing types

### Improving Documentation

Documentation improvements are always welcome! This includes:
- Fixing typos or grammatical errors
- Adding more examples
- Clarifying confusing explanations
- Adding JSDoc comments to types
- Improving the README

### Submitting Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes** following our style guidelines
3. **Add tests** for any new utility types
4. **Update documentation** including JSDoc comments and README if needed
5. **Ensure tests pass** by running `npm test`
6. **Ensure linting passes** by running `npm run lint`
7. **Build the library** by running `npm run build`
8. **Submit a pull request** using our PR template

## Development Setup

### Prerequisites

- Node.js 16+ (we recommend using the latest LTS version)
- npm or yarn

### Setup Steps

```bash
# Clone your fork
git clone https://github.com/YOUR_USERNAME/typescript-utility-types.git
cd typescript-utility-types

# Install dependencies
npm install

# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run linter
npm run lint

# Build the library
npm run build

# Start development mode (watch for changes)
npm run start
```

## Style Guidelines

### TypeScript Style

- Use **strict TypeScript** - all types must work with `strict: true`
- Follow the **existing code structure** in `src/library.ts`
- Group related types together with clear section headers
- Use **descriptive type names** that clearly indicate what the type does
- Add **JSDoc comments** for all exported types

### Code Organization

Types in `src/library.ts` are organized into sections:

```typescript
// ============================================================================
// SECTION NAME
// ============================================================================

/**
 * Clear description of what this type does
 */
export type MyUtilityType<T> = ...
```

### Documentation Style

- Use clear, concise language
- Include code examples for complex types
- Explain the use case, not just the implementation
- Use proper TypeScript syntax highlighting in markdown

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat**: A new utility type or feature
- **fix**: A bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, no logic changes)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples

```
feat: add DeepNonNullable utility type

Add a new utility type that recursively removes null and undefined
from all properties of an object type.

Closes #123
```

```
fix: correct ReturnType for async functions

The ReturnType utility was not properly handling Promise return types.
Updated to unwrap Promise types correctly.

Fixes #456
```

```
docs: add examples for Brand type usage

Added practical examples showing how to use Brand types for
nominal typing in TypeScript.
```

## Testing Guidelines

### Writing Tests

- Tests are located in `test/library.test.ts`
- Each utility type should have corresponding tests
- Test both positive and negative cases
- Use descriptive test names

### Test Structure

```typescript
describe('MyUtilityType', () => {
  it('should correctly transform the type', () => {
    type Input = { a: string; b: number }
    type Expected = { a: string }
    type Result = MyUtilityType<Input>
    
    // Type assertion to verify
    const test: Result = { a: 'test' }
    expect(test).toBeDefined()
  })
})
```

### Coverage Requirements

- Branches: 90%+
- Functions: 95%+
- Lines: 95%+
- Statements: 95%+

Run `npm test` to check coverage.

## Type Compatibility

### TypeScript Versions

We aim to support TypeScript 3.0+ for broad compatibility. When adding new types:

- Test against multiple TypeScript versions (see `.github/workflows/type-check.yml`)
- Note if a type requires a specific TypeScript version
- Use ES5-compatible implementations when possible

### Breaking Changes

If your change is breaking:

1. Clearly mark it as `BREAKING CHANGE` in the commit message
2. Update the documentation
3. Provide migration notes
4. Discuss with maintainers before submitting

## Questions?

- Open a [Discussion](https://github.com/kylepillay/typescript-utility-types/discussions) for general questions
- Open an [Issue](https://github.com/kylepillay/typescript-utility-types/issues) for bugs or feature requests
- Check existing issues and discussions first

## Recognition

Contributors will be recognized in:
- The project's README
- Release notes
- GitHub's contributor graph

Thank you for contributing! 🎉
