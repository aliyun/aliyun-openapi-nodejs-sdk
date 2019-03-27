
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-02-23';
    super(config);
  }

  /**
   */
  completeOrderInfo(params = {}, options = {}) {
    return this.request('CompleteOrderInfo', params, options);
  }

  /**
   */
  expertTestServicePayOrderCallback(params = {}, options = {}) {
    return this.request('ExpertTestServicePayOrderCallback', params, options);
  }

  /**
   */
  orderSucceededCallback(params = {}, options = {}) {
    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   */
  scriptCompleteOrderInfo(params = {}, options = {}) {
    return this.request('ScriptCompleteOrderInfo', params, options);
  }

  /**
   */
  scriptOrderSucceededCallback(params = {}, options = {}) {
    return this.request('ScriptOrderSucceededCallback', params, options);
  }

  /**
   */
  scriptRefund(params = {}, options = {}) {
    return this.request('ScriptRefund', params, options);
  }

  /**
   */
  scriptValidateOrder(params = {}, options = {}) {
    return this.request('ScriptValidateOrder', params, options);
  }

  /**
   */
  validateOrder(params = {}, options = {}) {
    return this.request('ValidateOrder', params, options);
  }

}

module.exports = Client;
