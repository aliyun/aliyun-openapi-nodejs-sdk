
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-28';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   * @param {String} Ipsegment - ipsegment. optional.
   * @param {String} Memo - memo. optional.
   */
  addIPSegment(params = {}, options = {}) {
    return this.request('AddIPSegment', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   */
  createBoxCode(params = {}, options = {}) {
    return this.request('CreateBoxCode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   * @param {Integer} BoxNumber - boxNumber. optional.
   * @param {Boolean} ServiceFlag - serviceFlag. optional.
   */
  createEnterprise(params = {}, options = {}) {
    return this.request('CreateEnterprise', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   */
  getBoxCodeList(params = {}, options = {}) {
    return this.request('GetBoxCodeList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   */
  getEnterpriseConfig(params = {}, options = {}) {
    return this.request('GetEnterpriseConfig', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   */
  getIPSegmentsList(params = {}, options = {}) {
    return this.request('GetIPSegmentsList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   */
  getRegisterBoxList(params = {}, options = {}) {
    return this.request('GetRegisterBoxList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   */
  getRegisterBoxNumber(params = {}, options = {}) {
    return this.request('GetRegisterBoxNumber', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   */
  getRegisterHistoryList(params = {}, options = {}) {
    return this.request('GetRegisterHistoryList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   */
  getWelcomePageURI(params = {}, options = {}) {
    return this.request('GetWelcomePageURI', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   * @param {String} Code - code. optional.
   */
  removeBoxCode(params = {}, options = {}) {
    return this.request('RemoveBoxCode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   * @param {String} Uuid - uuid. optional.
   */
  removeIPSegment(params = {}, options = {}) {
    return this.request('RemoveIPSegment', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   * @param {String} Drsessionid - drsessionid. optional.
   */
  removeRegisterBox(params = {}, options = {}) {
    return this.request('RemoveRegisterBox', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   * @param {String} Welcomeuri - welcomeuri. optional.
   */
  setWelcomePageURI(params = {}, options = {}) {
    return this.request('SetWelcomePageURI', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   * @param {String} ConfigKey - configKey. optional.
   * @param {String} ConfigValue - configValue. optional.
   * @param {String} Memo - memo. optional.
   */
  updateEnterpriseConfig(params = {}, options = {}) {
    return this.request('UpdateEnterpriseConfig', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} Ipsegment - ipsegment. optional.
   * @param {String} Memo - memo. optional.
   */
  updateIPSegment(params = {}, options = {}) {
    return this.request('UpdateIPSegment', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Sysfrom - sysfrom. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Clientappid - clientappid. optional.
   * @param {String} Screencode - screencode. optional.
   * @param {String} Drname - drname. optional.
   */
  updateRoomName(params = {}, options = {}) {
    return this.request('UpdateRoomName', params, options);
  }

}

module.exports = Client;
