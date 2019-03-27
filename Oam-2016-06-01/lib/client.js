
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-01';
    super(config);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {Json} Actions - actions. required.
   * @param {String} ActionBid - actionBid. required.
   */
  addActions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'Actions')) {
      throw new TypeError('parameter "Actions" is required');
    }

    if (!hasOwnProperty(params, 'ActionBid')) {
      throw new TypeError('parameter "ActionBid" is required');
    }

    return this.request('AddActions', params, options);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {String} ResourceOption - resourceOption. required.
   * @param {String} ResourceOptionBid - resourceOptionBid. required.
   */
  addResourceOption(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOption')) {
      throw new TypeError('parameter "ResourceOption" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOptionBid')) {
      throw new TypeError('parameter "ResourceOptionBid" is required');
    }

    return this.request('AddResourceOption', params, options);
  }

  /**
   * @param {String} RoleId - roleId. required.
   * @param {String} Resource - resource. required.
   * @param {Json} ActionSetIdList - actionSetIdList. required.
   * @param {String} RoleCellId - roleCellId. optional.
   */
  addRoleCellToRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'ActionSetIdList')) {
      throw new TypeError('parameter "ActionSetIdList" is required');
    }

    return this.request('AddRoleCellToRole', params, options);
  }

  /**
   * @param {String} OperationAdminUserName - operationAdminUserName. required.
   * @param {String} Password - password. optional.
   */
  assignOperationAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperationAdminUserName')) {
      throw new TypeError('parameter "OperationAdminUserName" is required');
    }

    return this.request('AssignOperationAdmin', params, options);
  }

  /**
   * @param {String} OperatorUserName - operatorUserName. required.
   * @param {String} Password - password. optional.
   */
  assignOperator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperatorUserName')) {
      throw new TypeError('parameter "OperatorUserName" is required');
    }

    return this.request('AssignOperator', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleType - roleType. required.
   * @param {RepeatList} AliUids - aliUids. optional.
   * @param {RepeatList} ActionSetNames - actionSetNames. required.
   */
  assignPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleType')) {
      throw new TypeError('parameter "RoleType" is required');
    }

    if (!hasOwnProperty(params, 'ActionSetNames')) {
      throw new TypeError('parameter "ActionSetNames" is required');
    }

    return this.request('AssignPermission', params, options);
  }

  /**
   * @param {String} TenantAdminUserName - tenantAdminUserName. required.
   * @param {String} Password - password. optional.
   */
  assignTenantAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TenantAdminUserName')) {
      throw new TypeError('parameter "TenantAdminUserName" is required');
    }

    return this.request('AssignTenantAdmin', params, options);
  }

  /**
   * @param {String} CustomId - customId. required.
   * @param {Long} UserId - userId. required.
   */
  attachSubAccountToCustomId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomId')) {
      throw new TypeError('parameter "CustomId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('AttachSubAccountToCustomId', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {Long} AliUid - aliUid. required.
   */
  checkAdminPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CheckAdminPermission', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {String} ActionField - actionField. required.
   * @param {Long} AliUid - aliUid. required.
   */
  checkPermission(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'ActionField')) {
      throw new TypeError('parameter "ActionField" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('CheckPermission', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   */
  createAccessKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('CreateAccessKey', params, options);
  }

  /**
   * @param {String} ActionSetName - actionSetName. required.
   * @param {Json} Actions - actions. required.
   * @param {String} ProductName - productName. required.
   * @param {String} ActionSetBid - actionSetBid. required.
   */
  createActionSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionSetName')) {
      throw new TypeError('parameter "ActionSetName" is required');
    }

    if (!hasOwnProperty(params, 'Actions')) {
      throw new TypeError('parameter "Actions" is required');
    }

    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'ActionSetBid')) {
      throw new TypeError('parameter "ActionSetBid" is required');
    }

    return this.request('CreateActionSet', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   * @param {String} Password - password. required.
   */
  createAliyunSubAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('CreateAliyunSubAccount', params, options);
  }

  /**
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleType - roleType. required.
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
   * @param {String} ActionSetId - actionSetId. required.
   */
  deleteActionSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionSetId')) {
      throw new TypeError('parameter "ActionSetId" is required');
    }

    return this.request('DeleteActionSet', params, options);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {Json} Actions - actions. required.
   * @param {String} ActionBid - actionBid. required.
   */
  deleteActions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'Actions')) {
      throw new TypeError('parameter "Actions" is required');
    }

    if (!hasOwnProperty(params, 'ActionBid')) {
      throw new TypeError('parameter "ActionBid" is required');
    }

    return this.request('DeleteActions', params, options);
  }

  /**
   * @param {String} ResourceFormatId - resourceFormatId. required.
   */
  deleteResourceFormat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceFormatId')) {
      throw new TypeError('parameter "ResourceFormatId" is required');
    }

    return this.request('DeleteResourceFormat', params, options);
  }

  /**
   * @param {String} ResourceOptionId - resourceOptionId. required.
   */
  deleteResourceOption(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ResourceOptionId')) {
      throw new TypeError('parameter "ResourceOptionId" is required');
    }

    return this.request('DeleteResourceOption', params, options);
  }

  /**
   * @param {String} RoleId - roleId. required.
   */
  deleteRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('DeleteRole', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   * @param {String} Password - password. optional.
   * @param {String} NewUserName - newUserName. required.
   * @param {String} DisplayName - displayName. optional.
   */
  deleteSubAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'NewUserName')) {
      throw new TypeError('parameter "NewUserName" is required');
    }

    return this.request('DeleteSubAccount', params, options);
  }

  /**
   * @param {String} CustomId - customId. required.
   * @param {Long} UserId - userId. required.
   */
  detachSubAccountFromCustomId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomId')) {
      throw new TypeError('parameter "CustomId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('DetachSubAccountFromCustomId', params, options);
  }

  /**
   * @param {String} BucEmplId - bucEmplId. required.
   * @param {Long} ExpectedExpireTime - expectedExpireTime. required.
   */
  getAccessKeyByBucEmplId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BucEmplId')) {
      throw new TypeError('parameter "BucEmplId" is required');
    }

    if (!hasOwnProperty(params, 'ExpectedExpireTime')) {
      throw new TypeError('parameter "ExpectedExpireTime" is required');
    }

    return this.request('GetAccessKeyByBucEmplId', params, options);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {String} ActionBid - actionBid. required.
   */
  getActionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'ActionBid')) {
      throw new TypeError('parameter "ActionBid" is required');
    }

    return this.request('GetActionList', params, options);
  }

  /**
   * @param {String} ActionSetId - actionSetId. required.
   */
  getActionSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionSetId')) {
      throw new TypeError('parameter "ActionSetId" is required');
    }

    return this.request('GetActionSet', params, options);
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
   * @param {String} BucEmplId - bucEmplId. required.
   */
  getAliUidStringByBucEmplId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BucEmplId')) {
      throw new TypeError('parameter "BucEmplId" is required');
    }

    return this.request('GetAliUidStringByBucEmplId', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   */
  getAliyunAccountInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('GetAliyunAccountInfo', params, options);
  }

  /**
   * @param {Long} AliUid - aliUid. required.
   */
  getBucEmplIdByAliUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('GetBucEmplIdByAliUid', params, options);
  }

  /**
   * @param {String} AliUid - aliUid. required.
   */
  getBucEmplIdByAliUidString(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('GetBucEmplIdByAliUidString', params, options);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {String} ResourceFormatBid - resourceFormatBid. required.
   */
  getResourceFormat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'ResourceFormatBid')) {
      throw new TypeError('parameter "ResourceFormatBid" is required');
    }

    return this.request('GetResourceFormat', params, options);
  }

  /**
   * @param {String} RoleId - roleId. required.
   */
  getRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('GetRole', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {Long} OperationAdminUid - operationAdminUid. required.
   */
  grantResourceToOperationAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'OperationAdminUid')) {
      throw new TypeError('parameter "OperationAdminUid" is required');
    }

    return this.request('GrantResourceToOperationAdmin', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {Long} TenantAdminUid - tenantAdminUid. required.
   */
  grantResourceToTenantAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'TenantAdminUid')) {
      throw new TypeError('parameter "TenantAdminUid" is required');
    }

    return this.request('GrantResourceToTenantAdmin', params, options);
  }

  /**
   * @param {String} RoleId - roleId. required.
   * @param {Long} ToOperatorUid - toOperatorUid. required.
   */
  grantRoleToOperator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'ToOperatorUid')) {
      throw new TypeError('parameter "ToOperatorUid" is required');
    }

    return this.request('GrantRoleToOperator', params, options);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listActionSetByBidAndProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListActionSetByBidAndProduct', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {Long} AliUid - aliUid. required.
   */
  listAllowedAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'AliUid')) {
      throw new TypeError('parameter "AliUid" is required');
    }

    return this.request('ListAllowedAction', params, options);
  }

  /**
   * @param {String} UserId - userId. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listOperationAdminByBid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListOperationAdminByBid', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   */
  listOperationAdminByResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    return this.request('ListOperationAdminByResource', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listOperatorByBid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListOperatorByBid', params, options);
  }

  /**
   * @param {String} RoleId - roleId. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listOperatorByRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
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
   * @param {Long} OperationAdminUid - operationAdminUid. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listResourceByOperationAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperationAdminUid')) {
      throw new TypeError('parameter "OperationAdminUid" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListResourceByOperationAdmin', params, options);
  }

  /**
   * @param {Long} TenantAdminUid - tenantAdminUid. required.
   * @param {Integer} PageIndex - pageIndex. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listResourceByTenantAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TenantAdminUid')) {
      throw new TypeError('parameter "TenantAdminUid" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListResourceByTenantAdmin', params, options);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {String} ResourceOptionBid - resourceOptionBid. required.
   */
  listResourceOptions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'ResourceOptionBid')) {
      throw new TypeError('parameter "ResourceOptionBid" is required');
    }

    return this.request('ListResourceOptions', params, options);
  }

  /**
   * @param {Long} OperatorUid - operatorUid. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listRoleByOperator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperatorUid')) {
      throw new TypeError('parameter "OperatorUid" is required');
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
   * @param {String} RoleId - roleId. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listRoleCellsByRoleId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListRoleCellsByRoleId', params, options);
  }

  /**
   * @param {Long} OperationAdminUid - operationAdminUid. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listRoleOwnedByOperationAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperationAdminUid')) {
      throw new TypeError('parameter "OperationAdminUid" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListRoleOwnedByOperationAdmin', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listRoles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListRoles', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageIndex - pageIndex. required.
   */
  listTenantAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('ListTenantAdmin', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   */
  listTenantAdminByResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    return this.request('ListTenantAdminByResource', params, options);
  }

  /**
   * @param {String} ActionSetId - actionSetId. required.
   * @param {String} ActionSetName - actionSetName. required.
   * @param {Json} Actions - actions. required.
   * @param {String} ProductName - productName. required.
   * @param {String} ApproverUserId - approverUserId. required.
   * @param {String} Description - description. optional.
   */
  modifyActionSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ActionSetId')) {
      throw new TypeError('parameter "ActionSetId" is required');
    }

    if (!hasOwnProperty(params, 'ActionSetName')) {
      throw new TypeError('parameter "ActionSetName" is required');
    }

    if (!hasOwnProperty(params, 'Actions')) {
      throw new TypeError('parameter "Actions" is required');
    }

    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'ApproverUserId')) {
      throw new TypeError('parameter "ApproverUserId" is required');
    }

    return this.request('ModifyActionSet', params, options);
  }

  /**
   * @param {String} RoleId - roleId. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} RoleType - roleType. required.
   */
  modifyRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'RoleType')) {
      throw new TypeError('parameter "RoleType" is required');
    }

    return this.request('ModifyRole', params, options);
  }

  /**
   * @param {String} InputJson - inputJson. required.
   */
  oamInput(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InputJson')) {
      throw new TypeError('parameter "InputJson" is required');
    }

    return this.request('OamInput', params, options);
  }

  /**
   * @param {RepeatList} RoleId - roleIds. optional.
   * @param {RepeatList} ResourceFormatId - resourceFormatIds. optional.
   * @param {Boolean} AuthorizationRelationFlag - authorizationRelationFlag. required.
   */
  oamOutput(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuthorizationRelationFlag')) {
      throw new TypeError('parameter "AuthorizationRelationFlag" is required');
    }

    return this.request('OamOutput', params, options);
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
   * @param {Long} OperationAdminUid - operationAdminUid. required.
   */
  revokeOperationAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperationAdminUid')) {
      throw new TypeError('parameter "OperationAdminUid" is required');
    }

    return this.request('RevokeOperationAdmin', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   */
  revokeOperationAdminByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('RevokeOperationAdminByName', params, options);
  }

  /**
   * @param {Long} OperatorUid - operatorUid. required.
   */
  revokeOperator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperatorUid')) {
      throw new TypeError('parameter "OperatorUid" is required');
    }

    return this.request('RevokeOperator', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   */
  revokeOperatorByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('RevokeOperatorByName', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {Long} OperationAdminUid - operationAdminUid. required.
   */
  revokeResourceFromOperationAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'OperationAdminUid')) {
      throw new TypeError('parameter "OperationAdminUid" is required');
    }

    return this.request('RevokeResourceFromOperationAdmin', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {Long} TenantAdminUid - tenantAdminUid. required.
   */
  revokeResourceFromTenantAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'TenantAdminUid')) {
      throw new TypeError('parameter "TenantAdminUid" is required');
    }

    return this.request('RevokeResourceFromTenantAdmin', params, options);
  }

  /**
   * @param {String} RoleId - roleId. required.
   * @param {Long} OperatorUid - operatorUid. required.
   */
  revokeRoleFromOperator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'OperatorUid')) {
      throw new TypeError('parameter "OperatorUid" is required');
    }

    return this.request('RevokeRoleFromOperator', params, options);
  }

  /**
   * @param {Long} TenantAdminUid - tenantAdminUid. required.
   */
  revokeTenantAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TenantAdminUid')) {
      throw new TypeError('parameter "TenantAdminUid" is required');
    }

    return this.request('RevokeTenantAdmin', params, options);
  }

  /**
   * @param {Long} TenantAdminUid - tenantAdminUid. required.
   */
  revokeTenantAdminByName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TenantAdminUid')) {
      throw new TypeError('parameter "TenantAdminUid" is required');
    }

    return this.request('RevokeTenantAdminByName', params, options);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {String} ResourceFormat - resourceFormat. required.
   * @param {String} ResourceFormatBid - resourceFormatBid. required.
   */
  setResourceFormat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'ResourceFormat')) {
      throw new TypeError('parameter "ResourceFormat" is required');
    }

    if (!hasOwnProperty(params, 'ResourceFormatBid')) {
      throw new TypeError('parameter "ResourceFormatBid" is required');
    }

    return this.request('SetResourceFormat', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {Long} FromOperationAdminUid - fromOperationAdminUid. required.
   * @param {Long} ToOperationAdminUid - toOperationAdminUid. required.
   */
  transferResourceForOperationAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'FromOperationAdminUid')) {
      throw new TypeError('parameter "FromOperationAdminUid" is required');
    }

    if (!hasOwnProperty(params, 'ToOperationAdminUid')) {
      throw new TypeError('parameter "ToOperationAdminUid" is required');
    }

    return this.request('TransferResourceForOperationAdmin', params, options);
  }

  /**
   * @param {String} Resource - resource. required.
   * @param {Long} FromTenantAdminUid - fromTenantAdminUid. required.
   * @param {Long} ToTenantAdminUid - toTenantAdminUid. required.
   */
  transferResourceForTenantAdmin(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Resource')) {
      throw new TypeError('parameter "Resource" is required');
    }

    if (!hasOwnProperty(params, 'FromTenantAdminUid')) {
      throw new TypeError('parameter "FromTenantAdminUid" is required');
    }

    if (!hasOwnProperty(params, 'ToTenantAdminUid')) {
      throw new TypeError('parameter "ToTenantAdminUid" is required');
    }

    return this.request('TransferResourceForTenantAdmin', params, options);
  }

  /**
   * @param {String} RoleId - roleId. required.
   * @param {Long} FromOperationAdminUid - fromOperationAdminUid. required.
   * @param {Long} ToOperationAdminUid - toOperationAdminUid. required.
   */
  transferRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'FromOperationAdminUid')) {
      throw new TypeError('parameter "FromOperationAdminUid" is required');
    }

    if (!hasOwnProperty(params, 'ToOperationAdminUid')) {
      throw new TypeError('parameter "ToOperationAdminUid" is required');
    }

    return this.request('TransferRole', params, options);
  }

  /**
   * @param {String} ProductName - productName. required.
   * @param {String} FromAction - fromAction. required.
   * @param {String} ToAction - toAction. required.
   * @param {String} ActionBid - actionBid. required.
   */
  updateAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'FromAction')) {
      throw new TypeError('parameter "FromAction" is required');
    }

    if (!hasOwnProperty(params, 'ToAction')) {
      throw new TypeError('parameter "ToAction" is required');
    }

    if (!hasOwnProperty(params, 'ActionBid')) {
      throw new TypeError('parameter "ActionBid" is required');
    }

    return this.request('UpdateAction', params, options);
  }

  /**
   * @param {String} UserName - userName. required.
   * @param {String} Password - password. optional.
   * @param {String} NewUserName - newUserName. required.
   * @param {String} DisplayName - displayName. optional.
   */
  updateSubAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'NewUserName')) {
      throw new TypeError('parameter "NewUserName" is required');
    }

    return this.request('UpdateSubAccount', params, options);
  }

}

module.exports = Client;
