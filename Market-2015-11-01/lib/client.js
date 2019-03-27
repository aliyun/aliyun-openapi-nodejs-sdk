
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-11-01';
    super(config);
  }

  /**
   * @param {String} LicenseCode - licenseCode. required.
   * @param {String} Identification - identification. optional.
   */
  activateLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LicenseCode')) {
      throw new TypeError('parameter "LicenseCode" is required');
    }

    return this.request('ActivateLicense', params, options);
  }

  /**
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {String} ImagePackageInstanceId - imagePackageInstanceId. required.
   */
  bindImagePackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ImagePackageInstanceId')) {
      throw new TypeError('parameter "ImagePackageInstanceId" is required');
    }

    return this.request('BindImagePackage', params, options);
  }

  /**
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} OrderType - orderType. required.
   * @param {String} Commodity - commodity. required.
   * @param {String} OrderSouce - orderSouce. optional.
   * @param {String} PaymentType - paymentType. required.
   * @param {String} ClientToken - clientToken. required.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'Commodity')) {
      throw new TypeError('parameter "Commodity" is required');
    }

    if (!hasOwnProperty(params, 'PaymentType')) {
      throw new TypeError('parameter "PaymentType" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} Name - name. required.
   * @param {String} PicUrl - picUrl. required.
   * @param {String} Description - description. required.
   * @param {String} ShortDescription - shortDescription. required.
   * @param {Boolean} Hidden - hidden. required.
   * @param {RepeatList} ProductSku - productSkus. required.
   * @param {RepeatList} ProductExtra - productExtras. required.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PicUrl')) {
      throw new TypeError('parameter "PicUrl" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'ShortDescription')) {
      throw new TypeError('parameter "ShortDescription" is required');
    }

    if (!hasOwnProperty(params, 'Hidden')) {
      throw new TypeError('parameter "Hidden" is required');
    }

    if (!hasOwnProperty(params, 'ProductSku')) {
      throw new TypeError('parameter "ProductSku" is required');
    }

    if (!hasOwnProperty(params, 'ProductExtra')) {
      throw new TypeError('parameter "ProductExtra" is required');
    }

    options.method = 'POST';
    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  describeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstance', params, options);
  }

  /**
   * @param {String} LicenseCode - licenseCode. required.
   */
  describeLicense(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LicenseCode')) {
      throw new TypeError('parameter "LicenseCode" is required');
    }

    return this.request('DescribeLicense', params, options);
  }

  /**
   * @param {String} OrderId - orderId. required.
   */
  describeOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('DescribeOrder', params, options);
  }

  /**
   * @param {String} OrderType - orderType. required.
   * @param {String} Commodity - commodity. required.
   */
  describePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderType')) {
      throw new TypeError('parameter "OrderType" is required');
    }

    if (!hasOwnProperty(params, 'Commodity')) {
      throw new TypeError('parameter "Commodity" is required');
    }

    return this.request('DescribePrice', params, options);
  }

  /**
   * @param {String} AliUid - aliUid. optional.
   * @param {String} Code - code. required.
   * @param {Boolean} QueryDraft - queryDraft. optional.
   */
  describeProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    return this.request('DescribeProduct', params, options);
  }

  /**
   * @param {String} SearchTerm - searchTerm. optional.
   * @param {RepeatList} Filter - filters. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeProducts(params = {}, options = {}) {
    return this.request('DescribeProducts', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getImageInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetImageInstance', params, options);
  }

  /**
   * @param {String} Bid - bid. optional.
   * @param {String} AliUid - aliUid. optional.
   * @param {String} ImageNo - imageNo. optional.
   * @param {String} RegionNo - regionNo. optional.
   * @param {String} Channel - channel. optional.
   */
  getImageResource(params = {}, options = {}) {
    return this.request('GetImageResource', params, options);
  }

  /**
   * @param {String} ImageNo - imageNo. required.
   */
  getImageResourceByNo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageNo')) {
      throw new TypeError('parameter "ImageNo" is required');
    }

    return this.request('GetImageResourceByNo', params, options);
  }

  /**
   * @param {RepeatList} ImageIdList - imageIdList. required.
   * @param {String} RegionNo - regionNo. required.
   * @param {Long} UserPK - userPK. required.
   * @param {String} Bid - bid. optional.
   */
  prevProduceImageInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageIdList')) {
      throw new TypeError('parameter "ImageIdList" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'UserPK')) {
      throw new TypeError('parameter "UserPK" is required');
    }

    return this.request('PrevProduceImageInstance', params, options);
  }

  /**
   * @param {String} Metering - meteringData. optional.
   */
  pushMeteringData(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('PushMeteringData', params, options);
  }

  /**
   * @param {String} RegionNo - regionNo. optional.
   * @param {String} ImageName - imageName. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} UserPK - userPK. optional.
   * @param {Integer} PageIndex - pageIndex. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {RepeatList} ImageIds - imageIds. optional.
   * @param {RepeatList} OsTypes - osTypes. optional.
   * @param {RepeatList} EcsUnitModels - ecsUnitModels. optional.
   */
  queryAvaiableImages(params = {}, options = {}) {
    return this.request('QueryAvaiableImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  queryMarketCategories(params = {}, options = {}) {
    return this.request('QueryMarketCategories', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Param - paramJsonString. optional.
   */
  queryMarketImages(params = {}, options = {}) {
    return this.request('QueryMarketImages', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   */
  subscribeImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    return this.request('SubscribeImage', params, options);
  }

  /**
   * @param {RepeatList} ImageIdList - imageIdList. required.
   * @param {String} AliyunPK - aliyunPK. required.
   * @param {String} RequestSource - requestSource. required.
   */
  subscriptionCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageIdList')) {
      throw new TypeError('parameter "ImageIdList" is required');
    }

    if (!hasOwnProperty(params, 'AliyunPK')) {
      throw new TypeError('parameter "AliyunPK" is required');
    }

    if (!hasOwnProperty(params, 'RequestSource')) {
      throw new TypeError('parameter "RequestSource" is required');
    }

    return this.request('SubscriptionCheck', params, options);
  }

  /**
   * @param {String} Code - code. required.
   * @param {String} Type - type. required.
   * @param {String} Name - name. required.
   * @param {String} PicUrl - picUrl. required.
   * @param {String} Description - description. required.
   * @param {String} ShortDescription - shortDescription. required.
   * @param {Boolean} Hidden - hidden. required.
   * @param {RepeatList} ProductExtra - productExtras. required.
   */
  updateProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PicUrl')) {
      throw new TypeError('parameter "PicUrl" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'ShortDescription')) {
      throw new TypeError('parameter "ShortDescription" is required');
    }

    if (!hasOwnProperty(params, 'Hidden')) {
      throw new TypeError('parameter "Hidden" is required');
    }

    if (!hasOwnProperty(params, 'ProductExtra')) {
      throw new TypeError('parameter "ProductExtra" is required');
    }

    options.method = 'POST';
    return this.request('UpdateProduct', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} Code - code. required.
   * @param {String} Name - name. required.
   * @param {Integer} SortId - sortId. required.
   * @param {Boolean} Hidden - hidden. required.
   * @param {RepeatList} SalePrice - salePrices. required.
   * @param {RepeatList} Property - properties. required.
   */
  updateProductSku(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'SortId')) {
      throw new TypeError('parameter "SortId" is required');
    }

    if (!hasOwnProperty(params, 'Hidden')) {
      throw new TypeError('parameter "Hidden" is required');
    }

    if (!hasOwnProperty(params, 'SalePrice')) {
      throw new TypeError('parameter "SalePrice" is required');
    }

    if (!hasOwnProperty(params, 'Property')) {
      throw new TypeError('parameter "Property" is required');
    }

    options.method = 'POST';
    return this.request('UpdateProductSku', params, options);
  }

}

module.exports = Client;
