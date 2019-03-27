
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-12';
    super(config);
  }

  /**
   * @param {Long} Uid - id. required.
   * @param {Integer} TagFlag - customerTag. required.
   */
  operateAccoutTagByUId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'TagFlag')) {
      throw new TypeError('parameter "TagFlag" is required');
    }

    return this.request('OperateAccoutTagByUId', params, options);
  }

  /**
   * @param {Long} Cid - cid. required.
   * @param {String} RegionId - regionId. optional.
   */
  queryCustomerInfoByCId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    return this.request('QueryCustomerInfoByCId', params, options);
  }

  /**
   * @param {String} SubCode - subCode. required.
   * @param {String} Uid - uid. required.
   * @param {String} ChannelType - channelType. required.
   * @param {String} RegionId - regionId. optional.
   */
  queryEmpIdListBySubCodeAndUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubCode')) {
      throw new TypeError('parameter "SubCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    return this.request('QueryEmpIdListBySubCodeAndUid', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   */
  queryEmpMapByAccout(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('QueryEmpMapByAccout', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   * @param {Long} CustomerId - customerId. optional.
   * @param {Integer} PageStart - pageStart. optional. default: 0.
   * @param {Integer} PageLimit - pageLimit. optional. default: 20.
   * @param {String} RegionId - regionId. optional.
   */
  queryProjectList(params = {}, options = {}) {
    return this.request('QueryProjectList', params, options);
  }

}

module.exports = Client;
