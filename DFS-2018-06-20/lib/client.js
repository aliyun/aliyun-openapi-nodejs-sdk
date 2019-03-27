
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-20';
    super(config);
  }

  /**
   * @param {String} AccessGroupName - accessGroupName. required.
   * @param {String} NetworkType - networkType. required.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} InputRegionId - regionId. required.
   */
  createAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessGroupName')) {
      throw new TypeError('parameter "AccessGroupName" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    return this.request('CreateAccessGroup', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} AccessGroupId - accessGroupId. required.
   * @param {String} NetworkSegment - networkSegment. required.
   * @param {String} RWAccessType - accessType. required.
   * @param {Integer} Priority - priority. required.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - pop.regionId. optional.
   */
  createAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupId')) {
      throw new TypeError('parameter "AccessGroupId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkSegment')) {
      throw new TypeError('parameter "NetworkSegment" is required');
    }

    if (!hasOwnProperty(params, 'RWAccessType')) {
      throw new TypeError('parameter "RWAccessType" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    return this.request('CreateAccessRule', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} ProtocolType - protocolType. required.
   * @param {String} StorageType - storageType. required.
   * @param {String} Description - description. optional.
   * @param {String} FileSystemName - fileSystemName. required.
   * @param {Long} SpaceCapacity - spaceCapacity. required.
   * @param {String} RegionId - pop.regionId. optional.
   */
  createFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolType')) {
      throw new TypeError('parameter "ProtocolType" is required');
    }

    if (!hasOwnProperty(params, 'StorageType')) {
      throw new TypeError('parameter "StorageType" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemName')) {
      throw new TypeError('parameter "FileSystemName" is required');
    }

    if (!hasOwnProperty(params, 'SpaceCapacity')) {
      throw new TypeError('parameter "SpaceCapacity" is required');
    }

    return this.request('CreateFileSystem', params, options);
  }

  /**
   * @param {String} FileSystemId - fileSystemId. required.
   * @param {String} AccessGroupId - accessGroupId. required.
   * @param {String} NetworkType - networkType. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} InputRegionId - regionId. required.
   */
  createMountPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupId')) {
      throw new TypeError('parameter "AccessGroupId" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    return this.request('CreateMountPoint', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} AccessGroupId - accessGroupId. required.
   */
  deleteAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupId')) {
      throw new TypeError('parameter "AccessGroupId" is required');
    }

    return this.request('DeleteAccessGroup', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} AccessGroupId - accessGroupId. required.
   * @param {String} AccessRuleId - accessRuleId. required.
   * @param {String} RegionId - pop.regionId. optional.
   */
  deleteAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupId')) {
      throw new TypeError('parameter "AccessGroupId" is required');
    }

    if (!hasOwnProperty(params, 'AccessRuleId')) {
      throw new TypeError('parameter "AccessRuleId" is required');
    }

    return this.request('DeleteAccessRule', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} FileSystemId - fileSystemId. required.
   */
  deleteFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('DeleteFileSystem', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} MountPointId - mountPointId. required.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} FileSystemId - fileSystemId. required.
   */
  deleteMountPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'MountPointId')) {
      throw new TypeError('parameter "MountPointId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('DeleteMountPoint', params, options);
  }

  /**
   * @param {String} AcceptLanguage - acceptLanguage. optional. default: 1.
   * @param {String} InputRegionId - regionId. optional. default: cn-beijing.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} AccessGroupId - accessGroupId. required.
   * @param {String} RegionId - pop.regionId. optional.
   */
  getAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupId')) {
      throw new TypeError('parameter "AccessGroupId" is required');
    }

    return this.request('GetAccessGroup', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} AccessGroupId - accessGroupId. required.
   * @param {String} AccessRuleId - accessRuleId. required.
   * @param {String} RegionId - pop.regionId. optional.
   */
  getAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupId')) {
      throw new TypeError('parameter "AccessGroupId" is required');
    }

    if (!hasOwnProperty(params, 'AccessRuleId')) {
      throw new TypeError('parameter "AccessRuleId" is required');
    }

    return this.request('GetAccessRule', params, options);
  }

  /**
   * @param {String} FileSystemId - fileSystemId. required.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} InputRegionId - regionId. required.
   */
  getFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    return this.request('GetFileSystem', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} FileSystemId - fileSystemId. required.
   * @param {String} MountPointId - mountPointId. required.
   * @param {String} RegionId - pop.regionId. optional.
   */
  getMountPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    if (!hasOwnProperty(params, 'MountPointId')) {
      throw new TypeError('parameter "MountPointId" is required');
    }

    return this.request('GetMountPoint', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} RegionId - pop.regionId. optional.
   */
  getRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    return this.request('GetRegion', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {Integer} StartOffset - startOffset. optional. default: 1.
   * @param {Integer} Limit - limit. optional. default: 10.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} OrderType - orderType. optional.
   * @param {String} RegionId - pop.regionId. optional.
   */
  listAccessGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    return this.request('ListAccessGroups', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} AccessGroupId - accessGroupId. required.
   * @param {Integer} StartOffset - startOffset. optional. default: 1.
   * @param {Integer} Limit - limit. optional. default: 10.
   * @param {String} OrderBy - orderBy. optional. default: Priority.
   * @param {String} OrderType - orderType. optional.
   * @param {String} RegionId - pop.regionId. optional.
   */
  listAccessRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupId')) {
      throw new TypeError('parameter "AccessGroupId" is required');
    }

    return this.request('ListAccessRules', params, options);
  }

  /**
   * @param {Integer} StartOffset - startOffset. optional. default: 1.
   * @param {Integer} Limit - limit. optional. default: 10.
   * @param {String} OrderBy - orderBy. optional. default: CreateTime.
   * @param {String} OrderType - orderType. optional. default: ASC.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} InputRegionId - regionId. required.
   */
  listFileSystems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    return this.request('ListFileSystems', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} FileSystemId - fileSystemId. required.
   * @param {Integer} StartOffset - startOffset. optional. default: 1.
   * @param {Integer} Limit - limit. optional. default: 10.
   * @param {String} OrderBy - orderBy. optional. default: CreateTime.
   * @param {String} OrderType - orderType. optional.
   * @param {String} RegionId - pop.regionId. optional.
   */
  listMountPoints(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('ListMountPoints', params, options);
  }

  /**
   * @param {Integer} Limit - limit. optional. default: 10.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {Integer} StartOffset - startOffset. optional. default: 1.
   * @param {String} InputRegionId - regionId. optional. default: cn-beijing.
   */
  listRegions(params = {}, options = {}) {
    return this.request('ListRegions', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} AccessGroupName - accessGroupName. optional.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} AccessGroupId - accessGroupId. required.
   */
  modifyAccessGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'AccessGroupId')) {
      throw new TypeError('parameter "AccessGroupId" is required');
    }

    return this.request('ModifyAccessGroup', params, options);
  }

  /**
   * @param {String} AccessGroupId - accessGroupId. required.
   * @param {String} AccessRuleId - accessRuleId. required.
   * @param {String} RWAccessType - accessType. optional.
   * @param {Integer} Priority - priority. optional.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} InputRegionId - regionId. required.
   */
  modifyAccessRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessGroupId')) {
      throw new TypeError('parameter "AccessGroupId" is required');
    }

    if (!hasOwnProperty(params, 'AccessRuleId')) {
      throw new TypeError('parameter "AccessRuleId" is required');
    }

    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    return this.request('ModifyAccessRule', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} FileSystemName - fileSystemName. optional.
   * @param {Long} SpaceCapacity - spaceCapacity. optional.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} FileSystemId - fileSystemId. required.
   */
  modifyFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('ModifyFileSystem', params, options);
  }

  /**
   * @param {String} InputRegionId - regionId. required.
   * @param {String} MountPointId - mountPointId. required.
   * @param {String} AccessGroupId - accessGroupId. optional.
   * @param {String} Description - description. optional.
   * @param {String} Status - status. optional.
   * @param {String} RegionId - pop.regionId. optional.
   * @param {String} FileSystemId - fileSystemId. required.
   */
  modifyMountPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputRegionId')) {
      throw new TypeError('parameter "InputRegionId" is required');
    }

    if (!hasOwnProperty(params, 'MountPointId')) {
      throw new TypeError('parameter "MountPointId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('ModifyMountPoint', params, options);
  }

}

module.exports = Client;
