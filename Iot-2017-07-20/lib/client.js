
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-20';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} UpgradeType - upgradeType. required.
   * @param {String} StrategyType - strategyType. required.
   * @param {String} DestVersion - destVersion. required.
   * @param {String} Locations - locations. optional.
   * @param {RepeatList} SrcVersion - srcVersions. required.
   * @param {RepeatList} DeviceName - deviceNames. optional.
   */
  batchDeviceUpgrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'UpgradeType')) {
      throw new TypeError('parameter "UpgradeType" is required');
    }

    if (!hasOwnProperty(params, 'StrategyType')) {
      throw new TypeError('parameter "StrategyType" is required');
    }

    if (!hasOwnProperty(params, 'DestVersion')) {
      throw new TypeError('parameter "DestVersion" is required');
    }

    if (!hasOwnProperty(params, 'SrcVersion')) {
      throw new TypeError('parameter "SrcVersion" is required');
    }

    return this.request('BatchDeviceUpgrade', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Topic - topic. optional.
   * @param {String} Exts - exts. optional.
   * @param {String} SubscriberId - subscriberId. optional.
   */
  cleanTopic(params = {}, options = {}) {
    return this.request('CleanTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} DestVersion - destVersion. required.
   * @param {String} FirmwareUrl - firmwareUrl. required.
   * @param {String} FirmwareSign - firmwareSign. optional.
   * @param {String} SignMethod - signMethod. optional.
   * @param {Integer} FirmwareSize - firmwareSize. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} FirmwareDesc - firmwareDesc. optional.
   */
  createFirmware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'DestVersion')) {
      throw new TypeError('parameter "DestVersion" is required');
    }

    if (!hasOwnProperty(params, 'FirmwareUrl')) {
      throw new TypeError('parameter "FirmwareUrl" is required');
    }

    return this.request('CreateFirmware', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  createLoraApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('CreateLoraApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Pattern - pattern. required.
   * @param {String} DownlinkFreq - downlinkFreq. optional.
   * @param {Integer} DeviceNum - deviceNum. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Oui - oui. optional.
   * @param {String} OrgId - orgId. optional.
   * @param {String} Type - type. optional.
   * @param {Integer} NodeFreqType - nodeFreqType. optional.
   */
  createOtaaDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pattern')) {
      throw new TypeError('parameter "Pattern" is required');
    }

    if (!hasOwnProperty(params, 'DeviceNum')) {
      throw new TypeError('parameter "DeviceNum" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('CreateOtaaDevice', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  deleteDeviceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DeleteDeviceList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   */
  deleteFirmware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    return this.request('DeleteFirmware', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  deleteLoraDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DeleteLoraDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DevAddr - devAddr. required.
   * @param {String} DevEui - devEui. required.
   * @param {String} GatewayId - gatewayId. required.
   */
  deleteRouteMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DevAddr')) {
      throw new TypeError('parameter "DevAddr" is required');
    }

    if (!hasOwnProperty(params, 'DevEui')) {
      throw new TypeError('parameter "DevEui" is required');
    }

    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('DeleteRouteMap', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DevAddr - devAddr. required.
   * @param {String} DevEui - devEui. required.
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} GwDeviceName - gwDeviceName. required.
   * @param {String} GwProductKey - gwProductKey. required.
   */
  deleteRouteMapResponse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DevAddr')) {
      throw new TypeError('parameter "DevAddr" is required');
    }

    if (!hasOwnProperty(params, 'DevEui')) {
      throw new TypeError('parameter "DevEui" is required');
    }

    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'GwDeviceName')) {
      throw new TypeError('parameter "GwDeviceName" is required');
    }

    if (!hasOwnProperty(params, 'GwProductKey')) {
      throw new TypeError('parameter "GwProductKey" is required');
    }

    return this.request('DeleteRouteMapResponse', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   */
  deviceUpgradeCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    return this.request('DeviceUpgradeCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} FirmwareId - firmwareId. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} JobResult - jobResult. required.
   */
  deviceUpgradeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareId')) {
      throw new TypeError('parameter "FirmwareId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'JobResult')) {
      throw new TypeError('parameter "JobResult" is required');
    }

    return this.request('DeviceUpgradeInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   */
  finishVerifyTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    return this.request('FinishVerifyTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DevAddr - devAddr. required.
   * @param {String} DevEui - devEui. required.
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} GwDeviceName - gwDeviceName. required.
   * @param {String} GwProductKey - gwProductKey. required.
   * @param {String} NodeTxFreq - nodeTxFreq. required.
   * @param {Integer} NodeMixFlag - nodeMixFlag. required.
   * @param {Integer} GatewayMainFlag - gatewayMainFlag. required.
   */
  initNmsRouteMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DevAddr')) {
      throw new TypeError('parameter "DevAddr" is required');
    }

    if (!hasOwnProperty(params, 'DevEui')) {
      throw new TypeError('parameter "DevEui" is required');
    }

    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'GwDeviceName')) {
      throw new TypeError('parameter "GwDeviceName" is required');
    }

    if (!hasOwnProperty(params, 'GwProductKey')) {
      throw new TypeError('parameter "GwProductKey" is required');
    }

    if (!hasOwnProperty(params, 'NodeTxFreq')) {
      throw new TypeError('parameter "NodeTxFreq" is required');
    }

    if (!hasOwnProperty(params, 'NodeMixFlag')) {
      throw new TypeError('parameter "NodeMixFlag" is required');
    }

    if (!hasOwnProperty(params, 'GatewayMainFlag')) {
      throw new TypeError('parameter "GatewayMainFlag" is required');
    }

    return this.request('InitNmsRouteMap', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DevAddr - devAddr. required.
   * @param {String} DevEui - devEui. required.
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} GwDeviceName - gwDeviceName. required.
   * @param {String} GwProductKey - gwProductKey. required.
   * @param {String} NodeTxFreq - nodeTxFreq. required.
   * @param {Integer} NodeMixFlag - nodeMixFlag. required.
   * @param {Integer} GatewayMainFlag - gatewayMainFlag. required.
   */
  initNmsRouteMapResponse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DevAddr')) {
      throw new TypeError('parameter "DevAddr" is required');
    }

    if (!hasOwnProperty(params, 'DevEui')) {
      throw new TypeError('parameter "DevEui" is required');
    }

    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'GwDeviceName')) {
      throw new TypeError('parameter "GwDeviceName" is required');
    }

    if (!hasOwnProperty(params, 'GwProductKey')) {
      throw new TypeError('parameter "GwProductKey" is required');
    }

    if (!hasOwnProperty(params, 'NodeTxFreq')) {
      throw new TypeError('parameter "NodeTxFreq" is required');
    }

    if (!hasOwnProperty(params, 'NodeMixFlag')) {
      throw new TypeError('parameter "NodeMixFlag" is required');
    }

    if (!hasOwnProperty(params, 'GatewayMainFlag')) {
      throw new TypeError('parameter "GatewayMainFlag" is required');
    }

    return this.request('InitNmsRouteMapResponse', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} time - Time. required.
   */
  insertCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'time')) {
      throw new TypeError('parameter "time" is required');
    }

    return this.request('InsertCommand', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   */
  queryAmsProductMapping(params = {}, options = {}) {
    return this.request('QueryAmsProductMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} IndistinctDevName - indistinctDevName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {RepeatList} FirmwareVersion - firmwareVersions. required.
   */
  queryDeviceByPkAndVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'FirmwareVersion')) {
      throw new TypeError('parameter "FirmwareVersion" is required');
    }

    return this.request('QueryDeviceByPkAndVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryDeviceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDeviceInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} Type - type. required.
   */
  queryDeviceUpgradeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('QueryDeviceUpgradeInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} FirmwareId - firmwareId. required.
   */
  queryFirmwareById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareId')) {
      throw new TypeError('parameter "FirmwareId" is required');
    }

    return this.request('QueryFirmwareById', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   */
  queryFirmwareByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    return this.request('QueryFirmwareByName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} FirmwareId - firmwareId. required.
   */
  queryFirmwareByPk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareId')) {
      throw new TypeError('parameter "FirmwareId" is required');
    }

    return this.request('QueryFirmwareByPk', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} DeleteStatus - deleteStatus. required.
   */
  queryFirmwareByUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeleteStatus')) {
      throw new TypeError('parameter "DeleteStatus" is required');
    }

    return this.request('QueryFirmwareByUid', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   */
  queryFirmwareVerifyInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    return this.request('QueryFirmwareVerifyInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} FirmwareId - firmwareId. required.
   */
  queryFirmwareVersionById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareId')) {
      throw new TypeError('parameter "FirmwareId" is required');
    }

    return this.request('QueryFirmwareVersionById', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryLoraDeviceInfoList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryLoraDeviceInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryLoraNodeInfoList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryLoraNodeInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  queryLoraProductName(params = {}, options = {}) {
    return this.request('QueryLoraProductName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} Status - status. optional.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  queryOtaJobByDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryOtaJobByDevices', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryOtaaDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryOtaaDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  queryProductName(params = {}, options = {}) {
    return this.request('QueryProductName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  queryProductNameAndAllCount(params = {}, options = {}) {
    return this.request('QueryProductNameAndAllCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  querySingleDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QuerySingleDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   */
  queryStrategyByFirName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    return this.request('QueryStrategyByFirName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryVersionsByPk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryVersionsByPk', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  reUpgradeDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('ReUpgradeDevices', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Region - region. optional.
   * @param {String} NetId - netId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceEui - deviceEui. required.
   * @param {String} AppEui - appEui. optional.
   * @param {String} AppKey - appKey. optional.
   * @param {String} AliyunCommodityCode - aliyunCommodityCode. optional.
   * @param {Long} TenantId - tenantId. optional.
   * @param {String} DownlinkFreq - downlinkFreq. optional.
   * @param {String} Modu - modu. optional.
   * @param {String} NodeFreqType - nodeFreqType. optional.
   */
  registerLoraDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceEui')) {
      throw new TypeError('parameter "DeviceEui" is required');
    }

    return this.request('RegisterLoraDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} FirmwareName - firmwareName. required.
   */
  resetDeviceUpgrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    return this.request('ResetDeviceUpgrade', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonCommands - jsonConment. required.
   * @param {String} ProductKey - eventCode. required.
   */
  sendEventData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonCommands')) {
      throw new TypeError('parameter "JsonCommands" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('SendEventData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonCommands - jsonCommands. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  sendMacCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonCommands')) {
      throw new TypeError('parameter "JsonCommands" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('SendMacCommand', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} CommandContent - content. required.
   * @param {Integer} Fport - fport. required.
   */
  sendMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'CommandContent')) {
      throw new TypeError('parameter "CommandContent" is required');
    }

    if (!hasOwnProperty(params, 'Fport')) {
      throw new TypeError('parameter "Fport" is required');
    }

    return this.request('SendMessage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} jsonRouteMap - jsonRouteMap. required.
   * @param {String} jsonTxpkDTO - jsonTxpkDTO. required.
   */
  syncGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'jsonRouteMap')) {
      throw new TypeError('parameter "jsonRouteMap" is required');
    }

    if (!hasOwnProperty(params, 'jsonTxpkDTO')) {
      throw new TypeError('parameter "jsonTxpkDTO" is required');
    }

    return this.request('SyncGateway', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} JsonRouteMap - jsonRouteMap. required.
   * @param {String} JsonTxpkDTO - jsonTxpkDTO. required.
   */
  synchronizeGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonRouteMap')) {
      throw new TypeError('parameter "JsonRouteMap" is required');
    }

    if (!hasOwnProperty(params, 'JsonTxpkDTO')) {
      throw new TypeError('parameter "JsonTxpkDTO" is required');
    }

    return this.request('SynchronizeGateway', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} FirmwareId - firmwareId. required.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} DestVersion - destVersion. required.
   * @param {String} FirmwareUrl - firmwareUrl. required.
   * @param {String} FirmwareMd5 - firmwareMd5. required.
   * @param {Integer} FirmwareSize - firmwareSize. optional.
   * @param {String} FirmwareDesc - firmwareDesc. required.
   * @param {Integer} VerifyState - verifyState. required.
   */
  updateFirmware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareId')) {
      throw new TypeError('parameter "FirmwareId" is required');
    }

    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'DestVersion')) {
      throw new TypeError('parameter "DestVersion" is required');
    }

    if (!hasOwnProperty(params, 'FirmwareUrl')) {
      throw new TypeError('parameter "FirmwareUrl" is required');
    }

    if (!hasOwnProperty(params, 'FirmwareMd5')) {
      throw new TypeError('parameter "FirmwareMd5" is required');
    }

    if (!hasOwnProperty(params, 'FirmwareDesc')) {
      throw new TypeError('parameter "FirmwareDesc" is required');
    }

    if (!hasOwnProperty(params, 'VerifyState')) {
      throw new TypeError('parameter "VerifyState" is required');
    }

    return this.request('UpdateFirmware', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  upgradeSingleDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('UpgradeSingleDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  verifyFirmware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('VerifyFirmware', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  getLoraNodeInfoList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('getLoraNodeInfoList', params, options);
  }

}

module.exports = Client;
