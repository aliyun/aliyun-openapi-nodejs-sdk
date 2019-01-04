
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-20';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApplyId - applyId. required.
   */
  acceptTransfer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('AcceptTransfer', params, options);
  }

  /**
   */
  activeDevice(params = {}, options = {}) {
    return this.request('ActiveDevice', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  addEventRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('AddEventRecordPlanDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TagName - tagName. required.
   * @param {String} TagKey - tagKey. required.
   * @param {String} TagValue - tagValue. required.
   */
  addProductTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TagName')) {
      throw new TypeError('parameter "TagName" is required');
    }

    if (!hasOwnProperty(params, 'TagKey')) {
      throw new TypeError('parameter "TagKey" is required');
    }

    if (!hasOwnProperty(params, 'TagValue')) {
      throw new TypeError('parameter "TagValue" is required');
    }

    return this.request('AddProductTag', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  addRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('AddRecordPlanDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Scope - scope. required.
   * @param {String} ConfigName - configName. optional.
   * @param {String} ConfigContent - configContent. required.
   * @param {String} SignMethod - signMethod. optional.
   * @param {String} ConfigFormat - configFormat. optional.
   */
  addThingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Scope')) {
      throw new TypeError('parameter "Scope" is required');
    }

    if (!hasOwnProperty(params, 'ConfigContent')) {
      throw new TypeError('parameter "ConfigContent" is required');
    }

    return this.request('AddThingConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Scope - scope. required.
   * @param {String} ConfigName - configName. optional.
   * @param {String} ConfigContent - configContent. required.
   * @param {String} SignMethod - signMethod. optional.
   * @param {String} ConfigFormat - configFormat. optional.
   */
  addThingConfigPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Scope')) {
      throw new TypeError('parameter "Scope" is required');
    }

    if (!hasOwnProperty(params, 'ConfigContent')) {
      throw new TypeError('parameter "ConfigContent" is required');
    }

    return this.request('AddThingConfigPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Count - count. required.
   */
  applyBatchCreateDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('ApplyBatchCreateDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Count - count. required.
   */
  applyBatchCreateDevicePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('ApplyBatchCreateDevicePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceNames - deviceNames. required.
   */
  applyBatchCreateDeviceWithName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceNames')) {
      throw new TypeError('parameter "DeviceNames" is required');
    }

    return this.request('ApplyBatchCreateDeviceWithName', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   * @param {RepeatList} ServiceIdList - serviceIdList. optional.
   */
  authorizeAppkeyInvoke(params = {}, options = {}) {
    return this.request('AuthorizeAppkeyInvoke', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TargetAliyunPk - targetAliyunPk. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  authorizeDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TargetAliyunPk')) {
      throw new TypeError('parameter "TargetAliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('AuthorizeDevices', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  authorizeProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('AuthorizeProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {RepeatList} Device - devices. optional.
   */
  batchAddDeviceGroupRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('BatchAddDeviceGroupRelations', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} PropertyId - propertyIds. optional.
   * @param {RepeatList} ServiceId - serviceIds. optional.
   * @param {RepeatList} EventId - eventIds. optional.
   */
  batchAddStdAbility(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('BatchAddStdAbility', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GwProductKey - gwProductKey. required.
   * @param {String} GwDeviceName - gwDeviceName. required.
   * @param {Json} Ext - ext. required.
   * @param {RepeatList} TopoAddItem - topoAddItemList. required.
   */
  batchAddThingTopo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwProductKey')) {
      throw new TypeError('parameter "GwProductKey" is required');
    }

    if (!hasOwnProperty(params, 'GwDeviceName')) {
      throw new TypeError('parameter "GwDeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Ext')) {
      throw new TypeError('parameter "Ext" is required');
    }

    if (!hasOwnProperty(params, 'TopoAddItem')) {
      throw new TypeError('parameter "TopoAddItem" is required');
    }

    return this.request('BatchAddThingTopo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. optional.
   */
  batchCheckDeviceNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('BatchCheckDeviceNames', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ApplyId - applyId. optional.
   */
  batchCreateDeviceWithApplyId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('BatchCreateDeviceWithApplyId', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ApplyId - applyId. optional.
   */
  batchCreateDeviceWithApplyIdPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('BatchCreateDeviceWithApplyIdPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  batchDeleteBlankProductKeyFirmware(params = {}, options = {}) {
    return this.request('BatchDeleteBlankProductKeyFirmware', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} ProductKey - productKeys. optional.
   * @param {RepeatList} DeviceName - deviceNames. optional.
   */
  batchDeleteDevice(params = {}, options = {}) {
    return this.request('BatchDeleteDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {RepeatList} Device - devices. optional.
   */
  batchDeleteDeviceGroupRelations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('BatchDeleteDeviceGroupRelations', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} ProductKey - productKeys. optional.
   * @param {RepeatList} DeviceName - deviceNames. optional.
   */
  batchDeleteDevicePop(params = {}, options = {}) {
    return this.request('BatchDeleteDevicePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} TagKeys - tagKeys. required.
   */
  batchDeleteProductTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TagKeys')) {
      throw new TypeError('parameter "TagKeys" is required');
    }

    return this.request('BatchDeleteProductTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} UpgradeType - upgradeType. required.
   * @param {String} StrategyType - strategyType. required.
   * @param {String} DestVersion - destVersion. required.
   * @param {String} Locations - locations. optional.
   * @param {RepeatList} SrcVersion - srcVersions. required.
   * @param {RepeatList} DeviceName - deviceNames. optional.
   * @param {Boolean} Diff - diff. optional.
   * @param {RepeatList} SrcFirmwareName - srcFirmwareNames. optional.
   */
  batchDeviceUpgrade(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
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
   * @param {String} ProductKey - productKey. required.
   * @param {String} TagString - tagString. required.
   */
  batchForceUpdateProductTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TagString')) {
      throw new TypeError('parameter "TagString" is required');
    }

    return this.request('BatchForceUpdateProductTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  batchGetDeviceState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('BatchGetDeviceState', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverIds - driverIds. required.
   */
  batchGetDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverIds')) {
      throw new TypeError('parameter "DriverIds" is required');
    }

    return this.request('BatchGetDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverIds - driverIds. required.
   * @param {Long} GroupId - cellId. required.
   */
  batchGetDriverStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverIds')) {
      throw new TypeError('parameter "DriverIds" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('BatchGetDriverStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverTemplateIds - driverTemplateIds. required.
   */
  batchGetDriverTemplateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverTemplateIds')) {
      throw new TypeError('parameter "DriverTemplateIds" is required');
    }

    return this.request('BatchGetDriverTemplateInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverTemplateIds - driverTemplateIds. required.
   * @param {Long} GroupId - cellId. required.
   */
  batchGetDriverTemplateStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverTemplateIds')) {
      throw new TypeError('parameter "DriverTemplateIds" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('BatchGetDriverTemplateStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleIds - sceneIds. required.
   * @param {String} InstanceId - instanceId. required.
   */
  batchGetEdgeInstanceAutomationRuleDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleIds')) {
      throw new TypeError('parameter "RuleIds" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('BatchGetEdgeInstanceAutomationRuleDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleIds - sceneIds. required.
   * @param {String} InstanceId - instanceId. required.
   */
  batchGetEdgeInstanceAutomationRuleRelRuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleIds')) {
      throw new TypeError('parameter "RuleIds" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('BatchGetEdgeInstanceAutomationRuleRelRuleStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RuleIds - sceneIds. optional.
   */
  batchGetEdgeInstanceAutomationRuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('BatchGetEdgeInstanceAutomationRuleStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Devices - devices. required.
   */
  batchGetEdgeInstanceDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Devices')) {
      throw new TypeError('parameter "Devices" is required');
    }

    return this.request('BatchGetEdgeInstanceDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Functions - functions. required.
   */
  batchGetEdgeInstanceFunctionStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Functions')) {
      throw new TypeError('parameter "Functions" is required');
    }

    return this.request('BatchGetEdgeInstanceFunctionStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StreamGuIds - streamGuIds. required.
   */
  batchGetEdgeInstanceStreamStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StreamGuIds')) {
      throw new TypeError('parameter "StreamGuIds" is required');
    }

    return this.request('BatchGetEdgeInstanceStreamStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AutomationRuleIds - sceneIds. required.
   * @param {Integer} GroupId - groupId. required.
   */
  batchGetGroupAutomationRuleDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AutomationRuleIds')) {
      throw new TypeError('parameter "AutomationRuleIds" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('BatchGetGroupAutomationRuleDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AutomationRuleIds - sceneIds. required.
   * @param {Integer} GroupId - groupId. required.
   */
  batchGetGroupAutomationRuleRelRuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AutomationRuleIds')) {
      throw new TypeError('parameter "AutomationRuleIds" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('BatchGetGroupAutomationRuleRelRuleStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} AutomationRuleIds - sceneIds. optional.
   */
  batchGetGroupAutomationRuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('BatchGetGroupAutomationRuleStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} Devices - devices. required.
   */
  batchGetGroupDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Devices')) {
      throw new TypeError('parameter "Devices" is required');
    }

    return this.request('BatchGetGroupDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} Functions - functions. required.
   */
  batchGetGroupFunctionStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Functions')) {
      throw new TypeError('parameter "Functions" is required');
    }

    return this.request('BatchGetGroupFunctionStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} StreamGuIds - streamGuIds. required.
   */
  batchGetGroupStreamStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StreamGuIds')) {
      throw new TypeError('parameter "StreamGuIds" is required');
    }

    return this.request('BatchGetGroupStreamStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Count - count. required.
   */
  batchRegisterDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('BatchRegisterDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Count - count. required.
   */
  batchRegisterDevicePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('BatchRegisterDevicePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} ApplyId - applyId. required.
   */
  batchRegisterDeviceWithApplyId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('BatchRegisterDeviceWithApplyId', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} ApplyId - applyId. required.
   */
  batchRegisterDeviceWithApplyIdPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('BatchRegisterDeviceWithApplyIdPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  batchRegisterDeviceWithNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('BatchRegisterDeviceWithNames', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  batchRegisterDeviceWithNamesPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('BatchRegisterDeviceWithNamesPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} Firmware - firmwares. optional.
   */
  batchUpdateFirmware(params = {}, options = {}) {
    return this.request('BatchUpdateFirmware', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TagString - tagString. required.
   */
  batchUpdateProductTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TagString')) {
      throw new TypeError('parameter "TagString" is required');
    }

    return this.request('BatchUpdateProductTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RuleId - sceneId. required.
   */
  bindAutomationRuleToEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('BindAutomationRuleToEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} AutomationRuleId - sceneId. required.
   */
  bindAutomationRuleToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AutomationRuleId')) {
      throw new TypeError('parameter "AutomationRuleId" is required');
    }

    return this.request('BindAutomationRuleToGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  bindDeviceToEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('BindDeviceToEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceType - deviceType. optional.
   */
  bindDeviceToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('BindDeviceToGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} DriverTemplateId - driverTemplateId. optional.
   * @param {String} DriverId - driverId. optional.
   * @param {Long} Memory - memory. required.
   */
  bindDriverToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Memory')) {
      throw new TypeError('parameter "Memory" is required');
    }

    return this.request('BindDriverToGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} FunctionName - functionName. required.
   * @param {String} RunMode - runMode. required.
   * @param {String} FcRegionId - fcRegionId. optional.
   * @param {Integer} MemorySize - memorySize. optional.
   * @param {Integer} Timeout - timeout. optional.
   * @param {String} TriggerContent - triggerContent. optional.
   */
  bindFunctionToEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'RunMode')) {
      throw new TypeError('parameter "RunMode" is required');
    }

    return this.request('BindFunctionToEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} FunctionName - functionName. required.
   * @param {String} RunMode - runMode. required.
   * @param {String} FcRegionId - fcRegionId. optional.
   * @param {Integer} MemorySize - memorySize. optional.
   * @param {Integer} Timeout - timeout. optional.
   * @param {String} TriggerContent - triggerContent. optional.
   */
  bindFunctionToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'RunMode')) {
      throw new TypeError('parameter "RunMode" is required');
    }

    return this.request('BindFunctionToGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  bindGatewayToEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('BindGatewayToEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  bindGatewayToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('BindGatewayToGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} RoleName - roleName. required.
   */
  bindRoleToEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    return this.request('BindRoleToEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} RoleName - roleName. required.
   */
  bindRoleToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    return this.request('BindRoleToGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StreamGuId - streamGuId. required.
   */
  bindStreamToEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StreamGuId')) {
      throw new TypeError('parameter "StreamGuId" is required');
    }

    return this.request('BindStreamToEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} StreamGuId - streamGuId. required.
   */
  bindStreamToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StreamGuId')) {
      throw new TypeError('parameter "StreamGuId" is required');
    }

    return this.request('BindStreamToGroup', params, options);
  }

  /**
   * @param {Long} Num - num. required.
   */
  buyLinkFaceLicenseToBusiness(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Num')) {
      throw new TypeError('parameter "Num" is required');
    }

    return this.request('BuyLinkFaceLicenseToBusiness', params, options);
  }

  /**
   * @param {String} ApplicationAuthorizationUuid - applicationAuthorizationUuid. optional.
   */
  cancelAppAuthorization(params = {}, options = {}) {
    return this.request('CancelAppAuthorization', params, options);
  }

  /**
   * @param {String} DeviceAuthorizationUuid - deviceAuthorizationUuid. optional.
   */
  cancelAppDeviceAuthorization(params = {}, options = {}) {
    return this.request('CancelAppDeviceAuthorization', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} CancelDevice - cancelDevices. required.
   */
  cancelAuthorizedDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CancelDevice')) {
      throw new TypeError('parameter "CancelDevice" is required');
    }

    return this.request('CancelAuthorizedDevices', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TargetAliyunPk - targetAliyunPk. required.
   */
  cancelAuthorizedProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TargetAliyunPk')) {
      throw new TypeError('parameter "TargetAliyunPk" is required');
    }

    return this.request('CancelAuthorizedProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {Long} TaskId - taskId. required.
   */
  cancelDiff(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('CancelDiff', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  cancelReleaseProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('CancelReleaseProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApplyId - applyId. required.
   */
  cancelTransferApply(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('CancelTransferApply', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} NewGeoProjectName - newGeoProjectName. required.
   * @param {String} GeoProjectId - geoProjectId. required.
   */
  changeGeoProjectName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NewGeoProjectName')) {
      throw new TypeError('parameter "NewGeoProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    return this.request('ChangeGeoProjectName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} AlinkJson - alinkJson. required.
   * @param {Integer} Type - type. required.
   */
  checkAlinkProtocol(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'AlinkJson')) {
      throw new TypeError('parameter "AlinkJson" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CheckAlinkProtocol', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} AlinkJson - alinkJson. required.
   * @param {Integer} Type - type. required.
   */
  checkAlinkProtocolPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'AlinkJson')) {
      throw new TypeError('parameter "AlinkJson" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CheckAlinkProtocolPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} GwProductKey - gwProductKey. required.
   * @param {String} GwDeviceName - gwDeviceName. required.
   */
  checkAndRemoveTopo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'GwProductKey')) {
      throw new TypeError('parameter "GwProductKey" is required');
    }

    if (!hasOwnProperty(params, 'GwDeviceName')) {
      throw new TypeError('parameter "GwDeviceName" is required');
    }

    return this.request('CheckAndRemoveTopo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductCode - productCode. required.
   */
  checkCloudProductOpenStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    return this.request('CheckCloudProductOpenStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Output - output. optional.
   * @param {Long} SourceId - sourceId. optional.
   * @param {Long} TaskId - taskId. optional.
   */
  checkDataSourceOutput(params = {}, options = {}) {
    return this.request('CheckDataSourceOutput', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. optional.
   * @param {String} EndPoint - endPoint. optional.
   * @param {String} AccessId - accessId. optional.
   * @param {String} AccessKey - accessKey. optional.
   * @param {String} Host - host. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Password - password. optional.
   * @param {String} Port - port. optional.
   * @param {String} DbName - dbName. optional.
   */
  checkDataSourceValid(params = {}, options = {}) {
    return this.request('CheckDataSourceValid', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   */
  checkIsUnzipSuccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('CheckIsUnzipSuccess', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Sql - sql. optional.
   * @param {Long} TaskId - taskId. optional.
   */
  checkTaskSql(params = {}, options = {}) {
    return this.request('CheckTaskSql', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} SourceId - sourceId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Desc - desc. optional.
   */
  cloneTask(params = {}, options = {}) {
    return this.request('CloneTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   * @param {String} SceneName - sceneName. required.
   */
  copyBIMScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'SceneName')) {
      throw new TypeError('parameter "SceneName" is required');
    }

    return this.request('CopyBIMScene', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SrcProductKey - srcProductKey. required.
   * @param {String} TargetProductKey - targetProductKey. required.
   */
  copyProductAbility(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcProductKey')) {
      throw new TypeError('parameter "SrcProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TargetProductKey')) {
      throw new TypeError('parameter "TargetProductKey" is required');
    }

    return this.request('CopyProductAbility', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. required.
   * @param {String} Name - name. required.
   * @param {String} Metric - metric. required.
   * @param {String} Project - project. required.
   * @param {String} GroupName - groupName. required.
   * @param {String} StatisticalType - statisticalType. required.
   * @param {String} ComparisonCondition - comparisonCondition. required.
   * @param {Integer} Period - period. required.
   * @param {String} ComparisonValue - comparisonValue. required.
   * @param {String} ComparisonModel - comparisonModel. optional.
   * @param {RepeatList} ContactGroups - contactGroups. optional.
   * @param {Integer} EvaluationCount - evaluationCount. optional.
   */
  createAppAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUuid')) {
      throw new TypeError('parameter "AppUuid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'StatisticalType')) {
      throw new TypeError('parameter "StatisticalType" is required');
    }

    if (!hasOwnProperty(params, 'ComparisonCondition')) {
      throw new TypeError('parameter "ComparisonCondition" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'ComparisonValue')) {
      throw new TypeError('parameter "ComparisonValue" is required');
    }

    return this.request('CreateAppAlarm', params, options);
  }

  /**
   * @param {RepeatList} Data - data. optional.
   */
  createAppAuthorization(params = {}, options = {}) {
    return this.request('CreateAppAuthorization', params, options);
  }

  /**
   * @param {String} ConfigureUuid - configureUuid. required.
   * @param {String} Name - name. required.
   * @param {String} HostingType - hostingType. optional.
   * @param {String} DeployRegionId - deployRegionId. optional.
   */
  createAppDeployment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigureUuid')) {
      throw new TypeError('parameter "ConfigureUuid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateAppDeployment', params, options);
  }

  /**
   * @param {RepeatList} Data - data. optional.
   */
  createAppDeviceAuthorization(params = {}, options = {}) {
    return this.request('CreateAppDeviceAuthorization', params, options);
  }

  /**
   * @param {String} ConfigureUuid - configureUuid. required.
   * @param {String} Name - name. required.
   * @param {String} DeployRegionId - deployRegionId. optional.
   * @param {String} HostingType - hostingType. optional.
   * @param {String} ClusterId - clusterId. required.
   */
  createAppEdgeDeployment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigureUuid')) {
      throw new TypeError('parameter "ConfigureUuid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('CreateAppEdgeDeployment', params, options);
  }

  /**
   * @param {String} RepoName - repoName. optional.
   * @param {String} Summary - summary. optional.
   * @param {String} Detail - detail. optional.
   */
  createAppImageRepo(params = {}, options = {}) {
    return this.request('CreateAppImageRepo', params, options);
  }

  /**
   * @param {String} AppKey - appKey. optional.
   * @param {String} AliyunPk - aliyunPk. optional.
   */
  createAppInstance(params = {}, options = {}) {
    return this.request('CreateAppInstance', params, options);
  }

  /**
   * @param {String} AppName - appName. optional.
   * @param {Integer} RegisterAppType - registerAppType. optional.
   */
  createAppKey(params = {}, options = {}) {
    return this.request('CreateAppKey', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleName - sceneName. required.
   * @param {String} RuleContent - sceneContent. optional.
   * @param {String} RuleDescription - remark. optional.
   */
  createAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    return this.request('CreateAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DestFirmwareName - destFirmwareName. required.
   * @param {RepeatList} SrcFirmwareName - srcFirmwareNames. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DiffMethod - diffMethod. optional.
   * @param {Integer} SplictSize - splictSize. optional.
   */
  createBatchDiff(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DestFirmwareName')) {
      throw new TypeError('parameter "DestFirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'SrcFirmwareName')) {
      throw new TypeError('parameter "SrcFirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('CreateBatchDiff', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GwProductKey - gwProductKey. required.
   * @param {String} GwDeviceName - gwDeviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ServerId - serverId. optional.
   * @param {String} ConfigJson - configJson. optional.
   */
  createChildDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwProductKey')) {
      throw new TypeError('parameter "GwProductKey" is required');
    }

    if (!hasOwnProperty(params, 'GwDeviceName')) {
      throw new TypeError('parameter "GwDeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('CreateChildDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} EventType - eventType. required.
   * @param {String} EventName - eventName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} OutputData - outputData. optional.
   * @param {String} ExtendConfig - extendConfig. optional.
   */
  createCustomEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'EventName')) {
      throw new TypeError('parameter "EventName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('CreateCustomEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} EventType - eventType. required.
   * @param {String} EventName - eventName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} OutputData - outputData. optional.
   */
  createCustomEventPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'EventName')) {
      throw new TypeError('parameter "EventName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('CreateCustomEventPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} DataType - dataType. required.
   * @param {Integer} RwFlag - rwFlag. required.
   * @param {String} Name - name. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} DataSpecs - dataSpecs. optional.
   * @param {String} DataSpecsList - dataSpecsList. optional.
   * @param {String} ExtendConfig - extendConfig. optional.
   */
  createCustomProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'RwFlag')) {
      throw new TypeError('parameter "RwFlag" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('CreateCustomProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} DataType - dataType. required.
   * @param {Integer} RwFlag - rwFlag. required.
   * @param {String} Name - name. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} DataSpecs - dataSpecs. optional.
   * @param {String} DataSpecsList - dataSpecsList. optional.
   */
  createCustomPropertyPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'RwFlag')) {
      throw new TypeError('parameter "RwFlag" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('CreateCustomPropertyPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} CallType - callType. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} InputParams - inputParams. optional.
   * @param {String} OutputParams - outputParams. optional.
   * @param {String} ExtendConfig - extendConfig. optional.
   */
  createCustomService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'CallType')) {
      throw new TypeError('parameter "CallType" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('CreateCustomService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} CallType - callType. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} InputParams - inputParams. optional.
   * @param {String} OutputParams - outputParams. optional.
   */
  createCustomServicePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'CallType')) {
      throw new TypeError('parameter "CallType" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('CreateCustomServicePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. optional.
   * @param {String} EndPoint - endPoint. optional.
   * @param {String} AccessId - accessId. optional.
   * @param {String} AccessKey - accessKey. optional.
   * @param {String} Host - host. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Password - password. optional.
   * @param {String} Port - port. optional.
   * @param {String} DbName - dbName. optional.
   * @param {String} GmtCreate - gmtCreate. optional.
   * @param {String} GmtModified - gmtModified. optional.
   */
  createDataSource(params = {}, options = {}) {
    return this.request('CreateDataSource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   */
  createDeployment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('CreateDeployment', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SuperGroupId - superGroupId. optional.
   * @param {String} GroupName - groupName. required.
   * @param {String} GroupDesc - groupDesc. optional.
   */
  createDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('CreateDeviceGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverName - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Url - ossAddress. required.
   * @param {String} Runtime - runtime. required.
   */
  createDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverName')) {
      throw new TypeError('parameter "DriverName" is required');
    }

    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    if (!hasOwnProperty(params, 'Runtime')) {
      throw new TypeError('parameter "Runtime" is required');
    }

    return this.request('CreateDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverTemplateName - name. required.
   * @param {String} Description - description. required.
   * @param {String} Content - ossAddress. required.
   * @param {String} Runtime - runtime. required.
   */
  createDriverTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverTemplateName')) {
      throw new TypeError('parameter "DriverTemplateName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    if (!hasOwnProperty(params, 'Runtime')) {
      throw new TypeError('parameter "Runtime" is required');
    }

    return this.request('CreateDriverTemplate', params, options);
  }

  /**
   * @param {String} ClusterName - clusterName. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} StorageHost - storageHost. optional.
   * @param {String} StoragePath - storagePath. optional.
   * @param {String} ServiceCidr - serviceCidr. optional.
   */
  createEdgeCluster(params = {}, options = {}) {
    return this.request('CreateEdgeCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} Tags - tags. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  createEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  createEdgeInstanceDeployment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateEdgeInstanceDeployment', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TopicFilter - topicFilter. optional.
   * @param {String} SourceType - sourceType. required.
   * @param {String} SourceData - sourceData. optional.
   * @param {String} TargetType - targetType. required.
   * @param {String} TargetData - targetData. optional.
   * @param {Integer} TargetIotHubQos - targetIotHubQos. optional.
   */
  createEdgeInstanceMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'TargetType')) {
      throw new TypeError('parameter "TargetType" is required');
    }

    return this.request('CreateEdgeInstanceMessageRoute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Project - project. optional.
   * @param {String} LogStore - logStore. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} Ttl - ttl. optional.
   * @param {String} LogLevel - logLevel. optional.
   */
  createEdgeInstanceSls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CreateEdgeInstanceSls', params, options);
  }

  /**
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} NodeName - name. optional.
   * @param {String} Context - inputContext. optional.
   * @param {String} Tags - tags. optional.
   */
  createEdgeNode(params = {}, options = {}) {
    return this.request('CreateEdgeNode', params, options);
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
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Protocol4ChildDevice - protocol4ChildDevice. required.
   * @param {String} ServerName - serverName. required.
   * @param {String} Content - content. required.
   */
  createGatewayServerConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Protocol4ChildDevice')) {
      throw new TypeError('parameter "Protocol4ChildDevice" is required');
    }

    if (!hasOwnProperty(params, 'ServerName')) {
      throw new TypeError('parameter "ServerName" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('CreateGatewayServerConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GeoProjectName - geoProjectName. required.
   * @param {String} GroupMethod - groupMethod. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} GroupName - groupName. required.
   * @param {String} MapConfig - mapConfig. optional.
   */
  createGeoProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GeoProjectName')) {
      throw new TypeError('parameter "GeoProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GroupMethod')) {
      throw new TypeError('parameter "GroupMethod" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('CreateGeoProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} Tags - tags. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  createGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} TopicFilter - topicFilter. optional.
   * @param {String} SourceType - sourceType. required.
   * @param {String} SourceData - sourceData. optional.
   * @param {String} TargetType - targetType. required.
   * @param {String} TargetData - targetData. optional.
   * @param {Integer} TargetIotHubQos - targetIotHubQos. optional.
   */
  createGroupMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'TargetType')) {
      throw new TypeError('parameter "TargetType" is required');
    }

    return this.request('CreateGroupMessageRoute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Email - email. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} Ext - ext. optional.
   */
  createLaUser(params = {}, options = {}) {
    return this.request('CreateLaUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductName - productName. required.
   * @param {Integer} NodeType - nodeType. required.
   * @param {Integer} DataFormat - dataFormat. optional.
   * @param {String} Description - description. optional.
   * @param {String} AliyunCommodityCode - aliyunCommodityCode. optional.
   * @param {Boolean} Id2 - id2. optional.
   * @param {Long} CategoryId - categoryId. optional.
   * @param {String} ProtocolType - protocolType. optional.
   * @param {String} NetType - netType. optional.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'NodeType')) {
      throw new TypeError('parameter "NodeType" is required');
    }

    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductName - productName. required.
   * @param {Integer} NodeType - nodeType. required.
   * @param {Integer} DataFormat - dataFormat. optional.
   * @param {String} Description - description. optional.
   * @param {String} AliyunCommodityCode - aliyunCommodityCode. optional.
   * @param {Boolean} Id2 - id2. optional.
   * @param {Long} CategoryId - categoryId. optional.
   * @param {String} ProtocolType - protocolType. optional.
   * @param {String} ServiceCode - serviceCode. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} GroupType - groupType. optional.
   * @param {String} NetType - netType. optional.
   */
  createProductInGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'NodeType')) {
      throw new TypeError('parameter "NodeType" is required');
    }

    return this.request('CreateProductInGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductName - productName. required.
   * @param {Integer} NodeType - nodeType. required.
   * @param {Integer} DataFormat - dataFormat. optional.
   * @param {String} Description - description. optional.
   * @param {String} AliyunCommodityCode - aliyunCommodityCode. optional.
   * @param {Boolean} Id2 - id2. optional.
   * @param {Integer} PayType - payType. optional.
   * @param {Long} CategoryId - categoryId. optional.
   */
  createProductPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'NodeType')) {
      throw new TypeError('parameter "NodeType" is required');
    }

    return this.request('CreateProductPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TopicShortName - topicShortName. required.
   * @param {String} Operation - operation. optional.
   * @param {String} Desc - desc. optional.
   */
  createProductTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicShortName')) {
      throw new TypeError('parameter "TopicShortName" is required');
    }

    return this.request('CreateProductTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Select - select. optional.
   * @param {String} ShortTopic - shortTopic. optional.
   * @param {String} Where - where. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} Name - name. required.
   * @param {String} RuleDesc - ruleDesc. optional.
   * @param {String} DataType - dataType. optional.
   * @param {Integer} TopicType - topicType. optional.
   */
  createRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} Type - type. required.
   * @param {String} Configuration - configuration. required.
   * @param {Boolean} ErrorActionFlag - errorActionFlag. optional.
   */
  createRuleAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Configuration')) {
      throw new TypeError('parameter "Configuration" is required');
    }

    return this.request('CreateRuleAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ScriptName - scriptName. required.
   * @param {String} ScriptContent - scriptContent. required.
   * @param {String} ScriptType - scriptType. required.
   */
  createScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ScriptName')) {
      throw new TypeError('parameter "ScriptName" is required');
    }

    if (!hasOwnProperty(params, 'ScriptContent')) {
      throw new TypeError('parameter "ScriptContent" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    return this.request('CreateScript', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ScriptContent - scriptContent. required.
   * @param {String} ScriptType - scriptType. required.
   * @param {String} OssUrl - ossUrl. optional.
   */
  createScriptDraft(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ScriptContent')) {
      throw new TypeError('parameter "ScriptContent" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    return this.request('CreateScriptDraft', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ScriptContent - scriptContent. required.
   * @param {String} ScriptType - scriptType. required.
   * @param {String} OssUrl - ossUrl. optional.
   */
  createScriptDraftPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ScriptContent')) {
      throw new TypeError('parameter "ScriptContent" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    return this.request('CreateScriptDraftPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ScriptName - scriptName. required.
   * @param {String} ScriptContent - scriptContent. required.
   * @param {String} ScriptType - scriptType. required.
   */
  createScriptPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ScriptName')) {
      throw new TypeError('parameter "ScriptName" is required');
    }

    if (!hasOwnProperty(params, 'ScriptContent')) {
      throw new TypeError('parameter "ScriptContent" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    return this.request('CreateScriptPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Desc - desc. optional.
   * @param {String} Type - type. optional.
   * @param {String} Status - status. optional.
   * @param {String} Sql - sql. optional.
   * @param {String} Components - components. optional.
   * @param {String} Params - params. optional.
   * @param {String} Env - env. optional.
   * @param {String} GmtCreate - gmtCreate. optional.
   * @param {String} GmtModified - gmtModified. optional.
   */
  createTask(params = {}, options = {}) {
    return this.request('CreateTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} SrcTopic - srcTopic. required.
   * @param {RepeatList} DstTopic - dstTopics. required.
   */
  createTopicRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcTopic')) {
      throw new TypeError('parameter "SrcTopic" is required');
    }

    if (!hasOwnProperty(params, 'DstTopic')) {
      throw new TypeError('parameter "DstTopic" is required');
    }

    return this.request('CreateTopicRouteTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} FunctionType - functionType. required.
   * @param {String} FunctionCode - functionCode. required.
   * @param {String} Args - args. optional.
   * @param {String} Environment - environment. required.
   */
  debugAbility(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'FunctionType')) {
      throw new TypeError('parameter "FunctionType" is required');
    }

    if (!hasOwnProperty(params, 'FunctionCode')) {
      throw new TypeError('parameter "FunctionCode" is required');
    }

    if (!hasOwnProperty(params, 'Environment')) {
      throw new TypeError('parameter "Environment" is required');
    }

    return this.request('DebugAbility', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} FunctionType - functionType. required.
   * @param {String} FunctionCode - functionCode. required.
   * @param {String} Args - args. optional.
   * @param {String} Environment - environment. required.
   */
  debugAbilityPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'FunctionType')) {
      throw new TypeError('parameter "FunctionType" is required');
    }

    if (!hasOwnProperty(params, 'FunctionCode')) {
      throw new TypeError('parameter "FunctionCode" is required');
    }

    if (!hasOwnProperty(params, 'Environment')) {
      throw new TypeError('parameter "Environment" is required');
    }

    return this.request('DebugAbilityPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. optional.
   * @param {String} Sql - sql. optional.
   * @param {String} JsonInfo - jsonInfo. required.
   */
  debugRuleSql(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JsonInfo')) {
      throw new TypeError('parameter "JsonInfo" is required');
    }

    return this.request('DebugRuleSql', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   */
  delAppVirtualDeviceConfig(params = {}, options = {}) {
    return this.request('DelAppVirtualDeviceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} AbilityType - abilityType. required.
   * @param {Long} AbilityId - abilityId. required.
   * @param {String} Identifier - identifier. optional.
   */
  deleteAbility(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'AbilityType')) {
      throw new TypeError('parameter "AbilityType" is required');
    }

    if (!hasOwnProperty(params, 'AbilityId')) {
      throw new TypeError('parameter "AbilityId" is required');
    }

    return this.request('DeleteAbility', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} AbilityType - abilityType. required.
   * @param {Long} AbilityId - abilityId. required.
   */
  deleteAbilityPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'AbilityType')) {
      throw new TypeError('parameter "AbilityType" is required');
    }

    if (!hasOwnProperty(params, 'AbilityId')) {
      throw new TypeError('parameter "AbilityId" is required');
    }

    return this.request('DeleteAbilityPop', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   */
  deleteApp(params = {}, options = {}) {
    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {String} Uuid - uuid. required.
   * @param {String} AppUuid - appUuid. required.
   */
  deleteAppAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'AppUuid')) {
      throw new TypeError('parameter "AppUuid" is required');
    }

    return this.request('DeleteAppAlarm', params, options);
  }

  /**
   * @param {String} AppConfigId - appConfigId. optional.
   */
  deleteAppConfig(params = {}, options = {}) {
    return this.request('DeleteAppConfig', params, options);
  }

  /**
   * @param {String} DeploymentRecordUuid - deploymentRecordUuid. optional.
   */
  deleteAppDeployment(params = {}, options = {}) {
    return this.request('DeleteAppDeployment', params, options);
  }

  /**
   * @param {String} RepoName - repoName. optional.
   */
  deleteAppImageRepo(params = {}, options = {}) {
    return this.request('DeleteAppImageRepo', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   * @param {String} AliyunPk - aliyunPk. optional.
   */
  deleteAppInstance(params = {}, options = {}) {
    return this.request('DeleteAppInstance', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   */
  deleteAppKey(params = {}, options = {}) {
    return this.request('DeleteAppKey', params, options);
  }

  /**
   * @param {String} RepoName - repoName. optional.
   * @param {String} Tag - tag. optional.
   */
  deleteAppRepoTag(params = {}, options = {}) {
    return this.request('DeleteAppRepoTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   * @param {String} Phone - phone. required.
   */
  deleteAuthorizedPhoneNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    return this.request('DeleteAuthorizedPhoneNum', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleId - sceneId. required.
   */
  deleteAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('DeleteAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   */
  deleteBIMScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('DeleteBIMScene', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   */
  deleteDataSource(params = {}, options = {}) {
    return this.request('DeleteDataSource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  deleteDevice(params = {}, options = {}) {
    return this.request('DeleteDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  deleteDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteDeviceGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  deleteDevicePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DeleteDevicePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} PropKey - propKey. required.
   */
  deleteDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'PropKey')) {
      throw new TypeError('parameter "PropKey" is required');
    }

    return this.request('DeleteDeviceProp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverId - driverId. required.
   */
  deleteDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverId')) {
      throw new TypeError('parameter "DriverId" is required');
    }

    return this.request('DeleteDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverTemplateId - driverTemplateId. required.
   */
  deleteDriverTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverTemplateId')) {
      throw new TypeError('parameter "DriverTemplateId" is required');
    }

    return this.request('DeleteDriverTemplate', params, options);
  }

  /**
   * @param {String} ClusterId - clusterId. optional.
   */
  deleteEdgeCluster(params = {}, options = {}) {
    return this.request('DeleteEdgeCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  deleteEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} RouteId - routeId. required.
   */
  deleteEdgeInstanceMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RouteId')) {
      throw new TypeError('parameter "RouteId" is required');
    }

    return this.request('DeleteEdgeInstanceMessageRoute', params, options);
  }

  /**
   * @param {String} NodeId - nodeId. optional.
   */
  deleteEdgeNode(params = {}, options = {}) {
    return this.request('DeleteEdgeNode', params, options);
  }

  /**
   */
  deleteEventRecordPlan(params = {}, options = {}) {
    return this.request('DeleteEventRecordPlan', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  deleteEventRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('DeleteEventRecordPlanDevice', params, options);
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
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Code - code. required.
   */
  deleteGatewayServerConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    return this.request('DeleteGatewayServerConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GeoProjectId - geoProjectId. required.
   */
  deleteGeoProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    return this.request('DeleteGeoProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   */
  deleteGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Long} RouteId - routeId. required.
   */
  deleteGroupMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'RouteId')) {
      throw new TypeError('parameter "RouteId" is required');
    }

    return this.request('DeleteGroupMessageRoute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  deleteProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('DeleteProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  deleteProductPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('DeleteProductPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TagKey - tagKey. required.
   */
  deleteProductTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TagKey')) {
      throw new TypeError('parameter "TagKey" is required');
    }

    return this.request('DeleteProductTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TopicId - topicId. required.
   */
  deleteProductTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TopicId')) {
      throw new TypeError('parameter "TopicId" is required');
    }

    return this.request('DeleteProductTopic', params, options);
  }

  /**
   */
  deleteRecordPlan(params = {}, options = {}) {
    return this.request('DeleteRecordPlan', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  deleteRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('DeleteRecordPlanDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  deleteRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('DeleteRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ActionId - actionId. required.
   */
  deleteRuleAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionId')) {
      throw new TypeError('parameter "ActionId" is required');
    }

    return this.request('DeleteRuleAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   */
  deleteScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('DeleteScene', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ScriptCode - scriptCode. required.
   */
  deleteScriptDraft(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScriptCode')) {
      throw new TypeError('parameter "ScriptCode" is required');
    }

    return this.request('DeleteScriptDraft', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ScriptCode - scriptCode. required.
   */
  deleteScriptDraftPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScriptCode')) {
      throw new TypeError('parameter "ScriptCode" is required');
    }

    return this.request('DeleteScriptDraftPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   */
  deleteTask(params = {}, options = {}) {
    return this.request('DeleteTask', params, options);
  }

  /**
   */
  deleteTimeTemplate(params = {}, options = {}) {
    return this.request('DeleteTimeTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} SrcTopic - srcTopic. required.
   * @param {RepeatList} DstTopic - dstTopics. required.
   */
  deleteTopicRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SrcTopic')) {
      throw new TypeError('parameter "SrcTopic" is required');
    }

    if (!hasOwnProperty(params, 'DstTopic')) {
      throw new TypeError('parameter "DstTopic" is required');
    }

    return this.request('DeleteTopicRouteTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
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
   * @param {String} RuleId - sceneId. required.
   */
  disableAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('DisableAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  disableThing(params = {}, options = {}) {
    return this.request('DisableThing', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  disableThingPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DisableThingPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  doDeviceOffline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DoDeviceOffline', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  doDeviceOnline(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('DoDeviceOnline', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} NewGeoProjectName - newGeoProjectName. required.
   * @param {String} GeoProjectId - geoProjectId. required.
   */
  duplicateGeoProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NewGeoProjectName')) {
      throw new TypeError('parameter "NewGeoProjectName" is required');
    }

    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    return this.request('DuplicateGeoProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleId - sceneId. required.
   */
  enableAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('EnableAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  enableThing(params = {}, options = {}) {
    return this.request('EnableThing', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  enableThingPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('EnableThingPop', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} NameSpace - namespace. optional.
   * @param {String} Name - name. required.
   * @param {String} CpuCapacityLimit - cpuCapacityLimit. required.
   * @param {String} MemCapacityLimit - memCapacityLimit. required.
   * @param {String} CpuCapacityRequest - cpuCapacityRequest. optional.
   * @param {String} MemCapacityRequest - memCapacityRequest. optional.
   * @param {Integer} ContainerCount - containerCount. optional.
   */
  expandAppDeploymentResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUuid')) {
      throw new TypeError('parameter "AppUuid" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'CpuCapacityLimit')) {
      throw new TypeError('parameter "CpuCapacityLimit" is required');
    }

    if (!hasOwnProperty(params, 'MemCapacityLimit')) {
      throw new TypeError('parameter "MemCapacityLimit" is required');
    }

    return this.request('ExpandAppDeploymentResource', params, options);
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
   * @param {String} GroupId - groupId. required.
   * @param {String} TagString - tagString. required.
   */
  forceSetDeviceGroupTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'TagString')) {
      throw new TypeError('parameter "TagString" is required');
    }

    return this.request('ForceSetDeviceGroupTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Props - props. optional.
   */
  forceSetDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ForceSetDeviceProp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. optional.
   */
  generateBIMOssUploadUri(params = {}, options = {}) {
    return this.request('GenerateBIMOssUploadUri', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} UploadType - uploadType. required.
   */
  generateOpcUaUploadUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'UploadType')) {
      throw new TypeError('parameter "UploadType" is required');
    }

    return this.request('GenerateOpcUaUploadUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  generateOssUploadUri(params = {}, options = {}) {
    return this.request('GenerateOssUploadUri', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ScriptType - scriptType. required.
   */
  generateScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    return this.request('GenerateScript', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ScriptType - scriptType. required.
   */
  generateScriptPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    return this.request('GenerateScriptPop', params, options);
  }

  /**
   */
  getAccountBalance(params = {}, options = {}) {
    return this.request('GetAccountBalance', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   */
  getAppBaseInfo(params = {}, options = {}) {
    return this.request('GetAppBaseInfo', params, options);
  }

  /**
   * @param {String} Uuid - uuid. optional.
   */
  getAppConfigDetail(params = {}, options = {}) {
    return this.request('GetAppConfigDetail', params, options);
  }

  /**
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AppConfigId - appConfigId. optional.
   * @param {String} Name - name. optional.
   * @param {Boolean} Cloned - cloned. optional.
   * @param {Integer} LpRelated - lpRelated. optional.
   * @param {Boolean} NeedPublishing - needPublishing. optional.
   */
  getAppConfigList(params = {}, options = {}) {
    return this.request('GetAppConfigList', params, options);
  }

  /**
   * @param {String} AppConfigId - appConfigId. optional.
   */
  getAppConfigurableNode(params = {}, options = {}) {
    return this.request('GetAppConfigurableNode', params, options);
  }

  /**
   * @param {String} DeploymentRecordUuid - deploymentRecordUuid. optional.
   * @param {Boolean} NeedDetail - needDetail. optional.
   */
  getAppDeploymentDetail(params = {}, options = {}) {
    return this.request('GetAppDeploymentDetail', params, options);
  }

  /**
   * @param {String} RepoName - repoName. optional.
   */
  getAppImageRepo(params = {}, options = {}) {
    return this.request('GetAppImageRepo', params, options);
  }

  /**
   */
  getAppImageRepoUser(params = {}, options = {}) {
    return this.request('GetAppImageRepoUser', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   */
  getAppInstanceInfo(params = {}, options = {}) {
    return this.request('GetAppInstanceInfo', params, options);
  }

  /**
   * @param {String} NodeId - nodeId. optional.
   */
  getAppNodePropertyList(params = {}, options = {}) {
    return this.request('GetAppNodePropertyList', params, options);
  }

  /**
   * @param {String} AppConfigId - appConfigId. optional.
   */
  getAppNodes(params = {}, options = {}) {
    return this.request('GetAppNodes', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   * @param {String} ServiceName - serviceName. optional.
   */
  getAppPodInfo(params = {}, options = {}) {
    return this.request('GetAppPodInfo', params, options);
  }

  /**
   * @param {String} HostingType - hostingType. optional.
   * @param {String} AppUuid - appUuid. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} PodName - podName. optional.
   * @param {String} ContainerName - containerName. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} ServiceName - serviceName. optional.
   */
  getAppPodSession(params = {}, options = {}) {
    return this.request('GetAppPodSession', params, options);
  }

  /**
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AppConfigId - appConfigId. optional.
   * @param {String} ConfigKey - configKey. optional.
   */
  getAppProperty(params = {}, options = {}) {
    return this.request('GetAppProperty', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   */
  getAppSecret(params = {}, options = {}) {
    return this.request('GetAppSecret', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} NodeId - nodeId. optional.
   */
  getAppServiceInfo(params = {}, options = {}) {
    return this.request('GetAppServiceInfo', params, options);
  }

  /**
   */
  getAppServiceRole(params = {}, options = {}) {
    return this.request('GetAppServiceRole', params, options);
  }

  /**
   * @param {String} AliyunPK - aliyunPk. optional.
   */
  getAppSignContent(params = {}, options = {}) {
    return this.request('GetAppSignContent', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   * @param {String} AliyunPk - aliyunPk. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} TenantSubUserId - tenantSubUserId. optional.
   */
  getAppSsoUrl(params = {}, options = {}) {
    return this.request('GetAppSsoUrl', params, options);
  }

  /**
   * @param {String} AppConfigId - appConfigId. optional.
   * @param {String} NodeId - nodeId. optional.
   * @param {RepeatList} PropertyList - propertyList. optional.
   */
  getAppVerifyNodePropertyResultAppConfig(params = {}, options = {}) {
    return this.request('GetAppVerifyNodePropertyResultAppConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleId - sceneId. required.
   */
  getAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('GetAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   */
  getBindSceneInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('GetBindSceneInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  getCloudMonitorNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('GetCloudMonitorNode', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getComponentList(params = {}, options = {}) {
    return this.request('GetComponentList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   */
  getDataSource(params = {}, options = {}) {
    return this.request('GetDataSource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Json} IdList - idList. optional.
   * @param {Json} NameList - nameList. optional.
   * @param {String} Search - search. optional.
   * @param {String} Type - type. optional.
   * @param {Json} Page - page. optional.
   * @param {Json} Order - order. optional.
   */
  getDataSourceList(params = {}, options = {}) {
    return this.request('GetDataSourceList', params, options);
  }

  /**
   */
  getDeviceProductList(params = {}, options = {}) {
    return this.request('GetDeviceProductList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} PropName - propName. required.
   */
  getDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'PropName')) {
      throw new TypeError('parameter "PropName" is required');
    }

    return this.request('GetDeviceProp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} PropName - propName. required.
   */
  getDevicePropPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'PropName')) {
      throw new TypeError('parameter "PropName" is required');
    }

    return this.request('GetDevicePropPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ShadowMessage - shadowMessage. optional.
   */
  getDeviceShadow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetDeviceShadow', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  getDeviceStatus(params = {}, options = {}) {
    return this.request('GetDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. required.
   */
  getDeviceStatusForBim(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('GetDeviceStatusForBim', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  getDeviceStatusPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('GetDeviceStatusPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  getDeviceUserInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('GetDeviceUserInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  getDeviceUserInfoPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('GetDeviceUserInfoPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverId - driverId. required.
   */
  getDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverId')) {
      throw new TypeError('parameter "DriverId" is required');
    }

    return this.request('GetDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverTemplateId - driverTemplateId. required.
   */
  getDriverTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverTemplateId')) {
      throw new TypeError('parameter "DriverTemplateId" is required');
    }

    return this.request('GetDriverTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. optional.
   */
  getDsl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetDsl', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. optional.
   */
  getDslPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetDslPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  getEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  getEdgeInstanceByGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('GetEdgeInstanceByGateway', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Project - project. required.
   * @param {String} LogStore - logStoreName. required.
   * @param {String} Query - query. optional.
   */
  getEdgeInstanceLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'LogStore')) {
      throw new TypeError('parameter "LogStore" is required');
    }

    return this.request('GetEdgeInstanceLogs', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} RouteId - routeId. required.
   */
  getEdgeInstanceMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RouteId')) {
      throw new TypeError('parameter "RouteId" is required');
    }

    return this.request('GetEdgeInstanceMessageRoute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  getEdgeInstanceSls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetEdgeInstanceSls', params, options);
  }

  /**
   * @param {String} NodeId - nodeId. optional.
   */
  getEdgeNode(params = {}, options = {}) {
    return this.request('GetEdgeNode', params, options);
  }

  /**
   * @param {String} NodeId - nodeId. optional.
   */
  getEdgeNodeBootstrapScript(params = {}, options = {}) {
    return this.request('GetEdgeNodeBootstrapScript', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} IotId - iotId. optional.
   */
  getGatewayBySubDevice(params = {}, options = {}) {
    return this.request('GetGatewayBySubDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   */
  getGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('GetGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} DriverId - driverId. required.
   */
  getGroupDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DriverId')) {
      throw new TypeError('parameter "DriverId" is required');
    }

    return this.request('GetGroupDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   */
  getGroupGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('GetGroupGateway', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Long} RouteId - routeId. required.
   */
  getGroupMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'RouteId')) {
      throw new TypeError('parameter "RouteId" is required');
    }

    return this.request('GetGroupMessageRoute', params, options);
  }

  /**
   * @param {RepeatList} RoleNameList - roleNameList. required.
   */
  getHaveRoleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleNameList')) {
      throw new TypeError('parameter "RoleNameList" is required');
    }

    return this.request('GetHaveRoleStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Json} IotId - iotIds. optional.
   */
  getMultiDeviceStatusForBim(params = {}, options = {}) {
    return this.request('GetMultiDeviceStatusForBim', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  getNetStatusReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKeyId')) {
      throw new TypeError('parameter "AccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('GetNetStatusReport', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverName - driverName. required.
   */
  getOfficialDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverName')) {
      throw new TypeError('parameter "DriverName" is required');
    }

    return this.request('GetOfficialDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getOnsInfoList(params = {}, options = {}) {
    return this.request('GetOnsInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RequestVersion - requestVersion. required.
   */
  getPortalClasicScenes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequestVersion')) {
      throw new TypeError('parameter "RequestVersion" is required');
    }

    return this.request('GetPortalClasicScenes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RequestVersion - requestVersion. required.
   */
  getPortalDescImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RequestVersion')) {
      throw new TypeError('parameter "RequestVersion" is required');
    }

    return this.request('GetPortalDescImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getPortalJsUrlsConfigForBIM(params = {}, options = {}) {
    return this.request('GetPortalJsUrlsConfigForBIM', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getProductList(params = {}, options = {}) {
    return this.request('GetProductList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   */
  getProductMeta(params = {}, options = {}) {
    return this.request('GetProductMeta', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  getProductPropertiesForBim(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetProductPropertiesForBim', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   */
  getRegisterAppService(params = {}, options = {}) {
    return this.request('GetRegisterAppService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  getRemoteDebugToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('GetRemoteDebugToken', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  getRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('GetRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ActionId - actionId. required.
   */
  getRuleAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionId')) {
      throw new TypeError('parameter "ActionId" is required');
    }

    return this.request('GetRuleAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ScriptId - scriptId. required.
   */
  getScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScriptId')) {
      throw new TypeError('parameter "ScriptId" is required');
    }

    return this.request('GetScript', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ScriptCode - scriptCode. required.
   */
  getScriptDraft(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScriptCode')) {
      throw new TypeError('parameter "ScriptCode" is required');
    }

    return this.request('GetScriptDraft', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ScriptCode - scriptCode. required.
   */
  getScriptDraftPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScriptCode')) {
      throw new TypeError('parameter "ScriptCode" is required');
    }

    return this.request('GetScriptDraftPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  getScriptGenerate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetScriptGenerate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  getScriptGeneratePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetScriptGeneratePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  getScriptGenerateStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetScriptGenerateStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  getScriptGenerateStatusPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('GetScriptGenerateStatusPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ScriptId - scriptId. required.
   */
  getScriptPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScriptId')) {
      throw new TypeError('parameter "ScriptId" is required');
    }

    return this.request('GetScriptPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   */
  getShareInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('GetShareInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   */
  getTask(params = {}, options = {}) {
    return this.request('GetTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Json} IdList - idList. optional.
   * @param {Json} NameList - nameList. optional.
   * @param {String} Search - search. optional.
   * @param {String} Type - type. optional.
   * @param {Json} Page - page. optional.
   * @param {Json} Order - order. optional.
   * @param {String} Env - env. optional.
   * @param {String} TaskStatus - taskStatus. optional.
   */
  getTaskList(params = {}, options = {}) {
    return this.request('GetTaskList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   */
  getTaskStatus(params = {}, options = {}) {
    return this.request('GetTaskStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} IotId - iotId. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getThingTopo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetThingTopo', params, options);
  }

  /**
   * @param {RepeatList} ServiceCodeList - serviceCodeList. required.
   */
  getUserBusinessEnabledStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceCodeList')) {
      throw new TypeError('parameter "ServiceCodeList" is required');
    }

    return this.request('GetUserBusinessEnabledStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getUserScenes(params = {}, options = {}) {
    return this.request('GetUserScenes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TslStr - tslStr. required.
   */
  importTsl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TslStr')) {
      throw new TypeError('parameter "TslStr" is required');
    }

    return this.request('ImportTsl', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Json} SceneDTO - sceneDTO. required.
   */
  initScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneDTO')) {
      throw new TypeError('parameter "SceneDTO" is required');
    }

    return this.request('InitScene', params, options);
  }

  /**
   * @param {String} Password - password. optional.
   */
  initializeAppImageRepoPassword(params = {}, options = {}) {
    return this.request('InitializeAppImageRepoPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Identifier - identifier. required.
   * @param {String} Args - args. required.
   */
  invokeThingService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'Args')) {
      throw new TypeError('parameter "Args" is required');
    }

    return this.request('InvokeThingService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Args - args. required.
   */
  invokeThingServicePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'Args')) {
      throw new TypeError('parameter "Args" is required');
    }

    return this.request('InvokeThingServicePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Args - args. required.
   */
  invokeThingsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'Args')) {
      throw new TypeError('parameter "Args" is required');
    }

    return this.request('InvokeThingsService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listAllCategory(params = {}, options = {}) {
    return this.request('ListAllCategory', params, options);
  }

  /**
   * @param {String} Type - type. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} DeploymentName - deploymentName. optional.
   * @param {String} Status - status. optional.
   * @param {String} Deployed - deployed. optional.
   * @param {Integer} LpRelatedNotIn - lpRelatedNotIn. optional.
   */
  listApp(params = {}, options = {}) {
    return this.request('ListApp', params, options);
  }

  /**
   * @param {String} Type - type. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} DeploymentName - deploymentName. optional.
   * @param {String} Status - status. optional.
   */
  listAppDeploymentRecord(params = {}, options = {}) {
    return this.request('ListAppDeploymentRecord', params, options);
  }

  /**
   * @param {String} DeploymentUuid - deploymentUuid. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAppDeploymentService(params = {}, options = {}) {
    return this.request('ListAppDeploymentService', params, options);
  }

  /**
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAppImageRepos(params = {}, options = {}) {
    return this.request('ListAppImageRepos', params, options);
  }

  /**
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Keyword - keyword. optional.
   */
  listAppKey(params = {}, options = {}) {
    return this.request('ListAppKey', params, options);
  }

  /**
   * @param {String} RepoName - repoName. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAppRepoTags(params = {}, options = {}) {
    return this.request('ListAppRepoTags', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   */
  listAppServiceGroup(params = {}, options = {}) {
    return this.request('ListAppServiceGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   */
  listAuthorizedPhoneNum(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    return this.request('ListAuthorizedPhoneNum', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleName - name. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  listAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('ListAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} Junior - junior. optional.
   * @param {String} ProductName - productName. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAvailableProducts(params = {}, options = {}) {
    return this.request('ListAvailableProducts', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  listCategory(params = {}, options = {}) {
    return this.request('ListCategory', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} CategoryType - categoryType. required.
   */
  listCategoryStdAbility(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CategoryType')) {
      throw new TypeError('parameter "CategoryType" is required');
    }

    return this.request('ListCategoryStdAbility', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listDeployDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListDeployDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AutomationRuleId - sceneId. required.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {String} TraceId - traceId. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  listDetailAutomationRuleLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AutomationRuleId')) {
      throw new TypeError('parameter "AutomationRuleId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'TraceId')) {
      throw new TypeError('parameter "TraceId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('ListDetailAutomationRuleLog', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} Type - type. optional.
   * @param {String} DriverName - name. optional.
   */
  listDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('ListDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} Type - type. optional.
   * @param {String} Name - name. optional.
   */
  listDriverTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('ListDriverTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} Page - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Protocol4ChildDevice - protocol4ChildDevice. optional.
   * @param {String} ServerName - serverName. optional.
   */
  listGatewayServerConfig(params = {}, options = {}) {
    return this.request('ListGatewayServerConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} Name - name. optional.
   * @param {Integer} Type - type. optional.
   */
  listGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('ListGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listGroupAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListGroupAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  listGroupDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListGroupDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listGroupDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListGroupDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} FunctionName - functionName. optional.
   */
  listGroupFunction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListGroupFunction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listGroupMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListGroupMessageRoute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} ProductKey - productKey. optional.
   */
  listGroupProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListGroupProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listGroupStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListGroupStream', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} CategoryType - categoryType. optional.
   * @param {String} Name - name. optional.
   */
  listOtherCategoryStdAbilityByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ListOtherCategoryStdAbilityByName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} CategoryType - categoryType. optional.
   * @param {String} Name - name. optional.
   */
  listPresentCategoryStdAbilityByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ListPresentCategoryStdAbilityByName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} Page - page. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} AliyunCommodityCode - aliyunCommodityCode. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} NodeType - nodeType. optional.
   * @param {Integer} Status - status. optional.
   */
  listProduct(params = {}, options = {}) {
    return this.request('ListProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  listProductCustomAbility(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ListProductCustomAbility', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  listProductStdAbility(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ListProductStdAbility', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  listProductTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ListProductTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  listRuleActions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('ListRuleActions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  listServerCallbacks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ListServerCallbacks', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} AbilityType - abilityType. required.
   * @param {String} Name - name. optional.
   */
  listStdAbility(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AbilityType')) {
      throw new TypeError('parameter "AbilityType" is required');
    }

    return this.request('ListStdAbility', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AutomationRuleId - sceneId. required.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {String} Status - status. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  listSummaryAutomationRuleLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AutomationRuleId')) {
      throw new TypeError('parameter "AutomationRuleId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('ListSummaryAutomationRuleLog', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SiteType - siteType. required.
   * @param {String} RuleDataFormat - ruleDataFormat. required.
   */
  listSupportedCloudProducts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SiteType')) {
      throw new TypeError('parameter "SiteType" is required');
    }

    if (!hasOwnProperty(params, 'RuleDataFormat')) {
      throw new TypeError('parameter "RuleDataFormat" is required');
    }

    return this.request('ListSupportedCloudProducts', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} LocatingInfo - locatingInfo. required.
   */
  locateDeviceByFingerprint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LocatingInfo')) {
      throw new TypeError('parameter "LocatingInfo" is required');
    }

    return this.request('LocateDeviceByFingerprint', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  modifyDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('ModifyDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} McAddress - mcAddress. required.
   * @param {String} MulticastMessage - multicastMessage. optional.
   */
  multicastMessagePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'McAddress')) {
      throw new TypeError('parameter "McAddress" is required');
    }

    return this.request('MulticastMessagePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceListStr - deviceListStr. optional.
   * @param {String} GwIotId - gwIotId. optional.
   * @param {String} GwProductKey - gwProductKey. optional.
   * @param {String} GwDeviceName - gwDeviceName. optional.
   */
  notifyAddThingTopo(params = {}, options = {}) {
    return this.request('NotifyAddThingTopo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Count - count. required.
   */
  openBatchRegisterDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('OpenBatchRegisterDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} applyId - ApplyId. required.
   */
  openBatchRegisterDeviceWithApplyId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'applyId')) {
      throw new TypeError('parameter "applyId" is required');
    }

    return this.request('OpenBatchRegisterDeviceWithApplyId', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {RepeatList} DeviceName - deviceNames. required.
   */
  openBatchRegisterDeviceWithNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('OpenBatchRegisterDeviceWithNames', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  openDeleteDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('OpenDeleteDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  openDisableThing(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('OpenDisableThing', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  openEnableThing(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('OpenEnableThing', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  openGetDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('OpenGetDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ThingMethod - thingMethod. required.
   * @param {String} Args - args. required.
   */
  openInvokeThingService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ThingMethod')) {
      throw new TypeError('parameter "ThingMethod" is required');
    }

    if (!hasOwnProperty(params, 'Args')) {
      throw new TypeError('parameter "Args" is required');
    }

    return this.request('OpenInvokeThingService', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   */
  openLinkFaceService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('OpenLinkFaceService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} ApplyId - applyId. required.
   */
  openQueryBatchRegisterDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('OpenQueryBatchRegisterDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  openQueryDeviceDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('OpenQueryDeviceDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} EventType - eventType. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Identifier - identifier. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  openQueryDeviceEventData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OpenQueryDeviceEventData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  openQueryDevicePropertyData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Asc')) {
      throw new TypeError('parameter "Asc" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('OpenQueryDevicePropertyData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  openQueryDevicePropertyStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('OpenQueryDevicePropertyStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Identifier - identifier. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  openQueryDeviceServiceData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('OpenQueryDeviceServiceData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  openQueryDeviceStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('OpenQueryDeviceStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  openQueryProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('OpenQueryProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} Page - page. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  openQueryProductList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('OpenQueryProductList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. optional.
   */
  openRegisterDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('OpenRegisterDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Items - items. required.
   */
  openSetDeviceProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Items')) {
      throw new TypeError('parameter "Items" is required');
    }

    return this.request('OpenSetDeviceProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} OutputJson - outputJson. required.
   */
  postDeviceEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'OutputJson')) {
      throw new TypeError('parameter "OutputJson" is required');
    }

    return this.request('PostDeviceEvents', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} OutputJson - outputJson. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} Delay - delay. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {Integer} Count - count. optional.
   */
  postDeviceEventsRegularly(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'OutputJson')) {
      throw new TypeError('parameter "OutputJson" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('PostDeviceEventsRegularly', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} PropertyJson - propertyJson. required.
   */
  postDeviceProperties(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'PropertyJson')) {
      throw new TypeError('parameter "PropertyJson" is required');
    }

    return this.request('PostDeviceProperties', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} PropertyJson - propertyJson. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. optional.
   * @param {Integer} Delay - delay. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {Integer} Count - count. optional.
   */
  postDevicePropertiesRegularly(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'PropertyJson')) {
      throw new TypeError('parameter "PropertyJson" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('PostDevicePropertiesRegularly', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Qos - qos. optional. default: 0.
   * @param {String} TopicFullName - topicFullName. required.
   * @param {String} MessageContent - messageContent. required.
   */
  pub(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'MessageContent')) {
      throw new TypeError('parameter "MessageContent" is required');
    }

    return this.request('Pub', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TopicFullName - topicFullName. required.
   * @param {String} MessageContent - messageContent. required.
   */
  pubBroadcast(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TopicFullName')) {
      throw new TypeError('parameter "TopicFullName" is required');
    }

    if (!hasOwnProperty(params, 'MessageContent')) {
      throw new TypeError('parameter "MessageContent" is required');
    }

    return this.request('PubBroadcast', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GeoProjectId - geoProjectId. required.
   */
  publishGeoProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    return this.request('PublishGeoProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. optional.
   */
  publishScene(params = {}, options = {}) {
    return this.request('PublishScene', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   */
  publishTask(params = {}, options = {}) {
    return this.request('PublishTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  pushDeviceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('PushDeviceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  pushThingConfig(params = {}, options = {}) {
    return this.request('PushThingConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} Scope - scope. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  pushThingConfigPop(params = {}, options = {}) {
    return this.request('PushThingConfigPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryAlinkTopicList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryAlinkTopicList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AliyunPk - aliyunPk. optional.
   */
  queryAliyunUserInfo(params = {}, options = {}) {
    return this.request('QueryAliyunUserInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryAllDeviceListByAuthProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryAllDeviceListByAuthProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryAllProductList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryAllProductList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Name - name. optional.
   */
  queryAllProductListPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryAllProductListPop', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. required.
   * @param {String} Name - name. optional.
   * @param {String} Metric - metric. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} PageNo - pageNo. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  queryAppAlarmList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUuid')) {
      throw new TypeError('parameter "AppUuid" is required');
    }

    return this.request('QueryAppAlarmList', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {String} DeploymentName - deploymentName. optional.
   * @param {String} AppUuid - appUuid. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryAppAuthorization(params = {}, options = {}) {
    return this.request('QueryAppAuthorization', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} ToUserLoginId - toUserLoginId. optional.
   */
  queryAppDeviceAuthorization(params = {}, options = {}) {
    return this.request('QueryAppDeviceAuthorization', params, options);
  }

  /**
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {RepeatList} ProductKeyList - productKeyList. optional.
   * @param {RepeatList} CategoryKeyList - categoryKeyList. optional.
   * @param {RepeatList} TagList - tagList. optional.
   * @param {String} AppKey - appKey. optional.
   */
  queryAppDeviceList(params = {}, options = {}) {
    return this.request('QueryAppDeviceList', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Period - period. required.
   * @param {RepeatList} Metrics - metrics. optional.
   * @param {String} Project - project. required.
   * @param {String} GroupName - groupName. required.
   */
  queryAppMonitorMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppUuid')) {
      throw new TypeError('parameter "AppUuid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('QueryAppMonitorMetric', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {String} DeploymentUuid - deploymentUuid. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryAppOwnerDeviceList(params = {}, options = {}) {
    return this.request('QueryAppOwnerDeviceList', params, options);
  }

  /**
   * @param {String} DeviceType - deviceType. optional.
   */
  queryAppUnifyEvent(params = {}, options = {}) {
    return this.request('QueryAppUnifyEvent', params, options);
  }

  /**
   * @param {String} DeviceType - deviceType. optional.
   */
  queryAppUnifyProperty(params = {}, options = {}) {
    return this.request('QueryAppUnifyProperty', params, options);
  }

  /**
   * @param {String} AppConfigId - appConfigId. optional.
   */
  queryAppVirtualDeviceConfig(params = {}, options = {}) {
    return this.request('QueryAppVirtualDeviceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} TargetAliyunPk - targetAliyunPk. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryAuthorizeDevicePage(params = {}, options = {}) {
    return this.request('QueryAuthorizeDevicePage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} TargetAliyunPk - targetAliyunPk. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} AuthType - authType. optional.
   */
  queryAuthorizeProductPage(params = {}, options = {}) {
    return this.request('QueryAuthorizeProductPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleName - name. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  queryAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApplyId - applyId. required.
   */
  queryBatchApplyDeviceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryBatchApplyDeviceList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} ApplyId - applyId. required.
   */
  queryBatchCheckDeviceNamesStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryBatchCheckDeviceNamesStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ApplyId - applyId. required.
   */
  queryBatchCreateDeviceDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryBatchCreateDeviceDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ApplyId - applyId. required.
   */
  queryBatchCreateDeviceDetailPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryBatchCreateDeviceDetailPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} ApplyId - applyId. required.
   */
  queryBatchCreateDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryBatchCreateDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} ApplyId - applyId. required.
   */
  queryBatchCreateDeviceStatusPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryBatchCreateDeviceStatusPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} ApplyId - applyId. required.
   */
  queryBatchRegisterDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryBatchRegisterDeviceStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GwProductKey - gwProductKey. required.
   * @param {String} GwDeviceName - gwDeviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryChildDeviceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwProductKey')) {
      throw new TypeError('parameter "GwProductKey" is required');
    }

    if (!hasOwnProperty(params, 'GwDeviceName')) {
      throw new TypeError('parameter "GwDeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryChildDeviceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ConfigId - configId. required.
   * @param {Boolean} ContainedOssUrl - containedOssUrl. required.
   */
  queryConfigByConfigId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    if (!hasOwnProperty(params, 'ContainedOssUrl')) {
      throw new TypeError('parameter "ContainedOssUrl" is required');
    }

    return this.request('QueryConfigByConfigId', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ConfigId - configId. required.
   * @param {Boolean} ContainedOssUrl - containedOssUrl. required.
   */
  queryConfigByConfigIdPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    if (!hasOwnProperty(params, 'ContainedOssUrl')) {
      throw new TypeError('parameter "ContainedOssUrl" is required');
    }

    return this.request('QueryConfigByConfigIdPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   */
  queryDataHubProjectsForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryDataHubProjectsForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} ProjectName - projectName. required.
   * @param {String} TopicName - topicName. required.
   */
  queryDataHubSchemasForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'TopicName')) {
      throw new TypeError('parameter "TopicName" is required');
    }

    return this.request('QueryDataHubSchemasForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} ProjectName - projectName. required.
   */
  queryDataHubTopicsForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('QueryDataHubTopicsForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryDebugOnlineLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDebugOnlineLog', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleId - sceneId. required.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {String} TraceId - traceId. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  queryDetailAutomationRuleLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'TraceId')) {
      throw new TypeError('parameter "TraceId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryDetailAutomationRuleLog', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  queryDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} AttributeCode - attributeCode. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryDeviceAttrData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'AttributeCode')) {
      throw new TypeError('parameter "AttributeCode" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Asc')) {
      throw new TypeError('parameter "Asc" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryDeviceAttrData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} AttributeCode - attributeCode. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. required.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryDeviceAttrDataPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'AttributeCode')) {
      throw new TypeError('parameter "AttributeCode" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Asc')) {
      throw new TypeError('parameter "Asc" is required');
    }

    return this.request('QueryDeviceAttrDataPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDeviceAttrStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceAttrStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDeviceAttrStatusPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceAttrStatusPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApplyId - applyId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} Active - active. optional.
   */
  queryDeviceBatchInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDeviceBatchInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  queryDeviceBatchList(params = {}, options = {}) {
    return this.request('QueryDeviceBatchList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} IndistinctDevName - indistinctDevName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {RepeatList} FirmwareVersion - firmwareVersions. required.
   */
  queryDeviceByPkAndVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareVersion')) {
      throw new TypeError('parameter "FirmwareVersion" is required');
    }

    return this.request('QueryDeviceByPkAndVersion', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  queryDeviceByTags(params = {}, options = {}) {
    return this.request('QueryDeviceByTags', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDeviceDebugStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceDebugStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryDeviceDetail(params = {}, options = {}) {
    return this.request('QueryDeviceDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDeviceDetailPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceDetailPop', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDeviceEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDeviceEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Identifier - identifier. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryDeviceEventData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryDeviceEventData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} EventType - eventType. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Identifier - identifier. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryDeviceEventDataPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryDeviceEventDataPop', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDeviceEventPicture(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDeviceEventPicture', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDeviceEventRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDeviceEventRecord', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDeviceFileVod(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDeviceFileVod', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDeviceGroupByDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceGroupByDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupName - groupName. required.
   */
  queryDeviceGroupByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('QueryDeviceGroupByName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  queryDeviceGroupInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('QueryDeviceGroupInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SuperGroupId - superGroupId. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  queryDeviceGroupList(params = {}, options = {}) {
    return this.request('QueryDeviceGroupList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  queryDeviceGroupTagList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('QueryDeviceGroupTagList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SuperGroupId - superGroupId. optional.
   * @param {String} GroupName - groupName. optional.
   */
  queryDeviceGroupTree(params = {}, options = {}) {
    return this.request('QueryDeviceGroupTree', params, options);
  }

  /**
   */
  queryDeviceList(params = {}, options = {}) {
    return this.request('QueryDeviceList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Type - type. required.
   * @param {String} DeviceName - deviceName. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryDeviceListByAuthProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('QueryDeviceListByAuthProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} GroupId - groupId. required.
   */
  queryDeviceListByDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('QueryDeviceListByDeviceGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} Status - status. optional.
   * @param {String} GeoProjectId - geoProjectId. required.
   * @param {Json} ProductKeyList - productKeyList. optional.
   */
  queryDeviceLocationByGroupPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    return this.request('QueryDeviceLocationByGroupPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Status - status. optional.
   */
  queryDeviceLocationByProductPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('QueryDeviceLocationByProductPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Status - status. optional.
   * @param {RepeatList} Tag - tags. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} AliyunCommodityCode - aliyunCommodityCode. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  queryDevicePage(params = {}, options = {}) {
    return this.request('QueryDevicePage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Status - status. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} AliyunCommodityCode - aliyunCommodityCode. optional.
   */
  queryDevicePageForBim(params = {}, options = {}) {
    return this.request('QueryDevicePageForBim', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryDevicePagePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryDevicePagePop', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDevicePictureFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDevicePictureFile', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDevicePictureLifeCycle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDevicePictureLifeCycle', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   */
  queryDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDeviceProp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {RepeatList} Identifier - identifiers. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryDevicePropertiesData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Asc')) {
      throw new TypeError('parameter "Asc" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryDevicePropertiesData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} Status - status. optional.
   * @param {String} GeoProjectId - geoProjectId. required.
   * @param {String} AttributeCode - attributeCode. required.
   * @param {Json} ProductKeyList - productKeyList. optional.
   */
  queryDevicePropertyByGroupPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    if (!hasOwnProperty(params, 'AttributeCode')) {
      throw new TypeError('parameter "AttributeCode" is required');
    }

    return this.request('QueryDevicePropertyByGroupPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} GroupId - groupId. required.
   * @param {String} Status - status. optional.
   * @param {String} GeoProjectId - geoProjectId. optional.
   * @param {String} AttributeCode - attributeCode. required.
   */
  queryDevicePropertyByProductPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AttributeCode')) {
      throw new TypeError('parameter "AttributeCode" is required');
    }

    return this.request('QueryDevicePropertyByProductPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Identifier - identifier. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryDevicePropertyData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Asc')) {
      throw new TypeError('parameter "Asc" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryDevicePropertyData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryDevicePropertyDataPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Asc')) {
      throw new TypeError('parameter "Asc" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryDevicePropertyDataPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryDevicePropertyStatus(params = {}, options = {}) {
    return this.request('QueryDevicePropertyStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDevicePropertyStatusPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDevicePropertyStatusPop', params, options);
  }

  /**
   */
  queryDeviceRecordLifeCycle(params = {}, options = {}) {
    return this.request('QueryDeviceRecordLifeCycle', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Identifier - identifier. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryDeviceServiceData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryDeviceServiceData', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Identifier - identifier. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Asc - asc. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryDeviceServiceDataPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryDeviceServiceDataPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   */
  queryDeviceStatistics(params = {}, options = {}) {
    return this.request('QueryDeviceStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   */
  queryDeviceStatisticsPop(params = {}, options = {}) {
    return this.request('QueryDeviceStatisticsPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryDeviceTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryDeviceTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   */
  queryDeviceUpgradeCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    return this.request('QueryDeviceUpgradeCount', params, options);
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
   * @param {String} ProductKey - productKey. required.
   */
  queryDeviceVersionCountByPk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDeviceVersionCountByPk', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryDiffTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryDiffTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} Type - type. optional.
   * @param {String} DriverName - name. optional.
   */
  queryDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryDynamicRegisterSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryDynamicRegisterSwitch', params, options);
  }

  /**
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Keywords - keywords. optional.
   */
  queryEdgeClusterList(params = {}, options = {}) {
    return this.request('QueryEdgeClusterList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} Name - name. optional.
   * @param {Integer} Type - type. optional.
   */
  queryEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryEdgeInstanceAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryEdgeInstanceAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryEdgeInstanceDeployDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryEdgeInstanceDeployDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryEdgeInstanceDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryEdgeInstanceDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  queryEdgeInstanceDeviceByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryEdgeInstanceDeviceByName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} FunctionName - functionName. optional.
   */
  queryEdgeInstanceFunction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryEdgeInstanceFunction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  queryEdgeInstanceGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryEdgeInstanceGateway', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryEdgeInstanceMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryEdgeInstanceMessageRoute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} ProductKey - productKey. optional.
   */
  queryEdgeInstanceProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryEdgeInstanceProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryEdgeInstanceStream(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryEdgeInstanceStream', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} Name - name. optional.
   * @param {Integer} Type - type. optional.
   */
  queryEdgeInstanceWithGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QueryEdgeInstanceWithGateway', params, options);
  }

  /**
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Keywords - keywords. optional.
   */
  queryEdgeNodeList(params = {}, options = {}) {
    return this.request('QueryEdgeNodeList', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryEventRecordPlanByDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryEventRecordPlanByDevice', params, options);
  }

  /**
   */
  queryEventRecordPlanDetail(params = {}, options = {}) {
    return this.request('QueryEventRecordPlanDetail', params, options);
  }

  /**
   */
  queryEventRecordPlanDevices(params = {}, options = {}) {
    return this.request('QueryEventRecordPlanDevices', params, options);
  }

  /**
   */
  queryEventRecordPlans(params = {}, options = {}) {
    return this.request('QueryEventRecordPlans', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} ServiceName - serviceName. required.
   */
  queryFcFunctionsForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    return this.request('QueryFcFunctionsForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   */
  queryFcServicesForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryFcServicesForRule', params, options);
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
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} DeleteStatus - deleteStatus. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} FirmVersion - firmVersion. optional.
   */
  queryFirmwareByUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeleteStatus')) {
      throw new TypeError('parameter "DeleteStatus" is required');
    }

    return this.request('QueryFirmwareByUid', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  queryFirmwareList(params = {}, options = {}) {
    return this.request('QueryFirmwareList', params, options);
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
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Code - code. required.
   */
  queryGatewayServerConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    return this.request('QueryGatewayServerConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} GeoProjectId - geoProjectId. optional.
   * @param {String} IotId - iotId. required.
   */
  queryGeoDeviceProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryGeoDeviceProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} DeviceGroupId - deviceGroupId. optional.
   * @param {String} Status - status. optional.
   * @param {String} GeoProjectId - geoProjectId. required.
   * @param {Json} ProductAttributesMap - productAttributesMap. required.
   */
  queryGeoDevicePropertyByPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ProductAttributesMap')) {
      throw new TypeError('parameter "ProductAttributesMap" is required');
    }

    return this.request('QueryGeoDevicePropertyByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GeoProjectId - geoProjectId. required.
   */
  queryGeoProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    return this.request('QueryGeoProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  queryGeoProjectList(params = {}, options = {}) {
    return this.request('QueryGeoProjectList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} InstanceId - instanceId. required.
   */
  queryHitsInstanceForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryHitsInstanceForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  queryHitsInstancePageForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryHitsInstancePageForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   */
  queryHitsRegionsForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryHitsRegionsForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} InstanceId - instanceId. required.
   */
  queryHitsSecurityIpForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryHitsSecurityIpForRule', params, options);
  }

  /**
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryLinkFaceActiveCodeInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryLinkFaceActiveCodeInfo', params, options);
  }

  /**
   * @param {RepeatList} ProductKeys - productKeys. required.
   */
  queryLinkFaceConsumerByCodes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKeys')) {
      throw new TypeError('parameter "ProductKeys" is required');
    }

    return this.request('QueryLinkFaceConsumerByCodes', params, options);
  }

  /**
   * @param {Integer} LicenseType - licenseType. optional.
   * @param {Integer} CurrentPage - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryLinkFaceLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryLinkFaceLicense', params, options);
  }

  /**
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} CategoryName - categoryName. required.
   */
  queryLinkFaceProductInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CategoryName')) {
      throw new TypeError('parameter "CategoryName" is required');
    }

    return this.request('QueryLinkFaceProductInfo', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryLiveStreaming(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryLiveStreaming', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} From - from. required.
   * @param {Long} To - to. required.
   * @param {String} KeyWords - keyWords. optional.
   * @param {String} Bizcode - bizcode. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} MessageId - messageId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  queryLogPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    if (!hasOwnProperty(params, 'To')) {
      throw new TypeError('parameter "To" is required');
    }

    if (!hasOwnProperty(params, 'Bizcode')) {
      throw new TypeError('parameter "Bizcode" is required');
    }

    return this.request('QueryLogPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UniMsgId - uniMsgId. required.
   */
  queryMessageInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UniMsgId')) {
      throw new TypeError('parameter "UniMsgId" is required');
    }

    return this.request('QueryMessageInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   */
  queryMnsTopicsForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryMnsTopicsForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryModelConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryModelConfig', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryMonthRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryMonthRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   */
  queryMqRegionsForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryMqRegionsForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   */
  queryMqTopicsForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryMqTopicsForRule', params, options);
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
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} ApplyId - applyId. required.
   */
  queryPageByApplyId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryPageByApplyId', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryPictureFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryPictureFiles', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryProductAbilityList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryProductAbilityList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryProductAbilityListPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryProductAbilityListPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryProductAllInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryProductAllInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   */
  queryProductByUserId(params = {}, options = {}) {
    return this.request('QueryProductByUserId', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Identifier - identifier. required.
   */
  queryProductEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('QueryProductEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Identifier - identifier. required.
   */
  queryProductEventPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('QueryProductEventPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} AliyunCommodityCode - aliyunCommodityCode. optional.
   */
  queryProductList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryProductList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} GeoProjectId - geoProjectId. optional.
   */
  queryProductListByGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('QueryProductListByGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} Page - page. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} AliyunCommodityCode - aliyunCommodityCode. optional.
   * @param {String} Name - name. optional.
   */
  queryProductListPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Page')) {
      throw new TypeError('parameter "Page" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryProductListPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryProductPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryProductPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Identifier - identifier. required.
   */
  queryProductProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('QueryProductProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Identifier - identifier. required.
   */
  queryProductPropertyPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('QueryProductPropertyPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Identifier - identifier. required.
   */
  queryProductService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('QueryProductService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Identifier - identifier. required.
   */
  queryProductServicePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('QueryProductServicePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryProductTopic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryProductTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryProductWithScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryProductWithScript', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} OsType - osType. optional.
   * @param {Integer} ProtocolType - protocolType. optional.
   * @param {Integer} LanguageType - languageType. optional.
   */
  queryQuickStartSdk(params = {}, options = {}) {
    return this.request('QueryQuickStartSdk', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} DbInstanceId - dbInstanceId. required.
   */
  queryRdsAccountsForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'DbInstanceId')) {
      throw new TypeError('parameter "DbInstanceId" is required');
    }

    return this.request('QueryRdsAccountsForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} DbInstanceId - dbInstanceId. required.
   */
  queryRdsDatabasesForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'DbInstanceId')) {
      throw new TypeError('parameter "DbInstanceId" is required');
    }

    return this.request('QueryRdsDatabasesForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  queryRdsInstancePageForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryRdsInstancePageForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   */
  queryRdsRegionsForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryRdsRegionsForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryReceivedAuthProductList(params = {}, options = {}) {
    return this.request('QueryReceivedAuthProductList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} currentPage - currentPage. optional.
   * @param {Integer} pageSize - pageSize. optional.
   */
  queryReceivedTransferApplyList(params = {}, options = {}) {
    return this.request('QueryReceivedTransferApplyList', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryRecord', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryRecordPlanByDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryRecordPlanByDevice', params, options);
  }

  /**
   */
  queryRecordPlanDetail(params = {}, options = {}) {
    return this.request('QueryRecordPlanDetail', params, options);
  }

  /**
   */
  queryRecordPlanDevices(params = {}, options = {}) {
    return this.request('QueryRecordPlanDevices', params, options);
  }

  /**
   */
  queryRecordPlans(params = {}, options = {}) {
    return this.request('QueryRecordPlans', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryRecordUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryRecordUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryReducedTsl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryReducedTsl', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductCode - productCode. required.
   */
  queryRuleForwardCloudRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    return this.request('QueryRuleForwardCloudRegion', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Type - type. required.
   */
  queryRulengSysTopics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('QueryRulengSysTopics', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  querySecureUpgradePublicKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QuerySecureUpgradePublicKey', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ServeId - serveId. required.
   */
  queryServeById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServeId')) {
      throw new TypeError('parameter "ServeId" is required');
    }

    return this.request('QueryServeById', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {RepeatList} ExclusionServe - exclusionServes. optional.
   */
  queryServeList(params = {}, options = {}) {
    return this.request('QueryServeList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  queryServerCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('QueryServerCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  queryStandardUnit(params = {}, options = {}) {
    return this.request('QueryStandardUnit', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} AbilityType - abilityType. required.
   * @param {String} DeviceType - deviceType. required.
   * @param {String} Identifier - identifier. required.
   */
  queryStdAbilityInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AbilityType')) {
      throw new TypeError('parameter "AbilityType" is required');
    }

    if (!hasOwnProperty(params, 'DeviceType')) {
      throw new TypeError('parameter "DeviceType" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('QueryStdAbilityInfo', params, options);
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
   * @param {String} DeviceName - deviceName. required.
   * @param {String} SubDeviceName - subDeviceName. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  querySubDeviceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QuerySubDeviceList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} SubDeviceName - subDeviceName. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  querySubDeviceListPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QuerySubDeviceListPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleId - sceneId. required.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {String} Status - status. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   */
  querySummaryAutomationRuleLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QuerySummaryAutomationRuleLog', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   */
  querySuperDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('QuerySuperDeviceGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   */
  queryTableStoreInstancesForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    return this.request('QueryTableStoreInstancesForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} InstanceName - instanceName. required.
   * @param {String} TableName - tableName. required.
   */
  queryTableStorePrimaryKeysForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    return this.request('QueryTableStorePrimaryKeysForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} RegionName - regionName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleArn - roleArn. required.
   * @param {String} InstanceName - instanceName. required.
   */
  queryTableStoreTablesForRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    return this.request('QueryTableStoreTablesForRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Scope - scope. optional.
   * @param {Boolean} ContainedOssUrl - containedOssUrl. optional.
   * @param {Integer} Status - status. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryThingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryThingConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} Scope - scope. optional.
   * @param {Boolean} ContainedOssUrl - containedOssUrl. optional.
   * @param {Integer} Status - status. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryThingConfigPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryThingConfigPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Identifier - identifier. required.
   * @param {String} Scope - scope. optional.
   * @param {String} Type - type. optional.
   */
  queryThingFunctionSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('QueryThingFunctionSwitch', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Identifier - identifier. required.
   * @param {String} Scope - scope. optional.
   * @param {String} Type - type. optional.
   */
  queryThingFunctionSwitchPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('QueryThingFunctionSwitchPop', params, options);
  }

  /**
   */
  queryTimeTemplate(params = {}, options = {}) {
    return this.request('QueryTimeTemplate', params, options);
  }

  /**
   */
  queryTimeTemplateDetail(params = {}, options = {}) {
    return this.request('QueryTimeTemplateDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Topic - topic. required.
   */
  queryTopicReverseRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('QueryTopicReverseRouteTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Topic - topic. required.
   */
  queryTopicRouteTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('QueryTopicRouteTable', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryTransferApplyByPage(params = {}, options = {}) {
    return this.request('QueryTransferApplyByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApplyId - applyId. required.
   * @param {String} deviceName - deviceName. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryTransferDeviceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('QueryTransferDeviceList', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} ServiceCode - serviceCode. optional.
   * @param {Integer} AccessMethod - accessMethod. optional.
   * @param {RepeatList} ServiceCodes - serviceCodes. optional.
   */
  queryUnimportedProducts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryUnimportedProducts', params, options);
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
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  queryVirtualDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('QueryVirtualDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductName - productName. required.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} DevicePropJson - devicePropJson. optional.
   */
  quickStart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    return this.request('QuickStart', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Timeout - timeout. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Topic - topic. optional.
   * @param {String} RequestBase64Byte - requestBase64Byte. required.
   */
  rRpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Timeout')) {
      throw new TypeError('parameter "Timeout" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'RequestBase64Byte')) {
      throw new TypeError('parameter "RequestBase64Byte" is required');
    }

    return this.request('RRpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. required.
   */
  reUpgradeDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('ReUpgradeDevices', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   * @param {String} ServiceName - serviceName. optional.
   */
  rebootApp(params = {}, options = {}) {
    return this.request('RebootApp', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} Protocol - protocol. optional.
   * @param {String} Method - method. optional.
   * @param {String} CreateInstanceUri - createInstanceUri. optional.
   * @param {String} DeleteInstanceUri - deleteInstanceUri. optional.
   * @param {String} GetSsoUrlUri - getSsoUrlUri. optional.
   * @param {String} BindUserDeviceUri - bindUserDeviceUri. optional.
   * @param {String} UnbindUserDeviceUri - unbindUserDeviceUri. optional.
   */
  registerAppService(params = {}, options = {}) {
    return this.request('RegisterAppService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. optional.
   */
  registerDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('RegisterDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. optional.
   */
  registerDevicePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('RegisterDevicePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   * @param {String} Phone - phone. required.
   * @param {String} SysCode - sysCode. optional.
   */
  registerPhoneNumToOa(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    return this.request('RegisterPhoneNumToOa', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ApplyId - applyId. required.
   */
  rejectTransfer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApplyId')) {
      throw new TypeError('parameter "ApplyId" is required');
    }

    return this.request('RejectTransfer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} Template - template. optional.
   * @param {String} TemplateName - templateName. optional.
   * @param {String} TemplateIdentifier - templateIdentifier. optional.
   * @param {String} CategoryKey - categoryKey. optional.
   * @param {String} CategoryName - categoryName. optional.
   */
  releaseProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ReleaseProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  removeThingTopo(params = {}, options = {}) {
    return this.request('RemoveThingTopo', params, options);
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
   * @param {String} InstanceId - instanceId. required.
   */
  resetEdgeInstanceDeployments(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ResetEdgeInstanceDeployments', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   */
  resetGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ResetGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   */
  resetProductSecret(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('ResetProductSecret', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} IotId - iotId. optional.
   */
  resetThing(params = {}, options = {}) {
    return this.request('ResetThing', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {Long} TaskId - taskId. required.
   */
  retryDiff(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('RetryDiff', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Input - input. required.
   * @param {String} ScriptContent - scriptContent. required.
   * @param {Integer} Type - type. required.
   * @param {String} ScriptType - scriptType. required.
   */
  runScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'ScriptContent')) {
      throw new TypeError('parameter "ScriptContent" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    return this.request('RunScript', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Input - input. required.
   * @param {String} ScriptContent - scriptContent. required.
   * @param {Integer} Type - type. required.
   * @param {String} ScriptType - scriptType. required.
   */
  runScriptPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Input')) {
      throw new TypeError('parameter "Input" is required');
    }

    if (!hasOwnProperty(params, 'ScriptContent')) {
      throw new TypeError('parameter "ScriptContent" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    return this.request('RunScriptPop', params, options);
  }

  /**
   * @param {String} AppConfigId - appConfigId. optional.
   * @param {String} Position - position. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} Description - description. optional.
   * @param {RepeatList} NodeList - nodeList. optional.
   * @param {RepeatList} NodeRelation - nodeRelation. optional.
   * @param {RepeatList} PropertyList - propertyList. optional.
   */
  saveAppConfig(params = {}, options = {}) {
    return this.request('SaveAppConfig', params, options);
  }

  /**
   * @param {String} AppConfigId - appConfigId. optional.
   * @param {String} NodeId - nodeId. optional.
   * @param {RepeatList} PropertyList - propertyList. optional.
   */
  saveAppNodeProperty(params = {}, options = {}) {
    return this.request('SaveAppNodeProperty', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   * @param {String} AppConfigId - appConfigId. optional.
   * @param {String} FrequenceUnit - frequenceUnit. optional.
   * @param {Integer} Frequence - frequence. optional.
   * @param {Integer} DeviceNumber - deviceNumber. optional.
   * @param {String} TargetType - targetType. optional.
   * @param {String} Target - target. optional.
   * @param {String} TargetName - targetName. optional.
   * @param {String} PropertyPostRuleList - propertyPostRuleList. optional.
   * @param {String} EventPostRuleList - eventPostRuleList. optional.
   * @param {RepeatList} DeviceTagList - deviceTagList. optional.
   * @param {String} Name - name. optional.
   * @param {Boolean} Taged - taged. optional.
   */
  saveAppVirtualDeviceConfig(params = {}, options = {}) {
    return this.request('SaveAppVirtualDeviceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Props - props. required.
   */
  saveDeviceProp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Props')) {
      throw new TypeError('parameter "Props" is required');
    }

    return this.request('SaveDeviceProp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} MapConfig - mapConfig. required.
   * @param {String} GeoProjectId - geoProjectId. required.
   */
  saveMapConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MapConfig')) {
      throw new TypeError('parameter "MapConfig" is required');
    }

    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    return this.request('SaveMapConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Json} BindSceneDTO - bindSceneDTO. required.
   */
  saveScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BindSceneDTO')) {
      throw new TypeError('parameter "BindSceneDTO" is required');
    }

    return this.request('SaveScene', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} MnsConfiguration - mnsConfiguration. optional.
   * @param {Integer} CallbackType - callbackType. required.
   */
  saveServerCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'CallbackType')) {
      throw new TypeError('parameter "CallbackType" is required');
    }

    return this.request('SaveServerCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   * @param {String} Phones - phones. required.
   * @param {Long} ExpiredTime - expiredTime. optional.
   * @param {String} SysCode - sysCode. optional.
   */
  saveShareInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'Phones')) {
      throw new TypeError('parameter "Phones" is required');
    }

    return this.request('SaveShareInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ServeId - serveId. required.
   * @param {String} Status - status. required.
   */
  saveUserServeStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServeId')) {
      throw new TypeError('parameter "ServeId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SaveUserServeStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} TagString - tagString. optional.
   */
  setDeviceGroupTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('SetDeviceGroupTags', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  setDevicePictureLifeCycle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('SetDevicePictureLifeCycle', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} PropInfo - propInfo. required.
   */
  setDevicePropPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'PropInfo')) {
      throw new TypeError('parameter "PropInfo" is required');
    }

    return this.request('SetDevicePropPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} Items - items. required.
   */
  setDeviceProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Items')) {
      throw new TypeError('parameter "Items" is required');
    }

    return this.request('SetDeviceProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Items - items. required.
   */
  setDevicePropertyPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Items')) {
      throw new TypeError('parameter "Items" is required');
    }

    return this.request('SetDevicePropertyPop', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  setDeviceRecordLifeCycle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('SetDeviceRecordLifeCycle', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} IotId - iotId. required.
   * @param {Json} DeviceStatus - deviceStatus. optional.
   */
  setDeviceStatusForBim(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('SetDeviceStatusForBim', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  setDeviceStorageLifeCycle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('SetDeviceStorageLifeCycle', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} DeviceName - deviceNames. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Items - items. required.
   */
  setDevicesProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Items')) {
      throw new TypeError('parameter "Items" is required');
    }

    return this.request('SetDevicesProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} Status - status. required.
   */
  setDynamicRegisterSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetDynamicRegisterSwitch', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DriverId - driverId. required.
   */
  setEdgeInstanceDeviceDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DriverId')) {
      throw new TypeError('parameter "DriverId" is required');
    }

    return this.request('SetEdgeInstanceDeviceDriver', params, options);
  }

  /**
   */
  setEventRecordPlan(params = {}, options = {}) {
    return this.request('SetEventRecordPlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Json} Items - items. required.
   * @param {String} GeoProjectId - geoProjectId. required.
   * @param {String} IotId - iotId. required.
   */
  setGeoDeviceProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Items')) {
      throw new TypeError('parameter "Items" is required');
    }

    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('SetGeoDeviceProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  setLinkPlatformServiceOpen(params = {}, options = {}) {
    return this.request('SetLinkPlatformServiceOpen', params, options);
  }

  /**
   */
  setRecordPlan(params = {}, options = {}) {
    return this.request('SetRecordPlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Identifier - identifier. required.
   * @param {Integer} Status - status. required.
   * @param {String} Scope - scope. optional.
   * @param {String} Type - type. optional.
   */
  setThingFunctionSwitchStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetThingFunctionSwitchStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Identifier - identifier. required.
   * @param {Integer} Status - status. required.
   * @param {String} Scope - scope. optional.
   * @param {String} Type - type. optional.
   */
  setThingFunctionSwitchStatusPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetThingFunctionSwitchStatusPop', params, options);
  }

  /**
   */
  setTimeTemplate(params = {}, options = {}) {
    return this.request('SetTimeTemplate', params, options);
  }

  /**
   * @param {Integer} FormType - formType. optional.
   * @param {String} FieldKey - fieldKey. optional.
   * @param {String} FieldValue - fieldValue. optional.
   */
  signApp(params = {}, options = {}) {
    return this.request('SignApp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   */
  startDeviceDebug(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('StartDeviceDebug', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  startRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('StartRule', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  stopLiveStreaming(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('StopLiveStreaming', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  stopRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('StopRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TargetAliyunPk - targetAliyunPk. required.
   * @param {Boolean} TransferTag - transferTag. required.
   * @param {RepeatList} DeviceName - deviceNames. optional.
   */
  submitTransferApply(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TargetAliyunPk')) {
      throw new TypeError('parameter "TargetAliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'TransferTag')) {
      throw new TypeError('parameter "TransferTag" is required');
    }

    return this.request('SubmitTransferApply', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleId - sceneId. required.
   * @param {String} InstanceId - instanceId. optional.
   */
  triggerAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('TriggerAutomationRule', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  triggerCapturePicture(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('TriggerCapturePicture', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  triggerRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('TriggerRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RuleId - sceneId. required.
   */
  unbindAutomationRuleFromEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('UnbindAutomationRuleFromEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} AutomationRuleId - sceneId. required.
   */
  unbindAutomationRuleFromGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'AutomationRuleId')) {
      throw new TypeError('parameter "AutomationRuleId" is required');
    }

    return this.request('UnbindAutomationRuleFromGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceType - deviceType. required.
   */
  unbindDeviceFromEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceType')) {
      throw new TypeError('parameter "DeviceType" is required');
    }

    return this.request('UnbindDeviceFromEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceType - deviceType. required.
   */
  unbindDeviceFromGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceType')) {
      throw new TypeError('parameter "DeviceType" is required');
    }

    return this.request('UnbindDeviceFromGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} DriverId - driverId. required.
   */
  unbindDriverFromGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DriverId')) {
      throw new TypeError('parameter "DriverId" is required');
    }

    return this.request('UnbindDriverFromGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FunctionId - functionId. required.
   */
  unbindFunctionFromEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FunctionId')) {
      throw new TypeError('parameter "FunctionId" is required');
    }

    return this.request('UnbindFunctionFromEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} EdgeFunctionId - functionId. required.
   */
  unbindFunctionFromGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'EdgeFunctionId')) {
      throw new TypeError('parameter "EdgeFunctionId" is required');
    }

    return this.request('UnbindFunctionFromGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  unbindRoleFromEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('UnbindRoleFromEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   */
  unbindRoleFromGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('UnbindRoleFromGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StreamGuId - streamGuId. required.
   */
  unbindStreamFromEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StreamGuId')) {
      throw new TypeError('parameter "StreamGuId" is required');
    }

    return this.request('UnbindStreamFromEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} StreamGuId - streamGuId. required.
   */
  unbindStreamFromGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'StreamGuId')) {
      throw new TypeError('parameter "StreamGuId" is required');
    }

    return this.request('UnbindStreamFromGroup', params, options);
  }

  /**
   * @param {String} AppUuid - appUuid. optional.
   */
  unregisterAppService(params = {}, options = {}) {
    return this.request('UnregisterAppService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SceneId - sceneId. required.
   * @param {String} PackageName - packageName. required.
   */
  unzipAndPushScene(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SceneId')) {
      throw new TypeError('parameter "SceneId" is required');
    }

    if (!hasOwnProperty(params, 'PackageName')) {
      throw new TypeError('parameter "PackageName" is required');
    }

    return this.request('UnzipAndPushScene', params, options);
  }

  /**
   * @param {String} Uuid - uuid. required.
   * @param {String} AppUuid - appUuid. required.
   * @param {String} Name - name. required.
   * @param {String} Metric - metric. required.
   * @param {String} Project - project. required.
   * @param {String} GroupName - groupName. required.
   * @param {String} StatisticalType - statisticalType. required.
   * @param {String} ComparisonCondition - comparisonCondition. required.
   * @param {Integer} Period - period. required.
   * @param {String} ComparisonValue - comparisonValue. required.
   * @param {String} ComparisonModel - comparisonModel. optional.
   * @param {RepeatList} ContactGroups - contactGroups. optional.
   * @param {Integer} EvaluationCount - evaluationCount. optional.
   */
  updateAppAlarm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    if (!hasOwnProperty(params, 'AppUuid')) {
      throw new TypeError('parameter "AppUuid" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'StatisticalType')) {
      throw new TypeError('parameter "StatisticalType" is required');
    }

    if (!hasOwnProperty(params, 'ComparisonCondition')) {
      throw new TypeError('parameter "ComparisonCondition" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'ComparisonValue')) {
      throw new TypeError('parameter "ComparisonValue" is required');
    }

    return this.request('UpdateAppAlarm', params, options);
  }

  /**
   * @param {String} AppConfigId - appConfigId. optional.
   * @param {String} PublishStatus - publishStatus. optional.
   * @param {String} VersionName - versionName. optional.
   */
  updateAppConfigPublishStatus(params = {}, options = {}) {
    return this.request('UpdateAppConfigPublishStatus', params, options);
  }

  /**
   * @param {String} Password - password. optional.
   */
  updateAppImageRepoPassword(params = {}, options = {}) {
    return this.request('UpdateAppImageRepoPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RuleId - sceneId. required.
   * @param {String} RuleName - sceneName. required.
   * @param {String} RuleContent - sceneContent. optional.
   * @param {String} RuleDescription - remark. optional.
   */
  updateAutomationRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'RuleName')) {
      throw new TypeError('parameter "RuleName" is required');
    }

    return this.request('UpdateAutomationRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GwProductKey - gwProductKey. required.
   * @param {String} GwDeviceName - gwDeviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Code - code. required.
   * @param {String} ServerId - serverId. required.
   * @param {String} ConfigJson - configJson. required.
   */
  updateChildDeviceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GwProductKey')) {
      throw new TypeError('parameter "GwProductKey" is required');
    }

    if (!hasOwnProperty(params, 'GwDeviceName')) {
      throw new TypeError('parameter "GwDeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'ServerId')) {
      throw new TypeError('parameter "ServerId" is required');
    }

    if (!hasOwnProperty(params, 'ConfigJson')) {
      throw new TypeError('parameter "ConfigJson" is required');
    }

    return this.request('UpdateChildDeviceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {Integer} SwitchStatus - switchStatus. required.
   */
  updateCloudMonitorSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'SwitchStatus')) {
      throw new TypeError('parameter "SwitchStatus" is required');
    }

    return this.request('UpdateCloudMonitorSwitch', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. optional.
   * @param {String} EndPoint - endPoint. optional.
   * @param {String} AccessId - accessId. optional.
   * @param {String} AccessKey - accessKey. optional.
   * @param {String} Host - host. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Password - password. optional.
   * @param {String} Port - port. optional.
   * @param {String} DbName - dbName. optional.
   * @param {String} GmtCreate - gmtCreate. optional.
   * @param {String} GmtModified - gmtModified. optional.
   */
  updateDataSource(params = {}, options = {}) {
    return this.request('UpdateDataSource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DriverId - driverId. required.
   */
  updateDeviceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DriverId')) {
      throw new TypeError('parameter "DriverId" is required');
    }

    return this.request('UpdateDeviceConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} GroupDesc - groupDesc. optional.
   */
  updateDeviceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('UpdateDeviceGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ShadowMessage - shadowMessage. required.
   */
  updateDeviceShadow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ShadowMessage')) {
      throw new TypeError('parameter "ShadowMessage" is required');
    }

    return this.request('UpdateDeviceShadow', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverName - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Url - ossAddress. optional.
   * @param {String} Runtime - runtime. optional.
   * @param {String} DriverId - driverId. required.
   */
  updateDriver(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverId')) {
      throw new TypeError('parameter "DriverId" is required');
    }

    return this.request('UpdateDriver', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DriverTemplateName - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Content - ossAddress. optional.
   * @param {String} Runtime - runtime. optional.
   * @param {String} DriverTemplateId - driverTemplateId. required.
   */
  updateDriverTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DriverTemplateId')) {
      throw new TypeError('parameter "DriverTemplateId" is required');
    }

    return this.request('UpdateDriverTemplate', params, options);
  }

  /**
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} ClusterName - clusterName. optional.
   * @param {String} Tags - tags. optional.
   * @param {String} ServiceCidr - serviceCidr. optional.
   */
  updateEdgeCluster(params = {}, options = {}) {
    return this.request('UpdateEdgeCluster', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Tags - tags. optional.
   */
  updateEdgeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateEdgeInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FunctionId - functionId. required.
   * @param {String} RunMode - runMode. required.
   * @param {Integer} MemorySize - memorySize. optional.
   * @param {Integer} Timeout - timeout. optional.
   * @param {String} TriggerContent - triggerContent. optional.
   */
  updateEdgeInstanceFunction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FunctionId')) {
      throw new TypeError('parameter "FunctionId" is required');
    }

    if (!hasOwnProperty(params, 'RunMode')) {
      throw new TypeError('parameter "RunMode" is required');
    }

    return this.request('UpdateEdgeInstanceFunction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} RouteId - routeId. required.
   * @param {String} TopicFilter - topicFilter. optional.
   * @param {String} SourceType - sourceType. required.
   * @param {String} SourceData - sourceData. optional.
   * @param {String} TargetType - targetType. required.
   * @param {String} TargetData - targetData. optional.
   * @param {Integer} TargetIotHubQos - targetIotHubQos. optional.
   */
  updateEdgeInstanceMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RouteId')) {
      throw new TypeError('parameter "RouteId" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'TargetType')) {
      throw new TypeError('parameter "TargetType" is required');
    }

    return this.request('UpdateEdgeInstanceMessageRoute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Status - status. optional.
   * @param {Integer} Ttl - ttl. optional.
   * @param {String} LogLevel - logLevel. optional.
   */
  updateEdgeInstanceSls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('UpdateEdgeInstanceSls', params, options);
  }

  /**
   * @param {String} NodeId - nodeId. optional.
   * @param {String} Tags - tags. optional.
   */
  updateEdgeNode(params = {}, options = {}) {
    return this.request('UpdateEdgeNode', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} EventId - eventId. required.
   * @param {Integer} EventType - eventType. required.
   * @param {String} EventName - eventName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} OutputData - outputData. optional.
   * @param {String} ExtendConfig - extendConfig. optional.
   * @param {String} ConfigCode - configCode. optional.
   */
  updateEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'EventName')) {
      throw new TypeError('parameter "EventName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('UpdateEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} EventId - eventId. required.
   * @param {Integer} EventType - eventType. required.
   * @param {String} EventName - eventName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} OutputData - outputData. optional.
   */
  updateEventPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'EventName')) {
      throw new TypeError('parameter "EventName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('UpdateEventPop', params, options);
  }

  /**
   */
  updateEventRecordPlan(params = {}, options = {}) {
    return this.request('UpdateEventRecordPlan', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  updateEventRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('UpdateEventRecordPlanDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} Code - code. required.
   * @param {String} ServerName - serverName. required.
   * @param {String} Content - content. required.
   */
  updateGatewayServerConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'ServerName')) {
      throw new TypeError('parameter "ServerName" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('UpdateGatewayServerConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} GeoProjectId - geoProjectId. required.
   * @param {String} GeoProjectName - geoProjectName. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} MapConfig - mapConfig. optional.
   * @param {String} GroupMethod - groupMethod. optional.
   */
  updateGeoProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GeoProjectId')) {
      throw new TypeError('parameter "GeoProjectId" is required');
    }

    return this.request('UpdateGeoProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} Name - name. required.
   * @param {String} Tags - tags. optional.
   */
  updateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} DriverId - driverId. required.
   * @param {Long} Memory - memory. optional.
   */
  updateGroupDriverConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'DriverId')) {
      throw new TypeError('parameter "DriverId" is required');
    }

    return this.request('UpdateGroupDriverConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} EdgeFunctionId - functionId. required.
   * @param {String} RunMode - runMode. required.
   * @param {Integer} MemorySize - memorySize. optional.
   * @param {Integer} Timeout - timeout. optional.
   * @param {String} TriggerContent - triggerContent. optional.
   */
  updateGroupFunctionConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'EdgeFunctionId')) {
      throw new TypeError('parameter "EdgeFunctionId" is required');
    }

    if (!hasOwnProperty(params, 'RunMode')) {
      throw new TypeError('parameter "RunMode" is required');
    }

    return this.request('UpdateGroupFunctionConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {Long} RouteId - routeId. required.
   * @param {String} TopicFilter - topicFilter. optional.
   * @param {String} SourceType - sourceType. required.
   * @param {String} SourceData - sourceData. optional.
   * @param {String} TargetType - targetType. required.
   * @param {String} TargetData - targetData. optional.
   * @param {Integer} TargetIotHubQos - targetIotHubQos. optional.
   */
  updateGroupMessageRoute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'RouteId')) {
      throw new TypeError('parameter "RouteId" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'TargetType')) {
      throw new TypeError('parameter "TargetType" is required');
    }

    return this.request('UpdateGroupMessageRoute', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ProductName - productName. required.
   * @param {String} Description - description. optional.
   */
  updateProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    return this.request('UpdateProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ProductName - productName. required.
   * @param {String} Description - description. optional.
   */
  updateProductPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    return this.request('UpdateProductPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} EventId - eventId. required.
   * @param {Integer} EventType - eventType. required.
   * @param {String} EventName - eventName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} OutputData - outputData. optional.
   * @param {String} ConfigCode - configCode. optional.
   * @param {String} ExtendConfig - extendConfig. optional.
   */
  updateProductStdEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    if (!hasOwnProperty(params, 'EventName')) {
      throw new TypeError('parameter "EventName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('UpdateProductStdEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} PropertyId - propertyId. required.
   * @param {Integer} DataType - dataType. required.
   * @param {Integer} RwFlag - rwFlag. required.
   * @param {String} Name - name. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} DataSpecs - dataSpecs. optional.
   * @param {String} DataSpecsList - dataSpecsList. optional.
   * @param {String} Description - description. optional.
   * @param {String} Definition - definition. optional.
   * @param {String} ConfigCode - configCode. optional.
   * @param {String} ExtendConfig - extendConfig. optional.
   */
  updateProductStdProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'PropertyId')) {
      throw new TypeError('parameter "PropertyId" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'RwFlag')) {
      throw new TypeError('parameter "RwFlag" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('UpdateProductStdProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ServiceId - serviceId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} InputParams - inputParams. optional.
   * @param {String} OutputParams - outputParams. optional.
   * @param {Integer} CallType - callType. optional.
   * @param {String} ConfigCode - configCode. optional.
   * @param {String} ExtendConfig - extendConfig. optional.
   */
  updateProductStdService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('UpdateProductStdService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TagName - tagName. optional.
   * @param {String} TagKey - tagKey. required.
   * @param {String} TagValue - tagValue. optional.
   */
  updateProductTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TagKey')) {
      throw new TypeError('parameter "TagKey" is required');
    }

    return this.request('UpdateProductTag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} TagString - tagString. required.
   */
  updateProductTagForProtal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'TagString')) {
      throw new TypeError('parameter "TagString" is required');
    }

    return this.request('UpdateProductTagForProtal', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Desc - desc. optional.
   * @param {String} Operation - operation. optional.
   * @param {String} TopicShortName - topicShortName. optional.
   * @param {String} TopicId - topicId. optional.
   */
  updateProductTopic(params = {}, options = {}) {
    return this.request('UpdateProductTopic', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} PropertyId - propertyId. required.
   * @param {Integer} DataType - dataType. required.
   * @param {Integer} RwFlag - rwFlag. required.
   * @param {String} Name - name. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} DataSpecs - dataSpecs. optional.
   * @param {String} DataSpecsList - dataSpecsList. optional.
   * @param {String} Description - description. optional.
   * @param {String} Definition - definition. optional.
   * @param {String} ExtendConfig - extendConfig. optional.
   * @param {String} ConfigCode - configCode. optional.
   */
  updateProperty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'PropertyId')) {
      throw new TypeError('parameter "PropertyId" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'RwFlag')) {
      throw new TypeError('parameter "RwFlag" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('UpdateProperty', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Long} PropertyId - propertyId. required.
   * @param {Integer} DataType - dataType. required.
   * @param {Integer} RwFlag - rwFlag. required.
   * @param {String} Name - name. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} DataSpecs - dataSpecs. optional.
   * @param {String} DataSpecsList - dataSpecsList. optional.
   * @param {String} Description - description. optional.
   * @param {String} Definition - definition. optional.
   */
  updatePropertyPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'PropertyId')) {
      throw new TypeError('parameter "PropertyId" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'RwFlag')) {
      throw new TypeError('parameter "RwFlag" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('UpdatePropertyPop', params, options);
  }

  /**
   */
  updateRecordPlan(params = {}, options = {}) {
    return this.request('UpdateRecordPlan', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  updateRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('UpdateRecordPlanDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} RuleId - ruleId. required.
   * @param {String} Select - select. optional.
   * @param {String} ShortTopic - shortTopic. optional.
   * @param {String} Where - where. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} Name - name. optional.
   * @param {String} RuleDesc - ruleDesc. optional.
   * @param {Integer} TopicType - topicType. optional.
   */
  updateRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('UpdateRule', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ActionId - actionId. required.
   * @param {String} Type - type. required.
   * @param {String} Configuration - configuration. required.
   */
  updateRuleAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionId')) {
      throw new TypeError('parameter "ActionId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Configuration')) {
      throw new TypeError('parameter "Configuration" is required');
    }

    return this.request('UpdateRuleAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ScriptName - scriptName. optional.
   * @param {String} ScriptContent - scriptContent. optional.
   * @param {String} ScriptType - scriptType. optional.
   */
  updateScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('UpdateScript', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ScriptContent - scriptContent. required.
   * @param {String} ScriptType - scriptType. required.
   * @param {String} ScriptCode - scriptCode. required.
   * @param {String} OssUrl - ossUrl. optional.
   */
  updateScriptDraft(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScriptContent')) {
      throw new TypeError('parameter "ScriptContent" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    if (!hasOwnProperty(params, 'ScriptCode')) {
      throw new TypeError('parameter "ScriptCode" is required');
    }

    return this.request('UpdateScriptDraft', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ScriptContent - scriptContent. required.
   * @param {String} ScriptType - scriptType. required.
   * @param {String} ScriptCode - scriptCode. required.
   * @param {String} OssUrl - ossUrl. optional.
   */
  updateScriptDraftPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScriptContent')) {
      throw new TypeError('parameter "ScriptContent" is required');
    }

    if (!hasOwnProperty(params, 'ScriptType')) {
      throw new TypeError('parameter "ScriptType" is required');
    }

    if (!hasOwnProperty(params, 'ScriptCode')) {
      throw new TypeError('parameter "ScriptCode" is required');
    }

    return this.request('UpdateScriptDraftPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ScriptName - scriptName. optional.
   * @param {String} ScriptContent - scriptContent. optional.
   * @param {String} ScriptType - scriptType. optional.
   */
  updateScriptPop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('UpdateScriptPop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} SecureUpgradeFlag - secureUpgradeFlag. required.
   */
  updateSecureUpgradeFlag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'SecureUpgradeFlag')) {
      throw new TypeError('parameter "SecureUpgradeFlag" is required');
    }

    return this.request('UpdateSecureUpgradeFlag', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {Integer} CallbackType - callbackType. required.
   */
  updateServerCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'CallbackType')) {
      throw new TypeError('parameter "CallbackType" is required');
    }

    return this.request('UpdateServerCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ServiceId - serviceId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} InputParams - inputParams. optional.
   * @param {String} OutputParams - outputParams. optional.
   * @param {Integer} CallType - callType. optional.
   * @param {String} ExtendConfig - extendConfig. optional.
   * @param {String} ConfigCode - configCode. optional.
   */
  updateService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('UpdateService', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ServiceId - serviceId. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} Identifier - identifier. required.
   * @param {String} Description - description. optional.
   * @param {String} InputParams - inputParams. optional.
   * @param {String} OutputParams - outputParams. optional.
   * @param {Integer} CallType - callType. optional.
   */
  updateServicePop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'Identifier')) {
      throw new TypeError('parameter "Identifier" is required');
    }

    return this.request('UpdateServicePop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Desc - desc. optional.
   * @param {String} Type - type. optional.
   * @param {String} Status - status. optional.
   * @param {String} Sql - sql. optional.
   * @param {String} Components - components. optional.
   * @param {String} Params - params. optional.
   * @param {String} Env - env. optional.
   * @param {String} GmtCreate - gmtCreate. optional.
   * @param {String} GmtModified - gmtModified. optional.
   */
  updateTask(params = {}, options = {}) {
    return this.request('UpdateTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} Sql - sql. optional.
   * @param {String} Components - components. optional.
   * @param {String} Params - params. optional.
   */
  updateTaskDetail(params = {}, options = {}) {
    return this.request('UpdateTaskDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Desc - desc. optional.
   */
  updateTaskMeta(params = {}, options = {}) {
    return this.request('UpdateTaskMeta', params, options);
  }

  /**
   */
  updateTimeTemplate(params = {}, options = {}) {
    return this.request('UpdateTimeTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. required.
   */
  upgradeSingleDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('UpgradeSingleDevice', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  validateLaUser(params = {}, options = {}) {
    return this.request('ValidateLaUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FirmwareName - firmwareName. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {RepeatList} DeviceName - deviceNames. required.
   * @param {Boolean} Diff - diff. optional.
   * @param {RepeatList} SrcFirmwareName - srcFirmwareNames. optional.
   */
  verifyFirmware(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FirmwareName')) {
      throw new TypeError('parameter "FirmwareName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    return this.request('VerifyFirmware', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ProductKey - productKey. optional.
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} Params - params. required.
   * @param {String} AuthType - authType. required.
   */
  verifyThingAuthentication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Params')) {
      throw new TypeError('parameter "Params" is required');
    }

    if (!hasOwnProperty(params, 'AuthType')) {
      throw new TypeError('parameter "AuthType" is required');
    }

    return this.request('VerifyThingAuthentication', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} Id - id. optional.
   */
  withdrawTask(params = {}, options = {}) {
    return this.request('WithdrawTask', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryAppBindDeviceList(params = {}, options = {}) {
    return this.request('queryAppBindDeviceList', params, options);
  }

}

module.exports = Client;
