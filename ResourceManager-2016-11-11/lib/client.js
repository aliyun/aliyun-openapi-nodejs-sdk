
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-11';
    super(config);
  }

  /**
   * @param {String} AccountId - accountId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} PolicyType - policyType. optional.
   * @param {String} PolicyName - policyName. optional.
   * @param {String} PrincipalType - principalType. optional.
   * @param {String} PrincipalName - principalName. optional.
   */
  attachPolicy(params = {}, options = {}) {
    return this.request('AttachPolicy', params, options);
  }

  /**
   * @param {String} RecordId - recordId. required.
   */
  cancelCreateCloudAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('CancelCreateCloudAccount', params, options);
  }

  /**
   * @param {String} RecordId - recordId. required.
   */
  cancelPromoteResourceAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('CancelPromoteResourceAccount', params, options);
  }

  /**
   * @param {String} DisplayName - displayName. required.
   * @param {String} ParentFolderId - parentFolderId. optional.
   * @param {String} Email - email. required.
   */
  createCloudAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('CreateCloudAccount', params, options);
  }

  /**
   * @param {String} ParentFolderId - parentFolderId. optional.
   * @param {String} Name - name. required.
   */
  createFolder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateFolder', params, options);
  }

  /**
   * @param {String} PolicyName - policyName. optional.
   * @param {String} Description - description. optional.
   * @param {String} PolicyDocument - policyDocument. optional.
   */
  createPolicy(params = {}, options = {}) {
    return this.request('CreatePolicy', params, options);
  }

  /**
   * @param {String} PolicyName - policyName. optional.
   * @param {String} PolicyDocument - policyDocument. optional.
   * @param {Boolean} SetAsDefault - setAsDefault. optional.
   */
  createPolicyVersion(params = {}, options = {}) {
    return this.request('CreatePolicyVersion', params, options);
  }

  /**
   * @param {String} DisplayName - displayName. required.
   * @param {String} ParentFolderId - parentFolderId. optional.
   */
  createResourceAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    return this.request('CreateResourceAccount', params, options);
  }

  /**
   * @param {String} AccountId - accountId. optional.
   * @param {String} Name - name. optional.
   * @param {String} DisplayName - displayName. optional.
   */
  createResourceGroup(params = {}, options = {}) {
    return this.request('CreateResourceGroup', params, options);
  }

  /**
   * @param {String} RoleName - roleName. optional.
   * @param {String} Description - description. optional.
   * @param {String} AssumeRolePolicyDocument - assumeRolePolicyDocument. optional.
   */
  createRole(params = {}, options = {}) {
    return this.request('CreateRole', params, options);
  }

  /**
   * @param {String} FolderId - folderId. required.
   */
  deleteFolder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FolderId')) {
      throw new TypeError('parameter "FolderId" is required');
    }

    return this.request('DeleteFolder', params, options);
  }

  /**
   * @param {String} RecordId - recordId. required.
   */
  deleteInvalidCloudAccountRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('DeleteInvalidCloudAccountRecord', params, options);
  }

  /**
   * @param {String} PolicyName - policyName. optional.
   */
  deletePolicy(params = {}, options = {}) {
    return this.request('DeletePolicy', params, options);
  }

  /**
   * @param {String} PolicyName - policyName. optional.
   * @param {String} VersionId - versionId. optional.
   */
  deletePolicyVersion(params = {}, options = {}) {
    return this.request('DeletePolicyVersion', params, options);
  }

  /**
   * @param {String} AccountId - accountId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  deleteResourceGroup(params = {}, options = {}) {
    return this.request('DeleteResourceGroup', params, options);
  }

  /**
   * @param {String} RoleName - roleName. optional.
   */
  deleteRole(params = {}, options = {}) {
    return this.request('DeleteRole', params, options);
  }

  /**
   */
  destoryResourceDirectory(params = {}, options = {}) {
    return this.request('DestoryResourceDirectory', params, options);
  }

  /**
   */
  destroyResourceDirectory(params = {}, options = {}) {
    return this.request('DestroyResourceDirectory', params, options);
  }

  /**
   * @param {String} AccountId - accountId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} PolicyType - policyType. optional.
   * @param {String} PolicyName - policyName. optional.
   * @param {String} PrincipalType - principalType. optional.
   * @param {String} PrincipalName - principalName. optional.
   */
  detachPolicy(params = {}, options = {}) {
    return this.request('DetachPolicy', params, options);
  }

  /**
   * @param {String} AccountId - accountId. optional.
   */
  getAccountSummary(params = {}, options = {}) {
    return this.request('GetAccountSummary', params, options);
  }

  /**
   * @param {String} FolderId - folderId. required.
   */
  getFolder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FolderId')) {
      throw new TypeError('parameter "FolderId" is required');
    }

    return this.request('GetFolder', params, options);
  }

  /**
   * @param {String} PolicyName - policyName. optional.
   * @param {String} PolicyType - policyType. optional.
   */
  getPolicy(params = {}, options = {}) {
    return this.request('GetPolicy', params, options);
  }

  /**
   * @param {String} PolicyType - policyType. optional.
   * @param {String} PolicyName - policyName. optional.
   * @param {String} VersionId - versionId. optional.
   */
  getPolicyVersion(params = {}, options = {}) {
    return this.request('GetPolicyVersion', params, options);
  }

  /**
   */
  getResourceDirectory(params = {}, options = {}) {
    return this.request('GetResourceDirectory', params, options);
  }

  /**
   * @param {String} AccountId - accountId. required.
   */
  getResourceDirectoryAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    return this.request('GetResourceDirectoryAccount', params, options);
  }

  /**
   * @param {String} AccountId - accountId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   */
  getResourceGroup(params = {}, options = {}) {
    return this.request('GetResourceGroup', params, options);
  }

  /**
   * @param {String} RoleName - roleName. optional.
   */
  getRole(params = {}, options = {}) {
    return this.request('GetRole', params, options);
  }

  /**
   */
  initResourceDirectory(params = {}, options = {}) {
    return this.request('InitResourceDirectory', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ParentFolderId - parentFolderId. optional.
   * @param {String} QueryKeyword - queryKeyword. optional.
   */
  listAccountRecordsForParent(params = {}, options = {}) {
    return this.request('ListAccountRecordsForParent', params, options);
  }

  /**
   * @param {String} ParentFolderId - parentFolderId. optional.
   * @param {String} QueryKeyword - queryKeyword. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAccountsForParent(params = {}, options = {}) {
    return this.request('ListAccountsForParent', params, options);
  }

  /**
   * @param {String} ParentFolderId - parentFolderId. optional.
   * @param {String} QueryKeyword - queryKeyword. optional.
   * @param {Integer} PageNumberOfFolder - pageNumberOfFolder. optional.
   * @param {Integer} PageSizeOfFolder - pageSizeOfFolder. optional.
   * @param {Integer} PageNumberOfAccount - pageNumberOfAccount. optional.
   * @param {Integer} PageSizeOfAccount - pageSizeOfAccount. optional.
   */
  listChildrenForParent(params = {}, options = {}) {
    return this.request('ListChildrenForParent', params, options);
  }

  /**
   * @param {String} ParentFolderId - parentFolderId. optional.
   * @param {String} QueryKeyword - queryKeyword. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listFoldersForParent(params = {}, options = {}) {
    return this.request('ListFoldersForParent', params, options);
  }

  /**
   * @param {String} ChildId - childId. required.
   */
  listParents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChildId')) {
      throw new TypeError('parameter "ChildId" is required');
    }

    return this.request('ListParents', params, options);
  }

  /**
   * @param {String} PolicyType - policyType. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  listPolicies(params = {}, options = {}) {
    return this.request('ListPolicies', params, options);
  }

  /**
   * @param {String} AccountId - accountId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} PolicyType - policyType. optional.
   * @param {String} PolicyName - policyName. optional.
   * @param {String} PrincipalType - principalType. optional.
   * @param {String} PrincipalName - principalName. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  listPolicyAttachments(params = {}, options = {}) {
    return this.request('ListPolicyAttachments', params, options);
  }

  /**
   * @param {String} PolicyType - policyType. optional.
   * @param {String} PolicyName - policyName. optional.
   */
  listPolicyVersions(params = {}, options = {}) {
    return this.request('ListPolicyVersions', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   * @param {String} AccountId - accountId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  listResourceGroups(params = {}, options = {}) {
    return this.request('ListResourceGroups', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  listRoles(params = {}, options = {}) {
    return this.request('ListRoles', params, options);
  }

  /**
   * @param {String} Service - service. optional.
   */
  listRolesForService(params = {}, options = {}) {
    return this.request('ListRolesForService', params, options);
  }

  /**
   * @param {String} AccountId - accountId. required.
   * @param {String} DestinationFolderId - destinationFolderId. required.
   */
  moveAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationFolderId')) {
      throw new TypeError('parameter "DestinationFolderId" is required');
    }

    return this.request('MoveAccount', params, options);
  }

  /**
   * @param {String} AccountId - accountId. required.
   * @param {String} Email - email. required.
   */
  promoteResourceAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('PromoteResourceAccount', params, options);
  }

  /**
   * @param {String} AccountId - accountId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} Service - service. optional.
   * @param {String} Region - region. optional.
   * @param {String} ResourceType - resourceType. optional.
   * @param {String} ResourceId - resourceId. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - PageSize. optional.
   */
  queryResource(params = {}, options = {}) {
    return this.request('QueryResource', params, options);
  }

  /**
   * @param {String} AccountId - accountId. required.
   */
  removeCloudAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    return this.request('RemoveCloudAccount', params, options);
  }

  /**
   * @param {String} RecordId - recordId. required.
   */
  resendCreateCloudAccountEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('ResendCreateCloudAccountEmail', params, options);
  }

  /**
   * @param {String} RecordId - recordId. required.
   */
  resendPromoteResourceAccountEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    return this.request('ResendPromoteResourceAccountEmail', params, options);
  }

  /**
   * @param {String} PolicyName - policyName. optional.
   * @param {String} VersionId - versionId. optional.
   */
  setDefaultPolicyVersion(params = {}, options = {}) {
    return this.request('SetDefaultPolicyVersion', params, options);
  }

  /**
   * @param {String} FolderId - folderId. required.
   * @param {String} Name - name. required.
   */
  updateFolder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FolderId')) {
      throw new TypeError('parameter "FolderId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateFolder', params, options);
  }

  /**
   * @param {String} AccountId - accountId. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} NewDisplayName - newDisplayName. optional.
   */
  updateResourceGroup(params = {}, options = {}) {
    return this.request('UpdateResourceGroup', params, options);
  }

  /**
   * @param {String} RoleName - roleName. optional.
   * @param {String} NewAssumeRolePolicyDocument - newAssumeRolePolicyDocument. optional.
   */
  updateRole(params = {}, options = {}) {
    return this.request('UpdateRole', params, options);
  }

}

module.exports = Client;
