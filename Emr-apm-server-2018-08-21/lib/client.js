
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-21';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} EventCode - eventCode. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. optional.
   * @param {Integer} StartTimestampSec - startTimestampSec. required.
   * @param {Integer} EndTimestampSec - endTimestampSec. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} EventSourceType - eventSourceType. optional.
   * @param {String} EventType - eventType. required.
   * @param {String} EventLevel - eventLevel. optional. default: CRITICAL.
   * @param {String} AlertEventVisibility - alertEventVisibility. optional. default: USER_ADN_ADMIN.
   */
  countEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestampSec')) {
      throw new TypeError('parameter "StartTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestampSec')) {
      throw new TypeError('parameter "EndTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    return this.request('CountEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} EventCode - eventCode. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ComponentName - componentName. required.
   * @param {String} Level - level. required.
   * @param {String} Visibility - visibility. required.
   * @param {String} EventFrom - eventFrom. required.
   * @param {String} Category - category. optional.
   * @param {String} Description - description. required.
   * @param {String} Recommendation - recommendation. required.
   * @param {String} ServicelogLogstore - servicelogLogstore. optional.
   * @param {String} QueryString - queryString. optional.
   * @param {String} Reason - reason. required.
   */
  createEventConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventCode')) {
      throw new TypeError('parameter "EventCode" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ComponentName')) {
      throw new TypeError('parameter "ComponentName" is required');
    }

    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    if (!hasOwnProperty(params, 'Visibility')) {
      throw new TypeError('parameter "Visibility" is required');
    }

    if (!hasOwnProperty(params, 'EventFrom')) {
      throw new TypeError('parameter "EventFrom" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Recommendation')) {
      throw new TypeError('parameter "Recommendation" is required');
    }

    if (!hasOwnProperty(params, 'Reason')) {
      throw new TypeError('parameter "Reason" is required');
    }

    return this.request('CreateEventConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} MetricKey - metricKey. required.
   * @param {String} MetricUnit - metricUnit. optional.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ComponentName - componentName. required.
   * @param {String} Category - category. optional.
   * @param {String} Description - description. required.
   */
  createMetricConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MetricKey')) {
      throw new TypeError('parameter "MetricKey" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ComponentName')) {
      throw new TypeError('parameter "ComponentName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateMetricConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} EventCode - eventCode. required.
   */
  deleteEventConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventCode')) {
      throw new TypeError('parameter "EventCode" is required');
    }

    return this.request('DeleteEventConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} MetricKey - metricKey. required.
   */
  deleteMetricConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MetricKey')) {
      throw new TypeError('parameter "MetricKey" is required');
    }

    return this.request('DeleteMetricConfig', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} AppId - appId. required.
   */
  getApplicationDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetApplicationDetail', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} UserId - userId. required.
   */
  getJobStatisticsInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetJobStatisticsInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} MetricKey - metricKey. required.
   */
  getMetricConfigByKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MetricKey')) {
      throw new TypeError('parameter "MetricKey" is required');
    }

    return this.request('GetMetricConfigByKey', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} UserId - userId. required.
   */
  getUserAlertEventSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetUserAlertEventSummary', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} UserId - userId. required.
   */
  getUserHdfsResourceSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetUserHdfsResourceSummary', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} UserId - userId. required.
   */
  getUserYarnResourceSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetUserYarnResourceSummary', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {Long} StartTimeFrom - startTimeFrom. required.
   * @param {Long} StartTimeTo - startTimeTo. required.
   * @param {Long} EndTimeFrom - endTimeFrom. optional.
   * @param {Long} EndTimeTo - endTimeTo. optional.
   * @param {String} ClusterId - clusterId. optional.
   * @param {String} AppId - appId. optional.
   * @param {String} State - state. optional.
   * @param {String} FinalStatus - finalStatus. optional.
   * @param {String} User - user. optional.
   * @param {String} Queue - queue. optional.
   * @param {String} JobType - jobType. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} DiagnosticResult - diagnosticResult. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Name - name. optional.
   */
  listApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeFrom')) {
      throw new TypeError('parameter "StartTimeFrom" is required');
    }

    if (!hasOwnProperty(params, 'StartTimeTo')) {
      throw new TypeError('parameter "StartTimeTo" is required');
    }

    return this.request('ListApplication', params, options);
  }

  /**
   * @param {String} RegionId - regionId. optional.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} EventCode - eventCode. optional.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. optional.
   * @param {Integer} StartTimestampSec - startTimestampSec. required.
   * @param {Integer} EndTimestampSec - endTimestampSec. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} EventSourceType - eventSourceType. optional.
   * @param {String} EventType - eventType. required.
   * @param {String} EventLevel - eventLevel. optional. default: CRITICAL.
   * @param {String} AlertEventVisibility - alertEventVisibility. optional. default: USER_ADN_ADMIN.
   */
  listEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestampSec')) {
      throw new TypeError('parameter "StartTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestampSec')) {
      throw new TypeError('parameter "EndTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    return this.request('ListEvent', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} Category - category. optional.
   * @param {String} EventCode - eventCode. optional.
   * @param {String} Level - level. optional.
   * @param {String} Visibility - visibility. optional.
   * @param {String} EventFrom - eventFrom. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  listEventConfig(params = {}, options = {}) {
    return this.request('ListEventConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} EventCodes - eventCodes. required.
   */
  listEventConfigByCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventCodes')) {
      throw new TypeError('parameter "EventCodes" is required');
    }

    return this.request('ListEventConfigByCode', params, options);
  }

  /**
   * @param {String} AppId - appId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserId - userId. required.
   * @param {String} JobType - jobType. optional.
   * @param {String} FinalStatus - finalStatus. optional.
   * @param {String} BizId - bizId. optional.
   * @param {String} HeuristicStatus - heuristicStatus. optional.
   * @param {String} Status - status. optional.
   * @param {Long} StartTimeBegin - startTimeBegin. optional.
   * @param {Long} StartTimeEnd - startTimeEnd. optional.
   * @param {Long} EndTimeBegin - endTimeBegin. optional.
   * @param {Long} EndTimeEnd - endTimeEnd. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Duration - duration. optional.
   * @param {String} HeuristicDetailsArgs - heuristicDetailsArgs. optional.
   * @param {String} HeuristicResultType - heuristicResultType. optional.
   * @param {String} Value - value. optional.
   * @param {String} HeuristicSeverity - heuristicSeverity. optional.
   * @param {String} HeuristicName - heuristicName. optional.
   * @param {String} JobSeverity - jobSeverity. optional.
   * @param {String} JobScore - jobScore. optional.
   * @param {String} HeuristicScore - heuristicScore. optional.
   * @param {String} QueueName - queueName. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} EventId - eventId. optional.
   */
  listJobHeuristicResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListJobHeuristicResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} UniqueId - uniqueId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  listJobHeuristicResultDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UniqueId')) {
      throw new TypeError('parameter "UniqueId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListJobHeuristicResultDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} Category - category. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  listMetricConfig(params = {}, options = {}) {
    return this.request('ListMetricConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} MetricName - metricName. required.
   * @param {Integer} StartTimestampSec - startTimestampSec. required.
   * @param {Integer} EndTimestampSec - endTimestampSec. required.
   * @param {String} ClusterId - clusterId. required.
   * @param {String} HostName - hostName. optional.
   */
  listMetricDatapoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MetricName')) {
      throw new TypeError('parameter "MetricName" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestampSec')) {
      throw new TypeError('parameter "StartTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestampSec')) {
      throw new TypeError('parameter "EndTimestampSec" is required');
    }

    if (!hasOwnProperty(params, 'ClusterId')) {
      throw new TypeError('parameter "ClusterId" is required');
    }

    return this.request('ListMetricDatapoint', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Payload - payload. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterBizId - clusterBizId. optional.
   */
  querySnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('QuerySnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Payload - payload. required.
   * @param {String} UserId - userId. required.
   * @param {String} ClusterBizId - clusterBizId. optional.
   */
  queryTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Payload')) {
      throw new TypeError('parameter "Payload" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('QueryTrend', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} Id - id. required.
   * @param {String} ServiceName - serviceName. required.
   * @param {String} ComponentName - componentName. required.
   * @param {String} Level - level. required.
   * @param {String} Visibility - visibility. required.
   * @param {String} EventFrom - eventFrom. required.
   * @param {String} Category - category. optional.
   * @param {String} Description - description. required.
   * @param {String} Recommendation - recommendation. required.
   * @param {String} ServicelogLogstore - servicelogLogstore. optional.
   * @param {String} QueryString - queryString. optional.
   * @param {String} Reason - reason. required.
   */
  updateEventConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'ComponentName')) {
      throw new TypeError('parameter "ComponentName" is required');
    }

    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    if (!hasOwnProperty(params, 'Visibility')) {
      throw new TypeError('parameter "Visibility" is required');
    }

    if (!hasOwnProperty(params, 'EventFrom')) {
      throw new TypeError('parameter "EventFrom" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Recommendation')) {
      throw new TypeError('parameter "Recommendation" is required');
    }

    if (!hasOwnProperty(params, 'Reason')) {
      throw new TypeError('parameter "Reason" is required');
    }

    return this.request('UpdateEventConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} ResourceOwnerId - ResourceOwnerId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {Long} Id - id. required.
   * @param {String} MetricUnit - metricUnit. optional.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} ComponentName - componentName. optional.
   * @param {String} Category - category. optional.
   * @param {String} Description - description. optional.
   */
  updateMetricConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateMetricConfig', params, options);
  }

}

module.exports = Client;
