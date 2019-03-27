
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-08';
    super(config);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} AccountName - accountName. optional.
   * @param {Long} ConsumeValue - consumeValue. required.
   * @param {String} ConsumeSource - consumeSource. required.
   * @param {String} ConsumeTarget - consumeTarget. optional.
   * @param {String} BusinessType - bizType. required.
   * @param {Long} ConsumeDate - consumeDate. optional.
   * @param {String} ConsumeDescription - consumeDescription. required.
   * @param {String} FromAppName - fromAppName. required.
   * @param {String} Token - token. required.
   */
  consumeUserPoints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ConsumeValue')) {
      throw new TypeError('parameter "ConsumeValue" is required');
    }

    if (!hasOwnProperty(params, 'ConsumeSource')) {
      throw new TypeError('parameter "ConsumeSource" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'ConsumeDescription')) {
      throw new TypeError('parameter "ConsumeDescription" is required');
    }

    if (!hasOwnProperty(params, 'FromAppName')) {
      throw new TypeError('parameter "FromAppName" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('ConsumeUserPoints', params, options);
  }

  /**
   */
  getClientToken(params = {}, options = {}) {
    return this.request('GetClientToken', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {Long} BeginTime - beginTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} BusinessType - bizType. optional.
   * @param {String} DispenseSource - dispenseSource. optional.
   * @param {String} RuleCode - ruleCode. optional.
   * @param {String} FlowDirection - flowDirection. optional.
   * @param {Boolean} DescendingFlag - descFlag. optional.
   * @param {Long} CurrentPage - currentPage. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  listUserPointsFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListUserPointsFlow', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   */
  queryUserPoints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('QueryUserPoints', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} RuleCode - ruleCode. required.
   * @param {Long} SendValue - sendValue. optional.
   * @param {String} BusinessType - bizType. required.
   * @param {Long} GenerateDate - generateDate. optional.
   * @param {String} SendDescription - sendDescription. optional.
   * @param {String} FromAppName - fromAppName. required.
   * @param {String} Token - token. required.
   */
  sendUserPoints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RuleCode')) {
      throw new TypeError('parameter "RuleCode" is required');
    }

    if (!hasOwnProperty(params, 'BusinessType')) {
      throw new TypeError('parameter "BusinessType" is required');
    }

    if (!hasOwnProperty(params, 'FromAppName')) {
      throw new TypeError('parameter "FromAppName" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('SendUserPoints', params, options);
  }

}

module.exports = Client;
