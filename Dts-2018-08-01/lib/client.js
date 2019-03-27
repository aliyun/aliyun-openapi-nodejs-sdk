
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-01';
    super(config);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} MigrationJobName - migrationJobName. required.
   * @param {String} MigrationObject - migrationObject. required.
   * @param {String} MigrationReserved - migrationReserved. optional.
   * @param {String} Checkpoint - checkpoint. optional.
   * @param {String} OwnerId - ownerID. optional.
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
   * @param {String} SubscriptionInstanceId - subscriptionInstanceId. required.
   * @param {String} SubscriptionInstanceName - subscriptionInstanceName. optional.
   * @param {String} SubscriptionObject - subscriptionObject. required.
   * @param {String} OwnerId - ownerID. optional.
   * @param {SourceEndpoint} SourceEndpoint - undefined. optional.
   * @param {SubscriptionDataType} SubscriptionDataType - undefined. required.
   */
  configureSubscriptionInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionInstanceId')) {
      throw new TypeError('parameter "SubscriptionInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionObject')) {
      throw new TypeError('parameter "SubscriptionObject" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionDataType')) {
      throw new TypeError('parameter "SubscriptionDataType" is required');
    }

    options.method = 'POST';
    return this.request('ConfigureSubscriptionInstance', params, options);
  }

  /**
   * @param {String} SynchronizationJobName - synchronizationJobName. optional.
   * @param {String} SynchronizationJobId - synchronizationJobId. required.
   * @param {String} SynchronizationDirection - synchronizationDirection. optional.
   * @param {Boolean} StructureInitialization - initializationStructureLoad. required.
   * @param {Boolean} DataInitialization - initializationDataLoad. required.
   * @param {String} SynchronizationObjects - synchronizationObject. required.
   * @param {String} MigrationReserved - migrationReserved. optional.
   * @param {String} Checkpoint - checkpoint. optional.
   * @param {String} OwnerId - ownerID. optional.
   * @param {SourceEndpoint} SourceEndpoint - undefined. optional.
   * @param {DestinationEndpoint} DestinationEndpoint - undefined. optional.
   * @param {PartitionKey} PartitionKey - undefined. optional.
   */
  configureSynchronizationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronizationJobId')) {
      throw new TypeError('parameter "SynchronizationJobId" is required');
    }

    if (!hasOwnProperty(params, 'StructureInitialization')) {
      throw new TypeError('parameter "StructureInitialization" is required');
    }

    if (!hasOwnProperty(params, 'DataInitialization')) {
      throw new TypeError('parameter "DataInitialization" is required');
    }

    if (!hasOwnProperty(params, 'SynchronizationObjects')) {
      throw new TypeError('parameter "SynchronizationObjects" is required');
    }

    return this.request('ConfigureSynchronizationJob', params, options);
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
   * @param {String} Region - region. required.
   * @param {String} PayType - payType. optional.
   * @param {String} Period - period. optional.
   * @param {Integer} UsedTime - usedTime. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  createSubscriptionInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    options.method = 'POST';
    return this.request('CreateSubscriptionInstance', params, options);
  }

  /**
   * @param {String} SourceRegion - sourceRegion. required.
   * @param {String} DestRegion - destRegion. required.
   * @param {String} Topology - syncArchitecture. optional.
   * @param {String} SynchronizationJobClass - synchronizationJobClass. required.
   * @param {String} PayType - payType. required.
   * @param {String} Period - period. optional.
   * @param {Integer} UsedTime - usedTime. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} networkType - networkType. optional.
   * @param {String} OwnerId - ownerID. optional.
   * @param {SourceEndpoint} SourceEndpoint - undefined. optional.
   * @param {DestinationEndpoint} DestinationEndpoint - undefined. optional.
   */
  createSynchronizationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceRegion')) {
      throw new TypeError('parameter "SourceRegion" is required');
    }

    if (!hasOwnProperty(params, 'DestRegion')) {
      throw new TypeError('parameter "DestRegion" is required');
    }

    if (!hasOwnProperty(params, 'SynchronizationJobClass')) {
      throw new TypeError('parameter "SynchronizationJobClass" is required');
    }

    if (!hasOwnProperty(params, 'PayType')) {
      throw new TypeError('parameter "PayType" is required');
    }

    return this.request('CreateSynchronizationJob', params, options);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} OwnerId - ownerID. optional.
   */
  deleteMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteMigrationJob', params, options);
  }

  /**
   * @param {String} SubscriptionInstanceId - subscriptionInstanceId. required.
   * @param {String} OwnerId - ownerID. optional.
   */
  deleteSubscriptionInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionInstanceId')) {
      throw new TypeError('parameter "SubscriptionInstanceId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteSubscriptionInstance', params, options);
  }

  /**
   * @param {String} SynchronizationJobId - synchronizationJobId. required.
   * @param {String} OwnerId - ownerID. optional.
   */
  deleteSynchronizationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronizationJobId')) {
      throw new TypeError('parameter "SynchronizationJobId" is required');
    }

    return this.request('DeleteSynchronizationJob', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeEndpointSwitchStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeEndpointSwitchStatus', params, options);
  }

  /**
   * @param {String} SynchronizationJobId - synchronizationJobId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeInitializationStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronizationJobId')) {
      throw new TypeError('parameter "SynchronizationJobId" is required');
    }

    return this.request('DescribeInitializationStatus', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
   * @param {MigrationMode} MigrationMode - undefined. optional.
   */
  describeMigrationJobDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    return this.request('DescribeMigrationJobDetail', params, options);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeMigrationJobStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    return this.request('DescribeMigrationJobStatus', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {String} MigrationJobName - migrationJobName. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeMigrationJobs(params = {}, options = {}) {
    return this.request('DescribeMigrationJobs', params, options);
  }

  /**
   * @param {String} SubscriptionInstanceId - subscriptionInstanceId. required.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeSubscriptionInstanceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionInstanceId')) {
      throw new TypeError('parameter "SubscriptionInstanceId" is required');
    }

    return this.request('DescribeSubscriptionInstanceStatus', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {String} SubscriptionInstanceName - subscriptionInstanceName. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeSubscriptionInstances(params = {}, options = {}) {
    return this.request('DescribeSubscriptionInstances', params, options);
  }

  /**
   * @param {String} SubscriptionInstanceId - subscriptionInstanceId. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeSubscriptionObjectModifyStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionInstanceId')) {
      throw new TypeError('parameter "SubscriptionInstanceId" is required');
    }

    return this.request('DescribeSubscriptionObjectModifyStatus', params, options);
  }

  /**
   * @param {String} SynchronizationJobId - synchronizationJobId. required.
   * @param {String} SynchronizationDirection - synchronizationDirection. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeSynchronizationJobStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronizationJobId')) {
      throw new TypeError('parameter "SynchronizationJobId" is required');
    }

    return this.request('DescribeSynchronizationJobStatus', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional. default: 30.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {String} SynchronizationJobName - synchronizationJobName. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeSynchronizationJobs(params = {}, options = {}) {
    return this.request('DescribeSynchronizationJobs', params, options);
  }

  /**
   * @param {String} TaskId - synchronizationJobId. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  describeSynchronizationObjectModifyStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeSynchronizationObjectModifyStatus', params, options);
  }

  /**
   * @param {String} SubscriptionInstanceId - subscriptionInstanceId. required.
   * @param {String} ConsumptionTimestamp - consumptionTimestamp. required.
   * @param {String} OwnerId - ownerID. optional.
   */
  modifyConsumptionTimestamp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionInstanceId')) {
      throw new TypeError('parameter "SubscriptionInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConsumptionTimestamp')) {
      throw new TypeError('parameter "ConsumptionTimestamp" is required');
    }

    options.method = 'POST';
    return this.request('ModifyConsumptionTimestamp', params, options);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} MigrationObject - migrationObject. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
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
   * @param {String} SubscriptionInstanceId - subscriptionInstanceId. required.
   * @param {String} SubscriptionObject - subscriptionObject. required.
   * @param {String} OwnerId - ownerID. optional.
   */
  modifySubscriptionObject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionInstanceId')) {
      throw new TypeError('parameter "SubscriptionInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionObject')) {
      throw new TypeError('parameter "SubscriptionObject" is required');
    }

    options.method = 'POST';
    return this.request('ModifySubscriptionObject', params, options);
  }

  /**
   * @param {String} SynchronizationJobId - synchronizationJobId. required.
   * @param {String} SynchronizationObjects - synchronizationObject. required.
   * @param {String} SynchronizationDirection - synchronizationDirection. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  modifySynchronizationObject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronizationJobId')) {
      throw new TypeError('parameter "SynchronizationJobId" is required');
    }

    if (!hasOwnProperty(params, 'SynchronizationObjects')) {
      throw new TypeError('parameter "SynchronizationObjects" is required');
    }

    return this.request('ModifySynchronizationObject', params, options);
  }

  /**
   * @param {String} SynchronizationJobId - synchronizationJobId. required.
   * @param {String} SynchronizationDirection - synchronizationDirection. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  resetSynchronizationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronizationJobId')) {
      throw new TypeError('parameter "SynchronizationJobId" is required');
    }

    return this.request('ResetSynchronizationJob', params, options);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} OwnerId - ownerID. optional.
   */
  startMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    options.method = 'POST';
    return this.request('StartMigrationJob', params, options);
  }

  /**
   * @param {String} SubscriptionInstanceId - subscriptionInstanceId. required.
   * @param {String} OwnerId - ownerID. optional.
   */
  startSubscriptionInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubscriptionInstanceId')) {
      throw new TypeError('parameter "SubscriptionInstanceId" is required');
    }

    options.method = 'POST';
    return this.request('StartSubscriptionInstance', params, options);
  }

  /**
   * @param {String} SynchronizationJobId - synchronizationJobId. required.
   * @param {String} SynchronizationDirection - synchronizationDirection. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  startSynchronizationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronizationJobId')) {
      throw new TypeError('parameter "SynchronizationJobId" is required');
    }

    return this.request('StartSynchronizationJob', params, options);
  }

  /**
   * @param {String} MigrationJobId - migrationJobId. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} OwnerId - ownerID. optional.
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
   * @param {String} OwnerId - ownerID. optional.
   */
  suspendMigrationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MigrationJobId')) {
      throw new TypeError('parameter "MigrationJobId" is required');
    }

    options.method = 'POST';
    return this.request('SuspendMigrationJob', params, options);
  }

  /**
   * @param {String} SynchronizationJobId - synchronizationJobId. required.
   * @param {String} SynchronizationDirection - synchronizationDirection. optional.
   * @param {String} OwnerId - ownerID. optional.
   */
  suspendSynchronizationJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronizationJobId')) {
      throw new TypeError('parameter "SynchronizationJobId" is required');
    }

    return this.request('SuspendSynchronizationJob', params, options);
  }

  /**
   * @param {String} SynchronizationJobId - synchronizationJobId. required.
   * @param {String} SynchronizationDirection - synchronizationDirection. optional.
   * @param {String} OwnerId - ownerID. optional.
   * @param {Endpoint} Endpoint - undefined. required.
   */
  switchSynchronizationEndpoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SynchronizationJobId')) {
      throw new TypeError('parameter "SynchronizationJobId" is required');
    }

    if (!hasOwnProperty(params, 'Endpoint')) {
      throw new TypeError('parameter "Endpoint" is required');
    }

    return this.request('SwitchSynchronizationEndpoint', params, options);
  }

}

module.exports = Client;
