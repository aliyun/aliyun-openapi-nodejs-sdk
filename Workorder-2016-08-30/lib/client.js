
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-30';
    super(config);
  }

  /**
   * @param {Long} Uid - uid. required.
   */
  queryUserStatByQuestionStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('QueryUserStatByQuestionStatus', params, options);
  }

  /**
   * @param {Long} AddStartTime - addStartTime. optional.
   * @param {Long} AddEndTime - addEndTime. optional.
   * @param {String} Ids - ids. optional.
   * @param {String} ProductIds - productIds. optional.
   * @param {String} QuestionStatus - questionStatus. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageStart - pageStart. optional.
   */
  questionList(params = {}, options = {}) {
    return this.request('QuestionList', params, options);
  }

  /**
   * @param {String} QuestionId - questionId. required.
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
   * @param {String} attachments - attachments. optional.
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
   * @param {String} attachments - attachments. optional.
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

  /**
   * @param {String} attachId - attachId. required.
   */
  getAttachTempURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'attachId')) {
      throw new TypeError('parameter "attachId" is required');
    }

    return this.request('getAttachTempURL', params, options);
  }

  /**
   */
  getOSSTempAuthor(params = {}, options = {}) {
    return this.request('getOSSTempAuthor', params, options);
  }

}

module.exports = Client;
