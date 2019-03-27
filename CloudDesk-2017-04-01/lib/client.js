
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-01';
    super(config);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  checkResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('CheckResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} data - Data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  completeOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderInfo', params, options);
  }

  /**
   * @param {String} Tenant - tenant. required.
   * @param {String} Account - account. required.
   * @param {String} NickName - nickName. required.
   * @param {String} MobileNumber - mobileNumber. optional.
   * @param {String} Email - email. optional.
   */
  createUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tenant')) {
      throw new TypeError('parameter "Tenant" is required');
    }

    if (!hasOwnProperty(params, 'Account')) {
      throw new TypeError('parameter "Account" is required');
    }

    if (!hasOwnProperty(params, 'NickName')) {
      throw new TypeError('parameter "NickName" is required');
    }

    return this.request('CreateUser', params, options);
  }

  /**
   * @param {String} Tenant - tenant. required.
   */
  getAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tenant')) {
      throw new TypeError('parameter "Tenant" is required');
    }

    return this.request('GetAdmin', params, options);
  }

  /**
   * @param {String} Tenant - tenant. required.
   */
  getDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tenant')) {
      throw new TypeError('parameter "Tenant" is required');
    }

    return this.request('GetDomain', params, options);
  }

  /**
   * @param {String} OrderNo - orderNo. required.
   * @param {String} ProductCode - productCode. required.
   */
  getSP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderNo')) {
      throw new TypeError('parameter "OrderNo" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    return this.request('GetSP', params, options);
  }

  /**
   * @param {String} Tenant - tenant. required.
   */
  getTenant(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tenant')) {
      throw new TypeError('parameter "Tenant" is required');
    }

    return this.request('GetTenant', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   */
  getTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetTenantId', params, options);
  }

  /**
   * @param {String} Tenant - tenant. required.
   * @param {String} Account - account. required.
   */
  getUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tenant')) {
      throw new TypeError('parameter "Tenant" is required');
    }

    if (!hasOwnProperty(params, 'Account')) {
      throw new TypeError('parameter "Account" is required');
    }

    return this.request('GetUser', params, options);
  }

  /**
   * @param {String} Tenant - tenant. required.
   * @param {Long} UserId - userId. required.
   */
  getUserById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tenant')) {
      throw new TypeError('parameter "Tenant" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetUserById', params, options);
  }

  /**
   * @param {String} Token - token. required.
   */
  getUserByToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('GetUserByToken', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   * @param {String} OrderNo - orderNo. required.
   * @param {String} ProductCode - productCode. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} specification - specification. required.
   */
  modifySP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderNo')) {
      throw new TypeError('parameter "OrderNo" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'specification')) {
      throw new TypeError('parameter "specification" is required');
    }

    return this.request('ModifySP', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} Tenant - tenant. required.
   * @param {String} MobileNumber - mobileNumber. optional.
   * @param {String} Email - email. optional.
   * @param {String} NickName - nickName. required.
   */
  modifyUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Tenant')) {
      throw new TypeError('parameter "Tenant" is required');
    }

    if (!hasOwnProperty(params, 'NickName')) {
      throw new TypeError('parameter "NickName" is required');
    }

    return this.request('ModifyUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} data - Data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('PhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} OrderNo - orderNo. required.
   * @param {String} ProductCode - productCode. required.
   * @param {String} Tenant - tenant. required.
   * @param {RepeatList} InstanceIds - instanceIds. required.
   * @param {String} Specification - specification. required.
   * @param {String} CustomData - customData. optional.
   */
  provisionSP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderNo')) {
      throw new TypeError('parameter "OrderNo" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Tenant')) {
      throw new TypeError('parameter "Tenant" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    if (!hasOwnProperty(params, 'Specification')) {
      throw new TypeError('parameter "Specification" is required');
    }

    return this.request('ProvisionSP', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  refund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Refund', params, options);
  }

  /**
   * @param {String} OrderNo - orderNo. required.
   * @param {String} ProductCode - productCode. required.
   * @param {String} InstanceId - instanceId. required.
   */
  resumeSP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderNo')) {
      throw new TypeError('parameter "OrderNo" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ResumeSP', params, options);
  }

  /**
   * @param {String} OrderNo - orderNo. required.
   * @param {String} ProductCode - productCode. required.
   * @param {String} InstanceId - instanceId. required.
   */
  stopSP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderNo')) {
      throw new TypeError('parameter "OrderNo" is required');
    }

    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('StopSP', params, options);
  }

  /**
   * @param {String} OrderNo - orderNo. required.
   * @param {RepeatList} OrderResults - orderResults. optional.
   */
  updateSP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderNo')) {
      throw new TypeError('parameter "OrderNo" is required');
    }

    return this.request('UpdateSP', params, options);
  }

}

module.exports = Client;
