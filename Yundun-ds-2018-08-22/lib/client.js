
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-22';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} ResourceType - resourceType. required.
   * @param {String} DataLimitList - dataLimitListJson. optional.
   */
  createDataLimit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    return this.request('CreateDataLimit', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} RuleItem - ruleItemList. optional.
   * @param {Integer} CustomType - customType. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {Integer} Category - category. required.
   * @param {Long} RiskLevelId - riskLevelId. optional.
   * @param {Integer} RiskLevel - riskLevel. optional.
   * @param {Integer} State - status. required.
   */
  createRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomType')) {
      throw new TypeError('parameter "CustomType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    return this.request('CreateRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} Hour - hh. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {Integer} CurrentPage - page. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} BucketName - bucketName. optional.
   * @param {Long} FileId - ossFileId. optional.
   * @param {Long} CurrentDate - currentDate. optional.
   */
  describeActionStatsOfEntity(params = {}, options = {}) {
    return this.request('DescribeActionStatsOfEntity', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {Integer} CurrentPage - page. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {Long} FileId - ossFileId. optional.
   * @param {Long} CurrentDate - currentDate. optional.
   */
  describeActionStatsOfEntityUser(params = {}, options = {}) {
    return this.request('DescribeActionStatsOfEntityUser', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} Hour - hh. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {Integer} CurrentPage - page. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {Long} Requester - requester. optional.
   * @param {Long} CurrentDate - currentDate. optional.
   */
  describeActionStatsOfUser(params = {}, options = {}) {
    return this.request('DescribeActionStatsOfUser', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AlertType - alertType. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {Integer} CurrentPage - page. optional.
   */
  describeAlertInfos(params = {}, options = {}) {
    return this.request('DescribeAlertInfos', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAlertTypes(params = {}, options = {}) {
    return this.request('DescribeAlertTypes', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAuth(params = {}, options = {}) {
    return this.request('DescribeAuth', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {String} ResourceTypeName - resourceTypeName. optional.
   */
  describeDailyAccess(params = {}, options = {}) {
    return this.request('DescribeDailyAccess', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {String} ResourceTypeName - resourceTypeName. optional.
   */
  describeDailyAlert(params = {}, options = {}) {
    return this.request('DescribeDailyAlert', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} ResourceType - resourceType. optional.
   */
  describeDataLimitSet(params = {}, options = {}) {
    return this.request('DescribeDataLimitSet', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} CustomType - customType. optional.
   * @param {Integer} State - status. optional.
   */
  describeDocCategorys(params = {}, options = {}) {
    return this.request('DescribeDocCategorys', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} StartTime - startTimeStr. optional.
   * @param {Long} EndTime - endTimeStr. optional.
   * @param {Integer} GroupType - groupType. optional.
   */
  describeFileCount(params = {}, options = {}) {
    return this.request('DescribeFileCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. required.
   */
  describeFileDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeFileDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} RiskLevel - riskLevel. optional.
   * @param {Long} DocType - docType. optional.
   * @param {Long} StartTime - startTimeStr. optional.
   * @param {Long} EndTime - endTimeStr. optional.
   */
  describeFileTotal(params = {}, options = {}) {
    return this.request('DescribeFileTotal', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} RiskLevel - riskLevel. optional.
   * @param {Long} DocType - docType. optional.
   * @param {Long} StartTime - startTimeStr. optional.
   * @param {Long} EndTime - endTimeStr. optional.
   * @param {String} FileName - fileName. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {Integer} CurrentPage - page. optional.
   */
  describeFiles(params = {}, options = {}) {
    return this.request('DescribeFiles', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} CustomType - customType. optional.
   * @param {Integer} State - status. optional.
   */
  describeRiskLevels(params = {}, options = {}) {
    return this.request('DescribeRiskLevels', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} RuleId - ruleId. required.
   */
  describeRuleItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('DescribeRuleItems', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {Integer} CurrentPage - page. optional.
   * @param {Integer} CustomType - customType. optional.
   * @param {Integer} Category - category. optional.
   * @param {String} Name - name. optional.
   */
  describeRules(params = {}, options = {}) {
    return this.request('DescribeRules', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} CustomType - customType. optional.
   * @param {Integer} State - status. optional.
   */
  describeSensitiveFields(params = {}, options = {}) {
    return this.request('DescribeSensitiveFields', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {String} ResourceTypeName - resourceTypeName. optional.
   */
  describeTopAccess(params = {}, options = {}) {
    return this.request('DescribeTopAccess', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} PageSize - rows. optional.
   * @param {String} ResourceTypeName - resourceTypeName. optional.
   */
  describeTopUserAccess(params = {}, options = {}) {
    return this.request('DescribeTopUserAccess', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUser(params = {}, options = {}) {
    return this.request('DescribeUser', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUserStatus(params = {}, options = {}) {
    return this.request('DescribeUserStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} RuleItem - ruleItemList. optional.
   * @param {Integer} CustomType - customType. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {Integer} Category - category. required.
   * @param {Long} RiskLevelId - riskLevelId. optional.
   * @param {Integer} RiskLevel - riskLevel. optional.
   * @param {Integer} State - status. required.
   */
  modifyRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomType')) {
      throw new TypeError('parameter "CustomType" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    return this.request('ModifyRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. required.
   * @param {Integer} State - status. required.
   * @param {Long} RuleId - ruleId. required.
   */
  modifyRuleItemStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    if (!hasOwnProperty(params, 'RuleId')) {
      throw new TypeError('parameter "RuleId" is required');
    }

    return this.request('ModifyRuleItemStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Id - id. required.
   * @param {Integer} State - status. required.
   */
  modifyRuleStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    return this.request('ModifyRuleStatus', params, options);
  }

}

module.exports = Client;
