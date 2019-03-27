
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-09-20';
    super(config);
  }

  /**
   * @param {String} AliUid - aliUid. required.
   * @param {String} CommodityCode - commodityCode. required.
   * @param {String} BillTime - billTime. required.
   * @param {Long} OrderId - orderId. required.
   * @param {Long} OrderDetailId - orderDetailId. required.
   * @param {Float} Amount - amount. required.
   */
  createInvoice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'BillTime')) {
      throw new TypeError('parameter "BillTime" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'OrderDetailId')) {
      throw new TypeError('parameter "OrderDetailId" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    return this.request('CreateInvoice', params, options);
  }

  /**
   */
  getImageProductCategory(params = {}, options = {}) {
    return this.request('GetImageProductCategory', params, options);
  }

  /**
   * @param {String} CommodityCode - commodityCode. required.
   */
  getImageProductDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    return this.request('GetImageProductDetail', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   */
  getSellerByAliUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('GetSellerByAliUid', params, options);
  }

  /**
   * @param {String} Hid - hid. required.
   */
  getSellerByHid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('GetSellerByHid', params, options);
  }

  /**
   * @param {Long} SupplierId - supplierId. required.
   */
  getSellerBySupplierId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SupplierId')) {
      throw new TypeError('parameter "SupplierId" is required');
    }

    return this.request('GetSellerBySupplierId', params, options);
  }

  /**
   * @param {String} AliUid - aliUid. required.
   */
  isMarketOpenByAliUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('IsMarketOpenByAliUid', params, options);
  }

  /**
   * @param {String} AliUid - aliUid. optional.
   * @param {Long} CategoryId - categoryId. optional.
   * @param {String} Region - region. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} Language - language. optional.
   * @param {String} Name - name. optional.
   * @param {String} ExtQueryParam - extQueryParam. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} EcsPriceUnit - ecsPriceUnit. optional.
   * @param {String} CommodityCodeList - commodityCodeList. optional.
   */
  queryImageProducts(params = {}, options = {}) {
    return this.request('QueryImageProducts', params, options);
  }

  /**
   * @param {String} AliUid - aliUid. optional.
   * @param {String} SellerAliUid - sellerAliUid. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} BillTime - billTime. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryInvoices(params = {}, options = {}) {
    return this.request('QueryInvoices', params, options);
  }

}

module.exports = Client;
