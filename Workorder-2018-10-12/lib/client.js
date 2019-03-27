
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-12';
    super(config);
  }

  /**
   * @param {String} MsgId - msgId. optional.
   */
  ackQuestionEvent(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('AckQuestionEvent', params, options);
  }

  /**
   * @param {String} Email - email. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} SecContent - secContent. optional.
   * @param {Long} ProductId - productId. optional.
   * @param {Long} CustomerCommonQuestionId - customerCommonQuestionId. optional.
   * @param {String} Content - content. required.
   * @param {String} Title - title. optional.
   * @param {String} SmsAlertTime - smsAlertTime. optional. default: none.
   * @param {String} Attachments - attachments. optional.
   * @param {String} Language - language. optional.
   * @param {String} Severity - severity. optional.
   */
  addQuestion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('AddQuestion', params, options);
  }

  /**
   * @param {String} AttachId - attachId. required.
   */
  getAttachTempURL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AttachId')) {
      throw new TypeError('parameter "AttachId" is required');
    }

    return this.request('GetAttachTempURL', params, options);
  }

  /**
   */
  getOSSTempAuthor(params = {}, options = {}) {
    return this.request('GetOSSTempAuthor', params, options);
  }

  /**
   * @param {String} LastVersion - lastVersion. optional.
   * @param {String} LastMsgId - lastMsgId. optional.
   * @param {Long} LastTimestamp - lastTimestamp. optional.
   * @param {Integer} Count - count. optional.
   * @param {Boolean} Keep - keep. optional. default: False.
   */
  getQuestionEvent(params = {}, options = {}) {
    return this.request('GetQuestionEvent', params, options);
  }

  /**
   * @param {Long} AddStartTime - addStartTime. optional.
   * @param {String} ProductIds - productIds. optional.
   * @param {Integer} PageStart - pageStart. optional.
   * @param {Long} AddEndTime - addEndTime. optional.
   * @param {String} Ids - ids. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} QuestionStatus - questionStatus. optional.
   */
  listQuestion(params = {}, options = {}) {
    return this.request('ListQuestion', params, options);
  }

  /**
   * @param {String} QuestionId - questionId. required.
   */
  listQuestionNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QuestionId')) {
      throw new TypeError('parameter "QuestionId" is required');
    }

    return this.request('ListQuestionNote', params, options);
  }

  /**
   * @param {String} QuestionId - questionId. required.
   * @param {String} QuestionContent - questionContent. optional.
   * @param {String} QuestionSecContent - questionSecContent. optional.
   * @param {String} Attachments - attachments. optional.
   */
  replyQuestion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QuestionId')) {
      throw new TypeError('parameter "QuestionId" is required');
    }

    return this.request('ReplyQuestion', params, options);
  }

}

module.exports = Client;
