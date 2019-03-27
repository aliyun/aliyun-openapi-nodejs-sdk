
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-02-01';
    super(config);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   * @param {Long} ProductId - productId. optional.
   * @param {Integer} Type - type. optional. default: 0.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} PackageName - packageName. optional.
   * @param {String} BundleId - bundleId. optional.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    options.method = 'POST';
    return this.request('CreateApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} AppName - appName. required.
   * @param {String} Description - description. optional.
   */
  createCloudApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('CreateCloudApp', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   * @param {Long} UserId - userId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {Integer} IndustryId - industryId. optional.
   */
  createProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    options.method = 'POST';
    return this.request('CreateProduct', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    options.method = 'POST';
    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} AppId - appId. required.
   */
  deleteCloudApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteCloudApp', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   */
  deleteProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    options.method = 'POST';
    return this.request('DeleteProduct', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} AppId - appId. required.
   */
  describeAppSecurity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeAppSecurity', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} AppId - appId. required.
   */
  describeCloudApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeCloudApp', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   */
  listApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    return this.request('ListApps', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   */
  listProducts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    return this.request('ListProducts', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   * @param {Long} AppKey - appKey. required.
   * @param {String} Name - name. optional.
   * @param {String} PackageName - packageName. optional.
   * @param {String} BundleId - bundleId. optional.
   */
  modifyApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    options.method = 'POST';
    return this.request('ModifyApp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Long} AppId - appId. required.
   * @param {String} AppName - appName. optional.
   * @param {String} Description - description. optional.
   */
  modifyCloudApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('ModifyCloudApp', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   * @param {Long} ProductId - productId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   */
  modifyProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    if (!hasOwnProperty(params, 'ProductId')) {
      throw new TypeError('parameter "ProductId" is required');
    }

    options.method = 'POST';
    return this.request('ModifyProduct', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   */
  queryAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    return this.request('QueryAppInfo', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   */
  queryProductInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
    }

    return this.request('QueryProductInfo', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} AppKey - appKey. required.
   */
  resetCloudAppSecret(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    return this.request('ResetCloudAppSecret', params, options);
  }

  /**
   * @param {String} BizName - bizName. required.
   * @param {String} BizToken - bizToken. required.
   * @param {Long} AppKey - appKey. required.
   * @param {String} CertMode - certMode. required.
   * @param {String} EncodedCert - encodedCert. required.
   * @param {String} Password - password. required.
   */
  uploadAppCert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'BizToken')) {
      throw new TypeError('parameter "BizToken" is required');
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
