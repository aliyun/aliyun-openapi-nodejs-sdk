
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-30';
    super(config);
  }

  /**
   */
  getKpmEncryptedNodeTuplesByOrderId(params = {}, options = {}) {
    return this.request('GetKpmEncryptedNodeTuplesByOrderId', params, options);
  }

  /**
   */
  requireKpmEncryptedNodeTuples(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('RequireKpmEncryptedNodeTuples', params, options);
  }

  /**
   */
  submitKpmEncryptedNodeTupleOrder(params = {}, options = {}) {
    return this.request('SubmitKpmEncryptedNodeTupleOrder', params, options);
  }

}

module.exports = Client;
