
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-12';
    super(config);
  }

  /**
   * @param {String} FlowId - FlowId. required.
   */
  abolishFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    return this.request('AbolishFlow', params, options);
  }

  /**
   * @param {String} FlowId - FlowId. required.
   * @param {Integer} FlowVersion - FlowVersion. optional.
   */
  cloneFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    return this.request('CloneFlow', params, options);
  }

  /**
   * @param {String} Name - Name. required.
   * @param {String} Description - Description. optional.
   * @param {String} Definition - Definition. optional.
   */
  createFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateFlow', params, options);
  }

  /**
   * @param {String} FlowId - FlowId. optional.
   * @param {String} FlowIds - FlowIds. optional.
   */
  deleteFlow(params = {}, options = {}) {
    return this.request('DeleteFlow', params, options);
  }

  /**
   * @param {String} FlowId - FlowId. required.
   */
  deployFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    return this.request('DeployFlow', params, options);
  }

  /**
   * @param {String} FlowId - FlowId. required.
   * @param {Integer} FlowVersion - FlowVersion. optional.
   */
  describeFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    return this.request('DescribeFlow', params, options);
  }

  /**
   * @param {String} TemplateId - TemplateId. required.
   */
  describeFlowTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('DescribeFlowTemplate', params, options);
  }

  /**
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {String} Name - Name. optional.
   */
  listFlow(params = {}, options = {}) {
    return this.request('ListFlow', params, options);
  }

  /**
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {String} Name - Name. optional.
   * @param {String} Tag - Tag. optional.
   */
  listFlowTemplate(params = {}, options = {}) {
    return this.request('ListFlowTemplate', params, options);
  }

  /**
   * @param {String} FlowId - FlowId. required.
   * @param {Integer} PageNumber - PageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  listFlowVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    return this.request('ListFlowVersion', params, options);
  }

  /**
   */
  listTag(params = {}, options = {}) {
    return this.request('ListTag', params, options);
  }

  /**
   * @param {String} FlowId - FlowId. required.
   * @param {String} Name - Name. optional.
   * @param {String} Description - Description. optional.
   * @param {String} Definition - Definition. optional.
   * @param {String} FlowRole - FlowRole. optional.
   */
  modifyFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    return this.request('ModifyFlow', params, options);
  }

  /**
   * @param {String} FlowId - FlowId. required.
   */
  rollBackFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowId')) {
      throw new TypeError('parameter "FlowId" is required');
    }

    return this.request('RollBackFlow', params, options);
  }

}

module.exports = Client;
