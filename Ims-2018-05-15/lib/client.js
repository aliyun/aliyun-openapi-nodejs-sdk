
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-15';
    super(config);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  addDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('AddDomain', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. required.
   * @param {String} DisplayName - displayName. required.
   * @param {String} SourceType - sourceType. optional.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {String} MobilePhone - mobilePhone. optional.
   * @param {String} Email - email. optional.
   * @param {String} Comments - comments. optional.
   * @param {String} WorkPhone - workPhone. optional.
   * @param {String} HomeAddress - homeAddress. optional.
   * @param {String} WorkAddress - workAddress. optional.
   * @param {String} EmployeeId - employeeId. optional.
   * @param {String} EmployeeType - employeeType. optional.
   * @param {String} JobTitle - jobTitle. optional.
   * @param {String} ManagerUserId - managerUserId. optional.
   * @param {String} ManagerUserPrincipalName - managerUserPrincipalName. optional.
   * @param {String} OrgUnitId - orgUnitId. optional.
   * @param {String} OrgUnitPath - orgUnitPath. optional.
   */
  addUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserPrincipalName')) {
      throw new TypeError('parameter "UserPrincipalName" is required');
    }

    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    return this.request('AddUser', params, options);
  }

  /**
   * @param {String} GroupPrincipalName - groupPrincipalName. required.
   * @param {String} UserPrincipalName - userPrincipalName. required.
   */
  addUserToGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupPrincipalName')) {
      throw new TypeError('parameter "GroupPrincipalName" is required');
    }

    if (!hasOwnProperty(params, 'UserPrincipalName')) {
      throw new TypeError('parameter "UserPrincipalName" is required');
    }

    return this.request('AddUserToGroup', params, options);
  }

  /**
   * @param {String} OldPassword - oldPassword. required.
   * @param {String} NewPassword - newPassword. required.
   */
  changePassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OldPassword')) {
      throw new TypeError('parameter "OldPassword" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    return this.request('ChangePassword', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. optional.
   * @param {String} Hid - hid. optional.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  checkResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('CheckResource', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   */
  checkUserMFA(params = {}, options = {}) {
    return this.request('CheckUserMFA', params, options);
  }

  /**
   * @param {String} UserPrincipalName - UserPrincipalName. optional.
   */
  createAccessKey(params = {}, options = {}) {
    return this.request('CreateAccessKey', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   */
  createAppSecret(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('CreateAppSecret', params, options);
  }

  /**
   * @param {String} DisplayName - DisplayName. required.
   * @param {String} AppPrincipalName - AppPrincipalName. required.
   * @param {String} AppType - AppType. required.
   * @param {String} RedirectUris - redirectUris. optional.
   * @param {Boolean} SecretRequired - SecretRequired. optional.
   * @param {Integer} AccessTokenValidity - AccessTokenValidity. optional.
   * @param {Integer} RefreshTokenValidity - RefreshTokenValidity. optional.
   * @param {String} PredefinedScopes - predefinedScopes. optional.
   */
  createApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    if (!hasOwnProperty(params, 'AppPrincipalName')) {
      throw new TypeError('parameter "AppPrincipalName" is required');
    }

    if (!hasOwnProperty(params, 'AppType')) {
      throw new TypeError('parameter "AppType" is required');
    }

    return this.request('CreateApplication', params, options);
  }

  /**
   * @param {String} GroupPrincipalName - groupPrincipalName. required.
   * @param {String} DisplayName - displayName. optional.
   * @param {String} Comments - comments. optional.
   */
  createGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupPrincipalName')) {
      throw new TypeError('parameter "GroupPrincipalName" is required');
    }

    return this.request('CreateGroup', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. required.
   * @param {String} Password - password. required.
   * @param {Boolean} PasswordResetRequired - passwordResetRequired. optional.
   * @param {Boolean} MFABindRequired - mfaBindRequired. optional.
   */
  createLoginProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserPrincipalName')) {
      throw new TypeError('parameter "UserPrincipalName" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('CreateLoginProfile', params, options);
  }

  /**
   * @param {String} OrgUnitName - orgUnitName. required.
   * @param {String} Comments - comments. optional.
   * @param {String} ParentOrgUnitId - parentOrgUnitId. optional.
   * @param {String} ParentOrgUnitPath - parentOrgUnitPath. optional.
   * @param {String} ExternalId - externalId. optional.
   */
  createOrgUnit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrgUnitName')) {
      throw new TypeError('parameter "OrgUnitName" is required');
    }

    return this.request('CreateOrgUnit', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. required.
   * @param {String} DisplayName - displayName. required.
   * @param {Boolean} Enabled - enabled. optional.
   * @param {String} MobilePhone - mobilePhone. optional.
   * @param {String} Email - email. optional.
   * @param {String} Comments - comments. optional.
   * @param {String} WorkPhone - workPhone. optional.
   * @param {String} HomeAddress - homeAddress. optional.
   * @param {String} WorkAddress - workAddress. optional.
   * @param {String} EmployeeId - employeeId. optional.
   * @param {String} EmployeeType - employeeType. optional.
   * @param {String} JobTitle - jobTitle. optional.
   * @param {String} ManagerUserId - managerUserId. optional.
   * @param {String} ManagerUserPrincipalName - managerUserPrincipalName. optional.
   * @param {String} OrgUnitId - orgUnitId. optional.
   * @param {String} OrgUnitPath - orgUnitPath. optional.
   * @param {String} ExternalId - externalId. optional.
   */
  createUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserPrincipalName')) {
      throw new TypeError('parameter "UserPrincipalName" is required');
    }

    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    return this.request('CreateUser', params, options);
  }

  /**
   * @param {String} UserAccessKeyId - userAccessKeyId. required.
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   */
  deleteAccessKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserAccessKeyId')) {
      throw new TypeError('parameter "UserAccessKeyId" is required');
    }

    return this.request('DeleteAccessKey', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   * @param {String} AppSecretId - AppSecretId. required.
   */
  deleteAppSecret(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppSecretId')) {
      throw new TypeError('parameter "AppSecretId" is required');
    }

    return this.request('DeleteAppSecret', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   */
  deleteApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeleteApplication', params, options);
  }

  /**
   */
  deleteDirectory(params = {}, options = {}) {
    return this.request('DeleteDirectory', params, options);
  }

  /**
   * @param {String} GroupPrincipalName - groupPrincipalName. optional.
   */
  deleteGroup(params = {}, options = {}) {
    return this.request('DeleteGroup', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. required.
   */
  deleteLoginProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserPrincipalName')) {
      throw new TypeError('parameter "UserPrincipalName" is required');
    }

    return this.request('DeleteLoginProfile', params, options);
  }

  /**
   * @param {String} OrgUnitPath - orgUnitPath. optional.
   * @param {String} OrgUnitId - orgUnitId. optional.
   */
  deleteOrgUnit(params = {}, options = {}) {
    return this.request('DeleteOrgUnit', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} UserId - userId. optional.
   */
  deleteUser(params = {}, options = {}) {
    return this.request('DeleteUser', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   */
  deprovisionExternalApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DeprovisionExternalApplication', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   */
  disableVirtualMFA(params = {}, options = {}) {
    return this.request('DisableVirtualMFA', params, options);
  }

  /**
   * @param {String} NewDirectoryName - newDirectoryName. optional.
   * @param {String} NewDisplayName - newDisplayName. optional.
   */
  enableDirectory(params = {}, options = {}) {
    return this.request('EnableDirectory', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} VirtualMFAKey - virtualMFAKey. required.
   * @param {String} AuthenticationCode - authenticationCode. required.
   */
  enableVirtualMFA(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VirtualMFAKey')) {
      throw new TypeError('parameter "VirtualMFAKey" is required');
    }

    if (!hasOwnProperty(params, 'AuthenticationCode')) {
      throw new TypeError('parameter "AuthenticationCode" is required');
    }

    return this.request('EnableVirtualMFA', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   */
  generateVirtualMFAKey(params = {}, options = {}) {
    return this.request('GenerateVirtualMFAKey', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   * @param {String} AppSecretId - AppSecretId. required.
   */
  getAppSecret(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'AppSecretId')) {
      throw new TypeError('parameter "AppSecretId" is required');
    }

    return this.request('GetAppSecret', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   */
  getApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetApplication', params, options);
  }

  /**
   */
  getDirectory(params = {}, options = {}) {
    return this.request('GetDirectory', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  getDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('GetDomain', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  getDomainVerificationRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('GetDomainVerificationRecords', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   */
  getExternalApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('GetExternalApplication', params, options);
  }

  /**
   * @param {String} GroupPrincipalName - groupPrincipalName. optional.
   */
  getGroup(params = {}, options = {}) {
    return this.request('GetGroup', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. required.
   */
  getLoginProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserPrincipalName')) {
      throw new TypeError('parameter "UserPrincipalName" is required');
    }

    return this.request('GetLoginProfile', params, options);
  }

  /**
   * @param {String} OrgUnitPath - orgUnitPath. optional.
   * @param {String} OrgUnitId - orgUnitId. optional.
   * @param {String} ExternalId - externalId. optional.
   */
  getOrgUnit(params = {}, options = {}) {
    return this.request('GetOrgUnit', params, options);
  }

  /**
   */
  getPasswordPolicy(params = {}, options = {}) {
    return this.request('GetPasswordPolicy', params, options);
  }

  /**
   */
  getSamlSsoProperties(params = {}, options = {}) {
    return this.request('GetSamlSsoProperties', params, options);
  }

  /**
   */
  getSamlSsoSettings(params = {}, options = {}) {
    return this.request('GetSamlSsoSettings', params, options);
  }

  /**
   */
  getSecurityPreference(params = {}, options = {}) {
    return this.request('GetSecurityPreference', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} ExternalId - externalId. optional.
   */
  getUser(params = {}, options = {}) {
    return this.request('GetUser', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   */
  listAccessKeys(params = {}, options = {}) {
    return this.request('ListAccessKeys', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   */
  listAppSecretIds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('ListAppSecretIds', params, options);
  }

  /**
   */
  listApplications(params = {}, options = {}) {
    return this.request('ListApplications', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   */
  listDirectReports(params = {}, options = {}) {
    return this.request('ListDirectReports', params, options);
  }

  /**
   * @param {String} Type - type. optional.
   */
  listDirectories(params = {}, options = {}) {
    return this.request('ListDirectories', params, options);
  }

  /**
   */
  listDomains(params = {}, options = {}) {
    return this.request('ListDomains', params, options);
  }

  /**
   */
  listExternalApplications(params = {}, options = {}) {
    return this.request('ListExternalApplications', params, options);
  }

  /**
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   */
  listGroups(params = {}, options = {}) {
    return this.request('ListGroups', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. required.
   */
  listGroupsForUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserPrincipalName')) {
      throw new TypeError('parameter "UserPrincipalName" is required');
    }

    return this.request('ListGroupsForUser', params, options);
  }

  /**
   * @param {String} OrgUnitPath - orgUnitPath. optional.
   * @param {String} OrgUnitId - orgUnitId. optional.
   * @param {String} Type - type. optional.
   */
  listOrgUnits(params = {}, options = {}) {
    return this.request('ListOrgUnits', params, options);
  }

  /**
   */
  listPredefinedScopes(params = {}, options = {}) {
    return this.request('ListPredefinedScopes', params, options);
  }

  /**
   * @param {String} UserType - userType. optional.
   * @param {String} ScopeType - scopeType. optional.
   * @param {String} OrgUnit - orgUnit. optional.
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   * @param {String} Filter - filter. optional.
   * @param {String} OrderBy - orderBy. optional.
   * @param {Boolean} IsDesc - isDesc. optional.
   */
  listUsers(params = {}, options = {}) {
    return this.request('ListUsers', params, options);
  }

  /**
   * @param {String} GroupPrincipalName - groupPrincipalName. required.
   */
  listUsersForGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupPrincipalName')) {
      throw new TypeError('parameter "GroupPrincipalName" is required');
    }

    return this.request('ListUsersForGroup', params, options);
  }

  /**
   */
  preCheckEnableDirectory(params = {}, options = {}) {
    return this.request('PreCheckEnableDirectory', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   */
  provisionExternalApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('ProvisionExternalApplication', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  removeDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('RemoveDomain', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} UserId - userId. optional.
   */
  removeUser(params = {}, options = {}) {
    return this.request('RemoveUser', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. required.
   * @param {String} GroupPrincipalName - groupPrincipalName. required.
   */
  removeUserFromGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserPrincipalName')) {
      throw new TypeError('parameter "UserPrincipalName" is required');
    }

    if (!hasOwnProperty(params, 'GroupPrincipalName')) {
      throw new TypeError('parameter "GroupPrincipalName" is required');
    }

    return this.request('RemoveUserFromGroup', params, options);
  }

  /**
   * @param {Integer} MinimumPasswordLength - minimumPasswordLength. optional.
   * @param {Boolean} RequireLowercaseCharacters - requireLowercaseCharacters. optional.
   * @param {Boolean} RequireUppercaseCharacters - requireUppercaseCharacters. optional.
   * @param {Boolean} RequireNumbers - requireNumbers. optional.
   * @param {Boolean} RequireSymbols - requireSymbols. optional.
   * @param {Boolean} HardExpire - hardExpire. optional.
   * @param {Integer} MaxLoginAttemps - maxLoginAttemps. optional.
   * @param {Integer} PasswordReusePrevention - passwordReusePrevention. optional.
   * @param {Integer} MaxPasswordAge - maxPasswordAge. optional.
   */
  setPasswordPolicy(params = {}, options = {}) {
    return this.request('SetPasswordPolicy', params, options);
  }

  /**
   * @param {String} MetadataDocument - metadataDocument. optional.
   * @param {Boolean} SsoEnabled - ssoEnabled. optional.
   * @param {Boolean} UseTenantSpecificSp - useTenantSpecificSp. optional.
   */
  setSamlSsoSettings(params = {}, options = {}) {
    return this.request('SetSamlSsoSettings', params, options);
  }

  /**
   * @param {Boolean} EnableSaveMFATicket - enableSaveMFATicket. optional.
   * @param {Boolean} AllowUserToChangePassword - allowUserToChangePassword. optional.
   * @param {Boolean} AllowUserToManageAccessKeys - allowUserToManageAccessKeys. optional.
   * @param {Boolean} AllowUserToManageMFADevices - allowUserToManageMFADevices. optional.
   */
  setSecurityPreference(params = {}, options = {}) {
    return this.request('SetSecurityPreference', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} Password - password. optional.
   * @param {String} Salt - salt. optional.
   * @param {Boolean} PasswordResetRequired - passwordResetRequired. optional.
   * @param {Boolean} MfaBindRequired - mfaBindRequired. optional.
   * @param {Long} LoginProfileCreateDate - loginProfileCreateDate. optional.
   * @param {Long} LoginProfileUpdateDate - loginProfileUpdateDate. optional.
   * @param {Integer} PasswordType - passwordType. optional.
   * @param {Boolean} Plain - plain. optional.
   */
  synchronizeLoginProfile(params = {}, options = {}) {
    return this.request('SynchronizeLoginProfile', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} UserAccessKeyId - userAccessKeyId. required.
   * @param {String} Status - status. required.
   */
  updateAccessKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserAccessKeyId')) {
      throw new TypeError('parameter "UserAccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateAccessKey', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   * @param {String} NewDisplayName - NewDisplayName. optional.
   * @param {String} NewRedirectUris - newRedirectUris. optional.
   * @param {String} NewPredefinedScopes - newPredefinedScopes. optional.
   * @param {Boolean} NewSecretRequired - NewSecretRequired. optional.
   * @param {Integer} NewAccessTokenValidity - NewAccessTokenValidity. optional.
   * @param {Integer} NewRefreshTokenValidity - NewRefreshTokenValidity. optional.
   */
  updateApplication(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('UpdateApplication', params, options);
  }

  /**
   * @param {String} NewDisplayName - newDisplayName. optional.
   * @param {String} NewDefaultDomainName - newDefaultDomainName. optional.
   */
  updateDirectory(params = {}, options = {}) {
    return this.request('UpdateDirectory', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  updateDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('UpdateDomain', params, options);
  }

  /**
   * @param {String} GroupPrincipalName - groupPrincipalName. optional.
   * @param {String} NewGroupPrincipalName - newGroupPrincipalName. optional.
   * @param {String} NewComments - newComments. optional.
   * @param {String} NewDisplayName - newDisplayName. optional.
   */
  updateGroup(params = {}, options = {}) {
    return this.request('UpdateGroup', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. required.
   * @param {String} Password - password. optional.
   * @param {Boolean} PasswordResetRequired - passwordResetRequired. optional.
   * @param {Boolean} MFABindRequired - mfaBindRequired. optional.
   */
  updateLoginProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserPrincipalName')) {
      throw new TypeError('parameter "UserPrincipalName" is required');
    }

    return this.request('UpdateLoginProfile', params, options);
  }

  /**
   * @param {String} OrgUnitPath - orgUnitPath. optional.
   * @param {String} OrgUnitId - orgUnitId. optional.
   * @param {String} NewComments - newComments. optional.
   * @param {String} NewOrgUnitName - newOrgUnitName. optional.
   * @param {String} NewParentOrgUnitId - newParentOrgUnitId. optional.
   * @param {String} NewParentOrgUnitPath - newParentOrgUnitPath. optional.
   * @param {String} NewOrgUnitPath - newOrgUnitPath. optional.
   */
  updateOrgUnit(params = {}, options = {}) {
    return this.request('UpdateOrgUnit', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} UserId - userId. optional.
   * @param {String} NewUserPrincipalName - newUserPrincipalName. optional.
   * @param {String} NewDisplayName - newDisplayName. optional.
   * @param {Boolean} NewEnabled - newEnabled. optional.
   * @param {String} NewMobilePhone - newMobilePhone. optional.
   * @param {String} NewEmail - newEmail. optional.
   * @param {String} NewComments - newComments. optional.
   * @param {String} NewWorkPhone - newWorkPhone. optional.
   * @param {String} NewHomeAddress - newHomeAddress. optional.
   * @param {String} NewWorkAddress - newWorkAddress. optional.
   * @param {String} NewEmployeeId - newEmployeeId. optional.
   * @param {String} NewEmployeeType - newEmployeeType. optional.
   * @param {String} NewJobTitle - newJobTitle. optional.
   * @param {String} NewManagerUserId - newManagerUserId. optional.
   * @param {String} NewManagerUserPrincipalName - newManagerUserPrincipalName. optional.
   * @param {String} NewOrgUnitId - newOrgUnitId. optional.
   * @param {String} NewOrgUnitPath - newOrgUnitPath. optional.
   */
  updateUser(params = {}, options = {}) {
    return this.request('UpdateUser', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  verify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('Verify', params, options);
  }

}

module.exports = Client;
