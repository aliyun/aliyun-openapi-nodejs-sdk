
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-05';
    super(config);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {String} ChipVendor - chipVendor. optional.
   * @param {String} ChipName - chipName. optional.
   */
  createCustomerProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    return this.request('CreateCustomerProduct', params, options);
  }

  /**
   * @param {Integer} KeyType - keyType. required.
   * @param {Integer} KeySize - keySize. required.
   */
  createDebugId2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'KeySize')) {
      throw new TypeError('parameter "KeySize" is required');
    }

    return this.request('CreateDebugId2', params, options);
  }

  /**
   * @param {String} Id2 - id2. required.
   * @param {String} Extra - extra. optional.
   * @param {Boolean} IsTimestampMode - isTimestampMode. required.
   */
  debugGetAuthCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id2')) {
      throw new TypeError('parameter "Id2" is required');
    }

    if (!hasOwnProperty(params, 'IsTimestampMode')) {
      throw new TypeError('parameter "IsTimestampMode" is required');
    }

    return this.request('DebugGetAuthCode', params, options);
  }

  /**
   * @param {String} Id2 - id2. required.
   * @param {String} AuthCode - authCode. required.
   * @param {String} Extra - extra. optional.
   */
  debugVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id2')) {
      throw new TypeError('parameter "Id2" is required');
    }

    if (!hasOwnProperty(params, 'AuthCode')) {
      throw new TypeError('parameter "AuthCode" is required');
    }

    return this.request('DebugVerify', params, options);
  }

  /**
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Id2 - id2. optional.
   * @param {String} ProductName - productName. optional.
   * @param {Boolean} IsExpired - isExpired. optional.
   */
  listCustomerId2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListCustomerId2', params, options);
  }

  /**
   * @param {String} ProductName - productName. optional.
   * @param {Integer} ProductSource - productSource. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listCustomerProducts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListCustomerProducts', params, options);
  }

  /**
   */
  listDebugId2(params = {}, options = {}) {
    return this.request('ListDebugId2', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} ProductSource - productSource. required.
   */
  queryCustomerProductInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ProductSource')) {
      throw new TypeError('parameter "ProductSource" is required');
    }

    return this.request('QueryCustomerProductInfo', params, options);
  }

  /**
   * @param {String} ProductName - productName. optional.
   */
  queryDeviceStatistics(params = {}, options = {}) {
    return this.request('QueryDeviceStatistics', params, options);
  }

  /**
   */
  registerCustomerInfo(params = {}, options = {}) {
    return this.request('RegisterCustomerInfo', params, options);
  }

  /**
   */
  renewDebugId2(params = {}, options = {}) {
    return this.request('RenewDebugId2', params, options);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {String} ChipVendor - chipVendor. optional.
   * @param {String} ChipName - chipName. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} ProductSource - productSource. required.
   */
  updateCustomerProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ProductSource')) {
      throw new TypeError('parameter "ProductSource" is required');
    }

    return this.request('UpdateCustomerProduct', params, options);
  }

  /**
   * @param {Integer} KeyType - keyType. required.
   * @param {Integer} KeySize - keySize. required.
   */
  updateDebugId2KeyType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KeyType')) {
      throw new TypeError('parameter "KeyType" is required');
    }

    if (!hasOwnProperty(params, 'KeySize')) {
      throw new TypeError('parameter "KeySize" is required');
    }

    return this.request('UpdateDebugId2KeyType', params, options);
  }

}

module.exports = Client;
