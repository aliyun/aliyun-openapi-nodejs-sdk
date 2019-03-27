
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-04-28';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RouterInterfaceId - routerInterfaceId. required.
   */
  activateRouterInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouterInterfaceId')) {
      throw new TypeError('parameter "RouterInterfaceId" is required');
    }

    return this.request('ActivateRouterInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} FlowLogId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  activeFlowLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FlowLogId')) {
      throw new TypeError('parameter "FlowLogId" is required');
    }

    return this.request('ActiveFlowLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} IpCount - ipCount. required.
   * @param {String} ClientToken - clientToken. optional.
   */
  addBandwidthPackageIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'IpCount')) {
      throw new TypeError('parameter "IpCount" is required');
    }

    return this.request('AddBandwidthPackageIps', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DstCidrBlock - dstCidrBlock. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} RouterId - routerId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addBgpNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DstCidrBlock')) {
      throw new TypeError('parameter "DstCidrBlock" is required');
    }

    if (!hasOwnProperty(params, 'RouterId')) {
      throw new TypeError('parameter "RouterId" is required');
    }

    return this.request('AddBgpNetwork', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} IpInstanceId - ipInstanceId. required.
   */
  addCommonBandwidthPackageIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'IpInstanceId')) {
      throw new TypeError('parameter "IpInstanceId" is required');
    }

    return this.request('AddCommonBandwidthPackageIp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} GlobalAccelerationInstanceId - bandwidthPackageId. required.
   * @param {String} IpInstanceId - ipInstanceId. required.
   */
  addGlobalAccelerationInstanceIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GlobalAccelerationInstanceId')) {
      throw new TypeError('parameter "GlobalAccelerationInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IpInstanceId')) {
      throw new TypeError('parameter "IpInstanceId" is required');
    }

    return this.request('AddGlobalAccelerationInstanceIp', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - instanceId. required.
   * @param {String} AclEntryIp - entryAddr. required.
   * @param {String} AclEntryComment - description. optional.
   */
  addIPv6TranslatorAclListEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'AclEntryIp')) {
      throw new TypeError('parameter "AclEntryIp" is required');
    }

    return this.request('AddIPv6TranslatorAclListEntry', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} ISP - isp. optional.
   * @param {String} Netmode - netmode. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} InternetChargeType - internetChargeType. optional. default: PayByBandwidth.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   */
  allocateEipAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('AllocateEipAddress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} IpAddress - ip. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} ISP - isp. optional.
   * @param {String} Netmode - netmode. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} InternetChargeType - internetChargeType. optional. default: PayByBandwidth.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   */
  allocateEipAddressPro(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('AllocateEipAddressPro', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6GatewayId - ipv6GatewayId. required.
   * @param {String} Ipv6AddressId - ipv6InstanceId. required.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  allocateIpv6InternetBandwidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6GatewayId')) {
      throw new TypeError('parameter "Ipv6GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6AddressId')) {
      throw new TypeError('parameter "Ipv6AddressId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('AllocateIpv6InternetBandwidth', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  allocateVpcIpv6Cidr(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('AllocateVpcIpv6Cidr', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} Bandwidth - bandwidth. optional. default: 100.
   * @param {String} PeerLocation - peerLocation. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CompanyName - companyName. required.
   * @param {String} LineType - lineType. required.
   * @param {String} Si - si. required.
   * @param {String} ConstructionTime - constructionTime. required.
   * @param {RepeatList} PMInfo - pmInfo. optional.
   */
  applyPhysicalConnectionLOA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PeerLocation')) {
      throw new TypeError('parameter "PeerLocation" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CompanyName')) {
      throw new TypeError('parameter "CompanyName" is required');
    }

    if (!hasOwnProperty(params, 'LineType')) {
      throw new TypeError('parameter "LineType" is required');
    }

    if (!hasOwnProperty(params, 'Si')) {
      throw new TypeError('parameter "Si" is required');
    }

    if (!hasOwnProperty(params, 'ConstructionTime')) {
      throw new TypeError('parameter "ConstructionTime" is required');
    }

    return this.request('ApplyPhysicalConnectionLOA', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} InstanceRegionId - bindingInstanceRegion. optional.
   * @param {String} PrivateIpAddress - privateIpAddress. optional.
   */
  associateEipAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AllocationId')) {
      throw new TypeError('parameter "AllocationId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('AssociateEipAddress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} GlobalAccelerationInstanceId - allocationId. required.
   * @param {String} BackendServerId - instanceId. required.
   * @param {String} BackendServerRegionId - bindingInstanceRegion. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} BackendServerType - instanceType. optional.
   */
  associateGlobalAccelerationInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GlobalAccelerationInstanceId')) {
      throw new TypeError('parameter "GlobalAccelerationInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BackendServerId')) {
      throw new TypeError('parameter "BackendServerId" is required');
    }

    if (!hasOwnProperty(params, 'BackendServerRegionId')) {
      throw new TypeError('parameter "BackendServerRegionId" is required');
    }

    return this.request('AssociateGlobalAccelerationInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} HaVipId - haVipId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  associateHaVip(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HaVipId')) {
      throw new TypeError('parameter "HaVipId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('AssociateHaVip', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} VbrId - vbrId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {String} VlanId - vlanId. required.
   * @param {String} CircuitCode - circuitCode. optional.
   * @param {String} LocalGatewayIp - localGatewayIp. optional.
   * @param {String} PeerGatewayIp - peerGatewayIp. optional.
   * @param {String} PeeringSubnetMask - peeringSubnetMask. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  associatePhysicalConnectionToVirtualBorderRouter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrId')) {
      throw new TypeError('parameter "VbrId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    if (!hasOwnProperty(params, 'VlanId')) {
      throw new TypeError('parameter "VlanId" is required');
    }

    return this.request('AssociatePhysicalConnectionToVirtualBorderRouter', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} RouteTableId - routeTableId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  associateRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouteTableId')) {
      throw new TypeError('parameter "RouteTableId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('AssociateRouteTable', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  cancelPhysicalConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    return this.request('CancelPhysicalConnection', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  checkBandwidthPackageOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CheckBandwidthPackageOrderParam', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  checkCommonBandwidthPackageOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CheckCommonBandwidthPackageOrderParam', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  checkNatGatewayOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CheckNatGatewayOrderParam', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} LineCode - lineCode. required.
   * @param {String} LineLabel - lineLabel. required.
   */
  completePhysicalConnectionLOA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'LineCode')) {
      throw new TypeError('parameter "LineCode" is required');
    }

    if (!hasOwnProperty(params, 'LineLabel')) {
      throw new TypeError('parameter "LineLabel" is required');
    }

    return this.request('CompletePhysicalConnectionLOA', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RouterInterfaceId - routerInterfaceId. required.
   */
  connectRouterInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouterInterfaceId')) {
      throw new TypeError('parameter "RouterInterfaceId" is required');
    }

    return this.request('ConnectRouterInterface', params, options);
  }

  /**
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - token. optional.
   */
  convertBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ConvertBandwidthPackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} NatGatewayId - natGatewayId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Integer} IpCount - ipCount. required.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} ISP - isp. optional.
   * @param {String} Zone - zoneId. optional.
   * @param {String} InternetChargeType - internetChargeType. optional. default: PayByBandwidth.
   */
  createBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NatGatewayId')) {
      throw new TypeError('parameter "NatGatewayId" is required');
    }

    if (!hasOwnProperty(params, 'IpCount')) {
      throw new TypeError('parameter "IpCount" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('CreateBandwidthPackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RouterId - routerId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {Long} PeerAsn - peerAsn. required.
   * @param {String} AuthKey - authKey. optional.
   * @param {Boolean} IsFakeAsn - isFakeAsn. optional. default: true.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createBgpGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouterId')) {
      throw new TypeError('parameter "RouterId" is required');
    }

    if (!hasOwnProperty(params, 'PeerAsn')) {
      throw new TypeError('parameter "PeerAsn" is required');
    }

    return this.request('CreateBgpGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BgpGroupId - bgpGroupId. required.
   * @param {String} PeerIpAddress - peerIpAddress. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createBgpPeer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BgpGroupId')) {
      throw new TypeError('parameter "BgpGroupId" is required');
    }

    return this.request('CreateBgpPeer', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} Zone - zone. optional.
   * @param {String} ISP - isp. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {Integer} Ratio - ratio. optional.
   * @param {String} InternetChargeType - chargeType. optional. default: PayByBandwidth.
   */
  createCommonBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('CreateCommonBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} IpAddress - ipAddress. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  createCustomerGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    return this.request('CreateCustomerGateway', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} FlowLogName - flowLogName. optional.
   * @param {String} Description - comment. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} TrafficType - trafficType. required.
   * @param {String} ProjectName - logProject. required.
   * @param {String} LogStoreName - logStore. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createFlowLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'TrafficType')) {
      throw new TypeError('parameter "TrafficType" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'LogStoreName')) {
      throw new TypeError('parameter "LogStoreName" is required');
    }

    return this.request('CreateFlowLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ForwardTableId - forwardTableId. required.
   * @param {String} ExternalIp - externalIp. required.
   * @param {String} ExternalPort - externalPort. required.
   * @param {String} InternalIp - internalIp. required.
   * @param {String} InternalPort - internalPort. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} ForwardEntryName - name. optional.
   */
  createForwardEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ForwardTableId')) {
      throw new TypeError('parameter "ForwardTableId" is required');
    }

    if (!hasOwnProperty(params, 'ExternalIp')) {
      throw new TypeError('parameter "ExternalIp" is required');
    }

    if (!hasOwnProperty(params, 'ExternalPort')) {
      throw new TypeError('parameter "ExternalPort" is required');
    }

    if (!hasOwnProperty(params, 'InternalIp')) {
      throw new TypeError('parameter "InternalIp" is required');
    }

    if (!hasOwnProperty(params, 'InternalPort')) {
      throw new TypeError('parameter "InternalPort" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    return this.request('CreateForwardEntry', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ServiceLocation - serviceLocation. required.
   * @param {String} Bandwidth - bandwidth. required.
   * @param {String} InternetChargeType - internetChargeType. optional. default: PayByBandwidth.
   * @param {String} BandwidthType - bandwidthType. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   */
  createGlobalAccelerationInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceLocation')) {
      throw new TypeError('parameter "ServiceLocation" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('CreateGlobalAccelerationInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VSwitchId - vpcSwitchId. required.
   * @param {String} IpAddress - ipAddress. optional.
   * @param {String} Description - description. optional.
   */
  createHaVip(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    return this.request('CreateHaVip', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} Name - name. optional.
   * @param {String} Spec - spec. optional. default: small.
   * @param {String} PayType - payType. optional. default: PREPAY.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: false.
   * @param {Integer} Bandwidth - bandwidth. optional. default: 10.
   */
  createIPv6Translator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateIPv6Translator', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} AclName - name. required.
   */
  createIPv6TranslatorAclList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclName')) {
      throw new TypeError('parameter "AclName" is required');
    }

    return this.request('CreateIPv6TranslatorAclList', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Ipv6TranslatorId - instanceId. required.
   * @param {String} EntryName - name. optional.
   * @param {String} EntryDescription - description. optional.
   * @param {Integer} AllocateIpv6Port - allocateIpv6Port. required.
   * @param {String} BackendIpv4Addr - backendIpv4Addr. required.
   * @param {Integer} BackendIpv4Port - backendIpv4Port. required.
   * @param {String} TransProtocol - transProtocol. required.
   * @param {Integer} EntryBandwidth - entryBandwidth. optional. default: -1.
   * @param {String} AclStatus - aclStatus. optional. default: off.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclId - aclId. optional.
   */
  createIPv6TranslatorEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6TranslatorId')) {
      throw new TypeError('parameter "Ipv6TranslatorId" is required');
    }

    if (!hasOwnProperty(params, 'AllocateIpv6Port')) {
      throw new TypeError('parameter "AllocateIpv6Port" is required');
    }

    if (!hasOwnProperty(params, 'BackendIpv4Addr')) {
      throw new TypeError('parameter "BackendIpv4Addr" is required');
    }

    if (!hasOwnProperty(params, 'BackendIpv4Port')) {
      throw new TypeError('parameter "BackendIpv4Port" is required');
    }

    if (!hasOwnProperty(params, 'TransProtocol')) {
      throw new TypeError('parameter "TransProtocol" is required');
    }

    return this.request('CreateIPv6TranslatorEntry', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6GatewayId - ipv6GatewayId. required.
   * @param {String} InstanceId - relationKey. required.
   * @param {String} InstanceType - relationType. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createIpv6EgressOnlyRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6GatewayId')) {
      throw new TypeError('parameter "Ipv6GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateIpv6EgressOnlyRule', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Spec - spec. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createIpv6Gateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateIpv6Gateway', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} Spec - spec. optional.
   * @param {RepeatList} BandwidthPackage - bandwidthPackage. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} Duration - duration. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   */
  createNatGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('CreateNatGateway', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DestinationIp - destinationIp. required.
   * @param {String} RouterId - routerId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createNqa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationIp')) {
      throw new TypeError('parameter "DestinationIp" is required');
    }

    if (!hasOwnProperty(params, 'RouterId')) {
      throw new TypeError('parameter "RouterId" is required');
    }

    return this.request('CreateNqa', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessPointId - accessPointId. required.
   * @param {String} Type - type. optional. default: VPC.
   * @param {String} LineOperator - lineOperator. required.
   * @param {Integer} bandwidth - bandwidth. optional. default: 100.
   * @param {String} PeerLocation - peerLocation. required.
   * @param {String} PortType - portType. optional. default: 1000Base-T.
   * @param {String} RedundantPhysicalConnectionId - redundantPhysicalConnectionId. optional.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   * @param {String} CircuitCode - circuitCode. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createPhysicalConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessPointId')) {
      throw new TypeError('parameter "AccessPointId" is required');
    }

    if (!hasOwnProperty(params, 'LineOperator')) {
      throw new TypeError('parameter "LineOperator" is required');
    }

    if (!hasOwnProperty(params, 'PeerLocation')) {
      throw new TypeError('parameter "PeerLocation" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CreatePhysicalConnection', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessPointId - accessPointId. optional.
   * @param {String} Type - type. optional. default: VPC.
   * @param {String} LineOperator - lineOperator. required.
   * @param {Integer} bandwidth - bandwidth. optional. default: 100.
   * @param {String} PeerLocation - peerLocation. required.
   * @param {String} PortType - portType. optional. default: 1000Base-T.
   * @param {String} RedundantPhysicalConnectionId - redundantPhysicalConnectionId. optional.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   * @param {String} CircuitCode - circuitCode. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} InterfaceName - interfaceName. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createPhysicalConnectionNew(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LineOperator')) {
      throw new TypeError('parameter "LineOperator" is required');
    }

    if (!hasOwnProperty(params, 'PeerLocation')) {
      throw new TypeError('parameter "PeerLocation" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CreatePhysicalConnectionNew', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Integer} Period - period. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createPhysicalConnectionOccupancyOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    return this.request('CreatePhysicalConnectionOccupancyOrder', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessPointId - accessPointId. required.
   * @param {String} LineOperator - lineOperator. required.
   * @param {String} PortType - portType. optional. default: 1000Base-T.
   * @param {String} RedundantPhysicalConnectionId - redundantPhysicalConnectionId. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createPhysicalConnectionSetupOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessPointId')) {
      throw new TypeError('parameter "AccessPointId" is required');
    }

    if (!hasOwnProperty(params, 'LineOperator')) {
      throw new TypeError('parameter "LineOperator" is required');
    }

    return this.request('CreatePhysicalConnectionSetupOrder', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} RouteTableId - tableInstanceId. required.
   * @param {String} DestinationCidrBlock - destinationCidrBlock. required.
   * @param {String} NextHopId - nextRouterInstanceId. optional.
   * @param {String} PrivateIpAddress - privateIpAddress. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RouteEntryName - routeEntryName. optional.
   * @param {String} NextHopType - nexthopType. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} NextHopList - nextHopList. optional.
   */
  createRouteEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RouteTableId')) {
      throw new TypeError('parameter "RouteTableId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationCidrBlock')) {
      throw new TypeError('parameter "DestinationCidrBlock" is required');
    }

    return this.request('CreateRouteEntry', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} RouteTableName - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateRouteTable', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Role - role. required.
   * @param {String} OppositeRegionId - oppositeRegionId. required.
   * @param {String} Spec - spec. required.
   * @param {String} RouterType - routerType. required.
   * @param {String} RouterId - routerId. required.
   * @param {String} OppositeInterfaceId - oppositeInterfaceId. optional.
   * @param {String} OppositeRouterId - oppositeRouterId. optional.
   * @param {String} OppositeRouterType - oppositeRouterType. optional. default: VRouter.
   * @param {String} OppositeInterfaceOwnerId - oppositeInterfaceOwnerId. optional.
   * @param {String} HealthCheckSourceIp - healthCheckSourceIp. optional.
   * @param {String} HealthCheckTargetIp - healthCheckTargetIp. optional.
   * @param {String} AccessPointId - accessPointId. optional.
   * @param {String} OppositeAccessPointId - oppositeAccessPointId. optional.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createRouterInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Role')) {
      throw new TypeError('parameter "Role" is required');
    }

    if (!hasOwnProperty(params, 'OppositeRegionId')) {
      throw new TypeError('parameter "OppositeRegionId" is required');
    }

    if (!hasOwnProperty(params, 'Spec')) {
      throw new TypeError('parameter "Spec" is required');
    }

    if (!hasOwnProperty(params, 'RouterType')) {
      throw new TypeError('parameter "RouterType" is required');
    }

    if (!hasOwnProperty(params, 'RouterId')) {
      throw new TypeError('parameter "RouterId" is required');
    }

    return this.request('CreateRouterInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SnatTableId - snatTableId. required.
   * @param {String} SourceVSwitchId - sourceVSwitchId. optional.
   * @param {String} SourceCIDR - sourceCIDR. optional.
   * @param {String} SnatIp - snatIp. required.
   * @param {String} SnatEntryName - name. optional.
   */
  createSnatEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SnatTableId')) {
      throw new TypeError('parameter "SnatTableId" is required');
    }

    if (!hasOwnProperty(params, 'SnatIp')) {
      throw new TypeError('parameter "SnatIp" is required');
    }

    return this.request('CreateSnatEntry', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SslVpnServerId - sslVpnServerId. required.
   * @param {String} Name - name. optional.
   */
  createSslVpnClientCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SslVpnServerId')) {
      throw new TypeError('parameter "SslVpnServerId" is required');
    }

    return this.request('CreateSslVpnClientCert', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} VpnGatewayId - vpnGatewayId. required.
   * @param {String} Name - name. optional.
   * @param {String} ClientIpPool - clientIpPool. required.
   * @param {String} LocalSubnet - subnet. required.
   * @param {String} Proto - proto. optional.
   * @param {String} Cipher - cipher. optional.
   * @param {Integer} Port - port. optional.
   * @param {Boolean} Compress - compress. optional.
   */
  createSslVpnServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpnGatewayId')) {
      throw new TypeError('parameter "VpnGatewayId" is required');
    }

    if (!hasOwnProperty(params, 'ClientIpPool')) {
      throw new TypeError('parameter "ClientIpPool" is required');
    }

    if (!hasOwnProperty(params, 'LocalSubnet')) {
      throw new TypeError('parameter "LocalSubnet" is required');
    }

    return this.request('CreateSslVpnServer', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ZoneId - izNo. required.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} CidrBlock - cidrBlock. required.
   * @param {Integer} Ipv6CidrBlock - ipv6CidrBlock. optional.
   * @param {String} VpcId - vpcInstanceId. required.
   * @param {String} VSwitchName - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createVSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'CidrBlock')) {
      throw new TypeError('parameter "CidrBlock" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('CreateVSwitch', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Long} VbrOwnerId - vbrOwnerId. optional.
   * @param {Integer} VlanId - vlanId. required.
   * @param {String} CircuitCode - circuitCode. optional.
   * @param {String} LocalGatewayIp - localGatewayIp. optional.
   * @param {String} PeerGatewayIp - peerGatewayIp. optional.
   * @param {String} PeeringSubnetMask - peeringSubnetMask. optional.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createVirtualBorderRouter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    if (!hasOwnProperty(params, 'VlanId')) {
      throw new TypeError('parameter "VlanId" is required');
    }

    return this.request('CreateVirtualBorderRouter', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} CidrBlock - cidrBlock. optional. default: 172.16.0.0/12.
   * @param {String} Ipv6CidrBlock - ipv6CidrBlock. optional.
   * @param {Boolean} EnableIpv6 - enableIpv6. optional.
   * @param {String} VpcName - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  createVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateVpc', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} CustomerGatewayId - customerGatewayId. required.
   * @param {String} VpnGatewayId - vpnGatewayId. required.
   * @param {String} Name - name. optional.
   * @param {String} LocalSubnet - localSubnet. required.
   * @param {String} RemoteSubnet - remoteSubnet. required.
   * @param {Boolean} EffectImmediately - effectImmediately. optional. default: false.
   * @param {String} IkeConfig - ikeConfig. optional.
   * @param {String} IpsecConfig - ipsecConfig. optional.
   */
  createVpnConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CustomerGatewayId')) {
      throw new TypeError('parameter "CustomerGatewayId" is required');
    }

    if (!hasOwnProperty(params, 'VpnGatewayId')) {
      throw new TypeError('parameter "VpnGatewayId" is required');
    }

    if (!hasOwnProperty(params, 'LocalSubnet')) {
      throw new TypeError('parameter "LocalSubnet" is required');
    }

    if (!hasOwnProperty(params, 'RemoteSubnet')) {
      throw new TypeError('parameter "RemoteSubnet" is required');
    }

    return this.request('CreateVpnConnection', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} InstanceChargeType - instanceChargeType. optional. default: POSTPAY.
   * @param {Integer} Period - period. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: false.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {Boolean} EnableIpsec - enableIpsec. optional. default: true.
   * @param {Boolean} EnableSsl - enableSsl. optional. default: false.
   * @param {Integer} SslConnections - sslConnections. optional.
   */
  createVpnGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('CreateVpnGateway', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RouterInterfaceId - routerInterfaceId. required.
   */
  deactivateRouterInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouterInterfaceId')) {
      throw new TypeError('parameter "RouterInterfaceId" is required');
    }

    return this.request('DeactivateRouterInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} FlowLogId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deactiveFlowLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FlowLogId')) {
      throw new TypeError('parameter "FlowLogId" is required');
    }

    return this.request('DeactiveFlowLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {Boolean} Force - force. optional.
   */
  deleteBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    return this.request('DeleteBandwidthPackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BgpGroupId - bgpGroupId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteBgpGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BgpGroupId')) {
      throw new TypeError('parameter "BgpGroupId" is required');
    }

    return this.request('DeleteBgpGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DstCidrBlock - dstCidrBlock. required.
   * @param {String} RouterId - routerId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteBgpNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DstCidrBlock')) {
      throw new TypeError('parameter "DstCidrBlock" is required');
    }

    if (!hasOwnProperty(params, 'RouterId')) {
      throw new TypeError('parameter "RouterId" is required');
    }

    return this.request('DeleteBgpNetwork', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BgpPeerId - bgpPeerId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteBgpPeer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BgpPeerId')) {
      throw new TypeError('parameter "BgpPeerId" is required');
    }

    return this.request('DeleteBgpPeer', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} Force - force. optional.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   */
  deleteCommonBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    return this.request('DeleteCommonBandwidthPackage', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} CustomerGatewayId - customerGatewayId. required.
   */
  deleteCustomerGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CustomerGatewayId')) {
      throw new TypeError('parameter "CustomerGatewayId" is required');
    }

    return this.request('DeleteCustomerGateway', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} RouterInterfaceId - routerInterfaceId. required.
   * @param {Boolean} Force - force. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteExpressConnect(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouterInterfaceId')) {
      throw new TypeError('parameter "RouterInterfaceId" is required');
    }

    return this.request('DeleteExpressConnect', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} FlowLogId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteFlowLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FlowLogId')) {
      throw new TypeError('parameter "FlowLogId" is required');
    }

    return this.request('DeleteFlowLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ForwardTableId - forwardTableId. required.
   * @param {String} ForwardEntryId - forwardEntryId. required.
   */
  deleteForwardEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ForwardTableId')) {
      throw new TypeError('parameter "ForwardTableId" is required');
    }

    if (!hasOwnProperty(params, 'ForwardEntryId')) {
      throw new TypeError('parameter "ForwardEntryId" is required');
    }

    return this.request('DeleteForwardEntry', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} GlobalAccelerationInstanceId - allocationId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteGlobalAccelerationInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GlobalAccelerationInstanceId')) {
      throw new TypeError('parameter "GlobalAccelerationInstanceId" is required');
    }

    return this.request('DeleteGlobalAccelerationInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} HaVipId - haVipId. required.
   */
  deleteHaVip(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HaVipId')) {
      throw new TypeError('parameter "HaVipId" is required');
    }

    return this.request('DeleteHaVip', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Ipv6TranslatorId - instanceId. required.
   */
  deleteIPv6Translator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6TranslatorId')) {
      throw new TypeError('parameter "Ipv6TranslatorId" is required');
    }

    return this.request('DeleteIPv6Translator', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - instanceId. required.
   */
  deleteIPv6TranslatorAclList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    return this.request('DeleteIPv6TranslatorAclList', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Ipv6TranslatorEntryId - entryId. optional.
   * @param {String} Ipv6TranslatorId - instanceId. optional.
   */
  deleteIPv6TranslatorEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteIPv6TranslatorEntry', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6EgressOnlyRuleId - ruleId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteIpv6EgressOnlyRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6EgressOnlyRuleId')) {
      throw new TypeError('parameter "Ipv6EgressOnlyRuleId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteIpv6EgressOnlyRule', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6GatewayId - instanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteIpv6Gateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6GatewayId')) {
      throw new TypeError('parameter "Ipv6GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteIpv6Gateway', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6AddressId - ipv6AddressId. optional.
   * @param {String} Ipv6InternetBandwidthId - instanceId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteIpv6InternetBandwidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteIpv6InternetBandwidth', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} NatGatewayId - natGatewayId. required.
   * @param {Boolean} Force - force. optional.
   */
  deleteNatGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NatGatewayId')) {
      throw new TypeError('parameter "NatGatewayId" is required');
    }

    return this.request('DeleteNatGateway', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} NqaId - nqaId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteNqa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NqaId')) {
      throw new TypeError('parameter "NqaId" is required');
    }

    return this.request('DeleteNqa', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  deletePhysicalConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    return this.request('DeletePhysicalConnection', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} RouteTableId - tableInstanceId. optional.
   * @param {String} RouteEntryId - routeEntryId. optional.
   * @param {String} DestinationCidrBlock - destinationCidrBlock. optional.
   * @param {String} NextHopId - nextHopId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {RepeatList} NextHopList - nextHopList. optional.
   */
  deleteRouteEntry(params = {}, options = {}) {
    return this.request('DeleteRouteEntry', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} RouteTableId - instanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouteTableId')) {
      throw new TypeError('parameter "RouteTableId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteRouteTable', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} RouterInterfaceId - routerInterfaceId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteRouterInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouterInterfaceId')) {
      throw new TypeError('parameter "RouterInterfaceId" is required');
    }

    return this.request('DeleteRouterInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SnatTableId - snatTableId. required.
   * @param {String} SnatEntryId - snatEntryId. required.
   */
  deleteSnatEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SnatTableId')) {
      throw new TypeError('parameter "SnatTableId" is required');
    }

    if (!hasOwnProperty(params, 'SnatEntryId')) {
      throw new TypeError('parameter "SnatEntryId" is required');
    }

    return this.request('DeleteSnatEntry', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} SslVpnClientCertId - sslVpnClientCertId. required.
   */
  deleteSslVpnClientCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SslVpnClientCertId')) {
      throw new TypeError('parameter "SslVpnClientCertId" is required');
    }

    return this.request('DeleteSslVpnClientCert', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} SslVpnServerId - sslVpnServerId. required.
   */
  deleteSslVpnServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SslVpnServerId')) {
      throw new TypeError('parameter "SslVpnServerId" is required');
    }

    return this.request('DeleteSslVpnServer', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VSwitchId - instanceId. required.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteVSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    return this.request('DeleteVSwitch', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} VbrId - vbrId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteVirtualBorderRouter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrId')) {
      throw new TypeError('parameter "VbrId" is required');
    }

    return this.request('DeleteVirtualBorderRouter', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DeleteVpc', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} VpnConnectionId - vpnConnectionId. required.
   */
  deleteVpnConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpnConnectionId')) {
      throw new TypeError('parameter "VpnConnectionId" is required');
    }

    return this.request('DeleteVpnConnection', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} VpnGatewayId - vpnGatewayId. required.
   */
  deleteVpnGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpnGatewayId')) {
      throw new TypeError('parameter "VpnGatewayId" is required');
    }

    return this.request('DeleteVpnGateway', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceBid - resourceBid. optional.
   * @param {Long} ResourceUid - resourceUid. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Day - day. required.
   */
  describe95Traffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Day')) {
      throw new TypeError('parameter "Day" is required');
    }

    return this.request('Describe95Traffic', params, options);
  }

  /**
   * @param {RepeatList} Filter - filter. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. optional.
   * @param {String} Name - name. optional.
   * @param {String} HostOperator - hostOperator. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeAccessPoints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeAccessPoints', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Period - period. optional. default: 60.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBandwidthPackageMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeBandwidthPackageMonitorData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Period - period. optional. default: 60.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBandwidthPackagePublicIpMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AllocationId')) {
      throw new TypeError('parameter "AllocationId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeBandwidthPackagePublicIpMonitorData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. optional.
   * @param {String} NatGatewayId - natGatewayId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeBandwidthPackages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeBandwidthPackages', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RouterId - routerId. optional.
   * @param {String} BgpGroupId - bgpGroupId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IsDefault - isDefault. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBgpGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeBgpGroups', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RouterId - vbrId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBgpNetworks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeBgpNetworks', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RouterId - routerId. optional.
   * @param {String} BgpPeerId - bgpPeerId. optional.
   * @param {String} BgpGroupId - bgpGroupId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IsDefault - isDefault. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeBgpPeers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeBgpPeers', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Boolean} IncludeReservationData - includeReservationData. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeCommonBandwidthPackages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCommonBandwidthPackages', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CustomerGatewayId - customerGatewayId. required.
   */
  describeCustomerGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CustomerGatewayId')) {
      throw new TypeError('parameter "CustomerGatewayId" is required');
    }

    return this.request('DescribeCustomerGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CustomerGatewayId - customerGatewayId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeCustomerGateways(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCustomerGateways', params, options);
  }

  /**
   * @param {RepeatList} Tag - tags. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IncludeReservationData - includeReservationData. optional.
   * @param {String} Status - status. optional.
   * @param {String} EipAddress - eipAddress. optional.
   * @param {String} AllocationId - allocationId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ISP - isp. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} LockReason - reason. optional.
   * @param {String} AssociatedInstanceType - associatedInstanceType. optional.
   * @param {String} AssociatedInstanceId - associatedInstanceId. optional.
   * @param {String} ChargeType - chargeType. optional.
   * @param {Filter} Filter - undefined. optional.
   */
  describeEipAddresses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeEipAddresses', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} BandwidthPackageId - bwpId. required.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ISP - isp. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeEipAddressesByBwp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    return this.request('DescribeEipAddressesByBwp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Period - period. optional. default: 60.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeEipMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AllocationId')) {
      throw new TypeError('parameter "AllocationId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeEipMonitorData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} FlowLogName - name. optional.
   * @param {String} FlowLogId - instanceId. optional.
   * @param {String} Description - comment. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} TrafficType - trafficType. optional.
   * @param {String} ProjectName - logProject. optional.
   * @param {String} LogStoreName - logStore. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeFlowLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFlowLogs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ForwardTableId - forwardTableId. required.
   * @param {String} ForwardEntryId - forwardEntryId. optional.
   * @param {String} ExternalIp - externalIp. optional.
   * @param {String} ExternalPort - externalPort. optional.
   * @param {String} InternalIp - internalIp. optional.
   * @param {String} InternalPort - internalPort. optional.
   * @param {String} IpProtocol - ipProtocol. optional.
   * @param {String} ForwardEntryName - name. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeForwardTableEntries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ForwardTableId')) {
      throw new TypeError('parameter "ForwardTableId" is required');
    }

    return this.request('DescribeForwardTableEntries', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ForwardTableId - forwardTableId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeForwardTables(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeForwardTables', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IncludeReservationData - includeReservationData. optional.
   * @param {String} GlobalAccelerationInstanceId - instanceId. optional.
   * @param {String} IpAddress - ipAddress. optional.
   * @param {String} Name - name. optional.
   * @param {String} Status - status. optional.
   * @param {String} BandwidthType - bandwidthType. optional.
   * @param {String} ServiceLocation - serviceLocation. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeGlobalAccelerationInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeGlobalAccelerationInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeGrantRulesToCbn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('DescribeGrantRulesToCbn', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeGrantRulesToCen(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('DescribeGrantRulesToCen', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. optional.
   */
  describeHaVips(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeHaVips', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - type. optional. default: EIP.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeHighDefinitionMonitorLogAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeHighDefinitionMonitorLogAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - instanceId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeIPv6TranslatorAclListAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    return this.request('DescribeIPv6TranslatorAclListAttributes', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - instanceId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} AclName - name. optional.
   */
  describeIPv6TranslatorAclLists(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeIPv6TranslatorAclLists', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Ipv6TranslatorId - instanceId. optional.
   * @param {String} Ipv6TranslatorEntryId - entryId. optional.
   * @param {String} EntryName - name. optional.
   * @param {String} AllocateIpv6Addr - allocateIpv6Addr. optional.
   * @param {Integer} AllocateIpv6Port - allocateIpv6Port. optional.
   * @param {String} BackendIpv4Addr - backendIpv4Addr. optional.
   * @param {Integer} BackendIpv4Port - backendIpv4Port. optional.
   * @param {String} TransProtocol - transProtocol. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclId - aclId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ClientToken - token. optional.
   */
  describeIPv6TranslatorEntries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeIPv6TranslatorEntries', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Ipv6TranslatorId - instanceId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Spec - spec. optional.
   * @param {String} Status - status. optional.
   * @param {String} AllocateIpv6Addr - allocateIpv6Addr. optional.
   * @param {String} AllocateIpv4Addr - allocateIpv4Addr. optional.
   * @param {String} PayType - payType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} BusinessStatus - businessStatus. optional.
   */
  describeIPv6Translators(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeIPv6Translators', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6AddressId - ipv6InstanceId. optional.
   * @param {String} Ipv6Address - ipAddress. optional.
   * @param {String} Name - name. optional.
   * @param {String} AssociatedInstanceId - bindInstanceId. optional.
   * @param {String} AssociatedInstanceType - bindType. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} Ipv6InternetBandwidthId - ipv6BandwidthId. optional.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeIpv6Addresses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeIpv6Addresses', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6GatewayId - ipv6GatewayId. required.
   * @param {String} Ipv6EgressOnlyRuleId - ruleId. optional.
   * @param {String} Name - name. optional.
   * @param {String} InstanceType - relationType. optional.
   * @param {String} InstanceId - relationKey. optional.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeIpv6EgressOnlyRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6GatewayId')) {
      throw new TypeError('parameter "Ipv6GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeIpv6EgressOnlyRules', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6GatewayId - instanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeIpv6GatewayAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6GatewayId')) {
      throw new TypeError('parameter "Ipv6GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeIpv6GatewayAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6GatewayId - instanceId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageNumber - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeIpv6Gateways(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeIpv6Gateways', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} NatGatewayId - natGatewayId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} Name - name. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} Spec - spec. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeNatGateways(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeNatGateways', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - token. optional.
   */
  describeNetworkQuotas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeNetworkQuotas', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Period - period. optional. default: 60.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeNewProjectEipMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AllocationId')) {
      throw new TypeError('parameter "AllocationId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeNewProjectEipMonitorData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RouterId - routerId. optional.
   * @param {String} NqaId - nqaId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IsDefault - isDefault. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeNqas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeNqas', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describePhysicalConnectionLOA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribePhysicalConnectionLOA', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describePhysicalConnectionOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    return this.request('DescribePhysicalConnectionOrder', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. optional.
   * @param {Boolean} IncludeReservationData - includeReservationData. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describePhysicalConnections(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribePhysicalConnections', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {String} KbpsBandwidth - kbpsBandwidth. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceBid - resourceBid. optional.
   * @param {Long} ResourceUid - resourceUid. optional.
   * @param {String} RegionId - regionNo. required.
   */
  describePublicIpAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribePublicIpAddress', params, options);
  }

  /**
   * @param {String} ProductType - productType. optional.
   * @param {String} AcceptLanguage - acceptLanguage. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} RouteTableId - routeTableId. required.
   * @param {String} RouteEntryId - routeEntryId. optional.
   * @param {String} DestinationCidrBlock - destinationCidrBlock. optional.
   * @param {String} RouteEntryName - routeEntryName. optional.
   * @param {String} IpVersion - ipVersion. optional.
   * @param {String} RouteEntryType - routeEntryType. optional.
   * @param {String} NextHopId - nextHopId. optional.
   * @param {String} NextHopType - nextHopType. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeRouteEntryList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouteTableId')) {
      throw new TypeError('parameter "RouteTableId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeRouteEntryList', params, options);
  }

  /**
   * @param {String} RouterType - routerType. optional. default: VRouter.
   * @param {String} RouterId - routerId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} RouteTableId - routeTableId. optional.
   * @param {String} RouteTableName - routeTableName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   */
  describeRouteTableList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeRouteTableList', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VRouterId - routerInstanceId. optional.
   * @param {String} RouteTableId - instanceId. optional.
   * @param {String} RouterType - routerType. optional.
   * @param {String} RouterId - routerId. optional.
   * @param {String} Type - type. optional.
   * @param {String} RouteTableName - routeTableName. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeRouteTables(params = {}, options = {}) {
    return this.request('DescribeRouteTables', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Boolean} IncludeReservationData - includeReservationData. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. optional.
   */
  describeRouterInterfaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeRouterInterfaces', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeRouterInterfacesForGlobal(params = {}, options = {}) {
    return this.request('DescribeRouterInterfacesForGlobal', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ServerId - serverId. required.
   * @param {String} ServerType - serverType. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeServerRelatedGlobalAccelerationInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ServerId')) {
      throw new TypeError('parameter "ServerId" is required');
    }

    return this.request('DescribeServerRelatedGlobalAccelerationInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SnatTableId - snatTableId. required.
   * @param {String} SnatEntryId - snatEntryId. optional.
   * @param {String} SourceVSwitchId - sourceVSwitchId. optional.
   * @param {String} SourceCIDR - sourceCIDR. optional.
   * @param {String} SnatIp - snatIp. optional.
   * @param {String} SnatEntryName - name. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeSnatTableEntries(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SnatTableId')) {
      throw new TypeError('parameter "SnatTableId" is required');
    }

    return this.request('DescribeSnatTableEntries', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SslVpnClientCertId - sslVpnClientCertId. required.
   */
  describeSslVpnClientCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SslVpnClientCertId')) {
      throw new TypeError('parameter "SslVpnClientCertId" is required');
    }

    return this.request('DescribeSslVpnClientCert', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SslVpnServerId - sslVpnServerId. optional.
   * @param {String} SslVpnClientCertId - sslVpnClientCertId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeSslVpnClientCerts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSslVpnClientCerts', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SslVpnServerId - sslVpnServerId. required.
   * @param {String} SslVpnClientCertId - sslVpnClientCertId. required.
   */
  describeSslVpnClientConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SslVpnServerId')) {
      throw new TypeError('parameter "SslVpnServerId" is required');
    }

    if (!hasOwnProperty(params, 'SslVpnClientCertId')) {
      throw new TypeError('parameter "SslVpnClientCertId" is required');
    }

    return this.request('DescribeSslVpnClientConfig', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SslVpnServerId - sslVpnServerId. required.
   */
  describeSslVpnServerCaCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SslVpnServerId')) {
      throw new TypeError('parameter "SslVpnServerId" is required');
    }

    return this.request('DescribeSslVpnServerCaCert', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SslVpnServerId - sslVpnServerId. optional.
   * @param {String} VpnGatewayId - vpnGatewayId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeSslVpnServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSslVpnServers', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Month - month. optional.
   */
  describeTrafficConsumeByMonth(params = {}, options = {}) {
    return this.request('DescribeTrafficConsumeByMonth', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessPointId - accessPointId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  describeVBRs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVBRs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VRouterId - instanceId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeVRouters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVRouters', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VSwitchId - instanceId. required.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeVSwitchAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    return this.request('DescribeVSwitchAttributes', params, options);
  }

  /**
   * @param {RepeatList} Tag - tags. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} VSwitchId - instanceId. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} VSwitchName - name. optional.
   * @param {Boolean} IsDefault - isDefault. optional.
   * @param {String} RouteTableId - routeTableId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeVSwitches(params = {}, options = {}) {
    return this.request('DescribeVSwitches', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. optional.
   */
  describeVirtualBorderRouters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVirtualBorderRouters', params, options);
  }

  /**
   * @param {RepeatList} Filter - filter. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeVirtualBorderRoutersForPhysicalConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    return this.request('DescribeVirtualBorderRoutersForPhysicalConnection', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {Boolean} IsDefault - isDefault. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeVpcAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVpcAttribute', params, options);
  }

  /**
   * @param {RepeatList} Tag - tags. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcName - name. optional.
   * @param {Boolean} IsDefault - isDefault. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeVpcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVpcs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} FilterVpcId - filterVpcId. optional.
   * @param {String} FilterVRouterId - filterVRouterId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Boolean} IsDefault - isDefault. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1000.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeVpcsByRegionNo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVpcsByRegionNo', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} VpnConnectionId - vpnConnectionId. required.
   */
  describeVpnConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpnConnectionId')) {
      throw new TypeError('parameter "VpnConnectionId" is required');
    }

    return this.request('DescribeVpnConnection', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} VpnConnectionId - vpnConnectionId. required.
   * @param {Integer} From - from. optional.
   * @param {Integer} To - to. optional.
   * @param {Integer} MinutePeriod - minutePeriod. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeVpnConnectionLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpnConnectionId')) {
      throw new TypeError('parameter "VpnConnectionId" is required');
    }

    return this.request('DescribeVpnConnectionLogs', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} VpnGatewayId - vpnGatewayId. optional.
   * @param {String} CustomerGatewayId - customerGatewayId. optional.
   * @param {String} VpnConnectionId - vpnConnectionId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeVpnConnections(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVpnConnections', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} VpnGatewayId - vpnGatewayId. required.
   */
  describeVpnGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpnGatewayId')) {
      throw new TypeError('parameter "VpnGatewayId" is required');
    }

    return this.request('DescribeVpnGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VpnGatewayId - vpnGatewayId. optional.
   * @param {String} Status - status. optional.
   * @param {String} BusinessStatus - businessStatus. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeVpnGateways(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVpnGateways', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeZones(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeZones', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  disableVpcClassicLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DisableVpcClassicLink', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} VpnConnectionId - vpnConnectionId. required.
   */
  downloadVpnConnectionConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpnConnectionId')) {
      throw new TypeError('parameter "VpnConnectionId" is required');
    }

    return this.request('DownloadVpnConnectionConfig', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  eipFillParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('EipFillParams', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  eipFillProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('EipFillProduct', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  eipNotifyPaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('EipNotifyPaid', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  eipOrderCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('EipOrderCheck', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  eipPrepayNotifyPaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('EipPrepayNotifyPaid', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  enablePhysicalConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    return this.request('EnablePhysicalConnection', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  enableVpcClassicLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('EnableVpcClassicLink', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  fillBandwidthPackageInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillBandwidthPackageInstanceId', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  fillBandwidthPackageParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillBandwidthPackageParam', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  fillCommonBandwidthPackageInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillCommonBandwidthPackageInstanceId', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  fillNatGatewayParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillNatGatewayParam', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  fillNatGatwayInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillNatGatwayInstanceId', params, options);
  }

  /**
   * @param {String} ISP - isp. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ip - ip. optional.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} Netmode - netmode. optional.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} InternetChargeType - internetChargeType. optional. default: PayByBandwidth.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   */
  forceAllocateEipAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ForceAllocateEipAddress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - type. required.
   * @param {String} CbnInstanceId - cbnInstanceId. required.
   * @param {String} CbnUid - cbnOwnerId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  grantInstanceToCbn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'CbnInstanceId')) {
      throw new TypeError('parameter "CbnInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CbnUid')) {
      throw new TypeError('parameter "CbnUid" is required');
    }

    return this.request('GrantInstanceToCbn', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - type. required.
   * @param {String} CenId - cbnInstanceId. required.
   * @param {Long} CenOwnerId - cbnOwnerId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  grantInstanceToCen(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'CenOwnerId')) {
      throw new TypeError('parameter "CenOwnerId" is required');
    }

    return this.request('GrantInstanceToCen', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  iPv6TranslatorFillParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('IPv6TranslatorFillParams', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  iPv6TranslatorFillRestrictions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('IPv6TranslatorFillRestrictions', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  iPv6TranslatorPrepayNotifyPaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKeyId')) {
      throw new TypeError('parameter "AccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('IPv6TranslatorPrepayNotifyPaid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  iPv6TranslatorValidateOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('IPv6TranslatorValidateOrder', params, options);
  }

  /**
   * @param {String} Confirm - Confirm. required.
   * @param {String} InstanceId - InstanceId. required.
   * @param {String} Description - Description. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {String} KbpsBandwidth - kbpsBandwidth. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceBid - resourceBid. optional.
   * @param {Long} ResourceUid - resourceUid. optional.
   * @param {String} RegionId - regionNo. optional.
   */
  innerVpcConfirmCrossBorderRouterInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Confirm')) {
      throw new TypeError('parameter "Confirm" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InnerVpcConfirmCrossBorderRouterInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {String} KbpsBandwidth - kbpsBandwidth. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceBid - resourceBid. optional.
   * @param {Long} ResourceUid - resourceUid. optional.
   * @param {String} RegionId - regionNo. optional.
   */
  innerVpcDescribeCrossBorderRouterInterface(params = {}, options = {}) {
    return this.request('InnerVpcDescribeCrossBorderRouterInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {String} KbpsBandwidth - kbpsBandwidth. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceBid - resourceBid. optional.
   * @param {Long} ResourceUid - resourceUid. optional.
   * @param {String} RegionId - regionNo. optional.
   */
  innerVpcDescribeCrossBorderUsers(params = {}, options = {}) {
    return this.request('InnerVpcDescribeCrossBorderUsers', params, options);
  }

  /**
   * @param {String} Scope - scope. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} NextToken - nextToken. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListTagResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyBandwidthPackageAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    return this.request('ModifyBandwidthPackageAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} Bandwidth - bandwidth. required.
   */
  modifyBandwidthPackageSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('ModifyBandwidthPackageSpec', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BgpGroupId - bgpGroupId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {Long} PeerAsn - peerAsn. optional.
   * @param {String} AuthKey - authKey. optional.
   * @param {Boolean} IsFakeAsn - isFakeAsn. optional. default: true.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyBgpGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BgpGroupId')) {
      throw new TypeError('parameter "BgpGroupId" is required');
    }

    return this.request('ModifyBgpGroupAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyCommonBandwidthPackageAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    return this.request('ModifyCommonBandwidthPackageAttribute', params, options);
  }

  /**
   * @param {String} BandwidthPackageId - instanceId. required.
   * @param {String} PayType - payType. optional. default: PrePaid.
   * @param {String} PricingCycle - period. optional. default: Month.
   * @param {Integer} Duration - duration. optional. default: 1.
   * @param {Boolean} AutoPay - autoPay. optional. default: false.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {String} KbpsBandwidth - kbpsBandwidth. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceBid - resourceBid. optional.
   * @param {Long} ResourceUid - resourceUid. optional.
   * @param {String} RegionId - regionNo. required.
   */
  modifyCommonBandwidthPackagePayType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyCommonBandwidthPackagePayType', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} Bandwidth - bandwidth. required.
   */
  modifyCommonBandwidthPackageSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('ModifyCommonBandwidthPackageSpec', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} CustomerGatewayId - customerGatewayId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyCustomerGatewayAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CustomerGatewayId')) {
      throw new TypeError('parameter "CustomerGatewayId" is required');
    }

    return this.request('ModifyCustomerGatewayAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyEipAddressAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AllocationId')) {
      throw new TypeError('parameter "AllocationId" is required');
    }

    return this.request('ModifyEipAddressAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Mode - mode. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ClientToken - token. optional.
   */
  modifyEipForwardMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyEipForwardMode', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} FlowLogId - instanceId. required.
   * @param {String} FlowLogName - name. optional.
   * @param {String} Description - comment. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyFlowLogAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FlowLogId')) {
      throw new TypeError('parameter "FlowLogId" is required');
    }

    return this.request('ModifyFlowLogAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ForwardTableId - forwardTableId. required.
   * @param {String} ForwardEntryId - forwardEntryId. required.
   * @param {String} ExternalIp - externalIp. optional.
   * @param {String} ExternalPort - externalPort. optional.
   * @param {String} InternalIp - internalIp. optional.
   * @param {String} InternalPort - internalPort. optional.
   * @param {String} IpProtocol - ipProtocol. optional.
   * @param {String} ForwardEntryName - name. optional.
   * @param {String} RegionId - regionId. required.
   */
  modifyForwardEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ForwardTableId')) {
      throw new TypeError('parameter "ForwardTableId" is required');
    }

    if (!hasOwnProperty(params, 'ForwardEntryId')) {
      throw new TypeError('parameter "ForwardEntryId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyForwardEntry', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} GlobalAccelerationInstanceId - allocationId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyGlobalAccelerationInstanceAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GlobalAccelerationInstanceId')) {
      throw new TypeError('parameter "GlobalAccelerationInstanceId" is required');
    }

    return this.request('ModifyGlobalAccelerationInstanceAttributes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} GlobalAccelerationInstanceId - allocationId. required.
   * @param {String} Bandwidth - bandwidth. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyGlobalAccelerationInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GlobalAccelerationInstanceId')) {
      throw new TypeError('parameter "GlobalAccelerationInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('ModifyGlobalAccelerationInstanceSpec', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} HaVipId - haVipId. required.
   * @param {String} Description - description. optional.
   */
  modifyHaVipAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HaVipId')) {
      throw new TypeError('parameter "HaVipId" is required');
    }

    return this.request('ModifyHaVipAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} AclId - instanceId. required.
   * @param {String} AclName - name. required.
   */
  modifyIPv6TranslatorAclAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'AclName')) {
      throw new TypeError('parameter "AclName" is required');
    }

    return this.request('ModifyIPv6TranslatorAclAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - instanceId. required.
   * @param {String} AclEntryId - entryId. required.
   * @param {String} AclEntryComment - description. required.
   */
  modifyIPv6TranslatorAclListEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'AclEntryId')) {
      throw new TypeError('parameter "AclEntryId" is required');
    }

    if (!hasOwnProperty(params, 'AclEntryComment')) {
      throw new TypeError('parameter "AclEntryComment" is required');
    }

    return this.request('ModifyIPv6TranslatorAclListEntry', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} Ipv6TranslatorId - instanceId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyIPv6TranslatorAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6TranslatorId')) {
      throw new TypeError('parameter "Ipv6TranslatorId" is required');
    }

    return this.request('ModifyIPv6TranslatorAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} Ipv6TranslatorId - instanceId. required.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {Boolean} AutoPay - autoPay. optional. default: false.
   */
  modifyIPv6TranslatorBandwidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6TranslatorId')) {
      throw new TypeError('parameter "Ipv6TranslatorId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('ModifyIPv6TranslatorBandwidth', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Ipv6TranslatorEntryId - entryId. required.
   * @param {String} EntryName - name. optional.
   * @param {String} EntryDescription - description. optional.
   * @param {Integer} AllocateIpv6Port - allocateIpv6Port. optional.
   * @param {String} BackendIpv4Addr - backendIpv4Addr. optional.
   * @param {Integer} BackendIpv4Port - backendIpv4Port. optional.
   * @param {String} TransProtocol - transProtocol. optional.
   * @param {Integer} EntryBandwidth - entryBandwidth. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclId - aclId. optional.
   */
  modifyIPv6TranslatorEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6TranslatorEntryId')) {
      throw new TypeError('parameter "Ipv6TranslatorEntryId" is required');
    }

    return this.request('ModifyIPv6TranslatorEntry', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6AddressId - ipv6InstanceId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyIpv6AddressAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6AddressId')) {
      throw new TypeError('parameter "Ipv6AddressId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyIpv6AddressAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6GatewayId - instanceId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyIpv6GatewayAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6GatewayId')) {
      throw new TypeError('parameter "Ipv6GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyIpv6GatewayAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6GatewayId - instanceId. required.
   * @param {String} Spec - spec. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyIpv6GatewaySpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ipv6GatewayId')) {
      throw new TypeError('parameter "Ipv6GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'Spec')) {
      throw new TypeError('parameter "Spec" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyIpv6GatewaySpec', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} Ipv6AddressId - ipv6InstanceId. optional.
   * @param {String} Ipv6InternetBandwidthId - ipv6BandwidthId. optional.
   * @param {Long} Bandwidth - bandwidth. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyIpv6InternetBandwidth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyIpv6InternetBandwidth', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} NatGatewayId - natGatewayId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyNatGatewayAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NatGatewayId')) {
      throw new TypeError('parameter "NatGatewayId" is required');
    }

    return this.request('ModifyNatGatewayAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} NatGatewayId - natGatewayId. required.
   * @param {String} Spec - spec. required.
   * @param {Boolean} AutoPay - autoPay. optional.
   * @param {String} ClientToken - clientToken. optional.
   */
  modifyNatGatewaySpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NatGatewayId')) {
      throw new TypeError('parameter "NatGatewayId" is required');
    }

    if (!hasOwnProperty(params, 'Spec')) {
      throw new TypeError('parameter "Spec" is required');
    }

    return this.request('ModifyNatGatewaySpec', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DestinationIp - destinationIp. required.
   * @param {String} NqaId - nqaId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyNqa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationIp')) {
      throw new TypeError('parameter "DestinationIp" is required');
    }

    if (!hasOwnProperty(params, 'NqaId')) {
      throw new TypeError('parameter "NqaId" is required');
    }

    return this.request('ModifyNqa', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {String} LineOperator - lineOperator. optional.
   * @param {Integer} bandwidth - bandwidth. optional.
   * @param {String} PeerLocation - peerLocation. optional.
   * @param {String} PortType - portType. optional.
   * @param {String} RedundantPhysicalConnectionId - redundantPhysicalConnectionId. optional.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} CircuitCode - circuitCode. optional.
   */
  modifyPhysicalConnectionAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    return this.request('ModifyPhysicalConnectionAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} RouteEntryName - routeEntryName. optional.
   * @param {String} RouteEntryId - routeEntryId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyRouteEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouteEntryId')) {
      throw new TypeError('parameter "RouteEntryId" is required');
    }

    return this.request('ModifyRouteEntry', params, options);
  }

  /**
   * @param {String} RouteTableId - routeTableId. required.
   * @param {String} RouteTableName - routeTableName. optional.
   * @param {String} Description - description. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {String} KbpsBandwidth - kbpsBandwidth. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceBid - resourceBid. optional.
   * @param {Long} ResourceUid - resourceUid. optional.
   * @param {String} RegionId - regionNo. required.
   */
  modifyRouteTableAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RouteTableId')) {
      throw new TypeError('parameter "RouteTableId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyRouteTableAttributes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RouterInterfaceId - routerInterfaceId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} OppositeInterfaceId - oppositeInterfaceId. optional.
   * @param {String} OppositeRouterId - oppositeRouterId. optional.
   * @param {String} OppositeRouterType - oppositeRouterType. optional.
   * @param {Long} OppositeInterfaceOwnerId - oppositeInterfaceOwnerId. optional.
   * @param {String} HealthCheckSourceIp - healthCheckSourceIp. optional.
   * @param {String} HealthCheckTargetIp - healthCheckTargetIp. optional.
   * @param {Boolean} DeleteHealthCheckIp - deleteHc. optional.
   */
  modifyRouterInterfaceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouterInterfaceId')) {
      throw new TypeError('parameter "RouterInterfaceId" is required');
    }

    return this.request('ModifyRouterInterfaceAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} RouterInterfaceId - routerInterfaceId. required.
   * @param {String} Spec - spec. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyRouterInterfaceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouterInterfaceId')) {
      throw new TypeError('parameter "RouterInterfaceId" is required');
    }

    if (!hasOwnProperty(params, 'Spec')) {
      throw new TypeError('parameter "Spec" is required');
    }

    return this.request('ModifyRouterInterfaceSpec', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SnatTableId - snatTableId. required.
   * @param {String} SnatEntryId - snatEntryId. required.
   * @param {String} SnatIp - snatIp. optional.
   * @param {String} SnatEntryName - name. optional.
   */
  modifySnatEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SnatTableId')) {
      throw new TypeError('parameter "SnatTableId" is required');
    }

    if (!hasOwnProperty(params, 'SnatEntryId')) {
      throw new TypeError('parameter "SnatEntryId" is required');
    }

    return this.request('ModifySnatEntry', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SslVpnClientCertId - sslVpnClientCertId. required.
   * @param {String} Name - name. optional.
   */
  modifySslVpnClientCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SslVpnClientCertId')) {
      throw new TypeError('parameter "SslVpnClientCertId" is required');
    }

    return this.request('ModifySslVpnClientCert', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SslVpnServerId - sslVpnServerId. required.
   * @param {String} Name - name. optional.
   * @param {String} ClientIpPool - clientIpPool. optional.
   * @param {String} LocalSubnet - subnet. optional.
   * @param {String} Proto - proto. optional.
   * @param {String} Cipher - cipher. optional.
   * @param {Integer} Port - port. optional.
   * @param {Boolean} Compress - compress. optional.
   */
  modifySslVpnServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SslVpnServerId')) {
      throw new TypeError('parameter "SslVpnServerId" is required');
    }

    return this.request('ModifySslVpnServer', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} VRouterId - instanceId. required.
   * @param {String} VRouterName - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyVRouterAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VRouterId')) {
      throw new TypeError('parameter "VRouterId" is required');
    }

    return this.request('ModifyVRouterAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VSwitchId - instanceId. required.
   * @param {String} VSwitchName - name. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} Ipv6CidrBlock - ipv6CidrBlock. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyVSwitchAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    return this.request('ModifyVSwitchAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} VbrId - vbrId. required.
   * @param {Integer} VlanId - vlanId. optional.
   * @param {String} CircuitCode - circuitCode. optional.
   * @param {String} LocalGatewayIp - localGatewayIp. optional.
   * @param {String} PeerGatewayIp - peerGatewayIp. optional.
   * @param {String} PeeringSubnetMask - peeringSubnetMask. optional.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   * @param {String} AssociatedPhysicalConnections - associatedPhysicalConnections. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyVirtualBorderRouterAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrId')) {
      throw new TypeError('parameter "VbrId" is required');
    }

    return this.request('ModifyVirtualBorderRouterAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - instanceId. required.
   * @param {String} Description - description. optional.
   * @param {String} VpcName - name. optional.
   * @param {String} CidrBlock - cidrBlock. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Boolean} EnableIPv6 - enableIPv6. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyVpcAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('ModifyVpcAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} VpnConnectionId - vpnConnectionId. required.
   * @param {String} Name - name. optional.
   * @param {String} LocalSubnet - localSubnet. optional.
   * @param {String} RemoteSubnet - remoteSubnet. optional.
   * @param {Boolean} EffectImmediately - effectImmediately. optional. default: false.
   * @param {String} IkeConfig - ikeConfig. optional.
   * @param {String} IpsecConfig - ipsecConfig. optional.
   */
  modifyVpnConnectionAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpnConnectionId')) {
      throw new TypeError('parameter "VpnConnectionId" is required');
    }

    return this.request('ModifyVpnConnectionAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} VpnGatewayId - vpnGatewayId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyVpnGatewayAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpnGatewayId')) {
      throw new TypeError('parameter "VpnGatewayId" is required');
    }

    return this.request('ModifyVpnGatewayAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} NewResourceGroupId - newResourceGroupId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  moveResourceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'NewResourceGroupId')) {
      throw new TypeError('parameter "NewResourceGroupId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('MoveResourceGroup', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  notifyProduceBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('NotifyProduceBandwidthPackage', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  notifyProduceCommonBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('NotifyProduceCommonBandwidthPackage', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  notifyProduceNatGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('NotifyProduceNatGateway', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  notifyProducePreCommonBandwidthPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('NotifyProducePreCommonBandwidthPackage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} VbrId - vbrId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  recoverVirtualBorderRouter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrId')) {
      throw new TypeError('parameter "VbrId" is required');
    }

    return this.request('RecoverVirtualBorderRouter', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  releaseEipAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AllocationId')) {
      throw new TypeError('parameter "AllocationId" is required');
    }

    return this.request('ReleaseEipAddress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {RepeatList} RemovedIpAddresses - removedIpAddresses. required.
   */
  removeBandwidthPackageIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'RemovedIpAddresses')) {
      throw new TypeError('parameter "RemovedIpAddresses" is required');
    }

    return this.request('RemoveBandwidthPackageIps', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
   * @param {String} IpInstanceId - ipInstanceId. required.
   */
  removeCommonBandwidthPackageIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackageId')) {
      throw new TypeError('parameter "BandwidthPackageId" is required');
    }

    if (!hasOwnProperty(params, 'IpInstanceId')) {
      throw new TypeError('parameter "IpInstanceId" is required');
    }

    return this.request('RemoveCommonBandwidthPackageIp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} GlobalAccelerationInstanceId - bandwidthPackageId. required.
   * @param {String} IpInstanceId - ipInstanceId. required.
   */
  removeGlobalAccelerationInstanceIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GlobalAccelerationInstanceId')) {
      throw new TypeError('parameter "GlobalAccelerationInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IpInstanceId')) {
      throw new TypeError('parameter "IpInstanceId" is required');
    }

    return this.request('RemoveGlobalAccelerationInstanceIp', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - instanceId. required.
   * @param {String} AclEntryId - entryId. required.
   */
  removeIPv6TranslatorAclListEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'AclEntryId')) {
      throw new TypeError('parameter "AclEntryId" is required');
    }

    return this.request('RemoveIPv6TranslatorAclListEntry', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - type. required.
   * @param {String} CbnInstanceId - cbnInstanceId. required.
   * @param {Long} CbnUid - cbnOwnerId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  revokeInstanceFromCbn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'CbnInstanceId')) {
      throw new TypeError('parameter "CbnInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CbnUid')) {
      throw new TypeError('parameter "CbnUid" is required');
    }

    return this.request('RevokeInstanceFromCbn', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - type. required.
   * @param {String} CenId - cbnInstanceId. required.
   * @param {Long} CenOwnerId - cbnOwnerId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  revokeInstanceFromCen(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'CenId')) {
      throw new TypeError('parameter "CenId" is required');
    }

    if (!hasOwnProperty(params, 'CenOwnerId')) {
      throw new TypeError('parameter "CenOwnerId" is required');
    }

    return this.request('RevokeInstanceFromCen', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  riFillParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RiFillParams', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  riFillProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RiFillProduct', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  riNotifyPaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RiNotifyPaid', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  riOrderCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RiOrderCheck', params, options);
  }

  /**
   * @param {String} MasterInstanceId - masterInstanceId. required.
   * @param {String} HaVipId - haVipId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceBid - resourceBid. optional.
   * @param {Long} ResourceUid - resourceUid. optional.
   * @param {String} RegionId - regionNo. required.
   */
  setHaVipMasterInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MasterInstanceId')) {
      throw new TypeError('parameter "MasterInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'HaVipId')) {
      throw new TypeError('parameter "HaVipId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('SetHaVipMasterInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LogProject - logProject. required.
   * @param {String} LogStore - logStore. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - type. optional. default: EIP.
   * @param {String} Status - status. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  setHighDefinitionMonitorLogStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LogProject')) {
      throw new TypeError('parameter "LogProject" is required');
    }

    if (!hasOwnProperty(params, 'LogStore')) {
      throw new TypeError('parameter "LogStore" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetHighDefinitionMonitorLogStatus', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  staticEipFillParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('StaticEipFillParams', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  staticEipNotifyPaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('StaticEipNotifyPaid', params, options);
  }

  /**
   * @param {String} Scope - scope. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} Tag - tags. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
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

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('TagResources', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  terminatePhysicalConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    return this.request('TerminatePhysicalConnection', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} VbrId - vbrId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  terminateVirtualBorderRouter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrId')) {
      throw new TypeError('parameter "VbrId" is required');
    }

    return this.request('TerminateVirtualBorderRouter', params, options);
  }

  /**
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} TagKey - tagKeyList. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  unTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('UnTagResources', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Boolean} Force - force. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} PrivateIpAddress - privateIpAddress. optional.
   */
  unassociateEipAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AllocationId')) {
      throw new TypeError('parameter "AllocationId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('UnassociateEipAddress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} GlobalAccelerationInstanceId - allocationId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceType - instanceType. optional.
   */
  unassociateGlobalAccelerationInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'GlobalAccelerationInstanceId')) {
      throw new TypeError('parameter "GlobalAccelerationInstanceId" is required');
    }

    return this.request('UnassociateGlobalAccelerationInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} HaVipId - haVipId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Force - force. optional.
   */
  unassociateHaVip(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HaVipId')) {
      throw new TypeError('parameter "HaVipId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('UnassociateHaVip', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} VbrId - vbrId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  unassociatePhysicalConnectionFromVirtualBorderRouter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrId')) {
      throw new TypeError('parameter "VbrId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    return this.request('UnassociatePhysicalConnectionFromVirtualBorderRouter', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} RouteTableId - routeTableId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  unassociateRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RouteTableId')) {
      throw new TypeError('parameter "RouteTableId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('UnassociateRouteTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  vpnGatewayFillParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VpnGatewayFillParams', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  vpnGatewayFillRestrictions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VpnGatewayFillRestrictions', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  vpnGatewayPrepayNotifyPaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VpnGatewayPrepayNotifyPaid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  vpnGatewayValidateOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VpnGatewayValidateOrder', params, options);
  }

}

module.exports = Client;
