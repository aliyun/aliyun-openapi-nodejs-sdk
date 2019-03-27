
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-25';
    super(config);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   */
  getBranches(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetBranches', params, options);
  }

  /**
   */
  getCurrentUser(params = {}, options = {}) {
    return this.request('GetCurrentUser', params, options);
  }

  /**
   * @param {Long} Page - page. optional.
   * @param {Long} PerPage - per_page. optional.
   */
  getProjects(params = {}, options = {}) {
    return this.request('GetProjects', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   */
  getTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetTags', params, options);
  }

}

module.exports = Client;
