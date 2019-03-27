
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-20';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} VpcId - VpcId. required.
   * @param {String} VirtualSwitchId - VirtualSwitchId. required.
   * @param {String} InstanceName - InstanceName. required.
   * @param {String} InstanceVpcName - InstanceVpcName. required.
   * @param {String} RegionNo - RegionNo. optional.
   * @param {String} Network - Network. optional.
   */
  bindInstance2Vpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VirtualSwitchId')) {
      throw new TypeError('parameter "VirtualSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceVpcName')) {
      throw new TypeError('parameter "InstanceVpcName" is required');
    }

    options.method = 'POST';
    return this.request('BindInstance2Vpc', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   */
  deleteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('DeleteInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  deleteTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('DeleteTags', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
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
  doCheckResource(params = {}, options = {}) {
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

    return this.request('DoCheckResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
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
  doLogicalDeleteResource(params = {}, options = {}) {
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

    return this.request('DoLogicalDeleteResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
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
  doPhysicalDeleteResource(params = {}, options = {}) {
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

    return this.request('DoPhysicalDeleteResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   */
  getInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    return this.request('GetInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {String} ClusterType - ClusterType. optional.
   * @param {String} Network - Network. optional.
   * @param {String} Description - Description. optional.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  insertInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('InsertInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  insertTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('InsertTags', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   */
  listClusterType(params = {}, options = {}) {
    return this.request('ListClusterType', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {Long} PageNum - PageNum. optional.
   * @param {Long} PageSize - PageSize. optional.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  listInstance(params = {}, options = {}) {
    return this.request('ListInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. optional.
   * @param {Long} PageNum - PageNum. optional.
   * @param {Long} PageSize - PageSize. optional.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  listTags(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ListTags', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {Long} PageNum - PageNum. optional.
   * @param {Long} PageSize - PageSize. optional.
   */
  listVpcInfoByInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    return this.request('ListVpcInfoByInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} VpcId - VpcId. required.
   * @param {Long} PageNum - PageNum. optional.
   * @param {Long} PageSize - PageSize. optional.
   * @param {RepeatList} TagInfo - TagList. optional.
   */
  listVpcInfoByVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('ListVpcInfoByVpc', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {String} InstanceVpcName - InstanceVpcName. required.
   * @param {String} RegionNo - RegionNo. optional.
   */
  unbindInstance2Vpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceVpcName')) {
      throw new TypeError('parameter "InstanceVpcName" is required');
    }

    options.method = 'POST';
    return this.request('UnbindInstance2Vpc', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} access_key_id - AccessKeyId. optional.
   * @param {String} InstanceName - InstanceName. required.
   * @param {String} Network - Network. optional.
   */
  updateInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    options.method = 'POST';
    return this.request('UpdateInstance', params, options);
  }

}

module.exports = Client;
