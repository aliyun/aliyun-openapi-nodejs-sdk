
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-01';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} BuildRecordId - buildRecordId. required.
   */
  cancelRepoBuildRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'BuildRecordId')) {
      throw new TypeError('parameter "BuildRecordId" is required');
    }

    return this.request('CancelRepoBuildRecord', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   */
  checkServiceAuthorization(params = {}, options = {}) {
    return this.request('CheckServiceAuthorization', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} BuildRecordId - buildRecordId. required.
   */
  createBuildRecordByRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'BuildRecordId')) {
      throw new TypeError('parameter "BuildRecordId" is required');
    }

    return this.request('CreateBuildRecordByRecord', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} BuildRuleId - buildRuleId. required.
   */
  createBuildRecordByRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'BuildRuleId')) {
      throw new TypeError('parameter "BuildRuleId" is required');
    }

    return this.request('CreateBuildRecordByRule', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceName - instanceName. required.
   * @param {String} InstanceSpecification - instanceSpecification. required.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSpecification')) {
      throw new TypeError('parameter "InstanceSpecification" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} EndpointType - endpointType. required.
   * @param {String} Entry - entry. required.
   * @param {String} Comment - comment. optional.
   */
  createInstanceEndpointAclPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EndpointType')) {
      throw new TypeError('parameter "EndpointType" is required');
    }

    if (!hasOwnProperty(params, 'Entry')) {
      throw new TypeError('parameter "Entry" is required');
    }

    return this.request('CreateInstanceEndpointAclPolicy', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} VswitchId - vswitchId. required.
   */
  createInstanceVpcEndpointLinkedVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VswitchId')) {
      throw new TypeError('parameter "VswitchId" is required');
    }

    return this.request('CreateInstanceVpcEndpointLinkedVpc', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NamespaceName - namespaceName. required.
   * @param {Boolean} AutoCreateRepo - autoCreateRepo. optional.
   * @param {String} DefaultRepoType - defaultRepoType. optional.
   */
  createNamespace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NamespaceName')) {
      throw new TypeError('parameter "NamespaceName" is required');
    }

    return this.request('CreateNamespace', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} DockerfileLocation - dockerfileLocation. optional.
   * @param {String} DockerfileName - dockerfileName. optional.
   * @param {String} PushType - pushType. required.
   * @param {String} PushName - pushName. required.
   * @param {String} ImageTag - imageTag. required.
   */
  createRepoBuildRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'PushType')) {
      throw new TypeError('parameter "PushType" is required');
    }

    if (!hasOwnProperty(params, 'PushName')) {
      throw new TypeError('parameter "PushName" is required');
    }

    if (!hasOwnProperty(params, 'ImageTag')) {
      throw new TypeError('parameter "ImageTag" is required');
    }

    return this.request('CreateRepoBuildRule', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} CodeRepoType - codeRepoType. required.
   * @param {String} CodeRepoNamespaceName - codeRepoNamespaceName. required.
   * @param {String} CodeRepoName - codeRepoName. required.
   * @param {Boolean} AutoBuild - autoBuild. optional.
   * @param {Boolean} OverseaBuild - overseaBuild. optional.
   * @param {Boolean} DisableCacheBuild - disableCacheBuild. optional.
   */
  createRepoSourceCodeRepo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'CodeRepoType')) {
      throw new TypeError('parameter "CodeRepoType" is required');
    }

    if (!hasOwnProperty(params, 'CodeRepoNamespaceName')) {
      throw new TypeError('parameter "CodeRepoNamespaceName" is required');
    }

    if (!hasOwnProperty(params, 'CodeRepoName')) {
      throw new TypeError('parameter "CodeRepoName" is required');
    }

    return this.request('CreateRepoSourceCodeRepo', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} Tag - tag. required.
   */
  createRepoTagScanTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('CreateRepoTagScanTask', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} TriggerName - triggerName. required.
   * @param {String} TriggerUrl - triggerUrl. required.
   * @param {String} TriggerType - triggerType. required.
   * @param {String} TriggerTag - triggerTag. optional.
   */
  createRepoTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'TriggerName')) {
      throw new TypeError('parameter "TriggerName" is required');
    }

    if (!hasOwnProperty(params, 'TriggerUrl')) {
      throw new TypeError('parameter "TriggerUrl" is required');
    }

    if (!hasOwnProperty(params, 'TriggerType')) {
      throw new TypeError('parameter "TriggerType" is required');
    }

    return this.request('CreateRepoTrigger', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoName - repoName. required.
   * @param {String} RepoNamespaceName - repoNamespaceName. required.
   * @param {String} RepoType - repoType. required.
   * @param {String} Summary - summary. required.
   * @param {String} Detail - detail. optional.
   */
  createRepository(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoName')) {
      throw new TypeError('parameter "RepoName" is required');
    }

    if (!hasOwnProperty(params, 'RepoNamespaceName')) {
      throw new TypeError('parameter "RepoNamespaceName" is required');
    }

    if (!hasOwnProperty(params, 'RepoType')) {
      throw new TypeError('parameter "RepoType" is required');
    }

    if (!hasOwnProperty(params, 'Summary')) {
      throw new TypeError('parameter "Summary" is required');
    }

    return this.request('CreateRepository', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CodeRepoType - codeRepoType. required.
   * @param {String} CodeRepoUrl - codeRepoUrl. optional.
   * @param {String} AccessToken - accessToken. optional.
   * @param {String} Username - username. optional.
   */
  createSourceCodeAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CodeRepoType')) {
      throw new TypeError('parameter "CodeRepoType" is required');
    }

    return this.request('CreateSourceCodeAccount', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} EndpointType - endpointType. required.
   * @param {String} Entry - entry. required.
   */
  deleteInstanceEndpointAclPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EndpointType')) {
      throw new TypeError('parameter "EndpointType" is required');
    }

    if (!hasOwnProperty(params, 'Entry')) {
      throw new TypeError('parameter "Entry" is required');
    }

    return this.request('DeleteInstanceEndpointAclPolicy', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} VswitchId - vswitchId. required.
   */
  deleteInstanceVpcEndpointLinkedVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VswitchId')) {
      throw new TypeError('parameter "VswitchId" is required');
    }

    return this.request('DeleteInstanceVpcEndpointLinkedVpc', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NamespaceName - namespaceName. required.
   */
  deleteNamespace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NamespaceName')) {
      throw new TypeError('parameter "NamespaceName" is required');
    }

    return this.request('DeleteNamespace', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} BuildRuleId - buildRuleId. required.
   */
  deleteRepoBuildRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'BuildRuleId')) {
      throw new TypeError('parameter "BuildRuleId" is required');
    }

    return this.request('DeleteRepoBuildRule', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} Tag - tag. required.
   */
  deleteRepoTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('DeleteRepoTag', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} TriggerId - triggerId. required.
   */
  deleteRepoTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'TriggerId')) {
      throw new TypeError('parameter "TriggerId" is required');
    }

    return this.request('DeleteRepoTrigger', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   */
  deleteRepository(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    return this.request('DeleteRepository', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AccountId - accountId. required.
   */
  deleteSourceCodeAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    return this.request('DeleteSourceCodeAccount', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  getAuthorizationToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetAuthorizationToken', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  getInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   */
  getInstanceCount(params = {}, options = {}) {
    return this.request('GetInstanceCount', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} EndpointType - endpointType. required.
   */
  getInstanceEndpoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EndpointType')) {
      throw new TypeError('parameter "EndpointType" is required');
    }

    return this.request('GetInstanceEndpoint', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  getInstanceStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceStorage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  getInstanceStorageInternetIn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceStorageInternetIn', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  getInstanceStorageInternetOut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceStorageInternetOut', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  getInstanceStorageIntranetIn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceStorageIntranetIn', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  getInstanceStorageIntranetOut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceStorageIntranetOut', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  getInstanceStorageUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceStorageUsage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  getInstanceUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceUsage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  getInstanceVpcEndpoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceVpcEndpoint', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NamespaceName - namespaceName. required.
   */
  getNamespace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NamespaceName')) {
      throw new TypeError('parameter "NamespaceName" is required');
    }

    return this.request('GetNamespace', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} BuildRecordId - buildRecordId. required.
   */
  getRepoBuildRecordStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'BuildRecordId')) {
      throw new TypeError('parameter "BuildRecordId" is required');
    }

    return this.request('GetRepoBuildRecordStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   */
  getRepoSourceCodeRepo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    return this.request('GetRepoSourceCodeRepo', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} Tag - tag. required.
   */
  getRepoTagLayers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('GetRepoTagLayers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Tag - tag. required.
   * @param {Integer} SchemaVersion - schemaVersion. optional.
   * @param {String} RepoId - repoId. required.
   */
  getRepoTagManifest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    return this.request('GetRepoTagManifest', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} Tag - tag. required.
   */
  getRepoTagScanTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('GetRepoTagScanTask', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. optional.
   * @param {String} RepoNamespaceName - repoNamespaceName. optional.
   * @param {String} RepoName - repoName. optional.
   */
  getRepository(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetRepository', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} InstanceStatus - instanceStatus. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listInstance(params = {}, options = {}) {
    return this.request('ListInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  listInstanceEndpoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListInstanceEndpoint', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Lang - lang. optional.
   */
  listInstanceRegion(params = {}, options = {}) {
    return this.request('ListInstanceRegion', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NamespaceStatus - namespaceStatus. optional.
   * @param {String} NamespaceName - namespaceName. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listNamespace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListNamespace', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listRepoBuildRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    return this.request('ListRepoBuildRecord', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} BuildRecordId - buildRecordId. required.
   * @param {Integer} Offset - offset. optional.
   */
  listRepoBuildRecordLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'BuildRecordId')) {
      throw new TypeError('parameter "BuildRecordId" is required');
    }

    return this.request('ListRepoBuildRecordLog', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listRepoBuildRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    return this.request('ListRepoBuildRule', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listRepoTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    return this.request('ListRepoTag', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   */
  listRepoTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    return this.request('ListRepoTrigger', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} TriggerId - triggerId. required.
   */
  listRepoTriggerLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'TriggerId')) {
      throw new TypeError('parameter "TriggerId" is required');
    }

    return this.request('ListRepoTriggerLog', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoStatus - repoStatus. optional.
   * @param {String} RepoName - repoNamePrefix. optional.
   * @param {String} RepoNamespaceName - repoNamespaceName. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listRepository(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListRepository', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CodeRepoType - codeRepoType. required.
   */
  listSourceCodeAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CodeRepoType')) {
      throw new TypeError('parameter "CodeRepoType" is required');
    }

    return this.request('ListSourceCodeAccount', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CodeRepoType - codeRepoType. required.
   */
  listSourceCodeRepo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CodeRepoType')) {
      throw new TypeError('parameter "CodeRepoType" is required');
    }

    return this.request('ListSourceCodeRepo', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   */
  listSourceCodeRepoRef(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    return this.request('ListSourceCodeRepoRef', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listUserVpc(params = {}, options = {}) {
    return this.request('ListUserVpc', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Password - password. required.
   */
  resetLoginPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('ResetLoginPassword', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} EndpointType - endpointType. required.
   * @param {Boolean} Enable - enable. required.
   */
  updateInstanceEndpointAclStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EndpointType')) {
      throw new TypeError('parameter "EndpointType" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('UpdateInstanceEndpointAclStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} EndpointType - endpointType. required.
   * @param {Boolean} Enable - enable. required.
   */
  updateInstanceEndpointStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EndpointType')) {
      throw new TypeError('parameter "EndpointType" is required');
    }

    if (!hasOwnProperty(params, 'Enable')) {
      throw new TypeError('parameter "Enable" is required');
    }

    return this.request('UpdateInstanceEndpointStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NamespaceName - namespaceName. required.
   * @param {Boolean} AutoCreateRepo - autoCreateRepo. optional.
   * @param {String} DefaultRepoType - defaultRepoType. optional.
   */
  updateNamespace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NamespaceName')) {
      throw new TypeError('parameter "NamespaceName" is required');
    }

    return this.request('UpdateNamespace', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} DockerfileLocation - dockerfileLocation. optional.
   * @param {String} DockerfileName - dockerfileName. optional.
   * @param {String} PushType - pushType. optional.
   * @param {String} PushName - pushName. optional.
   * @param {String} ImageTag - imageTag. optional.
   * @param {String} BuildRuleId - buildRuleId. required.
   */
  updateRepoBuildRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'BuildRuleId')) {
      throw new TypeError('parameter "BuildRuleId" is required');
    }

    return this.request('UpdateRepoBuildRule', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} CodeRepoType - codeRepoType. required.
   * @param {String} CodeRepoNamespaceName - codeRepoNamespaceName. required.
   * @param {String} CodeRepoName - codeRepoName. required.
   * @param {String} AutoBuild - autoBuild. optional.
   * @param {String} OverseaBuild - overseaBuild. optional.
   * @param {String} DisableCacheBuild - disableCacheBuild. optional.
   * @param {String} CodeRepoId - codeRepoId. optional.
   */
  updateRepoSourceCodeRepo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'CodeRepoType')) {
      throw new TypeError('parameter "CodeRepoType" is required');
    }

    if (!hasOwnProperty(params, 'CodeRepoNamespaceName')) {
      throw new TypeError('parameter "CodeRepoNamespaceName" is required');
    }

    if (!hasOwnProperty(params, 'CodeRepoName')) {
      throw new TypeError('parameter "CodeRepoName" is required');
    }

    return this.request('UpdateRepoSourceCodeRepo', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} TriggerName - triggerName. optional.
   * @param {String} TriggerUrl - triggerUrl. optional.
   * @param {String} TriggerType - triggerType. optional.
   * @param {String} TriggerTag - triggerTag. optional.
   * @param {String} TriggerId - triggerId. required.
   */
  updateRepoTrigger(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'TriggerId')) {
      throw new TypeError('parameter "TriggerId" is required');
    }

    return this.request('UpdateRepoTrigger', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RepoId - repoId. required.
   * @param {String} RepoType - repoType. required.
   * @param {String} Summary - summary. optional.
   * @param {String} Detail - detail. optional.
   */
  updateRepository(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RepoId')) {
      throw new TypeError('parameter "RepoId" is required');
    }

    if (!hasOwnProperty(params, 'RepoType')) {
      throw new TypeError('parameter "RepoType" is required');
    }

    return this.request('UpdateRepository', params, options);
  }

}

module.exports = Client;
