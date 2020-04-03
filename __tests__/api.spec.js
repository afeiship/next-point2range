const nx = require('@feizheng/next-js-core2');
require('../src/next-points2range');

describe('api.basic test', () => {
  test('nx.points2range 1 args is array', function () {
    var arr1 = [0, 2, 6];
    var arr2 = [2, 6];
    var arr3 = [1, 6, -1];
    var expected = [[0, 2], [2, 6], [6]];

    expect(nx.points2range(arr1)).toEqual(expected);
    expect(nx.points2range(arr2)).toEqual(expected);
    expect(nx.points2range(arr3)).toEqual([[0, 1], [1, 6], [6, -1], [-1]]);
  });

  test('nx.points2range mulit args', () => {
    var res = nx.points2range(1, 6, -1);
    expect(res).toEqual([[0, 1], [1, 6], [6, -1], [-1]]);
  });
});
