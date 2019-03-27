
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-01';
    super(config);
  }

  /**
   * @param {Long} UserUid - userUid. required.
   * @param {String} FxInfo - fxInfo. required.
   * @param {Boolean} International - international. required.
   */
  establishAssociated(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserUid')) {
      throw new TypeError('parameter "UserUid" is required');
    }

    if (!hasOwnProperty(params, 'FxInfo')) {
      throw new TypeError('parameter "FxInfo" is required');
    }

    if (!hasOwnProperty(params, 'International')) {
      throw new TypeError('parameter "International" is required');
    }

    return this.request('EstablishAssociated', params, options);
  }

  /**
   * @param {String} TopMenuTag - topMenuTag. required.
   * @param {String} SecondMenuTag - secondMenuTag. required.
   */
  fenxiaoMenu(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopMenuTag')) {
      throw new TypeError('parameter "TopMenuTag" is required');
    }

    if (!hasOwnProperty(params, 'SecondMenuTag')) {
      throw new TypeError('parameter "SecondMenuTag" is required');
    }

    return this.request('FenxiaoMenu', params, options);
  }

  /**
   * @param {Long} UserUid - userUid. required.
   * @param {Long} ParentUid - parentUid. optional.
   */
  fxInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserUid')) {
      throw new TypeError('parameter "UserUid" is required');
    }

    return this.request('FxInfo', params, options);
  }

  /**
   * @param {Long} UserUid - userUid. required.
   * @param {Long} ParentUid - parentUid. optional.
   */
  getCustomerRebateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserUid')) {
      throw new TypeError('parameter "UserUid" is required');
    }

    return this.request('GetCustomerRebateInfo', params, options);
  }

  /**
   * @param {Long} UserUid - userUid. required.
   * @param {Long} ParentUid - parentUid. required.
   */
  isFxRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserUid')) {
      throw new TypeError('parameter "UserUid" is required');
    }

    if (!hasOwnProperty(params, 'ParentUid')) {
      throw new TypeError('parameter "ParentUid" is required');
    }

    return this.request('IsFxRelation', params, options);
  }

  /**
   * @param {Long} UserUid - userUid. required.
   * @param {Long} ParentUid - parentUid. optional.
   */
  isFxUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserUid')) {
      throw new TypeError('parameter "UserUid" is required');
    }

    return this.request('IsFxUser', params, options);
  }

  /**
   * @param {Long} UserUid - userUid. required.
   * @param {Long} ParentUid - parentUid. optional.
   */
  isParentOrChild(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserUid')) {
      throw new TypeError('parameter "UserUid" is required');
    }

    return this.request('IsParentOrChild', params, options);
  }

}

module.exports = Client;
