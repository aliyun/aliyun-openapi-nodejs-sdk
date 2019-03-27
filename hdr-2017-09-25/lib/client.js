
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-25';
    super(config);
  }

  /**
   * @param {Long} ActivationCode - activationCode. required.
   * @param {String} IpAddress - ipAddress. optional.
   * @param {String} GatewayVersion - gatewayVersion. optional.
   */
  activateDrGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActivationCode')) {
      throw new TypeError('parameter "ActivationCode" is required');
    }

    return this.request('ActivateDrGateway', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SiteId - siteId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. optional.
   * @param {String} IpAddress - ipAddress. optional.
   * @param {String} Credential - credential. optional.
   */
  addInfrastructure(params = {}, options = {}) {
    return this.request('AddInfrastructure', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} ReplicationInfo - replicationInfo. required.
   */
  addReplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'ReplicationInfo')) {
      throw new TypeError('parameter "ReplicationInfo" is required');
    }

    return this.request('AddReplication', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   * @param {Integer} RecoveryCpu - recoveryCpu. optional.
   * @param {Long} RecoveryMemory - recoveryMemory. optional.
   * @param {Boolean} RecoveryUseSsd - recoveryUseSsd. optional.
   * @param {Boolean} RecoveryReserveIp - recoveryReserveIp. optional.
   * @param {Boolean} RecoveryUseDhcp - recoveryUseDhcp. optional.
   * @param {String} RecoveryIpAddress - recoveryIpAddress. optional.
   * @param {String} RecoveryPointId - recoveryPointId. optional.
   */
  changeRecoveryPoint(params = {}, options = {}) {
    return this.request('ChangeRecoveryPoint', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} Operation - operation. optional.
   */
  checkOperationPermission(params = {}, options = {}) {
    return this.request('CheckOperationPermission', params, options);
  }

  /**
   */
  checkRole(params = {}, options = {}) {
    return this.request('CheckRole', params, options);
  }

  /**
   * @param {String} Platform - platform. required.
   * @param {String} CurrentVersion - currentVersion. optional.
   * @param {String} Channel - channel. optional. default: prod.
   */
  checkUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Platform')) {
      throw new TypeError('parameter "Platform" is required');
    }

    return this.request('CheckUpdate', params, options);
  }

  /**
   * @param {String} Service - service. optional.
   * @param {String} Company - company. optional.
   * @param {String} Contact - contact. optional.
   * @param {String} Telephone - telephone. optional.
   * @param {String} Label1 - label1. optional.
   * @param {String} Value1 - value1. optional.
   * @param {String} Label2 - label2. optional.
   * @param {String} Value2 - value2. optional.
   * @param {String} Label3 - label3. optional.
   * @param {String} Value3 - value3. optional.
   * @param {String} Label4 - label4. optional.
   * @param {String} Value4 - value4. optional.
   * @param {String} Label5 - label5. optional.
   * @param {String} Value5 - value5. optional.
   * @param {String} Label6 - label6. optional.
   * @param {String} Value6 - value6. optional.
   * @param {String} Label7 - label7. optional.
   * @param {String} Value7 - value7. optional.
   * @param {String} Label8 - label8. optional.
   * @param {String} Value8 - value8. optional.
   * @param {String} Label9 - label9. optional.
   * @param {String} Value9 - value9. optional.
   */
  collectCustomerInfo(params = {}, options = {}) {
    return this.request('CollectCustomerInfo', params, options);
  }

  /**
   * @param {Long} UserUid - userUid. optional.
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} ServerId - serverId. optional.
   */
  collectSupportBundle(params = {}, options = {}) {
    return this.request('CollectSupportBundle', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   */
  commitFailover(params = {}, options = {}) {
    return this.request('CommitFailover', params, options);
  }

  /**
   * @param {String} SiteId - siteId. optional.
   * @param {String} Name - name. optional.
   * @param {String} ImageType - imageType. optional.
   * @param {String} Description - description. optional.
   */
  createDrGateway(params = {}, options = {}) {
    return this.request('CreateDrGateway', params, options);
  }

  /**
   * @param {String} LocalSiteName - localSiteName. optional.
   * @param {String} LocalGatewayName - localGatewayName. optional.
   * @param {String} CloudSiteName - cloudSiteName. optional.
   * @param {String} SitePairType - sitePairType. optional.
   * @param {String} PrimarySiteName - primarySiteName. optional.
   * @param {String} PrimarySiteType - primarySiteType. optional.
   * @param {String} PrimarySiteRegionId - primarySiteRegionId. optional.
   * @param {String} PrimarySiteVpcId - primarySiteVpcId. optional.
   * @param {String} SecondarySiteName - secondarySiteName. optional.
   * @param {String} SecondarySiteType - secondarySiteType. optional.
   * @param {String} SecondarySiteRegionId - secondarySiteRegionId. optional.
   * @param {String} SecondarySiteVpcId - secondarySiteVpcId. optional.
   */
  createSitePair(params = {}, options = {}) {
    return this.request('CreateSitePair', params, options);
  }

  /**
   * @param {String} InfrastructureId - infrastructureId. optional.
   */
  deleteInfrastructure(params = {}, options = {}) {
    return this.request('DeleteInfrastructure', params, options);
  }

  /**
   * @param {String} SitePairId - sitePairId. required.
   */
  deleteSitePair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SitePairId')) {
      throw new TypeError('parameter "SitePairId" is required');
    }

    return this.request('DeleteSitePair', params, options);
  }

  /**
   * @param {String} SitePairId - sitePairId. optional.
   * @param {String} SiteId - siteId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} DrGatewayClass - drGatewayClass. optional.
   * @param {String} UserVSwitchId - userVSwitchId. optional.
   * @param {String} GatewayImageName - gatewayImageName. optional.
   * @param {String} WindowsShadowVmImageName - windowsShadowVmImageName. optional.
   * @param {String} LinuxShadowVmImageName - linuxShadowVmImageName. optional.
   */
  deployDrGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SiteId')) {
      throw new TypeError('parameter "SiteId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeployDrGateway', params, options);
  }

  /**
   * @param {String} SitePairId - sitePairId. required.
   * @param {String} GatewayClass - gatewayClass. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} VSwitchId - vSwitchId. required.
   */
  deployGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SitePairId')) {
      throw new TypeError('parameter "SitePairId" is required');
    }

    if (!hasOwnProperty(params, 'GatewayClass')) {
      throw new TypeError('parameter "GatewayClass" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    return this.request('DeployGateway', params, options);
  }

  /**
   * @param {String} PlatformType - platformType. optional.
   */
  describeAgentImageUrl(params = {}, options = {}) {
    return this.request('DescribeAgentImageUrl', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {Long} StartTime - startTime. optional.
   */
  describeAppConsistentPoints(params = {}, options = {}) {
    return this.request('DescribeAppConsistentPoints', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} Region - region. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} DiskType - diskType. required.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {String} Network - network. optional. default: vpc.
   * @param {Boolean} IoOptimized - ioOptimized. optional. default: true.
   * @param {String} SortBy - sortBy. optional. default: network.
   * @param {String} Order - order. optional. default: desc.
   * @param {String} Filter - filter. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeAvailableInstanceTypes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'DiskType')) {
      throw new TypeError('parameter "DiskType" is required');
    }

    return this.request('DescribeAvailableInstanceTypes', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} DiskType - diskType. required.
   * @param {String} ChargeType - chargeType. optional. default: PostPaid.
   * @param {String} Mode - mode. required.
   */
  describeAvailableInstanceTypesForSE(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'DiskType')) {
      throw new TypeError('parameter "DiskType" is required');
    }

    if (!hasOwnProperty(params, 'Mode')) {
      throw new TypeError('parameter "Mode" is required');
    }

    return this.request('DescribeAvailableInstanceTypesForSE', params, options);
  }

  /**
   * @param {String} ImageName - imageName. required.
   */
  describeDRApplianceUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageName')) {
      throw new TypeError('parameter "ImageName" is required');
    }

    return this.request('DescribeDRApplianceUrl', params, options);
  }

  /**
   */
  describeDRAppliances(params = {}, options = {}) {
    return this.request('DescribeDRAppliances', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. optional.
   */
  describeDrGateway(params = {}, options = {}) {
    return this.request('DescribeDrGateway', params, options);
  }

  /**
   * @param {String} ImageType - imageType. optional.
   */
  describeDrGatewayImageUrl(params = {}, options = {}) {
    return this.request('DescribeDrGatewayImageUrl', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} Query - query. required.
   */
  describeDrGatewayMetrics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'Query')) {
      throw new TypeError('parameter "Query" is required');
    }

    return this.request('DescribeDrGatewayMetrics', params, options);
  }

  /**
   * @param {Long} UserUid - userUid. optional.
   * @param {String} SiteId - siteId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeDrGateways(params = {}, options = {}) {
    return this.request('DescribeDrGateways', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   */
  describeGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('DescribeGateway', params, options);
  }

  /**
   * @param {String} SitePairId - sitePairId. required.
   * @param {String} SiteName - siteName. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeGateways(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SitePairId')) {
      throw new TypeError('parameter "SitePairId" is required');
    }

    if (!hasOwnProperty(params, 'SiteName')) {
      throw new TypeError('parameter "SiteName" is required');
    }

    return this.request('DescribeGateways', params, options);
  }

  /**
   * @param {String} SiteId - siteId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeInfrastructures(params = {}, options = {}) {
    return this.request('DescribeInfrastructures', params, options);
  }

  /**
   * @param {String} HardwareId - hardwareId. required.
   */
  describeKmsServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HardwareId')) {
      throw new TypeError('parameter "HardwareId" is required');
    }

    return this.request('DescribeKmsServer', params, options);
  }

  /**
   * @param {String} SiteId - siteId. optional.
   */
  describeNetworks(params = {}, options = {}) {
    return this.request('DescribeNetworks', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {Long} StartTime - startTime. optional.
   */
  describeRecoveryPoints(params = {}, options = {}) {
    return this.request('DescribeRecoveryPoints', params, options);
  }

  /**
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} ReplicationId - replicationId. required.
   */
  describeReplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ReplicationId')) {
      throw new TypeError('parameter "ReplicationId" is required');
    }

    return this.request('DescribeReplication', params, options);
  }

  /**
   * @param {String} SitePairId - sitePairId. optional.
   * @param {String} GatewayId - gatewayId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeReplications(params = {}, options = {}) {
    return this.request('DescribeReplications', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} ServerId - serverId. optional.
   */
  describeServer(params = {}, options = {}) {
    return this.request('DescribeServer', params, options);
  }

  /**
   * @param {String} SitePairId - sitePairId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeServers(params = {}, options = {}) {
    return this.request('DescribeServers', params, options);
  }

  /**
   */
  describeServiceStatus(params = {}, options = {}) {
    return this.request('DescribeServiceStatus', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} DeploymentRegionId - deploymentRegionId. optional.
   * @param {String} OsType - osType. optional.
   */
  describeShadowVmImage(params = {}, options = {}) {
    return this.request('DescribeShadowVmImage', params, options);
  }

  /**
   * @param {Long} UserUid - userUid. optional.
   * @param {String} SiteId - siteId. required.
   */
  describeSite(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SiteId')) {
      throw new TypeError('parameter "SiteId" is required');
    }

    return this.request('DescribeSite', params, options);
  }

  /**
   * @param {String} SitePairId - sitePairId. required.
   */
  describeSitePair(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SitePairId')) {
      throw new TypeError('parameter "SitePairId" is required');
    }

    return this.request('DescribeSitePair', params, options);
  }

  /**
   * @param {String} SitePairId - sitePairId. optional.
   */
  describeSitePairInfo(params = {}, options = {}) {
    return this.request('DescribeSitePairInfo', params, options);
  }

  /**
   * @param {Long} UserUid - userUid. optional.
   * @param {String} SitePairType - sitePairType. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeSitePairs(params = {}, options = {}) {
    return this.request('DescribeSitePairs', params, options);
  }

  /**
   */
  describeSummary(params = {}, options = {}) {
    return this.request('DescribeSummary', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   */
  describeSupportedOperations(params = {}, options = {}) {
    return this.request('DescribeSupportedOperations', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   */
  describeTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeTask', params, options);
  }

  /**
   * @param {String} SitePairId - sitePairId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} SortBy - sortBy. optional.
   */
  describeTasks(params = {}, options = {}) {
    return this.request('DescribeTasks', params, options);
  }

  /**
   */
  describeUserBusinessStatus(params = {}, options = {}) {
    return this.request('DescribeUserBusinessStatus', params, options);
  }

  /**
   * @param {String} SiteRegionId - siteRegionId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeVSwitches(params = {}, options = {}) {
    return this.request('DescribeVSwitches', params, options);
  }

  /**
   */
  describeWhiteList(params = {}, options = {}) {
    return this.request('DescribeWhiteList', params, options);
  }

  /**
   * @param {String} InfrastructureId - infrastructureId. optional.
   * @param {String} Type - type. optional.
   * @param {String} Path - path. optional.
   */
  describevSphereInventories(params = {}, options = {}) {
    return this.request('DescribevSphereInventories', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   */
  disableReplication(params = {}, options = {}) {
    return this.request('DisableReplication', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   * @param {Boolean} ReplicationUseSsd - replicationUseSsd. optional.
   * @param {String} ReplicationNetwork - replicationNetwork. optional.
   * @param {String} RecoveryNetwork - recoveryNetwork. optional.
   */
  enableReplication(params = {}, options = {}) {
    return this.request('EnableReplication', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   * @param {String} RecoveryInfrastructureId - recoveryInfrastructureId. optional.
   * @param {Integer} RecoveryCpu - recoveryCpu. optional.
   * @param {Long} RecoveryMemory - recoveryMemory. optional.
   * @param {String} RecoveryLocation - recoveryLocation. optional.
   * @param {String} RecoveryComputeResource - recoveryComputeResource. optional.
   * @param {String} RecoveryDatastore - recoveryDatastore. optional.
   * @param {String} RecoveryNetwork - recoveryNetwork. optional.
   * @param {Boolean} RecoveryReserveIp - recoveryReserveIp. optional.
   * @param {Boolean} RecoveryUseDhcp - recoveryUseDhcp. optional.
   * @param {String} RecoveryIpAddress - recoveryIpAddress. optional.
   * @param {String} RecoveryNetMask - recoveryNetMask. optional.
   * @param {String} RecoveryDns - recoveryDns. optional.
   * @param {String} RecoveryGateway - recoveryGateway. optional.
   */
  failback(params = {}, options = {}) {
    return this.request('Failback', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   * @param {Integer} RecoveryCpu - recoveryCpu. optional.
   * @param {Long} RecoveryMemory - recoveryMemory. optional.
   * @param {Boolean} RecoveryUseSsd - recoveryUseSsd. optional.
   * @param {Boolean} RecoveryReserveIp - recoveryReserveIp. optional.
   * @param {Boolean} RecoveryUseDhcp - recoveryUseDhcp. optional.
   * @param {String} RecoveryIpAddress - recoveryIpAddress. optional.
   * @param {String} RecoveryPointId - recoveryPointId. optional.
   */
  forcedFailover(params = {}, options = {}) {
    return this.request('ForcedFailover', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {Long} ExpireTime - expireTime. required.
   */
  generateActivateCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'ExpireTime')) {
      throw new TypeError('parameter "ExpireTime" is required');
    }

    return this.request('GenerateActivateCode', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} CredentialType - credentialType. optional. default: LogWriter.
   * @param {Long} ExpireInSeconds - expireInSeconds. optional. default: 3600.
   */
  generateStsCredential(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('GenerateStsCredential', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} ServerId - serverId. optional.
   */
  initializeServer(params = {}, options = {}) {
    return this.request('InitializeServer', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {Boolean} ForceStop - forceStop. optional. default: false.
   */
  rebootGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('RebootGateway', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} Hostname - hostname. optional.
   * @param {String} IpAddress - ipAddress. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} OsDetail - osDetail. optional.
   * @param {Integer} Cpu - cpu. optional.
   * @param {Long} Memory - memory. optional.
   * @param {String} Disks - disks. optional.
   * @param {String} Volumes - volumes. optional.
   * @param {String} AgentVersion - agentVersion. optional.
   */
  registerServer(params = {}, options = {}) {
    return this.request('RegisterServer', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} ReplicationInfo - replicationInfo. required.
   */
  removeReplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'ReplicationInfo')) {
      throw new TypeError('parameter "ReplicationInfo" is required');
    }

    return this.request('RemoveReplication', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {Long} SnapshotTime - snapshotTime. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   */
  reportAppConsistentPoint(params = {}, options = {}) {
    return this.request('ReportAppConsistentPoint', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} AppliedDatetime - appliedDatetime. optional.
   */
  reportDataPruneStatus(params = {}, options = {}) {
    return this.request('ReportDataPruneStatus', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} Level - level. required.
   * @param {String} EventId - eventId. required.
   * @param {String} AlertValue - alertValue. required.
   * @param {String} AlertTime - alertTime. required.
   */
  reportDrGatewayAlert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'AlertValue')) {
      throw new TypeError('parameter "AlertValue" is required');
    }

    if (!hasOwnProperty(params, 'AlertTime')) {
      throw new TypeError('parameter "AlertTime" is required');
    }

    return this.request('ReportDrGatewayAlert', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} GatewayId - gatewayId. optional.
   */
  reportDrGatewayStatus(params = {}, options = {}) {
    return this.request('ReportDrGatewayStatus', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} ServerId - serverId. optional.
   */
  reportFullSyncDone(params = {}, options = {}) {
    return this.request('ReportFullSyncDone', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {Integer} FullSyncProgress - fullSyncProgress. optional.
   * @param {Long} FullSyncTotalSize - fullSyncTotalSize. optional.
   * @param {Long} FullSyncCurrentSize - fullSyncCurrentSize. optional.
   */
  reportFullSyncStatus(params = {}, options = {}) {
    return this.request('ReportFullSyncStatus', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} InfrastructureId - infrastructureId. optional.
   * @param {String} Status - status. optional.
   * @param {String} Errno - errno. optional.
   */
  reportInfrastructureStatus(params = {}, options = {}) {
    return this.request('ReportInfrastructureStatus', params, options);
  }

  /**
   * @param {String} HardwareId - hardwareId. required.
   * @param {Boolean} Succeed - succeed. required.
   * @param {String} Output - output. optional.
   */
  reportKmsStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HardwareId')) {
      throw new TypeError('parameter "HardwareId" is required');
    }

    if (!hasOwnProperty(params, 'Succeed')) {
      throw new TypeError('parameter "Succeed" is required');
    }

    options.method = 'POST';
    return this.request('ReportKmsStatus', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {Long} RecoveryPointTime - recoveryPointTime. optional.
   * @param {String} RecoveryPointId - recoveryPointId. optional.
   * @param {Boolean} ApplicationConsistent - applicationConsistent. optional.
   */
  reportRecoveryPoint(params = {}, options = {}) {
    return this.request('ReportRecoveryPoint', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} Errno - errno. optional.
   * @param {String} Errmsg - errmsg. optional.
   */
  reportReplicationError(params = {}, options = {}) {
    return this.request('ReportReplicationError', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} Servers - servers. optional.
   */
  reportServersStatus(params = {}, options = {}) {
    return this.request('ReportServersStatus', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {Integer} BackupWorkload - backupWorkload. required.
   * @param {Integer} RecoveryWorkload - recoveryWorkload. required.
   */
  reportWorkload(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'BackupWorkload')) {
      throw new TypeError('parameter "BackupWorkload" is required');
    }

    if (!hasOwnProperty(params, 'RecoveryWorkload')) {
      throw new TypeError('parameter "RecoveryWorkload" is required');
    }

    return this.request('ReportWorkload', params, options);
  }

  /**
   * @param {String} Company - company. required.
   * @param {String} Contact - contact. required.
   * @param {String} Telephone - telephone. required.
   * @param {String} Distribution - distribution. required.
   * @param {String} Version - version. optional.
   * @param {Long} DataSize - dataSize. required.
   * @param {String} Detail - detail. required.
   */
  requestBdTrial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Company')) {
      throw new TypeError('parameter "Company" is required');
    }

    if (!hasOwnProperty(params, 'Contact')) {
      throw new TypeError('parameter "Contact" is required');
    }

    if (!hasOwnProperty(params, 'Telephone')) {
      throw new TypeError('parameter "Telephone" is required');
    }

    if (!hasOwnProperty(params, 'Distribution')) {
      throw new TypeError('parameter "Distribution" is required');
    }

    if (!hasOwnProperty(params, 'DataSize')) {
      throw new TypeError('parameter "DataSize" is required');
    }

    if (!hasOwnProperty(params, 'Detail')) {
      throw new TypeError('parameter "Detail" is required');
    }

    return this.request('RequestBdTrial', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   */
  resynchronize(params = {}, options = {}) {
    return this.request('Resynchronize', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   */
  reversedDisableReplication(params = {}, options = {}) {
    return this.request('ReversedDisableReplication', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   * @param {String} ReplicationInfrastructureId - replicationInfrastructureId. optional.
   * @param {String} ReplicationLocation - replicationLocation. optional.
   * @param {String} ReplicationComputeResource - replicationComputeResource. optional.
   * @param {String} ReplicationDatastore - replicationDatastore. optional.
   * @param {String} ReplicationNetwork - replicationNetwork. optional.
   * @param {Boolean} ReplicationUseDhcp - replicationUseDhcp. optional.
   * @param {String} ReplicationIpAddress - replicationIpAddress. optional.
   * @param {String} ReplicationNetMask - replicationNetMask. optional.
   * @param {String} ReplicationDns - replicationDns. optional.
   * @param {String} ReplicationGateway - replicationGateway. optional.
   * @param {String} RecoveryNetwork - recoveryNetwork. optional.
   */
  reversedEnableReplication(params = {}, options = {}) {
    return this.request('ReversedEnableReplication', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} ServerId - serverId. optional.
   */
  reversedInitializeServer(params = {}, options = {}) {
    return this.request('ReversedInitializeServer', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} Hostname - hostname. optional.
   * @param {String} IpAddress - ipAddress. optional.
   * @param {String} OsType - osType. optional.
   * @param {String} OsDetail - osDetail. optional.
   * @param {Integer} Cpu - cpu. optional.
   * @param {Long} Memory - memory. optional.
   * @param {String} Disks - disks. optional.
   * @param {String} Volumes - volumes. optional.
   * @param {String} AgentVersion - agentVersion. optional.
   */
  reversedRegisterServer(params = {}, options = {}) {
    return this.request('ReversedRegisterServer', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   */
  startGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('StartGateway', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {Boolean} ForceStop - forceStop. optional. default: false.
   */
  stopGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('StopGateway', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   */
  testCleanup(params = {}, options = {}) {
    return this.request('TestCleanup', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   * @param {Integer} RecoveryCpu - recoveryCpu. optional.
   * @param {Long} RecoveryMemory - recoveryMemory. optional.
   * @param {Boolean} RecoveryUseSsd - recoveryUseSsd. optional.
   * @param {Boolean} RecoveryReserveIp - recoveryReserveIp. optional.
   * @param {Boolean} RecoveryUseDhcp - recoveryUseDhcp. optional.
   * @param {String} RecoveryIpAddress - recoveryIpAddress. optional.
   * @param {String} RecoveryPointId - recoveryPointId. optional.
   */
  testFailover(params = {}, options = {}) {
    return this.request('TestFailover', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   */
  triggerRegister(params = {}, options = {}) {
    return this.request('TriggerRegister', params, options);
  }

  /**
   * @param {String} ServerId - serverId. optional.
   */
  triggerReversedRegister(params = {}, options = {}) {
    return this.request('TriggerReversedRegister', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   */
  unregisterDrGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('UnregisterDrGateway', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   */
  unregisterGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('UnregisterGateway', params, options);
  }

  /**
   * @param {String} ServerId - serverId. required.
   */
  unregisterServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerId')) {
      throw new TypeError('parameter "ServerId" is required');
    }

    return this.request('UnregisterServer', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} Password - password. optional.
   */
  updateDrGateway(params = {}, options = {}) {
    return this.request('UpdateDrGateway', params, options);
  }

  /**
   * @param {String} ResourceRegionId - resourceRegionId. optional.
   * @param {String} VmType - vmType. optional.
   * @param {String} ImageName - imageName. optional.
   */
  updateImageInfo(params = {}, options = {}) {
    return this.request('UpdateImageInfo', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} InfrastructureId - infrastructureId. optional.
   * @param {String} Credential - credential. optional.
   */
  updateInfrastructure(params = {}, options = {}) {
    return this.request('UpdateInfrastructure', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} ReplicationList - replications. required.
   */
  updateReplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'ReplicationList')) {
      throw new TypeError('parameter "ReplicationList" is required');
    }

    return this.request('UpdateReplication', params, options);
  }

  /**
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} UserUid - userUid. optional.
   * @param {String} ServerId - serverId. optional.
   * @param {String} Alias - alias. optional.
   */
  updateServer(params = {}, options = {}) {
    return this.request('UpdateServer', params, options);
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
