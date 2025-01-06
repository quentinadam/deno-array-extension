# @quentinadam/array-extension

[![JSR][jsr-image]][jsr-url] [![NPM][npm-image]][npm-url] [![CI][ci-image]][ci-url]

A library of Array extension functions.

## Usage

```ts
import ArrayExtension from '@quentinadam/array-extension';

type T = { key: string; value: number | undefined };

const array: T[] = [
  { key: 'temperature', value: 10 },
  { key: 'pressure', value: 1013 },
  { key: 'humidity', value: undefined },
];

type U = { key: string; value: number };

const mappedArray: U[] = new ArrayExtension(array).mapFilter(({ key, value }) => {
  if (value !== undefined) {
    return { key, value };
  } else {
    return undefined;
  }
});
```

[ci-image]: https://img.shields.io/github/actions/workflow/status/quentinadam/deno-array-extension/ci.yml?branch=main&logo=github&style=flat-square
[ci-url]: https://github.com/quentinadam/deno-array-extension/actions/workflows/ci.yml
[npm-image]: https://img.shields.io/npm/v/@quentinadam/array-extension.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@quentinadam/array-extension
[jsr-image]: https://jsr.io/badges/@quentinadam/array-extension?style=flat-square
[jsr-url]: https://jsr.io/@quentinadam/array-extension
