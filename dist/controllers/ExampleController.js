"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ExampleService = _interopRequireDefault(require("../services/ExampleService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExampleController {
  async example(request, response) {
    // const { email, senha } = request.body;
    const exampleService = new _ExampleService.default();
    await exampleService.execute();
    return response.json('Hello World');
  }

}

exports.default = ExampleController;