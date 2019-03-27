
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-14';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} ImageOwnerAlias - ImageOwnerAlias. optional. default: system.
   * @param {String} ImageId - ImageId. optional.
   * @param {Integer} Count - Count. required.
   * @param {String} ComputeSpotStrategy - ComputeSpotStrategy. optional.
   * @param {String} ComputeSpotPriceLimit - ComputeSpotPriceLimit. optional.
   */
  addNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('AddNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {RepeatList} User - User. required.
   * @param {Boolean} ReleaseInstance - ReleaseInstance. optional.
   */
  addUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    return this.request('AddUsers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ZoneId - ZoneId. optional.
   * @param {String} Name - Name. required.
   * @param {String} Description - Description. optional.
   * @param {String} EhpcVersion - EhpcVersion. required.
   * @param {String} OsTag - OsTag. required.
   * @param {String} AccountType - AccountType. optional. default: nis.
   * @param {String} SchedulerType - SchedulerType. optional. default: pbs.
   * @param {String} SecurityGroupId - SecurityGroupId. optional.
   * @param {String} SecurityGroupName - SecurityGroupName. optional.
   * @param {String} VpcId - VpcId. optional.
   * @param {String} VSwitchId - VSwitchId. optional.
   * @param {String} VolumeType - VolumeType. optional. default: nas.
   * @param {String} VolumeId - VolumeId. optional.
   * @param {String} VolumeProtocol - VolumeProtocol. optional. default: nfs.
   * @param {String} VolumeMountpoint - VolumeMountpoint. optional.
   * @param {String} RemoteDirectory - RemoteDirectory. optional.
   * @param {Boolean} HaEnable - HaEnable. optional. default: false.
   * @param {String} EcsChargeType - EcsChargeType. optional. default: PostPaid.
   * @param {String} Password - Password. optional.
   * @param {String} KeyPairName - KeyPairName. optional.
   * @param {String} ImageOwnerAlias - ImageOwnerAlias. optional. default: system.
   * @param {String} ImageId - ImageId. optional.
   * @param {String} SccClusterId - SccClusterId. optional.
   * @param {String} ComputeSpotStrategy - ComputeSpotStrategy. optional.
   * @param {String} ComputeSpotPriceLimit - ComputeSpotPriceLimit. optional.
   * @param {RepeatList} Application - Application. optional.
   * @param {EcsOrder} EcsOrder - undefined. optional.
   */
  createCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'EhpcVersion')) {
      throw new TypeError('parameter "EhpcVersion" is required');
    }

    if (!hasOwnProperty(params, 'OsTag')) {
      throw new TypeError('parameter "OsTag" is required');
    }

    return this.request('CreateCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} CommandLine - CommandLine. required.
   * @param {String} Name - Name. required.
   * @param {String} RunasUser - RunasUser. optional.
   * @param {Integer} Priority - Priority. optional.
   * @param {String} PackagePath - PackagePath. optional.
   * @param {String} StdoutRedirectPath - StdoutRedirectPath. optional.
   * @param {String} StderrRedirectPath - StderrRedirectPath. optional.
   * @param {Boolean} ReRunable - ReRunable. optional.
   * @param {String} ArrayRequest - ArrayRequest. optional.
   * @param {String} Variables - Variables. optional.
   */
  createJobTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommandLine')) {
      throw new TypeError('parameter "CommandLine" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateJobTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} ReleaseInstance - ReleaseInstance. optional.
   */
  deleteCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DeleteCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} Templates - Templates. required.
   */
  deleteJobTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Templates')) {
      throw new TypeError('parameter "Templates" is required');
    }

    return this.request('DeleteJobTemplates', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Jobs - Jobs. required.
   */
  deleteJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Jobs')) {
      throw new TypeError('parameter "Jobs" is required');
    }

    return this.request('DeleteJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {RepeatList} Instance - Instance. required.
   * @param {Boolean} ReleaseInstance - ReleaseInstance. optional. default: true.
   */
  deleteNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Instance')) {
      throw new TypeError('parameter "Instance" is required');
    }

    return this.request('DeleteNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {RepeatList} User - User. required.
   */
  deleteUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    return this.request('DeleteUsers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   */
  describeCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} TemplateId - TemplateId. required.
   * @param {String} CommandLine - CommandLine. required.
   * @param {String} Name - Name. required.
   * @param {String} RunasUser - RunasUser. optional.
   * @param {Integer} Priority - Priority. optional.
   * @param {String} PackagePath - PackagePath. optional.
   * @param {String} StdoutRedirectPath - StdoutRedirectPath. optional.
   * @param {String} StderrRedirectPath - StderrRedirectPath. optional.
   * @param {Boolean} ReRunable - ReRunable. optional.
   * @param {String} ArrayRequest - ArrayRequest. optional.
   * @param {String} Variables - Variables. optional.
   */
  editJobTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'CommandLine')) {
      throw new TypeError('parameter "CommandLine" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('EditJobTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   */
  getAutoScaleConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('GetAutoScaleConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 20.
   */
  listClusterLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterLogs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listClusters(params = {}, options = {}) {
    return this.request('ListClusters', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listCurrentClientVersion(params = {}, options = {}) {
    return this.request('ListCurrentClientVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - RegionId. optional.
   * @param {String} ImageOwnerAlias - ImageOwnerAlias. optional.
   * @param {String} BaseOsTag - BaseOsTag. optional.
   */
  listCustomImages(params = {}, options = {}) {
    return this.request('ListCustomImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listImages(params = {}, options = {}) {
    return this.request('ListImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} Name - Name. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listJobTemplates(params = {}, options = {}) {
    return this.request('ListJobTemplates', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Owner - Owner. optional.
   * @param {String} State - State. optional.
   * @param {String} Rerunable - Rerunable. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Role - Role. optional. default: Compute.
   * @param {String} HostName - HostName. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Role - Role. optional. default: Compute.
   * @param {String} HostName - HostName. optional.
   * @param {Boolean} OnlyDetached - OnlyDetached. optional. default: false.
   */
  listNodesNoPaging(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListNodesNoPaging', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ZoneId - ZoneId. required.
   * @param {String} SpotStrategy - SpotStrategy. optional. default: NoSpot.
   */
  listPreferredEcsTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('ListPreferredEcsTypes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listRegions(params = {}, options = {}) {
    return this.request('ListRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} EhpcVersion - EhpcVersion. optional.
   */
  listSoftwares(params = {}, options = {}) {
    return this.request('ListSoftwares', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListUsers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listVolumes(params = {}, options = {}) {
    return this.request('ListVolumes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Name - Name. optional.
   * @param {String} Description - Description. optional.
   */
  modifyClusterAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyClusterAttributes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {RepeatList} User - User. required.
   */
  modifyUserGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    return this.request('ModifyUserGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {RepeatList} User - User. required.
   */
  modifyUserPasswords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    return this.request('ModifyUserPasswords', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Jobs - Jobs. required.
   */
  rerunJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Jobs')) {
      throw new TypeError('parameter "Jobs" is required');
    }

    return this.request('RerunJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {RepeatList} Instance - Instance. required.
   */
  resetNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Instance')) {
      throw new TypeError('parameter "Instance" is required');
    }

    return this.request('ResetNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {Boolean} EnableAutoGrow - EnableAutoGrow. optional. default: false.
   * @param {Boolean} EnableAutoShrink - EnableAutoShrink. optional. default: false.
   * @param {Integer} GrowIntervalInMinutes - GrowIntervalInMinutes. optional. default: 2.
   * @param {Integer} ShrinkIntervalInMinutes - ShrinkIntervalInMinutes. optional. default: 2.
   * @param {Integer} ShrinkIdleTimes - ShrinkIdleTimes. optional. default: 3.
   * @param {Integer} GrowTimeoutInMinutes - GrowTimeoutInMinutes. optional. default: 20.
   * @param {Integer} ExtraNodesGrowRatio - ExtraNodesGrowRatio. optional. default: 0.
   * @param {Integer} GrowRatio - GrowRatio. optional. default: 100.
   * @param {Integer} MaxNodesInCluster - MaxNodesInCluster. required.
   * @param {String} ExcludeNodes - ExcludeNodes. optional.
   */
  setAutoScaleConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'MaxNodesInCluster')) {
      throw new TypeError('parameter "MaxNodesInCluster" is required');
    }

    return this.request('SetAutoScaleConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} RunasUser - RunasUser. required.
   * @param {String} RunasUserPassword - RunasUserPassword. required.
   */
  setJobUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RunasUser')) {
      throw new TypeError('parameter "RunasUser" is required');
    }

    if (!hasOwnProperty(params, 'RunasUserPassword')) {
      throw new TypeError('parameter "RunasUserPassword" is required');
    }

    return this.request('SetJobUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Jobs - Jobs. required.
   */
  stopJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Jobs')) {
      throw new TypeError('parameter "Jobs" is required');
    }

    return this.request('StopJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} CommandLine - CommandLine. required.
   * @param {String} Name - Name. optional.
   * @param {String} RunasUser - RunasUser. optional.
   * @param {String} RunasUserPassword - RunasUserPassword. optional.
   * @param {Integer} Priority - Priority. optional.
   * @param {String} PackagePath - PackagePath. optional.
   * @param {String} StdoutRedirectPath - StdoutRedirectPath. optional.
   * @param {String} StderrRedirectPath - StderrRedirectPath. optional.
   * @param {Boolean} ReRunable - ReRunable. optional.
   * @param {String} ArrayRequest - ArrayRequest. optional.
   * @param {String} Variables - Variables. optional.
   */
  submitJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CommandLine')) {
      throw new TypeError('parameter "CommandLine" is required');
    }

    return this.request('SubmitJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} ClientVersion - Version. optional.
   */
  upgradeClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('UpgradeClient', params, options);
  }

}

module.exports = Client;
