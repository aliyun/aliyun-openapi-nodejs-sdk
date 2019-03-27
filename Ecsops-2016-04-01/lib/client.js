
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Base64Data - base64Data. required.
   * @param {String} CorrectType - correctType. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAbcCorrection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Base64Data')) {
      throw new TypeError('parameter "Base64Data" is required');
    }

    if (!hasOwnProperty(params, 'CorrectType')) {
      throw new TypeError('parameter "CorrectType" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsAbcCorrection', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Base64Data - base64Data. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAbcModifyRestartPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Base64Data')) {
      throw new TypeError('parameter "Base64Data" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsAbcModifyRestartPoint', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} SourceOwnerAliUid - sourceOwnerAliUid. required.
   * @param {String} SourceOwnerBid - sourceOwnerBid. optional.
   * @param {String} EventId - eventId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAcceptInquiredSystemEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SourceOwnerAliUid')) {
      throw new TypeError('parameter "SourceOwnerAliUid" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('OpsAcceptInquiredSystemEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} StartTime - startTimeGmt. required.
   * @param {String} EndTime - endTimeGmt. required.
   * @param {Long} QueryAliUid - aliUid. optional.
   * @param {String} QueryResourceId - resourceId. optional.
   * @param {String} QueryAccessKeyId - accessKeyId. optional.
   * @param {String} QueryProduct - queryProduct. optional.
   * @param {String} QueryRequestId - queryRequestId. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsActionTrail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OpsActionTrail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AlertItem - alertItem. required.
   * @param {String} AlertSource - alertSource. required.
   * @param {String} AlertLevel - alertLevel. required.
   * @param {String} AlertTitle - alertTitle. required.
   * @param {String} BelongTeam - belongTeam. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} AlertStatus - alertStatus. required.
   * @param {String} AlertTime - alertTime. required.
   * @param {String} AlertDetail - alertDetail. required.
   * @param {String} DiagnoseResult - diagnosisResult. optional.
   * @param {String} DiagnosisTemplateId - diagnosisTemplateId. optional.
   * @param {String} Extra - extra. optional.
   */
  opsAddAlerts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlertItem')) {
      throw new TypeError('parameter "AlertItem" is required');
    }

    if (!hasOwnProperty(params, 'AlertSource')) {
      throw new TypeError('parameter "AlertSource" is required');
    }

    if (!hasOwnProperty(params, 'AlertLevel')) {
      throw new TypeError('parameter "AlertLevel" is required');
    }

    if (!hasOwnProperty(params, 'AlertTitle')) {
      throw new TypeError('parameter "AlertTitle" is required');
    }

    if (!hasOwnProperty(params, 'AlertStatus')) {
      throw new TypeError('parameter "AlertStatus" is required');
    }

    if (!hasOwnProperty(params, 'AlertTime')) {
      throw new TypeError('parameter "AlertTime" is required');
    }

    if (!hasOwnProperty(params, 'AlertDetail')) {
      throw new TypeError('parameter "AlertDetail" is required');
    }

    return this.request('OpsAddAlerts', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClusterId - zoneNo. required.
   * @param {Integer} Status - status. optional.
   * @param {String} InstanceConfigJson - instanceConfigJson. optional.
   * @param {String} DiskConfigJson - diskConfigJson. optional.
   * @param {String} FlavorsJson - flavorsJson. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAddInventoryConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpsAddInventoryConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerBid - resourceOwnerBid. optional.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} TagCategory - tagCategory. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {Tag} Tag - undefined. required.
   */
  opsAddTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'TagCategory')) {
      throw new TypeError('parameter "TagCategory" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('OpsAddTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAllocatePublicIpAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsAllocatePublicIpAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} IpAddress - ip. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAssignPublicIpAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    return this.request('OpsAssignPublicIpAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} DiskId - instanceId. required.
   * @param {String} Device - mountPoint. optional.
   * @param {Boolean} DeleteWithInstance - deleteWithInstance. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAttachDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsAttachDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {Long} ResourceOwnerId - snapshotOwnerId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAttachSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    return this.request('OpsAttachSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {RepeatList} ImageId - imageIds. required.
   * @param {RepeatList} AliUid - aliUids. optional.
   * @param {String} Mode - mode. required.
   * @param {Boolean} DryRun - dryRun. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  opsAuthorizeImagesToAliUids(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    return this.request('OpsAuthorizeImagesToAliUids', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {RepeatList} ImageId - imageNos. required.
   * @param {RepeatList} ImageRegionId - imageRegionNos. optional.
   * @param {RepeatList} Bid - bids. optional.
   * @param {String} Mode - mode. required.
   * @param {Boolean} DryRun - dryRun. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  opsAuthorizeImagesToBids(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    return this.request('OpsAuthorizeImagesToBids', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} InstanceId - instance_id. required.
   * @param {String} SourceCidrIp - source_cidr_ip. optional.
   * @param {String} DestCidrIp - dest_cidr_ip. optional.
   * @param {String} SourcePortRange - source_port_range. optional.
   * @param {String} DestPortRange - dest_port_range. optional.
   * @param {String} IpProtocol - ip_protocol. optional.
   * @param {String} Policy - policy. optional.
   * @param {String} Priority - priority. required.
   * @param {String} Direction - direction. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAuthorizeInstanceAclRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('OpsAuthorizeInstanceAclRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} TargetIp - target_ip. required.
   * @param {String} SourceCidrIp - source_cidr_ip. optional.
   * @param {String} DestCidrIp - dest_cidr_ip. optional.
   * @param {String} SourcePortRange - source_port_range. optional.
   * @param {String} DestPortRange - dest_port_range. optional.
   * @param {String} IpProtocol - ip_protocol. optional.
   * @param {String} Policy - policy. optional.
   * @param {String} Priority - priority. required.
   * @param {String} Direction - direction. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAuthorizeIpAclRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TargetIp')) {
      throw new TypeError('parameter "TargetIp" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('OpsAuthorizeIpAclRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} PortRange - portRange. required.
   * @param {String} NicType - nic. optional.
   * @param {String} Policy - policy. optional.
   * @param {Integer} Priority - level. optional.
   * @param {String} SourceGroupId - sourceGroupNo. optional.
   * @param {Long} SourceGroupOwnerId - sourceGroupOwnerAliUid. optional.
   * @param {String} SourceCidrIp - sourceCidrIp. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAuthorizeSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'PortRange')) {
      throw new TypeError('parameter "PortRange" is required');
    }

    return this.request('OpsAuthorizeSecurityGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} PortRange - portRange. required.
   * @param {String} NicType - nic. optional.
   * @param {String} Policy - policy. optional.
   * @param {Integer} Priority - level. optional.
   * @param {String} DestGroupId - destGroupNo. optional.
   * @param {Long} DestGroupOwnerId - destGroupOwnerAliUid. optional.
   * @param {String} DestCidrIp - destCidrIp. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsAuthorizeSecurityGroupEgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'PortRange')) {
      throw new TypeError('parameter "PortRange" is required');
    }

    return this.request('OpsAuthorizeSecurityGroupEgress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} InstanceId - vmName. required.
   * @param {String} NcId - ncId. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCancelLiveMigrateEcsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsCancelLiveMigrateEcsInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsChangePublicIpAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsChangePublicIpAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - diskId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCleanDiskBusinessStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsCleanDiskBusinessStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCleanInstanceBusinessStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsCleanInstanceBusinessStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {String} TradeInstanceId - tradeInstanceId. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} orderType - orderType. optional.
   * @param {Integer} chargeType - chargeType. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} OrderId - orderId. optional.
   * @param {String} Status - status. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCorrectBusinessInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('OpsCorrectBusinessInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {Long} BusinessId - businessId. optional.
   * @param {String} ModuleCode - moduleCode. optional.
   * @param {String} ModuleTag - moduleTag. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCorrectBusinessModule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('OpsCorrectBusinessModule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {Long} BusinessId - businessId. optional.
   * @param {String} ModuleCode - moduleCode. optional.
   * @param {String} PropertyCode - propertyCode. optional.
   * @param {Long} ModuleId - moduleId. optional.
   * @param {String} PropertyValue - propertyValue. optional.
   * @param {String} PropertyDisplayValue - propertyDisplayValue. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCorrectBusinessModuleProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('OpsCorrectBusinessModuleProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {Long} BusinessId - businessId. optional.
   * @param {String} PropertyCode - propertyCode. optional.
   * @param {String} PropertyValue - propertyValue. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCorrectBusinessProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('OpsCorrectBusinessProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {String} CommandType - commandType. optional.
   * @param {String} commandDetail - commandDetail. optional.
   * @param {String} commandStatus - commandStatus. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {Long} OrderId - orderId. optional.
   * @param {Integer} RetryTimes - retryTimes. optional.
   * @param {String} CommandResult - commandResult. optional.
   * @param {String} Token - token. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCorrectCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('OpsCorrectCommand', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {Long} OrderId - orderId. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} OrderMessage - orderMessage. optional.
   * @param {Integer} ActionType - actionType. optional.
   * @param {String} InstanceResultMessage - instanceResultMessage. optional.
   * @param {Integer} RetryTimes - retryTimes. optional.
   * @param {Integer} ChargeType - chargeType. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCorrectOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('OpsCorrectOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {Long} OrderId - orderId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} SpMessage - spMessage. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {Integer} chargeType - chargeType. optional.
   * @param {Boolean} IsAsync - isAsync. optional.
   * @param {Integer} ActionType - actionType. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCorrectProduceResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('OpsCorrectProduceResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CheckId - checkId. optional.
   * @param {Integer} Priority - priority. required.
   * @param {String} Type - type. required.
   * @param {Boolean} HasHideableItems - hasHideableItems. required.
   * @param {Boolean} UnRefreshable - unRefreshable. required.
   * @param {String} CustomSummary - customSummary. optional.
   * @param {String} SummaryActionLink - summaryActionLink. optional.
   * @param {String} CustomFilters - customFilters. optional.
   * @param {String} SummaryColumns - summaryColumns. optional.
   * @param {Integer} Visibility - visibility. required.
   * @param {RepeatList} Column - columns. required.
   * @param {RepeatList} Property - properties. required.
   */
  opsCreateAdvisorCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'HasHideableItems')) {
      throw new TypeError('parameter "HasHideableItems" is required');
    }

    if (!hasOwnProperty(params, 'UnRefreshable')) {
      throw new TypeError('parameter "UnRefreshable" is required');
    }

    if (!hasOwnProperty(params, 'Visibility')) {
      throw new TypeError('parameter "Visibility" is required');
    }

    if (!hasOwnProperty(params, 'Column')) {
      throw new TypeError('parameter "Column" is required');
    }

    if (!hasOwnProperty(params, 'Property')) {
      throw new TypeError('parameter "Property" is required');
    }

    return this.request('OpsCreateAdvisorCheck', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AlertItem - alertItem. required.
   * @param {String} AlertSource - alertSource. required.
   * @param {String} AlertLevel - alertLevel. required.
   * @param {String} AlertTitle - alertTitle. required.
   * @param {String} BelongTeam - belongTeam. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} AlertTime - alertTime. required.
   * @param {String} AlertDetail - alertDetail. required.
   */
  opsCreateAlerts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AlertItem')) {
      throw new TypeError('parameter "AlertItem" is required');
    }

    if (!hasOwnProperty(params, 'AlertSource')) {
      throw new TypeError('parameter "AlertSource" is required');
    }

    if (!hasOwnProperty(params, 'AlertLevel')) {
      throw new TypeError('parameter "AlertLevel" is required');
    }

    if (!hasOwnProperty(params, 'AlertTitle')) {
      throw new TypeError('parameter "AlertTitle" is required');
    }

    if (!hasOwnProperty(params, 'AlertTime')) {
      throw new TypeError('parameter "AlertTime" is required');
    }

    if (!hasOwnProperty(params, 'AlertDetail')) {
      throw new TypeError('parameter "AlertDetail" is required');
    }

    return this.request('OpsCreateAlerts', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Channel - channel. optional.
   * @param {String} ErrorCode - errorCode. required.
   * @param {String} DiagnoseAction - action. required.
   * @param {String} DiagnoseProduct - product. required.
   * @param {String} Solution - solutions. required.
   */
  opsCreateAutoDiagnoseTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ErrorCode')) {
      throw new TypeError('parameter "ErrorCode" is required');
    }

    if (!hasOwnProperty(params, 'DiagnoseAction')) {
      throw new TypeError('parameter "DiagnoseAction" is required');
    }

    if (!hasOwnProperty(params, 'DiagnoseProduct')) {
      throw new TypeError('parameter "DiagnoseProduct" is required');
    }

    if (!hasOwnProperty(params, 'Solution')) {
      throw new TypeError('parameter "Solution" is required');
    }

    return this.request('OpsCreateAutoDiagnoseTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} StrategyName - strategyName. required.
   * @param {Json} Scope - scopes. required.
   * @param {RepeatList} Group - groups. optional.
   * @param {RepeatList} resource - resources. optional.
   * @param {String} Description - description. required.
   * @param {String} Operator - operator. required.
   * @param {Json} Extension - extensions. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateChangePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyName')) {
      throw new TypeError('parameter "StrategyName" is required');
    }

    if (!hasOwnProperty(params, 'Scope')) {
      throw new TypeError('parameter "Scope" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Operator')) {
      throw new TypeError('parameter "Operator" is required');
    }

    return this.request('OpsCreateChangePlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} JobId - jobId. optional.
   * @param {String} Cluster - cluster. required.
   * @param {String} ServerRole - serverRole. required.
   * @param {String} CommitId - commitId. required.
   * @param {Integer} BatchNo - batchNo. required.
   * @param {Integer} BatchSize - batchSize. required.
   * @param {String} Tags - tags. optional.
   * @param {RepeatList} Group - groups. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateChangePlanBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'ServerRole')) {
      throw new TypeError('parameter "ServerRole" is required');
    }

    if (!hasOwnProperty(params, 'CommitId')) {
      throw new TypeError('parameter "CommitId" is required');
    }

    if (!hasOwnProperty(params, 'BatchNo')) {
      throw new TypeError('parameter "BatchNo" is required');
    }

    if (!hasOwnProperty(params, 'BatchSize')) {
      throw new TypeError('parameter "BatchSize" is required');
    }

    if (!hasOwnProperty(params, 'Group')) {
      throw new TypeError('parameter "Group" is required');
    }

    return this.request('OpsCreateChangePlanBatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DemandId - demandId. required.
   * @param {String} BatchName - batchName. required.
   * @param {String} ProjectId - projectId. optional.
   * @param {String} DemandTime - addDemandTime. required.
   * @param {String} SumitterUid - submitterUid. required.
   * @param {String} SumitterName - submitterName. required.
   * @param {Long} CustomerUid - customerUid. required.
   * @param {String} CustomerName - customerName. required.
   * @param {String} demandSupplyPmName - demandSupplyPm. required.
   * @param {String} demandSupplyPmUid - demandSupplyPmUid. required.
   * @param {RepeatList} SubDemand - subDemands. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DemandId')) {
      throw new TypeError('parameter "DemandId" is required');
    }

    if (!hasOwnProperty(params, 'BatchName')) {
      throw new TypeError('parameter "BatchName" is required');
    }

    if (!hasOwnProperty(params, 'DemandTime')) {
      throw new TypeError('parameter "DemandTime" is required');
    }

    if (!hasOwnProperty(params, 'SumitterUid')) {
      throw new TypeError('parameter "SumitterUid" is required');
    }

    if (!hasOwnProperty(params, 'SumitterName')) {
      throw new TypeError('parameter "SumitterName" is required');
    }

    if (!hasOwnProperty(params, 'CustomerUid')) {
      throw new TypeError('parameter "CustomerUid" is required');
    }

    if (!hasOwnProperty(params, 'CustomerName')) {
      throw new TypeError('parameter "CustomerName" is required');
    }

    if (!hasOwnProperty(params, 'demandSupplyPmName')) {
      throw new TypeError('parameter "demandSupplyPmName" is required');
    }

    if (!hasOwnProperty(params, 'demandSupplyPmUid')) {
      throw new TypeError('parameter "demandSupplyPmUid" is required');
    }

    if (!hasOwnProperty(params, 'SubDemand')) {
      throw new TypeError('parameter "SubDemand" is required');
    }

    return this.request('OpsCreateDemand', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. required.
   * @param {String} DiskName - diskName. optional.
   * @param {String} Description - diskDesc. optional.
   * @param {String} DiskCategory - diskCategory. optional.
   * @param {Integer} Size - diskSize. optional.
   * @param {String} SnapshotId - snapshotNo. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    return this.request('OpsCreateDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} HouyiDiskId - disk_id. required.
   * @param {String} StorageCluster - storage_cluster. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateDiskOnStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiDiskId')) {
      throw new TypeError('parameter "HouyiDiskId" is required');
    }

    return this.request('OpsCreateDiskOnStorage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} EventType - eventType. required.
   * @param {String} EventTypeVersion - eventTypeVersion. optional.
   * @param {String} CloudEventsVersion - cloudEventsVersion. optional.
   * @param {String} Source - source. required.
   * @param {String} EventTime - eventTime. required.
   * @param {String} SchemaURL - schemaURL. optional.
   * @param {String} ContentType - contentType. optional.
   * @param {Json} Extensions - extensions. optional.
   * @param {Json} Data - data. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'EventTime')) {
      throw new TypeError('parameter "EventTime" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('OpsCreateEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Json} Events - events. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateEventList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Events')) {
      throw new TypeError('parameter "Events" is required');
    }

    return this.request('OpsCreateEventList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} DiskId - diskId. required.
   * @param {Long} AssignSnapshotOwnerId - assignSnapshotOwnerId. required.
   * @param {String} SnapshotName - snapshotNickname. optional.
   * @param {String} Description - description. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateEvidentialSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'AssignSnapshotOwnerId')) {
      throw new TypeError('parameter "AssignSnapshotOwnerId" is required');
    }

    return this.request('OpsCreateEvidentialSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Boolean} IsPublic - isPublic. required.
   * @param {String} SnapshotId - snapshotNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. required.
   * @param {String} ImageName - imageName. required.
   * @param {String} ImageVersion - version. optional.
   * @param {String} Description - remark. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'IsPublic')) {
      throw new TypeError('parameter "IsPublic" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ImageName')) {
      throw new TypeError('parameter "ImageName" is required');
    }

    return this.request('OpsCreateImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} ClusterId - zoneNo. optional.
   * @param {String} ImageId - imageNo. required.
   * @param {String} SecurityGroupId - groupNo. optional.
   * @param {String} NcId - ncId. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} Hostname - hostName. optional.
   * @param {String} Password - passwd. optional.
   * @param {String} Description - descriptions. optional.
   * @param {Integer} IntranetRx - intranetRx. optional.
   * @param {Integer} IntranetTx - intranetTx. optional.
   * @param {Integer} InternetRx - internetRx. optional.
   * @param {Integer} InternetTx - internetTx. optional.
   * @param {Boolean} IoOptimized - ioOptimized. optional.
   * @param {Boolean} ComputeIntensive - computeIntensive. optional.
   * @param {Boolean} EnableVmOsConfig - enableVmOsConfig. optional.
   * @param {String} VlanId - vlanNo. optional.
   * @param {String} PrivateIpAddress - privateIp. optional.
   * @param {String} VSwitchId - vswitchInstanceId. optional.
   * @param {String} VpcPrivateIp - vpcPrivateIp. optional.
   * @param {String} SystemDiskCategory - systemDiskCategory. optional.
   * @param {Integer} SystemDiskSize - systemDiskSize. optional.
   * @param {String} SystemDiskName - systemDeviceName. optional.
   * @param {String} SystemDiskDescription - systemDeviceDesc. optional.
   * @param {Integer} SystemDiskIopsSize - systemIopsSize. optional.
   * @param {Integer} SystemDiskBpsSize - systemBpsSize. optional.
   * @param {Integer} DataDisk1Size - dataDiskSize1. optional.
   * @param {String} DataDisk1Category - dataDiskCategory1. optional.
   * @param {String} DataDisk1SnapshotId - dataDiskSnapshotNo1. optional.
   * @param {String} DataDisk1Name - dataDiskName1. optional.
   * @param {String} DataDisk1Description - dataDiskDescription1. optional.
   * @param {String} DataDisk1Device - dataDiskDevice1. optional.
   * @param {Boolean} DataDisk1DeleteWithInstance - dataDiskDeleteWithInstance1. optional.
   * @param {Integer} DataDisk1IopsSize - dataDiskIops1. optional.
   * @param {Boolean} DataDisk1DeleteAutoSnapshot - dataDiskDeleteAutoSnapshot1. optional.
   * @param {Boolean} DataDisk1EnableAutoSnapshot - dataDiskEnableAutoSnapshot1. optional.
   * @param {Integer} DataDisk1BpsSize - dataDiskBps1. optional.
   * @param {Boolean} DataDisk1Portable - dataDiskPortable1. optional.
   * @param {Integer} DataDisk2Size - dataDiskSize2. optional.
   * @param {String} DataDisk2Category - dataDiskCategory2. optional.
   * @param {String} DataDisk2SnapshotId - dataDiskSnapshotNo2. optional.
   * @param {String} DataDisk2Name - dataDiskName2. optional.
   * @param {String} DataDisk2Description - dataDiskDescription2. optional.
   * @param {String} DataDisk2Device - dataDiskDevice2. optional.
   * @param {Boolean} DataDisk2DeleteWithInstance - dataDiskDeleteWithInstance2. optional.
   * @param {Integer} DataDisk2IopsSize - dataDiskIops2. optional.
   * @param {Boolean} DataDisk2DeleteAutoSnapshot - dataDiskDeleteAutoSnapshot2. optional.
   * @param {Boolean} DataDisk2EnableAutoSnapshot - dataDiskEnableAutoSnapshot2. optional.
   * @param {Integer} DataDisk2BpsSize - dataDiskBps2. optional.
   * @param {Boolean} DataDisk2Portable - dataDiskPortable2. optional.
   * @param {Integer} DataDisk3Size - dataDiskSize3. optional.
   * @param {String} DataDisk3Category - dataDiskCategory3. optional.
   * @param {String} DataDisk3SnapshotId - dataDiskSnapshotNo3. optional.
   * @param {String} DataDisk3Name - dataDiskName3. optional.
   * @param {String} DataDisk3Description - dataDiskDescription3. optional.
   * @param {String} DataDisk3Device - dataDiskDevice3. optional.
   * @param {Boolean} DataDisk3DeleteWithInstance - dataDiskDeleteWithInstance3. optional.
   * @param {Integer} DataDisk3IopsSize - dataDiskIops3. optional.
   * @param {Boolean} DataDisk3DeleteAutoSnapshot - dataDiskDeleteAutoSnapshot3. optional.
   * @param {Boolean} DataDisk3EnableAutoSnapshot - dataDiskEnableAutoSnapshot3. optional.
   * @param {Integer} DataDisk3BpsSize - dataDiskBps3. optional.
   * @param {Boolean} DataDisk3Portable - dataDiskPortable3. optional.
   * @param {Integer} DataDisk4Size - dataDiskSize4. optional.
   * @param {String} DataDisk4Category - dataDiskCategory4. optional.
   * @param {String} DataDisk4SnapshotId - dataDiskSnapshotNo4. optional.
   * @param {String} DataDisk4Name - dataDiskName4. optional.
   * @param {String} DataDisk4Description - dataDiskDescription4. optional.
   * @param {String} DataDisk4Device - dataDiskDevice4. optional.
   * @param {Boolean} DataDisk4DeleteWithInstance - dataDiskDeleteWithInstance4. optional.
   * @param {Integer} DataDisk4IopsSize - dataDiskIops4. optional.
   * @param {Boolean} DataDisk4DeleteAutoSnapshot - dataDiskDeleteAutoSnapshot4. optional.
   * @param {Boolean} DataDisk4EnableAutoSnapshot - dataDiskEnableAutoSnapshot4. optional.
   * @param {Integer} DataDisk4BpsSize - dataDiskBps4. optional.
   * @param {Boolean} DataDisk4Portable - dataDiskPortable4. optional.
   * @param {String} InstanceType - instanceTypeName. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('OpsCreateInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} NcIp - ip. required.
   * @param {String} HouyiZoneNo - zoneId. required.
   * @param {String} Hostname - hostname. required.
   * @param {String} RackId - rackId. required.
   * @param {String} CpuModel - cpuModel. required.
   * @param {String} PodId - podId. required.
   * @param {String} AswId - aswId. required.
   * @param {Integer} CanRecover - canRecover. required.
   * @param {String} NcType - ncType. required.
   * @param {Integer} Priority - priority. required.
   * @param {Integer} NcVecu - ncVecu. required.
   * @param {Integer} RealEcu - realEcu. required.
   * @param {Integer} RealCpu - realCpu. required.
   * @param {Integer} NcVirtVersion - tag.nc_virt_version. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateNc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NcIp')) {
      throw new TypeError('parameter "NcIp" is required');
    }

    if (!hasOwnProperty(params, 'HouyiZoneNo')) {
      throw new TypeError('parameter "HouyiZoneNo" is required');
    }

    if (!hasOwnProperty(params, 'Hostname')) {
      throw new TypeError('parameter "Hostname" is required');
    }

    if (!hasOwnProperty(params, 'RackId')) {
      throw new TypeError('parameter "RackId" is required');
    }

    if (!hasOwnProperty(params, 'CpuModel')) {
      throw new TypeError('parameter "CpuModel" is required');
    }

    if (!hasOwnProperty(params, 'PodId')) {
      throw new TypeError('parameter "PodId" is required');
    }

    if (!hasOwnProperty(params, 'AswId')) {
      throw new TypeError('parameter "AswId" is required');
    }

    if (!hasOwnProperty(params, 'CanRecover')) {
      throw new TypeError('parameter "CanRecover" is required');
    }

    if (!hasOwnProperty(params, 'NcType')) {
      throw new TypeError('parameter "NcType" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'NcVecu')) {
      throw new TypeError('parameter "NcVecu" is required');
    }

    if (!hasOwnProperty(params, 'RealEcu')) {
      throw new TypeError('parameter "RealEcu" is required');
    }

    if (!hasOwnProperty(params, 'RealCpu')) {
      throw new TypeError('parameter "RealCpu" is required');
    }

    if (!hasOwnProperty(params, 'NcVirtVersion')) {
      throw new TypeError('parameter "NcVirtVersion" is required');
    }

    return this.request('OpsCreateNc', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} NcId - ncId. required.
   * @param {String} TagKey - tagKey. required.
   * @param {String} TagValue - tagValue. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateNcTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NcId')) {
      throw new TypeError('parameter "NcId" is required');
    }

    if (!hasOwnProperty(params, 'TagKey')) {
      throw new TypeError('parameter "TagKey" is required');
    }

    if (!hasOwnProperty(params, 'TagValue')) {
      throw new TypeError('parameter "TagValue" is required');
    }

    return this.request('OpsCreateNcTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SecurityGroupName - groupName. optional.
   * @param {String} Description - groupDesc. optional.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsCreateSecurityGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - diskId. required.
   * @param {String} SnapshotName - snapshotNickname. optional.
   * @param {String} Description - description. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsCreateSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} OsTypeId - osTypeId. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} ImageName - imageName. required.
   * @param {Integer} ImageSize - imageSize. optional.
   * @param {Long} VirtBaseImageId - virtBaseImageId. optional.
   * @param {String} ImageVersion - version. optional.
   * @param {String} Description - remark. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateSystemImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OsTypeId')) {
      throw new TypeError('parameter "OsTypeId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'ImageName')) {
      throw new TypeError('parameter "ImageName" is required');
    }

    return this.request('OpsCreateSystemImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} ExpireTimeStr - expireTimeStr. required.
   * @param {String} TransitionTimeStr - transitionTimeStr. required.
   * @param {String} TargetZoneId - targetZoneNo. required.
   * @param {Boolean} IsSendVoucher - isSendVoucher. required.
   * @param {String} Status - status. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsCreateTransition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ExpireTimeStr')) {
      throw new TypeError('parameter "ExpireTimeStr" is required');
    }

    if (!hasOwnProperty(params, 'TransitionTimeStr')) {
      throw new TypeError('parameter "TransitionTimeStr" is required');
    }

    if (!hasOwnProperty(params, 'TargetZoneId')) {
      throw new TypeError('parameter "TargetZoneId" is required');
    }

    if (!hasOwnProperty(params, 'IsSendVoucher')) {
      throw new TypeError('parameter "IsSendVoucher" is required');
    }

    return this.request('OpsCreateTransition', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CheckId - checkId. required.
   */
  opsDeleteAdvisorCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckId')) {
      throw new TypeError('parameter "CheckId" is required');
    }

    return this.request('OpsDeleteAdvisorCheck', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DemandId - demandId. required.
   * @param {RepeatList} SubDemandIds - subDemandIds. optional.
   * @param {String} Reason - reason. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDeleteDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DemandId')) {
      throw new TypeError('parameter "DemandId" is required');
    }

    return this.request('OpsDeleteDemand', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDeleteImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('OpsDeleteImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClusterId - zoneNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDeleteInventoryConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpsDeleteInventoryConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} NcId - ncId. required.
   * @param {String} HouyiZoneNo - zoneId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDeleteNc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NcId')) {
      throw new TypeError('parameter "NcId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiZoneNo')) {
      throw new TypeError('parameter "HouyiZoneNo" is required');
    }

    return this.request('OpsDeleteNc', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} NcId - ncId. required.
   * @param {String} TagKey - tagKey. required.
   * @param {String} TagValue - tagValue. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDeleteNcTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NcId')) {
      throw new TypeError('parameter "NcId" is required');
    }

    if (!hasOwnProperty(params, 'TagKey')) {
      throw new TypeError('parameter "TagKey" is required');
    }

    if (!hasOwnProperty(params, 'TagValue')) {
      throw new TypeError('parameter "TagValue" is required');
    }

    return this.request('OpsDeleteNcTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDeleteSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('OpsDeleteSecurityGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. required.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDeleteSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('OpsDeleteSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - RegionNo. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. optional.
   * @param {RepeatList} AttributeName - attributeNames. optional.
   */
  opsDescribeAccountAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('OpsDescribeAccountAttributes', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  opsDescribeAlertStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OpsDescribeAlertStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AlertItem - alertItem. optional.
   * @param {String} AlertStatus - alertStatus. optional.
   * @param {Long} AlertId - alertId. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} AlertLevel - alertLevel. optional.
   * @param {String} AlertSource - alertSource. optional.
   * @param {String} BelongTeam - belongTeam. optional.
   * @param {String} AlertTime - alertTime. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Boolean} NeedDetail - needDetail. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  opsDescribeAlerts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OpsDescribeAlerts', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} AuthorizedBid - authorizedBid. required.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  opsDescribeAuthorizedSystemImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AuthorizedBid')) {
      throw new TypeError('parameter "AuthorizedBid" is required');
    }

    return this.request('OpsDescribeAuthorizedSystemImages', params, options);
  }

  /**
   * @param {String} SourceRegionId - sourceRegionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {String} DestinationResource - destinationResource. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} DedicatedHostId - dedicatedHostId. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} SystemDiskCategory - systemDiskCategory. optional.
   * @param {String} DataDiskCategory - dataDiskCategory. optional.
   * @param {String} NetworkCategory - networkCategory. optional.
   * @param {Integer} Cores - cpu. optional.
   * @param {Float} Memory - mem. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} Scope - scope. optional.
   */
  opsDescribeAvailableResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationResource')) {
      throw new TypeError('parameter "DestinationResource" is required');
    }

    return this.request('OpsDescribeAvailableResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OrderId - orderId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ChargeType - chargeType. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeBusinessInstances(params = {}, options = {}) {
    return this.request('OpsDescribeBusinessInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} BusinessId - businessId. required.
   * @param {String} ModuleCode - moduleCode. optional.
   * @param {String} ModuleId - moduleId. optional.
   * @param {String} PropertyCode - propertyCode. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeBusinessModuleProperties(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessId')) {
      throw new TypeError('parameter "BusinessId" is required');
    }

    return this.request('OpsDescribeBusinessModuleProperties', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} BusinessId - businessId. required.
   * @param {String} ModuleCode - moduleCode. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeBusinessModules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessId')) {
      throw new TypeError('parameter "BusinessId" is required');
    }

    return this.request('OpsDescribeBusinessModules', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} BusinessId - businessId. required.
   * @param {String} PropertyCode - propertyCode. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeBusinessProperties(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessId')) {
      throw new TypeError('parameter "BusinessId" is required');
    }

    return this.request('OpsDescribeBusinessProperties', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Cluster - cluster. required.
   * @param {String} ServerRole - serverRole. required.
   * @param {String} CommitId - commitId. required.
   * @param {Integer} BatchNo - batchNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeChangePlanBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'ServerRole')) {
      throw new TypeError('parameter "ServerRole" is required');
    }

    if (!hasOwnProperty(params, 'CommitId')) {
      throw new TypeError('parameter "CommitId" is required');
    }

    if (!hasOwnProperty(params, 'BatchNo')) {
      throw new TypeError('parameter "BatchNo" is required');
    }

    return this.request('OpsDescribeChangePlanBatch', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PlanId - planId. required.
   * @param {Integer} BatchNo - batchNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeChangePlanDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    if (!hasOwnProperty(params, 'BatchNo')) {
      throw new TypeError('parameter "BatchNo" is required');
    }

    return this.request('OpsDescribeChangePlanDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PlanId - planId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeChangePlanSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('OpsDescribeChangePlanSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} IP - ip. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} ClusterId - zoneId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  opsDescribeCleanIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsDescribeCleanIp', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} Ds - ds. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeClusterTags(params = {}, options = {}) {
    return this.request('OpsDescribeClusterTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OrderId - orderId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeCommands(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsDescribeCommands', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} EcsAction - action. required.
   * @param {String} EcsProduct - product. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} DestinationResource - destinationResource. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} DedicatedHostId - dedicatedHostId. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} SystemDiskCategory - systemDiskCategory. optional.
   * @param {String} DataDiskCategory - dataDiskCategory. optional.
   * @param {String} NetworkCategory - networkCategory. optional.
   * @param {Integer} Cores - cpu. optional.
   * @param {Float} Memory - mem. optional.
   * @param {String} Scope - scope. optional.
   */
  opsDescribeConstraints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EcsAction')) {
      throw new TypeError('parameter "EcsAction" is required');
    }

    if (!hasOwnProperty(params, 'EcsProduct')) {
      throw new TypeError('parameter "EcsProduct" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'DestinationResource')) {
      throw new TypeError('parameter "DestinationResource" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsDescribeConstraints', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {RepeatList} DemandIds - demandIds. required.
   * @param {RepeatList} SubDemandIds - subDemandIds. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DemandIds')) {
      throw new TypeError('parameter "DemandIds" is required');
    }

    return this.request('OpsDescribeDemand', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {RepeatList} DemandIds - demandIds. required.
   * @param {RepeatList} SubDemandIds - subDemandIds. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeDemandPerform(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DemandIds')) {
      throw new TypeError('parameter "DemandIds" is required');
    }

    return this.request('OpsDescribeDemandPerform', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - diskId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeDiskSnapshotPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsDescribeDiskSnapshotPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DiskIds - instanceIds. optional.
   * @param {String} HouyiDiskIds - deviceNos. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {String} DiskType - diskType. optional.
   * @param {String} Category - diskCategory. optional.
   * @param {String} Status - status. optional.
   * @param {String} ExcludeStatus - excludeStatus. optional.
   * @param {String} SnapshotId - snapshotNo. optional.
   * @param {Boolean} Active - active. optional.
   * @param {String} ImageId - imageNo. optional.
   * @param {String} DiskName - fuzzyDiskName. optional.
   * @param {Boolean} Portable - portable. optional.
   * @param {Boolean} DeleteWithInstance - deleteWithInstance. optional.
   * @param {Boolean} DeleteAutoSnapshot - deleteAutoSnapshot. optional.
   * @param {Boolean} EnableAutoSnapshot - enableAutoSnapshot. optional.
   * @param {String} AutoSnapshotPolicyId - autoSnapshotPolicyId. optional.
   * @param {String} CreateTimeFrom - createTimeFrom. optional.
   * @param {String} CreateTimeTo - createTimeTo. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeDisks(params = {}, options = {}) {
    return this.request('OpsDescribeDisks', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} SourceOwnerAliUid - sourceOwnerAliUid. required.
   * @param {String} SourceOwnerBid - sourceOwnerBid. required.
   * @param {RepeatList} DiskId - diskIds. optional.
   * @param {RepeatList} EventId - eventIds. optional.
   * @param {String} EventInitiatedBy - eventInitiatedBy. optional.
   * @param {String} Status - lifeCycleStatus. optional.
   * @param {String} HealthStatus - healthStatus. optional.
   * @param {String} EventType - eventType. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {EventTime} EventTime - undefined. optional.
   */
  opsDescribeDisksFullStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SourceOwnerAliUid')) {
      throw new TypeError('parameter "SourceOwnerAliUid" is required');
    }

    if (!hasOwnProperty(params, 'SourceOwnerBid')) {
      throw new TypeError('parameter "SourceOwnerBid" is required');
    }

    return this.request('OpsDescribeDisksFullStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} EventId - eventId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('OpsDescribeEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} ImageOwner - aliUid. optional.
   * @param {RepeatList} ImageId - imageIds. optional.
   * @param {String} Status - status. optional.
   * @param {Long} OsTypeId - osTypeId. optional.
   * @param {String} ImageCategory - imageCategory. required.
   * @param {String} ImageRegionId - imageRegionNo. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeGlobalImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageCategory')) {
      throw new TypeError('parameter "ImageCategory" is required');
    }

    return this.request('OpsDescribeGlobalImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} ImageGroup - imageGroup. optional.
   * @param {String} PublishState - publishState. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  opsDescribeImageGroups(params = {}, options = {}) {
    return this.request('OpsDescribeImageGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ImageIds - imageIds. optional.
   * @param {String} Status - status. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} ImageName - fuzzyImageName. optional.
   * @param {String} ImageOwnerAlias - imageOwnerAlias. optional.
   * @param {String} Usage - usage. optional.
   * @param {String} CreateTimeFrom - createStartTime. optional.
   * @param {String} CreateTimeTo - createEndTime. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeImages(params = {}, options = {}) {
    return this.request('OpsDescribeImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} InstanceId - instance_id. required.
   * @param {String} PageNumber - page_no. optional.
   * @param {String} PageSize - page_size. optional.
   * @param {String} IpProtocol - ip_protocol. optional.
   * @param {String} Priority - priority. optional.
   * @param {String} Type - type. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeInstanceAclRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsDescribeInstanceAclRules', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeInstanceFlowLimits(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsDescribeInstanceFlowLimits', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} SourceOwnerAliUid - sourceOwnerAliUid. required.
   * @param {String} SourceOwnerBid - sourceOwnerBid. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {RepeatList} EventId - eventIds. optional.
   * @param {String} EventInitiatedBy - eventInitiatedBy. optional.
   * @param {RepeatList} InstanceEventCycleStatus - eventCycleStatuses. optional.
   * @param {String} EventCycleStatus - eventCycleStatus. optional.
   * @param {RepeatList} InstanceEventType - eventTypes. optional.
   * @param {String} EventType - eventType. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {NotBefore} NotBefore - undefined. optional.
   * @param {EventPublishTime} EventPublishTime - undefined. optional.
   */
  opsDescribeInstanceHistoryEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SourceOwnerAliUid')) {
      throw new TypeError('parameter "SourceOwnerAliUid" is required');
    }

    if (!hasOwnProperty(params, 'SourceOwnerBid')) {
      throw new TypeError('parameter "SourceOwnerBid" is required');
    }

    return this.request('OpsDescribeInstanceHistoryEvents', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeInstanceVncUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsDescribeInstanceVncUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} VswId - vswInstanceId. optional.
   * @param {String} NetWorkType - ecsNetworkType. optional.
   * @param {String} SecurityGroupId - groupNo. optional.
   * @param {String} InstanceIds - ecsInstanceIds. optional.
   * @param {String} PrivateIpAddresses - ecsPrivateIps. optional.
   * @param {String} InnerIpAddresses - ecsInnerIps. optional.
   * @param {String} PublicIpAddresses - ecsPublicIps. optional.
   * @param {String} EipAddresses - ecsEipAddresses. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} Status - status. optional.
   * @param {Boolean} DeviceAvailable - deviceAvailable. optional.
   * @param {Boolean} IoOptimized - ioOptimized. optional.
   * @param {String} CreateTimeFrom - creationStartTime. optional.
   * @param {String} CreateTimeTo - creationEndTime. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeInstances(params = {}, options = {}) {
    return this.request('OpsDescribeInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} SourceOwnerAliUid - sourceOwnerAliUid. required.
   * @param {String} SourceOwnerBid - sourceOwnerBid. required.
   * @param {RepeatList} InstanceId - instanceIds. optional.
   * @param {RepeatList} EventId - eventIds. optional.
   * @param {String} EventInitiatedBy - eventInitiatedBy. optional.
   * @param {String} Status - status. optional.
   * @param {String} HealthStatus - healthStatus. optional.
   * @param {RepeatList} InstanceEventType - eventTypes. optional.
   * @param {String} EventType - eventType. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {NotBefore} NotBefore - undefined. optional.
   * @param {EventPublishTime} EventPublishTime - undefined. optional.
   */
  opsDescribeInstancesFullStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SourceOwnerAliUid')) {
      throw new TypeError('parameter "SourceOwnerAliUid" is required');
    }

    if (!hasOwnProperty(params, 'SourceOwnerBid')) {
      throw new TypeError('parameter "SourceOwnerBid" is required');
    }

    return this.request('OpsDescribeInstancesFullStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} VswId - vswInstanceId. optional.
   * @param {String} NetWorkType - ecsNetworkType. optional.
   * @param {String} SecurityGroupId - groupNo. optional.
   * @param {String} InstanceIds - ecsInstanceIds. optional.
   * @param {String} PrivateIpAddresses - ecsPrivateIps. optional.
   * @param {String} InnerIpAddresses - ecsInnerIps. optional.
   * @param {String} PublicIpAddresses - ecsPublicIps. optional.
   * @param {String} EipAddresses - ecsEipAddresses. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} Status - status. optional.
   * @param {Boolean} IoOptimized - ioOptimized. optional.
   * @param {String} CreateTimeFrom - creationStartTime. optional.
   * @param {String} CreateTimeTo - creationEndTime. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeInstancesLite(params = {}, options = {}) {
    return this.request('OpsDescribeInstancesLite', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} TargetIp - target_ip. optional.
   * @param {String} PageNumber - page_no. optional.
   * @param {String} PageSize - page_size. optional.
   * @param {String} IpProtocol - ip_protocol. optional.
   * @param {String} Priority - priority. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeIpAclRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsDescribeIpAclRules', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} IP - ip. optional.
   * @param {String} LockType - lockType. required.
   * @param {String} LockReason - lockReason. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} ClusterId - zoneId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  opsDescribeLockedIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LockType')) {
      throw new TypeError('parameter "LockType" is required');
    }

    return this.request('OpsDescribeLockedIp', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {String} SnapshotId - snapshotNo. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeMountedSnapshots(params = {}, options = {}) {
    return this.request('OpsDescribeMountedSnapshots', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} NcId - ncId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeNcTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NcId')) {
      throw new TypeError('parameter "NcId" is required');
    }

    return this.request('OpsDescribeNcTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} OrderId - orderId. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} OrderType - orderType. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeOrders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('OpsDescribeOrders', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} Platform - platform. required.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  opsDescribeOsTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Platform')) {
      throw new TypeError('parameter "Platform" is required');
    }

    return this.request('OpsDescribeOsTypes', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribePlatforms(params = {}, options = {}) {
    return this.request('OpsDescribePlatforms', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OrderId - orderId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeProduceResults(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsDescribeProduceResults', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} OrderId - orderId. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribePurchases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsDescribePurchases', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeRegions(params = {}, options = {}) {
    return this.request('OpsDescribeRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. optional.
   * @param {RepeatList} ReservedInstanceId - instanceIds. optional.
   * @param {String} ReservedInstanceName - riName. optional.
   * @param {RepeatList} Status - statusList. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} InstanceTypeFamily - instanceTypeFamily. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} OfferingType - offeringType. optional.
   * @param {String} OfferingClass - offeringClass. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeReservedInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsDescribeReservedInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {Boolean} MigrateAcrossZone - migrateAcrossZone. optional.
   * @param {String} DestinationResource - destinationResource. required.
   * @param {String} OperationType - operationType. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {Integer} Cores - cpu. optional.
   * @param {Float} Memory - mem. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. optional.
   */
  opsDescribeResourceModification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationResource')) {
      throw new TypeError('parameter "DestinationResource" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('OpsDescribeResourceModification', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} NicType - nic. optional.
   * @param {String} Direction - direction. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeSecurityGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('OpsDescribeSecurityGroupAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {String} SecurityGroupName - groupName. optional.
   * @param {Boolean} OnlyQueryVpcSecurityGroup - isOnlyQueryVpcGroup. optional.
   * @param {String} SecurityGroupIds - groupNos. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeSecurityGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsDescribeSecurityGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} DiskIds - diskIds. optional.
   * @param {String} SnapshotLinkIds - snapshotLinkIds. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeSnapshotLinks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsDescribeSnapshotLinks', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Period - period. optional. default: 60.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeSnapshotMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OpsDescribeSnapshotMonitorData', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} AliUid - aliUid. optional.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeSnapshotPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsDescribeSnapshotPackage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SnapshotPolicyId - snapshotPolicyId. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeSnapshotPolicy(params = {}, options = {}) {
    return this.request('OpsDescribeSnapshotPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeSnapshotService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OpsDescribeSnapshotService', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeSnapshotSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OpsDescribeSnapshotSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {String} SnapshotIds - snapshotNos. optional.
   * @param {String} SnapshotName - snapshotNickName. optional.
   * @param {String} DiskId - diskId. optional.
   * @param {String} SourceDiskType - diskType. optional.
   * @param {Boolean} CreateFinished - createFinished. optional.
   * @param {String} SnapshotTypes - ecsSnapshotTypes. optional.
   * @param {String} FuzzySnapshotName - fuzzySnapshotName. optional.
   * @param {String} CreateTimeFrom - gmtCreatedBegin. optional.
   * @param {String} CreateTimeTo - gmtCreatedEnd. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDescribeSnapshots(params = {}, options = {}) {
    return this.request('OpsDescribeSnapshots', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerBid - resourceOwnerBid. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} TagCategory - tagCategory. required.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  opsDescribeTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'TagCategory')) {
      throw new TypeError('parameter "TagCategory" is required');
    }

    return this.request('OpsDescribeTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionNo - regionNo. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. optional.
   */
  opsDescribeUserRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('OpsDescribeUserRegion', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} DiskId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDetachDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsDetachDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} AliUid - aliyun_idkp. required.
   * @param {String} RegionId - region_id. required.
   * @param {String} HouyiDiskId - disk_id. required.
   * @param {String} InstanceId - instance_id. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDetachHouyiDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiDiskId')) {
      throw new TypeError('parameter "HouyiDiskId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsDetachHouyiDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {Long} ResourceOwnerId - snapshotOwnerId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDetachSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    return this.request('OpsDetachSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} InstanceId - instance_id. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDetailHouyiImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsDetailHouyiImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} ResourceOwnerId - aliyunIdkp. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDetailHouyiVm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    return this.request('OpsDetailHouyiVm', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDetailInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsDetailInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} NcId - ncNo. optional.
   * @param {String} NcIp - ncIp. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDetailNc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsDetailNc', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - diskId. required.
   * @param {Long} ResourceOwnerId - auditAliUid. required.
   * @param {String} ResourceOwnerBid - auditBid. required.
   * @param {String} AuditRequestId - auditRequestId. optional.
   * @param {String} AuditChannel - auditChannel. optional.
   * @param {String} AuditOperator - auditOperator. optional.
   * @param {String} AuditToken - auditToken. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDisableDiskCache(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerBid')) {
      throw new TypeError('parameter "ResourceOwnerBid" is required');
    }

    return this.request('OpsDisableDiskCache', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsDisableSlbFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsDisableSlbFlow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} TableName - tableName. required.
   * @param {Long} OrderId - orderId. optional.
   * @param {Long} BussinessId - bussinessId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} AliUid - aliUid. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsEcsDriverDbReader(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('OpsEcsDriverDbReader', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {String} Status - status. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsEmendBusinessInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('OpsEmendBusinessInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} BusinessId - businessId. required.
   * @param {String} ModuleCode - moduleCode. required.
   * @param {String} ModuleTag - moduleTag. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsEmendBusinessModule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessId')) {
      throw new TypeError('parameter "BusinessId" is required');
    }

    if (!hasOwnProperty(params, 'ModuleCode')) {
      throw new TypeError('parameter "ModuleCode" is required');
    }

    return this.request('OpsEmendBusinessModule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} BusinessId - businessId. required.
   * @param {Long} moduleId - moduleId. optional.
   * @param {String} ModuleCode - moduleCode. optional.
   * @param {String} PropertyCode - propertyCode. required.
   * @param {String} PropertyValue - propertyValue. optional.
   * @param {String} PropertyDisplayValue - propertyDisplayValue. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsEmendBusinessModuleProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessId')) {
      throw new TypeError('parameter "BusinessId" is required');
    }

    if (!hasOwnProperty(params, 'PropertyCode')) {
      throw new TypeError('parameter "PropertyCode" is required');
    }

    return this.request('OpsEmendBusinessModuleProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {Long} BusinessId - businessId. required.
   * @param {String} PropertyCode - propertyCode. optional.
   * @param {String} PropertyValue - propertyValue. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsEmendBusinessProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'BusinessId')) {
      throw new TypeError('parameter "BusinessId" is required');
    }

    if (!hasOwnProperty(params, 'PropertyValue')) {
      throw new TypeError('parameter "PropertyValue" is required');
    }

    return this.request('OpsEmendBusinessProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {String} CommandStatus - commandStatus. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsEmendCommandStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'CommandStatus')) {
      throw new TypeError('parameter "CommandStatus" is required');
    }

    return this.request('OpsEmendCommandStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} Id - id. required.
   * @param {Integer} Status - status. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsEmendProduceResultStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('OpsEmendProduceResultStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - diskId. required.
   * @param {Integer} CacheSize - cacheSize. optional.
   * @param {Long} ResourceOwnerId - auditAliUid. required.
   * @param {String} ResourceOwnerBid - auditBid. required.
   * @param {String} AuditRequestId - auditRequestId. optional.
   * @param {String} AuditChannel - auditChannel. optional.
   * @param {String} AuditOperator - auditOperator. optional.
   * @param {String} AuditToken - auditToken. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsEnableDiskCache(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerBid')) {
      throw new TypeError('parameter "ResourceOwnerBid" is required');
    }

    return this.request('OpsEnableDiskCache', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsEnableSlbFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsEnableSlbFlow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} Ip - ip. required.
   */
  opsForceNcDown(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('OpsForceNcDown', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} MonitorName - monitorName. optional.
   */
  opsGetMonitorConfig(params = {}, options = {}) {
    return this.request('OpsGetMonitorConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} ZoneNumericId - zoneId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsGetZoneStockById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneNumericId')) {
      throw new TypeError('parameter "ZoneNumericId" is required');
    }

    return this.request('OpsGetZoneStockById', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} ZoneNumericId - zoneId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsGetZoneVendibleDataAndStatusById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneNumericId')) {
      throw new TypeError('parameter "ZoneNumericId" is required');
    }

    return this.request('OpsGetZoneVendibleDataAndStatusById', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OrderId - orderId. optional.
   * @param {Integer} TargetBandwidth - targetBandwidth. required.
   * @param {Integer} BaseBandwidth - baseBandwidth. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsInvalidateDownBandwidthPurchase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetBandwidth')) {
      throw new TypeError('parameter "TargetBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'BaseBandwidth')) {
      throw new TypeError('parameter "BaseBandwidth" is required');
    }

    return this.request('OpsInvalidateDownBandwidthPurchase', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PublicIp - publicIp. required.
   * @param {String} Bid - bid. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsIsIpBelongToBid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicIp')) {
      throw new TypeError('parameter "PublicIp" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OpsIsIpBelongToBid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsJoinSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('OpsJoinSecurityGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsLeaveSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('OpsLeaveSecurityGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} DiskId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsLimitDiskBpsIops(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsLimitDiskBpsIops', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Json} queryFilters - queryFilters. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsListEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'queryFilters')) {
      throw new TypeError('parameter "queryFilters" is required');
    }

    return this.request('OpsListEvents', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsListPlanGroups(params = {}, options = {}) {
    return this.request('OpsListPlanGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Json} Scopes - scopes. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsListPlanResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Scopes')) {
      throw new TypeError('parameter "Scopes" is required');
    }

    return this.request('OpsListPlanResources', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsListPlanScopes(params = {}, options = {}) {
    return this.request('OpsListPlanScopes', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsListPlanStrategies(params = {}, options = {}) {
    return this.request('OpsListPlanStrategies', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} MetaType - meta_name. required.
   * @param {String} MetaKey - meta_key. optional.
   * @param {Integer} PageNo - page_no. optional.
   * @param {Integer} PageSize - page_size. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsListSupplyMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MetaType')) {
      throw new TypeError('parameter "MetaType" is required');
    }

    return this.request('OpsListSupplyMeta', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} ZoneNumericId - zoneId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsListUsedVms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneNumericId')) {
      throw new TypeError('parameter "ZoneNumericId" is required');
    }

    return this.request('OpsListUsedVms', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} HouyiAvailableZoneNo - availableZoneId. optional.
   * @param {String} HouyiZoneNo - zoneNo. optional.
   * @param {String} HouyiClusterNo - clusterNo. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsListZones(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsListZones', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} InstanceId - vmName. required.
   * @param {String} DestinationNcId - ncId. optional.
   * @param {Long} Rate - rate. optional.
   * @param {Long} Timeout - timeout. optional.
   * @param {Boolean} NoNeedCheckImage - noCheckImage. optional.
   * @param {Boolean} NoNeedCheckTapdisk - noCheckTapdisk. optional.
   * @param {Boolean} NoNeedCheckSlb - noCheckSlb. optional.
   * @param {Boolean} NoNeedCheckPackage - noCheckPackage. optional.
   * @param {Boolean} NoNeedCheckCpu - noCheckCpu. optional.
   * @param {Boolean} NoNeedCheckLoad - noCheckLoad. optional.
   * @param {Boolean} NoNeedCheckXenVpc - noCheckXenVpc. optional.
   * @param {Boolean} NeedVirtPreCheck - virtPreCheck. optional.
   * @param {Boolean} NeedCpuTune - nonCpuTune. optional.
   * @param {Boolean} ForceScheduleInZone - forceScheduleInZone. optional.
   * @param {Boolean} ForceScheduleInZoneGroup - forceScheduleInZoneGroup. optional.
   * @param {Boolean} CanUseReservedNc - canUseReservedNc. optional.
   * @param {Boolean} CanCpuOverhead - canCpuOverhead. optional.
   * @param {Boolean} IgnorePerNcLimit - ignorePerNcLimit. optional.
   * @param {String} WorkFlowBizId - checkFinishWfToken. optional.
   * @param {Long} Downtime - downtime. optional.
   * @param {String} StrictMatchExpression - strictExpression. optional.
   * @param {String} NonStrictMatchExpression - nonStrictExpression. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsLiveMigrateEcsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsLiveMigrateEcsInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} IP - ip. required.
   * @param {String} LockType - lockType. required.
   * @param {String} LockReason - lockReason. required.
   */
  opsLockIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'IP')) {
      throw new TypeError('parameter "IP" is required');
    }

    if (!hasOwnProperty(params, 'LockType')) {
      throw new TypeError('parameter "LockType" is required');
    }

    if (!hasOwnProperty(params, 'LockReason')) {
      throw new TypeError('parameter "LockReason" is required');
    }

    return this.request('OpsLockIp', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} HouyiZoneNo - zoneId. required.
   */
  opsMarkRecyclingInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiZoneNo')) {
      throw new TypeError('parameter "HouyiZoneNo" is required');
    }

    return this.request('OpsMarkRecyclingInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} DestinationNcId - destinationNc. optional.
   * @param {String} DestinationRackId - destinationRack. optional.
   * @param {String} RecoverPolicy - recoverPolicy. optional.
   * @param {String} StartupMode - startupMode. optional.
   * @param {String} RecoverMode - recoverMode. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsMigrateEcsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsMigrateEcsInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CheckId - checkId. required.
   * @param {Integer} Priority - priority. required.
   * @param {String} Type - type. required.
   * @param {Boolean} HasHideableItems - hasHideableItems. required.
   * @param {Boolean} UnRefreshable - unRefreshable. required.
   * @param {String} CustomSummary - customSummary. optional.
   * @param {String} SummaryActionLink - summaryActionLink. optional.
   * @param {String} CustomFilters - customFilters. optional.
   * @param {String} SummaryColumns - summaryColumns. optional.
   * @param {Integer} Visibility - visibility. required.
   * @param {RepeatList} Column - columns. required.
   * @param {RepeatList} Property - properties. required.
   */
  opsModifyAdvisorCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckId')) {
      throw new TypeError('parameter "CheckId" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'HasHideableItems')) {
      throw new TypeError('parameter "HasHideableItems" is required');
    }

    if (!hasOwnProperty(params, 'UnRefreshable')) {
      throw new TypeError('parameter "UnRefreshable" is required');
    }

    if (!hasOwnProperty(params, 'Visibility')) {
      throw new TypeError('parameter "Visibility" is required');
    }

    if (!hasOwnProperty(params, 'Column')) {
      throw new TypeError('parameter "Column" is required');
    }

    if (!hasOwnProperty(params, 'Property')) {
      throw new TypeError('parameter "Property" is required');
    }

    return this.request('OpsModifyAdvisorCheck', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} AlertId - alertId. optional.
   * @param {String} AlertStatus - alertStatus. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} DiagnosisResult - diagnosisResult. optional.
   * @param {String} DiagnosisTemplateId - diagnosisTemplateId. optional.
   * @param {String} Extra - extra. optional.
   */
  opsModifyAlertAttribute(params = {}, options = {}) {
    return this.request('OpsModifyAlertAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - instanceId. required.
   * @param {String} DiskName - diskName. optional.
   * @param {String} DiskDesc - diskDesc. optional.
   * @param {Boolean} DeleteWithInstance - deleteWithInstance. optional.
   * @param {Boolean} DeleteAutoSnapshot - deleteAutoSnapshot. optional.
   * @param {Boolean} EnableAutoSnapshot - enableAutoSnapshot. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyDiskAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsModifyDiskAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - instanceId. required.
   * @param {Integer} BpsR - bpsR. optional.
   * @param {Integer} BpsW - bpsW. optional.
   * @param {Integer} IopsR - iopsR. optional.
   * @param {Integer} IopsW - iopsW. optional.
   * @param {Integer} Bps - bps. optional.
   * @param {Integer} Iops - iops. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyDiskBpsIops(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsModifyDiskBpsIops', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} DiskId - diskId. required.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {String} Status - status. optional.
   * @param {Boolean} Active - active. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyDiskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsModifyDiskStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EntityType - entityType. required.
   * @param {String} EntityKey - entityKey. required.
   * @param {String} EntityProperties - entityProperties. optional.
   * @param {Boolean} ReplaceAll - replaceAll. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyEntityConstraints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EntityType')) {
      throw new TypeError('parameter "EntityType" is required');
    }

    if (!hasOwnProperty(params, 'EntityKey')) {
      throw new TypeError('parameter "EntityKey" is required');
    }

    return this.request('OpsModifyEntityConstraints', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} AliUid - aliyun_idkp. required.
   * @param {String} RegionId - region_id. required.
   * @param {String} HouyiDiskId - disk_id. required.
   * @param {Integer} BpsR - disk_bps_r. optional.
   * @param {Integer} BpsW - disk_bps_w. optional.
   * @param {Integer} IopsR - disk_iops_r. optional.
   * @param {Integer} IopsW - disk_iops_w. optional.
   * @param {Integer} Bps - disk_bps. optional.
   * @param {Integer} Iops - disk_iops. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyHouyiDiskBpsIops(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiDiskId')) {
      throw new TypeError('parameter "HouyiDiskId" is required');
    }

    return this.request('OpsModifyHouyiDiskBpsIops', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OsTypeId - osTypeId. optional.
   * @param {String} ImageName - imageName. optional.
   * @param {Long} VirtBaseImageId - virtBaseImageId. optional.
   * @param {String} IsPublic - isPublic. optional.
   * @param {String} ImageCategory - imageCategory. optional.
   * @param {Integer} ImageSize - imageSize. optional.
   * @param {String} ImageVersion - version. optional.
   * @param {String} Description - remark. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('OpsModifyImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} ImageGroup - imageGroup. required.
   * @param {String} PublishState - publishState. required.
   * @param {RepeatList} ExtraData - extraDataKeyValueModels. optional.
   */
  opsModifyImagePublishState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageGroup')) {
      throw new TypeError('parameter "ImageGroup" is required');
    }

    if (!hasOwnProperty(params, 'PublishState')) {
      throw new TypeError('parameter "PublishState" is required');
    }

    return this.request('OpsModifyImagePublishState', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Cores - cores. optional.
   * @param {Integer} Mem - mem. optional.
   * @param {String} DataDisksJson - dataDisksJson. optional.
   * @param {String} ReleaseDiskId - releaseDiskId. optional.
   * @param {Integer} InternetRx - internetRx. optional.
   * @param {Integer} InternetTx - internetTx. optional.
   * @param {Integer} IntranetRx - intranetRx. optional.
   * @param {Integer} IntranetTx - intranetTx. optional.
   * @param {String} ModifyConfigItem - modifyConfigItem. optional.
   * @param {String} InstanceTypeName - instanceTypeName. optional.
   * @param {Boolean} Async - async. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyInstanceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsModifyInstanceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Reason - reason. required.
   * @param {Long} PrivateTxPps - privateTxPps. required.
   * @param {Long} PublicTxPps - publicTxPps. required.
   * @param {Long} PrivateRxPps - privateRxPps. required.
   * @param {Long} PublicRxPps - publicRxPps. required.
   * @param {Integer} IntranetRx - intranetRx. required.
   * @param {Integer} IntranetTx - intranetTx. required.
   * @param {Integer} InternetRx - internetRx. required.
   * @param {Integer} InternetTx - internetTx. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyInstanceFlowLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Reason')) {
      throw new TypeError('parameter "Reason" is required');
    }

    if (!hasOwnProperty(params, 'PrivateTxPps')) {
      throw new TypeError('parameter "PrivateTxPps" is required');
    }

    if (!hasOwnProperty(params, 'PublicTxPps')) {
      throw new TypeError('parameter "PublicTxPps" is required');
    }

    if (!hasOwnProperty(params, 'PrivateRxPps')) {
      throw new TypeError('parameter "PrivateRxPps" is required');
    }

    if (!hasOwnProperty(params, 'PublicRxPps')) {
      throw new TypeError('parameter "PublicRxPps" is required');
    }

    if (!hasOwnProperty(params, 'IntranetRx')) {
      throw new TypeError('parameter "IntranetRx" is required');
    }

    if (!hasOwnProperty(params, 'IntranetTx')) {
      throw new TypeError('parameter "IntranetTx" is required');
    }

    if (!hasOwnProperty(params, 'InternetRx')) {
      throw new TypeError('parameter "InternetRx" is required');
    }

    if (!hasOwnProperty(params, 'InternetTx')) {
      throw new TypeError('parameter "InternetTx" is required');
    }

    return this.request('OpsModifyInstanceFlowLimit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VncPassword - vncPassword. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyInstanceVncPasswd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VncPassword')) {
      throw new TypeError('parameter "VncPassword" is required');
    }

    return this.request('OpsModifyInstanceVncPasswd', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} OrderId - orderId. required.
   * @param {Integer} Status - status. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyOrderStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('OpsModifyOrderStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} Id - id. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} Status - status. optional.
   * @param {String} ExpireTimeStr - expireTimeStr. optional.
   * @param {String} TransitionTimeStr - transitionTimeStr. optional.
   * @param {String} TargetZoneId - targetZoneNo. optional.
   * @param {Boolean} IsSendVoucher - isSendVoucher. optional.
   * @param {String} TransitionType - transitionType. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyTransition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('OpsModifyTransition', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} SourceOwnerId - sourceOwnerId. required.
   * @param {String} WorkflowName - workflowName. required.
   * @param {String} SettingName - settingName. required.
   * @param {Integer} Value - value. optional.
   * @param {Integer} ExpireTime - expireTime. optional.
   * @param {Boolean} Wildcard - wildcard. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsModifyWorkflowUserSpecificSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceOwnerId')) {
      throw new TypeError('parameter "SourceOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowName')) {
      throw new TypeError('parameter "WorkflowName" is required');
    }

    if (!hasOwnProperty(params, 'SettingName')) {
      throw new TypeError('parameter "SettingName" is required');
    }

    return this.request('OpsModifyWorkflowUserSpecificSetting', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} IsoId - isoId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsMountIso(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IsoId')) {
      throw new TypeError('parameter "IsoId" is required');
    }

    return this.request('OpsMountIso', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ParamJsonString - paramJsonString. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsOrderAndRenewEcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ParamJsonString')) {
      throw new TypeError('parameter "ParamJsonString" is required');
    }

    return this.request('OpsOrderAndRenewEcs', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - zoneNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryActiveFlavors(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpsQueryActiveFlavors', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryAllClusterInventoryConfigUnderZone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('OpsQueryAllClusterInventoryConfigUnderZone', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryAllRegionStructure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsQueryAllRegionStructure', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryAvailableIsos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsQueryAvailableIsos', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryAvailableNcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsQueryAvailableNcs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} CommodityCode - commodityCode. required.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  opsQueryAvailableRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    return this.request('OpsQueryAvailableRegion', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} FeatureName - featureName. optional.
   */
  opsQueryBaseFeature(params = {}, options = {}) {
    return this.request('OpsQueryBaseFeature', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. required.
   */
  opsQueryClassicEcsVpcVport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('OpsQueryClassicEcsVpcVport', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} ClusterGroupNumericId - zoneGroupId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryClusterGroupStatusModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterGroupNumericId')) {
      throw new TypeError('parameter "ClusterGroupNumericId" is required');
    }

    return this.request('OpsQueryClusterGroupStatusModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClusterId - zoneNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryClusterInventoryConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpsQueryClusterInventoryConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} ClusterNumericId - zoneId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryClusterVendibleDataAndStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterNumericId')) {
      throw new TypeError('parameter "ClusterNumericId" is required');
    }

    return this.request('OpsQueryClusterVendibleDataAndStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} MachineId - machine_id. required.
   * @param {String} ExceptionName - exception_name. required.
   * @param {String} ExceptionTime - exception_time. optional.
   * @param {String} StartTime - start_time. optional.
   * @param {String} EndTime - end_time. optional.
   */
  opsQueryDetailMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MachineId')) {
      throw new TypeError('parameter "MachineId" is required');
    }

    if (!hasOwnProperty(params, 'ExceptionName')) {
      throw new TypeError('parameter "ExceptionName" is required');
    }

    return this.request('OpsQueryDetailMetric', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} DiagnoseId - diagnoseId. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} DiagnoseType - type. optional.
   * @param {String} DiagnoseAction - action. optional.
   * @param {String} ErrorCode - errorCode. optional.
   * @param {String} DiagnoseRequestId - diagnoseRequestId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  opsQueryDiagnoseInfo(params = {}, options = {}) {
    return this.request('OpsQueryDiagnoseInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - diskId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryDiskExtModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsQueryDiskExtModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryDiskModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsQueryDiskModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} TargetBandwidth - targetBandwidth. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryDownBandwidthCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetBandwidth')) {
      throw new TypeError('parameter "TargetBandwidth" is required');
    }

    return this.request('OpsQueryDownBandwidthCommodity', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. required.
   * @param {String} BizRegionId - regionNo. optional.
   * @param {RepeatList} VSwitchId - vSwitchIds. optional.
   * @param {String} NetworkType - ecsNetworkType. optional.
   * @param {String} TagKey - tagKey. optional.
   * @param {RepeatList} TagValue - tagValues. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} Metric - metric. required.
   */
  opsQueryEcsCountByCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('OpsQueryEcsCountByCondition', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} Bid - bid. optional.
   * @param {String} PermitType - permitType. optional.
   */
  opsQueryEcsPermit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('OpsQueryEcsPermit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Flavor - flavor. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryFlavor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Flavor')) {
      throw new TypeError('parameter "Flavor" is required');
    }

    return this.request('OpsQueryFlavor', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} InstanceType - flavor. required.
   * @param {String} NetworkType - networkType. required.
   * @param {String} PayType - payType. required.
   * @param {Integer} Amount - amount. required.
   * @param {String} AmountType - amountType. optional.
   * @param {Long} AliUid - aliUid. optional.
   * @param {Boolean} IoOptimized - ioOptimized. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryFlavorInventoryStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    return this.request('OpsQueryFlavorInventoryStatus', params, options);
  }

  /**
   * @param {String} SourceRegionId - sourceRegionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceTypeName - instanceTypeName. optional.
   * @param {Boolean} Migrate - canMigrateAcrossZone. optional.
   */
  opsQueryForIzResourceModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsQueryForIzResourceModify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - zoneNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryFragmentOfZone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpsQueryFragmentOfZone', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryImageBidRel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    return this.request('OpsQueryImageBidRel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryInstanceDetailModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsQueryInstanceDetailModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryInstanceModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsQueryInstanceModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryInstanceOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsQueryInstanceOrderInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClusterId - zoneNo. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryInventoryOfZone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpsQueryInventoryOfZone', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryLastNoRefundPurchase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsQueryLastNoRefundPurchase', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {Long} MigrationId - migrationId. optional.
   * @param {String} InstanceId - vmName. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryLiveMigrateEcsInstanceHouyiInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsQueryLiveMigrateEcsInstanceHouyiInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} MachineId - machine_id. required.
   * @param {String} ExceptionName - exception_name. optional.
   * @param {String} ExceptionTime - exception_time. optional.
   * @param {Integer} TimeRange - time_range. optional.
   * @param {Boolean} Expert - expert. optional.
   * @param {Boolean} Notify - notify. optional.
   */
  opsQueryMonitorException(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MachineId')) {
      throw new TypeError('parameter "MachineId" is required');
    }

    return this.request('OpsQueryMonitorException', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryMountedIso(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsQueryMountedIso', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryOpLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('OpsQueryOpLogs', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ActionName - actionName. optional.
   */
  opsQueryOpsRules(params = {}, options = {}) {
    return this.request('OpsQueryOpsRules', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryRegionId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('OpsQueryRegionId', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} DbId - id. optional.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} ResourceTransitId - resourceTransitId. optional.
   * @param {RepeatList} ResourceTypeList - resourceTypes. optional.
   * @param {String} FromRegionId - fromRegionNo. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {RepeatList} ResourceStatusList - status. optional.
   * @param {String} ResourceName - name. optional.
   * @param {Integer} PageNumber - start. optional.
   * @param {Integer} PageSize - count. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryResourceTransit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsQueryResourceTransit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} ClusterId - zone_id. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryServerInfoOfZone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpsQueryServerInfoOfZone', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} ClusterId - zone_id. required.
   * @param {Long} PageNo - page_no. optional.
   * @param {Long} PageSize - page_size. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryServerListOfZone(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpsQueryServerListOfZone', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQuerySystemImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('OpsQuerySystemImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneNo. optional.
   * @param {Integer} PageNumber - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} Id - id. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} GmtCreateStr - gmtCreateStr. optional.
   * @param {String} GmtModifiedStr - gmtModifiedStr. optional.
   * @param {String} IntranetIp - intranetIp. optional.
   * @param {String} InternetIp - internetIp. optional.
   * @param {RepeatList} Status - status. optional.
   * @param {String} ExpireTimeStr - expireTimeStr. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} TransitionType - transitionType. optional.
   * @param {String} TransitionTimeStr - transitionTimeStr. optional.
   * @param {String} MergeProgress - mergeProgress. optional.
   * @param {String} LoadProgress - loadProgress. optional.
   * @param {String} TransitionTimeStartStr - transitionTimeStartStr. optional.
   * @param {String} TransitionTimeEndStr - transitionTimeEndStr. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryTransition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('OpsQueryTransition', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryVncPasswd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsQueryVncPasswd', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} SourceOwnerId - sourceOwnerId. required.
   * @param {String} WorkflowName - workflowName. required.
   * @param {String} SettingName - settingName. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryWorkflowUserSpecificSettings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceOwnerId')) {
      throw new TypeError('parameter "SourceOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowName')) {
      throw new TypeError('parameter "WorkflowName" is required');
    }

    if (!hasOwnProperty(params, 'SettingName')) {
      throw new TypeError('parameter "SettingName" is required');
    }

    return this.request('OpsQueryWorkflowUserSpecificSettings', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} HouyiZoneId - zone_id. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryZoneFragment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiZoneId')) {
      throw new TypeError('parameter "HouyiZoneId" is required');
    }

    return this.request('OpsQueryZoneFragment', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} HouyiZoneId - zone_id. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryZoneInventory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiZoneId')) {
      throw new TypeError('parameter "HouyiZoneId" is required');
    }

    return this.request('OpsQueryZoneInventory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} HouyiZoneId - zone_id. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsQueryZoneSoldCpuMem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiZoneId')) {
      throw new TypeError('parameter "HouyiZoneId" is required');
    }

    return this.request('OpsQueryZoneSoldCpuMem', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - instanceIds. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsReInitDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsReInitDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} ForceStop - kill. optional.
   * @param {String} Mode - mode. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRebootInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsRebootInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} DiskId - instanceId. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRecoverDiskBpsIops(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsRecoverDiskBpsIops', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRecoverInstanceFlowLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsRecoverInstanceFlowLimit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRefreshInstanceAclRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsRefreshInstanceAclRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsReleaseDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsReleaseDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} DiskId - instanceId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsReleaseDiskSp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsReleaseDiskSp', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} AliUid - aliyun_idkp. required.
   * @param {String} RegionId - region_id. required.
   * @param {String} HouyiDiskId - disk_id. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsReleaseHouyiDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiDiskId')) {
      throw new TypeError('parameter "HouyiDiskId" is required');
    }

    return this.request('OpsReleaseHouyiDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} ResourceOwnerId - aliyunIdkp. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsReleaseHouyiVm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    return this.request('OpsReleaseHouyiVm', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} Force - force. optional.
   * @param {Boolean} Async - async. optional.
   * @param {String} Token - token. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsReleaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsReleaseInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} Force - force. optional.
   * @param {Boolean} Async - async. optional.
   * @param {String} Token - token. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsReleaseInstanceSp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsReleaseInstanceSp', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} IpAddress - ip. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsReleasePublicIpAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    return this.request('OpsReleasePublicIpAddress', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Duration - duration. required.
   * @param {String} Reason - reason. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRemedyInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Duration')) {
      throw new TypeError('parameter "Duration" is required');
    }

    return this.request('OpsRemedyInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceOwnerBid - resourceOwnerBid. optional.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} TagCategory - tagCategory. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {Tag} Tag - undefined. required.
   */
  opsRemoveTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'TagCategory')) {
      throw new TypeError('parameter "TagCategory" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('OpsRemoveTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Hostname - hostname. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRenameInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Hostname')) {
      throw new TypeError('parameter "Hostname" is required');
    }

    return this.request('OpsRenameInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} Password - passwd. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsReplaceSystemDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('OpsReplaceSystemDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} DiskId - diskId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsResetDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('OpsResetDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Password - passwd. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsResetPasswd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('OpsResetPasswd', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DiskId - instanceId. required.
   * @param {Integer} NewSize - newSize. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsResizeDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'NewSize')) {
      throw new TypeError('parameter "NewSize" is required');
    }

    return this.request('OpsResizeDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PlanId - planId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsResumeChangePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('OpsResumeChangePlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} DelayDays - delayDays. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRevertInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DelayDays')) {
      throw new TypeError('parameter "DelayDays" is required');
    }

    return this.request('OpsRevertInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} InstanceId - instance_id. required.
   * @param {String} SourceCidrIp - source_cidr_ip. optional.
   * @param {String} DestCidrIp - dest_cidr_ip. optional.
   * @param {String} SourcePortRange - source_port_range. optional.
   * @param {String} DestPortRange - dest_port_range. optional.
   * @param {String} IpProtocol - ip_protocol. optional.
   * @param {String} Policy - policy. optional.
   * @param {String} Priority - priority. required.
   * @param {String} Direction - direction. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRevokeInstanceAclRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('OpsRevokeInstanceAclRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} TargetIp - target_ip. required.
   * @param {String} SourceCidrIp - source_cidr_ip. optional.
   * @param {String} DestCidrIp - dest_cidr_ip. optional.
   * @param {String} SourcePortRange - source_port_range. optional.
   * @param {String} DestPortRange - dest_port_range. optional.
   * @param {String} IpProtocol - ip_protocol. optional.
   * @param {String} Policy - policy. optional.
   * @param {String} Priority - priority. required.
   * @param {String} Direction - direction. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRevokeIpAclRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TargetIp')) {
      throw new TypeError('parameter "TargetIp" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('OpsRevokeIpAclRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} PortRange - portRange. required.
   * @param {String} NicType - nic. optional.
   * @param {String} Policy - policy. optional.
   * @param {Integer} Priority - level. optional.
   * @param {String} SourceGroupId - sourceGroupNo. optional.
   * @param {Long} SourceGroupOwnerId - sourceGroupOwnerAliUid. optional.
   * @param {String} SourceCidrIp - sourceCidrIp. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRevokeSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'PortRange')) {
      throw new TypeError('parameter "PortRange" is required');
    }

    return this.request('OpsRevokeSecurityGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} PortRange - portRange. required.
   * @param {String} NicType - nic. optional.
   * @param {String} Policy - policy. optional.
   * @param {Integer} Priority - level. optional.
   * @param {String} DestGroupId - destGroupNo. optional.
   * @param {Long} DestGroupOwnerId - destGroupOwnerAliUid. optional.
   * @param {String} DestCidrIp - destCidrIp. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsRevokeSecurityGroupEgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'PortRange')) {
      throw new TypeError('parameter "PortRange" is required');
    }

    return this.request('OpsRevokeSecurityGroupEgress', params, options);
  }

  /**
   * @param {RepeatList} DataDisk - createDataDiskParams. optional.
   * @param {RepeatList} NetworkInterface - createEniParams. optional.
   * @param {RepeatList} SecurityGroupRule - securityGroupRules. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DefaultVpc - defaultVpc. optional.
   * @param {String} DeploymentSetId - deploymentSetId. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} ClusterId - zoneNo. optional.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {Integer} InternetMaxBandwidthIn - internetMaxBandwidthIn. optional.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {Integer} MinAmount - minAmount. optional.
   * @param {Integer} MaxAmount - maxAmount. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} HostName - hostName. optional.
   * @param {Boolean} UniqueSuffix - resourceNameSuffix. optional.
   * @param {String} Password - password. optional.
   * @param {Boolean} PasswordInherit - passwdInherit. optional.
   * @param {String} Description - description. optional.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {String} AutoReleaseTime - autoReleaseTime. optional.
   * @param {String} FromApp - fromApp. optional. default: Change.
   * @param {String} NodeControllerId - nodeControllerId. optional.
   * @param {String} RelationOrderId - relationOrderId. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {Float} SpotPriceLimit - spotPriceLimit. optional.
   * @param {String} SpotInterruptionBehavior - spotInterruptionBehavior. optional.
   * @param {String} RamRoleName - ramRoleName. optional.
   * @param {String} SecurityEnhancementStrategy - securityEnhancementStrategy. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} HpcClusterId - hpcClusterId. optional.
   * @param {String} RecycleBinResourceId - recycleBinResourceId. optional.
   * @param {String} DedicatedHostId - dedicatedHostId. optional.
   * @param {String} CreditSpecification - creditSpecification. optional.
   * @param {RepeatList} Ipv6Address - ipv6Addresses. optional.
   * @param {Integer} Ipv6AddressCount - ipv6AddressCount. optional.
   * @param {Boolean} DeletionProtection - deletionProtection. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {SystemDisk} SystemDisk - undefined. optional.
   */
  opsRunInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('OpsRunInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. required.
   * @param {Long} ImageOwner - imageOwner. optional.
   * @param {String} Bid2Privilege - bid2Privilege. optional.
   * @param {Boolean} AuthType - authType. optional.
   * @param {Long} AuthAliUid - authAliUid. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsSetImageBidRel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    return this.request('OpsSetImageBidRel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Mode - mode. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsStartInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsStartInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} ForceStop - kill. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsStopHouyiVm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    return this.request('OpsStopHouyiVm', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} ForceStop - kill. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsStopInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpsStopInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} PlanId - planId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsSuspendChangePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('OpsSuspendChangePlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   * @param {String} TargetSecurityGroupId - toSecurityGroupId. required.
   * @param {String} SourceOwnerId - sourceOwnerId. required.
   * @param {String} SourceOwnerBid - resourceOwnerBid. required.
   * @param {String} TargetAliUid - newOwnerId. required.
   * @param {String} TargetVSwitchId - toVSwitchId. optional.
   * @param {Boolean} KeepPublicIp - keepPublicIp. optional.
   * @param {RepeatList} PrivateIps - privateIps. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {Boolean} DryRun - dryRun. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {Long} TargetVSwitchAliUid - toVSwitchUid. optional.
   */
  opsTransferOwnership(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetSecurityGroupId')) {
      throw new TypeError('parameter "TargetSecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'SourceOwnerId')) {
      throw new TypeError('parameter "SourceOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'SourceOwnerBid')) {
      throw new TypeError('parameter "SourceOwnerBid" is required');
    }

    if (!hasOwnProperty(params, 'TargetAliUid')) {
      throw new TypeError('parameter "TargetAliUid" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('OpsTransferOwnership', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} IsoId - isoId. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsUnMountIso(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IsoId')) {
      throw new TypeError('parameter "IsoId" is required');
    }

    return this.request('OpsUnMountIso', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} IP - ip. required.
   * @param {String} LockType - lockType. required.
   * @param {String} LockReason - lockReason. required.
   */
  opsUnlockIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'IP')) {
      throw new TypeError('parameter "IP" is required');
    }

    if (!hasOwnProperty(params, 'LockType')) {
      throw new TypeError('parameter "LockType" is required');
    }

    if (!hasOwnProperty(params, 'LockReason')) {
      throw new TypeError('parameter "LockReason" is required');
    }

    return this.request('OpsUnlockIp', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} SrcBid - srcBid. required.
   * @param {String} TargetBid - targetBid. required.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} IsRollback - isRollback. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsUpdateBid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'SrcBid')) {
      throw new TypeError('parameter "SrcBid" is required');
    }

    if (!hasOwnProperty(params, 'TargetBid')) {
      throw new TypeError('parameter "TargetBid" is required');
    }

    return this.request('OpsUpdateBid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} DiagnoseId - diagnoseId. required.
   * @param {String} Solution - solutions. required.
   * @param {Integer} Status - status. required.
   */
  opsUpdateDiagnose(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiagnoseId')) {
      throw new TypeError('parameter "DiagnoseId" is required');
    }

    if (!hasOwnProperty(params, 'Solution')) {
      throw new TypeError('parameter "Solution" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('OpsUpdateDiagnose', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClusterId - zoneNo. required.
   * @param {Integer} Status - status. optional.
   * @param {String} InstanceConfigJson - instanceConfigJson. optional.
   * @param {String} DiskConfigJson - diskConfigJson. optional.
   * @param {String} FlavorsJson - flavorsJson. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsUpdateInventoryConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('OpsUpdateInventoryConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} NcId - ncId. required.
   * @param {String} HouyiZoneNo - zoneId. required.
   * @param {String} BizStatus - status. optional.
   * @param {String} Hostname - hostname. optional.
   * @param {String} LockType - lockType. optional.
   * @param {String} LockReason - lockReason. optional.
   * @param {Integer} Priority - priority. optional.
   * @param {Integer} Health - health. optional.
   * @param {Integer} CanRecover - canRecover. optional.
   * @param {String} PodId - podId. optional.
   * @param {String} AswId - aswId. optional.
   * @param {Integer} IsNcDown - isNcDown. optional.
   * @param {Integer} IsDeleted - isDeleted. optional.
   * @param {Integer} NcVecu - ncVecu. optional.
   * @param {Integer} NcGpu - ncGpu. optional.
   * @param {Integer} NcCpu - ncCpu. optional.
   * @param {Integer} NcMemory - ncMemory. optional.
   * @param {Integer} NcDiskIo1 - ncDiskIo1. optional.
   * @param {Integer} NcDiskIo2 - ncDiskIo2. optional.
   * @param {Long} NcPps - ncPps. optional.
   * @param {Long} NcBps - ncBps. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsUpdateNc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NcId')) {
      throw new TypeError('parameter "NcId" is required');
    }

    if (!hasOwnProperty(params, 'HouyiZoneNo')) {
      throw new TypeError('parameter "HouyiZoneNo" is required');
    }

    return this.request('OpsUpdateNc', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} NcIds - ncIds. required.
   * @param {String} TagName - tagName. required.
   * @param {String} TagValue - tagValue. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsUpdateNcTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NcIds')) {
      throw new TypeError('parameter "NcIds" is required');
    }

    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    return this.request('OpsUpdateNcTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - region_id. required.
   * @param {String} InstanceId - vm_name. required.
   * @param {String} CanRecover - can_recover. required.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsUpdateVmFeature(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CanRecover')) {
      throw new TypeError('parameter "CanRecover" is required');
    }

    return this.request('OpsUpdateVmFeature', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Cores - cores. required.
   * @param {Integer} Mem - mem. required.
   * @param {Integer} ExcessivePolicy - excessivePolicy. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsUpgradeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Cores')) {
      throw new TypeError('parameter "Cores" is required');
    }

    if (!hasOwnProperty(params, 'Mem')) {
      throw new TypeError('parameter "Mem" is required');
    }

    return this.request('OpsUpgradeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} ResourceOwnerId - resourceOwnerId. required.
   * @param {String} ImageUrl - imageUrl. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} MetaData - metaData. optional.
   * @param {String} Md5 - md5. optional.
   * @param {Long} OsTypeId - osTypeId. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsUploadSystemImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOwnerId')) {
      throw new TypeError('parameter "ResourceOwnerId" is required');
    }

    return this.request('OpsUploadSystemImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} TaskName - taskName. required.
   * @param {Long} MaxSize - maxSize. required.
   * @param {Long} ConcurrentSize - concurrentSize. required.
   * @param {RepeatList} ScheduleConfig - scheduleConfigs. optional.
   * @param {String} AuditParamStr - auditParamStr. optional.
   */
  opsWorkflowTaskConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TaskName')) {
      throw new TypeError('parameter "TaskName" is required');
    }

    if (!hasOwnProperty(params, 'MaxSize')) {
      throw new TypeError('parameter "MaxSize" is required');
    }

    if (!hasOwnProperty(params, 'ConcurrentSize')) {
      throw new TypeError('parameter "ConcurrentSize" is required');
    }

    return this.request('OpsWorkflowTaskConfig', params, options);
  }

}

module.exports = Client;
