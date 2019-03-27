
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-02-29';
    super(config);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} SrcVolume - srcVolume. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} HourGap - hourGap. required.
   * @param {String} VersionCount - versionCount. required.
   * @param {String} ProtocolType - protocolType. optional.
   */
  addBackupDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SrcVolume')) {
      throw new TypeError('parameter "SrcVolume" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'HourGap')) {
      throw new TypeError('parameter "HourGap" is required');
    }

    if (!hasOwnProperty(params, 'VersionCount')) {
      throw new TypeError('parameter "VersionCount" is required');
    }

    return this.request('AddBackupDemand', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   * @param {String} UserName - userName. required.
   * @param {String} FsName - fsName. required.
   * @param {String} Mode - mode. required.
   */
  addFiNasPoolUserToVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'FsName')) {
      throw new TypeError('parameter "FsName" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    return this.request('AddFiNasPoolUserToVolume', params, options);
  }

  /**
   * @param {String} Feature - feature. required.
   * @param {String} Phone - phone. required.
   * @param {String} Company - company. required.
   * @param {String} Desc - desc. required.
   * @param {String} Email - email. required.
   */
  applyNasBeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Feature')) {
      throw new TypeError('parameter "Feature" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'Company')) {
      throw new TypeError('parameter "Company" is required');
    }

    if (!hasOwnProperty(params, 'Desc')) {
      throw new TypeError('parameter "Desc" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('ApplyNasBeta', params, options);
  }

  /**
   * @param {String} Email - email. required.
   * @param {String} Phone - phone. required.
   * @param {String} Company - company. required.
   * @param {String} Desc - desc. required.
   */
  applyNasPlusBeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'Company')) {
      throw new TypeError('parameter "Company" is required');
    }

    if (!hasOwnProperty(params, 'Desc')) {
      throw new TypeError('parameter "Desc" is required');
    }

    return this.request('ApplyNasPlusBeta', params, options);
  }

  /**
   * @param {String} Email - email. required.
   * @param {String} Phone - phone. required.
   * @param {String} Company - company. required.
   * @param {String} Desc - desc. required.
   */
  applyNasSmbBeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'Company')) {
      throw new TypeError('parameter "Company" is required');
    }

    if (!hasOwnProperty(params, 'Desc')) {
      throw new TypeError('parameter "Desc" is required');
    }

    return this.request('ApplyNasSmbBeta', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} SrcVolume - srcVolume. required.
   */
  backupNow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SrcVolume')) {
      throw new TypeError('parameter "SrcVolume" is required');
    }

    return this.request('BackupNow', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} VolumeId - volumeId. required.
   * @param {String} PackageId - packageId. required.
   */
  bindVolumeStoragePackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VolumeId')) {
      throw new TypeError('parameter "VolumeId" is required');
    }

    if (!hasOwnProperty(params, 'PackageId')) {
      throw new TypeError('parameter "PackageId" is required');
    }

    return this.request('BindVolumeStoragePackage', params, options);
  }

  /**
   * @param {String} Feature - feature. required.
   */
  checkNasBeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Feature')) {
      throw new TypeError('parameter "Feature" is required');
    }

    return this.request('CheckNasBeta', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   */
  checkNasPackageOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CheckNasPackageOrder', params, options);
  }

  /**
   */
  checkNasPlusBeta(params = {}, options = {}) {
    return this.request('CheckNasPlusBeta', params, options);
  }

  /**
   */
  checkNasSmbBeta(params = {}, options = {}) {
    return this.request('CheckNasSmbBeta', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   */
  completeNasPackageOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteNasPackageOrder', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} AccessGroupType - accessGroupType. required.
   * @param {String} Description - description. optional.
   */
  createAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupType')) {
      throw new TypeError('parameter "AccessGroupType" is required');
    }

    return this.request('CreateAccessGroup', params, options);
  }

  /**
   * @param {String} ResourceOwner - resourceOwner. required.
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} AccessGroupType - accessGroupType. required.
   * @param {String} Description - description. optional.
   */
  createAccessGroupInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceOwner')) {
      throw new TypeError('parameter "ResourceOwner" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupType')) {
      throw new TypeError('parameter "AccessGroupType" is required');
    }

    return this.request('CreateAccessGroupInternal', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} SourceCidrIp - sourceCidrIp. required.
   * @param {String} Policy - policy. required.
   * @param {String} SquashType - squashType. required.
   * @param {String} Priority - priority. required.
   */
  createAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'SourceCidrIp')) {
      throw new TypeError('parameter "SourceCidrIp" is required');
    }

    if (!hasOwnProperty(params, 'Policy')) {
      throw new TypeError('parameter "Policy" is required');
    }

    if (!hasOwnProperty(params, 'SquashType')) {
      throw new TypeError('parameter "SquashType" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('CreateAccessRule', params, options);
  }

  /**
   * @param {String} ResourceOwner - resourceOwner. required.
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} SourceCidrIp - sourceCidrIp. required.
   * @param {String} Policy - policy. required.
   * @param {String} SquashType - squashType. required.
   * @param {String} Priority - priority. required.
   */
  createAccessRuleInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceOwner')) {
      throw new TypeError('parameter "ResourceOwner" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'SourceCidrIp')) {
      throw new TypeError('parameter "SourceCidrIp" is required');
    }

    if (!hasOwnProperty(params, 'Policy')) {
      throw new TypeError('parameter "Policy" is required');
    }

    if (!hasOwnProperty(params, 'SquashType')) {
      throw new TypeError('parameter "SquashType" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('CreateAccessRuleInternal', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   * @param {String} UserName - userName. required.
   * @param {String} QuotaSize - quotaSize. required.
   * @param {String} Passwd - passwd. required.
   */
  createFiNasPoolUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'QuotaSize')) {
      throw new TypeError('parameter "QuotaSize" is required');
    }

    if (!hasOwnProperty(params, 'Passwd')) {
      throw new TypeError('parameter "Passwd" is required');
    }

    return this.request('CreateFiNasPoolUser', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   * @param {String} FsName - fsName. required.
   * @param {String} QuotaSize - quotaSize. required.
   */
  createFiNasPoolVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    if (!hasOwnProperty(params, 'FsName')) {
      throw new TypeError('parameter "FsName" is required');
    }

    if (!hasOwnProperty(params, 'QuotaSize')) {
      throw new TypeError('parameter "QuotaSize" is required');
    }

    return this.request('CreateFiNasPoolVolume', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} VswId - vswId. required.
   * @param {String} PoolSize - poolSize. required.
   */
  createFiNasStoragePool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VswId')) {
      throw new TypeError('parameter "VswId" is required');
    }

    if (!hasOwnProperty(params, 'PoolSize')) {
      throw new TypeError('parameter "PoolSize" is required');
    }

    return this.request('CreateFiNasStoragePool', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} ZoneId - avaliableZone. required.
   * @param {String} FileSystemType - volumeType. optional.
   * @param {String} ProtocolType - protocolType. optional.
   */
  createFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('CreateFileSystem', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} FileSystemName - volume. required.
   * @param {String} FileSystemUser - volumeUser. required.
   */
  createFileSystemOptionalUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemUser')) {
      throw new TypeError('parameter "FileSystemUser" is required');
    }

    return this.request('CreateFileSystemOptionalUser', params, options);
  }

  /**
   * @param {String} FileSystemName - volume. required.
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} NetworkType - netWorkType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   */
  createMountTarget(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    return this.request('CreateMountTarget', params, options);
  }

  /**
   * @param {String} ResourceOwner - resourceOwner. required.
   * @param {String} FileSystemName - volume. required.
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} NetworkType - netWorkType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   */
  createMountTargetInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceOwner')) {
      throw new TypeError('parameter "ResourceOwner" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    return this.request('CreateMountTargetInternal', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   */
  deleteAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    return this.request('DeleteAccessGroup', params, options);
  }

  /**
   * @param {String} ResourceOwner - resourceOwner. required.
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   */
  deleteAccessGroupInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceOwner')) {
      throw new TypeError('parameter "ResourceOwner" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    return this.request('DeleteAccessGroupInternal', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} RuleId - ruleId. required.
   */
  deleteAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('DeleteAccessRule', params, options);
  }

  /**
   * @param {String} ResourceOwner - resourceOwner. required.
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} RuleId - ruleId. required.
   */
  deleteAccessRuleInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceOwner')) {
      throw new TypeError('parameter "ResourceOwner" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('DeleteAccessRuleInternal', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} SrcVolume - srcVolume. required.
   */
  deleteBackupDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SrcVolume')) {
      throw new TypeError('parameter "SrcVolume" is required');
    }

    return this.request('DeleteBackupDemand', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   * @param {String} UserName - userName. required.
   */
  deleteFiNasPoolUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('DeleteFiNasPoolUser', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   * @param {String} FsName - fsName. required.
   */
  deleteFiNasPoolVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    if (!hasOwnProperty(params, 'FsName')) {
      throw new TypeError('parameter "FsName" is required');
    }

    return this.request('DeleteFiNasPoolVolume', params, options);
  }

  /**
   * @param {String} FileSystemName - volume. required.
   * @param {String} RegionId - region. required.
   */
  deleteFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteFileSystem', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} FileSystemName - volume. required.
   * @param {String} FileSystemUser - volumeUser. required.
   */
  deleteFileSystemOptionalUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemUser')) {
      throw new TypeError('parameter "FileSystemUser" is required');
    }

    return this.request('DeleteFileSystemOptionalUser', params, options);
  }

  /**
   * @param {String} FileSystemName - volume. required.
   * @param {String} RegionId - region. required.
   * @param {String} MountTargetId - slbId. required.
   */
  deleteMountTarget(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MountTargetId')) {
      throw new TypeError('parameter "MountTargetId" is required');
    }

    return this.request('DeleteMountTarget', params, options);
  }

  /**
   * @param {String} ResourceOwner - resourceOwner. required.
   * @param {String} FileSystemName - volume. required.
   * @param {String} RegionId - region. required.
   * @param {String} DomainName - domainName. required.
   */
  deleteMountTargetInternal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceOwner')) {
      throw new TypeError('parameter "ResourceOwner" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteMountTargetInternal', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   */
  describeAccessGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeAccessGroups', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   */
  describeAccessRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    return this.request('DescribeAccessRules', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   */
  describeBackupDemands(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeBackupDemands', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} SrcVolume - srcVolume. required.
   */
  describeBackupVersions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SrcVolume')) {
      throw new TypeError('parameter "SrcVolume" is required');
    }

    return this.request('DescribeBackupVersions', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   */
  describeFiNasPoolUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    return this.request('DescribeFiNasPoolUsers', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   */
  describeFiNasPoolVolumes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    return this.request('DescribeFiNasPoolVolumes', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. optional.
   */
  describeFiNasStoragePools(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFiNasStoragePools', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} FileSystemName - volume. required.
   * @param {String} FileSystemUser - volumeUser. required.
   */
  describeFileSystemOptionalUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemUser')) {
      throw new TypeError('parameter "FileSystemUser" is required');
    }

    return this.request('DescribeFileSystemOptionalUsers', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} FileSystemName - volume. optional.
   */
  describeFileSystems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeFileSystems', params, options);
  }

  /**
   * @param {String} FileSystemName - volume. required.
   * @param {String} RegionId - region. required.
   */
  describeMountTargets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeMountTargets', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   */
  describeVolumeStoragePackages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeVolumeStoragePackages', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   */
  fillInstanceParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillInstanceParam', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   */
  fillNasPackageSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillNasPackageSpec', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   */
  getFiNasTargetIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    return this.request('GetFiNasTargetIp', params, options);
  }

  /**
   * @param {String} Feature - feature. required.
   */
  listNasBeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Feature')) {
      throw new TypeError('parameter "Feature" is required');
    }

    return this.request('ListNasBeta', params, options);
  }

  /**
   */
  listNasPlusBeta(params = {}, options = {}) {
    return this.request('ListNasPlusBeta', params, options);
  }

  /**
   */
  listNasSmbBeta(params = {}, options = {}) {
    return this.request('ListNasSmbBeta', params, options);
  }

  /**
   */
  listRegion(params = {}, options = {}) {
    return this.request('ListRegion', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} Description - description. required.
   */
  modifyAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('ModifyAccessGroup', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} RuleId - ruleId. required.
   * @param {String} SourceCidrIp - sourceCidrIp. required.
   * @param {String} Policy - policy. required.
   * @param {String} SquashType - squashType. required.
   * @param {String} Priority - priority. required.
   */
  modifyAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    if (!hasOwnProperty(params, 'SourceCidrIp')) {
      throw new TypeError('parameter "SourceCidrIp" is required');
    }

    if (!hasOwnProperty(params, 'Policy')) {
      throw new TypeError('parameter "Policy" is required');
    }

    if (!hasOwnProperty(params, 'SquashType')) {
      throw new TypeError('parameter "SquashType" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('ModifyAccessRule', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   * @param {String} UserName - userName. required.
   * @param {String} QuotaSize - quotaSize. required.
   * @param {String} Passwd - passwd. required.
   */
  modifyFiNasPoolUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'QuotaSize')) {
      throw new TypeError('parameter "QuotaSize" is required');
    }

    if (!hasOwnProperty(params, 'Passwd')) {
      throw new TypeError('parameter "Passwd" is required');
    }

    return this.request('ModifyFiNasPoolUser', params, options);
  }

  /**
   * @param {String} FileSystemName - volume. required.
   * @param {String} RegionId - region. required.
   * @param {String} MountTargetId - slbId. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   */
  modifyMountTargetAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MountTargetId')) {
      throw new TypeError('parameter "MountTargetId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    return this.request('ModifyMountTargetAccessGroup', params, options);
  }

  /**
   * @param {String} FileSystemName - volume. required.
   * @param {String} RegionId - region. required.
   * @param {String} MountTargetId - slbId. required.
   * @param {String} Status - status. required.
   */
  modifyMountTargetStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MountTargetId')) {
      throw new TypeError('parameter "MountTargetId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('ModifyMountTargetStatus', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   */
  produceInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ProduceInstance', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   */
  produceNasPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ProduceNasPackage', params, options);
  }

  /**
   * @param {String} data - data. required.
   * @param {String} product - product. optional.
   * @param {String} version - version. optional.
   * @param {String} action - action. optional.
   * @param {String} regionId - regionId. optional.
   * @param {String} domain - domain. optional.
   */
  refundNasPackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RefundNasPackage', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} StorageId - storageId. required.
   * @param {String} UserName - userName. required.
   * @param {String} FsName - fsName. required.
   */
  removeFiNasPoolUserFromVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'FsName')) {
      throw new TypeError('parameter "FsName" is required');
    }

    return this.request('RemoveFiNasPoolUserFromVolume', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} SrcVolume - srcVolume. required.
   * @param {String} ResVolume - resVolume. required.
   * @param {String} VersionName - versionName. required.
   */
  restoreBackup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SrcVolume')) {
      throw new TypeError('parameter "SrcVolume" is required');
    }

    if (!hasOwnProperty(params, 'ResVolume')) {
      throw new TypeError('parameter "ResVolume" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    return this.request('RestoreBackup', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Feature - feature. required.
   * @param {String} Status - status. required.
   */
  setNasBetaStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Feature')) {
      throw new TypeError('parameter "Feature" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetNasBetaStatus', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Status - status. required.
   */
  setNasPlusBetaStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetNasPlusBetaStatus', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Status - status. required.
   */
  setNasSmbBetaStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetNasSmbBetaStatus', params, options);
  }

  /**
   * @param {String} UserId - user. required.
   * @param {String} CountLimit - statusval. required.
   */
  setUserVolumeCountLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'CountLimit')) {
      throw new TypeError('parameter "CountLimit" is required');
    }

    return this.request('SetUserVolumeCountLimit', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} Volumes - volumes. required.
   * @param {String} AuthType - authType. optional.
   */
  setUserVolumeSkipAuth(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Volumes')) {
      throw new TypeError('parameter "Volumes" is required');
    }

    return this.request('SetUserVolumeSkipAuth', params, options);
  }

  /**
   * @param {String} RegionId - region. required.
   * @param {String} VolumeId - volumeId. required.
   * @param {String} PackageId - packageId. required.
   */
  unBindVolumeStoragePackage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VolumeId')) {
      throw new TypeError('parameter "VolumeId" is required');
    }

    if (!hasOwnProperty(params, 'PackageId')) {
      throw new TypeError('parameter "PackageId" is required');
    }

    return this.request('UnBindVolumeStoragePackage', params, options);
  }

  /**
   * @param {String} FileSystemName - volume. required.
   * @param {String} RegionId - region. required.
   * @param {String} FileSystemDesc - volumeDesc. required.
   */
  updateFileSystemInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemDesc')) {
      throw new TypeError('parameter "FileSystemDesc" is required');
    }

    return this.request('UpdateFileSystemInfo', params, options);
  }

}

module.exports = Client;
