"use strict";

function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

var id = 0;

function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

class C {
  constructor() {
    Object.defineProperty(this, _privateMethod, {
      value: _privateMethod2
    });
    Object.defineProperty(this, _privateAttribute, {
      writable: true,
      value: 'PRIVATE ATTR'
    });
  }

  method() {
    console.log(_classPrivateFieldLooseBase(this, _privateAttribute)[_privateAttribute]);

    _classPrivateFieldLooseBase(this, _privateMethod)[_privateMethod]();
  }

}

var _privateAttribute = _classPrivateFieldLooseKey("privateAttribute");

var _privateMethod = _classPrivateFieldLooseKey("privateMethod");

var _privateMethod2 = function _privateMethod2() {
  console.log('PRIVATE METHOD');
};

const a = new C();
a.method();