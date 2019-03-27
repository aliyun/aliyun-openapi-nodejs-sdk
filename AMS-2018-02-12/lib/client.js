
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-02-12';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} ProductId - productId. optional.
   * @param {Integer} Type - type. optional. default: 0.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} PackageName - packageName. optional.
   * @param {String} BundleId - bundleId. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    options.method = 'POST';
    return this.request('CreateApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} OwnerId - userId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {Integer} IndustryId - industryId. optional.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    options.method = 'POST';
    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   */
  deleteProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteProduct', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   */
  listApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ListApps', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   */
  listProducts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ListProducts', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Name - name. optional.
   * @param {String} PackageName - packageName. optional.
   * @param {String} BundleId - bundleId. optional.
   */
  modifyApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    options.method = 'POST';
    return this.request('ModifyApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} ProductId - productId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    options.method = 'POST';
    return this.request('ModifyProduct', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   */
  permanentDeleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    options.method = 'POST';
    return this.request('PermanentDeleteApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} AppKey - appKey. required.
   * @param {String} CertMode - certMode. required.
   * @param {String} DeviceToken - deviceToken. required.
   * @param {String} Message - message. optional.
   * @param {String} BundleId - bundleId. optional.
   * @param {String} EncodedCert - encodedCert. optional.
   * @param {String} Password - password. optional.
   */
  preflight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'CertMode')) {
      throw new TypeError('parameter "CertMode" is required');
    }

    if (!hasOwnProperty(params, 'DeviceToken')) {
      throw new TypeError('parameter "DeviceToken" is required');
    }

    options.method = 'POST';
    return this.request('Preflight', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   */
  queryAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('QueryAppInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   */
  queryProductInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('QueryProductInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} AppKey - appkey. required.
   * @param {String} Name - name. required.
   * @param {String} LogoUrl - logoUrl. optional.
   * @param {String} CallbackUrl - callbackurl. optional.
   */
  updateTopApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    options.method = 'POST';
    return this.request('UpdateTopApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} AppKey - appKey. required.
   * @param {String} CertMode - certMode. required.
   * @param {String} EncodedCert - encodedCert. required.
   * @param {String} Password - password. required.
   */
  uploadAppCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'CertMode')) {
      throw new TypeError('parameter "CertMode" is required');
    }

    if (!hasOwnProperty(params, 'EncodedCert')) {
      throw new TypeError('parameter "EncodedCert" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    options.method = 'POST';
    return this.request('UploadAppCert', params, options);
  }

}

module.exports = Client;
