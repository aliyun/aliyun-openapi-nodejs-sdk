
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-02';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ItemNumber - itemNumber. required.
   */
  closeProductItemStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemNumber')) {
      throw new TypeError('parameter "ItemNumber" is required');
    }

    return this.request('CloseProductItemStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} BizType - bizType. required.
   * @param {String} Parameters - parameters. required.
   */
  createBizOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    if (!hasOwnProperty(params, 'Parameters')) {
      throw new TypeError('parameter "Parameters" is required');
    }

    return this.request('CreateBizOrder', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ProductType - productType. required.
   * @param {String} Name - name. required.
   * @param {String} TestRange - testRange. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} StaffMode - staffMode. required.
   * @param {RepeatList} ServantIdList - servantIdList. optional.
   * @param {Integer} LowBegin - lowBegin. optional.
   * @param {Integer} LowEnd - lowEnd. optional.
   * @param {Integer} MiddleBegin - middleBegin. optional.
   * @param {Integer} MiddleEnd - middleEnd. optional.
   * @param {Integer} HighBegin - highBegin. optional.
   * @param {Integer} HighEnd - highEnd. optional.
   * @param {Integer} SevereBegin - severeBegin. optional.
   * @param {Integer} SevereEnd - severeEnd. optional.
   */
  createProductItemMass(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TestRange')) {
      throw new TypeError('parameter "TestRange" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'StaffMode')) {
      throw new TypeError('parameter "StaffMode" is required');
    }

    return this.request('CreateProductItemMass', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ProductId - productId. required.
   * @param {String} Asset - asset. optional.
   */
  describeBehaviorAssetAttackStatInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('DescribeBehaviorAssetAttackStatInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ProductId - productId. required.
   * @param {String} Asset - asset. optional.
   * @param {Long} RequestTimeBegin - requestTimeBegin. optional.
   * @param {Long} RequestTimeEnd - requestTimeEnd. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeBehaviorPlayBackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeBehaviorPlayBackList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ProductId - productId. required.
   * @param {String} Asset - asset. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeBehaviorPlayCurrentList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeBehaviorPlayCurrentList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeBizOrderForGrant(params = {}, options = {}) {
    return this.request('DescribeBizOrderForGrant', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCompanyAuth(params = {}, options = {}) {
    return this.request('DescribeCompanyAuth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} FlawId - flawId. required.
   */
  describeFlawDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlawId')) {
      throw new TypeError('parameter "FlawId" is required');
    }

    return this.request('DescribeFlawDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PurchaseProductId - purchaseProductId. required.
   * @param {String} ReviewLevel - reviewLevel. optional.
   * @param {String} FlawStatus - flawStatus. optional.
   * @param {Integer} CurrentPage - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeFlawList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaseProductId')) {
      throw new TypeError('parameter "PurchaseProductId" is required');
    }

    return this.request('DescribeFlawList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PurchaseProductId - purchaseProductId. required.
   */
  describeFlawStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaseProductId')) {
      throw new TypeError('parameter "PurchaseProductId" is required');
    }

    return this.request('DescribeFlawStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeMainBizCtg(params = {}, options = {}) {
    return this.request('DescribeMainBizCtg', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ProductId - productId. required.
   */
  describeProductAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('DescribeProductAuth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ItemNumber - itemNumber. required.
   */
  describeProductItemDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemNumber')) {
      throw new TypeError('parameter "ItemNumber" is required');
    }

    return this.request('DescribeProductItemDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ProductType - productType. required.
   * @param {String} QueryYear - queryYear. optional.
   * @param {String} ItemNumber - itemNumber. optional.
   */
  describeProductItemList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    return this.request('DescribeProductItemList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeProductOpenupInfo(params = {}, options = {}) {
    return this.request('DescribeProductOpenupInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ProductId - productId. required.
   */
  describeProductOverview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('DescribeProductOverview', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ProfileType - profileType. optional.
   */
  describeServantTopList(params = {}, options = {}) {
    return this.request('DescribeServantTopList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PurchaseProductId - purchaseProductId. required.
   */
  disableFlawProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaseProductId')) {
      throw new TypeError('parameter "PurchaseProductId" is required');
    }

    options.method = 'POST';
    return this.request('DisableFlawProduct', params, options);
  }

  /**
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
  doLogicalDeleteResource(params = {}, options = {}) {
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

    return this.request('DoLogicalDeleteResource', params, options);
  }

  /**
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
  doPhysicalDeleteResource(params = {}, options = {}) {
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

    return this.request('DoPhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ItemNumber - itemNumber. required.
   */
  downloadProductItemReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemNumber')) {
      throw new TypeError('parameter "ItemNumber" is required');
    }

    return this.request('DownloadProductItemReport', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} PurchaseProductId - purchaseProductId. required.
   */
  enableFlawProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaseProductId')) {
      throw new TypeError('parameter "PurchaseProductId" is required');
    }

    options.method = 'POST';
    return this.request('EnableFlawProduct', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} FlawId - flawId. required.
   * @param {Integer} FixStatus - fixStatus. optional.
   */
  modifyFlawFixStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlawId')) {
      throw new TypeError('parameter "FlawId" is required');
    }

    options.method = 'POST';
    return this.request('ModifyFlawFixStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ItemNumber - itemNumber. required.
   */
  openProductItemStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemNumber')) {
      throw new TypeError('parameter "ItemNumber" is required');
    }

    return this.request('OpenProductItemStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ItemNumber - itemNumber. required.
   */
  pauseProductItemStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemNumber')) {
      throw new TypeError('parameter "ItemNumber" is required');
    }

    return this.request('PauseProductItemStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} ProductId - productId. required.
   */
  summaryBehavior(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    return this.request('SummaryBehavior', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ItemNumber - itemNumber. required.
   * @param {String} Name - name. required.
   * @param {String} TestRange - testRange. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} StaffMode - staffMode. required.
   * @param {RepeatList} ServantIdList - servantIdList. optional.
   * @param {String} LowBegin - lowBegin. optional.
   * @param {String} LowEnd - lowEnd. optional.
   * @param {String} MiddleBegin - middleBegin. optional.
   * @param {String} MiddleEnd - middleEnd. optional.
   * @param {String} HighBegin - highBegin. optional.
   * @param {String} HighEnd - highEnd. optional.
   * @param {String} SevereBegin - severeBegin. optional.
   * @param {String} SevereEnd - severeEnd. optional.
   */
  updateProductItemMass(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ItemNumber')) {
      throw new TypeError('parameter "ItemNumber" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TestRange')) {
      throw new TypeError('parameter "TestRange" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'StaffMode')) {
      throw new TypeError('parameter "StaffMode" is required');
    }

    return this.request('UpdateProductItemMass', params, options);
  }

  /**
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
  doCheckResource(params = {}, options = {}) {
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

    return this.request('doCheckResource', params, options);
  }

}

module.exports = Client;
