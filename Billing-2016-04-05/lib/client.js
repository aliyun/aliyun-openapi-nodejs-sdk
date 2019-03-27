
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-05';
    super(config);
  }

  /**
   * @param {String} RegionCode - regionCode. optional.
   * @param {Long} BillId - billId. required.
   */
  listBillDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('ListBillDetails', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {String} CommodityCode - prodCode. optional.
   * @param {Long} BillStartTime - billStartTime. optional.
   * @param {Long} BillEndTime - billEndTime. optional.
   * @param {String} AccountPeriod - accountPeriod. required.
   * @param {String} PayStatus - payStatus. optional.
   * @param {Boolean} NeedZeroBill - needZeroBill. optional.
   */
  listBills(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountPeriod')) {
      throw new TypeError('parameter "AccountPeriod" is required');
    }

    return this.request('ListBills', params, options);
  }

  /**
   * @param {Long} BillDetailId - billDetailId. required.
   */
  listResDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillDetailId')) {
      throw new TypeError('parameter "BillDetailId" is required');
    }

    return this.request('ListResDetails', params, options);
  }

}

module.exports = Client;
