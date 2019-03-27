
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-04-30';
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
   * @param {String} UserGroupPrincipalName - userGroupPrincipalName. optional.
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   */
  addUserToUserGroup(params = {}, options = {}) {
    return this.request('AddUserToUserGroup', params, options);
  }

  /**
   * @param {RepeatList} OrgUnit - createOrgUnitInfos. required.
   */
  batchCreateOrgUnit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrgUnit')) {
      throw new TypeError('parameter "OrgUnit" is required');
    }

    return this.request('BatchCreateOrgUnit', params, options);
  }

  /**
   * @param {RepeatList} User - createUserInfos. required.
   */
  batchCreateUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    return this.request('BatchCreateUser', params, options);
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
   */
  checkDirectoryEnabled(params = {}, options = {}) {
    return this.request('CheckDirectoryEnabled', params, options);
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
   * @param {Boolean} IsMultiTenant - isMultiTenant. optional.
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
   * @param {Boolean} GenerateRandomPassword - generateRandomPassword. optional.
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
   * @param {String} ManagerId - managerId. optional.
   */
  createOrgUnit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrgUnitName')) {
      throw new TypeError('parameter "OrgUnitName" is required');
    }

    return this.request('CreateOrgUnit', params, options);
  }

  /**
   * @param {String} SAMLProviderName - samlProviderName. required.
   * @param {String} SAMLMetadataDocument - samlMetadataDocument. required.
   * @param {String} Description - description. optional.
   */
  createSAMLProvider(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SAMLProviderName')) {
      throw new TypeError('parameter "SAMLProviderName" is required');
    }

    if (!hasOwnProperty(params, 'SAMLMetadataDocument')) {
      throw new TypeError('parameter "SAMLMetadataDocument" is required');
    }

    return this.request('CreateSAMLProvider', params, options);
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
   * @param {String} UserGroupPrincipalName - userGroupPrincipalName. required.
   * @param {String} DisplayName - displayName. optional.
   * @param {String} Comments - comments. optional.
   */
  createUserGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserGroupPrincipalName')) {
      throw new TypeError('parameter "UserGroupPrincipalName" is required');
    }

    return this.request('CreateUserGroup', params, options);
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
   * @param {Boolean} ForceDelete - forceDelete. optional.
   */
  deleteGroup(params = {}, options = {}) {
    return this.request('DeleteGroup', params, options);
  }

  /**
   * @param {String} DirectoryId - directoryId. optional.
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
   * @param {String} PublicKeyId - publicKeyId. required.
   */
  deletePublicKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicKeyId')) {
      throw new TypeError('parameter "PublicKeyId" is required');
    }

    return this.request('DeletePublicKey', params, options);
  }

  /**
   * @param {String} SAMLProviderName - samlProviderName. required.
   */
  deleteSAMLProvider(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SAMLProviderName')) {
      throw new TypeError('parameter "SAMLProviderName" is required');
    }

    return this.request('DeleteSAMLProvider', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} UserId - userId. optional.
   * @param {Boolean} ForceDelete - forceDelete. optional.
   */
  deleteUser(params = {}, options = {}) {
    return this.request('DeleteUser', params, options);
  }

  /**
   * @param {String} UserGroupPrincipalName - userGroupPrincipalName. optional.
   * @param {Boolean} ForceDelete - forceDelete. optional.
   */
  deleteUserGroup(params = {}, options = {}) {
    return this.request('DeleteUserGroup', params, options);
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
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} UserAccessKeyId - userAccessKeyId. required.
   */
  getAccessKeyLastUsed(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserAccessKeyId')) {
      throw new TypeError('parameter "UserAccessKeyId" is required');
    }

    return this.request('GetAccessKeyLastUsed', params, options);
  }

  /**
   * @param {String} UserAccessKeyIds - userAccessKeyIds. required.
   */
  getAccessKeysLastUsed(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserAccessKeyIds')) {
      throw new TypeError('parameter "UserAccessKeyIds" is required');
    }

    return this.request('GetAccessKeysLastUsed', params, options);
  }

  /**
   */
  getAccountSecurityPracticeReport(params = {}, options = {}) {
    return this.request('GetAccountSecurityPracticeReport', params, options);
  }

  /**
   */
  getAccountSummary(params = {}, options = {}) {
    return this.request('GetAccountSummary', params, options);
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
  getCustomerMFA(params = {}, options = {}) {
    return this.request('GetCustomerMFA', params, options);
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
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} PublicKeyId - publicKeyId. required.
   */
  getPublicKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicKeyId')) {
      throw new TypeError('parameter "PublicKeyId" is required');
    }

    return this.request('GetPublicKey', params, options);
  }

  /**
   * @param {String} SAMLProviderName - samlProviderName. required.
   */
  getSAMLProvider(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SAMLProviderName')) {
      throw new TypeError('parameter "SAMLProviderName" is required');
    }

    return this.request('GetSAMLProvider', params, options);
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
   * @param {String} UserAccessKeyId - userAccessKeyId. optional.
   */
  getUser(params = {}, options = {}) {
    return this.request('GetUser', params, options);
  }

  /**
   * @param {String} UserGroupPrincipalName - userGroupPrincipalName. optional.
   */
  getUserGroup(params = {}, options = {}) {
    return this.request('GetUserGroup', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   */
  getUserMFAInfo(params = {}, options = {}) {
    return this.request('GetUserMFAInfo', params, options);
  }

  /**
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   */
  getUserSecurityPracticeReport(params = {}, options = {}) {
    return this.request('GetUserSecurityPracticeReport', params, options);
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
   * @param {String} DirectoryId - directoryId. optional.
   */
  listDomain(params = {}, options = {}) {
    return this.request('ListDomain', params, options);
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
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   */
  listPublicKeys(params = {}, options = {}) {
    return this.request('ListPublicKeys', params, options);
  }

  /**
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   */
  listSAMLProviders(params = {}, options = {}) {
    return this.request('ListSAMLProviders', params, options);
  }

  /**
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   */
  listUserGroups(params = {}, options = {}) {
    return this.request('ListUserGroups', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   */
  listUserGroupsForUser(params = {}, options = {}) {
    return this.request('ListUserGroupsForUser', params, options);
  }

  /**
   * @param {String} UserType - userType. optional.
   * @param {String} ScopeType - scopeType. optional.
   * @param {String} OrgUnitPath - orgUnitPath. optional.
   * @param {String} OrgUnitId - orgUnitId. optional.
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
   * @param {String} UserGroupPrincipalName - userGroupPrincipalName. optional.
   * @param {String} Marker - marker. optional.
   * @param {Integer} MaxItems - maxItems. optional.
   */
  listUsersForUserGroup(params = {}, options = {}) {
    return this.request('ListUsersForUserGroup', params, options);
  }

  /**
   */
  preCheckEnableDirectory(params = {}, options = {}) {
    return this.request('PreCheckEnableDirectory', params, options);
  }

  /**
   * @param {String} AppId - AppId. required.
   * @param {String} Scopes - Scopes. optional.
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
   * @param {String} UserGroupPrincipalName - userGroupPrincipalName. optional.
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   */
  removeUserFromUserGroup(params = {}, options = {}) {
    return this.request('RemoveUserFromUserGroup', params, options);
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
   */
  setSamlSsoSettings(params = {}, options = {}) {
    return this.request('SetSamlSsoSettings', params, options);
  }

  /**
   * @param {Boolean} EnableSaveMFATicket - enableSaveMFATicket. optional.
   * @param {Boolean} AllowUserToChangePassword - allowUserToChangePassword. optional.
   * @param {Boolean} AllowUserToManageAccessKeys - allowUserToManageAccessKeys. optional.
   * @param {Boolean} AllowUserToManageMFADevices - allowUserToManageMFADevices. optional.
   * @param {Integer} LoginSessionDuration - loginSessionDuration. optional.
   * @param {String} LoginNetworkMasks - loginNetworkMasks. optional.
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
   * @param {Boolean} NewIsMultiTenant - NewIsMultiTenant. optional.
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
   * @param {String} IsDefault - isDefault. required.
   * @param {String} IsVerified - isVerified. required.
   */
  updateDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'IsDefault')) {
      throw new TypeError('parameter "IsDefault" is required');
    }

    if (!hasOwnProperty(params, 'IsVerified')) {
      throw new TypeError('parameter "IsVerified" is required');
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
   * @param {Boolean} GenerateRandomPassword - generateRandomPassword. optional.
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
   * @param {String} NewManagerId - newManagerId. optional.
   */
  updateOrgUnit(params = {}, options = {}) {
    return this.request('UpdateOrgUnit', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} PublicKeyId - publicKeyId. required.
   * @param {String} Status - status. required.
   */
  updatePublicKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicKeyId')) {
      throw new TypeError('parameter "PublicKeyId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdatePublicKey', params, options);
  }

  /**
   * @param {String} SAMLProviderName - samlProviderName. required.
   * @param {String} NewSAMLMetadataDocument - newSamlMetadataDocument. optional.
   * @param {String} NewDescription - newDescription. optional.
   */
  updateSAMLProvider(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SAMLProviderName')) {
      throw new TypeError('parameter "SAMLProviderName" is required');
    }

    return this.request('UpdateSAMLProvider', params, options);
  }

  /**
   * @param {Boolean} UseTenantSpecificSp - useTenantSpecificSp. required.
   */
  updateSamlSsoSpecificSp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UseTenantSpecificSp')) {
      throw new TypeError('parameter "UseTenantSpecificSp" is required');
    }

    return this.request('UpdateSamlSsoSpecificSp', params, options);
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
   * @param {String} UserGroupPrincipalName - userGroupPrincipalName. optional.
   * @param {String} NewUserGroupPrincipalName - newUserGroupPrincipalName. optional.
   * @param {String} NewComments - newComments. optional.
   * @param {String} NewDisplayName - newDisplayName. optional.
   */
  updateUserGroup(params = {}, options = {}) {
    return this.request('UpdateUserGroup', params, options);
  }

  /**
   * @param {String} UserPrincipalName - userPrincipalName. optional.
   * @param {String} PublicKeySpec - publicKeySpec. required.
   */
  uploadPublicKey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicKeySpec')) {
      throw new TypeError('parameter "PublicKeySpec" is required');
    }

    return this.request('UploadPublicKey', params, options);
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
