
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-05-01';
    super(config);
  }

  /**
   * @param {String} AccountId - AccountId. optional.
   */
  activateService(params = {}, options = {}) {
    return this.request('ActivateService', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} GroupName - GroupName. optional.
   */
  addUserToGroup(params = {}, options = {}) {
    return this.request('AddUserToGroup', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} GroupName - GroupName. optional.
   */
  attachPolicyToGroup(params = {}, options = {}) {
    return this.request('AttachPolicyToGroup', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} RoleName - RoleName. optional.
   */
  attachPolicyToRole(params = {}, options = {}) {
    return this.request('AttachPolicyToRole', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} UserName - UserName. optional.
   */
  attachPolicyToUser(params = {}, options = {}) {
    return this.request('AttachPolicyToUser', params, options);
  }

  /**
   * @param {String} SerialNumber - SerialNumber. optional.
   * @param {String} UserName - UserName. optional.
   * @param {String} AuthenticationCode1 - AuthenticationCode1. optional.
   * @param {String} AuthenticationCode2 - AuthenticationCode2. optional.
   */
  bindMFADevice(params = {}, options = {}) {
    return this.request('BindMFADevice', params, options);
  }

  /**
   * @param {String} OldPassword - OldPassword. optional.
   * @param {String} NewPassword - NewPassword. optional.
   */
  changePassword(params = {}, options = {}) {
    return this.request('ChangePassword', params, options);
  }

  /**
   */
  clearAccountAlias(params = {}, options = {}) {
    return this.request('ClearAccountAlias', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  createAccessKey(params = {}, options = {}) {
    return this.request('CreateAccessKey', params, options);
  }

  /**
   * @param {String} GroupName - GroupName. optional.
   * @param {String} Comments - Comments. optional.
   */
  createGroup(params = {}, options = {}) {
    return this.request('CreateGroup', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} Password - Password. optional.
   * @param {Boolean} PasswordResetRequired - PasswordResetRequired. optional.
   * @param {Boolean} MFABindRequired - MFABindRequired. optional.
   */
  createLoginProfile(params = {}, options = {}) {
    return this.request('CreateLoginProfile', params, options);
  }

  /**
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} Description - Description. optional.
   * @param {String} PolicyDocument - PolicyDocument. optional.
   */
  createPolicy(params = {}, options = {}) {
    return this.request('CreatePolicy', params, options);
  }

  /**
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} PolicyDocument - PolicyDocument. optional.
   * @param {Boolean} SetAsDefault - SetAsDefault. optional.
   */
  createPolicyVersion(params = {}, options = {}) {
    return this.request('CreatePolicyVersion', params, options);
  }

  /**
   * @param {String} RoleName - RoleName. optional.
   * @param {String} Description - Description. optional.
   * @param {String} AssumeRolePolicyDocument - AssumeRolePolicyDocument. optional.
   */
  createRole(params = {}, options = {}) {
    return this.request('CreateRole', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} DisplayName - DisplayName. optional.
   * @param {String} MobilePhone - MobilePhone. optional.
   * @param {String} Email - Email. optional.
   * @param {String} Comments - Comments. optional.
   */
  createUser(params = {}, options = {}) {
    return this.request('CreateUser', params, options);
  }

  /**
   * @param {String} VirtualMFADeviceName - VirtualMFADeviceName. optional.
   */
  createVirtualMFADevice(params = {}, options = {}) {
    return this.request('CreateVirtualMFADevice', params, options);
  }

  /**
   * @param {String} AccountId - AccountId. optional.
   */
  deactivateService(params = {}, options = {}) {
    return this.request('DeactivateService', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} UserAccessKeyId - UserAccessKeyId. optional.
   */
  deleteAccessKey(params = {}, options = {}) {
    return this.request('DeleteAccessKey', params, options);
  }

  /**
   * @param {String} GroupName - GroupName. optional.
   */
  deleteGroup(params = {}, options = {}) {
    return this.request('DeleteGroup', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  deleteLoginProfile(params = {}, options = {}) {
    return this.request('DeleteLoginProfile', params, options);
  }

  /**
   * @param {String} PolicyName - PolicyName. optional.
   */
  deletePolicy(params = {}, options = {}) {
    return this.request('DeletePolicy', params, options);
  }

  /**
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} VersionId - VersionId. optional.
   */
  deletePolicyVersion(params = {}, options = {}) {
    return this.request('DeletePolicyVersion', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} UserPublicKeyId - UserPublicKeyId. optional.
   */
  deletePublicKey(params = {}, options = {}) {
    return this.request('DeletePublicKey', params, options);
  }

  /**
   * @param {String} RoleName - RoleName. optional.
   */
  deleteRole(params = {}, options = {}) {
    return this.request('DeleteRole', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  deleteUser(params = {}, options = {}) {
    return this.request('DeleteUser', params, options);
  }

  /**
   * @param {String} SerialNumber - SerialNumber. optional.
   */
  deleteVirtualMFADevice(params = {}, options = {}) {
    return this.request('DeleteVirtualMFADevice', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} GroupName - GroupName. optional.
   */
  detachPolicyFromGroup(params = {}, options = {}) {
    return this.request('DetachPolicyFromGroup', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} RoleName - RoleName. optional.
   */
  detachPolicyFromRole(params = {}, options = {}) {
    return this.request('DetachPolicyFromRole', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} UserName - UserName. optional.
   */
  detachPolicyFromUser(params = {}, options = {}) {
    return this.request('DetachPolicyFromUser', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} UserAccessKeyId - UserAccessKeyId. optional.
   */
  getAccessKeyLastUsed(params = {}, options = {}) {
    return this.request('GetAccessKeyLastUsed', params, options);
  }

  /**
   */
  getAccountAlias(params = {}, options = {}) {
    return this.request('GetAccountAlias', params, options);
  }

  /**
   */
  getAccountSummary(params = {}, options = {}) {
    return this.request('GetAccountSummary', params, options);
  }

  /**
   * @param {String} GroupName - GroupName. optional.
   */
  getGroup(params = {}, options = {}) {
    return this.request('GetGroup', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  getLoginProfile(params = {}, options = {}) {
    return this.request('GetLoginProfile', params, options);
  }

  /**
   */
  getPasswordPolicy(params = {}, options = {}) {
    return this.request('GetPasswordPolicy', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   */
  getPolicy(params = {}, options = {}) {
    return this.request('GetPolicy', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} VersionId - VersionId. optional.
   */
  getPolicyVersion(params = {}, options = {}) {
    return this.request('GetPolicyVersion', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} UserPublicKeyId - UserPublicKeyId. optional.
   */
  getPublicKey(params = {}, options = {}) {
    return this.request('GetPublicKey', params, options);
  }

  /**
   * @param {String} RoleName - RoleName. optional.
   */
  getRole(params = {}, options = {}) {
    return this.request('GetRole', params, options);
  }

  /**
   */
  getSecurityPreference(params = {}, options = {}) {
    return this.request('GetSecurityPreference', params, options);
  }

  /**
   * @param {String} AccountId - AccountId. optional.
   */
  getServiceStatus(params = {}, options = {}) {
    return this.request('GetServiceStatus', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  getUser(params = {}, options = {}) {
    return this.request('GetUser', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  getUserMFAInfo(params = {}, options = {}) {
    return this.request('GetUserMFAInfo', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  listAccessKeys(params = {}, options = {}) {
    return this.request('ListAccessKeys', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   */
  listEntitiesForPolicy(params = {}, options = {}) {
    return this.request('ListEntitiesForPolicy', params, options);
  }

  /**
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxItems - MaxItems. optional.
   */
  listGroups(params = {}, options = {}) {
    return this.request('ListGroups', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  listGroupsForUser(params = {}, options = {}) {
    return this.request('ListGroupsForUser', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxItems - MaxItems. optional.
   */
  listPolicies(params = {}, options = {}) {
    return this.request('ListPolicies', params, options);
  }

  /**
   * @param {String} GroupName - GroupName. optional.
   */
  listPoliciesForGroup(params = {}, options = {}) {
    return this.request('ListPoliciesForGroup', params, options);
  }

  /**
   * @param {String} RoleName - RoleName. optional.
   */
  listPoliciesForRole(params = {}, options = {}) {
    return this.request('ListPoliciesForRole', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  listPoliciesForUser(params = {}, options = {}) {
    return this.request('ListPoliciesForUser', params, options);
  }

  /**
   * @param {String} PolicyType - PolicyType. optional.
   * @param {String} PolicyName - PolicyName. optional.
   */
  listPolicyVersions(params = {}, options = {}) {
    return this.request('ListPolicyVersions', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  listPublicKeys(params = {}, options = {}) {
    return this.request('ListPublicKeys', params, options);
  }

  /**
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxItems - MaxItems. optional.
   */
  listRoles(params = {}, options = {}) {
    return this.request('ListRoles', params, options);
  }

  /**
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxItems - MaxItems. optional.
   * @param {String} Service - Service. optional.
   */
  listRolesForService(params = {}, options = {}) {
    return this.request('ListRolesForService', params, options);
  }

  /**
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxItems - MaxItems. optional.
   */
  listUsers(params = {}, options = {}) {
    return this.request('ListUsers', params, options);
  }

  /**
   * @param {String} GroupName - GroupName. optional.
   * @param {String} Marker - Marker. optional.
   * @param {Integer} MaxItems - MaxItems. optional.
   */
  listUsersForGroup(params = {}, options = {}) {
    return this.request('ListUsersForGroup', params, options);
  }

  /**
   */
  listVirtualMFADevices(params = {}, options = {}) {
    return this.request('ListVirtualMFADevices', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} GroupName - GroupName. optional.
   */
  removeUserFromGroup(params = {}, options = {}) {
    return this.request('RemoveUserFromGroup', params, options);
  }

  /**
   * @param {String} AccountAlias - AccountAlias. optional.
   */
  setAccountAlias(params = {}, options = {}) {
    return this.request('SetAccountAlias', params, options);
  }

  /**
   * @param {String} PolicyName - PolicyName. optional.
   * @param {String} VersionId - VersionId. optional.
   */
  setDefaultPolicyVersion(params = {}, options = {}) {
    return this.request('SetDefaultPolicyVersion', params, options);
  }

  /**
   * @param {Integer} MinimumPasswordLength - MinimumPasswordLength. optional.
   * @param {Boolean} RequireLowercaseCharacters - RequireLowercaseCharacters. optional.
   * @param {Boolean} RequireUppercaseCharacters - RequireUppercaseCharacters. optional.
   * @param {Boolean} RequireNumbers - RequireNumbers. optional.
   * @param {Boolean} RequireSymbols - RequireSymbols. optional.
   * @param {Boolean} HardExpiry - HardExpiry. optional.
   * @param {Integer} MaxPasswordAge - MaxPasswordAge. optional.
   * @param {Integer} PasswordReusePrevention - PasswordReusePrevention. optional.
   * @param {Integer} MaxLoginAttemps - MaxLoginAttemps. optional.
   */
  setPasswordPolicy(params = {}, options = {}) {
    return this.request('SetPasswordPolicy', params, options);
  }

  /**
   * @param {Boolean} EnableSaveMFATicket - EnableSaveMFATicket. optional.
   * @param {Boolean} AllowUserToChangePassword - AllowUserToChangePassword. optional.
   * @param {Boolean} AllowUserToManageAccessKeys - AllowUserToManageAccessKeys. optional.
   * @param {Boolean} AllowUserToManagePublicKeys - AllowUserToManagePublicKeys. optional.
   * @param {Boolean} AllowUserToManageMFADevices - AllowUserToManageMFADevices. optional.
   * @param {Integer} LoginSessionDuration - LoginSessionDuration. optional.
   * @param {String} LoginNetworkMasks - LoginNetworkMasks. optional.
   */
  setSecurityPreference(params = {}, options = {}) {
    return this.request('SetSecurityPreference', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   */
  unbindMFADevice(params = {}, options = {}) {
    return this.request('UnbindMFADevice', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} UserAccessKeyId - UserAccessKeyId. optional.
   * @param {String} Status - Status. optional.
   */
  updateAccessKey(params = {}, options = {}) {
    return this.request('UpdateAccessKey', params, options);
  }

  /**
   * @param {String} GroupName - GroupName. optional.
   * @param {String} NewGroupName - NewGroupName. optional.
   * @param {String} NewComments - NewComments. optional.
   */
  updateGroup(params = {}, options = {}) {
    return this.request('UpdateGroup', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} Password - Password. optional.
   * @param {Boolean} PasswordResetRequired - PasswordResetRequired. optional.
   * @param {Boolean} MFABindRequired - MFABindRequired. optional.
   */
  updateLoginProfile(params = {}, options = {}) {
    return this.request('UpdateLoginProfile', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} UserPublicKeyId - UserPublicKeyId. optional.
   * @param {String} Status - Status. optional.
   */
  updatePublicKey(params = {}, options = {}) {
    return this.request('UpdatePublicKey', params, options);
  }

  /**
   * @param {String} RoleName - RoleName. optional.
   * @param {String} NewAssumeRolePolicyDocument - NewAssumeRolePolicyDocument. optional.
   */
  updateRole(params = {}, options = {}) {
    return this.request('UpdateRole', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} NewUserName - NewUserName. optional.
   * @param {String} NewDisplayName - NewDisplayName. optional.
   * @param {String} NewMobilePhone - NewMobilePhone. optional.
   * @param {String} NewEmail - NewEmail. optional.
   * @param {String} NewComments - NewComments. optional.
   */
  updateUser(params = {}, options = {}) {
    return this.request('UpdateUser', params, options);
  }

  /**
   * @param {String} UserName - UserName. optional.
   * @param {String} PublicKeySpec - PublicKeySpec. optional.
   */
  uploadPublicKey(params = {}, options = {}) {
    return this.request('UploadPublicKey', params, options);
  }

}

module.exports = Client;
