
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-27';
    super(config);
  }

  /**
   * @param {Long} InvoiceAmount - invoiceAmount. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Long} CustomerId - customerId. required.
   * @param {Long} AddressId - addressId. required.
   * @param {Integer} InvoicingType - invoicingType. optional.
   * @param {Integer} ProcessWay - processWay. optional.
   * @param {String} ApplyUserNick - applyUserNick. required.
   * @param {RepeatList} SelectedIds - selectedIds. required.
   * @param {Boolean} InvoiceByAmount - invoiceByAmount. optional.
   */
  applyInvoice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InvoiceAmount')) {
      throw new TypeError('parameter "InvoiceAmount" is required');
    }

    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    if (!hasOwnProperty(params, 'AddressId')) {
      throw new TypeError('parameter "AddressId" is required');
    }

    if (!hasOwnProperty(params, 'ApplyUserNick')) {
      throw new TypeError('parameter "ApplyUserNick" is required');
    }

    if (!hasOwnProperty(params, 'SelectedIds')) {
      throw new TypeError('parameter "SelectedIds" is required');
    }

    return this.request('ApplyInvoice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  queryCustomerAddressList(params = {}, options = {}) {
    return this.request('QueryCustomerAddressList', params, options);
  }

  /**
   * @param {Integer} Type - type. optional.
   * @param {String} OutBizId - outBizId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} StartAmount - startAmount. optional.
   * @param {Long} EndAmount - endAmount. optional.
   * @param {String} StartBizTime - startBizTime. optional.
   * @param {String} EndBizTime - endBizTime. optional.
   * @param {RepeatList} BizTypeList - bizTypeList. optional.
   * @param {Integer} SortType - sortType. optional.
   * @param {String} StartSearchTime - startSearchTime. optional.
   * @param {String} EndSearchTime - endSearchTime. optional.
   * @param {String} BillCycle - billCycle. optional.
   */
  queryEvaluateList(params = {}, options = {}) {
    return this.request('QueryEvaluateList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  queryInvoicingCustomerList(params = {}, options = {}) {
    return this.request('QueryInvoicingCustomerList', params, options);
  }

}

module.exports = Client;
