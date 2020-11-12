var BLACKLIST = [
  // FIXME: These extensions aren't working yet
  'extensions_ext-frag-depth',
  'extensions_ext-shader-texture-lod',
  'extensions_webgl-draw-buffers'
]

/*
var WHITELIST = [
  // DEBUG ONLY
  // 'extensions_oes-vertex-array-object',
  // 'extensions_oes-vertex-array-object-bufferData'
  'extensions_angle-instanced-arrays'
]
*/

require('./util/conformance')(function (str) {
  return str.indexOf('extensions') >= 0 && BLACKLIST.indexOf(str) < 0
  // return str.indexOf('extensions') >= 0 && WHITELIST.indexOf(str) >= 0 && BLACKLIST.indexOf(str) < 0
})
