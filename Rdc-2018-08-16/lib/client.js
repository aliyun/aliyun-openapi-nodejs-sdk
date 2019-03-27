
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-16';
    super(config);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {Integer} ProjectId - projectId. required.
   * @param {String} Role - role. required.
   * @param {String} MemberStaffIds - memberStaffIds. required.
   * @param {String} StaffId - staffId. required.
   */
  addProjectMembers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Role')) {
      throw new TypeError('parameter "Role" is required');
    }

    if (!hasOwnProperty(params, 'MemberStaffIds')) {
      throw new TypeError('parameter "MemberStaffIds" is required');
    }

    if (!hasOwnProperty(params, 'StaffId')) {
      throw new TypeError('parameter "StaffId" is required');
    }

    options.method = 'POST';
    return this.request('AddProjectMembers', params, options);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {String} StaffId - staffId. required.
   * @param {String} Region - region. required.
   * @param {String} ParamJson - paramJson. required.
   */
  createProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'StaffId')) {
      throw new TypeError('parameter "StaffId" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'ParamJson')) {
      throw new TypeError('parameter "ParamJson" is required');
    }

    options.method = 'POST';
    return this.request('CreateProject', params, options);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Role - role. required.
   * @param {String} MemberStaffIds - memberStaffIds. required.
   * @param {String} StaffId - staffId. required.
   */
  deleteProjectMembers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'Role')) {
      throw new TypeError('parameter "Role" is required');
    }

    if (!hasOwnProperty(params, 'MemberStaffIds')) {
      throw new TypeError('parameter "MemberStaffIds" is required');
    }

    if (!hasOwnProperty(params, 'StaffId')) {
      throw new TypeError('parameter "StaffId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteProjectMembers', params, options);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {Integer} ProjectId - projectId. required.
   */
  getProjectInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetProjectInfo', params, options);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {String} StaffId - staffId. required.
   * @param {String} ParamJson - paramJson. required.
   */
  updateProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'StaffId')) {
      throw new TypeError('parameter "StaffId" is required');
    }

    if (!hasOwnProperty(params, 'ParamJson')) {
      throw new TypeError('parameter "ParamJson" is required');
    }

    options.method = 'POST';
    return this.request('UpdateProject', params, options);
  }

}

module.exports = Client;
