
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-05-11';
    super(config);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {String} Zone - zone. optional.
   */
  addBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('AddBlackhole', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {String} Zone - zone. optional.
   */
  addDefense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('AddDefense', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {String} Zone - zone. optional.
   */
  delBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DelBlackhole', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {String} Mask - mask. optional.
   */
  delBlackholeThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DelBlackholeThreshold', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {String} Zone - zone. optional.
   */
  delDefense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DelDefense', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Ip - ip. required.
   * @param {String} Mask - mask. optional.
   */
  delDefenseThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DelDefenseThreshold', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Mask - mask. optional.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  delTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('DelTemplate', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  flowRecent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('FlowRecent', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Zone - zone. optional.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  getBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('GetBlackhole', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Mask - mask. optional.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  getBlackholeThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('GetBlackholeThreshold', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Zone - zone. optional.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  getDefense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('GetDefense', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Mask - mask. optional.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  getDefenseThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('GetDefenseThreshold', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Mask - mask. optional.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  getTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('GetTemplate', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Id - id. required.
   * @param {String} Key - key. required.
   */
  huiGuiQueryResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('HuiGuiQueryResult', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  huiGuiQueryStaff(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('HuiGuiQueryStaff', params, options);
  }

  /**
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   * @param {String} Id - id. required.
   * @param {String} Dip - dip. required.
   * @param {String} Key - key. required.
   */
  huiGuiRequestTest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Dip')) {
      throw new TypeError('parameter "Dip" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('HuiGuiRequestTest', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Mask - mask. optional.
   * @param {String} Bps - bps. required.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  setBlackholeThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Bps')) {
      throw new TypeError('parameter "Bps" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('SetBlackholeThreshold', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Mask - mask. optional.
   * @param {String} Bps - bps. required.
   * @param {String} Qps - qps. required.
   * @param {String} Pps - pps. required.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  setDefenseThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Bps')) {
      throw new TypeError('parameter "Bps" is required');
    }

    if (!hasOwnProperty(params, 'Qps')) {
      throw new TypeError('parameter "Qps" is required');
    }

    if (!hasOwnProperty(params, 'Pps')) {
      throw new TypeError('parameter "Pps" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('SetDefenseThreshold', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Template - template. required.
   * @param {String} Mask - mask. optional.
   * @param {String} UpStream - upstream. required.
   * @param {String} Caller - caller. required.
   * @param {String} Time - time. required.
   */
  setTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    if (!hasOwnProperty(params, 'UpStream')) {
      throw new TypeError('parameter "UpStream" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('SetTemplate', params, options);
  }

}

module.exports = Client;
