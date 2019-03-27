
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-03-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   */
  activateInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ActivateInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {String} AuthenticIP - authenticIP. required.
   */
  addAuthenticIP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AuthenticIP')) {
      throw new TypeError('parameter "AuthenticIP" is required');
    }

    return this.request('AddAuthenticIP', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Password - password. required.
   * @param {Long} Capacity - capacity. required.
   * @param {String} InstanceName - ocsInstanceName. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} NetworkType - networkType. optional. default: CLASSIC.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} PrivateIpAddress - privateIp. optional.
   * @param {String} Token - token. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    if (!hasOwnProperty(params, 'Capacity')) {
      throw new TypeError('parameter "Capacity" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {String} Command - command. required.
   */
  dataOperate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Command')) {
      throw new TypeError('parameter "Command" is required');
    }

    return this.request('DataOperate', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   */
  deactivateInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeactivateInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   */
  deleteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   */
  describeAuthenticIP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeAuthenticIP', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {String} MonitorKeys - monitorKey. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} IntervalForHistory - intervalForHistory. required.
   */
  describeHistoryMonitorValues(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'IntervalForHistory')) {
      throw new TypeError('parameter "IntervalForHistory" is required');
    }

    return this.request('DescribeHistoryMonitorValues', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceIds - ocsInstanceId. optional.
   * @param {String} InstanceStatus - ocsInstanceStatus. optional.
   * @param {Integer} PageNumber - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} PrivateIpAddresses - privateIps. optional.
   */
  describeInstances(params = {}, options = {}) {
    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeMonitorItems(params = {}, options = {}) {
    return this.request('DescribeMonitorItems', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InstanceIds - ocsInstanceId. optional.
   * @param {String} MonitorKeys - monitorKey. optional.
   */
  describeMonitorValues(params = {}, options = {}) {
    return this.request('DescribeMonitorValues', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   */
  describeSecurityIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeSecurityIps', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ZoneId - zoneId. optional.
   */
  describeZones(params = {}, options = {}) {
    return this.request('DescribeZones', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   */
  flushInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('FlushInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {String} SwitchMode - switchMode. required.
   * @param {Integer} ExpireTime - expireTime. optional.
   * @param {Integer} KeyNumber - keyNumber. optional.
   */
  modifyHotKeySwitchMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SwitchMode')) {
      throw new TypeError('parameter "SwitchMode" is required');
    }

    return this.request('ModifyHotKeySwitchMode', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {String} InstanceName - ocsInstanceName. optional.
   * @param {String} NewPassword - newPassword. optional.
   */
  modifyInstanceAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyInstanceAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {Long} Capacity - capacity. required.
   */
  modifyInstanceCapacity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Capacity')) {
      throw new TypeError('parameter "Capacity" is required');
    }

    return this.request('ModifyInstanceCapacity', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - dbInstanceId. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vswitchId. optional.
   */
  modifyNetworkType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyNetworkType', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {String} SecurityIps - securityIps. required.
   */
  modifySecurityIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIps')) {
      throw new TypeError('parameter "SecurityIps" is required');
    }

    return this.request('ModifySecurityIps', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {String} AuthenticIP - authenticIP. required.
   */
  removeAuthenticIP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'AuthenticIP')) {
      throw new TypeError('parameter "AuthenticIP" is required');
    }

    return this.request('RemoveAuthenticIP', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {String} OldAuthenticIP - oldAuthenticIp. required.
   * @param {String} NewAuthenticIP - newAuthenticIp. required.
   */
  replaceAuthenticIP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'OldAuthenticIP')) {
      throw new TypeError('parameter "OldAuthenticIP" is required');
    }

    if (!hasOwnProperty(params, 'NewAuthenticIP')) {
      throw new TypeError('parameter "NewAuthenticIP" is required');
    }

    return this.request('ReplaceAuthenticIP', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} InstanceId - ocsInstanceId. required.
   * @param {String} Password - password. required.
   */
  verifyPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('VerifyPassword', params, options);
  }

}

module.exports = Client;
