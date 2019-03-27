
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-11';
    super(config);
  }

  /**
   * @param {Long} OwnerAccount - ownerId. optional.
   * @param {String} ConsumePeriod - consumePeriodStr. required.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} StartTime - startTimeStr. optional.
   * @param {String} EndTime - endTimeStr. optional.
   * @param {String} ConsumeCategory - consumeCategory. optional.
   * @param {Boolean} NeedDetail - needDetail. optional.
   * @param {Long} PageMinId - pageMinId. required.
   * @param {Integer} PageSize - sizePerPage. required.
   */
  queryConsumeDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConsumePeriod')) {
      throw new TypeError('parameter "ConsumePeriod" is required');
    }

    if (!hasOwnProperty(params, 'PageMinId')) {
      throw new TypeError('parameter "PageMinId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryConsumeDetail', params, options);
  }

}

module.exports = Client;
