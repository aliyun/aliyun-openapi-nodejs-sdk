
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2014-08-28';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} DBInstance - dBInstances. required.
   * @param {Boolean} ForceAttach - forceAttach. optional. default: false.
   */
  attachDBInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstance')) {
      throw new TypeError('parameter "DBInstance" is required');
    }

    return this.request('AttachDBInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {InstanceId} InstanceId - undefined. required.
   * @param {LoadBalancerWeight} LoadBalancerWeight - undefined. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} LoadBalancer - loadBalancers. required.
   * @param {Boolean} ForceAttach - forceAttach. optional. default: false.
   */
  attachLoadBalancers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancer')) {
      throw new TypeError('parameter "LoadBalancer" is required');
    }

    return this.request('AttachLoadBalancers', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} VServerGroup - vServerGroups. required.
   * @param {Boolean} ForceAttach - forceAttach. optional. default: false.
   */
  attachVServerGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'VServerGroup')) {
      throw new TypeError('parameter "VServerGroup" is required');
    }

    return this.request('AttachVServerGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} LifecycleHookId - lifecycleHookId. required.
   * @param {String} LifecycleActionToken - lifecycleActionToken. required.
   * @param {String} LifecycleActionResult - lifecycleActionResult. optional.
   */
  completeLifecycleAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LifecycleHookId')) {
      throw new TypeError('parameter "LifecycleHookId" is required');
    }

    if (!hasOwnProperty(params, 'LifecycleActionToken')) {
      throw new TypeError('parameter "LifecycleActionToken" is required');
    }

    return this.request('CompleteLifecycleAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {RepeatList} AlarmAction - alarmActions. required.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} MetricName - metricName. required.
   * @param {String} MetricType - metricType. optional. default: system.
   * @param {Integer} Period - period. optional. default: 300.
   * @param {String} Statistics - statistics. optional. default: Average.
   * @param {Float} Threshold - threshold. required.
   * @param {String} ComparisonOperator - comparisonOperator. optional. default: >=.
   * @param {Integer} EvaluationCount - evaluationCount. optional. default: 3.
   * @param {RepeatList} Dimension - dimensions. optional.
   * @param {Integer} GroupId - groupId. optional.
   */
  createAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AlarmAction')) {
      throw new TypeError('parameter "AlarmAction" is required');
    }

    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    return this.request('CreateAlarm', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} LifecycleHookName - lifecycleHookName. optional.
   * @param {String} LifecycleTransition - lifecycleTransition. required.
   * @param {String} DefaultResult - defaultResult. optional.
   * @param {Integer} HeartbeatTimeout - heartbeatTimeout. optional.
   * @param {String} NotificationMetadata - notificationMetadata. optional.
   * @param {String} NotificationArn - notificationArn. optional.
   * @param {RepeatList} LifecycleHook - createLifecycleHookRequests. optional.
   */
  createLifecycleHook(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'LifecycleTransition')) {
      throw new TypeError('parameter "LifecycleTransition" is required');
    }

    return this.request('CreateLifecycleHook', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} NotificationArn - notificationArn. required.
   * @param {RepeatList} NotificationType - notificationTypes. required.
   */
  createNotificationConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'NotificationArn')) {
      throw new TypeError('parameter "NotificationArn" is required');
    }

    if (!hasOwnProperty(params, 'NotificationType')) {
      throw new TypeError('parameter "NotificationType" is required');
    }

    return this.request('CreateNotificationConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} ImageId - imageId. optional.
   * @param {String} ImageName - imageName. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {Integer} Cpu - cpu. optional.
   * @param {Integer} Memory - memory. optional.
   * @param {String} DeploymentSetId - deploymentSetId. optional.
   * @param {RepeatList} InstanceTypes - instanceTypes. optional.
   * @param {String} SecurityGroupId - securityGroupId. required.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Integer} InternetMaxBandwidthIn - internetMaxBandwidthIn. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {String} ScalingConfigurationName - scalingConfigurationName. optional.
   * @param {RepeatList} DataDisk - dataDisks. optional.
   * @param {Integer} LoadBalancerWeight - loadBalancerWeight. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {String} RamRoleName - ramRoleName. optional.
   * @param {String} SecurityEnhancementStrategy - securityEnhancementStrategy. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {Boolean} PasswordInherit - passwordInherit. optional.
   * @param {RepeatList} SpotPriceLimit - spotPriceLimit. optional.
   * @param {String} Password - password. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {SystemDisk} SystemDisk - undefined. optional.
   */
  createScalingConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('CreateScalingConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupName - scalingGroupName. optional.
   * @param {String} LaunchTemplateId - launchTemplateId. optional.
   * @param {String} LaunchTemplateVersion - launchTemplateVersion. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} MinSize - minSize. required.
   * @param {Integer} MaxSize - maxSize. required.
   * @param {Integer} DefaultCooldown - defaultCooldown. optional.
   * @param {String} LoadBalancerIds - loadBalancerIds. optional.
   * @param {String} DBInstanceIds - dbInstanceIds. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {RepeatList} VSwitchIds - vSwitchIds. optional.
   * @param {String} MultiAZPolicy - multiAZPolicy. optional.
   * @param {String} HealthCheckType - healthCheckType. optional.
   * @param {RepeatList} LifecycleHook - createLifecycleHookRequests. optional.
   * @param {RepeatList} VServerGroup - vServerGroups. optional.
   * @param {String} ScalingPolicy - scalingPolicy. optional.
   * @param {String} ClientToken - clientToken. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} ScalingRuleName - scalingRuleName. optional.
   * @param {Integer} Cooldown - cooldown. optional.
   * @param {Integer} MinAdjustmentMagnitude - minAdjustmentMagnitude. optional.
   * @param {String} AdjustmentType - adjustmentType. optional.
   * @param {Integer} AdjustmentValue - adjustmentValue. optional.
   * @param {String} ScalingRuleType - scalingRuleType. optional. default: SimpleScalingRule.
   * @param {Integer} EstimatedInstanceWarmup - estimatedInstanceWarmup. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Float} TargetValue - targetValue. optional.
   * @param {Boolean} DisableScaleIn - disableScaleIn. optional. default: false.
   * @param {RepeatList} StepAdjustment - stepAdjustments. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('CreateScalingRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingConfigurationId - scalingConfigurationId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deactivateScalingConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingConfigurationId')) {
      throw new TypeError('parameter "ScalingConfigurationId" is required');
    }

    return this.request('DeactivateScalingConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AlarmTaskId - alarmTaskId. required.
   */
  deleteAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AlarmTaskId')) {
      throw new TypeError('parameter "AlarmTaskId" is required');
    }

    return this.request('DeleteAlarm', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} LifecycleHookId - lifecycleHookId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. optional.
   * @param {String} LifecycleHookName - lifecycleHookName. optional.
   */
  deleteLifecycleHook(params = {}, options = {}) {
    return this.request('DeleteLifecycleHook', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} NotificationArn - notificationArn. required.
   */
  deleteNotificationConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'NotificationArn')) {
      throw new TypeError('parameter "NotificationArn" is required');
    }

    return this.request('DeleteNotificationConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   */
  describeAccountAttributes(params = {}, options = {}) {
    return this.request('DescribeAccountAttributes', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ScalingGroupId - scalingGroupId. optional.
   * @param {String} AlarmTaskId - alarmTaskId. optional.
   * @param {String} State - state. optional.
   * @param {Boolean} IsEnable - isEnable. optional.
   * @param {String} MetricType - metricType. optional. default: system.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeAlarms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeAlarms', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   */
  describeAlertConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('DescribeAlertConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. optional.
   * @param {String} LifecycleHookName - lifecycleHookName. optional.
   * @param {RepeatList} LifecycleHookId - lifecycleHookIds. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeLifecycleHooks(params = {}, options = {}) {
    return this.request('DescribeLifecycleHooks', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   */
  describeLimitation(params = {}, options = {}) {
    return this.request('DescribeLimitation', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   */
  describeNotificationConfigurations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('DescribeNotificationConfigurations', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   */
  describeNotificationTypes(params = {}, options = {}) {
    return this.request('DescribeNotificationTypes', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingActivityId - scalingActivityId. optional.
   */
  describeScalingActivityDetail(params = {}, options = {}) {
    return this.request('DescribeScalingActivityDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ScalingGroupName - scalingGroupName. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ScalingGroupId - scalingGroupId. optional.
   * @param {String} ScalingRuleType - scalingRuleType. optional.
   * @param {Boolean} ShowAlarmRules - showAlarmRules. optional. default: false.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Boolean} ForceDelete - forceDelete. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} UserId - userId. required.
   */
  describeUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DescribeUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} DBInstance - dBInstances. required.
   * @param {Boolean} ForceDetach - forceDetach. optional. default: false.
   */
  detachDBInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'DBInstance')) {
      throw new TypeError('parameter "DBInstance" is required');
    }

    return this.request('DetachDBInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} LoadBalancer - loadBalancers. required.
   * @param {Boolean} ForceDetach - forceDetach. optional. default: false.
   */
  detachLoadBalancers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancer')) {
      throw new TypeError('parameter "LoadBalancer" is required');
    }

    return this.request('DetachLoadBalancers', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} VServerGroup - vServerGroups. required.
   * @param {Boolean} ForceDetach - forceDetach. optional. default: false.
   */
  detachVServerGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'VServerGroup')) {
      throw new TypeError('parameter "VServerGroup" is required');
    }

    return this.request('DetachVServerGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AlarmTaskId - alarmTaskId. required.
   */
  disableAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AlarmTaskId')) {
      throw new TypeError('parameter "AlarmTaskId" is required');
    }

    return this.request('DisableAlarm', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AlarmTaskId - alarmTaskId. required.
   */
  enableAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AlarmTaskId')) {
      throw new TypeError('parameter "AlarmTaskId" is required');
    }

    return this.request('EnableAlarm', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} ActiveScalingConfigurationId - scalingConfigurationId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} LaunchTemplateId - launchTemplateId. optional.
   * @param {String} LaunchTemplateVersion - launchTemplateVersion. optional.
   * @param {InstanceId} InstanceId - undefined. optional.
   * @param {LoadBalancerWeight} LoadBalancerWeight - undefined. optional.
   */
  enableScalingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('EnableScalingGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  enterStandby(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('EnterStandby', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingRuleAri - scalingRuleAri. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Float} BreachThreshold - breachThreshold. optional.
   * @param {Float} MetricValue - metricValue. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  executeScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingRuleAri')) {
      throw new TypeError('parameter "ScalingRuleAri" is required');
    }

    return this.request('ExecuteScalingRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  exitStandby(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ExitStandby', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AlarmTaskId - alarmTaskId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {RepeatList} AlarmAction - alarmActions. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {String} MetricType - metricType. optional. default: system.
   * @param {Integer} Period - period. optional.
   * @param {String} Statistics - statistics. optional.
   * @param {Float} Threshold - threshold. optional.
   * @param {String} ComparisonOperator - comparisonOperator. optional.
   * @param {Integer} EvaluationCount - evaluationCount. optional.
   * @param {Integer} GroupId - groupId. optional.
   * @param {RepeatList} Dimension - dimensions. optional.
   */
  modifyAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AlarmTaskId')) {
      throw new TypeError('parameter "AlarmTaskId" is required');
    }

    return this.request('ModifyAlarm', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {Integer} SuccessConfig - success. required.
   * @param {Integer} FailConfig - fail. required.
   * @param {Integer} RejectConfig - reject. required.
   */
  modifyAlertConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'SuccessConfig')) {
      throw new TypeError('parameter "SuccessConfig" is required');
    }

    if (!hasOwnProperty(params, 'FailConfig')) {
      throw new TypeError('parameter "FailConfig" is required');
    }

    if (!hasOwnProperty(params, 'RejectConfig')) {
      throw new TypeError('parameter "RejectConfig" is required');
    }

    return this.request('ModifyAlertConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} LifecycleHookId - lifecycleHookId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. optional.
   * @param {String} LifecycleHookName - lifecycleHookName. optional.
   * @param {String} DefaultResult - defaultResult. optional.
   * @param {Integer} HeartbeatTimeout - heartbeatTimeout. optional.
   * @param {String} LifecycleTransition - lifecycleTransition. optional.
   * @param {String} NotificationMetadata - notificationMetadata. optional.
   * @param {String} NotificationArn - notificationArn. optional.
   */
  modifyLifecycleHook(params = {}, options = {}) {
    return this.request('ModifyLifecycleHook', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} NotificationArn - notificationArn. required.
   * @param {RepeatList} NotificationType - notificationTypes. required.
   */
  modifyNotificationConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'NotificationArn')) {
      throw new TypeError('parameter "NotificationArn" is required');
    }

    if (!hasOwnProperty(params, 'NotificationType')) {
      throw new TypeError('parameter "NotificationType" is required');
    }

    return this.request('ModifyNotificationConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ScalingConfigurationId - scalingConfigurationId. required.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {RepeatList} DataDisk - dataDisks. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {RepeatList} SpotPriceLimit - spotPriceLimit. optional.
   * @param {String} ScalingConfigurationName - scalingConfigurationName. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} ImageName - imageName. optional.
   * @param {RepeatList} InstanceTypes - instanceTypes. optional.
   * @param {Integer} Cpu - cpu. optional.
   * @param {Integer} Memory - memory. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {Integer} LoadBalancerWeight - loadBalancerWeight. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {String} RamRoleName - ramRoleName. optional.
   * @param {Boolean} PasswordInherit - passwordInherit. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} DeploymentSetId - deploymentSetId. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {Boolean} Override - override. optional. default: false.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {SystemDisk} SystemDisk - undefined. optional.
   */
  modifyScalingConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingConfigurationId')) {
      throw new TypeError('parameter "ScalingConfigurationId" is required');
    }

    return this.request('ModifyScalingConfiguration', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} ScalingGroupName - scalingGroupName. optional.
   * @param {Integer} MinSize - minSize. optional.
   * @param {Integer} MaxSize - maxSize. optional.
   * @param {RepeatList} VSwitchIds - vSwitchIds. optional.
   * @param {Integer} DefaultCooldown - defaultCooldown. optional.
   * @param {String} ActiveScalingConfigurationId - activeScalingConfigurationId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} HealthCheckType - healthCheckType. optional.
   * @param {String} LaunchTemplateId - launchTemplateId. optional.
   * @param {String} LaunchTemplateVersion - launchTemplateVersion. optional.
   * @param {RemovalPolicy} RemovalPolicy - undefined. optional.
   */
  modifyScalingGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('ModifyScalingGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingRuleId - scalingRuleId. required.
   * @param {String} ScalingRuleName - scalingRuleName. optional.
   * @param {Integer} Cooldown - cooldown. optional.
   * @param {Integer} MinAdjustmentMagnitude - minAdjustmentMagnitude. optional.
   * @param {String} AdjustmentType - adjustmentType. optional.
   * @param {Integer} AdjustmentValue - adjustmentValue. optional.
   * @param {Integer} EstimatedInstanceWarmup - estimatedInstanceWarmup. optional.
   * @param {String} MetricName - metricName. optional.
   * @param {Float} TargetValue - targetValue. optional.
   * @param {Boolean} DisableScaleIn - disableScaleIn. optional.
   * @param {RepeatList} StepAdjustment - stepAdjustments. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyScalingRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingRuleId')) {
      throw new TypeError('parameter "ScalingRuleId" is required');
    }

    return this.request('ModifyScalingRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  rebalanceInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    return this.request('RebalanceInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} lifecycleHookId - lifecycleHookId. required.
   * @param {String} lifecycleActionToken - lifecycleActionToken. required.
   * @param {Integer} heartbeatTimeout - heartbeatTimeout. optional.
   */
  recordLifecycleActionHeartbeat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'lifecycleHookId')) {
      throw new TypeError('parameter "lifecycleHookId" is required');
    }

    if (!hasOwnProperty(params, 'lifecycleActionToken')) {
      throw new TypeError('parameter "lifecycleActionToken" is required');
    }

    return this.request('RecordLifecycleActionHeartbeat', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RemovePolicy - removePolicy. optional.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} ScalingGroupId - scalingGroupId. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   * @param {Boolean} ProtectedFromScaleIn - protectedFromScaleIn. required.
   */
  setInstancesProtection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScalingGroupId')) {
      throw new TypeError('parameter "ScalingGroupId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProtectedFromScaleIn')) {
      throw new TypeError('parameter "ProtectedFromScaleIn" is required');
    }

    return this.request('SetInstancesProtection', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} Uid - uid. optional.
   */
  verifyAuthentication(params = {}, options = {}) {
    return this.request('VerifyAuthentication', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  verifyUser(params = {}, options = {}) {
    return this.request('VerifyUser', params, options);
  }

}

module.exports = Client;
