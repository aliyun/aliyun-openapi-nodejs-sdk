
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-01';
    super(config);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} MigrationJobName - migrationJobName. required.
   * @param {String} MigrationObject - migrationObject. required.
   * @param {String} MigrationReserved - migrationReserved. optional.
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
   * @param {String} OwnerId - ownerID. optional.
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
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {String} MigrationJobName - migrationJobName. optional.
   */
  descirbeMigrationJobs(params = {}, options = {}) {
    return this.request('DescirbeMigrationJobs', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {MigrationMode} MigrationMode - undefined. required.
   */
  describeMigrationJobDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    if (!hasOwnProperty(params, 'MigrationMode')) {
      throw new TypeError('parameter "MigrationMode" is required');
    }

    return this.request('DescribeMigrationJobDetail', params, options);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} ClientToken - clientToken. optional.
   */
  describeMigrationJobStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    return this.request('DescribeMigrationJobStatus', params, options);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} MigrationObject - migrationObject. required.
   * @param {String} ClientToken - clientToken. optional.
   */
  modifyMigrationObject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    if (!hasOwnProperty(params, 'MigrationObject')) {
      throw new TypeError('parameter "MigrationObject" is required');
    }

    options.method = 'POST';
    return this.request('ModifyMigrationObject', params, options);
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
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} ClientToken - clientToken. optional.
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
   * @param {String} ClientToken - clientToken. optional.
   */
  suspendMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    options.method = 'POST';
    return this.request('SuspendMigrationJob', params, options);
  }

}

module.exports = Client;
