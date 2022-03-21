// 1、1、2、3、5、8、13、21、34

type _Fibonacci<
  T extends number,
  Result extends number[] = [1, 1],
  Len extends number = Result["length"]
> = T extends Len ? Result[T] : _Fibonacci<T, [...Result]>;

type Fibonacci<T extends number> = T extends 0 ? T : _Fibonacci<T>;

type testFibonacci = Fibonacci<0>;
