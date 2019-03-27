
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-12';
    super(config);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  cancelIneffective(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CancelIneffective', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  checkOrderBeforePay(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CheckOrderBeforePay', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  getSpecifications(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GetSpecifications', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  globalSyncSubData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GlobalSyncSubData', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  globalSyncSubRelease(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('GlobalSyncSubRelease', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  openCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('OpenCallback', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryForCssOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryForCssOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryForOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryForOrder', params, options);
  }

  /**
   * @param {String} paramStr - paramStr. required.
   */
  queryInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'paramStr')) {
      throw new TypeError('parameter "paramStr" is required');
    }

    return this.request('QueryInstance', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  aliwoodPayOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('aliwoodPayOrderCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  emasCompleteOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('emasCompleteOrderParam', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  emasPayOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('emasPayOrderCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  emasRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('emasRefund', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  global_testCompleteCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('global_testCompleteCommodity', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  global_testPayOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('global_testPayOrderCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  global_testVerify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('global_testVerify', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  iotMarketPayOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('iotMarketPayOrderCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  iotPayOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('iotPayOrderCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  iotvpcPayOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('iotvpcPayOrderCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  iovccPayOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('iovccPayOrderCallback', params, options);
  }

}

module.exports = Client;
