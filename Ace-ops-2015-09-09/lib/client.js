
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-09-09';
    super(config);
  }

  /**
   * @param {String} group - group. required.
   * @param {String} name - name. required.
   * @param {String} ip - ip. required.
   * @param {String} softversion - softversion. optional.
   */
  query(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'group')) {
      throw new TypeError('parameter "group" is required');
    }

    if (!hasOwnProperty(params, 'name')) {
      throw new TypeError('parameter "name" is required');
    }

    if (!hasOwnProperty(params, 'ip')) {
      throw new TypeError('parameter "ip" is required');
    }

    return this.request('query', params, options);
  }

  /**
   * @param {String} group - group. required.
   * @param {String} name - name. required.
   * @param {String} ip - ip. required.
   * @param {String} type - type. required.
   * @param {String} softversion - softversion. optional.
   * @param {String} config - config. optional.
   */
  report(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'group')) {
      throw new TypeError('parameter "group" is required');
    }

    if (!hasOwnProperty(params, 'name')) {
      throw new TypeError('parameter "name" is required');
    }

    if (!hasOwnProperty(params, 'ip')) {
      throw new TypeError('parameter "ip" is required');
    }

    if (!hasOwnProperty(params, 'type')) {
      throw new TypeError('parameter "type" is required');
    }

    return this.request('report', params, options);
  }

}

module.exports = Client;
