// 1、分布式类型
type DistributedType<T extends string> = T extends "a" | "c" ? "yes" : "no";
type testDistributedType = DistributedType<"a" | "d">;

// 缺陷
type testIsEqual2 = IsEqual<"a", "a" | "c">;

// 2、{} Object object {[key:string]:any} 的异同

const snackCase1: [{}, {}, {}] = [1, "2", true];
const snackCase2: [Object, Object, Object] = [1, "2", true];

// @ts-expect-error
const snackCase3: [object, object, object] = [1, "2", true];

const snackCase4: [object, object] = [{}, []];

const snackCase5: { [key: string]: any }[] = [
  { 1: "erLong" },
  { "1": "erLong" },
  { [Symbol("123")]: "erLong" },
];

// 3、另外一种判断类型完全相同的方式
type IsEqual_1<X, Y> = (<T>() => T extends X ? true : false) extends <
  U
>() => U extends Y ? true : false
  ? true
  : false;

// <T>() => T extends X ? true : false
// <U>() => U extends Y ? true : false

// type IsEqual_1<X, Y> = (<T>() => X) extends <U>() => Y ? true : false; // 佐证案例

type testIsEqual_1 = IsEqual_1<"a", "a" | "c">;
