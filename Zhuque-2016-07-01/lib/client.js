
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CloudInstance - cloudInstance. required.
   * @param {String} Locale - locale. optional.
   */
  addCloudInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CloudInstance')) {
      throw new TypeError('parameter "CloudInstance" is required');
    }

    return this.request('AddCloudInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CustomerOrigin - customerOrigin. optional.
   * @param {String} CustomerName - customerName. required.
   * @param {String} CustomerType - customerType. required.
   * @param {String} Description - description. optional.
   * @param {String} UserList - userList. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} CustomerId - customerId. optional.
   */
  addCustomer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerName')) {
      throw new TypeError('parameter "CustomerName" is required');
    }

    if (!hasOwnProperty(params, 'CustomerType')) {
      throw new TypeError('parameter "CustomerType" is required');
    }

    return this.request('AddCustomer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Plan_pattern - plan_pattern. optional.
   * @param {String} Manager - manager. optional.
   * @param {String} Region - region. required.
   * @param {String} ProjectName - projectName. required.
   * @param {String} ProjectType - projectType. required.
   * @param {String} Creator - creator. optional.
   * @param {String} ProjectOrigin - projectOrigin. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} CloudInstance - cloudInstance. required.
   * @param {String} DeliveryDay - deliveryDay. optional.
   * @param {String} Description - description. optional.
   * @param {String} Azone - azone. optional.
   * @param {String} BusinessProjectId - businessProjectId. required.
   */
  addProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectType')) {
      throw new TypeError('parameter "ProjectType" is required');
    }

    if (!hasOwnProperty(params, 'CloudInstance')) {
      throw new TypeError('parameter "CloudInstance" is required');
    }

    if (!hasOwnProperty(params, 'BusinessProjectId')) {
      throw new TypeError('parameter "BusinessProjectId" is required');
    }

    return this.request('AddProject', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionName - versionName. required.
   * @param {String} Description - description. required.
   * @param {String} Creator - creator. required.
   * @param {String} BusinessVersionId - businessVersionId. optional.
   * @param {String} Locale - locale. optional.
   */
  addProjectVersion4Pims(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionName')) {
      throw new TypeError('parameter "VersionName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Creator')) {
      throw new TypeError('parameter "Creator" is required');
    }

    return this.request('AddProjectVersion4Pims', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Boolean} ClearHistory - clearHistory. optional.
   * @param {Boolean} UnDeploy - unDeploy. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} Project - project. required.
   * @param {String} VersionId - versionId. required.
   */
  computeMachineList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('ComputeMachineList', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} BusinessProjectId - businessProjectId. required.
   * @param {String} FromVersion - fromVersion. required.
   * @param {String} ToVersion - toVersion. required.
   * @param {String} Locale - locale. optional.
   */
  copyProjectVersion4Pims(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BusinessProjectId')) {
      throw new TypeError('parameter "BusinessProjectId" is required');
    }

    if (!hasOwnProperty(params, 'FromVersion')) {
      throw new TypeError('parameter "FromVersion" is required');
    }

    if (!hasOwnProperty(params, 'ToVersion')) {
      throw new TypeError('parameter "ToVersion" is required');
    }

    return this.request('CopyProjectVersion4Pims', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CloudInstance - cloudInstance. required.
   * @param {String} Locale - locale. optional.
   */
  getCloudInstanceDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CloudInstance')) {
      throw new TypeError('parameter "CloudInstance" is required');
    }

    return this.request('GetCloudInstanceDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} Project - project. required.
   * @param {String} VersionId - versionId. required.
   */
  getCurrentProjectStep(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('GetCurrentProjectStep', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CustomerId - customerId. optional.
   * @param {String} Locale - locale. optional.
   */
  getCustomer(params = {}, options = {}) {
    return this.request('GetCustomer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectType - projectType. required.
   * @param {String} Locale - locale. optional.
   * @param {String} BusinessProjectId - businessProjectId. required.
   * @param {String} CloudInstance - cloudInstance. required.
   * @param {String} Region - region. required.
   * @param {String} Azone - azone. required.
   */
  getProjectIdByBusinessInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectType')) {
      throw new TypeError('parameter "ProjectType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessProjectId')) {
      throw new TypeError('parameter "BusinessProjectId" is required');
    }

    if (!hasOwnProperty(params, 'CloudInstance')) {
      throw new TypeError('parameter "CloudInstance" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Azone')) {
      throw new TypeError('parameter "Azone" is required');
    }

    return this.request('GetProjectIdByBusinessInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} Locale - locale. optional.
   */
  getProjectInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetProjectInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Project - project. required.
   * @param {String} Version - version. required.
   * @param {String} Locale - locale. optional.
   */
  getProjectProductBase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'Version')) {
      throw new TypeError('parameter "Version" is required');
    }

    return this.request('GetProjectProductBase', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Region - region. required.
   * @param {String} Azone - azone. required.
   * @param {String} ProjectType - projectType. required.
   * @param {String} Locale - locale. optional.
   * @param {String} BusinessVersionId - businessVersionId. required.
   * @param {String} CloudInstance - cloudInstance. required.
   */
  getVersionIdByBusinessInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Azone')) {
      throw new TypeError('parameter "Azone" is required');
    }

    if (!hasOwnProperty(params, 'ProjectType')) {
      throw new TypeError('parameter "ProjectType" is required');
    }

    if (!hasOwnProperty(params, 'BusinessVersionId')) {
      throw new TypeError('parameter "BusinessVersionId" is required');
    }

    if (!hasOwnProperty(params, 'CloudInstance')) {
      throw new TypeError('parameter "CloudInstance" is required');
    }

    return this.request('GetVersionIdByBusinessInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} DisplayName - displayName. optional.
   * @param {String} CloudType - cloudType. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} CustomerId - customerId. optional.
   */
  listCloudInstance(params = {}, options = {}) {
    return this.request('ListCloudInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} CloudType - cloudType. optional.
   * @param {String} ProductBase - productBase. required.
   * @param {String} Project - project. optional.
   * @param {String} VersionId - versionId. optional.
   */
  listCommit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductBase')) {
      throw new TypeError('parameter "ProductBase" is required');
    }

    return this.request('ListCommit', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CustomerId - customerId. optional.
   * @param {String} CustomerName - customerName. optional.
   * @param {String} CustomerType - customerType. optional.
   * @param {String} Locale - locale. optional.
   */
  listCustomer(params = {}, options = {}) {
    return this.request('ListCustomer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} Locale - locale. optional.
   */
  listMachineTypeGroup(params = {}, options = {}) {
    return this.request('ListMachineTypeGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} Manager - manager. optional.
   * @param {String} CloudInstance - cloudInstance. optional.
   * @param {String} Region - region. optional.
   * @param {String} Azone - azone. optional.
   * @param {String} BusinessProjectId - businessProjectId. optional.
   * @param {String} ProjectType - projectType. optional.
   * @param {String} Locale - locale. optional.
   */
  listProjects(params = {}, options = {}) {
    return this.request('ListProjects', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} BusinessProjectId - businessProjectId. optional.
   * @param {String} Locale - locale. optional.
   */
  listProjectsByBusinessId(params = {}, options = {}) {
    return this.request('ListProjectsByBusinessId', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Branch - branch. optional.
   * @param {String} Commit - commit. required.
   * @param {Boolean} IsAll - isAll. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} Project - project. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} CloudType - cloudType. required.
   */
  listSelectedFeatures(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Commit')) {
      throw new TypeError('parameter "Commit" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'CloudType')) {
      throw new TypeError('parameter "CloudType" is required');
    }

    return this.request('ListSelectedFeatures', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {Boolean} Hack - hack. optional.
   * @param {String} Status - status. required.
   */
  modifyProject4pims(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('ModifyProject4pims', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} VersionId - versionId. required.
   * @param {String} PropertyMode - propertyMode. required.
   * @param {String} Modifier - modifier. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Project - project. required.
   */
  modifyProjectVersionPropertyMode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'PropertyMode')) {
      throw new TypeError('parameter "PropertyMode" is required');
    }

    if (!hasOwnProperty(params, 'Modifier')) {
      throw new TypeError('parameter "Modifier" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ModifyProjectVersionPropertyMode', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} VersionType - versionType. required.
   * @param {String} Modifier - modifier. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Project - project. required.
   * @param {String} VersionId - versionId. required.
   */
  modifyProjectVersionType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VersionType')) {
      throw new TypeError('parameter "VersionType" is required');
    }

    if (!hasOwnProperty(params, 'Modifier')) {
      throw new TypeError('parameter "Modifier" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('ModifyProjectVersionType', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectId - projectId. required.
   */
  physicalServerCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('PhysicalServerCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectId - projectId. required.
   */
  physicalServerMachineTypeCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('PhysicalServerMachineTypeCount', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CustomerId - customerId. required.
   */
  queryLocationTree(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    return this.request('QueryLocationTree', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectId - projectId. required.
   */
  queryProject4Pims(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('QueryProject4Pims', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   */
  queryZhuqueSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('QueryZhuqueSummary', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ProjectId - projectId. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} Locale - locale. optional.
   */
  queryZhuqueSummaryNew(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('QueryZhuqueSummaryNew', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} CloudInstance - cloudInstance. required.
   * @param {String} Locale - locale. optional.
   */
  saveCloudInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CloudInstance')) {
      throw new TypeError('parameter "CloudInstance" is required');
    }

    return this.request('SaveCloudInstance', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Project - project. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} Data - data. required.
   * @param {String} Locale - locale. optional.
   */
  saveMasterInputPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('SaveMasterInputPlan', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Data - data. required.
   * @param {Boolean} UnDeploy - unDeploy. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} Project - project. required.
   * @param {String} VersionId - versionId. required.
   * @param {Boolean} IgnoreCheck - ignoreCheck. optional.
   */
  saveProjectComponentPackages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('SaveProjectComponentPackages', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Data - data. required.
   * @param {String} Locale - locale. optional.
   * @param {String} Project - project. required.
   * @param {String} VersionId - versionId. required.
   */
  setProjectProductBase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    return this.request('SetProjectProductBase', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Project - project. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} Current - current. required.
   * @param {String} Status - status. required.
   * @param {String} Locale - locale. optional.
   */
  setProjectStep(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'Current')) {
      throw new TypeError('parameter "Current" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SetProjectStep', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Locale - locale. optional.
   * @param {String} CustomerId - customerId. optional.
   * @param {String} NewCustomerId - newCustomerId. optional.
   * @param {String} CustomerName - customerName. required.
   * @param {String} CustomerType - customerType. required.
   * @param {String} Description - description. optional.
   * @param {String} UserList - userList. optional.
   */
  updateCustomer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerName')) {
      throw new TypeError('parameter "CustomerName" is required');
    }

    if (!hasOwnProperty(params, 'CustomerType')) {
      throw new TypeError('parameter "CustomerType" is required');
    }

    return this.request('UpdateCustomer', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} Project - project. required.
   * @param {String} VersionId - versionId. required.
   * @param {String} Data - data. required.
   * @param {String} Locale - locale. optional.
   */
  uploadTianjiInputPlan(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    if (!hasOwnProperty(params, 'VersionId')) {
      throw new TypeError('parameter "VersionId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('UploadTianjiInputPlan', params, options);
  }

}

module.exports = Client;
