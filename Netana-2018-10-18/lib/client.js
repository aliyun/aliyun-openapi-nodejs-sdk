
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-18';
    super(config);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ProductType - product. required.
   * @param {String} UserRequestId - userRequestId. required.
   * @param {String} Type - type. optional.
   * @param {String} ErrorCode - errorCode. optional.
   * @param {String} RequestApiName - requestApiName. optional.
   * @param {String} RequestParams - requestParams. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ResponseParams - responseParams. optional.
   */
  createNetworkDiagnostic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'UserRequestId')) {
      throw new TypeError('parameter "UserRequestId" is required');
    }

    return this.request('CreateNetworkDiagnostic', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} Product - product. required.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} QuotaPublicityName - quotaPublicityName. required.
   * @param {String} RequestQuantity - requestQuantity. optional.
   * @param {String} MobilePhone - mobilePhone. required.
   * @param {String} Email - email. required.
   * @param {String} RequestReason - requestReason. required.
   */
  createNetworkQuotaRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'QuotaPublicityName')) {
      throw new TypeError('parameter "QuotaPublicityName" is required');
    }

    if (!hasOwnProperty(params, 'MobilePhone')) {
      throw new TypeError('parameter "MobilePhone" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'RequestReason')) {
      throw new TypeError('parameter "RequestReason" is required');
    }

    return this.request('CreateNetworkQuotaRequest', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} ProductType - product. required.
   */
  describeDiagnosticConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    return this.request('DescribeDiagnosticConfig', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpAddress - ipAddress. required.
   */
  describeIpLocationAndIsp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    return this.request('DescribeIpLocationAndIsp', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Product - product. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Direction - direction. optional.
   * @param {String} Country - country. optional.
   * @param {String} Province - province. optional.
   * @param {String} Carrier - carrier. optional.
   * @param {String} Grade - grade. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} PageNumber - pageNo. optional. default: 1.
   * @param {String} PageSize - pageSize. optional. default: 10.
   * @param {String} Ip - ip. optional.
   */
  describeNetworkAnalyticsDataTransfer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Grade')) {
      throw new TypeError('parameter "Grade" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('DescribeNetworkAnalyticsDataTransfer', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Product - product. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Country - country. optional.
   * @param {String} Province - province. optional.
   * @param {String} Carrier - carrier. optional.
   * @param {String} Grade - grade. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} PageNumber - pageNo. optional. default: 1.
   * @param {String} PageSize - pageSize. optional. default: 10.
   * @param {String} Ip - ip. optional.
   */
  describeNetworkAnalyticsLatency(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Grade')) {
      throw new TypeError('parameter "Grade" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('DescribeNetworkAnalyticsLatency', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Country - country. optional.
   * @param {String} Province - province. optional.
   * @param {String} Carrier - carrier. optional.
   * @param {String} Grade - grade. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} PageNumber - pageNo. optional. default: 1.
   * @param {String} PageSize - pageSize. optional. default: 10.
   */
  describeNetworkAnalyticsNetQuality(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Grade')) {
      throw new TypeError('parameter "Grade" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('DescribeNetworkAnalyticsNetQuality', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Product - product. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Direction - direction. optional.
   * @param {String} Country - country. optional.
   * @param {String} Province - province. optional.
   * @param {String} Carrier - carrier. optional.
   * @param {String} Grade - grade. required.
   * @param {String} Period - period. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} PageNumber - pageNo. optional. default: 1.
   * @param {String} PageSize - pageSize. optional. default: 10.
   * @param {String} Ip - ip. optional.
   */
  describeNetworkAnalyticsPacketLoss(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Grade')) {
      throw new TypeError('parameter "Grade" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('DescribeNetworkAnalyticsPacketLoss', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Product - product. optional.
   * @param {String} RegionId - regionNo. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} QuotaPublicityName - quotaPublicityName. optional.
   * @param {String} PageNo - pageNo. optional. default: 1.
   * @param {String} PageSize - pageSize. optional. default: 10.
   * @param {String} QuotaRequestId - quotaRequestId. optional.
   */
  describeNetworkQuotaRequestResult(params = {}, options = {}) {
    return this.request('DescribeNetworkQuotaRequestResult', params, options);
  }

  /**
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Product - product. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} RegionId - regionNo. required.
   */
  describeNetworkQuotas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeNetworkQuotas', params, options);
  }

}

module.exports = Client;
