
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-01';
    super(config);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneName - zoneName. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} ProxyPattern - proxyPattern. optional.
   */
  addZone(params = {}, options = {}) {
    return this.request('AddZone', params, options);
  }

  /**
   * @param {String} ZoneId - zoneId. required.
   * @param {String} Lang - lang. optional.
   * @param {String} Rr - rr. required.
   * @param {String} Type - type. required.
   * @param {Integer} Ttl - ttl. optional. default: 60.
   * @param {Integer} Priority - priority. optional.
   * @param {String} Value - value. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  addZoneRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'Rr')) {
      throw new TypeError('parameter "Rr" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('AddZoneRecord', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {RepeatList} Vpcs - vpcList. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  bindZoneVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('BindZoneVpc', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneName - zoneName. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  checkZoneName(params = {}, options = {}) {
    return this.request('CheckZoneName', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  deleteZone(params = {}, options = {}) {
    return this.request('DeleteZone', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {Long} RecordId - recordId. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  deleteZoneRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DeleteZoneRecord', params, options);
  }

  /**
   * @param {String} Keyword - keyword. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Long} StartTimestamp - startTime. optional.
   * @param {Long} EndTimestamp - endTime. optional.
   * @param {String} EntityType - entityType. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeChangeLogs(params = {}, options = {}) {
    return this.request('DescribeChangeLogs', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {Integer} PageSize - pageSize. optional. default: 100.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   */
  describeImportResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeImportResult', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} Rr - rr. required.
   */
  describeRecordStatisticsHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'Rr')) {
      throw new TypeError('parameter "Rr" is required');
    }

    return this.request('DescribeRecordStatisticsHistory', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. optional.
   * @param {String} OrderBy - orderBy. optional. default: COUNT.
   * @param {String} Direction - direction. optional. default: DESC.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} SearchMode - searchMode. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Long} Threshold - threshold. optional.
   */
  describeRecordStatisticsSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('DescribeRecordStatisticsSummary', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} AcceptLanguage - acceptLanguage. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {Long} StartTimestamp - startTime. required.
   * @param {Long} EndTimestamp - endTime. required.
   */
  describeRequestGraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    return this.request('DescribeRequestGraph', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeStatisticSummary(params = {}, options = {}) {
    return this.request('DescribeStatisticSummary', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeUserServiceStatus(params = {}, options = {}) {
    return this.request('DescribeUserServiceStatus', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeZoneInfo(params = {}, options = {}) {
    return this.request('DescribeZoneInfo', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} SearchMode - searchMode. optional.
   */
  describeZoneRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('DescribeZoneRecords', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. optional.
   * @param {String} ZoneId - zoneId. required.
   */
  describeZoneStatisticsHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('DescribeZoneStatisticsHistory', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. optional.
   * @param {String} OrderBy - orderBy. optional. default: COUNT.
   * @param {String} Direction - direction. optional. default: DESC.
   * @param {String} SearchMode - searchMode. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Long} Threshold - threshold. optional.
   */
  describeZoneStatisticsSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    return this.request('DescribeZoneStatisticsSummary', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeZoneVpcTree(params = {}, options = {}) {
    return this.request('DescribeZoneVpcTree', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {String} Keyword - keyword. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} SearchMode - searchMode. optional.
   * @param {String} QueryRegionId - queryRegionId. optional.
   * @param {String} QueryVpcId - queryVpcId. optional.
   */
  describeZones(params = {}, options = {}) {
    return this.request('DescribeZones', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} EcsRegionId - regionId. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  importEcsHostName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'EcsRegionId')) {
      throw new TypeError('parameter "EcsRegionId" is required');
    }

    return this.request('ImportEcsHostName', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} FileName - filePath. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  importZoneRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('ImportZoneRecord', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} ProxyPattern - proxyPattern. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  setProxyPattern(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('SetProxyPattern', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {Long} RecordId - recordId. required.
   * @param {String} Status - status. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  setZoneRecordStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetZoneRecordStatus', params, options);
  }

  /**
   * @param {String} Rr - rr. required.
   * @param {String} Lang - lang. optional.
   * @param {Long} RecordId - recordId. required.
   * @param {String} Type - type. required.
   * @param {Integer} Ttl - ttl. optional. default: 60.
   * @param {Integer} Priority - priority. optional.
   * @param {String} Value - value. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  updateZoneRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Rr')) {
      throw new TypeError('parameter "Rr" is required');
    }

    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('UpdateZoneRecord', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} Remark - remark. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  updateZoneRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('UpdateZoneRemark', params, options);
  }

}

module.exports = Client;
