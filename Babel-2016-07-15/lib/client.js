
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
   * @param {String} ProductCode - productCode. required.
   * @param {String} CallerType - callerType. required.
   * @param {String} EmpId - empId. optional.
   * @param {String} Uid - uid. optional.
   * @param {String} ActionMethodRegionId - regionId. optional.
   * @param {String} ActionType - type. optional.
   * @param {String} ApiType - apiType. optional.
   * @param {String} ActionMethodVersion - version. optional.
   * @param {Boolean} IsActivate - isActivate. optional.
   * @param {String} Environment - environment. optional.
   */
  countProductSpiService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    return this.request('CountProductSpiService', params, options);
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
   * @param {String} Environment - environment. required.
   */
  disableProductSpiService(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'Environment')) {
      throw new TypeError('parameter "Environment" is required');
    }

    return this.request('DisableProductSpiService', params, options);
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
   * @param {String} Environment - environment. required.
   */
  enableProductSpiService(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'Environment')) {
      throw new TypeError('parameter "Environment" is required');
    }

    return this.request('EnableProductSpiService', params, options);
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
   * @param {String} ApiType - apiType. optional.
   */
  lookupAllActiveProductSpiServiceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    return this.request('LookupAllActiveProductSpiServiceList', params, options);
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
   * @param {String} Environment - environment. required.
   */
  lookupProductSpiService(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'Environment')) {
      throw new TypeError('parameter "Environment" is required');
    }

    return this.request('LookupProductSpiService', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} CallerType - callerType. required.
   * @param {String} EmpId - empId. optional.
   * @param {String} Uid - uid. optional.
   * @param {String} ActionMethodRegionId - regionId. optional.
   * @param {String} ActionType - type. optional.
   * @param {String} ActionMethodVersion - version. optional.
   * @param {String} ApiType - apiType. optional.
   * @param {Boolean} IsActivate - activate. optional.
   * @param {String} Environment - environment. optional.
   * @param {Long} PageNumber - pageNumber. required.
   * @param {Long} PageSize - pageSize. required.
   */
  lookupProductSpiServiceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('LookupProductSpiServiceList', params, options);
  }

  /**
   * @param {String} Topic - topic. required.
   * @param {String} MessageBody - messageBody. required.
   * @param {String} Tag - tag. optional.
   * @param {String} Driver - driver. optional.
   */
  notifyMessageRepeater(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'MessageBody')) {
      throw new TypeError('parameter "MessageBody" is required');
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
   * @param {String} ApiType - apiType. optional. default: innerAPI.
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
   * @param {String} CallerType - callerType. required.
   * @param {String} MessageBody - messageBody. required.
   * @param {String} MessageTag - messageTag. required.
   * @param {String} ClientToken - clientToken. required.
   */
  sendCommonMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallerType')) {
      throw new TypeError('parameter "CallerType" is required');
    }

    if (!hasOwnProperty(params, 'MessageBody')) {
      throw new TypeError('parameter "MessageBody" is required');
    }

    if (!hasOwnProperty(params, 'MessageTag')) {
      throw new TypeError('parameter "MessageTag" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('SendCommonMessage', params, options);
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

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} CallerType - callerType. required.
   * @param {String} EmpId - empId. optional.
   * @param {String} Uid - uid. optional.
   * @param {String} ActionMethodRegionId - regionId. required.
   * @param {String} ActionType - type. required.
   * @param {String} ApiType - apiType. required.
   * @param {String} ActionMethodVersion - version. required.
   * @param {String} Environment - environment. required.
   * @param {String} TargetEnv - targetEnv. required.
   */
  switchProductSpiServiceEnvironment(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'Environment')) {
      throw new TypeError('parameter "Environment" is required');
    }

    if (!hasOwnProperty(params, 'TargetEnv')) {
      throw new TypeError('parameter "TargetEnv" is required');
    }

    return this.request('SwitchProductSpiServiceEnvironment', params, options);
  }

}

module.exports = Client;
