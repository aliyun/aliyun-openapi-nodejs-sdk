
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-12-25';
    super(config);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {Integer} Cycles - cycles. required.
   * @param {String} Period - period. required.
   */
  checkReadyFlag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Cycles')) {
      throw new TypeError('parameter "Cycles" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    options.method = 'POST';
    return this.request('CheckReadyFlag', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {String} Part - part. required.
   */
  deleteDomainPart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'Part')) {
      throw new TypeError('parameter "Part" is required');
    }

    options.method = 'POST';
    return this.request('DeleteDomainPart', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {String} Part - part. required.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getDomainPart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'Part')) {
      throw new TypeError('parameter "Part" is required');
    }

    return this.request('GetDomainPart', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {String} ApiType - flagType. required.
   * @param {String} QueryField - queryField. required.
   * @param {String} Filter - filter. required.
   * @param {Integer} MaxResult - maxret. required.
   * @param {String} NextToken - marker. optional.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getMeasureData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'ApiType')) {
      throw new TypeError('parameter "ApiType" is required');
    }

    if (!hasOwnProperty(params, 'QueryField')) {
      throw new TypeError('parameter "QueryField" is required');
    }

    if (!hasOwnProperty(params, 'Filter')) {
      throw new TypeError('parameter "Filter" is required');
    }

    if (!hasOwnProperty(params, 'MaxResult')) {
      throw new TypeError('parameter "MaxResult" is required');
    }

    return this.request('GetMeasureData', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {String} ApiType - flagType. required.
   * @param {String} Filter - filter. required.
   * @param {Integer} MaxResult - maxret. required.
   * @param {String} NextToken - marker. optional.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getReadyFlag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'ApiType')) {
      throw new TypeError('parameter "ApiType" is required');
    }

    if (!hasOwnProperty(params, 'Filter')) {
      throw new TypeError('parameter "Filter" is required');
    }

    if (!hasOwnProperty(params, 'MaxResult')) {
      throw new TypeError('parameter "MaxResult" is required');
    }

    return this.request('GetReadyFlag', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {String} Data - data. required.
   * @param {Boolean} Compressed - compressed. optional. default: false.
   */
  putDomainPart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('PutDomainPart', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {String} ApiType - flagType. required.
   * @param {String} Filter - filter. optional.
   * @param {String} Data - data. required.
   * @param {Boolean} Compressed - compressed. optional. default: false.
   */
  putMeasureData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'ApiType')) {
      throw new TypeError('parameter "ApiType" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('PutMeasureData', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {String} ApiType - flagType. required.
   * @param {String} Data - data. required.
   * @param {Boolean} Compressed - compressed. optional. default: false.
   */
  putReadyFlag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'ApiType')) {
      throw new TypeError('parameter "ApiType" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('PutReadyFlag', params, options);
  }

}

module.exports = Client;
