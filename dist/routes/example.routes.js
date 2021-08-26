"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _ExampleController = _interopRequireDefault(require("../controllers/ExampleController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const exampleRouter = (0, _express.Router)();
const exampleController = new _ExampleController.default();
exampleRouter.get('/', exampleController.example);
var _default = exampleRouter;
exports.default = _default;