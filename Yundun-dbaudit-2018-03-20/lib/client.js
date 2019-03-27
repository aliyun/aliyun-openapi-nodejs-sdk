
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-03-20';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ProductCode - productCode. required.
   */
  checkGrant(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    return this.request('CheckGrant', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} Cidrs - cidrs. required.
   * @param {String} InstanceId - instanceId. required.
   */
  configInstanceWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cidrs')) {
      throw new TypeError('parameter "Cidrs" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('ConfigInstanceWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} ProductCode - productCode. required.
   */
  describeInnerComponent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    return this.request('DescribeInnerComponent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeInstanceWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstanceWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Integer} CurrentPage - pageNo. optional. default: 1.
   * @param {String} RegionId - regionNo. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {RepeatList} Tag - tags. optional.
   */
  describeInstances(params = {}, options = {}) {
    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  disableInstancePublicAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('DisableInstancePublicAccess', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  enableInstancePublicAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('EnableInstancePublicAccess', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} CommodityCode - commodityCode. optional. default: dbaudit.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CustomName - customName. required.
   */
  modifyCustomName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CustomName')) {
      throw new TypeError('parameter "CustomName" is required');
    }

    return this.request('ModifyCustomName', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Description - description. optional.
   */
  modifyInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Description - description. optional.
   */
  modifyInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyInstanceAttribute', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} CommodityCode - commodityCode. optional. default: dbaudit.
   * @param {String} InstanceId - instanceId. required.
   */
  modifyPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyPlan', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VswitchId - vswitchId. required.
   */
  startInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VswitchId')) {
      throw new TypeError('parameter "VswitchId" is required');
    }

    return this.request('StartInstance', params, options);
  }

}

module.exports = Client;
