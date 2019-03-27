
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-12';
    super(config);
  }

  /**
   * @param {String} InfoType - infoType. required.
   * @param {String} InfoName - infoName. optional.
   * @param {String} IpExpressions - ipExpressions. optional.
   */
  addCidr(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InfoType')) {
      throw new TypeError('parameter "InfoType" is required');
    }

    return this.request('AddCidr', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} Ip - ip. required.
   * @param {Integer} Port - port. required.
   * @param {Integer} Size - size. required.
   * @param {Integer} Time - time. required.
   * @param {Integer} Inout - inout. required.
   * @param {Integer} Order - order. required.
   * @param {Integer} Type - type. required.
   * @param {String} Check - check. required.
   * @param {String} Cluster - cluster. required.
   */
  beaverCaptureService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    if (!hasOwnProperty(params, 'Inout')) {
      throw new TypeError('parameter "Inout" is required');
    }

    if (!hasOwnProperty(params, 'Order')) {
      throw new TypeError('parameter "Order" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Check')) {
      throw new TypeError('parameter "Check" is required');
    }

    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    return this.request('BeaverCaptureService', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   */
  beaverDownloadCaptureService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('BeaverDownloadCaptureService', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} Order - order. required.
   * @param {String} Cluster - cluster. required.
   */
  beaverGetCurrentFlowDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Order')) {
      throw new TypeError('parameter "Order" is required');
    }

    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    return this.request('BeaverGetCurrentFlowDetails', params, options);
  }

  /**
   * @param {String} ChartType - chartType. optional.
   * @param {String} Ip - ip. required.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {String} PicType - picType. optional.
   * @param {Long} Start - start. optional.
   */
  beaverGetNetworkChart(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('BeaverGetNetworkChart', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   */
  beaverIsCapturefileExistedService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('BeaverIsCapturefileExistedService', params, options);
  }

  /**
   * @param {Integer} Order - order. required.
   * @param {Integer} Start - start. required.
   * @param {Integer} Size - size. required.
   * @param {Integer} Sort - sort. required.
   * @param {String} Type - type. required.
   * @param {String} IpSeg - ipSeg. required.
   */
  beaverSearchTopNService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Order')) {
      throw new TypeError('parameter "Order" is required');
    }

    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    if (!hasOwnProperty(params, 'Sort')) {
      throw new TypeError('parameter "Sort" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'IpSeg')) {
      throw new TypeError('parameter "IpSeg" is required');
    }

    return this.request('BeaverSearchTopNService', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SecurityecsInstanceId - securityecsInstanceId. required.
   */
  closeSecurityEcsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityecsInstanceId')) {
      throw new TypeError('parameter "SecurityecsInstanceId" is required');
    }

    return this.request('CloseSecurityEcsService', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {String} Region - region. optional.
   * @param {String} Template - template. optional.
   * @param {Integer} DefenseAction - defenseAction. optional.
   */
  commandAliguard(params = {}, options = {}) {
    return this.request('CommandAliguard', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {Integer} OperateAction - operateAction. optional.
   * @param {Integer} Kbps - kbps. optional.
   * @param {Integer} Pps - pps. optional.
   */
  commandDj(params = {}, options = {}) {
    return this.request('CommandDj', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {Integer} EventType - eventType. optional.
   * @param {Long} StartDate - startDate. optional.
   * @param {Long} EndDate - endDate. optional.
   */
  countByIpAndType(params = {}, options = {}) {
    return this.request('CountByIpAndType', params, options);
  }

  /**
   * @param {Integer} DjMethod - djMethod. optional.
   * @param {Long} StartDate - startDate. optional.
   * @param {Long} EndDate - endDate. optional.
   */
  deleteAllDefenseBlackhole(params = {}, options = {}) {
    return this.request('DeleteAllDefenseBlackhole', params, options);
  }

  /**
   * @param {String} InfoType - infoType. required.
   * @param {String} InfoName - infoName. optional.
   * @param {String} IpExpressions - ipExpressions. optional.
   * @param {String} Identity - identity. required.
   */
  deleteCidr(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InfoType')) {
      throw new TypeError('parameter "InfoType" is required');
    }

    if (!hasOwnProperty(params, 'Identity')) {
      throw new TypeError('parameter "Identity" is required');
    }

    return this.request('DeleteCidr', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} AliUid - aliUid. required.
   */
  describeCreditInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeCreditInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. required.
   */
  describeDdosStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeDdosStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. required.
   * @param {String} EventType - eventType. required.
   */
  describeDdosStatusByType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'EventType')) {
      throw new TypeError('parameter "EventType" is required');
    }

    return this.request('DescribeDdosStatusByType', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {RepeatList} Ip - ipList. required.
   */
  describeDdosThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeDdosThreshold', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. required.
   * @param {Boolean} PriorityRight - priorityRight. required.
   */
  describeIpCredit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'PriorityRight')) {
      throw new TypeError('parameter "PriorityRight" is required');
    }

    return this.request('DescribeIpCredit', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Ip - ip. required.
   */
  describeIpInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeIpInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} InfoType - infoType. required.
   * @param {String} InfoName - infoName. required.
   * @param {Boolean} IsEn - isEn. optional. default: false.
   */
  describeIpSegments(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InfoType')) {
      throw new TypeError('parameter "InfoType" is required');
    }

    if (!hasOwnProperty(params, 'InfoName')) {
      throw new TypeError('parameter "InfoName" is required');
    }

    return this.request('DescribeIpSegments', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Conditions - Conditions. required.
   */
  describeReleaseRisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Conditions')) {
      throw new TypeError('parameter "Conditions" is required');
    }

    return this.request('DescribeReleaseRisk', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Aliuid - aliuid. required.
   */
  describeUserCredit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    return this.request('DescribeUserCredit', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Conditions - Conditions. required.
   */
  describeUserRisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Conditions')) {
      throw new TypeError('parameter "Conditions" is required');
    }

    return this.request('DescribeUserRisk', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} GcLevel - gc. optional.
   * @param {Integer} Start - pageNo. required.
   * @param {Integer} Limit - pageSize. required.
   */
  describeUserRiskLevel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('DescribeUserRiskLevel', params, options);
  }

  /**
   */
  getAliguardRegionList(params = {}, options = {}) {
    return this.request('GetAliguardRegionList', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {String} Region - region. optional.
   */
  getAliguardStrategy(params = {}, options = {}) {
    return this.request('GetAliguardStrategy', params, options);
  }

  /**
   */
  getBeaverOrderService(params = {}, options = {}) {
    return this.request('GetBeaverOrderService', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   */
  getBlackholeDevice(params = {}, options = {}) {
    return this.request('GetBlackholeDevice', params, options);
  }

  /**
   */
  getBlackholeDeviceList(params = {}, options = {}) {
    return this.request('GetBlackholeDeviceList', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   */
  getDefenseDevice(params = {}, options = {}) {
    return this.request('GetDefenseDevice', params, options);
  }

  /**
   */
  getDefenseDeviceList(params = {}, options = {}) {
    return this.request('GetDefenseDeviceList', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   */
  getDefenseTemplate(params = {}, options = {}) {
    return this.request('GetDefenseTemplate', params, options);
  }

  /**
   */
  getDefenseTemplateList(params = {}, options = {}) {
    return this.request('GetDefenseTemplateList', params, options);
  }

  /**
   */
  getDjRegionList(params = {}, options = {}) {
    return this.request('GetDjRegionList', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   */
  getMaxPps(params = {}, options = {}) {
    return this.request('GetMaxPps', params, options);
  }

  /**
   * @param {String} Region - region. optional.
   */
  listAliguardDefense(params = {}, options = {}) {
    return this.request('ListAliguardDefense', params, options);
  }

  /**
   * @param {String} InfoType - infoType. required.
   * @param {String} InfoName - infoName. optional.
   * @param {String} InfoFrom - infoFrom. optional.
   */
  listCidr(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InfoType')) {
      throw new TypeError('parameter "InfoType" is required');
    }

    return this.request('ListCidr', params, options);
  }

  /**
   * @param {String} Region - region. required.
   * @param {String} QueryMethod - queryMethod. required.
   * @param {String} QueryType - queryType. required.
   */
  listDjDefenseBlackhole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'QueryMethod')) {
      throw new TypeError('parameter "QueryMethod" is required');
    }

    if (!hasOwnProperty(params, 'QueryType')) {
      throw new TypeError('parameter "QueryType" is required');
    }

    return this.request('ListDjDefenseBlackhole', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} Aliuid - aliuid. required.
   * @param {Integer} CreditScore - creditScore. required.
   * @param {Integer} IsLock - isLock. optional.
   * @param {Integer} IsManual - isManual. optional.
   */
  modifyDdosUserCredit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'CreditScore')) {
      throw new TypeError('parameter "CreditScore" is required');
    }

    return this.request('ModifyDdosUserCredit', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {String} Uuid - uuid. optional.
   * @param {String} SecurityecsInstanceId - securityecsInstanceId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} InternetIp - internetIp. optional.
   * @param {String} IntranetIp - intranetIp. optional.
   * @param {String} Eip - eip. optional.
   * @param {Integer} Threshold - threshold. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} RegionNo - regionNo. required.
   * @param {String} InstanceVersion - instanceVersion. required.
   */
  openSecurityEcsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'SecurityecsInstanceId')) {
      throw new TypeError('parameter "SecurityecsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'InstanceVersion')) {
      throw new TypeError('parameter "InstanceVersion" is required');
    }

    return this.request('OpenSecurityEcsService', params, options);
  }

  /**
   * @param {String} ips - ips. optional.
   */
  queryAliuidByIp(params = {}, options = {}) {
    return this.request('QueryAliuidByIp', params, options);
  }

  /**
   * @param {String} OrderType - orderType. optional.
   */
  queryBeaverOrder(params = {}, options = {}) {
    return this.request('QueryBeaverOrder', params, options);
  }

  /**
   * @param {Long} AliUid - aliuid. required.
   */
  queryBlackHoleTime(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('QueryBlackHoleTime', params, options);
  }

  /**
   * @param {String} IpList - ipList. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  queryDDoSStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpList')) {
      throw new TypeError('parameter "IpList" is required');
    }

    return this.request('QueryDDoSStatus', params, options);
  }

  /**
   * @param {String} AllocationType - allocationType. required.
   * @param {String} AllocationValue - allocationValue. optional.
   */
  queryDefaultThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AllocationType')) {
      throw new TypeError('parameter "AllocationType" is required');
    }

    return this.request('QueryDefaultThreshold', params, options);
  }

  /**
   * @param {String} Params - params. optional.
   */
  queryEventDdos(params = {}, options = {}) {
    return this.request('QueryEventDdos', params, options);
  }

  /**
   * @param {Long} EventId - eventId. optional.
   */
  queryEventDetail(params = {}, options = {}) {
    return this.request('QueryEventDetail', params, options);
  }

  /**
   * @param {String} Ip - ip. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Long} Pixels - pixels. optional. default: 288.
   */
  queryFlowGraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryFlowGraph', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   */
  queryIpCredit(params = {}, options = {}) {
    return this.request('QueryIpCredit', params, options);
  }

  /**
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} Ips - ips. required.
   */
  queryIpEventCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    return this.request('QueryIpEventCount', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   */
  queryManuelBlackHole(params = {}, options = {}) {
    return this.request('QueryManuelBlackHole', params, options);
  }

  /**
   * @param {Integer} MarkingType - markingType. optional.
   */
  queryMarkingList(params = {}, options = {}) {
    return this.request('QueryMarkingList', params, options);
  }

  /**
   * @param {Long} AliUid - aliuid. required.
   */
  queryRegionBlackholeThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('QueryRegionBlackholeThreshold', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {String} Type - type. optional.
   * @param {String} ThresholdType - thresholdType. optional.
   */
  queryThresholdByIp(params = {}, options = {}) {
    return this.request('QueryThresholdByIp', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   */
  queryVmipInfomation(params = {}, options = {}) {
    return this.request('QueryVmipInfomation', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {Boolean} Auto - auto. optional.
   */
  setAutoCleanThreholdSwitch(params = {}, options = {}) {
    return this.request('SetAutoCleanThreholdSwitch', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  setBlackholeDevice(params = {}, options = {}) {
    return this.request('SetBlackholeDevice', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  setDefenseDevice(params = {}, options = {}) {
    return this.request('SetDefenseDevice', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {String} Template - template. optional.
   */
  setDefenseTemplate(params = {}, options = {}) {
    return this.request('SetDefenseTemplate', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {Integer} MaxPps - maxPps. optional.
   */
  setMaxPps(params = {}, options = {}) {
    return this.request('SetMaxPps', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   * @param {String} Type - type. optional.
   * @param {String} ThresholdType - thresholdType. optional.
   * @param {Integer} Newconns - newconns. optional.
   * @param {Integer} Bps - bps. optional.
   * @param {Integer} Qps - qps. optional.
   * @param {Integer} Pps - pps. optional.
   * @param {Integer} Concurconns - concurconns. optional.
   */
  setThreshold(params = {}, options = {}) {
    return this.request('SetThreshold', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SecurityecsInstanceId - securityecsInstanceId. required.
   * @param {Integer} Threshold - threshold. optional.
   * @param {String} EndTime - endTime. required.
   * @param {String} InstanceVersion - instanceVersion. optional.
   */
  updateSecurityEcsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityecsInstanceId')) {
      throw new TypeError('parameter "SecurityecsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('UpdateSecurityEcsService', params, options);
  }

}

module.exports = Client;
