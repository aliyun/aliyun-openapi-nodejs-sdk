
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-04-07';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} storageEngine - storageEngine. required.
   * @param {String} clusterId - clusterId. optional.
   * @param {String} regions - regions. required.
   * @param {String} password - password. optional.
   * @param {Long} capacity - capacity. required.
   * @param {Long} qps - qps. required.
   * @param {String} remark - remark. optional.
   * @param {String} token - token. optional.
   */
  createInnerOcsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'storageEngine')) {
      throw new TypeError('parameter "storageEngine" is required');
    }

    if (!hasOwnProperty(params, 'regions')) {
      throw new TypeError('parameter "regions" is required');
    }

    if (!hasOwnProperty(params, 'capacity')) {
      throw new TypeError('parameter "capacity" is required');
    }

    if (!hasOwnProperty(params, 'qps')) {
      throw new TypeError('parameter "qps" is required');
    }

    return this.request('CreateInnerOcsInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} storageEngine - storageEngine. required.
   * @param {String} regions - regions. required.
   * @param {Boolean} hasDataSource - hasDataSource. optional.
   * @param {String} appType - appType. required.
   */
  describeClusterIds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'storageEngine')) {
      throw new TypeError('parameter "storageEngine" is required');
    }

    if (!hasOwnProperty(params, 'regions')) {
      throw new TypeError('parameter "regions" is required');
    }

    if (!hasOwnProperty(params, 'appType')) {
      throw new TypeError('parameter "appType" is required');
    }

    return this.request('DescribeClusterIds', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} instanceId - instanceId. required.
   * @param {String} region - region. required.
   * @param {String} zoneId - zoneId. optional.
   */
  describeClusterNodesForInnerInst(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceId')) {
      throw new TypeError('parameter "instanceId" is required');
    }

    if (!hasOwnProperty(params, 'region')) {
      throw new TypeError('parameter "region" is required');
    }

    return this.request('DescribeClusterNodesForInnerInst', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} instanceId - instanceId. required.
   */
  describeInnerOcsInstanceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceId')) {
      throw new TypeError('parameter "instanceId" is required');
    }

    return this.request('DescribeInnerOcsInstanceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeInputOption(params = {}, options = {}) {
    return this.request('DescribeInputOption', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} instanceId - instanceId. required.
   * @param {String} region - region. required.
   * @param {String} zoneId - zoneId. optional.
   * @param {String} ipList - ipList. optional.
   */
  flushInnerOcsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceId')) {
      throw new TypeError('parameter "instanceId" is required');
    }

    if (!hasOwnProperty(params, 'region')) {
      throw new TypeError('parameter "region" is required');
    }

    return this.request('FlushInnerOcsInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} instanceId - instanceId. required.
   * @param {Long} qps - qps. optional.
   * @param {Long} capacity - capacity. optional.
   */
  modifyInnerOcsInstanceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceId')) {
      throw new TypeError('parameter "instanceId" is required');
    }

    return this.request('ModifyInnerOcsInstanceInfo', params, options);
  }

}

module.exports = Client;
