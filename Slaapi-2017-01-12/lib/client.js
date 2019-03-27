
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-12';
    super(config);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} Uid - uid. required.
   * @param {String} Month - month. required.
   */
  applyMonthlyServiceCreditCoupon(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('ApplyMonthlyServiceCreditCoupon', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} Month - month. required.
   * @param {String} EntityIds - entityIds. optional.
   * @param {String} Uid - uid. required.
   * @param {Boolean} OnlyBreakSla - onlyBreakSla. required.
   */
  getEntityMonthlyServiceCredit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'OnlyBreakSla')) {
      throw new TypeError('parameter "OnlyBreakSla" is required');
    }

    return this.request('GetEntityMonthlyServiceCredit', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} Month - month. required.
   * @param {String} EntityIds - entityIds. optional.
   * @param {String} Uid - uid. required.
   * @param {Boolean} OnlyBreakSla - onlyBreakSla. required.
   */
  getEntityMonthlyServiceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'OnlyBreakSla')) {
      throw new TypeError('parameter "OnlyBreakSla" is required');
    }

    return this.request('GetEntityMonthlyServiceStatus', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} Month - month. required.
   * @param {String} EntityId - entityId. required.
   * @param {String} Uid - uid. required.
   */
  getEntityMonthlyServiceStatusDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetEntityMonthlyServiceStatusDetail', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} Month - month. required.
   */
  getMonthlyAffectedInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('GetMonthlyAffectedInstance', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} Month - month. required.
   * @param {Integer} Limit - limit. optional. default: 5.
   */
  getMonthlyRankingByCredit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('GetMonthlyRankingByCredit', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} Uid - uid. required.
   */
  getServiceCreditCoupons(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('GetServiceCreditCoupons', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} Month - month. required.
   */
  getSlaYearlyServiceBill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('GetSlaYearlyServiceBill', params, options);
  }

}

module.exports = Client;
