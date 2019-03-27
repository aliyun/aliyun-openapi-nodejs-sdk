
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-10-10';
    super(config);
  }

  /**
   * @param {String} AliyunId - aliyunId. required.
   */
  modifyAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    return this.request('ModifyAccount', params, options);
  }

}

module.exports = Client;
