
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-01';
    super(config);
  }

  /**
   * @param {RepeatList} ItemInfo - items. required.
   * @param {String} StoreId - storeId. required.
   */
  batchInsertItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemInfo')) {
      throw new TypeError('parameter "ItemInfo" is required');
    }

    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    return this.request('BatchInsertItems', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} EslBarCode - eslBarCode. required.
   * @param {String} ItemBarCode - itemBarCode. required.
   */
  bindEslDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    if (!hasOwnProperty(params, 'EslBarCode')) {
      throw new TypeError('parameter "EslBarCode" is required');
    }

    if (!hasOwnProperty(params, 'ItemBarCode')) {
      throw new TypeError('parameter "ItemBarCode" is required');
    }

    return this.request('BindEslDevice', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} EslBarCode - eslBarCode. required.
   * @param {String} ShelfCode - shelfCode. required.
   */
  bindEslDeviceShelf(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    if (!hasOwnProperty(params, 'EslBarCode')) {
      throw new TypeError('parameter "EslBarCode" is required');
    }

    if (!hasOwnProperty(params, 'ShelfCode')) {
      throw new TypeError('parameter "ShelfCode" is required');
    }

    return this.request('BindEslDeviceShelf', params, options);
  }

  /**
   * @param {String} CompanyId - companyId. required.
   * @param {String} StoreName - storeName. required.
   * @param {String} Brand - brand. optional.
   * @param {String} OutId - outId. optional.
   * @param {String} Groups - groups. optional.
   * @param {String} Comments - comments. optional.
   * @param {String} ParentId - parentId. optional.
   * @param {String} Phone - phone. optional.
   */
  createStore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyId')) {
      throw new TypeError('parameter "CompanyId" is required');
    }

    if (!hasOwnProperty(params, 'StoreName')) {
      throw new TypeError('parameter "StoreName" is required');
    }

    return this.request('CreateStore', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} EslBarCode - eslBarCode. required.
   */
  deleteEslDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    if (!hasOwnProperty(params, 'EslBarCode')) {
      throw new TypeError('parameter "EslBarCode" is required');
    }

    return this.request('DeleteEslDevice', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} ItemBarCode - itemBarCode. required.
   */
  deleteItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    if (!hasOwnProperty(params, 'ItemBarCode')) {
      throw new TypeError('parameter "ItemBarCode" is required');
    }

    return this.request('DeleteItem', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} SkuId - skuId. required.
   */
  deleteItemBySkuId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    if (!hasOwnProperty(params, 'SkuId')) {
      throw new TypeError('parameter "SkuId" is required');
    }

    return this.request('DeleteItemBySkuId', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   */
  deleteStore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    return this.request('DeleteStore', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} AlarmId - alarmId. optional.
   * @param {String} AlarmType - alarmType. optional.
   * @param {String} ErrorType - errorType. optional.
   * @param {String} AlarmStatus - alarmStatus. optional.
   * @param {String} FromAlarmTime - fromAlarmTime. optional.
   * @param {String} ToAlarmTime - toAlarmTime. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeAlarms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    return this.request('DescribeAlarms', params, options);
  }

  /**
   */
  describeCompany(params = {}, options = {}) {
    return this.request('DescribeCompany', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} EslBarCode - eslBarCode. optional.
   * @param {String} Mac - mac. optional.
   * @param {String} Vendor - vendor. optional.
   * @param {String} Type - type. optional.
   * @param {String} ShelfCode - shelfCode. optional.
   * @param {String} EslStatus - eslStatus. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {Integer} FromBatteryLevel - fromBatteryLevel. optional.
   * @param {Integer} ToBatteryLevel - toBatteryLevel. optional.
   * @param {Boolean} BeBind - beBind. optional.
   * @param {String} ItemBarCode - itemBarCode. optional.
   */
  describeEslDevices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    return this.request('DescribeEslDevices', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} ItemBarCode - itemBarCode. optional.
   * @param {Long} ItemId - itemId. optional.
   * @param {String} ItemTitle - itemTitle. optional.
   * @param {String} SkuId - skuId. optional.
   * @param {Boolean} BePromotion - bePromotion. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ShelfCode - shelfCode. optional.
   */
  describeItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    return this.request('DescribeItems', params, options);
  }

  /**
   * @param {String} StoreId - storeId. optional.
   * @param {String} StoreName - storeName. optional.
   * @param {String} Brand - brand. optional.
   * @param {String} Groups - groups. optional.
   * @param {String} FromDate - fromDate. optional.
   * @param {String} ToDate - toDate. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeStores(params = {}, options = {}) {
    return this.request('DescribeStores', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} EslBarCode - eslBarCode. optional.
   * @param {String} ItemBarCode - itemBarCode. optional.
   * @param {Long} ItemId - itemId. optional.
   * @param {String} ItemTitle - itemTitle. optional.
   * @param {String} OperateType - operateType. optional.
   * @param {String} OperateStatus - operateStatus. optional.
   * @param {Long} OperateUserId - operateUserId. optional.
   * @param {String} FromDate - fromDate. optional.
   * @param {String} ToDate - toDate. optional.
   * @param {Boolean} Reverse - reverse. optional. default: false.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeUserOperationLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    return this.request('DescribeUserOperationLog', params, options);
  }

  /**
   * @param {String} UserType - userType. required.
   * @param {String} CompanyId - companyId. required.
   * @param {String} StoreId - storeId. optional.
   */
  describeUserRamPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserType')) {
      throw new TypeError('parameter "UserType" is required');
    }

    if (!hasOwnProperty(params, 'CompanyId')) {
      throw new TypeError('parameter "CompanyId" is required');
    }

    return this.request('DescribeUserRamPolicy', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} EslBarCode - eslBarCode. optional.
   * @param {String} ItemBarCode - itemBarCode. optional.
   */
  unbindEslDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    return this.request('UnbindEslDevice', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} EslBarCode - eslBarCode. required.
   */
  unbindEslDeviceShelf(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    if (!hasOwnProperty(params, 'EslBarCode')) {
      throw new TypeError('parameter "EslBarCode" is required');
    }

    return this.request('UnbindEslDeviceShelf', params, options);
  }

  /**
   * @param {String} StoreId - storeId. required.
   * @param {String} StoreName - storeName. optional.
   * @param {String} Brand - brand. optional.
   * @param {String} OutId - outId. optional.
   * @param {String} Groups - groups. optional.
   * @param {String} Comments - comments. optional.
   * @param {String} Phone - phone. optional.
   */
  updateStore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StoreId')) {
      throw new TypeError('parameter "StoreId" is required');
    }

    return this.request('UpdateStore', params, options);
  }

}

module.exports = Client;
