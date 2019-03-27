
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-01';
    super(config);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   */
  abolishApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('AbolishApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} BlackType - blackType. required.
   * @param {String} BlackContent - blackContent. required.
   * @param {String} Description - description. optional.
   */
  addBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BlackType')) {
      throw new TypeError('parameter "BlackType" is required');
    }

    if (!hasOwnProperty(params, 'BlackContent')) {
      throw new TypeError('parameter "BlackContent" is required');
    }

    return this.request('AddBlackList', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ipControlId. required.
   * @param {String} AppId - appId. optional.
   * @param {String} CidrIp - ip. required.
   */
  addIpControlPolicyItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpControlId')) {
      throw new TypeError('parameter "IpControlId" is required');
    }

    if (!hasOwnProperty(params, 'CidrIp')) {
      throw new TypeError('parameter "CidrIp" is required');
    }

    return this.request('AddIpControlPolicyItem', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlId - trafficControlId. required.
   * @param {String} SpecialType - specialType. required.
   * @param {String} SpecialKey - specialKey. required.
   * @param {Integer} TrafficValue - trafficValue. required.
   */
  addTrafficSpecialControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
    }

    if (!hasOwnProperty(params, 'SpecialType')) {
      throw new TypeError('parameter "SpecialType" is required');
    }

    if (!hasOwnProperty(params, 'SpecialKey')) {
      throw new TypeError('parameter "SpecialKey" is required');
    }

    if (!hasOwnProperty(params, 'TrafficValue')) {
      throw new TypeError('parameter "TrafficValue" is required');
    }

    return this.request('AddTrafficSpecialControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiName - apiName. required.
   * @param {String} Visibility - visibility. required.
   * @param {String} Description - apiDescription. optional.
   * @param {String} AuthType - authType. optional.
   * @param {String} RequestConfig - requestConfigStr. required.
   * @param {String} ServiceConfig - serviceConfigStr. required.
   * @param {String} RequestParamters - requestParamtersStr. optional.
   * @param {String} ServiceParameters - serviceParameterStr. optional.
   * @param {String} ServiceParametersMap - serviceParametersMapStr. optional.
   * @param {String} ResultType - apiResultType. required.
   * @param {String} ResultSample - apiResultSample. required.
   * @param {String} FailResultSample - apiFailResultSample. optional.
   * @param {String} ErrorCodeSamples - apiErrorCodeSample. optional.
   * @param {String} ResultDescriptions - apiResultDescription. optional.
   * @param {String} OpenIdConnectConfig - openIdConnectConfigStr. optional.
   * @param {String} AllowSignatureMethod - signatureMethod. optional.
   * @param {String} WebSocketApiType - webSocketApiType. optional.
   */
  createApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    if (!hasOwnProperty(params, 'Visibility')) {
      throw new TypeError('parameter "Visibility" is required');
    }

    if (!hasOwnProperty(params, 'RequestConfig')) {
      throw new TypeError('parameter "RequestConfig" is required');
    }

    if (!hasOwnProperty(params, 'ServiceConfig')) {
      throw new TypeError('parameter "ServiceConfig" is required');
    }

    if (!hasOwnProperty(params, 'ResultType')) {
      throw new TypeError('parameter "ResultType" is required');
    }

    if (!hasOwnProperty(params, 'ResultSample')) {
      throw new TypeError('parameter "ResultSample" is required');
    }

    return this.request('CreateApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} GroupName - groupName. required.
   * @param {String} Description - description. required.
   */
  createApiGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateApiGroup', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} StageId - stageId. required.
   * @param {String} VariableName - variableName. required.
   * @param {Boolean} SupportRoute - supportRoute. optional.
   * @param {String} VariableValue - variableValue. optional.
   * @param {String} StageRouteModel - stageRouteModelString. optional.
   */
  createApiStageVariable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StageId')) {
      throw new TypeError('parameter "StageId" is required');
    }

    if (!hasOwnProperty(params, 'VariableName')) {
      throw new TypeError('parameter "VariableName" is required');
    }

    return this.request('CreateApiStageVariable', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppName - appName. required.
   * @param {String} Description - description. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('CreateApp', params, options);
  }

  /**
   * @param {String} ApiName - apiName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} StageId - stageId. optional.
   * @param {String} JavaDemo - javaDemo. optional.
   * @param {String} PythonDemo - pythonDemo. optional.
   * @param {String} CsharpDemo - csharpDemo. optional.
   * @param {String} PhpDemo - phpDemo. optional.
   * @param {String} ObjectcDemo - objectcDemo. optional.
   * @param {String} CurlDemo - curlDemo. optional.
   */
  createCustomizedInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('CreateCustomizedInfo', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SkuId - groupId. required.
   * @param {Integer} AccountQuantity - quota. required.
   * @param {String} ExpiredOn - expireDate. required.
   * @param {String} Token - token. required.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SkuId')) {
      throw new TypeError('parameter "SkuId" is required');
    }

    if (!hasOwnProperty(params, 'AccountQuantity')) {
      throw new TypeError('parameter "AccountQuantity" is required');
    }

    if (!hasOwnProperty(params, 'ExpiredOn')) {
      throw new TypeError('parameter "ExpiredOn" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlName - ipControlName. required.
   * @param {String} IpControlType - controlType. required.
   * @param {String} Description - description. optional.
   * @param {RepeatList} IpControlPolicys - controlPolicyList. optional.
   */
  createIpControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpControlName')) {
      throw new TypeError('parameter "IpControlName" is required');
    }

    if (!hasOwnProperty(params, 'IpControlType')) {
      throw new TypeError('parameter "IpControlType" is required');
    }

    return this.request('CreateIpControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} SlsProject - slsProject. required.
   * @param {String} SlsLogStore - slsLogStore. required.
   * @param {String} LogType - logType. optional. default: PROVIDER.
   */
  createLogConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SlsProject')) {
      throw new TypeError('parameter "SlsProject" is required');
    }

    if (!hasOwnProperty(params, 'SlsLogStore')) {
      throw new TypeError('parameter "SlsLogStore" is required');
    }

    return this.request('CreateLogConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} CommodityCode - commodityId. required.
   * @param {String} WorkName - workName. required.
   * @param {String} LogoUrl - logoUrl. required.
   * @param {String} ShortDescription - shortDescription. required.
   * @param {String} Keywords - keywords. required.
   */
  createRaceWorkForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    if (!hasOwnProperty(params, 'WorkName')) {
      throw new TypeError('parameter "WorkName" is required');
    }

    if (!hasOwnProperty(params, 'LogoUrl')) {
      throw new TypeError('parameter "LogoUrl" is required');
    }

    if (!hasOwnProperty(params, 'ShortDescription')) {
      throw new TypeError('parameter "ShortDescription" is required');
    }

    if (!hasOwnProperty(params, 'Keywords')) {
      throw new TypeError('parameter "Keywords" is required');
    }

    return this.request('CreateRaceWorkForInner', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecretKeyName - secretKeyName. required.
   * @param {String} SecretKey - secretKey. required.
   * @param {String} SecretValue - secretValue. required.
   */
  createSecretKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SecretKeyName')) {
      throw new TypeError('parameter "SecretKeyName" is required');
    }

    if (!hasOwnProperty(params, 'SecretKey')) {
      throw new TypeError('parameter "SecretKey" is required');
    }

    if (!hasOwnProperty(params, 'SecretValue')) {
      throw new TypeError('parameter "SecretValue" is required');
    }

    return this.request('CreateSecretKey', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlName - trafficControlName. required.
   * @param {String} TrafficControlUnit - trafficControlUnit. required.
   * @param {Integer} ApiDefault - apiDefault. required.
   * @param {Integer} UserDefault - userDefault. optional.
   * @param {Integer} AppDefault - appDefault. optional.
   * @param {String} Description - description. optional.
   */
  createTrafficControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlName')) {
      throw new TypeError('parameter "TrafficControlName" is required');
    }

    if (!hasOwnProperty(params, 'TrafficControlUnit')) {
      throw new TypeError('parameter "TrafficControlUnit" is required');
    }

    if (!hasOwnProperty(params, 'ApiDefault')) {
      throw new TypeError('parameter "ApiDefault" is required');
    }

    return this.request('CreateTrafficControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlId - trafficControlId. required.
   */
  deleteAllTrafficSpecialControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
    }

    return this.request('DeleteAllTrafficSpecialControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   */
  deleteApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DeleteApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  deleteApiGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteApiGroup', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} StageId - stageId. required.
   * @param {String} VariableName - variableName. required.
   */
  deleteApiStageVariable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StageId')) {
      throw new TypeError('parameter "StageId" is required');
    }

    if (!hasOwnProperty(params, 'VariableName')) {
      throw new TypeError('parameter "VariableName" is required');
    }

    return this.request('DeleteApiStageVariable', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertificateId - certificateId. required.
   */
  deleteDomainCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    return this.request('DeleteDomainCertificate', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ipControlId. required.
   */
  deleteIpControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpControlId')) {
      throw new TypeError('parameter "IpControlId" is required');
    }

    return this.request('DeleteIpControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} LogType - logType. optional. default: PROVIDER.
   */
  deleteLogConfig(params = {}, options = {}) {
    return this.request('DeleteLogConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecretKeyId - secretKeyId. required.
   */
  deleteSecretKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SecretKeyId')) {
      throw new TypeError('parameter "SecretKeyId" is required');
    }

    return this.request('DeleteSecretKey', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlId - trafficControlId. required.
   */
  deleteTrafficControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
    }

    return this.request('DeleteTrafficControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlId - trafficControlId. required.
   * @param {String} SpecialType - specialType. required.
   * @param {String} SpecialKey - specialKey. required.
   */
  deleteTrafficSpecialControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
    }

    if (!hasOwnProperty(params, 'SpecialType')) {
      throw new TypeError('parameter "SpecialType" is required');
    }

    if (!hasOwnProperty(params, 'SpecialKey')) {
      throw new TypeError('parameter "SpecialKey" is required');
    }

    return this.request('DeleteTrafficSpecialControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} Description - description. required.
   * @param {String} SupportMock - supportMock. optional.
   */
  deployApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('DeployApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   */
  describeApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribeApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} StageName - stageName. required.
   * @param {String} ApiId - apiUid. required.
   */
  describeApiDoc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribeApiDoc', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeApiDocs(params = {}, options = {}) {
    return this.request('DescribeApiDocs', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeApiError(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeApiError', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   */
  describeApiForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribeApiForBackend', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  describeApiGroupDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiGroupDetail', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  describeApiGroupDetailForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiGroupDetailForBackend', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. required.
   */
  describeApiGroupDetailForConsumer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribeApiGroupDetailForConsumer', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeApiGroups(params = {}, options = {}) {
    return this.request('DescribeApiGroups', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeApiGroupsForBackend(params = {}, options = {}) {
    return this.request('DescribeApiGroupsForBackend', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} StageName - stageName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiIds. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeApiIpControls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiIpControls', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeApiLatency(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeApiLatency', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeApiQps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeApiQps', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RuleType - ruleType. required.
   * @param {String} StageName - stageName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiIds. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ApiName - apiName. optional.
   */
  describeApiRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleType')) {
      throw new TypeError('parameter "RuleType" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiRules', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} StageId - stageId. required.
   */
  describeApiStageDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StageId')) {
      throw new TypeError('parameter "StageId" is required');
    }

    return this.request('DescribeApiStageDetail', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeApiTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeApiTraffic', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {String} Visibility - visibility. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeApis(params = {}, options = {}) {
    return this.request('DescribeApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeApisByApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeApisByApp', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ruleId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeApisByIpControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpControlId')) {
      throw new TypeError('parameter "IpControlId" is required');
    }

    return this.request('DescribeApisByIpControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RuleId - ruleId. required.
   * @param {String} RuleType - ruleType. required.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeApisByRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'RuleType')) {
      throw new TypeError('parameter "RuleType" is required');
    }

    return this.request('DescribeApisByRule', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {String} Visibility - visibility. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeApisForBackend(params = {}, options = {}) {
    return this.request('DescribeApisForBackend', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {String} Visibility - visibility. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeApisForConsole(params = {}, options = {}) {
    return this.request('DescribeApisForConsole', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. required.
   */
  describeApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeApp', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. required.
   */
  describeAppSecurities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeAppSecurities', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   */
  describeAppSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('DescribeAppSecurity', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppName - appName. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeApps(params = {}, options = {}) {
    return this.request('DescribeApps', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAppsByApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribeAppsByApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {Long} AppOwnerId - appOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeAppsForProvider(params = {}, options = {}) {
    return this.request('DescribeAppsForProvider', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} BlackType - blackType. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeBlackLists(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BlackType')) {
      throw new TypeError('parameter "BlackType" is required');
    }

    return this.request('DescribeBlackLists', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   */
  describeDeployedApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('DescribeDeployedApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   */
  describeDeployedApiForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('DescribeDeployedApiForBackend', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeDeployedApis(params = {}, options = {}) {
    return this.request('DescribeDeployedApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   */
  describeDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomain', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainNames - domainNameStr. required.
   */
  describeDomainResolution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('DescribeDomainResolution', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} HistoryVersion - version. required.
   */
  describeHistoryApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'HistoryVersion')) {
      throw new TypeError('parameter "HistoryVersion" is required');
    }

    return this.request('DescribeHistoryApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNumber - pageNumber. optional.
   */
  describeHistoryApis(params = {}, options = {}) {
    return this.request('DescribeHistoryApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ipControlId. optional.
   * @param {String} PolicyItemId - controlPolicyId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeIpControlPolicyItems(params = {}, options = {}) {
    return this.request('DescribeIpControlPolicyItems', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ipControlId. optional.
   * @param {String} IpControlName - ipControlName. optional.
   * @param {String} IpControlType - controlType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeIpControls(params = {}, options = {}) {
    return this.request('DescribeIpControls', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} LogType - logType. optional. default: PROVIDER.
   */
  describeLogConfig(params = {}, options = {}) {
    return this.request('DescribeLogConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   */
  describePurchasedApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribePurchasedApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  describePurchasedApiGroupDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribePurchasedApiGroupDetail', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describePurchasedApiGroups(params = {}, options = {}) {
    return this.request('DescribePurchasedApiGroups', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describePurchasedApis(params = {}, options = {}) {
    return this.request('DescribePurchasedApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  describeRaceWorkForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeRaceWorkForInner', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Language - language. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiId. required.
   * @param {String} StageName - stageName. required.
   */
  describeRulesByApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('DescribeRulesByApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecretKeyId - secretKeyId. optional.
   * @param {String} SecretKeyName - secretKeyName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeSecretKeys(params = {}, options = {}) {
    return this.request('DescribeSecretKeys', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  describeSystemParameters(params = {}, options = {}) {
    return this.request('DescribeSystemParameters', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  describeSystemParams(params = {}, options = {}) {
    return this.request('DescribeSystemParams', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlId - trafficControlId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiUid - apiUid. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} TrafficControlName - trafficControlName. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeTrafficControls(params = {}, options = {}) {
    return this.request('DescribeTrafficControls', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiPath - apiPath. required.
   * @param {String} StageName - stageName. required.
   */
  getApiMethods(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiPath')) {
      throw new TypeError('parameter "ApiPath" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('GetApiMethods', params, options);
  }

  /**
   * @param {String} ApiName - apiName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} StageId - stageId. optional.
   */
  getCustomizedInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('GetCustomizedInfo', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} ApiName - apiName. required.
   * @param {String} Description - apiDescription. optional.
   * @param {String} Visibility - visibility. required.
   * @param {String} AuthType - authType. optional.
   * @param {String} RequestConfig - requestConfigStr. required.
   * @param {String} ServiceConfig - serviceConfigStr. required.
   * @param {String} RequestParamters - requestParamtersStr. optional.
   * @param {String} ServiceParameters - serviceParameterStr. optional.
   * @param {String} ServiceParametersMap - serviceParametersMapStr. optional.
   * @param {String} ResultType - apiResultType. required.
   * @param {String} ResultSample - apiResultSample. required.
   * @param {String} FailResultSample - apiFailResultSample. optional.
   * @param {String} ErrorCodeSamples - apiErrorCodeSample. optional.
   * @param {String} ResultDescriptions - apiResultDescription. optional.
   * @param {String} OpenIdConnectConfig - openIdConnectConfigStr. optional.
   * @param {String} AllowSignatureMethod - signatureMethod. optional.
   * @param {String} WebSocketApiType - webSocketApiType. optional.
   */
  modifyApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    if (!hasOwnProperty(params, 'Visibility')) {
      throw new TypeError('parameter "Visibility" is required');
    }

    if (!hasOwnProperty(params, 'RequestConfig')) {
      throw new TypeError('parameter "RequestConfig" is required');
    }

    if (!hasOwnProperty(params, 'ServiceConfig')) {
      throw new TypeError('parameter "ServiceConfig" is required');
    }

    if (!hasOwnProperty(params, 'ResultType')) {
      throw new TypeError('parameter "ResultType" is required');
    }

    if (!hasOwnProperty(params, 'ResultSample')) {
      throw new TypeError('parameter "ResultSample" is required');
    }

    return this.request('ModifyApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} GroupName - groupName. optional.
   * @param {String} Description - description. optional.
   */
  modifyApiGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ModifyApiGroup', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. required.
   * @param {String} AppName - appName. optional.
   * @param {String} Description - description. optional.
   */
  modifyApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('ModifyApp', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ipControlId. required.
   * @param {String} IpControlName - ipControlName. optional.
   * @param {String} Description - description. optional.
   */
  modifyIpControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpControlId')) {
      throw new TypeError('parameter "IpControlId" is required');
    }

    return this.request('ModifyIpControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ipControlId. required.
   * @param {String} PolicyItemId - policyId. required.
   * @param {String} AppId - appId. optional.
   * @param {String} CidrIp - ip. required.
   */
  modifyIpControlPolicyItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpControlId')) {
      throw new TypeError('parameter "IpControlId" is required');
    }

    if (!hasOwnProperty(params, 'PolicyItemId')) {
      throw new TypeError('parameter "PolicyItemId" is required');
    }

    if (!hasOwnProperty(params, 'CidrIp')) {
      throw new TypeError('parameter "CidrIp" is required');
    }

    return this.request('ModifyIpControlPolicyItem', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} SlsProject - slsProject. required.
   * @param {String} SlsLogStore - slsLogStore. required.
   * @param {String} LogType - logType. optional. default: PROVIDER.
   */
  modifyLogConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SlsProject')) {
      throw new TypeError('parameter "SlsProject" is required');
    }

    if (!hasOwnProperty(params, 'SlsLogStore')) {
      throw new TypeError('parameter "SlsLogStore" is required');
    }

    return this.request('ModifyLogConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecretKeyId - secretKeyId. required.
   * @param {String} SecretKeyName - secretKeyName. optional.
   * @param {String} SecretKey - secretKey. optional.
   * @param {String} SecretValue - secretValue. optional.
   */
  modifySecretKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SecretKeyId')) {
      throw new TypeError('parameter "SecretKeyId" is required');
    }

    return this.request('ModifySecretKey', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlId - trafficControlId. required.
   * @param {String} TrafficControlName - trafficControlName. optional.
   * @param {String} TrafficControlUnit - trafficControlUnit. optional.
   * @param {Integer} ApiDefault - apiDefault. optional.
   * @param {Integer} UserDefault - userDefault. optional.
   * @param {Integer} AppDefault - appDefault. optional.
   * @param {String} Description - description. optional.
   */
  modifyTrafficControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
    }

    return this.request('ModifyTrafficControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   */
  reactivateDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ReactivateDomain', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} HistoryVersion - version. required.
   */
  recoverApiFromHistorical(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'HistoryVersion')) {
      throw new TypeError('parameter "HistoryVersion" is required');
    }

    return this.request('RecoverApiFromHistorical', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} HistoryVersion - version. required.
   */
  recoveryApiDefineFromHistorical(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'HistoryVersion')) {
      throw new TypeError('parameter "HistoryVersion" is required');
    }

    return this.request('RecoveryApiDefineFromHistorical', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} HistoryVersion - version. required.
   */
  recoveryApiFromHistorical(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'HistoryVersion')) {
      throw new TypeError('parameter "HistoryVersion" is required');
    }

    return this.request('RecoveryApiFromHistorical', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   */
  refreshDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('RefreshDomain', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} StageName - stageName. required.
   * @param {String} ApiIds - apiUidStr. required.
   * @param {String} Description - description. optional.
   */
  removeAccessPermissionByApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'ApiIds')) {
      throw new TypeError('parameter "ApiIds" is required');
    }

    return this.request('RemoveAccessPermissionByApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} AppIds - appIdStr. required.
   */
  removeAccessPermissionByApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'AppIds')) {
      throw new TypeError('parameter "AppIds" is required');
    }

    return this.request('RemoveAccessPermissionByApps', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} BlackType - blackType. required.
   */
  removeAllBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BlackType')) {
      throw new TypeError('parameter "BlackType" is required');
    }

    return this.request('RemoveAllBlackList', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RuleId - ruleId. required.
   * @param {String} RuleType - ruleType. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiUidStr. optional.
   * @param {String} StageName - stageName. required.
   */
  removeApiRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'RuleType')) {
      throw new TypeError('parameter "RuleType" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('RemoveApiRule', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} AppIds - appIdStr. required.
   */
  removeAppsFromApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'AppIds')) {
      throw new TypeError('parameter "AppIds" is required');
    }

    return this.request('RemoveAppsFromApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} BlackType - blackType. required.
   * @param {String} BlackContent - blackContent. required.
   */
  removeBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BlackType')) {
      throw new TypeError('parameter "BlackType" is required');
    }

    if (!hasOwnProperty(params, 'BlackContent')) {
      throw new TypeError('parameter "BlackContent" is required');
    }

    return this.request('RemoveBlackList', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ruleId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiUidStr. optional.
   * @param {String} StageName - stageName. required.
   */
  removeIpControlApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpControlId')) {
      throw new TypeError('parameter "IpControlId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('RemoveIpControlApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ipControlId. required.
   * @param {String} PolicyItemIds - policyIds. required.
   */
  removeIpControlPolicyItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpControlId')) {
      throw new TypeError('parameter "IpControlId" is required');
    }

    if (!hasOwnProperty(params, 'PolicyItemIds')) {
      throw new TypeError('parameter "PolicyItemIds" is required');
    }

    return this.request('RemoveIpControlPolicyItem', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   */
  resetAppKeySecret(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ResetAppKeySecret', params, options);
  }

  /**
   * @param {String} ApiName - apiName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} StageId - stageId. optional.
   */
  resetCustomized(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('ResetCustomized', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} Language - language. required.
   */
  sdkGenerate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    return this.request('SdkGenerate', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. required.
   * @param {String} Language - language. required.
   */
  sdkGenerateByApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    return this.request('SdkGenerateByApp', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} Language - language. required.
   */
  sdkGenerateByGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    return this.request('SdkGenerateByGroup', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} StageName - stageName. required.
   * @param {String} ApiIds - apiUidStr. required.
   * @param {String} Description - description. optional.
   */
  setAccessPermissionByApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'ApiIds')) {
      throw new TypeError('parameter "ApiIds" is required');
    }

    return this.request('SetAccessPermissionByApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} AppIds - appIdStr. required.
   * @param {String} Description - description. optional.
   */
  setAccessPermissions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'AppIds')) {
      throw new TypeError('parameter "AppIds" is required');
    }

    return this.request('SetAccessPermissions', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RuleId - ruleId. required.
   * @param {String} RuleType - ruleType. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiUidStr. required.
   * @param {String} StageName - stageName. required.
   */
  setApiRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'RuleType')) {
      throw new TypeError('parameter "RuleType" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiIds')) {
      throw new TypeError('parameter "ApiIds" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('SetApiRule', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertificateName - certificateName. optional.
   * @param {String} CertificateBody - certificateBody. optional.
   * @param {String} PrivateKey - privateKey. optional.
   */
  setDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SetDomain', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertificateName - certificateName. required.
   * @param {String} CertificateBody - certificateBody. optional.
   * @param {String} PrivateKey - privateKey. optional.
   */
  setDomainCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'CertificateName')) {
      throw new TypeError('parameter "CertificateName" is required');
    }

    return this.request('SetDomainCertificate', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} ActionValue - actionValue. required.
   */
  setDomainWebSocketStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ActionValue')) {
      throw new TypeError('parameter "ActionValue" is required');
    }

    return this.request('SetDomainWebSocketStatus', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} IpControlId - ruleId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiUidStr. required.
   * @param {String} StageName - stageName. required.
   */
  setIpControlApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpControlId')) {
      throw new TypeError('parameter "IpControlId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiIds')) {
      throw new TypeError('parameter "ApiIds" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('SetIpControlApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} Mock - mock. required.
   * @param {String} MockResult - mockResult. optional.
   */
  setMockIntegration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'Mock')) {
      throw new TypeError('parameter "Mock" is required');
    }

    return this.request('SetMockIntegration', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} Description - description. required.
   * @param {String} HistoryVersion - version. required.
   */
  switchApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'HistoryVersion')) {
      throw new TypeError('parameter "HistoryVersion" is required');
    }

    return this.request('SwitchApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} InvokeParams - modifyInvokeTimesNowParams. required.
   */
  updateConsumerOpenInvokeTimesNow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InvokeParams')) {
      throw new TypeError('parameter "InvokeParams" is required');
    }

    return this.request('UpdateConsumerOpenInvokeTimesNow', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} InstancePort - instancePort. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  vpcDescribeAccesses(params = {}, options = {}) {
    return this.request('VpcDescribeAccesses', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstancePort - instancePort. required.
   * @param {String} Token - token. optional.
   */
  vpcGrantAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstancePort')) {
      throw new TypeError('parameter "InstancePort" is required');
    }

    return this.request('VpcGrantAccess', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstancePort - instancePort. required.
   * @param {String} Token - token. optional.
   */
  vpcModifyAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstancePort')) {
      throw new TypeError('parameter "InstancePort" is required');
    }

    return this.request('VpcModifyAccess', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstancePort - instancePort. required.
   * @param {String} Token - token. optional.
   */
  vpcRevokeAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstancePort')) {
      throw new TypeError('parameter "InstancePort" is required');
    }

    return this.request('VpcRevokeAccess', params, options);
  }

}

module.exports = Client;
