
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-25';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {Long} status - status. optional.
   */
  changeEventTriggerStatus(params = {}, options = {}) {
    return this.request('ChangeEventTriggerStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Uuid - uuid. optional.
   */
  deleteEventTrigger(params = {}, options = {}) {
    return this.request('DeleteEventTrigger', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Uuid - uuid. optional.
   */
  getEventTrigger(params = {}, options = {}) {
    return this.request('GetEventTrigger', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {Long} Offset - offset. optional.
   * @param {Long} Length - length. optional.
   */
  listEventTrigger(params = {}, options = {}) {
    return this.request('ListEventTrigger', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} eventProduct - eventProduct. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} EventName - eventName. optional.
   * @param {String} ShowName - showName. optional.
   * @param {String} Detail - detail. optional.
   * @param {String} appGroupId - appGroupId. optional.
   * @param {String} appGroupName - appGroupName. optional.
   * @param {String} ConditionJson - conditionJson. optional.
   * @param {String} MatchJson - matchJson. optional.
   * @param {String} TargetListJson - targetListJson. optional.
   */
  setEventTrigger(params = {}, options = {}) {
    return this.request('SetEventTrigger', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} callby_cms_owner - callby_cms_owner. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} ShowName - showName. optional.
   * @param {String} Detail - detail. optional.
   */
  updateEventTriggerDesc(params = {}, options = {}) {
    return this.request('UpdateEventTriggerDesc', params, options);
  }

}

module.exports = Client;
