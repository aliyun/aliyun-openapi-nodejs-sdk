
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-20';
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
