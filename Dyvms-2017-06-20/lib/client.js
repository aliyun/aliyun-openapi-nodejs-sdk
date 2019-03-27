
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-20';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} OldOrderId - oldOrderId. optional.
   * @param {String} PartnerId - partnerId. optional.
   * @param {String} ManagerName - managerName. required.
   * @param {String} ManagerMobilePhone - managerMobilePhone. required.
   * @param {String} ManagerCertType - managerCertType. required.
   * @param {String} ManagerCertNumber - managerCertNumber. required.
   * @param {String} ManagerCertEffDate - managerCertEffDate. required.
   * @param {String} ManagerCertExpDate - managerCertExpDate. required.
   * @param {String} ManagerCertPic - managerCertPic. required.
   * @param {String} UnifiedstandardAgreement - unifiedstandardAgreement. optional.
   * @param {String} Empowerment - empowerment. optional.
   * @param {String} SupplementaryMaterial - supplementaryMaterial. optional.
   * @param {String} Number - number. required.
   * @param {String} CorpName - corpName. required.
   * @param {String} Remark - remark. optional.
   * @param {String} WttorderId - wttorderId. optional.
   * @param {String} RealName - realName. optional.
   */
  apply400ManagerIdentify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ManagerName')) {
      throw new TypeError('parameter "ManagerName" is required');
    }

    if (!hasOwnProperty(params, 'ManagerMobilePhone')) {
      throw new TypeError('parameter "ManagerMobilePhone" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertType')) {
      throw new TypeError('parameter "ManagerCertType" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertNumber')) {
      throw new TypeError('parameter "ManagerCertNumber" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertEffDate')) {
      throw new TypeError('parameter "ManagerCertEffDate" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertExpDate')) {
      throw new TypeError('parameter "ManagerCertExpDate" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertPic')) {
      throw new TypeError('parameter "ManagerCertPic" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    if (!hasOwnProperty(params, 'CorpName')) {
      throw new TypeError('parameter "CorpName" is required');
    }

    return this.request('Apply400ManagerIdentify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TaskId - taskId. optional.
   */
  cancelRobotSaasTask(params = {}, options = {}) {
    return this.request('CancelRobotSaasTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  checkRobotIntent(params = {}, options = {}) {
    return this.request('CheckRobotIntent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  checkRobotv2(params = {}, options = {}) {
    return this.request('CheckRobotv2', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Long} RobotId - robotId. optional.
   */
  checkRobotv2Intent(params = {}, options = {}) {
    return this.request('CheckRobotv2Intent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} DialogIds - dialogIds. optional.
   */
  clearRobotv2Dialog(params = {}, options = {}) {
    return this.request('ClearRobotv2Dialog', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} OldRobotId - oldRobotId. optional.
   */
  copyRobot(params = {}, options = {}) {
    return this.request('CopyRobot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} OldRobotId - oldRobotId. optional.
   */
  copyRobotv2(params = {}, options = {}) {
    return this.request('CopyRobotv2', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   */
  countRobotv2DialogInfo(params = {}, options = {}) {
    return this.request('CountRobotv2DialogInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} OldOrderId - oldOrderId. optional.
   * @param {String} PartnerId - partnerId. optional.
   * @param {String} CorpName - corpName. required.
   * @param {String} CorpNumber - corpNumber. required.
   * @param {String} CorpCertType - corpCertType. required.
   * @param {String} CorpCertNumber - corpCertNumber. required.
   * @param {String} CorpRegisteredEffDate - corpRegisteredEffDate. required.
   * @param {String} CorpRegisteredExpDate - corpRegisteredExpDate. required.
   * @param {String} CorpRegisteredAddrProv - corpRegisteredAddrProv. optional.
   * @param {String} CorpRegisteredAddrCity - corpRegisteredAddrCity. optional.
   * @param {String} CorpRegisteredAddrArea - corpRegisteredAddrArea. optional.
   * @param {String} CorpRegisteredAddrDetail - corpRegisteredAddrDetail. optional.
   * @param {String} LegalPersonName - legalPersonName. required.
   * @param {String} LegalPersonPhoneNumber - legalPersonPhoneNumber. required.
   * @param {String} LegalPersonCertType - legalPersonCertType. required.
   * @param {String} LegalPersonCertNumber - legalPersonCertNumber. required.
   * @param {String} LegalPersonCertEffDate - legalPersonCertEffDate. required.
   * @param {String} LegalPersonCertExpDate - legalPersonCertExpDate. required.
   * @param {String} LegalPersonCertPic - legalPersonCertPic. required.
   * @param {String} BusinessLicensePic - businessLicensePic. required.
   * @param {Long} SpecId - specId. optional.
   * @param {String} SpecIdArray - specIdArray. optional.
   * @param {String} ApplyRemark - applyRemark. optional.
   * @param {Integer} BuyCountLimit - buyCountLimit. optional.
   */
  create400NumberCorpIdentify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpName')) {
      throw new TypeError('parameter "CorpName" is required');
    }

    if (!hasOwnProperty(params, 'CorpNumber')) {
      throw new TypeError('parameter "CorpNumber" is required');
    }

    if (!hasOwnProperty(params, 'CorpCertType')) {
      throw new TypeError('parameter "CorpCertType" is required');
    }

    if (!hasOwnProperty(params, 'CorpCertNumber')) {
      throw new TypeError('parameter "CorpCertNumber" is required');
    }

    if (!hasOwnProperty(params, 'CorpRegisteredEffDate')) {
      throw new TypeError('parameter "CorpRegisteredEffDate" is required');
    }

    if (!hasOwnProperty(params, 'CorpRegisteredExpDate')) {
      throw new TypeError('parameter "CorpRegisteredExpDate" is required');
    }

    if (!hasOwnProperty(params, 'LegalPersonName')) {
      throw new TypeError('parameter "LegalPersonName" is required');
    }

    if (!hasOwnProperty(params, 'LegalPersonPhoneNumber')) {
      throw new TypeError('parameter "LegalPersonPhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'LegalPersonCertType')) {
      throw new TypeError('parameter "LegalPersonCertType" is required');
    }

    if (!hasOwnProperty(params, 'LegalPersonCertNumber')) {
      throw new TypeError('parameter "LegalPersonCertNumber" is required');
    }

    if (!hasOwnProperty(params, 'LegalPersonCertEffDate')) {
      throw new TypeError('parameter "LegalPersonCertEffDate" is required');
    }

    if (!hasOwnProperty(params, 'LegalPersonCertExpDate')) {
      throw new TypeError('parameter "LegalPersonCertExpDate" is required');
    }

    if (!hasOwnProperty(params, 'LegalPersonCertPic')) {
      throw new TypeError('parameter "LegalPersonCertPic" is required');
    }

    if (!hasOwnProperty(params, 'BusinessLicensePic')) {
      throw new TypeError('parameter "BusinessLicensePic" is required');
    }

    return this.request('Create400NumberCorpIdentify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ModelType - modelType. optional.
   * @param {String} ModelId - modelId. optional.
   * @param {String} CorpusInfo - corpusInfo. optional.
   */
  createASRLearning(params = {}, options = {}) {
    return this.request('CreateASRLearning', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ModelType - modelType. optional.
   */
  createASRModel(params = {}, options = {}) {
    return this.request('CreateASRModel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  createBuyNumberDetailTask(params = {}, options = {}) {
    return this.request('CreateBuyNumberDetailTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} AccessKey - accessKey. optional.
   * @param {String} Appsecret - appsecret. optional.
   * @param {String} ExternalUrl - externalUrl. optional.
   * @param {String} InvokeFailMedia - invokeFailMedia. optional.
   * @param {String} NotExistMedia - notExistMedia. optional.
   * @param {String} TransWaitMedia - transWaitMedia. optional.
   * @param {String} TransDisableTimeSwitch - transDisableTimeSwitch. optional.
   * @param {String} TransDisableTimeMedia - transDisableTimeMedia. optional.
   * @param {String} DisableTimes - disableTimes. optional.
   * @param {String} DtmfSwitch - dtmfSwitch. optional.
   * @param {String} DtmfFirstMedia - dtmfFirstMedia. optional.
   * @param {String} DtmfNoninMedia - dtmfNoninMedia. optional.
   * @param {Integer} DtmfNoninOvertime - dtmfNoninOvertime. optional.
   * @param {Integer} DtmfMaxCycles - dtmfMaxCycles. optional.
   * @param {String} DtmfReplayCharacter - dtmfReplayCharacter. optional.
   * @param {String} DtmfEndCharacter - dtmfEndCharacter. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} ActionType - actionType. optional.
   * @param {String} ActionTypeParam - actionTypeParam. optional.
   * @param {String} Number - number. optional.
   */
  createCallInGobalConfig(params = {}, options = {}) {
    return this.request('CreateCallInGobalConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} AccessKey - accessKey. optional.
   * @param {String} Appsecret - appsecret. optional.
   * @param {String} ExternalUrl - externalUrl. optional.
   * @param {String} InvokeFailMedia - invokeFailMedia. optional.
   * @param {String} NotExistMedia - notExistMedia. optional.
   * @param {String} TransWaitMedia - transWaitMedia. optional.
   * @param {String} TransDisableTimeSwitch - transDisableTimeSwitch. optional.
   * @param {String} TransDisableTimeMedia - transDisableTimeMedia. optional.
   * @param {String} DisableTimes - disableTimes. optional.
   * @param {String} DtmfSwitch - dtmfSwitch. optional.
   * @param {String} DtmfFirstMedia - dtmfFirstMedia. optional.
   * @param {String} DtmfNoninMedia - dtmfNoninMedia. optional.
   * @param {Integer} DtmfNoninOvertime - dtmfNoninOvertime. optional.
   * @param {Integer} DtmfMaxCycles - dtmfMaxCycles. optional.
   * @param {String} DtmfReplayCharacter - dtmfReplayCharacter. optional.
   * @param {String} DtmfEndCharacter - dtmfEndCharacter. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} ActionType - actionType. optional.
   * @param {String} ActionTypeParam - actionTypeParam. optional.
   * @param {String} Number - number. optional.
   */
  createCallInNumberConfig(params = {}, options = {}) {
    return this.request('CreateCallInNumberConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  createDestoryNumberTask(params = {}, options = {}) {
    return this.request('CreateDestoryNumberTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  createFileByBiz(params = {}, options = {}) {
    return this.request('CreateFileByBiz', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
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
  createLogicalDelete(params = {}, options = {}) {
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

    return this.request('CreateLogicalDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} NumberType - numberType. optional.
   * @param {String} Number - number. optional.
   * @param {String} RegionNameProvince - regionNameProvince. optional.
   * @param {String} RegionNameCity - regionNameCity. optional.
   * @param {String} CorpName - corpName. required.
   * @param {String} MonthlyPrice - monthlyPrice. optional.
   * @param {Long} RealNameInsId - realNameInsId. optional.
   * @param {Long} SpecId - specId. optional.
   * @param {String} NumberArray - numberArray. optional.
   * @param {Boolean} IsCuteNumber - isCuteNumber. optional.
   * @param {Integer} LevelId - levelId. optional.
   * @param {Integer} GuaranteedPackageLevel - guaranteedPackageLevel. optional.
   */
  createNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpName')) {
      throw new TypeError('parameter "CorpName" is required');
    }

    return this.request('CreateNumber', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} ApplyRemark - applyRemark. optional.
   * @param {String} RegionNameCity - regionNameCity. required.
   * @param {String} CorpName - corpName. required.
   * @param {String} RegionNameProvince - regionNameProvince. required.
   * @param {String} LegalPersonName - legalPersonName. required.
   * @param {String} LegalPersonrCertNumber - legalPersonrCertNumber. required.
   * @param {String} ManagerContactPhoneNumber - managerContactPhoneNumber. required.
   * @param {String} ManagerName - managerName. required.
   * @param {String} BusinessLicenseAddress - businessLicenseAddress. required.
   * @param {String} ManagerCertNumber - managerCertNumber. required.
   * @param {String} OrganizationCode - organizationCode. required.
   * @param {String} TelecomUndertakingPic - telecomUndertakingPic. required.
   * @param {String} ManagerCertPic - managerCertPic. required.
   * @param {String} NumberApplicationLetterPic - numberApplicationLetterPic. required.
   * @param {String} BusinessLicensePic - businessLicensePic. required.
   * @param {String} SpecIdArray - specIdArray. optional.
   * @param {String} RegisteredFundCode - registeredFundCode. optional.
   * @param {Long} OldOrderId - oldOrderId. optional.
   * @param {String} ProcedureDesc - procedureDesc. optional.
   * @param {String} OffsiteCertPic - offsiteCertPic. optional.
   * @param {String} CorporationCertPic - corporationCertPic. optional.
   * @param {String} BusinessTypeDesc - businessTypeDesc. optional.
   * @param {Integer} BusinessType - businessType. optional.
   */
  createNumberCorpIdentify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionNameCity')) {
      throw new TypeError('parameter "RegionNameCity" is required');
    }

    if (!hasOwnProperty(params, 'CorpName')) {
      throw new TypeError('parameter "CorpName" is required');
    }

    if (!hasOwnProperty(params, 'RegionNameProvince')) {
      throw new TypeError('parameter "RegionNameProvince" is required');
    }

    if (!hasOwnProperty(params, 'LegalPersonName')) {
      throw new TypeError('parameter "LegalPersonName" is required');
    }

    if (!hasOwnProperty(params, 'LegalPersonrCertNumber')) {
      throw new TypeError('parameter "LegalPersonrCertNumber" is required');
    }

    if (!hasOwnProperty(params, 'ManagerContactPhoneNumber')) {
      throw new TypeError('parameter "ManagerContactPhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'ManagerName')) {
      throw new TypeError('parameter "ManagerName" is required');
    }

    if (!hasOwnProperty(params, 'BusinessLicenseAddress')) {
      throw new TypeError('parameter "BusinessLicenseAddress" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertNumber')) {
      throw new TypeError('parameter "ManagerCertNumber" is required');
    }

    if (!hasOwnProperty(params, 'OrganizationCode')) {
      throw new TypeError('parameter "OrganizationCode" is required');
    }

    if (!hasOwnProperty(params, 'TelecomUndertakingPic')) {
      throw new TypeError('parameter "TelecomUndertakingPic" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertPic')) {
      throw new TypeError('parameter "ManagerCertPic" is required');
    }

    if (!hasOwnProperty(params, 'NumberApplicationLetterPic')) {
      throw new TypeError('parameter "NumberApplicationLetterPic" is required');
    }

    if (!hasOwnProperty(params, 'BusinessLicensePic')) {
      throw new TypeError('parameter "BusinessLicensePic" is required');
    }

    return this.request('CreateNumberCorpIdentify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} RegionNameCity - regionNameCity. required.
   * @param {String} RegionNameProvince - regionNameProvince. required.
   * @param {Long} RealNameInsId - realNameInsId. required.
   * @param {String} OffsiteCertPic - offsiteCertPic. required.
   */
  createNumberCorpIdentifyByCopy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionNameCity')) {
      throw new TypeError('parameter "RegionNameCity" is required');
    }

    if (!hasOwnProperty(params, 'RegionNameProvince')) {
      throw new TypeError('parameter "RegionNameProvince" is required');
    }

    if (!hasOwnProperty(params, 'RealNameInsId')) {
      throw new TypeError('parameter "RealNameInsId" is required');
    }

    if (!hasOwnProperty(params, 'OffsiteCertPic')) {
      throw new TypeError('parameter "OffsiteCertPic" is required');
    }

    return this.request('CreateNumberCorpIdentifyByCopy', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
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
  createPhysicalDelete(params = {}, options = {}) {
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

    return this.request('CreatePhysicalDelete', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} ProdId - prodId. required.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} RobotType - robotType. optional.
   * @param {String} RobotName - robotName. optional.
   * @param {String} AsrId - asrId. optional.
   * @param {String} AsrType - asrType. optional.
   * @param {String} Remark - remark. optional.
   */
  createRobot(params = {}, options = {}) {
    return this.request('CreateRobot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} IntentType - intentType. optional.
   * @param {String} IntentName - intentName. optional.
   * @param {String} IntentContent - intentContent. optional.
   */
  createRobotIntent(params = {}, options = {}) {
    return this.request('CreateRobotIntent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} KnowledgeName - knowledgeName. optional.
   * @param {String} Questions - questions. optional.
   * @param {String} MediaCode - mediaCode. optional.
   * @param {String} MediaContent - mediaContent. optional.
   * @param {String} SubjectName - subjectName. optional.
   * @param {Boolean} IsBreak - isBreak. optional.
   */
  createRobotKnowledge(params = {}, options = {}) {
    return this.request('CreateRobotKnowledge', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} ProcessName - processName. optional.
   * @param {String} ProcessType - processType. optional.
   */
  createRobotProcess(params = {}, options = {}) {
    return this.request('CreateRobotProcess', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TaskName - taskName. optional.
   * @param {String} RobotType - robotType. optional.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} RobotName - robotName. optional.
   * @param {String} CorpName - corpName. optional.
   * @param {String} CallerList - callerList. optional.
   * @param {String} OssFileName - ossFileName. optional.
   * @param {String} ScheduleType - scheduleType. optional.
   * @param {String} OrderTime - orderTime. optional.
   * @param {String} BizType - bizType. optional.
   * @param {Boolean} NumberStatusIdent - numberStatusIdent. optional.
   * @param {Boolean} IsSelfLine - isSelfLine. optional.
   */
  createRobotSaasTask(params = {}, options = {}) {
    return this.request('CreateRobotSaasTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} RobotType - robotType. optional.
   * @param {String} RobotName - robotName. optional.
   * @param {String} AsrId - asrId. optional.
   * @param {String} AsrType - asrType. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} AtProfession - atProfession. optional.
   * @param {String} AtSence - atSence. optional.
   */
  createRobotv2(params = {}, options = {}) {
    return this.request('CreateRobotv2', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} IntentName - intentName. optional.
   * @param {String} IntentContent - intentContent. optional.
   * @param {String} RuleContent - ruleContent. optional.
   * @param {String} Remark - remark. optional.
   */
  createRobotv2Intent(params = {}, options = {}) {
    return this.request('CreateRobotv2Intent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} KnowledgeName - knowledgeName. optional.
   * @param {String} KnowledgeType - knowledgeType. optional.
   * @param {String} Questions - questions. optional.
   * @param {String} RuleContent - ruleContent. optional.
   * @param {String} AnswerType - answerType. optional.
   * @param {String} ExeAction - exeAction. optional.
   * @param {Long} ProcessId - processId. optional.
   * @param {String} TransferNumber - transferNumber. optional.
   * @param {Boolean} IsBreak - isBreak. optional.
   * @param {String} DialogJson - dialogJson. optional.
   * @param {String} TransferType - transferType. optional.
   * @param {String} OtherProcessId - otherProcessId. optional.
   * @param {String} Remark - remark. optional.
   */
  createRobotv2Knowledge(params = {}, options = {}) {
    return this.request('CreateRobotv2Knowledge', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} ProcessName - processName. optional.
   * @param {String} ProcessType - processType. optional.
   */
  createRobotv2Process(params = {}, options = {}) {
    return this.request('CreateRobotv2Process', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} Dingding - dingding. optional.
   * @param {String} Company - company. optional.
   * @param {String} Scene - scene. optional.
   * @param {String} SipAddress - sipAddress. optional.
   * @param {String} SipMediaAddress - sipMediaAddress. optional.
   * @param {String} SipLocation - sipLocation. optional.
   * @param {Integer} ConcurrencyCount - concurrencyCount. optional.
   * @param {String} Dtmf - dtmf. optional.
   */
  createSelfLine(params = {}, options = {}) {
    return this.request('CreateSelfLine', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} Numbers - numbers. optional.
   */
  createSelfLineNumber(params = {}, options = {}) {
    return this.request('CreateSelfLineNumber', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  createSipBilateralCall(params = {}, options = {}) {
    return this.request('CreateSipBilateralCall', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ProdType - prodType. optional.
   * @param {String} ProdTypes - prodTypes. optional.
   */
  createSmartCallASR(params = {}, options = {}) {
    return this.request('CreateSmartCallASR', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} ProcessFileList - processFileList. optional.
   * @param {String} QaFileList - qaFileList. optional.
   * @param {String} SpecialFileList - specialFileList. optional.
   * @param {String} SubjectName - subjectName. optional.
   * @param {String} ExcelFileId - excelFileId. optional.
   * @param {Long} OldOrderId - oldOrderId. optional.
   * @param {String} SceneType - sceneType. optional.
   */
  createSmartCallWorkOrder(params = {}, options = {}) {
    return this.request('CreateSmartCallWorkOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TemplateName - templateName. optional.
   * @param {String} ApplyRemark - applyRemark. optional.
   * @param {String} TemplateContent - templateContent. optional.
   * @param {String} VoiceType - voiceType. optional.
   * @param {String} BizType - bizType. optional.
   * @param {String} SpeedLevel - speedLevel. optional.
   * @param {String} Language - language. optional.
   */
  createTtsTemplate(params = {}, options = {}) {
    return this.request('CreateTtsTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ProdType - prodType. optional.
   */
  createVoiceASR(params = {}, options = {}) {
    return this.request('CreateVoiceASR', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} OssFileName - ossFileName. optional.
   * @param {Long} LocalFileId - localFileId. optional.
   * @param {String} UploadFilePath - uploadFilePath. optional.
   * @param {String} TmpOssPath - tmpOssPath. optional.
   * @param {String} ReDoId - reDoId. optional.
   * @param {String} ProdType - prodType. optional.
   */
  createVoiceFile(params = {}, options = {}) {
    return this.request('CreateVoiceFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ProdType - prodType. optional.
   */
  createVoiceRecord(params = {}, options = {}) {
    return this.request('CreateVoiceRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} FileId - fileId. optional.
   * @param {Integer} ModelType - modelType. optional.
   */
  deleteASRCorpora(params = {}, options = {}) {
    return this.request('DeleteASRCorpora', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  deleteBuyNumberDetailTask(params = {}, options = {}) {
    return this.request('DeleteBuyNumberDetailTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} Number - number. optional.
   */
  deleteCallInNumberConfig(params = {}, options = {}) {
    return this.request('DeleteCallInNumberConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  deleteDestoryNumberTask(params = {}, options = {}) {
    return this.request('DeleteDestoryNumberTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} Number - number. required.
   * @param {Long} RealNameInsId - realNameInsId. required.
   */
  deleteNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    if (!hasOwnProperty(params, 'RealNameInsId')) {
      throw new TypeError('parameter "RealNameInsId" is required');
    }

    return this.request('DeleteNumber', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  deleteRobot(params = {}, options = {}) {
    return this.request('DeleteRobot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  deleteRobotIntent(params = {}, options = {}) {
    return this.request('DeleteRobotIntent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} Ids - ids. optional.
   */
  deleteRobotKnowledge(params = {}, options = {}) {
    return this.request('DeleteRobotKnowledge', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  deleteRobotProcess(params = {}, options = {}) {
    return this.request('DeleteRobotProcess', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TaskId - taskId. optional.
   */
  deleteRobotSaasTask(params = {}, options = {}) {
    return this.request('DeleteRobotSaasTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  deleteRobotv2(params = {}, options = {}) {
    return this.request('DeleteRobotv2', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Long} RobotId - robotId. optional.
   */
  deleteRobotv2Intent(params = {}, options = {}) {
    return this.request('DeleteRobotv2Intent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} Ids - ids. optional.
   */
  deleteRobotv2Knowledge(params = {}, options = {}) {
    return this.request('DeleteRobotv2Knowledge', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  deleteRobotv2Process(params = {}, options = {}) {
    return this.request('DeleteRobotv2Process', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} Ids - ids. optional.
   */
  deleteSelfLineNumber(params = {}, options = {}) {
    return this.request('DeleteSelfLineNumber', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} OrderIds - orderIds. optional.
   */
  deleteSmartCallWorkOrder(params = {}, options = {}) {
    return this.request('DeleteSmartCallWorkOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TtsIds - ttsIds. required.
   */
  deleteTtsTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TtsIds')) {
      throw new TypeError('parameter "TtsIds" is required');
    }

    return this.request('DeleteTtsTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} VoiceFileIds - voiceFileIds. required.
   */
  deleteVoiceFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VoiceFileIds')) {
      throw new TypeError('parameter "VoiceFileIds" is required');
    }

    return this.request('DeleteVoiceFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} NumberType - numberType. optional.
   * @param {String} OrderIds - orderIds. required.
   */
  deleteWorkOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderIds')) {
      throw new TypeError('parameter "OrderIds" is required');
    }

    return this.request('DeleteWorkOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} DialogIds - dialogIds. optional.
   */
  executeRobotv2DialogTts(params = {}, options = {}) {
    return this.request('ExecuteRobotv2DialogTts', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} ManagerName - managerName. required.
   * @param {String} ManagerCertNumber - managerCertNumber. required.
   * @param {String} Number - number. required.
   * @param {String} ManagerMobilePhone - managerMobilePhone. required.
   * @param {String} ManagerCertType - managerCertType. required.
   * @param {String} ManagerCertEffDate - managerCertEffDate. required.
   * @param {String} ManagerCertExpDate - managerCertExpDate. required.
   * @param {String} ManagerCertPic - managerCertPic. required.
   */
  get400CorpPdfOssUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ManagerName')) {
      throw new TypeError('parameter "ManagerName" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertNumber')) {
      throw new TypeError('parameter "ManagerCertNumber" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    if (!hasOwnProperty(params, 'ManagerMobilePhone')) {
      throw new TypeError('parameter "ManagerMobilePhone" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertType')) {
      throw new TypeError('parameter "ManagerCertType" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertEffDate')) {
      throw new TypeError('parameter "ManagerCertEffDate" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertExpDate')) {
      throw new TypeError('parameter "ManagerCertExpDate" is required');
    }

    if (!hasOwnProperty(params, 'ManagerCertPic')) {
      throw new TypeError('parameter "ManagerCertPic" is required');
    }

    return this.request('Get400CorpPdfOssUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  getLast400MangerIdentify(params = {}, options = {}) {
    return this.request('GetLast400MangerIdentify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Integer} State - state. optional.
   */
  operatorRobotSemantic(params = {}, options = {}) {
    return this.request('OperatorRobotSemantic', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Integer} State - state. optional.
   */
  operatorRobotv2Semantic(params = {}, options = {}) {
    return this.request('OperatorRobotv2Semantic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProdCode - prodCode. optional. default: default.
   * @param {String} data - data. required.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  qry400SpecInfo(params = {}, options = {}) {
    return this.request('Qry400SpecInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} OrderId - orderId. required.
   */
  query400NumberManagerIdentifyDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('Query400NumberManagerIdentifyDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  query400RealNameListByPage(params = {}, options = {}) {
    return this.request('Query400RealNameListByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ModelType - modelType. optional.
   */
  queryASRModelDetail(params = {}, options = {}) {
    return this.request('QueryASRModelDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. required.
   */
  queryBizCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdCode')) {
      throw new TypeError('parameter "ProdCode" is required');
    }

    return this.request('QueryBizCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  queryBuyNumberDetailTask(params = {}, options = {}) {
    return this.request('QueryBuyNumberDetailTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} Number - number. optional.
   * @param {String} ActionType - actionType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryCallInConfigNumberList(params = {}, options = {}) {
    return this.request('QueryCallInConfigNumberList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} DynamicIvrId - dynamicIvrId. optional.
   */
  queryCallInDynamicIvrDetail(params = {}, options = {}) {
    return this.request('QueryCallInDynamicIvrDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  queryCallInGobalConfig(params = {}, options = {}) {
    return this.request('QueryCallInGobalConfig', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryCorpNameListByPage(params = {}, options = {}) {
    return this.request('QueryCorpNameListByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryCorpNameListFor400(params = {}, options = {}) {
    return this.request('QueryCorpNameListFor400', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  queryCustInfo(params = {}, options = {}) {
    return this.request('QueryCustInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  queryDestoryNumberTask(params = {}, options = {}) {
    return this.request('QueryDestoryNumberTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryLineDetail(params = {}, options = {}) {
    return this.request('QueryLineDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} LineName - lineName. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryLinePageList(params = {}, options = {}) {
    return this.request('QueryLinePageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} Province - province. required.
   * @param {String} City - city. required.
   */
  queryMonthlyPricePositionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Province')) {
      throw new TypeError('parameter "Province" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    return this.request('QueryMonthlyPricePositionList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {RepeatList} AuditState - auditState. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryNumber400CorpIdentify(params = {}, options = {}) {
    return this.request('QueryNumber400CorpIdentify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} OrderId - orderId. required.
   */
  queryNumber400CorpIdentifyDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('QueryNumber400CorpIdentifyDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} CorpName - corpName. optional.
   * @param {String} NumberStr - numberStr. optional.
   */
  queryNumberAndCorpValid(params = {}, options = {}) {
    return this.request('QueryNumberAndCorpValid', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {RepeatList} AuditState - auditState. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryNumberCorpIdentify(params = {}, options = {}) {
    return this.request('QueryNumberCorpIdentify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} OrderId - orderId. optional.
   */
  queryNumberCorpIdentifyDetail(params = {}, options = {}) {
    return this.request('QueryNumberCorpIdentifyDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} CorpName - corpName. optional.
   * @param {String} Number - number. optional.
   */
  queryNumberListBy400CorpName(params = {}, options = {}) {
    return this.request('QueryNumberListBy400CorpName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} CorpName - corpName. optional.
   * @param {String} Number - number. optional.
   */
  queryNumberListByCorpName(params = {}, options = {}) {
    return this.request('QueryNumberListByCorpName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} ProdId - prodId. required.
   * @param {Long} BusOffer - busOffer. optional.
   */
  queryOpenStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('QueryOpenStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryOrderedNumberList(params = {}, options = {}) {
    return this.request('QueryOrderedNumberList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} Province - province. optional.
   * @param {Integer} NumberType - numberType. optional.
   * @param {String} City - city. optional.
   * @param {String} MonthlyPrice - monthlyPrice. optional.
   * @param {Long} SpecId - specId. required.
   * @param {Integer} Count - numberCount. optional.
   * @param {Boolean} IsCuteNumber - isCuteNumber. optional.
   * @param {Integer} LevelId - levelId. optional.
   */
  queryRandomRes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpecId')) {
      throw new TypeError('parameter "SpecId" is required');
    }

    return this.request('QueryRandomRes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {String} CorpName - corpName. optional.
   */
  queryRealNameInfoByCorpName(params = {}, options = {}) {
    return this.request('QueryRealNameInfoByCorpName', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRealNameInfoByPage(params = {}, options = {}) {
    return this.request('QueryRealNameInfoByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  queryRealNameInfoList(params = {}, options = {}) {
    return this.request('QueryRealNameInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryRealNameInfoListForSip(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryRealNameInfoListForSip', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRealNameListByPage(params = {}, options = {}) {
    return this.request('QueryRealNameListByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} SpecId - specId. optional.
   */
  queryResDistributeDTO(params = {}, options = {}) {
    return this.request('QueryResDistributeDTO', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  queryResDistributeInfo(params = {}, options = {}) {
    return this.request('QueryResDistributeInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TaskId - taskId. optional.
   * @param {Long} TaskInstanceId - taskInstanceId. optional.
   */
  queryRobotCallDetailDownload(params = {}, options = {}) {
    return this.request('QueryRobotCallDetailDownload', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryRobotDetail(params = {}, options = {}) {
    return this.request('QueryRobotDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Long} TaskId - taskId. optional.
   */
  queryRobotDialogDetail(params = {}, options = {}) {
    return this.request('QueryRobotDialogDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryRobotIntentDetail(params = {}, options = {}) {
    return this.request('QueryRobotIntentDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} IntentType - intentType. optional.
   * @param {String} IntentName - intentName. optional.
   */
  queryRobotIntentList(params = {}, options = {}) {
    return this.request('QueryRobotIntentList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} IntentType - intentType. optional.
   * @param {String} IntentName - intentName. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotIntentPageList(params = {}, options = {}) {
    return this.request('QueryRobotIntentPageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryRobotKnowledgeDetail(params = {}, options = {}) {
    return this.request('QueryRobotKnowledgeDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} KnowledgeName - knowledgeName. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotKnowledgeList(params = {}, options = {}) {
    return this.request('QueryRobotKnowledgeList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} RobotType - robotType. optional.
   * @param {String} RobotName - robotName. optional.
   * @param {String} AuditStatus - auditStatus. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryRobotList(params = {}, options = {}) {
    return this.request('QueryRobotList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryRobotProcessDetail(params = {}, options = {}) {
    return this.request('QueryRobotProcessDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} ProcessName - processName. optional.
   */
  queryRobotProcessList(params = {}, options = {}) {
    return this.request('QueryRobotProcessList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} TaskId - taskId. optional.
   * @param {Long} TaskInstanceId - taskInstanceId. optional.
   * @param {String} Called - called. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotSaasTaskCallDetail(params = {}, options = {}) {
    return this.request('QueryRobotSaasTaskCallDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TaskId - taskId. optional.
   */
  queryRobotSaasTaskDetail(params = {}, options = {}) {
    return this.request('QueryRobotSaasTaskDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TaskName - taskName. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotSaasTaskList(params = {}, options = {}) {
    return this.request('QueryRobotSaasTaskList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryRobotSemanticDetail(params = {}, options = {}) {
    return this.request('QueryRobotSemanticDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} SemanticName - semanticName. optional.
   * @param {Integer} State - state. optional.
   */
  queryRobotSemanticList(params = {}, options = {}) {
    return this.request('QueryRobotSemanticList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Boolean} IncludeOld - includeOld. optional.
   * @param {String} AuditStatus - auditStatus. optional.
   */
  queryRobotv2AllList(params = {}, options = {}) {
    return this.request('QueryRobotv2AllList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryRobotv2Detail(params = {}, options = {}) {
    return this.request('QueryRobotv2Detail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} DialogType - dialogType. optional.
   * @param {String} DialogContent - dialogContent. optional.
   * @param {Integer} State - state. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotv2DialogPageList(params = {}, options = {}) {
    return this.request('QueryRobotv2DialogPageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} DialogName - dialogName. optional.
   * @param {String} DialogType - dialogType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotv2DialogRelPageList(params = {}, options = {}) {
    return this.request('QueryRobotv2DialogRelPageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Long} RobotId - robotId. optional.
   */
  queryRobotv2IntentDetail(params = {}, options = {}) {
    return this.request('QueryRobotv2IntentDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} IntentName - intentName. optional.
   */
  queryRobotv2IntentList(params = {}, options = {}) {
    return this.request('QueryRobotv2IntentList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} IntentName - intentName. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotv2IntentPageList(params = {}, options = {}) {
    return this.request('QueryRobotv2IntentPageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryRobotv2KnowledgeDetail(params = {}, options = {}) {
    return this.request('QueryRobotv2KnowledgeDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} KnowledgeName - knowledgeName. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotv2KnowledgeList(params = {}, options = {}) {
    return this.request('QueryRobotv2KnowledgeList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} RobotType - robotType. optional.
   * @param {String} RobotName - robotName. optional.
   * @param {String} AuditStatus - auditStatus. optional.
   * @param {String} AtProfession - atProfession. optional.
   * @param {String} AtSence - atSence. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotv2List(params = {}, options = {}) {
    return this.request('QueryRobotv2List', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryRobotv2ProcessDetail(params = {}, options = {}) {
    return this.request('QueryRobotv2ProcessDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} ProcessName - processName. optional.
   * @param {String} ProcessType - processType. optional.
   */
  queryRobotv2ProcessList(params = {}, options = {}) {
    return this.request('QueryRobotv2ProcessList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  queryRobotv2Profession(params = {}, options = {}) {
    return this.request('QueryRobotv2Profession', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  queryRobotv2SemanticDetail(params = {}, options = {}) {
    return this.request('QueryRobotv2SemanticDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} SemanticName - semanticName. optional.
   * @param {Integer} State - state. optional.
   */
  queryRobotv2SemanticList(params = {}, options = {}) {
    return this.request('QueryRobotv2SemanticList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} DialogType - dialogType. optional.
   * @param {String} DialogName - dialogName. optional.
   * @param {Long} RobotId - robotId. optional.
   */
  queryRobotv2VoiceList(params = {}, options = {}) {
    return this.request('QueryRobotv2VoiceList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} DialogName - dialogName. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryRobotv2WorkorderPageList(params = {}, options = {}) {
    return this.request('QueryRobotv2WorkorderPageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  querySelfLineDetail(params = {}, options = {}) {
    return this.request('QuerySelfLineDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} Number - number. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  querySelfLineNumberPageList(params = {}, options = {}) {
    return this.request('QuerySelfLineNumberPageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ProdType - prodType. optional.
   */
  querySmartCallASROpen(params = {}, options = {}) {
    return this.request('QuerySmartCallASROpen', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} SubjectName - subjectName. optional.
   * @param {Boolean} HasOssUrl - hasOssUrl. optional.
   */
  querySmartCallSubjectList(params = {}, options = {}) {
    return this.request('QuerySmartCallSubjectList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} OrderId - orderId. optional.
   * @param {String} SceneType - sceneType. optional.
   * @param {String} FileName - fileName. optional.
   */
  querySmartCallWorkOrderDetail(params = {}, options = {}) {
    return this.request('QuerySmartCallWorkOrderDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ProdType - prodType. optional.
   * @param {String} AuditState - auditState. optional.
   * @param {String} SubjectName - subjectName. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  querySmartCallWorkOrderList(params = {}, options = {}) {
    return this.request('QuerySmartCallWorkOrderList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} TtsId - ttsId. required.
   */
  queryTtsDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TtsId')) {
      throw new TypeError('parameter "TtsId" is required');
    }

    return this.request('QueryTtsDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TemplateName - templateName. optional.
   * @param {String} PodType - podType. optional.
   * @param {RepeatList} AuditState - auditState. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryTtsInfo(params = {}, options = {}) {
    return this.request('QueryTtsInfo', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
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
  queryUserDeleteStatus(params = {}, options = {}) {
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

    return this.request('QueryUserDeleteStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {String} ResName - resName. optional.
   * @param {Integer} State - state. optional.
   */
  queryValidResInfo(params = {}, options = {}) {
    return this.request('QueryValidResInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  queryVmsExtParam(params = {}, options = {}) {
    return this.request('QueryVmsExtParam', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} Date - date. required.
   */
  queryVmsPackageOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Date')) {
      throw new TypeError('parameter "Date" is required');
    }

    return this.request('QueryVmsPackageOrderList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ProdType - prodType. optional.
   */
  queryVoiceASROpenStatus(params = {}, options = {}) {
    return this.request('QueryVoiceASROpenStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} CallerId - callerId. required.
   * @param {String} Type - type. optional.
   */
  queryVoiceBatchFileOssUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallerId')) {
      throw new TypeError('parameter "CallerId" is required');
    }

    return this.request('QueryVoiceBatchFileOssUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} ProdId - prodId. optional.
   * @param {String} CalledNum - calledNum. required.
   * @param {String} QryDate - qryDate. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryVoiceDetailDTOByProdId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CalledNum')) {
      throw new TypeError('parameter "CalledNum" is required');
    }

    return this.request('QueryVoiceDetailDTOByProdId', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} ProdId - prodId. required.
   * @param {String} CalledNum - calledNum. optional.
   * @param {String} QryDate - qryDate. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryVoiceFailList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('QueryVoiceFailList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} FileName - fileName. optional.
   * @param {RepeatList} AuditState - auditState. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {String} ProdType - prodType. optional.
   */
  queryVoiceFile(params = {}, options = {}) {
    return this.request('QueryVoiceFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} CallerId - callerId. required.
   * @param {String} Type - type. optional.
   */
  queryVoiceFileOssUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallerId')) {
      throw new TypeError('parameter "CallerId" is required');
    }

    return this.request('QueryVoiceFileOssUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} SpecIds - specIds. optional.
   * @param {String} Province - province. optional.
   * @param {String} City - city. optional.
   */
  queryVoiceNumberStockCount(params = {}, options = {}) {
    return this.request('QueryVoiceNumberStockCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   */
  queryVoiceNumberStockInfo(params = {}, options = {}) {
    return this.request('QueryVoiceNumberStockInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} ProdId - prodId. required.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} SortType - sortType. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryVoiceOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('QueryVoiceOverview', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Integer} ProdType - prodType. optional.
   */
  queryVoiceRecordOpenStatus(params = {}, options = {}) {
    return this.request('QueryVoiceRecordOpenStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} ProdId - prodId. optional.
   * @param {String} CalledNum - calledNum. optional.
   * @param {String} CallerNum - callerNum. optional.
   * @param {String} QryDate - qryDate. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryVoiceStatisticsDetail(params = {}, options = {}) {
    return this.request('QueryVoiceStatisticsDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} ProdId - prodId. required.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} SortType - sortType. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryVoiceStatisticsInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('QueryVoiceStatisticsInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} ProdId - prodId. required.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   */
  queryVoiceStatisticsUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProdId')) {
      throw new TypeError('parameter "ProdId" is required');
    }

    return this.request('QueryVoiceStatisticsUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} LoginAliUid - loginAliUid. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} Token - bizToken. optional.
   * @param {String} Sig - sig. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} ExperienceType - experienceType. optional.
   * @param {String} VerificationCode - verificationCode. optional.
   */
  requestExperienceVerifyCode(params = {}, options = {}) {
    return this.request('RequestExperienceVerifyCode', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} DialogContents - dialogContents. optional.
   * @param {Long} RelatedId - relatedId. optional.
   * @param {String} ProcessType - processType. optional.
   */
  saveRobotv2Dialog(params = {}, options = {}) {
    return this.request('SaveRobotv2Dialog', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} LoginAliUid - loginAliUid. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SessionId - sessionId. optional.
   * @param {String} Token - bizToken. optional.
   * @param {String} Sig - sig. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} ExperienceType - experienceType. optional.
   * @param {String} VerificationCode - verificationCode. optional.
   */
  sendVoiceExperience(params = {}, options = {}) {
    return this.request('SendVoiceExperience', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} TaskId - taskId. optional.
   */
  statisticsRobotSaasTaskDetail(params = {}, options = {}) {
    return this.request('StatisticsRobotSaasTaskDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  submitRobot(params = {}, options = {}) {
    return this.request('SubmitRobot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   */
  submitRobotv2(params = {}, options = {}) {
    return this.request('SubmitRobotv2', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} Tts - tts. optional.
   * @param {String} VoiceStyle - voiceStyle. optional.
   * @param {String} VoiceVolume - voiceVolume. optional.
   * @param {String} VoiceSpeed - voiceSpeed. optional.
   */
  testRobotv2Dialog(params = {}, options = {}) {
    return this.request('TestRobotv2Dialog', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} Tts - tts. optional.
   * @param {String} VoiceType - voiceType. optional.
   * @param {String} VoiceStyle - voiceStyle. optional.
   * @param {String} VoiceVolume - voiceVolume. optional.
   * @param {String} VoiceSpeed - voiceSpeed. optional.
   */
  testTtsVoice(params = {}, options = {}) {
    return this.request('TestTtsVoice', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} AccessKey - accessKey. optional.
   * @param {String} Appsecret - appsecret. optional.
   * @param {String} ExternalUrl - externalUrl. optional.
   * @param {String} InvokeFailMedia - invokeFailMedia. optional.
   * @param {String} NotExistMedia - notExistMedia. optional.
   * @param {String} TransWaitMedia - transWaitMedia. optional.
   * @param {String} TransDisableTimeSwitch - transDisableTimeSwitch. optional.
   * @param {String} TransDisableTimeMedia - transDisableTimeMedia. optional.
   * @param {String} DisableTimes - disableTimes. optional.
   * @param {String} DtmfSwitch - dtmfSwitch. optional.
   * @param {String} DtmfFirstMedia - dtmfFirstMedia. optional.
   * @param {String} DtmfNoninMedia - dtmfNoninMedia. optional.
   * @param {Integer} DtmfNoninOvertime - dtmfNoninOvertime. optional.
   * @param {Integer} DtmfMaxCycles - dtmfMaxCycles. optional.
   * @param {String} DtmfReplayCharacter - dtmfReplayCharacter. optional.
   * @param {String} DtmfEndCharacter - dtmfEndCharacter. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} ActionType - actionType. optional.
   * @param {String} ActionTypeParam - actionTypeParam. optional.
   * @param {String} Number - number. optional.
   */
  updateCallInGobalConfig(params = {}, options = {}) {
    return this.request('UpdateCallInGobalConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} AccessKey - accessKey. optional.
   * @param {String} Appsecret - appsecret. optional.
   * @param {String} ExternalUrl - externalUrl. optional.
   * @param {String} InvokeFailMedia - invokeFailMedia. optional.
   * @param {String} NotExistMedia - notExistMedia. optional.
   * @param {String} TransWaitMedia - transWaitMedia. optional.
   * @param {String} TransDisableTimeSwitch - transDisableTimeSwitch. optional.
   * @param {String} TransDisableTimeMedia - transDisableTimeMedia. optional.
   * @param {String} DisableTimes - disableTimes. optional.
   * @param {String} DtmfSwitch - dtmfSwitch. optional.
   * @param {String} DtmfFirstMedia - dtmfFirstMedia. optional.
   * @param {String} DtmfNoninMedia - dtmfNoninMedia. optional.
   * @param {Integer} DtmfNoninOvertime - dtmfNoninOvertime. optional.
   * @param {Integer} DtmfMaxCycles - dtmfMaxCycles. optional.
   * @param {String} DtmfReplayCharacter - dtmfReplayCharacter. optional.
   * @param {String} DtmfEndCharacter - dtmfEndCharacter. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} ActionType - actionType. optional.
   * @param {String} ActionTypeParam - actionTypeParam. optional.
   * @param {String} Number - number. optional.
   */
  updateCallInNumberConfig(params = {}, options = {}) {
    return this.request('UpdateCallInNumberConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} LineName - lineName. optional.
   * @param {String} State - state. optional.
   */
  updateLine(params = {}, options = {}) {
    return this.request('UpdateLine', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} RobotType - robotType. optional.
   * @param {String} RobotName - robotName. optional.
   * @param {String} AsrId - asrId. optional.
   * @param {String} AsrType - asrType. optional.
   * @param {String} Remark - remark. optional.
   */
  updateRobot(params = {}, options = {}) {
    return this.request('UpdateRobot', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} IntentType - intentType. optional.
   * @param {String} IntentName - intentName. optional.
   * @param {String} IntentContent - intentContent. optional.
   */
  updateRobotIntent(params = {}, options = {}) {
    return this.request('UpdateRobotIntent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} KnowledgeName - knowledgeName. optional.
   * @param {String} Questions - questions. optional.
   * @param {String} MediaCode - mediaCode. optional.
   * @param {String} MediaContent - mediaContent. optional.
   * @param {String} SubjectName - subjectName. optional.
   * @param {Boolean} IsBreak - isBreak. optional.
   */
  updateRobotKnowledge(params = {}, options = {}) {
    return this.request('UpdateRobotKnowledge', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} ProcessName - processName. optional.
   * @param {String} ProcessType - processType. optional.
   * @param {String} FullProcessJsonData - fullProcessJsonData. optional.
   */
  updateRobotProcess(params = {}, options = {}) {
    return this.request('UpdateRobotProcess', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. required.
   * @param {String} ProcessName - processName. required.
   */
  updateRobotProcessName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ProcessName')) {
      throw new TypeError('parameter "ProcessName" is required');
    }

    return this.request('UpdateRobotProcessName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} SemanticName - semanticName. optional.
   * @param {String} TouchCondition - touchCondition. optional.
   * @param {Integer} TouchCount - touchCount. optional.
   * @param {String} ExecAction - execAction. optional.
   * @param {String} MediaCode - mediaCode. optional.
   * @param {String} MediaContent - mediaContent. optional.
   * @param {String} SubjectName - subjectName. optional.
   * @param {String} TransferNumber - transferNumber. optional.
   * @param {Integer} State - state. optional.
   * @param {String} Questions - questions. optional.
   * @param {String} SecondAction - secondAction. optional.
   * @param {String} SecondMediaCode - secondMediaCode. optional.
   * @param {String} SecondMediaContent - secondMediaContent. optional.
   * @param {String} SecondSubjectName - secondSubjectName. optional.
   * @param {String} ThirdAction - thirdAction. optional.
   * @param {String} ThirdMediaCode - thirdMediaCode. optional.
   * @param {String} ThirdMediaContent - thirdMediaContent. optional.
   * @param {String} ThirdSubjectName - thirdSubjectName. optional.
   * @param {String} IntentIds - intentIds. optional.
   */
  updateRobotSemantic(params = {}, options = {}) {
    return this.request('UpdateRobotSemantic', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {String} VoiceCode - voiceCode. required.
   * @param {String} VoiceContent - voiceContent. required.
   */
  updateRobotVoiceContent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VoiceCode')) {
      throw new TypeError('parameter "VoiceCode" is required');
    }

    if (!hasOwnProperty(params, 'VoiceContent')) {
      throw new TypeError('parameter "VoiceContent" is required');
    }

    return this.request('UpdateRobotVoiceContent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} RobotType - robotType. optional.
   * @param {String} RobotName - robotName. optional.
   * @param {String} AsrId - asrId. optional.
   * @param {String} AsrType - asrType. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} AtProfession - atProfession. optional.
   * @param {String} AtSence - atSence. optional.
   * @param {String} VoiceStyle - voiceStyle. optional.
   * @param {String} VoiceSpeed - voiceSpeed. optional.
   * @param {String} VoiceVolume - voiceVolume. optional.
   */
  updateRobotv2(params = {}, options = {}) {
    return this.request('UpdateRobotv2', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} DialogId - dialogId. optional.
   * @param {Long} SubDialogId - subDialogId. optional.
   * @param {String} VoiceFile - voiceFile. optional.
   * @param {String} FileId - fileId. optional.
   * @param {String} VoiceCode - voiceCode. optional.
   * @param {String} VoiceType - voiceType. optional.
   * @param {Long} VoiceId - voiceId. optional.
   * @param {Boolean} IsChanged - isChanged. optional.
   */
  updateRobotv2DialogRel(params = {}, options = {}) {
    return this.request('UpdateRobotv2DialogRel', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} IntentName - intentName. optional.
   * @param {String} IntentContent - intentContent. optional.
   * @param {String} RuleContent - ruleContent. optional.
   * @param {String} Remark - remark. optional.
   */
  updateRobotv2Intent(params = {}, options = {}) {
    return this.request('UpdateRobotv2Intent', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} KnowledgeName - knowledgeName. optional.
   * @param {String} KnowledgeType - knowledgeType. optional.
   * @param {String} Questions - questions. optional.
   * @param {String} RuleContent - ruleContent. optional.
   * @param {String} AnswerType - answerType. optional.
   * @param {String} ExeAction - exeAction. optional.
   * @param {Long} ProcessId - processId. optional.
   * @param {String} TransferNumber - transferNumber. optional.
   * @param {Boolean} IsBreak - isBreak. optional.
   * @param {String} DialogJson - dialogJson. optional.
   * @param {String} TransferType - transferType. optional.
   * @param {String} OtherProcessId - otherProcessId. optional.
   * @param {String} Remark - remark. optional.
   */
  updateRobotv2Knowledge(params = {}, options = {}) {
    return this.request('UpdateRobotv2Knowledge', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {String} ProcessName - processName. optional.
   * @param {String} ProcessType - processType. optional.
   * @param {String} FullProcessJsonData - fullProcessJsonData. optional.
   * @param {Boolean} ValidatePass - validatePass. optional.
   */
  updateRobotv2Process(params = {}, options = {}) {
    return this.request('UpdateRobotv2Process', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyvms.
   * @param {Long} Id - id. optional.
   * @param {Long} RobotId - robotId. optional.
   * @param {String} Remark - remark. optional.
   * @param {Integer} TouchCount - touchCount. optional.
   * @param {String} ExeAction - exeAction. optional.
   * @param {String} TransferNumber - transferNumber. optional.
   * @param {Long} DialogId - dialogId. optional.
   * @param {String} DialogContent - dialogContent. optional.
   * @param {Long} SecondDialogId - secondDialogId. optional.
   * @param {String} SecondDialogContent - secondDialogContent. optional.
   * @param {Long} ThirdDialogId - thirdDialogId. optional.
   * @param {String} ThirdDialogContent - thirdDialogContent. optional.
   * @param {String} IntentIds - intentIds. optional.
   * @param {Integer} State - state. optional.
   */
  updateRobotv2Semantic(params = {}, options = {}) {
    return this.request('UpdateRobotv2Semantic', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProdCode - prodCode. optional. default: default.
   * @param {String} data - data. required.
   */
  validateOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ValidateOrder', params, options);
  }

}

module.exports = Client;
