
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-30';
    super(config);
  }

  /**
   */
  acceptJoinPermissionAuthOrder(params = {}, options = {}) {
    return this.request('AcceptJoinPermissionAuthOrder', params, options);
  }

  /**
   */
  addNodeToGroup(params = {}, options = {}) {
    return this.request('AddNodeToGroup', params, options);
  }

  /**
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. required.
   * @param {String} ClassMode - classMode. required.
   * @param {String} JoinPermissionName - joinPermissionName. required.
   */
  applyRoamingJoinPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FreqBandPlanGroupId')) {
      throw new TypeError('parameter "FreqBandPlanGroupId" is required');
    }

    if (!hasOwnProperty(params, 'ClassMode')) {
      throw new TypeError('parameter "ClassMode" is required');
    }

    if (!hasOwnProperty(params, 'JoinPermissionName')) {
      throw new TypeError('parameter "JoinPermissionName" is required');
    }

    return this.request('ApplyRoamingJoinPermission', params, options);
  }

  /**
   */
  bindJoinPermissionToNodeGroup(params = {}, options = {}) {
    return this.request('BindJoinPermissionToNodeGroup', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  bindLabNodeToLabGateway(params = {}, options = {}) {
    return this.request('BindLabNodeToLabGateway', params, options);
  }

  /**
   */
  bindNodesToMulticastGroup(params = {}, options = {}) {
    return this.request('BindNodesToMulticastGroup', params, options);
  }

  /**
   */
  cancelJoinPermissionAuthOrder(params = {}, options = {}) {
    return this.request('CancelJoinPermissionAuthOrder', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  checkCloudProductOpenStatus(params = {}, options = {}) {
    return this.request('CheckCloudProductOpenStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {RepeatList} States - states. optional.
   */
  countGatewayTupleOrders(params = {}, options = {}) {
    return this.request('CountGatewayTupleOrders', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} OnlineState - onlineState. optional.
   * @param {String} FuzzyGwEui - fuzzyGwEui. optional.
   * @param {String} FuzzyCity - fuzzyCity. optional.
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. optional.
   * @param {Boolean} IsEnabled - isEnabled. optional.
   */
  countGateways(params = {}, options = {}) {
    return this.request('CountGateways', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} FuzzyGwEui - fuzzyGwEui. optional.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. optional.
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {String} OnlineState - onlineState. optional.
   */
  countLabGateways(params = {}, options = {}) {
    return this.request('CountLabGateways', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} FuzzyDevEui - fuzzyDevEui. optional.
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. optional.
   * @param {String} ActivationState - activationState. optional.
   */
  countLabNodes(params = {}, options = {}) {
    return this.request('CountLabNodes', params, options);
  }

  /**
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {String} FuzzyJoinEui - fuzzyJoinEui. optional.
   * @param {String} FuzzyDevEui - fuzzyDevEui. optional.
   */
  countNodeGroups(params = {}, options = {}) {
    return this.request('CountNodeGroups', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Boolean} IsKpm - isKpm. optional.
   * @param {RepeatList} States - states. optional.
   */
  countNodeTupleOrders(params = {}, options = {}) {
    return this.request('CountNodeTupleOrders', params, options);
  }

  /**
   * @param {String} NodeGroupId - nodeGroupId. optional.
   * @param {String} FuzzyDevEui - fuzzyDevEui. optional.
   */
  countNodesByNodeGroupId(params = {}, options = {}) {
    return this.request('CountNodesByNodeGroupId', params, options);
  }

  /**
   * @param {String} JoinPermissionId - joinPermissionId. optional.
   * @param {String} FuzzyDevEui - fuzzyDevEui. optional.
   */
  countNodesByOwnedJoinPermissionId(params = {}, options = {}) {
    return this.request('CountNodesByOwnedJoinPermissionId', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {RepeatList} Category - categories. optional.
   * @param {String} HandleState - handleState. optional.
   * @param {Long} BeginMillis - beginMillis. optional.
   * @param {Long} EndMillis - endMillis. optional.
   */
  countNotifications(params = {}, options = {}) {
    return this.request('CountNotifications', params, options);
  }

  /**
   * @param {String} FuzzyRenterAliyunId - fuzzyRenterAliyunId. optional.
   * @param {String} FuzzyJoinEui - fuzzyJoinEui. optional.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {String} FuzzyJoinPermissionName - fuzzyJoinPermissionName. optional.
   */
  countOwnedJoinPermissions(params = {}, options = {}) {
    return this.request('CountOwnedJoinPermissions', params, options);
  }

  /**
   * @param {String} FuzzyOwnerAliyunId - fuzzyOwnerAliyunId. optional.
   * @param {String} FuzzyJoinEui - fuzzyJoinEui. optional.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {Boolean} BoundNodeGroup - boundNodeGroup. optional.
   * @param {String} Type - type. optional.
   * @param {String} FuzzyJoinPermissionName - fuzzyJoinPermissionName. optional.
   */
  countRentedJoinPermissions(params = {}, options = {}) {
    return this.request('CountRentedJoinPermissions', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} GwEui - gwEui. required.
   * @param {String} PinCode - pinCode. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. required.
   * @param {String} CommunicationMode - communicationMode. required.
   * @param {String} City - city. required.
   * @param {String} District - district. required.
   * @param {String} Address - address. required.
   * @param {String} GisCoordinateSystem - gisCoordinateSystem. required.
   * @param {Float} Longitude - longitude. required.
   * @param {Float} Latitude - latitude. required.
   * @param {Long} AddressCode - addressCode. required.
   */
  createGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwEui')) {
      throw new TypeError('parameter "GwEui" is required');
    }

    if (!hasOwnProperty(params, 'PinCode')) {
      throw new TypeError('parameter "PinCode" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FreqBandPlanGroupId')) {
      throw new TypeError('parameter "FreqBandPlanGroupId" is required');
    }

    if (!hasOwnProperty(params, 'CommunicationMode')) {
      throw new TypeError('parameter "CommunicationMode" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    if (!hasOwnProperty(params, 'District')) {
      throw new TypeError('parameter "District" is required');
    }

    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    if (!hasOwnProperty(params, 'GisCoordinateSystem')) {
      throw new TypeError('parameter "GisCoordinateSystem" is required');
    }

    if (!hasOwnProperty(params, 'Longitude')) {
      throw new TypeError('parameter "Longitude" is required');
    }

    if (!hasOwnProperty(params, 'Latitude')) {
      throw new TypeError('parameter "Latitude" is required');
    }

    if (!hasOwnProperty(params, 'AddressCode')) {
      throw new TypeError('parameter "AddressCode" is required');
    }

    return this.request('CreateGateway', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Name - name. required.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. required.
   */
  createLabGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FreqBandPlanGroupId')) {
      throw new TypeError('parameter "FreqBandPlanGroupId" is required');
    }

    return this.request('CreateLabGateway', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} Name - name. required.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. required.
   * @param {String} LoraVersion - loraVersion. required.
   * @param {String} ClassMode - classMode. required.
   */
  createLabNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FreqBandPlanGroupId')) {
      throw new TypeError('parameter "FreqBandPlanGroupId" is required');
    }

    if (!hasOwnProperty(params, 'LoraVersion')) {
      throw new TypeError('parameter "LoraVersion" is required');
    }

    if (!hasOwnProperty(params, 'ClassMode')) {
      throw new TypeError('parameter "ClassMode" is required');
    }

    return this.request('CreateLabNode', params, options);
  }

  /**
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. required.
   * @param {String} ClassMode - classMode. required.
   * @param {Boolean} UseDefaultJoinEui - useDefaultJoinEui. required.
   * @param {String} JoinPermissionName - joinPermissionName. required.
   */
  createLocalJoinPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FreqBandPlanGroupId')) {
      throw new TypeError('parameter "FreqBandPlanGroupId" is required');
    }

    if (!hasOwnProperty(params, 'ClassMode')) {
      throw new TypeError('parameter "ClassMode" is required');
    }

    if (!hasOwnProperty(params, 'UseDefaultJoinEui')) {
      throw new TypeError('parameter "UseDefaultJoinEui" is required');
    }

    if (!hasOwnProperty(params, 'JoinPermissionName')) {
      throw new TypeError('parameter "JoinPermissionName" is required');
    }

    return this.request('CreateLocalJoinPermission', params, options);
  }

  /**
   * @param {String} ClassMode - classMode. required.
   * @param {Float} Frequency - frequency. required.
   * @param {Integer} DataRate - dataRate. required.
   * @param {Integer} Periodicity - periodicity. optional.
   * @param {String} LoraVersion - loraVersion. required.
   */
  createMulticastGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClassMode')) {
      throw new TypeError('parameter "ClassMode" is required');
    }

    if (!hasOwnProperty(params, 'Frequency')) {
      throw new TypeError('parameter "Frequency" is required');
    }

    if (!hasOwnProperty(params, 'DataRate')) {
      throw new TypeError('parameter "DataRate" is required');
    }

    if (!hasOwnProperty(params, 'LoraVersion')) {
      throw new TypeError('parameter "LoraVersion" is required');
    }

    return this.request('CreateMulticastGroup', params, options);
  }

  /**
   * @param {String} NodeGroupName - nodeGroupName. required.
   * @param {String} JoinPermissionId - joinPermissionId. optional.
   */
  createNodeGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeGroupName')) {
      throw new TypeError('parameter "NodeGroupName" is required');
    }

    return this.request('CreateNodeGroup', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  deleteGateway(params = {}, options = {}) {
    return this.request('DeleteGateway', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  deleteLabGateway(params = {}, options = {}) {
    return this.request('DeleteLabGateway', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  deleteLabNode(params = {}, options = {}) {
    return this.request('DeleteLabNode', params, options);
  }

  /**
   */
  deleteLocalJoinPermission(params = {}, options = {}) {
    return this.request('DeleteLocalJoinPermission', params, options);
  }

  /**
   */
  deleteMulticastGroup(params = {}, options = {}) {
    return this.request('DeleteMulticastGroup', params, options);
  }

  /**
   */
  deleteNodeGroup(params = {}, options = {}) {
    return this.request('DeleteNodeGroup', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  encryptByKpmPublicKey(params = {}, options = {}) {
    return this.request('EncryptByKpmPublicKey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getFreqBandPlanGroup(params = {}, options = {}) {
    return this.request('GetFreqBandPlanGroup', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   */
  getGateway(params = {}, options = {}) {
    return this.request('GetGateway', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} BeginMillis - beginMillis. required.
   * @param {Long} EndMillis - endMillis. required.
   */
  getGatewayPacketStat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BeginMillis')) {
      throw new TypeError('parameter "BeginMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndMillis')) {
      throw new TypeError('parameter "EndMillis" is required');
    }

    return this.request('GetGatewayPacketStat', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getGatewayStatusStat(params = {}, options = {}) {
    return this.request('GetGatewayStatusStat', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} GwEui - gwEui. required.
   * @param {String} DevEui - devEui. optional.
   * @param {String} Category - category. required.
   * @param {Long} BeginMillis - beginMillis. required.
   * @param {Long} EndMillis - endMillis. required.
   */
  getGatewayTransferPacketsDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwEui')) {
      throw new TypeError('parameter "GwEui" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    if (!hasOwnProperty(params, 'BeginMillis')) {
      throw new TypeError('parameter "BeginMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndMillis')) {
      throw new TypeError('parameter "EndMillis" is required');
    }

    return this.request('GetGatewayTransferPacketsDownloadUrl', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getGatewayTupleOrder(params = {}, options = {}) {
    return this.request('GetGatewayTupleOrder', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getGatewayTuplesDownloadUrl(params = {}, options = {}) {
    return this.request('GetGatewayTuplesDownloadUrl', params, options);
  }

  /**
   */
  getJoinPermissionAuthOrder(params = {}, options = {}) {
    return this.request('GetJoinPermissionAuthOrder', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getKpmPublicKey(params = {}, options = {}) {
    return this.request('GetKpmPublicKey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getLabGateway(params = {}, options = {}) {
    return this.request('GetLabGateway', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getLabGatewayGwmpConfig(params = {}, options = {}) {
    return this.request('GetLabGatewayGwmpConfig', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getLabNode(params = {}, options = {}) {
    return this.request('GetLabNode', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getLabNodeDebugConfig(params = {}, options = {}) {
    return this.request('GetLabNodeDebugConfig', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getLabNodeDownlinkConfig(params = {}, options = {}) {
    return this.request('GetLabNodeDownlinkConfig', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getLabNodeJoinAcceptConfig(params = {}, options = {}) {
    return this.request('GetLabNodeJoinAcceptConfig', params, options);
  }

  /**
   */
  getLatestApplyingJoinPermissionAuthOrder(params = {}, options = {}) {
    return this.request('GetLatestApplyingJoinPermissionAuthOrder', params, options);
  }

  /**
   */
  getMulticastGroup(params = {}, options = {}) {
    return this.request('GetMulticastGroup', params, options);
  }

  /**
   */
  getNode(params = {}, options = {}) {
    return this.request('GetNode', params, options);
  }

  /**
   */
  getNodeGroup(params = {}, options = {}) {
    return this.request('GetNodeGroup', params, options);
  }

  /**
   * @param {String} NodeGroupId - nodeGroupId. required.
   * @param {String} DevEui - devEui. optional.
   * @param {String} Category - category. required.
   * @param {Long} BeginMillis - beginMillis. required.
   * @param {Long} EndMillis - endMillis. required.
   */
  getNodeGroupTransferPacketsDownloadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeGroupId')) {
      throw new TypeError('parameter "NodeGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    if (!hasOwnProperty(params, 'BeginMillis')) {
      throw new TypeError('parameter "BeginMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndMillis')) {
      throw new TypeError('parameter "EndMillis" is required');
    }

    return this.request('GetNodeGroupTransferPacketsDownloadUrl', params, options);
  }

  /**
   */
  getNodeMulticastConfig(params = {}, options = {}) {
    return this.request('GetNodeMulticastConfig', params, options);
  }

  /**
   */
  getNodeTransferPacket(params = {}, options = {}) {
    return this.request('GetNodeTransferPacket', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   */
  getNodeTupleOrder(params = {}, options = {}) {
    return this.request('GetNodeTupleOrder', params, options);
  }

  /**
   */
  getNodeTuplesDownloadUrl(params = {}, options = {}) {
    return this.request('GetNodeTuplesDownloadUrl', params, options);
  }

  /**
   */
  getNodesAddingTask(params = {}, options = {}) {
    return this.request('GetNodesAddingTask', params, options);
  }

  /**
   */
  getNotification(params = {}, options = {}) {
    return this.request('GetNotification', params, options);
  }

  /**
   */
  getOwnedJoinPermission(params = {}, options = {}) {
    return this.request('GetOwnedJoinPermission', params, options);
  }

  /**
   */
  getRentedJoinPermission(params = {}, options = {}) {
    return this.request('GetRentedJoinPermission', params, options);
  }

  /**
   */
  getUserDescription(params = {}, options = {}) {
    return this.request('GetUserDescription', params, options);
  }

  /**
   */
  getUserLicense(params = {}, options = {}) {
    return this.request('GetUserLicense', params, options);
  }

  /**
   */
  listActivatedFeatures(params = {}, options = {}) {
    return this.request('ListActivatedFeatures', params, options);
  }

  /**
   */
  listActiveGateways(params = {}, options = {}) {
    return this.request('ListActiveGateways', params, options);
  }

  /**
   */
  listBoundLabGateways(params = {}, options = {}) {
    return this.request('ListBoundLabGateways', params, options);
  }

  /**
   */
  listBoundLabNodes(params = {}, options = {}) {
    return this.request('ListBoundLabNodes', params, options);
  }

  /**
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listBoundNodesByMcAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListBoundNodesByMcAddress', params, options);
  }

  /**
   */
  listFreqBandPlanGroups(params = {}, options = {}) {
    return this.request('ListFreqBandPlanGroups', params, options);
  }

  /**
   * @param {Long} OffSet - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listGatewayOnlineRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OffSet')) {
      throw new TypeError('parameter "OffSet" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListGatewayOnlineRecords', params, options);
  }

  /**
   * @param {Long} BeginMillis - beginMillis. required.
   * @param {Long} EndMillis - endMillis. required.
   */
  listGatewayTransferFlowStats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BeginMillis')) {
      throw new TypeError('parameter "BeginMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndMillis')) {
      throw new TypeError('parameter "EndMillis" is required');
    }

    return this.request('ListGatewayTransferFlowStats', params, options);
  }

  /**
   * @param {String} GwEui - gwEui. required.
   * @param {String} DevEui - devEui. optional.
   * @param {String} Category - category. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} BeginMillis - beginMillis. required.
   * @param {Long} EndMillis - endMillis. required.
   */
  listGatewayTransferPackets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwEui')) {
      throw new TypeError('parameter "GwEui" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'BeginMillis')) {
      throw new TypeError('parameter "BeginMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndMillis')) {
      throw new TypeError('parameter "EndMillis" is required');
    }

    return this.request('ListGatewayTransferPackets', params, options);
  }

  /**
   * @param {RepeatList} State - states. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listGatewayTupleOrders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListGatewayTupleOrders', params, options);
  }

  /**
   * @param {String} OnlineState - onlineState. optional.
   * @param {String} FuzzyGwEui - fuzzyGwEui. optional.
   * @param {String} FuzzyCity - fuzzyCity. optional.
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. optional.
   * @param {Boolean} IsEnabled - isEnabled. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listGateways(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListGateways', params, options);
  }

  /**
   */
  listGatewaysGisInfo(params = {}, options = {}) {
    return this.request('ListGatewaysGisInfo', params, options);
  }

  /**
   */
  listIotProducts(params = {}, options = {}) {
    return this.request('ListIotProducts', params, options);
  }

  /**
   * @param {String} GwEui - gwEui. required.
   * @param {String} DevEui - devEui. optional.
   * @param {Long} BeginMillis - beginMillis. required.
   * @param {Long} EndMillis - endMillis. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listLabGatewayLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwEui')) {
      throw new TypeError('parameter "GwEui" is required');
    }

    if (!hasOwnProperty(params, 'BeginMillis')) {
      throw new TypeError('parameter "BeginMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndMillis')) {
      throw new TypeError('parameter "EndMillis" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListLabGatewayLogs', params, options);
  }

  /**
   * @param {String} FuzzyGwEui - fuzzyGwEui. optional.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. optional.
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {String} OnlineState - onlineState. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listLabGateways(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListLabGateways', params, options);
  }

  /**
   * @param {String} DevEui - devEui. required.
   * @param {Long} BeginMillis - beginMillis. required.
   * @param {Long} EndMillis - endMillis. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listLabNodeLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DevEui')) {
      throw new TypeError('parameter "DevEui" is required');
    }

    if (!hasOwnProperty(params, 'BeginMillis')) {
      throw new TypeError('parameter "BeginMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndMillis')) {
      throw new TypeError('parameter "EndMillis" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListLabNodeLogs', params, options);
  }

  /**
   * @param {String} FuzzyDevEui - fuzzyDevEui. optional.
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listLabNodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListLabNodes', params, options);
  }

  /**
   * @param {Long} BeginMillis - beginMillis. required.
   * @param {Long} EndMillis - endMillis. required.
   */
  listNodeGroupTransferFlowStats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BeginMillis')) {
      throw new TypeError('parameter "BeginMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndMillis')) {
      throw new TypeError('parameter "EndMillis" is required');
    }

    return this.request('ListNodeGroupTransferFlowStats', params, options);
  }

  /**
   * @param {String} NodeGroupId - nodeGroupId. required.
   * @param {String} DevEui - devEui. optional.
   * @param {String} Category - category. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} BeginMillis - beginMillis. required.
   * @param {Long} EndMillis - endMillis. required.
   */
  listNodeGroupTransferPackets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeGroupId')) {
      throw new TypeError('parameter "NodeGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'BeginMillis')) {
      throw new TypeError('parameter "BeginMillis" is required');
    }

    if (!hasOwnProperty(params, 'EndMillis')) {
      throw new TypeError('parameter "EndMillis" is required');
    }

    return this.request('ListNodeGroupTransferPackets', params, options);
  }

  /**
   * @param {String} FuzzyName - fuzzyName. optional.
   * @param {String} FuzzyJoinEui - fuzzyJoinEui. optional.
   * @param {String} FuzzyDevEui - fuzzyDevEui. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listNodeGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListNodeGroups', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listNodeTransferPacketPaths(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListNodeTransferPacketPaths', params, options);
  }

  /**
   * @param {Boolean} IsKpm - isKpm. optional.
   * @param {RepeatList} State - states. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listNodeTupleOrders(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListNodeTupleOrders', params, options);
  }

  /**
   * @param {String} NodeGroupId - nodeGroupId. required.
   * @param {String} FuzzyDevEui - fuzzyDevEui. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listNodesByNodeGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeGroupId')) {
      throw new TypeError('parameter "NodeGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListNodesByNodeGroupId', params, options);
  }

  /**
   * @param {String} JoinPermissionId - joinPermissionId. required.
   * @param {String} FuzzyDevEui - fuzzyDevEui. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listNodesByOwnedJoinPermissionId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JoinPermissionId')) {
      throw new TypeError('parameter "JoinPermissionId" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListNodesByOwnedJoinPermissionId', params, options);
  }

  /**
   * @param {RepeatList} Category - categories. optional.
   * @param {String} HandleState - handleState. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   * @param {Long} BeginMillis - beginMillis. optional.
   * @param {Long} EndMillis - endMillis. optional.
   */
  listNotifications(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListNotifications', params, options);
  }

  /**
   */
  listOnsUplinkTopics(params = {}, options = {}) {
    return this.request('ListOnsUplinkTopics', params, options);
  }

  /**
   * @param {String} FuzzyRenterAliyunId - fuzzyRenterAliyunId. optional.
   * @param {String} FuzzyJoinEui - fuzzyJoinEui. optional.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {String} FuzzyJoinPermissionName - fuzzyJoinPermissionName. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listOwnedJoinPermissions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListOwnedJoinPermissions', params, options);
  }

  /**
   * @param {String} FuzzyOwnerAliyunId - fuzzyOwnerAliyunId. optional.
   * @param {String} FuzzyJoinEui - fuzzyJoinEui. optional.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {Boolean} BoundNodeGroup - boundNodeGroup. optional.
   * @param {String} Type - type. optional.
   * @param {String} FuzzyJoinPermissionName - fuzzyJoinPermissionName. optional.
   * @param {Long} Offset - offset. required.
   * @param {Long} Limit - limit. required.
   */
  listRentedJoinPermissions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('ListRentedJoinPermissions', params, options);
  }

  /**
   */
  rebootLabGateway(params = {}, options = {}) {
    return this.request('RebootLabGateway', params, options);
  }

  /**
   */
  registerKpmPublicKey(params = {}, options = {}) {
    return this.request('RegisterKpmPublicKey', params, options);
  }

  /**
   */
  rejectJoinPermissionAuthOrder(params = {}, options = {}) {
    return this.request('RejectJoinPermissionAuthOrder', params, options);
  }

  /**
   */
  removeNodeFromGroup(params = {}, options = {}) {
    return this.request('RemoveNodeFromGroup', params, options);
  }

  /**
   */
  returnJoinPermission(params = {}, options = {}) {
    return this.request('ReturnJoinPermission', params, options);
  }

  /**
   */
  sendBusinessCommandToLabNode(params = {}, options = {}) {
    return this.request('SendBusinessCommandToLabNode', params, options);
  }

  /**
   */
  sendMacCommandToLabNode(params = {}, options = {}) {
    return this.request('SendMacCommandToLabNode', params, options);
  }

  /**
   */
  sendMulticastCommand(params = {}, options = {}) {
    return this.request('SendMulticastCommand', params, options);
  }

  /**
   */
  sendUnicastCommand(params = {}, options = {}) {
    return this.request('SendUnicastCommand', params, options);
  }

  /**
   */
  submitGatewayTupleOrder(params = {}, options = {}) {
    return this.request('SubmitGatewayTupleOrder', params, options);
  }

  /**
   */
  submitJoinPermissionAuthOrder(params = {}, options = {}) {
    return this.request('SubmitJoinPermissionAuthOrder', params, options);
  }

  /**
   */
  submitNodeTupleOrder(params = {}, options = {}) {
    return this.request('SubmitNodeTupleOrder', params, options);
  }

  /**
   */
  submitNodesAddingTask(params = {}, options = {}) {
    return this.request('SubmitNodesAddingTask', params, options);
  }

  /**
   */
  triggerLabGatewayConfigReport(params = {}, options = {}) {
    return this.request('TriggerLabGatewayConfigReport', params, options);
  }

  /**
   */
  triggerLabGatewayDeviceInfoReport(params = {}, options = {}) {
    return this.request('TriggerLabGatewayDeviceInfoReport', params, options);
  }

  /**
   */
  triggerLabGatewayLogReport(params = {}, options = {}) {
    return this.request('TriggerLabGatewayLogReport', params, options);
  }

  /**
   */
  unbindJoinPermissionFromNodeGroup(params = {}, options = {}) {
    return this.request('UnbindJoinPermissionFromNodeGroup', params, options);
  }

  /**
   */
  unbindLabNodeFromLabGateway(params = {}, options = {}) {
    return this.request('UnbindLabNodeFromLabGateway', params, options);
  }

  /**
   */
  unbindNodesFromMulticastGroup(params = {}, options = {}) {
    return this.request('UnbindNodesFromMulticastGroup', params, options);
  }

  /**
   */
  unregisterKpmPublicKey(params = {}, options = {}) {
    return this.request('UnregisterKpmPublicKey', params, options);
  }

  /**
   * @param {String} ProductType - productType. optional.
   * @param {String} ProductName - productName. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} UplinkRegionName - uplinkRegionName. optional.
   * @param {String} UplinkTopic - uplinkTopic. optional.
   */
  updateDataDispatchConfig(params = {}, options = {}) {
    return this.request('UpdateDataDispatchConfig', params, options);
  }

  /**
   */
  updateDataDispatchEnablingState(params = {}, options = {}) {
    return this.request('UpdateDataDispatchEnablingState', params, options);
  }

  /**
   * @param {String} GwEui - gwEui. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. optional.
   * @param {String} CommunicationMode - communicationMode. optional.
   * @param {Long} AddressCode - addressCode. optional.
   * @param {String} City - city. optional.
   * @param {String} District - district. optional.
   * @param {String} Address - address. optional.
   * @param {String} GisCoordinateSystem - gisCoordinateSystem. optional.
   * @param {Float} Longitude - longitude. optional.
   * @param {Float} Latitude - latitude. optional.
   */
  updateGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwEui')) {
      throw new TypeError('parameter "GwEui" is required');
    }

    return this.request('UpdateGateway', params, options);
  }

  /**
   */
  updateGatewayEnablingState(params = {}, options = {}) {
    return this.request('UpdateGatewayEnablingState', params, options);
  }

  /**
   * @param {String} GwEui - gwEui. required.
   * @param {String} Name - name. required.
   */
  updateLabGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwEui')) {
      throw new TypeError('parameter "GwEui" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateLabGateway', params, options);
  }

  /**
   */
  updateLabGatewayGwmpConfig(params = {}, options = {}) {
    return this.request('UpdateLabGatewayGwmpConfig', params, options);
  }

  /**
   */
  updateLabGatewaySshCtrl(params = {}, options = {}) {
    return this.request('UpdateLabGatewaySshCtrl', params, options);
  }

  /**
   */
  updateLabGatewayUartCtrl(params = {}, options = {}) {
    return this.request('UpdateLabGatewayUartCtrl', params, options);
  }

  /**
   * @param {String} DevEui - devEui. required.
   * @param {String} Name - name. optional.
   * @param {String} LoraVersion - loraVersion. optional.
   * @param {String} ClassMode - classMode. optional.
   */
  updateLabNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DevEui')) {
      throw new TypeError('parameter "DevEui" is required');
    }

    return this.request('UpdateLabNode', params, options);
  }

  /**
   */
  updateLabNodeDebugConfig(params = {}, options = {}) {
    return this.request('UpdateLabNodeDebugConfig', params, options);
  }

  /**
   */
  updateLabNodeDownlinkConfig(params = {}, options = {}) {
    return this.request('UpdateLabNodeDownlinkConfig', params, options);
  }

  /**
   */
  updateLabNodeJoinAcceptConfig(params = {}, options = {}) {
    return this.request('UpdateLabNodeJoinAcceptConfig', params, options);
  }

  /**
   * @param {String} NodeGroupId - nodeGroupId. required.
   * @param {String} NodeGroupName - nodeGroupName. optional.
   */
  updateNodeGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeGroupId')) {
      throw new TypeError('parameter "NodeGroupId" is required');
    }

    return this.request('UpdateNodeGroup', params, options);
  }

  /**
   */
  updateNotificationsHandleState(params = {}, options = {}) {
    return this.request('UpdateNotificationsHandleState', params, options);
  }

  /**
   * @param {String} JoinPermissionId - joinPermissionId. required.
   * @param {Long} FreqBandPlanGroupId - freqBandPlanGroupId. optional.
   * @param {String} ClassMode - classMode. optional.
   * @param {String} JoinPermissionName - joinPermissionName. optional.
   */
  updateOwnedLocalJoinPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JoinPermissionId')) {
      throw new TypeError('parameter "JoinPermissionId" is required');
    }

    return this.request('UpdateOwnedLocalJoinPermission', params, options);
  }

  /**
   */
  updateOwnedLocalJoinPermissionEnablingState(params = {}, options = {}) {
    return this.request('UpdateOwnedLocalJoinPermissionEnablingState', params, options);
  }

  /**
   * @param {String} JoinPermissionId - joinPermissionId. required.
   * @param {String} JoinPermissionName - joinPermissionName. optional.
   */
  updateRoamingJoinPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JoinPermissionId')) {
      throw new TypeError('parameter "JoinPermissionId" is required');
    }

    return this.request('UpdateRoamingJoinPermission', params, options);
  }

  /**
   */
  updateRoamingJoinPermissionEnablingState(params = {}, options = {}) {
    return this.request('UpdateRoamingJoinPermissionEnablingState', params, options);
  }

}

module.exports = Client;
