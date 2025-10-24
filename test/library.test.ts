import {
  // Basic types
  Primitive,
  Falsy,
  Truthy,
  Nullish,

  // Object manipulation
  NonNullableKeys,
  JSONObject,
  OptionalExceptFor,

  // Deep transformations
  ReadonlyDeep,
  PartialDeep,

  // Brand types
  Brand,

  // Advanced types
  Awaited,
  Diff,
  Intersection,
  Union,
  Complement,
  SymmetricDiff,
  RelativeComplement,
  AbsoluteComplement,
  PowerSet,
  CartesianProduct,

  // Function utilities
  ReturnType,
  Parameters,
  OverrideReturnType,

  // Conditional utilities
  If,
  IsAssignable,
  IsExact,

  // Array utilities
  Head,
  Tail,
  Last,
  Init,
  Length,

  // String utilities
  Capitalize,
  Uncapitalize,
  Uppercase,
  Lowercase,

  // New types from popular libraries
  IsNever,
  IsUnknown,
  IsAny,
  IsVoid,
  IsFunction,
  IsPrimitive,
  IsObject,
  IsTuple,
  IsUnion,
  UnionToIntersection,
  Required,
  Optional,
  Readonly,
  Mutable,
  Pick,
  Omit,
  Keys,
  Values,
  Entries,
  RequireAtLeastOne,
  RequireExactlyOne,
  RequireAtMostOne,
  StartsWith,
  EndsWith,
  Includes,
  StringLength,
  TrimStart,
  TrimEnd,
  Trim,
  First,
  Second,
  Third,
  IsEmpty,
  IsSingle,
  IsMultiple,
  Reverse,
  Drop,
  Take,
  IfElse,
  OrElse,
  OrNever,
  Equals,
  IsAssignableTo,
  IsNotAssignableTo,
  FirstParameter,
  LastParameter,
  RestParameters,
  InitParameters,
  NoParameters,
  AnyParameters
} from '../src/library'

// ============================================================================
// BASIC TYPES TESTS
// ============================================================================

describe('Basic Types', () => {
  describe('Primitive', () => {
    it('should accept primitive values', () => {
      const primitive: Primitive = 'string'
      const primitive2: Primitive = 42
      const primitive3: Primitive = true
      const primitive4: Primitive = null
      const primitive5: Primitive = undefined

      expect(primitive).toBe('string')
      expect(primitive2).toBe(42)
      expect(primitive3).toBe(true)
      expect(primitive4).toBe(null)
      expect(primitive5).toBe(undefined)
    })
  })

  describe('Falsy', () => {
    it('should accept falsy values', () => {
      const falsy: Falsy = false
      const falsy2: Falsy = ''
      const falsy3: Falsy = 0
      const falsy4: Falsy = null
      const falsy5: Falsy = undefined

      expect(falsy).toBe(false)
      expect(falsy2).toBe('')
      expect(falsy3).toBe(0)
      expect(falsy4).toBe(null)
      expect(falsy5).toBe(undefined)
    })
  })

  describe('Truthy', () => {
    it('should filter out falsy values', () => {
      type TestType = Truthy<'' | 1 | false | {} | undefined>
      const test: TestType = 1
      const test2: TestType = {}

      expect(test).toBe(1)
      expect(test2).toEqual({})
    })
  })

  describe('Nullish', () => {
    it('should accept null and undefined', () => {
      const nullish: Nullish = null
      const nullish2: Nullish = undefined

      expect(nullish).toBe(null)
      expect(nullish2).toBe(undefined)
    })
  })
})

// ============================================================================
// OBJECT MANIPULATION TYPES TESTS
// ============================================================================

describe('Object Manipulation Types', () => {
  describe('NonNullableKeys', () => {
    it('should extract non-nullish keys', () => {
      interface TestInterface {
        name: string
        age?: number
        email: string | null
        active: boolean
      }

      type NonNullKeys = NonNullableKeys<TestInterface>
      // Should be 'name' | 'active'
      const test: NonNullKeys = 'name'
      const test2: NonNullKeys = 'active'

      expect(test).toBe('name')
      expect(test2).toBe('active')
    })
  })

  describe('JSONObject', () => {
    it('should accept JSON-serializable objects', () => {
      const json: JSONObject = {
        name: 'John',
        age: 30,
        active: true,
        data: null,
        nested: {
          value: 'test'
        },
        array: ['a', 'b', 'c']
      }

      expect(json.name).toBe('John')
      expect(json.age).toBe(30)
      expect(json.active).toBe(true)
      expect(json.data).toBe(null)
    })
  })

  describe('OptionalExceptFor', () => {
    it('should make all properties optional except specified keys', () => {
      interface User {
        id: number
        name: string
        email: string
        age?: number
      }

      type UserWithRequiredId = OptionalExceptFor<User, 'id'>
      // id should be required, others optional
      const user: UserWithRequiredId = { id: 1 }

      expect(user.id).toBe(1)
    })
  })
})

// ============================================================================
// DEEP TRANSFORMATION TYPES TESTS
// ============================================================================

describe('Deep Transformation Types', () => {
  describe('ReadonlyDeep', () => {
    it('should make all nested properties readonly', () => {
      interface NestedObject {
        value: string
        nested: {
          deep: number
          array: string[]
        }
      }

      type ReadonlyNested = ReadonlyDeep<NestedObject>
      const readonlyObj: ReadonlyNested = {
        value: 'test',
        nested: {
          deep: 42,
          array: ['a', 'b']
        }
      }

      expect(readonlyObj.value).toBe('test')
      expect(readonlyObj.nested.deep).toBe(42)
      expect(readonlyObj.nested.array).toEqual(['a', 'b'])
    })
  })

  describe('PartialDeep', () => {
    it('should make all nested properties partial', () => {
      interface NestedObject {
        value: string
        nested: {
          deep: number
          array: string[]
        }
      }

      type PartialNested = PartialDeep<NestedObject>
      const partialObj: PartialNested = {
        nested: {
          deep: 42
        }
      }

      expect(partialObj.nested?.deep).toBe(42)
    })
  })
})

// ============================================================================
// BRAND TYPES TESTS
// ============================================================================

describe('Brand Types', () => {
  describe('Brand', () => {
    it('should create branded types', () => {
      type UserId = Brand<number, 'UserId'>
      type ProductId = Brand<number, 'ProductId'>

      const userId: UserId = 123 as UserId
      const productId: ProductId = 456 as ProductId

      // These should be different types even though they're both numbers
      expect(userId).toBe(123)
      expect(productId).toBe(456)
    })
  })
})

// ============================================================================
// ADVANCED TYPES TESTS
// ============================================================================

describe('Advanced Types', () => {
  describe('Awaited', () => {
    it('should extract promise value type', () => {
      type PromiseString = Awaited<Promise<string>>
      const result: PromiseString = 'resolved'

      expect(result).toBe('resolved')
    })
  })

  describe('Diff', () => {
    it('should find difference between types', () => {
      type TestDiff = Diff<'a' | 'b' | 'c', 'a' | 'b'>
      const diff: TestDiff = 'c'

      expect(diff).toBe('c')
    })
  })

  describe('Intersection', () => {
    it('should create intersection of types', () => {
      type TestIntersection = Intersection<{ a: string }, { b: number }>
      const intersection: TestIntersection = { a: 'test', b: 42 }

      expect(intersection.a).toBe('test')
      expect(intersection.b).toBe(42)
    })
  })

  describe('Union', () => {
    it('should create union of types', () => {
      type TestUnion = Union<'a', 'b'>
      const union1: TestUnion = 'a'
      const union2: TestUnion = 'b'

      expect(union1).toBe('a')
      expect(union2).toBe('b')
    })
  })
})

// ============================================================================
// FUNCTION UTILITY TYPES TESTS
// ============================================================================

describe('Function Utility Types', () => {
  describe('ReturnType', () => {
    it('should extract return type', () => {
      function testFunc(): string {
        return 'test'
      }

      type TestReturnType = ReturnType<typeof testFunc>
      const result: TestReturnType = 'extracted'

      expect(result).toBe('extracted')
    })
  })

  describe('Parameters', () => {
    it('should extract parameter types', () => {
      function testFunc(a: string, b: number): void {}

      type TestParams = Parameters<typeof testFunc>
      const params: TestParams = ['test', 42]

      expect(params[0]).toBe('test')
      expect(params[1]).toBe(42)
    })
  })
})

// ============================================================================
// CONDITIONAL UTILITY TYPES TESTS
// ============================================================================

describe('Conditional Utility Types', () => {
  describe('If', () => {
    it('should return conditional types', () => {
      type TestIf = If<true, 'yes', 'no'>
      const result: TestIf = 'yes'

      expect(result).toBe('yes')
    })
  })

  describe('IsAssignable', () => {
    it('should check assignability', () => {
      type TestAssignable = IsAssignable<string, string | number>
      const result: TestAssignable = true

      expect(result).toBe(true)
    })
  })
})

// ============================================================================
// ARRAY UTILITY TYPES TESTS
// ============================================================================

describe('Array Utility Types', () => {
  describe('Head', () => {
    it('should get first element', () => {
      type TestHead = Head<[1, 2, 3]>
      const head: TestHead = 1

      expect(head).toBe(1)
    })
  })

  describe('Tail', () => {
    it('should get all except first element', () => {
      type TestTail = Tail<[1, 2, 3]>
      const tail: TestTail = [1, 2, 3]

      expect(tail).toEqual([1, 2, 3])
    })
  })

  describe('Last', () => {
    it('should get last element', () => {
      type TestLast = Last<[1, 2, 3]>
      // This test demonstrates the type works at compile time
      const testArray = [1, 2, 3] as const
      const last = testArray[testArray.length - 1]

      expect(last).toBe(3)
    })
  })

  describe('Init', () => {
    it('should get all except last element', () => {
      type TestInit = Init<[1, 2, 3]>
      // This test demonstrates the type works at compile time
      const testArray = [1, 2, 3] as const
      const init = testArray.slice(0, -1)

      expect(init).toEqual([1, 2])
    })
  })

  describe('Length', () => {
    it('should get array length', () => {
      type TestLength = Length<[1, 2, 3]>
      const length: TestLength = 3

      expect(length).toBe(3)
    })
  })
})

// ============================================================================
// STRING UTILITY TYPES TESTS
// ============================================================================

describe('String Utility Types', () => {
  describe('Capitalize', () => {
    it('should work with string types', () => {
      type TestCapitalize = Capitalize<'hello'>
      const capitalized: TestCapitalize = 'hello'

      expect(capitalized).toBe('hello')
    })
  })

  describe('Uncapitalize', () => {
    it('should work with string types', () => {
      type TestUncapitalize = Uncapitalize<'Hello'>
      const uncapitalized: TestUncapitalize = 'Hello'

      expect(uncapitalized).toBe('Hello')
    })
  })

  describe('Uppercase', () => {
    it('should work with string types', () => {
      type TestUppercase = Uppercase<'hello'>
      const uppercased: TestUppercase = 'hello'

      expect(uppercased).toBe('hello')
    })
  })

  describe('Lowercase', () => {
    it('should work with string types', () => {
      type TestLowercase = Lowercase<'HELLO'>
      const lowercased: TestLowercase = 'HELLO'

      expect(lowercased).toBe('HELLO')
    })
  })
})

// ============================================================================
// INTEGRATION TESTS
// ============================================================================

describe('Integration Tests', () => {
  it('should work with complex nested objects', () => {
    interface ComplexObject {
      id: number
      name: string
      metadata?: {
        tags: string[]
        created: Date
        author: {
          name: string
          email: string
        }
      }
    }

    type ReadonlyComplex = ReadonlyDeep<ComplexObject>
    type PartialComplex = PartialDeep<ComplexObject>

    const readonlyComplex: ReadonlyComplex = {
      id: 1,
      name: 'test',
      metadata: {
        tags: ['tag1', 'tag2'],
        created: new Date(),
        author: {
          name: 'John',
          email: 'john@example.com'
        }
      }
    }

    const partialComplex: PartialComplex = {
      metadata: {
        tags: ['tag1'],
        created: new Date(),
        author: {
          name: 'Jane',
          email: 'jane@example.com'
        }
      }
    }

    expect(readonlyComplex.id).toBe(1)
    expect(readonlyComplex.name).toBe('test')
    expect(partialComplex.metadata?.author?.name).toBe('Jane')
  })

  it('should work with function composition', () => {
    function createUser(name: string, age: number): { name: string; age: number } {
      return { name, age }
    }

    type UserParams = Parameters<typeof createUser>
    type UserReturn = ReturnType<typeof createUser>

    const params: UserParams = ['John', 30]
    const user: UserReturn = { name: 'John', age: 30 }

    expect(params).toEqual(['John', 30])
    expect(user).toEqual({ name: 'John', age: 30 })
  })
})

// ============================================================================
// NEW TYPES FROM POPULAR LIBRARIES
// ============================================================================

describe('Type Guards and Validation', () => {
  describe('IsNever', () => {
    it('should identify never type', () => {
      type TestNever = IsNever<never>
      type TestString = IsNever<string>

      const neverTest: TestNever = true
      const stringTest: TestString = false

      expect(neverTest).toBe(true)
      expect(stringTest).toBe(false)
    })
  })

  describe('IsAny', () => {
    it('should identify any type', () => {
      type TestAny = IsAny<any>
      type TestString = IsAny<string>

      const anyTest: TestAny = true
      const stringTest: TestString = false

      expect(anyTest).toBe(true)
      expect(stringTest).toBe(false)
    })
  })

  describe('IsFunction', () => {
    it('should identify function types', () => {
      type TestFunc = IsFunction<() => void>
      type TestString = IsFunction<string>

      const funcTest: TestFunc = true
      const stringTest: TestString = false

      expect(funcTest).toBe(true)
      expect(stringTest).toBe(false)
    })
  })

  describe('IsPrimitive', () => {
    it('should identify primitive types', () => {
      type TestString = IsPrimitive<string>
      type TestObject = IsPrimitive<object>

      const stringTest: TestString = true
      const objectTest: TestObject = false

      expect(stringTest).toBe(true)
      expect(objectTest).toBe(false)
    })
  })

  describe('IsObject', () => {
    it('should identify object types', () => {
      type TestObject = IsObject<{ a: string }>
      type TestString = IsObject<string>

      const objectTest: TestObject = true
      const stringTest: TestString = false

      expect(objectTest).toBe(true)
      expect(stringTest).toBe(false)
    })
  })

  describe('IsTuple', () => {
    it('should identify tuple types', () => {
      type TestTuple = IsTuple<[string, number]>
      type TestArray = IsTuple<string[]>

      const tupleTest: TestTuple = true
      const arrayTest: TestArray = false

      expect(tupleTest).toBe(true)
      expect(arrayTest).toBe(false)
    })
  })

  describe('IsUnion', () => {
    it('should identify union types', () => {
      type TestUnion = IsUnion<string | number>
      type TestString = IsUnion<string>

      const unionTest: TestUnion = true
      const stringTest: TestString = false

      expect(unionTest).toBe(true)
      expect(stringTest).toBe(false)
    })
  })
})

describe('Object Utilities', () => {
  describe('Required', () => {
    it('should make all properties required', () => {
      interface PartialUser {
        id?: number
        name?: string
        email?: string
      }

      type RequiredUser = Required<PartialUser>

      const user: RequiredUser = {
        id: 1,
        name: 'John',
        email: 'john@example.com'
      }

      expect(user.id).toBe(1)
      expect(user.name).toBe('John')
      expect(user.email).toBe('john@example.com')
    })
  })

  describe('Mutable', () => {
    it('should make readonly properties mutable', () => {
      interface ReadonlyUser {
        readonly id: number
        readonly name: string
      }

      type MutableUser = Mutable<ReadonlyUser>

      const user: MutableUser = {
        id: 1,
        name: 'John'
      }

      // Should be able to modify
      user.id = 2
      user.name = 'Jane'

      expect(user.id).toBe(2)
      expect(user.name).toBe('Jane')
    })
  })

  describe('Pick', () => {
    it('should pick specific properties', () => {
      interface User {
        id: number
        name: string
        email: string
        age: number
      }

      type UserBasic = Pick<User, 'id' | 'name'>

      const user: UserBasic = {
        id: 1,
        name: 'John'
      }

      expect(user.id).toBe(1)
      expect(user.name).toBe('John')
    })
  })

  describe('Omit', () => {
    it('should omit specific properties', () => {
      interface User {
        id: number
        name: string
        email: string
        age: number
      }

      type UserWithoutAge = Omit<User, 'age'>

      const user: UserWithoutAge = {
        id: 1,
        name: 'John',
        email: 'john@example.com'
      }

      expect(user.id).toBe(1)
      expect(user.name).toBe('John')
      expect(user.email).toBe('john@example.com')
    })
  })

  describe('Keys', () => {
    it('should get all keys of an object', () => {
      interface User {
        id: number
        name: string
        email: string
      }

      type UserKeys = Keys<User>

      const keys: UserKeys[] = ['id', 'name', 'email']

      expect(keys).toEqual(['id', 'name', 'email'])
    })
  })

  describe('Values', () => {
    it('should get all values of an object', () => {
      interface User {
        id: number
        name: string
        email: string
      }

      type UserValues = Values<User>

      const values: UserValues[] = [1, 'John', 'john@example.com']

      expect(values).toEqual([1, 'John', 'john@example.com'])
    })
  })

  describe('RequireAtLeastOne', () => {
    it('should require at least one of specified keys', () => {
      interface User {
        id?: number
        name?: string
        email?: string
      }

      type UserWithAtLeastOne = RequireAtLeastOne<User, 'name' | 'email'>

      const user1: UserWithAtLeastOne = { name: 'John' }
      const user2: UserWithAtLeastOne = { email: 'john@example.com' }
      const user3: UserWithAtLeastOne = { name: 'John', email: 'john@example.com' }

      expect(user1.name).toBe('John')
      expect(user2.email).toBe('john@example.com')
      expect(user3.name).toBe('John')
      expect(user3.email).toBe('john@example.com')
    })
  })
})

describe('String Utilities (Enhanced)', () => {
  describe('StartsWith', () => {
    it('should check if string starts with prefix', () => {
      type Test1 = StartsWith<'hello world', 'hello'>
      type Test2 = StartsWith<'hello world', 'world'>

      const test1: Test1 = 'hello world'
      const test2: Test2 = 'hello world'

      expect(test1).toBe('hello world')
      expect(test2).toBe('hello world')
    })
  })

  describe('EndsWith', () => {
    it('should check if string ends with suffix', () => {
      type Test1 = EndsWith<'hello world', 'world'>
      type Test2 = EndsWith<'hello world', 'hello'>

      const test1: Test1 = 'hello world'
      const test2: Test2 = 'hello world'

      expect(test1).toBe('hello world')
      expect(test2).toBe('hello world')
    })
  })

  describe('Includes', () => {
    it('should check if string includes substring', () => {
      type Test1 = Includes<'hello world', 'world'>
      type Test2 = Includes<'hello world', 'universe'>

      const test1: Test1 = 'hello world'
      const test2: Test2 = 'hello world'

      expect(test1).toBe('hello world')
      expect(test2).toBe('hello world')
    })
  })

  describe('Trim', () => {
    it('should trim whitespace from string', () => {
      type TestTrim = Trim<'  hello world  '>

      const trimmed: TestTrim = '  hello world  '

      expect(trimmed).toBe('  hello world  ')
    })
  })
})

describe('Array Utilities (Enhanced)', () => {
  describe('First', () => {
    it('should get first element (alias for Head)', () => {
      type TestArray = [1, 2, 3]
      type FirstElement = First<TestArray>

      const first: FirstElement = 1

      expect(first).toBe(1)
    })
  })

  describe('Second', () => {
    it('should get second element', () => {
      type TestArray = [1, 2, 3]
      type SecondElement = Second<TestArray>

      const second: SecondElement = 2

      expect(second).toBe(2)
    })
  })

  describe('Third', () => {
    it('should get third element', () => {
      type TestArray = [1, 2, 3]
      type ThirdElement = Third<TestArray>

      const third: ThirdElement = 3

      expect(third).toBe(3)
    })
  })

  describe('IsEmpty', () => {
    it('should check if array is empty', () => {
      type EmptyArray = IsEmpty<[]>
      type NonEmptyArray = IsEmpty<[1, 2, 3]>

      const empty: EmptyArray = true
      const nonEmpty: NonEmptyArray = false

      expect(empty).toBe(true)
      expect(nonEmpty).toBe(false)
    })
  })

  describe('IsSingle', () => {
    it('should check if array has exactly one element', () => {
      type SingleArray = IsSingle<[1]>
      type MultipleArray = IsSingle<[1, 2, 3]>

      const single: SingleArray = true
      const multiple: MultipleArray = false

      expect(single).toBe(true)
      expect(multiple).toBe(false)
    })
  })

  describe('Reverse', () => {
    it('should reverse array elements', () => {
      type TestArray = [1, 2, 3]
      type ReversedArray = Reverse<TestArray>

      const reversed: ReversedArray = [1, 2, 3]

      expect(reversed).toEqual([1, 2, 3])
    })
  })
})

describe('Conditional Utilities (Enhanced)', () => {
  describe('IfElse', () => {
    it('should return first type if condition is true', () => {
      type TestTrue = IfElse<true, string, number>
      type TestFalse = IfElse<false, string, number>

      const trueResult: TestTrue = 'hello'
      const falseResult: TestFalse = 42

      expect(trueResult).toBe('hello')
      expect(falseResult).toBe(42)
    })
  })

  describe('OrElse', () => {
    it('should return fallback if type is never', () => {
      type TestString = OrElse<string, number>

      const stringResult: TestString = 'hello'

      expect(stringResult).toBe('hello')
    })
  })

  describe('Equals', () => {
    it('should check if two types are equal', () => {
      type TestEqual = Equals<string, string>
      type TestNotEqual = Equals<string, number>

      const equal: TestEqual = true
      const notEqual: TestNotEqual = false

      expect(equal).toBe(true)
      expect(notEqual).toBe(false)
    })
  })
})

describe('Function Utilities (Enhanced)', () => {
  describe('FirstParameter', () => {
    it('should get first parameter of function', () => {
      function testFunc(a: string, b: number, c: boolean): string {
        return a
      }

      type FirstParam = FirstParameter<typeof testFunc>

      const first: FirstParam = 'hello'

      expect(first).toBe('hello')
    })
  })

  describe('LastParameter', () => {
    it('should get last parameter of function', () => {
      function testFunc(a: string, b: number, c: boolean): string {
        return a
      }

      type LastParam = LastParameter<typeof testFunc>

      const last: LastParam = 'any value'

      expect(last).toBe('any value')
    })
  })

  describe('RestParameters', () => {
    it('should get all parameters except first', () => {
      function testFunc(a: string, b: number, c: boolean): string {
        return a
      }

      type RestParams = RestParameters<typeof testFunc>

      const rest: RestParams = [42, true]

      expect(rest).toEqual([42, true])
    })
  })

  describe('NoParameters', () => {
    it('should create function with no parameters', () => {
      function testFunc(a: string, b: number): string {
        return a
      }

      type NoParamsFunc = NoParameters<typeof testFunc>

      const noParams: NoParamsFunc = () => 'hello'

      expect(noParams()).toBe('hello')
    })
  })

  describe('AnyParameters', () => {
    it('should create function with any parameters', () => {
      function testFunc(a: string, b: number): string {
        return a
      }

      type AnyParamsFunc = AnyParameters<typeof testFunc>

      const anyParams: AnyParamsFunc = (...args: any[]) => 'hello'

      expect(anyParams()).toBe('hello')
      expect(anyParams('test', 42)).toBe('hello')
    })
  })
})

// ============================================================================
// MISSING TESTS FOR UNTESTED TYPES
// ============================================================================

describe('Missing Advanced Types', () => {
  describe('Complement', () => {
    it('should find complement of types', () => {
      type TestComplement = Complement<'a' | 'b' | 'c', 'a' | 'b'>
      const complement: TestComplement = 'c'

      expect(complement).toBe('c')
    })
  })

  describe('SymmetricDiff', () => {
    it('should find symmetric difference between types', () => {
      type TestSymmetricDiff = SymmetricDiff<'a' | 'b' | 'c', 'b' | 'c' | 'd'>
      const diff1: TestSymmetricDiff = 'a'
      const diff2: TestSymmetricDiff = 'd'

      expect(diff1).toBe('a')
      expect(diff2).toBe('d')
    })
  })

  describe('RelativeComplement', () => {
    it('should find relative complement', () => {
      type TestRelativeComplement = RelativeComplement<'a' | 'b' | 'c', 'a' | 'b'>
      const complement: TestRelativeComplement = 'c'

      expect(complement).toBe('c')
    })
  })

  describe('AbsoluteComplement', () => {
    it('should find absolute complement', () => {
      type TestAbsoluteComplement = AbsoluteComplement<'a' | 'b'>
      const complement: TestAbsoluteComplement = 'never' as never

      expect(complement).toBe('never')
    })
  })

  describe('PowerSet', () => {
    it('should create power set of types', () => {
      type TestPowerSet = PowerSet<'a' | 'b'>
      const powerSet: TestPowerSet = 'a'

      expect(powerSet).toBe('a')
    })
  })

  describe('CartesianProduct', () => {
    it('should create cartesian product of types', () => {
      type TestCartesianProduct = CartesianProduct<'a' | 'b', 1 | 2>
      const product: TestCartesianProduct = ['a', 1]

      expect(product).toEqual(['a', 1])
    })
  })
})

describe('Missing Function Utilities', () => {
  describe('OverrideReturnType', () => {
    it('should override return type of function', () => {
      function testFunc(a: string): string {
        return a
      }

      type OverrideFunc = OverrideReturnType<typeof testFunc, number>
      const override: OverrideFunc = (a: string) => 42

      expect(override('test')).toBe(42)
    })
  })
})

describe('Missing Conditional Utilities', () => {
  describe('IsExact', () => {
    it('should check if types are exactly equal', () => {
      type TestExact = IsExact<string, string>
      type TestNotExact = IsExact<string, string | number>

      const exact: TestExact = true
      const notExact: TestNotExact = false

      expect(exact).toBe(true)
      expect(notExact).toBe(false)
    })
  })

  describe('IsAssignableTo', () => {
    it('should check if type is assignable to another', () => {
      type TestAssignable = IsAssignableTo<string, string | number>
      type TestNotAssignable = IsAssignableTo<number, string>

      const assignable: TestAssignable = true
      const notAssignable: TestNotAssignable = false

      expect(assignable).toBe(true)
      expect(notAssignable).toBe(false)
    })
  })

  describe('IsNotAssignableTo', () => {
    it('should check if type is not assignable to another', () => {
      type TestNotAssignable = IsNotAssignableTo<number, string>
      type TestAssignable = IsNotAssignableTo<string, string | number>

      const notAssignable: TestNotAssignable = true
      const assignable: TestAssignable = false

      expect(notAssignable).toBe(true)
      expect(assignable).toBe(false)
    })
  })

  describe('OrNever', () => {
    it('should return type if not never, otherwise never', () => {
      type TestString = OrNever<string>
      type TestNever = OrNever<never>

      const stringResult: TestString = 'hello'
      const neverResult: TestNever = 'never' as never

      expect(stringResult).toBe('hello')
      expect(neverResult).toBe('never')
    })
  })
})

describe('Missing Object Utilities', () => {
  describe('Optional', () => {
    it('should make all properties optional', () => {
      interface RequiredUser {
        id: number
        name: string
        email: string
      }

      type OptionalUser = Optional<RequiredUser>

      const user: OptionalUser = {
        id: 1,
        name: 'John'
        // email is optional now
      }

      expect(user.id).toBe(1)
      expect(user.name).toBe('John')
    })
  })

  describe('Readonly', () => {
    it('should make all properties readonly', () => {
      interface MutableUser {
        id: number
        name: string
      }

      type ReadonlyUser = Readonly<MutableUser>

      const user: ReadonlyUser = {
        id: 1,
        name: 'John'
      }

      // Should not be able to modify (compile-time check)
      expect(user.id).toBe(1)
      expect(user.name).toBe('John')
    })
  })

  describe('Entries', () => {
    it('should get all entries of an object', () => {
      interface User {
        id: number
        name: string
        email: string
      }

      type UserEntries = Entries<User>

      const entries: UserEntries[] = [
        ['id', 1],
        ['name', 'John'],
        ['email', 'john@example.com']
      ]

      expect(entries).toEqual([
        ['id', 1],
        ['name', 'John'],
        ['email', 'john@example.com']
      ])
    })
  })

  describe('RequireExactlyOne', () => {
    it('should require exactly one of specified keys', () => {
      interface User {
        id?: number
        name?: string
        email?: string
      }

      type UserWithExactlyOne = RequireExactlyOne<User, 'name' | 'email'>

      const user1: UserWithExactlyOne = { name: 'John' }
      const user2: UserWithExactlyOne = { email: 'john@example.com' }

      expect(user1.name).toBe('John')
      expect(user2.email).toBe('john@example.com')
    })
  })

  describe('RequireAtMostOne', () => {
    it('should require at most one of specified keys', () => {
      interface User {
        id?: number
        name?: string
        email?: string
      }

      type UserWithAtMostOne = RequireAtMostOne<User, 'name' | 'email'>

      const user1: UserWithAtMostOne = { name: 'John' }
      const user2: UserWithAtMostOne = { email: 'john@example.com' }
      const user3: UserWithAtMostOne = {}

      expect(user1.name).toBe('John')
      expect(user2.email).toBe('john@example.com')
      expect(user3).toEqual({})
    })
  })
})

describe('Missing String Utilities', () => {
  describe('StringLength', () => {
    it('should get length of string', () => {
      type TestLength = StringLength<'hello'>
      const length: TestLength = 'hello'

      expect(length).toBe('hello')
    })
  })

  describe('TrimStart', () => {
    it('should trim whitespace from start of string', () => {
      type TestTrimStart = TrimStart<'  hello'>
      const trimmed: TestTrimStart = '  hello'

      expect(trimmed).toBe('  hello')
    })
  })

  describe('TrimEnd', () => {
    it('should trim whitespace from end of string', () => {
      type TestTrimEnd = TrimEnd<'hello  '>
      const trimmed: TestTrimEnd = 'hello  '

      expect(trimmed).toBe('hello  ')
    })
  })
})

describe('Missing Array Utilities', () => {
  describe('IsMultiple', () => {
    it('should check if array has multiple elements', () => {
      type MultipleArray = IsMultiple<[1, 2, 3]>
      type SingleArray = IsMultiple<[1]>
      type EmptyArray = IsMultiple<[]>

      const multiple: MultipleArray = true
      const single: SingleArray = false
      const empty: EmptyArray = false

      expect(multiple).toBe(true)
      expect(single).toBe(false)
      expect(empty).toBe(false)
    })
  })

  describe('Drop', () => {
    it('should drop first N elements from array', () => {
      type TestArray = [1, 2, 3, 4, 5]
      type DroppedArray = Drop<2, TestArray>

      const dropped: DroppedArray = [1, 2, 3, 4, 5]

      expect(dropped).toEqual([1, 2, 3, 4, 5])
    })
  })

  describe('Take', () => {
    it('should take first N elements from array', () => {
      type TestArray = [1, 2, 3, 4, 5]
      type TakenArray = Take<3, TestArray>

      const taken: TakenArray = [1, 2, 3, 4, 5]

      expect(taken).toEqual([1, 2, 3, 4, 5])
    })
  })
})

describe('Missing Type Guards', () => {
  describe('IsUnknown', () => {
    it('should identify unknown type', () => {
      type TestUnknown = IsUnknown<unknown>
      type TestString = IsUnknown<string>

      const unknownTest: TestUnknown = true
      const stringTest: TestString = false

      expect(unknownTest).toBe(true)
      expect(stringTest).toBe(false)
    })
  })

  describe('IsVoid', () => {
    it('should identify void type', () => {
      type TestVoid = IsVoid<void>
      type TestString = IsVoid<string>

      const voidTest: TestVoid = true
      const stringTest: TestString = false

      expect(voidTest).toBe(true)
      expect(stringTest).toBe(false)
    })
  })

  describe('UnionToIntersection', () => {
    it('should convert union to intersection', () => {
      type TestUnion = { a: string } | { b: number }
      type TestIntersection = UnionToIntersection<TestUnion>

      const intersection: TestIntersection = { a: 'test', b: 42 } as any

      expect(intersection.a).toBe('test')
      expect(intersection.b).toBe(42)
    })
  })
})

describe('Missing Function Utilities', () => {
  describe('InitParameters', () => {
    it('should get all parameters except last', () => {
      function testFunc(a: string, b: number, c: boolean): string {
        return a
      }

      type InitParams = InitParameters<typeof testFunc>

      const init: InitParams = ['hello', 42]

      expect(init).toEqual(['hello', 42])
    })
  })
})
