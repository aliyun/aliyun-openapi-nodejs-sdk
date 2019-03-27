
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-10';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} data - data. required.
   */
  completeOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} Remark - remark. optional.
   * @param {String} HopeFileName - hopeFileName. optional.
   * @param {String} Iccid - iccid. optional.
   * @param {Long} Vendor - vendor. optional.
   * @param {Integer} CardStatus - cardStatus. optional.
   * @param {Long} DistCardStatus - distCardStatus. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} BuyType - buyType. optional.
   * @param {String} OrderId - orderId. optional.
   * @param {String} DataType - dataType. optional.
   * @param {String} WillStopRange - willStopRange. optional.
   */
  createExportIotCardMrgFileTask(params = {}, options = {}) {
    return this.request('CreateExportIotCardMrgFileTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} UserViewFileName - userViewFileName. required.
   * @param {String} SaveOssFileName - saveOssFileName. required.
   * @param {String} BizType - bizType. required.
   * @param {String} BizId - bizId. optional.
   * @param {String} Remark - remark. optional.
   * @param {String} FileType - fileType. optional.
   */
  createFileByBiz(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserViewFileName')) {
      throw new TypeError('parameter "UserViewFileName" is required');
    }

    if (!hasOwnProperty(params, 'SaveOssFileName')) {
      throw new TypeError('parameter "SaveOssFileName" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    return this.request('CreateFileByBiz', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} GroupName - groupName. required.
   */
  createGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('CreateGroup', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} QueueType - queueType. optional.
   */
  createMessageQueue(params = {}, options = {}) {
    return this.request('CreateMessageQueue', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
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
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
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
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} BizType - bizType. optional.
   * @param {String} DeleFileIds - deleFileIds. optional.
   */
  deleExportIotCardMrgFielTask(params = {}, options = {}) {
    return this.request('DeleExportIotCardMrgFielTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} Ids - ids. required.
   */
  deleteIotDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ids')) {
      throw new TypeError('parameter "Ids" is required');
    }

    return this.request('DeleteIotDevices', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} QueueType - queueType. optional.
   */
  deleteMessageQueue(params = {}, options = {}) {
    return this.request('DeleteMessageQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} BizType - bizType. optional.
   * @param {Long} FileId - fileId. optional.
   */
  getExportIotCardMrgFileURL(params = {}, options = {}) {
    return this.request('GetExportIotCardMrgFileURL', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} ToGroupId - toGroupId. required.
   * @param {String} Cards - cards. required.
   */
  moveCardToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ToGroupId')) {
      throw new TypeError('parameter "ToGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Cards')) {
      throw new TypeError('parameter "Cards" is required');
    }

    return this.request('MoveCardToGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} FromGroupId - fromGroupId. required.
   * @param {Long} ToGroupId - toGroupId. required.
   * @param {Boolean} IsDelete - isDelete. optional.
   */
  moveGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromGroupId')) {
      throw new TypeError('parameter "FromGroupId" is required');
    }

    if (!hasOwnProperty(params, 'ToGroupId')) {
      throw new TypeError('parameter "ToGroupId" is required');
    }

    return this.request('MoveGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
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
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   */
  queryBuyedNum(params = {}, options = {}) {
    return this.request('QueryBuyedNum', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} Vendor - vendor. optional.
   * @param {String} DataType - dataType. optional.
   */
  queryCardClassify(params = {}, options = {}) {
    return this.request('QueryCardClassify', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} Vendor - vendor. optional.
   * @param {Integer} CardStatus - cardStatus. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} DataType - dataType. optional.
   * @param {String} DataLevel - dataLevel. optional.
   * @param {String} VoiceLevel - voiceLevel. optional.
   * @param {String} Expire - expire. optional.
   */
  queryCheckResult(params = {}, options = {}) {
    return this.request('QueryCheckResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   */
  queryCustInfo(params = {}, options = {}) {
    return this.request('QueryCustInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} DistCardStatus - distCardStatus. optional.
   * @param {String} OrderId - orderId. optional.
   * @param {String} SaleType - saleType. optional.
   */
  queryDisbutionCardCount(params = {}, options = {}) {
    return this.request('QueryDisbutionCardCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} OrderStatus - orderStatus. optional.
   * @param {String} SaleType - saleType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryDistributionLxOrderList(params = {}, options = {}) {
    return this.request('QueryDistributionLxOrderList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   */
  queryDynamicComplete(params = {}, options = {}) {
    return this.request('QueryDynamicComplete', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} BizType - bizType. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Status - status. optional.
   */
  queryExportIotCardMrgFileTaskByPage(params = {}, options = {}) {
    return this.request('QueryExportIotCardMrgFileTaskByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   */
  queryGroups(params = {}, options = {}) {
    return this.request('QueryGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryGroupsByPage(params = {}, options = {}) {
    return this.request('QueryGroupsByPage', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} FileId - fileId. required.
   */
  queryImeiAnalysisResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileId')) {
      throw new TypeError('parameter "FileId" is required');
    }

    return this.request('QueryImeiAnalysisResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} Iccid - iccid. required.
   * @param {String} BuyType - buyType. optional.
   */
  queryIotCardDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Iccid')) {
      throw new TypeError('parameter "Iccid" is required');
    }

    return this.request('QueryIotCardDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} Iccid - iccid. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {Integer} CardStatus - cardStatus. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} BuyType - buyType. optional.
   * @param {String} OrderId - orderId. optional.
   * @param {Long} DistCardStatus - distCardStatus. optional.
   * @param {String} DataType - dataType. optional.
   * @param {String} DataLevel - dataLevel. optional.
   * @param {String} VoiceLevel - voiceLevel. optional.
   * @param {String} Expire - expire. optional.
   * @param {String} WillStopRange - willStopRange. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryIotCardsByCust(params = {}, options = {}) {
    return this.request('QueryIotCardsByCust', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Long} OwnerCustId - ownerCustId. optional.
   * @param {String} BizStatus - bizStatus. optional.
   * @param {Integer} SortType - sortType. optional.
   * @param {String} Imei - imei. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryIotDevices(params = {}, options = {}) {
    return this.request('QueryIotDevices', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   */
  queryIotDisbutionRole(params = {}, options = {}) {
    return this.request('QueryIotDisbutionRole', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   */
  queryIotDisbutionUser(params = {}, options = {}) {
    return this.request('QueryIotDisbutionUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Integer} OrderByTime - orderByTime. optional.
   * @param {String} OrderStatus - orderStatus. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryLxOrderList(params = {}, options = {}) {
    return this.request('QueryLxOrderList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} QueueTypes - queueTypes. optional.
   */
  queryMessageQueue(params = {}, options = {}) {
    return this.request('QueryMessageQueue', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} FromGroupId - fromGroupId. required.
   * @param {Long} ToGroupId - toGroupId. required.
   */
  queryMoveGroupStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FromGroupId')) {
      throw new TypeError('parameter "FromGroupId" is required');
    }

    if (!hasOwnProperty(params, 'ToGroupId')) {
      throw new TypeError('parameter "ToGroupId" is required');
    }

    return this.request('QueryMoveGroupStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
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
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Integer} OrderByTime - orderByTime. optional.
   * @param {String} OrdId - ordId. optional.
   * @param {String} OrderId - orderId. optional.
   * @param {String} OrderStatus - orderStatus. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  queryOrderList(params = {}, options = {}) {
    return this.request('QueryOrderList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   */
  queryPersonCertNum(params = {}, options = {}) {
    return this.request('QueryPersonCertNum', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} OrderId - orderId. optional.
   */
  queryRechargeCount(params = {}, options = {}) {
    return this.request('QueryRechargeCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Source - source. optional.
   * @param {Long} OrderId - orderId. optional.
   * @param {String} ChargeStatus - chargeStatus. optional.
   * @param {String} Iccid - iccid. optional.
   * @param {Integer} SortType - sortType. optional.
   */
  queryRechargeHis(params = {}, options = {}) {
    return this.request('QueryRechargeHis', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} BizType - bizType. optional.
   * @param {Boolean} IsNeedIns - isNeedIns. optional.
   */
  queryRechargeHisAtDayu(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryRechargeHisAtDayu', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} Vendor - vendor. required.
   * @param {Long} DataLevel - dataLevel. required.
   * @param {String} DataType - dataType. optional.
   */
  querySharedPoolInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vendor')) {
      throw new TypeError('parameter "Vendor" is required');
    }

    if (!hasOwnProperty(params, 'DataLevel')) {
      throw new TypeError('parameter "DataLevel" is required');
    }

    return this.request('QuerySharedPoolInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} Vendor - vendor. required.
   * @param {String} DataType - dataType. optional.
   */
  querySharedPoolList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Vendor')) {
      throw new TypeError('parameter "Vendor" is required');
    }

    return this.request('QuerySharedPoolList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} BuyedNum - buyedNum. optional.
   */
  queryUploadedImeiNum(params = {}, options = {}) {
    return this.request('QueryUploadedImeiNum', params, options);
  }

  /**
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
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
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {Long} GroupId - groupId. required.
   * @param {String} GroupName - groupName. required.
   */
  updateGroupName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('UpdateGroupName', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
   * @param {String} Iccid - iccid. optional.
   * @param {String} Remark - remark. optional.
   */
  updateIotCard(params = {}, options = {}) {
    return this.request('UpdateIotCard', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dyiot.
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
