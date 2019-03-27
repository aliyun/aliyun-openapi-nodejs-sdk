
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-20';
    super(config);
  }

  /**
   * @param {RepeatList} Dimensions - dimensions. optional.
   * @param {Integer} IntervalInSec - intervalInSec. required.
   * @param {String} DateStr - dateStr. optional.
   * @param {Long} MinTime - minTime. required.
   * @param {Long} MaxTime - maxTime. required.
   * @param {Boolean} IsDrillDown - isDrillDown. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {RepeatList} Measures - measures. optional.
   * @param {String} OrderByKey - orderByKey. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {Boolean} ReduceTail - reduceTail. optional.
   * @param {Boolean} HungryMode - hungryMode. optional.
   * @param {RepeatList} RequiredDims - requiredDims. optional.
   * @param {Long} DatasetId - datasetId. required.
   * @param {RepeatList} OptionalDims - optionalDims. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} RegionId - regionId. optional.
   */
  aRMSQueryDataSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntervalInSec')) {
      throw new TypeError('parameter "IntervalInSec" is required');
    }

    if (!hasOwnProperty(params, 'MinTime')) {
      throw new TypeError('parameter "MinTime" is required');
    }

    if (!hasOwnProperty(params, 'MaxTime')) {
      throw new TypeError('parameter "MaxTime" is required');
    }

    if (!hasOwnProperty(params, 'DatasetId')) {
      throw new TypeError('parameter "DatasetId" is required');
    }

    return this.request('ARMSQueryDataSet', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {String} RegionId - regionId. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    return this.request('doCheckResource', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {String} RegionId - regionId. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    return this.request('doLogicalDeleteResource', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   * @param {String} RegionId - regionId. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    return this.request('doPhysicalDeleteResource', params, options);
  }

}

module.exports = Client;
