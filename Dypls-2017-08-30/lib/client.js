
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-30';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. required.
   * @param {String} BillId - billId. required.
   * @param {String} SecretNo - secretNo. optional.
   * @param {String} PhoneNoA - phoneNoA. optional.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} CallDate - callDate. required.
   * @param {String} CallId - callId. optional.
   */
  applyCallRecordExport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    if (!hasOwnProperty(params, 'CallDate')) {
      throw new TypeError('parameter "CallDate" is required');
    }

    return this.request('ApplyCallRecordExport', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} GroupId - groupId. required.
   * @param {String} PoolKey - poolKey. optional.
   */
  applyGroupNumberExport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('ApplyGroupNumberExport', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} SecretNo - secretNo. optional.
   * @param {Integer} ResType - resType. optional.
   * @param {String} BillId - billId. required.
   * @param {String} PhoneNoA - phoneNoA. optional.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} AxnExtensionB - axnExtensionB. optional.
   * @param {String} ExpTime - expTime. optional.
   * @param {Boolean} IsRecord - isRecord. optional.
   */
  bindResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('BindResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BillId - billId. required.
   * @param {String} OperateType - operateType. required.
   * @param {String} BlackType - blackType. required.
   * @param {String} BlackMap - blackMap. required.
   */
  blackOperate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    if (!hasOwnProperty(params, 'BlackType')) {
      throw new TypeError('parameter "BlackType" is required');
    }

    if (!hasOwnProperty(params, 'BlackMap')) {
      throw new TypeError('parameter "BlackMap" is required');
    }

    return this.request('BlackOperate', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} PhoneNo - phoneNo. required.
   */
  createCertifyInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNo')) {
      throw new TypeError('parameter "PhoneNo" is required');
    }

    return this.request('CreateCertifyInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} GroupId - groupId. required.
   * @param {String} PoolKey - poolKey. required.
   * @param {String} NumberList - numberList. required.
   */
  createGroupDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    if (!hasOwnProperty(params, 'NumberList')) {
      throw new TypeError('parameter "NumberList" is required');
    }

    return this.request('CreateGroupDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} Name - name. required.
   * @param {String} NumberList - numberList. optional.
   * @param {String} PoolKey - poolKey. required.
   */
  createGroupInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    return this.request('CreateGroupInfo', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dypls.
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
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BizType - bizType. required.
   * @param {String} QueueName - queueName. optional.
   * @param {String} QueueTitle - queueTitle. required.
   * @param {String} BillIds - billIds. required.
   */
  createMessageQueue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    if (!hasOwnProperty(params, 'QueueTitle')) {
      throw new TypeError('parameter "QueueTitle" is required');
    }

    if (!hasOwnProperty(params, 'BillIds')) {
      throw new TypeError('parameter "BillIds" is required');
    }

    return this.request('CreateMessageQueue', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dypls.
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
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. required.
   * @param {String} PoolName - poolName. required.
   */
  createPoolInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    if (!hasOwnProperty(params, 'PoolName')) {
      throw new TypeError('parameter "PoolName" is required');
    }

    return this.request('CreatePoolInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
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
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} ResType - resType. required.
   * @param {String} PhoneA - phoneA. required.
   * @param {String} PhoneB - phoneB. optional.
   */
  createSubsTrial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    if (!hasOwnProperty(params, 'PhoneA')) {
      throw new TypeError('parameter "PhoneA" is required');
    }

    return this.request('CreateSubsTrial', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} CertifyId - certifyId. required.
   */
  deleteCertifyInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertifyId')) {
      throw new TypeError('parameter "CertifyId" is required');
    }

    return this.request('DeleteCertifyInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} GroupId - groupId. optional.
   * @param {String} PoolKey - poolKey. required.
   * @param {String} IdList - idList. required.
   */
  deleteGroupDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    if (!hasOwnProperty(params, 'IdList')) {
      throw new TypeError('parameter "IdList" is required');
    }

    return this.request('DeleteGroupDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BizType - bizType. optional.
   */
  downloadComplete(params = {}, options = {}) {
    return this.request('DownloadComplete', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} SecretNo - secretNo. optional.
   * @param {Integer} ResType - resType. optional.
   * @param {String} BillId - billId. required.
   * @param {Integer} ResBindStatus - resBindStatus. optional.
   */
  exportRes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('ExportRes', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProdCode - prodCode. optional. default: dysms.
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
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BillId - billId. required.
   * @param {String} SmsChannel - smsChannel. optional.
   * @param {String} SelectXMode - selectXMode. optional.
   * @param {Boolean} NeedAllCallRecords - needAllCallRecords. optional.
   */
  poolConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('PoolConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} RegionName - regionName. required.
   * @param {String} NoLike - noLike. optional.
   * @param {String} UsageScenarios - usageScenarios. optional.
   * @param {Integer} BuyNumber - buyNumber. required.
   * @param {Integer} ResType - resType. required.
   * @param {Long} SpecId - specId. optional.
   * @param {String} BillId - billId. optional.
   * @param {Boolean} IsDisplayPool - isDisplayPool. optional.
   */
  purchaseResources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionName')) {
      throw new TypeError('parameter "RegionName" is required');
    }

    if (!hasOwnProperty(params, 'BuyNumber')) {
      throw new TypeError('parameter "BuyNumber" is required');
    }

    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    return this.request('PurchaseResources', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. optional.
   * @param {String} BillId - billId. required.
   * @param {String} SecretNo - secretNo. optional.
   * @param {String} PhoneNoA - phoneNoA. optional.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} SubId - subId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryBindingDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('QueryBindingDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BillId - billId. required.
   * @param {String} BlackType - blackType. required.
   * @param {String} BlackPrefix - blackPrefix. optional.
   * @param {Integer} PageNo - page. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    if (!hasOwnProperty(params, 'BlackType')) {
      throw new TypeError('parameter "BlackType" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryBlackList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   */
  queryBuyPageInitData(params = {}, options = {}) {
    return this.request('QueryBuyPageInitData', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. required.
   * @param {Long} SpecId - specId. optional.
   * @param {String} City - city. optional.
   * @param {String} Like - like. optional.
   */
  queryBuyPageResCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    return this.request('QueryBuyPageResCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. required.
   * @param {Long} SpecId - specId. optional.
   * @param {String} Like - like. optional.
   */
  queryBuyPageResInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    return this.request('QueryBuyPageResInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. required.
   * @param {String} BillId - billId. required.
   * @param {String} SecretNo - secretNo. optional.
   * @param {String} PhoneNoA - phoneNoA. optional.
   * @param {String} PhoneNoB - phoneNoB. optional.
   * @param {String} CallDate - callDate. required.
   * @param {String} CallId - callId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryCallRecordingList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    if (!hasOwnProperty(params, 'CallDate')) {
      throw new TypeError('parameter "CallDate" is required');
    }

    return this.request('QueryCallRecordingList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} PhoneNo - phoneNo. optional.
   * @param {String} CertifyStatus - certifyStatus. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryCertifyInfoList(params = {}, options = {}) {
    return this.request('QueryCertifyInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   */
  queryCertifyOverviewInfo(params = {}, options = {}) {
    return this.request('QueryCertifyOverviewInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   */
  queryCustInfo(params = {}, options = {}) {
    return this.request('QueryCustInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BizType - bizType. optional.
   */
  queryDownloadUrl(params = {}, options = {}) {
    return this.request('QueryDownloadUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. required.
   * @param {String} BillId - billId. required.
   * @param {String} TaskId - taskId. required.
   */
  queryExportResUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryExportResUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} GroupId - groupId. required.
   * @param {String} PoolKey - poolKey. required.
   * @param {String} Number - number. optional.
   * @param {String} PageSize - pageSize. required.
   * @param {String} PageNo - pageNo. required.
   */
  queryGroupDetailList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('QueryGroupDetailList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} PoolKey - poolKey. required.
   * @param {String} QueryKey - queryKey. optional.
   * @param {String} PageSize - pageSize. required.
   * @param {String} PageNo - pageNo. required.
   */
  queryGroupInfoList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('QueryGroupInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BizType - bizType. required.
   */
  queryMessageQueueList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('QueryMessageQueueList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} ItemName - itemName. optional.
   * @param {String} ItemId - itemId. optional.
   * @param {String} SubjectItemId - subjectItemId. optional.
   * @param {String} BillCycle - billCycle. optional.
   */
  queryMonthlyBillInfo(params = {}, options = {}) {
    return this.request('QueryMonthlyBillInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BillId - billId. optional.
   * @param {Integer} PageNo - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryNoBuyTasks(params = {}, options = {}) {
    return this.request('QueryNoBuyTasks', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
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
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} Status - status. optional.
   */
  queryPackageDetail(params = {}, options = {}) {
    return this.request('QueryPackageDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BillCycle - billCycle. optional.
   */
  queryPackageList(params = {}, options = {}) {
    return this.request('QueryPackageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   */
  queryPackageStatistics(params = {}, options = {}) {
    return this.request('QueryPackageStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} BillId - billId. required.
   */
  queryPoolCityList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('QueryPoolCityList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. required.
   * @param {String} PoolName - poolName. optional.
   * @param {String} PageSize - pageSize. required.
   * @param {String} PageNo - pageNo. required.
   */
  queryPoolInfoList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    return this.request('QueryPoolInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   */
  queryPoolStatisticsInfo(params = {}, options = {}) {
    return this.request('QueryPoolStatisticsInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   */
  queryPoolSummaryInfo(params = {}, options = {}) {
    return this.request('QueryPoolSummaryInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. optional.
   * @param {String} BillId - billId. required.
   */
  queryPurchasedInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('QueryPurchasedInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} SecretNo - secretNo. optional.
   * @param {Integer} ResType - resType. optional.
   * @param {String} BillId - billId. optional.
   * @param {Boolean} IsDisplayPool - isDisplayPool. optional.
   * @param {Integer} ResBindStatus - resBindStatus. optional.
   * @param {String} City - city. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryPurchasedResList(params = {}, options = {}) {
    return this.request('QueryPurchasedResList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} CallId - callId. required.
   * @param {String} CallDate - callDate. required.
   * @param {Integer} ResType - resType. required.
   * @param {String} BillId - billId. required.
   */
  queryRecordingUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'CallDate')) {
      throw new TypeError('parameter "CallDate" is required');
    }

    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('QueryRecordingUrl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   */
  queryResSummaryInfo(params = {}, options = {}) {
    return this.request('QueryResSummaryInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. required.
   * @param {String} PoolName - poolName. optional.
   */
  querySimplePoolInfoList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    return this.request('QuerySimplePoolInfoList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} ResType - resType. optional.
   * @param {String} BillId - billId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryStatisticsInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('QueryStatisticsInfo', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dypls.
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
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   */
  queryUserInfo(params = {}, options = {}) {
    return this.request('QueryUserInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   */
  queryUserResPoolInfo(params = {}, options = {}) {
    return this.request('QueryUserResPoolInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} SecretNo - secretNo. optional.
   * @param {Integer} ResType - resType. optional.
   * @param {String} BillId - billId. required.
   * @param {Boolean} IsDisplayPool - isDisplayPool. optional.
   */
  releaseResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('ReleaseResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} SecretNo - secretNo. optional.
   * @param {Integer} ResType - resType. optional.
   * @param {String} BillId - billId. required.
   * @param {String} BindIds - bindIds. optional.
   */
  unbindResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    return this.request('UnbindResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} Id - id. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} PoolKey - poolKey. required.
   * @param {String} Remark - remark. optional.
   */
  updateGroupDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    return this.request('UpdateGroupDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} Id - id. required.
   * @param {String} PoolKey - poolKey. required.
   * @param {String} Name - name. optional.
   * @param {String} Remark - remark. optional.
   */
  updateGroupInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'PoolKey')) {
      throw new TypeError('parameter "PoolKey" is required');
    }

    return this.request('UpdateGroupInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {Integer} ResType - resType. required.
   * @param {String} BillId - billId. required.
   * @param {String} PoolName - poolName. required.
   */
  updatePoolName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResType')) {
      throw new TypeError('parameter "ResType" is required');
    }

    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    if (!hasOwnProperty(params, 'PoolName')) {
      throw new TypeError('parameter "PoolName" is required');
    }

    return this.request('UpdatePoolName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypls.
   * @param {String} SecretNo - secretNo. optional.
   * @param {Integer} ResType - resType. optional.
   * @param {String} BillId - billId. required.
   * @param {String} Remark - remark. required.
   */
  updateResRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BillId')) {
      throw new TypeError('parameter "BillId" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('UpdateResRemark', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
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
