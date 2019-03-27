
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-24';
    super(config);
  }

  /**
   * @param {String} MaterialId - materialId. optional.
   * @param {String} BizId - bizId. optional.
   * @param {String} LoaOssKey - loaOssKey. optional.
   */
  bindMaterial(params = {}, options = {}) {
    return this.request('BindMaterial', params, options);
  }

  /**
   * @param {String} OssKey - ossKey. required.
   * @param {String} Type - letterType. required.
   */
  checkLoaFill(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OssKey')) {
      throw new TypeError('parameter "OssKey" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CheckLoaFill', params, options);
  }

  /**
   * @param {String} MaterialId - materialId. optional.
   * @param {String} TrademarkName - trademarkName. optional.
   * @param {String} MaterialName - materialName. optional.
   * @param {String} Nationality - nationality. optional.
   * @param {String} Address - address. optional.
   * @param {String} TmProduceType - tmProduceType. optional.
   */
  combineLoa(params = {}, options = {}) {
    return this.request('CombineLoa', params, options);
  }

  /**
   * @param {String} OssKey - ossKey. required.
   */
  convertImageToGray(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OssKey')) {
      throw new TypeError('parameter "OssKey" is required');
    }

    return this.request('ConvertImageToGray', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} TmName - tmName. required.
   * @param {String} TmIcon - tmIcon. required.
   * @param {Integer} Type - type. optional.
   * @param {String} OrderData - orderData. optional.
   * @param {String} MaterialId - materialId. optional.
   * @param {String} LoaOssKey - loaOssKey. optional.
   * @param {Boolean} IsBlackIcon - isBlackIcon. optional.
   * @param {String} RenewInfoId - renewInfoId. optional.
   * @param {String} RootCode - rootCode. optional.
   * @param {String} Channel - channel. optional.
   * @param {String} RegisterNumber - registerNumber. optional.
   * @param {String} TmNameType - tmNameType. optional.
   * @param {String} RegisterName - registerName. optional.
   * @param {String} TmComment - tmComment. optional.
   */
  createTrademarkOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'TmName')) {
      throw new TypeError('parameter "TmName" is required');
    }

    if (!hasOwnProperty(params, 'TmIcon')) {
      throw new TypeError('parameter "TmIcon" is required');
    }

    return this.request('CreateTrademarkOrder', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  deleteMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteMaterial', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  deleteTmMonitorRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteTmMonitorRule', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  denySupplement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DenySupplement', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Logistics - logistics. required.
   */
  fillLogistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Logistics')) {
      throw new TypeError('parameter "Logistics" is required');
    }

    return this.request('FillLogistics', params, options);
  }

  /**
   * @param {String} Uuid - uuid. optional.
   * @param {String} OssKey - ossKey. optional.
   * @param {String} FieldKey - fieldKey. optional.
   */
  generateQrCode(params = {}, options = {}) {
    return this.request('GenerateQrCode', params, options);
  }

  /**
   * @param {String} FileType - fileType. required.
   */
  generateUploadFilePolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileType')) {
      throw new TypeError('parameter "FileType" is required');
    }

    return this.request('GenerateUploadFilePolicy', params, options);
  }

  /**
   * @param {String} ContactZipcode - contactZipcode. optional.
   * @param {Integer} Type - type. optional.
   * @param {Integer} Region - region. optional.
   * @param {String} ContactName - contactName. optional.
   * @param {String} ContactNumber - contactNumber. optional.
   * @param {String} ContactEmail - contactEmail. optional.
   * @param {String} ContactAddress - contactAddress. optional.
   * @param {String} LoaOssKey - loaOssKey. optional.
   * @param {String} Name - name. optional.
   * @param {String} CardNumber - cardNumber. optional.
   * @param {String} Province - province. optional.
   * @param {String} City - city. optional.
   * @param {String} Town - town. optional.
   * @param {String} Address - address. optional.
   * @param {String} EName - engName. optional.
   * @param {String} EAddress - engAddress. optional.
   * @param {String} Country - country. optional.
   * @param {String} IdCardOssKey - idCardOssKey. optional.
   * @param {String} BusinessLicenceOssKey - businessLicenceOssKey. optional.
   * @param {String} PassportOssKey - passportOssKey. optional.
   * @param {String} LegalNoticeOssKey - legalNoticeOssKey. optional.
   */
  insertMaterial(params = {}, options = {}) {
    return this.request('InsertMaterial', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} EngName - engName. optional.
   * @param {String} Address - address. required.
   * @param {String} EngAddress - engAddress. optional.
   * @param {Long} RegisterTime - registerTime. required.
   */
  insertRenewInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    if (!hasOwnProperty(params, 'RegisterTime')) {
      throw new TypeError('parameter "RegisterTime" is required');
    }

    return this.request('InsertRenewInfo', params, options);
  }

  /**
   * @param {String} RuleSource - ruleSource. required.
   * @param {String} RuleName - ruleName. optional.
   * @param {Integer} RuleType - ruleType. required.
   * @param {String} RuleKeyword - ruleKeyword. required.
   * @param {String} StartApplyDate - startApplyDate. optional.
   * @param {String} EndApplyDate - endApplyDate. optional.
   * @param {Json} Classification - classification. optional.
   * @param {Json} NotifyStatus - notifyStatus. optional.
   */
  insertTmMonitorRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleSource')) {
      throw new TypeError('parameter "RuleSource" is required');
    }

    if (!hasOwnProperty(params, 'RuleType')) {
      throw new TypeError('parameter "RuleType" is required');
    }

    if (!hasOwnProperty(params, 'RuleKeyword')) {
      throw new TypeError('parameter "RuleKeyword" is required');
    }

    return this.request('InsertTmMonitorRule', params, options);
  }

  /**
   * @param {String} OssKey - ossKey. optional.
   * @param {String} MaterialType - materialType. required.
   * @param {String} CompanyName - companyName. optional.
   */
  queryCredentialsInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialType')) {
      throw new TypeError('parameter "MaterialType" is required');
    }

    return this.request('QueryCredentialsInfo', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  queryMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('QueryMaterial', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {Integer} Type - type. optional.
   * @param {Integer} Region - region. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} CardNumber - cardNumber. optional.
   */
  queryMaterialList(params = {}, options = {}) {
    return this.request('QueryMaterialList', params, options);
  }

  /**
   * @param {Integer} RuleType - ruleType. required.
   * @param {RepeatList} Keywords - keywords. required.
   */
  queryMonitorKeywords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleType')) {
      throw new TypeError('parameter "RuleType" is required');
    }

    if (!hasOwnProperty(params, 'Keywords')) {
      throw new TypeError('parameter "Keywords" is required');
    }

    return this.request('QueryMonitorKeywords', params, options);
  }

  /**
   * @param {String} OssKey - ossKey. optional.
   * @param {String} FieldKey - fieldKey. optional.
   * @param {String} Uuid - uuid. optional.
   */
  queryQrCodeUploadStatus(params = {}, options = {}) {
    return this.request('QueryQrCodeUploadStatus', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  querySupplementDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('QuerySupplementDetail', params, options);
  }

  /**
   * @param {String} BizType - bizType. required.
   */
  queryTaskList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('QueryTaskList', params, options);
  }

  /**
   * @param {String} BizId - bizId. optional.
   */
  queryTradeMarkApplicationDetail(params = {}, options = {}) {
    return this.request('QueryTradeMarkApplicationDetail', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   */
  queryTradeMarkApplicationLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('QueryTradeMarkApplicationLogs', params, options);
  }

  /**
   * @param {String} TmName - tmName. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} MaterialName - materialName. optional.
   * @param {String} TmNumber - tmNumber. optional.
   * @param {String} OrderId - orderId. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} SupplementStatus - supplementStatus. optional.
   * @param {String} SortOrder - sortOrder. optional.
   * @param {String} Type - type. optional.
   * @param {String} BizId - bizId. optional.
   */
  queryTradeMarkApplications(params = {}, options = {}) {
    return this.request('QueryTradeMarkApplications', params, options);
  }

  /**
   * @param {Long} RuleId - ruleId. required.
   * @param {Integer} ActionType - actionType. optional.
   * @param {Integer} ProcedureStatus - tmProcedureStatus. optional.
   * @param {String} TmName - tmName. optional.
   * @param {String} ApplyYear - applyYear. optional.
   * @param {String} RegistrationNumber - registrationNumber. optional.
   * @param {String} Classification - classification. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryTrademarkMonitorResults(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('QueryTrademarkMonitorResults', params, options);
  }

  /**
   * @param {String} Id - id. optional.
   * @param {String} RuleName - ruleName. optional.
   * @param {Integer} NotifyUpdate - notifyUpdate. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryTrademarkMonitorRules(params = {}, options = {}) {
    return this.request('QueryTrademarkMonitorRules', params, options);
  }

  /**
   * @param {Long} UserId - userId. required.
   * @param {String} TmName - tmName. optional.
   * @param {String} TmIcon - tmIcon. optional.
   * @param {Integer} Type - type. optional.
   * @param {Json} OrderData - orderData. required.
   */
  queryTrademarkPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'OrderData')) {
      throw new TypeError('parameter "OrderData" is required');
    }

    return this.request('QueryTrademarkPrice', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   */
  refundProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('RefundProduce', params, options);
  }

  /**
   * @param {String} Request - request. required.
   * @param {String} BizType - bizType. required.
   */
  saveTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Request')) {
      throw new TypeError('parameter "Request" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('SaveTask', params, options);
  }

  /**
   * @param {String} ContactZipcode - contactZipcode. optional.
   * @param {String} Type - type. optional.
   * @param {String} Region - region. optional.
   * @param {String} ContactName - contactName. optional.
   * @param {String} ContactNumber - contactNumber. optional.
   * @param {String} ContactEmail - contactEmail. optional.
   * @param {String} ContactAddress - contactAddress. optional.
   * @param {String} LoaOssKey - loaOssKey. optional.
   * @param {String} Name - name. optional.
   * @param {String} CardNumber - cardNumber. optional.
   * @param {String} Province - province. optional.
   * @param {String} City - city. optional.
   * @param {String} Town - town. optional.
   * @param {String} Address - address. optional.
   * @param {String} EName - engName. optional.
   * @param {String} EAddress - engAddress. optional.
   * @param {String} Country - country. optional.
   * @param {String} IdCardOssKey - idCardOssKey. optional.
   * @param {String} BusinessLicenceOssKey - businessLicenceOssKey. optional.
   * @param {String} PassportOssKey - passportOssKey. optional.
   * @param {String} LegalNoticeOssKey - legalNoticeOssKey. optional.
   */
  storeMaterialTemporarily(params = {}, options = {}) {
    return this.request('StoreMaterialTemporarily', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Json} UploadOssKeyList - uploadOssKeyList. optional.
   * @param {String} Content - content. optional.
   */
  submitSupplement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('SubmitSupplement', params, options);
  }

  /**
   * @param {Long} LoaId - loaId. optional.
   * @param {String} ContactAddress - contactAddress. optional.
   * @param {String} ContactName - contactName. optional.
   * @param {String} ContactNumber - contactNumber. optional.
   * @param {String} ContactEmail - contactEmail. optional.
   * @param {Long} Id - id. required.
   * @param {String} ContactZipcode - contactZipcode. optional.
   * @param {String} Name - name. optional.
   * @param {String} CardNumber - cardNumber. optional.
   * @param {String} Province - province. optional.
   * @param {String} City - city. optional.
   * @param {String} Town - town. optional.
   * @param {String} Address - address. optional.
   * @param {String} EName - engName. optional.
   * @param {String} EAddress - engAddress. optional.
   * @param {String} IdCardOssKey - idCardOssKey. optional.
   * @param {String} BusinessLicenceOssKey - businessLicenceOssKey. optional.
   * @param {String} PassportOssKey - passportOssKey. optional.
   * @param {String} LoaOssKey - loaOssKey. optional.
   * @param {String} LegalNoticeOssKey - legalNoticeOssKey. optional.
   */
  updateMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateMaterial', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} RuleName - ruleName. optional.
   * @param {RepeatList} NotifyStatus - notifyStatus. optional.
   */
  updateTmMonitorRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateTmMonitorRule', params, options);
  }

}

module.exports = Client;
