
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-13';
    super(config);
  }

  /**
   * @param {String} aliyunEquipId - instId. required.
   * @param {String} aliyunCommodityCode - commodityCode. required.
   * @param {String} aliyunUid - aliUid. required.
   */
  getInstTransInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliyunEquipId')) {
      throw new TypeError('parameter "aliyunEquipId" is required');
    }

    if (!hasOwnProperty(params, 'aliyunCommodityCode')) {
      throw new TypeError('parameter "aliyunCommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'aliyunUid')) {
      throw new TypeError('parameter "aliyunUid" is required');
    }

    return this.request('GetInstTransInfo', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  resourceStatusNotify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ResourceStatusNotify', params, options);
  }

}

module.exports = Client;
