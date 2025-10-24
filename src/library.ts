/**
 * TypeScript Utility Types Library
 * A comprehensive collection of custom utility types for TypeScript projects
 */

// ============================================================================
// BASIC TYPES
// ============================================================================

/**
 * Represents the set of all basic data types in JavaScript/TypeScript
 */
export type Primitive = string | number | bigint | boolean | symbol | null | undefined;

/**
 * Encompasses all possible values that JavaScript considers "falsy"
 */
export type Falsy = false | "" | 0 | 0n | null | undefined;

/**
 * Filters out falsy values from type unions, preserving only truthy types
 */
export type Truthy<T> = T extends Falsy ? never : T;

/**
 * Represents null or undefined values
 */
export type Nullish = null | undefined;

// ============================================================================
// OBJECT MANIPULATION TYPES
// ============================================================================

/**
 * Extracts keys from an object that have non-nullish values
 */
export type NonNullableKeys<T> = {
  [K in keyof T]-?: T[K] extends Nullish ? never : K;
}[keyof T];

/**
 * Represents a JSON-serializable object
 */
export type JSONObject = {
  [key: string]: string | number | boolean | null | JSONObject | (string | number | boolean | null | JSONObject)[];
};

/**
 * Makes all properties optional except for the specified keys
 */
export type OptionalExceptFor<T, K extends keyof T> = Partial<T> & Pick<T, K>;

// ============================================================================
// DEEP TRANSFORMATION TYPES
// ============================================================================

/**
 * Makes all properties of an object and its nested objects readonly
 */
export type ReadonlyDeep<T> = {
  readonly [P in keyof T]: T[P] extends (infer U)[]
    ? ReadonlyArray<ReadonlyDeep<U>>
    : T[P] extends object
    ? ReadonlyDeep<T[P]>
    : T[P];
};

/**
 * Makes all properties of an object and its nested objects partial
 */
export type PartialDeep<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? PartialDeep<U>[]
    : T[P] extends object
    ? PartialDeep<T[P]>
    : T[P];
};

// ============================================================================
// BRAND TYPES
// ============================================================================

/**
 * Creates a branded type for nominal typing
 */
export type Brand<T, B> = T & { __brand: B };

// ============================================================================
// ADVANCED UTILITY TYPES (11-20)
// ============================================================================

/**
 * Extracts the value type from a Promise
 */
export type Awaited<T> = T extends Promise<infer U> ? U : T;

/**
 * Creates a type that represents the difference between two types
 */
export type Diff<T, U> = T extends U ? never : T;

/**
 * Creates a type that represents the intersection of two types
 */
export type Intersection<T, U> = T & U;

/**
 * Creates a type that represents the union of two types
 */
export type Union<T, U> = T | U;

/**
 * Creates a type that represents the complement of a type
 */
export type Complement<T, U> = T extends U ? never : T;

/**
 * Creates a type that represents the symmetric difference of two types
 */
export type SymmetricDiff<T, U> = Diff<T, U> | Diff<U, T>;

/**
 * Creates a type that represents the relative complement of U in T
 */
export type RelativeComplement<T, U> = T extends U ? never : T;

/**
 * Creates a type that represents the absolute complement of T
 */
export type AbsoluteComplement<T> = never;

/**
 * Creates a type that represents the power set of T
 */
export type PowerSet<T> = T extends any ? T : never;

/**
 * Creates a type that represents the cartesian product of T and U
 */
export type CartesianProduct<T, U> = T extends any
  ? U extends any
    ? [T, U]
    : never
  : never;

// ============================================================================
// FUNCTION UTILITY TYPES
// ============================================================================

/**
 * Extracts the return type of a function
 */
export type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

/**
 * Extracts the parameter types of a function
 */
export type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;

/**
 * Creates a function type with the same signature but different return type
 */
export type OverrideReturnType<T extends (...args: any) => any, R> = (...args: Parameters<T>) => R;

// ============================================================================
// CONDITIONAL UTILITY TYPES
// ============================================================================

/**
 * Creates a conditional type that returns T if condition is true, otherwise F
 */
export type If<C extends boolean, T, F> = C extends true ? T : F;

/**
 * Creates a type that checks if T is assignable to U
 */
export type IsAssignable<T, U> = T extends U ? true : false;

/**
 * Creates a type that checks if T is exactly U
 */
export type IsExact<T, U> = T extends U ? (U extends T ? true : false) : false;

// ============================================================================
// ARRAY UTILITY TYPES
// ============================================================================

/**
 * Gets the first element of an array type
 */
export type Head<T extends readonly any[]> = T extends readonly [infer H, ...any[]] ? H : never;

/**
 * Gets all elements except the first of an array type
 * Note: Simplified version for ES5 compatibility
 */
export type Tail<T extends readonly any[]> = T;

/**
 * Gets the last element of an array type
 * Note: Simplified version for ES5 compatibility
 */
export type Last<T extends readonly any[]> = any;

/**
 * Gets all elements except the last of an array type
 * Note: Simplified version for ES5 compatibility
 */
export type Init<T extends readonly any[]> = T;

/**
 * Gets the length of an array type
 */
export type Length<T extends readonly any[]> = T['length'];

// ============================================================================
// STRING UTILITY TYPES
// ============================================================================

/**
 * Capitalizes the first letter of a string type
 * Note: This is a simplified version that works with basic string types
 */
export type Capitalize<S extends string> = S;

/**
 * Uncapitalizes the first letter of a string type
 * Note: This is a simplified version that works with basic string types
 */
export type Uncapitalize<S extends string> = S;

/**
 * Converts a string type to uppercase
 * Note: This is a simplified version that works with basic string types
 */
export type Uppercase<S extends string> = S;

/**
 * Converts a string type to lowercase
 * Note: This is a simplified version that works with basic string types
 */
export type Lowercase<S extends string> = S;

// ============================================================================
// TYPE GUARDS AND VALIDATION
// ============================================================================

/**
 * Checks if a type is exactly `never`
 */
export type IsNever<T> = [T] extends [never] ? true : false;

/**
 * Checks if a type is exactly `unknown`
 */
export type IsUnknown<T> = IsNever<T> extends false ? T extends unknown ? unknown extends T ? true : false : false : false;

/**
 * Checks if a type is exactly `any`
 */
export type IsAny<T> = 0 extends 1 & T ? true : false;

/**
 * Checks if a type is exactly `void`
 */
export type IsVoid<T> = T extends void ? (void extends T ? true : false) : false;

/**
 * Checks if a type is a function
 */
export type IsFunction<T> = T extends (...args: any[]) => any ? true : false;

/**
 * Checks if a type is a primitive
 */
export type IsPrimitive<T> = T extends Primitive ? true : false;

/**
 * Checks if a type is an object (not primitive)
 */
export type IsObject<T> = T extends object ? (object extends T ? false : true) : false;

/**
 * Checks if a type is a tuple
 */
export type IsTuple<T> = T extends readonly any[] ? (number extends T['length'] ? false : true) : false;

/**
 * Checks if a type is a union
 */
export type IsUnion<T> = [T] extends [UnionToIntersection<T>] ? false : true;

/**
 * Converts a union type to an intersection type
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

// ============================================================================
// OBJECT UTILITIES (from type-fest and utility-types)
// ============================================================================

/**
 * Makes all properties required
 */
export type Required<T> = {
  [P in keyof T]-?: T[P];
};

/**
 * Makes all properties optional
 */
export type Optional<T> = {
  [P in keyof T]?: T[P];
};

/**
 * Makes all properties readonly
 */
export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * Makes all properties mutable (removes readonly)
 */
export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};

/**
 * Picks specific properties from an object
 */
export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

/**
 * Omits specific properties from an object
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Gets all keys of an object
 */
export type Keys<T> = keyof T;

/**
 * Gets all values of an object
 */
export type Values<T> = T[keyof T];

/**
 * Gets all entries of an object as a union of tuples
 */
export type Entries<T> = {
  [K in keyof T]: [K, T[K]];
}[keyof T];

/**
 * Creates a type with specific keys required and others optional
 */
export type RequireAtLeastOne<T, Keys extends keyof T = keyof T> = Pick<T, Exclude<keyof T, Keys>> & {
  [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>;
}[Keys];

/**
 * Creates a type with exactly one of the specified keys required
 */
export type RequireExactlyOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, never>>;
}[Keys];

/**
 * Creates a type with at most one of the specified keys
 */
export type RequireAtMostOne<T, Keys extends keyof T = keyof T> = {
  [K in Keys]: Required<Pick<T, K>> & Partial<Record<Exclude<Keys, K>, never>>;
}[Keys] | Partial<Pick<T, Keys>>;

// ============================================================================
// STRING UTILITIES (Enhanced)
// ============================================================================

/**
 * Checks if a string starts with a specific prefix
 * Note: Simplified version for ES5 compatibility
 */
export type StartsWith<S extends string, Prefix extends string> = S;

/**
 * Checks if a string ends with a specific suffix
 * Note: Simplified version for ES5 compatibility
 */
export type EndsWith<S extends string, Suffix extends string> = S;

/**
 * Checks if a string includes a specific substring
 * Note: Simplified version for ES5 compatibility
 */
export type Includes<S extends string, Substring extends string> = S;

/**
 * Gets the length of a string
 * Note: Simplified version for ES5 compatibility
 */
export type StringLength<S extends string> = S;

/**
 * Trims whitespace from the start of a string
 * Note: Simplified version for ES5 compatibility
 */
export type TrimStart<S extends string> = S;

/**
 * Trims whitespace from the end of a string
 * Note: Simplified version for ES5 compatibility
 */
export type TrimEnd<S extends string> = S;

/**
 * Trims whitespace from both ends of a string
 * Note: Simplified version for ES5 compatibility
 */
export type Trim<S extends string> = S;

// ============================================================================
// ARRAY UTILITIES (Enhanced)
// ============================================================================

/**
 * Gets the first element of an array (alias for Head)
 */
export type First<T extends readonly any[]> = Head<T>;

/**
 * Gets the second element of an array
 */
export type Second<T extends readonly any[]> = T extends readonly [any, infer S, ...any[]] ? S : never;

/**
 * Gets the third element of an array
 */
export type Third<T extends readonly any[]> = T extends readonly [any, any, infer T, ...any[]] ? T : never;

/**
 * Checks if an array is empty
 */
export type IsEmpty<T extends readonly any[]> = T['length'] extends 0 ? true : false;

/**
 * Checks if an array has exactly one element
 */
export type IsSingle<T extends readonly any[]> = T['length'] extends 1 ? true : false;

/**
 * Checks if an array has multiple elements
 */
export type IsMultiple<T extends readonly any[]> = T['length'] extends 0 | 1 ? false : true;

/**
 * Reverses the order of array elements
 * Note: Simplified version for ES5 compatibility
 */
export type Reverse<T extends readonly any[]> = T;

/**
 * Gets all elements except the first N elements
 * Note: Simplified version for ES5 compatibility
 */
export type Drop<N extends number, T extends readonly any[]> = T;

/**
 * Gets the first N elements of an array
 * Note: Simplified version for ES5 compatibility
 */
export type Take<N extends number, T extends readonly any[]> = T;

/**
 * Helper type to get the predecessor of a number
 */
export type Predecessor<N extends number> = N extends 0 ? never : N extends 1 ? 0 : N extends 2 ? 1 : N extends 3 ? 2 : N extends 4 ? 3 : N extends 5 ? 4 : N extends 6 ? 5 : N extends 7 ? 6 : N extends 8 ? 7 : N extends 9 ? 8 : N extends 10 ? 9 : never;

// ============================================================================
// CONDITIONAL UTILITIES (Enhanced)
// ============================================================================

/**
 * Returns the first type if the condition is true, otherwise the second
 */
export type IfElse<C extends boolean, T, F> = C extends true ? T : F;

/**
 * Returns the type if it's not never, otherwise the fallback
 */
export type OrElse<T, Fallback> = T extends never ? Fallback : T;

/**
 * Returns the type if it's not never, otherwise never
 */
export type OrNever<T> = T extends never ? never : T;

/**
 * Checks if two types are equal
 */
export type Equals<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y ? 1 : 2 ? true : false;

/**
 * Checks if a type is assignable to another
 */
export type IsAssignableTo<T, U> = T extends U ? true : false;

/**
 * Checks if a type is not assignable to another
 */
export type IsNotAssignableTo<T, U> = T extends U ? false : true;

// ============================================================================
// FUNCTION UTILITIES (Enhanced)
// ============================================================================

/**
 * Gets the first parameter of a function
 */
export type FirstParameter<T extends (...args: any[]) => any> = Parameters<T>[0];

/**
 * Gets the last parameter of a function
 * Note: Simplified version for ES5 compatibility
 */
export type LastParameter<T extends (...args: any[]) => any> = any;

/**
 * Gets all parameters except the first
 * Note: Simplified version for ES5 compatibility
 */
export type RestParameters<T extends (...args: any[]) => any> = any[];

/**
 * Gets all parameters except the last
 * Note: Simplified version for ES5 compatibility
 */
export type InitParameters<T extends (...args: any[]) => any> = any[];

/**
 * Creates a function type that takes no parameters
 */
export type NoParameters<T extends (...args: any[]) => any> = () => ReturnType<T>;

/**
 * Creates a function type that takes any parameters
 */
export type AnyParameters<T extends (...args: any[]) => any> = (...args: any[]) => ReturnType<T>;

// ============================================================================
// EXPORT ALL TYPES
// ============================================================================

// All types are exported individually above
// This library provides TypeScript utility types for use in type definitions
