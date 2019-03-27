
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-13';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {String} DomainVerifyType - domainVerifyType. required.
   * @param {String} Username - username. required.
   * @param {String} Email - email. required.
   * @param {String} Mobile - mobile. required.
   * @param {String} Province - province. required.
   * @param {String} City - city. required.
   */
  createDVOrderAudit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'DomainVerifyType')) {
      throw new TypeError('parameter "DomainVerifyType" is required');
    }

    if (!hasOwnProperty(params, 'Username')) {
      throw new TypeError('parameter "Username" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    if (!hasOwnProperty(params, 'Province')) {
      throw new TypeError('parameter "Province" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    return this.request('CreateDVOrderAudit', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Cert - cert. required.
   * @param {String} Key - key. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  createUserCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Cert')) {
      throw new TypeError('parameter "Cert" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('CreateUserCertificate', params, options);
  }

  /**
   * @param {Long} CertId - certId. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  deleteUserCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertId')) {
      throw new TypeError('parameter "CertId" is required');
    }

    return this.request('DeleteUserCertificate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeDVOrderResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDVOrderResult', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} StartIndex - startIndex. required.
   */
  describeOrderInstanceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartIndex')) {
      throw new TypeError('parameter "StartIndex" is required');
    }

    return this.request('DescribeOrderInstanceList', params, options);
  }

  /**
   * @param {Long} CertId - certId. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUserCertificateDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertId')) {
      throw new TypeError('parameter "CertId" is required');
    }

    return this.request('DescribeUserCertificateDetail', params, options);
  }

  /**
   * @param {Integer} ShowSize - showSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUserCertificateList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ShowSize')) {
      throw new TypeError('parameter "ShowSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('DescribeUserCertificateList', params, options);
  }

}

module.exports = Client;
