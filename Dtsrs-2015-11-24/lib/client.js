
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
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} MigrationJobName - migrationJobName. required.
   * @param {String} MigrationObject - migrationObject. required.
   * @param {SourceEndpoint} SourceEndpoint - undefined. required.
   * @param {DestinationEndpoint} DestinationEndpoint - undefined. required.
   * @param {MigrationMode} MigrationMode - undefined. required.
   */
  configureMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    if (!hasOwnProperty(params, 'MigrationJobName')) {
      throw new TypeError('parameter "MigrationJobName" is required');
    }

    if (!hasOwnProperty(params, 'MigrationObject')) {
      throw new TypeError('parameter "MigrationObject" is required');
    }

    if (!hasOwnProperty(params, 'SourceEndpoint')) {
      throw new TypeError('parameter "SourceEndpoint" is required');
    }

    if (!hasOwnProperty(params, 'DestinationEndpoint')) {
      throw new TypeError('parameter "DestinationEndpoint" is required');
    }

    if (!hasOwnProperty(params, 'MigrationMode')) {
      throw new TypeError('parameter "MigrationMode" is required');
    }

    return this.request('ConfigureMigrationJob', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} MigrationJobClass - migrationJobClass. required.
   * @param {String} ClientToken - clientToken. optional.
   */
  createMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'MigrationJobClass')) {
      throw new TypeError('parameter "MigrationJobClass" is required');
    }

    return this.request('CreateMigrationJob', params, options);
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
   * @param {String} MigrationJobId - migrationJobId. required.
   */
  deleteMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteMigrationJob', params, options);
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
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {String} MigrationJobName - migrationJobName. optional.
   */
  descirbeMigrationJobs(params = {}, options = {}) {
    return this.request('DescirbeMigrationJobs', params, options);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   */
  describeMigrationJobStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    return this.request('DescribeMigrationJobStatus', params, options);
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
   * @param {String} MigrationJobId - migrationJobId. required.
   */
  startMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    options.method = 'POST';
    return this.request('StartMigrationJob', params, options);
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
   * @param {String} MigrationJobId - migrationJobId. required.
   */
  stopMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    options.method = 'POST';
    return this.request('StopMigrationJob', params, options);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   */
  suspendMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    options.method = 'POST';
    return this.request('SuspendMigrationJob', params, options);
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
