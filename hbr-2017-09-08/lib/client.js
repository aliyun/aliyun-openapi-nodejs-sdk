
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-08';
    super(config);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} HostName - hostName. required.
   * @param {String} NetworkType - networkType. optional.
   * @param {Long} ExpireInSeconds - expireInSeconds. optional. default: 172800.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} PlatformType - platformType. optional.
   */
  activateClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HostName')) {
      throw new TypeError('parameter "HostName" is required');
    }

    return this.request('ActivateClient', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} AkSecret - akSecret. optional.
   * @param {String} AkId - akId. optional.
   */
  activateEcsClient(params = {}, options = {}) {
    return this.request('ActivateEcsClient', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Sid - sid. required.
   * @param {String} Tags - tags. required.
   * @param {String} Paths - paths. required.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {Long} UpdatedTime - updatedTime. required.
   */
  addHanaMetadata(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Tags')) {
      throw new TypeError('parameter "Tags" is required');
    }

    if (!hasOwnProperty(params, 'Paths')) {
      throw new TypeError('parameter "Paths" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    if (!hasOwnProperty(params, 'UpdatedTime')) {
      throw new TypeError('parameter "UpdatedTime" is required');
    }

    return this.request('AddHanaMetadata', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} ServerType - serverType. required.
   * @param {String} Host - host. optional.
   * @param {String} Username - username. optional.
   * @param {String} Password - password. optional.
   * @param {String} Description - description. optional.
   * @param {String} DetailInfo - detailInfo. optional.
   */
  addServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerType')) {
      throw new TypeError('parameter "ServerType" is required');
    }

    return this.request('AddServer', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} SnapshotHash - snapshotHash. required.
   * @param {String} SnapshotName - snapshotName. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} CompleteTime - completeTime. optional.
   * @param {String} DatabaseId - databaseId. required.
   * @param {String} DatabaseName - databaseName. optional.
   * @param {String} Status - status. optional.
   * @param {Long} ExpireTime - expireTime. optional.
   * @param {Long} BytesTotal - bytesTotal. optional.
   */
  addSqlServerLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotHash')) {
      throw new TypeError('parameter "SnapshotHash" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseId')) {
      throw new TypeError('parameter "DatabaseId" is required');
    }

    return this.request('AddSqlServerLog', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} SnapshotHash - snapshotHash. optional.
   * @param {String} Path - path. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  browseFiles(params = {}, options = {}) {
    return this.request('BrowseFiles', params, options);
  }

  /**
   * @param {String} JobId - jobId. required.
   */
  cancelBackupJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('CancelBackupJob', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DatabaseName - databaseName. optional.
   * @param {Long} BackupId - backupId. required.
   */
  cancelHanaBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'BackupId')) {
      throw new TypeError('parameter "BackupId" is required');
    }

    return this.request('CancelHanaBackup', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DatabaseName - databaseName. required.
   */
  cancelHanaRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseName')) {
      throw new TypeError('parameter "DatabaseName" is required');
    }

    return this.request('CancelHanaRestore', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} JobId - jobId. required.
   */
  cancelJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('CancelJob', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} RestoreId - restoreId. required.
   */
  cancelRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RestoreId')) {
      throw new TypeError('parameter "RestoreId" is required');
    }

    return this.request('CancelRestore', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} SourceDatabaseId - sourceDatabaseId. required.
   * @param {String} RestoreId - restoreId. required.
   */
  cancelSqlServerRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabaseId')) {
      throw new TypeError('parameter "SourceDatabaseId" is required');
    }

    if (!hasOwnProperty(params, 'RestoreId')) {
      throw new TypeError('parameter "RestoreId" is required');
    }

    return this.request('CancelSqlServerRestore', params, options);
  }

  /**
   * @param {String} Feature - feature. required.
   */
  checkBeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Feature')) {
      throw new TypeError('parameter "Feature" is required');
    }

    return this.request('CheckBeta', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   */
  checkHanaNode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CheckHanaNode', params, options);
  }

  /**
   */
  checkRole(params = {}, options = {}) {
    return this.request('CheckRole', params, options);
  }

  /**
   * @param {String} SourceType - sourceType. required.
   * @param {String} PlanName - planName. required.
   * @param {String} BackupType - backupType. required.
   * @param {String} BackupSourceGroupId - backupSourceGroupId. required.
   * @param {String} VaultId - vaultId. required.
   * @param {String} Schedule - schedule. required.
   * @param {Long} Retention - retention. required.
   * @param {String} ClusterId - clusterId. optional.
   */
  createBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'PlanName')) {
      throw new TypeError('parameter "PlanName" is required');
    }

    if (!hasOwnProperty(params, 'BackupType')) {
      throw new TypeError('parameter "BackupType" is required');
    }

    if (!hasOwnProperty(params, 'BackupSourceGroupId')) {
      throw new TypeError('parameter "BackupSourceGroupId" is required');
    }

    if (!hasOwnProperty(params, 'VaultId')) {
      throw new TypeError('parameter "VaultId" is required');
    }

    if (!hasOwnProperty(params, 'Schedule')) {
      throw new TypeError('parameter "Schedule" is required');
    }

    if (!hasOwnProperty(params, 'Retention')) {
      throw new TypeError('parameter "Retention" is required');
    }

    return this.request('CreateBackupPlan', params, options);
  }

  /**
   * @param {String} BackupSourceGroupId - backupSourceGroupId. required.
   * @param {String} Description - description. optional.
   * @param {String} SourceType - sourceType. required.
   * @param {Boolean} ImplicitlyCreateBackupSources - implicitlyCreateBackupSources. optional. default: false.
   * @param {RepeatList} BackupSourceId - backupSourceIds. optional.
   * @param {RepeatList} BackupSource - backupSources. optional.
   * @param {String} ClusterId - clusterId. optional.
   */
  createBackupSourceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BackupSourceGroupId')) {
      throw new TypeError('parameter "BackupSourceGroupId" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    return this.request('CreateBackupSourceGroup', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientName - clientName. optional. default: Backup Client.
   * @param {String} ClientType - clientType. optional. default: AGENT.
   * @param {String} NetworkType - networkType. optional. default: UNKNOWN.
   * @param {String} PlatformType - platformType. optional. default: UNKNOWN.
   * @param {Json} SourceTypes - sourceTypes. optional.
   * @param {String} AlertSetting - alertSetting. optional.
   * @param {String} ContactId - contactId. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ClusterId - clusterId. optional.
   */
  createClient(params = {}, options = {}) {
    return this.request('CreateClient', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} AlertSetting - alertSetting. optional.
   * @param {String} ClientInfo - clientInfo. optional.
   */
  createClients(params = {}, options = {}) {
    return this.request('CreateClients', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Email - email. optional.
   * @param {String} Mobile - mobile. optional.
   * @param {String} EmailVerifyCode - emailVerifyCode. optional.
   * @param {String} MobileVerifyCode - mobileVerifyCode. optional.
   */
  createContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateContact', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} ContactGroupId - contactGroupId. required.
   * @param {String} DisplayName - displayName. optional.
   * @param {Json} ContactIds - contactIds. optional.
   */
  createContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactGroupId')) {
      throw new TypeError('parameter "ContactGroupId" is required');
    }

    return this.request('CreateContactGroup', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} PlanName - planName. required.
   * @param {String} Schedule - schedule. required.
   * @param {String} BackupType - backupType. required.
   * @param {String} DatabaseName - databaseName. required.
   * @param {String} BackupPrefix - backupPrefix. optional.
   */
  createHanaBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanName')) {
      throw new TypeError('parameter "PlanName" is required');
    }

    if (!hasOwnProperty(params, 'Schedule')) {
      throw new TypeError('parameter "Schedule" is required');
    }

    if (!hasOwnProperty(params, 'BackupType')) {
      throw new TypeError('parameter "BackupType" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseName')) {
      throw new TypeError('parameter "DatabaseName" is required');
    }

    return this.request('CreateHanaBackupPlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} HanaName - hanaName. optional.
   * @param {String} Host - host. optional.
   * @param {Integer} InstanceNumber - instanceNumber. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Password - password. optional.
   * @param {Boolean} UseSsl - useSsl. optional.
   * @param {Boolean} ValidateCertificate - validateCertificate. optional.
   * @param {String} AlertSetting - alertSetting. optional.
   * @param {String} ContactId - contactId. optional.
   * @param {String} EcsInstanceId - ecsInstanceId. optional.
   * @param {String} Sid - sid. optional.
   */
  createHanaInstance(params = {}, options = {}) {
    return this.request('CreateHanaInstance', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DatabaseName - databaseName. required.
   * @param {Long} BackupId - backupId. optional.
   * @param {String} Mode - mode. required.
   * @param {Long} RecoveryPointInTime - recoveryPointInTime. optional.
   * @param {Long} LogPosition - logPosition. optional.
   * @param {Integer} VolumeId - volumeId. optional.
   * @param {Boolean} UseCatalog - useCatalog. optional. default: true.
   * @param {String} BackupPrefix - backupPrefix. required.
   * @param {Boolean} SystemCopy - systemCopy. optional.
   * @param {String} Source - source. optional.
   * @param {String} SourceClusterId - sourceClusterId. optional.
   * @param {String} LogPaths - logPaths. optional.
   * @param {Boolean} ClearLog - clearLog. optional.
   * @param {Boolean} CheckAccess - checkAccess. optional.
   * @param {Boolean} UseDelta - useDelta. optional.
   * @param {String} ExtraOptions - extraOptions. optional.
   * @param {String} SidAdmin - sidAdmin. optional.
   * @param {String} MasterClientId - masterClientId. optional.
   */
  createHanaRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseName')) {
      throw new TypeError('parameter "DatabaseName" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    if (!hasOwnProperty(params, 'BackupPrefix')) {
      throw new TypeError('parameter "BackupPrefix" is required');
    }

    return this.request('CreateHanaRestore', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} JobName - jobName. required.
   * @param {String} JobType - jobType. required.
   * @param {String} Source - source. required.
   * @param {String} PolicyId - policyId. optional.
   * @param {String} JobOption - jobOption. optional.
   * @param {String} SourceType - sourceType. optional. default: File.
   */
  createJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobName')) {
      throw new TypeError('parameter "JobName" is required');
    }

    if (!hasOwnProperty(params, 'JobType')) {
      throw new TypeError('parameter "JobType" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('CreateJob', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} Jobs - jobs. optional.
   */
  createJobs(params = {}, options = {}) {
    return this.request('CreateJobs', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} PlanName - planName. optional.
   * @param {String} SourceType - SourceType. optional.
   * @param {String} Source - source. optional.
   * @param {Long} Retention - retention. optional.
   * @param {String} ScheduleType - scheduleType. optional.
   * @param {String} FullPolicyId - fullPolicyId. optional.
   * @param {String} IncPolicyId - incPolicyId. optional.
   * @param {String} DiffPolicyId - diffPolicyId. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} ServerType - serverType. optional.
   */
  createPlan(params = {}, options = {}) {
    return this.request('CreatePlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} PolicyName - policyName. required.
   * @param {String} Source - source. required.
   * @param {String} Schedule - schedule. required.
   * @param {Long} Retention - retention. optional.
   * @param {String} Status - status. optional. default: ENABLED.
   */
  createPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyName')) {
      throw new TypeError('parameter "PolicyName" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'Schedule')) {
      throw new TypeError('parameter "Schedule" is required');
    }

    return this.request('CreatePolicy', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} RestoreName - restoreName. optional.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} SnapshotHash - snapshotHash. optional.
   * @param {String} Source - source. optional.
   * @param {String} Target - target. required.
   * @param {String} RestoreType - restoreType. optional.
   * @param {String} ContainerRestoreId - containerRestoreId. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} Extra - extra. optional.
   * @param {Json} Includes - includes. optional.
   * @param {Json} Excludes - excludes. optional.
   * @param {String} SourceClientId - sourceClientId. optional.
   */
  createRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    return this.request('CreateRestore', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} Source - source. required.
   * @param {String} ParentHash - parentHash. optional.
   * @param {Long} Retention - retention. optional.
   * @param {String} SnapshotName - snapshotName. optional.
   * @param {String} JobId - jobId. optional.
   * @param {String} SourceType - sourceType. optional. default: File.
   * @param {String} SnapshotOption - snapshotOption. optional.
   * @param {String} ContainerSnapshotId - containerSnapshotId. optional.
   * @param {String} PlanId - planId. optional.
   * @param {String} SnapshotType - snapshotType. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} Extra - extra. optional.
   */
  createSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('CreateSnapshot', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ServerName - serverName. optional.
   * @param {String} SqlLogin - sqlLogin. optional.
   * @param {String} SqlPassword - sqlPassword. optional.
   * @param {Boolean} UseWindowsAuth - useWindowsAuth. optional.
   * @param {String} WindowsLogin - windowsLogin. optional.
   * @param {String} WindowsPassword - windowsPassword. optional.
   */
  createSqlServerInstance(params = {}, options = {}) {
    return this.request('CreateSqlServerInstance', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} SourceDatabaseName - sourceDatabaseName. required.
   * @param {String} TargetDatabaseName - targetDatabaseName. required.
   * @param {String} FileDestination - fileDestination. optional.
   * @param {Long} PointInTime - pointInTime. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {Boolean} ReplaceDatabase - replaceDatabase. optional.
   */
  createSqlServerRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'SourceDatabaseName')) {
      throw new TypeError('parameter "SourceDatabaseName" is required');
    }

    if (!hasOwnProperty(params, 'TargetDatabaseName')) {
      throw new TypeError('parameter "TargetDatabaseName" is required');
    }

    return this.request('CreateSqlServerRestore', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. optional.
   * @param {String} Token - token. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} PlanId - planId. optional.
   * @param {String} SnapshotHash - snapshotHash. optional.
   * @param {String} SnapshotName - snapshotName. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} CompleteTime - completeTime. optional.
   * @param {String} BackupType - backupType. optional. default: File.
   * @param {String} DatabaseId - databaseId. optional.
   * @param {String} Status - status. optional.
   * @param {Long} ExpireTime - expireTime. optional.
   * @param {Long} BytesTotal - bytesTotal. optional.
   * @param {String} DatabaseName - databaseName. optional.
   * @param {String} ParentSnapshotHash - parentSnapshotHash. optional.
   */
  createSqlServerSnapshot(params = {}, options = {}) {
    return this.request('CreateSqlServerSnapshot', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultRegionId - vaultRegionId. required.
   * @param {String} VaultName - vaultName. required.
   * @param {String} Description - description. optional.
   * @param {String} VaultType - vaultType. optional. default: STANDARD.
   * @param {Boolean} SearchEnabled - searchEnabled. optional. default: False.
   * @param {String} VaultStorageClass - vaultStorageClass. optional. default: STANDARD.
   * @param {String} ReplicationSourceVaultId - replicationSourceVaultId. optional.
   */
  createVault(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VaultRegionId')) {
      throw new TypeError('parameter "VaultRegionId" is required');
    }

    if (!hasOwnProperty(params, 'VaultName')) {
      throw new TypeError('parameter "VaultName" is required');
    }

    return this.request('CreateVault', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   */
  deactivateClient(params = {}, options = {}) {
    return this.request('DeactivateClient', params, options);
  }

  /**
   * @param {String} PlanId - planId. required.
   */
  deleteBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('DeleteBackupPlan', params, options);
  }

  /**
   * @param {String} BackupSourceGroupId - backupSourceGroupId. required.
   */
  deleteBackupSourceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BackupSourceGroupId')) {
      throw new TypeError('parameter "BackupSourceGroupId" is required');
    }

    return this.request('DeleteBackupSourceGroup', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   */
  deleteClient(params = {}, options = {}) {
    return this.request('DeleteClient', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {Json} ClientIds - clientIds. optional.
   */
  deleteClients(params = {}, options = {}) {
    return this.request('DeleteClients', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} ContactId - contactId. required.
   */
  deleteContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('DeleteContact', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} ContactGroupId - contactGroupId. required.
   */
  deleteContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactGroupId')) {
      throw new TypeError('parameter "ContactGroupId" is required');
    }

    return this.request('DeleteContactGroup', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} PlanId - planId. required.
   */
  deleteHanaBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('DeleteHanaBackupPlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Sid - sid. required.
   * @param {String} Tags - tags. required.
   * @param {String} Paths - paths. required.
   * @param {String} SnapshotId - snapshotId. required.
   */
  deleteHanaMetadata(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    if (!hasOwnProperty(params, 'Tags')) {
      throw new TypeError('parameter "Tags" is required');
    }

    if (!hasOwnProperty(params, 'Paths')) {
      throw new TypeError('parameter "Paths" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('DeleteHanaMetadata', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} JobId - jobId. required.
   */
  deleteJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('DeleteJob', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} PlanId - planId. required.
   */
  deletePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('DeletePlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} PolicyId - policyId. required.
   */
  deletePolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    return this.request('DeletePolicy', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} RestoreId - restoreId. required.
   */
  deleteRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RestoreId')) {
      throw new TypeError('parameter "RestoreId" is required');
    }

    return this.request('DeleteRestore', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} ServerId - serverId. required.
   */
  deleteServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerId')) {
      throw new TypeError('parameter "ServerId" is required');
    }

    return this.request('DeleteServer', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} SnapshotId - snapshotId. required.
   */
  deleteSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('DeleteSnapshot', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   */
  deleteVault(params = {}, options = {}) {
    return this.request('DeleteVault', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} Id - id. required.
   */
  describeAlertConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeAlertConfig', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} VaultRegionId - vaultRegionId. optional.
   */
  describeBackupJobs(params = {}, options = {}) {
    return this.request('DescribeBackupJobs', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} SourceType - sourceType. required.
   * @param {RepeatList} Filters - filters. optional.
   */
  describeBackupJobs2(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    return this.request('DescribeBackupJobs2', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} SourceType - sourceType. required.
   * @param {RepeatList} Filters - filters. optional.
   */
  describeBackupPlans(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    return this.request('DescribeBackupPlans', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} SourceType - sourceType. required.
   * @param {RepeatList} Filters - filters. optional.
   */
  describeBackupSourceGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    return this.request('DescribeBackupSourceGroups', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} SourceType - sourceType. required.
   * @param {RepeatList} Filters - filters. optional.
   */
  describeBackupSources(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    return this.request('DescribeBackupSources', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   */
  describeClientAlertConfig(params = {}, options = {}) {
    return this.request('DescribeClientAlertConfig', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} PlatformType - platformType. required.
   * @param {String} CurrentVersion - currentVersion. optional.
   * @param {String} ClientType - clientType. optional. default: AGENT.
   */
  describeClientVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    return this.request('DescribeClientVersion', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ClientType - clientType. optional.
   * @param {String} SourceType - sourceType. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} VaultRegionId - vaultRegionId. optional.
   * @param {Json} InnerIpAddresses - innerIpAddresses. optional.
   * @param {Json} PrivateIpAddresses - privateIpAddresses. optional.
   * @param {Json} InstanceIds - instanceIds. optional.
   */
  describeClients(params = {}, options = {}) {
    return this.request('DescribeClients', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeContactGroups(params = {}, options = {}) {
    return this.request('DescribeContactGroups', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ContactId - contactId. optional.
   */
  describeContacts(params = {}, options = {}) {
    return this.request('DescribeContacts', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   */
  describeHanaAlertConfig(params = {}, options = {}) {
    return this.request('DescribeHanaAlertConfig', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1.
   * @param {String} DatabaseName - databaseName. optional.
   */
  describeHanaBackupPlans(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeHanaBackupPlans', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DatabaseName - databaseName. optional.
   */
  describeHanaBackupSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeHanaBackupSetting', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1.
   * @param {String} DatabaseName - databaseName. optional.
   * @param {String} Mode - mode. optional. default: RECOVERY_TO_MOST_RECENT.
   * @param {Long} RecoveryPointInTime - recoveryPointInTime. optional.
   * @param {Long} LogPosition - logPosition. optional.
   * @param {Integer} VolumeId - volumeId. optional.
   * @param {Boolean} SystemCopy - systemCopy. optional.
   * @param {String} Source - source. optional.
   * @param {String} SourceClusterId - sourceClusterId. optional.
   * @param {Boolean} IncludeDifferential - includeDifferential. optional. default: false.
   * @param {Boolean} IncludeIncremental - includeIncremental. optional. default: false.
   * @param {Boolean} IncludeLog - includeLog. optional. default: false.
   * @param {Boolean} UseBackint - useBackint. optional. default: false.
   */
  describeHanaBackups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeHanaBackups', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeHanaDatabases(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeHanaDatabases', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeHanaInstances(params = {}, options = {}) {
    return this.request('DescribeHanaInstances', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} Sid - sid. required.
   * @param {String} StartTags - startTags. optional.
   * @param {String} StartPaths - startPaths. optional.
   * @param {String} StartSnapshotId - startSnapshotId. optional.
   * @param {String} EndTags - endTags. optional.
   * @param {String} EndPaths - endPaths. optional.
   * @param {String} EndSnapshotId - endSnapshotId. optional.
   */
  describeHanaMetadata(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'Sid')) {
      throw new TypeError('parameter "Sid" is required');
    }

    return this.request('DescribeHanaMetadata', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeHanaNodes(params = {}, options = {}) {
    return this.request('DescribeHanaNodes', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1.
   * @param {String} RestoreId - restoreId. optional.
   * @param {String} DatabaseName - databaseName. optional.
   * @param {Long} BackupId - backupId. optional.
   * @param {String} RestoreStatus - restoreStatus. optional.
   */
  describeHanaRestores(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeHanaRestores', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DatabaseName - databaseName. optional.
   */
  describeHanaRetentionSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VaultId')) {
      throw new TypeError('parameter "VaultId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeHanaRetentionSetting', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DatabaseName - databaseName. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeHanaRunningBackups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('DescribeHanaRunningBackups', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} VpcId - vpcId. optional.
   * @param {Json} InstanceIds - instanceIds. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {Json} PrivateIpAddresses - privateIpAddresses. optional.
   * @param {Json} InnerIpAddresses - innerIpAddresses. optional.
   */
  describeInstancesInfo(params = {}, options = {}) {
    return this.request('DescribeInstancesInfo', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} JobId - jobId. optional.
   * @param {String} JobType - jobType. optional.
   * @param {String} JobStatus - jobStatus. optional.
   * @param {String} PolicyId - policyId. optional.
   */
  describeJobs(params = {}, options = {}) {
    return this.request('DescribeJobs', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} PlanId - planId. optional.
   * @param {String} PlanStatus - planStatus. optional.
   * @param {String} ScheduleType - scheduleType. optional.
   * @param {Boolean} IsRemoved - isRemoved. optional.
   * @param {String} SourceType - sourceType. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} ServerType - serverType. optional.
   */
  describePlans(params = {}, options = {}) {
    return this.request('DescribePlans', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} PolicyId - policyId. optional.
   */
  describePolicies(params = {}, options = {}) {
    return this.request('DescribePolicies', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeResourcePackages(params = {}, options = {}) {
    return this.request('DescribeResourcePackages', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} RestoreId - restoreId. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} Source - source. optional.
   * @param {String} Target - target. optional.
   * @param {String} Status - status. optional.
   * @param {String} RestoreType - restoreType. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} VaultRegionId - vaultRegionId. optional.
   */
  describeRestoreJobs(params = {}, options = {}) {
    return this.request('DescribeRestoreJobs', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} RestoreId - restoreId. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} Source - source. optional.
   * @param {String} Target - target. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} RestoreType - restoreType. optional.
   * @param {String} ContainerRestoreId - containerRestoreId. optional.
   * @param {String} ServerId - serverId. optional.
   */
  describeRestores(params = {}, options = {}) {
    return this.request('DescribeRestores', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ServerId - serverId. optional.
   * @param {String} ServerType - serverType. optional.
   * @param {String} ServerStatus - serverStatus. optional.
   * @param {Boolean} IsRemoved - isRemoved. optional.
   */
  describeServers(params = {}, options = {}) {
    return this.request('DescribeServers', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultRegionId - vaultRegionId. optional.
   * @param {Json} StatusList - statusList. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeSnapshotHistory(params = {}, options = {}) {
    return this.request('DescribeSnapshotHistory', params, options);
  }

  /**
   * @param {String} Source - source. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} Token - token. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ParentHash - parentHash. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} JobId - jobId. optional.
   * @param {Json} StatusList - statusList. optional.
   * @param {Long} CompleteTimeAfter - completeTimeAfter. optional.
   * @param {Long} CompleteTimeBefore - completeTimeBefore. optional.
   * @param {String} ContainerSnapshotId - containerSnapshotId. optional.
   * @param {String} PlanId - planId. optional.
   * @param {String} SnapshotType - snapshotType. optional.
   * @param {String} ServerId - serverId. optional.
   */
  describeSnapshots(params = {}, options = {}) {
    return this.request('DescribeSnapshots', params, options);
  }

  /**
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeSqlServerDatabases(params = {}, options = {}) {
    return this.request('DescribeSqlServerDatabases', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeSqlServerInstances(params = {}, options = {}) {
    return this.request('DescribeSqlServerInstances', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} StartDatabaseId - startDatabaseId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} Direction - direction. optional. default: FORWARD.
   * @param {Integer} Limit - limit. optional.
   * @param {String} EndDatabaseId - endDatabaseId. optional.
   */
  describeSqlServerLogs(params = {}, options = {}) {
    return this.request('DescribeSqlServerLogs', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 1.
   * @param {String} RestoreId - restoreId. optional.
   */
  describeSqlServerRestores(params = {}, options = {}) {
    return this.request('DescribeSqlServerRestores', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} PlanId - planId. optional.
   * @param {String} SnapshotHash - snapshotHash. optional.
   * @param {String} DatabaseId - databaseId. optional.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} BackupType - backupType. optional.
   * @param {String} DatabaseName - databaseName. optional.
   */
  describeSqlServerSnapshots(params = {}, options = {}) {
    return this.request('DescribeSqlServerSnapshots', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} TaskId - taskId. optional.
   */
  describeTask(params = {}, options = {}) {
    return this.request('DescribeTask', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   */
  describeUserBusinessStatus(params = {}, options = {}) {
    return this.request('DescribeUserBusinessStatus', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. required.
   */
  describeVaultAlertConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VaultId')) {
      throw new TypeError('parameter "VaultId" is required');
    }

    return this.request('DescribeVaultAlertConfig', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   */
  describeVaultReplicationRegions(params = {}, options = {}) {
    return this.request('DescribeVaultReplicationRegions', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. optional.
   * @param {String} VaultRegionId - vaultRegionId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} VaultType - vaultType. optional.
   * @param {String} Token - token. optional.
   */
  describeVaults(params = {}, options = {}) {
    return this.request('DescribeVaults', params, options);
  }

  /**
   * @param {String} PlanId - planId. required.
   */
  disableBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('DisableBackupPlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} PlanId - planId. required.
   */
  disableHanaBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('DisableHanaBackupPlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} JobId - jobId. required.
   */
  disableJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('DisableJob', params, options);
  }

  /**
   * @param {String} PlanId - planId. required.
   */
  enableBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('EnableBackupPlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} PlanId - planId. required.
   */
  enableHanaBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('EnableHanaBackupPlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} JobId - jobId. required.
   */
  enableJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('EnableJob', params, options);
  }

  /**
   * @param {String} PlanId - planId. required.
   */
  executeBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('ExecuteBackupPlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} BackupType - backupType. required.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} DatabaseName - databaseName. required.
   * @param {String} BackupPrefix - backupPrefix. optional.
   */
  executeHanaBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BackupType')) {
      throw new TypeError('parameter "BackupType" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseName')) {
      throw new TypeError('parameter "DatabaseName" is required');
    }

    return this.request('ExecuteHanaBackup', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} PlanId - planId. required.
   */
  executeHanaBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('ExecuteHanaBackupPlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} JobId - jobId. required.
   */
  executeJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('ExecuteJob', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {Long} ExpireInSeconds - expireInSeconds. optional. default: 172800.
   */
  generateClientToken(params = {}, options = {}) {
    return this.request('GenerateClientToken', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   */
  generateMqttToken(params = {}, options = {}) {
    return this.request('GenerateMqttToken', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {Long} ExpireInSeconds - expireInSeconds. optional. default: 3600.
   * @param {String} CredentialType - credentialType. optional. default: VaultAccess.
   */
  generateStsCredential(params = {}, options = {}) {
    return this.request('GenerateStsCredential', params, options);
  }

  /**
   * @param {String} ClientId - clientId. required.
   */
  generateToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    return this.request('GenerateToken', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} PlatformType - platformType. required.
   * @param {String} ClientType - clientType. optional. default: AGENT.
   */
  getClientDownloadLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlatformType')) {
      throw new TypeError('parameter "PlatformType" is required');
    }

    return this.request('GetClientDownloadLink', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Json} InnerIpAddresses - innerIpAddresses. optional.
   * @param {Json} PrivateIpAddresses - privateIpAddresses. optional.
   */
  getClientTemplateDownloadLink(params = {}, options = {}) {
    return this.request('GetClientTemplateDownloadLink', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} ClientType - clientType. optional.
   * @param {String} SourceType - sourceType. optional.
   * @param {Json} InnerIpAddresses - innerIpAddresses. optional.
   * @param {Json} PrivateIpAddresses - privateIpAddresses. optional.
   * @param {Json} InstanceIds - instanceIds. optional.
   */
  getClientsToRestore(params = {}, options = {}) {
    return this.request('GetClientsToRestore', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  getHanaInstancesToRestore(params = {}, options = {}) {
    return this.request('GetHanaInstancesToRestore', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {Boolean} ShowDeleteSourceOption - showDeleteSourceOption. optional.
   */
  getJobTemplateDownloadLink(params = {}, options = {}) {
    return this.request('GetJobTemplateDownloadLink', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. optional.
   * @param {String} Token - token. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} ErrorFile - errorFile. optional.
   */
  getSnapshotErrorFileDownloadLink(params = {}, options = {}) {
    return this.request('GetSnapshotErrorFileDownloadLink', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  getSqlServerDatabasesToRestore(params = {}, options = {}) {
    return this.request('GetSqlServerDatabasesToRestore', params, options);
  }

  /**
   * @param {Long} ResourceAccountId - resourceAccountId. required.
   * @param {String} VaultRegionId - vaultRegionId. required.
   * @param {String} BucketName - bucketName. required.
   */
  getVaultAccessCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceAccountId')) {
      throw new TypeError('parameter "ResourceAccountId" is required');
    }

    if (!hasOwnProperty(params, 'VaultRegionId')) {
      throw new TypeError('parameter "VaultRegionId" is required');
    }

    if (!hasOwnProperty(params, 'BucketName')) {
      throw new TypeError('parameter "BucketName" is required');
    }

    return this.request('GetVaultAccessCode', params, options);
  }

  /**
   * @param {String} VaultRegionId - vaultRegionId. required.
   */
  getVaultList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VaultRegionId')) {
      throw new TypeError('parameter "VaultRegionId" is required');
    }

    return this.request('GetVaultList', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} PlanId - planId. required.
   */
  removePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('RemovePlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} ServerId - serverId. required.
   */
  removeServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerId')) {
      throw new TypeError('parameter "ServerId" is required');
    }

    return this.request('RemoveServer', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {Long} ExpireInSeconds - expireInSeconds. optional. default: 172800.
   */
  renewClientToken(params = {}, options = {}) {
    return this.request('RenewClientToken', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} StatisticsType - statisticsType. required.
   * @param {String} Detail - detail. optional.
   */
  reportStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StatisticsType')) {
      throw new TypeError('parameter "StatisticsType" is required');
    }

    return this.request('ReportStatistics', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} PlanId - planId. required.
   */
  restorePlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('RestorePlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} ServerId - serverId. required.
   */
  restoreServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerId')) {
      throw new TypeError('parameter "ServerId" is required');
    }

    return this.request('RestoreServer', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Json} Query - query. optional.
   * @param {Json} SearchAfter - searchAfter. optional.
   */
  searchBackupFiles(params = {}, options = {}) {
    return this.request('SearchBackupFiles', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} Email - email. optional.
   */
  sendEmailVerifyCode(params = {}, options = {}) {
    return this.request('SendEmailVerifyCode', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} Mobile - mobile. optional.
   */
  sendMobileVerifyCode(params = {}, options = {}) {
    return this.request('SendMobileVerifyCode', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   */
  uninstallClient(params = {}, options = {}) {
    return this.request('UninstallClient', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} Id - id. required.
   * @param {String} AlertSetting - alertSetting. optional.
   * @param {Json} ContactIds - contactIds. optional.
   * @param {Json} ContactGroupIds - contactGroupIds. optional.
   */
  updateAlertConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateAlertConfig', params, options);
  }

  /**
   * @param {String} JobId - jobId. required.
   * @param {String} Status - status. optional.
   * @param {Integer} Progress - progress. optional.
   * @param {String} ErrorMessage - errorMessage. optional.
   * @param {Long} ExpireTime - expireTime. optional.
   * @param {String} Token - token. optional.
   */
  updateBackupJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('UpdateBackupJob', params, options);
  }

  /**
   * @param {String} PlanId - planId. required.
   * @param {String} PlanName - planName. optional.
   * @param {String} Schedule - schedule. optional.
   * @param {Long} Retention - retention. optional.
   */
  updateBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('UpdateBackupPlan', params, options);
  }

  /**
   * @param {String} BackupSourceGroupId - backupSourceGroupId. required.
   * @param {String} Description - description. optional.
   * @param {Boolean} ImplicitlyCreateBackupSources - implicitlyCreateBackupSources. optional. default: false.
   * @param {RepeatList} BackupSourceId - backupSourceIds. optional.
   * @param {RepeatList} BackupSource - backupSources. optional.
   */
  updateBackupSourceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BackupSourceGroupId')) {
      throw new TypeError('parameter "BackupSourceGroupId" is required');
    }

    return this.request('UpdateBackupSourceGroup', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} AlertSetting - alertSetting. optional.
   * @param {String} ContactId - contactId. optional.
   * @param {Json} SourceTypes - sourceTypes. optional.
   */
  updateClient(params = {}, options = {}) {
    return this.request('UpdateClient', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} AlertSetting - alertSetting. optional.
   * @param {Json} ContactIds - contactIds. optional.
   * @param {Json} ContactGroupIds - contactGroupIds. optional.
   */
  updateClientAlertConfig(params = {}, options = {}) {
    return this.request('UpdateClientAlertConfig', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} ContactId - contactId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Email - email. optional.
   * @param {String} Mobile - mobile. optional.
   * @param {String} EmailVerifyCode - emailVerifyCode. optional.
   * @param {String} MobileVerifyCode - mobileVerifyCode. optional.
   */
  updateContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('UpdateContact', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} ContactGroupId - contactGroupId. required.
   * @param {String} DisplayName - displayName. optional.
   * @param {Json} ContactIds - contactIds. optional.
   */
  updateContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactGroupId')) {
      throw new TypeError('parameter "ContactGroupId" is required');
    }

    return this.request('UpdateContactGroup', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} AlertSetting - alertSetting. optional.
   * @param {Json} ContactIds - contactIds. optional.
   * @param {Json} ContactGroupIds - contactGroupIds. optional.
   */
  updateHanaAlertConfig(params = {}, options = {}) {
    return this.request('UpdateHanaAlertConfig', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} PlanId - planId. required.
   * @param {String} PlanName - planName. optional.
   * @param {String} Schedule - schedule. optional.
   * @param {String} BackupPrefix - backupPrefix. optional.
   */
  updateHanaBackupPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlanId')) {
      throw new TypeError('parameter "PlanId" is required');
    }

    return this.request('UpdateHanaBackupPlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} DatabaseName - databaseName. optional.
   * @param {Boolean} EnableAutoLogBackup - enableAutoLogBackup. required.
   * @param {String} DataBackupParameterFile - dataBackupParameterFile. optional.
   * @param {String} LogBackupParameterFile - logBackupParameterFile. optional.
   * @param {Boolean} LogBackupUsingBackint - logBackupUsingBackint. required.
   * @param {Long} LogBackupTimeout - logBackupTimeout. optional.
   * @param {Boolean} CatalogBackupUsingBackint - catalogBackupUsingBackint. required.
   * @param {String} CatalogBackupParameterFile - catalogBackupParameterFile. optional.
   */
  updateHanaBackupSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'EnableAutoLogBackup')) {
      throw new TypeError('parameter "EnableAutoLogBackup" is required');
    }

    if (!hasOwnProperty(params, 'LogBackupUsingBackint')) {
      throw new TypeError('parameter "LogBackupUsingBackint" is required');
    }

    if (!hasOwnProperty(params, 'CatalogBackupUsingBackint')) {
      throw new TypeError('parameter "CatalogBackupUsingBackint" is required');
    }

    return this.request('UpdateHanaBackupSetting', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} HanaName - hanaName. optional.
   * @param {String} Host - host. optional.
   * @param {Integer} InstanceNumber - instanceNumber. required.
   * @param {String} UserName - userName. optional.
   * @param {String} Password - password. optional.
   * @param {Boolean} UseSsl - useSsl. required.
   * @param {Boolean} ValidateCertificate - validateCertificate. required.
   * @param {String} AlertSetting - alertSetting. optional.
   * @param {String} ContactId - contactId. optional.
   */
  updateHanaInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceNumber')) {
      throw new TypeError('parameter "InstanceNumber" is required');
    }

    if (!hasOwnProperty(params, 'UseSsl')) {
      throw new TypeError('parameter "UseSsl" is required');
    }

    if (!hasOwnProperty(params, 'ValidateCertificate')) {
      throw new TypeError('parameter "ValidateCertificate" is required');
    }

    return this.request('UpdateHanaInstance', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} RestoreId - restoreId. required.
   * @param {String} Status - status. optional.
   * @param {Long} DatabaseRestoreId - databaseRestoreId. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} State - state. optional.
   * @param {String} Phase - phase. optional.
   * @param {Integer} MaxPhase - maxPhase. optional.
   * @param {Integer} CurrentPhase - currentPhase. optional.
   * @param {Long} MaxProgress - maxProgress. optional.
   * @param {Long} CurrentProgress - currentProgress. optional.
   * @param {String} Message - message. optional.
   * @param {Long} SysStartTime - sysStartTime. optional.
   * @param {Long} SysEndTime - sysEndTime. optional.
   * @param {Long} UtcStartTime - utcStartTime. optional.
   * @param {Long} UtcEndTime - utcEndTime. optional.
   * @param {Long} SysReachedTime - sysReachedTime. optional.
   * @param {Long} UtcReachedTime - utcReachedTime. optional.
   */
  updateHanaRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'RestoreId')) {
      throw new TypeError('parameter "RestoreId" is required');
    }

    return this.request('UpdateHanaRestore', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} Schedule - schedule. required.
   * @param {Long} RetentionDays - retentionDays. required.
   * @param {Boolean} Disabled - disabled. required.
   * @param {String} DatabaseName - databaseName. optional.
   */
  updateHanaRetentionSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Schedule')) {
      throw new TypeError('parameter "Schedule" is required');
    }

    if (!hasOwnProperty(params, 'RetentionDays')) {
      throw new TypeError('parameter "RetentionDays" is required');
    }

    if (!hasOwnProperty(params, 'Disabled')) {
      throw new TypeError('parameter "Disabled" is required');
    }

    return this.request('UpdateHanaRetentionSetting', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} JobId - jobId. required.
   * @param {String} JobStatus - jobStatus. optional.
   * @param {String} Source - source. optional.
   * @param {String} PolicyId - policyId. optional.
   * @param {String} CurrentSnapshotId - currentSnapshotId. optional.
   * @param {String} LastSnapshotId - lastSnapshotId. optional.
   * @param {String} JobName - jobName. optional.
   * @param {String} Schedule - schedule. optional.
   * @param {Long} Retention - retention. optional.
   * @param {String} JobOption - jobOption. optional.
   */
  updateJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('UpdateJob', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} PlanId - planId. optional.
   * @param {String} PlanName - planName. optional.
   * @param {String} PlanStatus - planStatus. optional.
   * @param {String} Source - source. optional.
   * @param {Long} Retention - retention. optional.
   * @param {String} ScheduleType - scheduleType. optional.
   * @param {String} FullPolicyId - fullPolicyId. optional.
   * @param {String} IncPolicyId - incPolicyId. optional.
   * @param {String} DiffPolicyId - diffPolicyId. optional.
   */
  updatePlan(params = {}, options = {}) {
    return this.request('UpdatePlan', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} PolicyId - policyId. required.
   * @param {String} PolicyName - policyName. optional.
   * @param {String} Source - source. optional.
   * @param {String} Schedule - schedule. optional.
   * @param {Long} Retention - retention. optional.
   * @param {String} Status - status. optional.
   * @param {Long} LastRunTime - lastRunTime. optional.
   */
  updatePolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    return this.request('UpdatePolicy', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} RestoreId - restoreId. required.
   * @param {String} Status - status. optional.
   * @param {Long} Duration - duration. optional.
   * @param {Long} CompleteTime - completeTime. optional.
   * @param {Long} BytesDone - bytesDone. optional.
   * @param {Long} BytesTotal - bytesTotal. optional.
   * @param {Long} ItemsDone - itemsDone. optional.
   * @param {Long} ItemsTotal - itemsTotal. optional.
   * @param {Long} ActualBytes - actualBytes. optional.
   * @param {Long} ErrorCount - errorCount. optional.
   * @param {String} ExitCode - exitCode. optional.
   */
  updateRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RestoreId')) {
      throw new TypeError('parameter "RestoreId" is required');
    }

    return this.request('UpdateRestore', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} ServerId - serverId. required.
   * @param {String} ServerType - serverType. optional.
   * @param {String} Host - host. optional.
   * @param {String} Username - username. optional.
   * @param {String} Password - password. optional.
   * @param {String} ServerStatus - serverStatus. optional.
   * @param {String} Description - description. optional.
   * @param {String} DetailInfo - detailInfo. optional.
   */
  updateServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerId')) {
      throw new TypeError('parameter "ServerId" is required');
    }

    return this.request('UpdateServer', params, options);
  }

  /**
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   * @param {String} SnapshotHash - snapshotHash. optional.
   * @param {String} ParentHash - parentHash. optional.
   * @param {Long} Size - size. optional.
   * @param {Long} ErrorCount - errorCount. optional.
   * @param {String} Status - status. optional.
   * @param {Long} BytesDone - bytesDone. optional.
   * @param {Long} BytesTotal - bytesTotal. optional.
   * @param {Long} ItemsDone - itemsDone. optional.
   * @param {Long} ItemsTotal - itemsTotal. optional.
   * @param {Long} ActualBytes - actualBytes. optional.
   * @param {String} ExitCode - exitCode. optional.
   * @param {Long} Duration - duration. optional.
   * @param {Long} CompleteTime - completeTime. optional.
   * @param {String} ErrorMessage - errorMessage. optional.
   * @param {String} ErrorFile - errorFile. optional.
   */
  updateSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('UpdateSnapshot', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} ServerName - serverName. optional.
   * @param {String} SqlLogin - sqlLogin. optional.
   * @param {String} SqlPassword - sqlPassword. optional.
   * @param {Boolean} UseWindowsAuth - useWindowsAuth. optional.
   * @param {String} WindowsLogin - windowsLogin. optional.
   * @param {String} WindowsPassword - windowsPassword. optional.
   */
  updateSqlServerInstance(params = {}, options = {}) {
    return this.request('UpdateSqlServerInstance', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} RestoreId - restoreId. required.
   * @param {String} Status - status. optional.
   * @param {Integer} Percentage - percentage. optional.
   * @param {Long} BytesTotal - bytesTotal. optional.
   * @param {String} ErrorMessage - errorMessage. optional.
   */
  updateSqlServerRestore(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RestoreId')) {
      throw new TypeError('parameter "RestoreId" is required');
    }

    return this.request('UpdateSqlServerRestore', params, options);
  }

  /**
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} Token - token. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} DatabaseId - databaseId. optional.
   * @param {String} SnapshotHash - snapshotHash. optional.
   * @param {String} Status - status. optional.
   * @param {Long} BytesTotal - bytesTotal. optional.
   * @param {Long} ExpireTime - expireTime. optional.
   * @param {Integer} Percentage - percentage. optional.
   * @param {String} ErrorMessage - errorMessage. optional.
   */
  updateSqlServerSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('UpdateSqlServerSnapshot', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. optional.
   * @param {String} VaultName - vaultName. optional.
   * @param {Boolean} SearchEnabled - searchEnabled. optional.
   * @param {String} Description - description. optional.
   */
  updateVault(params = {}, options = {}) {
    return this.request('UpdateVault', params, options);
  }

  /**
   * @param {String} VaultId - vaultId. required.
   * @param {String} AlertSetting - alertSetting. optional.
   * @param {Json} ContactIds - contactIds. optional.
   * @param {Json} ContactGroupIds - contactGroupIds. optional.
   */
  updateVaultAlertConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VaultId')) {
      throw new TypeError('parameter "VaultId" is required');
    }

    return this.request('UpdateVaultAlertConfig', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClientId - clientId. optional.
   */
  upgradeClient(params = {}, options = {}) {
    return this.request('UpgradeClient', params, options);
  }

  /**
   * @param {String} Token - token. optional.
   * @param {String} VaultId - vaultId. optional.
   * @param {String} ClusterId - clusterId. optional.
   */
  verifyHanaNodes(params = {}, options = {}) {
    return this.request('VerifyHanaNodes', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doCheckResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doLogicalDeleteResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doPhysicalDeleteResource', params, options);
  }

}

module.exports = Client;
