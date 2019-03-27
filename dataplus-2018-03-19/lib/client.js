
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-19';
    super(config);
  }

  /**
   * @param {String} taskExtraData - taskExtraData. optional.
   * @param {String} bid - bid. optional.
   * @param {String} hid - hid. optional.
   * @param {String} country - country. required.
   * @param {String} pk - pk. required.
   * @param {String} invoker - invoker. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} gmtWakeup - gmtWakeup. optional.
   * @param {String} taskIdentifier - taskIdentifier. optional.
   * @param {Boolean} interrupt - interrupt. optional.
   */
  checkResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'country')) {
      throw new TypeError('parameter "country" is required');
    }

    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    options.method = 'POST';
    return this.request('CheckResource', params, options);
  }

  /**
   * @param {RepeatList} ResourceId - resourceId. optional.
   * @param {RepeatList} Tag - tag. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} NextToken - nextToken. optional.
   * @param {String} TagOwnerUid - tagOwnerUid. required.
   * @param {String} TagOwnerBid - tagOwnerBid. optional.
   * @param {String} Scope - scope. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'TagOwnerUid')) {
      throw new TypeError('parameter "TagOwnerUid" is required');
    }

    return this.request('ListTagResources', params, options);
  }

  /**
   * @param {String} invoker - invoker. optional.
   * @param {String} bid - bid. optional.
   * @param {String} hid - hid. optional.
   * @param {String} country - country. required.
   * @param {String} pk - pk. required.
   * @param {String} taskExtraData - taskExtraData. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} gmtWakeup - gmtWakeup. optional.
   * @param {String} taskIdentifier - taskIdentifier. optional.
   * @param {Boolean} interrupt - interrupt. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'country')) {
      throw new TypeError('parameter "country" is required');
    }

    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    options.method = 'POST';
    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   * @param {String} invoker - invoker. optional.
   * @param {String} bid - bid. optional.
   * @param {String} hid - hid. optional.
   * @param {String} country - country. optional.
   * @param {String} pk - pk. required.
   * @param {String} taskExtraData - taskExtraData. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} gmtWakeup - gmtWakeup. optional.
   * @param {String} taskIdentifier - taskIdentifier. optional.
   * @param {Boolean} interrupt - interrupt. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    options.method = 'POST';
    return this.request('PhysicalDeleteResource', params, options);
  }

  /**
   * @param {RepeatList} ResourceId - resourceId. required.
   * @param {RepeatList} Tag - tag. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} TagOwnerUid - tagOwnerUid. required.
   * @param {String} TagOwnerBid - tagOwnerBid. optional.
   * @param {String} Scope - scope. optional.
   */
  tagResourcesSystemTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'TagOwnerUid')) {
      throw new TypeError('parameter "TagOwnerUid" is required');
    }

    return this.request('TagResourcesSystemTags', params, options);
  }

  /**
   * @param {RepeatList} ResourceId - resourceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {Boolean} All - deleteAll. optional.
   * @param {RepeatList} TagKey - tagKey. optional.
   * @param {String} TagOwnerUid - tagOwnerUid. required.
   * @param {String} TagOwnerBid - tagOwnerBid. optional.
   */
  untagResourcesSystemTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'TagOwnerUid')) {
      throw new TypeError('parameter "TagOwnerUid" is required');
    }

    return this.request('UntagResourcesSystemTags', params, options);
  }

}

module.exports = Client;
