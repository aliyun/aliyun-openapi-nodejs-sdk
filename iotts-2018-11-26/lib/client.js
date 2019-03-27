
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-26';
    super(config);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Params - params. required.
   */
  createMonkeyTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Params')) {
      throw new TypeError('parameter "Params" is required');
    }

    options.method = 'POST';
    return this.request('CreateMonkeyTask', params, options);
  }

  /**
   * @param {Integer} TaskId - taskId. required.
   */
  deleteMonkeyTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteMonkeyTask', params, options);
  }

  /**
   */
  getFieldOptionPassed(params = {}, options = {}) {
    return this.request('GetFieldOptionPassed', params, options);
  }

  /**
   * @param {String} Keyword - keyword. optional.
   * @param {String} Brand - brand. optional.
   * @param {String} Model - model. optional.
   * @param {String} SwChannels - swChannels. optional.
   * @param {Long} Id - id. optional.
   * @param {Integer} CertifyPlanType - certifyPlanType. optional.
   * @param {Integer} CertifyType - certifyType. optional.
   * @param {Integer} ServiceType - serviceType. optional.
   * @param {RepeatList} DeviceTypeList - deviceTypeList. optional.
   * @param {RepeatList} ProtocolList - protocolList. optional.
   * @param {RepeatList} FuncEnumIdList - funcEnumIdList. optional.
   * @param {RepeatList} ChipTypeList - chipTypeList. optional.
   * @param {RepeatList} TerminalTypeList - terminalTypeList. optional.
   * @param {Long} StartApplyDate - startApplyDate. optional.
   * @param {Long} EndApplyDate - endApplyDate. optional.
   * @param {Long} StartVerifyDate - startVerifyDate. optional.
   * @param {Long} EndVerifyDate - endVerifyDate. optional.
   * @param {Long} StartPassDate - startPassDate. optional.
   * @param {Long} EndPassDate - endPassDate. optional.
   * @param {Long} StartPayDate - startPayDate. optional.
   * @param {Long} EndPayDate - endPayDate. optional.
   * @param {Long} StartExpressGetDate - startExpressGetDate. optional.
   * @param {Long} EndExpressGetDate - endExpressGetDate. optional.
   * @param {String} DeviceType - deviceType. optional.
   * @param {String} Protocol - protocol. optional.
   * @param {String} Platform - platform. optional.
   * @param {String} DeviceTypeType - deviceTypeType. optional.
   * @param {Integer} NetType - netType. optional.
   * @param {RepeatList} PlatformList - platformList. optional.
   * @param {Integer} CertifyPlan - certifyPlan. optional.
   */
  getPassList(params = {}, options = {}) {
    return this.request('GetPassList', params, options);
  }

  /**
   * @param {Integer} TaskId - taskId. required.
   */
  queryMonkeyTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    options.method = 'POST';
    return this.request('QueryMonkeyTask', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryMonkeyTaskList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    options.method = 'POST';
    return this.request('QueryMonkeyTaskList', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   */
  queryThingModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    options.method = 'POST';
    return this.request('QueryThingModel', params, options);
  }

  /**
   * @param {Integer} TaskId - taskId. required.
   */
  stopMonkeyTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    options.method = 'POST';
    return this.request('StopMonkeyTask', params, options);
  }

  /**
   */
  userVerification(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('UserVerification', params, options);
  }

}

module.exports = Client;
