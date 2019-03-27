
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-09-30';
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
   * @param {String} QuestionId - questionId. optional.
   * @param {String} CommentContent - commentContent. optional.
   */
  closeQuestion(params = {}, options = {}) {
    return this.request('CloseQuestion', params, options);
  }

  /**
   * @param {String} QuestionId - questionId. optional.
   * @param {String} CommentContent - commentContent. optional.
   */
  closeQuestionTask(params = {}, options = {}) {
    return this.request('CloseQuestionTask', params, options);
  }

  /**
   * @param {String} QuestionId - questionId. optional.
   * @param {Integer} Code - code. optional.
   * @param {String} NoteId - noteId. optional.
   * @param {String} Message - message. optional.
   * @param {String} AttachIds - attachments. optional.
   */
  feedbackIllegalQuestion(params = {}, options = {}) {
    return this.request('FeedbackIllegalQuestion', params, options);
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
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} AddStartTime - addStartTime. optional.
   * @param {Integer} PageStart - pageStart. optional.
   * @param {Long} AddEndTime - addEndTime. optional.
   * @param {String} Ids - ids. optional.
   * @param {String} ProductIds - productIds. optional.
   * @param {Long} Bid - bid. optional.
   * @param {String} QuestionStatus - questionStatus. optional.
   */
  listQuestion(params = {}, options = {}) {
    return this.request('ListQuestion', params, options);
  }

  /**
   * @param {String} QuestionId - questionId. required.
   * @param {String} NoteId - noteId. optional.
   */
  listQuestionNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QuestionId')) {
      throw new TypeError('parameter "QuestionId" is required');
    }

    return this.request('ListQuestionNote', params, options);
  }

}

module.exports = Client;
