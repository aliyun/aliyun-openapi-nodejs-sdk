
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-03-14';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} DedicatedHostName - dedicatedHostName. optional.
   * @param {String} DedicatedHostType - hostType. required.
   * @param {String} ActionOnMaintenance - actionOnMaintenance. optional.
   * @param {String} Description - description. optional.
   * @param {String} ChargeType - chargeType. optional.
   * @param {Integer} Quantity - quantity. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} PeriodUnit - periodUnit. optional.
   * @param {Boolean} AutoRenew - autoRenew. optional.
   * @param {Integer} AutoRenewPeriod - autoRenewPeriod. optional.
   * @param {String} AutoReleaseTime - autoReleaseTime. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {NetworkAttributes} NetworkAttributes - undefined. optional.
   */
  allocateDedicatedHosts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DedicatedHostType')) {
      throw new TypeError('parameter "DedicatedHostType" is required');
    }

    return this.request('AllocateDedicatedHosts', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} ZoneId - izNo. required.
   * @param {String} InstanceCount - instanceCount. required.
   * @param {String} CapacityReservationName - capacityReservationName. optional.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} NetworkType - networkType. required.
   * @param {String} InstancePlatform - instancePlatform. required.
   * @param {String} InstanceMatchCriteria - instanceMatchCriteria. required.
   * @param {String} EndDateType - endDateType. required.
   * @param {String} TimeSlot - timeSlot. optional.
   * @param {String} Description - description. optional.
   */
  createCapacityReservation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceCount')) {
      throw new TypeError('parameter "InstanceCount" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'InstancePlatform')) {
      throw new TypeError('parameter "InstancePlatform" is required');
    }

    if (!hasOwnProperty(params, 'InstanceMatchCriteria')) {
      throw new TypeError('parameter "InstanceMatchCriteria" is required');
    }

    if (!hasOwnProperty(params, 'EndDateType')) {
      throw new TypeError('parameter "EndDateType" is required');
    }

    return this.request('CreateCapacityReservation', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Subscription - resourceTypeSubscribeParams. required.
   */
  createConfigLogSubscriptions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Subscription')) {
      throw new TypeError('parameter "Subscription" is required');
    }

    return this.request('CreateConfigLogSubscriptions', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {Integer} Size - size. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} Category - category. optional.
   * @param {String} DiskName - diskName. optional.
   * @param {String} Description - description. optional.
   * @param {Boolean} Encrypted - encrypted. optional.
   * @param {Integer} Amount - amount. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} KMSKeyId - kmsKeyId. optional.
   */
  createDisks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('CreateDisks', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} QosGroupName - qosGroupName. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} Rx - rx. required.
   * @param {Integer} RxPps - rxPps. required.
   * @param {Integer} Tx - tx. required.
   * @param {Integer} TxPps - txPps. required.
   */
  createEniQosGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QosGroupName')) {
      throw new TypeError('parameter "QosGroupName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Rx')) {
      throw new TypeError('parameter "Rx" is required');
    }

    if (!hasOwnProperty(params, 'RxPps')) {
      throw new TypeError('parameter "RxPps" is required');
    }

    if (!hasOwnProperty(params, 'Tx')) {
      throw new TypeError('parameter "Tx" is required');
    }

    if (!hasOwnProperty(params, 'TxPps')) {
      throw new TypeError('parameter "TxPps" is required');
    }

    return this.request('CreateEniQosGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OrderType - orderType. required.
   * @param {String} ChargeType - chargeType. required.
   * @param {String} Commodity - commodity. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DedicatedHostId - dedicatedHostId. optional.
   * @param {Boolean} AsyncPattern - asyncPattern. optional.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'ChargeType')) {
      throw new TypeError('parameter "ChargeType" is required');
    }

    if (!hasOwnProperty(params, 'Commodity')) {
      throw new TypeError('parameter "Commodity" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} VolumeName - volumeName. optional.
   * @param {Integer} Size - size. optional.
   * @param {Integer} Amount - amount. optional.
   * @param {String} VolumeCategory - category. optional.
   * @param {String} Description - description. optional.
   * @param {Boolean} VolumeEncrypted - encrypted. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {String} KMSKeyId - kmsKeyId. optional.
   */
  createVolumes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('CreateVolumes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Name - names. required.
   */
  deleteConfigLogSubscriptions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteConfigLogSubscriptions', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} QosGroupName - qosGroupName. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteEniQosGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QosGroupName')) {
      throw new TypeError('parameter "QosGroupName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteEniQosGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {RepeatList} AttributeName - attributeNames. optional.
   */
  describeAccountAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeAccountAttributes', params, options);
  }

  /**
   * @param {RepeatList} Filter - filters. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeAccountLimits(params = {}, options = {}) {
    return this.request('DescribeAccountLimits', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} PriceUnit - priceUnit. required.
   * @param {Boolean} Verbose - verbose. optional. default: false.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBandwidthPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PriceUnit')) {
      throw new TypeError('parameter "PriceUnit" is required');
    }

    return this.request('DescribeBandwidthPrice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} RegionId - regionNo. required.
   * @param {String} CapacityReservationIds - capacityReservationIds. optional.
   * @param {String} CapacityReservationName - capacityReservationName. optional.
   * @param {String} Status - status. optional.
   * @param {String} ZoneId - izNo. optional.
   */
  describeCapacityReservations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCapacityReservations', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ChronologicalOrder - chronologicalOrder. optional.
   * @param {String} StartTime - earlierTime. optional.
   * @param {String} EndTime - laterTime. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeConfigLogHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('DescribeConfigLogHistory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Name - names. optional.
   * @param {RepeatList} ResourceType - resourceTypes. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeConfigLogSubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeConfigLogSubscription', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceIds - instanceIds. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. optional.
   */
  describeDedicatedHostAutoRenew(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDedicatedHostAutoRenew', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DedicatedHostType - hostType. optional.
   * @param {String} SupportInstanceTypeFamily - supportInstanceTypeFamily. optional.
   * @param {String} Generation - generation. optional.
   */
  describeDedicatedHostTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDedicatedHostTypes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} DedicatedHostIds - dedicatedHostIds. optional.
   * @param {String} DedicatedHostName - dedicatedHostName. optional.
   * @param {String} Status - status. optional.
   * @param {String} DedicatedHostType - dedicatedHostType. optional.
   * @param {String} LockReason - lockReason. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  describeDedicatedHosts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDedicatedHosts', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} QosGroupName - qosGroupName. required.
   * @param {String} RegionId - regionId. required.
   */
  describeEniQosGroupInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QosGroupName')) {
      throw new TypeError('parameter "QosGroupName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeEniQosGroupInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {RepeatList} InstanceIds - instanceIds. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeInstanceNeedReboot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstanceNeedReboot', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} appKey - appKey. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} KMSKeyId - kmsKeyId. required.
   */
  describeKMSKeyAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'KMSKeyId')) {
      throw new TypeError('parameter "KMSKeyId" is required');
    }

    return this.request('DescribeKMSKeyAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} appKey - appKey. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNumber - pageNo. optional.
   */
  describeKMSKeys(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeKMSKeys', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} appKey - appKey. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} RegionId - regionId. required.
   */
  describeLinkedKMSKeys(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeLinkedKMSKeys', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} DefaultVpc - defaultVpc. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} OrderType - orderType. required.
   * @param {String} Commodity - commodity. required.
   * @param {Boolean} Verbose - verbose. optional. default: false.
   * @param {Boolean} NeedSpotPrice - needSpotPrice. optional. default: false.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'Commodity')) {
      throw new TypeError('parameter "Commodity" is required');
    }

    return this.request('DescribePrice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} RegionId - regionNo. required.
   * @param {RepeatList} ReservedInstanceId - instanceIds. optional.
   */
  describeReservedInstancePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeReservedInstancePrice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. optional.
   * @param {RepeatList} ReservedInstanceId - instanceIds. optional.
   * @param {String} ReservedInstanceName - riName. optional.
   * @param {RepeatList} Status - statusStrList. optional.
   * @param {String} LockReason - lockReason. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} InstanceTypeFamily - instanceTypeFamily. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} OfferingType - offeringType. optional.
   * @param {String} ExpiredTime - expireUtcTime. optional.
   */
  describeReservedInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeReservedInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} TemplateTag - tagKeyValueParams. optional.
   * @param {String} Product - product. optional.
   * @param {String} ResourceType - resourceType. optional.
   */
  describeResourceFilterAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeResourceFilterAttributes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} TemplateTag - tagKeyValueParams. optional.
   * @param {String} Product - product. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} Global - global. optional.
   * @param {String} AttributeName - attributeName. optional.
   * @param {String} AttributeValue - attributeValue. required.
   * @param {Integer} MaxItems - maxItems. optional.
   */
  describeResourceRecommendFilters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AttributeValue')) {
      throw new TypeError('parameter "AttributeValue" is required');
    }

    return this.request('DescribeResourceRecommendFilters', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} TemplateTag - tagKeyValueParams. optional.
   * @param {String} Product - product. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} Global - global. optional.
   * @param {RepeatList} Filter - filters. optional.
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   * @param {String} Keyword - keyword. optional.
   */
  describeResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   */
  getLaunchTemplateData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetLaunchTemplateData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} QosGroupName - qosGroupName. required.
   * @param {String} NetworkInterfaceId - eniNo. required.
   * @param {String} RegionId - regionId. required.
   */
  joinEniQosGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QosGroupName')) {
      throw new TypeError('parameter "QosGroupName" is required');
    }

    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('JoinEniQosGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} NetworkInterfaceId - eniNo. required.
   * @param {String} RegionId - regionId. required.
   */
  leaveEniQosGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('LeaveEniQosGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DedicatedHostId - dedicatedHostId. required.
   * @param {String} DedicatedHostName - dedicatedHostName. optional.
   * @param {String} Description - description. optional.
   * @param {String} ActionOnMaintenance - actionOnMaintenance. optional.
   * @param {NetworkAttributes} NetworkAttributes - undefined. optional.
   */
  modifyDedicatedHostAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DedicatedHostId')) {
      throw new TypeError('parameter "DedicatedHostId" is required');
    }

    return this.request('ModifyDedicatedHostAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AutoReleaseTime - autoReleaseTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDedicatedHostAutoReleaseTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyDedicatedHostAutoReleaseTime', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceIds - instanceIds. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {String} PeriodUnit - periodUnit. optional.
   * @param {Boolean} AutoRenew - autoRenew. optional.
   * @param {String} RenewalStatus - renewalStatus. optional.
   */
  modifyDedicatedHostAutoRenewAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyDedicatedHostAutoRenewAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} QosGroupName - qosGroupName. required.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} Rx - rx. required.
   * @param {Integer} RxPps - rxPps. required.
   * @param {Integer} Tx - tx. required.
   * @param {Integer} TxPps - txPps. required.
   */
  modifyEniQosGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QosGroupName')) {
      throw new TypeError('parameter "QosGroupName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Rx')) {
      throw new TypeError('parameter "Rx" is required');
    }

    if (!hasOwnProperty(params, 'RxPps')) {
      throw new TypeError('parameter "RxPps" is required');
    }

    if (!hasOwnProperty(params, 'Tx')) {
      throw new TypeError('parameter "Tx" is required');
    }

    if (!hasOwnProperty(params, 'TxPps')) {
      throw new TypeError('parameter "TxPps" is required');
    }

    return this.request('ModifyEniQosGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} DedicatedHostId - dedicatedHostId. required.
   */
  modifyInstanceDeployment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DedicatedHostId')) {
      throw new TypeError('parameter "DedicatedHostId" is required');
    }

    return this.request('ModifyInstanceDeployment', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {RepeatList} ReservedInstanceId - reservedInstanceIds. required.
   * @param {RepeatList} Configuration - createParams. optional.
   */
  modifyReservedInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ReservedInstanceId')) {
      throw new TypeError('parameter "ReservedInstanceId" is required');
    }

    return this.request('ModifyReservedInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} ReservedInstanceName - riName. optional.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} Scope - scope. optional.
   * @param {Integer} InstanceAmount - instanceAmount. optional.
   * @param {String} OfferingType - offeringType. optional.
   * @param {String} Description - description. optional.
   * @param {String} ChargeType - chargeType. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} PeriodUnit - periodUnit. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   */
  purchaseReservedInstancesOffering(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('PurchaseReservedInstancesOffering', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} NetworkInterfaceId - eniNo. required.
   * @param {String} RegionId - regionId. required.
   */
  queryEniQosGroupByEni(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('QueryEniQosGroupByEni', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RegionId - regionId. required.
   */
  queryEniQosGroupByInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('QueryEniQosGroupByInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CapacityReservationId - capacityReservationId. required.
   * @param {String} Token - token. optional.
   */
  releaseCapacityReservation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CapacityReservationId')) {
      throw new TypeError('parameter "CapacityReservationId" is required');
    }

    return this.request('ReleaseCapacityReservation', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DedicatedHostId - dedicatedHostId. required.
   * @param {String} Token - token. optional.
   * @param {Boolean} Force - force. optional.
   */
  releaseDedicatedHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DedicatedHostId')) {
      throw new TypeError('parameter "DedicatedHostId" is required');
    }

    return this.request('ReleaseDedicatedHost', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DedicatedHostIds - dedicatedHostIds. required.
   * @param {String} RegionId - regionNo. required.
   * @param {Integer} Period - period. required.
   * @param {String} PeriodUnit - periodUnit. optional.
   * @param {String} BusinessInfo - businessInfo. optional.
   * @param {String} FromApp - fromApp. optional.
   * @param {String} ClientToken - clientToken. optional.
   */
  renewDedicatedHosts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DedicatedHostIds')) {
      throw new TypeError('parameter "DedicatedHostIds" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('RenewDedicatedHosts', params, options);
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
   * @param {String} FromApp - fromApp. optional.
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
   * @param {Boolean} DryRun - dryRun. optional.
   * @param {String} DedicatedHostId - dedicatedHostId. optional.
   * @param {String} CreditSpecification - creditSpecification. optional.
   * @param {RepeatList} Ipv6Address - ipv6Addresses. optional.
   * @param {Integer} Ipv6AddressCount - ipv6AddressCount. optional.
   * @param {Boolean} DeletionProtection - deletionProtection. optional.
   * @param {String} CapacityReservationId - capacityReservationId. optional.
   * @param {String} CapacityReservationPreference - capacityReservationPreference. optional.
   * @param {SystemDisk} SystemDisk - undefined. optional.
   */
  runInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('RunInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AutoReleaseTime - autoReleaseTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  setInstanceAutoReleaseTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('SetInstanceAutoReleaseTime', params, options);
  }

}

module.exports = Client;
