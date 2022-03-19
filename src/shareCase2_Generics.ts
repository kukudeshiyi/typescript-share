// base
function FuncCase<T>(params: T): T {
  return params;
}

const a = FuncCase<number>(123);

// other
type Praise<
  T extends string,
  R extends string = "is very handSome"
> = `${T} ${R}`;

type PraiseShiYi = Praise<"ShiYi">;

type PraiseErLong = Praise<"ErLone", "你好机车哦！">;
