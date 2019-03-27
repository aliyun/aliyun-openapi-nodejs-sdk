
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-14';
    super(config);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   */
  abolishApi(params = {}, options = {}) {
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
   * @param {String} CatalogId - tagId. required.
   * @param {String} ApiId - apiId. required.
   */
  addCatalogRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CatalogId')) {
      throw new TypeError('parameter "CatalogId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('AddCatalogRelation', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} CatalogId - tagId. required.
   * @param {String} ApiIds - apiIds. required.
   */
  addCatalogRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CatalogId')) {
      throw new TypeError('parameter "CatalogId" is required');
    }

    if (!hasOwnProperty(params, 'ApiIds')) {
      throw new TypeError('parameter "ApiIds" is required');
    }

    return this.request('AddCatalogRelations', params, options);
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
   * @param {String} PluginId - pluginId. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiIds - apiIds. optional.
   * @param {String} StageName - stageName. required.
   * @param {String} ApiId - apiUid. optional.
   */
  attachPlugin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PluginId')) {
      throw new TypeError('parameter "PluginId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('AttachPlugin', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} CatalogId - tagId. required.
   */
  clearCatalogRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CatalogId')) {
      throw new TypeError('parameter "CatalogId" is required');
    }

    return this.request('ClearCatalogRelations', params, options);
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
   * @param {String} RequestParameters - requestParamtersStr. optional.
   * @param {String} SystemParameters - systemParametersStr. optional.
   * @param {String} ConstantParameters - constantParametersStr. optional.
   * @param {String} ServiceParameters - serviceParameterStr. optional.
   * @param {String} ServiceParametersMap - serviceParametersMapStr. optional.
   * @param {String} ResultType - apiResultType. optional.
   * @param {String} ResultSample - apiResultSample. optional.
   * @param {String} FailResultSample - apiFailResultSample. optional.
   * @param {String} ErrorCodeSamples - apiErrorCodeSample. optional.
   * @param {String} ResultDescriptions - apiResultDescription. optional.
   * @param {String} OpenIdConnectConfig - openIdConnectConfigStr. optional.
   * @param {String} AllowSignatureMethod - signatureMethod. optional.
   * @param {String} WebSocketApiType - webSocketApiType. optional.
   * @param {String} ResultBodyModel - apiResultBodyModel. optional.
   * @param {Boolean} ForceNonceCheck - forceNonceCheck. optional.
   * @param {Boolean} DisableInternet - disableInternet. optional.
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

    return this.request('CreateApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupName - groupName. required.
   * @param {String} Description - description. optional.
   * @param {String} Source - source. optional.
   */
  createApiGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
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
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} CatalogName - tagName. required.
   * @param {String} Description - tagDescription. required.
   * @param {String} ParentId - parentId. optional.
   */
  createCatalog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CatalogName')) {
      throw new TypeError('parameter "CatalogName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateCatalog', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} GroupId - groupId. required.
   * @param {Boolean} DeleteInternetDomain - deleteInternetDomain. optional.
   */
  createIntranetDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('CreateIntranetDomain', params, options);
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ModelName - modelName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} Schema - schema. required.
   * @param {String} Description - description. optional.
   */
  createModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelName')) {
      throw new TypeError('parameter "ModelName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Schema')) {
      throw new TypeError('parameter "Schema" is required');
    }

    return this.request('CreateModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} PluginName - pluginName. required.
   * @param {String} PluginType - pluginType. required.
   * @param {String} PluginData - pluginData. required.
   * @param {String} Description - description. optional.
   */
  createPlugin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PluginName')) {
      throw new TypeError('parameter "PluginName" is required');
    }

    if (!hasOwnProperty(params, 'PluginType')) {
      throw new TypeError('parameter "PluginType" is required');
    }

    if (!hasOwnProperty(params, 'PluginData')) {
      throw new TypeError('parameter "PluginData" is required');
    }

    return this.request('CreatePlugin', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SignatureName - secretKeyName. required.
   * @param {String} SignatureKey - secretKey. required.
   * @param {String} SignatureSecret - secretValue. required.
   */
  createSignature(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignatureName')) {
      throw new TypeError('parameter "SignatureName" is required');
    }

    if (!hasOwnProperty(params, 'SignatureKey')) {
      throw new TypeError('parameter "SignatureKey" is required');
    }

    if (!hasOwnProperty(params, 'SignatureSecret')) {
      throw new TypeError('parameter "SignatureSecret" is required');
    }

    return this.request('CreateSignature', params, options);
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
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   */
  deleteApi(params = {}, options = {}) {
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
   * @param {String} CatalogId - tagId. required.
   */
  deleteCatalog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CatalogId')) {
      throw new TypeError('parameter "CatalogId" is required');
    }

    return this.request('DeleteCatalog', params, options);
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} ModelName - modelName. required.
   * @param {String} GroupId - groupId. required.
   */
  deleteModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelName')) {
      throw new TypeError('parameter "ModelName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteModel', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} PluginId - pluginId. required.
   */
  deletePlugin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PluginId')) {
      throw new TypeError('parameter "PluginId" is required');
    }

    return this.request('DeletePlugin', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SignatureId - secretKeyId. required.
   */
  deleteSignature(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignatureId')) {
      throw new TypeError('parameter "SignatureId" is required');
    }

    return this.request('DeleteSignature', params, options);
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
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} Description - description. required.
   */
  deployApi(params = {}, options = {}) {
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   */
  describeApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribeApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StageName - stageName. optional. default: release.
   * @param {String} ApiId - apiUid. required.
   */
  describeApiDoc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribeApiDoc', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeApiErrorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeApiErrorData', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} GroupId - groupId. required.
   */
  describeApiGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiGroup', params, options);
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
   * @param {String} GroupId - groupId. required.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNumber - pageNumber. optional.
   */
  describeApiHistories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiHistories', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} HistoryVersion - version. required.
   */
  describeApiHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'HistoryVersion')) {
      throw new TypeError('parameter "HistoryVersion" is required');
    }

    return this.request('DescribeApiHistory', params, options);
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
  describeApiLatencyData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeApiLatencyData', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeApiQpsData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeApiQpsData', params, options);
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
  describeApiSignatures(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiSignatures', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} StageId - stageId. required.
   */
  describeApiStage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StageId')) {
      throw new TypeError('parameter "StageId" is required');
    }

    return this.request('DescribeApiStage', params, options);
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
  describeApiTrafficControls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiTrafficControls', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  describeApiTrafficData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeApiTrafficData', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {String} CatalogId - tagId. optional.
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
   * @param {String} SignatureId - ruleId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeApisBySignature(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignatureId')) {
      throw new TypeError('parameter "SignatureId" is required');
    }

    return this.request('DescribeApisBySignature', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlId - ruleId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeApisByTrafficControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
    }

    return this.request('DescribeApisByTrafficControl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. optional.
   */
  describeApp(params = {}, options = {}) {
    return this.request('DescribeApp', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppName - appName. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeAppAttributes(params = {}, options = {}) {
    return this.request('DescribeAppAttributes', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. required.
   */
  describeAppSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeAppSecurity', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. optional.
   * @param {Long} AppOwner - appOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeApps(params = {}, options = {}) {
    return this.request('DescribeApps', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} AppId - appId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAuthorizedApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeAuthorizedApis', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} AppName - appName. optional.
   * @param {Long} AppOwnerId - appOwnerId. optional.
   */
  describeAuthorizedApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribeAuthorizedApps', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} CatalogId - tagId. required.
   */
  describeCatalog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CatalogId')) {
      throw new TypeError('parameter "CatalogId" is required');
    }

    return this.request('DescribeCatalog', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  describeCatalogs(params = {}, options = {}) {
    return this.request('DescribeCatalogs', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   */
  describeDeployedApi(params = {}, options = {}) {
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
  describeDomainsResolution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('DescribeDomainsResolution', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNumber - pageNumber. optional.
   */
  describeHistoryApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ModelName - modelName. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {String} ModelId - modelId. optional.
   */
  describeModels(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeModels', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} PluginId - pluginId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describePluginApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PluginId')) {
      throw new TypeError('parameter "PluginId" is required');
    }

    return this.request('DescribePluginApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} PluginId - pluginId. optional.
   * @param {String} PluginType - pluginType. optional.
   * @param {String} PluginName - pluginName. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describePlugins(params = {}, options = {}) {
    return this.request('DescribePlugins', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   */
  describePluginsByApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('DescribePluginsByApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  describePurchasedApiGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribePurchasedApiGroup', params, options);
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
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {String} Visibility - visibility. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describePurchasedApis(params = {}, options = {}) {
    return this.request('DescribePurchasedApis', params, options);
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
   * @param {String} SignatureId - secretKeyId. optional.
   * @param {String} SignatureName - secretKeyName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeSignatures(params = {}, options = {}) {
    return this.request('DescribeSignatures', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiId. required.
   * @param {String} StageName - stageName. required.
   */
  describeSignaturesByApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('DescribeSignaturesByApi', params, options);
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
   * @param {String} TrafficControlId - trafficControlId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. optional.
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
   * @param {String} ApiId - apiId. required.
   * @param {String} StageName - stageName. required.
   */
  describeTrafficControlsByApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('DescribeTrafficControlsByApi', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeVpcAccesses(params = {}, options = {}) {
    return this.request('DescribeVpcAccesses', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} PluginId - pluginId. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiIds - apiIds. optional.
   * @param {String} StageName - stageName. required.
   * @param {String} ApiId - apiUid. optional.
   */
  detachPlugin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PluginId')) {
      throw new TypeError('parameter "PluginId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('DetachPlugin', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  generateInstanceToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GenerateInstanceToken', params, options);
  }

  /**
   * @param {Boolean} Overwrite - overwrite. required.
   * @param {String} DataFormat - dataFormat. required.
   * @param {String} Data - data. required.
   * @param {String} GroupId - groupId. required.
   */
  importSwagger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Overwrite')) {
      throw new TypeError('parameter "Overwrite" is required');
    }

    if (!hasOwnProperty(params, 'DataFormat')) {
      throw new TypeError('parameter "DataFormat" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ImportSwagger', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} ApiName - apiName. required.
   * @param {String} Description - apiDescription. optional.
   * @param {String} Visibility - visibility. required.
   * @param {String} AuthType - authType. optional.
   * @param {String} RequestConfig - requestConfigStr. required.
   * @param {String} ServiceConfig - serviceConfigStr. required.
   * @param {String} RequestParameters - requestParamtersStr. optional.
   * @param {String} SystemParameters - systemParametersStr. optional.
   * @param {String} ConstantParameters - constantParametersStr. optional.
   * @param {String} ServiceParameters - serviceParameterStr. optional.
   * @param {String} ServiceParametersMap - serviceParametersMapStr. optional.
   * @param {String} ResultType - apiResultType. optional.
   * @param {String} ResultSample - apiResultSample. optional.
   * @param {String} FailResultSample - apiFailResultSample. optional.
   * @param {String} ErrorCodeSamples - apiErrorCodeSample. optional.
   * @param {String} ResultDescriptions - apiResultDescription. optional.
   * @param {String} OpenIdConnectConfig - openIdConnectConfigStr. optional.
   * @param {String} AllowSignatureMethod - signatureMethod. optional.
   * @param {String} WebSocketApiType - webSocketApiType. optional.
   * @param {String} ResultBodyModel - apiResultBodyModel. optional.
   * @param {Boolean} ForceNonceCheck - forceNonceCheck. optional.
   * @param {Boolean} DisableInternet - disableInternet. optional.
   */
  modifyApi(params = {}, options = {}) {
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
   * @param {String} GroupId - groupId. required.
   * @param {String} TargetInstanceId - targetInstanceId. required.
   * @param {String} Remark - remark. optional.
   */
  modifyApiGroupInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'TargetInstanceId')) {
      throw new TypeError('parameter "TargetInstanceId" is required');
    }

    return this.request('ModifyApiGroupInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {Boolean} InternetEnable - internetEnable. optional.
   * @param {Boolean} VpcIntranetEnable - vpcIntranetEnable. optional.
   * @param {String} HttpsPolicy - httpsPolicy. optional.
   */
  modifyApiGroupNetworkPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ModifyApiGroupNetworkPolicy', params, options);
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
   * @param {String} CatalogId - tagId. required.
   * @param {String} CatalogName - tagName. required.
   * @param {String} Description - tagDescription. optional.
   */
  modifyCatalog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CatalogId')) {
      throw new TypeError('parameter "CatalogId" is required');
    }

    if (!hasOwnProperty(params, 'CatalogName')) {
      throw new TypeError('parameter "CatalogName" is required');
    }

    return this.request('ModifyCatalog', params, options);
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} ModelName - modelName. required.
   * @param {String} Description - description. optional.
   * @param {String} Schema - schema. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} NewModelName - newName. optional.
   */
  modifyModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelName')) {
      throw new TypeError('parameter "ModelName" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ModifyModel', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} PluginId - pluginId. required.
   * @param {String} PluginName - pluginName. optional.
   * @param {String} PluginData - pluginData. optional.
   * @param {String} Description - description. optional.
   */
  modifyPlugin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PluginId')) {
      throw new TypeError('parameter "PluginId" is required');
    }

    return this.request('ModifyPlugin', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SignatureId - secretKeyId. required.
   * @param {String} SignatureName - secretKeyName. optional.
   * @param {String} SignatureKey - secretKey. optional.
   * @param {String} SignatureSecret - secretValue. optional.
   */
  modifySignature(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignatureId')) {
      throw new TypeError('parameter "SignatureId" is required');
    }

    return this.request('ModifySignature', params, options);
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
   * @param {String} GroupId - groupId. optional.
   * @param {Long} AppId - appId. required.
   * @param {String} StageName - stageName. required.
   * @param {String} ApiIds - apiUidStr. required.
   * @param {String} Description - description. optional.
   */
  removeApisAuthorities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'ApiIds')) {
      throw new TypeError('parameter "ApiIds" is required');
    }

    return this.request('RemoveApisAuthorities', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} AppIds - appIdStr. required.
   */
  removeAppsAuthorities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'AppIds')) {
      throw new TypeError('parameter "AppIds" is required');
    }

    return this.request('RemoveAppsAuthorities', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} CatalogId - tagId. required.
   * @param {String} ApiId - apiId. required.
   */
  removeCatalogRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CatalogId')) {
      throw new TypeError('parameter "CatalogId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('RemoveCatalogRelation', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} CatalogId - tagId. required.
   */
  removeCatalogRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CatalogId')) {
      throw new TypeError('parameter "CatalogId" is required');
    }

    return this.request('RemoveCatalogRelations', params, options);
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
   * @param {String} SignatureId - ruleId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiUidStr. optional.
   * @param {String} StageName - stageName. required.
   */
  removeSignatureApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignatureId')) {
      throw new TypeError('parameter "SignatureId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('RemoveSignatureApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlId - ruleId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiUidStr. optional.
   * @param {String} StageName - stageName. required.
   */
  removeTrafficControlApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('RemoveTrafficControlApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Port - instancePort. required.
   */
  removeVpcAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('RemoveVpcAccess', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} AppKey - appKey. required.
   */
  resetAppSecret(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ResetAppSecret', params, options);
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Long} AppId - appId. required.
   * @param {String} StageName - stageName. required.
   * @param {String} ApiIds - apiUidStr. optional.
   * @param {String} Description - description. optional.
   * @param {String} AuthVaildTime - authVaildTime. optional.
   * @param {String} AuthValidTime - authValidTime. optional.
   */
  setApisAuthorities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('SetApisAuthorities', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} AppIds - appIdStr. required.
   * @param {String} Description - description. optional.
   * @param {String} AuthVaildTime - authVaildTime. optional.
   * @param {String} AuthValidTime - authValidTime. optional.
   */
  setAppsAuthorities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'AppIds')) {
      throw new TypeError('parameter "AppIds" is required');
    }

    return this.request('SetAppsAuthorities', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertificateName - certificateName. optional.
   * @param {String} CertificateBody - certificateBody. optional.
   * @param {String} CertificatePrivateKey - privateKey. optional.
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
   * @param {String} CertificatePrivateKey - privateKey. optional.
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
   * @param {String} GroupId - groupId. required.
   * @param {String} AuthAppCode - authAppCode. required.
   */
  setGroupAuthAppCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AuthAppCode')) {
      throw new TypeError('parameter "AuthAppCode" is required');
    }

    return this.request('SetGroupAuthAppCode', params, options);
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
   * @param {String} SignatureId - ruleId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiUidStr. required.
   * @param {String} StageName - stageName. required.
   */
  setSignatureApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SignatureId')) {
      throw new TypeError('parameter "SignatureId" is required');
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

    return this.request('SetSignatureApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} TrafficControlId - ruleId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiUidStr. required.
   * @param {String} StageName - stageName. required.
   */
  setTrafficControlApis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
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

    return this.request('SetTrafficControlApis', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Port - instancePort. required.
   */
  setVpcAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('SetVpcAccess', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} Description - description. required.
   * @param {String} HistoryVersion - version. required.
   */
  switchApi(params = {}, options = {}) {
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

}

module.exports = Client;
