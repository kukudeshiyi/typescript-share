interface Animal {
  Name: string;
  Age: number;
  readonly Region?: string;
}

// 索引类型重映射
type Person = {
  [Key in keyof Animal as `Person${Key}`]: Animal[Key];
};

// 增加类型修饰符
type AddModifier = {
  readonly [Key in keyof Animal]?: Animal[Key];
};

// 删除类型修饰符号
type DeleteModifier = {
  -readonly [Key in keyof Animal]-?: Animal[Key];
};
