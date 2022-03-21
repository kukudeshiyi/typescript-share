// Pick
type MyPick<T, R extends keyof T> = {
  [P in R]: T[P];
};

// params
type MyParameters<T extends (...args: unknown[]) => unknown> = T extends (
  ...args: infer R
) => unknown
  ? R
  : never;

// ReturnType
type MyReturnType<T extends (...args: unknown[]) => unknown> = T extends (
  ...args: unknown[]
) => infer R
  ? R
  : never;

// Record
type MyRecord<K extends keyof any, V> = {
  [P in K]: V;
};

// Exclude
type MyExclude<T, U> = T extends U ? never : T;

// Extract
type MyExtract<T, U> = T extends U ? T : never;

// Omit
type MyOmit<T, R extends keyof T> = Pick<T, Extract<keyof T, R>>;
