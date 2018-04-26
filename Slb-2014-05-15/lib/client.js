
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2014-05-15';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. optional.
   * @param {String} AclEntrys - aclEntry. optional.
   */
  addAccessControlListEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('AddAccessControlListEntry', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} BackendServers - backendServers. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  addBackendServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('AddBackendServers', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} List - list. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  addDomainCcBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'List')) {
      throw new TypeError('parameter "List" is required');
    }

    return this.request('AddDomainCcBlackList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} List - list. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  addDomainCcWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'List')) {
      throw new TypeError('parameter "List" is required');
    }

    return this.request('AddDomainCcWhiteList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} List - list. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  addDomainWafBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'List')) {
      throw new TypeError('parameter "List" is required');
    }

    return this.request('AddDomainWafBlackList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} List - list. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  addDomainWafWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'List')) {
      throw new TypeError('parameter "List" is required');
    }

    return this.request('AddDomainWafWhiteList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} SourceItems - sourceItems. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  addListenerWhiteListItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'SourceItems')) {
      throw new TypeError('parameter "SourceItems" is required');
    }

    return this.request('AddListenerWhiteListItem', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} HostEcsInstanceId - hostEcsInstanceId. optional.
   * @param {String} BackendServers - backendServers. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  addNcServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('AddNcServers', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} Tags - tags. required.
   */
  addTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'Tags')) {
      throw new TypeError('parameter "Tags" is required');
    }

    return this.request('AddTags', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} VServerGroupId - groupId. required.
   * @param {String} BackendServers - backendServers. required.
   */
  addVServerGroupBackendServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VServerGroupId')) {
      throw new TypeError('parameter "VServerGroupId" is required');
    }

    if (!hasOwnProperty(params, 'BackendServers')) {
      throw new TypeError('parameter "BackendServers" is required');
    }

    return this.request('AddVServerGroupBackendServers', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionAction - featureAction. optional.
   * @param {String} UidAction - uidAction. optional.
   */
  checkProductFeatureControl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CheckProductFeatureControl', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclName - aclName. required.
   */
  createAccessControlList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclName')) {
      throw new TypeError('parameter "AclName" is required');
    }

    return this.request('CreateAccessControlList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AddressType - addressType. optional. default: internet.
   * @param {String} InternetChargeType - internetChargeType. optional. default: paybytraffic.
   * @param {Integer} Bandwidth - bandwidth. optional. default: -1.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} LoadBalancerName - loadBalancerName. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - virtualSwitchId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MasterZoneId - masterZoneId. optional.
   * @param {String} SlaveZoneId - slaveZoneId. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} EnableVpcVipFlow - enableVpcVipFlow. optional.
   * @param {String} LoadBalancerSpec - loadBalancerSpec. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} PayType - payType. optional. default: PayOnDemand.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: false.
   */
  createLoadBalancer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateLoadBalancer', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} Bandwidth - bandwidth. optional. default: -1.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {Integer} BackendServerPort - backendServerPort. optional.
   * @param {String} XForwardedFor - forwardedFor. optional. default: off.
   * @param {String} Scheduler - scheduler. optional. default: wrr.
   * @param {String} StickySession - stickySession. required.
   * @param {String} StickySessionType - stickySessionType. optional.
   * @param {Integer} CookieTimeout - cookieTimeout. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} HealthCheck - healthCheck. required.
   * @param {String} HealthCheckDomain - healthCheckDomain. optional.
   * @param {String} HealthCheckURI - healthCheckURI. optional.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional.
   * @param {Integer} HealthCheckTimeout - healthCheckTimeout. optional.
   * @param {Integer} HealthCheckConnectPort - healthCheckConnectPort. optional.
   * @param {Integer} HealthCheckInterval - healthCheckInterval. optional.
   * @param {String} HealthCheckHttpCode - healthCheckHttpCode. optional.
   * @param {Integer} MaxConnection - maxConnection. optional. default: 5000000.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} VServerGroupId - rsPoolName. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} XForwardedFor_SLBIP - xForwardedFor_SLBIP. optional. default: off.
   * @param {String} XForwardedFor_SLBID - xForwardedFor_SLBID. optional. default: off.
   * @param {String} XForwardedFor_proto - xForwardedFor_proto. optional. default: off.
   * @param {String} Gzip - gzip. optional. default: on.
   * @param {String} AclId - aclId. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} VpcIds - vpcIds. optional.
   * @param {String} ListenerForward - listenerForward. optional.
   * @param {Integer} ForwardPort - forwardPort. optional.
   * @param {Integer} IdleTimeout - idleTimeout. optional.
   * @param {Integer} RequestTimeout - requestTimeout. optional.
   */
  createLoadBalancerHTTPListener(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'StickySession')) {
      throw new TypeError('parameter "StickySession" is required');
    }

    if (!hasOwnProperty(params, 'HealthCheck')) {
      throw new TypeError('parameter "HealthCheck" is required');
    }

    return this.request('CreateLoadBalancerHTTPListener', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {Integer} BackendServerPort - backendServerPort. optional.
   * @param {String} XForwardedFor - forwardedFor. optional. default: off.
   * @param {String} Scheduler - scheduler. optional. default: wrr.
   * @param {String} StickySession - stickySession. required.
   * @param {String} StickySessionType - stickySessionType. optional.
   * @param {Integer} CookieTimeout - cookieTimeout. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} HealthCheck - healthCheck. required.
   * @param {String} HealthCheckDomain - healthCheckDomain. optional.
   * @param {String} HealthCheckURI - healthCheckURI. optional.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional.
   * @param {Integer} HealthCheckTimeout - healthCheckTimeout. optional.
   * @param {Integer} HealthCheckConnectPort - healthCheckConnectPort. optional.
   * @param {Integer} HealthCheckInterval - healthCheckInterval. optional.
   * @param {String} HealthCheckHttpCode - healthCheckHttpCode. optional.
   * @param {String} ServerCertificateId - serverCertificateId. required.
   * @param {Integer} MaxConnection - maxConnection. optional. default: 5000000.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} VServerGroupId - rsPoolName. optional.
   * @param {String} CACertificateId - caCertificateId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} XForwardedFor_SLBIP - xForwardedFor_SLBIP. optional. default: off.
   * @param {String} XForwardedFor_SLBID - xForwardedFor_SLBID. optional. default: off.
   * @param {String} XForwardedFor_proto - xForwardedFor_proto. optional. default: off.
   * @param {String} Gzip - gzip. optional. default: on.
   * @param {String} AclId - aclId. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} VpcIds - vpcIds. optional.
   * @param {Integer} IdleTimeout - idleTimeout. optional.
   * @param {Integer} RequestTimeout - requestTimeout. optional.
   */
  createLoadBalancerHTTPSListener(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'StickySession')) {
      throw new TypeError('parameter "StickySession" is required');
    }

    if (!hasOwnProperty(params, 'HealthCheck')) {
      throw new TypeError('parameter "HealthCheck" is required');
    }

    if (!hasOwnProperty(params, 'ServerCertificateId')) {
      throw new TypeError('parameter "ServerCertificateId" is required');
    }

    return this.request('CreateLoadBalancerHTTPSListener', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AddressType - addressType. optional. default: internet.
   * @param {String} InternetChargeType - internetChargeType. optional. default: paybytraffic.
   * @param {Integer} Bandwidth - bandwidth. optional. default: 1.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} LoadBalancerName - loadBalancerName. optional.
   * @param {String} LoadBalancerMode - loadBalancerMode. optional.
   * @param {String} Address - address. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - virtualSwitchId. optional.
   * @param {String} SuName - suName. optional.
   * @param {String} CidrType - cidrType. optional.
   * @param {String} TunnelType - tunnelType. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} MasterZoneId - masterZoneId. optional.
   * @param {String} SlaveZoneId - slaveZoneId. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} EnableVpcVipFlow - enableVpcVipFlow. optional.
   * @param {String} LoadBalancerSpec - loadBalancerSpec. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} PayType - payType. optional. default: PayOnDemand.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: false.
   */
  createLoadBalancerPro(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateLoadBalancerPro', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {Integer} BackendServerPort - backendServerPort. optional.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} Scheduler - scheduler. optional. default: wrr.
   * @param {Integer} PersistenceTimeout - persistenceTimeout. optional. default: 0.
   * @param {Integer} EstablishedTimeout - estTimeout. optional. default: 900.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional. default: 3.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional. default: 3.
   * @param {Integer} HealthCheckConnectTimeout - healthCheckConnectTimeout. optional. default: 5.
   * @param {Integer} HealthCheckConnectPort - healthCheckConnectPort. optional.
   * @param {Integer} healthCheckInterval - healthCheckInterval. optional.
   * @param {String} HealthCheckDomain - healthCheckDomain. optional.
   * @param {String} HealthCheckURI - healthCheckURI. optional.
   * @param {String} HealthCheckHttpCode - healthCheckHttpCode. optional.
   * @param {String} HealthCheckType - healthCheckType. optional.
   * @param {Integer} MaxConnection - maxConnection. optional. default: 5000000.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} VServerGroupId - rsPoolName. optional.
   * @param {String} MasterSlaveServerGroupId - masterSlaveServerGroupId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} AclId - aclId. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} VpcIds - vpcIds. optional.
   */
  createLoadBalancerTCPListener(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('CreateLoadBalancerTCPListener', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {Integer} BackendServerPort - backendServerPort. optional.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} Scheduler - scheduler. optional. default: wrr.
   * @param {Integer} PersistenceTimeout - persistenceTimeout. optional. default: 0.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional. default: 3.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional. default: 3.
   * @param {Integer} HealthCheckConnectTimeout - healthCheckConnectTimeout. optional. default: 5.
   * @param {Integer} HealthCheckConnectPort - healthCheckConnectPort. optional.
   * @param {Integer} healthCheckInterval - healthCheckInterval. optional.
   * @param {String} healthCheckReq - healthCheckReq. optional.
   * @param {String} healthCheckExp - healthCheckExp. optional.
   * @param {Integer} MaxConnection - maxConnection. optional. default: 200000.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} VServerGroupId - rsPoolName. optional.
   * @param {String} MasterSlaveServerGroupId - masterSlaveServerGroupId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} AclId - aclId. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} VpcIds - vpcIds. optional.
   */
  createLoadBalancerUDPListener(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('CreateLoadBalancerUDPListener', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} MasterSlaveServerGroupName - groupName. optional.
   * @param {String} MasterSlaveBackendServers - backendServers. optional.
   */
  createMasterSlaveServerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('CreateMasterSlaveServerGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} MasterSlaveVServerGroupName - groupName. optional.
   * @param {String} MasterSlaveBackendServers - backendServers. optional.
   */
  createMasterSlaveVServerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('CreateMasterSlaveVServerGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} WafPolicyLevel - wafPolicyLevel. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  createProtectedDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CreateProtectedDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} RuleList - ruleList. required.
   */
  createRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'RuleList')) {
      throw new TypeError('parameter "RuleList" is required');
    }

    return this.request('CreateRules', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} VServerGroupName - groupName. optional.
   * @param {String} BackendServers - backendServers. optional.
   */
  createVServerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('CreateVServerGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   */
  deleteAccessControlList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    return this.request('DeleteAccessControlList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {String} LogsDownloadAttributes - logsDownloadAttributes. required.
   */
  deleteAccessLogsDownloadAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LogsDownloadAttributes')) {
      throw new TypeError('parameter "LogsDownloadAttributes" is required');
    }

    return this.request('DeleteAccessLogsDownloadAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CACertificateId - certificateId. required.
   */
  deleteCACertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CACertificateId')) {
      throw new TypeError('parameter "CACertificateId" is required');
    }

    return this.request('DeleteCACertificate', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  deleteLoadBalancer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DeleteLoadBalancer', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  deleteLoadBalancerListener(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('DeleteLoadBalancerListener', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RoleName - roleName. optional. default: aliyunslbdefaultrole.
   */
  deleteLogsDownloadAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteLogsDownloadAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} MasterSlaveServerGroupId - groupId. required.
   */
  deleteMasterSlaveServerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MasterSlaveServerGroupId')) {
      throw new TypeError('parameter "MasterSlaveServerGroupId" is required');
    }

    return this.request('DeleteMasterSlaveServerGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} MasterSlaveVServerGroupId - groupId. required.
   */
  deleteMasterSlaveVServerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MasterSlaveVServerGroupId')) {
      throw new TypeError('parameter "MasterSlaveVServerGroupId" is required');
    }

    return this.request('DeleteMasterSlaveVServerGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  deleteProtectedDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteProtectedDomain', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RuleIds - ruleIds. required.
   */
  deleteRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RuleIds')) {
      throw new TypeError('parameter "RuleIds" is required');
    }

    return this.request('DeleteRules', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerCertificateId - serverCertificateId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  deleteServerCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerCertificateId')) {
      throw new TypeError('parameter "ServerCertificateId" is required');
    }

    return this.request('DeleteServerCertificate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} VServerGroupId - groupId. required.
   */
  deleteVServerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VServerGroupId')) {
      throw new TypeError('parameter "VServerGroupId" is required');
    }

    return this.request('DeleteVServerGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {String} AclEntryComment - aclEntryComment. optional.
   */
  describeAccessControlListAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    return this.request('DescribeAccessControlListAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclName - aclName. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNum. optional.
   */
  describeAccessControlLists(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeAccessControlLists', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {String} LogType - logType. optional. default: layer7.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeAccessLogsDownloadAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeAccessLogsDownloadAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   */
  describeAliCloudCertificates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeAliCloudCertificates', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CACertificateId - certificateId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  describeCACertificates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCACertificates', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeDomainCcBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainCcBlackList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeDomainCcWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainCcWhiteList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeDomainWafBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainWafBlackList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeDomainWafWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainWafWhiteList', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeHealthStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DescribeHealthStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeListenerAccessControlAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('DescribeListenerAccessControlAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeLoadBalancerAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DescribeLoadBalancerAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   */
  describeLoadBalancerAutoReleaseTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DescribeLoadBalancerAutoReleaseTime', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeLoadBalancerHTTPListenerAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('DescribeLoadBalancerHTTPListenerAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeLoadBalancerHTTPSListenerAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('DescribeLoadBalancerHTTPSListenerAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeLoadBalancerSpecs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeLoadBalancerSpecs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeLoadBalancerTCPListenerAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('DescribeLoadBalancerTCPListenerAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeLoadBalancerUDPListenerAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('DescribeLoadBalancerUDPListenerAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ServerId - serverId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {String} LoadBalancerName - loadBalancerName. optional.
   * @param {String} ServerIntranetAddress - serverIntranetAddress. optional.
   * @param {String} AddressType - addressType. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - virtualSwitchId. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} Address - address. optional.
   * @param {String} MasterZoneId - masterZoneId. optional.
   * @param {String} SlaveZoneId - slaveZoneId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} PayType - payType. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 0.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeLoadBalancers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeLoadBalancers', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   */
  describeLoadBalancersEcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DescribeLoadBalancersEcs', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   */
  describeLoadBalancersRelatedEcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DescribeLoadBalancersRelatedEcs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Namespace - namespace. optional.
   * @param {String} NamespaceUid - namespaceUid. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeLocations(params = {}, options = {}) {
    return this.request('DescribeLocations', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeLogsDownloadAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeLogsDownloadAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeLogsDownloadStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeLogsDownloadStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} MasterSlaveServerGroupId - groupId. required.
   */
  describeMasterSlaveServerGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MasterSlaveServerGroupId')) {
      throw new TypeError('parameter "MasterSlaveServerGroupId" is required');
    }

    return this.request('DescribeMasterSlaveServerGroupAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   */
  describeMasterSlaveServerGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DescribeMasterSlaveServerGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} MasterSlaveVServerGroupId - groupId. required.
   */
  describeMasterSlaveVServerGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'MasterSlaveVServerGroupId')) {
      throw new TypeError('parameter "MasterSlaveVServerGroupId" is required');
    }

    return this.request('DescribeMasterSlaveVServerGroupAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   */
  describeMasterSlaveVServerGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DescribeMasterSlaveVServerGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeProtectedDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeProtectedDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeProtectedDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeProtectedDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {String} LogType - logType. required.
   * @param {String} LogStartTime - logStartTime. required.
   * @param {String} LogEndTime - logEndTime. required.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   */
  describeRealtimeLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LogType')) {
      throw new TypeError('parameter "LogType" is required');
    }

    if (!hasOwnProperty(params, 'LogStartTime')) {
      throw new TypeError('parameter "LogStartTime" is required');
    }

    if (!hasOwnProperty(params, 'LogEndTime')) {
      throw new TypeError('parameter "LogEndTime" is required');
    }

    return this.request('DescribeRealtimeLogs', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  describeRegions4Location(params = {}, options = {}) {
    return this.request('DescribeRegions4Location', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RuleId - ruleId. required.
   */
  describeRuleAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('DescribeRuleAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   */
  describeRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('DescribeRules', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerCertificateId - serverCertificateId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeServerCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServerCertificateId')) {
      throw new TypeError('parameter "ServerCertificateId" is required');
    }

    return this.request('DescribeServerCertificate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServerCertificateId - serverCertificateId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  describeServerCertificates(params = {}, options = {}) {
    return this.request('DescribeServerCertificates', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {String} Tags - tags. optional.
   * @param {Boolean} DistinctKey - distinctKey. optional. default: false.
   * @param {Integer} PageSize - pageSize. optional. default: 50.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeTags', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} VPCID - vpcId. required.
   * @param {Integer} PageNumber - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeVPCRelatedLoadBalancers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VPCID')) {
      throw new TypeError('parameter "VPCID" is required');
    }

    return this.request('DescribeVPCRelatedLoadBalancers', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} VServerGroupId - groupId. required.
   */
  describeVServerGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VServerGroupId')) {
      throw new TypeError('parameter "VServerGroupId" is required');
    }

    return this.request('DescribeVServerGroupAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   */
  describeVServerGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DescribeVServerGroups', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   */
  describeZones(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeZones', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  enableVpcVipFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('EnableVpcVipFlow', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  fillSlbParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillSlbParams', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  fillSlbRestrictions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('FillSlbRestrictions', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} data - data. required.
   */
  innerSlbReleaseInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('InnerSlbReleaseInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerSpec - loadBalancerSpec. required.
   * @param {Boolean} AutoPay - autoPay. optional. default: false.
   */
  modifyLoadBalancerInstanceSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerSpec')) {
      throw new TypeError('parameter "LoadBalancerSpec" is required');
    }

    return this.request('ModifyLoadBalancerInstanceSpec', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {Integer} Bandwidth - bandwidth. optional. default: -1.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: false.
   */
  modifyLoadBalancerInternetSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('ModifyLoadBalancerInternetSpec', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} PayType - payType. optional. default: PrePay.
   * @param {String} PricingCycle - pricingCycle. optional.
   * @param {Integer} Duration - duration. optional.
   * @param {Boolean} AutoPay - autoPay. optional. default: false.
   */
  modifyLoadBalancerPayType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('ModifyLoadBalancerPayType', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} WafPolicyLevel - wafPolicyLevel. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  modifyProtectedDomainSpec(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'WafPolicyLevel')) {
      throw new TypeError('parameter "WafPolicyLevel" is required');
    }

    return this.request('ModifyProtectedDomainSpec', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} VServerGroupId - groupId. required.
   * @param {String} OldBackendServers - oldBackendServers. optional.
   * @param {String} NewBackendServers - newBackendServers. optional.
   */
  modifyVServerGroupBackendServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VServerGroupId')) {
      throw new TypeError('parameter "VServerGroupId" is required');
    }

    return this.request('ModifyVServerGroupBackendServers', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {String} NewResourceGroupId - newResourceGroupId. required.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  moveResourceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'NewResourceGroupId')) {
      throw new TypeError('parameter "NewResourceGroupId" is required');
    }

    return this.request('MoveResourceGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  producePrepaidSlbInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ProducePrepaidSlbInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} data - data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   */
  produceSlbInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ProduceSlbInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {String} AclEntrys - aclEntry. optional.
   */
  removeAccessControlListEntry(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    return this.request('RemoveAccessControlListEntry', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} BackendServers - backendServers. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  removeBackendServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'BackendServers')) {
      throw new TypeError('parameter "BackendServers" is required');
    }

    return this.request('RemoveBackendServers', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} List - list. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  removeDomainCcBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'List')) {
      throw new TypeError('parameter "List" is required');
    }

    return this.request('RemoveDomainCcBlackList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} List - list. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  removeDomainCcWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'List')) {
      throw new TypeError('parameter "List" is required');
    }

    return this.request('RemoveDomainCcWhiteList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} List - list. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  removeDomainWafBlackList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'List')) {
      throw new TypeError('parameter "List" is required');
    }

    return this.request('RemoveDomainWafBlackList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} List - list. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  removeDomainWafWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'List')) {
      throw new TypeError('parameter "List" is required');
    }

    return this.request('RemoveDomainWafWhiteList', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} SourceItems - sourceItems. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  removeListenerWhiteListItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'SourceItems')) {
      throw new TypeError('parameter "SourceItems" is required');
    }

    return this.request('RemoveListenerWhiteListItem', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} BackendServers - backendServers. required.
   * @param {String} HostEcsInstanceId - hostEcsInstanceId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  removeNcServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'BackendServers')) {
      throw new TypeError('parameter "BackendServers" is required');
    }

    return this.request('RemoveNcServers', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} Tags - tags. required.
   */
  removeTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'Tags')) {
      throw new TypeError('parameter "Tags" is required');
    }

    return this.request('RemoveTags', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} VServerGroupId - groupId. required.
   * @param {String} BackendServers - backendServers. required.
   */
  removeVServerGroupBackendServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VServerGroupId')) {
      throw new TypeError('parameter "VServerGroupId" is required');
    }

    if (!hasOwnProperty(params, 'BackendServers')) {
      throw new TypeError('parameter "BackendServers" is required');
    }

    return this.request('RemoveVServerGroupBackendServers', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AclId - aclId. required.
   * @param {String} AclName - aclName. required.
   */
  setAccessControlListAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'AclId')) {
      throw new TypeError('parameter "AclId" is required');
    }

    if (!hasOwnProperty(params, 'AclName')) {
      throw new TypeError('parameter "AclName" is required');
    }

    return this.request('SetAccessControlListAttribute', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {String} LogsDownloadAttributes - logsDownloadAttributes. required.
   */
  setAccessLogsDownloadAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LogsDownloadAttributes')) {
      throw new TypeError('parameter "LogsDownloadAttributes" is required');
    }

    return this.request('SetAccessLogsDownloadAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} BackendServers - backendServers. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  setBackendServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('SetBackendServers', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CACertificateId - certificateId. required.
   * @param {String} CACertificateName - certificateName. required.
   */
  setCACertificateName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CACertificateId')) {
      throw new TypeError('parameter "CACertificateId" is required');
    }

    if (!hasOwnProperty(params, 'CACertificateName')) {
      throw new TypeError('parameter "CACertificateName" is required');
    }

    return this.request('SetCACertificateName', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} AccessControlStatus - accessControlStatus. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  setListenerAccessControlStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'AccessControlStatus')) {
      throw new TypeError('parameter "AccessControlStatus" is required');
    }

    return this.request('SetListenerAccessControlStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} SecurityStatus - securityStatus. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  setListenerSecurityStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'SecurityStatus')) {
      throw new TypeError('parameter "SecurityStatus" is required');
    }

    return this.request('SetListenerSecurityStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Long} AutoReleaseTime - autoReleaseTime. optional.
   */
  setLoadBalancerAutoReleaseTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('SetLoadBalancerAutoReleaseTime', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} XForwardedFor - forwardedFor. optional.
   * @param {String} Scheduler - scheduler. optional.
   * @param {String} StickySession - stickySession. required.
   * @param {String} StickySessionType - stickySessionType. optional.
   * @param {Integer} CookieTimeout - cookieTimeout. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} HealthCheck - healthCheck. required.
   * @param {String} HealthCheckDomain - healthCheckDomain. optional.
   * @param {String} HealthCheckURI - healthCheckURI. optional.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional.
   * @param {Integer} HealthCheckTimeout - healthCheckTimeout. optional.
   * @param {Integer} HealthCheckInterval - healthCheckInterval. optional.
   * @param {Integer} HealthCheckConnectPort - healthCheckConnectPort. optional.
   * @param {String} HealthCheckHttpCode - healthCheckHttpCode. optional.
   * @param {Integer} MaxConnection - maxConnection. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} VServerGroup - enableRsPool. optional.
   * @param {String} VServerGroupId - rsPoolName. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} XForwardedFor_SLBIP - xForwardedFor_SLBIP. optional. default: off.
   * @param {String} XForwardedFor_SLBID - xForwardedFor_SLBID. optional. default: off.
   * @param {String} XForwardedFor_proto - xForwardedFor_proto. optional. default: off.
   * @param {String} Gzip - gzip. optional. default: on.
   * @param {String} AclId - aclId. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} VpcIds - vpcIds. optional.
   * @param {Integer} IdleTimeout - idleTimeout. optional.
   * @param {Integer} RequestTimeout - requestTimeout. optional.
   */
  setLoadBalancerHTTPListenerAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    if (!hasOwnProperty(params, 'StickySession')) {
      throw new TypeError('parameter "StickySession" is required');
    }

    if (!hasOwnProperty(params, 'HealthCheck')) {
      throw new TypeError('parameter "HealthCheck" is required');
    }

    return this.request('SetLoadBalancerHTTPListenerAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} XForwardedFor - forwardedFor. optional.
   * @param {String} Scheduler - scheduler. optional.
   * @param {String} StickySession - stickySession. required.
   * @param {String} StickySessionType - stickySessionType. optional.
   * @param {Integer} CookieTimeout - cookieTimeout. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} HealthCheck - healthCheck. required.
   * @param {String} HealthCheckDomain - healthCheckDomain. optional.
   * @param {String} HealthCheckURI - healthCheckURI. optional.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional.
   * @param {Integer} HealthCheckTimeout - healthCheckTimeout. optional.
   * @param {Integer} HealthCheckInterval - healthCheckInterval. optional.
   * @param {Integer} HealthCheckConnectPort - healthCheckConnectPort. optional.
   * @param {String} HealthCheckHttpCode - healthCheckHttpCode. optional.
   * @param {Integer} MaxConnection - maxConnection. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} ServerCertificateId - serverCertificateId. optional.
   * @param {String} CACertificateId - caCertificateId. optional.
   * @param {String} VServerGroup - enableRsPool. optional.
   * @param {String} VServerGroupId - rsPoolName. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} XForwardedFor_SLBIP - xForwardedFor_SLBIP. optional. default: off.
   * @param {String} XForwardedFor_SLBID - xForwardedFor_SLBID. optional. default: off.
   * @param {String} XForwardedFor_proto - xForwardedFor_proto. optional. default: off.
   * @param {String} Gzip - gzip. optional. default: on.
   * @param {String} AclId - aclId. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} VpcIds - vpcIds. optional.
   * @param {Integer} IdleTimeout - idleTimeout. optional.
   * @param {Integer} RequestTimeout - requestTimeout. optional.
   */
  setLoadBalancerHTTPSListenerAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    if (!hasOwnProperty(params, 'StickySession')) {
      throw new TypeError('parameter "StickySession" is required');
    }

    if (!hasOwnProperty(params, 'HealthCheck')) {
      throw new TypeError('parameter "HealthCheck" is required');
    }

    return this.request('SetLoadBalancerHTTPSListenerAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} LoadBalancerName - loadBalancerName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  setLoadBalancerName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerName')) {
      throw new TypeError('parameter "LoadBalancerName" is required');
    }

    return this.request('SetLoadBalancerName', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} LoadBalancerStatus - loadBalancerStatus. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  setLoadBalancerStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'LoadBalancerStatus')) {
      throw new TypeError('parameter "LoadBalancerStatus" is required');
    }

    return this.request('SetLoadBalancerStatus', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} Scheduler - scheduler. optional.
   * @param {Integer} PersistenceTimeout - persistenceTimeout. optional.
   * @param {Integer} EstablishedTimeout - estTimeout. optional.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional.
   * @param {Integer} HealthCheckConnectTimeout - healthCheckConnectTimeout. optional.
   * @param {Integer} HealthCheckConnectPort - healthCheckConnectPort. optional.
   * @param {Integer} HealthCheckInterval - healthCheckInterval. optional.
   * @param {String} HealthCheckDomain - healthCheckDomain. optional.
   * @param {String} HealthCheckURI - healthCheckURI. optional.
   * @param {String} HealthCheckHttpCode - healthCheckHttpCode. optional.
   * @param {String} HealthCheckType - healthCheckType. optional.
   * @param {String} SynProxy - synProxy. optional.
   * @param {Integer} MaxConnection - maxConnection. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} VServerGroup - enableRsPool. optional.
   * @param {String} VServerGroupId - rsPoolName. optional.
   * @param {String} MasterSlaveServerGroupId - masterSlaveServerGroupId. optional.
   * @param {String} MasterSlaveServerGroup - enableMasterSlaveRsPool. optional.
   * @param {String} AclId - aclId. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} VpcIds - vpcIds. optional.
   */
  setLoadBalancerTCPListenerAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('SetLoadBalancerTCPListenerAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {Integer} Bandwidth - bandwidth. required.
   * @param {String} Scheduler - scheduler. optional.
   * @param {Integer} PersistenceTimeout - persistenceTimeout. optional.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional.
   * @param {Integer} HealthCheckConnectTimeout - healthCheckConnectTimeout. optional.
   * @param {Integer} HealthCheckConnectPort - healthCheckConnectPort. optional.
   * @param {Integer} HealthCheckInterval - healthCheckInterval. optional.
   * @param {String} healthCheckReq - healthCheckReq. optional.
   * @param {String} healthCheckExp - healthCheckExp. optional.
   * @param {Integer} MaxConnection - maxConnection. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} VServerGroup - enableRsPool. optional.
   * @param {String} VServerGroupId - rsPoolName. optional.
   * @param {String} MasterSlaveServerGroupId - masterSlaveServerGroupId. optional.
   * @param {String} MasterSlaveServerGroup - enableMasterSlaveRsPool. optional.
   * @param {String} AclId - aclId. optional.
   * @param {String} AclType - aclType. optional.
   * @param {String} AclStatus - aclStatus. optional.
   * @param {String} VpcIds - vpcIds. optional.
   */
  setLoadBalancerUDPListenerAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    if (!hasOwnProperty(params, 'Bandwidth')) {
      throw new TypeError('parameter "Bandwidth" is required');
    }

    return this.request('SetLoadBalancerUDPListenerAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LogType - logType. required.
   * @param {String} OSSBucketName - oSSBucketName. required.
   * @param {String} RoleName - roleName. optional. default: aliyunslbdefaultrole.
   */
  setLogsDownloadAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LogType')) {
      throw new TypeError('parameter "LogType" is required');
    }

    if (!hasOwnProperty(params, 'OSSBucketName')) {
      throw new TypeError('parameter "OSSBucketName" is required');
    }

    return this.request('SetLogsDownloadAttribute', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} LogsDownloadStatus - logsDownloadStatus. required.
   * @param {String} RoleName - roleName. optional. default: aliyunslbdefaultrole.
   */
  setLogsDownloadStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'LogsDownloadStatus')) {
      throw new TypeError('parameter "LogsDownloadStatus" is required');
    }

    return this.request('SetLogsDownloadStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {String} HostEcsInstanceId - hostEcsInstanceId. optional.
   * @param {String} BackendServers - backendServers. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  setNcServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('SetNcServers', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} WafStatus - wafStatus. optional.
   * @param {String} CcStatus - ccStatus. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  setProtectedDomainStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SetProtectedDomainStatus', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RuleId - ruleId. required.
   * @param {String} VServerGroupId - rsPoolName. optional.
   */
  setRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('SetRule', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ServerCertificateId - serverCertificateId. required.
   * @param {String} ServerCertificateName - serverCertificateName. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  setServerCertificateName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ServerCertificateId')) {
      throw new TypeError('parameter "ServerCertificateId" is required');
    }

    if (!hasOwnProperty(params, 'ServerCertificateName')) {
      throw new TypeError('parameter "ServerCertificateName" is required');
    }

    return this.request('SetServerCertificateName', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} VServerGroupId - groupId. required.
   * @param {String} VServerGroupName - groupName. optional.
   * @param {String} BackendServers - backendServers. optional.
   */
  setVServerGroupAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'VServerGroupId')) {
      throw new TypeError('parameter "VServerGroupId" is required');
    }

    return this.request('SetVServerGroupAttribute', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  startLoadBalancerListener(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('StartLoadBalancerListener', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  stopLoadBalancerListener(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('StopLoadBalancerListener', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} CACertificate - certificateContent. required.
   * @param {String} CACertificateName - certificateName. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  uploadCACertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'CACertificate')) {
      throw new TypeError('parameter "CACertificate" is required');
    }

    return this.request('UploadCACertificate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AliCloudCertificateId - yunCertId. optional.
   * @param {String} AliCloudCertificateName - yunNickname. optional.
   * @param {String} ServerCertificate - serverCertificate. optional.
   * @param {String} PrivateKey - privateKey. optional.
   * @param {String} ServerCertificateName - serverCertificateName. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  uploadServerCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('UploadServerCertificate', params, options);
  }

}

module.exports = Client;
