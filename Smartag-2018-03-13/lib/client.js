
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-13';
    super(config);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. required.
   */
  activateSmartAccessGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ActivateSmartAccessGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {String} Description - description. optional.
   * @param {String} Direction - direction. required.
   * @param {String} SourceCidr - sourceCidr. required.
   * @param {String} DestCidr - destCidr. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} SourcePortRange - sourcePortRange. required.
   * @param {String} DestPortRange - destPortRange. required.
   * @param {String} Policy - policy. required.
   * @param {Integer} Priority - priority. optional. default: 1.
   */
  addACLRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'SourceCidr')) {
      throw new TypeError('parameter "SourceCidr" is required');
    }

    if (!hasOwnProperty(params, 'DestCidr')) {
      throw new TypeError('parameter "DestCidr" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'SourcePortRange')) {
      throw new TypeError('parameter "SourcePortRange" is required');
    }

    if (!hasOwnProperty(params, 'DestPortRange')) {
      throw new TypeError('parameter "DestPortRange" is required');
    }

    if (!hasOwnProperty(params, 'Policy')) {
      throw new TypeError('parameter "Policy" is required');
    }

    return this.request('AddACLRule', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {String} SmartAGId - smartAGId. required.
   */
  associateACL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    return this.request('AssociateACL', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CcnId - ccnId. required.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. optional.
   */
  bindSmartAccessGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CcnId')) {
      throw new TypeError('parameter "CcnId" is required');
    }

    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    return this.request('BindSmartAccessGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   */
  createACL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateACL', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Boolean} IsDefault - isDefault. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  createCloudConnectNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IsDefault')) {
      throw new TypeError('parameter "IsDefault" is required');
    }

    return this.request('CreateCloudConnectNetwork', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} VbrId - vbrId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} VbrRegionId - vbrRegionId. required.
   */
  createDedicatedLineBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'VbrId')) {
      throw new TypeError('parameter "VbrId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VbrRegionId')) {
      throw new TypeError('parameter "VbrRegionId" is required');
    }

    return this.request('CreateDedicatedLineBackup', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} HaType - haType. required.
   * @param {String} MainLinkId - mainLinkId. required.
   * @param {String} BackupLinkId - backupLinkId. required.
   * @param {String} MainLinkRegionId - mainLinkRegionId. optional.
   * @param {String} BackupLinkRegionId - backupLinkRegionId. optional.
   */
  createSAGLinkLevelHa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'HaType')) {
      throw new TypeError('parameter "HaType" is required');
    }

    if (!hasOwnProperty(params, 'MainLinkId')) {
      throw new TypeError('parameter "MainLinkId" is required');
    }

    if (!hasOwnProperty(params, 'BackupLinkId')) {
      throw new TypeError('parameter "BackupLinkId" is required');
    }

    return this.request('CreateSAGLinkLevelHa', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} MaxBandWidth - maxBandWidth. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} Period - period. required.
   * @param {Boolean} AutoPay - autoPay. required.
   * @param {String} HardWareSpec - hardWareSpec. required.
   * @param {String} ReceiverCountry - receiverCountry. required.
   * @param {String} ReceiverState - receiverState. required.
   * @param {String} ReceiverCity - receiverCity. required.
   * @param {String} ReceiverDistrict - receiverDistrict. required.
   * @param {String} ReceiverTown - receiverTown. optional.
   * @param {String} ReceiverZip - receiverZip. required.
   * @param {String} ReceiverPhone - receiverPhone. optional.
   * @param {String} ReceiverMobile - receiverMobile. required.
   * @param {String} ReceiverName - receiverName. required.
   * @param {String} ReceiverEmail - receiverEmail. required.
   * @param {String} BuyerMessage - buyerMessage. required.
   * @param {String} ReceiverAddress - receiverAddress. required.
   * @param {String} HaType - haType. required.
   * @param {String} ChargeType - chargeType. required.
   */
  createSmartAccessGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MaxBandWidth')) {
      throw new TypeError('parameter "MaxBandWidth" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'AutoPay')) {
      throw new TypeError('parameter "AutoPay" is required');
    }

    if (!hasOwnProperty(params, 'HardWareSpec')) {
      throw new TypeError('parameter "HardWareSpec" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverCountry')) {
      throw new TypeError('parameter "ReceiverCountry" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverState')) {
      throw new TypeError('parameter "ReceiverState" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverCity')) {
      throw new TypeError('parameter "ReceiverCity" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverDistrict')) {
      throw new TypeError('parameter "ReceiverDistrict" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverZip')) {
      throw new TypeError('parameter "ReceiverZip" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverMobile')) {
      throw new TypeError('parameter "ReceiverMobile" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverName')) {
      throw new TypeError('parameter "ReceiverName" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverEmail')) {
      throw new TypeError('parameter "ReceiverEmail" is required');
    }

    if (!hasOwnProperty(params, 'BuyerMessage')) {
      throw new TypeError('parameter "BuyerMessage" is required');
    }

    if (!hasOwnProperty(params, 'ReceiverAddress')) {
      throw new TypeError('parameter "ReceiverAddress" is required');
    }

    if (!hasOwnProperty(params, 'HaType')) {
      throw new TypeError('parameter "HaType" is required');
    }

    if (!hasOwnProperty(params, 'ChargeType')) {
      throw new TypeError('parameter "ChargeType" is required');
    }

    return this.request('CreateSmartAccessGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   */
  deleteACL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    return this.request('DeleteACL', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {String} AcrId - acrId. required.
   */
  deleteACLRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'AcrId')) {
      throw new TypeError('parameter "AcrId" is required');
    }

    return this.request('DeleteACLRule', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CcnId - ccnId. required.
   * @param {String} RegionId - regionId. optional.
   */
  deleteCloudConnectNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CcnId')) {
      throw new TypeError('parameter "CcnId" is required');
    }

    return this.request('DeleteCloudConnectNetwork', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteDedicatedLineBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteDedicatedLineBackup', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} HaType - haType. required.
   */
  deleteSAGLinkLevelHa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HaType')) {
      throw new TypeError('parameter "HaType" is required');
    }

    return this.request('DeleteSAGLinkLevelHa', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {String} Direction - direction. optional.
   * @param {String} Order - order. optional.
   */
  describeACLAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    return this.request('DescribeACLAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclIds - aclIds. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeACLs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeACLs', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. optional.
   * @param {String} CcnId - ccnId. optional.
   * @param {String} PageSize - pageSize. optional. default: 10.
   * @param {String} PageNumber - pageNumber. optional. default: 1.
   * @param {RepeatList} Tag - tags. optional.
   */
  describeCloudConnectNetworks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCloudConnectNetworks', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AssociatedCcnId - ccnInstanceId. optional.
   * @param {String} PageSize - pageSize. optional. default: 10.
   * @param {String} PageNumber - pageNumber. optional. default: 0.
   */
  describeGrantRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeGrantRules', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AcceptLanguage - acceptLanguage. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. required.
   */
  describeSmartAccessGatewayHa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSmartAccessGatewayHa', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SmartAGId - smartAGId. optional.
   */
  describeSmartAccessGatewayVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeSmartAccessGatewayVersions', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AssociatedCcnId - associatedCcnId. optional.
   * @param {String} SmartAGId - smartAGId. optional.
   * @param {String} Status - status. optional.
   * @param {String} Name - name. optional.
   * @param {String} PageSize - pageSize. optional. default: 10.
   * @param {String} PageNumber - pageNumber. optional. default: 1.
   * @param {String} SerialNumber - serialNumber. optional.
   * @param {String} AclIds - aclIds. optional.
   * @param {String} UnboundAclIds - unboundAclIds. optional.
   */
  describeSmartAccessGateways(params = {}, options = {}) {
    return this.request('DescribeSmartAccessGateways', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {String} SmartAGId - smartAGId. required.
   */
  disassociateACL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    return this.request('DisassociateACL', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} BandWidthSpec - bandWidthSpec. required.
   * @param {Boolean} AutoPay - autoPay. required.
   */
  downgradeSmartAccessGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandWidthSpec')) {
      throw new TypeError('parameter "BandWidthSpec" is required');
    }

    if (!hasOwnProperty(params, 'AutoPay')) {
      throw new TypeError('parameter "AutoPay" is required');
    }

    return this.request('DowngradeSmartAccessGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   */
  getCloudConnectNetworkUseLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetCloudConnectNetworkUseLimit', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   */
  getSmartAccessGatewayUseLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GetSmartAccessGatewayUseLimit', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CenUid - cenUid. required.
   * @param {String} CcnInstanceId - ccnInstanceId. required.
   * @param {String} CenInstanceId - cenInstanceId. required.
   * @param {String} RegionId - regionId. required.
   */
  grantInstanceToCbn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CenUid')) {
      throw new TypeError('parameter "CenUid" is required');
    }

    if (!hasOwnProperty(params, 'CcnInstanceId')) {
      throw new TypeError('parameter "CcnInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CenInstanceId')) {
      throw new TypeError('parameter "CenInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('GrantInstanceToCbn', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CidrBlock - cidrBlock. optional.
   * @param {String} BandWidthSpec - bandWidthSpec. optional.
   * @param {String} City - city. optional.
   * @param {String} RegionId - regionId. optional.
   */
  innerCreateSmartAccessGateway(params = {}, options = {}) {
    return this.request('InnerCreateSmartAccessGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Scope - scope. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. optional.
   * @param {RepeatList} Tag - tags. optional.
   */
  listTagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

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
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {String} Name - name. required.
   */
  modifyACL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyACL', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {String} AcrId - acrId. required.
   * @param {String} Description - description. optional.
   * @param {String} Direction - direction. optional.
   * @param {String} SourceCidr - sourceCidr. optional.
   * @param {String} DestCidr - destCidr. optional.
   * @param {String} IpProtocol - ipProtocol. optional.
   * @param {String} SourcePortRange - sourcePortRange. optional.
   * @param {String} DestPortRange - destPortRange. optional.
   * @param {String} Policy - policy. optional.
   * @param {Integer} Priority - priority. optional.
   */
  modifyACLRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'AcrId')) {
      throw new TypeError('parameter "AcrId" is required');
    }

    return this.request('ModifyACLRule', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CcnId - ccnId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - regionId. required.
   */
  modifyCloudConnectNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CcnId')) {
      throw new TypeError('parameter "CcnId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifyCloudConnectNetwork', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} SerialNumber - serialNumber. required.
   */
  modifySerialNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'SerialNumber')) {
      throw new TypeError('parameter "SerialNumber" is required');
    }

    return this.request('ModifySerialNumber', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} City - city. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} CidrBlock - cidrBlock. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} SecurityLockThreshold - lockThreshold. optional.
   */
  modifySmartAccessGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ModifySmartAccessGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} SerialNumber - snNumber. optional.
   */
  rebootSmartAccessGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('RebootSmartAccessGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CcnInstanceId - ccnInstanceId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} CenInstanceId - cenInstanceId. required.
   */
  revokeInstanceFromCbn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CcnInstanceId')) {
      throw new TypeError('parameter "CcnInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CenInstanceId')) {
      throw new TypeError('parameter "CenInstanceId" is required');
    }

    return this.request('RevokeInstanceFromCbn', params, options);
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
  smartAccessGatewayFillParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SmartAccessGatewayFillParams', params, options);
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
  smartAccessGatewayFillRestrictions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SmartAccessGatewayFillRestrictions', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} data - data. required.
   * @param {String} RegionId - regionId. optional.
   */
  smartAccessGatewayPrepayNotifyPaid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SmartAccessGatewayPrepayNotifyPaid', params, options);
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
  smartAccessGatewayValidateOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('SmartAccessGatewayValidateOrder', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. optional.
   */
  switchCloudBoxHaState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    return this.request('SwitchCloudBoxHaState', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} HaType - haType. required.
   */
  switchSAGHaState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'HaType')) {
      throw new TypeError('parameter "HaType" is required');
    }

    return this.request('SwitchSAGHaState', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Scope - scope. optional.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} Tag - tags. required.
   */
  tagResources(params = {}, options = {}) {
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

    return this.request('TagResources', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} CcnId - ccnId. required.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. required.
   */
  unbindSmartAccessGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CcnId')) {
      throw new TypeError('parameter "CcnId" is required');
    }

    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('UnbindSmartAccessGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerUserId - ownerUserId. required.
   * @param {String} TradeId - tradeId. required.
   * @param {String} TmsCode - tmsCode. required.
   * @param {String} TmsOrderCode - tmsOrderCode. required.
   * @param {Long} OrderPostFee - orderPostFee. required.
   * @param {String} RegionId - regionId. required.
   * @param {RepeatList} OrderItem - orderItems. required.
   */
  unicomOrderConfirm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerUserId')) {
      throw new TypeError('parameter "OwnerUserId" is required');
    }

    if (!hasOwnProperty(params, 'TradeId')) {
      throw new TypeError('parameter "TradeId" is required');
    }

    if (!hasOwnProperty(params, 'TmsCode')) {
      throw new TypeError('parameter "TmsCode" is required');
    }

    if (!hasOwnProperty(params, 'TmsOrderCode')) {
      throw new TypeError('parameter "TmsOrderCode" is required');
    }

    if (!hasOwnProperty(params, 'OrderPostFee')) {
      throw new TypeError('parameter "OrderPostFee" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'OrderItem')) {
      throw new TypeError('parameter "OrderItem" is required');
    }

    return this.request('UnicomOrderConfirm', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {RepeatList} TmsOrder - tmsOrderList. required.
   */
  unicomSignConfirm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TmsOrder')) {
      throw new TypeError('parameter "TmsOrder" is required');
    }

    return this.request('UnicomSignConfirm', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. optional.
   */
  unlockSmartAccessGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    return this.request('UnlockSmartAccessGateway', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {RepeatList} ResourceId - resourceIds. required.
   * @param {RepeatList} TagKey - tagKeyList. optional.
   */
  untagResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('UntagResources', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} VersionCode - versionCode. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} SerialNumber - snNumber. optional.
   */
  updateSmartAccessGatewayVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'VersionCode')) {
      throw new TypeError('parameter "VersionCode" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('UpdateSmartAccessGatewayVersion', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SmartAGId - smartAGId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Long} BandWidthSpec - bandWidthSpec. required.
   * @param {Boolean} AutoPay - autoPay. required.
   */
  upgradeSmartAccessGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmartAGId')) {
      throw new TypeError('parameter "SmartAGId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BandWidthSpec')) {
      throw new TypeError('parameter "BandWidthSpec" is required');
    }

    if (!hasOwnProperty(params, 'AutoPay')) {
      throw new TypeError('parameter "AutoPay" is required');
    }

    return this.request('UpgradeSmartAccessGateway', params, options);
  }

}

module.exports = Client;
