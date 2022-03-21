// 函数
function FuncCase<T>(params: T): T {
  return params;
}

const a = FuncCase<number>(123);

// 接口类型
interface InterfaceCase<T> {
  property: T;
}

const object1: InterfaceCase<Boolean> = { property: true };

// 类型别名 & 泛型默认值
type Praise<
  T extends string,
  R extends string = "is very handSome"
> = `${T} ${R}`;

type PraiseShiYi = Praise<"ShiYi">;

type PraiseErLong = Praise<"ErLone", "你好机车哦！">;
