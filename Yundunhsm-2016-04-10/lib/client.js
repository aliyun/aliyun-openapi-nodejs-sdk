
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-10';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {String} Hid - hid. required.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VpcInstanceId - vpcInstanceId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} Ip - ip. required.
   */
  configChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VpcInstanceId')) {
      throw new TypeError('parameter "VpcInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('ConfigChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} WhiteList - whiteList. required.
   */
  configWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'WhiteList')) {
      throw new TypeError('parameter "WhiteList" is required');
    }

    return this.request('ConfigWhiteList', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {Integer} Quantity - quantity. required.
   * @param {String} HsmDeviceType - hsmDeviceType. required.
   * @param {String} HsmOem - hsmOem. required.
   * @param {String} RegionNo - regionNo. required.
   * @param {String} WebType - webType. required.
   * @param {String} ZoneNo - zoneNo. required.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    if (!hasOwnProperty(params, 'Quantity')) {
      throw new TypeError('parameter "Quantity" is required');
    }

    if (!hasOwnProperty(params, 'HsmDeviceType')) {
      throw new TypeError('parameter "HsmDeviceType" is required');
    }

    if (!hasOwnProperty(params, 'HsmOem')) {
      throw new TypeError('parameter "HsmOem" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'WebType')) {
      throw new TypeError('parameter "WebType" is required');
    }

    if (!hasOwnProperty(params, 'ZoneNo')) {
      throw new TypeError('parameter "ZoneNo" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {String} Hid - hid. required.
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
   * @param {String} data - data. required.
   */
  payBack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayBack', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {String} Hid - hid. required.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionNo - regionNo. required.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  queryChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('QueryChannel', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   */
  queryRegion(params = {}, options = {}) {
    return this.request('QueryRegion', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} RegionNo - regionNo. required.
   */
  queryVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('QueryVpc', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Refund', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} Duration - duration. required.
   * @param {String} PricingCycle - pricingCycle. required.
   * @param {String} InstanceId - instanceId. required.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    if (!hasOwnProperty(params, 'PricingCycle')) {
      throw new TypeError('parameter "PricingCycle" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Remark - remark. required.
   */
  updateChannel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('UpdateChannel', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  validOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ValidOrder', params, options);
  }

}

module.exports = Client;
