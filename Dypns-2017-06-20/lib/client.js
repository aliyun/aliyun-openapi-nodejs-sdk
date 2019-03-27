
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
   * @param {String} ProdCode - prodCode. optional. default: dypns.
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
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {String} SceneName - sceneName. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} PackageName - packageName. optional.
   * @param {String} SignName - signName. optional.
   * @param {String} BundleId - bundleId. optional.
   * @param {String} AppName - appName. optional.
   */
  createScene(params = {}, options = {}) {
    return this.request('CreateScene', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {String} SceneCode - sceneCode. optional.
   */
  deleteScene(params = {}, options = {}) {
    return this.request('DeleteScene', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {Integer} ProductType - productType. required.
   */
  openCommonProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    return this.request('OpenCommonProduct', params, options);
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
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {Integer} ProductType - productType. required.
   * @param {String} Month - month. required.
   */
  queryCommonBilling(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('QueryCommonBilling', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   */
  queryCommonCustInfo(params = {}, options = {}) {
    return this.request('QueryCommonCustInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {Integer} ProductType - productType. required.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   */
  queryCommonStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('QueryCommonStatistic', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {Integer} ProductType - productType. required.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   */
  queryCommonStatisticPreview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('QueryCommonStatisticPreview', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   */
  queryDayuMigrateStatus(params = {}, options = {}) {
    return this.request('QueryDayuMigrateStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {String} Month - month. required.
   */
  queryGateVerifyBilling(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('QueryGateVerifyBilling', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {String} PhoneNum - phoneNum. required.
   * @param {String} QueryDate - queryDate. required.
   */
  queryGateVerifyRecordList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNum')) {
      throw new TypeError('parameter "PhoneNum" is required');
    }

    if (!hasOwnProperty(params, 'QueryDate')) {
      throw new TypeError('parameter "QueryDate" is required');
    }

    return this.request('QueryGateVerifyRecordList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {String} SceneCode - sceneCode. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   */
  queryGateVerifyStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('QueryGateVerifyStatistic', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   */
  queryPnsConfig(params = {}, options = {}) {
    return this.request('QueryPnsConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {String} Status - status. optional.
   * @param {String} PageNo - pageNo. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  queryPnsPackageDetail(params = {}, options = {}) {
    return this.request('QueryPnsPackageDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {String} BillCycle - billCycle. optional.
   */
  queryPnsPackageList(params = {}, options = {}) {
    return this.request('QueryPnsPackageList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   */
  queryPnsPackageStatistics(params = {}, options = {}) {
    return this.request('QueryPnsPackageStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   */
  querySceneList(params = {}, options = {}) {
    return this.request('QuerySceneList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} ProdCode - prodCode. optional. default: dypns.
   * @param {String} OsType - osType. required.
   * @param {String} QueryKey - queryKey. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  querySceneListByPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OsType')) {
      throw new TypeError('parameter "OsType" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QuerySceneListByPage', params, options);
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
