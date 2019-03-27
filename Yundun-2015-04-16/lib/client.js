
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-04-16';
    super(config);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} Domain - domain. required.
   */
  addCNameWaf(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('AddCNameWaf', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {Integer} PageNumber - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} RecordType - recordType. optional.
   */
  bruteforceLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('BruteforceLog', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  closeCCProtect(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CloseCCProtect', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  closePortScan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ClosePortScan', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  closeVulScan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('CloseVulScan', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   * @param {Integer} FlowPosition - flowPosition. required.
   * @param {Integer} StrategyPosition - strategyPosition. required.
   * @param {Integer} Level - level. required.
   */
  configDdos(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FlowPosition')) {
      throw new TypeError('parameter "FlowPosition" is required');
    }

    if (!hasOwnProperty(params, 'StrategyPosition')) {
      throw new TypeError('parameter "StrategyPosition" is required');
    }

    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    return this.request('ConfigDdos', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SourceIp - sourceIp. required.
   * @param {String} Time - time. required.
   */
  confirmLogin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SourceIp')) {
      throw new TypeError('parameter "SourceIp" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('ConfirmLogin', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  ddosFlowGraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DdosFlowGraph', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {Integer} PageNumber - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  ddosLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DdosLog', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Path - path. required.
   */
  deleteBackDoorFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Path')) {
      throw new TypeError('parameter "Path" is required');
    }

    return this.request('DeleteBackDoorFile', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} CnameId - cnameId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  deleteCNameWaf(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'CnameId')) {
      throw new TypeError('parameter "CnameId" is required');
    }

    return this.request('DeleteCNameWaf', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} VulId - vulId. required.
   */
  detectVulById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VulId')) {
      throw new TypeError('parameter "VulId" is required');
    }

    return this.request('DetectVulById', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} VulIp - vulIp. required.
   */
  detectVulByIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VulIp')) {
      throw new TypeError('parameter "VulIp" is required');
    }

    return this.request('DetectVulByIp', params, options);
  }

  /**
   */
  getDdosConfigOptions(params = {}, options = {}) {
    return this.request('GetDdosConfigOptions', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {Integer} PageNumber - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Region - region. optional.
   * @param {String} EventType - eventType. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   */
  listInstanceInfos(params = {}, options = {}) {
    return this.request('ListInstanceInfos', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {Integer} PageNumber - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} RecordType - recordType. optional.
   */
  logineventLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('LogineventLog', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  openCCProtect(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpenCCProtect', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  openPortScan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpenPortScan', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  openVulScan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('OpenVulScan', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  queryDdosConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryDdosConfig', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   */
  secureCheck(params = {}, options = {}) {
    return this.request('SecureCheck', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  serviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ServiceStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  setDdosAuto(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('SetDdosAuto', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   * @param {Integer} QpsPosition - qpsPosition. required.
   * @param {Integer} Level - level. required.
   */
  setDdosQps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'QpsPosition')) {
      throw new TypeError('parameter "QpsPosition" is required');
    }

    if (!hasOwnProperty(params, 'Level')) {
      throw new TypeError('parameter "Level" is required');
    }

    return this.request('SetDdosQps', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   */
  summary(params = {}, options = {}) {
    return this.request('Summary', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {Integer} PageNumber - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} VulStatus - vulStatus. optional.
   */
  vulScanLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('VulScanLog', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  wafInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('WafInfo', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {Integer} PageNumber - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  wafLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('WafLog', params, options);
  }

  /**
   * @param {Long} JstOwnerId - jstOwnerId. optional.
   * @param {Integer} PageNumber - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} RecordType - recordType. optional.
   */
  webshellLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('WebshellLog', params, options);
  }

}

module.exports = Client;
