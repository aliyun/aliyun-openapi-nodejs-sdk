
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-03-06';
    super(config);
  }

  /**
   * @param {String} BackupPlanId - BackupPlanId. required.
   * @param {String} SourceEndpointInstanceType - SourceEndpointInstanceType. required.
   * @param {String} SourceEndpointRegion - SourceEndpointRegion. optional.
   * @param {String} SourceEndpointInstanceID - SourceEndpointInstanceID. optional.
   * @param {String} SourceEndpointIP - SourceEndpointIP. optional.
   * @param {Integer} SourceEndpointPort - SourceEndpointPort. optional.
   * @param {String} SourceEndpointDatabaseName - SourceEndpointDatabaseName. optional.
   * @param {String} SourceEndpointUserName - SourceEndpointUserName. optional.
   * @param {String} SourceEndpointPassword - SourceEndpointPassword. optional.
   * @param {Long} BackupGatewayId - BackupGatewayId. optional.
   * @param {String} OSSBucketName - OSSBucketName. optional.
   * @param {String} BackupObjects - BackupObjects. optional.
   * @param {String} BackupPeriod - BackupPeriod. required.
   * @param {String} BackupStartTime - BackupStartTime. required.
   * @param {Boolean} EnableBackupLog - EnableBackupLog. required.
   * @param {Integer} BackupRetentionPeriod - BackupRetentionPeriod. optional.
   * @param {Integer} DuplicationInfrequentAccessPeriod - DuplicationInfrequentAccessPeriod. optional.
   * @param {Integer} DuplicationArchivePeriod - DuplicationArchivePeriod. optional.
   * @param {String} BackupPlanName - BackupPlanName. required.
   * @param {String} SourceEndpointOracleSID - SourceEndpointOracleSID. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerId - ownerID. optional.
   * @param {String} ClientToken - clientToken. optional.
   */
  configureBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BackupPlanId')) {
      throw new TypeError('parameter "BackupPlanId" is required');
    }

    if (!hasOwnProperty(params, 'SourceEndpointInstanceType')) {
      throw new TypeError('parameter "SourceEndpointInstanceType" is required');
    }

    if (!hasOwnProperty(params, 'BackupPeriod')) {
      throw new TypeError('parameter "BackupPeriod" is required');
    }

    if (!hasOwnProperty(params, 'BackupStartTime')) {
      throw new TypeError('parameter "BackupStartTime" is required');
    }

    if (!hasOwnProperty(params, 'EnableBackupLog')) {
      throw new TypeError('parameter "EnableBackupLog" is required');
    }

    if (!hasOwnProperty(params, 'BackupPlanName')) {
      throw new TypeError('parameter "BackupPlanName" is required');
    }

    return this.request('ConfigureBackupPlan', params, options);
  }

  /**
   * @param {String} Region - Region. required.
   * @param {String} InstanceClass - InstanceClass. required.
   * @param {String} DatabaseType - DatabaseType. required.
   * @param {String} BackupMethod - BackupMethod. required.
   * @param {String} Period - Period. required.
   * @param {Integer} UsedTime - UsedTime. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerId - ownerID. optional.
   * @param {String} ClientToken - clientToken. optional.
   */
  createBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'InstanceClass')) {
      throw new TypeError('parameter "InstanceClass" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseType')) {
      throw new TypeError('parameter "DatabaseType" is required');
    }

    if (!hasOwnProperty(params, 'BackupMethod')) {
      throw new TypeError('parameter "BackupMethod" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'UsedTime')) {
      throw new TypeError('parameter "UsedTime" is required');
    }

    return this.request('CreateBackupPlan', params, options);
  }

  /**
   * @param {String} BackupPlanId - BackupPlanId. required.
   * @param {String} RegionId - regionId. optional.
   * @param {String} OwnerId - ownerID. optional.
   * @param {String} ClientToken - clientToken. optional.
   */
  startBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BackupPlanId')) {
      throw new TypeError('parameter "BackupPlanId" is required');
    }

    return this.request('StartBackupPlan', params, options);
  }

}

module.exports = Client;
