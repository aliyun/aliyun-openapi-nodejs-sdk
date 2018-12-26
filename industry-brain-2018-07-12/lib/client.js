
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-12';
    super(config);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   */
  getAlgorithmList(params = {}, options = {}) {
    return this.request('GetAlgorithmList', params, options);
  }

  /**
   * @param {String} ServiceId - serviceId. optional.
   */
  getAsyncServiceResult(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('GetAsyncServiceResult', params, options);
  }

  /**
   * @param {String} ServiceId - serviceId. optional.
   */
  getDataProperties(params = {}, options = {}) {
    return this.request('GetDataProperties', params, options);
  }

  /**
   * @param {String} IndustryCode - industryCode. optional.
   */
  getIndustryInfo(params = {}, options = {}) {
    return this.request('GetIndustryInfo', params, options);
  }

  /**
   * @param {String} IndustryCode - industryCode. optional.
   */
  getIndustryInfoChildrenList(params = {}, options = {}) {
    return this.request('GetIndustryInfoChildrenList', params, options);
  }

  /**
   * @param {String} IndustryCode - industryCode. required.
   */
  getIndustryInfoLineageList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IndustryCode')) {
      throw new TypeError('parameter "IndustryCode" is required');
    }

    return this.request('GetIndustryInfoLineageList', params, options);
  }

  /**
   */
  getIndustryInfoList(params = {}, options = {}) {
    return this.request('GetIndustryInfoList', params, options);
  }

  /**
   * @param {String} UserCode - userCode. required.
   * @param {String} ProjectId - projectId. required.
   */
  getOSSImageAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserCode')) {
      throw new TypeError('parameter "UserCode" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetOSSImageAccess', params, options);
  }

  /**
   * @param {String} ServiceId - serviceId. optional.
   */
  getOnlineServiceResult(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('GetOnlineServiceResult', params, options);
  }

  /**
   * @param {String} AlgorithmId - templateAlgoId. optional.
   * @param {String} ServiceId - serviceId. required.
   * @param {Boolean} ShowLatestData - showLatestData. optional.
   * @param {Integer} Limit - limit. optional.
   */
  getServiceInputMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceId')) {
      throw new TypeError('parameter "ServiceId" is required');
    }

    return this.request('GetServiceInputMapping', params, options);
  }

  /**
   * @param {String} ServiceId - serviceId. optional.
   */
  getServiceResultAsync(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('GetServiceResultAsync', params, options);
  }

  /**
   * @param {String} ServiceId - serviceId. optional.
   * @param {String} RequestData - requestData. optional.
   * @param {String} RequestParams - requestParams. optional.
   * @param {Boolean} ShowParams - showParams. optional.
   */
  invokeService(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('InvokeService', params, options);
  }

  /**
   * @param {String} ServiceId - serviceId. optional.
   * @param {String} Params - params. optional.
   */
  invokeServiceAsync(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('InvokeServiceAsync', params, options);
  }

  /**
   * @param {String} Operation - operation. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} RequestData - requestData. optional.
   */
  operateEquipment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    options.method = 'POST';
    return this.request('OperateEquipment', params, options);
  }

  /**
   * @param {String} Data - bodyParam. required.
   * @param {String} ServiceId - serviceId. optional.
   */
  postRealTimeDeviceData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('PostRealTimeDeviceData', params, options);
  }

}

module.exports = Client;
