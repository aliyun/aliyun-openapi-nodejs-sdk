
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-01-10';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Boolean} LogEnable - logEnable. optional. default: false.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - isOpenPublicIp. optional.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} EmrVer - emrVer. required.
   * @param {String} ClusterType - clusterType. required.
   * @param {Boolean} MasterPwdEnable - masterPwdEnable. optional. default: false.
   * @param {String} MasterPwd - masterPwd. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. required.
   */
  createCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EmrVer')) {
      throw new TypeError('parameter "EmrVer" is required');
    }

    if (!hasOwnProperty(params, 'ClusterType')) {
      throw new TypeError('parameter "ClusterType" is required');
    }

    if (!hasOwnProperty(params, 'EcsOrder')) {
      throw new TypeError('parameter "EcsOrder" is required');
    }

    return this.request('CreateCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} Strategy - strategy. required.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {String} TimeUnit - timeUnit. optional.
   * @param {RepeatList} JobIdList - jobIds. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Boolean} CreateClusterOnDemand - createCluster. optional. default: false.
   * @param {String} ClusterName - clusterName. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Boolean} LogEnable - logEnable. optional. default: false.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - isOpenPublicIp. optional. default: false.
   * @param {String} EmrVer - emrVer. optional.
   * @param {String} ClusterType - clusterType. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. optional.
   */
  createExecutionPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Strategy')) {
      throw new TypeError('parameter "Strategy" is required');
    }

    if (!hasOwnProperty(params, 'JobIdList')) {
      throw new TypeError('parameter "JobIdList" is required');
    }

    return this.request('CreateExecutionPlan', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. required.
   * @param {String} RunParameter - envParameter. required.
   * @param {String} FailAct - failAct. required.
   */
  createJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'RunParameter')) {
      throw new TypeError('parameter "RunParameter" is required');
    }

    if (!hasOwnProperty(params, 'FailAct')) {
      throw new TypeError('parameter "FailAct" is required');
    }

    return this.request('CreateJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  deleteExecutionPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteExecutionPlan', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeExecutionPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeExecutionPlan', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  describeJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} ItemType - itemType. required.
   * @param {String} Interval - interval. required.
   */
  getClusterStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ItemType')) {
      throw new TypeError('parameter "ItemType" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('GetClusterStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} Path - path. optional.
   */
  jobResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    return this.request('JobResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JobInstanceId - jobInstanceId. required.
   * @param {String} RegionId - regionId. required.
   */
  killExecutionJobInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobInstanceId')) {
      throw new TypeError('parameter "JobInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('KillExecutionJobInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  listAvailableConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListAvailableConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  listClusterAssociatedExecutionPlans(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ListClusterAssociatedExecutionPlans', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} ClusterTypeList - clusterTypeList. optional.
   * @param {String} CreateType - createType. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Boolean} IsDesc - isDesc. optional. default: true.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listClusters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListClusters', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} ExecutionPlanIdList - executionPlanIdList. required.
   * @param {Boolean} OnlyLastInstance - onlyLastInstance. optional. default: false.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Boolean} IsDesc - isDesc. optional. default: false.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listExecutionPlanInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExecutionPlanIdList')) {
      throw new TypeError('parameter "ExecutionPlanIdList" is required');
    }

    return this.request('ListExecutionPlanInstances', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} JobId - jobId. optional.
   * @param {String} Strategy - strategy. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Boolean} IsDesc - isDesc. optional. default: true.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listExecutionPlans(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListExecutionPlans', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ExecutionPlanInstanceId - executionPlanInstanceId. required.
   * @param {Boolean} IsDesc - isDesc. optional. default: false.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listJobExecutionInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ExecutionPlanInstanceId')) {
      throw new TypeError('parameter "ExecutionPlanInstanceId" is required');
    }

    return this.request('ListJobExecutionInstances', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} JobInstanceId - jobInstanceId. required.
   */
  listJobInstanceWorkers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'JobInstanceId')) {
      throw new TypeError('parameter "JobInstanceId" is required');
    }

    return this.request('ListJobInstanceWorkers', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IsDesc - isDesc. optional. default: true.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListJobs', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listRegions(params = {}, options = {}) {
    return this.request('ListRegions', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. required.
   */
  modifyClusterName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyClusterName', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterName - clusterName. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Boolean} LogEnable - logEnable. optional. default: false.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - isOpenPublicIp. optional. default: false.
   * @param {Boolean} CreateClusterOnDemand - createCluster. optional.
   * @param {String} EmrVer - emrVer. optional.
   * @param {String} ClusterType - clusterType. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. optional.
   * @param {String} Id - executionPlanId. required.
   * @param {String} Name - name. required.
   * @param {String} Strategy - strategy. required.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {String} TimeUnit - timeUnit. optional.
   * @param {RepeatList} JobIdList - jobIds. required.
   */
  modifyExecutionPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Strategy')) {
      throw new TypeError('parameter "Strategy" is required');
    }

    if (!hasOwnProperty(params, 'JobIdList')) {
      throw new TypeError('parameter "JobIdList" is required');
    }

    return this.request('ModifyExecutionPlan', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterName - clusterName. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Boolean} LogEnable - logEnable. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} securityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - isOpenPublicIp. optional.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} EmrVer - emrVer. required.
   * @param {String} ClusterType - clusterType. required.
   * @param {RepeatList} Install - softWareInfoList. optional.
   * @param {Integer} MasterIndex - masterIndex. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. required.
   * @param {String} UserDefinedRole - emrRole4ECS. optional.
   * @param {Boolean} UserDefaultRAM - userDefaultRAM. optional.
   * @param {String} Id - executionPlanId. required.
   * @param {String} Name - name. required.
   * @param {String} Strategy - strategy. required.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {String} TimeUnit - timeUnit. optional.
   * @param {RepeatList} JobIdList - jobIds. required.
   */
  modifyExecutionPlanWithCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterName')) {
      throw new TypeError('parameter "ClusterName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EmrVer')) {
      throw new TypeError('parameter "EmrVer" is required');
    }

    if (!hasOwnProperty(params, 'ClusterType')) {
      throw new TypeError('parameter "ClusterType" is required');
    }

    if (!hasOwnProperty(params, 'EcsOrder')) {
      throw new TypeError('parameter "EcsOrder" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Strategy')) {
      throw new TypeError('parameter "Strategy" is required');
    }

    if (!hasOwnProperty(params, 'JobIdList')) {
      throw new TypeError('parameter "JobIdList" is required');
    }

    return this.request('ModifyExecutionPlanWithCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - jobType. optional.
   * @param {String} RunParameter - envParameter. optional.
   * @param {String} FailAct - jobFailAct. optional.
   */
  modifyJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} MasterInstanceType - masterInstanceType. required.
   * @param {String} CoreInstanceType - coreInstanceType. optional.
   * @param {String} TaskInstanceType - taskInstanceType. optional.
   * @param {Integer} MasterInstanceQuantity - masterInstanceQuantity. required.
   * @param {Integer} CoreInstanceQuantity - coreInstanceQuantity. optional.
   * @param {Integer} TaskInstanceQuantity - taskInstanceQuantity. optional.
   * @param {String} MasterDiskType - masterDiskType. required.
   * @param {String} CoreDiskType - coreDiskType. optional.
   * @param {String} TaskDiskType - taskDiskType. optional.
   * @param {Integer} MasterDiskQuantity - masterDiskQuantity. required.
   * @param {Integer} CoreDiskQuantity - coreDiskQuantity. optional.
   * @param {Integer} TaskDiskQuantity - taskDiskQuantity. optional.
   * @param {Integer} Duration - duration. optional. default: 1.
   */
  queryPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'MasterInstanceType')) {
      throw new TypeError('parameter "MasterInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'MasterInstanceQuantity')) {
      throw new TypeError('parameter "MasterInstanceQuantity" is required');
    }

    if (!hasOwnProperty(params, 'MasterDiskType')) {
      throw new TypeError('parameter "MasterDiskType" is required');
    }

    if (!hasOwnProperty(params, 'MasterDiskQuantity')) {
      throw new TypeError('parameter "MasterDiskQuantity" is required');
    }

    return this.request('QueryPrice', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {Boolean} ForceRelease - forceRelease. optional. default: false.
   */
  releaseCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ReleaseCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} NewMasterInstances - newMasterInstances. required.
   * @param {Integer} NewCoreInstances - newCoreInstances. required.
   * @param {Integer} NewTaskInstances - newTaskInstances. required.
   */
  resizeCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NewMasterInstances')) {
      throw new TypeError('parameter "NewMasterInstances" is required');
    }

    if (!hasOwnProperty(params, 'NewCoreInstances')) {
      throw new TypeError('parameter "NewCoreInstances" is required');
    }

    if (!hasOwnProperty(params, 'NewTaskInstances')) {
      throw new TypeError('parameter "NewTaskInstances" is required');
    }

    return this.request('ResizeCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanId. required.
   */
  resumeExecutionPlanScheduler(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ResumeExecutionPlanScheduler', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanId. required.
   */
  runExecutionPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('RunExecutionPlan', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanId. required.
   */
  suspendExecutionPlanScheduler(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('SuspendExecutionPlanScheduler', params, options);
  }

}

module.exports = Client;
