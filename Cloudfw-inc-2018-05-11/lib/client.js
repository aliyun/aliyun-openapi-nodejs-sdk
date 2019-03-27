
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-11';
    super(config);
  }

  /**
   * @param {String} data - data. required.
   */
  cFwPayCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CFwPayCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cFwPayCompletedParamValid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CFwPayCompletedParamValid', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cFwPayFillCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CFwPayFillCommodity', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  cFwPayRefundCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CFwPayRefundCallback', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} UserId - queries.userId. required.
   * @param {String} SrcIP - queries.srcIP. required.
   * @param {String} DstIP - queries.dstIP. required.
   * @param {String} DstPort - queries.dstPort. required.
   * @param {String} DstPortEnd - queries.dstPortEnd. optional.
   * @param {String} IpProtocol - queries.ipProtocol. required.
   * @param {String} AttackType - queries.attackType. required.
   * @param {String} RuleName - queries.ruleName. required.
   * @param {String} RuleResult - queries.ruleResult. required.
   * @param {String} RiskLevel - queries.riskLevel. required.
   * @param {String} DataSource - queries.dataSource. required.
   * @param {String} LiveTime - queries.liveTime. required.
   * @param {String} SourceUid - queries.sourceUid. required.
   * @param {String} Description - queries.description. required.
   */
  createUserIntelligence(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'SrcIP')) {
      throw new TypeError('parameter "SrcIP" is required');
    }

    if (!hasOwnProperty(params, 'DstIP')) {
      throw new TypeError('parameter "DstIP" is required');
    }

    if (!hasOwnProperty(params, 'DstPort')) {
      throw new TypeError('parameter "DstPort" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'AttackType')) {
      throw new TypeError('parameter "AttackType" is required');
    }

    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    if (!hasOwnProperty(params, 'RuleResult')) {
      throw new TypeError('parameter "RuleResult" is required');
    }

    if (!hasOwnProperty(params, 'RiskLevel')) {
      throw new TypeError('parameter "RiskLevel" is required');
    }

    if (!hasOwnProperty(params, 'DataSource')) {
      throw new TypeError('parameter "DataSource" is required');
    }

    if (!hasOwnProperty(params, 'LiveTime')) {
      throw new TypeError('parameter "LiveTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceUid')) {
      throw new TypeError('parameter "SourceUid" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateUserIntelligence', params, options);
  }

  /**
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('DoCheckResource', params, options);
  }

  /**
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  logicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('LogicalDelete', params, options);
  }

  /**
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  physicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('PhysicalDelete', params, options);
  }

}

module.exports = Client;
