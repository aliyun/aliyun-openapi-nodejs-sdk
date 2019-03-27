
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-11';
    super(config);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   */
  clearInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ClearInstance', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   */
  countInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CountInstance', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   */
  describeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstance', params, options);
  }

  /**
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   * @param {String} Arn - arn. required.
   * @param {String} BucketName - bucketName. required.
   * @param {String} Path - path. required.
   * @param {Integer} TaskType - taskType. optional.
   */
  increaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Arn')) {
      throw new TypeError('parameter "Arn" is required');
    }

    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    return this.request('IncreaseInstance', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   */
  initInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InitInstance', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   */
  instanceClear(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InstanceClear', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   */
  instanceDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InstanceDetail', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   * @param {String} Arn - arn. required.
   * @param {String} BucketName - bucketName. required.
   * @param {String} Path - path. required.
   */
  instanceIncrement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Arn')) {
      throw new TypeError('parameter "Arn" is required');
    }

    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    return this.request('InstanceIncrement', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   */
  instanceInit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InstanceInit', params, options);
  }

  /**
   * @param {Integer} ServiceType - serviceType. required.
   * @param {String} Name - name. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNumber - pageNumber. required.
   */
  instanceQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceType')) {
      throw new TypeError('parameter "ServiceType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    return this.request('InstanceQuery', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   */
  instanceRemove(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('InstanceRemove', params, options);
  }

  /**
   * @param {Long} InstanceId - instanceId. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} TaskType - taskType. required.
   */
  listIncrement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'TaskType')) {
      throw new TypeError('parameter "TaskType" is required');
    }

    return this.request('ListIncrement', params, options);
  }

  /**
   * @param {Integer} ServiceType - serviceType. required.
   * @param {String} Name - name. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNumber - pageNumber. required.
   */
  listInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceType')) {
      throw new TypeError('parameter "ServiceType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    return this.request('ListInstance', params, options);
  }

}

module.exports = Client;
