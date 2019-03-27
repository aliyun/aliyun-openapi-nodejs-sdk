
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-21';
    super(config);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisId - uisId. required.
   * @param {String} HighPriorityIp - highPriorityIp. required.
   */
  addHighPriorityIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisId')) {
      throw new TypeError('parameter "UisId" is required');
    }

    if (!hasOwnProperty(params, 'HighPriorityIp')) {
      throw new TypeError('parameter "HighPriorityIp" is required');
    }

    return this.request('AddHighPriorityIp', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisNodeId - uisNodeId. required.
   * @param {Integer} IpAddrsNum - ipAddrsNum. required.
   */
  addUisNodeIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    if (!hasOwnProperty(params, 'IpAddrsNum')) {
      throw new TypeError('parameter "IpAddrsNum" is required');
    }

    return this.request('AddUisNodeIp', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UisNodeId - uisNodeId. required.
   * @param {String} DestinationIp - destinationIp. required.
   * @param {Integer} DestinationPort - destinationPort. required.
   * @param {String} OriginalIp - originalIp. required.
   * @param {Integer} OriginalPort - originalPort. required.
   * @param {String} IpProtocol - ipProtocol. required.
   * @param {String} Name - name. required.
   */
  createDnatEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationIp')) {
      throw new TypeError('parameter "DestinationIp" is required');
    }

    if (!hasOwnProperty(params, 'DestinationPort')) {
      throw new TypeError('parameter "DestinationPort" is required');
    }

    if (!hasOwnProperty(params, 'OriginalIp')) {
      throw new TypeError('parameter "OriginalIp" is required');
    }

    if (!hasOwnProperty(params, 'OriginalPort')) {
      throw new TypeError('parameter "OriginalPort" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateDnatEntry', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  createUis(params = {}, options = {}) {
    return this.request('CreateUis', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisNodeId - uisNodeId. required.
   * @param {String} UisProtocol - uisProtocol. required.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   * @param {String} GreConfig - greConfig. optional.
   * @param {String} SslConfig - sslConfig. optional.
   */
  createUisConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    if (!hasOwnProperty(params, 'UisProtocol')) {
      throw new TypeError('parameter "UisProtocol" is required');
    }

    return this.request('CreateUisConnection', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UisNodeId - uisNodeId. required.
   * @param {String} VswitchId - vswitchId. required.
   * @param {String} SecurityGroupId - securityGroupId. required.
   * @param {String} IpAddress - primaryIpAddress. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  createUisNetworkInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    if (!hasOwnProperty(params, 'VswitchId')) {
      throw new TypeError('parameter "VswitchId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('CreateUisNetworkInterface', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisId - uisId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} UisNodeBandwidth - nodeBandwidth. required.
   * @param {Integer} IpAddrsNum - ipAddrsNum. optional.
   * @param {String} UisNodeAreaId - uisNodeAreaId. required.
   */
  createUisNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisId')) {
      throw new TypeError('parameter "UisId" is required');
    }

    if (!hasOwnProperty(params, 'UisNodeBandwidth')) {
      throw new TypeError('parameter "UisNodeBandwidth" is required');
    }

    if (!hasOwnProperty(params, 'UisNodeAreaId')) {
      throw new TypeError('parameter "UisNodeAreaId" is required');
    }

    return this.request('CreateUisNode', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UisNodeId - uisNodeId. required.
   * @param {String} UisDnatId - uisDnatId. required.
   */
  deleteDnatEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    if (!hasOwnProperty(params, 'UisDnatId')) {
      throw new TypeError('parameter "UisDnatId" is required');
    }

    return this.request('DeleteDnatEntry', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisId - uisId. required.
   * @param {String} HighPriorityIp - highPriorityIp. required.
   */
  deleteHighPriorityIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisId')) {
      throw new TypeError('parameter "UisId" is required');
    }

    if (!hasOwnProperty(params, 'HighPriorityIp')) {
      throw new TypeError('parameter "HighPriorityIp" is required');
    }

    return this.request('DeleteHighPriorityIp', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisId - instanceId. required.
   */
  deleteUis(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisId')) {
      throw new TypeError('parameter "UisId" is required');
    }

    return this.request('DeleteUis', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} UisConnectionId - connId. required.
   * @param {String} UisNodeId - nodeId. optional.
   */
  deleteUisConnection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisConnectionId')) {
      throw new TypeError('parameter "UisConnectionId" is required');
    }

    return this.request('DeleteUisConnection', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UisNodeId - uisNodeId. required.
   * @param {String} UisEniId - uisEniId. required.
   */
  deleteUisNetworkInterface(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    if (!hasOwnProperty(params, 'UisEniId')) {
      throw new TypeError('parameter "UisEniId" is required');
    }

    return this.request('DeleteUisNetworkInterface', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} UisId - uisId. optional.
   * @param {String} UisNodeId - uisNodeId. optional.
   */
  deleteUisNode(params = {}, options = {}) {
    return this.request('DeleteUisNode', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisNodeId - uisNodeId. required.
   * @param {String} UisNodeIpAddress - uisNodeIpAddress. required.
   */
  deleteUisNodeIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    if (!hasOwnProperty(params, 'UisNodeIpAddress')) {
      throw new TypeError('parameter "UisNodeIpAddress" is required');
    }

    return this.request('DeleteUisNodeIp', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeAreas(params = {}, options = {}) {
    return this.request('DescribeAreas', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisNodeId - uisNodeId. optional.
   * @param {String} UisDnatId - uisDnatId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  describeDnatEntries(params = {}, options = {}) {
    return this.request('DescribeDnatEntries', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisId - uisId. required.
   * @param {String} HighPriorityIp - highPriorityIp. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ClientToken - token. optional.
   */
  describeHighPriorityIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisId')) {
      throw new TypeError('parameter "UisId" is required');
    }

    if (!hasOwnProperty(params, 'HighPriorityIp')) {
      throw new TypeError('parameter "HighPriorityIp" is required');
    }

    return this.request('DescribeHighPriorityIp', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisNodeId - nodeId. optional.
   * @param {String} UisConnectionId - connId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ClientToken - token. optional.
   */
  describeUisConnections(params = {}, options = {}) {
    return this.request('DescribeUisConnections', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisNodeId - uisNodeId. optional.
   * @param {String} UisEniId - uisEniId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  describeUisNetworkInterfaces(params = {}, options = {}) {
    return this.request('DescribeUisNetworkInterfaces', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisId - uisId. optional.
   * @param {String} UisNodeId - nodeId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ClientToken - token. optional.
   */
  describeUisNodes(params = {}, options = {}) {
    return this.request('DescribeUisNodes', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UisNodeId - uisNodeId. required.
   * @param {String} Ip - ip. optional.
   */
  describeUiseNodeStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    return this.request('DescribeUiseNodeStatus', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UisId - instanceId. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeUises(params = {}, options = {}) {
    return this.request('DescribeUises', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} UisId - uisId. required.
   * @param {String} ChartDate - chartDate. optional.
   */
  getDroppedIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisId')) {
      throw new TypeError('parameter "UisId" is required');
    }

    return this.request('GetDroppedIpList', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisNodeId - uisNodeId. required.
   * @param {String} UisDnatId - uisDnatId. optional.
   * @param {String} DestinationIp - destinationIp. optional.
   * @param {Integer} DestinationPort - destinationPort. optional.
   * @param {String} OriginalIp - originalIp. optional.
   * @param {Integer} OriginalPort - originalPort. optional.
   * @param {String} IpProtocol - ipProtocol. optional.
   * @param {String} Name - name. optional.
   */
  modifyDnatEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    return this.request('ModifyDnatEntry', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} UisId - uisId. required.
   * @param {String} HighPriorityIp - highPriorityIp. required.
   */
  modifyHighPriorityIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisId')) {
      throw new TypeError('parameter "UisId" is required');
    }

    if (!hasOwnProperty(params, 'HighPriorityIp')) {
      throw new TypeError('parameter "HighPriorityIp" is required');
    }

    return this.request('ModifyHighPriorityIp', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ClientToken - token. optional.
   * @param {String} UisId - instanceId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - regionId. optional.
   */
  modifyUisAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisId')) {
      throw new TypeError('parameter "UisId" is required');
    }

    return this.request('ModifyUisAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisNodeId - nodeId. optional.
   * @param {String} UisConnectionId - connId. required.
   * @param {String} UisProtocol - uisProtocol. optional.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   * @param {String} GreConfig - greConfig. optional.
   * @param {String} SslConfig - sslConfig. optional.
   */
  modifyUisConnectionAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisConnectionId')) {
      throw new TypeError('parameter "UisConnectionId" is required');
    }

    return this.request('ModifyUisConnectionAttribute', params, options);
  }

  /**
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UisId - uisId. required.
   * @param {String} UisNodeId - nodeId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {Integer} UisNodeBandwidth - nodeBandwidth. optional.
   */
  modifyUisNodeAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UisId')) {
      throw new TypeError('parameter "UisId" is required');
    }

    if (!hasOwnProperty(params, 'UisNodeId')) {
      throw new TypeError('parameter "UisNodeId" is required');
    }

    return this.request('ModifyUisNodeAttribute', params, options);
  }

}

module.exports = Client;
