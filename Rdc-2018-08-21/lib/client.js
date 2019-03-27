
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-21';
    super(config);
  }

  /**
   * @param {String} InstanceId - regionIdentifier. required.
   * @param {String} StaffId - staffIdOfMemberToBeAdded. required.
   * @param {String} Operator - operatorStaffId. required.
   */
  addEnterpriseMember(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StaffId')) {
      throw new TypeError('parameter "StaffId" is required');
    }

    if (!hasOwnProperty(params, 'Operator')) {
      throw new TypeError('parameter "Operator" is required');
    }

    options.method = 'POST';
    return this.request('AddEnterpriseMember', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {Json} Emails - emails. optional.
   * @param {String} Domain - domain. required.
   * @param {String} CreatorStaffId - creatorStaffId. required.
   */
  createEnterprise(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'CreatorStaffId')) {
      throw new TypeError('parameter "CreatorStaffId" is required');
    }

    options.method = 'POST';
    return this.request('CreateEnterprise', params, options);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {String} Author - author. required.
   * @param {String} AssignedTo - assignedTo. required.
   * @param {Integer} TemplateId - templateId. required.
   * @param {String} Subject - subject. required.
   * @param {String} Description - description. optional.
   * @param {String} Stamp - stamp. required.
   * @param {Integer} AKProjectId - akProjectId. required.
   * @param {Json} CfList - cfList. optional.
   * @param {String} Verifier - verifier. optional.
   * @param {Integer} PriorityId - priorityId. optional.
   * @param {Integer} SeriousLevelId - seriousLevelId. optional.
   * @param {String} WatcherUsers - watcherUsers. optional.
   * @param {String} ModuleIds - moduleIds. optional.
   */
  createWorkitem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'Author')) {
      throw new TypeError('parameter "Author" is required');
    }

    if (!hasOwnProperty(params, 'AssignedTo')) {
      throw new TypeError('parameter "AssignedTo" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'Subject')) {
      throw new TypeError('parameter "Subject" is required');
    }

    if (!hasOwnProperty(params, 'Stamp')) {
      throw new TypeError('parameter "Stamp" is required');
    }

    if (!hasOwnProperty(params, 'AKProjectId')) {
      throw new TypeError('parameter "AKProjectId" is required');
    }

    options.method = 'POST';
    return this.request('CreateWorkitem', params, options);
  }

  /**
   * @param {String} DingId - dingId. required.
   */
  getBindedUserByDingId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DingId')) {
      throw new TypeError('parameter "DingId" is required');
    }

    return this.request('GetBindedUserByDingId', params, options);
  }

  /**
   * @param {String} TargetType - targetType. required.
   * @param {Json} TargetIds - targetIds. required.
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   */
  getChangeLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TargetType')) {
      throw new TypeError('parameter "TargetType" is required');
    }

    if (!hasOwnProperty(params, 'TargetIds')) {
      throw new TypeError('parameter "TargetIds" is required');
    }

    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    return this.request('GetChangeLog', params, options);
  }

  /**
   * @param {Integer} AKProjectId - akProjectId. required.
   * @param {Integer} TemplateId - templateId. required.
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   */
  getCustomFieldsByTemplateId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AKProjectId')) {
      throw new TypeError('parameter "AKProjectId" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    return this.request('GetCustomFieldsByTemplateId', params, options);
  }

  /**
   * @param {Integer} Id - id. required.
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   */
  getIssueById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    return this.request('GetIssueById', params, options);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {Integer} ProjectId - projectId. required.
   * @param {String} StaffId - staffId. optional.
   */
  getProjectMembers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetProjectMembers', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   */
  getUserByAliyunPk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('GetUserByAliyunPk', params, options);
  }

  /**
   * @param {Integer} Id - id. required.
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   */
  getWorkitemById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    return this.request('GetWorkitemById', params, options);
  }

  /**
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {String} Region - region. required.
   * @param {String} Status - status. optional.
   * @param {Integer} ToPage - toPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  searchProjectsByRegion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('SearchProjectsByRegion', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {String} AkProjectId - akProjectId. required.
   * @param {String} CaseTag - caseTag. optional.
   * @param {String} PageNum - pageNum. optional.
   * @param {String} CreateDateStart - createDateStart. optional.
   * @param {String} CreateDateEnd - createDateEnd. optional.
   * @param {String} UpdateDateStart - updateDateStart. optional.
   * @param {String} UpdateDateEnd - updateDateEnd. optional.
   */
  searchTestCase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'AkProjectId')) {
      throw new TypeError('parameter "AkProjectId" is required');
    }

    options.method = 'POST';
    return this.request('SearchTestCase', params, options);
  }

  /**
   * @param {String} Stamp - stamp. optional.
   * @param {Integer} AKProjectId - akProjectId. required.
   * @param {Integer} ToPage - page. optional.
   * @param {Integer} PageSize - perPage. optional.
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {Integer} SprintId - sprintId. optional.
   */
  searchWorkitem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AKProjectId')) {
      throw new TypeError('parameter "AKProjectId" is required');
    }

    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    return this.request('SearchWorkitem', params, options);
  }

  /**
   * @param {Integer} AKProjectId - akProjectId. required.
   * @param {String} CorpIdentifier - _regionIdentifier_. required.
   * @param {String} Modifier - modifier. required.
   * @param {String} AssignedTo - assignedTo. optional.
   * @param {Integer} TemplateId - templateId. optional.
   * @param {String} Subject - subject. optional.
   * @param {String} Description - description. optional.
   * @param {String} Stamp - stamp. optional.
   * @param {Json} CfList - cfList. optional.
   * @param {Integer} IssueId - issueId. required.
   * @param {String} Status - status. optional.
   * @param {String} Priority - priority. optional.
   * @param {String} SeriousLevel - seriousLevel. optional.
   * @param {String} Verifier - verifier. optional.
   * @param {Integer} SprintId - sprintId. optional.
   * @param {Boolean} IgnoreCheck - ignoreCheck. optional.
   * @param {Json} Cfs - cfs. optional.
   */
  updateWorkitem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AKProjectId')) {
      throw new TypeError('parameter "AKProjectId" is required');
    }

    if (!hasOwnProperty(params, 'CorpIdentifier')) {
      throw new TypeError('parameter "CorpIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'Modifier')) {
      throw new TypeError('parameter "Modifier" is required');
    }

    if (!hasOwnProperty(params, 'IssueId')) {
      throw new TypeError('parameter "IssueId" is required');
    }

    options.method = 'POST';
    return this.request('UpdateWorkitem', params, options);
  }

}

module.exports = Client;
