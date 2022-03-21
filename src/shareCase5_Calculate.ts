// 构造不同长度的数组
type CreateArray<
  Length extends number,
  Value extends unknown = "",
  Arr extends unknown[] = []
> = Arr["length"] extends Length
  ? Arr
  : CreateArray<Length, Value, [...Arr, Value]>;

type testCreateArray1 = CreateArray<8>;

// 加
type Add<T extends number, R extends number> = [
  ...CreateArray<T>,
  ...CreateArray<R>
]["length"];

type testAdd = Add<1, 2>;

// 减
type Minus<T extends number, R extends number> = CreateArray<T> extends [
  ...CreateArray<R>,
  ...infer Rest
]
  ? Rest["length"]
  : never;

type testMinus = Minus<2, 1>;

// 乘
type Multiply<
  T extends number,
  R extends number,
  TempArr extends unknown[] = []
> = T extends 0
  ? TempArr["length"]
  : Multiply<Minus<T, 1>, R, [...TempArr, ...CreateArray<R>]>;

type testMultiply = Multiply<100, 2>;

// 除
type Division<
  T extends number,
  R extends number,
  ResultArr extends unknown[] = []
> = T extends 0
  ? ResultArr["length"]
  : Division<Minus<T, R>, R, [...ResultArr, unknown]>;

type testDivision = Division<8, 2>;
