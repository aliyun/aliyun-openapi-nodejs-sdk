
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-28';
    super(config);
  }

  /**
   * @param {String} HavanaId - havanaId. required.
   * @param {String} Name - name. required.
   * @param {String} Mobile - mobile. required.
   * @param {String} Email - email. required.
   * @param {String} Position - position. optional.
   * @param {Boolean} MobileConfirmed - mobileConfirmed. optional.
   * @param {Boolean} EmailConfirmed - emailConfirmed. optional.
   */
  createLinkByInnerHavanaId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('CreateLinkByInnerHavanaId', params, options);
  }

  /**
   * @param {String} HavanaId - havanaId. required.
   */
  dropAllLinksByInnerHavanaId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    return this.request('DropAllLinksByInnerHavanaId', params, options);
  }

  /**
   * @param {String} HavanaId - havanaId. required.
   * @param {Long} LinkId - linkId. required.
   */
  dropLinkByInnerHavanaId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    if (!hasOwnProperty(params, 'LinkId')) {
      throw new TypeError('parameter "LinkId" is required');
    }

    return this.request('DropLinkByInnerHavanaId', params, options);
  }

  /**
   * @param {Long} Aliuid - aliuid. required.
   * @param {String} ItemKey - itemKey. required.
   */
  getUserSubscriptionSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'ItemKey')) {
      throw new TypeError('parameter "ItemKey" is required');
    }

    return this.request('GetUserSubscriptionSwitch', params, options);
  }

  /**
   * @param {String} SessionId - sessionId. optional.
   * @param {String} ActivityCode - activityCode. optional.
   * @param {String} FromAppName - fromAppName. optional.
   * @param {Long} UserId - userId. optional.
   * @param {Boolean} HasResultDetail - hasResultDetail. optional.
   * @param {String} SubMethodName - subMethodName. optional.
   */
  processServiceExecutive(params = {}, options = {}) {
    return this.request('ProcessServiceExecutive', params, options);
  }

  /**
   * @param {Long} Aliuid - aliuid. required.
   * @param {String} ItemKey - itemKey. required.
   */
  select(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'ItemKey')) {
      throw new TypeError('parameter "ItemKey" is required');
    }

    return this.request('Select', params, options);
  }

  /**
   * @param {String} HavanaId - havanaId. required.
   */
  selectLinksByInnerHavanaId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    return this.request('SelectLinksByInnerHavanaId', params, options);
  }

  /**
   * @param {Long} Aliuid - aliuid. required.
   * @param {String} ItemKey - itemKey. required.
   * @param {Boolean} EmailEnable - emailEnable. optional.
   * @param {Boolean} SmsEnable - smsEnable. optional.
   * @param {Boolean} PmsgEnable - pmsgEnable. optional.
   * @param {Boolean} TtsEnable - ttsEnable. optional.
   */
  setUserSubscriptionSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'ItemKey')) {
      throw new TypeError('parameter "ItemKey" is required');
    }

    return this.request('SetUserSubscriptionSwitch', params, options);
  }

}

module.exports = Client;
