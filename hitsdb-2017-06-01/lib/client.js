
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
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Long} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} Metrics - metrics. required.
   * @param {Long} StartTimestamp - startTimestamp. required.
   * @param {Long} EndTimestamp - endTimestamp. required.
   */
  cleanupHiTSDBInstanceData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Metrics')) {
      throw new TypeError('parameter "Metrics" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    return this.request('CleanupHiTSDBInstanceData', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} InstanceName - instanceName. required.
   * @param {String} InstanceAlias - instanceAlias. required.
   * @param {String} InstanceClass - instanceClass. required.
   * @param {String} InstanceStorage - instanceStorage. required.
   * @param {String} ConnectionString - connectionString. required.
   * @param {String} PayType - payType. optional.
   * @param {String} VPCId - vpcId. required.
   * @param {String} VSwitchId - vswitchId. required.
   * @param {String} MaxTimelineLimit - maxTimelineLimit. required.
   * @param {String} InstanceTps - instanceTps. required.
   */
  createHiTSDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceAlias')) {
      throw new TypeError('parameter "InstanceAlias" is required');
    }

    if (!hasOwnProperty(params, 'InstanceClass')) {
      throw new TypeError('parameter "InstanceClass" is required');
    }

    if (!hasOwnProperty(params, 'InstanceStorage')) {
      throw new TypeError('parameter "InstanceStorage" is required');
    }

    if (!hasOwnProperty(params, 'ConnectionString')) {
      throw new TypeError('parameter "ConnectionString" is required');
    }

    if (!hasOwnProperty(params, 'VPCId')) {
      throw new TypeError('parameter "VPCId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'MaxTimelineLimit')) {
      throw new TypeError('parameter "MaxTimelineLimit" is required');
    }

    if (!hasOwnProperty(params, 'InstanceTps')) {
      throw new TypeError('parameter "InstanceTps" is required');
    }

    return this.request('CreateHiTSDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} CreateUserName - createUserName. required.
   * @param {String} CreatePassword - createPassword. required.
   * @param {String} GrantType - grantType. required.
   * @param {String} PublicKey - publicKey. optional.
   * @param {String} Phrase - phrase. optional.
   */
  createVirtualInstanceUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'CreateUserName')) {
      throw new TypeError('parameter "CreateUserName" is required');
    }

    if (!hasOwnProperty(params, 'CreatePassword')) {
      throw new TypeError('parameter "CreatePassword" is required');
    }

    if (!hasOwnProperty(params, 'GrantType')) {
      throw new TypeError('parameter "GrantType" is required');
    }

    return this.request('CreateVirtualInstanceUser', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  deleteHiTSDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteHiTSDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} Metric - metric. required.
   * @param {String} Tags - tags. optional.
   * @param {Long} Start - start. required.
   * @param {Long} End - end. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  deleteHiTSDBInstanceData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'End')) {
      throw new TypeError('parameter "End" is required');
    }

    return this.request('DeleteHiTSDBInstanceData', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} Metric - metric. required.
   * @param {String} Tags - tags. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  deleteHiTSDBInstanceMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    return this.request('DeleteHiTSDBInstanceMeta', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} UserList - userList. required.
   */
  deleteVirtualInstanceUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'UserList')) {
      throw new TypeError('parameter "UserList" is required');
    }

    return this.request('DeleteVirtualInstanceUser', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeHiTSDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeHiTSDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Long} ReverseVpcPort - reverseVpcPort. required.
   */
  describeHiTSDBInstanceDataConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    return this.request('DescribeHiTSDBInstanceDataConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  describeHiTSDBInstanceDataTtl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    return this.request('DescribeHiTSDBInstanceDataTtl', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  describeHiTSDBInstanceLastDpStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    return this.request('DescribeHiTSDBInstanceLastDpStatus', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} QueryStr - queryStr. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  describeHiTSDBInstanceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeHiTSDBInstanceList', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PerformanceKeys - performanceKeys. required.
   * @param {Long} Start - start. required.
   * @param {Long} End - end. required.
   */
  describeHiTSDBInstancePerformance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PerformanceKeys')) {
      throw new TypeError('parameter "PerformanceKeys" is required');
    }

    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'End')) {
      throw new TypeError('parameter "End" is required');
    }

    return this.request('DescribeHiTSDBInstancePerformance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeHiTSDBInstancePerformanceSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeHiTSDBInstancePerformanceSummary', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeHiTSDBInstanceSecurityIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeHiTSDBInstanceSecurityIpList', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   */
  describeHiTSDBInstanceSpecList(params = {}, options = {}) {
    return this.request('DescribeHiTSDBInstanceSpecList', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} AcceptLanguage - language. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeReverseVpcInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeReverseVpcInfo', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   */
  describeZones(params = {}, options = {}) {
    return this.request('DescribeZones', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} Metric - metric. required.
   * @param {String} Aggregator - aggregator. required.
   * @param {Long} Start - start. required.
   * @param {Long} End - end. required.
   * @param {String} DownSampleTime - downSampleTime. optional.
   * @param {String} DownSampleAggregator - downSampleAggregator. optional.
   * @param {String} TagFilter - tagFilter. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  exploreHiTSDBInstanceData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Aggregator')) {
      throw new TypeError('parameter "Aggregator" is required');
    }

    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'End')) {
      throw new TypeError('parameter "End" is required');
    }

    if (!hasOwnProperty(params, 'TagFilter')) {
      throw new TypeError('parameter "TagFilter" is required');
    }

    return this.request('ExploreHiTSDBInstanceData', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} Prefix - prefix. required.
   * @param {Long} Max - max. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  exploreHiTSDBInstanceDataMetricList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Prefix')) {
      throw new TypeError('parameter "Prefix" is required');
    }

    if (!hasOwnProperty(params, 'Max')) {
      throw new TypeError('parameter "Max" is required');
    }

    return this.request('ExploreHiTSDBInstanceDataMetricList', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} Prefix - prefix. required.
   * @param {Long} Max - max. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  exploreHiTSDBInstanceDataTagKeyList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Prefix')) {
      throw new TypeError('parameter "Prefix" is required');
    }

    if (!hasOwnProperty(params, 'Max')) {
      throw new TypeError('parameter "Max" is required');
    }

    return this.request('ExploreHiTSDBInstanceDataTagKeyList', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} Prefix - prefix. required.
   * @param {String} TagKey - tagKey. required.
   * @param {Long} Max - max. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  exploreHiTSDBInstanceDataTagValueList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Prefix')) {
      throw new TypeError('parameter "Prefix" is required');
    }

    if (!hasOwnProperty(params, 'TagKey')) {
      throw new TypeError('parameter "TagKey" is required');
    }

    if (!hasOwnProperty(params, 'Max')) {
      throw new TypeError('parameter "Max" is required');
    }

    return this.request('ExploreHiTSDBInstanceDataTagValueList', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobType - jobType. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  exploreHiTSDBInstanceDeletionJobList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobType')) {
      throw new TypeError('parameter "JobType" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ExploreHiTSDBInstanceDeletionJobList', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} UserName - userName. required.
   * @param {String} PassWord - passWord. required.
   */
  getVirtualInstanceUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'PassWord')) {
      throw new TypeError('parameter "PassWord" is required');
    }

    return this.request('GetVirtualInstanceUser', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   */
  listVirtualInstanceUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    return this.request('ListVirtualInstanceUser', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  lockHiTSDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('LockHiTSDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceClass - instanceClass. optional.
   * @param {String} InstanceStorage - instanceStorage. optional.
   */
  modifyHiTSDBInstanceClass(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyHiTSDBInstanceClass', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Long} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} Configuration - configuration. required.
   */
  modifyHiTSDBInstanceDataConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Configuration')) {
      throw new TypeError('parameter "Configuration" is required');
    }

    return this.request('ModifyHiTSDBInstanceDataConfig', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SecurityIpList - securityIpList. required.
   */
  modifyHiTSDBInstanceSecurityIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityIpList')) {
      throw new TypeError('parameter "SecurityIpList" is required');
    }

    return this.request('ModifyHiTSDBInstanceSecurityIpList', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} ModifyUserName - modifyUserName. required.
   * @param {String} ModifyPassword - modifyPassword. required.
   * @param {String} GrantType - grantType. required.
   * @param {String} PublicKey - publicKey. optional.
   * @param {String} Phrase - phrase. optional.
   */
  modifyVirtualInstanceUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'ModifyUserName')) {
      throw new TypeError('parameter "ModifyUserName" is required');
    }

    if (!hasOwnProperty(params, 'ModifyPassword')) {
      throw new TypeError('parameter "ModifyPassword" is required');
    }

    if (!hasOwnProperty(params, 'GrantType')) {
      throw new TypeError('parameter "GrantType" is required');
    }

    return this.request('ModifyVirtualInstanceUser', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  releaseHiTSDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ReleaseHiTSDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceAlias - instanceAlias. required.
   */
  renameHiTSDBInstanceAlias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceAlias')) {
      throw new TypeError('parameter "InstanceAlias" is required');
    }

    return this.request('RenameHiTSDBInstanceAlias', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  restartHiTSDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RestartHiTSDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} SwitchAction - switchAction. required.
   */
  switchHiTSDBInstancePublicNet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SwitchAction')) {
      throw new TypeError('parameter "SwitchAction" is required');
    }

    return this.request('SwitchHiTSDBInstancePublicNet', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  unlockHiTSDBInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('UnlockHiTSDBInstance', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {Long} Ttl - ttl. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  updateHiTSDBInstanceDataTtl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Ttl')) {
      throw new TypeError('parameter "Ttl" is required');
    }

    return this.request('UpdateHiTSDBInstanceDataTtl', params, options);
  }

  /**
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {Boolean} Flag - flag. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  updateHiTSDBInstanceLastDpStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    if (!hasOwnProperty(params, 'Flag')) {
      throw new TypeError('parameter "Flag" is required');
    }

    return this.request('UpdateHiTSDBInstanceLastDpStatus', params, options);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SecurityToken - stsSecurityToken. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ReverseVpcIp - reverseVpcIp. required.
   * @param {Integer} ReverseVpcPort - reverseVpcPort. required.
   * @param {String} UserName - userName. optional.
   * @param {String} PassWord - passWord. optional.
   */
  writeHiTSDBInstanceDemoData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcIp')) {
      throw new TypeError('parameter "ReverseVpcIp" is required');
    }

    if (!hasOwnProperty(params, 'ReverseVpcPort')) {
      throw new TypeError('parameter "ReverseVpcPort" is required');
    }

    return this.request('WriteHiTSDBInstanceDemoData', params, options);
  }

}

module.exports = Client;
