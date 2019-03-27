
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-21';
    super(config);
  }

  /**
   * @param {String} DiamondDataId - diamondDataId. required.
   */
  getDiamondConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiamondDataId')) {
      throw new TypeError('parameter "DiamondDataId" is required');
    }

    return this.request('GetDiamondConfig', params, options);
  }

  /**
   * @param {Long} Cid - cid. required.
   */
  getRegionBidByCid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    return this.request('GetRegionBidByCid', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   */
  getRegionBidByUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetRegionBidByUid', params, options);
  }

  /**
   * @param {String} Pid - pid. required.
   * @param {Long} OverDueMoney - overDueMoney. required.
   */
  ppsSetProjectOverDueStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pid')) {
      throw new TypeError('parameter "Pid" is required');
    }

    if (!hasOwnProperty(params, 'OverDueMoney')) {
      throw new TypeError('parameter "OverDueMoney" is required');
    }

    return this.request('PpsSetProjectOverDueStatus', params, options);
  }

  /**
   * @param {String} Message - message. required.
   */
  routeSDKService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('RouteSDKService', params, options);
  }

}

module.exports = Client;
