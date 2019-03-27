
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-21';
    super(config);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  checkBeforeDeployed(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    return this.request('CheckBeforeDeployed', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} Enviroment - enviroment. optional.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getDomainCodeByEnv(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    return this.request('GetDomainCodeByEnv', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. optional.
   * @param {String} Enviroment - enviroment. optional.
   * @param {RepeatList} ProductNameList - productNameList. optional.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getDomainCodes(params = {}, options = {}) {
    return this.request('GetDomainCodes', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. optional.
   * @param {String} ProductName - productName. optional.
   * @param {String} Enviroment - enviroment. optional.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getDomainList(params = {}, options = {}) {
    return this.request('GetDomainList', params, options);
  }

}

module.exports = Client;
