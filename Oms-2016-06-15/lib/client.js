
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-15';
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
   */
  deleteDomainPartByProxy(params = {}, options = {}) {
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
    return this.request('DeleteDomainPartByProxy', params, options);
  }

  /**
   * @param {String} AliUid - aliUid. required.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getAccessPolicyConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('GetAccessPolicyConfig', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getDomainConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    return this.request('GetDomainConfig', params, options);
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
   * @param {String} Part - part. required.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getDomainPartByProxy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'Part')) {
      throw new TypeError('parameter "Part" is required');
    }

    return this.request('GetDomainPartByProxy', params, options);
  }

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {String} Part - part. required.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getDomainPartConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'Part')) {
      throw new TypeError('parameter "Part" is required');
    }

    return this.request('GetDomainPartConfig', params, options);
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
   * @param {String} ProductName - openProdCode. required.
   * @param {String} TableName - openTableName. optional.
   * @param {String} DataType - openDataType. required.
   * @param {String} siteBid - siteBid. optional.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getOpenApiConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    return this.request('GetOpenApiConfig', params, options);
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
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getReadyFlagAlertConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainCode')) {
      throw new TypeError('parameter "DomainCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    return this.request('GetReadyFlagAlertConfig', params, options);
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
  getReadyFlagByProxy(params = {}, options = {}) {
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

    return this.request('GetReadyFlagByProxy', params, options);
  }

  /**
   * @param {String} ConfigKey - configKey. required.
   * @param {Boolean} CompressEnable - compressEnable. optional. default: false.
   */
  getSystemConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConfigKey')) {
      throw new TypeError('parameter "ConfigKey" is required');
    }

    return this.request('GetSystemConfig', params, options);
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
   * @param {String} Data - data. required.
   * @param {Boolean} Compressed - compressed. optional. default: false.
   */
  putDomainPartByProxy(params = {}, options = {}) {
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
    return this.request('PutDomainPartByProxy', params, options);
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
   * @param {String} Filter - filter. optional.
   * @param {String} Data - data. required.
   * @param {Boolean} Compressed - compressed. optional. default: false.
   */
  putMeasureDataByProxy(params = {}, options = {}) {
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
    return this.request('PutMeasureDataByProxy', params, options);
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

  /**
   * @param {String} DomainCode - domainCode. required.
   * @param {String} DataType - dimensionType. required.
   * @param {String} ApiType - flagType. required.
   * @param {String} Data - data. required.
   * @param {Boolean} Compressed - compressed. optional. default: false.
   */
  putReadyFlagByProxy(params = {}, options = {}) {
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
    return this.request('PutReadyFlagByProxy', params, options);
  }

}

module.exports = Client;
