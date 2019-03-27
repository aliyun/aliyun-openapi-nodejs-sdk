
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-30';
    super(config);
  }

  /**
   * @param {String} instanceName - instanceName. required.
   * @param {String} projectName - projectName. required.
   * @param {String} flowName - flowName. required.
   * @param {String} bizdate - bizdate. required.
   * @param {String} nodeName - nodeName. required.
   * @param {String} nodePara - nodePara. optional.
   */
  createDag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceName')) {
      throw new TypeError('parameter "instanceName" is required');
    }

    if (!hasOwnProperty(params, 'projectName')) {
      throw new TypeError('parameter "projectName" is required');
    }

    if (!hasOwnProperty(params, 'flowName')) {
      throw new TypeError('parameter "flowName" is required');
    }

    if (!hasOwnProperty(params, 'bizdate')) {
      throw new TypeError('parameter "bizdate" is required');
    }

    if (!hasOwnProperty(params, 'nodeName')) {
      throw new TypeError('parameter "nodeName" is required');
    }

    options.method = 'POST';
    return this.request('CreateDag', params, options);
  }

  /**
   * @param {String} projectName - projectName. required.
   * @param {Long} dagId - dagId. required.
   */
  searchNodeInstanceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'projectName')) {
      throw new TypeError('parameter "projectName" is required');
    }

    if (!hasOwnProperty(params, 'dagId')) {
      throw new TypeError('parameter "dagId" is required');
    }

    return this.request('SearchNodeInstanceList', params, options);
  }

}

module.exports = Client;
