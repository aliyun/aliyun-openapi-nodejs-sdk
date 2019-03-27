
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-12';
    super(config);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnId. required.
   * @param {String} CbnBandwidthPackageId - cbnBandwidthPackageId. required.
   */
  associateCbnBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    if (!hasOwnProperty(params, 'CbnBandwidthPackageId')) {
      throw new TypeError('parameter "CbnBandwidthPackageId" is required');
    }

    return this.request('AssociateCbnBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnId. required.
   * @param {String} CenBandwidthPackageId - cbnBandwidthPackageId. required.
   */
  associateCenBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'CenBandwidthPackageId')) {
      throw new TypeError('parameter "CenBandwidthPackageId" is required');
    }

    return this.request('AssociateCenBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnId. required.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   * @param {Long} ChildInstanceOwnerId - childInstanceAliUid. optional.
   */
  attachCbnChildInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    return this.request('AttachCbnChildInstance', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnId. required.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   * @param {Long} ChildInstanceOwnerId - childInstanceAliUid. optional.
   */
  attachCenChildInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    return this.request('AttachCenChildInstance', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  createCbn(params = {}, options = {}) {
    return this.request('CreateCbn', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} GeographicRegionAId - localGeographicRegion. required.
   * @param {String} GeographicRegionBId - oppositeGeographicRegion. required.
   * @param {String} BandwidthPackageChargeType - bandwidthPackageChargeType. optional.
   */
  createCbnBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    if (!hasOwnProperty(params, 'GeographicRegionAId')) {
      throw new TypeError('parameter "GeographicRegionAId" is required');
    }

    if (!hasOwnProperty(params, 'GeographicRegionBId')) {
      throw new TypeError('parameter "GeographicRegionBId" is required');
    }

    return this.request('CreateCbnBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ProtectionLevel - protectionLevel. optional.
   */
  createCen(params = {}, options = {}) {
    return this.request('CreateCen', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} GeographicRegionAId - localGeographicRegion. required.
   * @param {String} GeographicRegionBId - oppositeGeographicRegion. required.
   * @param {String} BandwidthPackageChargeType - bandwidthPackageChargeType. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   */
  createCenBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    if (!hasOwnProperty(params, 'GeographicRegionAId')) {
      throw new TypeError('parameter "GeographicRegionAId" is required');
    }

    if (!hasOwnProperty(params, 'GeographicRegionBId')) {
      throw new TypeError('parameter "GeographicRegionBId" is required');
    }

    return this.request('CreateCenBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cenId. required.
   * @param {String} CenRegionId - cenRegionId. required.
   * @param {String} TransmitDirection - transmitDirection. required.
   * @param {String} Description - description. optional.
   * @param {Integer} Priority - priority. required.
   * @param {String} MapResult - mapResult. required.
   * @param {Integer} NextPriority - nextPriority. optional.
   * @param {RepeatList} SourceInstanceIds - sourceInstanceIds. optional.
   * @param {RepeatList} DestinationInstanceIds - destinationInstanceIds. optional.
   * @param {RepeatList} SourceRouteTableIds - sourceRouteTableIds. optional.
   * @param {RepeatList} DestinationRouteTableIds - destinationRouteTableIds. optional.
   * @param {RepeatList} SourceRegionIds - sourceRegionIds. optional.
   * @param {RepeatList} SourceChildInstanceTypes - sourceChildInstanceTypes. optional.
   * @param {RepeatList} DestinationChildInstanceTypes - destinationChildInstanceTypes. optional.
   * @param {RepeatList} DestinationCidrBlocks - destinationCidrBlocks. optional.
   * @param {String} CidrMatchMode - cidrMatchMode. optional.
   * @param {RepeatList} RouteTypes - routeTypes. optional.
   * @param {RepeatList} MatchAsns - matchAsns. optional.
   * @param {String} AsPathMatchMode - asPathMatchMode. optional.
   * @param {Integer} AsPathLength - asPathLength. optional.
   * @param {RepeatList} MatchCommunitySet - matchCommunities. optional.
   * @param {String} CommunityMatchMode - communityMatchMode. optional.
   * @param {RepeatList} OperateCommunitySet - operateCommunities. optional.
   * @param {String} CommunityOperateMode - communityOperateMode. optional.
   * @param {Integer} Preference - preference. optional.
   */
  createCenRouteMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'CenRegionId')) {
      throw new TypeError('parameter "CenRegionId" is required');
    }

    if (!hasOwnProperty(params, 'TransmitDirection')) {
      throw new TypeError('parameter "TransmitDirection" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'MapResult')) {
      throw new TypeError('parameter "MapResult" is required');
    }

    return this.request('CreateCenRouteMap', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnId. required.
   */
  deleteCbn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    return this.request('DeleteCbn', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnBandwidthPackageId - cbnBandwidthPackageId. required.
   */
  deleteCbnBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnBandwidthPackageId')) {
      throw new TypeError('parameter "CbnBandwidthPackageId" is required');
    }

    return this.request('DeleteCbnBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnId. required.
   */
  deleteCen(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    return this.request('DeleteCen', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenBandwidthPackageId - cbnBandwidthPackageId. required.
   */
  deleteCenBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenBandwidthPackageId')) {
      throw new TypeError('parameter "CenBandwidthPackageId" is required');
    }

    return this.request('DeleteCenBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cenId. required.
   * @param {String} CenRegionId - cenRegionId. required.
   * @param {String} RouteMapId - routeMapId. required.
   */
  deleteCenRouteMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'CenRegionId')) {
      throw new TypeError('parameter "CenRegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouteMapId')) {
      throw new TypeError('parameter "RouteMapId" is required');
    }

    return this.request('DeleteCenRouteMap', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cenId. required.
   * @param {String} Host - host. required.
   * @param {String} HostRegionId - hostRegionId. required.
   * @param {String} AccessRegionId - accessRegionId. required.
   */
  deleteRouteServiceInCen(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    if (!hasOwnProperty(params, 'HostRegionId')) {
      throw new TypeError('parameter "HostRegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessRegionId')) {
      throw new TypeError('parameter "AccessRegionId" is required');
    }

    return this.request('DeleteRouteServiceInCen', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CbnId - cbnId. required.
   */
  describeCbnAssociatedBandwidthPackages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    return this.request('DescribeCbnAssociatedBandwidthPackages', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CbnId - cbnId. required.
   */
  describeCbnAttachedChildInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    return this.request('DescribeCbnAttachedChildInstances', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CbnBandwidthPackageId - cbnBandwidthPackageId. required.
   */
  describeCbnBandwidthPackageAssociatedCbns(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnBandwidthPackageId')) {
      throw new TypeError('parameter "CbnBandwidthPackageId" is required');
    }

    return this.request('DescribeCbnBandwidthPackageAssociatedCbns', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. optional.
   * @param {Boolean} IsOrKey - isOrKey. optional. default: false.
   */
  describeCbnBandwidthPackages(params = {}, options = {}) {
    return this.request('DescribeCbnBandwidthPackages', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CbnId - cbnId. required.
   * @param {String} GeographicRegionAId - localGeographicRegion. required.
   * @param {String} GeographicRegionBId - oppositeGeographicRegion. required.
   */
  describeCbnGeographicSpanRemainingBandwidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    if (!hasOwnProperty(params, 'GeographicRegionAId')) {
      throw new TypeError('parameter "GeographicRegionAId" is required');
    }

    if (!hasOwnProperty(params, 'GeographicRegionBId')) {
      throw new TypeError('parameter "GeographicRegionBId" is required');
    }

    return this.request('DescribeCbnGeographicSpanRemainingBandwidth', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CbnId - cbnId. optional.
   */
  describeCbnInterRegionBandwidthLimits(params = {}, options = {}) {
    return this.request('DescribeCbnInterRegionBandwidthLimits', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnInstanceId. required.
   * @param {String} CbnRegionId - cbnRegionDomainRegionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeCbnRegionDomainRouteEntries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    if (!hasOwnProperty(params, 'CbnRegionId')) {
      throw new TypeError('parameter "CbnRegionId" is required');
    }

    return this.request('DescribeCbnRegionDomainRouteEntries', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnInstanceId. optional.
   * @param {String} VbrInstanceRegionId - vbrInstanceRegionId. required.
   * @param {String} VbrInstanceId - vbrInstanceId. optional.
   * @param {Long} VbrInstanceOwnerId - vbrInstanceAliUid. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeCbnVbrHealthCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VbrInstanceRegionId')) {
      throw new TypeError('parameter "VbrInstanceRegionId" is required');
    }

    return this.request('DescribeCbnVbrHealthCheck', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. optional.
   */
  describeCbns(params = {}, options = {}) {
    return this.request('DescribeCbns', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnId. required.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   */
  describeCenAttachedChildInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    return this.request('DescribeCenAttachedChildInstanceAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CenId - cbnId. required.
   * @param {String} ChildInstanceType - childInstanceType. optional.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. optional.
   */
  describeCenAttachedChildInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    return this.request('DescribeCenAttachedChildInstances', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. optional.
   * @param {Boolean} IsOrKey - isOrKey. optional. default: false.
   */
  describeCenBandwidthPackages(params = {}, options = {}) {
    return this.request('DescribeCenBandwidthPackages', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnInstanceId. required.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   */
  describeCenChildInstanceRouteEntries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    return this.request('DescribeCenChildInstanceRouteEntries', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CenId - cbnId. required.
   * @param {String} GeographicRegionAId - localGeographicRegion. required.
   * @param {String} GeographicRegionBId - oppositeGeographicRegion. required.
   */
  describeCenGeographicSpanRemainingBandwidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'GeographicRegionAId')) {
      throw new TypeError('parameter "GeographicRegionAId" is required');
    }

    if (!hasOwnProperty(params, 'GeographicRegionBId')) {
      throw new TypeError('parameter "GeographicRegionBId" is required');
    }

    return this.request('DescribeCenGeographicSpanRemainingBandwidth', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} GeographicSpanId - geographicSpanId. optional.
   */
  describeCenGeographicSpans(params = {}, options = {}) {
    return this.request('DescribeCenGeographicSpans', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CenId - cbnId. optional.
   */
  describeCenInterRegionBandwidthLimits(params = {}, options = {}) {
    return this.request('DescribeCenInterRegionBandwidthLimits', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CenId - cenId. required.
   * @param {String} AccessRegionId - accessRegionId. optional.
   * @param {String} HostRegionId - hostRegionId. optional.
   */
  describeCenPrivateZoneRoutes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    return this.request('DescribeCenPrivateZoneRoutes', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnInstanceId. required.
   * @param {String} CenRegionId - cbnRegionDomainRegionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} Status - status. optional. default: Active.
   */
  describeCenRegionDomainRouteEntries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'CenRegionId')) {
      throw new TypeError('parameter "CenRegionId" is required');
    }

    return this.request('DescribeCenRegionDomainRouteEntries', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CenId - cenId. required.
   * @param {String} RouteMapId - routeMapId. optional.
   * @param {String} CenRegionId - cenRegionId. optional.
   * @param {String} TransmitDirection - transmitDirection. optional.
   */
  describeCenRouteMaps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    return this.request('DescribeCenRouteMaps', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnInstanceId. optional.
   * @param {String} VbrInstanceRegionId - vbrInstanceRegionId. required.
   * @param {String} VbrInstanceId - vbrInstanceId. optional.
   * @param {Long} VbrInstanceOwnerId - vbrInstanceAliUid. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeCenVbrHealthCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VbrInstanceRegionId')) {
      throw new TypeError('parameter "VbrInstanceRegionId" is required');
    }

    return this.request('DescribeCenVbrHealthCheck', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. optional.
   * @param {RepeatList} Tag - tags. optional.
   */
  describeCens(params = {}, options = {}) {
    return this.request('DescribeCens', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProductType - productType. optional.
   */
  describeChildInstanceRegions(params = {}, options = {}) {
    return this.request('DescribeChildInstanceRegions', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} GeographicRegionId - geographicRegionId. required.
   */
  describeGeographicRegionMembership(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GeographicRegionId')) {
      throw new TypeError('parameter "GeographicRegionId" is required');
    }

    return this.request('DescribeGeographicRegionMembership', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CenId - cbnId. required.
   * @param {String} ProductType - productType. required.
   */
  describeGrantRulesToCen(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    return this.request('DescribeGrantRulesToCen', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CenId - cenId. required.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   * @param {String} ChildInstanceRouteTableId - childInstanceRouteTableId. optional.
   * @param {String} DestinationCidrBlock - destinationCidrBlock. optional.
   */
  describePublishedRouteEntries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    return this.request('DescribePublishedRouteEntries', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   * @param {String} ChildInstanceRouteTableId - childInstanceRouteTableId. required.
   * @param {String} DestinationCidrBlock - destinationCidrBlock. optional.
   */
  describeRouteConflict(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRouteTableId')) {
      throw new TypeError('parameter "ChildInstanceRouteTableId" is required');
    }

    return this.request('DescribeRouteConflict', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} CenId - cenId. optional.
   * @param {String} Host - host. optional.
   * @param {String} HostRegionId - hostRegionId. optional.
   * @param {String} AccessRegionId - accessRegionId. optional.
   */
  describeRouteServicesInCen(params = {}, options = {}) {
    return this.request('DescribeRouteServicesInCen', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnId. required.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   * @param {Long} ChildInstanceOwnerId - childInstanceAliUid. optional.
   */
  detachCbnChildInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    return this.request('DetachCbnChildInstance', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnId. required.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   * @param {Long} ChildInstanceOwnerId - childInstanceAliUid. optional.
   * @param {Long} CenOwnerId - cbnAliUid. optional.
   */
  detachCenChildInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    return this.request('DetachCenChildInstance', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnInstanceId. required.
   * @param {String} VbrInstanceRegionId - vbrInstanceRegionId. required.
   * @param {String} VbrInstanceId - vbrInstanceId. required.
   * @param {Long} VbrInstanceOwnerId - vbrInstanceAliUid. optional.
   */
  disableCbnVbrHealthCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    if (!hasOwnProperty(params, 'VbrInstanceRegionId')) {
      throw new TypeError('parameter "VbrInstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrInstanceId')) {
      throw new TypeError('parameter "VbrInstanceId" is required');
    }

    return this.request('DisableCbnVbrHealthCheck', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnInstanceId. required.
   * @param {String} VbrInstanceRegionId - vbrInstanceRegionId. required.
   * @param {String} VbrInstanceId - vbrInstanceId. required.
   * @param {Long} VbrInstanceOwnerId - vbrInstanceAliUid. optional.
   */
  disableCenVbrHealthCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'VbrInstanceRegionId')) {
      throw new TypeError('parameter "VbrInstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrInstanceId')) {
      throw new TypeError('parameter "VbrInstanceId" is required');
    }

    return this.request('DisableCenVbrHealthCheck', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnInstanceId. required.
   * @param {String} VbrInstanceRegionId - vbrInstanceRegionId. required.
   * @param {String} VbrInstanceId - vbrInstanceId. required.
   * @param {String} HealthCheckSourceIp - sourceIp. required.
   * @param {String} HealthCheckTargetIp - targetIp. required.
   * @param {Long} VbrInstanceOwnerId - vbrInstanceAliUid. optional.
   */
  enableCbnVbrHealthCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    if (!hasOwnProperty(params, 'VbrInstanceRegionId')) {
      throw new TypeError('parameter "VbrInstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrInstanceId')) {
      throw new TypeError('parameter "VbrInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'HealthCheckSourceIp')) {
      throw new TypeError('parameter "HealthCheckSourceIp" is required');
    }

    if (!hasOwnProperty(params, 'HealthCheckTargetIp')) {
      throw new TypeError('parameter "HealthCheckTargetIp" is required');
    }

    return this.request('EnableCbnVbrHealthCheck', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnInstanceId. required.
   * @param {String} VbrInstanceRegionId - vbrInstanceRegionId. required.
   * @param {String} VbrInstanceId - vbrInstanceId. required.
   * @param {String} HealthCheckSourceIp - sourceIp. required.
   * @param {String} HealthCheckTargetIp - targetIp. required.
   * @param {Long} VbrInstanceOwnerId - vbrInstanceAliUid. optional.
   */
  enableCenVbrHealthCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'VbrInstanceRegionId')) {
      throw new TypeError('parameter "VbrInstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrInstanceId')) {
      throw new TypeError('parameter "VbrInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'HealthCheckSourceIp')) {
      throw new TypeError('parameter "HealthCheckSourceIp" is required');
    }

    if (!hasOwnProperty(params, 'HealthCheckTargetIp')) {
      throw new TypeError('parameter "HealthCheckTargetIp" is required');
    }

    return this.request('EnableCenVbrHealthCheck', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} TagOwnerBid - resourceBid. optional.
   * @param {Long} TagOwnerUid - resourceUid. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {String} NextToken - nextToken. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('ListTagResources', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyCbnAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    return this.request('ModifyCbnAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} CbnBandwidthPackageId - cbnBandwidthPackageId. required.
   */
  modifyCbnBandwidthPackageAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnBandwidthPackageId')) {
      throw new TypeError('parameter "CbnBandwidthPackageId" is required');
    }

    return this.request('ModifyCbnBandwidthPackageAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnBandwidthPackageId - cbnBandwidthPackageId. required.
   * @param {Integer} Bandwidth - bandwidth. required.
   */
  modifyCbnBandwidthPackageSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnBandwidthPackageId')) {
      throw new TypeError('parameter "CbnBandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('ModifyCbnBandwidthPackageSpec', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ProtectionLevel - protectionLevel. optional.
   */
  modifyCenAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    return this.request('ModifyCenAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} CenBandwidthPackageId - cbnBandwidthPackageId. required.
   */
  modifyCenBandwidthPackageAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenBandwidthPackageId')) {
      throw new TypeError('parameter "CenBandwidthPackageId" is required');
    }

    return this.request('ModifyCenBandwidthPackageAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenBandwidthPackageId - cbnBandwidthPackageId. required.
   * @param {Integer} Bandwidth - bandwidth. required.
   */
  modifyCenBandwidthPackageSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenBandwidthPackageId')) {
      throw new TypeError('parameter "CenBandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('ModifyCenBandwidthPackageSpec', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cenId. required.
   * @param {String} CenRegionId - cenRegionId. required.
   * @param {String} RouteMapId - routeMapId. required.
   * @param {String} Description - description. optional.
   * @param {String} MapResult - mapResult. required.
   * @param {Integer} NextPriority - nextPriority. optional.
   * @param {RepeatList} SourceInstanceIds - sourceInstanceIds. optional.
   * @param {RepeatList} DestinationInstanceIds - destinationInstanceIds. optional.
   * @param {RepeatList} SourceRouteTableIds - sourceRouteTableIds. optional.
   * @param {RepeatList} DestinationRouteTableIds - destinationRouteTableIds. optional.
   * @param {RepeatList} SourceRegionIds - sourceRegionIds. optional.
   * @param {RepeatList} SourceChildInstanceTypes - sourceChildInstanceTypes. optional.
   * @param {RepeatList} DestinationChildInstanceTypes - destinationChildInstanceTypes. optional.
   * @param {RepeatList} DestinationCidrBlocks - destinationCidrBlocks. optional.
   * @param {String} CidrMatchMode - cidrMatchMode. optional.
   * @param {RepeatList} RouteTypes - routeTypes. optional.
   * @param {RepeatList} MatchAsns - matchAsns. optional.
   * @param {String} AsPathMatchMode - asPathMatchMode. optional.
   * @param {Integer} AsPathLength - asPathLength. optional.
   * @param {RepeatList} MatchCommunitySet - matchCommunities. optional.
   * @param {String} CommunityMatchMode - communityMatchMode. optional.
   * @param {RepeatList} OperateCommunitySet - operateCommunities. optional.
   * @param {String} CommunityOperateMode - communityOperateMode. optional.
   * @param {Integer} Preference - preference. optional.
   * @param {Integer} Priority - priority. required.
   */
  modifyCenRouteMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'CenRegionId')) {
      throw new TypeError('parameter "CenRegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouteMapId')) {
      throw new TypeError('parameter "RouteMapId" is required');
    }

    if (!hasOwnProperty(params, 'MapResult')) {
      throw new TypeError('parameter "MapResult" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('ModifyCenRouteMap', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cenId. required.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   * @param {String} ChildInstanceRouteTableId - childInstanceRouteTableId. required.
   * @param {String} DestinationCidrBlock - destinationCidrBlock. required.
   */
  publishRouteEntries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRouteTableId')) {
      throw new TypeError('parameter "ChildInstanceRouteTableId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationCidrBlock')) {
      throw new TypeError('parameter "DestinationCidrBlock" is required');
    }

    return this.request('PublishRouteEntries', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} CenId - cenId. required.
   * @param {String} Host - host. required.
   * @param {String} HostRegionId - hostRegionId. required.
   * @param {String} AccessRegionId - accessRegionId. required.
   * @param {Long} UpdateInterval - updateInterval. optional.
   */
  resolveAndRouteServiceInCen(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    if (!hasOwnProperty(params, 'HostRegionId')) {
      throw new TypeError('parameter "HostRegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessRegionId')) {
      throw new TypeError('parameter "AccessRegionId" is required');
    }

    return this.request('ResolveAndRouteServiceInCen', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cenId. required.
   * @param {String} AccessRegionId - accessRegionId. required.
   * @param {String} HostRegionId - hostRegionId. required.
   * @param {String} HostVpcId - hostVpcId. required.
   */
  routePrivateZoneInCenToVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'AccessRegionId')) {
      throw new TypeError('parameter "AccessRegionId" is required');
    }

    if (!hasOwnProperty(params, 'HostRegionId')) {
      throw new TypeError('parameter "HostRegionId" is required');
    }

    if (!hasOwnProperty(params, 'HostVpcId')) {
      throw new TypeError('parameter "HostVpcId" is required');
    }

    return this.request('RoutePrivateZoneInCenToVpc', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnId. required.
   * @param {String} LocalRegionId - localRegionId. required.
   * @param {String} OppositeRegionId - oppositeRegionId. required.
   * @param {Long} BandwidthLimit - bandwidthLimit. required.
   */
  setCbnInterRegionBandwidthLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    if (!hasOwnProperty(params, 'LocalRegionId')) {
      throw new TypeError('parameter "LocalRegionId" is required');
    }

    if (!hasOwnProperty(params, 'OppositeRegionId')) {
      throw new TypeError('parameter "OppositeRegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthLimit')) {
      throw new TypeError('parameter "BandwidthLimit" is required');
    }

    return this.request('SetCbnInterRegionBandwidthLimit', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnId. required.
   * @param {String} LocalRegionId - localRegionId. required.
   * @param {String} OppositeRegionId - oppositeRegionId. required.
   * @param {Long} BandwidthLimit - bandwidthLimit. required.
   */
  setCenInterRegionBandwidthLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'LocalRegionId')) {
      throw new TypeError('parameter "LocalRegionId" is required');
    }

    if (!hasOwnProperty(params, 'OppositeRegionId')) {
      throw new TypeError('parameter "OppositeRegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthLimit')) {
      throw new TypeError('parameter "BandwidthLimit" is required');
    }

    return this.request('SetCenInterRegionBandwidthLimit', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} TagOwnerBid - resourceBid. optional.
   * @param {Long} TagOwnerUid - resourceUid. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} Tag - tags. required.
   */
  tagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Tag')) {
      throw new TypeError('parameter "Tag" is required');
    }

    return this.request('TagResources', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CbnId - cbnId. required.
   * @param {String} CbnBandwidthPackageId - cbnBandwidthPackageId. required.
   */
  unassociateCbnBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CbnId')) {
      throw new TypeError('parameter "CbnId" is required');
    }

    if (!hasOwnProperty(params, 'CbnBandwidthPackageId')) {
      throw new TypeError('parameter "CbnBandwidthPackageId" is required');
    }

    return this.request('UnassociateCbnBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cbnId. required.
   * @param {String} CenBandwidthPackageId - cbnBandwidthPackageId. required.
   */
  unassociateCenBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'CenBandwidthPackageId')) {
      throw new TypeError('parameter "CenBandwidthPackageId" is required');
    }

    return this.request('UnassociateCenBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cenId. required.
   * @param {String} AccessRegionId - accessRegionId. required.
   */
  unroutePrivateZoneInCenToVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'AccessRegionId')) {
      throw new TypeError('parameter "AccessRegionId" is required');
    }

    return this.request('UnroutePrivateZoneInCenToVpc', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TagOwnerBid - resourceBid. optional.
   * @param {Long} TagOwnerUid - resourceUid. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} TagKey - tagKeyList. optional.
   */
  untagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('UntagResources', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenId - cenId. required.
   * @param {String} ChildInstanceId - childInstanceId. required.
   * @param {String} ChildInstanceType - childInstanceType. required.
   * @param {String} ChildInstanceRegionId - childInstanceRegionId. required.
   * @param {String} ChildInstanceRouteTableId - childInstanceRouteTableId. required.
   * @param {String} DestinationCidrBlock - destinationCidrBlock. required.
   */
  withdrawPublishedRouteEntries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceId')) {
      throw new TypeError('parameter "ChildInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceType')) {
      throw new TypeError('parameter "ChildInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRegionId')) {
      throw new TypeError('parameter "ChildInstanceRegionId" is required');
    }

    if (!hasOwnProperty(params, 'ChildInstanceRouteTableId')) {
      throw new TypeError('parameter "ChildInstanceRouteTableId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationCidrBlock')) {
      throw new TypeError('parameter "DestinationCidrBlock" is required');
    }

    return this.request('WithdrawPublishedRouteEntries', params, options);
  }

}

module.exports = Client;
