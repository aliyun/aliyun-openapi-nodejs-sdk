
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-20';
    super(config);
  }

  /**
   * @param {Long} EventId - eventId. required.
   */
  cancelEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('CancelEvent', params, options);
  }

  /**
   * @param {String} EventTitle - eventTitle. required.
   * @param {Integer} EventType - eventType. optional.
   * @param {Long} BrandId - brandId. optional.
   * @param {String} CreatorId - creatorId. required.
   * @param {String} JsonParams - jsonParams. required.
   */
  createEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventTitle')) {
      throw new TypeError('parameter "EventTitle" is required');
    }

    if (!hasOwnProperty(params, 'CreatorId')) {
      throw new TypeError('parameter "CreatorId" is required');
    }

    if (!hasOwnProperty(params, 'JsonParams')) {
      throw new TypeError('parameter "JsonParams" is required');
    }

    return this.request('CreateEvent', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {Integer} ItemType - itemType. required.
   * @param {Long} RelationId - relationId. required.
   */
  findEPersonalConfigAll(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'ItemType')) {
      throw new TypeError('parameter "ItemType" is required');
    }

    if (!hasOwnProperty(params, 'RelationId')) {
      throw new TypeError('parameter "RelationId" is required');
    }

    return this.request('FindEPersonalConfigAll', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {String} JsonParams - jsonParams. required.
   */
  modifyEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'JsonParams')) {
      throw new TypeError('parameter "JsonParams" is required');
    }

    return this.request('ModifyEvent', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   */
  publishEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('PublishEvent', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {Integer} ItemType - itemType. required.
   * @param {Long} RelationId - relationId. required.
   * @param {String} EpcJsonDTOs - epcJsonDTOs. optional.
   */
  saveEPersonalConfigAll(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'ItemType')) {
      throw new TypeError('parameter "ItemType" is required');
    }

    if (!hasOwnProperty(params, 'RelationId')) {
      throw new TypeError('parameter "RelationId" is required');
    }

    return this.request('SaveEPersonalConfigAll', params, options);
  }

}

module.exports = Client;
