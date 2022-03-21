// {} object Object {[key:string]:any}

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
