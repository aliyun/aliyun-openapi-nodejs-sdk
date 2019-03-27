
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-03-01';
    super(config);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Cert - cert. required.
   * @param {String} Key - key. required.
   * @param {String} Region - region. required.
   * @param {Long} UserId - userId. required.
   * @param {String} ProductAccessKeyId - productAccessKeyId. required.
   */
  addCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Cert')) {
      throw new TypeError('parameter "Cert" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ProductAccessKeyId')) {
      throw new TypeError('parameter "ProductAccessKeyId" is required');
    }

    return this.request('AddCertificate', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  completedOrderInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompletedOrderInfo', params, options);
  }

  /**
   * @param {Long} CertId - certId. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} ProductAccessKeyId - productAccessKeyId. required.
   */
  deleteCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ProductAccessKeyId')) {
      throw new TypeError('parameter "ProductAccessKeyId" is required');
    }

    return this.request('DeleteCertificate', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  domainCertQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('DomainCertQuery', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  orderRefund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderRefund', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  orderValidate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderValidate', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {Long} CertId - certId. optional.
   * @param {String} CertName - certName. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} ProductAccessKeyId - productAccessKeyId. required.
   */
  queryCertificateDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ProductAccessKeyId')) {
      throw new TypeError('parameter "ProductAccessKeyId" is required');
    }

    return this.request('QueryCertificateDetail', params, options);
  }

  /**
   * @param {Integer} Time - time. optional.
   * @param {String} Region - region. required.
   * @param {Long} UserId - userId. required.
   * @param {String} ProductAccessKeyId - productAccessKeyId. required.
   * @param {String} Domain - domain. optional.
   * @param {Integer} MaxCount - maxCount. optional.
   */
  queryCertificateList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ProductAccessKeyId')) {
      throw new TypeError('parameter "ProductAccessKeyId" is required');
    }

    return this.request('QueryCertificateList', params, options);
  }

}

module.exports = Client;
