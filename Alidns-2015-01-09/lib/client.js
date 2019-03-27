
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-01-09';
    super(config);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} GroupId - groupId. optional.
   */
  addBatchDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('AddBatchDomain', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} DomainName - domainName. optional.
   */
  addBatchDomainFromFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('AddBatchDomainFromFile', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Rr - rr. optional.
   * @param {String} Type - type. optional.
   * @param {String} Line - line. optional.
   * @param {String} Value - value. optional.
   * @param {Integer} Priority - priority. optional.
   * @param {Integer} Ttl - ttl. optional.
   */
  addBatchRr(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('AddBatchRr', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   * @param {Long} TemplateId - templateId. required.
   */
  addBatchTempDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('AddBatchTempDomains', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} LineName - lineName. required.
   * @param {RepeatList} IpSegment - ipSegments. required.
   */
  addCustomLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'LineName')) {
      throw new TypeError('parameter "LineName" is required');
    }

    if (!hasOwnProperty(params, 'IpSegment')) {
      throw new TypeError('parameter "IpSegment" is required');
    }

    return this.request('AddCustomLine', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Address - address. required.
   */
  addDnsMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    return this.request('AddDnsMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TemplateName - templateName. required.
   */
  addDnsTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateName')) {
      throw new TypeError('parameter "TemplateName" is required');
    }

    return this.request('AddDnsTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} DnsTemplateId - templateId. required.
   * @param {String} RR - rr. required.
   * @param {String} Type - type. required.
   * @param {String} Value - value. required.
   * @param {Long} Priority - priority. optional.
   */
  addDnsTemplateRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DnsTemplateId')) {
      throw new TypeError('parameter "DnsTemplateId" is required');
    }

    if (!hasOwnProperty(params, 'RR')) {
      throw new TypeError('parameter "RR" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('AddDnsTemplateRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} GroupId - groupId. optional.
   */
  addDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('AddDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} GroupName - groupName. required.
   */
  addDomainGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('AddDomainGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} RR - rr. required.
   * @param {String} Type - type. required.
   * @param {String} Value - value. required.
   * @param {Long} TTL - ttl. optional. default: 600.
   * @param {Long} Priority - priority. optional.
   * @param {String} Line - line. optional. default: default.
   */
  addDomainRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RR')) {
      throw new TypeError('parameter "RR" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('AddDomainRecord', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StrategyName - strategyName. required.
   * @param {String} DefaultAddrPoolId - defaultAddrPoolId. required.
   * @param {String} FailoverAddrPoolId - failoverAddrPoolId. required.
   * @param {String} AccessLines - accessLines. required.
   */
  addGtmAccessStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyName')) {
      throw new TypeError('parameter "StrategyName" is required');
    }

    if (!hasOwnProperty(params, 'DefaultAddrPoolId')) {
      throw new TypeError('parameter "DefaultAddrPoolId" is required');
    }

    if (!hasOwnProperty(params, 'FailoverAddrPoolId')) {
      throw new TypeError('parameter "FailoverAddrPoolId" is required');
    }

    if (!hasOwnProperty(params, 'AccessLines')) {
      throw new TypeError('parameter "AccessLines" is required');
    }

    return this.request('AddGtmAccessStrategy', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   * @param {Integer} MinAvailableAddrNum - minAvailableAddrNum. required.
   * @param {RepeatList} Addr - poolAddrList. required.
   */
  addGtmAddressPool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'MinAvailableAddrNum')) {
      throw new TypeError('parameter "MinAvailableAddrNum" is required');
    }

    if (!hasOwnProperty(params, 'Addr')) {
      throw new TypeError('parameter "Addr" is required');
    }

    return this.request('AddGtmAddressPool', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AddrPoolId - addrPoolId. required.
   * @param {String} Name - name. required.
   * @param {String} ProtocolType - protocol. required.
   * @param {Integer} Interval - interval. required.
   * @param {Integer} EvaluationCount - evaluationCount. required.
   * @param {Integer} Timeout - timeout. required.
   * @param {String} MonitorExtendInfo - extend. required.
   * @param {RepeatList} IspCityNode - nodes. required.
   */
  addGtmMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AddrPoolId')) {
      throw new TypeError('parameter "AddrPoolId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolType')) {
      throw new TypeError('parameter "ProtocolType" is required');
    }

    if (!hasOwnProperty(params, 'Interval')) {
      throw new TypeError('parameter "Interval" is required');
    }

    if (!hasOwnProperty(params, 'EvaluationCount')) {
      throw new TypeError('parameter "EvaluationCount" is required');
    }

    if (!hasOwnProperty(params, 'Timeout')) {
      throw new TypeError('parameter "Timeout" is required');
    }

    if (!hasOwnProperty(params, 'MonitorExtendInfo')) {
      throw new TypeError('parameter "MonitorExtendInfo" is required');
    }

    if (!hasOwnProperty(params, 'IspCityNode')) {
      throw new TypeError('parameter "IspCityNode" is required');
    }

    return this.request('AddGtmMonitor', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} GroupName - groupName. required.
   */
  addRecordGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('AddRecordGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} RecordId - recordId. required.
   */
  addSiteMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('AddSiteMonitor', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Boolean} NeedNotice - needNotice. required.
   * @param {RepeatList} TsigConfig - tsigConfigs. required.
   * @param {RepeatList} IpSegment - ipSegments. required.
   */
  addSlaveDnsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NeedNotice')) {
      throw new TypeError('parameter "NeedNotice" is required');
    }

    if (!hasOwnProperty(params, 'TsigConfig')) {
      throw new TypeError('parameter "TsigConfig" is required');
    }

    if (!hasOwnProperty(params, 'IpSegment')) {
      throw new TypeError('parameter "IpSegment" is required');
    }

    return this.request('AddSlaveDnsConfig', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} DomainNames - domainNames. required.
   */
  bindInstanceDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    return this.request('BindInstanceDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} OrderId - orderId. required.
   */
  cancelOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CancelOrder', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} GroupId - groupId. optional.
   */
  changeBatchDomainGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('ChangeBatchDomainGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} GroupId - groupId. optional.
   */
  changeDomainGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ChangeDomainGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NewDomain - newDomain. optional.
   * @param {Boolean} Force - force. optional. default: false.
   */
  changeDomainOfDnsProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ChangeDomainOfDnsProduct', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {String} RecordIdList - recordIdList. required.
   * @param {String} DomainName - domainName. optional.
   */
  changeRecordGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordIdList')) {
      throw new TypeError('parameter "RecordIdList" is required');
    }

    return this.request('ChangeRecordGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} RR - rr. required.
   * @param {String} Type - type. required.
   * @param {String} Value - value. required.
   */
  checkDomainRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RR')) {
      throw new TypeError('parameter "RR" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('CheckDomainRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} SubDomain - subDomain. required.
   */
  closeGslb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubDomain')) {
      throw new TypeError('parameter "SubDomain" is required');
    }

    return this.request('CloseGslb', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} InstanceVersion - version. required.
   * @param {Integer} Month - month. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} Token - token. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceVersion')) {
      throw new TypeError('parameter "InstanceVersion" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} Month - month. required.
   */
  createRenewOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('CreateRenewOrder', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   */
  deleteBatchDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('DeleteBatchDomain', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Rr - rr. optional.
   * @param {String} Value - value. optional.
   * @param {Integer} QueryParamType - queryParamType. optional.
   */
  deleteBatchRr(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('DeleteBatchRr', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} LineIds - lineIds. required.
   */
  deleteCustomLines(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LineIds')) {
      throw new TypeError('parameter "LineIds" is required');
    }

    return this.request('DeleteCustomLines', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   */
  deleteDnsMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DeleteDnsMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} DnsTemplateId - templateId. required.
   */
  deleteDnsTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DnsTemplateId')) {
      throw new TypeError('parameter "DnsTemplateId" is required');
    }

    return this.request('DeleteDnsTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} DnsTemplateRecordId - templateRecordId. required.
   */
  deleteDnsTemplateRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DnsTemplateRecordId')) {
      throw new TypeError('parameter "DnsTemplateRecordId" is required');
    }

    return this.request('DeleteDnsTemplateRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  deleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DeleteDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} GroupId - groupId. required.
   */
  deleteDomainGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteDomainGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} RecordId - rrId. required.
   */
  deleteDomainRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DeleteDomainRecord', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} StrategyId - strategyId. optional.
   */
  deleteGtmAccessStrategy(params = {}, options = {}) {
    return this.request('DeleteGtmAccessStrategy', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AddrPoolId - addrPoolId. required.
   */
  deleteGtmAddressPool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AddrPoolId')) {
      throw new TypeError('parameter "AddrPoolId" is required');
    }

    return this.request('DeleteGtmAddressPool', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} GroupId - groupId. required.
   */
  deleteRecordGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('DeleteRecordGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskIds - taskIds. required.
   */
  deleteSiteMonitors(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskIds')) {
      throw new TypeError('parameter "TaskIds" is required');
    }

    return this.request('DeleteSiteMonitors', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} RR - rr. required.
   * @param {String} Type - type. optional.
   */
  deleteSubDomainRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RR')) {
      throw new TypeError('parameter "RR" is required');
    }

    return this.request('DeleteSubDomainRecords', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   */
  describeBatchLogs(params = {}, options = {}) {
    return this.request('DescribeBatchLogs', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} TaskId - taskId. optional.
   * @param {String} BatchType - batchType. optional.
   */
  describeBatchResultCount(params = {}, options = {}) {
    return this.request('DescribeBatchResultCount', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} TaskId - taskId. optional.
   * @param {String} BatchType - batchType. optional.
   */
  describeBatchResultDetail(params = {}, options = {}) {
    return this.request('DescribeBatchResultDetail', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} TaskId - taskId. required.
   */
  describeBundleRecordTaskResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeBundleRecordTaskResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} TemplateId - templateId. required.
   */
  describeBundleTempDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DescribeBundleTempDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeCanAddMonitorDomainRrs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeCanAddMonitorDomainRrs', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} RR - rr. required.
   */
  describeCanAddMonitorSubDomainInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RR')) {
      throw new TypeError('parameter "RR" is required');
    }

    return this.request('DescribeCanAddMonitorSubDomainInfo', params, options);
  }

  /**
   * @param {Long} LineId - lineId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeCustomLine(params = {}, options = {}) {
    return this.request('DescribeCustomLine', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {String} DomainName - domainName. optional.
   */
  describeCustomLines(params = {}, options = {}) {
    return this.request('DescribeCustomLines', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   */
  describeDNSSLBSubDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDNSSLBSubDomains', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {Boolean} NeedAlarmInfo - needAlarmInfo. optional.
   */
  describeDnsMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeDnsMonitor', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeDnsMonitorAvailableNodes(params = {}, options = {}) {
    return this.request('DescribeDnsMonitorAvailableNodes', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeDnsMonitorTaskConfig(params = {}, options = {}) {
    return this.request('DescribeDnsMonitorTaskConfig', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} Keyword - keyword. optional.
   * @param {String} SearchMode - searchMode. optional.
   */
  describeDnsMonitors(params = {}, options = {}) {
    return this.request('DescribeDnsMonitors', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} VersionCode - versionCode. optional.
   */
  describeDnsProductAttributes(params = {}, options = {}) {
    return this.request('DescribeDnsProductAttributes', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeDnsProductInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDnsProductInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} VersionCode - versionCode. optional.
   */
  describeDnsProductInstances(params = {}, options = {}) {
    return this.request('DescribeDnsProductInstances', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} DnsTemplateId - templateId. required.
   */
  describeDnsTemplateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DnsTemplateId')) {
      throw new TypeError('parameter "DnsTemplateId" is required');
    }

    return this.request('DescribeDnsTemplateInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeDnsTemplates(params = {}, options = {}) {
    return this.request('DescribeDnsTemplates', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Date - date. required.
   */
  describeDomainDnsAttackStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Date')) {
      throw new TypeError('parameter "Date" is required');
    }

    return this.request('DescribeDomainDnsAttackStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} DomainName - domainName. required.
   */
  describeDomainDnsProtectLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainDnsProtectLogs', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   */
  describeDomainDnsStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    return this.request('DescribeDomainDnsStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} KeyWord - domainGroupKeyWord. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   */
  describeDomainGroups(params = {}, options = {}) {
    return this.request('DescribeDomainGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Boolean} NeedDetailAttributes - needDetailAttributes. optional. default: false.
   */
  describeDomainInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainInfo', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} StartDate - startDate. optional.
   * @param {String} endDate - endDate. optional.
   * @param {String} Type - type. optional.
   */
  describeDomainLogs(params = {}, options = {}) {
    return this.request('DescribeDomainLogs', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeDomainNs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainNs', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} RecordId - rrId. required.
   */
  describeDomainRecordInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DescribeDomainRecordInfo', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageNumber - pageNum. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} KeyWord - keyWord. optional.
   * @param {String} RRKeyWord - rrKeyWord. optional.
   * @param {String} TypeKeyWord - typeKeyWord. optional.
   * @param {String} ValueKeyWord - valueKeyWord. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {String} Direction - direction. optional.
   * @param {String} SearchMode - searchMode. optional.
   * @param {Long} GroupId - groupId. optional.
   */
  describeDomainRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainRecords', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. optional.
   */
  describeDomainSoa(params = {}, options = {}) {
    return this.request('DescribeDomainSoa', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. optional.
   * @param {String} OrderBy - orderBy. optional. default: COUNT.
   * @param {String} Direction - direction. optional. default: DESC.
   * @param {String} SearchMode - searchMode. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Long} Threshold - threshold. optional.
   */
  describeDomainStatisticsSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    return this.request('DescribeDomainStatisticsSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} GroupId - groupId. optional.
   */
  describeDomainWhoisInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeDomainWhoisInfo', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} KeyWord - domainKeyWord. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} SearchMode - searchMode. optional.
   */
  describeDomains(params = {}, options = {}) {
    return this.request('DescribeDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} SubDomain - subDomain. required.
   */
  describeGslbInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubDomain')) {
      throw new TypeError('parameter "SubDomain" is required');
    }

    return this.request('DescribeGslbInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   */
  describeGslbInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeGslbInstances', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeGtmAccessStrategies(params = {}, options = {}) {
    return this.request('DescribeGtmAccessStrategies', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} StrategyId - strategyId. required.
   */
  describeGtmAccessStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyId')) {
      throw new TypeError('parameter "StrategyId" is required');
    }

    return this.request('DescribeGtmAccessStrategy', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeGtmAccessStrategyAvailableConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeGtmAccessStrategyAvailableConfig', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeGtmAvailableAlertGroup(params = {}, options = {}) {
    return this.request('DescribeGtmAvailableAlertGroup', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeGtmInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeGtmInstance', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AddrPoolId - addrPoolId. required.
   */
  describeGtmInstanceAddressPool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AddrPoolId')) {
      throw new TypeError('parameter "AddrPoolId" is required');
    }

    return this.request('DescribeGtmInstanceAddressPool', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeGtmInstanceAddressPools(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeGtmInstanceAddressPools', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeGtmInstanceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeGtmInstanceStatus', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeGtmInstanceSystemCname(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeGtmInstanceSystemCname', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Keyword - keyword. optional.
   */
  describeGtmInstances(params = {}, options = {}) {
    return this.request('DescribeGtmInstances', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   * @param {Long} StartTimestamp - startTime. optional.
   * @param {Long} EndTimestamp - endTime. optional.
   */
  describeGtmLogs(params = {}, options = {}) {
    return this.request('DescribeGtmLogs', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeGtmMonitorAvailableConfig(params = {}, options = {}) {
    return this.request('DescribeGtmMonitorAvailableConfig', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} MonitorConfigId - monitorConfigId. required.
   */
  describeGtmMonitorConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MonitorConfigId')) {
      throw new TypeError('parameter "MonitorConfigId" is required');
    }

    return this.request('DescribeGtmMonitorConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Boolean} OnlyFailed - onlyFailed. optional. default: true.
   */
  describeImportDomainRecordsResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeImportDomainRecordsResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeImportDomainsResult(params = {}, options = {}) {
    return this.request('DescribeImportDomainsResult', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   * @param {String} InstanceId - instanceId. optional.
   */
  describeInstanceDomains(params = {}, options = {}) {
    return this.request('DescribeInstanceDomains', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeInstanceExtendStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstanceExtendStatus', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeRecordGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeRecordGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} KeyWord - keyWord. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} endDate - endDate. optional.
   */
  describeRecordLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeRecordLogs', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Rr - rr. required.
   */
  describeRecordStatisticsHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Rr')) {
      throw new TypeError('parameter "Rr" is required');
    }

    return this.request('DescribeRecordStatisticsHistory', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. optional.
   * @param {String} OrderBy - orderBy. optional. default: COUNT.
   * @param {String} Direction - direction. optional. default: DESC.
   * @param {String} DomainName - domainName. required.
   * @param {String} SearchMode - searchMode. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Long} Threshold - threshold. optional.
   */
  describeRecordStatisticsSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeRecordStatisticsSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   */
  describeSiteMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeSiteMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} DomainName - domainName. required.
   * @param {String} KeyWord - keyWord. optional.
   */
  describeSiteMonitorAlertLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeSiteMonitorAlertLogs', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Isp - ispId. optional.
   */
  describeSiteMonitorIspCityInfos(params = {}, options = {}) {
    return this.request('DescribeSiteMonitorIspCityInfos', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  describeSiteMonitorIspInfos(params = {}, options = {}) {
    return this.request('DescribeSiteMonitorIspInfos', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {Long} StartTimestamp - startTimestamp. required.
   * @param {Long} EndTimestamp - endTimestamp. required.
   */
  describeSiteMonitorIspPointTrends(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    return this.request('DescribeSiteMonitorIspPointTrends', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {Long} StartTimestamp - startTimestamp. required.
   * @param {Long} EndTimestamp - endTimestamp. required.
   */
  describeSiteMonitorIspTrends(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    return this.request('DescribeSiteMonitorIspTrends', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {Long} StartTimestamp - startTimestamp. required.
   * @param {Long} EndTimestamp - endTimestamp. required.
   */
  describeSiteMonitorNodeTrends(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    return this.request('DescribeSiteMonitorNodeTrends', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {Long} StartTimestamp - startTimestamp. required.
   * @param {Long} EndTimestamp - endTimestamp. required.
   */
  describeSiteMonitorProvinceTrends(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    return this.request('DescribeSiteMonitorProvinceTrends', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} DomainName - domainName. required.
   * @param {String} KeyWord - keyWord. optional.
   */
  describeSiteMonitors(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeSiteMonitors', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeSlaveDnsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeSlaveDnsConfig', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   */
  describeSlaveDnsDomains(params = {}, options = {}) {
    return this.request('DescribeSlaveDnsDomains', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  describeSlaveDnsStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('DescribeSlaveDnsStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} SubDomain - subDomain. required.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 20.
   * @param {String} Type - type. optional.
   * @param {String} Line - line. optional.
   */
  describeSubDomainRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubDomain')) {
      throw new TypeError('parameter "SubDomain" is required');
    }

    return this.request('DescribeSubDomainRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. optional.
   */
  describeSupportLines(params = {}, options = {}) {
    return this.request('DescribeSupportLines', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InputString - commonName. required.
   */
  getMainDomainName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputString')) {
      throw new TypeError('parameter "InputString" is required');
    }

    return this.request('GetMainDomainName', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. optional.
   */
  getTxtRecordForRetrievalDomainName(params = {}, options = {}) {
    return this.request('GetTxtRecordForRetrievalDomainName', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} StatusId - statusId. required.
   */
  markGslbStatusOk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StatusId')) {
      throw new TypeError('parameter "StatusId" is required');
    }

    return this.request('MarkGslbStatusOk', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  modifyHichinaDomainDNS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ModifyHichinaDomainDNS', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Name - name. required.
   * @param {Integer} Status - status. required.
   * @param {Long} Qps - qps. required.
   * @param {Long} EventTimestamp - timestamp. required.
   */
  notifyDnsAttackBlackHold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'Qps')) {
      throw new TypeError('parameter "Qps" is required');
    }

    if (!hasOwnProperty(params, 'EventTimestamp')) {
      throw new TypeError('parameter "EventTimestamp" is required');
    }

    return this.request('NotifyDnsAttackBlackHold', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Name - name. required.
   * @param {Integer} Status - status. required.
   * @param {Long} Qps - qps. required.
   * @param {Long} EventTimestamp - timestamp. required.
   */
  notifyDnsAttackClean(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'Qps')) {
      throw new TypeError('parameter "Qps" is required');
    }

    if (!hasOwnProperty(params, 'EventTimestamp')) {
      throw new TypeError('parameter "EventTimestamp" is required');
    }

    return this.request('NotifyDnsAttackClean', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} SubDomain - subDomain. required.
   */
  openGslb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubDomain')) {
      throw new TypeError('parameter "SubDomain" is required');
    }

    return this.request('OpenGslb', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Type - type. optional.
   * @param {RepeatList} DomainRecordInfo - data. optional.
   */
  operateBatchDomain(params = {}, options = {}) {
    return this.request('OperateBatchDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} data - data. required.
   */
  orderPaidNotice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderPaidNotice', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryAllowRenewPeriodList(params = {}, options = {}) {
    return this.request('QueryAllowRenewPeriodList', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceVersion - version. required.
   * @param {Integer} Month - month. required.
   * @param {Long} OwnerId - ownerId. optional.
   */
  queryCreateInstancePrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceVersion')) {
      throw new TypeError('parameter "InstanceVersion" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('QueryCreateInstancePrice', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {Long} StartTimestamp - startTime. required.
   * @param {Long} EndTimestamp - endTime. required.
   * @param {Integer} PageSize - pageSize. optional. default: 1000.
   * @param {String} Cursor - cursor. optional.
   */
  queryDnsMonitorErrorEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    return this.request('QueryDnsMonitorErrorEvent', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {Integer} LastMinute - lastMinute. optional.
   */
  queryDnsMonitorFailureRate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryDnsMonitorFailureRate', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {String} AlarmType - alarmType. required.
   * @param {Long} StartTimestamp - startTime. required.
   * @param {Long} EndTimestamp - endTime. required.
   */
  queryDnsMonitorHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'AlarmType')) {
      throw new TypeError('parameter "AlarmType" is required');
    }

    if (!hasOwnProperty(params, 'StartTimestamp')) {
      throw new TypeError('parameter "StartTimestamp" is required');
    }

    if (!hasOwnProperty(params, 'EndTimestamp')) {
      throw new TypeError('parameter "EndTimestamp" is required');
    }

    return this.request('QueryDnsMonitorHistory', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {String} AlarmType - alarmType. required.
   */
  queryDnsMonitorLast(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'AlarmType')) {
      throw new TypeError('parameter "AlarmType" is required');
    }

    return this.request('QueryDnsMonitorLast', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   */
  queryDnsMonitorNodeResponseTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryDnsMonitorNodeResponseTime', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   */
  queryDnsMonitorStatistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryDnsMonitorStatistics', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OrderStatus - orderStatus. optional.
   * @param {Long} PageNumber - pageNumber. optional. default: 1.
   * @param {Long} PageSize - pageSize. optional. default: 10.
   */
  queryInstanceOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryInstanceOrderList', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  queryInstanceUnpaidOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryInstanceUnpaidOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} Month - month. required.
   */
  queryRenewPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('QueryRenewPrice', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - aliasId. required.
   * @param {String} RefundType - refundType. required.
   * @param {Long} OrderId - orderId. optional.
   */
  refundOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RefundType')) {
      throw new TypeError('parameter "RefundType" is required');
    }

    return this.request('RefundOrder', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  resetBatchResult(params = {}, options = {}) {
    return this.request('ResetBatchResult', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  resetImportDomainsResult(params = {}, options = {}) {
    return this.request('ResetImportDomainsResult', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} GroupId - groupId. optional.
   * @param {Integer} DelayTime - delayTime. optional.
   */
  retrieveBatchDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('RetrieveBatchDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} SubDomain - subDomain. required.
   */
  scanSubdomainRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubDomain')) {
      throw new TypeError('parameter "SubDomain" is required');
    }

    return this.request('ScanSubdomainRecords', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} SubDomain - subDomain. required.
   * @param {Boolean} Open - open. optional. default: true.
   */
  setDNSSLBStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubDomain')) {
      throw new TypeError('parameter "SubDomain" is required');
    }

    return this.request('SetDNSSLBStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} RecordId - rrId. required.
   * @param {String} Status - status. required.
   */
  setDomainRecordStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetDomainRecordStatus', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} StrategyId - strategyId. required.
   * @param {String} AccessMode - accessMode. required.
   */
  setGtmAccessMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyId')) {
      throw new TypeError('parameter "StrategyId" is required');
    }

    if (!hasOwnProperty(params, 'AccessMode')) {
      throw new TypeError('parameter "AccessMode" is required');
    }

    return this.request('SetGtmAccessMode', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} MonitorConfigId - monitorConfigId. required.
   * @param {String} Status - monitorStatus. required.
   */
  setGtmMonitorStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MonitorConfigId')) {
      throw new TypeError('parameter "MonitorConfigId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetGtmMonitorStatus', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskIds - taskIds. required.
   * @param {Boolean} Paused - paused. required.
   */
  setSiteMonitorsStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskIds')) {
      throw new TypeError('parameter "TaskIds" is required');
    }

    if (!hasOwnProperty(params, 'Paused')) {
      throw new TypeError('parameter "Paused" is required');
    }

    return this.request('SetSiteMonitorsStatus', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Status - status. required.
   */
  setSlaveDnsConfigStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetSlaveDnsConfigStatus', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Records - jsonString. required.
   */
  submitBundleRecordTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Records')) {
      throw new TypeError('parameter "Records" is required');
    }

    return this.request('SubmitBundleRecordTask', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} FileName - fileName. required.
   */
  submitImportDomainRecordsFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('SubmitImportDomainRecordsFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   */
  submitImportDomainsFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('SubmitImportDomainsFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} LineType - lineType. required.
   */
  switchLineType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'LineType')) {
      throw new TypeError('parameter "LineType" is required');
    }

    return this.request('SwitchLineType', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  syncWithMasterDns(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SyncWithMasterDns', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} VerifyCode - verifyCode. required.
   * @param {String} TransferToAccount - transferToAccount. required.
   * @param {String} Remark - remark. optional.
   */
  transferBatchDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'VerifyCode')) {
      throw new TypeError('parameter "VerifyCode" is required');
    }

    if (!hasOwnProperty(params, 'TransferToAccount')) {
      throw new TypeError('parameter "TransferToAccount" is required');
    }

    return this.request('TransferBatchDomain', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainNames - domainNames. required.
   * @param {String} InstanceId - instanceId. required.
   */
  unbindInstanceDomains(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainNames')) {
      throw new TypeError('parameter "DomainNames" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('UnbindInstanceDomains', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Rr - rr. optional.
   * @param {String} Value - value. optional.
   * @param {String} NewRr - newRr. optional.
   * @param {String} NewValue - newValue. optional.
   * @param {Integer} Type - type. optional.
   * @param {Integer} QueryParamType - queryParamType. optional.
   */
  updateBatchRr(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('UpdateBatchRr', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} LineName - lineName. optional.
   * @param {RepeatList} IpSegment - ipSegments. optional.
   * @param {Long} LineId - lineId. required.
   */
  updateCustomLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LineId')) {
      throw new TypeError('parameter "LineId" is required');
    }

    return this.request('UpdateCustomLine', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} RecordId - rrId. required.
   * @param {Integer} Weight - weight. required.
   */
  updateDNSSLBWeight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    if (!hasOwnProperty(params, 'Weight')) {
      throw new TypeError('parameter "Weight" is required');
    }

    return this.request('UpdateDNSSLBWeight', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TaskId - taskId. required.
   * @param {Integer} Interval - interval. optional.
   * @param {String} NotifyType - notifyType. optional.
   * @param {RepeatList} Node - nodeList. optional.
   * @param {String} DnsValues - dnsValues. optional.
   * @param {RepeatList} Alarm - alarmList. optional.
   */
  updateDnsMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('UpdateDnsMonitor', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} DnsTemplateRecordId - templateRecordId. required.
   * @param {String} RR - rr. required.
   * @param {String} Type - type. required.
   * @param {String} Value - value. required.
   * @param {Long} Priority - priority. optional.
   */
  updateDnsTemplateRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DnsTemplateRecordId')) {
      throw new TypeError('parameter "DnsTemplateRecordId" is required');
    }

    if (!hasOwnProperty(params, 'RR')) {
      throw new TypeError('parameter "RR" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('UpdateDnsTemplateRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} GroupId - groupId. required.
   * @param {String} GroupName - groupName. required.
   */
  updateDomainGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('UpdateDomainGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} RecordId - rrId. required.
   * @param {String} RR - rr. required.
   * @param {String} Type - type. required.
   * @param {String} Value - value. required.
   * @param {Long} TTL - ttl. optional. default: 600.
   * @param {Long} Priority - priority. optional.
   * @param {String} Line - line. optional. default: default.
   */
  updateDomainRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    if (!hasOwnProperty(params, 'RR')) {
      throw new TypeError('parameter "RR" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('UpdateDomainRecord', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} RecordId - recordId. required.
   * @param {String} Remark - remark. optional.
   */
  updateDomainRecordRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('UpdateDomainRecordRemark', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Remark - remark. optional.
   */
  updateDomainRemark(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('UpdateDomainRemark', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} StrategyId - strategyId. required.
   * @param {String} StrategyName - strategyName. optional.
   * @param {String} DefaultAddrPoolId - defaultAddrPoolId. optional.
   * @param {String} FailoverAddrPoolId - failoverAddrPoolId. optional.
   * @param {String} AccessLines - accessLines. optional.
   */
  updateGtmAccessStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyId')) {
      throw new TypeError('parameter "StrategyId" is required');
    }

    return this.request('UpdateGtmAccessStrategy', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AddrPoolId - addrPoolId. required.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. required.
   * @param {Integer} MinAvailableAddrNum - minAvailableAddrNum. optional.
   * @param {RepeatList} Addr - poolAddrList. required.
   */
  updateGtmAddressPool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AddrPoolId')) {
      throw new TypeError('parameter "AddrPoolId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Addr')) {
      throw new TypeError('parameter "Addr" is required');
    }

    return this.request('UpdateGtmAddressPool', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceName - instanceName. optional.
   * @param {Integer} Ttl - ttl. optional.
   * @param {String} UserDomainName - userDomainName. optional.
   * @param {String} LbaStrategy - lbaStrategy. optional.
   * @param {String} AlertGroup - alertGroup. optional.
   * @param {String} CnameMode - cnameMode. optional.
   * @param {String} CnameCustomDomainName - cnameCustomDomainName. optional.
   */
  updateGtmInstanceGlobalConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('UpdateGtmInstanceGlobalConfig', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} MonitorConfigId - monitorConfigId. required.
   * @param {String} Name - name. optional.
   * @param {String} ProtocolType - protocol. required.
   * @param {Integer} Interval - interval. optional.
   * @param {Integer} EvaluationCount - evaluationCount. optional.
   * @param {Integer} Timeout - timeout. optional.
   * @param {String} MonitorExtendInfo - extend. required.
   * @param {RepeatList} IspCityNode - nodes. required.
   */
  updateGtmMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MonitorConfigId')) {
      throw new TypeError('parameter "MonitorConfigId" is required');
    }

    if (!hasOwnProperty(params, 'ProtocolType')) {
      throw new TypeError('parameter "ProtocolType" is required');
    }

    if (!hasOwnProperty(params, 'MonitorExtendInfo')) {
      throw new TypeError('parameter "MonitorExtendInfo" is required');
    }

    if (!hasOwnProperty(params, 'IspCityNode')) {
      throw new TypeError('parameter "IspCityNode" is required');
    }

    return this.request('UpdateGtmMonitor', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} GroupId - groupId. required.
   * @param {String} GroupName - groupName. required.
   * @param {String} DomainName - domainName. optional.
   */
  updateRecordGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('UpdateRecordGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskId - taskId. required.
   * @param {String} AlertNotifyChannels - alertNotifyChannels. optional.
   * @param {String} AlertSwitchPolicy - alertSwitchPolicy. optional.
   * @param {Integer} TaskInterval - taskInterval. optional.
   * @param {String} TaskNodes - taskNodes. optional.
   * @param {Integer} TaskPort - taskPort. optional.
   * @param {String} TaskPath - taskPath. optional.
   * @param {String} TaskProtocol - taskProtocol. optional.
   * @param {Integer} AlertTimes - alertTimes. optional.
   * @param {RepeatList} StandbyValue - alertStandbyValuesList. optional.
   */
  updateSiteMonitor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('UpdateSiteMonitor', params, options);
  }

  /**
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Boolean} NeedNotice - needNotice. required.
   * @param {RepeatList} TsigConfig - tsigConfigs. required.
   * @param {RepeatList} IpSegment - ipSegments. required.
   */
  updateSlaveDnsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'NeedNotice')) {
      throw new TypeError('parameter "NeedNotice" is required');
    }

    if (!hasOwnProperty(params, 'TsigConfig')) {
      throw new TypeError('parameter "TsigConfig" is required');
    }

    if (!hasOwnProperty(params, 'IpSegment')) {
      throw new TypeError('parameter "IpSegment" is required');
    }

    return this.request('UpdateSlaveDnsConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  validateDomainCanAdd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ValidateDomainCanAdd', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  validateDomainCanBind(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ValidateDomainCanBind', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   */
  verifyTxtRecordForRetrievalDomainName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('VerifyTxtRecordForRetrievalDomainName', params, options);
  }

}

module.exports = Client;
