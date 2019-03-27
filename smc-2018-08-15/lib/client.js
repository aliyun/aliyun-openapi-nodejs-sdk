
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-15';
    super(config);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} SerialId - serialId. required.
   * @param {String} PublicKey - publicKey. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Group - group. optional.
   * @param {String} MigrationSourceType - migrationSourceType. optional.
   * @param {String} Platform - platform. optional.
   * @param {String} Architecture - architecture. optional.
   * @param {String} SystemDiskSize - systemDiskSize. optional.
   * @param {String} Attributes - attributes. optional.
   * @param {String} KernelLevel - kernelLevel. optional.
   * @param {String} AgentVersion - agentVersion. optional.
   * @param {RepeatList} DataDisk - dataDisk. optional.
   */
  createMigrationSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SerialId')) {
      throw new TypeError('parameter "SerialId" is required');
    }

    return this.request('CreateMigrationSource', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} MigrationSourceId - migrationSourceId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} TargetType - targetType. optional.
   * @param {String} TargetImageName - targetImageName. optional.
   * @param {String} NetMode - netMode. optional.
   * @param {String} TargetInsntanceId - targetInsntanceId. optional.
   * @param {Long} TargetSystemDiskSize - targetSystemDiskSize. optional.
   * @param {RepeatList} DataDisk - dataDisk. optional.
   */
  createServerMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateServerMigration', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {RepeatList} MigrationSourceId - serverMigrationId. optional.
   */
  deleteMigrationSources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteMigrationSources', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ServerMigrationId - serverMigrationId. optional.
   */
  deleteServerMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteServerMigration', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Name - name. optional.
   * @param {String} Group - group. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {RepeatList} MigrationSourceId - migrationSourceId. optional.
   */
  describeMigrationSources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeMigrationSources', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {RepeatList} MigrationSourceId - serverMigrationId. optional.
   * @param {String} TargetType - targetType. optional.
   * @param {String} Status - status. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  describeServerMigrations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeServerMigrations', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} MigrationSourceId - migrationSourceId. required.
   * @param {String} Group - group. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyMigrationSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MigrationSourceId')) {
      throw new TypeError('parameter "MigrationSourceId" is required');
    }

    return this.request('ModifyMigrationSource', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ServerMigrationId - serverMigrationId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} TargetType - targetType. optional.
   * @param {String} TargetImageName - targetImageName. optional.
   * @param {String} TargetInsntanceId - targetInsntanceId. optional.
   * @param {String} TargetSystemDiskSize - targetSystemDiskSize. optional.
   * @param {RepeatList} DataDisk - dataDisk. optional.
   */
  modifyServerMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ServerMigrationId')) {
      throw new TypeError('parameter "ServerMigrationId" is required');
    }

    return this.request('ModifyServerMigration', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ServerMigrationId - serverMigrationId. optional.
   */
  startServerMigration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('StartServerMigration', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} MigrationSourceId - migrationSourceId. optional.
   * @param {String} StatusMsg - statusMsg. optional.
   */
  updateMigrationSourceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('UpdateMigrationSourceStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ServerMigrationId - serverMigrationId. required.
   * @param {Float} Progress - progress. required.
   * @param {RepeatList} TransmitDisk - transmitDisk. optional.
   */
  updateTransmitProgress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ServerMigrationId')) {
      throw new TypeError('parameter "ServerMigrationId" is required');
    }

    if (!hasOwnProperty(params, 'Progress')) {
      throw new TypeError('parameter "Progress" is required');
    }

    return this.request('UpdateTransmitProgress', params, options);
  }

}

module.exports = Client;
