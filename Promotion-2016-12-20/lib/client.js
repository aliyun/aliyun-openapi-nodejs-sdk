
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-12-20';
    super(config);
  }

  /**
   * @param {Long} aliuid - aliuid. required.
   * @param {String} code - code. required.
   */
  checkCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliuid')) {
      throw new TypeError('parameter "aliuid" is required');
    }

    if (!hasOwnProperty(params, 'code')) {
      throw new TypeError('parameter "code" is required');
    }

    return this.request('CheckCode', params, options);
  }

  /**
   * @param {Long} aliuid - aliuid. required.
   * @param {String} definitionCode - definitionCode. required.
   */
  claimCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliuid')) {
      throw new TypeError('parameter "aliuid" is required');
    }

    if (!hasOwnProperty(params, 'definitionCode')) {
      throw new TypeError('parameter "definitionCode" is required');
    }

    return this.request('ClaimCode', params, options);
  }

  /**
   * @param {String} code - code. required.
   */
  findCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'code')) {
      throw new TypeError('parameter "code" is required');
    }

    return this.request('FindCode', params, options);
  }

  /**
   * @param {Long} aliuid - aliuid. required.
   * @param {String} definitionCode - definitionCode. required.
   */
  findLatestUserCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliuid')) {
      throw new TypeError('parameter "aliuid" is required');
    }

    if (!hasOwnProperty(params, 'definitionCode')) {
      throw new TypeError('parameter "definitionCode" is required');
    }

    return this.request('FindLatestUserCode', params, options);
  }

  /**
   * @param {String} channel - channel. required.
   * @param {Boolean} needToDecrypt - needToDecrypt. required.
   */
  getClickDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'channel')) {
      throw new TypeError('parameter "channel" is required');
    }

    if (!hasOwnProperty(params, 'needToDecrypt')) {
      throw new TypeError('parameter "needToDecrypt" is required');
    }

    return this.request('GetClickDetail', params, options);
  }

  /**
   * @param {String} channel - channel. required.
   * @param {String} needToDecrypt - needToDecrypt. required.
   */
  getPromotionClickDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'channel')) {
      throw new TypeError('parameter "channel" is required');
    }

    if (!hasOwnProperty(params, 'needToDecrypt')) {
      throw new TypeError('parameter "needToDecrypt" is required');
    }

    return this.request('GetPromotionClickDetail', params, options);
  }

  /**
   * @param {Long} codeId - codeId. required.
   * @param {Long} usedAliyunId - usedAliyunId. required.
   * @param {String} usedTime - usedTime. required.
   * @param {String} usedScene - usedScene. required.
   * @param {String} memo - memo. optional.
   */
  saveCodeCommonUseLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'codeId')) {
      throw new TypeError('parameter "codeId" is required');
    }

    if (!hasOwnProperty(params, 'usedAliyunId')) {
      throw new TypeError('parameter "usedAliyunId" is required');
    }

    if (!hasOwnProperty(params, 'usedTime')) {
      throw new TypeError('parameter "usedTime" is required');
    }

    if (!hasOwnProperty(params, 'usedScene')) {
      throw new TypeError('parameter "usedScene" is required');
    }

    return this.request('SaveCodeCommonUseLog', params, options);
  }

}

module.exports = Client;
