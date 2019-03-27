
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '1999-09-09';
    super(config);
  }

  /**
   */
  testDeleteFlowControl(params = {}, options = {}) {
    return this.request('TestDeleteFlowControl', params, options);
  }

  /**
   */
  testPutApiAndGetApi(params = {}, options = {}) {
    return this.request('TestPutApiAndGetApi', params, options);
  }

  /**
   */
  testPutApiFlowControl(params = {}, options = {}) {
    return this.request('TestPutApiFlowControl', params, options);
  }

  /**
   * @param {String} TestApiParameters - testApiParameters. optional.
   */
  testPutApiParametersApi(params = {}, options = {}) {
    return this.request('TestPutApiParametersApi', params, options);
  }

  /**
   */
  testPutApiResultMapping(params = {}, options = {}) {
    return this.request('TestPutApiResultMapping', params, options);
  }

  /**
   */
  a.b(params = {}, options = {}) {
    return this.request('a.b', params, options);
  }

}

module.exports = Client;
