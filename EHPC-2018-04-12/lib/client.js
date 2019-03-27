
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-04-12';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - Name. required.
   * @param {String} Repository - Repository. required.
   * @param {String} Description - Description. optional.
   * @param {String} ImageTag - ImageTag. optional.
   * @param {String} ContainerType - ContainerType. optional.
   */
  addContainerApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Repository')) {
      throw new TypeError('parameter "Repository" is required');
    }

    return this.request('AddContainerApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Nodes - Nodes. required.
   */
  addLocalNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Nodes')) {
      throw new TypeError('parameter "Nodes" is required');
    }

    return this.request('AddLocalNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} ImageOwnerAlias - ImageOwnerAlias. optional. default: system.
   * @param {String} ImageId - ImageId. optional.
   * @param {Integer} Count - Count. required.
   * @param {String} InstanceType - InstanceType. optional.
   * @param {String} ComputeSpotStrategy - ComputeSpotStrategy. optional.
   * @param {String} ComputeSpotPriceLimit - ComputeSpotPriceLimit. optional.
   * @param {String} EcsChargeType - EcsChargeType. optional. default: PostPaid.
   * @param {Integer} Period - Period. optional.
   * @param {String} PeriodUnit - PeriodUnit. optional.
   * @param {String} AutoRenew - AutoRenew. optional. default: false.
   * @param {Integer} AutoRenewPeriod - AutoRenewPeriod. optional. default: 1.
   * @param {String} JobQueue - JobQueue. optional.
   * @param {String} CreateMode - CreateMode. optional.
   * @param {Integer} SystemDiskSize - SystemDiskSize. optional.
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
   * @param {String} QueueName - QueueName. required.
   */
  addQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'QueueName')) {
      throw new TypeError('parameter "QueueName" is required');
    }

    return this.request('AddQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {RepeatList} User - User. required.
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
   * @param {String} EhpcVersion - EhpcVersion. optional.
   * @param {String} ClientVersion - ClientVersion. optional.
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
   * @param {String} DeployMode - DeployMode. optional.
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
   * @param {RepeatList} PostInstallScript - PostInstallScripts. optional.
   * @param {Integer} Period - Period. optional.
   * @param {String} PeriodUnit - PeriodUnit. optional.
   * @param {String} AutoRenew - AutoRenew. optional. default: false.
   * @param {Integer} AutoRenewPeriod - AutoRenewPeriod. optional. default: 1.
   * @param {String} InputFileUrl - InputFileUrl. optional.
   * @param {String} JobQueue - JobQueue. optional.
   * @param {Integer} SystemDiskSize - SystemDiskSize. optional.
   * @param {String} RemoteVisEnable - RemoteVisEnable. optional. default: false.
   * @param {String} ResourceGroupId - ResourceGroupId. optional.
   * @param {EcsOrder} EcsOrder - undefined. optional.
   */
  createCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'OsTag')) {
      throw new TypeError('parameter "OsTag" is required');
    }

    return this.request('CreateCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ZoneId - ZoneId. optional.
   * @param {String} Name - Name. required.
   * @param {String} Description - Description. optional.
   * @param {String} EhpcVersion - EhpcVersion. optional.
   * @param {String} ClientVersion - ClientVersion. optional.
   * @param {String} OsTag - OsTag. required.
   * @param {String} Domain - Domain. required.
   * @param {String} Nodes - Nodes. required.
   * @param {String} Location - Location. optional.
   * @param {String} SecurityGroupId - SecurityGroupId. optional.
   * @param {String} SecurityGroupName - SecurityGroupName. optional.
   * @param {String} VpcId - VpcId. required.
   * @param {String} VSwitchId - VSwitchId. required.
   * @param {String} VolumeType - VolumeType. optional. default: nas.
   * @param {String} VolumeId - VolumeId. optional.
   * @param {String} VolumeProtocol - VolumeProtocol. optional. default: nfs.
   * @param {String} VolumeMountpoint - VolumeMountpoint. optional.
   * @param {String} RemoteDirectory - RemoteDirectory. optional.
   * @param {String} OnPremiseVolumeProtocol - OnPremiseVolumeProtocol. optional.
   * @param {String} OnPremiseVolumeMountPoint - OnPremiseVolumeMountPoint. optional.
   * @param {String} OnPremiseVolumeRemotePath - OnPremiseVolumeRemotePath. optional.
   * @param {String} OnPremiseVolumeLocalPath - OnPremiseVolumeLocalPath. optional.
   * @param {String} Password - Password. optional.
   * @param {String} KeyPairName - KeyPairName. optional.
   * @param {RepeatList} Application - Application. optional.
   * @param {RepeatList} PostInstallScript - PostInstallScripts. optional.
   * @param {String} JobQueue - JobQueue. optional.
   * @param {String} ResourceGroupId - ResourceGroupId. optional.
   * @param {EcsOrder} EcsOrder - undefined. required.
   */
  createHybridCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'OsTag')) {
      throw new TypeError('parameter "OsTag" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Nodes')) {
      throw new TypeError('parameter "Nodes" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'EcsOrder')) {
      throw new TypeError('parameter "EcsOrder" is required');
    }

    return this.request('CreateHybridCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} RunasUser - RunasUser. required.
   * @param {String} RunasUserPassword - RunasUserPassword. required.
   * @param {String} Content - Content. required.
   * @param {String} TargetFile - TargetFile. required.
   */
  createJobFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RunasUser')) {
      throw new TypeError('parameter "RunasUser" is required');
    }

    if (!hasOwnProperty(params, 'RunasUserPassword')) {
      throw new TypeError('parameter "RunasUserPassword" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    if (!hasOwnProperty(params, 'TargetFile')) {
      throw new TypeError('parameter "TargetFile" is required');
    }

    return this.request('CreateJobFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
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
   * @param {RepeatList} ContainerApp - ContainerApp. required.
   */
  deleteContainerApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContainerApp')) {
      throw new TypeError('parameter "ContainerApp" is required');
    }

    return this.request('DeleteContainerApps', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Repository - Repository. required.
   * @param {String} ImageTag - ImageTag. optional.
   * @param {String} ContainerType - ContainerType. optional.
   */
  deleteImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Repository')) {
      throw new TypeError('parameter "Repository" is required');
    }

    return this.request('DeleteImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
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
   * @param {String} QueueName - QueueName. required.
   */
  deleteQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'QueueName')) {
      throw new TypeError('parameter "QueueName" is required');
    }

    return this.request('DeleteQueue', params, options);
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
  describeAutoScaleConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeAutoScaleConfig', params, options);
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
   * @param {String} ContainerId - ContainerId. required.
   */
  describeContainerApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContainerId')) {
      throw new TypeError('parameter "ContainerId" is required');
    }

    return this.request('DescribeContainerApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Repository - Repository. required.
   * @param {String} ImageTag - ImageTag. optional.
   * @param {String} ContainerType - ContainerType. optional.
   */
  describeImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Repository')) {
      throw new TypeError('parameter "Repository" is required');
    }

    return this.request('DescribeImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   */
  describeImageGatewayConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeImageGatewayConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ImageId - ImageId. required.
   * @param {String} PriceUnit - PriceUnit. required.
   * @param {String} SkuCode - SkuCode. required.
   * @param {Integer} Period - Period. required.
   * @param {Integer} Amount - Amount. required.
   * @param {String} OrderType - OrderType. optional.
   */
  describeImagePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'PriceUnit')) {
      throw new TypeError('parameter "PriceUnit" is required');
    }

    if (!hasOwnProperty(params, 'SkuCode')) {
      throw new TypeError('parameter "SkuCode" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    return this.request('DescribeImagePrice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} Commodities - Commodities. required.
   * @param {String} PriceUnit - PriceUnit. required.
   * @param {String} ChargeType - ChargeType. optional.
   * @param {String} OrderType - OrderType. optional.
   */
  describePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Commodities')) {
      throw new TypeError('parameter "Commodities" is required');
    }

    if (!hasOwnProperty(params, 'PriceUnit')) {
      throw new TypeError('parameter "PriceUnit" is required');
    }

    return this.request('DescribePrice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
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
   * @param {Integer} StartTime - StartTime. required.
   * @param {Integer} EndTime - EndTime. required.
   * @param {String} ReportType - ReportType. optional.
   */
  getAccountingReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetAccountingReport', params, options);
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
   * @param {Integer} From - From. required.
   * @param {Integer} To - To. required.
   * @param {Boolean} Reverse - Reverse. optional.
   * @param {String} AggregationType - AggregationType. optional.
   * @param {Integer} AggregationInterval - AggregationInterval. optional.
   * @param {String} MetricScope - MetricScope. optional.
   * @param {String} Filter - Filter. optional.
   * @param {String} MetricCategories - MetricCategories. optional.
   */
  getCloudMetricLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    if (!hasOwnProperty(params, 'To')) {
      throw new TypeError('parameter "To" is required');
    }

    return this.request('GetCloudMetricLogs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} ProfilingId - ProfilingId. required.
   */
  getCloudMetricProfiling(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ProfilingId')) {
      throw new TypeError('parameter "ProfilingId" is required');
    }

    return this.request('GetCloudMetricProfiling', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Node - Node. optional.
   */
  getHybridClusterConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('GetHybridClusterConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   */
  getVisualServiceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('GetVisualServiceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Application - Application. required.
   */
  installSoftware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Application')) {
      throw new TypeError('parameter "Application" is required');
    }

    return this.request('InstallSoftware', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Command - Command. required.
   * @param {RepeatList} Instance - Instance. optional.
   * @param {String} WorkingDir - WorkingDir. optional.
   * @param {Integer} Timeout - Timeout. optional.
   */
  invokeShellCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Command')) {
      throw new TypeError('parameter "Command" is required');
    }

    return this.request('InvokeShellCommand', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ZoneId - ZoneId. required.
   * @param {String} SpotStrategy - SpotStrategy. optional. default: NoSpot.
   * @param {String} InstanceChargeType - InstanceChargeType. optional. default: PostPaid.
   */
  listAvailableEcsTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('ListAvailableEcsTypes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listAvailableFileSystemTypes(params = {}, options = {}) {
    return this.request('ListAvailableFileSystemTypes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} ClusterId - ClusterId. required.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listCloudMetricProfilings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListCloudMetricProfilings', params, options);
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
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 100.
   */
  listClustersMeta(params = {}, options = {}) {
    return this.request('ListClustersMeta', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} CommandId - CommandId. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listCommands(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListCommands', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listContainerApps(params = {}, options = {}) {
    return this.request('ListContainerApps', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} ContainerType - ContainerType. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listContainerImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListContainerImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listCpfsFileSystems(params = {}, options = {}) {
    return this.request('ListCpfsFileSystems', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listCurrentClientVersion(params = {}, options = {}) {
    return this.request('ListCurrentClientVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ImageOwnerAlias - ImageOwnerAlias. optional.
   * @param {String} BaseOsTag - BaseOsTag. optional.
   */
  listCustomImages(params = {}, options = {}) {
    return this.request('ListCustomImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listFileSystemWithMountTargets(params = {}, options = {}) {
    return this.request('ListFileSystemWithMountTargets', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listImages(params = {}, options = {}) {
    return this.request('ListImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   */
  listInstalledSoftware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListInstalledSoftware', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} CommandId - CommandId. required.
   * @param {String} InvokeRecordStatus - InvokeRecordStatus. optional.
   * @param {RepeatList} Instance - Instance. optional.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listInvocationResults(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CommandId')) {
      throw new TypeError('parameter "CommandId" is required');
    }

    return this.request('ListInvocationResults', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} CommandId - CommandId. required.
   */
  listInvocationStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CommandId')) {
      throw new TypeError('parameter "CommandId" is required');
    }

    return this.request('ListInvocationStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
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
   * @param {String} QueueName - QueueName. required.
   * @param {Integer} PageNumber - PageNumber. optional. default: 1.
   * @param {Integer} PageSize - PageSize. optional. default: 10.
   */
  listNodesByQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'QueueName')) {
      throw new TypeError('parameter "QueueName" is required');
    }

    return this.request('ListNodesByQueue', params, options);
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
   * @param {String} InstanceChargeType - InstanceChargeType. optional. default: PostPaid.
   */
  listPreferredEcsTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('ListPreferredEcsTypes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   */
  listQueues(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListQueues', params, options);
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
   * @param {String} ContainerId - ContainerId. required.
   * @param {String} Description - Description. optional.
   */
  modifyContainerAppAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContainerId')) {
      throw new TypeError('parameter "ContainerId" is required');
    }

    return this.request('ModifyContainerAppAttributes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} DBType - DBType. optional.
   * @param {String} DBUsername - DBUsername. optional.
   * @param {String} DBPassword - DBPassword. optional.
   * @param {String} DBServerInfo - DBServerInfo. optional.
   * @param {String} DefaultRepoLocation - DefaultRepoLocation. optional.
   * @param {Integer} PullUpdateTimeout - PullUpdateTimeout. optional. default: 300.
   * @param {String} ImageExpirationTimeout - ImageExpirationTimeout. optional. default: 90:00:00:00.
   * @param {RepeatList} Repo - Repo. optional.
   */
  modifyImageGatewayConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyImageGatewayConfig', params, options);
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
   * @param {String} RunasUser - RunasUser. required.
   * @param {String} RunasUserPassword - RunasUserPassword. required.
   * @param {String} Passwd - Passwd. required.
   */
  modifyVisualServicePasswd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RunasUser')) {
      throw new TypeError('parameter "RunasUser" is required');
    }

    if (!hasOwnProperty(params, 'RunasUserPassword')) {
      throw new TypeError('parameter "RunasUserPassword" is required');
    }

    if (!hasOwnProperty(params, 'Passwd')) {
      throw new TypeError('parameter "Passwd" is required');
    }

    return this.request('ModifyVisualServicePasswd', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Repository - Repository. required.
   * @param {String} ImageTag - ImageTag. optional.
   * @param {String} ContainerType - ContainerType. optional.
   */
  pullImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Repository')) {
      throw new TypeError('parameter "Repository" is required');
    }

    return this.request('PullImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} OsTag - OsTag. optional.
   * @param {String} AccountType - AccountType. optional.
   * @param {String} SchedulerType - SchedulerType. optional.
   * @param {String} ImageOwnerAlias - ImageOwnerAlias. optional.
   * @param {String} ImageId - ImageId. optional.
   * @param {String} ClientVersion - ClientVersion. optional.
   */
  recoverCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('RecoverCluster', params, options);
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
   * @param {String} RegionId - RegionId. optional. default: cn-hangzhou.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} HostName - HostName. required.
   * @param {Integer} ProcessId - ProcessId. required.
   * @param {Integer} Duration - Duration. optional. default: 300.
   * @param {Integer} Freq - Freq. optional. default: 2000.
   */
  runCloudMetricProfiling(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostName')) {
      throw new TypeError('parameter "HostName" is required');
    }

    if (!hasOwnProperty(params, 'ProcessId')) {
      throw new TypeError('parameter "ProcessId" is required');
    }

    return this.request('RunCloudMetricProfiling', params, options);
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
   * @param {String} SpotStrategy - SpotStrategy. optional.
   * @param {Float} SpotPriceLimit - SpotPriceLimit. optional.
   * @param {RepeatList} Queues - Queues. optional.
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
   * @param {String} QueueName - QueueName. required.
   * @param {RepeatList} Node - Node. required.
   */
  setQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'QueueName')) {
      throw new TypeError('parameter "QueueName" is required');
    }

    if (!hasOwnProperty(params, 'Node')) {
      throw new TypeError('parameter "Node" is required');
    }

    return this.request('SetQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   */
  startCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('StartCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Role - Role. optional. default: Compute.
   * @param {RepeatList} Instance - Instance. required.
   */
  startNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Instance')) {
      throw new TypeError('parameter "Instance" is required');
    }

    return this.request('StartNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} CidrIp - CidrIp. required.
   * @param {Integer} Port - Port. required.
   */
  startVisualService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CidrIp')) {
      throw new TypeError('parameter "CidrIp" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('StartVisualService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   */
  stopCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('StopCluster', params, options);
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
   * @param {String} Role - Role. optional. default: Compute.
   * @param {RepeatList} Instance - Instance. required.
   */
  stopNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Instance')) {
      throw new TypeError('parameter "Instance" is required');
    }

    return this.request('StopNodes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} CidrIp - CidrIp. required.
   * @param {Integer} Port - Port. required.
   */
  stopVisualService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CidrIp')) {
      throw new TypeError('parameter "CidrIp" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('StopVisualService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} CommandLine - CommandLine. required.
   * @param {String} RunasUser - RunasUser. required.
   * @param {String} RunasUserPassword - RunasUserPassword. required.
   * @param {String} Name - Name. optional.
   * @param {Integer} Priority - Priority. optional.
   * @param {String} PackagePath - PackagePath. optional.
   * @param {String} StdoutRedirectPath - StdoutRedirectPath. optional.
   * @param {String} StderrRedirectPath - StderrRedirectPath. optional.
   * @param {Boolean} ReRunable - ReRunable. optional.
   * @param {String} ArrayRequest - ArrayRequest. optional.
   * @param {String} Variables - Variables. optional.
   * @param {String} InputFileUrl - InputFileUrl. optional.
   * @param {String} UnzipCmd - UnzipCmd. optional.
   * @param {String} PostCmdLine - PostCmdLine. optional.
   * @param {String} ContainerId - ContainerId. optional.
   * @param {String} JobQueue - Queue. optional.
   */
  submitJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'CommandLine')) {
      throw new TypeError('parameter "CommandLine" is required');
    }

    if (!hasOwnProperty(params, 'RunasUser')) {
      throw new TypeError('parameter "RunasUser" is required');
    }

    if (!hasOwnProperty(params, 'RunasUserPassword')) {
      throw new TypeError('parameter "RunasUserPassword" is required');
    }

    return this.request('SubmitJob', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - ClusterId. required.
   * @param {String} Application - Application. required.
   */
  uninstallSoftware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Application')) {
      throw new TypeError('parameter "Application" is required');
    }

    return this.request('UninstallSoftware', params, options);
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
