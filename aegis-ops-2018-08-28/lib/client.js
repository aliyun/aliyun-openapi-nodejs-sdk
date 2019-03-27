
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-28';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} AliUid - aliUid. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} Statuses - statuses. optional.
   * @param {String} Types - types. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} Remark - remark. optional.
   */
  describeLoginLogs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('DescribeLoginLogs', params, options);
  }

  /**
   * @param {String} GcLevels - gcLevels. optional.
   * @param {String} UpdateVersion - updateVersion. optional.
   * @param {Boolean} Online - online. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} IPs - ips. optional.
   * @param {String} Platform - platform. optional.
   * @param {String} Uuids - uuids. optional.
   */
  describeMachineInfoOpers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('DescribeMachineInfoOpers', params, options);
  }

  /**
   * @param {String} GcLevels - gcLevels. optional.
   * @param {String} UpdateVersion - updateVersion. optional.
   * @param {Boolean} Online - online. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} IPs - ips. required.
   * @param {String} Platform - platform. optional.
   * @param {String} Uuids - uuids. optional.
   */
  describeMachineInfoOpersByIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'IPs')) {
      throw new TypeError('parameter "IPs" is required');
    }

    return this.request('DescribeMachineInfoOpersByIps', params, options);
  }

  /**
   * @param {String} GcLevels - gcLevels. optional.
   * @param {String} UpdateVersion - updateVersion. optional.
   * @param {Boolean} Online - online. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Long} AliUid - aliUid. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} IPs - ips. optional.
   * @param {String} Platform - platform. optional.
   * @param {String} Uuids - uuids. required.
   */
  describeMachineInfoOpersByUuids(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'Uuids')) {
      throw new TypeError('parameter "Uuids" is required');
    }

    return this.request('DescribeMachineInfoOpersByUuids', params, options);
  }

  /**
   * @param {String} TaskId - taskId. required.
   */
  describeStaticFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeStaticFile', params, options);
  }

  /**
   */
  describeUploadHistory(params = {}, options = {}) {
    return this.request('DescribeUploadHistory', params, options);
  }

  /**
   * @param {String} FilePath - filePath. optional.
   * @param {String} OssKey - ossKey. optional.
   * @param {Boolean} UnZip - unZip. optional.
   * @param {String} TaskId - taskId. required.
   * @param {String} OssMd5 - ossMd5. optional.
   */
  describeUploadStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DescribeUploadStatus', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} FilePath - filePath. required.
   * @param {String} TaskId - taskId. required.
   */
  operateStaticFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'FilePath')) {
      throw new TypeError('parameter "FilePath" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('OperateStaticFile', params, options);
  }

  /**
   * @param {String} AppName - appName. required.
   * @param {String} MethodName - methodName. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} Arg1 - arg1. optional.
   * @param {String} Arg2 - arg2. optional.
   * @param {String} Arg3 - arg3. optional.
   */
  pushCommondToClient(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'MethodName')) {
      throw new TypeError('parameter "MethodName" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('PushCommondToClient', params, options);
  }

  /**
   * @param {String} ProtocolType - protocolType. optional.
   * @param {String} Uuid - uuid. optional.
   * @param {String} Msg - msg. required.
   */
  pushProtocolByUuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Msg')) {
      throw new TypeError('parameter "Msg" is required');
    }

    return this.request('PushProtocolByUuid', params, options);
  }

  /**
   * @param {String} TaskSN - taskSN. required.
   * @param {String} AppName - appName. required.
   * @param {String} Uuid - uuid. required.
   * @param {String} Data - data. optional.
   */
  pushRtapTaskByUuid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskSN')) {
      throw new TypeError('parameter "TaskSN" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'Uuid')) {
      throw new TypeError('parameter "Uuid" is required');
    }

    return this.request('PushRtapTaskByUuid', params, options);
  }

  /**
   * @param {String} FilePath - filePath. required.
   * @param {String} OssKey - ossKey. required.
   * @param {Boolean} UnZip - unZip. required.
   * @param {String} TaskId - taskId. required.
   * @param {String} OssMd5 - ossMd5. required.
   */
  uploadStaticFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FilePath')) {
      throw new TypeError('parameter "FilePath" is required');
    }

    if (!hasOwnProperty(params, 'OssKey')) {
      throw new TypeError('parameter "OssKey" is required');
    }

    if (!hasOwnProperty(params, 'UnZip')) {
      throw new TypeError('parameter "UnZip" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'OssMd5')) {
      throw new TypeError('parameter "OssMd5" is required');
    }

    return this.request('UploadStaticFile', params, options);
  }

}

module.exports = Client;
