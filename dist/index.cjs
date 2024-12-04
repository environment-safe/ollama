"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Ollama = void 0;
/*
import { isBrowser, isJsDom } from 'browser-or-node';
import * as mod from 'module';
import * as path from 'path';
let internalRequire = null;
if(typeof require !== 'undefined') internalRequire = require;
const ensureRequire = ()=> (!internalRequire) && (internalRequire = mod.createRequire(import.meta.url));
//*/

/**
 * A JSON object
 * @typedef { object } JSON
 */

class Ollama {
  constructor(options = {}) {
    this.options = options;
  }
}
exports.Ollama = Ollama;
class Chat extends Ollama {
  constructor(options = {}) {
    super(options);
  }
}
class Script extends Ollama {
  constructor(options = {}) {
    super(options);
  }
}
Ollama.Chat = Chat;
Ollama.Script = Script;