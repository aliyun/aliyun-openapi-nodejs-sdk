
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-20';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} IpList - ipList. required.
   * @param {String} InstanceId - instanceId. required.
   */
  addIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpList')) {
      throw new TypeError('parameter "IpList" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('AddIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Product - product. required.
   * @param {String} InstanceId - instanceId. required.
   */
  addProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('AddProduct', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  checkGrant(params = {}, options = {}) {
    return this.request('CheckGrant', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Ip - ip. required.
   * @param {String} InstanceId - instanceId. required.
   */
  deleteBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteBlackhole', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} IpList - ipList. required.
   * @param {String} InstanceId - instanceId. required.
   */
  deleteIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpList')) {
      throw new TypeError('parameter "IpList" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  deleteProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteProduct', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {String} InstanceId - instanceId. required.
   */
  describeDdosEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDdosEvent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceIdList - instanceIdList. optional.
   * @param {String} Remark - remark. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeInstanceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeInstanceList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceIdList - instanceIdList. required.
   */
  describeInstanceSpecs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    return this.request('DescribeInstanceSpecs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} CurrentPage - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describeOpEntities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeOpEntities', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describePack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribePack', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Integer} CurrentPage - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   */
  describePackPaidTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribePackPaidTraffic', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - pageNo. required.
   */
  describeResourcePackInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('DescribeResourcePackInstances', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeResourcePackStatistics(params = {}, options = {}) {
    return this.request('DescribeResourcePackStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} EndTime - EndTime. required.
   * @param {Long} StartTime - StartTime. required.
   */
  describeResourcePackUsage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeResourcePackUsage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeSupportQRCodeByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeSupportQRCodeByInstanceId', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Ip - ip. optional.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {Integer} Interval - interval. required.
   */
  describeTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    return this.request('DescribeTraffic', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Remark - remark. required.
   */
  modifyRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Remark')) {
      throw new TypeError('parameter "Remark" is required');
    }

    return this.request('ModifyRemark', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Mobile - mobile. required.
   */
  updateSupportContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    return this.request('UpdateSupportContact', params, options);
  }

}

module.exports = Client;
