
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-30';
    super(config);
  }

  /**
   * @param {Integer} OneProjectId - oneProjectId. required.
   * @param {String} Status - status. required.
   */
  cancelProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OneProjectId')) {
      throw new TypeError('parameter "OneProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('CancelProject', params, options);
  }

  /**
   */
  doCheckOneProject(params = {}, options = {}) {
    return this.request('DoCheckOneProject', params, options);
  }

  /**
   * @param {String} OracleUser - oracleUser. required.
   * @param {String} OneProjectName - oneProjectName. required.
   * @param {String} OracleIP - oracleIP. required.
   * @param {Integer} OraclePort - oraclePort. required.
   * @param {String} ServiceName - serviceName. optional.
   * @param {String} SchemaList - schemaList. required.
   * @param {String} TargetDB - targetDB. required.
   * @param {String} OraclePassword - oraclePassword. required.
   * @param {String} Sid - sid. optional.
   * @param {String} RdsIP - rdsIP. optional.
   * @param {Integer} RdsPort - rdsPort. optional.
   * @param {String} RdsUser - rdsUser. optional.
   * @param {String} RdsPassword - rdsPassword. optional.
   * @param {Integer} Volume - volume. required.
   * @param {String} ProjectType - projectType. optional.
   */
  doCreateOneProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OracleUser')) {
      throw new TypeError('parameter "OracleUser" is required');
    }

    if (!hasOwnProperty(params, 'OneProjectName')) {
      throw new TypeError('parameter "OneProjectName" is required');
    }

    if (!hasOwnProperty(params, 'OracleIP')) {
      throw new TypeError('parameter "OracleIP" is required');
    }

    if (!hasOwnProperty(params, 'OraclePort')) {
      throw new TypeError('parameter "OraclePort" is required');
    }

    if (!hasOwnProperty(params, 'SchemaList')) {
      throw new TypeError('parameter "SchemaList" is required');
    }

    if (!hasOwnProperty(params, 'TargetDB')) {
      throw new TypeError('parameter "TargetDB" is required');
    }

    if (!hasOwnProperty(params, 'OraclePassword')) {
      throw new TypeError('parameter "OraclePassword" is required');
    }

    if (!hasOwnProperty(params, 'Volume')) {
      throw new TypeError('parameter "Volume" is required');
    }

    options.method = 'POST';
    return this.request('DoCreateOneProject', params, options);
  }

  /**
   * @param {Integer} OneProjectId - oneProjectId. required.
   */
  doDeleteOneProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OneProjectId')) {
      throw new TypeError('parameter "OneProjectId" is required');
    }

    return this.request('DoDeleteOneProject', params, options);
  }

  /**
   * @param {String} OneProjectId - oneProjectId. required.
   */
  doGetDeployment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OneProjectId')) {
      throw new TypeError('parameter "OneProjectId" is required');
    }

    return this.request('DoGetDeployment', params, options);
  }

  /**
   * @param {String} OneProjectId - oneProjectId. required.
   */
  doGetMigrateSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OneProjectId')) {
      throw new TypeError('parameter "OneProjectId" is required');
    }

    return this.request('DoGetMigrateSummary', params, options);
  }

  /**
   * @param {Integer} OneProjectId - oneProjectId. required.
   */
  doGetOneProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OneProjectId')) {
      throw new TypeError('parameter "OneProjectId" is required');
    }

    return this.request('DoGetOneProject', params, options);
  }

  /**
   * @param {Integer} OneProjectId - oneProjectId. required.
   */
  doGetOneTaskDeploymentEnvironment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OneProjectId')) {
      throw new TypeError('parameter "OneProjectId" is required');
    }

    return this.request('DoGetOneTaskDeploymentEnvironment', params, options);
  }

  /**
   * @param {Integer} OneTaskId - oneTaskId. required.
   * @param {String} OS - os. required.
   */
  doGetOneTaskReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OneTaskId')) {
      throw new TypeError('parameter "OneTaskId" is required');
    }

    if (!hasOwnProperty(params, 'OS')) {
      throw new TypeError('parameter "OS" is required');
    }

    return this.request('DoGetOneTaskReport', params, options);
  }

  /**
   * @param {Integer} OneProjectId - oneProjectId. required.
   */
  doGetSolutionSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OneProjectId')) {
      throw new TypeError('parameter "OneProjectId" is required');
    }

    return this.request('DoGetSolutionSummary', params, options);
  }

  /**
   */
  doLogin(params = {}, options = {}) {
    return this.request('DoLogin', params, options);
  }

  /**
   * @param {Integer} OneProjectId - oneProjectId. optional.
   * @param {String} OneProjectType - oneProjectType. optional.
   */
  doModifyOneProject(params = {}, options = {}) {
    return this.request('DoModifyOneProject', params, options);
  }

  /**
   * @param {String} OneProjectName - oneProjectName. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} Percent - percent. optional.
   */
  doQueryOneProject(params = {}, options = {}) {
    return this.request('DoQueryOneProject', params, options);
  }

  /**
   * @param {Integer} OneTaskId - oneTaskId. required.
   * @param {String} Status - status. required.
   * @param {String} ExtraData - extraData. optional.
   * @param {Integer} Percent - percent. required.
   * @param {String} Error - error. optional.
   * @param {String} InnerError - innerError. optional.
   */
  doUpdateOneTaskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OneTaskId')) {
      throw new TypeError('parameter "OneTaskId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'Percent')) {
      throw new TypeError('parameter "Percent" is required');
    }

    options.method = 'POST';
    return this.request('DoUpdateOneTaskStatus', params, options);
  }

  /**
   * @param {Integer} TaskId - taskId. required.
   * @param {String} FileName - fileName. required.
   */
  doUploadMigrateResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    options.method = 'POST';
    return this.request('DoUploadMigrateResult', params, options);
  }

  /**
   */
  reboot(params = {}, options = {}) {
    return this.request('Reboot', params, options);
  }

}

module.exports = Client;
