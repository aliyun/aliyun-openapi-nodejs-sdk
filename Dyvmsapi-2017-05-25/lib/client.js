
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-25';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CallId - callId. required.
   */
  cancelCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    return this.request('CancelCall', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CallerShowNumber - callerShowNumber. required.
   * @param {String} CallerNumber - callerNumber. required.
   * @param {String} CalledShowNumber - calledShowNumber. required.
   * @param {String} CalledNumber - calledNumber. required.
   * @param {Boolean} RecordFlag - recordFlag. optional.
   * @param {Boolean} AsrFlag - asrFlag. optional.
   * @param {Integer} SessionTimeout - sessionTimeout. optional.
   * @param {String} AsrModelId - asrModelId. optional.
   * @param {String} OutId - outId. optional.
   */
  clickToDial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallerShowNumber')) {
      throw new TypeError('parameter "CallerShowNumber" is required');
    }

    if (!hasOwnProperty(params, 'CallerNumber')) {
      throw new TypeError('parameter "CallerNumber" is required');
    }

    if (!hasOwnProperty(params, 'CalledShowNumber')) {
      throw new TypeError('parameter "CalledShowNumber" is required');
    }

    if (!hasOwnProperty(params, 'CalledNumber')) {
      throw new TypeError('parameter "CalledNumber" is required');
    }

    return this.request('ClickToDial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CalledShowNumber - calledShowNumber. required.
   * @param {String} CalledNumber - calledNumber. required.
   * @param {String} StartCode - startCode. required.
   * @param {String} StartTtsParams - startTtsParams. optional.
   * @param {RepeatList} MenuKeyMap - menuKeyMapList. optional.
   * @param {Long} PlayTimes - playTimes. optional.
   * @param {String} ByeCode - byeCode. optional.
   * @param {String} ByeTtsParams - byeTtsParams. optional.
   * @param {Integer} Timeout - timeout. optional.
   * @param {String} OutId - outId. optional.
   */
  ivrCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CalledShowNumber')) {
      throw new TypeError('parameter "CalledShowNumber" is required');
    }

    if (!hasOwnProperty(params, 'CalledNumber')) {
      throw new TypeError('parameter "CalledNumber" is required');
    }

    if (!hasOwnProperty(params, 'StartCode')) {
      throw new TypeError('parameter "StartCode" is required');
    }

    return this.request('IvrCall', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CallId - callId. required.
   * @param {Long} ProdId - prodId. required.
   * @param {Long} QueryDate - queryDate. required.
   */
  queryCallDetailByCallId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    if (!hasOwnProperty(params, 'QueryDate')) {
      throw new TypeError('parameter "QueryDate" is required');
    }

    return this.request('QueryCallDetailByCallId', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CalledShowNumber - calledShowNumber. required.
   * @param {String} CalledNumber - calledNumber. required.
   * @param {String} TtsCode - ttsCode. required.
   * @param {String} TtsParam - ttsParam. optional.
   * @param {Integer} PlayTimes - playTimes. optional.
   * @param {Integer} Volume - volume. optional.
   * @param {Integer} Speed - speed. optional.
   * @param {String} OutId - outId. optional.
   */
  singleCallByTts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CalledShowNumber')) {
      throw new TypeError('parameter "CalledShowNumber" is required');
    }

    if (!hasOwnProperty(params, 'CalledNumber')) {
      throw new TypeError('parameter "CalledNumber" is required');
    }

    if (!hasOwnProperty(params, 'TtsCode')) {
      throw new TypeError('parameter "TtsCode" is required');
    }

    return this.request('SingleCallByTts', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CalledShowNumber - calledShowNumber. required.
   * @param {String} CalledNumber - calledNumber. required.
   * @param {String} VoiceCode - voiceCode. required.
   * @param {Integer} PlayTimes - playTimes. optional.
   * @param {Integer} Volume - volume. optional.
   * @param {Integer} Speed - speed. optional.
   * @param {String} OutId - outId. optional.
   */
  singleCallByVoice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CalledShowNumber')) {
      throw new TypeError('parameter "CalledShowNumber" is required');
    }

    if (!hasOwnProperty(params, 'CalledNumber')) {
      throw new TypeError('parameter "CalledNumber" is required');
    }

    if (!hasOwnProperty(params, 'VoiceCode')) {
      throw new TypeError('parameter "VoiceCode" is required');
    }

    return this.request('SingleCallByVoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CalledShowNumber - calledShowNumber. required.
   * @param {String} CalledNumber - calledNumber. required.
   * @param {String} VoiceCode - voiceCode. required.
   * @param {Boolean} RecordFlag - recordFlag. optional.
   * @param {Integer} Volume - volume. optional.
   * @param {Integer} Speed - speed. optional.
   * @param {String} AsrModelId - asrModelId. optional.
   * @param {Integer} PauseTime - pauseTime. optional.
   * @param {Integer} MuteTime - muteTime. optional.
   * @param {Boolean} ActionCodeBreak - actionCodeBreak. optional.
   * @param {String} OutId - outId. optional.
   * @param {String} DynamicId - dynamicId. optional.
   */
  smartCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CalledShowNumber')) {
      throw new TypeError('parameter "CalledShowNumber" is required');
    }

    if (!hasOwnProperty(params, 'CalledNumber')) {
      throw new TypeError('parameter "CalledNumber" is required');
    }

    if (!hasOwnProperty(params, 'VoiceCode')) {
      throw new TypeError('parameter "VoiceCode" is required');
    }

    return this.request('SmartCall', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DeviceId - deviceId. required.
   */
  voipAddAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('VoipAddAccount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VoipId - voipId. required.
   * @param {String} DeviceId - deviceId. required.
   */
  voipGetToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VoipId')) {
      throw new TypeError('parameter "VoipId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceId')) {
      throw new TypeError('parameter "DeviceId" is required');
    }

    return this.request('VoipGetToken', params, options);
  }

}

module.exports = Client;
