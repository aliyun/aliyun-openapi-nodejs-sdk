
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-01';
    super(config);
  }

  /**
   * @param {Integer} TopCount - topCount. required.
   */
  describeHotKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopCount')) {
      throw new TypeError('parameter "TopCount" is required');
    }

    return this.request('DescribeHotKeyword', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} ErrorCode - errorCode. required.
   * @param {String} ErrorMessage - errorMessage. required.
   * @param {Integer} Sequence - sequence. optional.
   * @param {String} CnDescription - cnDescription. optional.
   * @param {String} EnDescription - enDescription. optional.
   * @param {String} JpDescription - jpDescription. optional.
   */
  putError(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'ErrorCode')) {
      throw new TypeError('parameter "ErrorCode" is required');
    }

    if (!hasOwnProperty(params, 'ErrorMessage')) {
      throw new TypeError('parameter "ErrorMessage" is required');
    }

    return this.request('PutError', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} ErrorCode - errorCode. required.
   * @param {String} ErrorMessage - errorMessage. required.
   */
  recycleError(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'ErrorCode')) {
      throw new TypeError('parameter "ErrorCode" is required');
    }

    if (!hasOwnProperty(params, 'ErrorMessage')) {
      throw new TypeError('parameter "ErrorMessage" is required');
    }

    return this.request('RecycleError', params, options);
  }

  /**
   * @param {String} Keyword - keyword. optional.
   * @param {String} Product - product. optional.
   * @param {String} Language - language. required.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  search(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    return this.request('Search', params, options);
  }

  /**
   * @param {String} Keyword - keyword. required.
   */
  searchCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    return this.request('SearchCount', params, options);
  }

}

module.exports = Client;
