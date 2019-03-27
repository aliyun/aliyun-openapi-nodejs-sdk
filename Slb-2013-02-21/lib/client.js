
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2013-02-21';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} RegionId - regionId. optional.
   * @param {String} IsPublicAddress - isPublicAddress. optional.
   * @param {String} Address - address. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} LoadBalancerName - loadBalancerName. optional.
   * @param {String} LoadBalancerMode - loadBalancerMode. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createLoadBalancer(params = {}, options = {}) {
    return this.request('CreateLoadBalancer', params, options);
  }

  /**
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {Integer} ListenerPort - listenerPort. optional.
   * @param {Integer} BackendServerPort - backendServerPort. optional.
   * @param {String} ListenerStatus - listenerStatus. optional.
   * @param {String} XForwardedFor - xForwardedFor. optional.
   * @param {String} Scheduler - scheduler. optional.
   * @param {String} StickySession - stickySession. optional.
   * @param {String} StickySessionType - stickySessionType. optional.
   * @param {Integer} CookieTimeout - cookieTimeout. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} HealthCheck - healthCheck. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} URI - URI. optional.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional.
   * @param {Integer} HealthCheckTimeout - healthCheckTimeout. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} HostId - HostId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  createLoadBalancerHTTPListener(params = {}, options = {}) {
    return this.request('CreateLoadBalancerHTTPListener', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. required.
   * @param {Integer} BackendServerPort - backendServerPort. optional.
   * @param {String} ListenerStatus - listenerStatus. optional. default: inactive.
   * @param {Integer} Bandwidth - bandwidth. optional. default: -1.
   * @param {String} Scheduler - scheduler. optional. default: wrr.
   * @param {Integer} PersistenceTimeout - persistenceTimeout. optional. default: 0.
   * @param {Integer} EstablishedTimeout - estTimeout. optional. default: 900.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional. default: 3.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional. default: 3.
   * @param {String} HealthCheck - healthCheck. optional.
   * @param {Integer} ConnectTimeout - healthCheckConnectTimeout. optional. default: 5.
   * @param {Integer} ConnectPort - healthCheckConnectPort. optional.
   * @param {Integer} Interval - healthCheckInterval. optional.
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
   */
  createLoadBalancerTCPListener(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    if (!hasOwnProperty(params, 'ListenerPort')) {
      throw new TypeError('parameter "ListenerPort" is required');
    }

    return this.request('CreateLoadBalancerTCPListener', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} LoadBalancerId - loadBalancerId. required.
   * @param {Integer} ListenerPort - listenerPort. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   * @param {String} RegionId - regionId. optional.
   */
  describeBackendServers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoadBalancerId')) {
      throw new TypeError('parameter "LoadBalancerId" is required');
    }

    return this.request('DescribeBackendServers', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} access_key_id - accessKeyId. optional.
   * @param {String} Tags - tagsRam. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {Integer} ListenerPort - listenerPort. optional.
   * @param {String} XForwardedFor - xForwardedFor. optional.
   * @param {String} Scheduler - scheduler. optional.
   * @param {String} StickySession - stickySession. optional.
   * @param {String} StickySessionType - stickySessionType. optional.
   * @param {Integer} CookieTimeout - cookieTimeout. optional.
   * @param {String} Cookie - cookie. optional.
   * @param {String} HealthCheck - healthCheck. optional.
   * @param {String} Domain - domain. optional.
   * @param {String} URI - uri. optional.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional.
   * @param {Integer} HealthCheckTimeout - healthCheckTimeout. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} HostId - HostId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  setLoadBalancerHTTPListenerAttribute(params = {}, options = {}) {
    return this.request('SetLoadBalancerHTTPListenerAttribute', params, options);
  }

  /**
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {Integer} ListenerPort - listenerPort. optional.
   * @param {String} ListenerStatus - listenerStatus. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} HostId - HostId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  setLoadBalancerListenerStatus(params = {}, options = {}) {
    return this.request('SetLoadBalancerListenerStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} AccessKeyId - appKey. optional.
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
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {Integer} ListenerPort - listenerPort. optional.
   * @param {String} Scheduler - scheduler. optional.
   * @param {Integer} PersistenceTimeout - persistenceTimeout. optional.
   * @param {String} HealthCheck - healthCheck. optional.
   * @param {Integer} HealthyThreshold - healthyThreshold. optional. default: 3.
   * @param {Integer} UnhealthyThreshold - unhealthyThreshold. optional. default: 3.
   * @param {Integer} ConnectTimeout - connectTimeout. optional.
   * @param {Integer} ConnectPort - connectPort. optional.
   * @param {Integer} Interval - interval. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} HostId - HostId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  setLoadBalancerTCPListenerAttribute(params = {}, options = {}) {
    return this.request('SetLoadBalancerTCPListenerAttribute', params, options);
  }

  /**
   * @param {String} LoadBalancerId - loadBalancerId. optional.
   * @param {Integer} ListenerPort - listenerPort. optional.
   * @param {String} ListenerStatus - listenerStatus. optional.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} HostId - HostId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  setLoadBanancerListenerStatus(params = {}, options = {}) {
    return this.request('SetLoadBanancerListenerStatus', params, options);
  }

}

module.exports = Client;
