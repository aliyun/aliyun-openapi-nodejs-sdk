
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2014-05-26';
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
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - zoneNo. required.
   * @param {String} IpAddress - ipSegment. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  addIpRange(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    return this.request('AddIpRange', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} Tag.1.Key - tagKey1. required.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. required.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   */
  addTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Tag.1.Key')) {
      throw new TypeError('parameter "Tag.1.Key" is required');
    }

    if (!hasOwnProperty(params, 'Tag.1.Value')) {
      throw new TypeError('parameter "Tag.1.Value" is required');
    }

    return this.request('AddTags', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} Bandwidth - bandwidth. optional.
   * @param {String} InternetChargeType - internetChargeType. optional. default: PayByBandwidth.
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
   * @param {String} InstanceId - instanceId. required.
   * @param {String} IpAddress - ip. optional.
   * @param {String} VlanId - vlanId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  allocatePublicIpAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('AllocatePublicIpAddress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} regionId - regionId. required.
   * @param {String} autoSnapshotPolicyId - autoSnapshotPolicyId. required.
   * @param {String} diskIds - diskIds. required.
   */
  applyAutoSnapshotPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'regionId')) {
      throw new TypeError('parameter "regionId" is required');
    }

    if (!hasOwnProperty(params, 'autoSnapshotPolicyId')) {
      throw new TypeError('parameter "autoSnapshotPolicyId" is required');
    }

    if (!hasOwnProperty(params, 'diskIds')) {
      throw new TypeError('parameter "diskIds" is required');
    }

    return this.request('ApplyAutoSnapshotPolicy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} NetworkInterfaceId - eniId. required.
   * @param {RepeatList} PrivateIpAddress - privateIpAddresses. optional.
   * @param {Integer} SecondaryPrivateIpAddressCount - privateIpCount. optional.
   */
  assignPrivateIpAddresses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    return this.request('AssignPrivateIpAddresses', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceType - instanceType. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VpcId - vpcId. required.
   */
  attachClassicLinkVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('AttachClassicLinkVpc', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} DiskId - instanceId. required.
   * @param {String} Device - mountPoint. optional.
   * @param {Boolean} DeleteWithInstance - deleteWithInstance. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  attachDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('AttachDisk', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RamRoleName - ramRoleName. required.
   * @param {String} InstanceIds - instanceIds. required.
   */
  attachInstanceRamRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RamRoleName')) {
      throw new TypeError('parameter "RamRoleName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('AttachInstanceRamRole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} KeyPairName - keyPairName. required.
   * @param {String} InstanceIds - instanceIds. required.
   */
  attachKeyPair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'KeyPairName')) {
      throw new TypeError('parameter "KeyPairName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('AttachKeyPair', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} NetworkInterfaceId - eniId. required.
   * @param {String} InstanceId - ecsInstanceId. required.
   */
  attachNetworkInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('AttachNetworkInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} VolumeId - instanceId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  attachVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VolumeId')) {
      throw new TypeError('parameter "VolumeId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('AttachVolume', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} PortRange - portRange. required.
   * @param {String} SourceGroupId - sourceGroupNo. optional.
   * @param {Long} SourceGroupOwnerId - groupOwnerAliUid. optional.
   * @param {String} SourceGroupOwnerAccount - groupOwnerAccount. optional.
   * @param {String} SourceCidrIp - sourceCidrIp. optional.
   * @param {String} SourcePortRange - sourcePortRange. optional.
   * @param {String} DestCidrIp - destCidrIp. optional.
   * @param {String} Policy - policy. optional. default: accept.
   * @param {String} Priority - level. optional. default: 1.
   * @param {String} NicType - nic. optional. default: internet.
   * @param {String} ClientToken - token. optional.
   * @param {String} Description - description. optional.
   */
  authorizeSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

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

    return this.request('AuthorizeSecurityGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} PortRange - portRange. required.
   * @param {String} DestGroupId - destGroupNo. optional.
   * @param {Long} DestGroupOwnerId - groupOwnerAliUid. optional.
   * @param {String} DestGroupOwnerAccount - groupOwnerAccount. optional.
   * @param {String} DestCidrIp - destCidrIp. optional.
   * @param {String} SourceCidrIp - sourceCidrIp. optional.
   * @param {String} SourcePortRange - sourcePortRange. optional.
   * @param {String} Policy - policy. optional. default: accept.
   * @param {String} Priority - level. optional. default: 1.
   * @param {String} NicType - nic. optional. default: internet.
   * @param {String} ClientToken - token. optional.
   * @param {String} Description - description. optional.
   */
  authorizeSecurityGroupEgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

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

    return this.request('AuthorizeSecurityGroupEgress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} IpAddress - ip. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  bindIpRange(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    return this.request('BindIpRange', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AgreementType - type. required.
   */
  cancelAgreement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AgreementType')) {
      throw new TypeError('parameter "AgreementType" is required');
    }

    return this.request('CancelAgreement', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} regionId - regionId. required.
   * @param {String} diskIds - diskIds. required.
   */
  cancelAutoSnapshotPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'regionId')) {
      throw new TypeError('parameter "regionId" is required');
    }

    if (!hasOwnProperty(params, 'diskIds')) {
      throw new TypeError('parameter "diskIds" is required');
    }

    return this.request('CancelAutoSnapshotPolicy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  cancelCopyImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('CancelCopyImage', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} TaskId - taskId. required.
   */
  cancelTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('CancelTask', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EventId - eventId. required.
   */
  cancelUserEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('CancelUserEvent', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Boolean} SystemDiskPolicyEnabled - systemDiskPolicyEnabled. optional.
   * @param {Integer} SystemDiskPolicyTimePeriod - systemDiskPolicyTimePeriod. optional.
   * @param {Integer} SystemDiskPolicyRetentionDays - systemDiskPolicyRetentionDays. optional.
   * @param {Boolean} SystemDiskPolicyRetentionLastWeek - systemDiskPolicyRetentionLastWeek. optional.
   * @param {Boolean} DataDiskPolicyEnabled - dataDiskPolicyEnabled. optional.
   * @param {Integer} DataDiskPolicyTimePeriod - dataDiskPolicyTimePeriod. optional.
   * @param {Integer} DataDiskPolicyRetentionDays - dataDiskPolicyRetentionDays. optional.
   * @param {Boolean} DataDiskPolicyRetentionLastWeek - dataDiskPolicyRetentionLastWeek. optional.
   */
  checkAutoSnapshotPolicy(params = {}, options = {}) {
    return this.request('CheckAutoSnapshotPolicy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DiskIds - diskIds. required.
   */
  checkDiskEnableAutoSnapshotValidation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskIds')) {
      throw new TypeError('parameter "DiskIds" is required');
    }

    return this.request('CheckDiskEnableAutoSnapshotValidation', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RegionId - regionNo. required.
   */
  convertNatPublicIpToEip(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ConvertNatPublicIpToEip', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DestinationImageName - toImageName. optional.
   * @param {String} DestinationDescription - toImageDesc. optional.
   * @param {String} ImageId - fromImageNo. required.
   * @param {String} RegionId - fromRegionNo. required.
   * @param {String} DestinationRegionId - toRegionNo. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {Boolean} Encrypted - toEncrypted. optional.
   */
  copyImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CopyImage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} regionId - regionId. required.
   * @param {String} autoSnapshotPolicyName - autoSnapshotPolicyName. optional.
   * @param {String} timePoints - timePoints. required.
   * @param {String} repeatWeekdays - repeatWeekdays. required.
   * @param {Integer} retentionDays - retentionDays. required.
   */
  createAutoSnapshotPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'regionId')) {
      throw new TypeError('parameter "regionId" is required');
    }

    if (!hasOwnProperty(params, 'timePoints')) {
      throw new TypeError('parameter "timePoints" is required');
    }

    if (!hasOwnProperty(params, 'repeatWeekdays')) {
      throw new TypeError('parameter "repeatWeekdays" is required');
    }

    if (!hasOwnProperty(params, 'retentionDays')) {
      throw new TypeError('parameter "retentionDays" is required');
    }

    return this.request('CreateAutoSnapshotPolicy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Type - type. required.
   * @param {String} CommandContent - commandContent. required.
   * @param {String} WorkingDir - workingDir. optional.
   * @param {Long} Timeout - timeout. optional.
   */
  createCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'CommandContent')) {
      throw new TypeError('parameter "CommandContent" is required');
    }

    return this.request('CreateCommand', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. required.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} DeploymentSetName - deploymentSetName. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} Granularity - granularity. optional.
   * @param {String} Strategy - strategy. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createDeploymentSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('CreateDeploymentSet', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - zoneNo. required.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} DiskName - diskName. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} DiskCategory - diskCategory. optional.
   * @param {String} Description - description. optional.
   * @param {Boolean} Encrypted - encrypted. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  createDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('CreateDisk', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. required.
   */
  createHpcCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateHpcCluster', params, options);
  }

  /**
   * @param {RepeatList} DiskDeviceMapping - diskDeviceMappingParams. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SnapshotId - snapshotNo. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ImageName - imageName. optional.
   * @param {String} ImageVersion - version. optional.
   * @param {String} Description - remark. optional.
   * @param {String} Platform - platform. optional.
   * @param {String} Architecture - architecture. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  createImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateImage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Boolean} AutoRenew - autoRenew. optional.
   * @param {Integer} AutoRenewPeriod - autoRenewPeriod. optional.
   * @param {Integer} InternetMaxBandwidthIn - internetMaxBandwidthIn. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} Password - password. optional.
   * @param {Boolean} PasswordInherit - passwdInherit. optional.
   * @param {String} DeploymentSetId - deploymentSetId. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} ClusterId - zoneNo. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} VlanId - vlanNo. optional.
   * @param {String} InnerIpAddress - innerIp. optional.
   * @param {Integer} SystemDisk.Size - systemDiskSize. optional.
   * @param {String} SystemDisk.Category - systemDiskCategory. optional.
   * @param {String} SystemDisk.DiskName - systemDiskName. optional.
   * @param {String} SystemDisk.Description - systemDiskDescription. optional.
   * @param {RepeatList} DataDisk - createDataDiskParams. optional.
   * @param {String} NodeControllerId - nodeControllerId. optional.
   * @param {String} Description - description. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} PrivateIpAddress - privateIpAddress. optional.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Boolean} UseAdditionalService - enableVmOsConfig. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} PeriodUnit - periodUnit. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {Float} SpotPriceLimit - spotPriceLimit. optional.
   * @param {String} SpotInterruptionBehavior - spotInterruptionBehavior. optional.
   * @param {String} RamRoleName - ramRoleName. optional.
   * @param {String} SecurityEnhancementStrategy - securityEnhancementStrategy. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} HpcClusterId - hpcClusterId. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   * @param {String} DedicatedHostId - dedicatedHostId. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} KeyPairName - keyPairName. required.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  createKeyPair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'KeyPairName')) {
      throw new TypeError('parameter "KeyPairName" is required');
    }

    return this.request('CreateKeyPair', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} TemplateTag.1.Key - tagKey1. optional.
   * @param {String} TemplateTag.2.Key - tagKey2. optional.
   * @param {String} TemplateTag.3.Key - tagKey3. optional.
   * @param {String} TemplateTag.4.Key - tagKey4. optional.
   * @param {String} TemplateTag.5.Key - tagKey5. optional.
   * @param {String} TemplateTag.1.Value - tagValue1. optional.
   * @param {String} TemplateTag.2.Value - tagValue2. optional.
   * @param {String} TemplateTag.3.Value - tagValue3. optional.
   * @param {String} TemplateTag.4.Value - tagValue4. optional.
   * @param {String} TemplateTag.5.Value - tagValue5. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LaunchTemplateName - launchTemplateName. required.
   * @param {String} VersionDescription - versionDescription. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} ImageOwnerAlias - imageOwnerAlias. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} InternetMaxBandwidthIn - internetMaxBandwidthIn. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} SystemDisk.Category - systemDiskCategory. optional.
   * @param {Integer} SystemDisk.Size - systemDiskSize. optional.
   * @param {String} SystemDisk.DiskName - systemDiskName. optional.
   * @param {String} SystemDisk.Description - systemDiskDescription. optional.
   * @param {Integer} SystemDisk.Iops - systemDiskIops. optional.
   * @param {RepeatList} DataDisk - dataDisks. optional.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {RepeatList} NetworkInterface - enis. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Boolean} EnableVmOsConfig - enableVmOsConfig. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {String} RamRoleName - ramRoleName. optional.
   * @param {String} AutoReleaseTime - autoReleaseTime. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {Float} SpotPriceLimit - spotPriceLimit. optional.
   * @param {Integer} SpotDuration - spotDuration. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} TemplateResourceGroupId - templateResourceGroupId. optional.
   * @param {String} SecurityEnhancementStrategy - securityEnhancementStrategy. optional.
   * @param {RepeatList} Tag - tagList. optional.
   */
  createLaunchTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LaunchTemplateName')) {
      throw new TypeError('parameter "LaunchTemplateName" is required');
    }

    return this.request('CreateLaunchTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} LaunchTemplateId - launchTemplateId. optional.
   * @param {String} LaunchTemplateName - launchTemplateName. optional.
   * @param {String} VersionDescription - versionDescription. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} ImageOwnerAlias - imageOwnerAlias. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} InternetMaxBandwidthIn - internetMaxBandwidthIn. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {String} HostName - hostName. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} SystemDisk.Category - systemDiskCategory. optional.
   * @param {Integer} SystemDisk.Size - systemDiskSize. optional.
   * @param {String} SystemDisk.DiskName - systemDiskName. optional.
   * @param {String} SystemDisk.Description - systemDiskDescription. optional.
   * @param {Integer} SystemDisk.Iops - systemDiskIops. optional.
   * @param {RepeatList} DataDisk - dataDisks. optional.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {RepeatList} NetworkInterface - enis. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Boolean} EnableVmOsConfig - enableVmOsConfig. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {String} RamRoleName - ramRoleName. optional.
   * @param {String} AutoReleaseTime - autoReleaseTime. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {Float} SpotPriceLimit - spotPriceLimit. optional.
   * @param {Integer} SpotDuration - spotDuration. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} SecurityEnhancementStrategy - securityEnhancementStrategy. optional.
   * @param {RepeatList} Tag - tagList. optional.
   */
  createLaunchTemplateVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateLaunchTemplateVersion', params, options);
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
   * @param {RepeatList} BandwidthPackage - bandwidthPackage. required.
   */
  createNatGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'BandwidthPackage')) {
      throw new TypeError('parameter "BandwidthPackage" is required');
    }

    return this.request('CreateNatGateway', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} VSwitchId - vswitchId. required.
   * @param {String} PrimaryIpAddress - primaryIpAddress. optional.
   * @param {String} SecurityGroupId - securityGroupId. required.
   * @param {String} NetworkInterfaceName - networkInterfaceName. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - token. optional.
   */
  createNetworkInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('CreateNetworkInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} AccountId - accountId. required.
   * @param {String} NetworkInterfaceId - eniId. required.
   * @param {String} Permission - permission. required.
   */
  createNetworkInterfacePermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    if (!hasOwnProperty(params, 'Permission')) {
      throw new TypeError('parameter "Permission" is required');
    }

    return this.request('CreateNetworkInterfacePermission', params, options);
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
   * @param {String} UserCidr - userCidr. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RouteTableId - tableInstanceId. required.
   * @param {String} DestinationCidrBlock - destinationCidrBlock. required.
   * @param {String} NextHopId - nextRouterInstanceId. optional.
   * @param {String} ClientToken - token. optional.
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
   * @param {String} UserCidr - userCidr. optional.
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
   * @param {String} RegionId - regionNo. required.
   * @param {String} Description - groupDesc. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} SecurityGroupName - groupName. optional.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  createSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateSecurityGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DiskId - diskId. required.
   * @param {String} SnapshotName - snapshotNickname. optional.
   * @param {String} Description - description. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   */
  createSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('CreateSnapshot', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EventType - eventType. required.
   * @param {String} PlanTime - planTime. required.
   * @param {String} ExpireTime - expireTime. required.
   */
  createUserEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'PlanTime')) {
      throw new TypeError('parameter "PlanTime" is required');
    }

    if (!hasOwnProperty(params, 'ExpireTime')) {
      throw new TypeError('parameter "ExpireTime" is required');
    }

    return this.request('CreateUserEvent', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ZoneId - izNo. required.
   * @param {String} CidrBlock - cidrBlock. required.
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
   * @param {String} ClientToken - clientToken. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
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

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CreateVirtualBorderRouter', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - zoneNo. required.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} VolumeName - volumeName. optional.
   * @param {Integer} Size - size. optional.
   * @param {String} VolumeCategory - volumeType. optional.
   * @param {String} Description - description. optional.
   * @param {Boolean} VolumeEncrypted - encrypted. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   */
  createVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('CreateVolume', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} CidrBlock - cidrBlock. optional. default: 172.16.0.0/12.
   * @param {String} VpcName - name. optional.
   * @param {String} Description - description. optional.
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
   * @param {String} regionId - regionId. required.
   * @param {String} autoSnapshotPolicyId - autoSnapshotPolicyId. required.
   */
  deleteAutoSnapshotPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'regionId')) {
      throw new TypeError('parameter "regionId" is required');
    }

    if (!hasOwnProperty(params, 'autoSnapshotPolicyId')) {
      throw new TypeError('parameter "autoSnapshotPolicyId" is required');
    }

    return this.request('DeleteAutoSnapshotPolicy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BandwidthPackageId - bandwidthPackageId. required.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CommandId - commandId. required.
   */
  deleteCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CommandId')) {
      throw new TypeError('parameter "CommandId" is required');
    }

    return this.request('DeleteCommand', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} DeploymentSetId - deploymentSetId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteDeploymentSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DeploymentSetId')) {
      throw new TypeError('parameter "DeploymentSetId" is required');
    }

    return this.request('DeleteDeploymentSet', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DiskId - diskId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('DeleteDisk', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} HpcClusterId - hpcClusterId. required.
   */
  deleteHpcCluster(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HpcClusterId')) {
      throw new TypeError('parameter "HpcClusterId" is required');
    }

    return this.request('DeleteHpcCluster', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ImageId - imageId. required.
   * @param {Boolean} Force - force. optional. default: false.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('DeleteImage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Boolean} Force - force. optional. default: false.
   * @param {Boolean} TerminateSubscription - terminateSubscription. optional. default: false.
   */
  deleteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} KeyPairNames - keyPairNames. required.
   */
  deleteKeyPairs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'KeyPairNames')) {
      throw new TypeError('parameter "KeyPairNames" is required');
    }

    return this.request('DeleteKeyPairs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LaunchTemplateId - launchTemplateId. optional.
   * @param {String} LaunchTemplateName - launchTemplateName. optional.
   */
  deleteLaunchTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteLaunchTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LaunchTemplateId - launchTemplateId. optional.
   * @param {String} LaunchTemplateName - launchTemplateName. optional.
   * @param {RepeatList} DeleteVersion - deleteVersions. required.
   */
  deleteLaunchTemplateVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DeleteVersion')) {
      throw new TypeError('parameter "DeleteVersion" is required');
    }

    return this.request('DeleteLaunchTemplateVersion', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} NatGatewayId - natGatewayId. required.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} NetworkInterfaceId - eniId. required.
   */
  deleteNetworkInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    return this.request('DeleteNetworkInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} NetworkInterfacePermissionId - eniPermissionId. required.
   * @param {Boolean} Force - force. optional.
   */
  deleteNetworkInterfacePermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkInterfacePermissionId')) {
      throw new TypeError('parameter "NetworkInterfacePermissionId" is required');
    }

    return this.request('DeleteNetworkInterfacePermission', params, options);
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
   * @param {String} RegionId - regionNo. required.
   * @param {String} resourceIds - resourceIds. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteRecycleBin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'resourceIds')) {
      throw new TypeError('parameter "resourceIds" is required');
    }

    return this.request('DeleteRecycleBin', params, options);
  }

  /**
   * @param {RepeatList} NextHopList - nextHopList. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RouteTableId - tableInstanceId. required.
   * @param {String} DestinationCidrBlock - destinationCidrBlock. required.
   * @param {String} NextHopId - nextHopId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteRouteEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RouteTableId')) {
      throw new TypeError('parameter "RouteTableId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationCidrBlock')) {
      throw new TypeError('parameter "DestinationCidrBlock" is required');
    }

    return this.request('DeleteRouteEntry', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} RouterInterfaceId - routerInterfaceId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
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
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('DeleteSecurityGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {Boolean} Force - force. optional. default: false.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('DeleteSnapshot', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VSwitchId - instanceId. required.
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
   * @param {String} UserCidr - userCidr. optional.
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
   * @param {String} VolumeId - volumeId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VolumeId')) {
      throw new TypeError('parameter "VolumeId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteVolume', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  deleteVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DeleteVpc', params, options);
  }

  /**
   * @param {RepeatList} Filter - filter. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Type - type. optional.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeAutoSnapshotPolicy(params = {}, options = {}) {
    return this.request('DescribeAutoSnapshotPolicy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AutoSnapshotPolicyId - autoSnapshotPolicyId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeAutoSnapshotPolicyEx(params = {}, options = {}) {
    return this.request('DescribeAutoSnapshotPolicyEx', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
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
   * @param {Integer} Memory - mem. optional.
   */
  describeAvailableResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
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
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} OperationType - operationType. optional.
   */
  describeBandwidthLimitation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeBandwidthLimitation', params, options);
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
   * @param {String} RegionId - regionId. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} PageNumber - pageNumber. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  describeClassicLinkInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeClassicLinkInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  describeCloudAssistantStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeCloudAssistantStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeClusters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeClusters', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CommandId - commandId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Type - type. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  describeCommands(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCommands', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} DeploymentSetId - deploymentSetId. required.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} Strategy - strategy. optional.
   * @param {String} DeploymentSetName - deploymentSetName. optional.
   * @param {String} Granularity - granularity. optional.
   * @param {String} Domain - domain. optional.
   */
  describeDeploymentSetTopology(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DeploymentSetId')) {
      throw new TypeError('parameter "DeploymentSetId" is required');
    }

    return this.request('DescribeDeploymentSetTopology', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DeploymentSetIds - deploymentSetIds. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} Strategy - strategy. optional.
   * @param {String} DeploymentSetName - deploymentSetName. optional.
   * @param {String} Granularity - granularity. optional.
   * @param {String} Domain - domain. optional.
   */
  describeDeploymentSets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDeploymentSets', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DiskId - resourceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Period - period. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeDiskMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeDiskMonitorData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} DiskIds - instanceIds. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {String} DiskType - diskType. optional.
   * @param {String} Category - diskCategory. optional.
   * @param {String} Status - diskStatus. optional.
   * @param {String} SnapshotId - snapshotNo. optional.
   * @param {Boolean} Portable - portable. optional.
   * @param {Boolean} DeleteWithInstance - deleteWithInstance. optional.
   * @param {Boolean} DeleteAutoSnapshot - deleteAutoSnapshot. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DiskName - fuzzyDiskName. optional.
   * @param {String} AutoSnapshotPolicyId - autoSnapshotPolicyId. optional.
   * @param {Boolean} EnableAutoSnapshot - enableAutoSnapshot. optional.
   * @param {Boolean} EnableAutomatedSnapshotPolicy - enableAutomatedSnapshotPolicy. optional.
   * @param {String} DiskChargeType - diskChargeType. optional.
   * @param {String} LockReason - lockReason. optional.
   * @param {String} Filter.1.Key - filter1Key. optional.
   * @param {String} Filter.2.Key - filter2Key. optional.
   * @param {String} Filter.1.Value - creationStartTime. optional.
   * @param {String} Filter.2.Value - creationEndTime. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Boolean} EnableShared - enableShared. optional.
   * @param {Boolean} Encrypted - encrypted. optional.
   * @param {RepeatList} AdditionalAttributes - additionalAttributes. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   */
  describeDisks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDisks', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} DiskId - diskIds. optional.
   * @param {RepeatList} EventId - eventIds. optional.
   * @param {String} Status - lifeCycleStatus. optional.
   * @param {String} HealthStatus - healthStatus. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} EventTime.Start - eventTimeFromStr. optional.
   * @param {String} EventTime.End - eventTimeToStr. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeDisksFullStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeDisksFullStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Status - status. optional.
   * @param {String} EipAddress - eipAddress. optional.
   * @param {String} AllocationId - allocationId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Filter.1.Key - filter1Key. optional.
   * @param {String} Filter.2.Key - filter2Key. optional.
   * @param {String} Filter.1.Value - createStartTime. optional.
   * @param {String} Filter.2.Value - createEndTime. optional.
   * @param {String} LockReason - reason. optional.
   * @param {String} AssociatedInstanceType - associatedInstanceType. optional.
   * @param {String} AssociatedInstanceId - associatedInstanceId. optional.
   * @param {String} ChargeType - chargeType. optional.
   */
  describeEipAddresses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeEipAddresses', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {String} EventId - eventId. required.
   */
  describeEventDetail(params = {}, options = {}) {
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
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeEvents', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ForwardTableId - forwardTableId. required.
   * @param {String} ForwardEntryId - forwardEntryId. optional.
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
   * @param {String} RegionId - regionNo. required.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. required.
   */
  describeHaVips(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Filter')) {
      throw new TypeError('parameter "Filter" is required');
    }

    return this.request('DescribeHaVips', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} HpcClusterIds - hpcClusterIds. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeHpcClusters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeHpcClusters', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. required.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeImageSharePermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('DescribeImageSharePermission', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. optional.
   * @param {String} ActionType - actionType. optional.
   * @param {RepeatList} Filter - filterKeyValueModels. optional.
   */
  describeImageSupportInstanceTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeImageSupportInstanceTypes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} Status - status. optional. default: Available.
   * @param {String} ImageId - imageIds. optional.
   * @param {Boolean} ShowExpired - isAll. optional. default: false.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} ImageName - fuzzyImageName. optional.
   * @param {String} ImageOwnerAlias - imageOwnerAlias. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {Boolean} IsSupportIoOptimized - isSupportIoOptimized. optional.
   * @param {Boolean} IsSupportCloudinit - isSupportCloudinit. optional.
   * @param {String} OSType - osType. optional.
   * @param {String} Architecture - architecture. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Usage - usage. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   * @param {String} ActionType - actionType. optional.
   * @param {RepeatList} Filter - filterKeyValueModels. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  describeImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeImages', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstanceAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceId - instanceIds. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RenewalStatus - renewalStatus. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNumber - pageNo. optional.
   */
  describeInstanceAutoRenewAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstanceAutoRenewAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {RepeatList} EventId - eventIds. optional.
   * @param {RepeatList} InstanceEventCycleStatus - eventCycleStatuses. optional.
   * @param {String} EventCycleStatus - eventCycleStatus. optional.
   * @param {RepeatList} InstanceEventType - eventTypes. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} NotBefore.Start - eventPlanExeTimeFromStr. optional.
   * @param {String} NotBefore.End - eventPlanExeTimeToStr. optional.
   * @param {String} EventPublishTime.Start - eventPublishTimeFromStr. optional.
   * @param {String} EventPublishTime.End - eventPublishTimeToStr. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeInstanceHistoryEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstanceHistoryEvents', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - resourceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Period - period. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeInstanceMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeInstanceMonitorData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeInstancePhysicalAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstancePhysicalAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} RamRoleName - ramRoleName. optional.
   */
  describeInstanceRamRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstanceRamRole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} ClusterId - zoneNo. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeInstanceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstanceStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Generation - generation. optional.
   */
  describeInstanceTypeFamilies(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstanceTypeFamilies', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceTypeFamily - instanceTypeFamily. optional.
   */
  describeInstanceTypes(params = {}, options = {}) {
    return this.request('DescribeInstanceTypes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeInstanceVncPasswd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstanceVncPasswd', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeInstanceVncUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstanceVncUrl', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} VSwitchId - vswInstanceId. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} InstanceNetworkType - ecsNetworkType. optional.
   * @param {String} SecurityGroupId - groupNo. optional.
   * @param {String} InstanceIds - ecsInstanceIds. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} InnerIpAddresses - ecsInnerIps. optional.
   * @param {String} PrivateIpAddresses - ecsPrivateIps. optional.
   * @param {String} PublicIpAddresses - ecsPublicIps. optional.
   * @param {String} EipAddresses - eipAddresses. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} Status - status. optional.
   * @param {String} LockReason - lockReason. optional.
   * @param {String} Filter.1.Key - filter1Key. optional.
   * @param {String} Filter.2.Key - filter2Key. optional.
   * @param {String} Filter.3.Key - filter3Key. optional.
   * @param {String} Filter.4.Key - filter4Key. optional.
   * @param {String} Filter.1.Value - creationStartTime. optional.
   * @param {String} Filter.2.Value - creationEndTime. optional.
   * @param {String} Filter.3.Value - expiredStartTime. optional.
   * @param {String} Filter.4.Value - expiredEndTime. optional.
   * @param {Boolean} DeviceAvailable - deviceAvailable. optional.
   * @param {Boolean} IoOptimized - ioOptimized. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} InstanceTypeFamily - instanceTypeFamily. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} HpcClusterId - hpcClusterId. optional.
   * @param {String} RdmaIpAddresses - ecsRdmaIps. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   */
  describeInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} InstanceId - instanceIds. optional.
   * @param {RepeatList} EventId - eventIds. optional.
   * @param {String} Status - status. optional.
   * @param {String} HealthStatus - healthStatus. optional.
   * @param {RepeatList} InstanceEventType - eventTypes. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} NotBefore.Start - eventPlanExeTimeFromStr. optional.
   * @param {String} NotBefore.End - eventPlanExeTimeToStr. optional.
   * @param {String} EventPublishTime.Start - eventPublishTimeFromStr. optional.
   * @param {String} EventPublishTime.End - eventPublishTimeToStr. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeInstancesFullStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstancesFullStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeIntranetAttributeKb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeIntranetAttributeKb', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InvokeId - taskId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} CommandId - commandId. optional.
   * @param {String} InvokeRecordStatus - invokeRecordStatus. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  describeInvocationResults(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInvocationResults', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InvokeId - taskId. optional.
   * @param {String} CommandId - commandId. optional.
   * @param {String} CommandName - commandName. optional.
   * @param {String} CommandType - commandType. optional.
   * @param {Boolean} Timed - timed. optional.
   * @param {String} InvokeStatus - taskStatus. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  describeInvocations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInvocations', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClusterId - zoneNo. required.
   * @param {String} NicType - network. required.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeIpRanges(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'NicType')) {
      throw new TypeError('parameter "NicType" is required');
    }

    return this.request('DescribeIpRanges', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {String} KeyPairFingerPrint - keyPairFingerPrint. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  describeKeyPairs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeKeyPairs', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LaunchTemplateId - launchTemplateId. optional.
   * @param {String} LaunchTemplateName - launchTemplateName. optional.
   * @param {RepeatList} LaunchTemplateVersion - launchTemplateVersions. optional.
   * @param {Long} MinVersion - minVersion. optional.
   * @param {Long} MaxVersion - maxVersion. optional.
   * @param {Boolean} DefaultVersion - defaultVersion. optional.
   * @param {Boolean} DetailFlag - detailFlag. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeLaunchTemplateVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeLaunchTemplateVersions', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} TemplateTag.1.Key - tagKey1. optional.
   * @param {String} TemplateTag.2.Key - tagKey2. optional.
   * @param {String} TemplateTag.3.Key - tagKey3. optional.
   * @param {String} TemplateTag.4.Key - tagKey4. optional.
   * @param {String} TemplateTag.5.Key - tagKey5. optional.
   * @param {String} TemplateTag.1.Value - tagValue1. optional.
   * @param {String} TemplateTag.2.Value - tagValue2. optional.
   * @param {String} TemplateTag.3.Value - tagValue3. optional.
   * @param {String} TemplateTag.4.Value - tagValue4. optional.
   * @param {String} TemplateTag.5.Value - tagValue5. optional.
   * @param {RepeatList} LaunchTemplateId - launchTemplateIds. optional.
   * @param {RepeatList} LaunchTemplateName - launchTemplateNames. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} TemplateResourceGroupId - templateResourceGroupId. optional.
   */
  describeLaunchTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeLaunchTemplates', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Limitation - limitation. required.
   */
  describeLimitation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Limitation')) {
      throw new TypeError('parameter "Limitation" is required');
    }

    return this.request('DescribeLimitation', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} NatGatewayId - natGatewayId. optional.
   * @param {String} VpcId - vpcId. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} NetworkInterfaceId - eniId. optional.
   * @param {RepeatList} NetworkInterfacePermissionId - eniPermissionIds. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeNetworkInterfacePermissions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeNetworkInterfacePermissions', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} PrimaryIpAddress - primaryIpAddress. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} NetworkInterfaceName - eniName. optional.
   * @param {String} Type - networkInterfaceType. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {RepeatList} NetworkInterfaceId - eniInstanceIds. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeNetworkInterfaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeNetworkInterfaces', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {RepeatList} Filter - filter. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  describePhysicalConnections(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribePhysicalConnections', params, options);
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
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} InstanceNetworkType - networkType. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {String} SystemDisk.Category - systemDiskCategory. optional.
   * @param {Integer} SystemDisk.Size - systemDiskSize. optional.
   * @param {Integer} DataDisk.1.Size - dataDiskSize1. optional.
   * @param {String} DataDisk.1.Category - dataDiskCategory1. optional.
   * @param {Integer} DataDisk.2.Size - dataDiskSize2. optional.
   * @param {String} DataDisk.2.Category - dataDiskCategory2. optional.
   * @param {Integer} DataDisk.3.Size - dataDiskSize3. optional.
   * @param {String} DataDisk.3.Category - dataDiskCategory3. optional.
   * @param {Integer} DataDisk.4.Size - dataDiskSize4. optional.
   * @param {String} DataDisk.4.Category - dataDiskCategory4. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} PriceUnit - priceUnit. optional.
   * @param {Integer} Amount - amount. optional.
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
   * @param {String} token - token. optional.
   * @param {String} proxyId - proxyId. optional.
   * @param {String} channel - channel. optional.
   * @param {String} operator - operator. optional.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} Scene - scene. optional. default: CREATE.
   * @param {String} NetworkType - networkType. required.
   * @param {String} RegionId - regionId. required.
   */
  describeRecommendInstanceType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeRecommendInstanceType', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeRecycleBin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeRecycleBin', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceChargeType - saleStrategy. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} AcceptLanguage - acceptLanguage. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
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
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   */
  describeResourceByTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeResourceByTags', params, options);
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
   * @param {Integer} Cores - cpu. optional.
   * @param {Integer} Memory - mem. optional.
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
   * @param {String} VRouterId - routerInstanceId. optional.
   * @param {String} RouteTableId - instanceId. optional.
   * @param {String} RouterType - routerType. optional.
   * @param {String} RouterId - routerId. optional.
   * @param {String} RouteTableName - routeTableName. optional.
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
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} NicType - nic. optional. default: internet.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Direction - direction. optional. default: all.
   */
  describeSecurityGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSecurityGroupAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} SecurityGroupId - groupNos. required.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  describeSecurityGroupReferences(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('DescribeSecurityGroupReferences', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SecurityGroupIds - securityGroupIds. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {Boolean} IsQueryEcsCount - isQueryEcsCount. optional.
   * @param {Boolean} FuzzyQuery - fuzzyQuery. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   */
  describeSecurityGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSecurityGroups', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} DiskIds - diskIds. optional.
   * @param {String} SnapshotLinkIds - snapshotLinkIds. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeSnapshotLinks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSnapshotLinks', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} Period - period. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSnapshotMonitorData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeSnapshotMonitorData', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeSnapshotPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSnapshotPackage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} DiskId - diskId. optional.
   * @param {String} SnapshotLinkId - snapshotLinkId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SnapshotIds - snapshotIds. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SnapshotName - snapshotName. optional.
   * @param {String} Status - status. optional.
   * @param {String} SnapshotType - snapshotType. optional.
   * @param {String} Filter.1.Key - filter1Key. optional.
   * @param {String} Filter.2.Key - filter2Key. optional.
   * @param {String} Filter.1.Value - creationStartTime. optional.
   * @param {String} Filter.2.Value - creationEndTime. optional.
   * @param {String} Usage - usage. optional.
   * @param {String} SourceDiskType - diskType. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   * @param {Boolean} Encrypted - encrypted. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   */
  describeSnapshots(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSnapshots', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   */
  describeSnapshotsUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSnapshotsUsage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} NetworkType - networkType. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {String} StartTime - utcStartTime. optional.
   * @param {String} EndTime - utcEndTime. optional.
   * @param {String} OSType - osType. optional.
   * @param {Integer} Offset - pageOffset. optional.
   */
  describeSpotPriceHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('DescribeSpotPriceHistory', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} RegionId - regionId. required.
   */
  describeTagKeys(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeTagKeys', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   */
  describeTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeTags', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} TaskId - taskId. required.
   */
  describeTaskAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeTaskAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} TaskIds - taskIds. optional.
   * @param {String} TaskAction - taskAction. optional.
   * @param {String} TaskStatus - taskStatus. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  describeTasks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeTasks', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} statusKey - statusKey. required.
   */
  describeUserBusinessBehavior(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'statusKey')) {
      throw new TypeError('parameter "statusKey" is required');
    }

    return this.request('DescribeUserBusinessBehavior', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  describeUserData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeUserData', params, options);
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
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} VSwitchId - instanceId. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {Boolean} IsDefault - isDefault. optional.
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
   * @param {String} RegionId - regionNo. required.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} VolumeIds - instanceIds. optional.
   * @param {String} InstanceId - ecsInstanceId. optional.
   * @param {String} Category - volumeCategory. optional.
   * @param {String} Status - volumeStatus. optional.
   * @param {String} SnapshotId - snapshotNo. optional.
   * @param {String} AutoSnapshotPolicyId - autoSnapshotPolicyId. optional.
   * @param {Boolean} EnableAutomatedSnapshotPolicy - enableAutomatedSnapshotPolicy. optional.
   * @param {String} LockReason - lockReason. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   */
  describeVolumes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVolumes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {Boolean} IsDefault - isDefault. optional.
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
   * @param {String} RegionId - regionNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Boolean} Verbose - verbose. optional. default: true.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
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
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VpcId - vpcId. required.
   */
  detachClassicLinkVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DetachClassicLinkVpc', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} DiskId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  detachDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('DetachDisk', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RamRoleName - ramRoleName. optional.
   * @param {String} InstanceIds - instanceIds. required.
   */
  detachInstanceRamRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DetachInstanceRamRole', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} KeyPairName - keyPairName. required.
   * @param {String} InstanceIds - instanceIds. required.
   */
  detachKeyPair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'KeyPairName')) {
      throw new TypeError('parameter "KeyPairName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DetachKeyPair', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} NetworkInterfaceId - eniId. required.
   * @param {String} InstanceId - ecsInstanceId. required.
   */
  detachNetworkInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DetachNetworkInterface', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} VolumeId - storageId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  detachVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VolumeId')) {
      throw new TypeError('parameter "VolumeId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DetachVolume', params, options);
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
   * @param {String} RegionId - regionId. required.
   * @param {String} PhysicalConnectionId - physicalConnectionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  enablePhysicalConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhysicalConnectionId')) {
      throw new TypeError('parameter "PhysicalConnectionId" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('EnablePhysicalConnection', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} OSSBucket - ossBucket. required.
   * @param {String} OSSPrefix - ossPrefix. optional.
   * @param {String} ImageFormat - imageFormat. optional.
   * @param {String} RoleName - roleName. optional.
   */
  exportImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'OSSBucket')) {
      throw new TypeError('parameter "OSSBucket" is required');
    }

    return this.request('ExportImage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  getInstanceConsoleOutput(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceConsoleOutput', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} WakeUp - wakeup. optional.
   */
  getInstanceScreenshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceScreenshot', params, options);
  }

  /**
   * @param {RepeatList} DiskDeviceMapping - dataDiskDeviceMappingParam. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageName - imageName. optional.
   * @param {String} Description - description. optional.
   * @param {String} Architecture - architecture. optional.
   * @param {String} OSType - osType. optional.
   * @param {String} Platform - platform. optional.
   * @param {String} RoleName - roleName. optional.
   */
  importImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ImportImage', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} KeyPairName - keyPairName. required.
   * @param {String} PublicKeyBody - publicKeyBody. required.
   */
  importKeyPair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'KeyPairName')) {
      throw new TypeError('parameter "KeyPairName" is required');
    }

    if (!hasOwnProperty(params, 'PublicKeyBody')) {
      throw new TypeError('parameter "PublicKeyBody" is required');
    }

    return this.request('ImportKeyPair', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  installCloudAssistant(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InstallCloudAssistant', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CommandId - commandId. required.
   * @param {Boolean} Timed - timed. optional.
   * @param {String} Frequency - frequency. optional.
   * @param {RepeatList} InstanceId - instanceIds. required.
   */
  invokeCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CommandId')) {
      throw new TypeError('parameter "CommandId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InvokeCommand', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  joinResourceGroup(params = {}, options = {}) {
    return this.request('JoinResourceGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  joinSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('JoinSecurityGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} InstanceId - ecsInstanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  leaveSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('LeaveSecurityGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Boolean} SystemDiskPolicyEnabled - systemDiskPolicyEnabled. optional.
   * @param {Integer} SystemDiskPolicyTimePeriod - systemDiskPolicyTimePeriod. optional.
   * @param {Integer} SystemDiskPolicyRetentionDays - systemDiskPolicyRetentionDays. optional.
   * @param {Boolean} SystemDiskPolicyRetentionLastWeek - systemDiskPolicyRetentionLastWeek. optional.
   * @param {Boolean} DataDiskPolicyEnabled - dataDiskPolicyEnabled. optional.
   * @param {Integer} DataDiskPolicyTimePeriod - dataDiskPolicyTimePeriod. optional.
   * @param {Integer} DataDiskPolicyRetentionDays - dataDiskPolicyRetentionDays. optional.
   * @param {Boolean} DataDiskPolicyRetentionLastWeek - dataDiskPolicyRetentionLastWeek. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyAutoSnapshotPolicy(params = {}, options = {}) {
    return this.request('ModifyAutoSnapshotPolicy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} regionId - regionId. required.
   * @param {String} autoSnapshotPolicyId - autoSnapshotPolicyId. required.
   * @param {String} autoSnapshotPolicyName - autoSnapshotPolicyName. optional.
   * @param {String} timePoints - timePoints. optional.
   * @param {String} repeatWeekdays - repeatWeekdays. optional.
   * @param {Integer} retentionDays - retentionDays. optional.
   */
  modifyAutoSnapshotPolicyEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'regionId')) {
      throw new TypeError('parameter "regionId" is required');
    }

    if (!hasOwnProperty(params, 'autoSnapshotPolicyId')) {
      throw new TypeError('parameter "autoSnapshotPolicyId" is required');
    }

    return this.request('ModifyAutoSnapshotPolicyEx', params, options);
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CommandId - commandId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} CommandContent - commandContent. optional.
   * @param {String} WorkingDir - workingDir. optional.
   * @param {Long} Timeout - timeOut. optional.
   */
  modifyCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CommandId')) {
      throw new TypeError('parameter "CommandId" is required');
    }

    return this.request('ModifyCommand', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DeploymentSetId - deploymentSetId. required.
   * @param {String} Description - description. optional.
   * @param {String} DeploymentSetName - deploymentSetName. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDeploymentSetAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeploymentSetId')) {
      throw new TypeError('parameter "DeploymentSetId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyDeploymentSetAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DiskId - instanceId. required.
   * @param {String} DiskName - diskName. optional.
   * @param {String} Description - diskDesc. optional.
   * @param {Boolean} DeleteWithInstance - deleteWithInstance. optional.
   * @param {Boolean} DeleteAutoSnapshot - deleteAutoSnapshot. optional.
   * @param {Boolean} EnableAutoSnapshot - enableAutoSnapshot. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyDiskAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('ModifyDiskAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} DiskIds - diskIds. required.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} DiskChargeType - diskChargeType. optional.
   */
  modifyDiskChargeType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DiskIds')) {
      throw new TypeError('parameter "DiskIds" is required');
    }

    return this.request('ModifyDiskChargeType', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} Bandwidth - bandwidth. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyEipAddressAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AllocationId')) {
      throw new TypeError('parameter "AllocationId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('ModifyEipAddressAttribute', params, options);
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} HpcClusterId - hpcClusterId. required.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   */
  modifyHpcClusterAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HpcClusterId')) {
      throw new TypeError('parameter "HpcClusterId" is required');
    }

    return this.request('ModifyHpcClusterAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} ImageName - imageName. optional.
   * @param {String} Description - remark. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyImageAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('ModifyImageAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} AddGroup.1 - addGroup1. optional.
   * @param {String} RemoveGroup.1 - removeGroup1. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyImageShareGroupPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('ModifyImageShareGroupPermission', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} AddAccount.1 - addAccount1. optional.
   * @param {String} AddAccount.2 - addAccount2. optional.
   * @param {String} AddAccount.3 - addAccount3. optional.
   * @param {String} AddAccount.4 - addAccount4. optional.
   * @param {String} AddAccount.5 - addAccount5. optional.
   * @param {String} AddAccount.6 - addAccount6. optional.
   * @param {String} AddAccount.7 - addAccount7. optional.
   * @param {String} AddAccount.8 - addAccount8. optional.
   * @param {String} AddAccount.9 - addAccount9. optional.
   * @param {String} AddAccount.10 - addAccount10. optional.
   * @param {String} RemoveAccount.1 - removeAccount1. optional.
   * @param {String} RemoveAccount.2 - removeAccount2. optional.
   * @param {String} RemoveAccount.3 - removeAccount3. optional.
   * @param {String} RemoveAccount.4 - removeAccount4. optional.
   * @param {String} RemoveAccount.5 - removeAccount5. optional.
   * @param {String} RemoveAccount.6 - removeAccount6. optional.
   * @param {String} RemoveAccount.7 - removeAccount7. optional.
   * @param {String} RemoveAccount.8 - removeAccount8. optional.
   * @param {String} RemoveAccount.9 - removeAccount9. optional.
   * @param {String} RemoveAccount.10 - removeAccount10. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyImageSharePermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('ModifyImageSharePermission', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Password - password. optional.
   * @param {String} HostName - hostname. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} Description - description. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserData - userData. optional.
   * @param {Boolean} Recyclable - recyclable. optional.
   */
  modifyInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyInstanceAttribute', params, options);
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
  modifyInstanceAutoReleaseTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyInstanceAutoReleaseTime', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceId - instanceIds. required.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} Duration - duration. optional.
   * @param {Boolean} AutoRenew - autoRenew. optional. default: false.
   * @param {String} RenewalStatus - renewalStatus. optional.
   * @param {String} PeriodUnit - periodUnit. optional.
   */
  modifyInstanceAutoRenewAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyInstanceAutoRenewAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceIds - instanceIds. required.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} Period - period. optional.
   * @param {String} PeriodUnit - periodUnit. optional.
   * @param {Boolean} IncludeDataDisks - includeDataDisks. optional. default: false.
   * @param {Boolean} DryRun - dryRun. optional. default: false.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} InstanceChargeType - instanceChargeType. optional. default: PrePaid.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyInstanceChargeType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyInstanceChargeType', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {Integer} InternetMaxBandwidthIn - internetMaxBandwidthIn. optional.
   * @param {String} NetworkChargeType - networkChargeType. optional.
   * @param {Boolean} AllocatePublicIp - allocatePublicIp. optional. default: false.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyInstanceNetworkSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyInstanceNetworkSpec', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {Integer} InternetMaxBandwidthIn - internetMaxBandwidthIn. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Temporary.StartTime - temporaryStartTime. optional.
   * @param {String} Temporary.EndTime - temporaryEndTime. optional.
   * @param {Integer} Temporary.InternetMaxBandwidthOut - temporaryInternetMaxBandwidthOut. optional.
   * @param {Boolean} Async - async. optional. default: false.
   * @param {Boolean} AllowMigrateAcrossZone - canMigrateAcrossZone. optional. default: false.
   * @param {String} SystemDisk.Category - systemDiskCategory. optional.
   * @param {String} ClientToken - clientToken. optional.
   */
  modifyInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyInstanceSpec', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} VncPassword - vncPassword. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyInstanceVncPasswd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VncPassword')) {
      throw new TypeError('parameter "VncPassword" is required');
    }

    return this.request('ModifyInstanceVncPasswd', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} PrivateIpAddress - privateIpAddress. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyInstanceVpcAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    return this.request('ModifyInstanceVpcAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} IntranetMaxBandwidthIn - intranetRx. optional.
   * @param {Integer} IntranetMaxBandwidthOut - intranetTx. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyIntranetBandwidthKb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyIntranetBandwidthKb', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LaunchTemplateId - launchTemplateId. optional.
   * @param {String} LaunchTemplateName - launchTemplateName. optional.
   * @param {Long} DefaultVersionNumber - defaultVersionNumber. required.
   */
  modifyLaunchTemplateDefaultVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DefaultVersionNumber')) {
      throw new TypeError('parameter "DefaultVersionNumber" is required');
    }

    return this.request('ModifyLaunchTemplateDefaultVersion', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} SecurityGroupId - securityGroupIdList. optional.
   * @param {String} NetworkInterfaceName - networkInterfaceName. optional.
   * @param {String} NetworkInterfaceId - eniId. required.
   * @param {String} Description - description. optional.
   */
  modifyNetworkInterfaceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    return this.request('ModifyNetworkInterfaceAttribute', params, options);
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
   * @param {String} UserCidr - userCidr. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} OperatorType - operatorType. optional. default: upgrade.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: true.
   * @param {Boolean} MigrateAcrossZone - canMigrateAcrossZone. optional. default: false.
   * @param {String} SystemDisk.Category - systemDiskCategory. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyPrepayInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('ModifyPrepayInstanceSpec', params, options);
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
   * @param {String} UserCidr - userCidr. optional.
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
   * @param {String} SecurityGroupId - securityGroupId. required.
   * @param {String} Description - description. optional.
   * @param {String} SecurityGroupName - securityGroupName. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifySecurityGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifySecurityGroupAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} PortRange - portRange. required.
   * @param {String} DestGroupId - destGroupNo. optional.
   * @param {Long} DestGroupOwnerId - groupOwnerAliUid. optional.
   * @param {String} DestGroupOwnerAccount - groupOwnerAccount. optional.
   * @param {String} DestCidrIp - destCidrIp. optional.
   * @param {String} SourceCidrIp - sourceCidrIp. optional.
   * @param {String} SourcePortRange - sourcePortRange. optional.
   * @param {String} Policy - policy. optional. default: accept.
   * @param {String} Priority - level. optional. default: 1.
   * @param {String} NicType - nic. optional. default: internet.
   * @param {String} ClientToken - token. optional.
   * @param {String} Description - description. optional.
   */
  modifySecurityGroupEgressRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

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

    return this.request('ModifySecurityGroupEgressRule', params, options);
  }

  /**
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} InnerAccessPolicy - policy. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   */
  modifySecurityGroupPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InnerAccessPolicy')) {
      throw new TypeError('parameter "InnerAccessPolicy" is required');
    }

    return this.request('ModifySecurityGroupPolicy', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} PortRange - portRange. required.
   * @param {String} SourceGroupId - sourceGroupNo. optional.
   * @param {Long} SourceGroupOwnerId - groupOwnerAliUid. optional.
   * @param {String} SourceGroupOwnerAccount - groupOwnerAccount. optional.
   * @param {String} SourceCidrIp - sourceCidrIp. optional.
   * @param {String} SourcePortRange - sourcePortRange. optional.
   * @param {String} DestCidrIp - destCidrIp. optional.
   * @param {String} Policy - policy. optional. default: accept.
   * @param {String} Priority - level. optional. default: 1.
   * @param {String} NicType - nic. optional. default: internet.
   * @param {String} ClientToken - token. optional.
   * @param {String} Description - description. optional.
   */
  modifySecurityGroupRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

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

    return this.request('ModifySecurityGroupRule', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} SnapshotName - nickname. optional.
   * @param {String} Description - description. optional.
   */
  modifySnapshotAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('ModifySnapshotAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} statusKey - statusKey. required.
   * @param {String} statusValue - statusValue. required.
   */
  modifyUserBusinessBehavior(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'statusKey')) {
      throw new TypeError('parameter "statusKey" is required');
    }

    if (!hasOwnProperty(params, 'statusValue')) {
      throw new TypeError('parameter "statusValue" is required');
    }

    return this.request('ModifyUserBusinessBehavior', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} EventId - eventId. required.
   * @param {String} NewPlanTime - planTime. required.
   * @param {String} NewExpireTime - expireTime. required.
   */
  modifyUserEventAttribute(params = {}, options = {}) {
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

    return this.request('ModifyUserEventAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
   * @param {String} Description - description. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
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
   * @param {String} RegionId - regionNo. required.
   * @param {String} VolumeId - storageId. required.
   * @param {String} VolumeName - storageName. optional.
   * @param {String} Description - description. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  modifyVolumeAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VolumeId')) {
      throw new TypeError('parameter "VolumeId" is required');
    }

    return this.request('ModifyVolumeAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VpcId - instanceId. required.
   * @param {String} Description - description. optional.
   * @param {String} VpcName - name. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
   */
  modifyVpcAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('ModifyVpcAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  reActivateInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReActivateInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DiskId - diskId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Password - password. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {Boolean} AutoStartInstance - autoStartInstance. optional. default: false.
   * @param {String} SecurityEnhancementStrategy - securityEnhancementStrategy. optional.
   */
  reInitDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('ReInitDisk', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VolumeId - volumeId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Password - password. optional.
   */
  reInitVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VolumeId')) {
      throw new TypeError('parameter "VolumeId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ReInitVolume', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} ForceStop - kill. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  rebootInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RebootInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} VbrId - vbrId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} UserCidr - userCidr. optional.
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
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} PublicIpAddress - ip. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  releasePublicIpAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicIpAddress')) {
      throw new TypeError('parameter "PublicIpAddress" is required');
    }

    return this.request('ReleasePublicIpAddress', params, options);
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
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} Tag.1.Key - tagKey1. optional.
   * @param {String} Tag.2.Key - tagKey2. optional.
   * @param {String} Tag.3.Key - tagKey3. optional.
   * @param {String} Tag.4.Key - tagKey4. optional.
   * @param {String} Tag.5.Key - tagKey5. optional.
   * @param {String} Tag.1.Value - tagValue1. optional.
   * @param {String} Tag.2.Value - tagValue2. optional.
   * @param {String} Tag.3.Value - tagValue3. optional.
   * @param {String} Tag.4.Value - tagValue4. optional.
   * @param {String} Tag.5.Value - tagValue5. optional.
   */
  removeTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('RemoveTags', params, options);
  }

  /**
   * @param {String} ClientToken - clientToken. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Period - period. required.
   * @param {String} PeriodUnit - periodUnit. optional.
   */
  renewInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('RenewInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ImageId - imageId. optional.
   * @param {Integer} SystemDisk.Size - systemDiskSize. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Boolean} UseAdditionalService - enableVmOsConfig. optional.
   * @param {String} Password - password. optional.
   * @param {Boolean} PasswordInherit - passwdInherit. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {String} DiskId - diskId. optional.
   * @param {String} Platform - platform. optional.
   * @param {String} Architecture - architecture. optional.
   * @param {String} SecurityEnhancementStrategy - securityEnhancementStrategy. optional.
   */
  replaceSystemDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReplaceSystemDisk', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DiskId - diskId. required.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  resetDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('ResetDisk', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} DiskId - diskId. required.
   * @param {Integer} NewSize - newSize. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  resizeDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    if (!hasOwnProperty(params, 'NewSize')) {
      throw new TypeError('parameter "NewSize" is required');
    }

    return this.request('ResizeDisk', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VolumeId - storageId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {Integer} NewSize - newSize. required.
   * @param {String} ClientToken - token. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  resizeVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VolumeId')) {
      throw new TypeError('parameter "VolumeId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NewSize')) {
      throw new TypeError('parameter "NewSize" is required');
    }

    return this.request('ResizeVolume', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} DestCidrIp - destCidrIp. optional.
   * @param {String} PortRange - portRange. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} SourceGroupId - sourceGroupNo. optional.
   * @param {Long} SourceGroupOwnerId - groupOwnerAliUid. optional.
   * @param {String} SourceGroupOwnerAccount - groupOwnerAccount. optional.
   * @param {String} SourceCidrIp - sourceCidrIp. optional.
   * @param {String} SourcePortRange - sourcePortRange. optional.
   * @param {String} Policy - policy. optional. default: accept.
   * @param {String} Priority - level. optional.
   * @param {String} NicType - nic. optional. default: internet.
   * @param {String} ClientToken - token. optional.
   * @param {String} Description - description. optional.
   */
  revokeSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PortRange')) {
      throw new TypeError('parameter "PortRange" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    return this.request('RevokeSecurityGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} SecurityGroupId - groupNo. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} PortRange - portRange. required.
   * @param {String} DestGroupId - destGroupNo. optional.
   * @param {Long} DestGroupOwnerId - groupOwnerAliUid. optional.
   * @param {String} DestGroupOwnerAccount - groupOwnerAccount. optional.
   * @param {String} DestCidrIp - destCidrIp. optional.
   * @param {String} SourceCidrIp - sourceCidrIp. optional.
   * @param {String} SourcePortRange - sourcePortRange. optional.
   * @param {String} Policy - policy. optional. default: accept.
   * @param {String} Priority - level. optional.
   * @param {String} NicType - nic. optional. default: internet.
   * @param {String} ClientToken - token. optional.
   * @param {String} Description - description. optional.
   */
  revokeSecurityGroupEgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

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

    return this.request('RevokeSecurityGroupEgress', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VolumeId - storageId. required.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  rollbackVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VolumeId')) {
      throw new TypeError('parameter "VolumeId" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('RollbackVolume', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ImageId - imageId. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} SecurityGroupId - securityGroupId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} InternetMaxBandwidthIn - internetMaxBandwidthIn. optional.
   * @param {Integer} InternetMaxBandwidthOut - internetMaxBandwidthOut. optional.
   * @param {String} HostName - hostName. optional.
   * @param {Boolean} UniqueSuffix - resourceNameSuffix. optional.
   * @param {String} Password - password. optional.
   * @param {Boolean} PasswordInherit - passwdInherit. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {String} SystemDisk.Size - systemDiskSize. optional.
   * @param {String} SystemDisk.Category - systemDiskCategory. optional.
   * @param {String} SystemDisk.DiskName - systemDiskName. optional.
   * @param {String} SystemDisk.Description - systemDiskDescription. optional.
   * @param {RepeatList} DataDisk - createDataDiskParams. optional.
   * @param {String} IoOptimized - ioOptimized. optional.
   * @param {RepeatList} NetworkInterface - createEniParams. optional.
   * @param {String} UserData - userData. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {String} RamRoleName - ramRoleName. optional.
   * @param {Integer} Amount - minAmount. optional. default: 1.
   * @param {String} AutoReleaseTime - autoReleaseTime. optional.
   * @param {String} SpotStrategy - spotStrategy. optional.
   * @param {Float} SpotPriceLimit - spotPriceLimit. optional.
   * @param {String} SpotInterruptionBehavior - spotInterruptionBehavior. optional.
   * @param {String} SecurityEnhancementStrategy - securityEnhancementStrategy. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {RepeatList} Tag - tagListInner. optional.
   * @param {String} HpcClusterId - hpcClusterId. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   * @param {String} DedicatedHostId - dedicatedHostId. optional.
   * @param {String} LaunchTemplateId - launchTemplateId. optional.
   * @param {String} LaunchTemplateName - launchTemplateName. optional.
   * @param {Long} LaunchTemplateVersion - launchTemplateVersion. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} PeriodUnit - periodUnit. optional.
   * @param {Boolean} AutoRenew - autoRenew. optional.
   * @param {Integer} AutoRenewPeriod - autoRenewPeriod. optional.
   * @param {String} InstanceChargeType - instanceChargeType. optional.
   */
  runInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('RunInstances', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} AgreementType - type. required.
   */
  signAgreement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AgreementType')) {
      throw new TypeError('parameter "AgreementType" is required');
    }

    return this.request('SignAgreement', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} InitLocalDisk - initLocalDisk. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  startInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('StartInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} ConfirmStop - confirmStop. optional.
   * @param {Boolean} ForceStop - kill. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} StoppedMode - stoppedMode. optional.
   */
  stopInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('StopInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} InvokeId - taskId. required.
   * @param {RepeatList} InstanceId - instanceIds. optional.
   */
  stopInvocation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InvokeId')) {
      throw new TypeError('parameter "InvokeId" is required');
    }

    return this.request('StopInvocation', params, options);
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
   * @param {String} UserCidr - userCidr. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} NetworkInterfaceId - eniId. required.
   * @param {RepeatList} PrivateIpAddress - privateIpAddresses. required.
   */
  unassignPrivateIpAddresses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkInterfaceId')) {
      throw new TypeError('parameter "NetworkInterfaceId" is required');
    }

    if (!hasOwnProperty(params, 'PrivateIpAddress')) {
      throw new TypeError('parameter "PrivateIpAddress" is required');
    }

    return this.request('UnassignPrivateIpAddresses', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AllocationId - allocationId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceType - instanceType. optional.
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
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} IpAddress - ip. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  unbindIpRange(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    return this.request('UnbindIpRange', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionNo. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Direction - gressFlow. required.
   * @param {String} SourceIp - sourceIp. required.
   * @param {Integer} SourcePort - sourcePort. required.
   * @param {String} DestIp - destIp. required.
   * @param {Integer} DestPort - destPort. required.
   * @param {String} NicType - nic. required.
   */
  validateSecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'SourceIp')) {
      throw new TypeError('parameter "SourceIp" is required');
    }

    if (!hasOwnProperty(params, 'SourcePort')) {
      throw new TypeError('parameter "SourcePort" is required');
    }

    if (!hasOwnProperty(params, 'DestIp')) {
      throw new TypeError('parameter "DestIp" is required');
    }

    if (!hasOwnProperty(params, 'DestPort')) {
      throw new TypeError('parameter "DestPort" is required');
    }

    if (!hasOwnProperty(params, 'NicType')) {
      throw new TypeError('parameter "NicType" is required');
    }

    return this.request('ValidateSecurityGroup', params, options);
  }

}

module.exports = Client;
