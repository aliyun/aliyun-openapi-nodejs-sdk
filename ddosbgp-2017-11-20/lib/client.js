
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-20';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} PackId - packId. required.
   * @param {String} IpList - ipList. required.
   */
  addIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PackId')) {
      throw new TypeError('parameter "PackId" is required');
    }

    if (!hasOwnProperty(params, 'IpList')) {
      throw new TypeError('parameter "IpList" is required');
    }

    options.method = 'POST';
    return this.request('AddIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} PackId - packId. required.
   * @param {String} Product - product. required.
   */
  addProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PackId')) {
      throw new TypeError('parameter "PackId" is required');
    }

    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
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
   * @param {String} PackId - packId. required.
   * @param {String} Ip - ip. required.
   */
  deleteBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PackId')) {
      throw new TypeError('parameter "PackId" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DeleteBlackhole', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} PackId - packId. required.
   * @param {String} IpList - ipList. required.
   */
  deleteIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PackId')) {
      throw new TypeError('parameter "PackId" is required');
    }

    if (!hasOwnProperty(params, 'IpList')) {
      throw new TypeError('parameter "IpList" is required');
    }

    options.method = 'POST';
    return this.request('DeleteIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} PackId - packId. required.
   */
  deleteProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PackId')) {
      throw new TypeError('parameter "PackId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteProduct', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} PackId - packId. required.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNo - pageNo. required.
   */
  describeDdosEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PackId')) {
      throw new TypeError('parameter "PackId" is required');
    }

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

    return this.request('DescribeDdosEvent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} PackIdList - packIdList. optional.
   * @param {String} InstanceIdList - instanceIdList. optional.
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
   * @param {String} PackId - packId. required.
   */
  describePack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PackId')) {
      throw new TypeError('parameter "PackId" is required');
    }

    return this.request('DescribePack', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describePackList(params = {}, options = {}) {
    return this.request('DescribePackList', params, options);
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
   * @param {String} Name - name. required.
   * @param {Integer} PointTime - pointTime. required.
   * @param {Integer} TopNum - topNum. required.
   */
  describeTopTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PointTime')) {
      throw new TypeError('parameter "PointTime" is required');
    }

    if (!hasOwnProperty(params, 'TopNum')) {
      throw new TypeError('parameter "TopNum" is required');
    }

    return this.request('DescribeTopTraffic', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {Integer} StartTime - startTime. required.
   * @param {Integer} EndTime - endTime. required.
   * @param {Integer} Interval - interval. required.
   */
  describeTraffic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

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

}

module.exports = Client;
