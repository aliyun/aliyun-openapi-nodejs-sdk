
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-10';
    super(config);
  }

  /**
   * @param {String} AttachId - attachId. required.
   */
  getAttachTempURLAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AttachId')) {
      throw new TypeError('parameter "AttachId" is required');
    }

    return this.request('GetAttachTempURLAuth', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} AddStartTime - addStartTime. optional.
   * @param {Integer} PageStart - pageStart. optional.
   * @param {Long} AddEndTime - addEndTime. optional.
   * @param {String} Ids - ids. optional.
   * @param {String} ProductIds - productIds. optional.
   * @param {String} QuestionStatus - questionStatus. optional.
   * @param {Long} RenterId - renterId. optional.
   */
  listQuestionAuth(params = {}, options = {}) {
    return this.request('ListQuestionAuth', params, options);
  }

  /**
   * @param {String} QuestionId - questionId. required.
   */
  listQuestionNoteAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QuestionId')) {
      throw new TypeError('parameter "QuestionId" is required');
    }

    return this.request('ListQuestionNoteAuth', params, options);
  }

}

module.exports = Client;
