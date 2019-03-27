
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-08';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Comment - comment. optional.
   * @param {RepeatList} Service - serviceList. required.
   * @param {String} ClusterId - clusterId. required.
   */
  addClusterService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('AddClusterService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   */
  assignIpv6Addresses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    return this.request('AssignIpv6Addresses', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - noteId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  attachClusterForNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('AttachClusterForNote', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} InstanceIds - instanceIdList. required.
   */
  attachPubIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('AttachPubIp', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  authRealName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('AuthRealName', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} BizType - bizType. required.
   * @param {String} BizContent - bizContent. optional.
   */
  authorizeSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('AuthorizeSecurityGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} ReleaseId - releaseId. optional.
   */
  cancelETLJobRelease(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    return this.request('CancelETLJobRelease', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  cancelOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CancelOrder', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} UserId - userId. optional.
   */
  cancelOrderForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CancelOrderForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} UserId - userId. optional.
   * @param {Boolean} ForceRelease - forceRelease. optional. default: false.
   */
  checkClusterEcsReleaseForAdmin(params = {}, options = {}) {
    return this.request('CheckClusterEcsReleaseForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Conf - conf. optional.
   */
  checkDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CheckDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  checkEmrResource(params = {}, options = {}) {
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

    return this.request('CheckEmrResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} UserId - userId. optional.
   */
  checkPrePaidEcsReleaseForAdmin(params = {}, options = {}) {
    return this.request('CheckPrePaidEcsReleaseForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  checkRenewCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CheckRenewCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  checkUserBalance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CheckUserBalance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Resource - resource. required.
   * @param {String} UserAction - userAction. required.
   */
  checkUserRam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'UserAction')) {
      throw new TypeError('parameter "UserAction" is required');
    }

    return this.request('CheckUserRam', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ConsoleRoleName - consoleRoleName. required.
   */
  checkUserRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ConsoleRoleName')) {
      throw new TypeError('parameter "ConsoleRoleName" is required');
    }

    return this.request('CheckUserRole', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   */
  cloneDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CloneDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   */
  cloneETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CloneETLJob', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  cloneFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CloneFlow', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  cloneFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CloneFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  commonApiWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CommonApiWhiteList', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} LogStore - logStore. required.
   * @param {Integer} From - from. required.
   * @param {Integer} To - to. required.
   * @param {String} PackMeta - packMeta. required.
   * @param {String} PackId - packId. required.
   * @param {Integer} Size - size. required.
   * @param {Integer} TotalOffset - totalOffset. required.
   * @param {Boolean} Reverse - reverse. optional. default: true.
   */
  contextQueryLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'LogStore')) {
      throw new TypeError('parameter "LogStore" is required');
    }

    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    if (!hasOwnProperty(params, 'To')) {
      throw new TypeError('parameter "To" is required');
    }

    if (!hasOwnProperty(params, 'PackMeta')) {
      throw new TypeError('parameter "PackMeta" is required');
    }

    if (!hasOwnProperty(params, 'PackId')) {
      throw new TypeError('parameter "PackId" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'TotalOffset')) {
      throw new TypeError('parameter "TotalOffset" is required');
    }

    return this.request('ContextQueryLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EventCode - eventCode. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. optional.
   * @param {Integer} StartTimestampSec - startTimestampSec. required.
   * @param {Integer} EndTimestampSec - endTimestampSec. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} EventSourceType - eventSourceType. optional.
   * @param {String} EventType - eventType. required.
   * @param {String} EventLevel - eventLevel. optional. default: CRITICAL.
   * @param {String} AlertEventVisibility - alertEventVisibility. optional. default: USER_ADN_ADMIN.
   */
  countApmEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestampSec')) {
      throw new TypeError('parameter "StartTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestampSec')) {
      throw new TypeError('parameter "EndTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    return this.request('CountApmEvent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} Email - email. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} EmailVerificationCode - emailVerificationCode. optional.
   * @param {String} PhoneNumberVerificationCode - phoneNumberVerificationCode. optional.
   */
  createAlertContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateAlertContact', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} WebHookUrl - webHookUrl. required.
   */
  createAlertDingDingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'WebHookUrl')) {
      throw new TypeError('parameter "WebHookUrl" is required');
    }

    return this.request('CreateAlertDingDingGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} UserList - userList. required.
   */
  createAlertUserGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'UserList')) {
      throw new TypeError('parameter "UserList" is required');
    }

    return this.request('CreateAlertUserGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {RepeatList} TargetClusterList - targetClusterList. required.
   * @param {RepeatList} ServiceList - serviceList. optional.
   * @param {RepeatList} SeverityList - severityList. optional.
   * @param {RepeatList} EventTypeList - eventTypeList. required.
   * @param {RepeatList} EventCodeList - eventCodeList. optional.
   * @param {RepeatList} DingGroupList - dingGroupList. optional.
   * @param {RepeatList} UserGroupList - userGroupList. optional.
   * @param {Boolean} Enabled - enabled. optional.
   */
  createApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TargetClusterList')) {
      throw new TypeError('parameter "TargetClusterList" is required');
    }

    if (!hasOwnProperty(params, 'EventTypeList')) {
      throw new TypeError('parameter "EventTypeList" is required');
    }

    return this.request('CreateApmEventNotificationConfig', params, options);
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
   * @param {Boolean} IsOpenPublicIp - openPublicIp. optional. default: true.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} UserDefinedEmrEcsRole - userDefinedEmrEcsRole. optional. default: AliyunEmrEcsDefaultRole.
   * @param {String} EmrVer - emrVer. required.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. required.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {Boolean} SshEnable - sshEnable. optional. default: true.
   * @param {String} InstanceGeneration - instanceGeneration. optional.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} MachineType - machineType. optional. default: ECS.
   * @param {Boolean} MasterPwdEnable - masterPwdEnable. optional. default: false.
   * @param {String} MasterPwd - masterPwd. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. required.
   * @param {RepeatList} BootstrapAction - bootstrapActionList. optional.
   * @param {String} Configurations - configurations. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} RelatedClusterId - relatedClusterId. optional.
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
   * @param {String} Name - name. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - openPublicIp. optional. default: true.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} UserDefinedEmrEcsRole - userDefinedEmrEcsRole. optional. default: AliyunEmrEcsDefaultRole.
   * @param {String} EmrVer - emrVer. required.
   * @param {String} UserId - userId. required.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. required.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {Boolean} SshEnable - sshEnable. optional. default: true.
   * @param {String} InstanceGeneration - instanceGeneration. optional.
   * @param {String} MasterPwd - masterPwd. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {RepeatList} UserInfo - userInfoList. optional.
   * @param {RepeatList} HostComponentInfo - hostComponentInfoList. optional.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} MachineType - machineType. optional. default: ECS.
   * @param {RepeatList} HostGroup - hostGroupList. required.
   * @param {RepeatList} BootstrapAction - bootstrapActionList. optional.
   * @param {Boolean} UseCustomHiveMetaDB - useCustomHiveMetaDB. optional. default: false.
   * @param {Boolean} InitCustomHiveMetaDB - initCustomHiveMetaDB. optional. default: false.
   * @param {RepeatList} Config - configList. optional.
   * @param {String} Configurations - configurations. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} RelatedClusterId - relatedClusterId. optional.
   * @param {String} WhiteListType - whiteListType. optional.
   * @param {String} AuthorizeContent - authorizeContent. optional.
   */
  createClusterForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EmrVer')) {
      throw new TypeError('parameter "EmrVer" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterType')) {
      throw new TypeError('parameter "ClusterType" is required');
    }

    if (!hasOwnProperty(params, 'HostGroup')) {
      throw new TypeError('parameter "HostGroup" is required');
    }

    return this.request('CreateClusterForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterCondition - clusterCondition. optional.
   * @param {Long} ClusterTemplateId - clusterTemplateId. optional.
   */
  createClusterForInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('CreateClusterForInternal', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupName - hostGroupName. required.
   * @param {String} HostGroupType - hostGroupType. required.
   * @param {String} Comment - comment. optional.
   */
  createClusterHostGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupName')) {
      throw new TypeError('parameter "HostGroupName" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupType')) {
      throw new TypeError('parameter "HostGroupType" is required');
    }

    return this.request('CreateClusterHostGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} UserId - userId. required.
   * @param {String} HostGroupName - hostGroupName. required.
   * @param {String} HostGroupType - hostGroupType. required.
   * @param {String} Comment - comment. optional.
   */
  createClusterHostGroupForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupName')) {
      throw new TypeError('parameter "HostGroupName" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupType')) {
      throw new TypeError('parameter "HostGroupType" is required');
    }

    return this.request('CreateClusterHostGroupForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Path - path. required.
   * @param {String} Args - args. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} NodeIdList - nodeIdList. optional.
   */
  createClusterScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CreateClusterScript', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TemplateName - templateName. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - openPublicIp. optional. default: true.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} UserDefinedEmrEcsRole - userDefinedEmrEcsRole. optional. default: AliyunEmrEcsDefaultRole.
   * @param {String} EmrVer - emrVer. required.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. required.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {Boolean} SshEnable - sshEnable. optional. default: true.
   * @param {String} InstanceGeneration - instanceGeneration. optional.
   * @param {String} MasterPwd - masterPwd. optional.
   * @param {RepeatList} HostGroup - hostGroupList. required.
   * @param {RepeatList} BootstrapAction - bootstrapActionList. optional.
   * @param {String} Configurations - configurations. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} MachineType - machineType. optional. default: ECS.
   * @param {Boolean} UseCustomHiveMetaDb - useCustomHiveMetaDb. optional. default: false.
   * @param {Boolean} InitCustomHiveMetaDb - initCustomHiveMetaDb. optional. default: false.
   * @param {RepeatList} Config - configList. optional.
   */
  createClusterTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
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

    if (!hasOwnProperty(params, 'HostGroup')) {
      throw new TypeError('parameter "HostGroup" is required');
    }

    return this.request('CreateClusterTemplate', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} TemplateName - templateName. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - openPublicIp. optional. default: true.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} UserDefinedEmrEcsRole - userDefinedEmrEcsRole. optional. default: AliyunEmrEcsDefaultRole.
   * @param {String} EmrVer - emrVer. required.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. required.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {Boolean} SshEnable - sshEnable. optional. default: true.
   * @param {String} InstanceGeneration - instanceGeneration. optional.
   * @param {String} MasterPwd - masterPwd. optional.
   * @param {RepeatList} HostGroup - hostGroupList. required.
   * @param {RepeatList} BootstrapAction - bootstrapActionList. optional.
   * @param {String} Configurations - configurations. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} MachineType - machineType. optional. default: ECS.
   * @param {Boolean} UseCustomHiveMetaDb - useCustomHiveMetaDb. optional. default: false.
   * @param {Boolean} InitCustomHiveMetaDb - initCustomHiveMetaDb. optional. default: false.
   * @param {RepeatList} Config - configList. optional.
   */
  createClusterTemplateForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
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

    if (!hasOwnProperty(params, 'HostGroup')) {
      throw new TypeError('parameter "HostGroup" is required');
    }

    return this.request('CreateClusterTemplateForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - openPublicIp. optional. default: true.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {Boolean} AutoPayOrder - autoPayOrder. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} UserDefinedEmrEcsRole - userDefinedEmrEcsRole. optional. default: AliyunEmrEcsDefaultRole.
   * @param {String} EmrVer - emrVer. required.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. required.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {Boolean} SshEnable - sshEnable. optional. default: true.
   * @param {String} InstanceGeneration - instanceGeneration. optional.
   * @param {String} MasterPwd - masterPwd. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {RepeatList} UserInfo - userInfoList. optional.
   * @param {RepeatList} HostComponentInfo - hostComponentInfoList. optional.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} MachineType - machineType. optional. default: ECS.
   * @param {RepeatList} HostGroup - hostGroupList. required.
   * @param {RepeatList} BootstrapAction - bootstrapActionList. optional.
   * @param {Boolean} UseCustomHiveMetaDB - useCustomHiveMetaDB. optional. default: false.
   * @param {Boolean} InitCustomHiveMetaDB - initCustomHiveMetaDB. optional. default: false.
   * @param {RepeatList} Config - configList. optional.
   * @param {String} Configurations - configurations. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} RelatedClusterId - relatedClusterId. optional.
   * @param {String} WhiteListType - whiteListType. optional.
   * @param {String} AuthorizeContent - authorizeContent. optional.
   */
  createClusterV2(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'HostGroup')) {
      throw new TypeError('parameter "HostGroup" is required');
    }

    return this.request('CreateClusterV2', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TemplateBizId - templateBizId. required.
   * @param {String} UniqueTag - uniqueTag. optional.
   */
  createClusterWithTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateBizId')) {
      throw new TypeError('parameter "TemplateBizId" is required');
    }

    return this.request('CreateClusterWithTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} TemplateBizId - templateBizId. required.
   * @param {String} UniqueTag - uniqueTag. optional.
   */
  createClusterWithTemplateForInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateBizId')) {
      throw new TypeError('parameter "TemplateBizId" is required');
    }

    return this.request('CreateClusterWithTemplateForInternal', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} SourceType - sourceType. required.
   * @param {String} Description - description. optional.
   * @param {String} Conf - conf. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} NavParentId - navParentId. required.
   */
  createDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'NavParentId')) {
      throw new TypeError('parameter "NavParentId" is required');
    }

    return this.request('CreateDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   * @param {String} Description - description. optional.
   * @param {String} NavParentId - navParentId. optional.
   */
  createETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Topic - topic. required.
   * @param {String} MessageId - messageId. required.
   * @param {String} MessageBody - messageBody. required.
   */
  createEmrBizEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'MessageId')) {
      throw new TypeError('parameter "MessageId" is required');
    }

    if (!hasOwnProperty(params, 'MessageBody')) {
      throw new TypeError('parameter "MessageBody" is required');
    }

    return this.request('CreateEmrBizEvent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EmrVersion - emrVersion. required.
   * @param {String} ImageId - imageId. required.
   * @param {Boolean} Display - display. optional. default: false.
   * @param {String} StackName - stackName. required.
   * @param {String} StackVersion - stackVersion. required.
   * @param {RepeatList} ClusterTypeInfo - clusterTypeInfoList. optional.
   * @param {RepeatList} WhiteUser - whiteUserList. optional.
   */
  createEmrMainVersionForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EmrVersion')) {
      throw new TypeError('parameter "EmrVersion" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'StackName')) {
      throw new TypeError('parameter "StackName" is required');
    }

    if (!hasOwnProperty(params, 'StackVersion')) {
      throw new TypeError('parameter "StackVersion" is required');
    }

    return this.request('CreateEmrMainVersionForAdmin', params, options);
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
   * @param {String} DayOfWeek - dayOfWeek. optional.
   * @param {String} DayOfMonth - dayOfMonth. optional.
   * @param {RepeatList} JobIdList - jobIds. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Boolean} CreateClusterOnDemand - createCluster. optional. default: false.
   * @param {String} ClusterName - clusterName. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Boolean} LogEnable - logEnable. optional. default: false.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - openPublicIp. optional. default: true.
   * @param {String} EmrVer - emrVer. optional.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. optional.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} UserDefinedEmrEcsRole - userDefinedEmrEcsRole. optional. default: AliyunEmrEcsDefaultRole.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {String} InstanceGeneration - instanceGeneration. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. optional.
   * @param {RepeatList} BootstrapAction - bootstrapActionList. optional.
   * @param {Boolean} UseCustomHiveMetaDB - useCustomHiveMetaDB. optional. default: false.
   * @param {Boolean} InitCustomHiveMetaDB - initCustomHiveMetaDB. optional. default: false.
   * @param {RepeatList} Config - configList. optional.
   * @param {String} Configurations - configurations. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} WorkflowDefinition - workflowDefinition. optional.
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
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {Long} StartSchedule - startSchedule. optional.
   * @param {Long} EndSchedule - endSchedule. optional.
   * @param {String} CronExpr - cronExpr. optional.
   * @param {Boolean} CreateCluster - createCluster. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Application - application. optional.
   * @param {String} AlertConf - alertConf. optional.
   * @param {String} AlertUserGroupBizId - alertUserGroupBizId. optional.
   * @param {String} AlertDingDingGroupBizId - alertDingDingGroupBizId. optional.
   * @param {String} ParentFlowList - parentFlowList. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   */
  createFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateFlow', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   * @param {String} ParentId - parentId. optional.
   */
  createFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateFlowCategory', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {Long} StartSchedule - startSchedule. optional.
   * @param {Long} EndSchedule - endSchedule. optional.
   * @param {String} CronExpr - cronExpr. optional.
   * @param {Boolean} CreateCluster - createCluster. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Graph - graph. optional.
   * @param {String} AlertConf - alertConf. optional.
   * @param {String} AlertUserGroupBizId - alertUserGroupBizId. optional.
   * @param {String} AlertDingDingGroupBizId - alertDingDingGroupBizId. optional.
   * @param {String} ParentFlowList - parentFlowList. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   */
  createFlowForWeb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateFlowForWeb', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} Type - type. required.
   * @param {String} FailAct - failAct. optional.
   * @param {Integer} MaxRetry - maxRetry. optional.
   * @param {Long} RetryInterval - retryInterval. optional.
   * @param {String} Params - params. optional.
   * @param {String} ParamConf - paramConf. optional.
   * @param {String} EnvConf - envConf. optional.
   * @param {String} RunConf - runConf. optional.
   * @param {String} MonitorConf - monitorConf. optional.
   * @param {String} Mode - mode. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   * @param {RepeatList} ResourceList - resourceList. optional.
   * @param {Boolean} Adhoc - adhoc. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} AlertConf - alertConf. optional.
   */
  createFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateFlowJob', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   */
  createFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateFlowProject', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DefaultUser - defaultUser. optional.
   * @param {String} DefaultQueue - defaultQueue. optional.
   * @param {RepeatList} UserList - userList. optional.
   * @param {RepeatList} QueueList - queueList. optional.
   * @param {RepeatList} HostList - hostList. optional.
   */
  createFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CreateFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {RepeatList} User - userList. required.
   */
  createFlowProjectUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    return this.request('CreateFlowProjectUser', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. required.
   * @param {String} RunParameter - envParameter. required.
   * @param {String} FailAct - failAct. required.
   * @param {Integer} MaxRetry - maxRetry. optional. default: 0.
   * @param {Integer} RetryInterval - retryInterval. optional. default: 15.
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
   * @param {Long} ParentId - parentId. required.
   * @param {String} Name - name. required.
   */
  createJobExecutionPlanFolder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateJobExecutionPlanFolder', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ParamBizType - paramBizType. required.
   * @param {String} RelateId - relateId. required.
   * @param {RepeatList} WorkParamPair - workParamPairList. required.
   */
  createJobExecutionPlanParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamBizType')) {
      throw new TypeError('parameter "ParamBizType" is required');
    }

    if (!hasOwnProperty(params, 'RelateId')) {
      throw new TypeError('parameter "RelateId" is required');
    }

    if (!hasOwnProperty(params, 'WorkParamPair')) {
      throw new TypeError('parameter "WorkParamPair" is required');
    }

    return this.request('CreateJobExecutionPlanParam', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} MainVersion - mainVersion. required.
   * @param {String} Content - content. required.
   */
  createMainVersionForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MainVersion')) {
      throw new TypeError('parameter "MainVersion" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('CreateMainVersionForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} CategoryType - categoryType. required.
   * @param {String} Type - type. optional.
   * @param {String} ObjectId - objectId. optional.
   * @param {String} Name - name. required.
   * @param {String} ParentId - parentId. optional.
   */
  createNavNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryType')) {
      throw new TypeError('parameter "CategoryType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateNavNode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. required.
   * @param {String} ClusterId - clusterId. optional.
   */
  createNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateNote', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} NoteId - noteId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Text - text. optional.
   */
  createParagraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NoteId')) {
      throw new TypeError('parameter "NoteId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateParagraph', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} PoolType - poolType. required.
   * @param {Boolean} Active - active. required.
   * @param {String} Note - note. optional.
   * @param {String} YarnSiteConfig - yarnSiteConfig. optional.
   * @param {RepeatList} Config - configList. optional.
   */
  createResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'PoolType')) {
      throw new TypeError('parameter "PoolType" is required');
    }

    if (!hasOwnProperty(params, 'Active')) {
      throw new TypeError('parameter "Active" is required');
    }

    return this.request('CreateResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} QualifiedName - qualifiedName. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {Long} ParentQueueId - parentQueueId. optional.
   * @param {Boolean} Leaf - leaf. optional.
   * @param {Long} ResourcePoolId - resourcePoolId. required.
   * @param {RepeatList} Config - configList. optional.
   */
  createResourceQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    return this.request('CreateResourceQueue', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. required.
   * @param {String} RuleCategory - ruleCategory. required.
   * @param {String} RuleName - ruleName. required.
   * @param {String} AdjustmentType - adjustmentType. required.
   * @param {Integer} AdjustmentValue - adjustmentValue. required.
   * @param {Integer} Cooldown - cooldown. optional.
   * @param {String} LaunchTime - launchTime. optional.
   * @param {Integer} LaunchExpirationTime - launchExpirationTime. optional.
   * @param {String} RecurrenceType - recurrenceType. optional.
   * @param {String} RecurrenceValue - recurrenceValue. optional.
   * @param {String} RecurrenceEndTime - recurrenceEndTime. optional.
   * @param {RepeatList} SchedulerTrigger - schedulerTriggerList. optional.
   * @param {RepeatList} CloudWatchTrigger - cloudWatchTriggerList. optional.
   */
  createScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    if (!hasOwnProperty(params, 'RuleCategory')) {
      throw new TypeError('parameter "RuleCategory" is required');
    }

    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    if (!hasOwnProperty(params, 'AdjustmentType')) {
      throw new TypeError('parameter "AdjustmentType" is required');
    }

    if (!hasOwnProperty(params, 'AdjustmentValue')) {
      throw new TypeError('parameter "AdjustmentValue" is required');
    }

    return this.request('CreateScalingRule', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} MinSize - minSize. required.
   * @param {Integer} MaxSize - maxSize. required.
   * @param {Integer} DefaultCooldown - defaultCooldown. optional.
   * @param {String} ActiveRuleCategory - activeRuleCategory. optional.
   * @param {RepeatList} InstanceTypeList - instanceTypeList. required.
   * @param {String} PayType - payType. required.
   * @param {String} DataDiskCategory - dataDiskCategory. required.
   * @param {Integer} DataDiskSize - dataDiskSize. required.
   * @param {Integer} DataDiskCount - dataDiskCount. required.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {RepeatList} SpotPriceLimits - spotPriceLimits. optional.
   * @param {RepeatList} ScalingRule - scalingRuleList. optional.
   */
  createScalingTaskGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'MinSize')) {
      throw new TypeError('parameter "MinSize" is required');
    }

    if (!hasOwnProperty(params, 'MaxSize')) {
      throw new TypeError('parameter "MaxSize" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTypeList')) {
      throw new TypeError('parameter "InstanceTypeList" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    if (!hasOwnProperty(params, 'DataDiskCategory')) {
      throw new TypeError('parameter "DataDiskCategory" is required');
    }

    if (!hasOwnProperty(params, 'DataDiskSize')) {
      throw new TypeError('parameter "DataDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'DataDiskCount')) {
      throw new TypeError('parameter "DataDiskCount" is required');
    }

    return this.request('CreateScalingTaskGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} UserInfo - userInfoList. required.
   * @param {String} Password - password. required.
   */
  createUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserInfo')) {
      throw new TypeError('parameter "UserInfo" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('CreateUserPassword', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  createUserStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateUserStatistics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {RepeatList} UserInfo - userInfoList. required.
   */
  createUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserInfo')) {
      throw new TypeError('parameter "UserInfo" is required');
    }

    return this.request('CreateUsers', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Mode - mode. required.
   * @param {String} Target - target. required.
   */
  createVerificationCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    return this.request('CreateVerificationCode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. required.
   * @param {String} Id - id. required.
   */
  decryptBizId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DecryptBizId', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Ids - ids. required.
   */
  deleteAlertContacts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteAlertContacts', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Ids - ids. required.
   */
  deleteAlertDingDingGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteAlertDingDingGroups', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Ids - ids. required.
   */
  deleteAlertUserGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteAlertUserGroups', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   */
  deleteApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteApmEventNotificationConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. required.
   */
  deleteClusterHostGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    return this.request('DeleteClusterHostGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteClusterScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteClusterScript', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BizId - bizId. required.
   */
  deleteClusterTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DeleteClusterTemplate', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  deleteDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  deleteETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteETLJob', params, options);
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
   * @param {String} Id - id. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteFlow', params, options);
  }

  /**
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   */
  deleteFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DeleteFlowCategory', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   */
  deleteFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteFlowJob', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   */
  deleteFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DeleteFlowProject', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   */
  deleteFlowProjectById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('DeleteFlowProjectById', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  deleteFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DeleteFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} UserName - userName. required.
   */
  deleteFlowProjectUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('DeleteFlowProjectUser', params, options);
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
   * @param {Long} Id - id. required.
   */
  deleteJobExecutionPlanFolder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteJobExecutionPlanFolder', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   */
  deleteJobExecutionPlanParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteJobExecutionPlanParam', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} MainVersion - mainVersion. required.
   */
  deleteMainVersionForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MainVersion')) {
      throw new TypeError('parameter "MainVersion" is required');
    }

    return this.request('DeleteMainVersionForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   */
  deleteNavNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteNavNode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteNote', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} NoteId - noteId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteParagraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NoteId')) {
      throw new TypeError('parameter "NoteId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteParagraph', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ResourcePoolId - resourcePoolId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ResourceQueueId - resourceQueueId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteResourceQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceQueueId')) {
      throw new TypeError('parameter "ResourceQueueId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteResourceQueue', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostGroupId - hostGroupId. optional.
   * @param {String} ScalingRuleId - scalingRuleId. required.
   */
  deleteScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ScalingRuleId')) {
      throw new TypeError('parameter "ScalingRuleId" is required');
    }

    return this.request('DeleteScalingRule', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. optional.
   */
  deleteScalingTaskGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DeleteScalingTaskGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} UserId - userId. required.
   * @param {String} Type - type. required.
   */
  deleteUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DeleteUser', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeAvailableInstanceType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeAvailableInstanceType', params, options);
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
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterBasicInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterBasicInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterBasicInfoForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterBasicInfoForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterForInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterForInternal', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeClusterHealth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterHealth', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  describeClusterOpLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeClusterOpLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   * @param {String} HostId - hostId. required.
   * @param {String} TaskId - taskId. required.
   * @param {String} Status - status. optional.
   */
  describeClusterOperationHostTaskLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    if (!hasOwnProperty(params, 'HostId')) {
      throw new TypeError('parameter "HostId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeClusterOperationHostTaskLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   * @param {String} HostId - hostId. required.
   * @param {String} TaskId - taskId. required.
   * @param {String} Status - status. optional.
   */
  describeClusterOperationHostTaskLogForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    if (!hasOwnProperty(params, 'HostId')) {
      throw new TypeError('parameter "HostId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeClusterOperationHostTaskLogForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeClusterResourcePoolSchedulerType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterResourcePoolSchedulerType', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeClusterScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeClusterScript', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeClusterScriptForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeClusterScriptForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   */
  describeClusterService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('DescribeClusterService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ConfigVersion - configVersion. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} TagValue - tagValues. optional.
   */
  describeClusterServiceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterServiceConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ConfigVersion - configVersion. required.
   */
  describeClusterServiceConfigHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ConfigVersion')) {
      throw new TypeError('parameter "ConfigVersion" is required');
    }

    return this.request('DescribeClusterServiceConfigHistory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ConfigTag - configTag. optional.
   */
  describeClusterServiceConfigTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeClusterServiceConfigTag', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   */
  describeClusterServiceForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('DescribeClusterServiceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Strategy - strategy. optional. default: BY_TYPE.
   */
  describeClusterStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeClusterStatistics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} BizId - bizId. required.
   */
  describeClusterTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DescribeClusterTemplate', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeClusterV2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeClusterV2', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeDataSourceCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeDataSourceCommand', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   */
  describeDataSourceSchemaDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('DescribeDataSourceSchemaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} TableName - tableName. required.
   */
  describeDataSourceSchemaTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('DescribeDataSourceSchemaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeETLJobInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeETLJobInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResolveId - resolveId. required.
   */
  describeETLJobSqlSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResolveId')) {
      throw new TypeError('parameter "ResolveId" is required');
    }

    return this.request('DescribeETLJobSqlSchema', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} StageName - stageName. required.
   */
  describeETLJobStageOutputSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    return this.request('DescribeETLJobStageOutputSchema', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EmrVersion - emrVersion. optional.
   */
  describeEmrMainVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeEmrMainVersion', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} MainVersion - mainVersion. required.
   */
  describeEmrStackVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MainVersion')) {
      throw new TypeError('parameter "MainVersion" is required');
    }

    return this.request('DescribeEmrStackVersion', params, options);
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
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  describeFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlow', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  describeFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlowCategory', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. required.
   */
  describeFlowCategoryTree(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DescribeFlowCategoryTree', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  describeFlowInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlowInstance', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  describeFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlowJob', params, options);
  }

  /**
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} RegionId - regionId. required.
   */
  describeFlowJobStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlowJobStatistic', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  describeFlowNodeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlowNodeInstance', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional. default: 0.
   * @param {Integer} Length - length. optional. default: 100.
   * @param {String} NodeInstanceId - nodeInstanceId. required.
   * @param {String} AppId - appId. required.
   * @param {String} ContainerId - containerId. required.
   * @param {String} LogName - logName. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   */
  describeFlowNodeInstanceContainerLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeInstanceId')) {
      throw new TypeError('parameter "NodeInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerId')) {
      throw new TypeError('parameter "ContainerId" is required');
    }

    if (!hasOwnProperty(params, 'LogName')) {
      throw new TypeError('parameter "LogName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlowNodeInstanceContainerLog', params, options);
  }

  /**
   * @param {Integer} Start - start. optional.
   * @param {Integer} Lines - lines. optional.
   * @param {Integer} Offset - offset. optional. default: 0.
   * @param {Integer} Length - length. optional. default: 100.
   * @param {Boolean} Reverse - reverse. optional. default: false.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} NodeInstanceId - nodeInstanceId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   */
  describeFlowNodeInstanceLauncherLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeInstanceId')) {
      throw new TypeError('parameter "NodeInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlowNodeInstanceLauncherLog', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   */
  describeFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlowProject', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. optional.
   * @param {String} Metrics - metrics. required.
   * @param {String} PeriodType - periodType. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {Long} From - from. optional.
   * @param {Long} To - to. optional.
   */
  describeFlowSLA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Metrics')) {
      throw new TypeError('parameter "Metrics" is required');
    }

    return this.request('DescribeFlowSLA', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} EntityId - entityId. required.
   */
  describeFlowVariableCollection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    return this.request('DescribeFlowVariableCollection', params, options);
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
   * @param {Long} DatabaseId - databaseId. required.
   */
  describeMetaDatabaseForOuter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseId')) {
      throw new TypeError('parameter "DatabaseId" is required');
    }

    return this.request('DescribeMetaDatabaseForOuter', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} ColumnId - columnId. required.
   */
  describeMetaTableColumnForOuter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ColumnId')) {
      throw new TypeError('parameter "ColumnId" is required');
    }

    return this.request('DescribeMetaTableColumnForOuter', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} TableId - tableId. required.
   */
  describeMetaTableForOuter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TableId')) {
      throw new TypeError('parameter "TableId" is required');
    }

    return this.request('DescribeMetaTableForOuter', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} TableId - tableId. required.
   * @param {Long} TablePartitionId - tablePartitionId. required.
   */
  describeMetaTablePartitionForOuter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TableId')) {
      throw new TypeError('parameter "TableId" is required');
    }

    if (!hasOwnProperty(params, 'TablePartitionId')) {
      throw new TypeError('parameter "TablePartitionId" is required');
    }

    return this.request('DescribeMetaTablePartitionForOuter', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  describeNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeNote', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} NoteId - noteId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  describeParagraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NoteId')) {
      throw new TypeError('parameter "NoteId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeParagraph', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostGroupId - hostGroupId. optional.
   * @param {String} ScalingActivityId - scalingActivityId. required.
   */
  describeScalingActivity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ScalingActivityId')) {
      throw new TypeError('parameter "ScalingActivityId" is required');
    }

    return this.request('DescribeScalingActivity', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostGroupId - hostGroupId. optional.
   * @param {String} ScalingRuleId - scalingRuleId. required.
   */
  describeScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ScalingRuleId')) {
      throw new TypeError('parameter "ScalingRuleId" is required');
    }

    return this.request('DescribeScalingRule', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. required.
   */
  describeScalingTaskGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    return this.request('DescribeScalingTaskGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  describeSecurityGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeSecurityGroupAttribute', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ServiceVersion - serviceVersion. optional.
   * @param {String} ConfigName - configName. optional.
   */
  describeServiceConfigDefinition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('DescribeServiceConfigDefinition', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeServiceHealth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('DescribeServiceHealth', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} EmrVersion - emrVersion. optional.
   * @param {RepeatList} EmrVersionList - emrVersions. optional.
   * @param {String} StackVersion - stackVersion. optional.
   * @param {RepeatList} StackVersionList - stackVersions. optional.
   */
  describeStackRelation(params = {}, options = {}) {
    return this.request('DescribeStackRelation', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   */
  describeUserStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DescribeUserStatistics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - noteId. required.
   */
  detachClusterForNote(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DetachClusterForNote', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} AppId - appId. required.
   */
  getApmApplicationDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetApmApplicationDetail', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   */
  getApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetApmEventNotificationConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  getApmJobStatisticsInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetApmJobStatisticsInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  getApmUserAlertEventSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetApmUserAlertEventSummary', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  getApmUserHdfsResourceSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetApmUserHdfsResourceSummary', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  getApmUserYarnResourceSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetApmUserYarnResourceSummary', params, options);
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
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getHdfsCapacityStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetHdfsCapacityStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  getJobInputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetJobInputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  getJobMigrateResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetJobMigrateResult', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  getJobOutputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetJobOutputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  getJobRunningTimeStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetJobRunningTimeStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. required.
   * @param {String} LogstoreName - logstoreName. required.
   * @param {String} LogFileName - logFileName. required.
   */
  getLogDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostName')) {
      throw new TypeError('parameter "HostName" is required');
    }

    if (!hasOwnProperty(params, 'LogstoreName')) {
      throw new TypeError('parameter "LogstoreName" is required');
    }

    if (!hasOwnProperty(params, 'LogFileName')) {
      throw new TypeError('parameter "LogFileName" is required');
    }

    return this.request('GetLogDownloadUrl', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostInnerIp - hostInnerIp. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} LogstoreName - logstoreName. required.
   * @param {Integer} FromTimestamp - fromTimestamp. required.
   * @param {Integer} ToTimestamp - toTimestamp. required.
   * @param {String} SlsQueryString - slsQueryString. required.
   */
  getLogHistogram(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'LogstoreName')) {
      throw new TypeError('parameter "LogstoreName" is required');
    }

    if (!hasOwnProperty(params, 'FromTimestamp')) {
      throw new TypeError('parameter "FromTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'ToTimestamp')) {
      throw new TypeError('parameter "ToTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'SlsQueryString')) {
      throw new TypeError('parameter "SlsQueryString" is required');
    }

    return this.request('GetLogHistogram', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OpsCommandName - opsCommandName. required.
   */
  getOpsCommandDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OpsCommandName')) {
      throw new TypeError('parameter "OpsCommandName" is required');
    }

    return this.request('GetOpsCommandDetail', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} TaskId - taskId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Long} StartCursor - startCursor. required.
   * @param {Long} EndCursor - endCursor. required.
   */
  getOpsCommandResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'StartCursor')) {
      throw new TypeError('parameter "StartCursor" is required');
    }

    if (!hasOwnProperty(params, 'EndCursor')) {
      throw new TypeError('parameter "EndCursor" is required');
    }

    return this.request('GetOpsCommandResult', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} TaskId - taskId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  getOpsCommandResultOnce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('GetOpsCommandResultOnce', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getQueueInputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetQueueInputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getQueueOutputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetQueueOutputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {String} ApplicationType - applicationType. optional.
   * @param {String} FinalStatus - finalStatus. optional.
   */
  getQueueSubmissionStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetQueueSubmissionStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  getSupportedOpsCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetSupportedOpsCommand', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getUserInputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetUserInputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   */
  getUserOutputStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetUserOutputStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} FromDatetime - fromDatetime. required.
   * @param {String} ToDatetime - toDatetime. required.
   * @param {String} ApplicationType - applicationType. optional.
   * @param {String} FinalStatus - finalStatus. optional.
   */
  getUserSubmissionStatisticInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'FromDatetime')) {
      throw new TypeError('parameter "FromDatetime" is required');
    }

    if (!hasOwnProperty(params, 'ToDatetime')) {
      throw new TypeError('parameter "ToDatetime" is required');
    }

    return this.request('GetUserSubmissionStatisticInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  killETLJobInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('KillETLJobInstance', params, options);
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
   * @param {String} Id - executionPlanInstanceId. required.
   * @param {String} RegionId - regionId. required.
   */
  killExecutionPlanInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('KillExecutionPlanInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   */
  killFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('KillFlow', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} JobInstanceId - jobInstanceId. required.
   */
  killFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'JobInstanceId')) {
      throw new TypeError('parameter "JobInstanceId" is required');
    }

    return this.request('KillFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} Ids - ids. optional.
   */
  listAlertContacts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListAlertContacts', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} Ids - ids. optional.
   */
  listAlertDingDingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListAlertDingDingGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} Ids - ids. optional.
   */
  listAlertUserGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListAlertUserGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} StartTimeFrom - startTimeFrom. required.
   * @param {Long} StartTimeTo - startTimeTo. required.
   * @param {Long} EndTimeFrom - endTimeFrom. optional.
   * @param {Long} EndTimeTo - endTimeTo. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} State - state. optional.
   * @param {String} FinalStatus - finalStatus. optional.
   * @param {String} User - user. optional.
   * @param {String} Queue - queue. optional.
   * @param {String} Name - name. optional.
   * @param {String} JobType - jobType. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} DiagnoseResult - diagnoseResult. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listApmApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeFrom')) {
      throw new TypeError('parameter "StartTimeFrom" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeTo')) {
      throw new TypeError('parameter "StartTimeTo" is required');
    }

    return this.request('ListApmApplication', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EventCode - eventCode. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. optional.
   * @param {Integer} StartTimestampSec - startTimestampSec. required.
   * @param {Integer} EndTimestampSec - endTimestampSec. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} EventSourceType - eventSourceType. optional.
   * @param {String} EventType - eventType. required.
   * @param {String} EventLevel - eventLevel. optional. default: CRITICAL.
   * @param {String} AlertEventVisibility - alertEventVisibility. optional. default: USER_ADN_ADMIN.
   */
  listApmEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestampSec')) {
      throw new TypeError('parameter "StartTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestampSec')) {
      throw new TypeError('parameter "EndTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    return this.request('ListApmEvent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EventCode - eventCode. optional.
   * @param {String} EventFrom - eventFrom. optional.
   * @param {String} Visibility - visibility. optional.
   * @param {String} Level - level. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} Category - category. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1000.
   */
  listApmEventConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListApmEventConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} EventCodeList - eventCodeList. required.
   */
  listApmEventConfigByCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EventCodeList')) {
      throw new TypeError('parameter "EventCodeList" is required');
    }

    return this.request('ListApmEventConfigByCode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {RepeatList} EventCodeList - eventCodeList. required.
   */
  listApmEventConfigByCodeForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'EventCodeList')) {
      throw new TypeError('parameter "EventCodeList" is required');
    }

    return this.request('ListApmEventConfigByCodeForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} EventCode - eventCode. optional.
   * @param {String} EventFrom - eventFrom. optional.
   * @param {String} Visibility - visibility. optional.
   * @param {String} Level - level. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} Category - category. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1000.
   */
  listApmEventConfigForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListApmEventConfigForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListApmEventNotificationConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} JobType - jobType. optional.
   * @param {String} FinalStatus - finalStatus. optional.
   * @param {String} BizId - bizId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} HeuristicStatus - heuristicStatus. optional.
   * @param {String} Status - status. optional.
   * @param {Long} StartTimeBegin - startTimeBegin. optional.
   * @param {Long} StartTimeEnd - startTimeEnd. optional.
   * @param {Long} EndTimeBegin - endTimeBegin. optional.
   * @param {Long} EndTimeEnd - endTimeEnd. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Duration - duration. optional.
   * @param {String} HeuristicDetailsArgs - heuristicDetailsArgs. optional.
   * @param {String} HeuristicResultType - heuristicResultType. optional.
   * @param {String} Value - value. optional.
   * @param {String} HeuristicSeverity - heuristicSeverity. optional.
   * @param {String} HeuristicName - heuristicName. optional.
   * @param {String} JobSeverity - jobSeverity. optional.
   * @param {String} JobScore - jobScore. optional.
   * @param {String} HeuristicScore - heuristicScore. optional.
   * @param {String} QueueName - queueName. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} EventId - eventId. optional.
   */
  listApmJobHeuristicResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListApmJobHeuristicResult', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UniqueId - uniqueId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  listApmJobHeuristicResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UniqueId')) {
      throw new TypeError('parameter "UniqueId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListApmJobHeuristicResultDetail', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} Category - category. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1000.
   */
  listApmMetricConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListApmMetricConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} Category - category. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1000.
   */
  listApmMetricConfigForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListApmMetricConfigForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} MetricName - metricName. required.
   * @param {Integer} StartTimestampSec - startTimestampSec. required.
   * @param {Integer} EndTimestampSec - endTimestampSec. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. optional.
   */
  listApmMetricDatapoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestampSec')) {
      throw new TypeError('parameter "StartTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestampSec')) {
      throw new TypeError('parameter "EndTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListApmMetricDatapoint', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} MachineType - machineType. optional. default: ECS.
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
   * @param {String} UserId - userId. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {RepeatList} PayTypeList - payTypeList. optional.
   * @param {RepeatList} ClusterTypeList - clusterTypeList. optional.
   * @param {RepeatList} ClusterIdList - clusterIdList. optional.
   * @param {RepeatList} EcmClusterIdList - ecmClusterIdList. optional.
   * @param {String} EmrVersion - emrVersion. optional.
   * @param {Boolean} Resize - resize. optional.
   * @param {String} Name - name. optional.
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  listClusterForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListClusterForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {RepeatList} ClusterIdList - clusterIdList. optional.
   */
  listClusterForInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListClusterForInternal', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Boolean} AllStatus - allStatus. optional.
   * @param {RepeatList} ClusterBizIdList - clusterBizIdList. optional.
   */
  listClusterForOuter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListClusterForOuter', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} ClusterIdList - clusterIdList. required.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listClusterHealth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterIdList')) {
      throw new TypeError('parameter "ClusterIdList" is required');
    }

    return this.request('ListClusterHealth', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} HostGroupId - hostGroupId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} PrivateIp - privateIp. optional.
   * @param {String} PublicIp - publicIp. optional.
   * @param {String} GroupType - groupType. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listClusterHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterHost', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} ComponentStatus - componentStatus. optional.
   * @param {String} HostRole - hostRole. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listClusterHostComponent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterHostComponent', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} PrivateIp - privateIp. optional.
   * @param {String} PublicIp - publicIp. optional.
   * @param {String} GroupType - groupType. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listClusterHostForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterHostForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. optional.
   * @param {String} HostGroupName - hostGroupName. optional.
   * @param {String} HostGroupType - hostGroupType. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   */
  listClusterHostGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterHostGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterHostGroupForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterHostGroupForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterNode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterNodeForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterNodeForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  listClusterNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterNodes', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  listClusterNodesForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterNodesForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterOperation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterOperation', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterOperationForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterOperationForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterOperationHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    return this.request('ListClusterOperationHost', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterOperationHostForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    return this.request('ListClusterOperationHostForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   * @param {String} HostId - hostId. required.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listClusterOperationHostTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    if (!hasOwnProperty(params, 'HostId')) {
      throw new TypeError('parameter "HostId" is required');
    }

    return this.request('ListClusterOperationHostTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   * @param {String} HostId - hostId. required.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listClusterOperationHostTaskForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    if (!hasOwnProperty(params, 'HostId')) {
      throw new TypeError('parameter "HostId" is required');
    }

    return this.request('ListClusterOperationHostTaskForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  listClusterScripts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterScripts', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  listClusterScriptsForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterScriptsForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listClusterService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   */
  listClusterServiceComponentHealthInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterServiceComponentHealthInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ConfigVersion - configVersion. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} TagValue - tagValues. optional.
   */
  listClusterServiceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterServiceConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ConfigVersion - configVersion. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterServiceConfigHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterServiceConfigHistory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   */
  listClusterServiceConfigVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('ListClusterServiceConfigVersion', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ServiceCustomActionName - serviceCustomActionName. required.
   */
  listClusterServiceCustomActionSupportConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ServiceCustomActionName')) {
      throw new TypeError('parameter "ServiceCustomActionName" is required');
    }

    return this.request('ListClusterServiceCustomActionSupportConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listClusterServiceForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterServiceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   */
  listClusterServiceQuickLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterServiceQuickLink', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   */
  listClusterServiceQuickLinkForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListClusterServiceQuickLinkForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   */
  listClusterServiceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('ListClusterServiceStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  listClusterServiceStatusOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListClusterServiceStatusOverview', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} ClusterIdList - clusterIdList. required.
   */
  listClusterTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterIdList')) {
      throw new TypeError('parameter "ClusterIdList" is required');
    }

    return this.request('ListClusterTag', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} BizId - bizId. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listClusterTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListClusterTemplates', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} ClusterTypeList - clusterTypeList. optional.
   * @param {String} CreateType - createType. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Boolean} IsDesc - isDesc. optional. default: true.
   * @param {String} DepositType - depositType. optional.
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {RepeatList} ClusterTypeList - clusterTypeList. optional.
   * @param {String} CreateType - createType. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Boolean} IsDesc - isDesc. optional. default: true.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Boolean} DefaultStatus - defaultStatus. optional. default: false.
   */
  listClustersForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListClustersForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {String} Id - id. optional.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} Name - name. optional.
   * @param {String} SourceType - sourceType. optional.
   * @param {String} CreateFrom - createFrom. optional.
   */
  listDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   */
  listDataSourceSchemaDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('ListDataSourceSchemaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} TableName - tableName. optional.
   */
  listDataSourceSchemaTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('ListDataSourceSchemaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   */
  listDependedService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('ListDependedService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Status - status. optional.
   */
  listETLJobInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    return this.request('ListETLJobInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} ReleaseId - releaseId. optional.
   * @param {Integer} ReleaseVersion - releaseVersion. optional.
   * @param {String} Status - status. optional.
   */
  listETLJobRelease(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    return this.request('ListETLJobRelease', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EntityType - entityType. optional.
   */
  listETLJobTriggerEntity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListETLJobTriggerEntity', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} UserId - userId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {RepeatList} ClusterIdList - clusterIdList. optional.
   * @param {RepeatList} EcsStatusList - ecsStatusList. optional.
   * @param {RepeatList} InstanceIdList - instanceIdList. optional.
   */
  listEcsForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListEcsForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EventType - eventType. optional.
   * @param {String} Topic - topic. optional.
   * @param {String} UniqueKey - uniqueKey. optional.
   * @param {String} EntityId - entityId. optional.
   * @param {Integer} Priority - priority. optional.
   * @param {String} Status - status. optional.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listEmrAlarmForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListEmrAlarmForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  listEmrAvailableConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListEmrAvailableConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   */
  listEmrAvailableConfigForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListEmrAvailableConfigForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DestinationResource - destinationResource. required.
   * @param {String} ClusterType - clusterType. required.
   * @param {String} InstanceChargeType - instanceChargeType. required.
   * @param {String} SpotStrategy - spotStrategy. optional. default: NoSpot.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} NetType - netType. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} SystemDiskType - systemDiskType. optional.
   * @param {String} DataDiskType - dataDiskType. optional.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} ClusterId - clusterId. optional.
   */
  listEmrAvailableResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationResource')) {
      throw new TypeError('parameter "DestinationResource" is required');
    }

    if (!hasOwnProperty(params, 'ClusterType')) {
      throw new TypeError('parameter "ClusterType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceChargeType')) {
      throw new TypeError('parameter "InstanceChargeType" is required');
    }

    return this.request('ListEmrAvailableResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DestinationResource - destinationResource. required.
   * @param {String} ClusterType - clusterType. required.
   * @param {String} InstanceChargeType - instanceChargeType. required.
   * @param {String} SpotStrategy - spotStrategy. optional. default: NoSpot.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} NetType - netType. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} SystemDiskType - systemDiskType. optional.
   * @param {String} DataDiskType - dataDiskType. optional.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} UserId - userId. required.
   */
  listEmrAvailableResourceForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationResource')) {
      throw new TypeError('parameter "DestinationResource" is required');
    }

    if (!hasOwnProperty(params, 'ClusterType')) {
      throw new TypeError('parameter "ClusterType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceChargeType')) {
      throw new TypeError('parameter "InstanceChargeType" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListEmrAvailableResourceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EmrVersion - emrVersion. optional.
   * @param {String} StackName - stackName. optional.
   * @param {String} StackVersion - stackVersion. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listEmrMainVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListEmrMainVersion', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {String} EmrVersion - emrVersion. optional.
   */
  listEmrVersionsForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    return this.request('ListEmrVersionsForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Integer} CurrentSize - currentSize. required.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listExecutePlanMigrateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentSize')) {
      throw new TypeError('parameter "CurrentSize" is required');
    }

    return this.request('ListExecutePlanMigrateInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  listExecutionPlanInstanceTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListExecutionPlanInstanceTrend', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} ExecutionPlanIdList - executionPlanIdList. required.
   * @param {Boolean} OnlyLastInstance - onlyLastInstance. optional. default: false.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Boolean} IsDesc - desc. optional. default: false.
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
   * @param {Boolean} IsDesc - desc. optional. default: true.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} QueryType - queryType. optional.
   * @param {String} QueryString - queryString. optional.
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
   * @param {Integer} Count - count. optional. default: 10.
   */
  listFailureJobExecutionInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListFailureJobExecutionInstances', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} JobId - jobId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Id - id. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Status - status. optional.
   * @param {Boolean} Periodic - periodic. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListFlow', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ParentId - parentId. optional.
   * @param {Boolean} Root - root. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowCategory', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowCluster', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   */
  listFlowClusterAll(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListFlowClusterAll', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  listFlowClusterAllHosts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListFlowClusterAllHosts', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  listFlowClusterHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListFlowClusterHost', params, options);
  }

  /**
   * @param {String} Id - id. optional.
   * @param {String} FlowId - flowId. optional.
   * @param {String} FlowName - flowName. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} TimeRange - timeRange. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. optional.
   * @param {Boolean} Adhoc - adhoc. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowJob', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowJobHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ListFlowJobHistory', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowNodeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListFlowNodeInstance', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} NodeInstanceId - nodeInstanceId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   */
  listFlowNodeInstanceContainerStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeInstanceId')) {
      throw new TypeError('parameter "NodeInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListFlowNodeInstanceContainerStatus', params, options);
  }

  /**
   * @param {String} NodeInstanceId - nodeInstanceId. required.
   * @param {Integer} SqlIndex - sqlIndex. optional. default: 0.
   * @param {Integer} Offset - offset. optional. default: 0.
   * @param {Integer} Length - length. optional. default: 2000.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   */
  listFlowNodeSqlResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeInstanceId')) {
      throw new TypeError('parameter "NodeInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListFlowNodeSqlResult', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListFlowProject', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listFlowProjectUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('ListFlowProjectUser', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Service - service. optional.
   * @param {String} Component - component. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listHealthRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListHealthRule', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Service - service. optional.
   * @param {String} Component - component. optional.
   * @param {String} HostName - hostName. optional.
   * @param {Integer} Pass - pass. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listHealthRuleResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListHealthRuleResult', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  listJobExecutionInstanceTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListJobExecutionInstanceTrend', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ExecutionPlanInstanceId - executionPlanInstanceId. required.
   * @param {Boolean} IsDesc - desc. optional. default: false.
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
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} CurrentId - currentId. required.
   */
  listJobExecutionPlanHierarchy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentId')) {
      throw new TypeError('parameter "CurrentId" is required');
    }

    return this.request('ListJobExecutionPlanHierarchy', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ParamBizType - paramBizType. required.
   * @param {String} RelateId - relateId. required.
   */
  listJobExecutionPlanParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParamBizType')) {
      throw new TypeError('parameter "ParamBizType" is required');
    }

    if (!hasOwnProperty(params, 'RelateId')) {
      throw new TypeError('parameter "RelateId" is required');
    }

    return this.request('ListJobExecutionPlanParams', params, options);
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
   * @param {String} UserId - userId. required.
   * @param {Integer} CurrentSize - currentSize. required.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listJobMigrateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentSize')) {
      throw new TypeError('parameter "CurrentSize" is required');
    }

    return this.request('ListJobMigrateInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IsDesc - isDesc. optional. default: true.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} QueryType - queryType. optional.
   * @param {String} QueryString - queryString. optional.
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
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {String} DatabaseName - databaseName. optional.
   * @param {String} Location - location. optional.
   */
  listMetaDatabaseForOuter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListMetaDatabaseForOuter', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {Long} DatabaseId - databaseId. optional.
   * @param {Long} TableId - tableId. optional.
   * @param {String} ColumnPosition - columnPosition. optional.
   * @param {String} ColumnName - columnName. optional.
   */
  listMetaTableColumnForOuter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListMetaTableColumnForOuter', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {Long} DatabaseId - databaseId. optional.
   * @param {String} TableName - tableName. optional.
   * @param {String} TableType - tableType. optional.
   */
  listMetaTableForOuter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListMetaTableForOuter', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {Long} DatabaseId - databaseId. optional.
   * @param {Long} TableId - tableId. optional.
   * @param {String} PartitionName - partitionName. optional.
   */
  listMetaTablePartitionForOuter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListMetaTablePartitionForOuter', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ParentId - parentId. optional.
   * @param {String} Type - type. required.
   * @param {String} Name - name. optional.
   */
  listNavSubTree(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('ListNavSubTree', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  listNotes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListNotes', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Long} PageNumber - pageNumber. optional.
   */
  listOpsOperation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListOpsOperation', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OperationId - operationId. required.
   * @param {Long} PageNumber - pageNumber. optional.
   */
  listOpsOperationTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    return this.request('ListOpsOperationTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EmrVersion - emrVersion. required.
   * @param {String} ServiceNameList - serviceNameList. required.
   */
  listRequiredService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EmrVersion')) {
      throw new TypeError('parameter "EmrVersion" is required');
    }

    if (!hasOwnProperty(params, 'ServiceNameList')) {
      throw new TypeError('parameter "ServiceNameList" is required');
    }

    return this.request('ListRequiredService', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EmrVersion - emrVersion. required.
   * @param {String} ServiceNameList - serviceNameList. required.
   */
  listRequiredServiceForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EmrVersion')) {
      throw new TypeError('parameter "EmrVersion" is required');
    }

    if (!hasOwnProperty(params, 'ServiceNameList')) {
      throw new TypeError('parameter "ServiceNameList" is required');
    }

    return this.request('ListRequiredServiceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} PoolType - poolType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} PoolType - poolType. optional.
   * @param {Long} PoolId - poolId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listResourceQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'PoolId')) {
      throw new TypeError('parameter "PoolId" is required');
    }

    return this.request('ListResourceQueue', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostGroupId - hostGroupId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listScalingActivity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    return this.request('ListScalingActivity', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostGroupId - hostGroupId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  listScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    return this.request('ListScalingRule', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  listScalingTaskGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListScalingTaskGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. required.
   * @param {String} LogstoreName - logstoreName. required.
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxKeys - maxKeys. optional.
   */
  listServiceLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostName')) {
      throw new TypeError('parameter "HostName" is required');
    }

    if (!hasOwnProperty(params, 'LogstoreName')) {
      throw new TypeError('parameter "LogstoreName" is required');
    }

    return this.request('ListServiceLog', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   */
  listSlsLogstoreInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListSlsLogstoreInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  listSupportedServiceName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListSupportedServiceName', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Long} StartTime - startTime. required.
   */
  listUserIdInLastTimeForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('ListUserIdInLastTimeForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} CurrentSize - currentSize. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} OrderMode - orderMode. optional.
   * @param {String} OrderFieldName - orderFieldName. optional.
   */
  listUserStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentSize')) {
      throw new TypeError('parameter "CurrentSize" is required');
    }

    return this.request('ListUserStatistics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Type - type. optional.
   */
  listUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListUsers', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  logicalDeleteEmrResource(params = {}, options = {}) {
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

    return this.request('LogicalDeleteEmrResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Boolean} Default - default. optional.
   * @param {String} MetaType - metaType. required.
   * @param {String} AccessType - accessType. required.
   * @param {String} Description - description. optional.
   */
  metastoreCreateDataResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'MetaType')) {
      throw new TypeError('parameter "MetaType" is required');
    }

    if (!hasOwnProperty(params, 'AccessType')) {
      throw new TypeError('parameter "AccessType" is required');
    }

    return this.request('MetastoreCreateDataResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} DataSourceId - dataSourceId. optional.
   * @param {String} LocationUri - locationUri. optional.
   * @param {String} Description - description. optional.
   * @param {String} DbSource - dbSource. optional.
   * @param {String} ClusterBizId - clusterBizId. optional.
   * @param {String} Comment - comment. optional.
   */
  metastoreCreateDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('MetastoreCreateDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} TopicName - topicName. required.
   * @param {Integer} NumPartitions - numPartitions. required.
   * @param {Integer} ReplicationFactor - replicationFactor. required.
   * @param {RepeatList} AdvancedConfig - advancedConfigList. optional.
   */
  metastoreCreateKafkaTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    if (!hasOwnProperty(params, 'TopicName')) {
      throw new TypeError('parameter "TopicName" is required');
    }

    if (!hasOwnProperty(params, 'NumPartitions')) {
      throw new TypeError('parameter "NumPartitions" is required');
    }

    if (!hasOwnProperty(params, 'ReplicationFactor')) {
      throw new TypeError('parameter "ReplicationFactor" is required');
    }

    return this.request('MetastoreCreateKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} TableName - tableName. optional.
   * @param {String} LocationUri - locationUri. optional.
   * @param {String} FieldDelimiter - fieldDelimiter. optional.
   * @param {RepeatList} Column - columns. optional.
   * @param {String} DatabaseId - databaseId. optional.
   * @param {String} CreateWith - createWith. optional.
   * @param {String} Comment - comment. optional.
   * @param {String} CreateSql - createSql. optional.
   * @param {RepeatList} Partition - partitionList. optional.
   */
  metastoreCreateTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MetastoreCreateTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} TableName - tableName. required.
   */
  metastoreDataPreview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('MetastoreDataPreview', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  metastoreDeleteDataResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('MetastoreDeleteDataResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} TopicId - topicId. required.
   */
  metastoreDeleteKafkaTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    return this.request('MetastoreDeleteKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   */
  metastoreDescribeDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('MetastoreDescribeDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} Id - id. optional.
   */
  metastoreDescribeDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MetastoreDescribeDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ConsumerGroupId - consumerGroupId. required.
   * @param {String} TopicId - topicId. optional.
   */
  metastoreDescribeKafkaConsumerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ConsumerGroupId')) {
      throw new TypeError('parameter "ConsumerGroupId" is required');
    }

    return this.request('MetastoreDescribeKafkaConsumerGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} TopicId - topicId. required.
   */
  metastoreDescribeKafkaTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    return this.request('MetastoreDescribeKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} TableName - tableName. optional.
   * @param {String} DatabaseId - databaseId. optional.
   * @param {String} Id - id. optional.
   */
  metastoreDescribeTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MetastoreDescribeTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} TaskId - taskId. required.
   */
  metastoreDescribeTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('MetastoreDescribeTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} DatabaseId - databaseId. optional.
   */
  metastoreDropDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MetastoreDropDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} TableName - tableName. optional.
   * @param {String} DatabaseId - databaseId. optional.
   * @param {String} TableId - tableId. optional.
   */
  metastoreDropTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MetastoreDropTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  metastoreListDataResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MetastoreListDataResources', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} DataSourceName - dataSourceName. optional.
   * @param {String} SourceType - sourceType. optional.
   * @param {Boolean} ClusterReleased - clusterReleased. optional.
   */
  metastoreListDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('MetastoreListDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} DbName - dbName. optional.
   * @param {String} FuzzyDatabaseName - fuzzyDatabaseName. optional.
   */
  metastoreListDatabases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MetastoreListDatabases', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} TopicId - topicId. required.
   */
  metastoreListKafkaConsumerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    return this.request('MetastoreListKafkaConsumerGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} DataSourceId - dataSourceId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} TopicName - topicName. optional.
   */
  metastoreListKafkaTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MetastoreListKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} DatabaseId - databaseId. required.
   * @param {String} TableId - tableId. required.
   */
  metastoreListTablePartition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseId')) {
      throw new TypeError('parameter "DatabaseId" is required');
    }

    if (!hasOwnProperty(params, 'TableId')) {
      throw new TypeError('parameter "TableId" is required');
    }

    return this.request('MetastoreListTablePartition', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} DbName - dbName. optional.
   * @param {String} DatabaseId - databaseId. optional.
   * @param {String} TableId - tableId. optional.
   * @param {String} TableName - tableName. optional.
   * @param {String} FuzzyTableName - fuzzyTableName. optional.
   */
  metastoreListTables(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MetastoreListTables', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} TaskId - taskId. optional.
   * @param {String} DataSourceId - dataSourceId. optional.
   * @param {String} TaskType - taskType. optional.
   * @param {String} TaskStatus - taskStatus. optional.
   * @param {String} TaskSourceType - taskSourceType. optional.
   */
  metastoreListTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('MetastoreListTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Boolean} Default - default. optional.
   * @param {String} Description - description. optional.
   */
  metastoreModifyDataResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('MetastoreModifyDataResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} TaskId - taskId. required.
   */
  metastoreRetryTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('MetastoreRetryTask', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DbName - dbName. required.
   * @param {String} TableName - tableName. required.
   */
  metastoreSearchTables(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('MetastoreSearchTables', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Instruction - instruction. required.
   */
  metastoreSync(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Instruction')) {
      throw new TypeError('parameter "Instruction" is required');
    }

    return this.request('MetastoreSync', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} TopicId - topicId. required.
   * @param {Integer} NumPartitions - numPartitions. required.
   * @param {RepeatList} AdvancedConfig - advancedConfigList. optional.
   */
  metastoreUpdateKafkaTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    if (!hasOwnProperty(params, 'NumPartitions')) {
      throw new TypeError('parameter "NumPartitions" is required');
    }

    return this.request('MetastoreUpdateKafkaTopic', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} TopicParam - topicParamList. required.
   */
  metastoreUpdateKafkaTopicBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TopicParam')) {
      throw new TypeError('parameter "TopicParam" is required');
    }

    return this.request('MetastoreUpdateKafkaTopicBatch', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} TableId - tableId. required.
   * @param {RepeatList} DeletePartitionName - deletePartitionNames. optional.
   * @param {RepeatList} DeleteColumnName - deleteColumnNames. optional.
   * @param {RepeatList} AddPartition - addPartitionList. optional.
   * @param {RepeatList} AddColumn - addColumnList. optional.
   */
  metastoreUpdateTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TableId')) {
      throw new TypeError('parameter "TableId" is required');
    }

    return this.request('MetastoreUpdateTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. required.
   * @param {RepeatList} HostInstanceIdList - hostInstanceIdList. optional.
   */
  migrateClusterHostGroupHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    return this.request('MigrateClusterHostGroupHost', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} SkipEmrMigrate - skipEmrMigrate. optional. default: true.
   */
  migrateInstanceForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('MigrateInstanceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectName - projectName. required.
   */
  migrateJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('MigrateJobs', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  mockPopHttp(params = {}, options = {}) {
    return this.request('MockPopHttp', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} Name - name. required.
   * @param {String} Email - email. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} EmailVerificationCode - emailVerificationCode. optional.
   * @param {String} PhoneNumberVerificationCode - phoneNumberVerificationCode. optional.
   */
  modifyAlertContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyAlertContact', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} WebHookUrl - webHookUrl. required.
   */
  modifyAlertDingDingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'WebHookUrl')) {
      throw new TypeError('parameter "WebHookUrl" is required');
    }

    return this.request('ModifyAlertDingDingGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} UserList - userList. required.
   */
  modifyAlertUserGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'UserList')) {
      throw new TypeError('parameter "UserList" is required');
    }

    return this.request('ModifyAlertUserGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} ChargeTypeConfig - chargeTypeConfigList. required.
   */
  modifyChargeType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ChargeTypeConfig')) {
      throw new TypeError('parameter "ChargeTypeConfig" is required');
    }

    return this.request('ModifyChargeType', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Boolean} EasEnable - easEnable. required.
   * @param {String} KdcType - kdcType. optional.
   * @param {String} KdcHosts - kdcHosts. optional.
   * @param {String} Realm - realm. optional.
   * @param {String} KadminHosts - kadminHosts. optional.
   * @param {String} KadminPrincipal - kadminPrincipal. optional.
   * @param {String} KadminPwd - kadminPwd. optional.
   * @param {String} Krb5Conf - krb5Conf. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} ContainerDN - containerDN. optional.
   * @param {String} LdapUrl - ldapUrl. optional.
   */
  modifyClusterEasModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'EasEnable')) {
      throw new TypeError('parameter "EasEnable" is required');
    }

    return this.request('ModifyClusterEasModel', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. required.
   * @param {String} HostGroupName - hostGroupName. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} VswitchId - vswitchId. optional.
   * @param {String} Comment - comment. optional.
   */
  modifyClusterHostGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    return this.request('ModifyClusterHostGroup', params, options);
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
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} Comment - comment. optional.
   * @param {String} ConfigParams - params. optional.
   * @param {String} CustomConfigParams - customConfigParams. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} HostInstanceId - hostInstanceId. optional.
   * @param {String} ConfigType - configType. optional.
   * @param {RepeatList} GatewayClusterIdList - gatewayIdList. optional.
   * @param {Boolean} RefreshHostConfig - refreshHostConfig. optional.
   */
  modifyClusterServiceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('ModifyClusterServiceConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} BizId - bizId. required.
   * @param {String} TemplateName - templateName. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - openPublicIp. optional. default: true.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} UserDefinedEmrEcsRole - userDefinedEmrEcsRole. optional. default: AliyunEmrEcsDefaultRole.
   * @param {String} EmrVer - emrVer. required.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. required.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {Boolean} SshEnable - sshEnable. optional. default: true.
   * @param {String} InstanceGeneration - instanceGeneration. optional.
   * @param {String} MasterPwd - masterPwd. optional.
   * @param {RepeatList} HostGroup - hostGroupList. required.
   * @param {RepeatList} BootstrapAction - bootstrapActionList. optional.
   * @param {String} Configurations - configurations. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} MachineType - machineType. optional. default: ECS.
   * @param {Boolean} UseCustomHiveMetaDb - useCustomHiveMetaDb. optional. default: false.
   * @param {Boolean} InitCustomHiveMetaDb - initCustomHiveMetaDb. optional. default: false.
   * @param {RepeatList} Config - configList. optional.
   */
  modifyClusterTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
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

    if (!hasOwnProperty(params, 'HostGroup')) {
      throw new TypeError('parameter "HostGroup" is required');
    }

    return this.request('ModifyClusterTemplate', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UniqueKey - uniqueKey. required.
   * @param {String} Status - status. required.
   */
  modifyEmrAlarmStatusForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UniqueKey')) {
      throw new TypeError('parameter "UniqueKey" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('ModifyEmrAlarmStatusForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EmrVersion - emrVersion. required.
   * @param {String} ImageId - imageId. optional.
   * @param {Boolean} Display - display. optional.
   * @param {String} StackName - stackName. optional.
   * @param {String} StackVersion - stackVersion. optional.
   * @param {RepeatList} ClusterTypeInfo - clusterTypeInfoList. optional.
   * @param {RepeatList} WhiteUser - whiteUserList. optional.
   */
  modifyEmrMainVersionForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EmrVersion')) {
      throw new TypeError('parameter "EmrVersion" is required');
    }

    return this.request('ModifyEmrMainVersionForAdmin', params, options);
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
   * @param {Boolean} IsOpenPublicIp - openPublicIp. optional. default: true.
   * @param {Boolean} CreateClusterOnDemand - createCluster. optional.
   * @param {String} EmrVer - emrVer. optional.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. optional.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} UserDefinedEmrEcsRole - userDefinedEmrEcsRole. optional. default: AliyunEmrEcsDefaultRole.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {String} InstanceGeneration - instanceGeneration. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} WorkflowDefinition - workflowDefinition. optional.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. optional.
   * @param {RepeatList} BootstrapAction - bootstrapActionList. optional.
   * @param {Boolean} UseCustomHiveMetaDB - useCustomHiveMetaDB. optional. default: false.
   * @param {Boolean} InitCustomHiveMetaDB - initCustomHiveMetaDB. optional. default: false.
   * @param {RepeatList} Config - configList. optional.
   * @param {String} Configurations - configurations. optional.
   * @param {String} Id - executionPlanId. required.
   * @param {Long} ExecutionPlanVersion - version. optional.
   * @param {String} Name - name. required.
   * @param {String} Strategy - strategy. required.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {String} TimeUnit - timeUnit. optional.
   * @param {String} DayOfWeek - dayOfWeek. optional.
   * @param {String} DayOfMonth - dayOfMonth. optional.
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
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Name - name. required.
   */
  modifyExecutionPlanBasicInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyExecutionPlanBasicInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} ClusterName - clusterName. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Boolean} LogEnable - logEnable. optional. default: false.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} IsOpenPublicIp - isOpenPublicIp. optional. default: true.
   * @param {Boolean} CreateClusterOnDemand - createCluster. optional.
   * @param {String} EmrVer - emrVer. optional.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. optional.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {String} InstanceGeneration - instanceGeneration. optional.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {RepeatList} EcsOrder - ecsOrderInfoList. optional.
   * @param {RepeatList} BootstrapAction - bootstrapActionList. optional.
   * @param {String} Configurations - configurations. optional.
   * @param {String} Id - executionPlanId. required.
   */
  modifyExecutionPlanClusterInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyExecutionPlanClusterInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanId. required.
   * @param {RepeatList} JobIdList - jobIds. required.
   */
  modifyExecutionPlanJobInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'JobIdList')) {
      throw new TypeError('parameter "JobIdList" is required');
    }

    return this.request('ModifyExecutionPlanJobInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanId. required.
   * @param {String} Strategy - strategy. required.
   * @param {Integer} TimeInterval - timeInterval. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {String} TimeUnit - timeUnit. optional.
   * @param {String} DayOfWeek - dayOfWeek. optional.
   * @param {String} DayOfMonth - dayOfMonth. optional.
   */
  modifyExecutionPlanScheduleInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Strategy')) {
      throw new TypeError('parameter "Strategy" is required');
    }

    return this.request('ModifyExecutionPlanScheduleInfo', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Status - status. optional.
   * @param {String} Description - description. optional.
   * @param {Boolean} Periodic - periodic. optional.
   * @param {Long} StartSchedule - startSchedule. optional.
   * @param {Long} EndSchedule - endSchedule. optional.
   * @param {String} CronExpr - cronExpr. optional.
   * @param {Boolean} CreateCluster - createCluster. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Application - application. optional.
   * @param {String} AlertConf - alertConf. optional.
   * @param {String} AlertUserGroupBizId - alertUserGroupBizId. optional.
   * @param {String} AlertDingDingGroupBizId - alertDingDingGroupBizId. optional.
   * @param {String} ParentFlowList - parentFlowList. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   */
  modifyFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyFlow', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} ParentId - parentId. optional.
   */
  modifyFlowCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyFlowCategory', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Status - status. optional.
   * @param {String} Description - description. optional.
   * @param {Boolean} Periodic - periodic. optional.
   * @param {Long} StartSchedule - startSchedule. optional.
   * @param {Long} EndSchedule - endSchedule. optional.
   * @param {String} CronExpr - cronExpr. optional.
   * @param {Boolean} CreateCluster - createCluster. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Graph - graph. optional.
   * @param {String} AlertConf - alertConf. optional.
   * @param {String} AlertUserGroupBizId - alertUserGroupBizId. optional.
   * @param {String} AlertDingDingGroupBizId - alertDingDingGroupBizId. optional.
   * @param {String} ParentFlowList - parentFlowList. optional.
   * @param {String} ParentCategory - parentCategory. optional.
   */
  modifyFlowForWeb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyFlowForWeb', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} FailAct - failAct. optional.
   * @param {Integer} MaxRetry - maxRetry. optional.
   * @param {Long} RetryInterval - retryInterval. optional.
   * @param {String} Params - params. optional.
   * @param {String} ParamConf - paramConf. optional.
   * @param {String} CustomVariables - customVariables. optional.
   * @param {String} EnvConf - envConf. optional.
   * @param {String} RunConf - runConf. optional.
   * @param {String} MonitorConf - monitorConf. optional.
   * @param {String} Mode - mode. optional.
   * @param {RepeatList} ResourceList - resourceList. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} AlertConf - alertConf. optional.
   */
  modifyFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ModifyFlowJob', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyFlowProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyFlowProject', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DefaultUser - defaultUser. optional.
   * @param {String} DefaultQueue - defaultQueue. optional.
   * @param {RepeatList} UserList - userList. optional.
   * @param {RepeatList} QueueList - queueList. optional.
   * @param {RepeatList} HostList - hostList. optional.
   */
  modifyFlowProjectClusterSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyFlowProjectClusterSetting', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Data - data. required.
   */
  modifyFlowVariableCollection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('ModifyFlowVariableCollection', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} RuleName - ruleName. required.
   * @param {String} Status - status. required.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  modifyHealthRuleConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('ModifyHealthRuleConfig', params, options);
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
   * @param {Integer} MaxRetry - maxRetry. optional. default: 0.
   * @param {Integer} RetryInterval - retryInterval. optional. default: 15.
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
   * @param {Long} Id - id. required.
   * @param {Long} ParentId - parentId. required.
   * @param {String} Name - name. required.
   */
  modifyJobExecutionPlanFolder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyJobExecutionPlanFolder', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. required.
   * @param {String} ParamName - paramName. required.
   * @param {String} ParamValue - paramValue. required.
   */
  modifyJobExecutionPlanParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ParamName')) {
      throw new TypeError('parameter "ParamName" is required');
    }

    if (!hasOwnProperty(params, 'ParamValue')) {
      throw new TypeError('parameter "ParamValue" is required');
    }

    return this.request('ModifyJobExecutionPlanParam', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} InstanceTypeConfig - instanceTypeConfigList. required.
   */
  modifyPrepayInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTypeConfig')) {
      throw new TypeError('parameter "InstanceTypeConfig" is required');
    }

    return this.request('ModifyPrepayInstanceSpec', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Id - id. required.
   * @param {Boolean} Active - active. optional.
   * @param {String} Name - name. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Yarnsiteconfig - yarnsiteconfig. optional.
   * @param {RepeatList} Config - configList. optional.
   */
  modifyResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ModifyResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} SchedulerType - schedulerType. required.
   */
  modifyResourcePoolSchedulerType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SchedulerType')) {
      throw new TypeError('parameter "SchedulerType" is required');
    }

    return this.request('ModifyResourcePoolSchedulerType', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} QualifiedName - qualifiedName. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {Long} ParentQueueId - parentQueueId. optional.
   * @param {Boolean} Leaf - leaf. optional.
   * @param {Long} ResourcePoolId - resourcePoolId. required.
   * @param {RepeatList} Config - configList. required.
   */
  modifyResourceQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    if (!hasOwnProperty(params, 'Config')) {
      throw new TypeError('parameter "Config" is required');
    }

    return this.request('ModifyResourceQueue', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ScalingRuleId - scalingRuleId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. required.
   * @param {String} RuleName - ruleName. required.
   * @param {String} AdjustmentType - adjustmentType. optional.
   * @param {Integer} AdjustmentValue - adjustmentValue. optional.
   * @param {Integer} Cooldown - cooldown. optional.
   * @param {String} LaunchTime - launchTime. optional.
   * @param {Integer} LaunchExpirationTime - launchExpirationTime. optional.
   * @param {String} RecurrenceType - recurrenceType. optional.
   * @param {String} RecurrenceValue - recurrenceValue. optional.
   * @param {String} RecurrenceEndTime - recurrenceEndTime. optional.
   * @param {RepeatList} SchedulerTrigger - schedulerTriggerList. optional.
   * @param {RepeatList} CloudWatchTrigger - cloudWatchTriggerList. optional.
   */
  modifyScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ScalingRuleId')) {
      throw new TypeError('parameter "ScalingRuleId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    return this.request('ModifyScalingRule', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. required.
   * @param {Integer} MinSize - minSize. optional.
   * @param {Integer} MaxSize - maxSize. optional.
   * @param {Integer} DefaultCooldown - defaultCooldown. optional.
   * @param {String} ActiveRuleCategory - activeRuleCategory. optional.
   */
  modifyScalingTaskGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    return this.request('ModifyScalingTaskGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ChannelId - channelId. required.
   */
  modifyUserChannelInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    return this.request('ModifyUserChannelInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {Integer} JobNum - jobNum. optional.
   * @param {Integer} ExecutePlanNum - executePlanNum. optional.
   * @param {Integer} InteractionJobNum - interactionJobNum. optional.
   * @param {Integer} JobMigratedNum - jobMigratedNum. optional.
   * @param {Integer} ExecutePlanMigratedNum - executePlanMigratedNum. optional.
   * @param {Integer} InteractionJobMigratedNum - interactionJobMigratedNum. optional.
   */
  modifyUserStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ModifyUserStatistics', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Name - name. optional.
   * @param {String} LogPath - logPath. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} EmrVer - emrVer. optional.
   * @param {RepeatList} OptionSoftWareList - optionSoftWareList. optional.
   * @param {String} ClusterType - clusterType. optional.
   * @param {Boolean} HighAvailabilityEnable - highAvailabilityEnable. optional. default: false.
   * @param {Boolean} UseLocalMetaDb - useLocalMetaDb. optional. default: false.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {Boolean} EasEnable - easEnable. optional. default: false.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {String} MachineType - machineType. optional. default: ECS.
   * @param {RepeatList} InstanceIdList - instanceIdList. required.
   * @param {RepeatList} MasterInstanceIdList - masterInstanceIdList. optional.
   * @param {Boolean} IsResize - isResize. optional. default: false.
   * @param {String} OperateType - operateType. required.
   */
  operateExistsNodeCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateExistsNodeCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JumpServerIp - jumpServerIp. required.
   * @param {String} OperateType - operateType. required.
   */
  operateFullManagedClusterForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JumpServerIp')) {
      throw new TypeError('parameter "JumpServerIp" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('OperateFullManagedClusterForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AppId - appId. required.
   * @param {String} AddressPoolId - addressPoolId. required.
   * @param {String} TargetVpcId - targetVpcId. required.
   * @param {String} TargetInstanceId - targetInstanceId. required.
   * @param {Integer} Port - port. required.
   * @param {String} SourceVpcId - sourceVpcId. optional.
   * @param {String} SourceVswitchId - sourceVswitchId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceInstanceId - sourceInstanceId. optional.
   */
  operateTunnel2HostForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AddressPoolId')) {
      throw new TypeError('parameter "AddressPoolId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVpcId')) {
      throw new TypeError('parameter "TargetVpcId" is required');
    }

    if (!hasOwnProperty(params, 'TargetInstanceId')) {
      throw new TypeError('parameter "TargetInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('OperateTunnel2HostForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ConsoleRoleName - consoleRoleName. required.
   */
  passRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ConsoleRoleName')) {
      throw new TypeError('parameter "ConsoleRoleName" is required');
    }

    return this.request('PassRole', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} data - data. required.
   */
  payOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  physicalDeleteEmrResource(params = {}, options = {}) {
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

    return this.request('PhysicalDeleteEmrResource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Long} StartTimeStamp - startTimeStamp. required.
   * @param {Long} EndTimeStamp - endTimeStamp. required.
   * @param {String} Cursor - cursor. optional.
   * @param {Integer} Size - size. optional.
   */
  queryAlarmHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeStamp')) {
      throw new TypeError('parameter "StartTimeStamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimeStamp')) {
      throw new TypeError('parameter "EndTimeStamp" is required');
    }

    return this.request('QueryAlarmHistory', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  queryAlarmRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('QueryAlarmRules', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Payload - payload. required.
   * @param {RepeatList} ClusterBizId - clusterBizId. optional.
   */
  queryApmSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    return this.request('QueryApmSnapshot', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} Payload - payload. required.
   * @param {RepeatList} ClusterBizId - clusterBizId. optional.
   */
  queryApmSnapshotForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    return this.request('QueryApmSnapshotForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Payload - payload. required.
   * @param {RepeatList} ClusterBizId - clusterBizId. optional.
   */
  queryApmTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    return this.request('QueryApmTrend', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} Payload - payload. required.
   * @param {RepeatList} ClusterBizId - clusterBizId. optional.
   */
  queryApmTrendForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    return this.request('QueryApmTrendForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  queryClusterByUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('QueryClusterByUser', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  queryClusterNumberId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('QueryClusterNumberId', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Status - status. optional.
   */
  queryClusterOrders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('QueryClusterOrders', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Status - status. optional.
   */
  queryClusterOrdersForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('QueryClusterOrdersForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} JobBizId - jobBizId. required.
   */
  queryJobNumberId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'JobBizId')) {
      throw new TypeError('parameter "JobBizId" is required');
    }

    return this.request('QueryJobNumberId', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} JobId - jobId. required.
   * @param {String} KeyBase - keyBase. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ContainerId - containerId. optional.
   * @param {String} LogName - logName. required.
   */
  queryLogKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'KeyBase')) {
      throw new TypeError('parameter "KeyBase" is required');
    }

    if (!hasOwnProperty(params, 'LogName')) {
      throw new TypeError('parameter "LogName" is required');
    }

    return this.request('QueryLogKey', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Period - period. required.
   * @param {Long} StartTimeStamp - startTimeStamp. required.
   * @param {Long} EndTimeStamp - endTimeStamp. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostRole - hostRole. optional.
   */
  queryMetricData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeStamp')) {
      throw new TypeError('parameter "StartTimeStamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimeStamp')) {
      throw new TypeError('parameter "EndTimeStamp" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('QueryMetricData', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  queryOssLogPathClusterBizId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('QueryOssLogPathClusterBizId', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} WorkNodeExecId - workNodeExecId. required.
   */
  queryOssLogPathJobBizId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'WorkNodeExecId')) {
      throw new TypeError('parameter "WorkNodeExecId" is required');
    }

    return this.request('QueryOssLogPathJobBizId', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} MasterInstanceType - masterInstanceType. optional.
   * @param {String} CoreInstanceType - coreInstanceType. optional.
   * @param {String} TaskInstanceType - taskInstanceType. optional.
   * @param {Integer} MasterInstanceQuantity - masterInstanceQuantity. optional.
   * @param {Integer} CoreInstanceQuantity - coreInstanceQuantity. optional.
   * @param {Integer} TaskInstanceQuantity - taskInstanceQuantity. optional.
   * @param {String} MasterDiskType - masterDiskType. optional.
   * @param {String} CoreDiskType - coreDiskType. optional.
   * @param {String} TaskDiskType - taskDiskType. optional.
   * @param {Integer} MasterDiskQuantity - masterDiskQuantity. optional.
   * @param {Integer} CoreDiskQuantity - coreDiskQuantity. optional.
   * @param {Integer} TaskDiskQuantity - taskDiskQuantity. optional.
   * @param {Integer} Duration - duration. optional. default: 1.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {RepeatList} HostGroup - hostGroupList. optional.
   */
  queryPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('QueryPrice', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} MasterInstanceType - masterInstanceType. optional.
   * @param {String} CoreInstanceType - coreInstanceType. optional.
   * @param {String} TaskInstanceType - taskInstanceType. optional.
   * @param {Integer} MasterInstanceQuantity - masterInstanceQuantity. optional.
   * @param {Integer} CoreInstanceQuantity - coreInstanceQuantity. optional.
   * @param {Integer} TaskInstanceQuantity - taskInstanceQuantity. optional.
   * @param {String} MasterDiskType - masterDiskType. optional.
   * @param {String} CoreDiskType - coreDiskType. optional.
   * @param {String} TaskDiskType - taskDiskType. optional.
   * @param {Integer} MasterDiskQuantity - masterDiskQuantity. optional.
   * @param {Integer} CoreDiskQuantity - coreDiskQuantity. optional.
   * @param {Integer} TaskDiskQuantity - taskDiskQuantity. optional.
   * @param {Integer} Duration - duration. optional. default: 1.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {String} NetType - netType. optional. default: classic.
   * @param {String} DepositType - depositType. optional. default: HALF_MANAGED.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {RepeatList} HostGroup - hostGroupList. optional.
   * @param {String} UserId - userId. required.
   */
  queryPriceForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('QueryPriceForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} ModifyConfigSpec - modifyConfigSpecList. optional.
   */
  queryPriceForModifyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('QueryPriceForModifyConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} EcsId - ecsId. optional.
   * @param {String} EcsIdList - ecsIdList. optional.
   * @param {Integer} EcsPeriod - ecsPeriod. optional. default: 1.
   * @param {Integer} EmrPeriod - emrPeriod. optional. default: 1.
   */
  queryPriceForRenewEcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('QueryPriceForRenewEcs', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Period - period. required.
   * @param {Long} StartTimeStamp - startTimeStamp. required.
   * @param {Long} EndTimeStamp - endTimeStamp. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostRole - hostRole. optional.
   */
  querySlsMetricData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeStamp')) {
      throw new TypeError('parameter "StartTimeStamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimeStamp')) {
      throw new TypeError('parameter "EndTimeStamp" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('QuerySlsMetricData', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  queryUserById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('QueryUserById', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Long} ResourcePoolId - resourcePoolId. required.
   */
  refreshClusterResourcePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    return this.request('RefreshClusterResourcePool', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. optional.
   * @param {String} MainVersion - mainVersion. required.
   * @param {String} StackVersion - stackVersion. required.
   */
  relateStackVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MainVersion')) {
      throw new TypeError('parameter "MainVersion" is required');
    }

    if (!hasOwnProperty(params, 'StackVersion')) {
      throw new TypeError('parameter "StackVersion" is required');
    }

    return this.request('RelateStackVersion', params, options);
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
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  releaseClusterForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ReleaseClusterForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  releaseClusterForInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ReleaseClusterForInternal', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostGroupId - hostGroupId. required.
   * @param {String} InstanceIdList - instanceIdList. optional.
   */
  releaseClusterHostGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroupId')) {
      throw new TypeError('parameter "HostGroupId" is required');
    }

    return this.request('ReleaseClusterHostGroup', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} ReleaseId - releaseId. optional.
   */
  releaseETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ReleaseETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} HostIdList - hostIdList. optional.
   */
  removeClusterHosts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('RemoveClusterHosts', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} ResourcePoolId - resourcePoolId. required.
   */
  renderResourcePoolXml(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ResourcePoolId')) {
      throw new TypeError('parameter "ResourcePoolId" is required');
    }

    return this.request('RenderResourcePoolXml', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} EmrPeriod - emrPeriod. optional. default: 1.
   * @param {RepeatList} RenewEcsDo - renewEcsDOList. optional.
   */
  renewCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('RenewCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} UserId - userId. required.
   * @param {RepeatList} RenewEcsDo - renewEcsDOList. required.
   */
  renewClusterForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RenewEcsDo')) {
      throw new TypeError('parameter "RenewEcsDo" is required');
    }

    return this.request('RenewClusterForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} GwToken - gwToken. required.
   * @param {Long} GwTimestamp - gwTimestamp. required.
   * @param {String} GwService - gwService. required.
   * @param {String} GwVersion - gwVersion. required.
   * @param {String} GwMethod - gwMethod. required.
   * @param {String} GwApiName - gwApiName. required.
   * @param {String} GwMethodParams - gwMethodParams. required.
   * @param {String} GwSerializeProtocol - gwSerializeProtocol. required.
   */
  requestGatewayService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GwToken')) {
      throw new TypeError('parameter "GwToken" is required');
    }

    if (!hasOwnProperty(params, 'GwTimestamp')) {
      throw new TypeError('parameter "GwTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'GwService')) {
      throw new TypeError('parameter "GwService" is required');
    }

    if (!hasOwnProperty(params, 'GwVersion')) {
      throw new TypeError('parameter "GwVersion" is required');
    }

    if (!hasOwnProperty(params, 'GwMethod')) {
      throw new TypeError('parameter "GwMethod" is required');
    }

    if (!hasOwnProperty(params, 'GwApiName')) {
      throw new TypeError('parameter "GwApiName" is required');
    }

    if (!hasOwnProperty(params, 'GwMethodParams')) {
      throw new TypeError('parameter "GwMethodParams" is required');
    }

    if (!hasOwnProperty(params, 'GwSerializeProtocol')) {
      throw new TypeError('parameter "GwSerializeProtocol" is required');
    }

    return this.request('RequestGatewayService', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   * @param {Boolean} ReRunFail - reRunFail. optional.
   */
  rerunFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('RerunFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} EcsResetAutoRenewDo - ecsResetAutoRenewList. optional.
   */
  resetAutoRenewal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ResetAutoRenewal', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperateType - operateType. required.
   * @param {String} SourceIp - sourceIp. optional.
   */
  resetSgPort(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('ResetSgPort', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Username - username. optional.
   * @param {String} Password - password. required.
   */
  resetSoftwarePassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('ResetSoftwarePassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} NewMasterInstances - newMasterInstances. required.
   * @param {Integer} NewCoreInstances - newCoreInstances. required.
   * @param {Integer} NewTaskInstances - newTaskInstances. required.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {Integer} Period - period. optional. default: 1.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {String} CoreInstanceType - coreInstanceType. optional.
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
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} UserId - userId. required.
   * @param {String} VswitchId - vswitchId. optional.
   * @param {Boolean} IsOpenPublicIp - withPublicIp. optional. default: false.
   * @param {RepeatList} HostComponentInfo - hostComponentInfoList. optional.
   * @param {RepeatList} HostGroup - hostGroupList. required.
   */
  resizeClusterForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroup')) {
      throw new TypeError('parameter "HostGroup" is required');
    }

    return this.request('ResizeClusterForAdmin', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Boolean} AutoPayOrder - autoPayOrder. optional.
   * @param {String} VswitchId - vswitchId. optional.
   * @param {Boolean} IsOpenPublicIp - withPublicIp. optional. default: false.
   * @param {RepeatList} HostComponentInfo - hostComponentInfoList. optional.
   * @param {RepeatList} HostGroup - hostGroupList. required.
   */
  resizeClusterV2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'HostGroup')) {
      throw new TypeError('parameter "HostGroup" is required');
    }

    return this.request('ResizeClusterV2', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} DiskConfig - diskConfigList. required.
   */
  resizeDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DiskConfig')) {
      throw new TypeError('parameter "DiskConfig" is required');
    }

    return this.request('ResizeDisk', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} DataSourceId - dataSourceId. optional.
   * @param {String} StageName - stageName. optional.
   * @param {String} Sql - sql. required.
   */
  resolveETLJobSqlSchema(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'Sql')) {
      throw new TypeError('parameter "Sql" is required');
    }

    return this.request('ResolveETLJobSqlSchema', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {Boolean} RollingRestart - rollingRestart. required.
   * @param {Boolean} UpgradedHostGroupOnly - upgradedHostGroupOnly. optional.
   */
  restartCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RollingRestart')) {
      throw new TypeError('parameter "RollingRestart" is required');
    }

    return this.request('RestartCluster', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanInstanceId. required.
   */
  resumeExecutionPlanInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('ResumeExecutionPlanInstance', params, options);
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
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   */
  resumeFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('ResumeFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} UserInfo - userInfoList. required.
   */
  retryCreateUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserInfo')) {
      throw new TypeError('parameter "UserInfo" is required');
    }

    return this.request('RetryCreateUserPassword', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanId. required.
   * @param {String} ExecutionPlanWorkNodeIds - executionPlanWorkNodeIds. required.
   */
  retryExecutionPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ExecutionPlanWorkNodeIds')) {
      throw new TypeError('parameter "ExecutionPlanWorkNodeIds" is required');
    }

    return this.request('RetryExecutionPlan', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanInstanceId. required.
   * @param {Json} Arguments - arguments. optional.
   * @param {Boolean} RerunFail - rerunFail. optional.
   */
  retryExecutionPlanInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('RetryExecutionPlanInstance', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} HostGroupIdList - hostGroupIdList. optional.
   * @param {String} HostIdList - hostIdList. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ServiceActionName - serviceActionName. required.
   * @param {String} CustomCommand - customCommand. optional.
   * @param {String} ComponentNameList - componentNameList. optional.
   * @param {String} Comment - comment. optional.
   * @param {Boolean} IsRolling - isRolling. optional.
   * @param {String} ExecuteStrategy - executeStrategy. optional.
   * @param {String} CustomParams - customParams. optional.
   * @param {Long} Interval - interval. optional.
   * @param {Integer} NodeCountPerBatch - nodeCountPerBatch. optional.
   * @param {Integer} TotlerateFailCount - tolerateFailCount. optional.
   * @param {Boolean} OnlyRestartStaleConfigNodes - onlyRestartStaleConfigNodes. optional.
   * @param {Boolean} TurnOnMaintenanceMode - turnOnMaintenanceMode. optional.
   */
  runClusterServiceAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceActionName')) {
      throw new TypeError('parameter "ServiceActionName" is required');
    }

    return this.request('RunClusterServiceAction', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {RepeatList} InstanceRunParam - instanceRunParamList. optional.
   * @param {Boolean} IsDebug - isDebug. required.
   */
  runETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'IsDebug')) {
      throw new TypeError('parameter "IsDebug" is required');
    }

    return this.request('RunETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanId. required.
   * @param {Json} Arguments - arguments. optional.
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
   * @param {String} NoteId - noteId. required.
   * @param {String} RegionId - regionId. required.
   */
  runNoteParagraphs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NoteId')) {
      throw new TypeError('parameter "NoteId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('RunNoteParagraphs', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {RepeatList} HostIdList - hostIdList. optional.
   * @param {String} Dimension - dimension. optional. default: CLUSTER.
   * @param {String} OpsCommandName - opsCommandName. required.
   * @param {String} Comment - comment. optional.
   * @param {String} CustomParams - customParams. optional.
   */
  runOpsCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OpsCommandName')) {
      throw new TypeError('parameter "OpsCommandName" is required');
    }

    return this.request('RunOpsCommand', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} NoteId - noteId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Text - text. optional.
   */
  runParagraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NoteId')) {
      throw new TypeError('parameter "NoteId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('RunParagraph', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} NoteId - noteId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Text - text. required.
   */
  saveParagraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NoteId')) {
      throw new TypeError('parameter "NoteId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Text')) {
      throw new TypeError('parameter "Text" is required');
    }

    return this.request('SaveParagraph', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostInnerIp - hostInnerIp. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} LogstoreName - logstoreName. required.
   * @param {Integer} FromTimestamp - fromTimestamp. required.
   * @param {Integer} ToTimestamp - toTimestamp. required.
   * @param {String} SlsQueryString - slsQueryString. required.
   * @param {Integer} Offset - offset. required.
   * @param {Integer} Line - line. required.
   * @param {Boolean} Reverse - reverse. required.
   */
  searchLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'LogstoreName')) {
      throw new TypeError('parameter "LogstoreName" is required');
    }

    if (!hasOwnProperty(params, 'FromTimestamp')) {
      throw new TypeError('parameter "FromTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'ToTimestamp')) {
      throw new TypeError('parameter "ToTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'SlsQueryString')) {
      throw new TypeError('parameter "SlsQueryString" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Line')) {
      throw new TypeError('parameter "Line" is required');
    }

    if (!hasOwnProperty(params, 'Reverse')) {
      throw new TypeError('parameter "Reverse" is required');
    }

    return this.request('SearchLog', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   */
  startFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('StartFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} NoteId - noteId. required.
   * @param {String} Id - id. required.
   * @param {String} RegionId - regionId. required.
   */
  stopParagraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NoteId')) {
      throw new TypeError('parameter "NoteId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('StopParagraph', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowId - flowId. required.
   * @param {String} Conf - conf. optional.
   */
  submitFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    return this.request('SubmitFlow', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} JobId - jobId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. optional.
   * @param {String} Conf - conf. optional.
   */
  submitFlowJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('SubmitFlowJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - executionPlanInstanceId. required.
   */
  suspendExecutionPlanInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('SuspendExecutionPlanInstance', params, options);
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

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} FlowInstanceId - flowInstanceId. required.
   */
  suspendFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FlowInstanceId')) {
      throw new TypeError('parameter "FlowInstanceId" is required');
    }

    return this.request('SuspendFlow', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   */
  syncClusterHostInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('SyncClusterHostInfo', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} UserId - userId. required.
   */
  syncClusterHostInfoForAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('SyncClusterHostInfoForAdmin', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   */
  syncDataSourceSchemaDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('SyncDataSourceSchemaDatabase', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} DataSourceId - dataSourceId. required.
   * @param {String} DbName - dbName. optional.
   * @param {String} TableName - tableName. optional.
   */
  syncDataSourceSchemaTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'DataSourceId')) {
      throw new TypeError('parameter "DataSourceId" is required');
    }

    return this.request('SyncDataSourceSchemaTable', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} OperationId - operationId. required.
   */
  terminateClusterOperation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'OperationId')) {
      throw new TypeError('parameter "OperationId" is required');
    }

    return this.request('TerminateClusterOperation', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {RepeatList} TargetClusterList - targetClusterList. optional.
   * @param {RepeatList} DingGroupList - dingGroupList. optional.
   * @param {RepeatList} UserGroupList - userGroupList. optional.
   */
  updateApmEventNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateApmEventNotificationConfig', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} Conf - conf. required.
   */
  updateDataSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Conf')) {
      throw new TypeError('parameter "Conf" is required');
    }

    return this.request('UpdateDataSource', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {Boolean} Check - check. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ClusterConfig - clusterConfig. optional.
   * @param {RepeatList} TriggerRule - triggerRuleList. optional.
   * @param {String} AlertConfig - alertConfig. optional.
   * @param {RepeatList} Stage - stageList. optional.
   * @param {RepeatList} StageConnection - stageConnections. optional.
   */
  updateETLJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateETLJob', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} EtlJobId - etlJobId. required.
   * @param {String} StageName - stageName. required.
   * @param {String} StageType - stageType. required.
   * @param {String} StagePlugin - stagePlugin. required.
   * @param {String} StageConf - stageConf. required.
   */
  updateETLJobStage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EtlJobId')) {
      throw new TypeError('parameter "EtlJobId" is required');
    }

    if (!hasOwnProperty(params, 'StageName')) {
      throw new TypeError('parameter "StageName" is required');
    }

    if (!hasOwnProperty(params, 'StageType')) {
      throw new TypeError('parameter "StageType" is required');
    }

    if (!hasOwnProperty(params, 'StagePlugin')) {
      throw new TypeError('parameter "StagePlugin" is required');
    }

    if (!hasOwnProperty(params, 'StageConf')) {
      throw new TypeError('parameter "StageConf" is required');
    }

    return this.request('UpdateETLJobStage', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} ParentId - parentId. optional.
   */
  updateNavNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateNavNode', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} DefaultOssPath - defaultOssPath. optional.
   * @param {String} OssConfig - ossConfig. optional.
   */
  updateProjectSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('UpdateProjectSetting', params, options);
  }

}

module.exports = Client;
