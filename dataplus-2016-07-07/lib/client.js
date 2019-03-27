
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-07';
    super(config);
  }

  /**
   * @param {String} AliyunKp - aliyunKp. required.
   */
  getUserAk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunKp')) {
      throw new TypeError('parameter "AliyunKp" is required');
    }

    return this.request('GetUserAk', params, options);
  }

  /**
   * @param {String} AliyunKp - aliyunKp. required.
   */
  getUserDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunKp')) {
      throw new TypeError('parameter "AliyunKp" is required');
    }

    return this.request('GetUserDetail', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  lXCallbackOrderAndStockValidate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('LXCallbackOrderAndStockValidate', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  lXCallbackOrderInfoCompletion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('LXCallbackOrderInfoCompletion', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  lXCallbackPaidSuccessAndProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('LXCallbackPaidSuccessAndProduce', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  lXCallbackProductInfoCompletion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('LXCallbackProductInfoCompletion', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  lXCallbackRefundInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    options.method = 'POST';
    return this.request('LXCallbackRefundInstance', params, options);
  }

  /**
   * @param {String} AliyunKp - aliyunKp. required.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunKp')) {
      throw new TypeError('parameter "AliyunKp" is required');
    }

    return this.request('ListProject', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {Integer} Type - type. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} ResType - resType. optional.
   */
  listProjectResourceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    return this.request('ListProjectResourceGroup', params, options);
  }

  /**
   * @param {String} AliyunKp - aliyunKp. optional.
   * @param {String} OdpsProject - odpsProject. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listTables(params = {}, options = {}) {
    return this.request('ListTables', params, options);
  }

  /**
   * @param {String} AliyunKp - aliyunKp. required.
   * @param {Integer} Type - type. optional. default: 1.
   * @param {String} Guid - guid. required.
   * @param {String} Target - target. required.
   */
  metaGrantResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunKp')) {
      throw new TypeError('parameter "AliyunKp" is required');
    }

    if (!hasOwnProperty(params, 'Guid')) {
      throw new TypeError('parameter "Guid" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    options.method = 'POST';
    return this.request('MetaGrantResource', params, options);
  }

  /**
   * @param {String} AliyunKp - aliyunKp. required.
   * @param {String} ProjectGuid - projectGuid. optional.
   * @param {String} OwnerAliyunKp - ownerAliyunKp. optional.
   * @param {String} OwnerProjectGuid - ownerProjectGuid. optional.
   * @param {Integer} Type - type. optional. default: 1.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  metaListOuterResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunKp')) {
      throw new TypeError('parameter "AliyunKp" is required');
    }

    return this.request('MetaListOuterResource', params, options);
  }

  /**
   * @param {String} AliyunKp - aliyunKp. required.
   * @param {String} ProjectGuid - projectGuid. optional.
   * @param {String} TargetAliyunKp - targetAliyunKp. optional.
   * @param {String} TargetProjectGuid - targetProjectGuid. optional.
   * @param {Integer} Type - type. optional. default: 1.
   * @param {String} Guids - guids. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  metaListOwnResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunKp')) {
      throw new TypeError('parameter "AliyunKp" is required');
    }

    return this.request('MetaListOwnResource', params, options);
  }

  /**
   * @param {String} AliyunKp - aliyunKp. required.
   * @param {String} ProjectGuid - projectGuid. optional.
   * @param {String} TargetAliyunKp - targetAliyunKp. optional.
   * @param {String} TargetProjectGuid - targetProjectGuid. optional.
   * @param {Integer} Type - type. optional. default: 1.
   * @param {String} Guid - guid. required.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  metaQueryResourceAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunKp')) {
      throw new TypeError('parameter "AliyunKp" is required');
    }

    if (!hasOwnProperty(params, 'Guid')) {
      throw new TypeError('parameter "Guid" is required');
    }

    return this.request('MetaQueryResourceAuth', params, options);
  }

  /**
   * @param {String} AliyunKp - aliyunKp. required.
   * @param {Integer} Type - type. optional. default: 1.
   * @param {String} Guid - guid. required.
   * @param {String} Target - target. required.
   */
  metaRevokeResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunKp')) {
      throw new TypeError('parameter "AliyunKp" is required');
    }

    if (!hasOwnProperty(params, 'Guid')) {
      throw new TypeError('parameter "Guid" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    options.method = 'POST';
    return this.request('MetaRevokeResource', params, options);
  }

  /**
   * @param {String} Guid - guid. optional.
   */
  tableDetail(params = {}, options = {}) {
    return this.request('TableDetail', params, options);
  }

}

module.exports = Client;
