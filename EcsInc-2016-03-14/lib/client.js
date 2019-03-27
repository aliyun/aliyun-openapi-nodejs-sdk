
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
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerUid - tagUid. required.
   * @param {String} OwnerBid - tagBid. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} RelatedKey - relatedKey. required.
   * @param {String} TagValue - tagValue. optional.
   */
  addSystemTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerUid')) {
      throw new TypeError('parameter "OwnerUid" is required');
    }

    if (!hasOwnProperty(params, 'RelatedKey')) {
      throw new TypeError('parameter "RelatedKey" is required');
    }

    return this.request('AddSystemTag', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ArgeementType - type. required.
   * @param {String} Bid - bid. required.
   * @param {Long} AliUid - aliUid. required.
   */
  cancelAgreement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ArgeementType')) {
      throw new TypeError('parameter "ArgeementType" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CancelAgreement', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EventId - eventId. required.
   */
  cancelSystemEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('CancelSystemEvent', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} NetworkType - networkType. required.
   * @param {String} IoOptimized - ioOptimized. optional.
   */
  checkImageSupportCloudinit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    return this.request('CheckImageSupportCloudinit', params, options);
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
  checkIsDefaultVpcUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CheckIsDefaultVpcUser', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  checkOrderNotPaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CheckOrderNotPaid', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} FromRegionId - fromRegionNo. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ImageId - fromImageNo. required.
   * @param {String} DestinationRegionId - toRegionNo. required.
   * @param {String} DestinationImageName - toImageName. optional.
   * @param {String} DestinationDescription - toImageDesc. optional.
   * @param {String} FromRegionName - fromRegionName. required.
   * @param {Long} DestinationRegionPriId - toRegionId. required.
   * @param {String} FromSnapshotListBase64 - fromSnapshotListBase64. required.
   * @param {String} FromImageBase64 - fromImageBase64. required.
   * @param {String} ImageSnapshotMappingsBase64 - imageSnapshotMappingsBase64. required.
   * @param {String} ResourceMetaMappingsBase64 - resourceMetaMappingsBase64. optional.
   */
  copyImageAtTarget(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromRegionId')) {
      throw new TypeError('parameter "FromRegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationRegionId')) {
      throw new TypeError('parameter "DestinationRegionId" is required');
    }

    if (!hasOwnProperty(params, 'FromRegionName')) {
      throw new TypeError('parameter "FromRegionName" is required');
    }

    if (!hasOwnProperty(params, 'DestinationRegionPriId')) {
      throw new TypeError('parameter "DestinationRegionPriId" is required');
    }

    if (!hasOwnProperty(params, 'FromSnapshotListBase64')) {
      throw new TypeError('parameter "FromSnapshotListBase64" is required');
    }

    if (!hasOwnProperty(params, 'FromImageBase64')) {
      throw new TypeError('parameter "FromImageBase64" is required');
    }

    if (!hasOwnProperty(params, 'ImageSnapshotMappingsBase64')) {
      throw new TypeError('parameter "ImageSnapshotMappingsBase64" is required');
    }

    return this.request('CopyImageAtTarget', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} TransitId - transitId. required.
   * @param {RepeatList} ToRegionNoList - toRegionNoList. required.
   * @param {String} ToImageName - imageName. required.
   * @param {String} ToImageDesc - imageDesc. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  copySystemImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TransitId')) {
      throw new TypeError('parameter "TransitId" is required');
    }

    if (!hasOwnProperty(params, 'ToRegionNoList')) {
      throw new TypeError('parameter "ToRegionNoList" is required');
    }

    if (!hasOwnProperty(params, 'ToImageName')) {
      throw new TypeError('parameter "ToImageName" is required');
    }

    return this.request('CopySystemImage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ResourceTransitInBase64 - resourceTransitInBase64. required.
   * @param {String} ImageCenterResourceId - imageCenterResourceId. required.
   * @param {String} ToRegionNo - toRegionNo. required.
   * @param {String} ToImageName - toImageName. required.
   * @param {String} ToImageDesc - ToImageDesc. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  copySystemImageAtTarget(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceTransitInBase64')) {
      throw new TypeError('parameter "ResourceTransitInBase64" is required');
    }

    if (!hasOwnProperty(params, 'ImageCenterResourceId')) {
      throw new TypeError('parameter "ImageCenterResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ToRegionNo')) {
      throw new TypeError('parameter "ToRegionNo" is required');
    }

    if (!hasOwnProperty(params, 'ToImageName')) {
      throw new TypeError('parameter "ToImageName" is required');
    }

    return this.request('CopySystemImageAtTarget', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EventType - eventType. required.
   * @param {String} EffectTime - effectTime. required.
   * @param {String} LimitTime - limitTime. required.
   */
  createSystemEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'EffectTime')) {
      throw new TypeError('parameter "EffectTime" is required');
    }

    if (!hasOwnProperty(params, 'LimitTime')) {
      throw new TypeError('parameter "LimitTime" is required');
    }

    return this.request('CreateSystemEvent', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceChargeType - saleStrategy. required.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} DestinationResource - destinationResource. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} DedicatedHostId - dedicatedHostId. optional.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} SystemDiskCategory - systemDiskCategory. optional.
   * @param {String} DataDiskCategory - dataDiskCategory. optional.
   * @param {String} NetworkCategory - networkCategory. optional.
   * @param {String} From - from. optional.
   * @param {Integer} Cores - cpu. optional.
   * @param {Float} Memory - mem. optional.
   * @param {String} Scope - scope. optional.
   */
  describeAvailableResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceChargeType')) {
      throw new TypeError('parameter "InstanceChargeType" is required');
    }

    if (!hasOwnProperty(params, 'DestinationResource')) {
      throw new TypeError('parameter "DestinationResource" is required');
    }

    return this.request('DescribeAvailableResource', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceChargeType - saleStrategy. required.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} OperationType - operationType. optional.
   */
  describeBandwidthLimitation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceChargeType')) {
      throw new TypeError('parameter "InstanceChargeType" is required');
    }

    return this.request('DescribeBandwidthLimitation', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} FromRegionNo - fromRegionNo. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  describeCopyProgressAtOrigin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromRegionNo')) {
      throw new TypeError('parameter "FromRegionNo" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('DescribeCopyProgressAtOrigin', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Integer} Amount - amount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeEipPrice(params = {}, options = {}) {
    return this.request('DescribeEipPrice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} Bid - bid. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EventId - eventId. required.
   */
  describeEventDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('DescribeEventDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} Bid - bid. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EventId - eventId. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} Status - status. optional.
   * @param {String} PlanTime - planTime. optional.
   * @param {String} ExpireTime - expireTime. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeEvents', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} BizRegionId - bigRegion. optional.
   * @param {String} SecurityGroupId - groupNo. optional.
   * @param {Long} AlarmLevel - alarmLevel. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeGroupHighRiskAcl(params = {}, options = {}) {
    return this.request('DescribeGroupHighRiskAcl', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} BizRegionId - bigRegion. optional.
   * @param {String} SecurityGroupId - groupNo. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeGroupHighRiskStat(params = {}, options = {}) {
    return this.request('DescribeGroupHighRiskStat', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} DedicatedHostType - hostType. optional.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} InstanceNetworkType - networkType. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} PriceUnit - priceUnit. optional.
   * @param {Integer} Amount - amount. optional.
   * @param {String} OfferingType - offeringType. optional.
   * @param {Integer} InstanceAmount - instanceAmount. optional.
   * @param {String} Scope - scope. optional.
   * @param {SystemDisk} SystemDisk - undefined. optional.
   * @param {DataDisk} DataDisk - undefined. optional.
   */
  describePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribePrice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} ResourceId - resourceId. required.
   * @param {Integer} Period - period. optional.
   * @param {String} PriceUnit - priceUnit. optional.
   */
  describeRenewalPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('DescribeRenewalPrice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} Bid - bid. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {Long} Amount - batchCreateNum. required.
   * @param {String} SpotStrategy - spotStrategyStr. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {Boolean} IoOptimized - ioOptimized. optional.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} SystemDiskCategory - systemDiskCategory. optional.
   * @param {RepeatList} DataDiskCategory - dataDiskCategory. optional.
   * @param {String} NetworkCategory - networkType. optional.
   */
  describeResourceCreationCapacity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Amount')) {
      throw new TypeError('parameter "Amount" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('DescribeResourceCreationCapacity', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} Bid - bid. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} TargetInstanceType - instanceType. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   * @param {String} TargetSystemDiskCategory - systemDiskCategory. optional.
   * @param {Boolean} MigrateAcrossZone - migrateAcrossZone. optional.
   */
  describeResourceModificationCapacity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'TargetInstanceType')) {
      throw new TypeError('parameter "TargetInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeResourceModificationCapacity', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerUid - tagUid. optional.
   * @param {String} OwnerBid - tagBid. optional.
   * @param {String} RelatedKey - relatedKey. optional.
   * @param {String} TagValue - tagValue. required.
   */
  describeResourcesBySystemTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TagValue')) {
      throw new TypeError('parameter "TagValue" is required');
    }

    return this.request('DescribeResourcesBySystemTag', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {Boolean} MigrateAcrossZone - migrateAcrossZone. optional.
   * @param {String} DestinationResource - destinationResource. required.
   * @param {String} OperationType - operationType. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} SystemDiskCategory - systemDiskCategory. optional.
   * @param {String} DataDiskCategory - dataDiskCategory. optional.
   * @param {String} NetworkCategory - networkCategory. optional.
   * @param {Integer} Cores - cpu. optional.
   * @param {Float} Memory - mem. optional.
   */
  describeResourcesModification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationResource')) {
      throw new TypeError('parameter "DestinationResource" is required');
    }

    return this.request('DescribeResourcesModification', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  fiveDaysRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('FiveDaysRefund', params, options);
  }

  /**
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
  gdprCheckResource(params = {}, options = {}) {
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

    return this.request('GdprCheckResource', params, options);
  }

  /**
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
   */
  gdprLogicalDeleteResource(params = {}, options = {}) {
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

    return this.request('GdprLogicalDeleteResource', params, options);
  }

  /**
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
   */
  gdprPhysicalDeleteResource(params = {}, options = {}) {
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

    return this.request('GdprPhysicalDeleteResource', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getActiveRegions(params = {}, options = {}) {
    return this.request('GetActiveRegions', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('GetCommodity', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} CommodityCode - commodityCode. optional.
   * @param {String} OrderType - orderType. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  getCommodityProxy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    return this.request('GetCommodityProxy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   * @param {Long} buyerId - buyerId. optional.
   * @param {String} instanceIds - instanceIds. required.
   * @param {String} regionNo - regionNo. required.
   * @param {Integer} duration - duration. optional.
   * @param {String} pricingCycle - pricingCycle. optional.
   * @param {Boolean} autoPay - autoPay. optional.
   * @param {Boolean} dryRun - dryRun. optional.
   * @param {Boolean} convertDataDisk - convertDataDisk. optional.
   */
  innerAntInstanceConvertToPrepaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    if (!hasOwnProperty(params, 'instanceIds')) {
      throw new TypeError('parameter "instanceIds" is required');
    }

    if (!hasOwnProperty(params, 'regionNo')) {
      throw new TypeError('parameter "regionNo" is required');
    }

    return this.request('InnerAntInstanceConvertToPrepaid', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {RepeatList} ImageId - imageNos. required.
   * @param {RepeatList} Bid - bids. optional.
   * @param {String} Mode - mode. required.
   * @param {Boolean} DryRun - dryRun. optional.
   */
  innerAuthorizeImagesToBids(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    return this.request('InnerAuthorizeImagesToBids', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} EniNo - eniNo. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OperateType - operateType. required.
   * @param {String} EipAddressKeeped - eipAddressKeeped. optional.
   * @param {String} EipAddressCount - eipAddressCount. optional.
   */
  innerCheckEniBindEip(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'EniNo')) {
      throw new TypeError('parameter "EniNo" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('InnerCheckEniBindEip', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} EniNo - eniNo. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OperateType - operateType. required.
   * @param {String} EipAddressKeeped - eipAddressKeeped. optional.
   * @param {String} EipAddressCount - eipAddressCount. optional.
   */
  innerCheckEniEipOperate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'EniNo')) {
      throw new TypeError('parameter "EniNo" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    return this.request('InnerCheckEniEipOperate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} OrderIds - orderIds. optional.
   */
  innerCheckOpenSnapshotService(params = {}, options = {}) {
    return this.request('InnerCheckOpenSnapshotService', params, options);
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
   * @param {String} OrderId - orderId. required.
   * @param {String} OrderUid - orderUid. required.
   * @param {String} orderIdCallbackToken - orderIdCallbackToken. optional.
   */
  innerCheckProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'OrderUid')) {
      throw new TypeError('parameter "OrderUid" is required');
    }

    return this.request('InnerCheckProduce', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} filePath - filePath. required.
   * @param {String} content - content. required.
   */
  innerConstraintDataPush(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'filePath')) {
      throw new TypeError('parameter "filePath" is required');
    }

    if (!hasOwnProperty(params, 'content')) {
      throw new TypeError('parameter "content" is required');
    }

    options.method = 'POST';
    return this.request('InnerConstraintDataPush', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageNo. required.
   * @param {String} ToImageName - toImageName. optional.
   * @param {String} ToImageDesc - toImageDesc. optional.
   */
  innerCopyImageAtSameRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('InnerCopyImageAtSameRegion', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} GrayBid - grayBid. required.
   * @param {Long} GrayAliUid - grayAliUid. required.
   * @param {String} Expression - expression. required.
   * @param {RepeatList} VSwitchId - vswitchIdList. optional.
   * @param {RepeatList} EcsInstanceId - ecsInstanceIdList. optional.
   */
  innerCreateNcExpression(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GrayBid')) {
      throw new TypeError('parameter "GrayBid" is required');
    }

    if (!hasOwnProperty(params, 'GrayAliUid')) {
      throw new TypeError('parameter "GrayAliUid" is required');
    }

    if (!hasOwnProperty(params, 'Expression')) {
      throw new TypeError('parameter "Expression" is required');
    }

    return this.request('InnerCreateNcExpression', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} GrayBid - grayBid. required.
   * @param {Long} GrayAliUid - grayAliUid. required.
   * @param {RepeatList} VSwitchId - vswitchIdList. optional.
   * @param {RepeatList} EcsInstanceId - ecsInstanceIdList. optional.
   */
  innerDeleteNcExpression(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GrayBid')) {
      throw new TypeError('parameter "GrayBid" is required');
    }

    if (!hasOwnProperty(params, 'GrayAliUid')) {
      throw new TypeError('parameter "GrayAliUid" is required');
    }

    return this.request('InnerDeleteNcExpression', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} Bid - bid. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} PrimaryIpAddress - primaryIpAddress. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} NetworkInterfaceName - eniName. optional.
   * @param {String} Type - networkInterfaceType. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {RepeatList} NetworkInterfaceId - eniInstanceIds. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  innerDescribeEni(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('InnerDescribeEni', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} NetworkInterfaceId - eniNoList. optional.
   */
  innerDescribeEniBdf(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerDescribeEniBdf', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceTypeFamily - instanceTypeFamily. optional.
   * @param {Boolean} NeedFactor - needFactor. optional.
   */
  innerDescribeInstanceTypes(params = {}, options = {}) {
    return this.request('InnerDescribeInstanceTypes', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} GrayBid - grayBid. required.
   * @param {Long} GrayAliUid - grayAliUid. required.
   * @param {String} Expression - expression. required.
   * @param {RepeatList} VSwitchId - vswitchIdList. optional.
   * @param {RepeatList} EcsInstanceId - ecsInstanceIdList. optional.
   */
  innerDescribeNcExpression(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GrayBid')) {
      throw new TypeError('parameter "GrayBid" is required');
    }

    if (!hasOwnProperty(params, 'GrayAliUid')) {
      throw new TypeError('parameter "GrayAliUid" is required');
    }

    if (!hasOwnProperty(params, 'Expression')) {
      throw new TypeError('parameter "Expression" is required');
    }

    return this.request('InnerDescribeNcExpression', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  innerDescribeSnapshotBusinessStatus(params = {}, options = {}) {
    return this.request('InnerDescribeSnapshotBusinessStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {RepeatList} ResourceId - resourceIds. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerUid - tagUid. required.
   * @param {String} OwnerBid - tagBid. optional.
   * @param {Long} CreateBy - createBy. optional.
   * @param {String} Category - category. optional.
   * @param {String} Scope - scope. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  innerDescribeTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerUid')) {
      throw new TypeError('parameter "OwnerUid" is required');
    }

    return this.request('InnerDescribeTags', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} InstanceTypeFamily - instanceTypeFamilies. optional.
   * @param {String} Lang - language. optional.
   */
  innerDetailInstanceFamilyDefine(params = {}, options = {}) {
    return this.request('InnerDetailInstanceFamilyDefine', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} DiskId - instanceId. required.
   */
  innerDiskFindDiskByDiskId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('InnerDiskFindDiskByDiskId', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageNo - pageNo. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {String} status - status. optional.
   * @param {String} diskName - diskName. optional.
   * @param {String} excludeStatus - excludeStatus. optional.
   * @param {String} tags - tags. optional.
   * @param {String} createTimeTo - createTimeTo. optional.
   * @param {String} prePayEcsInstanceIds - prePayEcsInstanceIds. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} snapshotNo - snapshotNo. optional.
   * @param {String} diskCategory - diskCategory. optional.
   * @param {String} instanceIds - instanceIds. optional.
   * @param {Boolean} enableAutomatedSnapshotPolicy - enableAutomatedSnapshotPolicy. optional.
   * @param {Boolean} active - active. optional.
   * @param {Boolean} enableAutoSnapshot - enableAutoSnapshot. optional.
   * @param {String} autoSnapshotPolicyId - autoSnapshotPolicyId. optional.
   * @param {Boolean} portable - portable. optional.
   * @param {String} createTimeFrom - createTimeFrom. optional.
   * @param {String} izNo - izNo. optional.
   * @param {String} ecsInstanceId - ecsInstanceId. optional.
   * @param {String} diskType - diskType. optional.
   * @param {String} fuzzyDiskName - fuzzyDiskName. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {Boolean} deleteWithInstance - deleteWithInstance. optional.
   * @param {String} postPayEcsInstanceIds - postPayEcsInstanceIds. optional.
   * @param {Boolean} deleteAutoSnapshot - deleteAutoSnapshot. optional.
   * @param {String} imageNo - imageNo. optional.
   * @param {String} bid - bid. optional.
   */
  innerDiskQueryByParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    return this.request('InnerDiskQueryByParam', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageNo - pageNo. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {String} status - status. optional.
   * @param {String} diskName - diskName. optional.
   * @param {String} excludeStatus - excludeStatus. optional.
   * @param {String} tags - tags. optional.
   * @param {String} createTimeTo - createTimeTo. optional.
   * @param {String} prePayEcsInstanceIds - prePayEcsInstanceIds. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} snapshotNo - snapshotNo. optional.
   * @param {String} diskCategory - diskCategory. optional.
   * @param {String} instanceIds - instanceIds. optional.
   * @param {Boolean} enableAutomatedSnapshotPolicy - enableAutomatedSnapshotPolicy. optional.
   * @param {Boolean} active - active. optional.
   * @param {Boolean} enableAutoSnapshot - enableAutoSnapshot. optional.
   * @param {String} autoSnapshotPolicyId - autoSnapshotPolicyId. optional.
   * @param {Boolean} portable - portable. optional.
   * @param {String} createTimeFrom - createTimeFrom. optional.
   * @param {String} izNo - izNo. optional.
   * @param {String} ecsInstanceId - ecsInstanceId. optional.
   * @param {String} diskType - diskType. optional.
   * @param {String} fuzzyDiskName - fuzzyDiskName. optional.
   * @param {Boolean} deleteWithInstance - deleteWithInstance. optional.
   * @param {String} postPayEcsInstanceIds - postPayEcsInstanceIds. optional.
   * @param {Boolean} deleteAutoSnapshot - deleteAutoSnapshot. optional.
   * @param {String} imageNo - imageNo. optional.
   */
  innerDiskQueryByParamForConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerDiskQueryByParamForConsole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   */
  innerDiskQueryUserDiskSummary(params = {}, options = {}) {
    return this.request('InnerDiskQueryUserDiskSummary', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   * @param {Boolean} useImagePasswd - useImagePasswd. optional.
   * @param {String} ecsInstanceId - ecsInstanceId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} diskType - diskType. optional.
   * @param {Boolean} keepDiskSize - keepDiskSize. optional.
   * @param {String} passwd - passwd. optional.
   * @param {String} instanceIds - instanceIds. optional.
   */
  innerDiskReset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerDiskReset', params, options);
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
   * @param {String} instanceId - instanceId. required.
   * @param {Integer} newSize - newSize. required.
   */
  innerDiskResizeByParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceId')) {
      throw new TypeError('parameter "instanceId" is required');
    }

    if (!hasOwnProperty(params, 'newSize')) {
      throw new TypeError('parameter "newSize" is required');
    }

    return this.request('InnerDiskResizeByParam', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   */
  innerEcsCountInRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    return this.request('InnerEcsCountInRegion', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} GroupId - groupNo. required.
   * @param {String} IpType - ipType. optional.
   * @param {String} PageNo - pageNo. optional. default: 1.
   * @param {String} PageSize - pageSize. optional. default: 100.
   */
  innerEcsDescribeIpsInGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('InnerEcsDescribeIpsInGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} serialNumber - serialNumber. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} EniName - eniId. required.
   */
  innerEcsDescribeVPortInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EniName')) {
      throw new TypeError('parameter "EniName" is required');
    }

    return this.request('InnerEcsDescribeVPortInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   */
  innerEcsExpireRegionQuery(params = {}, options = {}) {
    return this.request('InnerEcsExpireRegionQuery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} serialNumber - serialNumber. optional.
   * @param {String} instanceId - instanceId. optional.
   * @param {String} ip - ip. optional.
   * @param {String} intranetIp - intranetIp. optional.
   * @param {String} bid - bid. optional.
   * @param {String} internetIp - internetIp. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} authedEcsIds - authedEcsIds. optional.
   * @param {Long} id - id. required.
   */
  innerEcsFindById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'id')) {
      throw new TypeError('parameter "id" is required');
    }

    return this.request('InnerEcsFindById', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. required.
   * @param {Long} aliUid - aliUid. required.
   */
  innerEcsGetBflagByBidAndUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    return this.request('InnerEcsGetBflagByBidAndUid', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} InstanceId - instanceId. required.
   */
  innerEcsInstanceDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerEcsInstanceDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  innerEcsInstanceDetailForConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerEcsInstanceDetailForConsole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} privateIps - privateIps. optional.
   * @param {String} tags - tags. optional.
   * @param {String} fuzzyInstanceName - fuzzyInstanceName. optional.
   * @param {String} vswInstanceId - vswInstanceId. optional.
   * @param {String} status - status. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {String} ecsNetworkType - ecsNetworkType. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} instanceTypeFamily - instanceTypeFamily. optional.
   * @param {Boolean} isNeedDetail - isNeedDetail. optional.
   * @param {String} instanceIds - instanceIds. optional.
   * @param {String} instanceType - instanceType. optional.
   * @param {Integer} pageNo - pageNo. optional.
   * @param {String} bizStatus - bizStatus. optional.
   * @param {Boolean} ioOptimized - ioOptimized. optional.
   * @param {Boolean} deviceAvailable - deviceAvailable. optional.
   * @param {String} innerIps - innerIps. optional.
   * @param {String} izNo - izNo. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Long} imageId - imageId. optional.
   * @param {String} groupNo - groupNo. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {String} publicIps - publicIps. optional.
   * @param {String} bid - bid. optional.
   * @param {String} RegionId - regionNo. required.
   */
  innerEcsInstanceQueryByParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerEcsInstanceQueryByParam', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Boolean} async - async. optional.
   */
  innerEcsInstanceQueryRegionNoFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerEcsInstanceQueryRegionNoFilter', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Boolean} async - async. optional.
   */
  innerEcsInstanceQueryRegions(params = {}, options = {}) {
    return this.request('InnerEcsInstanceQueryRegions', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} ip - ip. required.
   */
  innerEcsIsChannelMerchant(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ip')) {
      throw new TypeError('parameter "ip" is required');
    }

    return this.request('InnerEcsIsChannelMerchant', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} serialNumber - serialNumber. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} RegionId - regionId. required.
   */
  innerEcsIsClassicLinkVpcUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerEcsIsClassicLinkVpcUser', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} HpcClusterId - hpcClusterId. required.
   * @param {Long} AliUid - aliUid. optional.
   */
  innerEcsQueryByHpcClusterId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HpcClusterId')) {
      throw new TypeError('parameter "HpcClusterId" is required');
    }

    return this.request('InnerEcsQueryByHpcClusterId', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  innerEcsQueryByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerEcsQueryByInstanceId', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} internetIp - internetIp. required.
   */
  innerEcsQueryByInternetIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'internetIp')) {
      throw new TypeError('parameter "internetIp" is required');
    }

    return this.request('InnerEcsQueryByInternetIp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} intranetIp - intranetIp. required.
   */
  innerEcsQueryByIntranetIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'intranetIp')) {
      throw new TypeError('parameter "intranetIp" is required');
    }

    return this.request('InnerEcsQueryByIntranetIp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} ip - ip. required.
   * @param {String} authedEcsIds - authedEcsIds. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   * @param {String} regionNo - regionNo. optional.
   */
  innerEcsQueryByIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ip')) {
      throw new TypeError('parameter "ip" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    return this.request('InnerEcsQueryByIp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageNo - pageNo. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {Integer} agentId - agentId. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Long} regionIndexId - regionId. optional.
   * @param {String} regionNo - regionNo. optional.
   * @param {Long} izId - izId. optional.
   * @param {String} izNo - izNo. optional.
   * @param {Long} zoneId - zoneId. optional.
   * @param {String} zoneNo - zoneNo. optional.
   * @param {String} ecsIds - ecsIds. optional.
   * @param {String} instanceIds - instanceIds. optional.
   * @param {String} hostname - hostname. optional.
   * @param {String} status - status. optional.
   * @param {String} exclusionEcsIds - exclusionEcsIds. optional.
   * @param {String} bizStatus - bizStatus. optional.
   * @param {String} internetIp - internetIp. optional.
   * @param {String} intranetIp - intranetIp. optional.
   * @param {String} systemDeviceCategory - systemDeviceCategory. optional.
   * @param {Long} imageId - imageId. optional.
   * @param {String} imageType - imageType. optional.
   * @param {Boolean} notSyncHouyi - notSyncHouyi. optional.
   * @param {String} order - order. optional.
   * @param {Boolean} orderType - orderType. optional.
   * @param {String} imgPc - imgPc. optional.
   * @param {String} ecsNetworkType - ecsNetworkType. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {String} vswInstanceId - vswInstanceId. optional.
   * @param {Integer} cores - cores. optional.
   * @param {Integer} mem - mem. optional.
   * @param {Integer} startOfInternetTx - startOfInternetTx. optional.
   * @param {Integer} endOfInternetTx - endOfInternetTx. optional.
   * @param {Boolean} ioOptimized - ioOptimized. optional.
   * @param {String} instanceTypeId - instanceTypeId. optional.
   */
  innerEcsQueryByParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pageNo')) {
      throw new TypeError('parameter "pageNo" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('InnerEcsQueryByParam', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} serialNumber - serialNumber. required.
   */
  innerEcsQueryBySerialNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'serialNumber')) {
      throw new TypeError('parameter "serialNumber" is required');
    }

    return this.request('InnerEcsQueryBySerialNumber', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} InternetIp - internetIp. optional.
   */
  innerEcsQueryIpThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerEcsQueryIpThreshold', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} InstanceId - instanceId. required.
   */
  innerEcsQueryNcInfoByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerEcsQueryNcInfoByInstanceId', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} ecsGroupNic - ecsGroupNic. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} aliUid - aliUid. required.
   */
  innerEcsQuerySecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    return this.request('InnerEcsQuerySecurity', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   */
  innerEcsRegionQueryActive(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    return this.request('InnerEcsRegionQueryActive', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   */
  innerEcsRegionQueryAll(params = {}, options = {}) {
    return this.request('InnerEcsRegionQueryAll', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} Bid - bid. required.
   */
  innerEcsRegionQueryByBid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('InnerEcsRegionQueryByBid', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} resourceType - resourceType. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  innerEcsReleaseByDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerEcsReleaseByDriver', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} ResourceIds - resourceIds. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} RegionNo - regionNo. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. required.
   */
  innerEcsResourceGroupQueryByResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceIds')) {
      throw new TypeError('parameter "ResourceIds" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('InnerEcsResourceGroupQueryByResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} coordinate - coordinate. optional.
   * @param {String} reason - reason. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} bussinessCode - bussinessCode. optional.
   * @param {String} actionCode - actionCode. optional.
   * @param {String} signatureCode - signature. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  innerEcsRiskControlPunish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerEcsRiskControlPunish', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {String} reason - reason. optional.
   * @param {String} coordinate - coordinate. optional.
   * @param {String} punishResult - punishResult. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} bussinessCode - bussinessCode. optional.
   * @param {String} actionCode - actionCode. optional.
   * @param {String} signatureCode - signature. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  innerEcsRiskControlPunishRemove(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerEcsRiskControlPunishRemove', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {String} bussinessCode - bussinessCode. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} domain - domain. optional.
   * @param {String} riskyUrl - url. optional.
   * @param {String} extras - extras. optional.
   * @param {String} ip - ip. optional.
   */
  innerEcsRiskControlQuery(params = {}, options = {}) {
    return this.request('InnerEcsRiskControlQuery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Long} ecsId - ecsId. required.
   */
  innerEcsSnapshotQueryAllSnapshotsByEcsId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ecsId')) {
      throw new TypeError('parameter "ecsId" is required');
    }

    return this.request('InnerEcsSnapshotQueryAllSnapshotsByEcsId', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   * @param {String} TransitionTime - transitionTime. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} NetworkTransType - networkTransType. optional.
   * @param {Boolean} IsExpireTransition - isExpireTransition. optional.
   */
  innerEcsTransitionModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TransitionTime')) {
      throw new TypeError('parameter "TransitionTime" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('InnerEcsTransitionModify', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} TransitionTime - transitionTime. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IsQueryUnAppointed - isQueryUnAppointed. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} NetworkTransType - networkTransType. optional.
   * @param {Boolean} IsExpireTransition - isExpireTransition. optional.
   */
  innerEcsTransitionQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'IsQueryUnAppointed')) {
      throw new TypeError('parameter "IsQueryUnAppointed" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('InnerEcsTransitionQuery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} instanceType - instanceType. required.
   */
  innerGetInstanceTypeModelByType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('InnerGetInstanceTypeModelByType', params, options);
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
   * @param {Long} zoneId - zoneId. required.
   * @param {String} regionNo - regionNo. required.
   */
  innerGetZoneVendibleDataAndStatusById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'zoneId')) {
      throw new TypeError('parameter "zoneId" is required');
    }

    if (!hasOwnProperty(params, 'regionNo')) {
      throw new TypeError('parameter "regionNo" is required');
    }

    return this.request('InnerGetZoneVendibleDataAndStatusById', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} sourceGroupOwnerAliUid - sourceGroupOwnerAliUid. optional.
   * @param {String} destCidrIp - destCidrIp. optional.
   * @param {Long} sourceGroupId - sourceGroupId. optional.
   * @param {String} policy - policy. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {Integer} level - level. optional.
   * @param {String} groupNo - groupNo. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} sourceCidrIp - sourceCidrIp. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ipProtocol - ipProtocol. optional.
   * @param {String} sourceGroupNo - sourceGroupNo. optional.
   * @param {String} portRange - portRange. optional.
   * @param {String} nic - nic. optional.
   */
  innerGroupAuthorize(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerGroupAuthorize', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {String} tags - tags. optional.
   * @param {String} groupName - groupName. optional.
   * @param {String} groupDesc - groupDesc. optional.
   */
  innerGroupCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerGroupCreate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} nic - nic. optional.
   * @param {String} bid - bid. optional.
   * @param {String} direction - direction. optional.
   * @param {String} groupNo - groupNo. required.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} aliUid - aliUid. required.
   */
  innerGroupDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupNo')) {
      throw new TypeError('parameter "groupNo" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    return this.request('InnerGroupDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   */
  innerGroupFindDefaultSystemGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerGroupFindDefaultSystemGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} bid - bid. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ecsInstanceId - ecsInstanceId. required.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} groupNo - groupNo. required.
   */
  innerGroupJoin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ecsInstanceId')) {
      throw new TypeError('parameter "ecsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'groupNo')) {
      throw new TypeError('parameter "groupNo" is required');
    }

    return this.request('InnerGroupJoin', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} bid - bid. optional.
   * @param {String} groupNo - groupNo. required.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} ecsInstanceId - ecsInstanceId. required.
   */
  innerGroupLeave(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupNo')) {
      throw new TypeError('parameter "groupNo" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'ecsInstanceId')) {
      throw new TypeError('parameter "ecsInstanceId" is required');
    }

    return this.request('InnerGroupLeave', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} groupNo - groupNo. optional.
   * @param {Integer} pageNo - pageNo. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {Boolean} isQueryEcsCount - isQueryEcsCount. optional.
   * @param {String} groupNos - groupNos. optional.
   * @param {Boolean} isOnlyQueryVpcGroup - isOnlyQueryVpcGroup. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} networkType - networkType. optional.
   * @param {String} groupName - groupName. optional.
   * @param {Boolean} fuzzyQuery - fuzzyQuery. optional.
   * @param {String} tags - tags. optional.
   * @param {String} regionNo - regionNo. optional.
   * @param {String} ecsInstanceId - ecsInstanceId. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. required.
   */
  innerGroupQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    return this.request('InnerGroupQuery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {Boolean} async - async. optional.
   * @param {Integer} pageNo - pageNo. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} groupNo - groupNo. required.
   * @param {String} RegionId - regionNo. required.
   */
  innerGroupQueryVm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'groupNo')) {
      throw new TypeError('parameter "groupNo" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerGroupQueryVm', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {String} groupNo - groupNo. required.
   * @param {Boolean} async - async. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} RegionId - regionNo. required.
   */
  innerGroupRemove(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'groupNo')) {
      throw new TypeError('parameter "groupNo" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerGroupRemove', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} groupNo - groupNo. optional.
   * @param {Integer} level - level. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} policy - policy. optional.
   * @param {Long} sourceGroupOwnerAliUid - sourceGroupOwnerAliUid. optional.
   * @param {String} destCidrIp - destCidrIp. optional.
   * @param {String} nic - nic. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {String} sourceGroupNo - sourceGroupNo. optional.
   * @param {String} portRange - portRange. optional.
   * @param {String} ipProtocol - ipProtocol. optional.
   * @param {String} bid - bid. optional.
   * @param {String} sourceCidrIp - sourceCidrIp. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} aliUid - aliUid. required.
   */
  innerGroupRevoke(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    return this.request('InnerGroupRevoke', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} imageId - imageId. required.
   * @param {Boolean} async - async. optional.
   * @param {String} productCode - productCode. required.
   */
  innerImageConvert2Product(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'imageId')) {
      throw new TypeError('parameter "imageId" is required');
    }

    if (!hasOwnProperty(params, 'productCode')) {
      throw new TypeError('parameter "productCode" is required');
    }

    return this.request('InnerImageConvert2Product', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Boolean} includeDeleted - includeDeleted. optional.
   * @param {String} imageId - imageId. required.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} bid - bid. optional.
   */
  innerImageDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'imageId')) {
      throw new TypeError('parameter "imageId" is required');
    }

    return this.request('InnerImageDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} remark - remark. optional.
   * @param {String} platform - platform. required.
   */
  innerImageKeepUsing(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'platform')) {
      throw new TypeError('parameter "platform" is required');
    }

    return this.request('InnerImageKeepUsing', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {String} remark - remark. optional.
   * @param {String} imageName - imageName. optional.
   * @param {Integer} imageSize - imageSize. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} osTypeId - osTypeId. optional.
   * @param {String} isPublic - isPublic. optional.
   * @param {String} ImageVersion - imageVersion. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} imageId - imageId. required.
   * @param {Boolean} async - async. optional.
   * @param {String} imageCategory - imageCategory. optional.
   * @param {Long} virtBaseImageId - virtBaseImageId. optional.
   */
  innerImageModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'imageId')) {
      throw new TypeError('parameter "imageId" is required');
    }

    return this.request('InnerImageModify', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. required.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} productCode - productCode. required.
   * @param {Long} value - value. required.
   * @param {String} RegionId - regionNo. required.
   */
  innerImageModifyProductCapacity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'productCode')) {
      throw new TypeError('parameter "productCode" is required');
    }

    if (!hasOwnProperty(params, 'value')) {
      throw new TypeError('parameter "value" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerImageModifyProductCapacity', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageNo - pageNo. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {String} bid - bid. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} osType - osType. optional.
   * @param {String} createStartTime - createStartTime. optional.
   * @param {String} tags - tags. optional.
   * @param {String} regionNos - regionNos. optional.
   * @param {String} status - status. optional.
   * @param {String} imageName - imageName. optional.
   * @param {Boolean} ioOptimized - ioOptimized. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} imageIds - imageIds. optional.
   * @param {String} instanceType - instanceType. optional.
   * @param {String} quoteType - quoteType. optional.
   * @param {String} snapshotId - snapshotId. optional.
   * @param {String} fuzzyImageName - fuzzyImageName. optional.
   * @param {String} imageOwnerAlias - imageOwnerAlias. optional.
   * @param {Boolean} isAll - isAll. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} createEndTime - createEndTime. optional.
   * @param {String} userCountryType - userCountryType. optional.
   * @param {Integer} osBit - osBit. optional.
   */
  innerImageQueryAvailableImgs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerImageQueryAvailableImgs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Long} osTypeId - osTypeId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {String} imageCategory - imageCategory. required.
   * @param {Integer} page - page. optional.
   * @param {String} status - status. optional.
   * @param {String} visibility - visibility. optional.
   * @param {String} requestId - requestId. optional.
   * @param {String} imageId - imageId. optional.
   */
  innerImageQueryImgsByParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'imageCategory')) {
      throw new TypeError('parameter "imageCategory" is required');
    }

    return this.request('InnerImageQueryImgsByParam', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Boolean} async - async. optional.
   */
  innerImageQueryNeedKeepUsing(params = {}, options = {}) {
    return this.request('InnerImageQueryNeedKeepUsing', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} imageProductCodes - imageProductCodes. required.
   */
  innerImageQueryProductQuota(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'imageProductCodes')) {
      throw new TypeError('parameter "imageProductCodes" is required');
    }

    return this.request('InnerImageQueryProductQuota', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageNo - pageNo. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {String} isPublic - isPublic. optional.
   * @param {Long} osTypeId - osTypeId. optional.
   * @param {String} snapshotNo - snapshotNo. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} status - status. optional.
   * @param {String} imageName - imageName. optional.
   * @param {Long} regionIndexId - regionId. optional.
   * @param {String} bid - bid. optional.
   * @param {String} ImageId - imageNo. optional.
   */
  innerImageQueryUserImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pageNo')) {
      throw new TypeError('parameter "pageNo" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('InnerImageQueryUserImages', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Long} InstanceOwnerId - aliUid. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  innerInstallCloudAssistant(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceOwnerId')) {
      throw new TypeError('parameter "InstanceOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerInstallCloudAssistant', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} bid - bid. optional.
   */
  innerInstanceDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerInstanceDetail', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   * @param {Boolean} async - async. optional.
   */
  innerInstanceDisableSLBFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    return this.request('InnerInstanceDisableSLBFlow', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   * @param {Boolean} async - async. optional.
   */
  innerInstanceEnableSLBFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    return this.request('InnerInstanceEnableSLBFlow', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} instanceType - instanceType. required.
   * @param {Boolean} includeOffline - includeOffline. optional.
   */
  innerInstanceGetInstanceTypeModelByType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceType')) {
      throw new TypeError('parameter "instanceType" is required');
    }

    return this.request('InnerInstanceGetInstanceTypeModelByType', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageNo - pageNo. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {Integer} agentId - agentId. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} regionNo - regionNo. optional.
   * @param {Long} izId - izId. optional.
   * @param {String} izNo - izNo. optional.
   * @param {String} zoneNo - zoneNo. optional.
   * @param {String} instanceIds - instanceIds. optional.
   * @param {String} hostname - hostname. optional.
   * @param {String} status - status. optional.
   * @param {String} bizStatus - bizStatus. optional.
   * @param {String} internetIp - internetIp. optional.
   * @param {String} intranetIp - intranetIp. optional.
   * @param {String} systemDeviceCategory - systemDeviceCategory. optional.
   * @param {Long} imageIndexId - imageId. optional.
   * @param {String} imageType - imageType. optional.
   * @param {Boolean} notSyncHouyi - notSyncHouyi. optional.
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {String} vSwitchInstanceId - vSwitchInstanceId. optional.
   * @param {String} networkType - networkType. optional.
   * @param {Integer} cores - cores. optional.
   * @param {Integer} mem - mem. optional.
   * @param {Integer} startOfInternetTx - startOfInternetTx. optional.
   * @param {Integer} endOfInternetTx - endOfInternetTx. optional.
   * @param {String} order - order. optional.
   * @param {Boolean} orderType - orderType. optional.
   */
  innerInstanceQueryByParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pageNo')) {
      throw new TypeError('parameter "pageNo" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('InnerInstanceQueryByParam', params, options);
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
   * @param {String} vpcInstanceId - vpcInstanceId. optional.
   * @param {Integer} pageNo - pageNo. optional.
   * @param {String} order - order. optional.
   * @param {Long} imageId - imageId. optional.
   * @param {Long} regionIndexId - regionId. optional.
   * @param {String} bid - bid. optional.
   * @param {String} internetIp - internetIp. optional.
   * @param {Integer} mem - mem. optional.
   * @param {Integer} endOfInternetTx - endOfInternetTx. optional.
   * @param {Integer} cores - cores. optional.
   * @param {String} izNo - izNo. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {String} imgPc - imgPc. optional.
   * @param {String} exclusionEcsIds - exclusionEcsIds. optional.
   * @param {String} zoneNo - zoneNo. optional.
   * @param {String} imageType - imageType. optional.
   * @param {String} ecsIds - ecsIds. optional.
   * @param {String} instanceIds - instanceIds. optional.
   * @param {Long} izId - izId. optional.
   * @param {String} intranetIp - intranetIp. optional.
   * @param {String} systemDeviceCategory - systemDeviceCategory. optional.
   * @param {Integer} startOfInternetTx - startOfInternetTx. optional.
   * @param {Boolean} ioOptimized - ioOptimized. optional.
   * @param {String} bizStatus - bizStatus. optional.
   * @param {Boolean} notSyncHouyi - notSyncHouyi. optional.
   * @param {String} vswInstanceId - vswInstanceId. optional.
   * @param {String} status - status. optional.
   * @param {Boolean} orderType - orderType. optional.
   * @param {String} instanceTypeId - instanceTypeId. optional.
   * @param {String} ecsNetworkType - ecsNetworkType. optional.
   * @param {Long} zoneId - zoneId. optional.
   * @param {String} regionNo - regionNo. optional.
   * @param {Integer} agentId - agentId. optional.
   * @param {String} hostname - hostname. optional.
   */
  innerInstanceQueryByParamBackyard(params = {}, options = {}) {
    return this.request('InnerInstanceQueryByParamBackyard', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageNo - pageNo. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {Boolean} async - async. optional.
   * @param {String} imgPc - imgPc. required.
   */
  innerInstanceQueryEcsByImgPc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'imgPc')) {
      throw new TypeError('parameter "imgPc" is required');
    }

    return this.request('InnerInstanceQueryEcsByImgPc', params, options);
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
   * @param {String} caller - caller. required.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} bid - bid. optional.
   * @param {String} resourceType - resourceType. required.
   * @param {String} instanceName - instanceName. required.
   * @param {Long} endTime - endTime. optional.
   */
  innerInstanceSetEndTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'caller')) {
      throw new TypeError('parameter "caller" is required');
    }

    if (!hasOwnProperty(params, 'resourceType')) {
      throw new TypeError('parameter "resourceType" is required');
    }

    if (!hasOwnProperty(params, 'instanceName')) {
      throw new TypeError('parameter "instanceName" is required');
    }

    return this.request('InnerInstanceSetEndTime', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} count - count. optional.
   * @param {String} ipCategory - ipCategory. optional.
   * @param {String} nextToken - nextToken. optional.
   */
  innerIpLoad(params = {}, options = {}) {
    return this.request('InnerIpLoad', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. required.
   * @param {Long} aliUid - aliUid. required.
   * @param {Boolean} async - async. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} regionNos - regionNos. optional.
   */
  innerIzQueryForVmSale(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerIzQueryForVmSale', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} reason - reason. optional.
   * @param {String} lockType - lockType. optional.
   * @param {Long} id - id. optional.
   * @param {String} internetIp - internetIp. optional.
   * @param {String} operator - operator. optional.
   * @param {String} proof - proof. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  innerMaliceEcsLock(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerMaliceEcsLock', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} reason - reason. optional.
   * @param {String} lockType - lockType. optional.
   * @param {Long} id - id. optional.
   * @param {String} internetIp - internetIp. optional.
   * @param {String} proof - proof. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  innerMaliceEcsUnlock(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerMaliceEcsUnlock', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} ImageInstanceId - imageInstanceId. required.
   * @param {Long} AliUid - aliUid. required.
   */
  innerMarketplaceImageExpire(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageInstanceId')) {
      throw new TypeError('parameter "ImageInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('InnerMarketplaceImageExpire', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EntityType - entityType. required.
   * @param {String} EntityKey - entityKey. required.
   * @param {String} EntityProperties - entityProperties. optional.
   * @param {Boolean} ReplaceAll - replaceAll. optional.
   */
  innerModifyEntityConstraints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EntityType')) {
      throw new TypeError('parameter "EntityType" is required');
    }

    if (!hasOwnProperty(params, 'EntityKey')) {
      throw new TypeError('parameter "EntityKey" is required');
    }

    return this.request('InnerModifyEntityConstraints', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   * @param {Long} buyerId - buyerId. optional.
   * @param {String} instanceIds - instanceIds. required.
   * @param {String} regionNo - regionNo. required.
   * @param {Boolean} dryRun - dryRun. optional.
   */
  innerModifyInstanceChargeType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    if (!hasOwnProperty(params, 'instanceIds')) {
      throw new TypeError('parameter "instanceIds" is required');
    }

    if (!hasOwnProperty(params, 'regionNo')) {
      throw new TypeError('parameter "regionNo" is required');
    }

    return this.request('InnerModifyInstanceChargeType', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ModifyType - modifyType. required.
   */
  innerModifySnapshotBusinessStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModifyType')) {
      throw new TypeError('parameter "ModifyType" is required');
    }

    return this.request('InnerModifySnapshotBusinessStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} bid - bid. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  innerMonitor(params = {}, options = {}) {
    return this.request('InnerMonitor', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   * @param {String} DiskId - resourceId. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Integer} period - period. optional. default: 60.
   * @param {String} metrics - metrics. optional.
   */
  innerMonitorDataDescribeDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('InnerMonitorDataDescribeDisk', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   * @param {String} InstanceId - resourceId. required.
   * @param {String} startTime - startTime. required.
   * @param {String} endTime - endTime. required.
   * @param {Integer} period - period. optional.
   * @param {String} metrics - metrics. optional.
   */
  innerMonitorDataDescribeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'startTime')) {
      throw new TypeError('parameter "startTime" is required');
    }

    if (!hasOwnProperty(params, 'endTime')) {
      throw new TypeError('parameter "endTime" is required');
    }

    return this.request('InnerMonitorDataDescribeInstance', params, options);
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
   * @param {String} instanceId - instanceId. required.
   * @param {Boolean} networkValidation - networkValidation. required.
   */
  innerNetworkModifyValidation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'instanceId')) {
      throw new TypeError('parameter "instanceId" is required');
    }

    if (!hasOwnProperty(params, 'networkValidation')) {
      throw new TypeError('parameter "networkValidation" is required');
    }

    return this.request('InnerNetworkModifyValidation', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} OrderIds - orderIds. optional.
   */
  innerOpenSnapshotService(params = {}, options = {}) {
    return this.request('InnerOpenSnapshotService', params, options);
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
   * @param {String} OrderId - orderId. required.
   * @param {String} OrderUid - orderUid. required.
   * @param {String} orderIdCallbackToken - orderIdCallbackToken. optional.
   */
  innerProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'OrderUid')) {
      throw new TypeError('parameter "OrderUid" is required');
    }

    return this.request('InnerProduce', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ActionType - actionType. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EntityType - entityType. required.
   * @param {String} EntityKey - entityKey. required.
   */
  innerQueryConstraints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionType')) {
      throw new TypeError('parameter "ActionType" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EntityType')) {
      throw new TypeError('parameter "EntityType" is required');
    }

    if (!hasOwnProperty(params, 'EntityKey')) {
      throw new TypeError('parameter "EntityKey" is required');
    }

    return this.request('InnerQueryConstraints', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionNo - regionNo. required.
   */
  innerQueryCopyImageSupportRegions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('InnerQueryCopyImageSupportRegions', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} BizRegionId - regionNo. optional.
   * @param {RepeatList} VSwitchId - vSwitchIds. optional.
   * @param {String} NetworkType - ecsNetworkType. optional.
   * @param {String} TagKey - tagKey. optional.
   * @param {RepeatList} TagValue - tagValues. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Metric - metric. required.
   */
  innerQueryEcsCountByCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('InnerQueryEcsCountByCondition', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ActionType - actionType. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EntityType - entityType. required.
   * @param {RepeatList} Filter - filterKeyValueModels. optional.
   */
  innerQueryExplanation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionType')) {
      throw new TypeError('parameter "ActionType" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EntityType')) {
      throw new TypeError('parameter "EntityType" is required');
    }

    return this.request('InnerQueryExplanation', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} ImageId - imageId. optional.
   * @param {RepeatList} BindStatus - bindStatuses. optional.
   */
  innerQueryImageBindByInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('InnerQueryImageBindByInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} AliUids - aliUids. required.
   * @param {String} RegionId - regionNo. required.
   * @param {RepeatList} InstanceTypes - instanceTypes. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {RepeatList} PrivateIpAddresses - privateIpAddresses. optional.
   * @param {RepeatList} PublicIpAddresses - publicIpAddresses. optional.
   */
  innerQueryInstanceCreatedByProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUids')) {
      throw new TypeError('parameter "AliUids" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerQueryInstanceCreatedByProduct', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} DiskId - instanceIds. required.
   */
  innerQueryLazyLoadProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('InnerQueryLazyLoadProgress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {String} RegionId - regionId. optional.
   */
  innerQueryRetainVcpu(params = {}, options = {}) {
    return this.request('InnerQueryRetainVcpu', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {Boolean} IsSuccess - isSuccess. optional.
   * @param {RepeatList} InstanceIds - instanceIds. optional.
   * @param {String} Type - type. required.
   * @param {Long} VcpuTotal - vcpuTotal. optional.
   */
  innerRefundVcpuCallBack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('InnerRefundVcpuCallBack', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} Timestamp - timestamp. optional.
   * @param {Boolean} IsLock - isLock. optional.
   */
  innerRefundVcpuQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('InnerRefundVcpuQuery', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   */
  innerRegionSupportInstancetypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerRegionSupportInstancetypes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DedicatedHostId - dedicatedHostId. required.
   */
  innerReleaseDedicatedHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DedicatedHostId')) {
      throw new TypeError('parameter "DedicatedHostId" is required');
    }

    return this.request('InnerReleaseDedicatedHost', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Long} aliUid - aliUid. required.
   * @param {String} bid - bid. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} PublicIpAddress - ip. required.
   * @param {Boolean} DryRun - dryRun. optional.
   */
  innerReleasePublicIpAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliUid')) {
      throw new TypeError('parameter "aliUid" is required');
    }

    if (!hasOwnProperty(params, 'bid')) {
      throw new TypeError('parameter "bid" is required');
    }

    if (!hasOwnProperty(params, 'PublicIpAddress')) {
      throw new TypeError('parameter "PublicIpAddress" is required');
    }

    return this.request('InnerReleasePublicIpAddress', params, options);
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
   */
  innerRemedyRenewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'ChargeType')) {
      throw new TypeError('parameter "ChargeType" is required');
    }

    if (!hasOwnProperty(params, 'Commodity')) {
      throw new TypeError('parameter "Commodity" is required');
    }

    return this.request('InnerRemedyRenewInstance', params, options);
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
   */
  innerRenewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'ChargeType')) {
      throw new TypeError('parameter "ChargeType" is required');
    }

    if (!hasOwnProperty(params, 'Commodity')) {
      throw new TypeError('parameter "Commodity" is required');
    }

    return this.request('InnerRenewInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {Long} ShardingKey - shardingKey. optional.
   * @param {String} Message - message. required.
   */
  innerSendMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('InnerSendMessage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageNo - pageNo. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {Long} ecsOwnerAliUid - ecsOwnerAliUid. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {Long} snapshotIndexId - snapshotId. optional.
   * @param {Long} snapshotOwnerAliUid - snapshotOwnerAliUid. optional.
   * @param {Boolean} async - async. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} bid - bid. optional.
   */
  innerSnapshotDescribeMountedSnapshots(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pageNo')) {
      throw new TypeError('parameter "pageNo" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('InnerSnapshotDescribeMountedSnapshots', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   */
  innerSnapshotIsUserAutoSnapshotPause(params = {}, options = {}) {
    return this.request('InnerSnapshotIsUserAutoSnapshotPause', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Integer} pageNo - pageNo. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {String} gmtCreatedEnd - gmtCreatedEnd. optional.
   * @param {Integer} snapshotSizeLowLimit - snapshotSizeLowLimit. optional.
   * @param {String} gmtCreatedBegin - gmtCreatedBegin. optional.
   * @param {String} diskType - diskType. optional.
   * @param {Boolean} createFinished - createFinished. optional.
   * @param {Integer} snapshotSizeLimit - snapshotSizeLimit. optional.
   * @param {String} ecsSnapshotTypes - ecsSnapshotTypes. optional.
   * @param {String} fuzzySnapshotName - fuzzySnapshotName. optional.
   * @param {String} ecsSnapshotStatus - ecsSnapshotStatus. optional.
   * @param {String} deviceType - deviceType. optional.
   * @param {String} diskId - diskId. optional.
   * @param {Long} regionIndexId - regionId. optional.
   * @param {String} bid - bid. optional.
   * @param {String} aliUids - aliUids. required.
   * @param {String} ids - ids. optional.
   * @param {String} excludeSnapshotIds - excludeSnapshotIds. optional.
   * @param {String} regionNo - regionNo. optional.
   * @param {String} snapshotNos - snapshotNos. optional.
   * @param {Boolean} isSyncHouyi - isSyncHouyi. optional.
   * @param {String} ecsIds - ecsIds. optional.
   * @param {String} deviceNo - deviceNo. optional.
   * @param {String} quoteType - quoteType. optional.
   * @param {String} snapshotIds - snapshotIds. optional.
   * @param {String} snapshotNickName - snapshotNickName. optional.
   */
  innerSnapshotQueryUserSnapshots(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pageNo')) {
      throw new TypeError('parameter "pageNo" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    if (!hasOwnProperty(params, 'aliUids')) {
      throw new TypeError('parameter "aliUids" is required');
    }

    return this.request('InnerSnapshotQueryUserSnapshots', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Long} snapshotIndexId - snapshotId. optional.
   * @param {Long} snapshotOwnerAliUid - snapshotOwnerAliUid. optional.
   * @param {Long} ecsOwnerAliUid - ecsOwnerAliUid. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {Boolean} async - async. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {String} bid - bid. optional.
   */
  innerSnapshotSecurityMount(params = {}, options = {}) {
    return this.request('InnerSnapshotSecurityMount', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {Long} ecsOwnerAliUid - ecsOwnerAliUid. optional.
   * @param {Boolean} async - async. optional.
   * @param {Long} snapshotIndexId - snapshotId. optional.
   * @param {Long} aliUid - aliUid. optional.
   * @param {Long} snapshotOwnerAliUid - snapshotOwnerAliUid. optional.
   * @param {String} bid - bid. optional.
   */
  innerSnapshotSecurityUnmount(params = {}, options = {}) {
    return this.request('InnerSnapshotSecurityUnmount', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {Long} zoneId - zoneId. required.
   * @param {String} regionNo - regionNo. required.
   */
  innerStockListUsedVms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'zoneId')) {
      throw new TypeError('parameter "zoneId" is required');
    }

    if (!hasOwnProperty(params, 'regionNo')) {
      throw new TypeError('parameter "regionNo" is required');
    }

    return this.request('InnerStockListUsedVms', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} instanceId - instanceId. optional.
   * @param {Boolean} async - async. optional.
   * @param {String} userData - userData. optional.
   */
  innerVncQueryPasswd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('InnerVncQueryPasswd', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Platform - platform. required.
   * @param {String} Remark - remark. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  keepUsing(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Platform')) {
      throw new TypeError('parameter "Platform" is required');
    }

    return this.request('KeepUsing', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listAllIzMap(params = {}, options = {}) {
    return this.request('ListAllIzMap', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listBandwidthHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListBandwidthHistory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  listEcsInstanceOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListEcsInstanceOrderInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} InstanceId - instanceIds. required.
   * @param {String} RegionNo - regionNo. optional.
   */
  listImageBinding(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListImageBinding', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} ResourceId - resourceIds. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {String} NextToken - nextToken. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {Long} TagOwnerUid - tagUid. optional.
   * @param {String} TagOwnerBid - tagBid. optional.
   * @param {String} Scope - scope. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('ListTagResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AliUid - aliUid. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EventId - eventId. required.
   * @param {String} NewPlanTime - planTime. required.
   * @param {String} NewExpireTime - expireTime. required.
   */
  modifySystemEventAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'NewPlanTime')) {
      throw new TypeError('parameter "NewPlanTime" is required');
    }

    if (!hasOwnProperty(params, 'NewExpireTime')) {
      throw new TypeError('parameter "NewExpireTime" is required');
    }

    return this.request('ModifySystemEventAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} OrderId - orderId. optional.
   * @param {String} RefundType - refundType. required.
   * @param {String} RefundExtendParams - refundExtendParams. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} OrderIds - orderIds. optional.
   * @param {String} ResourceType - resourceType. optional.
   */
  notifyRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RefundType')) {
      throw new TypeError('parameter "RefundType" is required');
    }

    return this.request('NotifyRefund', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} CommodityCode - commodityCode. required.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryAvailableRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityCode')) {
      throw new TypeError('parameter "CommodityCode" is required');
    }

    return this.request('QueryAvailableRegion', params, options);
  }

  /**
   * @param {String} callerBid - callerBid. optional.
   * @param {Long} callerUid - callerUid. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  queryEcsElasticUpgradeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryEcsElasticUpgradeInfo', params, options);
  }

  /**
   * @param {String} callerBid - callerBid. optional.
   * @param {Long} callerUid - callerUid. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  queryEcsInstanceOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryEcsInstanceOrderInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} ImageId - imageIds. required.
   * @param {String} ChargeType - chargeType. optional.
   */
  queryImageByImageId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('QueryImageByImageId', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} ImageNo - imageNo. required.
   * @param {String} ImageRegionNo - regionNo. required.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryImageCopyProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'ImageNo')) {
      throw new TypeError('parameter "ImageNo" is required');
    }

    if (!hasOwnProperty(params, 'ImageRegionNo')) {
      throw new TypeError('parameter "ImageRegionNo" is required');
    }

    return this.request('QueryImageCopyProgress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductVersion - productVersion. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryImageIdByRegion(params = {}, options = {}) {
    return this.request('QueryImageIdByRegion', params, options);
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
   * @param {String} data - data. required.
   * @param {String} instanceId - instanceId. required.
   */
  queryInstanceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    if (!hasOwnProperty(params, 'instanceId')) {
      throw new TypeError('parameter "instanceId" is required');
    }

    return this.request('QueryInstanceInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMarketImageCategory(params = {}, options = {}) {
    return this.request('QueryMarketImageCategory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} MarketImageCategory - marketImageCategory. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Boolean} SupportIoOptimized - supportIoOptimized. optional.
   * @param {Boolean} Extra - extra. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryMarketImages(params = {}, options = {}) {
    return this.request('QueryMarketImages', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryNeedKeepUsing(params = {}, options = {}) {
    return this.request('QueryNeedKeepUsing', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Migrate - migrate. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryResourceModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryResourceModify', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} DbId - id. optional.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} ResourceTransitId - resourceTransitId. optional.
   * @param {RepeatList} ResourceTypeList - resourceTypes. optional.
   * @param {String} FromRegionNo - fromRegionNo. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {RepeatList} ResourceStatusList - status. optional.
   * @param {String} ResourceName - name. optional.
   * @param {Integer} PageNo - start. optional.
   * @param {Integer} PageSize - count. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryResourceTransit(params = {}, options = {}) {
    return this.request('QueryResourceTransit', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} Offset - offset. optional. default: 0.
   * @param {String} CreationStartTime - creationStartTime. optional.
   * @param {String} CreationEndTime - creationEndTime. optional.
   * @param {String} SnapshotNickName - snapshotNickName. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryUsableSnapshots(params = {}, options = {}) {
    return this.request('QueryUsableSnapshots', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  queryUserInfo(params = {}, options = {}) {
    return this.request('QueryUserInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} DiskIds - diskIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Password - password. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {Boolean} AutoStartInstance - autoStartInstance. optional. default: false.
   * @param {String} SecurityEnhancementStrategy - securityEnhancementStrategy. optional.
   */
  reInitDisks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskIds')) {
      throw new TypeError('parameter "DiskIds" is required');
    }

    return this.request('ReInitDisks', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} Tag - tags. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerUid - tagUid. required.
   * @param {String} OwnerBid - tagBid. optional.
   */
  removeSystemTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerUid')) {
      throw new TypeError('parameter "OwnerUid" is required');
    }

    return this.request('RemoveSystemTags', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ExpectedReleaseTime - expectedReleaseTime. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reopenInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReopenInstance', params, options);
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
   * @param {String} RegionId - regionNo. required.
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Bid - bid. required.
   * @param {String} NewOwnerId - newOwnerId. required.
   * @param {String} ToSecurityGroupId - toSecurityGroupId. required.
   * @param {RepeatList} InstanceIds - instanceIds. required.
   * @param {String} ToVSwitchId - toVSwitchId. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   * @param {Boolean} KeepPublicIp - keepPublicIp. optional.
   * @param {Long} ToVSwitchAliUid - toVSwitchUid. optional.
   * @param {RepeatList} PrivateIps - privateIps. optional.
   */
  resourceOwnershipTransfer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'NewOwnerId')) {
      throw new TypeError('parameter "NewOwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ToSecurityGroupId')) {
      throw new TypeError('parameter "ToSecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('ResourceOwnershipTransfer', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ArgeementType - type. required.
   * @param {String} Bid - bid. required.
   * @param {Long} AliUid - aliUid. required.
   */
  signAgreement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ArgeementType')) {
      throw new TypeError('parameter "ArgeementType" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('SignAgreement', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} Tag - tags. required.
   * @param {Long} TagOwnerUid - tagUid. optional.
   * @param {String} TagOwnerBid - tagBid. optional.
   * @param {String} Scope - scope. optional.
   */
  tagResourcesSystemTags(params = {}, options = {}) {
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

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('TagResourcesSystemTags', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} TagKey - tagKeys. optional.
   * @param {Boolean} All - deleteAll. optional.
   * @param {Long} TagOwnerUid - tagUid. optional.
   * @param {String} TagOwnerBid - tagBid. optional.
   */
  untagResourcesSystemTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('UntagResourcesSystemTags', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} ImageUrl - imageUrl. required.
   * @param {String} ImageName - name. required.
   * @param {String} Description - description. optional.
   * @param {String} MetaData - metaData. required.
   * @param {String} FromRegionNo - regionNo. required.
   * @param {String} MD5 - md5. required.
   * @param {Long} OsTypeId - osTypeId. required.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {RepeatList} Tag - tagKeyValueParams. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  uploadSystemImageAtOrigin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageUrl')) {
      throw new TypeError('parameter "ImageUrl" is required');
    }

    if (!hasOwnProperty(params, 'ImageName')) {
      throw new TypeError('parameter "ImageName" is required');
    }

    if (!hasOwnProperty(params, 'MetaData')) {
      throw new TypeError('parameter "MetaData" is required');
    }

    if (!hasOwnProperty(params, 'FromRegionNo')) {
      throw new TypeError('parameter "FromRegionNo" is required');
    }

    if (!hasOwnProperty(params, 'MD5')) {
      throw new TypeError('parameter "MD5" is required');
    }

    if (!hasOwnProperty(params, 'OsTypeId')) {
      throw new TypeError('parameter "OsTypeId" is required');
    }

    return this.request('UploadSystemImageAtOrigin', params, options);
  }

}

module.exports = Client;
