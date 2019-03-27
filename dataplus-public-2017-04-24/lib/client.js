
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-24';
    super(config);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {String} UserId - userId. required.
   */
  addDpProjectSubUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('AddDpProjectSubUser', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {String} UserId - userId. required.
   * @param {String} RoleCode - roleCode. required.
   */
  addDpProjectUserRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RoleCode')) {
      throw new TypeError('parameter "RoleCode" is required');
    }

    return this.request('AddDpProjectUserRole', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   */
  addDpTenantSubUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('AddDpTenantSubUser', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   */
  addDpTenantUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('AddDpTenantUser', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {String} UserIds - userIds. required.
   */
  batchAddDpProjectSubUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'UserIds')) {
      throw new TypeError('parameter "UserIds" is required');
    }

    return this.request('BatchAddDpProjectSubUser', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {String} UserIds - userIds. required.
   * @param {String} RoleCode - roleCode. required.
   */
  batchAddDpProjectUserRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'UserIds')) {
      throw new TypeError('parameter "UserIds" is required');
    }

    if (!hasOwnProperty(params, 'RoleCode')) {
      throw new TypeError('parameter "RoleCode" is required');
    }

    return this.request('BatchAddDpProjectUserRole', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {String} UserIds - userIds. required.
   */
  batchDeleteDpProjectSubUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'UserIds')) {
      throw new TypeError('parameter "UserIds" is required');
    }

    return this.request('BatchDeleteDpProjectSubUser', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {String} UserIds - userIds. required.
   * @param {String} RoleCode - roleCode. required.
   */
  batchDeleteDpProjectUserRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'UserIds')) {
      throw new TypeError('parameter "UserIds" is required');
    }

    if (!hasOwnProperty(params, 'RoleCode')) {
      throw new TypeError('parameter "RoleCode" is required');
    }

    return this.request('BatchDeleteDpProjectUserRole', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} AccessId - accessId. required.
   * @param {String} AccessKey - accessKey. required.
   */
  bindDpSubUserAk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'AccessId')) {
      throw new TypeError('parameter "AccessId" is required');
    }

    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    return this.request('BindDpSubUserAk', params, options);
  }

  /**
   * @param {String} AccessId - accessId. required.
   * @param {String} AccessKey - accessKey. required.
   */
  bindDpUserAk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessId')) {
      throw new TypeError('parameter "AccessId" is required');
    }

    if (!hasOwnProperty(params, 'AccessKey')) {
      throw new TypeError('parameter "AccessKey" is required');
    }

    return this.request('BindDpUserAk', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. optional.
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {String} ProjectDesc - projectDesc. optional.
   * @param {String} CalcEngineType - calcEngineType. optional.
   * @param {String} CalcEngineProjectName - calcEngineProjectName. optional.
   * @param {String} CalcEngineResourceGroup - calcEngineResourceGroup. required.
   * @param {Boolean} OpenGpu - openGpu. optional.
   */
  createDpProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'CalcEngineResourceGroup')) {
      throw new TypeError('parameter "CalcEngineResourceGroup" is required');
    }

    return this.request('CreateDpProject', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {String} UserName - userName. required.
   * @param {String} DisplayName - displayName. required.
   */
  createDpSubUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    return this.request('CreateDpSubUser', params, options);
  }

  /**
   * @param {String} ProjectGuid - projectGuid. required.
   * @param {String} TableName - tableName. required.
   * @param {String} TableNameCn - tableNameCn. optional.
   * @param {String} TableDesc - tableDesc. optional.
   * @param {Integer} Lifecycle - lifecycle. optional.
   * @param {String} Columns - columns. required.
   */
  createDpTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectGuid')) {
      throw new TypeError('parameter "ProjectGuid" is required');
    }

    if (!hasOwnProperty(params, 'TableName')) {
      throw new TypeError('parameter "TableName" is required');
    }

    if (!hasOwnProperty(params, 'Columns')) {
      throw new TypeError('parameter "Columns" is required');
    }

    return this.request('CreateDpTable', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   */
  deleteDpProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    return this.request('DeleteDpProject', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {String} UserId - userId. required.
   */
  deleteDpProjectSubUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DeleteDpProjectSubUser', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {String} UserId - userId. required.
   * @param {String} RoleCode - roleCode. required.
   */
  deleteDpProjectUserRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RoleCode')) {
      throw new TypeError('parameter "RoleCode" is required');
    }

    return this.request('DeleteDpProjectUserRole', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   */
  deleteDpTenantSubUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DeleteDpTenantSubUser', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   */
  deleteDpTenantUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DeleteDpTenantUser', params, options);
  }

  /**
   * @param {String} Guid - guid. required.
   */
  dropDpTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Guid')) {
      throw new TypeError('parameter "Guid" is required');
    }

    return this.request('DropDpTable', params, options);
  }

  /**
   */
  getAccount(params = {}, options = {}) {
    return this.request('GetAccount', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   */
  getDpProjectCreationInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    return this.request('GetDpProjectCreationInfo', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   */
  getDpProjectDeletionInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    return this.request('GetDpProjectDeletionInfo', params, options);
  }

  /**
   * @param {Long} RefreshId - refreshId. required.
   */
  getDpTenantUserRefreshInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RefreshId')) {
      throw new TypeError('parameter "RefreshId" is required');
    }

    return this.request('GetDpTenantUserRefreshInfo', params, options);
  }

  /**
   */
  getDpUser(params = {}, options = {}) {
    return this.request('GetDpUser', params, options);
  }

  /**
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDpProject(params = {}, options = {}) {
    return this.request('ListDpProject', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {Integer} Type - type. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} ResType - resType. optional.
   */
  listDpProjectResourceGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    return this.request('ListDpProjectResourceGroup', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDpProjectRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    return this.request('ListDpProjectRole', params, options);
  }

  /**
   * @param {String} ProjectIdentifier - projectIdentifier. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDpProjectUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectIdentifier')) {
      throw new TypeError('parameter "ProjectIdentifier" is required');
    }

    return this.request('ListDpProjectUser', params, options);
  }

  /**
   * @param {Integer} Type - type. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {String} ResType - resType. optional.
   */
  listDpTenantResourceGroup(params = {}, options = {}) {
    return this.request('ListDpTenantResourceGroup', params, options);
  }

  /**
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listDpTenantUser(params = {}, options = {}) {
    return this.request('ListDpTenantUser', params, options);
  }

  /**
   * @param {String} Guid - guid. optional.
   */
  metaDpTableDetail(params = {}, options = {}) {
    return this.request('MetaDpTableDetail', params, options);
  }

  /**
   * @param {Integer} Type - type. optional. default: 1.
   * @param {String} Guid - guid. required.
   * @param {String} Target - target. required.
   */
  metaGrantDpResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Guid')) {
      throw new TypeError('parameter "Guid" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    return this.request('MetaGrantDpResource', params, options);
  }

  /**
   * @param {String} ProjectGuid - projectGuid. optional.
   * @param {String} OwnerAccountId - ownerAccountId. optional.
   * @param {String} OwnerProjectGuid - ownerProjectGuid. optional.
   * @param {Integer} Type - type. optional. default: 1.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  metaListDpOuterResource(params = {}, options = {}) {
    return this.request('MetaListDpOuterResource', params, options);
  }

  /**
   * @param {String} ProjectGuid - projectGuid. optional.
   * @param {String} TargetAccountId - targetAccountId. optional.
   * @param {String} TargetProjectGuid - targetProjectGuid. optional.
   * @param {Integer} Type - type. optional. default: 1.
   * @param {String} Guids - guids. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  metaListDpOwnResource(params = {}, options = {}) {
    return this.request('MetaListDpOwnResource', params, options);
  }

  /**
   * @param {String} OdpsProject - odpsProject. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  metaListDpTable(params = {}, options = {}) {
    return this.request('MetaListDpTable', params, options);
  }

  /**
   * @param {String} ProjectGuid - projectGuid. optional.
   * @param {String} TargetAccountId - targetAccountId. optional.
   * @param {String} TargetProjectGuid - targetProjectGuid. optional.
   * @param {Integer} Type - type. optional. default: 1.
   * @param {String} Guid - guid. required.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  metaQueryDpResourceAuthDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Guid')) {
      throw new TypeError('parameter "Guid" is required');
    }

    return this.request('MetaQueryDpResourceAuthDetail', params, options);
  }

  /**
   * @param {Integer} Type - type. optional. default: 1.
   * @param {String} Guid - guid. required.
   * @param {String} Target - target. required.
   */
  metaRevokeDpResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Guid')) {
      throw new TypeError('parameter "Guid" is required');
    }

    if (!hasOwnProperty(params, 'Target')) {
      throw new TypeError('parameter "Target" is required');
    }

    options.method = 'POST';
    return this.request('MetaRevokeDpResource', params, options);
  }

  /**
   */
  refreshDpTenantUser(params = {}, options = {}) {
    return this.request('RefreshDpTenantUser', params, options);
  }

}

module.exports = Client;
