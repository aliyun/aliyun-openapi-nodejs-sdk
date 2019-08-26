
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-08-08';
    super(config);
  }

  /**
   * @param {String} ContactName - name. optional.
   * @param {String} PhoneNum - phone. optional.
   * @param {String} Email - email. optional.
   * @param {String} DingRobotWebhookUrl - dingRobot. optional.
   * @param {Boolean} SystemNoc - systemNoc. optional.
   * @param {String} RegionId - regionId. required.
   */
  createAlertContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateAlertContact', params, options);
  }

  /**
   * @param {String} ContactGroupName - name. required.
   * @param {String} ContactIds - ids. optional.
   * @param {String} RegionId - regionId. required.
   */
  createAlertContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactGroupName')) {
      throw new TypeError('parameter "ContactGroupName" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateAlertContactGroup', params, options);
  }

  /**
   * @param {String} RetcodeAppName - siteName. required.
   * @param {String} RetcodeAppType - siteType. required.
   * @param {String} RegionId - regionId. required.
   */
  createRetcodeApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RetcodeAppName')) {
      throw new TypeError('parameter "RetcodeAppName" is required');
    }

    if (!hasOwnProperty(params, 'RetcodeAppType')) {
      throw new TypeError('parameter "RetcodeAppType" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateRetcodeApp', params, options);
  }

  /**
   * @param {String} AppId - appId. required.
   * @param {String} RegionId - regionId. required.
   */
  deleteRetcodeApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteRetcodeApp', params, options);
  }

  /**
   * @param {String} TemplateAlertId - templateAlertId. optional.
   * @param {String} Pids - pids. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ContactGroupIds - contactGroupIds. optional.
   * @param {Boolean} IsAutoStart - isAutoStart. optional.
   * @param {String} TemplageAlertConfig - templageAlertConfig. optional.
   */
  importAppAlertRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pids')) {
      throw new TypeError('parameter "Pids" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ImportAppAlertRules', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} RegionId - regionId. required.
   */
  listRetcodeApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListRetcodeApps', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   */
  listTraceApps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListTraceApps', params, options);
  }

  /**
   * @param {Long} DatasetId - datasetId. required.
   * @param {Integer} IntervalInSec - intervalInSec. required.
   * @param {String} DateStr - dateStr. optional.
   * @param {Long} MinTime - minTime. required.
   * @param {Long} MaxTime - maxTime. required.
   * @param {Boolean} IsDrillDown - isDrillDown. optional.
   * @param {String} OrderByKey - orderByKey. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {Boolean} ReduceTail - reduceTail. optional.
   * @param {Boolean} HungryMode - hungryMode. optional.
   * @param {RepeatList} Measures - measures. optional.
   * @param {RepeatList} Dimensions - Dimensions. optional.
   * @param {RepeatList} RequiredDims - requiredDims. optional.
   * @param {RepeatList} OptionalDims - optionalDims. optional.
   * @param {String} RegionId - regionId. optional.
   */
  queryDataset(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DatasetId')) {
      throw new TypeError('parameter "DatasetId" is required');
    }

    if (!hasOwnProperty(params, 'IntervalInSec')) {
      throw new TypeError('parameter "IntervalInSec" is required');
    }

    if (!hasOwnProperty(params, 'MinTime')) {
      throw new TypeError('parameter "MinTime" is required');
    }

    if (!hasOwnProperty(params, 'MaxTime')) {
      throw new TypeError('parameter "MaxTime" is required');
    }

    return this.request('QueryDataset', params, options);
  }

  /**
   * @param {Integer} IntervalInSec - intervalInSec. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} EndTime - endTime. required.
   * @param {String} OrderBy - orderBy. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {RepeatList} Filters - filters. optional.
   * @param {RepeatList} Dimensions - dimensions. optional.
   * @param {String} Metric - metric. required.
   * @param {RepeatList} Measures - measures. required.
   * @param {String} Order - order. optional.
   * @param {String} RegionId - regionId. optional.
   */
  queryMetric(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Metric')) {
      throw new TypeError('parameter "Metric" is required');
    }

    if (!hasOwnProperty(params, 'Measures')) {
      throw new TypeError('parameter "Measures" is required');
    }

    return this.request('QueryMetric', params, options);
  }

  /**
   * @param {String} ContactName - name. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} Email - email. optional.
   * @param {String} CurrentPage - currentPage. required.
   * @param {String} PageSize - pageSize. required.
   * @param {String} RegionId - regionId. required.
   */
  searchAlertContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('SearchAlertContact', params, options);
  }

  /**
   * @param {String} ContactGroupName - name. optional.
   * @param {String} RegionId - regionId. required.
   */
  searchAlertContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('SearchAlertContactGroup', params, options);
  }

  /**
   * @param {String} RetcodeAppName - appName. optional.
   * @param {Integer} PageNumber - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} RegionId - regionId. required.
   */
  searchRetcodeAppByPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('SearchRetcodeAppByPage', params, options);
  }

  /**
   * @param {String} TraceAppName - appName. optional.
   * @param {String} RegionId - regionId. required.
   */
  searchTraceAppByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('SearchTraceAppByName', params, options);
  }

  /**
   * @param {String} TraceAppName - appName. optional.
   * @param {Integer} PageNumber - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} RegionId - regionId. required.
   */
  searchTraceAppByPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('SearchTraceAppByPage', params, options);
  }

}

module.exports = Client;
