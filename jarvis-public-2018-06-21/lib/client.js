
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-21';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} StartTime - StartTime. required.
   * @param {Integer} EndTime - EndTime. required.
   * @param {Integer} CurrentPage - CurrentPage. required.
   * @param {Integer} PageSize - PageSize. required.
   * @param {String} ProductType - ProductType. required.
   * @param {String} Region - Region. required.
   * @param {String} ServerIpList - ServerIpList. required.
   */
  describeAttackEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'ServerIpList')) {
      throw new TypeError('parameter "ServerIpList" is required');
    }

    return this.request('DescribeAttackEvent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} StartTime - StartTime. required.
   * @param {Integer} EndTime - EndTime. required.
   * @param {Integer} CurrentPage - CurrentPage. required.
   * @param {Integer} PageSize - PageSize. required.
   * @param {String} ProductType - ProductType. required.
   * @param {String} Region - Region. required.
   * @param {String} ServerIpList - ServerIpList. required.
   */
  describeAttackedIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'ServerIpList')) {
      throw new TypeError('parameter "ServerIpList" is required');
    }

    return this.request('DescribeAttackedIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} StartTime - StartTime. required.
   * @param {Integer} EndTime - EndTime. required.
   * @param {Integer} CurrentPage - CurrentPage. required.
   * @param {Integer} PageSize - PageSize. required.
   * @param {String} ProductType - ProductType. required.
   * @param {String} Region - Region. required.
   * @param {String} ServerIpList - ServerIpList. required.
   */
  describeCountAttackEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'ProductType')) {
      throw new TypeError('parameter "ProductType" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'ServerIpList')) {
      throw new TypeError('parameter "ServerIpList" is required');
    }

    return this.request('DescribeCountAttackEvent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} sourceCode - sourceCode. required.
   * @param {String} phoneNum - phoneNum. required.
   */
  describePhoneInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'sourceCode')) {
      throw new TypeError('parameter "sourceCode" is required');
    }

    if (!hasOwnProperty(params, 'phoneNum')) {
      throw new TypeError('parameter "phoneNum" is required');
    }

    return this.request('DescribePhoneInfo', params, options);
  }

}

module.exports = Client;
