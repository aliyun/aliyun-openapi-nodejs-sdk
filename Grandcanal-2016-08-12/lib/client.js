
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-12';
    super(config);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {Integer} Period - period. optional.
   */
  summarizeWorkflow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('SummarizeWorkflow', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {Integer} Period - period. optional.
   */
  summarizeWorkflowTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('SummarizeWorkflowTrend', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {Integer} Period - period. optional.
   */
  summarizeWorkflowType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('SummarizeWorkflowType', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} WorkflowTypeName - workflowTypeName. required.
   * @param {String} WorkflowTypeVersion - workflowTypeVersion. required.
   * @param {Integer} Period - period. optional.
   */
  summarizeWorkflowTypeTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeName')) {
      throw new TypeError('parameter "WorkflowTypeName" is required');
    }

    if (!hasOwnProperty(params, 'WorkflowTypeVersion')) {
      throw new TypeError('parameter "WorkflowTypeVersion" is required');
    }

    return this.request('SummarizeWorkflowTypeTrend', params, options);
  }

}

module.exports = Client;
