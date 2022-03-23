// 1、1、2、3、5、8、13、21、34

type _Fibonacci<
  Num extends number = 1,
  FirstArr extends unknown[] = [],
  SecondArr extends unknown[] = [unknown],
  IdxArr extends unknown[] = [unknown]
> = IdxArr["length"] extends Num
  ? SecondArr["length"]
  : _Fibonacci<
      Num,
      SecondArr,
      [...FirstArr, ...SecondArr],
      [...IdxArr, unknown]
    >;

type Fibonacci<T extends number> = _Fibonacci<T>;

type testFibonacci = Fibonacci<3>;
