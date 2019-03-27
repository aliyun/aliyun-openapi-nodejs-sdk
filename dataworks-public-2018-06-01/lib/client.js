
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-01';
    super(config);
  }

  /**
   * @param {String} InstanceName - instanceName. required.
   * @param {String} ProjectName - projectName. required.
   * @param {String} FlowName - flowName. required.
   * @param {String} Bizdate - bizdate. required.
   * @param {String} NodeName - nodeName. required.
   * @param {String} RegionId - regionId. required.
   */
  createDag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    if (!hasOwnProperty(params, 'Bizdate')) {
      throw new TypeError('parameter "Bizdate" is required');
    }

    if (!hasOwnProperty(params, 'NodeName')) {
      throw new TypeError('parameter "NodeName" is required');
    }

    options.method = 'POST';
    return this.request('CreateDag', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {String} FlowName - flowName. required.
   * @param {String} DagPara - dagPara. optional.
   * @param {String} NodePara - nodePara. optional.
   * @param {String} Bizdate - bizdate. required.
   * @param {String} RegionId - regionId. optional.
   */
  createManualDag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'FlowName')) {
      throw new TypeError('parameter "FlowName" is required');
    }

    if (!hasOwnProperty(params, 'Bizdate')) {
      throw new TypeError('parameter "Bizdate" is required');
    }

    options.method = 'POST';
    return this.request('CreateManualDag', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {Long} DagId - dagId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  searchManualDagNodeInstance(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('SearchManualDagNodeInstance', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {Long} DagId - dagId. optional.
   * @param {String} RegionId - regionId. optional.
   */
  searchNodeInstanceList(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('SearchNodeInstanceList', params, options);
  }

}

module.exports = Client;
