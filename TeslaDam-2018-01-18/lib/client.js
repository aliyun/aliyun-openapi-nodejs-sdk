
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-18';
    super(config);
  }

  /**
   * @param {Integer} OrderId - order_id. required.
   * @param {String} StepCode - step_code. required.
   */
  action(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'StepCode')) {
      throw new TypeError('parameter "StepCode" is required');
    }

    return this.request('Action', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} DiskMount - disk_mount. required.
   */
  actionDiskCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'DiskMount')) {
      throw new TypeError('parameter "DiskMount" is required');
    }

    return this.request('ActionDiskCheck', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} DiskMount - disk_mount. required.
   * @param {String} Op - op. required.
   */
  actionDiskMask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'DiskMount')) {
      throw new TypeError('parameter "DiskMount" is required');
    }

    if (!hasOwnProperty(params, 'Op')) {
      throw new TypeError('parameter "Op" is required');
    }

    return this.request('ActionDiskMask', params, options);
  }

  /**
   * @param {String} Hostname - hostname. required.
   * @param {String} DiskMount - disk_mount. required.
   * @param {String} ExecutionId - executionId. required.
   * @param {String} DiskSlot - disk_slot. required.
   * @param {String} DiskName - disk_name. required.
   * @param {String} DiskSn - disk_sn. required.
   * @param {String} DiskReason - disk_reason. required.
   */
  actionDiskRma(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Hostname')) {
      throw new TypeError('parameter "Hostname" is required');
    }

    if (!hasOwnProperty(params, 'DiskMount')) {
      throw new TypeError('parameter "DiskMount" is required');
    }

    if (!hasOwnProperty(params, 'ExecutionId')) {
      throw new TypeError('parameter "ExecutionId" is required');
    }

    if (!hasOwnProperty(params, 'DiskSlot')) {
      throw new TypeError('parameter "DiskSlot" is required');
    }

    if (!hasOwnProperty(params, 'DiskName')) {
      throw new TypeError('parameter "DiskName" is required');
    }

    if (!hasOwnProperty(params, 'DiskSn')) {
      throw new TypeError('parameter "DiskSn" is required');
    }

    if (!hasOwnProperty(params, 'DiskReason')) {
      throw new TypeError('parameter "DiskReason" is required');
    }

    return this.request('ActionDiskRma', params, options);
  }

  /**
   * @param {String} QueryType - query_type. required.
   * @param {String} Query - query. required.
   * @param {Integer} EndTime - end_time. required.
   * @param {Integer} StartTime - start_time. optional.
   */
  hostGets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    if (!hasOwnProperty(params, 'Query')) {
      throw new TypeError('parameter "Query" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('HostGets', params, options);
  }

}

module.exports = Client;
