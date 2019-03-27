
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-04';
    super(config);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  convertPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ConvertPolicy', params, options);
  }

  /**
   * @param {Integer} seriousLevelId - seriousLevelId. optional.
   * @param {String} region - region. required.
   * @param {String} author - author. required.
   * @param {String} assignedTo - assignedTo. required.
   * @param {Integer} templateId - templateId. required.
   * @param {String} subject - subject. required.
   * @param {Integer} priorityId - priorityId. optional.
   * @param {String} expectedAt - expectedAt. optional.
   * @param {String} description - description. optional.
   * @param {String} watcherUsers - watcherUsers. optional.
   * @param {String} moduleIds - moduleIds. optional.
   * @param {Json} cfList - cfList. optional.
   * @param {Integer} akProjectId - akProjectId. required.
   * @param {String} relatedAkProjectIds - relatedAkProjectIds. optional.
   * @param {String} stamp - stamp. required.
   * @param {Json} akVersionIds - akVersionIds. optional.
   * @param {String} source - source. optional.
   */
  createIssue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'region')) {
      throw new TypeError('parameter "region" is required');
    }

    if (!hasOwnProperty(params, 'author')) {
      throw new TypeError('parameter "author" is required');
    }

    if (!hasOwnProperty(params, 'assignedTo')) {
      throw new TypeError('parameter "assignedTo" is required');
    }

    if (!hasOwnProperty(params, 'templateId')) {
      throw new TypeError('parameter "templateId" is required');
    }

    if (!hasOwnProperty(params, 'subject')) {
      throw new TypeError('parameter "subject" is required');
    }

    if (!hasOwnProperty(params, 'akProjectId')) {
      throw new TypeError('parameter "akProjectId" is required');
    }

    if (!hasOwnProperty(params, 'stamp')) {
      throw new TypeError('parameter "stamp" is required');
    }

    options.method = 'POST';
    return this.request('CreateIssue', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  deleteEnterprise(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteEnterprise', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getBillingStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetBillingStatus', params, options);
  }

  /**
   */
  getConsolePermissions(params = {}, options = {}) {
    return this.request('GetConsolePermissions', params, options);
  }

  /**
   */
  getEnterpriseList(params = {}, options = {}) {
    return this.request('GetEnterpriseList', params, options);
  }

  /**
   * @param {Long} Size - size. optional.
   * @param {Long} Page - page. optional.
   */
  getEnterpriseListPaging(params = {}, options = {}) {
    return this.request('GetEnterpriseListPaging', params, options);
  }

  /**
   * @param {Integer} id - id. required.
   * @param {String} region - region. required.
   */
  getIssue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'id')) {
      throw new TypeError('parameter "id" is required');
    }

    if (!hasOwnProperty(params, 'region')) {
      throw new TypeError('parameter "region" is required');
    }

    return this.request('GetIssue', params, options);
  }

}

module.exports = Client;
