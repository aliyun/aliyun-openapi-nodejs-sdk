
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-26';
    super(config);
  }

  /**
   * @param {String} FsDesc - fsDesc. optional.
   * @param {String} FsSpec - fsSpec. required.
   * @param {Long} Bandwidth - bandwidth. required.
   * @param {Long} Capacity - capacity. required.
   * @param {String} NetworkType - networkType. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} VSwitchId - vswitchId. required.
   */
  cPFSCreateFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FsSpec')) {
      throw new TypeError('parameter "FsSpec" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    if (!hasOwnProperty(params, 'Capacity')) {
      throw new TypeError('parameter "Capacity" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    return this.request('CPFSCreateFileSystem', params, options);
  }

  /**
   * @param {String} FsId - fsId. required.
   */
  cPFSDeleteFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FsId')) {
      throw new TypeError('parameter "FsId" is required');
    }

    return this.request('CPFSDeleteFileSystem', params, options);
  }

  /**
   * @param {String} FsId - fsId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  cPFSDescribeFileSystems(params = {}, options = {}) {
    return this.request('CPFSDescribeFileSystems', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  cPFSDescribeRegions(params = {}, options = {}) {
    return this.request('CPFSDescribeRegions', params, options);
  }

  /**
   * @param {String} FsId - fsId. required.
   * @param {String} FsDesc - fsDesc. optional.
   * @param {String} LdapUrl - ldapUrl. optional.
   */
  cPFSModifyFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FsId')) {
      throw new TypeError('parameter "FsId" is required');
    }

    return this.request('CPFSModifyFileSystem', params, options);
  }

  /**
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} AccessGroupType - accessGroupType. required.
   * @param {String} Description - description. optional.
   */
  createAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupType')) {
      throw new TypeError('parameter "AccessGroupType" is required');
    }

    return this.request('CreateAccessGroup', params, options);
  }

  /**
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} SourceCidrIp - sourceCidrIp. required.
   * @param {String} RWAccessType - policy. optional. default: RDWR.
   * @param {String} UserAccessType - squashType. optional. default: no_squash.
   * @param {Integer} Priority - priorityNum. optional. default: 1.
   */
  createAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'SourceCidrIp')) {
      throw new TypeError('parameter "SourceCidrIp" is required');
    }

    return this.request('CreateAccessRule', params, options);
  }

  /**
   * @param {String} StorageType - volumeType. required.
   * @param {String} ProtocolType - protocolType. required.
   * @param {String} Description - volumeDesc. optional.
   */
  createFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StorageType')) {
      throw new TypeError('parameter "StorageType" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolType')) {
      throw new TypeError('parameter "ProtocolType" is required');
    }

    return this.request('CreateFileSystem', params, options);
  }

  /**
   * @param {String} FileSystemId - volume. required.
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} NetworkType - netWorkType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   */
  createMountTarget(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
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
   * @param {String} Volume - volume. required.
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   * @param {String} Path - path. required.
   * @param {Boolean} Recursive - recursive. required.
   * @param {String} Policy - policy. optional.
   * @param {Integer} Weekday - weekday. optional.
   * @param {Integer} Hour - hour. optional.
   * @param {Boolean} Enabled - enabled. optional. default: true.
   */
  createTieringJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Volume')) {
      throw new TypeError('parameter "Volume" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    if (!hasOwnProperty(params, 'Recursive')) {
      throw new TypeError('parameter "Recursive" is required');
    }

    return this.request('CreateTieringJob', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - desc. required.
   * @param {Long} Mtime - mtime. optional.
   * @param {Long} Atime - atime. optional.
   * @param {Long} Ctime - ctime. optional.
   * @param {Long} Size - size. optional.
   * @param {String} FileName - filename. optional.
   * @param {Long} RecallTime - recalltime. optional.
   * @param {Boolean} CheckLimit - checklimit. optional.
   */
  createTieringPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateTieringPolicy', params, options);
  }

  /**
   * @param {String} AccessGroupName - accessGroupName. required.
   */
  deleteAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    return this.request('DeleteAccessGroup', params, options);
  }

  /**
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} AccessRuleId - ruleId. required.
   */
  deleteAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'AccessRuleId')) {
      throw new TypeError('parameter "AccessRuleId" is required');
    }

    return this.request('DeleteAccessRule', params, options);
  }

  /**
   * @param {String} FileSystemId - volume. required.
   */
  deleteFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('DeleteFileSystem', params, options);
  }

  /**
   * @param {String} FileSystemId - volume. required.
   * @param {String} MountTargetDomain - mountTargetDomain. required.
   */
  deleteMountTarget(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    if (!hasOwnProperty(params, 'MountTargetDomain')) {
      throw new TypeError('parameter "MountTargetDomain" is required');
    }

    return this.request('DeleteMountTarget', params, options);
  }

  /**
   * @param {String} Volume - volume. required.
   * @param {String} Name - name. required.
   */
  deleteTieringJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Volume')) {
      throw new TypeError('parameter "Volume" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteTieringJob', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  deleteTieringPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteTieringPolicy', params, options);
  }

  /**
   * @param {String} AccessGroupName - accessGroupName. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeAccessGroups(params = {}, options = {}) {
    return this.request('DescribeAccessGroups', params, options);
  }

  /**
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} AccessRuleId - ruleId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeAccessRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    return this.request('DescribeAccessRules', params, options);
  }

  /**
   * @param {String} FileSystemId - volume. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeFileSystems(params = {}, options = {}) {
    return this.request('DescribeFileSystems', params, options);
  }

  /**
   * @param {String} FileSystemId - volume. required.
   * @param {String} MountTargetDomain - mountTargetDomain. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeMountTargets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('DescribeMountTargets', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} Volume - volume. required.
   */
  describeTieringJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Volume')) {
      throw new TypeError('parameter "Volume" is required');
    }

    return this.request('DescribeTieringJobs', params, options);
  }

  /**
   */
  describeTieringPolicies(params = {}, options = {}) {
    return this.request('DescribeTieringPolicies', params, options);
  }

  /**
   */
  describeZones(params = {}, options = {}) {
    return this.request('DescribeZones', params, options);
  }

  /**
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} Description - description. optional.
   */
  modifyAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    return this.request('ModifyAccessGroup', params, options);
  }

  /**
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} AccessRuleId - ruleId. required.
   * @param {String} SourceCidrIp - sourceCidrIp. optional.
   * @param {String} RWAccessType - policy. optional. default: RDWR.
   * @param {String} UserAccessType - squashType. optional. default: no_squash.
   * @param {Integer} Priority - priorityNum. optional. default: 1.
   */
  modifyAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'AccessRuleId')) {
      throw new TypeError('parameter "AccessRuleId" is required');
    }

    return this.request('ModifyAccessRule', params, options);
  }

  /**
   * @param {String} FileSystemId - volume. required.
   * @param {String} Description - volumeDesc. optional.
   */
  modifyFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('ModifyFileSystem', params, options);
  }

  /**
   * @param {String} FileSystemId - volume. required.
   * @param {String} MountTargetDomain - mountTargetDomain. required.
   * @param {String} AccessGroupName - accessGroupName. optional.
   * @param {String} Status - status. optional.
   */
  modifyMountTarget(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    if (!hasOwnProperty(params, 'MountTargetDomain')) {
      throw new TypeError('parameter "MountTargetDomain" is required');
    }

    return this.request('ModifyMountTarget', params, options);
  }

  /**
   * @param {String} Volume - volume. required.
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   * @param {String} Path - path. optional.
   * @param {Boolean} Recursive - recursive. optional.
   * @param {String} Policy - policy. optional.
   * @param {Integer} Weekday - weekday. optional.
   * @param {Integer} Hour - hour. optional.
   * @param {Boolean} Enabled - enabled. optional. default: true.
   */
  modifyTieringJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Volume')) {
      throw new TypeError('parameter "Volume" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('ModifyTieringJob', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - desc. optional.
   * @param {Long} Mtime - mtime. optional.
   * @param {Long} Atime - atime. optional.
   * @param {Long} Ctime - ctime. optional.
   * @param {Long} Size - size. optional.
   * @param {String} FileName - filename. optional.
   * @param {Long} RecallTime - recalltime. optional.
   */
  modifyTieringPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyTieringPolicy', params, options);
  }

}

module.exports = Client;
