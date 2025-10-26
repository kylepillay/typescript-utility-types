# Project Structure

## Directory Layout

```
src/
├── library.ts              # Main library file with all utility types

test/
├── library.test.ts         # Test suite for utility types

tools/
├── gh-pages-publish.ts     # GitHub Pages deployment script
├── init.ts                 # Post-install initialization
├── semantic-release-prepare.ts  # Semantic release preparation

dist/                       # Build output (generated, not in git)
├── types/                  # TypeScript declaration files
├── lib/                    # Compiled CommonJS modules
├── typescript-utility-types.umd.js    # UMD bundle
└── typescript-utility-types.es5.js    # ES5 module bundle

coverage/                   # Test coverage reports (generated)
```

## Source Organization

The main library file (`src/library.ts`) is organized into logical sections:

1. **Basic Types**: Primitive, Falsy, Truthy, Nullish
2. **Object Manipulation Types**: NonNullableKeys, JSONObject, OptionalExceptFor
3. **Deep Transformation Types**: ReadonlyDeep, PartialDeep
4. **Brand Types**: Brand
5. **Advanced Utility Types**: Awaited, Diff, Intersection, Union, etc.
6. **Function Utility Types**: ReturnType, Parameters, OverrideReturnType
7. **Conditional Utility Types**: If, IsAssignable, IsExact
8. **Array Utility Types**: Head, Tail, Last, Init, Length
9. **String Utility Types**: Capitalize, Uncapitalize, Uppercase, Lowercase
10. **Type Guards and Validation**: IsNever, IsAny, IsFunction, etc.
11. **Enhanced Object Utilities**: Required, Mutable, Pick, Omit, etc.
12. **Enhanced String Utilities**: StartsWith, EndsWith, Includes, Trim
13. **Enhanced Array Utilities**: First, Second, Third, IsEmpty, etc.
14. **Enhanced Conditional Utilities**: IfElse, OrElse, Equals
15. **Enhanced Function Utilities**: FirstParameter, LastParameter, etc.

## Code Organization Principles

- All utility types are exported individually from the main library file
- Each type includes JSDoc comments explaining its purpose
- Types are grouped by category with clear section headers
- No runtime code - this is a pure type definition library
- ES5 compatibility notes are included for simplified implementations

## Testing Structure

- Tests mirror the structure of the main library
- Each utility type should have corresponding test cases
- Tests verify type behavior using TypeScript's type system
- Coverage thresholds are enforced (90%+ branches, 95%+ functions/lines/statements)

## Configuration Files

- `tsconfig.json`: TypeScript compiler configuration (strict mode, ES5 target)
- `tslint.json`: Linting rules (extends standard and prettier configs)
- `rollup.config.ts`: Rollup bundler configuration
- `package.json`: Project metadata, scripts, and dependencies
- `.travis.yml`: CI/CD configuration
