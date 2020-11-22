# next-points2range
> Points to range for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-points2range
```

## usage
```js
import '@jswork/next-points2range';

const res = nx.points2range(1, 6, -1);

// results:
[
  [ 0, 1 ], 
  [ 1, 6 ], 
  [ 6, -1 ], 
  [ -1 ] 
]
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-points2range/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-points2range
[version-url]: https://npmjs.org/package/@jswork/next-points2range

[license-image]: https://img.shields.io/npm/l/@jswork/next-points2range
[license-url]: https://github.com/afeiship/next-points2range/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-points2range
[size-url]: https://github.com/afeiship/next-points2range/blob/master/dist/next-points2range.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-points2range
[download-url]: https://www.npmjs.com/package/@jswork/next-points2range
