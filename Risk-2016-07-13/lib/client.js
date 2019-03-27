
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-13';
    super(config);
  }

  /**
   * @param {String} Type - type. optional.
   * @param {String} DataType - dataType. optional.
   * @param {String} DataValue - dataValue. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Applicant - applicant. optional.
   * @param {String} Reason - reason. optional.
   * @param {String} Mark - mark. optional.
   * @param {String} BpmsUrl - bpmsUrl. optional.
   * @param {Json} Extend - extend. optional.
   */
  addNameList(params = {}, options = {}) {
    return this.request('AddNameList', params, options);
  }

  /**
   * @param {String} Type - type. optional.
   * @param {String} DataType - dataType. optional.
   * @param {String} DataValue - dataValue. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Applicant - applicant. optional.
   * @param {String} Reason - reason. optional.
   * @param {String} Mark - mark. optional.
   * @param {String} BpmsUrl - bpmsUrl. optional.
   * @param {Json} Extend - extend. optional.
   */
  delNameList(params = {}, options = {}) {
    return this.request('DelNameList', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} MteeCode - mteeCode. required.
   * @param {String} CodeType - codeType. required.
   * @param {String} IdType - idType. required.
   * @param {String} Collina - collina. optional.
   * @param {String} UmidToken - umidToken. optional.
   * @param {String} Ip - ip. optional.
   * @param {String} Email - email. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} Umid - umid. optional.
   * @param {Json} Extend - extend. optional.
   */
  findRisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'MteeCode')) {
      throw new TypeError('parameter "MteeCode" is required');
    }

    if (!hasOwnProperty(params, 'CodeType')) {
      throw new TypeError('parameter "CodeType" is required');
    }

    if (!hasOwnProperty(params, 'IdType')) {
      throw new TypeError('parameter "IdType" is required');
    }

    return this.request('FindRisk', params, options);
  }

  /**
   * @param {String} IdType - idType. optional.
   * @param {String} MteeCode - mteeCode. required.
   * @param {String} CodeType - codeType. required.
   * @param {String} UserId - userId. optional.
   * @param {String} HavanaId - havanaId. optional.
   * @param {String} AliyunIdkp - aliyunIdkp. optional.
   * @param {Json} Extend - extend. optional.
   * @param {Json} Parameters - parameters. optional.
   */
  pushData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MteeCode')) {
      throw new TypeError('parameter "MteeCode" is required');
    }

    if (!hasOwnProperty(params, 'CodeType')) {
      throw new TypeError('parameter "CodeType" is required');
    }

    return this.request('PushData', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} IdType - idType. required.
   * @param {Long} StartDate - startDate. optional.
   * @param {Long} EndDate - endDate. optional.
   */
  queryHitUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'IdType')) {
      throw new TypeError('parameter "IdType" is required');
    }

    return this.request('QueryHitUser', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} DataType - dataType. required.
   * @param {String} DataValue - dataValue. required.
   * @param {String} QueryLike - queryLike. required.
   * @param {Json} Extend - extend. optional.
   */
  queryNameList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'DataValue')) {
      throw new TypeError('parameter "DataValue" is required');
    }

    if (!hasOwnProperty(params, 'QueryLike')) {
      throw new TypeError('parameter "QueryLike" is required');
    }

    return this.request('QueryNameList', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} DataType - dataType. required.
   * @param {String} DataValue - dataValue. required.
   * @param {String} QueryLike - queryLike. required.
   * @param {Json} Extend - extend. optional.
   */
  queryNameListForLx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'DataValue')) {
      throw new TypeError('parameter "DataValue" is required');
    }

    if (!hasOwnProperty(params, 'QueryLike')) {
      throw new TypeError('parameter "QueryLike" is required');
    }

    return this.request('QueryNameListForLx', params, options);
  }

  /**
   * @param {String} RiskRequestId - riskRequestId. optional.
   * @param {String} MteeCode - mteeCode. required.
   * @param {String} CodeType - codeType. required.
   * @param {String} IdType - idType. required.
   * @param {String} UserId - userId. required.
   * @param {String} ChannelType - channelType. required.
   * @param {String} BizId - bizId. optional.
   * @param {String} EventId - eventId. optional.
   * @param {String} MessageReiver - messageReiver. optional.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {Json} MessageParameters - messageParameters. optional.
   * @param {Json} Extend - extend. optional.
   */
  sendVerifyCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MteeCode')) {
      throw new TypeError('parameter "MteeCode" is required');
    }

    if (!hasOwnProperty(params, 'CodeType')) {
      throw new TypeError('parameter "CodeType" is required');
    }

    if (!hasOwnProperty(params, 'IdType')) {
      throw new TypeError('parameter "IdType" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    return this.request('SendVerifyCode', params, options);
  }

  /**
   * @param {String} Apn - apn. optional.
   * @param {String} StartEndPoint - startEndPoint. optional.
   * @param {String} StopEndPoint - stopEndPoint. optional.
   * @param {Json} Data - data. optional.
   */
  tunnelReceive(params = {}, options = {}) {
    return this.request('TunnelReceive', params, options);
  }

  /**
   * @param {String} Apn - apn. optional.
   * @param {String} StartEndPoint - startEndPoint. optional.
   * @param {String} StopEndPoint - stopEndPoint. optional.
   * @param {Json} Data - data. optional.
   */
  tunnelSend(params = {}, options = {}) {
    return this.request('TunnelSend', params, options);
  }

  /**
   * @param {String} Type - type. optional.
   * @param {String} DataType - dataType. optional.
   * @param {String} DataValue - dataValue. optional.
   * @param {String} Operator - operator. optional.
   * @param {String} Applicant - applicant. optional.
   * @param {String} Reason - reason. optional.
   * @param {String} Mark - mark. optional.
   * @param {String} BpmsUrl - bpmsUrl. optional.
   * @param {Json} Extend - extend. optional.
   */
  updateNameList(params = {}, options = {}) {
    return this.request('UpdateNameList', params, options);
  }

  /**
   * @param {String} RiskRequestId - riskRequestId. optional.
   * @param {String} MteeCode - mteeCode. required.
   * @param {String} CodeType - codeType. required.
   * @param {String} IdType - idType. required.
   * @param {String} UserId - userId. required.
   * @param {String} ChannelType - channelType. required.
   * @param {String} VerifyCode - verifyCode. required.
   * @param {String} UmidToken - umidToken. optional.
   * @param {String} Collina - collina. optional.
   * @param {String} Ip - ip. optional.
   * @param {Json} Extend - extend. optional.
   */
  validateVerifyCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MteeCode')) {
      throw new TypeError('parameter "MteeCode" is required');
    }

    if (!hasOwnProperty(params, 'CodeType')) {
      throw new TypeError('parameter "CodeType" is required');
    }

    if (!hasOwnProperty(params, 'IdType')) {
      throw new TypeError('parameter "IdType" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    if (!hasOwnProperty(params, 'VerifyCode')) {
      throw new TypeError('parameter "VerifyCode" is required');
    }

    return this.request('ValidateVerifyCode', params, options);
  }

  /**
   * @param {String} IvToken - ivToken. required.
   * @param {Long} MemberId - memberId. required.
   * @param {String} SceneCode - sceneCode. required.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} Ip - ip. optional.
   */
  verifyIvToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IvToken')) {
      throw new TypeError('parameter "IvToken" is required');
    }

    if (!hasOwnProperty(params, 'MemberId')) {
      throw new TypeError('parameter "MemberId" is required');
    }

    if (!hasOwnProperty(params, 'SceneCode')) {
      throw new TypeError('parameter "SceneCode" is required');
    }

    return this.request('VerifyIvToken', params, options);
  }

  /**
   * @param {String} AppKey - appKey. required.
   * @param {String} SignTime - signTime. required.
   * @param {String} Sign - sign. required.
   * @param {String} MteeCode - mteeCode. required.
   * @param {String} CodeType - codeType. required.
   * @param {String} IdType - idType. required.
   * @param {String} UserId - userId. required.
   * @param {String} ChannelType - channelType. required.
   * @param {String} VerifyResult - verifyResult. required.
   * @param {String} UmidToken - umidToken. optional.
   * @param {String} Collina - collina. optional.
   * @param {String} Ip - ip. optional.
   * @param {Json} Extend - extend. optional.
   */
  writeUssc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'SignTime')) {
      throw new TypeError('parameter "SignTime" is required');
    }

    if (!hasOwnProperty(params, 'Sign')) {
      throw new TypeError('parameter "Sign" is required');
    }

    if (!hasOwnProperty(params, 'MteeCode')) {
      throw new TypeError('parameter "MteeCode" is required');
    }

    if (!hasOwnProperty(params, 'CodeType')) {
      throw new TypeError('parameter "CodeType" is required');
    }

    if (!hasOwnProperty(params, 'IdType')) {
      throw new TypeError('parameter "IdType" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    if (!hasOwnProperty(params, 'VerifyResult')) {
      throw new TypeError('parameter "VerifyResult" is required');
    }

    return this.request('WriteUssc', params, options);
  }

}

module.exports = Client;
