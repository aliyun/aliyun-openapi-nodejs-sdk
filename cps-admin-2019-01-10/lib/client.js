
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-01-10';
    super(config);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainId - DomainId. required.
   * @param {String} BindingDomainName - BindingDomainName. required.
   * @param {String} Cert - Cert. optional.
   */
  bindDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    if (!hasOwnProperty(params, 'BindingDomainName')) {
      throw new TypeError('parameter "BindingDomainName" is required');
    }

    return this.request('BindDomain', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClientName - ClientName. required.
   * @param {String} Description - Description. optional.
   * @param {String} Scope - Scope. required.
   * @param {String} RedirectUri - RedirectUri. required.
   * @param {String} Logo - Logo. optional.
   */
  createClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientName')) {
      throw new TypeError('parameter "ClientName" is required');
    }

    if (!hasOwnProperty(params, 'Scope')) {
      throw new TypeError('parameter "Scope" is required');
    }

    if (!hasOwnProperty(params, 'RedirectUri')) {
      throw new TypeError('parameter "RedirectUri" is required');
    }

    return this.request('CreateClient', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainName - DomainName. required.
   * @param {String} Description - Description. optional.
   * @param {Boolean} AuthOAEnable - AuthOAEnable. optional.
   * @param {Boolean} AuthDingdingEnable - AuthDingdingEnable. optional.
   * @param {String} AuthDingdingAppId - AuthDingdingAppId. optional.
   * @param {String} AuthDingdingAppSecret - AuthDingdingAppSecret. optional.
   * @param {Boolean} AuthAlipayEnable - AuthAlipayEnable. optional.
   * @param {String} AuthAlipayAppId - AuthAlipayAppId. optional.
   * @param {String} AuthAlipayPrivateKey - AuthAlipayPrivateKey. optional.
   * @param {String} Logo - Logo. optional.
   * @param {String} Regions - Regions. optional.
   * @param {Boolean} InitDriveEnable - InitDriveEnable. optional.
   * @param {String} InitDriveName - InitDriveName. optional.
   * @param {Long} InitDriveSize - InitDriveSize. optional.
   * @param {Boolean} Sharable - Sharable. optional.
   * @param {Boolean} AuthRamEnable - AuthRamEnable. optional.
   * @param {String} AuthRamAppId - AuthRamAppId. optional.
   * @param {String} AuthRamAppSecret - AuthRamAppSecret. optional.
   * @param {String} EventMnsEndpoint - EventMnsEndpoint. optional.
   * @param {String} EventMnsTopic - EventMnsTopic. optional.
   * @param {String} EventFileNameMatches - EventFileNameMatches. optional.
   * @param {String} EventNames - EventNames. optional.
   * @param {String} EventRoleArn - EventRoleArn. optional.
   */
  createDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CreateDomain', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainId - DomainId. required.
   * @param {String} BindingDomainName - BindingDomainName. required.
   */
  deleteBindingDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    if (!hasOwnProperty(params, 'BindingDomainName')) {
      throw new TypeError('parameter "BindingDomainName" is required');
    }

    return this.request('DeleteBindingDomain', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClientId - ClientId. required.
   */
  deleteClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    return this.request('DeleteClient', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainId - DomainId. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeScope(params = {}, options = {}) {
    return this.request('DescribeScope', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeStorageRegions(params = {}, options = {}) {
    return this.request('DescribeStorageRegions', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClientId - ClientId. required.
   */
  getClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    return this.request('GetClient', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainId - DomainId. required.
   */
  getDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    return this.request('GetDomain', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  getSummary(params = {}, options = {}) {
    return this.request('GetSummary', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainId - DomainId. required.
   */
  getSuperAdminAccessCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    return this.request('GetSuperAdminAccessCode', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainId - DomainId. required.
   */
  listBindingDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    return this.request('ListBindingDomains', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - MaxKeys. optional.
   */
  listClients(params = {}, options = {}) {
    return this.request('ListClients', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxKeys - MaxKeys. optional.
   */
  listDomains(params = {}, options = {}) {
    return this.request('ListDomains', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainId - DomainId. required.
   * @param {String} BindingDomainName - BindingDomainName. required.
   * @param {String} Cert - Cert. optional.
   */
  updateBindingDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    if (!hasOwnProperty(params, 'BindingDomainName')) {
      throw new TypeError('parameter "BindingDomainName" is required');
    }

    return this.request('UpdateBindingDomain', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ClientName - ClientName. optional.
   * @param {String} Description - Description. optional.
   * @param {String} Scope - Scope. optional.
   * @param {String} RedirectUri - RedirectUri. optional.
   * @param {String} Logo - Logo. optional.
   * @param {String} ClientId - ClientId. required.
   */
  updateClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClientId')) {
      throw new TypeError('parameter "ClientId" is required');
    }

    return this.request('UpdateClient', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainName - DomainName. optional.
   * @param {String} Description - Description. optional.
   * @param {Boolean} AuthOAEnable - AuthOAEnable. optional.
   * @param {Boolean} AuthDingdingEnable - AuthDingdingEnable. optional.
   * @param {String} AuthDingdingAppId - AuthDingdingAppId. optional.
   * @param {String} AuthDingdingAppSecret - AuthDingdingAppSecret. optional.
   * @param {Boolean} AuthAlipayEnable - AuthAlipayEnable. optional.
   * @param {String} AuthAlipayAppId - AuthAlipayAppId. optional.
   * @param {String} AuthAlipayPrivateKey - AuthAlipayPrivateKey. optional.
   * @param {String} Logo - Logo. optional.
   * @param {String} Regions - Regions. optional.
   * @param {Boolean} InitDriveEnable - InitDriveEnable. optional.
   * @param {String} InitDriveName - InitDriveName. optional.
   * @param {Long} InitDriveSize - InitDriveSize. optional.
   * @param {Boolean} Sharable - Sharable. optional.
   * @param {String} BindingDomainName - BindingDomainName. optional.
   * @param {String} DomainId - DomainId. required.
   * @param {String} AuthRamEnable - AuthRamEnable. optional.
   * @param {String} AuthRamAppId - AuthRamAppId. optional.
   * @param {String} AuthRamAppSecret - AuthRamAppSecret. optional.
   * @param {String} EventMnsEndpoint - EventMnsEndpoint. optional.
   * @param {String} EventMnsTopic - EventMnsTopic. optional.
   * @param {String} EventFileNameMatches - EventFileNameMatches. optional.
   * @param {String} EventNames - EventNames. optional.
   * @param {String} EventRoleArn - EventRoleArn. optional.
   */
  updateDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainId')) {
      throw new TypeError('parameter "DomainId" is required');
    }

    return this.request('UpdateDomain', params, options);
  }

}

module.exports = Client;
