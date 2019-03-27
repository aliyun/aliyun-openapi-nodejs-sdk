
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-01-01';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} Ips - ips. required.
   */
  addAppIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    return this.request('AddAppIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - ddosRegionId. required.
   * @param {String} Ips - ips. required.
   */
  addProductIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    return this.request('AddProductIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - ddosRegionId. required.
   * @param {Integer} DefenseBps - defenseBps. required.
   * @param {Integer} DefensePps - defensePps. required.
   * @param {String} DefenseTemplate - defenseTemplate. required.
   * @param {Integer} IsAutoBlackhole - isAutoBlackhole. required.
   * @param {Integer} BlackholeBps - blackholeBps. optional.
   */
  createAppConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'DefenseBps')) {
      throw new TypeError('parameter "DefenseBps" is required');
    }

    if (!hasOwnProperty(params, 'DefensePps')) {
      throw new TypeError('parameter "DefensePps" is required');
    }

    if (!hasOwnProperty(params, 'DefenseTemplate')) {
      throw new TypeError('parameter "DefenseTemplate" is required');
    }

    if (!hasOwnProperty(params, 'IsAutoBlackhole')) {
      throw new TypeError('parameter "IsAutoBlackhole" is required');
    }

    return this.request('CreateAppConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - ddosRegionId. required.
   * @param {Integer} DefenseBpsDefault - defenseBpsDefault. required.
   * @param {Integer} DefensePpsDefault - defensePpsDefault. required.
   * @param {String} DefenseBpsMin - defenseBpsMin. required.
   * @param {Integer} DefenseBpsMax - defenseBpsMax. required.
   * @param {Integer} DefensePpsMin - defensePpsMin. required.
   * @param {Integer} DefensePpsMax - defensePpsMax. required.
   * @param {String} DefenseTemplate - defenseTemplate. required.
   * @param {Integer} IsAutoBlackhole - isAutoBlackhole. required.
   * @param {Integer} BlackholeDefault - blackholeDefault. optional.
   */
  createProductConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'DefenseBpsDefault')) {
      throw new TypeError('parameter "DefenseBpsDefault" is required');
    }

    if (!hasOwnProperty(params, 'DefensePpsDefault')) {
      throw new TypeError('parameter "DefensePpsDefault" is required');
    }

    if (!hasOwnProperty(params, 'DefenseBpsMin')) {
      throw new TypeError('parameter "DefenseBpsMin" is required');
    }

    if (!hasOwnProperty(params, 'DefenseBpsMax')) {
      throw new TypeError('parameter "DefenseBpsMax" is required');
    }

    if (!hasOwnProperty(params, 'DefensePpsMin')) {
      throw new TypeError('parameter "DefensePpsMin" is required');
    }

    if (!hasOwnProperty(params, 'DefensePpsMax')) {
      throw new TypeError('parameter "DefensePpsMax" is required');
    }

    if (!hasOwnProperty(params, 'DefenseTemplate')) {
      throw new TypeError('parameter "DefenseTemplate" is required');
    }

    if (!hasOwnProperty(params, 'IsAutoBlackhole')) {
      throw new TypeError('parameter "IsAutoBlackhole" is required');
    }

    return this.request('CreateProductConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - ddosRegionId. required.
   */
  deleteAppConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    return this.request('DeleteAppConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} Ips - ips. required.
   */
  deleteAppIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    return this.request('DeleteAppIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - ddosRegionId. required.
   */
  deleteProductConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    return this.request('DeleteProductConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - ddosRegionId. required.
   * @param {String} Ips - ips. required.
   */
  deleteProductIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    return this.request('DeleteProductIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   */
  describeAppConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DescribeAppConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - regionId. optional.
   * @param {String} Ip - ip. optional.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeAppIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DescribeAppIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   */
  describeProductConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DescribeProductConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - regionId. optional.
   * @param {String} Ip - ip. optional.
   * @param {Integer} PageNo - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeProductIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DescribeProductIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - ddosRegionId. required.
   * @param {Integer} DefenseBps - defenseBps. required.
   * @param {Integer} DefensePps - defensePps. required.
   * @param {String} DefenseTemplate - defenseTemplate. required.
   * @param {Integer} IsAutoBlackhole - isAutoBlackhole. required.
   * @param {Integer} BlackholeBps - blackholeBps. optional.
   */
  modifyAppConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'DefenseBps')) {
      throw new TypeError('parameter "DefenseBps" is required');
    }

    if (!hasOwnProperty(params, 'DefensePps')) {
      throw new TypeError('parameter "DefensePps" is required');
    }

    if (!hasOwnProperty(params, 'DefenseTemplate')) {
      throw new TypeError('parameter "DefenseTemplate" is required');
    }

    if (!hasOwnProperty(params, 'IsAutoBlackhole')) {
      throw new TypeError('parameter "IsAutoBlackhole" is required');
    }

    return this.request('ModifyAppConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Name - name. required.
   * @param {String} DdosRegionId - ddosRegionId. required.
   * @param {Integer} DefenseBpsDefault - defenseBpsDefault. required.
   * @param {Integer} DefensePpsDefault - defensePpsDefault. required.
   * @param {String} DefenseBpsMin - defenseBpsMin. required.
   * @param {Integer} DefenseBpsMax - defenseBpsMax. required.
   * @param {Integer} DefensePpsMin - defensePpsMin. required.
   * @param {Integer} DefensePpsMax - defensePpsMax. required.
   * @param {String} DefenseTemplate - defenseTemplate. required.
   * @param {Integer} IsAutoBlackhole - isAutoBlackhole. required.
   * @param {Integer} BlackholeDefault - blackholeDefault. optional.
   */
  modifyProductConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'DefenseBpsDefault')) {
      throw new TypeError('parameter "DefenseBpsDefault" is required');
    }

    if (!hasOwnProperty(params, 'DefensePpsDefault')) {
      throw new TypeError('parameter "DefensePpsDefault" is required');
    }

    if (!hasOwnProperty(params, 'DefenseBpsMin')) {
      throw new TypeError('parameter "DefenseBpsMin" is required');
    }

    if (!hasOwnProperty(params, 'DefenseBpsMax')) {
      throw new TypeError('parameter "DefenseBpsMax" is required');
    }

    if (!hasOwnProperty(params, 'DefensePpsMin')) {
      throw new TypeError('parameter "DefensePpsMin" is required');
    }

    if (!hasOwnProperty(params, 'DefensePpsMax')) {
      throw new TypeError('parameter "DefensePpsMax" is required');
    }

    if (!hasOwnProperty(params, 'DefenseTemplate')) {
      throw new TypeError('parameter "DefenseTemplate" is required');
    }

    if (!hasOwnProperty(params, 'IsAutoBlackhole')) {
      throw new TypeError('parameter "IsAutoBlackhole" is required');
    }

    return this.request('ModifyProductConfig', params, options);
  }

}

module.exports = Client;
