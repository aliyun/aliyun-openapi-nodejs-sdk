
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-03-21';
    super(config);
  }

  /**
   * @param {Long} AddStartTime - addStartTime. optional.
   * @param {Long} AddEndTime - addEndTime. optional.
   * @param {String} Ids - ids. optional.
   * @param {String} ProductIds - productIds. optional.
   * @param {String} QuestionStatus - questionStatus. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageStart - pageStart. optional.
   * @param {Long} callerBid - bid. required.
   */
  questionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerBid')) {
      throw new TypeError('parameter "callerBid" is required');
    }

    return this.request('QuestionList', params, options);
  }

  /**
   * @param {String} QuestionId - questionId. required.
   * @param {Long} callerBid - bid. optional.
   */
  questionListNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QuestionId')) {
      throw new TypeError('parameter "QuestionId" is required');
    }

    return this.request('QuestionListNote', params, options);
  }

  /**
   * @param {String} QuestionId - questionId. required.
   * @param {String} QuestionContent - questionContent. optional.
   * @param {String} QuestionSecContent - questionSecContent. optional.
   * @param {Long} callerBid - bid. optional.
   */
  questionReply(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QuestionId')) {
      throw new TypeError('parameter "QuestionId" is required');
    }

    return this.request('QuestionReply', params, options);
  }

  /**
   * @param {String} title - title. optional.
   * @param {String} content - content. required.
   * @param {String} secContent - secContent. optional.
   * @param {Long} productId - productId. optional.
   * @param {Long} customerCommonQuestionId - customerCommonQuestionId. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} phone - phone. optional.
   * @param {String} email - email. optional.
   * @param {String} smsAlertTime - smsAlertTime. optional. default: none.
   */
  add(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'content')) {
      throw new TypeError('parameter "content" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    return this.request('add', params, options);
  }

}

module.exports = Client;
