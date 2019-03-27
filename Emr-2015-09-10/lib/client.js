
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-09-10';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Boolean} LogEnable - logEnable. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroup - securityGroup. optional.
   * @param {Boolean} IsOpenPublicIp - isOpenPublicIp. optional.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} EmrVer - emrVer. required.
   * @param {String} ClusterType - clusterType. required.
   * @param {RepeatList} Install - softWareInfoList. optional.
   * @param {Integer} MasterIndex - masterIndex. optional.
   * @param {Boolean} MasterPwdEnable - masterPwdEnable. required.
   * @param {String} MasterPwd - masterPwd. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. required.
   * @param {Integer} PayType - payType. required.
   * @param {Integer} Period - period. optional.
   * @param {String} EmrRole4ECS - emrRole4ECS. optional.
   * @param {String} EmrRole4Oss - emrRole4Oss. optional.
   * @param {Boolean} UserDefaultRAM - userDefaultRAM. required.
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

    if (!hasOwnProperty(params, 'MasterPwdEnable')) {
      throw new TypeError('parameter "MasterPwdEnable" is required');
    }

    if (!hasOwnProperty(params, 'EcsOrder')) {
      throw new TypeError('parameter "EcsOrder" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    if (!hasOwnProperty(params, 'UserDefaultRAM')) {
      throw new TypeError('parameter "UserDefaultRAM" is required');
    }

    return this.request('CreateCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ClusterId - clusterId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Strategy - strategy. optional.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} TimeUnit - timeUnit. optional.
   * @param {RepeatList} JobId - jobIds. required.
   */
  createExecutePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('CreateExecutePlan', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterName - clusterName. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Boolean} LogEnable - logEnable. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroup - securityGroup. optional.
   * @param {Boolean} IsOpenPublicIp - isOpenPublicIp. optional.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} EmrVer - emrVer. required.
   * @param {String} ClusterType - clusterType. required.
   * @param {RepeatList} Install - softWareInfoList. optional.
   * @param {Integer} MasterIndex - masterIndex. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. required.
   * @param {String} EmrRole4ECS - emrRole4ECS. optional.
   * @param {String} EmrRole4Oss - emrRole4Oss. optional.
   * @param {Boolean} UserDefaultRAM - userDefaultRAM. required.
   * @param {Integer} PayType - payType. required.
   * @param {Integer} Period - period. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Strategy - strategy. optional.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} TimeUnit - timeUnit. optional.
   * @param {RepeatList} JobId - jobIds. required.
   */
  createExecutePlanWithCluster(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'UserDefaultRAM')) {
      throw new TypeError('parameter "UserDefaultRAM" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('CreateExecutePlanWithCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} JobName - name. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} JobType - jobType. required.
   * @param {String} Parameter - envParameter. required.
   * @param {Integer} JobFailAct - jobFailAct. required.
   */
  createJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'JobType')) {
      throw new TypeError('parameter "JobType" is required');
    }

    if (!hasOwnProperty(params, 'Parameter')) {
      throw new TypeError('parameter "Parameter" is required');
    }

    if (!hasOwnProperty(params, 'JobFailAct')) {
      throw new TypeError('parameter "JobFailAct" is required');
    }

    return this.request('CreateJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} Id - executePlanId. optional.
   */
  deleteExecutePlan(params = {}, options = {}) {
    return this.request('DeleteExecutePlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Long} Id - id. required.
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
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. required.
   */
  describeCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - executePlanId. required.
   */
  describeExecutePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeExecutePlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Long} Id - id. required.
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
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
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
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Long} ExecutePlanRecordNodeId - workNodeId. required.
   * @param {String} RegionId - regionId. required.
   */
  killExecutePlanRecordNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ExecutePlanRecordNodeId')) {
      throw new TypeError('parameter "ExecutePlanRecordNodeId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('KillExecutePlanRecordNode', params, options);
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
   * @param {Boolean} DefaultStatus - defaultStatus. optional. default: false.
   */
  listCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListCluster', params, options);
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
   * @param {Boolean} DefaultStatus - defaultStatus. optional. default: false.
   */
  listClusters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListClusters', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   */
  listConfigType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListConfigType', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ExecutePlanExecRecordId - executePlanExecRecordId. optional.
   * @param {Boolean} IsDesc - isDesc. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listExecutePlanExecuteRecordNodes(params = {}, options = {}) {
    return this.request('ListExecutePlanExecuteRecordNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ExecutePlanId - executePlanId. required.
   * @param {Boolean} IsDesc - isDesc. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listExecutePlanExecuteRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ExecutePlanId')) {
      throw new TypeError('parameter "ExecutePlanId" is required');
    }

    return this.request('ListExecutePlanExecuteRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ExecutePlanExecuteNodeId - executePlanExecuteNodeId. optional.
   * @param {String} ExecutePlanExecRecordId - executePlanExecRecordId. optional.
   * @param {Boolean} IsDesc - isDesc. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listExecutePlanJobs(params = {}, options = {}) {
    return this.request('ListExecutePlanJobs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ExecutePlanWorkNodeId - workNodeId. required.
   */
  listExecutePlanNodeInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ExecutePlanWorkNodeId')) {
      throw new TypeError('parameter "ExecutePlanWorkNodeId" is required');
    }

    return this.request('ListExecutePlanNodeInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} Strategy - strategy. optional.
   * @param {Boolean} IsDesc - isDesc. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listExecutePlans(params = {}, options = {}) {
    return this.request('ListExecutePlans', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IsDesc - isDesc. optional.
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
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   */
  listRegions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Long} ClusterId - clusterId. required.
   * @param {String} ClusterName - clusterName. required.
   */
  modifyClusterName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterName')) {
      throw new TypeError('parameter "ClusterName" is required');
    }

    return this.request('ModifyClusterName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ClusterId - clusterId. optional.
   * @param {Long} ExecutePlanId - executePlanId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Strategy - strategy. optional.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} TimeUnit - timeUnit. optional.
   * @param {RepeatList} JobId - jobIds. required.
   */
  modifyExecutePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('ModifyExecutePlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} ClusterName - clusterName. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Boolean} LogEnable - logEnable. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroup - securityGroup. optional.
   * @param {Boolean} IsOpenPublicIp - isOpenPublicIp. optional.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} EmrVer - emrVer. required.
   * @param {String} ClusterType - clusterType. required.
   * @param {RepeatList} Install - softWareInfoList. optional.
   * @param {Integer} MasterIndex - masterIndex. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. required.
   * @param {String} EmrRole4ECS - emrRole4ECS. required.
   * @param {String} EmrRole4Oss - emrRole4Oss. required.
   * @param {Boolean} UserDefaultRAM - userDefaultRAM. required.
   * @param {Integer} PayType - payType. required.
   * @param {Integer} Period - period. optional.
   * @param {Long} ExecutePlanId - executePlanId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Strategy - strategy. optional.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} TimeUnit - timeUnit. optional.
   * @param {RepeatList} JobId - jobIds. required.
   */
  modifyExecutePlanWithCluster(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'EmrRole4ECS')) {
      throw new TypeError('parameter "EmrRole4ECS" is required');
    }

    if (!hasOwnProperty(params, 'EmrRole4Oss')) {
      throw new TypeError('parameter "EmrRole4Oss" is required');
    }

    if (!hasOwnProperty(params, 'UserDefaultRAM')) {
      throw new TypeError('parameter "UserDefaultRAM" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('ModifyExecutePlanWithCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - jobType. optional.
   * @param {String} EnvParameter - envParameter. optional.
   * @param {Integer} FailAct - jobFailAct. optional.
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
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ClusterId - clusterId. required.
   * @param {Boolean} ForceRelease - forceRelease. optional. default: false.
   */
  releaseCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ReleaseCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} Id - executePlanId. optional.
   */
  resumeExecutePlan(params = {}, options = {}) {
    return this.request('ResumeExecutePlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ExecutePlanId - executePlanId. optional.
   */
  runExecutePlan(params = {}, options = {}) {
    return this.request('RunExecutePlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} Id - executePlanId. optional.
   */
  stopExecutePlan(params = {}, options = {}) {
    return this.request('StopExecutePlan', params, options);
  }

}

module.exports = Client;
