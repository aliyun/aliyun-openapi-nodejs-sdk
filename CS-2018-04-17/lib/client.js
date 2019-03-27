
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-04-17';
    super(config);
  }

  /**
   * @param {Boolean} Interrupt - Interrupt. optional.
   * @param {String} Invoker - Invoker. optional.
   * @param {String} Pk - PK. required.
   * @param {String} Bid - Bid. required.
   * @param {Long} Hid - Hid. required.
   * @param {String} TaskIdentifier - TaskIdentifier. optional.
   * @param {String} TaskExtraData - TaskExtraData. optional.
   * @param {String} GmtWakeup - GmtWakeup. optional.
   * @param {String} Country - Country. optional.
   */
  checkResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('CheckResources', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  clusterProduceNotify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ClusterProduceNotify', params, options);
  }

  /**
   * @param {Boolean} Interrupt - Interrupt. optional.
   * @param {String} Invoker - Invoker. optional.
   * @param {String} Pk - PK. required.
   * @param {String} Bid - Bid. required.
   * @param {Long} Hid - Hid. required.
   * @param {String} TaskIdentifier - TaskIdentifier. optional.
   * @param {String} TaskExtraData - TaskExtraData. optional.
   * @param {String} GmtWakeup - GmtWakeup. optional.
   * @param {String} Country - Country. optional.
   */
  logicalDeleteResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('LogicalDeleteResources', params, options);
  }

  /**
   * @param {Boolean} Interrupt - Interrupt. optional.
   * @param {String} Invoker - Invoker. optional.
   * @param {String} Pk - PK. required.
   * @param {String} Bid - Bid. required.
   * @param {Long} Hid - Hid. required.
   * @param {String} TaskIdentifier - TaskIdentifier. optional.
   * @param {String} TaskExtraData - TaskExtraData. optional.
   * @param {String} GmtWakeup - GmtWakeup. optional.
   * @param {String} Country - Country. optional.
   */
  physicalDeleteResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('PhysicalDeleteResources', params, options);
  }

}

module.exports = Client;
