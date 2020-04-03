# next-points2range
> Points to range for next.

## installation
```bash
npm install -S @feizheng/next-points2range
```

## usage
```js
import '@feizheng/next-points2range';

const res = nx.points2range(1, 6, -1);

// results:
[
  [ 0, 1 ], 
  [ 1, 6 ], 
  [ 6, -1 ], 
  [ -1 ] 
]
```
