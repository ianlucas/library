(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.myLib = factory());
}(this, (function () { 'use strict';

  function myLib() {
    console.log('myLib!');
  }

  return myLib;

})));
