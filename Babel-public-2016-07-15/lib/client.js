
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-15';
    super(config);
  }

  /**
   * @param {String} CallerType - callerType. required.
   * @param {String} EmpId - empId. optional.
   * @param {String} Uid - uid. optional.
   */
  findServiceProviderCodeByUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    return this.request('FindServiceProviderCodeByUid', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} ActionMethodRegionId - regionId. optional.
   */
  getRootBusinessLocations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    return this.request('GetRootBusinessLocations', params, options);
  }

  /**
   * @param {String} CallerType - callerType. required.
   * @param {String} EmpId - empId. optional.
   */
  listAllServiceProvider(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    return this.request('ListAllServiceProvider', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} CallerType - callerType. required.
   * @param {String} EmpId - empId. optional.
   * @param {String} Uid - uid. optional.
   * @param {String} ActionMethodRegionId - regionId. optional.
   * @param {String} ActionType - type. optional.
   * @param {String} ActionMethodVersion - version. optional.
   * @param {String} Environment - environment. optional.
   * @param {String} ApiType - apiType. required.
   */
  lookupAllActiveProductSpiServiceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    if (!hasOwnProperty(params, 'ApiType')) {
      throw new TypeError('parameter "ApiType" is required');
    }

    return this.request('LookupAllActiveProductSpiServiceList', params, options);
  }

  /**
   * @param {String} topic - topic. required.
   * @param {String} messageBody - messageBody. required.
   * @param {String} tag - tag. optional.
   * @param {String} driver - driver. optional.
   */
  notifyMessageRepeater(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'topic')) {
      throw new TypeError('parameter "topic" is required');
    }

    if (!hasOwnProperty(params, 'messageBody')) {
      throw new TypeError('parameter "messageBody" is required');
    }

    return this.request('NotifyMessageRepeater', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} CallerType - callerType. required.
   * @param {String} EmpId - empId. optional.
   * @param {String} Uid - uid. required.
   * @param {String} CommandBody - commandBody. required.
   * @param {String} ClientToken - clientToken. required.
   */
  notifyUserBusinessCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'CommandBody')) {
      throw new TypeError('parameter "CommandBody" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('NotifyUserBusinessCommand', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ActionMethodRegionId - regionId. optional.
   * @param {String} ApiType - apiType. optional.
   * @param {String} CurrentVersionStamp - currentVersionStamp. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  paginateSpiEndpointSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('PaginateSpiEndpointSnapshot', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} CallerType - callerType. required.
   * @param {String} EmpId - empId. optional.
   * @param {String} Uid - uid. optional.
   * @param {String} ApiType - apiType. required.
   * @param {String} ActionMethodRegionId - regionId. optional.
   * @param {String} ActionType - type. required.
   * @param {String} Endpoint - endpoint. optional.
   * @param {String} ActionMethodVersion - version. required.
   * @param {String} ActionMethod - action. required.
   * @param {Boolean} IsActivate - isActivate. required.
   * @param {String} Environment - environment. optional.
   */
  registerProductSpiService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    if (!hasOwnProperty(params, 'ApiType')) {
      throw new TypeError('parameter "ApiType" is required');
    }

    if (!hasOwnProperty(params, 'ActionType')) {
      throw new TypeError('parameter "ActionType" is required');
    }

    if (!hasOwnProperty(params, 'ActionMethodVersion')) {
      throw new TypeError('parameter "ActionMethodVersion" is required');
    }

    if (!hasOwnProperty(params, 'ActionMethod')) {
      throw new TypeError('parameter "ActionMethod" is required');
    }

    if (!hasOwnProperty(params, 'IsActivate')) {
      throw new TypeError('parameter "IsActivate" is required');
    }

    return this.request('RegisterProductSpiService', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} CallerType - callerType. required.
   * @param {String} EmpId - empId. optional.
   * @param {String} Uid - uid. optional.
   * @param {String} ActionMethodRegionId - regionId. required.
   * @param {String} ActionType - type. required.
   * @param {String} ApiType - apiType. required.
   * @param {String} ActionMethodVersion - version. required.
   * @param {String} Environment - environment. optional.
   */
  setProductSpiServiceDefault(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    if (!hasOwnProperty(params, 'ActionMethodRegionId')) {
      throw new TypeError('parameter "ActionMethodRegionId" is required');
    }

    if (!hasOwnProperty(params, 'ActionType')) {
      throw new TypeError('parameter "ActionType" is required');
    }

    if (!hasOwnProperty(params, 'ApiType')) {
      throw new TypeError('parameter "ApiType" is required');
    }

    if (!hasOwnProperty(params, 'ActionMethodVersion')) {
      throw new TypeError('parameter "ActionMethodVersion" is required');
    }

    return this.request('SetProductSpiServiceDefault', params, options);
  }

}

module.exports = Client;
