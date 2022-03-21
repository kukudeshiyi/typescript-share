// 数组

type Pop<T extends unknown[]> = T extends [...infer Rest, unknown]
  ? Rest
  : never;

type TestPop = Pop<[]>;
type TestPop1 = Pop<["1"]>;
type TestPop2 = Pop<["1", "2"]>;

// 字符串
type ShiftStr<T extends string> = T extends `${string}${infer Rest}`
  ? Rest
  : never;

type TestShiftStr = ShiftStr<"">;
type TestShiftStr1 = ShiftStr<"1">;
type TestShiftStr2 = ShiftStr<"123">;

type Replace<
  Str extends string,
  Target extends string,
  ReplaceStr extends string
> = Str extends `${infer Prefix}${Target}${infer Suffix}`
  ? `${Prefix}${ReplaceStr}${Suffix}`
  : Str;

type testReplace = Replace<"ShiYiSuiDaiLe", "Sui", "Shuai">;
type testReplace1 = Replace<"ShiYiShuaiDaiLe", "Sui", "Shuai">;

// 获取返回值
async function asyncFunc() {
  return {
    name: "erLong",
    age: 12,
    property1: 1,
    property2: 2,
  };
}

type AsyncRealReturnType<T extends (...args: unknown[]) => Promise<unknown>> =
  T extends (...args: unknown[]) => Promise<infer R> ? R : never;

type asyncFuncRealReturnType = AsyncRealReturnType<typeof asyncFunc>;
