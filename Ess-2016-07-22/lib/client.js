
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-22';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {InstanceId} InstanceId - undefined. required.
   */
  attachInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('AttachInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} SecurityGroupId - securityGroupId. required.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Integer} InternetMaxBandwidthIn - internetMaxBandwidthIn. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {String} ScalingConfigurationName - scalingConfigurationName. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {SystemDisk} SystemDisk - undefined. optional.
   * @param {DataDisk} DataDisk - undefined. optional.
   */
  createScalingConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('CreateScalingConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupName - scalingGroupName. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} MinSize - minSize. required.
   * @param {Integer} MaxSize - maxSize. required.
   * @param {Integer} DefaultCooldown - defaultCooldown. optional.
   * @param {String} LoadBalancerIds - loadBalancerIds. optional.
   * @param {String} DBInstanceIds - dbInstanceIds. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {RemovalPolicy} RemovalPolicy - undefined. optional.
   */
  createScalingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MinSize')) {
      throw new TypeError('parameter "MinSize" is required');
    }

    if (!hasOwnProperty(params, 'MaxSize')) {
      throw new TypeError('parameter "MaxSize" is required');
    }

    return this.request('CreateScalingGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} ScalingRuleName - scalingRuleName. optional.
   * @param {Integer} Cooldown - cooldown. optional.
   * @param {String} AdjustmentType - adjustmentType. required.
   * @param {Integer} AdjustmentValue - adjustmentValue. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ScheduledTaskName - scheduledTaskName. optional.
   * @param {String} Description - description. optional.
   * @param {String} ScheduledAction - scheduledAction. required.
   * @param {String} RecurrenceEndTime - recurrenceEndTime. optional.
   * @param {String} LaunchTime - launchTime. optional.
   * @param {String} RecurrenceType - recurrenceType. optional.
   * @param {String} RecurrenceValue - recurrenceValue. optional.
   * @param {Boolean} TaskEnabled - taskEnabled. optional.
   * @param {Integer} LaunchExpirationTime - launchExpirationTime. optional. default: 600.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createScheduledTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ScheduledAction')) {
      throw new TypeError('parameter "ScheduledAction" is required');
    }

    return this.request('CreateScheduledTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingConfigurationId - scalingConfigurationId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteScalingConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingConfigurationId')) {
      throw new TypeError('parameter "ScalingConfigurationId" is required');
    }

    return this.request('DeleteScalingConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {Boolean} ForceDelete - forceDelete. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteScalingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('DeleteScalingGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingRuleId - scalingRuleId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingRuleId')) {
      throw new TypeError('parameter "ScalingRuleId" is required');
    }

    return this.request('DeleteScalingRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScheduledTaskId - scheduledTaskId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteScheduledTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScheduledTaskId')) {
      throw new TypeError('parameter "ScheduledTaskId" is required');
    }

    return this.request('DeleteScheduledTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeAccountAttributes(params = {}, options = {}) {
    return this.request('DescribeAccountAttributes', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeCapacityHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeCapacityHistory', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeLimitation(params = {}, options = {}) {
    return this.request('DescribeLimitation', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ScalingGroupId - scalingGroupId. optional.
   * @param {String} StatusCode - statusCode. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {ScalingActivityId} ScalingActivityId - undefined. optional.
   */
  describeScalingActivities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeScalingActivities', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingActivityId - scalingActivityId. optional.
   */
  describeScalingActivityDetail(params = {}, options = {}) {
    return this.request('DescribeScalingActivityDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ScalingGroupId - scalingGroupId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {ScalingConfigurationId} ScalingConfigurationId - undefined. optional.
   * @param {ScalingConfigurationName} ScalingConfigurationName - undefined. optional.
   */
  describeScalingConfigurations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeScalingConfigurations', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {ScalingGroupId} ScalingGroupId - undefined. optional.
   * @param {ScalingGroupName} ScalingGroupName - undefined. optional.
   */
  describeScalingGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeScalingGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ScalingGroupId - ScalingGroupId. optional.
   * @param {String} ScalingConfigurationId - scalingConfigurationId. optional.
   * @param {String} HealthStatus - healthStatus. optional.
   * @param {String} LifecycleState - lifecycleState. optional.
   * @param {String} CreationType - creationType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {InstanceId} InstanceId - undefined. optional.
   */
  describeScalingInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeScalingInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ScalingGroupId - scalingGroupId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {ScalingRuleId} ScalingRuleId - undefined. optional.
   * @param {ScalingRuleName} ScalingRuleName - undefined. optional.
   * @param {ScalingRuleAri} ScalingRuleAri - undefined. optional.
   */
  describeScalingRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeScalingRules', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {ScheduledAction} ScheduledAction - undefined. optional.
   * @param {ScheduledTaskId} ScheduledTaskId - undefined. optional.
   * @param {ScheduledTaskName} ScheduledTaskName - undefined. optional.
   */
  describeScheduledTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeScheduledTasks', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {InstanceId} InstanceId - undefined. required.
   */
  detachInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DetachInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  disableScalingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('DisableScalingGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} ActiveScalingConfigurationId - scalingConfigurationId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {InstanceId} InstanceId - undefined. optional.
   */
  enableScalingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('EnableScalingGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingRuleAri - scalingRuleAri. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  executeScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingRuleAri')) {
      throw new TypeError('parameter "ScalingRuleAri" is required');
    }

    return this.request('ExecuteScalingRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} ScalingGroupName - scalingGroupName. optional.
   * @param {Integer} MinSize - minSize. optional.
   * @param {Integer} MaxSize - maxSize. optional.
   * @param {Integer} DefaultCooldown - defaultCooldown. optional.
   * @param {String} ActiveScalingConfigurationId - activeScalingConfigurationId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RemovalPolicy} RemovalPolicy - undefined. optional.
   */
  modifyScalingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('ModifyScalingGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingRuleId - scalingRuleId. required.
   * @param {String} ScalingRuleName - scalingRuleName. optional.
   * @param {Integer} Cooldown - cooldown. optional.
   * @param {String} AdjustmentType - adjustmentType. optional.
   * @param {Integer} AdjustmentValue - adjustmentValue. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingRuleId')) {
      throw new TypeError('parameter "ScalingRuleId" is required');
    }

    return this.request('ModifyScalingRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScheduledTaskId - scheduledTaskId. required.
   * @param {String} ScheduledTaskName - scheduledTaskName. optional.
   * @param {String} Description - description. optional.
   * @param {String} ScheduledAction - scheduledAction. optional.
   * @param {String} RecurrenceEndTime - recurrenceEndTime. optional.
   * @param {String} LaunchTime - launchTime. optional.
   * @param {String} RecurrenceType - recurrenceType. optional.
   * @param {String} RecurrenceValue - recurrenceValue. optional.
   * @param {Boolean} TaskEnabled - taskEnabled. optional.
   * @param {Integer} LaunchExpirationTime - launchExpirationTime. optional. default: 600.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyScheduledTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScheduledTaskId')) {
      throw new TypeError('parameter "ScheduledTaskId" is required');
    }

    return this.request('ModifyScheduledTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {InstanceId} InstanceId - undefined. required.
   */
  removeInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RemoveInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} Uid - uid. optional.
   */
  verifyAuthentication(params = {}, options = {}) {
    return this.request('VerifyAuthentication', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   */
  verifyUser(params = {}, options = {}) {
    return this.request('VerifyUser', params, options);
  }

}

module.exports = Client;
