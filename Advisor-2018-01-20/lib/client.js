
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-20';
    super(config);
  }

  /**
   */
  activateAdvisorUser(params = {}, options = {}) {
    return this.request('ActivateAdvisorUser', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   */
  buildTopology(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('BuildTopology', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} CheckSourceIp - checkSourceIp. required.
   * @param {String} CheckDestinationIp - checkDestinationIp. required.
   */
  checkConnectivity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckSourceIp')) {
      throw new TypeError('parameter "CheckSourceIp" is required');
    }

    if (!hasOwnProperty(params, 'CheckDestinationIp')) {
      throw new TypeError('parameter "CheckDestinationIp" is required');
    }

    return this.request('CheckConnectivity', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} CheckSource - checkSource. required.
   * @param {String} CheckDestination - checkDestination. required.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  checkConnectivityNetwork(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckSource')) {
      throw new TypeError('parameter "CheckSource" is required');
    }

    if (!hasOwnProperty(params, 'CheckDestination')) {
      throw new TypeError('parameter "CheckDestination" is required');
    }

    return this.request('CheckConnectivityNetwork', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} CheckSource - checkSource. required.
   * @param {String} CheckDestination - checkDestination. required.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  checkConnectivitySecurityGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckSource')) {
      throw new TypeError('parameter "CheckSource" is required');
    }

    if (!hasOwnProperty(params, 'CheckDestination')) {
      throw new TypeError('parameter "CheckDestination" is required');
    }

    return this.request('CheckConnectivitySecurityGroup', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} CheckSource - checkSource. required.
   * @param {String} CheckDestination - checkDestination. required.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  checkConnectivitySecurityPun(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckSource')) {
      throw new TypeError('parameter "CheckSource" is required');
    }

    if (!hasOwnProperty(params, 'CheckDestination')) {
      throw new TypeError('parameter "CheckDestination" is required');
    }

    return this.request('CheckConnectivitySecurityPun', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} CheckSource - checkSource. required.
   * @param {String} CheckDestination - checkDestination. required.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  checkConnectivityStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckSource')) {
      throw new TypeError('parameter "CheckSource" is required');
    }

    if (!hasOwnProperty(params, 'CheckDestination')) {
      throw new TypeError('parameter "CheckDestination" is required');
    }

    return this.request('CheckConnectivityStatus', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} CheckSource - checkSource. required.
   * @param {String} CheckDestination - checkDestination. required.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  checkConnectivityWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CheckSource')) {
      throw new TypeError('parameter "CheckSource" is required');
    }

    if (!hasOwnProperty(params, 'CheckDestination')) {
      throw new TypeError('parameter "CheckDestination" is required');
    }

    return this.request('CheckConnectivityWhiteList', params, options);
  }

  /**
   * @param {String} Country - country. required.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - Message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  checkResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('CheckResource', params, options);
  }

  /**
   * @param {String} ResourceId - resourceId. required.
   * @param {String} Language - language. optional.
   * @param {String} Product - product. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   * @param {String} IndicatorKeys - indicatorKeys. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  describeAdviceDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    return this.request('DescribeAdviceDetails', params, options);
  }

  /**
   * @param {Long} AdviceId - adviceId. optional.
   * @param {String} CheckId - checkId. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} Language - language. optional.
   * @param {Long} ExcludeAdviceId - excludeAdvId. optional.
   * @param {String} Product - product. optional.
   * @param {String} Region - region. optional.
   * @param {String} FilterType - filterType. optional.
   * @param {String} FilterValue - filterValue. optional.
   * @param {Long} ClientUid - clientAliyunId. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  describeAdvices(params = {}, options = {}) {
    return this.request('DescribeAdvices', params, options);
  }

  /**
   * @param {String} CheckId - checkId. optional.
   * @param {String} Language - language. optional.
   * @param {String} Product - product. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  describeAdvisorChecks(params = {}, options = {}) {
    return this.request('DescribeAdvisorChecks', params, options);
  }

  /**
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} Language - language. optional.
   * @param {String} Product - product. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  describeAdvisorResources(params = {}, options = {}) {
    return this.request('DescribeAdvisorResources', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {Long} ClientUid - clientAliyunId. optional.
   */
  describeAdvisorUser(params = {}, options = {}) {
    return this.request('DescribeAdvisorUser', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} Category - categoryId. optional.
   * @param {String} CheckId - checkId. optional.
   * @param {String} FilterType - filterType. optional.
   * @param {String} FilterValue - filterValue. optional.
   * @param {String} Region - region. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  describeCheckResultOverview(params = {}, options = {}) {
    return this.request('DescribeCheckResultOverview', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} Category - categoryId. optional.
   * @param {String} CheckId - checkId. optional.
   * @param {String} FilterType - filterType. optional.
   * @param {String} FilterValue - filterValue. optional.
   * @param {String} Region - region. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  describeCheckResults(params = {}, options = {}) {
    return this.request('DescribeCheckResults', params, options);
  }

  /**
   * @param {String} Language - language. optional.
   * @param {String} Product - product. optional.
   * @param {String} Region - region. optional.
   */
  describeProductTags(params = {}, options = {}) {
    return this.request('DescribeProductTags', params, options);
  }

  /**
   * @param {String} Category - categoryId. optional.
   * @param {String} Language - language. optional.
   * @param {String} FilterType - filterType. optional.
   * @param {String} FilterValue - filterValue. optional.
   * @param {String} Region - region. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  describeResourceDistribution(params = {}, options = {}) {
    return this.request('DescribeResourceDistribution', params, options);
  }

  /**
   * @param {String} CheckId - checkId. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} Language - language. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  describeSuppressedChecks(params = {}, options = {}) {
    return this.request('DescribeSuppressedChecks', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  getDomainList(params = {}, options = {}) {
    return this.request('GetDomainList', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  getResourceTopology(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetResourceTopology', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Keyword - keyword. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  getSubDomainList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('GetSubDomainList', params, options);
  }

  /**
   * @param {String} Category - categoryId. optional.
   * @param {String} CheckId - checkId. optional.
   * @param {String} Language - language. optional.
   * @param {String} FilterType - filterType. optional.
   * @param {String} FilterValue - filterValue. optional.
   * @param {String} Region - region. optional.
   * @param {String} ReportType - reportType. optional.
   * @param {String} TimeZone - timeZone. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  getUserReport(params = {}, options = {}) {
    return this.request('GetUserReport', params, options);
  }

  /**
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  getUserReportSubscription(params = {}, options = {}) {
    return this.request('GetUserReportSubscription', params, options);
  }

  /**
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - Message. optional.
   */
  logicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('LogicalDeleteResource', params, options);
  }

  /**
   * @param {String} Bid - bid. required.
   * @param {String} Country - country. required.
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {Long} Hid - hid. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - Message. optional.
   */
  physicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('PhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} CheckId - checkId. optional.
   * @param {String} Product - product. optional.
   * @param {String} Language - language. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  refreshAdvisorCheck(params = {}, options = {}) {
    return this.request('RefreshAdvisorCheck', params, options);
  }

  /**
   * @param {String} Product - product. required.
   * @param {String} ResourceId - resourceId. required.
   */
  refreshAdvisorResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Product')) {
      throw new TypeError('parameter "Product" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    return this.request('RefreshAdvisorResource', params, options);
  }

  /**
   * @param {String} CheckId - checkId. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {String} Operation - operation. required.
   * @param {String} Language - language. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  setAdvisorCheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    return this.request('SetAdvisorCheck', params, options);
  }

  /**
   * @param {Long} ToAliyunId - toAliyunId. optional.
   */
  setUserId(params = {}, options = {}) {
    return this.request('SetUserId', params, options);
  }

  /**
   * @param {String} Emails - emails. optional.
   * @param {String} Mobile - mobile. optional.
   * @param {String} Language - language. optional.
   * @param {String} TimeZone - timeZone. optional.
   * @param {String} SendEmailFrequency - sendEmailFrequency. optional.
   * @param {String} AccessKeyId - stsAccessKeyId. optional.
   */
  setUserReportSubscription(params = {}, options = {}) {
    return this.request('SetUserReportSubscription', params, options);
  }

}

module.exports = Client;
