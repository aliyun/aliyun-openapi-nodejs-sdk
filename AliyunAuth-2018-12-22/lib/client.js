
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-22';
    super(config);
  }

  /**
   * @param {String} OperatorTypeEnum - operatorTypeEnum. optional. default: BUCEMPLOYEE.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} RequestWay - requestWay. optional. default: pop.
   * @param {String} UserNo - userNo. optional.
   * @param {String} RequestFromApp - requestFromApp. optional.
   * @param {String} Language - language. optional. default: CN.
   * @param {String} OperateCode - operateCode. optional.
   */
  authenticate(params = {}, options = {}) {
    return this.request('Authenticate', params, options);
  }

  /**
   * @param {String} BizNo - bizNo. optional.
   * @param {String} OperatorTypeEnum - operatorTypeEnum. optional. default: BUCEMPLOYEE.
   * @param {String} OrderVid - orderVid. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} RequestWay - requestWay. optional. default: pop.
   * @param {String} UserNo - userNo. optional.
   * @param {String} Channel - channel. optional.
   * @param {String} RequestFromApp - requestFromApp. optional.
   * @param {String} Language - language. optional. default: CN.
   */
  queryAuth(params = {}, options = {}) {
    return this.request('QueryAuth', params, options);
  }

  /**
   * @param {String} OperatorTypeEnum - operatorTypeEnum. optional.
   * @param {String} BizCode - bizCode. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} RequestWay - requestWay. optional. default: POP.
   * @param {String} UserNo - userNo. optional.
   * @param {String} Channel - channel. optional.
   * @param {String} RequestFromApp - requestFromApp. optional.
   * @param {String} Language - language. optional. default: CN.
   */
  queryInEffectQuthOrder(params = {}, options = {}) {
    return this.request('QueryInEffectQuthOrder', params, options);
  }

}

module.exports = Client;
