
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-01-01';
    super(config);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {String} Resource - resource. required.
   * @param {RepeatList} ActionList - actionList. required.
   * @param {String} RoleCellId - roleCellId. optional.
   * @param {Integer} GrantOption - grantOption. required.
   */
  addRoleCellToRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'ActionList')) {
      throw new TypeError('parameter "ActionList" is required');
    }

    if (!hasOwnProperty(params, 'GrantOption')) {
      throw new TypeError('parameter "GrantOption" is required');
    }

    return this.request('AddRoleCellToRole', params, options);
  }

  /**
   * @param {String} BaseRoleName - baseRoleName. required.
   * @param {String} RoleName - roleName. required.
   */
  addRoleToRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BaseRoleName')) {
      throw new TypeError('parameter "BaseRoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    return this.request('AddRoleToRole', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   * @param {String} GroupName - groupName. required.
   */
  addUserToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('AddUserToGroup', params, options);
  }

  /**
   * @param {String} OperatorUserName - operatorUserName. optional.
   * @param {String} OperatorId - operatorId. optional.
   * @param {String} OperatorType - operatorType. optional.
   */
  assignOperator(params = {}, options = {}) {
    return this.request('AssignOperator', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {String} ActionField - actionField. required.
   * @param {Long} AliUid - aliUid. optional.
   */
  checkPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'ActionField')) {
      throw new TypeError('parameter "ActionField" is required');
    }

    return this.request('CheckPermission', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   * @param {String} Description - description. optional.
   */
  createGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('CreateGroup', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleType - roleType. required.
   * @param {String} Description - description. optional.
   * @param {String} Attribute - attribute. optional.
   */
  createRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleType')) {
      throw new TypeError('parameter "RoleType" is required');
    }

    return this.request('CreateRole', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   */
  deleteGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('DeleteGroup', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   */
  deleteRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    return this.request('DeleteRole', params, options);
  }

  /**
   * @param {String} BucEmplId - bucEmplId. required.
   * @param {Long} ExpectedExpireTime - expectedExpireTime. optional.
   */
  getAccessKeyByBucEmplId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BucEmplId')) {
      throw new TypeError('parameter "BucEmplId" is required');
    }

    return this.request('GetAccessKeyByBucEmplId', params, options);
  }

  /**
   * @param {String} BucEmplId - bucEmplId. required.
   */
  getAliUidByBucEmplId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BucEmplId')) {
      throw new TypeError('parameter "BucEmplId" is required');
    }

    return this.request('GetAliUidByBucEmplId', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   */
  getGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('GetGroup', params, options);
  }

  /**
   * @param {String} AliyunId - aliyunId. required.
   */
  getOamUserByAliyunId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    return this.request('GetOamUserByAliyunId', params, options);
  }

  /**
   * @param {String} BucEmplId - bucEmplId. required.
   */
  getOamUserByBucEmplId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BucEmplId')) {
      throw new TypeError('parameter "BucEmplId" is required');
    }

    return this.request('GetOamUserByBucEmplId', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   */
  getOamUserByUserName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('GetOamUserByUserName', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   */
  getRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    return this.request('GetRole', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {String} ToOperatorName - toOperatorName. required.
   * @param {String} UserType - userType. required.
   * @param {String} GmtExpired - gmtExpired. required.
   */
  grantRoleToOperator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'ToOperatorName')) {
      throw new TypeError('parameter "ToOperatorName" is required');
    }

    if (!hasOwnProperty(params, 'UserType')) {
      throw new TypeError('parameter "UserType" is required');
    }

    if (!hasOwnProperty(params, 'GmtExpired')) {
      throw new TypeError('parameter "GmtExpired" is required');
    }

    return this.request('GrantRoleToOperator', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. optional.
   */
  listAllowedPermissions(params = {}, options = {}) {
    return this.request('ListAllowedPermissions', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   */
  listAllowedRoleCells(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('ListAllowedRoleCells', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listBaseRolesByRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListBaseRolesByRole', params, options);
  }

  /**
   * @param {String} OwnerName - ownerName. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListGroups', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listGroupsByRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListGroupsByRole', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listGroupsForUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListGroupsForUser', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listOperatorByRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListOperatorByRole', params, options);
  }

  /**
   * @param {String} OperatorName - operatorName. required.
   * @param {String} UserType - userType. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listRoleByOperator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperatorName')) {
      throw new TypeError('parameter "OperatorName" is required');
    }

    if (!hasOwnProperty(params, 'UserType')) {
      throw new TypeError('parameter "UserType" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListRoleByOperator', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {String} ActionField - actionField. required.
   */
  listRoleCellsByResourceAndAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'ActionField')) {
      throw new TypeError('parameter "ActionField" is required');
    }

    return this.request('ListRoleCellsByResourceAndAction', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listRoleCellsByRoleName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListRoleCellsByRoleName', params, options);
  }

  /**
   * @param {String} RoleNameHas - roleNameHas. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listRoles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListRoles', params, options);
  }

  /**
   * @param {String} RoleOwnerName - roleOwnerName. required.
   * @param {String} RoleOwnerType - roleOwnerType. required.
   * @param {String} RoleNameHas - roleNameHas. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listRolesByOwner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleOwnerName')) {
      throw new TypeError('parameter "RoleOwnerName" is required');
    }

    if (!hasOwnProperty(params, 'RoleOwnerType')) {
      throw new TypeError('parameter "RoleOwnerType" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListRolesByOwner', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listUsersForGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListUsersForGroup', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {String} NewRoleName - newRoleName. optional.
   * @param {String} NewRoleType - newRoleType. optional.
   * @param {String} NewDescription - newDescription. optional.
   * @param {String} NewAttribute - newAttribute. optional.
   */
  modifyRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    return this.request('ModifyRole', params, options);
  }

  /**
   * @param {String} RoleCellId - roleCellId. required.
   */
  removeRoleCellFromRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleCellId')) {
      throw new TypeError('parameter "RoleCellId" is required');
    }

    return this.request('RemoveRoleCellFromRole', params, options);
  }

  /**
   * @param {String} BaseRoleName - baseRoleName. required.
   * @param {String} RoleName - roleName. required.
   */
  removeRoleFromRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BaseRoleName')) {
      throw new TypeError('parameter "BaseRoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    return this.request('RemoveRoleFromRole', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   * @param {String} GroupName - groupName. required.
   */
  removeUserFromGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('RemoveUserFromGroup', params, options);
  }

  /**
   * @param {String} OperatorName - operatorName. required.
   */
  revokeOperator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperatorName')) {
      throw new TypeError('parameter "OperatorName" is required');
    }

    return this.request('RevokeOperator', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {String} OperatorName - operatorName. required.
   * @param {String} UserType - userType. required.
   */
  revokeRoleFromOperator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'OperatorName')) {
      throw new TypeError('parameter "OperatorName" is required');
    }

    if (!hasOwnProperty(params, 'UserType')) {
      throw new TypeError('parameter "UserType" is required');
    }

    return this.request('RevokeRoleFromOperator', params, options);
  }

  /**
   * @param {RepeatList} ResourceAction - resourceActions. required.
   */
  searchRoleByResourceAndAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceAction')) {
      throw new TypeError('parameter "ResourceAction" is required');
    }

    return this.request('SearchRoleByResourceAndAction', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {String} UserName - userName. required.
   * @param {String} UserType - userType. required.
   */
  transferRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'UserType')) {
      throw new TypeError('parameter "UserType" is required');
    }

    return this.request('TransferRole', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   * @param {String} NewGroupName - newGroupName. optional.
   * @param {String} NewDescription - newDescription. optional.
   */
  updateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('UpdateGroup', params, options);
  }

}

module.exports = Client;
