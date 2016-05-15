const express = require('express');

class BaseController {
  
  /**
   * @param  {string} mountpoint
   */
  constructor (mountpoint) {
    this.mountpoint = mountpoint;
    this.app        = express();
  }
  
  add (method, route, middleware) {
    // TODO: Check the provided method
    this.app[method](route, middleware);
  }
  
  toString () {
    const controllerName = __filename.split('.')[0];
    return `${controllerName} attached to ${this.mountpoint}`;
  }
}

module.exports = BaseController;