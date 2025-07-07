// as const を学習
// 正しい使い方
const foo = {
    id: 1,
    name: 'foo',
} as const;
// readonlyなので再代入不可能
foo.id = 2;

// fooの型をexport
export type Foo = typeof foo;
// fooのキーだけを許容する型をexport
export type FooKey = keyof typeof foo;

export type Hoge = {
    id: number;
    name: string;
};

// 型を指定していると、そっちが優先されてしまう
const hoge: Hoge = {
    id: 1,
    name: 'a',
} as const;

hoge.id = 2;
