
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-10-01';
    super(config);
  }

  /**
   * @param {String} CcsInstanceId - ccsInstanceId. optional.
   * @param {String} Type - type. optional.
   * @param {String} Description - description. optional.
   * @param {String} CreatorId - creatorId. optional.
   * @param {String} CustomFields - customFields. optional.
   */
  createTicket(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CreateTicket', params, options);
  }

  /**
   * @param {String} Id - id. required.
   * @param {String} CcsInstanceId - ccsInstanceId. optional.
   */
  getHotlineRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetHotlineRecord', params, options);
  }

  /**
   * @param {String} CcsInstanceId - ccsInstanceId. optional.
   * @param {String} Id - id. optional.
   * @param {String} Operation - operation. optional.
   * @param {String} OperatorId - operatorId. optional.
   * @param {String} Memo - memo. optional.
   */
  proceedTicket(params = {}, options = {}) {
    return this.request('ProceedTicket', params, options);
  }

  /**
   * @param {String} StartTime - startTime. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} VisitorId - visitorId. optional.
   * @param {String} VisitorProvince - visitorProvince. optional.
   * @param {String} VisitorPhone - visitorPhone. optional.
   * @param {String} CallType - callType. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Long} MaxTalkDuration - maxTalkDuration. optional.
   * @param {Long} MinTalkDuratoin - minTalkDuratoin. optional.
   * @param {String} Status - status. optional.
   * @param {String} Satisfaction - satisfaction. optional.
   * @param {String} CategoryIds - categoryIds. optional.
   * @param {String} CcsInstanceId - ccsInstanceId. optional.
   */
  queryHotlineRecord(params = {}, options = {}) {
    return this.request('QueryHotlineRecord', params, options);
  }

  /**
   * @param {String} CcsInstanceId - ccsInstanceId. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Type - type. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} CreatorId - creatorId. optional.
   * @param {String} Stage - stage. optional.
   */
  queryTicket(params = {}, options = {}) {
    return this.request('QueryTicket', params, options);
  }

}

module.exports = Client;
