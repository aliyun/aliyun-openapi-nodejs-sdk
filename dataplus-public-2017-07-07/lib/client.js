
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-07';
    super(config);
  }

  /**
   * @param {RepeatList} ResourceId - resourceId. optional.
   * @param {RepeatList} Tag - tag. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} NextToken - nextToken. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('ListTagResources', params, options);
  }

  /**
   * @param {String} AliyunPk - aliyunPk. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. required.
   */
  salesPOPDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    options.method = 'POST';
    return this.request('SalesPOPDelete', params, options);
  }

  /**
   * @param {String} AliyunPk - aliyunPk. required.
   * @param {String} ComponentsInfo - componentsInfo. required.
   */
  salesPOPPostPayResume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'ComponentsInfo')) {
      throw new TypeError('parameter "ComponentsInfo" is required');
    }

    options.method = 'POST';
    return this.request('SalesPOPPostPayResume', params, options);
  }

  /**
   * @param {String} AliyunPk - aliyunPk. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CommodiyCode - commodiyCode. required.
   */
  salesPOPPostPayStop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CommodiyCode')) {
      throw new TypeError('parameter "CommodiyCode" is required');
    }

    options.method = 'POST';
    return this.request('SalesPOPPostPayStop', params, options);
  }

  /**
   * @param {String} AliyunPk - aliyunPk. required.
   * @param {String} ComponentsInfo - componentsInfo. required.
   */
  salesPOPPrePayResume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'ComponentsInfo')) {
      throw new TypeError('parameter "ComponentsInfo" is required');
    }

    options.method = 'POST';
    return this.request('SalesPOPPrePayResume', params, options);
  }

  /**
   * @param {String} AliyunPk - aliyunPk. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CommodiyCode - commodiyCode. required.
   */
  salesPOPPrePayStop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CommodiyCode')) {
      throw new TypeError('parameter "CommodiyCode" is required');
    }

    options.method = 'POST';
    return this.request('SalesPOPPrePayStop', params, options);
  }

  /**
   * @param {String} AliyunPk - aliyunPk. required.
   * @param {String} ComponentsInfo - componentsInfo. required.
   */
  salesPOPProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'ComponentsInfo')) {
      throw new TypeError('parameter "ComponentsInfo" is required');
    }

    options.method = 'POST';
    return this.request('SalesPOPProduce', params, options);
  }

  /**
   * @param {String} AliyunPk - aliyunPk. required.
   * @param {String} ComponentsInfo - componentsInfo. required.
   */
  salesPOPUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'ComponentsInfo')) {
      throw new TypeError('parameter "ComponentsInfo" is required');
    }

    options.method = 'POST';
    return this.request('SalesPOPUpdate', params, options);
  }

  /**
   * @param {RepeatList} ResourceId - resourceId. required.
   * @param {RepeatList} Tag - tag. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   */
  tagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('TagResources', params, options);
  }

  /**
   * @param {RepeatList} ResourceId - resourceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {Boolean} All - deleteAll. optional.
   * @param {RepeatList} TagKey - tagKey. optional.
   */
  untagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('UntagResources', params, options);
  }

}

module.exports = Client;
