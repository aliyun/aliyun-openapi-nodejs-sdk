
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-11-24';
    super(config);
  }

  /**
   * @param {String} SynchronousJobName - synchronousJobName. optional.
   * @param {String} SourceInstanceId - sourceInstanceId. required.
   * @param {String} DestinationInstanceId - destinationInstanceId. required.
   * @param {String} SynchronousObjectList - synchronousObjectList. required.
   * @param {Boolean} StructureIntialization - structureIntialization. optional.
   * @param {Boolean} FullDataIntialization - fullDataIntialization. optional.
   * @param {String} SynchronousSpeedLimit - synchronousSpeedLimit. optional.
   */
  createSynchronousJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceInstanceId')) {
      throw new TypeError('parameter "SourceInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationInstanceId')) {
      throw new TypeError('parameter "DestinationInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SynchronousObjectList')) {
      throw new TypeError('parameter "SynchronousObjectList" is required');
    }

    options.method = 'POST';
    return this.request('CreateSynchronousJob', params, options);
  }

  /**
   * @param {String} SynchronousJobId - synchronousJobId. required.
   */
  deleteSynchronousJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronousJobId')) {
      throw new TypeError('parameter "SynchronousJobId" is required');
    }

    return this.request('DeleteSynchronousJob', params, options);
  }

  /**
   * @param {String} SynchronousJobId - synchronousJobId. required.
   */
  describeSynchronousJobConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronousJobId')) {
      throw new TypeError('parameter "SynchronousJobId" is required');
    }

    return this.request('DescribeSynchronousJobConfiguration', params, options);
  }

  /**
   * @param {String} SynchronousJobId - synchronousJobId. required.
   */
  describeSynchronousJobDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronousJobId')) {
      throw new TypeError('parameter "SynchronousJobId" is required');
    }

    return this.request('DescribeSynchronousJobDetails', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} SynchronousJobName - synchronousJobName. optional.
   */
  describeSynchronousJobList(params = {}, options = {}) {
    return this.request('DescribeSynchronousJobList', params, options);
  }

  /**
   * @param {String} SynchronousJobId - synchronousJobId. required.
   */
  startSynchronousJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronousJobId')) {
      throw new TypeError('parameter "SynchronousJobId" is required');
    }

    options.method = 'POST';
    return this.request('StartSynchronousJob', params, options);
  }

  /**
   * @param {String} SynchronousJobId - synchronousJobId. required.
   */
  suspendSynchronousJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronousJobId')) {
      throw new TypeError('parameter "SynchronousJobId" is required');
    }

    options.method = 'POST';
    return this.request('SuspendSynchronousJob', params, options);
  }

}

module.exports = Client;
