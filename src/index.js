(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  nx.points2range = function () {
    var args = arguments;
    var points = args.length === 1 ? args[0] : nx.slice(args);
    var result = [];
    points.includes(0) && points.shift();
    for (var i = 0; i < points.length; i++) {
      var current = points[i];
      if (i === 0) {
        result.push([0, current]);
      }

      if (i > 0 && i < points.length) {
        var prev = points[i - 1];
        result.push([prev, current]);
      }

      if (i === points.length - 1) {
        result.push([current]);
      }
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.points2range;
  }
})();
