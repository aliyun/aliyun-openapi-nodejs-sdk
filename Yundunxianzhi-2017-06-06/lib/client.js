
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-06';
    super(config);
  }

  /**
   * @param {RepeatList} CompanyUserIdList - companyUserIdList. required.
   * @param {Integer} ProductType - productType. required.
   * @param {Integer} IsDeleted - isDeleted. optional.
   */
  batchQueryProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyUserIdList')) {
      throw new TypeError('parameter "CompanyUserIdList" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    return this.request('BatchQueryProduct', params, options);
  }

  /**
   * @param {Long} CompanyUserId - companyUserId. required.
   * @param {String} Name - name. required.
   * @param {String} Website - website. optional.
   * @param {String} Summary - summary. optional.
   * @param {String} ContactPhone - contactPhone. optional.
   * @param {String} ContactMan - contactMan. optional.
   * @param {Integer} Category - category. optional.
   * @param {String} Ico - ico. optional.
   */
  createCompany(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyUserId')) {
      throw new TypeError('parameter "CompanyUserId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateCompany', params, options);
  }

  /**
   * @param {Long} CompanyUserId - companyUserId. required.
   * @param {Integer} ProductType - productType. required.
   * @param {String} BonusLowRange - bonusLowRange. required.
   * @param {String} BonusMiddleRange - bonusMiddleRange. required.
   * @param {String} BonusHighRange - bonusHighRange. required.
   * @param {String} BonusSevereRange - bonusSevereRange. required.
   * @param {String} IntegrationLowRange - integrationLowRange. optional.
   * @param {String} IntegrationMiddleRange - integrationMiddleRange. optional.
   * @param {String} IntegrationHighRange - integrationHighRange. optional.
   * @param {String} IntegrationSevereRange - integrationSevereRange. optional.
   */
  createIncentivePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyUserId')) {
      throw new TypeError('parameter "CompanyUserId" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'BonusLowRange')) {
      throw new TypeError('parameter "BonusLowRange" is required');
    }

    if (!hasOwnProperty(params, 'BonusMiddleRange')) {
      throw new TypeError('parameter "BonusMiddleRange" is required');
    }

    if (!hasOwnProperty(params, 'BonusHighRange')) {
      throw new TypeError('parameter "BonusHighRange" is required');
    }

    if (!hasOwnProperty(params, 'BonusSevereRange')) {
      throw new TypeError('parameter "BonusSevereRange" is required');
    }

    return this.request('CreateIncentivePlan', params, options);
  }

  /**
   * @param {Long} CompanyUserId - companyUserId. required.
   * @param {Integer} IsDeleted - isDeleted. optional.
   * @param {String} TestRange - testRange. required.
   * @param {Integer} ProductType - productType. required.
   * @param {Integer} AuthType - authType. optional.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyUserId')) {
      throw new TypeError('parameter "CompanyUserId" is required');
    }

    if (!hasOwnProperty(params, 'TestRange')) {
      throw new TypeError('parameter "TestRange" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {Long} CompanyUserId - companyUserId. optional.
   * @param {Integer} ProductType - productType. required.
   * @param {Long} UpdateTimeBegin - updateTimeBegin. optional.
   * @param {Long} UpdateTimeEnd - updateTimeEnd. optional.
   * @param {String} Hash - hash. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  pagingFlaw(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('PagingFlaw', params, options);
  }

  /**
   * @param {Long} CompanyUserId - companyUserId. optional.
   * @param {String} FlawHash - flawHash. optional.
   * @param {RepeatList} FlawHashList - flawHashList. optional.
   * @param {Integer} FixStatus - fixStatus. required.
   */
  updateFixStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FixStatus')) {
      throw new TypeError('parameter "FixStatus" is required');
    }

    return this.request('UpdateFixStatus', params, options);
  }

  /**
   * @param {Long} CompanyUserId - companyUserId. required.
   * @param {Integer} ProductType - productType. required.
   * @param {Integer} IsDeleted - isDeleted. required.
   */
  updateProductStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyUserId')) {
      throw new TypeError('parameter "CompanyUserId" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'IsDeleted')) {
      throw new TypeError('parameter "IsDeleted" is required');
    }

    return this.request('UpdateProductStatus', params, options);
  }

}

module.exports = Client;
