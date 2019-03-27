
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-02-01';
    super(config);
  }

  /**
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
   * @param {Long} AliUid - userId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   */
  abolishApiForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
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

    return this.request('AbolishApiForInner', params, options);
  }

  /**
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
   * @param {Long} AliUid - userId. required.
   */
  checkAccountForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CheckAccountForInner', params, options);
  }

  /**
   * @param {String} AoneAppName - aoneAppName. required.
   */
  checkAoneAppAudit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AoneAppName')) {
      throw new TypeError('parameter "AoneAppName" is required');
    }

    return this.request('CheckAoneAppAudit', params, options);
  }

  /**
   * @param {Long} AliUid - userId. required.
   * @param {String} ServerAddress - address. required.
   */
  checkServiceAddressForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'ServerAddress')) {
      throw new TypeError('parameter "ServerAddress" is required');
    }

    return this.request('CheckServiceAddressForInner', params, options);
  }

  /**
   * @param {Long} callerUid - userId. optional.
   * @param {String} CacheNamespace - cacheNamespace. optional.
   * @param {String} CacheKey - cacheKey. required.
   */
  clearCacheForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CacheKey')) {
      throw new TypeError('parameter "CacheKey" is required');
    }

    return this.request('ClearCacheForBackend', params, options);
  }

  /**
   * @param {String} CopyList - copyDataString. required.
   */
  copyConsumerOpenForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CopyList')) {
      throw new TypeError('parameter "CopyList" is required');
    }

    return this.request('CopyConsumerOpenForInner', params, options);
  }

  /**
   * @param {String} GroupId - apiDomainName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiName - apiName. required.
   * @param {String} Path - path. required.
   * @param {String} Description - apiDescription. optional.
   * @param {String} BodyFormat - bodyFormat. optional.
   * @param {String} PostBodyType - postBodyType. optional.
   * @param {String} PostBodyDescription - postBodyDescription. optional.
   * @param {String} HttpMethod - httpMethod. required.
   * @param {String} HttpProtocol - httpProtocol. required.
   * @param {String} ResultType - apiResultType. required.
   * @param {String} ResultSample - apiResultSample. required.
   * @param {String} ServiceProtocol - serviceProtocol. required.
   * @param {String} ServiceAddress - serviceAddress. required.
   * @param {Integer} ServiceTimeout - serviceTimeout. required.
   * @param {String} Visibility - visibility. required.
   * @param {String} AuthType - authType. optional.
   * @param {String} SystemParameters - systemParamtersStr. optional.
   * @param {String} ConstantParameters - constantParametersStr. optional.
   * @param {String} PathParameters - pathParamtersStr. optional.
   * @param {String} RequestHeaders - requestHeadersStr. optional.
   * @param {String} RequestQueries - requestQueriesStr. optional.
   * @param {String} RequestBody - requestBodiesStr. optional.
   */
  createApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'HttpMethod')) {
      throw new TypeError('parameter "HttpMethod" is required');
    }

    if (!hasOwnProperty(params, 'HttpProtocol')) {
      throw new TypeError('parameter "HttpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'ResultType')) {
      throw new TypeError('parameter "ResultType" is required');
    }

    if (!hasOwnProperty(params, 'ResultSample')) {
      throw new TypeError('parameter "ResultSample" is required');
    }

    if (!hasOwnProperty(params, 'ServiceProtocol')) {
      throw new TypeError('parameter "ServiceProtocol" is required');
    }

    if (!hasOwnProperty(params, 'ServiceAddress')) {
      throw new TypeError('parameter "ServiceAddress" is required');
    }

    if (!hasOwnProperty(params, 'ServiceTimeout')) {
      throw new TypeError('parameter "ServiceTimeout" is required');
    }

    if (!hasOwnProperty(params, 'Visibility')) {
      throw new TypeError('parameter "Visibility" is required');
    }

    return this.request('CreateApi', params, options);
  }

  /**
   * @param {Long} AliUid - userId. required.
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
   */
  createApiForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

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

    return this.request('CreateApiForInner', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   * @param {String} Description - description. required.
   */
  createApiGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateApiGroup', params, options);
  }

  /**
   * @param {Long} AliUid - userId. required.
   * @param {String} GroupName - groupName. required.
   * @param {String} Description - description. required.
   * @param {String} Source - source. optional.
   */
  createApiGroupForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateApiGroupForInner', params, options);
  }

  /**
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
   * @param {String} AppName - appName. required.
   * @param {String} Description - description. optional.
   * @param {Long} AliUid - userId. required.
   * @param {String} Source - source. optional.
   */
  createAppForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CreateAppForBackend', params, options);
  }

  /**
   * @param {String} AppName - appName. required.
   * @param {String} Description - description. optional.
   * @param {String} Source - source. optional.
   * @param {Long} AliUid - userId. required.
   */
  createAppForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CreateAppForInner', params, options);
  }

  /**
   * @param {String} SkuId - groupId. required.
   * @param {Long} AccountQuantity - quota. required.
   * @param {String} ExpiredOn - expireDate. required.
   * @param {Long} AppId - appId. optional.
   * @param {String} BillingType - billingType. optional.
   * @param {String} CloudMarketInstanceId - cloudMarketInstanceId. optional.
   * @param {String} Token - token. required.
   * @param {Long} AlarmQuota - alarmQuota. optional.
   * @param {Long} AliUid - userId. required.
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

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
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
   * @param {String} TrafficControlId - trafficControlId. required.
   */
  deleteAllTrafficSpecialControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
    }

    return this.request('DeleteAllTrafficSpecialControl', params, options);
  }

  /**
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
   * @param {Long} AliUid - userId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   */
  deleteApiForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DeleteApiForInner', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   */
  deleteApiGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteApiGroup', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
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
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   */
  deleteDomainForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteDomainForBackend', params, options);
  }

  /**
   * @param {String} SecretKeyId - secretKeyId. required.
   */
  deleteSecretKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SecretKeyId')) {
      throw new TypeError('parameter "SecretKeyId" is required');
    }

    return this.request('DeleteSecretKey', params, options);
  }

  /**
   * @param {String} TrafficControlId - trafficControlId. required.
   */
  deleteTrafficControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TrafficControlId')) {
      throw new TypeError('parameter "TrafficControlId" is required');
    }

    return this.request('DeleteTrafficControl', params, options);
  }

  /**
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
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} Description - description. required.
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
   * @param {Long} AliUid - userId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} Description - description. required.
   */
  deployApiForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
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

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('DeployApiForInner', params, options);
  }

  /**
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
   * @param {Long} AliUid - userId. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} ApiId - apiUid. optional.
   * @param {String} ApiName - apiName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeApiDocsForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeApiDocsForBackend', params, options);
  }

  /**
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
   * @param {Long} AliUid - userId. required.
   * @param {String} ApiId - apiUid. required.
   */
  describeApiGroupByApiForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    return this.request('DescribeApiGroupByApiForInner', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   */
  describeApiGroupDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiGroupDetail', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   */
  describeApiGroupDetailForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeApiGroupDetailForBackend', params, options);
  }

  /**
   * @param {String} GroupId - groupId. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeApiGroups(params = {}, options = {}) {
    return this.request('DescribeApiGroups', params, options);
  }

  /**
   * @param {String} GroupId - groupId. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeApiGroupsForBackend(params = {}, options = {}) {
    return this.request('DescribeApiGroupsForBackend', params, options);
  }

  /**
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
   * @param {String} RuleType - ruleType. required.
   * @param {String} StageName - stageName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiIds - apiIds. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
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
   * @param {Long} AppId - appId. required.
   */
  describeApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeApp', params, options);
  }

  /**
   * @param {Long} AppId - appId. required.
   */
  describeAppSecurities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeAppSecurities', params, options);
  }

  /**
   * @param {String} AppKey - appKey. required.
   */
  describeAppSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('DescribeAppSecurity', params, options);
  }

  /**
   * @param {Long} AppId - appId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeApps(params = {}, options = {}) {
    return this.request('DescribeApps', params, options);
  }

  /**
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
   * @param {Long} AppId - appId. optional.
   * @param {String} AppOwner - appOwner. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeAppsForProvider(params = {}, options = {}) {
    return this.request('DescribeAppsForProvider', params, options);
  }

  /**
   * @param {String} Vip - vip. required.
   */
  describeAvailableVips(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vip')) {
      throw new TypeError('parameter "Vip" is required');
    }

    return this.request('DescribeAvailableVips', params, options);
  }

  /**
   * @param {Long} AliUid - userId. required.
   */
  describeBidByUserIdForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeBidByUserIdForInner', params, options);
  }

  /**
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
   * @param {String} GroupId - groupId. required.
   * @param {String} ModelName - modelName. optional.
   * @param {String} ModelId - modelId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Long} AliUid - userId. required.
   */
  describeModelsForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeModelsForInner', params, options);
  }

  /**
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
   * @param {String} GroupId - groupId. required.
   */
  describePurchasedApiGroupDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribePurchasedApiGroupDetail', params, options);
  }

  /**
   * @param {String} GroupIds - groupIdStr. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describePurchasedApiGroups(params = {}, options = {}) {
    return this.request('DescribePurchasedApiGroups', params, options);
  }

  /**
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
   * @param {String} GroupId - groupId. required.
   */
  describeRaceWorkForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DescribeRaceWorkForInner', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeRaceWorksForInner(params = {}, options = {}) {
    return this.request('DescribeRaceWorksForInner', params, options);
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
   * @param {String} Type - type. optional.
   * @param {Long} Uid - uid. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeUserWhiteLists(params = {}, options = {}) {
    return this.request('DescribeUserWhiteLists', params, options);
  }

  /**
   * @param {String} Type - type. required.
   */
  isIncludedByUserWhitelist(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('IsIncludedByUserWhitelist', params, options);
  }

  /**
   * @param {Long} AliUid - userId. required.
   * @param {Boolean} DefaultValue - defaultValue. optional.
   */
  isInnerAccountForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('IsInnerAccountForInner', params, options);
  }

  /**
   * @param {String} SourceVpcId - sourceVpcId. required.
   * @param {String} TargetVpcId - targetVpcId. required.
   * @param {String} TargetInstance - targetInstance. required.
   * @param {Integer} Port - port. required.
   */
  loadVpcAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceVpcId')) {
      throw new TypeError('parameter "SourceVpcId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVpcId')) {
      throw new TypeError('parameter "TargetVpcId" is required');
    }

    if (!hasOwnProperty(params, 'TargetInstance')) {
      throw new TypeError('parameter "TargetInstance" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('LoadVpcAccess', params, options);
  }

  /**
   * @param {String} GroupId - apiDomainName. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} ApiName - apiName. required.
   * @param {String} Path - path. required.
   * @param {String} Description - apiDescription. optional.
   * @param {String} BodyFormat - bodyFormat. required.
   * @param {String} PostBodyType - postBodyType. optional.
   * @param {String} PostBodyDescription - postBodyDescription. optional.
   * @param {String} HttpMethod - httpMethod. required.
   * @param {String} HttpProtocol - httpProtocol. required.
   * @param {String} ResultType - apiResultType. required.
   * @param {String} ResultSample - apiResultSample. required.
   * @param {String} ServiceProtocol - serviceProtocol. required.
   * @param {String} ServiceAddress - serviceAddress. required.
   * @param {Integer} ServiceTimeout - serviceTimeout. required.
   * @param {String} Visibility - visibility. required.
   * @param {String} AuthType - authType. optional.
   * @param {String} SystemParameters - systemParamtersStr. optional.
   * @param {String} ConstantParameters - constantParametersStr. optional.
   * @param {String} PathParameters - pathParamtersStr. optional.
   * @param {String} RequestHeaders - requestHeadersStr. optional.
   * @param {String} RequestQueries - requestQueriesStr. optional.
   * @param {String} RequestBody - requestBodiesStr. optional.
   */
  modifyApi(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'BodyFormat')) {
      throw new TypeError('parameter "BodyFormat" is required');
    }

    if (!hasOwnProperty(params, 'HttpMethod')) {
      throw new TypeError('parameter "HttpMethod" is required');
    }

    if (!hasOwnProperty(params, 'HttpProtocol')) {
      throw new TypeError('parameter "HttpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'ResultType')) {
      throw new TypeError('parameter "ResultType" is required');
    }

    if (!hasOwnProperty(params, 'ResultSample')) {
      throw new TypeError('parameter "ResultSample" is required');
    }

    if (!hasOwnProperty(params, 'ServiceProtocol')) {
      throw new TypeError('parameter "ServiceProtocol" is required');
    }

    if (!hasOwnProperty(params, 'ServiceAddress')) {
      throw new TypeError('parameter "ServiceAddress" is required');
    }

    if (!hasOwnProperty(params, 'ServiceTimeout')) {
      throw new TypeError('parameter "ServiceTimeout" is required');
    }

    if (!hasOwnProperty(params, 'Visibility')) {
      throw new TypeError('parameter "Visibility" is required');
    }

    return this.request('ModifyApi', params, options);
  }

  /**
   * @param {Long} AliUid - userId. required.
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
   */
  modifyApiForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

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

    return this.request('ModifyApiForInner', params, options);
  }

  /**
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
   * @param {Long} AliUid - userId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} DomainStatus - domainStatus. required.
   * @param {String} Remark - remark. optional.
   * @param {String} BitValue - bitValue. optional.
   */
  modifyDomainStatusForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'DomainStatus')) {
      throw new TypeError('parameter "DomainStatus" is required');
    }

    return this.request('ModifyDomainStatusForBackend', params, options);
  }

  /**
   * @param {String} AuthAppCode - authAppCode. required.
   * @param {String} GroupId - groupId. required.
   * @param {Long} AliUid - userId. required.
   */
  modifyGroupAuthAppCodeForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthAppCode')) {
      throw new TypeError('parameter "AuthAppCode" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ModifyGroupAuthAppCodeForBackend', params, options);
  }

  /**
   * @param {Long} AliUid - userId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ExcludeApis - excludeApis. optional.
   */
  modifyGroupExtendForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ModifyGroupExtendForBackend', params, options);
  }

  /**
   * @param {Long} AliUid - userId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {Integer} QpsLimit - trafficLimit. required.
   */
  modifyGroupQpsForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'QpsLimit')) {
      throw new TypeError('parameter "QpsLimit" is required');
    }

    return this.request('ModifyGroupQpsForBackend', params, options);
  }

  /**
   * @param {String} BillingStatus - billingStatus. optional.
   * @param {String} IllegalStatus - illegalStatus. optional.
   * @param {String} GroupId - groupId. required.
   * @param {Long} AliUid - userId. required.
   * @param {String} ClientToken - token. optional.
   */
  modifyGroupStatusForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ModifyGroupStatusForBackend', params, options);
  }

  /**
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
   * @param {Long} Aliuid - userId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   */
  reactivateDomainForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ReactivateDomainForBackend', params, options);
  }

  /**
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
   * @param {String} SkuId - groupId. required.
   * @param {Long} AccountQuantity - quota. required.
   * @param {String} Token - token. required.
   */
  refundInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SkuId')) {
      throw new TypeError('parameter "SkuId" is required');
    }

    if (!hasOwnProperty(params, 'AccountQuantity')) {
      throw new TypeError('parameter "AccountQuantity" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('RefundInstance', params, options);
  }

  /**
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
   * @param {Long} AliUid - userId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} AppIds - appIdStr. required.
   * @param {String} Source - authorizationSource. optional.
   */
  removeAccessPermissionByAppsForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
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

    if (!hasOwnProperty(params, 'AppIds')) {
      throw new TypeError('parameter "AppIds" is required');
    }

    return this.request('RemoveAccessPermissionByAppsForInner', params, options);
  }

  /**
   * @param {String} BlackType - blackType. required.
   */
  removeAllBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BlackType')) {
      throw new TypeError('parameter "BlackType" is required');
    }

    return this.request('RemoveAllBlackList', params, options);
  }

  /**
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
   * @param {String} AppCode - appCode. required.
   */
  resetAppCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppCode')) {
      throw new TypeError('parameter "AppCode" is required');
    }

    return this.request('ResetAppCode', params, options);
  }

  /**
   * @param {String} AppCode - appCode. required.
   * @param {Long} AliUid - userId. required.
   */
  resetAppCodeForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppCode')) {
      throw new TypeError('parameter "AppCode" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ResetAppCodeForInner', params, options);
  }

  /**
   * @param {String} AppKey - appKey. required.
   */
  resetAppKeySecret(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ResetAppKeySecret', params, options);
  }

  /**
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
   * @param {String} GroupId - groupId. required.
   * @param {Long} AppId - appId. required.
   */
  setAccessPermissionByGroupForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('SetAccessPermissionByGroupForBackend', params, options);
  }

  /**
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
   * @param {Long} AliUid - userId. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} AppIds - appIdStr. required.
   * @param {String} Description - description. optional.
   * @param {String} Source - authorizationSource. optional.
   */
  setAccessPermissionsForInner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
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

    if (!hasOwnProperty(params, 'AppIds')) {
      throw new TypeError('parameter "AppIds" is required');
    }

    return this.request('SetAccessPermissionsForInner', params, options);
  }

  /**
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
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertificateName - certificateName. required.
   * @param {String} CertificateBody - certificateBody. required.
   * @param {String} PrivateKey - privateKey. required.
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

    if (!hasOwnProperty(params, 'CertificateBody')) {
      throw new TypeError('parameter "CertificateBody" is required');
    }

    if (!hasOwnProperty(params, 'PrivateKey')) {
      throw new TypeError('parameter "PrivateKey" is required');
    }

    return this.request('SetDomainCertificate', params, options);
  }

  /**
   * @param {String} GroupId - groupId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} CertificateName - certificateName. optional.
   * @param {String} CertificateBody - certificateBody. optional.
   * @param {String} CertificatePrivateKey - privateKey. optional.
   */
  setDomainForBackend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SetDomainForBackend', params, options);
  }

  /**
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
   * @param {String} GroupId - groupId. required.
   * @param {String} BillingStatus - billingStatus. required.
   */
  setPurchasedApiGroupStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'BillingStatus')) {
      throw new TypeError('parameter "BillingStatus" is required');
    }

    return this.request('SetPurchasedApiGroupStatus', params, options);
  }

  /**
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
   * @param {String} GroupId - groupId. required.
   * @param {String} ApiId - apiUid. required.
   * @param {String} StageName - stageName. required.
   * @param {String} Description - description. required.
   * @param {String} HistoryVersion - version. required.
   */
  switchApiForInner(params = {}, options = {}) {
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

    return this.request('SwitchApiForInner', params, options);
  }

  /**
   * @param {String} InvokeParams - modifyInvokeTimesNowParams. required.
   */
  updateConsumerOpenInvokeTimesNow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InvokeParams')) {
      throw new TypeError('parameter "InvokeParams" is required');
    }

    return this.request('UpdateConsumerOpenInvokeTimesNow', params, options);
  }

  /**
   * @param {String} OriginalVip - originalInfo. required.
   * @param {String} NewVip - newVip. required.
   */
  vipMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OriginalVip')) {
      throw new TypeError('parameter "OriginalVip" is required');
    }

    if (!hasOwnProperty(params, 'NewVip')) {
      throw new TypeError('parameter "NewVip" is required');
    }

    return this.request('VipMigration', params, options);
  }

  /**
   * @param {String} OriginalVip - originalInfo. optional.
   * @param {String} NewVip - newVip. optional.
   */
  vipMigrationByUid(params = {}, options = {}) {
    return this.request('VipMigrationByUid', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} AddressPoolId - addressPoolId. required.
   * @param {String} ServerIp - serverIp. required.
   * @param {String} Token - token. required.
   */
  vpcAddAppServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AddressPoolId')) {
      throw new TypeError('parameter "AddressPoolId" is required');
    }

    if (!hasOwnProperty(params, 'ServerIp')) {
      throw new TypeError('parameter "ServerIp" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('VpcAddAppServer', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Token - token. required.
   */
  vpcCreateAddressPool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('VpcCreateAddressPool', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} AddressPoolId - addressPoolId. optional.
   * @param {String} ServerIp - serverIp. optional.
   */
  vpcQueryAppServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('VpcQueryAppServers', params, options);
  }

  /**
   * @param {String} AppId - appId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Token - token. required.
   */
  vpcRegisterApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('VpcRegisterApp', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} ServerIp - serverIp. required.
   * @param {String} Token - token. required.
   */
  vpcRemoveAppServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ServerIp')) {
      throw new TypeError('parameter "ServerIp" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('VpcRemoveAppServer', params, options);
  }

}

module.exports = Client;
