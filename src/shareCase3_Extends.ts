// 继承
class Animal {
  breathe() {}
}

class Dog extends Animal {
  wang() {}
}

// 泛型约束
type Say<T extends string> = T;

type TestSay = Say<"123">;
// type TestSay1 = Say<123>;

// 模式匹配 & 条件类型
type Match<T extends string> = T extends "a" ? true : false;

type TestMatch = Match<"a">;
type TestMatch1 = Match<"b">;

// 模式匹配（父子类型）
// 关于 Object 的父子类型
type MatchObject<T extends Object> = T extends { breathe: boolean }
  ? true
  : false;

type TestMatchObject = MatchObject<{ breathe: true; other: string }>;
type TestMatchObject1 = MatchObject<{ other: string }>;

// 关于联合类型的父子类型
type MatchUnion<T extends string> = T extends "a" | "b" ? true : false;

type testMatchUnion = MatchUnion<"a">;
type testMatchUnion1 = MatchUnion<"c">;

// TODO: 分布式

// 基于父子类型来判断两个类型是否相等

type IsEqual<T, R> = T extends R ? (R extends T ? true : false) : false;

type testIsEqual = IsEqual<"a", "a">;
type testIsEqual1 = IsEqual<
  { breathe: boolean },
  { breathe: boolean; other: string }
>;
