
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-02-20';
    super(config);
  }

  /**
   * @param {Long} AliyunId - aliyunId. required.
   * @param {String} CountryIso - countryIso. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} BussinessId - bussinessId. optional.
   * @param {String} Region - region. optional.
   * @param {String} Status - status. optional.
   * @param {String} AccountPeriod - accountPeriod. optional.
   * @param {Boolean} IsNeedDebtData - isNeedDebtData. optional.
   * @param {String} BizType - bizType. optional.
   */
  intlListConsumInfosForPostPay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    if (!hasOwnProperty(params, 'CountryIso')) {
      throw new TypeError('parameter "CountryIso" is required');
    }

    return this.request('IntlListConsumInfosForPostPay', params, options);
  }

  /**
   * @param {Long} AliyunId - aliyunId. required.
   * @param {String} CountryIso - countryIso. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} Region - region. optional.
   * @param {String} AccountPeriod - accountPeriod. optional.
   * @param {String} Offering - offering. required.
   * @param {String} BusinessId - businessId. required.
   */
  intlListInstanceInfoByCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    if (!hasOwnProperty(params, 'CountryIso')) {
      throw new TypeError('parameter "CountryIso" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Offering')) {
      throw new TypeError('parameter "Offering" is required');
    }

    if (!hasOwnProperty(params, 'BusinessId')) {
      throw new TypeError('parameter "BusinessId" is required');
    }

    return this.request('IntlListInstanceInfoByCondition', params, options);
  }

  /**
   * @param {Long} AliyunId - aliyunId. required.
   * @param {String} CountryIso - countryIso. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProductCode - productCode. required.
   * @param {String} Region - region. optional.
   * @param {String} AccountPeriod - accountPeriod. optional.
   * @param {String} Offering - offering. optional.
   * @param {String} BusinessId - businessId. optional.
   */
  intlListInstanceResInfoByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    if (!hasOwnProperty(params, 'CountryIso')) {
      throw new TypeError('parameter "CountryIso" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    return this.request('IntlListInstanceResInfoByInstanceId', params, options);
  }

  /**
   * @param {Long} AliyunId - aliyunId. required.
   * @param {String} CountryIso - countryIso. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} BussinessId - bussinessId. optional.
   * @param {String} Region - region. optional.
   * @param {String} Status - status. optional.
   * @param {String} AccountPeriod - accountPeriod. optional.
   * @param {Boolean} IsNeedDebtData - isNeedDebtData. optional.
   * @param {String} BizType - bizType. optional.
   */
  intlListUnPayConsumInfosForPostPay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    if (!hasOwnProperty(params, 'CountryIso')) {
      throw new TypeError('parameter "CountryIso" is required');
    }

    return this.request('IntlListUnPayConsumInfosForPostPay', params, options);
  }

  /**
   * @param {Long} AliyunId - aliyunId. required.
   * @param {String} CountryIso - countryIso. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} BussinessId - bussinessId. optional.
   * @param {String} Region - region. optional.
   * @param {String} Status - status. optional.
   * @param {String} AccountPeriod - accountPeriod. optional.
   * @param {Boolean} IsNeedDebtData - isNeedDebtData. optional.
   * @param {String} BizType - bizType. optional.
   */
  intlListUnclearConsumInfosForPostPay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    if (!hasOwnProperty(params, 'CountryIso')) {
      throw new TypeError('parameter "CountryIso" is required');
    }

    return this.request('IntlListUnclearConsumInfosForPostPay', params, options);
  }

  /**
   * @param {Long} AliyunId - aliyunId. required.
   * @param {String} AccountPeriod - accountPeriod. required.
   * @param {String} BizType - bizType. required.
   */
  listMonthConsumForPostPay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    if (!hasOwnProperty(params, 'AccountPeriod')) {
      throw new TypeError('parameter "AccountPeriod" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('ListMonthConsumForPostPay', params, options);
  }

}

module.exports = Client;
