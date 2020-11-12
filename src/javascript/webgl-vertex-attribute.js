const { gl } = require('./native-gl')

class WebGLVertexArrayObjectAttribute {
  constructor (ctx, idx) {
    this._ctx = ctx
    this._idx = idx
    this._isPointer = false
    this._pointerBuffer = null
    this._pointerOffset = 0
    this._pointerSize = 0
    this._pointerStride = 0
    this._pointerType = gl.FLOAT
    this._pointerNormal = false
    this._divisor = 0
    this._inputSize = 4
    this._inputStride = 0
  }
}

class WebGLVertexArrayGlobalAttribute {
  constructor (idx) {
    this._idx = idx
    this._data = new Float32Array([0, 0, 0, 1])
  }
}

class WebGLVertexArrayObjectState {
  constructor (ctx) {
    const numAttribs = ctx.getParameter(ctx.MAX_VERTEX_ATTRIBS)
    this._attribs = new Array(numAttribs)
    for (let i = 0; i < numAttribs; ++i) {
      this._attribs[i] = new WebGLVertexArrayObjectAttribute(ctx, i)
    }
    this._elementArrayBufferBinding = null
  }
}

class WebGLVertexArrayGlobalState {
  constructor (ctx) {
    const numAttribs = ctx.getParameter(ctx.MAX_VERTEX_ATTRIBS)
    this._attribs = new Array(numAttribs)
    for (let i = 0; i < numAttribs; ++i) {
      this._attribs[i] = new WebGLVertexArrayGlobalAttribute(i)
    }
    this._arrayBufferBinding = null
  }
}

module.exports = {
  WebGLVertexArrayObjectAttribute,
  WebGLVertexArrayGlobalAttribute,
  WebGLVertexArrayObjectState,
  WebGLVertexArrayGlobalState
}
