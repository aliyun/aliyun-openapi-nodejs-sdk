
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-05';
    super(config);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {Boolean} All - all. required.
   * @param {String} JobGroupId - groupId. optional.
   * @param {RepeatList} JobId - jobIds. optional.
   */
  abortPredictiveJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    return this.request('AbortPredictiveJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} PhoneNumber - phoneNumbers. required.
   * @param {String} Usage - usage. required.
   * @param {String} ContactFlowId - contactFlowId. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   */
  addBulkPhoneNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'Usage')) {
      throw new TypeError('parameter "Usage" is required');
    }

    return this.request('AddBulkPhoneNumbers', params, options);
  }

  /**
   * @param {String} Provider - provider. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   */
  addCustomerNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Provider')) {
      throw new TypeError('parameter "Provider" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('AddCustomerNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. required.
   * @param {String} Service - service. required.
   * @param {String} FunctionName - functionName. required.
   * @param {String} Role - role. required.
   * @param {String} Description - description. required.
   */
  addFunctionMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'Role')) {
      throw new TypeError('parameter "Role" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('AddFunctionMeta', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} Usage - usage. required.
   * @param {String} ContactFlowId - contactFlowId. optional.
   */
  addPhoneNumberEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'Usage')) {
      throw new TypeError('parameter "Usage" is required');
    }

    return this.request('AddPhoneNumberEx', params, options);
  }

  /**
   * @param {String} Provider - provider. required.
   * @param {String} Name - name. required.
   * @param {String} Ip - ip. required.
   * @param {String} Port - port. required.
   * @param {String} SendInterface - sendInterface. required.
   */
  addSipAgentGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Provider')) {
      throw new TypeError('parameter "Provider" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    if (!hasOwnProperty(params, 'SendInterface')) {
      throw new TypeError('parameter "SendInterface" is required');
    }

    return this.request('AddSipAgentGroup', params, options);
  }

  /**
   * @param {String} Number - number. required.
   * @param {Integer} Trunks - trunks. required.
   * @param {Boolean} InboundOnly - inboundOnly. required.
   */
  addTestPhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    if (!hasOwnProperty(params, 'Trunks')) {
      throw new TypeError('parameter "Trunks" is required');
    }

    if (!hasOwnProperty(params, 'InboundOnly')) {
      throw new TypeError('parameter "InboundOnly" is required');
    }

    return this.request('AddTestPhoneNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {RepeatList} UserId - userIds. required.
   * @param {RepeatList} SkillLevel - skillLevels. required.
   */
  addUsersToSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'SkillLevel')) {
      throw new TypeError('parameter "SkillLevel" is required');
    }

    return this.request('AddUsersToSkillGroup', params, options);
  }

  /**
   * @param {String} LegalPersonrCertNumber - legalPersonrCertNumber. optional.
   * @param {String} LegalPersonName - legalPersonName. optional.
   * @param {String} ManagerContactPhoneNumber - managerContactPhoneNumber. optional.
   * @param {String} OrganizationCode - organizationCode. optional.
   * @param {String} TelecomUndertakingPic - telecomUndertakingPic. optional.
   * @param {String} ManagerCertPic - managerCertPic. optional.
   * @param {String} RegionNameCity - regionNameCity. optional.
   * @param {String} RegionNameProvince - regionNameProvince. optional.
   * @param {String} CorpName - corpName. optional.
   * @param {String} ManagerName - managerName. optional.
   * @param {String} ManagerCertNumber - managerCertNumber. optional.
   * @param {String} NumberApplicationLetterPic - NumberApplicationLetterPic. optional.
   * @param {String} BusinessLicensePic - businessLicensePic. optional.
   * @param {String} BusinessLicenseAddress - businessLicenseAddress. optional.
   * @param {String} ApplyRemark - applyRemark. optional.
   * @param {String} ProcedureDesc - procedureDesc. required.
   * @param {String} RegisteredFundCode - registeredFundCode. optional.
   * @param {String} SpecIdArray - specIdArray. required.
   * @param {String} CorporationCertPic - corporationCertPic. optional.
   * @param {Integer} BusinessType - businessType. optional.
   * @param {String} BusinessTypeDesc - businessTypeDesc. optional.
   */
  applyCorpIdentify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProcedureDesc')) {
      throw new TypeError('parameter "ProcedureDesc" is required');
    }

    if (!hasOwnProperty(params, 'SpecIdArray')) {
      throw new TypeError('parameter "SpecIdArray" is required');
    }

    return this.request('ApplyCorpIdentify', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} RamId - ramId. optional.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {String} PressKey - pressKey. optional.
   * @param {String} Type - type. required.
   * @param {String} PressKeyMapping - pressKeyMapping. required.
   * @param {String} Acid - acid. required.
   * @param {String} Source - source. required.
   */
  appraise(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'PressKeyMapping')) {
      throw new TypeError('parameter "PressKeyMapping" is required');
    }

    if (!hasOwnProperty(params, 'Acid')) {
      throw new TypeError('parameter "Acid" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    return this.request('Appraise', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumberId - phoneNumberId. required.
   * @param {String} ContactFlowId - contactFlowId. required.
   */
  assignContactFlowToPhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumberId')) {
      throw new TypeError('parameter "PhoneNumberId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowId')) {
      throw new TypeError('parameter "ContactFlowId" is required');
    }

    return this.request('AssignContactFlowToPhoneNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   * @param {RepeatList} JobsJson - jobsJson. required.
   */
  assignJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'JobsJson')) {
      throw new TypeError('parameter "JobsJson" is required');
    }

    return this.request('AssignJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleId - roleId. required.
   * @param {RepeatList} PrivilegeId - privilegeIds. required.
   */
  assignPrivilegesToRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'PrivilegeId')) {
      throw new TypeError('parameter "PrivilegeId" is required');
    }

    return this.request('AssignPrivilegesToRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   * @param {RepeatList} RoleId - roleIds. required.
   */
  assignRolesToUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('AssignRolesToUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} UserRamId - userRamIds. required.
   * @param {RepeatList} RoleId - roleIds. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  assignUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserRamId')) {
      throw new TypeError('parameter "UserRamId" is required');
    }

    return this.request('AssignUsers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} userRamInfo - userRamInfos. required.
   * @param {RepeatList} RoleId - roleIds. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  assignUsersEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'userRamInfo')) {
      throw new TypeError('parameter "userRamInfo" is required');
    }

    return this.request('AssignUsersEx', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - additionalContext. optional.
   */
  authorizedVn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('AuthorizedVn', params, options);
  }

  /**
   * @param {RepeatList} Record - records. required.
   */
  batchCreateFeeRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Record')) {
      throw new TypeError('parameter "Record" is required');
    }

    return this.request('BatchCreateFeeRecord', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} NavigationScriptIds - navigationScriptIds. optional.
   */
  batchDeleteVnNavigationScripts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('BatchDeleteVnNavigationScripts', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} NavigationScriptIds - navigationScriptIds. optional.
   * @param {String} TargetCategoryId - targetCategoryId. required.
   */
  batchMoveVnNavigationScripts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetCategoryId')) {
      throw new TypeError('parameter "TargetCategoryId" is required');
    }

    return this.request('BatchMoveVnNavigationScripts', params, options);
  }

  /**
   * @param {RepeatList} TaobaoAliyunAccount - taobaoAliyunAccounts. required.
   */
  batchUpdateTaobaoUserMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaobaoAliyunAccount')) {
      throw new TypeError('parameter "TaobaoAliyunAccount" is required');
    }

    return this.request('BatchUpdateTaobaoUserMap', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowId - contactFlowId. required.
   */
  beginContactFlowVersionModification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowId')) {
      throw new TypeError('parameter "ContactFlowId" is required');
    }

    options.method = 'POST';
    return this.request('BeginContactFlowVersionModification', params, options);
  }

  /**
   * @param {String} CalledNumber - calledNumber. optional.
   * @param {String} CallingNumber - callingNumber. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - initialContext. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  beginVnDialogue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallingNumber')) {
      throw new TypeError('parameter "CallingNumber" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('BeginVnDialogue', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} ProviderId - providerId. required.
   * @param {String} Type - type. required.
   * @param {String} PoolId - poolId. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} TelX - telX. optional.
   * @param {String} PoolName - poolName. optional.
   * @param {String} AreaCode - areaCode. optional.
   * @param {String} Extra - extra. optional.
   * @param {String} RegionNameCity - regionNameCity. optional.
   */
  bindAXNPrivacyNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ProviderId')) {
      throw new TypeError('parameter "ProviderId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'PoolId')) {
      throw new TypeError('parameter "PoolId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('BindAXNPrivacyNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TelA - telA. required.
   * @param {String} TelB - telB. required.
   */
  callOnlinePrivacyNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TelA')) {
      throw new TypeError('parameter "TelA" is required');
    }

    if (!hasOwnProperty(params, 'TelB')) {
      throw new TypeError('parameter "TelB" is required');
    }

    return this.request('CallOnlinePrivacyNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowVersionId - contactFlowVersionId. required.
   */
  cancelContactFlowVersionModification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowVersionId')) {
      throw new TypeError('parameter "ContactFlowVersionId" is required');
    }

    return this.request('CancelContactFlowVersionModification', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} All - all. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {RepeatList} JobId - jobIds. optional.
   * @param {RepeatList} JobReferenceId - jobReferenceIds. optional.
   */
  cancelJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    return this.request('CancelJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} All - all. required.
   * @param {String} JobGroupId - groupId. required.
   * @param {RepeatList} JobId - jobIds. optional.
   */
  cancelPredictiveJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('CancelPredictiveJobs', params, options);
  }

  /**
   */
  checkAssumeRole(params = {}, options = {}) {
    return this.request('CheckAssumeRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} Number - number. optional.
   */
  collectedVnNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('CollectedVnNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowVersionId - contactFlowVersionId. required.
   * @param {String} Canvas - canvas. required.
   * @param {String} Content - content. required.
   */
  commitContactFlowVersionModification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowVersionId')) {
      throw new TypeError('parameter "ContactFlowVersionId" is required');
    }

    if (!hasOwnProperty(params, 'Canvas')) {
      throw new TypeError('parameter "Canvas" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    options.method = 'POST';
    return this.request('CommitContactFlowVersionModification', params, options);
  }

  /**
   * @param {Long} TaobaoUid - taobaoUid. optional.
   * @param {Long} startTime - startTime. optional.
   * @param {Long} endTime - endTime. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} articleCodeList - articleCodeList. optional.
   * @param {String} articleItemCodeList - articleItemCodeList. optional.
   * @param {String} typeList - typeList. optional.
   */
  commonQueryTaobaoOrder(params = {}, options = {}) {
    return this.request('CommonQueryTaobaoOrder', params, options);
  }

  /**
   * @param {String} RegionNameCity - regionNameCity. required.
   * @param {String} RegionNameProvince - regionNameProvince. required.
   * @param {String} OffsiteCertPic - offsiteCertPic. required.
   * @param {String} RealNameInsId - realNameInsId. required.
   * @param {String} OrderId - orderId. required.
   */
  copyCorpIdentify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionNameCity')) {
      throw new TypeError('parameter "RegionNameCity" is required');
    }

    if (!hasOwnProperty(params, 'RegionNameProvince')) {
      throw new TypeError('parameter "RegionNameProvince" is required');
    }

    if (!hasOwnProperty(params, 'OffsiteCertPic')) {
      throw new TypeError('parameter "OffsiteCertPic" is required');
    }

    if (!hasOwnProperty(params, 'RealNameInsId')) {
      throw new TypeError('parameter "RealNameInsId" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CopyCorpIdentify', params, options);
  }

  /**
   * @param {String} ProviderId - providerId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} Type - type. required.
   * @param {String} PoolId - poolId. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} PoolName - poolName. optional.
   * @param {String} Extra - extra. optional.
   */
  createAXBBindRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProviderId')) {
      throw new TypeError('parameter "ProviderId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'PoolId')) {
      throw new TypeError('parameter "PoolId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('CreateAXBBindRelation', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   * @param {String} JobFilePath - jobFilePath. optional.
   * @param {Boolean} Submitted - submitted. required.
   */
  createBatchJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Submitted')) {
      throw new TypeError('parameter "Submitted" is required');
    }

    return this.request('CreateBatchJobs', params, options);
  }

  /**
   * @param {String} RealNameInsId - realNameInsId. required.
   * @param {String} RegionNameCity - regionNameCity. required.
   * @param {String} RegionNameProvince - regionNameProvince. required.
   * @param {String} CorpName - corpName. required.
   * @param {String} SpecId - specId. required.
   * @param {String} SpecName - specName. required.
   * @param {Integer} MonthlyPrice - monthlyPrice. required.
   * @param {RepeatList} Number - numbers. required.
   */
  createCCCPhoneNumberOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RealNameInsId')) {
      throw new TypeError('parameter "RealNameInsId" is required');
    }

    if (!hasOwnProperty(params, 'RegionNameCity')) {
      throw new TypeError('parameter "RegionNameCity" is required');
    }

    if (!hasOwnProperty(params, 'RegionNameProvince')) {
      throw new TypeError('parameter "RegionNameProvince" is required');
    }

    if (!hasOwnProperty(params, 'CorpName')) {
      throw new TypeError('parameter "CorpName" is required');
    }

    if (!hasOwnProperty(params, 'SpecId')) {
      throw new TypeError('parameter "SpecId" is required');
    }

    if (!hasOwnProperty(params, 'SpecName')) {
      throw new TypeError('parameter "SpecName" is required');
    }

    if (!hasOwnProperty(params, 'MonthlyPrice')) {
      throw new TypeError('parameter "MonthlyPrice" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    return this.request('CreateCCCPhoneNumberOrder', params, options);
  }

  /**
   * @param {String} InstanceName - instanceName. required.
   * @param {String} InstanceDescription - instanceDescription. optional.
   * @param {Integer} MaxConcurrentConversation - maxConcurrentConversation. required.
   * @param {String} CallCenterInstanceId - callCenterInstanceId. optional.
   */
  createCabInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceName')) {
      throw new TypeError('parameter "InstanceName" is required');
    }

    if (!hasOwnProperty(params, 'MaxConcurrentConversation')) {
      throw new TypeError('parameter "MaxConcurrentConversation" is required');
    }

    return this.request('CreateCabInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} Name - name. required.
   * @param {String} Options - options. required.
   * @param {Integer} Type - type. required.
   */
  createCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Options')) {
      throw new TypeError('parameter "Options" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateCategory', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Type - type. required.
   * @param {String} Canvas - canvas. required.
   * @param {String} Content - content. required.
   */
  createContactFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Canvas')) {
      throw new TypeError('parameter "Canvas" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    options.method = 'POST';
    return this.request('CreateContactFlow', params, options);
  }

  /**
   * @param {String} corpName - corpName. optional.
   * @param {Long} TaobaoUid - taobaoUid. required.
   * @param {Long} RamId - ramId. optional.
   * @param {Long} OrderId - orderId. required.
   * @param {Long} partnerId - partnerId. optional.
   * @param {String} applyRemark - applyRemark. optional.
   * @param {String} regionNameProvince - regionNameProvince. optional.
   * @param {String} regionNameCity - regionNameCity. optional.
   * @param {String} legalPersonName - legalPersonName. optional.
   * @param {String} legalPersonCertNumber - legalPersonCertNumber. optional.
   * @param {String} managerContactPhoneNumber - managerContactPhoneNumber. optional.
   * @param {String} managerName - managerName. optional.
   * @param {String} businessLicenseAddress - businessLicenseAddress. optional.
   * @param {String} managerCertNumber - managerCertNumber. optional.
   * @param {String} organizationCode - organizationCode. optional.
   * @param {String} telecomUndertakingPic - telecomUndertakingPic. optional.
   * @param {String} managerCertPic - managerCertPic. optional.
   * @param {String} numberApplicationLetterPic - numberApplicationLetterPic. optional.
   * @param {String} businessLicensePic - businessLicensePic. optional.
   * @param {String} procedureDesc - procedureDesc. optional.
   */
  createCorpIdentify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaobaoUid')) {
      throw new TypeError('parameter "TaobaoUid" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CreateCorpIdentify', params, options);
  }

  /**
   * @param {Long} TaobaoUid - taobaoUid. optional.
   * @param {Long} RamId - ramId. optional.
   * @param {Long} RealNameInsId - realNameInsId. required.
   * @param {String} Number - number. required.
   * @param {String} regionNameProvince - regionNameProvince. optional.
   * @param {String} regionNameCity - regionNameCity. optional.
   * @param {String} corpName - corpName. optional.
   * @param {String} monthlyPrice - monthlyPrice. optional.
   */
  createCorpNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RealNameInsId')) {
      throw new TypeError('parameter "RealNameInsId" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    return this.request('CreateCorpNumber', params, options);
  }

  /**
   * @param {Long} taobaoMainUid - taobaoMainUid. optional.
   * @param {Long} taobaoUid - taobaoUid. optional.
   * @param {Long} mainRamId - mainRamId. optional.
   * @param {Long} ramId - ramId. optional.
   * @param {String} caller - caller. required.
   * @param {String} callee - callee. required.
   * @param {String} statusCode - statusCode. optional.
   * @param {Integer} duration - duration. required.
   * @param {Integer} origDuration - origDuration. required.
   * @param {String} bizId - bizId. optional.
   * @param {Long} startTime - startTime. optional.
   * @param {Long} endTime - endTime. optional.
   */
  createFeeRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'caller')) {
      throw new TypeError('parameter "caller" is required');
    }

    if (!hasOwnProperty(params, 'callee')) {
      throw new TypeError('parameter "callee" is required');
    }

    if (!hasOwnProperty(params, 'duration')) {
      throw new TypeError('parameter "duration" is required');
    }

    if (!hasOwnProperty(params, 'origDuration')) {
      throw new TypeError('parameter "origDuration" is required');
    }

    return this.request('CreateFeeRecord', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Integer} StorageMaxDays - storageMaxDays. required.
   * @param {Integer} StorageMaxSize - storageMaxSize. required.
   * @param {String} DirectoryId - directoryId. optional.
   * @param {RepeatList} AdminRamId - adminRamIds. optional.
   * @param {RepeatList} PhoneNumber - phoneNumbers. required.
   * @param {RepeatList} UserObject - userObjects. optional.
   */
  createInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'StorageMaxDays')) {
      throw new TypeError('parameter "StorageMaxDays" is required');
    }

    if (!hasOwnProperty(params, 'StorageMaxSize')) {
      throw new TypeError('parameter "StorageMaxSize" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('CreateInstance', params, options);
  }

  /**
   * @param {String} CreateInstanceParam - createInstanceParam. required.
   */
  createInstanceEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CreateInstanceParam')) {
      throw new TypeError('parameter "CreateInstanceParam" is required');
    }

    return this.request('CreateInstanceEx', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   */
  createJobGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateJobGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   * @param {String} OssFileName - ossFileName. required.
   * @param {String} OssFilePath - ossFilePath. required.
   * @param {String} UploadResult - uploadResult. required.
   */
  createMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'OssFileName')) {
      throw new TypeError('parameter "OssFileName" is required');
    }

    if (!hasOwnProperty(params, 'OssFilePath')) {
      throw new TypeError('parameter "OssFilePath" is required');
    }

    if (!hasOwnProperty(params, 'UploadResult')) {
      throw new TypeError('parameter "UploadResult" is required');
    }

    return this.request('CreateMedia', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   * @param {String} OssFileName - ossFileName. required.
   * @param {String} OssFilePath - ossFilePath. required.
   * @param {String} UploadResult - uploadResult. required.
   */
  createMediaEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'OssFileName')) {
      throw new TypeError('parameter "OssFileName" is required');
    }

    if (!hasOwnProperty(params, 'OssFilePath')) {
      throw new TypeError('parameter "OssFilePath" is required');
    }

    if (!hasOwnProperty(params, 'UploadResult')) {
      throw new TypeError('parameter "UploadResult" is required');
    }

    return this.request('CreateMediaEx', params, options);
  }

  /**
   * @param {Integer} MaxInstances - maxInstances. required.
   * @param {Integer} MaxAgents - maxAgents. required.
   * @param {Integer} MaxOnlineAgents - maxOnlineAgents. required.
   * @param {Integer} StorageMaxDays - storageMaxDays. required.
   * @param {Integer} StorageMaxSize - storageMaxSize. required.
   * @param {Integer} MaxPhoneNumbers - maxPhoneNumbers. required.
   * @param {Integer} MaxSkillGroups - maxSkillGroups. required.
   * @param {Integer} MaxContactFlows - maxContactFlows. required.
   * @param {Integer} MaxRoles - maxRoles. required.
   */
  createOrModifySystemSpecification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaxInstances')) {
      throw new TypeError('parameter "MaxInstances" is required');
    }

    if (!hasOwnProperty(params, 'MaxAgents')) {
      throw new TypeError('parameter "MaxAgents" is required');
    }

    if (!hasOwnProperty(params, 'MaxOnlineAgents')) {
      throw new TypeError('parameter "MaxOnlineAgents" is required');
    }

    if (!hasOwnProperty(params, 'StorageMaxDays')) {
      throw new TypeError('parameter "StorageMaxDays" is required');
    }

    if (!hasOwnProperty(params, 'StorageMaxSize')) {
      throw new TypeError('parameter "StorageMaxSize" is required');
    }

    if (!hasOwnProperty(params, 'MaxPhoneNumbers')) {
      throw new TypeError('parameter "MaxPhoneNumbers" is required');
    }

    if (!hasOwnProperty(params, 'MaxSkillGroups')) {
      throw new TypeError('parameter "MaxSkillGroups" is required');
    }

    if (!hasOwnProperty(params, 'MaxContactFlows')) {
      throw new TypeError('parameter "MaxContactFlows" is required');
    }

    if (!hasOwnProperty(params, 'MaxRoles')) {
      throw new TypeError('parameter "MaxRoles" is required');
    }

    return this.request('CreateOrModifySystemSpecification', params, options);
  }

  /**
   * @param {String} RealNameInsId - realNameInsId. optional.
   * @param {String} RegionNameCity - regionNameCity. optional.
   * @param {String} RegionNameProvince - regionNameProvince. optional.
   * @param {String} CorpName - corpName. optional.
   * @param {String} SpecId - specId. optional.
   * @param {String} SpecName - specName. optional.
   * @param {String} MonthlyPrice - monthlyPrice. optional.
   * @param {RepeatList} Number - numbers. required.
   * @param {Long} BuyerId - buyerId. required.
   * @param {Long} PayerId - payerId. optional.
   */
  createPhoneRepayOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    if (!hasOwnProperty(params, 'BuyerId')) {
      throw new TypeError('parameter "BuyerId" is required');
    }

    return this.request('CreatePhoneRepayOrder', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} StrategyJson - strategyJson. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {RepeatList} JobsJson - jobsJson. optional.
   * @param {String} JobFilePath - jobFilePath. optional.
   */
  createPredictiveJobGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyJson')) {
      throw new TypeError('parameter "StrategyJson" is required');
    }

    options.method = 'POST';
    return this.request('CreatePredictiveJobGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} StrategyJson - strategyJson. required.
   * @param {RepeatList} JobsJson - jobsJson. required.
   */
  createPredictiveJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyJson')) {
      throw new TypeError('parameter "StrategyJson" is required');
    }

    if (!hasOwnProperty(params, 'JobsJson')) {
      throw new TypeError('parameter "JobsJson" is required');
    }

    return this.request('CreatePredictiveJobs', params, options);
  }

  /**
   * @param {String} ProviderId - providerId. required.
   * @param {String} AccountId - accountId. required.
   * @param {String} AuthToken - authToken. required.
   */
  createPrivacyNumberAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProviderId')) {
      throw new TypeError('parameter "ProviderId" is required');
    }

    if (!hasOwnProperty(params, 'AccountId')) {
      throw new TypeError('parameter "AccountId" is required');
    }

    if (!hasOwnProperty(params, 'AuthToken')) {
      throw new TypeError('parameter "AuthToken" is required');
    }

    return this.request('CreatePrivacyNumberAccount', params, options);
  }

  /**
   * @param {String} ProviderId - providerId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} Name - name. required.
   * @param {String} Type - type. required.
   */
  createPrivacyNumberPool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProviderId')) {
      throw new TypeError('parameter "ProviderId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreatePrivacyNumberPool', params, options);
  }

  /**
   * @param {String} ProductCode - productCode. required.
   * @param {String} SubscriptionType - subscriptionType. required.
   * @param {String} Role - role. optional.
   */
  createRamInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionType')) {
      throw new TypeError('parameter "SubscriptionType" is required');
    }

    return this.request('CreateRamInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {RepeatList} PrivilegeId - privilegeIds. required.
   * @param {RepeatList} UserId - userIds. optional.
   */
  createRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PrivilegeId')) {
      throw new TypeError('parameter "PrivilegeId" is required');
    }

    return this.request('CreateRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {String} Type - type. optional.
   * @param {String} BeebotVersion - beebotVersion. optional.
   * @param {RepeatList} SurveysJson - surveysJson. optional.
   */
  createScenario(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateScenario', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} TemplateId - templateId. required.
   * @param {String} Variables - variables. optional.
   * @param {String} BeebotVersion - beebotVersion. optional.
   */
  createScenarioFromTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'TemplateId')) {
      throw new TypeError('parameter "TemplateId" is required');
    }

    return this.request('CreateScenarioFromTemplate', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} Name - name. required.
   * @param {String} Title - title. required.
   * @param {String} Description - description. optional.
   * @param {String} DefaultValue - defaultValue. optional.
   */
  createScenarioParameter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    return this.request('CreateScenarioParameter', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} RoutingStrategy - routingStrategy. optional.
   * @param {RepeatList} OutboundPhoneNumberId - outboundPhoneNumberIds. optional.
   * @param {RepeatList} UserId - userIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   * @param {Boolean} AllowPrivateOutboundNumber - allowPrivateOutboundNumber. optional.
   */
  createSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateSkillGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} SignName - signName. required.
   * @param {String} TemplateCode - templateCode. required.
   * @param {String} Extra - extra. optional.
   * @param {Integer} Scenario - scenario. required.
   */
  createSmsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SignName')) {
      throw new TypeError('parameter "SignName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    if (!hasOwnProperty(params, 'Scenario')) {
      throw new TypeError('parameter "Scenario" is required');
    }

    return this.request('CreateSmsConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StrategyJson - strategyJson. required.
   */
  createStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyJson')) {
      throw new TypeError('parameter "StrategyJson" is required');
    }

    return this.request('CreateStrategy', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FlowJson - flowJson. optional.
   * @param {String} Corpora - corpora. optional.
   * @param {String} SpeechOptimizationParam - speechOptimizationParam. optional.
   * @param {String} GlobalQuestions - globalQuestions. optional.
   * @param {String} Role - role. optional.
   * @param {Integer} Round - round. optional.
   * @param {String} BeebotId - beebotId. optional.
   * @param {String} FlowJsonOssKey - flowJsonOssKey. optional.
   */
  createSurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateSurvey', params, options);
  }

  /**
   * @param {Long} TaobaoUid - taobaoUid. required.
   * @param {Integer} type - type. optional.
   * @param {Integer} status - status. optional.
   * @param {Long} ExpiresIn - expiresIn. optional.
   * @param {Integer} IncomingAccount - incomingAccount. optional.
   * @param {Integer} OutcomingAccount - outcomingAccount. optional.
   * @param {Long} OrderRecordId - orderRecordId. optional.
   * @param {Long} PlanId - planId. optional.
   * @param {Long} StartDate - startDate. optional.
   * @param {Float} ProdFee - prodFee. optional.
   * @param {String} TaobaoNick - taobaoNick. optional.
   * @param {Long} PayDate - payDate. optional.
   * @param {Long} OrderId - orderId. optional.
   * @param {Long} ParentOrderId - parentOrderId. optional.
   * @param {Float} FactMoney - factMoney. optional.
   * @param {String} ArticleCode - articleCode. optional.
   * @param {String} articleItemCode - articleItemCode. optional.
   */
  createTaobaoOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaobaoUid')) {
      throw new TypeError('parameter "TaobaoUid" is required');
    }

    return this.request('CreateTaobaoOrder', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Type - type. required.
   * @param {String} Description - description. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} ExtraAttr - extraAttr. optional.
   */
  createTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateTask', params, options);
  }

  /**
   * @param {Long} TbUserid - tbUserid. required.
   * @param {String} TbNickname - tbNickname. required.
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {Boolean} SubAccount - subAccount. optional.
   * @param {Long} PrimaryAccountPk - primaryAccountPk. optional.
   * @param {String} AliyunAkId - aliyunAkId. optional.
   * @param {String} AliyunAkSecret - aliyunAkSecret. optional.
   */
  createTbAliyunUserMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TbUserid')) {
      throw new TypeError('parameter "TbUserid" is required');
    }

    if (!hasOwnProperty(params, 'TbNickname')) {
      throw new TypeError('parameter "TbNickname" is required');
    }

    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    return this.request('CreateTbAliyunUserMapping', params, options);
  }

  /**
   * @param {String} DisplayName - displayName. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} LoginName - loginName. required.
   * @param {String} Phone - phone. optional.
   * @param {String} Email - email. required.
   * @param {String} PrivateOutboundNumberId - privateOutboundNumberId. optional.
   * @param {RepeatList} RoleId - roleIds. required.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  createUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'LoginName')) {
      throw new TypeError('parameter "LoginName" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('CreateUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Data - data. required.
   * @param {String} Separator - separator. required.
   * @param {RepeatList} RoleId - roleIds. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   * @param {RepeatList} User - users. required.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} ConfirmEmail - confirmEmail. required.
   * @param {Boolean} ResetPassword - resetPassword. optional.
   */
  createUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'Separator')) {
      throw new TypeError('parameter "Separator" is required');
    }

    if (!hasOwnProperty(params, 'User')) {
      throw new TypeError('parameter "User" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'ConfirmEmail')) {
      throw new TypeError('parameter "ConfirmEmail" is required');
    }

    return this.request('CreateUsers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} ParentId - parentId. optional.
   */
  createVnCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateVnCategory', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {Long} Concurrency - concurrency. required.
   * @param {String} ChatbotInstanceId - chatbotInstanceId. optional.
   * @param {String} NluServiceType - nluServiceType. optional.
   */
  createVnInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Concurrency')) {
      throw new TypeError('parameter "Concurrency" is required');
    }

    return this.request('CreateVnInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. required.
   * @param {String} UserUtterance - userUtterance. required.
   * @param {RepeatList} SimilarUtterances - similarUtterances. optional.
   * @param {String} Answer - answer. required.
   * @param {Boolean} Interruptible - interruptible. optional.
   */
  createVnKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    if (!hasOwnProperty(params, 'UserUtterance')) {
      throw new TypeError('parameter "UserUtterance" is required');
    }

    if (!hasOwnProperty(params, 'Answer')) {
      throw new TypeError('parameter "Answer" is required');
    }

    return this.request('CreateVnKnowledge', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. required.
   * @param {String} UserUtterance - userUtterance. required.
   * @param {RepeatList} SimilarUtterances - similarUtterances. optional.
   * @param {String} Prompt - prompt. optional.
   * @param {Boolean} Interruptible - interruptible. optional.
   * @param {String} RedirectionType - redirectionType. required.
   * @param {String} RedirectionTarget - redirectionTarget. optional.
   */
  createVnRedirection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    if (!hasOwnProperty(params, 'UserUtterance')) {
      throw new TypeError('parameter "UserUtterance" is required');
    }

    if (!hasOwnProperty(params, 'RedirectionType')) {
      throw new TypeError('parameter "RedirectionType" is required');
    }

    return this.request('CreateVnRedirection', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - additionalContext. optional.
   */
  debugAuthorizedVn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('DebugAuthorizedVn', params, options);
  }

  /**
   * @param {String} CalledNumber - calledNumber. optional.
   * @param {String} CallingNumber - callingNumber. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - initialContext. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  debugBeginVnDialogue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CallingNumber')) {
      throw new TypeError('parameter "CallingNumber" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DebugBeginVnDialogue', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} Number - number. optional.
   */
  debugCollectedVnNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('DebugCollectedVnNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} NewSession - newSession. optional.
   * @param {String} SurveyId - surveyId. required.
   * @param {String} CallId - callId. required.
   * @param {String} CallType - callType. optional.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} TaskId - taskId. optional.
   * @param {String} Utterance - utterance. required.
   * @param {String} ActionParams - actionParams. optional.
   * @param {String} CallingNumber - callingNumber. optional.
   * @param {String} CalledNumber - calledNumber. optional.
   */
  debugDialogue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'Utterance')) {
      throw new TypeError('parameter "Utterance" is required');
    }

    return this.request('DebugDialogue', params, options);
  }

  /**
   * @param {String} ConversationId - conversationId. required.
   * @param {String} AdditionalContext - additionalContext. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Utterance - utterance. required.
   */
  debugDialogueVn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Utterance')) {
      throw new TypeError('parameter "Utterance" is required');
    }

    return this.request('DebugDialogueVn', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {Boolean} NewSession - newSession. optional.
   * @param {String} CallId - callId. required.
   * @param {String} SurveyId - surveyId. required.
   * @param {String} Utterance - utterance. optional.
   */
  debugIntent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    return this.request('DebugIntent', params, options);
  }

  /**
   * @param {String} PublicKey - publicKey. required.
   * @param {RepeatList} CypherText - cypherTexts. required.
   */
  decrypt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PublicKey')) {
      throw new TypeError('parameter "PublicKey" is required');
    }

    if (!hasOwnProperty(params, 'CypherText')) {
      throw new TypeError('parameter "CypherText" is required');
    }

    return this.request('Decrypt', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  deleteCabInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteCabInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} CategoryId - categoryId. required.
   */
  deleteCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('DeleteCategory', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowId - contactFlowId. required.
   */
  deleteContactFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowId')) {
      throw new TypeError('parameter "ContactFlowId" is required');
    }

    return this.request('DeleteContactFlow', params, options);
  }

  /**
   * @param {String} Provider - provider. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   */
  deleteCustomerNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Provider')) {
      throw new TypeError('parameter "Provider" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('DeleteCustomerNumber', params, options);
  }

  /**
   * @param {String} bizId - bizId. required.
   */
  deleteFeeRecordByBizId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'bizId')) {
      throw new TypeError('parameter "bizId" is required');
    }

    return this.request('DeleteFeeRecordByBizId', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FunctionId - functionId. required.
   */
  deleteFunctionMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FunctionId')) {
      throw new TypeError('parameter "FunctionId" is required');
    }

    return this.request('DeleteFunctionMeta', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  deleteInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  deleteInstanceEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteInstanceEx', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  deleteJobGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('DeleteJobGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   */
  deleteMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteMedia', params, options);
  }

  /**
   * @param {String} PoolId - poolId. required.
   */
  deletePrivacyNumberPool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PoolId')) {
      throw new TypeError('parameter "PoolId" is required');
    }

    return this.request('DeletePrivacyNumberPool', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleId - roleId. required.
   */
  deleteRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('DeleteRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   */
  deleteScenario(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('DeleteScenario', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} ScenarioParameterId - scenarioParameterId. required.
   */
  deleteScenarioParameter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioParameterId')) {
      throw new TypeError('parameter "ScenarioParameterId" is required');
    }

    return this.request('DeleteScenarioParameter', params, options);
  }

  /**
   * @param {String} Provider - provider. required.
   * @param {Long} Id - id. required.
   */
  deleteSipAgentGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Provider')) {
      throw new TypeError('parameter "Provider" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteSipAgentGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   */
  deleteSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    return this.request('DeleteSkillGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StrategyId - strategyId. required.
   */
  deleteStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyId')) {
      throw new TypeError('parameter "StrategyId" is required');
    }

    return this.request('DeleteStrategy', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} SurveyId - surveyId. required.
   */
  deleteSurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    return this.request('DeleteSurvey', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   */
  deleteTaobaoOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('DeleteTaobaoOrder', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. required.
   */
  deleteVnCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('DeleteVnCategory', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  deleteVnInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteVnInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   */
  deleteVnNavigationScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    return this.request('DeleteVnNavigationScript', params, options);
  }

  /**
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   */
  demonstrate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('Demonstrate', params, options);
  }

  /**
   */
  describeVnAccountStatus(params = {}, options = {}) {
    return this.request('DescribeVnAccountStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  describeVnCategoryTree(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeVnCategoryTree', params, options);
  }

  /**
   */
  describeVnConcurrencyLimit(params = {}, options = {}) {
    return this.request('DescribeVnConcurrencyLimit', params, options);
  }

  /**
   */
  describeVnDashboard(params = {}, options = {}) {
    return this.request('DescribeVnDashboard', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  describeVnInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeVnInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   */
  describeVnKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    return this.request('DescribeVnKnowledge', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  describeVnNavigationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeVnNavigationConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TimeUnit - timeUnit. required.
   */
  describeVnPerformanceIndex(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TimeUnit')) {
      throw new TypeError('parameter "TimeUnit" is required');
    }

    return this.request('DescribeVnPerformanceIndex', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   */
  describeVnRedirection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    return this.request('DescribeVnRedirection', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Caller - caller. required.
   * @param {String} Callee - callee. optional.
   * @param {String} RoutingStrategy - routingStrategy. optional.
   * @param {String} CabInstanceId - cabInstanceId. optional.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} TaskId - taskId. required.
   * @param {String} AppId - appId. optional.
   * @param {String} BizName - bizName. optional.
   * @param {String} ContactFlowId - contactFlowId. optional.
   * @param {String} ContactFlowName - contactFlowName. optional.
   * @param {String} Provider - provider. optional.
   * @param {String} Tag - tag. optional.
   * @param {String} AppToken - appToken. optional.
   */
  dial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('Dial', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallId - callId. required.
   * @param {String} CallType - callType. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} TaskId - taskId. optional.
   * @param {String} Utterance - utterance. required.
   * @param {String} ActionParams - actionParams. optional.
   * @param {String} CallingNumber - callingNumber. required.
   * @param {String} CalledNumber - calledNumber. required.
   */
  dialogue(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'CallType')) {
      throw new TypeError('parameter "CallType" is required');
    }

    if (!hasOwnProperty(params, 'Utterance')) {
      throw new TypeError('parameter "Utterance" is required');
    }

    if (!hasOwnProperty(params, 'CallingNumber')) {
      throw new TypeError('parameter "CallingNumber" is required');
    }

    if (!hasOwnProperty(params, 'CalledNumber')) {
      throw new TypeError('parameter "CalledNumber" is required');
    }

    return this.request('Dialogue', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallType - callType. required.
   * @param {String} Utterance - utterance. required.
   * @param {String} VendorParams - vendorParams. required.
   */
  dialogueLite(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CallType')) {
      throw new TypeError('parameter "CallType" is required');
    }

    if (!hasOwnProperty(params, 'Utterance')) {
      throw new TypeError('parameter "Utterance" is required');
    }

    if (!hasOwnProperty(params, 'VendorParams')) {
      throw new TypeError('parameter "VendorParams" is required');
    }

    return this.request('DialogueLite', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} Utterance - utterance. required.
   * @param {String} CalledNumber - calledNumber. optional.
   * @param {String} CallingNumber - callingNumber. optional.
   * @param {String} AdditionalContext - additionalContext. optional.
   */
  dialogueVn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    if (!hasOwnProperty(params, 'Utterance')) {
      throw new TypeError('parameter "Utterance" is required');
    }

    return this.request('DialogueVn', params, options);
  }

  /**
   * @param {String} CommodityInstanceId - commodityInstanceId. required.
   */
  disablePhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityInstanceId')) {
      throw new TypeError('parameter "CommodityInstanceId" is required');
    }

    return this.request('DisablePhoneNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  disableVnInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DisableVnInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  downloadBasicStatisticsReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('DownloadBasicStatisticsReport', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  downloadConversationDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('DownloadConversationDetails', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Channel - channel. optional.
   */
  downloadMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DownloadMedia', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  downloadOriginalStatisticsReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('DownloadOriginalStatisticsReport', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FileName - fileName. required.
   * @param {String} ConnectId - connectId. required.
   * @param {String} Channel - channel. optional.
   */
  downloadRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'ConnectId')) {
      throw new TypeError('parameter "ConnectId" is required');
    }

    return this.request('DownloadRecord', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FileName - fileName. required.
   * @param {String} Channel - channel. optional.
   */
  downloadRecording(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('DownloadRecording', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} TaskId - taskId. required.
   * @param {String} Channel - channel. optional.
   */
  downloadTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('DownloadTask', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  downloadUnreachableContacts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('DownloadUnreachableContacts', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  duplicateVnInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DuplicateVnInstance', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} Components - components. required.
   * @param {String} CommodityInstanceId - commodityInstanceId. required.
   * @param {String} Region - region. required.
   */
  enableCabService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Components')) {
      throw new TypeError('parameter "Components" is required');
    }

    if (!hasOwnProperty(params, 'CommodityInstanceId')) {
      throw new TypeError('parameter "CommodityInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    return this.request('EnableCabService', params, options);
  }

  /**
   * @param {String} CommodityInstanceId - commodityInstanceId. required.
   */
  enablePhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CommodityInstanceId')) {
      throw new TypeError('parameter "CommodityInstanceId" is required');
    }

    return this.request('EnablePhoneNumber', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. optional.
   */
  enableService(params = {}, options = {}) {
    return this.request('EnableService', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  enableVnInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('EnableVnInstance', params, options);
  }

  /**
   * @param {String} PublicKey - publicKey. optional.
   * @param {RepeatList} PlainText - plainTexts. required.
   */
  encrypt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlainText')) {
      throw new TypeError('parameter "PlainText" is required');
    }

    return this.request('Encrypt', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowVersionId - contactFlowVersionId. required.
   */
  fallbackContactFlowVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowVersionId')) {
      throw new TypeError('parameter "ContactFlowVersionId" is required');
    }

    return this.request('FallbackContactFlowVersion', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StartDay - startDay. required.
   * @param {String} EndDay - endDay. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Criteria - criteria. required.
   */
  findAgentData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartDay')) {
      throw new TypeError('parameter "StartDay" is required');
    }

    if (!hasOwnProperty(params, 'EndDay')) {
      throw new TypeError('parameter "EndDay" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Criteria')) {
      throw new TypeError('parameter "Criteria" is required');
    }

    return this.request('FindAgentData', params, options);
  }

  /**
   * @param {String} Instance - instance. required.
   * @param {String} Query - query. required.
   */
  findRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Instance')) {
      throw new TypeError('parameter "Instance" is required');
    }

    if (!hasOwnProperty(params, 'Query')) {
      throw new TypeError('parameter "Query" is required');
    }

    return this.request('FindRecords', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Criteria - criteria. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  findUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Criteria')) {
      throw new TypeError('parameter "Criteria" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('FindUsers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} AgentId - agentId. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  generateAgentStatisticReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GenerateAgentStatisticReport', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  generateBasicStatisticsReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('GenerateBasicStatisticsReport', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  generateOverallStatisticsReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('GenerateOverallStatisticsReport', params, options);
  }

  /**
   * @param {String} Tenant - tenant. required.
   * @param {String} Number - number. required.
   * @param {Integer} LimitCount - limitCount. optional. default: 5.
   * @param {Integer} ContactType - contactType. optional.
   * @param {Integer} ContactDisposition - contactDisposition. optional.
   * @param {Integer} Days - days. optional. default: 7.
   */
  getAcquaintance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tenant')) {
      throw new TypeError('parameter "Tenant" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    return this.request('GetAcquaintance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   * @param {String} StartDay - startDay. required.
   * @param {String} EndDay - endDay. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  getAgentData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'StartDay')) {
      throw new TypeError('parameter "StartDay" is required');
    }

    if (!hasOwnProperty(params, 'EndDay')) {
      throw new TypeError('parameter "EndDay" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetAgentData', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Dn - dn. optional.
   * @param {String} AgentId - agentId. optional.
   */
  getAgentState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetAgentState', params, options);
  }

  /**
   * @param {Long} TaobaoUid - taobaoUid. required.
   */
  getAggregateTaobaoOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaobaoUid')) {
      throw new TypeError('parameter "TaobaoUid" is required');
    }

    return this.request('GetAggregateTaobaoOrder', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getCabInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetCabInstance', params, options);
  }

  /**
   */
  getCabServiceStatus(params = {}, options = {}) {
    return this.request('GetCabServiceStatus', params, options);
  }

  /**
   * @param {String} AccTaskId - accTaskId. required.
   */
  getCabTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccTaskId')) {
      throw new TypeError('parameter "AccTaskId" is required');
    }

    return this.request('GetCabTask', params, options);
  }

  /**
   * @param {String} IntervalType - intervalType. required.
   * @param {Integer} Year - year. required.
   * @param {Integer} Month - month. required.
   * @param {Integer} Day - day. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getCallMeasureSummaryReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntervalType')) {
      throw new TypeError('parameter "IntervalType" is required');
    }

    if (!hasOwnProperty(params, 'Year')) {
      throw new TypeError('parameter "Year" is required');
    }

    if (!hasOwnProperty(params, 'Month')) {
      throw new TypeError('parameter "Month" is required');
    }

    return this.request('GetCallMeasureSummaryReport', params, options);
  }

  /**
   */
  getCommodity(params = {}, options = {}) {
    return this.request('GetCommodity', params, options);
  }

  /**
   */
  getConcurrentConversationQuota(params = {}, options = {}) {
    return this.request('GetConcurrentConversationQuota', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Boolean} Inherit - inherit. optional.
   * @param {String} Dimension - dimension. optional.
   * @param {String} DimensionName - dimensionName. required.
   */
  getConfigItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DimensionName')) {
      throw new TypeError('parameter "DimensionName" is required');
    }

    return this.request('GetConfigItem', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Name - name. required.
   * @param {String} Dimension - dimension. optional.
   * @param {String} DimensionName - dimensionName. required.
   */
  getConfigItemForFlat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'DimensionName')) {
      throw new TypeError('parameter "DimensionName" is required');
    }

    return this.request('GetConfigItemForFlat', params, options);
  }

  /**
   * @param {Long} taobaoMainUid - taobaoMainUid. optional.
   * @param {Integer} taobaoUid - taobaoUid. optional.
   * @param {Long} mainRamId - mainRamId. optional.
   * @param {Long} ramId - ramId. optional.
   * @param {String} phone - phone. required.
   * @param {Long} startTime - startTime. optional.
   * @param {Long} endTime - endTime. optional.
   */
  getConsumedAmount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'phone')) {
      throw new TypeError('parameter "phone" is required');
    }

    return this.request('GetConsumedAmount', params, options);
  }

  /**
   * @param {String} phone - phone. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {Integer} pageNumber - pageNumber. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  getConsumedAmountMonthly(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'phone')) {
      throw new TypeError('parameter "phone" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    if (!hasOwnProperty(params, 'pageNumber')) {
      throw new TypeError('parameter "pageNumber" is required');
    }

    return this.request('GetConsumedAmountMonthly', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getContactFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetContactFlow', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowVersionId - contactFlowVersionId. required.
   */
  getContactFlowVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowVersionId')) {
      throw new TypeError('parameter "ContactFlowVersionId" is required');
    }

    return this.request('GetContactFlowVersion', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} OutboundTaskId - outboundTaskId. required.
   */
  getContactIdentifyByOutBoundTaskId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'OutboundTaskId')) {
      throw new TypeError('parameter "OutboundTaskId" is required');
    }

    return this.request('GetContactIdentifyByOutBoundTaskId', params, options);
  }

  /**
   * @param {Long} TaobaoUid - taobaoUid. optional.
   * @param {Long} RamId - ramId. optional.
   */
  getCorpIdentify(params = {}, options = {}) {
    return this.request('GetCorpIdentify', params, options);
  }

  /**
   * @param {Long} TaobaoUid - taobaoUid. optional.
   * @param {Long} RamId - ramId. optional.
   */
  getCorpNumber(params = {}, options = {}) {
    return this.request('GetCorpNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} JobId - jobId. required.
   */
  getExecutionDetailsOfPredictiveJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetExecutionDetailsOfPredictiveJob', params, options);
  }

  /**
   */
  getFcInvokeRole(params = {}, options = {}) {
    return this.request('GetFcInvokeRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstance', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  getInstanceByDomainName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('GetInstanceByDomainName', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getInstanceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getInstanceState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceState', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  getInstanceSummaryReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetInstanceSummaryReport', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} IntervalType - interval. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  getInstanceSummaryReportByInterval(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('GetInstanceSummaryReportByInterval', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  getInstanceSummaryReportSinceMidnight(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetInstanceSummaryReportSinceMidnight', params, options);
  }

  /**
   * @param {String} RoleName - roleName. optional. default: AliyunCCCSMSDefaultRole.
   */
  getInvokeRole(params = {}, options = {}) {
    return this.request('GetInvokeRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobId - jobId. required.
   */
  getJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetJob', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FileName - fileName. required.
   */
  getJobDataOssUploadParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('GetJobDataOssUploadParams', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FileName - fileName. required.
   */
  getJobDataUploadParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    return this.request('GetJobDataUploadParams', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  getJobGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('GetJobGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallId - callId. required.
   */
  getJobStatusByCallId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    return this.request('GetJobStatusByCallId', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   */
  getJobTemplateDownloadParams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('GetJobTemplateDownloadParams', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} JobId - jobIds. required.
   */
  getJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetJobs', params, options);
  }

  /**
   */
  getMainAccount(params = {}, options = {}) {
    return this.request('GetMainAccount', params, options);
  }

  /**
   */
  getMaxInstances(params = {}, options = {}) {
    return this.request('GetMaxInstances', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getNavigatorContactFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetNavigatorContactFlow', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getNewbieTaskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetNewbieTaskStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  getNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetNotificationConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Number - number. required.
   */
  getNumberRegionInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Number')) {
      throw new TypeError('parameter "Number" is required');
    }

    return this.request('GetNumberRegionInfo', params, options);
  }

  /**
   * @param {String} File - file. required.
   */
  getOssUrlForUploadFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'File')) {
      throw new TypeError('parameter "File" is required');
    }

    return this.request('GetOssUrlForUploadFile', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobId - jobId. required.
   */
  getPredictiveJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobId')) {
      throw new TypeError('parameter "JobId" is required');
    }

    return this.request('GetPredictiveJob', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  getPredictiveJobGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('GetPredictiveJobGroup', params, options);
  }

  /**
   * @param {String} ProviderId - providerId. required.
   */
  getPrivacyNumberAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProviderId')) {
      throw new TypeError('parameter "ProviderId" is required');
    }

    return this.request('GetPrivacyNumberAccount', params, options);
  }

  /**
   */
  getProvider(params = {}, options = {}) {
    return this.request('GetProvider', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   */
  getScenario(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('GetScenario', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ServiceType - serviceType. required.
   */
  getServiceExtensions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceType')) {
      throw new TypeError('parameter "ServiceType" is required');
    }

    return this.request('GetServiceExtensions', params, options);
  }

  /**
   * @param {String} Provider - provider. required.
   */
  getSipAgentGroupInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Provider')) {
      throw new TypeError('parameter "Provider" is required');
    }

    return this.request('GetSipAgentGroupInfo', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TaskId - taskId. required.
   */
  getSkillGroupIdByTaskId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetSkillGroupIdByTaskId', params, options);
  }

  /**
   */
  getSmsCallbackLink(params = {}, options = {}) {
    return this.request('GetSmsCallbackLink', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} Scenario - scenarios. required.
   */
  getSmsConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Scenario')) {
      throw new TypeError('parameter "Scenario" is required');
    }

    return this.request('GetSmsConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StrategyId - strategyId. required.
   */
  getStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyId')) {
      throw new TypeError('parameter "StrategyId" is required');
    }

    return this.request('GetStrategy', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} SurveyId - surveyId. required.
   */
  getSurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    return this.request('GetSurvey', params, options);
  }

  /**
   */
  getSystemSpecification(params = {}, options = {}) {
    return this.request('GetSystemSpecification', params, options);
  }

  /**
   * @param {Long} TaobaoUid - taobaoUid. required.
   * @param {Long} startTime - startTime. optional.
   * @param {Long} endTime - endTime. optional.
   * @param {Boolean} includeAll - includeAll. optional.
   * @param {Boolean} expiredOnly - expiredOnly. optional.
   * @param {String} articleCode - articleCode. optional.
   * @param {String} articleItemCode - articleItemCode. optional.
   * @param {Integer} type - type. optional.
   */
  getTaobaoOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaobaoUid')) {
      throw new TypeError('parameter "TaobaoUid" is required');
    }

    return this.request('GetTaobaoOrder', params, options);
  }

  /**
   * @param {Long} TbUserid - tbUserid. required.
   */
  getTbAliyunUserMappingByTbUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TbUserid')) {
      throw new TypeError('parameter "TbUserid" is required');
    }

    return this.request('GetTbAliyunUserMappingByTbUid', params, options);
  }

  /**
   * @param {String} AccTaskId - accTaskId. required.
   */
  getTwoPartiesCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccTaskId')) {
      throw new TypeError('parameter "AccTaskId" is required');
    }

    return this.request('GetTwoPartiesCall', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   */
  getUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('GetUser', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} Components - components. required.
   */
  gradeCabService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Components')) {
      throw new TypeError('parameter "Components" is required');
    }

    return this.request('GradeCabService', params, options);
  }

  /**
   * @param {String} TenantId - tenantId. required.
   * @param {String} FunctionId - functionId. required.
   * @param {String} Parameter - parameter. optional.
   */
  invokeFunctionCompute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TenantId')) {
      throw new TypeError('parameter "TenantId" is required');
    }

    if (!hasOwnProperty(params, 'FunctionId')) {
      throw new TypeError('parameter "FunctionId" is required');
    }

    return this.request('InvokeFunctionCompute', params, options);
  }

  /**
   * @param {String} TenantId - tenantId. required.
   * @param {String} ConfigId - configId. required.
   * @param {String} TemplateParam - templateParam. optional.
   * @param {String} PhoneNumbers - phoneNumbers. optional.
   */
  invokeSendMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TenantId')) {
      throw new TypeError('parameter "TenantId" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('InvokeSendMessage', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Acid - acid. required.
   */
  launchAppraise(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Acid')) {
      throw new TypeError('parameter "Acid" is required');
    }

    return this.request('LaunchAppraise', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Acid - acid. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {Integer} ContactType - contactType. required.
   * @param {String} PhoneNumbers - phoneNumbers. required.
   */
  launchShortMessageAppraise(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Acid')) {
      throw new TypeError('parameter "Acid" is required');
    }

    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumbers')) {
      throw new TypeError('parameter "PhoneNumbers" is required');
    }

    return this.request('LaunchShortMessageAppraise', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StartDay - startDay. required.
   * @param {String} EndDay - endDay. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listAgentData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartDay')) {
      throw new TypeError('parameter "StartDay" is required');
    }

    if (!hasOwnProperty(params, 'EndDay')) {
      throw new TypeError('parameter "EndDay" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListAgentData', params, options);
  }

  /**
   * @param {Long} RamId - ramId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   * @param {String} Event - event. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listAgentEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RamId')) {
      throw new TypeError('parameter "RamId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListAgentEvents', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {String} Agents - agents. optional.
   * @param {String} State - state. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAgentStates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListAgentStates', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {String} AgentIds - agents. optional.
   * @param {String} DisplayNameLike - displayNameLike. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} OrderByOccupancyRate - orderByOccupancyRate. optional.
   * @param {String} OrderByTotalCalls - orderByTotalCalls. optional.
   * @param {String} OrderByTotalTalkTime - orderByTotalTalkTime. optional.
   * @param {String} OrderByInboundTotalCalls - orderByInboundTotalCalls. optional.
   * @param {String} OrderByInboundTotalTalkTime - orderByInboundTotalTalkTime. optional.
   * @param {String} OrderByOutboundTotalCalls - orderByOutboundTotalCalls. optional.
   * @param {String} OrderByOutboundTotalTalkTime - orderByOutboundTotalTalkTime. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAgentSummaryReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListAgentSummaryReports', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {String} AgentIds - agents. optional.
   * @param {String} IntervalType - interval. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAgentSummaryReportsByInterval(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListAgentSummaryReportsByInterval', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listAllImsUsers(params = {}, options = {}) {
    return this.request('ListAllImsUsers', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listAvailableTestPhoneNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListAvailableTestPhoneNumbers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Dimension - dimension. required.
   * @param {String} Date - date. required.
   * @param {RepeatList} IndicatorName - indicatorNames. required.
   */
  listBarCharts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Dimension')) {
      throw new TypeError('parameter "Dimension" is required');
    }

    if (!hasOwnProperty(params, 'Date')) {
      throw new TypeError('parameter "Date" is required');
    }

    if (!hasOwnProperty(params, 'IndicatorName')) {
      throw new TypeError('parameter "IndicatorName" is required');
    }

    return this.request('ListBarCharts', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {String} Title - title. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listBasicStatisticsReportSubItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListBasicStatisticsReportSubItems', params, options);
  }

  /**
   */
  listCabInstances(params = {}, options = {}) {
    return this.request('ListCabInstances', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   * @param {String} Criteria - criteria. optional.
   * @param {Boolean} WithRecording - withRecording. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listCallDetailDatas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListCallDetailDatas', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   * @param {String} Criteria - criteria. optional.
   * @param {String} ContactType - contactType. optional.
   * @param {String} ContactDisposition - contactDisposition. optional.
   * @param {Boolean} WithRecording - withRecording. optional.
   * @param {String} OrderBy - orderBy. optional. default: ASC.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listCallDetailRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListCallDetailRecords', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactId - contactId. required.
   */
  listCallEventDetailByContactId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('ListCallEventDetailByContactId', params, options);
  }

  /**
   * @param {String} IntervalType - intervalType. required.
   */
  listCallMeasureSummaryReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IntervalType')) {
      throw new TypeError('parameter "IntervalType" is required');
    }

    return this.request('ListCallMeasureSummaryReports', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {Integer} Type - type. required.
   */
  listCategories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('ListCategories', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} ConfigItem - configItems. optional.
   */
  listConfigItemForFlat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListConfigItemForFlat', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  listContactFlows(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListContactFlows', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {String} NodeId - nodeId. required.
   */
  listConversationsWithUnrecognizedIntents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'NodeId')) {
      throw new TypeError('parameter "NodeId" is required');
    }

    return this.request('ListConversationsWithUnrecognizedIntents', params, options);
  }

  /**
   * @param {String} Pics - pics. required.
   */
  listCorpIdentifyOssLink(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pics')) {
      throw new TypeError('parameter "Pics" is required');
    }

    return this.request('ListCorpIdentifyOssLink', params, options);
  }

  /**
   * @param {String} Provider - provider. required.
   */
  listCustomerNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Provider')) {
      throw new TypeError('parameter "Provider" is required');
    }

    return this.request('ListCustomerNumbers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StartDay - startDay. required.
   * @param {String} EndDay - endDay. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   */
  listDetailOfSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartDay')) {
      throw new TypeError('parameter "StartDay" is required');
    }

    if (!hasOwnProperty(params, 'EndDay')) {
      throw new TypeError('parameter "EndDay" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    return this.request('ListDetailOfSkillGroup', params, options);
  }

  /**
   * @param {String} NameKeyword - nameKeyword. optional.
   * @param {Integer} FlowTemplatesType - flowTemplatesType. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listFlowTemplates(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FlowTemplatesType')) {
      throw new TypeError('parameter "FlowTemplatesType" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListFlowTemplates', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  listFunctionMetas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListFunctionMetas', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listImsUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListImsUsers', params, options);
  }

  /**
   */
  listInstances(params = {}, options = {}) {
    return this.request('ListInstances', params, options);
  }

  /**
   */
  listInstancesEx(params = {}, options = {}) {
    return this.request('ListInstancesEx', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  listInstancesOfUser(params = {}, options = {}) {
    return this.request('ListInstancesOfUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listJobGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListJobGroups', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} TimeAlignment - timeAlignment. optional.
   * @param {String} ContactName - contactName. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listJobStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListJobStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {String} JobStatus - jobStatus. optional.
   * @param {String} JobFailureReason - jobFailureReason. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listJobsByGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListJobsByGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NamePrefix - namePrefix. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listMedias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListMedias', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NamePrefix - namePrefix. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listMediasWithPublic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListMediasWithPublic', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   */
  listOutboundPhoneNumberOfUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListOutboundPhoneNumberOfUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Dimension - dimension. required.
   * @param {String} Date - date. required.
   * @param {RepeatList} IndicatorName - indicatorNames. required.
   */
  listOverviewAccumulateReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Dimension')) {
      throw new TypeError('parameter "Dimension" is required');
    }

    if (!hasOwnProperty(params, 'Date')) {
      throw new TypeError('parameter "Date" is required');
    }

    if (!hasOwnProperty(params, 'IndicatorName')) {
      throw new TypeError('parameter "IndicatorName" is required');
    }

    return this.request('ListOverviewAccumulateReport', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Dimension - dimension. required.
   */
  listOverviewRealTimeReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Dimension')) {
      throw new TypeError('parameter "Dimension" is required');
    }

    return this.request('ListOverviewRealTimeReport', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumberId - phoneNumberId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   */
  listPerformanceSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumberId')) {
      throw new TypeError('parameter "PhoneNumberId" is required');
    }

    return this.request('ListPerformanceSummary', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} OutboundOnly - outboundOnly. required.
   */
  listPhoneNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'OutboundOnly')) {
      throw new TypeError('parameter "OutboundOnly" is required');
    }

    return this.request('ListPhoneNumbers', params, options);
  }

  /**
   * @param {Long} RamId - ramId. required.
   */
  listPhoneNumbersByRamId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RamId')) {
      throw new TypeError('parameter "RamId" is required');
    }

    return this.request('ListPhoneNumbersByRamId', params, options);
  }

  /**
   */
  listPredefinedPrivileges(params = {}, options = {}) {
    return this.request('ListPredefinedPrivileges', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  listPredictiveJobGroupOverallStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListPredictiveJobGroupOverallStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. optional.
   * @param {String} Name - name. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listPredictiveJobGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListPredictiveJobGroups', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - groupId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} TimeAlignment - timeAlignment. optional.
   * @param {String} ContactName - contactName. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listPredictiveJobStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListPredictiveJobStatus', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} JobGroupId - groupId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} TimeAlignment - timeAlignment. optional.
   * @param {String} ContactName - contactName. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} JobStatus - jobStatus. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listPredictiveJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListPredictiveJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {String} ContactId - contactId. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {String} AgentName - agentName. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listPrivacyNumberCallDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListPrivacyNumberCallDetails', params, options);
  }

  /**
   */
  listPrivacyNumberPools(params = {}, options = {}) {
    return this.request('ListPrivacyNumberPools', params, options);
  }

  /**
   */
  listPrivacyNumberProviders(params = {}, options = {}) {
    return this.request('ListPrivacyNumberProviders', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} ProviderId - providerId. required.
   * @param {String} Type - type. required.
   * @param {String} PoolId - poolId. optional.
   */
  listPrivacyNumbersOfPool(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ProviderId')) {
      throw new TypeError('parameter "ProviderId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('ListPrivacyNumbersOfPool', params, options);
  }

  /**
   * @param {String} LoginName - loginName. required.
   * @param {String} InstanceName - instanceName. optional.
   */
  listPrivilegesByLoginName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LoginName')) {
      throw new TypeError('parameter "LoginName" is required');
    }

    return this.request('ListPrivilegesByLoginName', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleId - roleId. required.
   */
  listPrivilegesOfRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('ListPrivilegesOfRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   */
  listPrivilegesOfUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListPrivilegesOfUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  listRealTimeAgent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListRealTimeAgent', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   * @param {String} Criteria - criteria. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listRecentCallRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListRecentCallRecords', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactId - contactId. required.
   */
  listRecordingByContactId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('ListRecordingByContactId', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConnectId - connectId. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} StopTime - stopTime. required.
   * @param {String} CallingNumber - callingNumber. optional.
   * @param {String} CalledNumber - calledNumber. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listRecordingOfDualTrack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'StopTime')) {
      throw new TypeError('parameter "StopTime" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListRecordingOfDualTrack', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} StopTime - stopTime. optional.
   * @param {String} PhoneNumber - phoneNumber. optional.
   * @param {String} AgentId - agentId. optional.
   * @param {String} Criteria - criteria. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listRecordings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListRecordings', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactId - contactId. required.
   */
  listRecordingsByContactId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('ListRecordingsByContactId', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} QueryParam - queryParam. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListRecords', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  listRoles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListRoles', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   */
  listRolesOfUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListRolesOfUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} Type - type. optional.
   */
  listScenarioParameters(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('ListScenarioParameters', params, options);
  }

  /**
   */
  listScenarioTemplates(params = {}, options = {}) {
    return this.request('ListScenarioTemplates', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  listScenarios(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListScenarios', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StartDay - startDay. required.
   * @param {String} EndDay - endDay. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listSkillGroupData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartDay')) {
      throw new TypeError('parameter "StartDay" is required');
    }

    if (!hasOwnProperty(params, 'EndDay')) {
      throw new TypeError('parameter "EndDay" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListSkillGroupData', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupIds - skillGroups. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} OrderByOccupancyRate - orderByOccupancyRate. optional.
   * @param {String} OrderByTotalCalls - orderByTotalCalls. optional.
   * @param {String} OrderByTotalTalkTime - orderByTotalTalkTime. optional.
   * @param {String} OrderByInboundTotalCalls - orderByInboundTotalCalls. optional.
   * @param {String} OrderByInboundTotalTalkTime - orderByInboundTotalTalkTime. optional.
   * @param {String} OrderByOutboundTotalCalls - orderByOutboundTotalCalls. optional.
   * @param {String} OrderByOutboundTotalTalkTime - orderByOutboundTotalTalkTime. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listSkillGroupSummaryReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListSkillGroupSummaryReports', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupIds - skillGroups. optional.
   * @param {String} Agents - agents. optional.
   * @param {String} IntervalType - interval. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listSkillGroupSummaryReportsByInterval(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('ListSkillGroupSummaryReportsByInterval', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  listSkillGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListSkillGroups', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   */
  listSkillGroupsOfUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ListSkillGroupsOfUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  listStrategies(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListStrategies', params, options);
  }

  /**
   */
  listStrategyTemplates(params = {}, options = {}) {
    return this.request('ListStrategyTemplates', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   */
  listSurveys(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('ListSurveys', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListTask', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listTestPhoneNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListTestPhoneNumbers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listUnreachableContacts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListUnreachableContacts', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {Integer} PageNumber - pageNumber. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  listUnrecognizedIntents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('ListUnrecognizedIntents', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListUsers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleId - roleId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listUsersOfRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListUsersOfRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listUsersOfSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListUsersOfSkillGroup', params, options);
  }

  /**
   */
  listVnAvailableInstances(params = {}, options = {}) {
    return this.request('ListVnAvailableInstances', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ParentId - parentId. optional.
   */
  listVnCategories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListVnCategories', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   */
  listVnConversationDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('ListVnConversationDetails', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listVnConversations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListVnConversations', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listVnInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListVnInstances', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listVnNavigationScripts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListVnNavigationScripts', params, options);
  }

  /**
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} InstanceId - instanceId. required.
   */
  listVnPublishHistories(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ListVnPublishHistories', params, options);
  }

  /**
   * @param {Long} RamId - ramId. required.
   * @param {String} InstanceName - instanceName. optional.
   * @param {Long} StartTime - startTime. required.
   * @param {Long} StopTime - stopTime. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  listWorkflowOfAgent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RamId')) {
      throw new TypeError('parameter "RamId" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'StopTime')) {
      throw new TypeError('parameter "StopTime" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('ListWorkflowOfAgent', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Message - message. optional.
   */
  log(params = {}, options = {}) {
    return this.request('Log', params, options);
  }

  /**
   */
  markDayuVoiceService(params = {}, options = {}) {
    return this.request('MarkDayuVoiceService', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   * @param {String} JobFilePath - jobFilePath. optional.
   * @param {Boolean} Submitted - submitted. required.
   */
  modifyBatchJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'Submitted')) {
      throw new TypeError('parameter "Submitted" is required');
    }

    return this.request('ModifyBatchJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} InstanceDescription - instanceDescription. optional.
   * @param {Integer} MaxConcurrentConversation - maxConcurrentConversation. optional.
   * @param {String} CallCenterInstanceId - callCenterInstanceId. optional.
   */
  modifyCabInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyCabInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} CategoryId - categoryId. required.
   * @param {String} Options - options. required.
   * @param {String} ModifyOption - modifyOption. optional.
   */
  modifyCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    if (!hasOwnProperty(params, 'Options')) {
      throw new TypeError('parameter "Options" is required');
    }

    return this.request('ModifyCategory', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowId - contactFlowId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Type - type. required.
   */
  modifyContactFlow(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowId')) {
      throw new TypeError('parameter "ContactFlowId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('ModifyContactFlow', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowVersionId - contactFlowVersionId. required.
   * @param {String} Canvas - canvas. required.
   * @param {String} Content - content. required.
   */
  modifyContactFlowVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowVersionId')) {
      throw new TypeError('parameter "ContactFlowVersionId" is required');
    }

    if (!hasOwnProperty(params, 'Canvas')) {
      throw new TypeError('parameter "Canvas" is required');
    }

    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('ModifyContactFlowVersion', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FunctionId - functionId. required.
   * @param {String} Region - region. required.
   * @param {String} Service - service. required.
   * @param {String} FunctionName - functionName. required.
   * @param {String} Role - role. required.
   * @param {String} Description - description. required.
   */
  modifyFunctionMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FunctionId')) {
      throw new TypeError('parameter "FunctionId" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'Role')) {
      throw new TypeError('parameter "Role" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('ModifyFunctionMeta', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Description - description. optional.
   * @param {String} Bucket - bucket. optional.
   * @param {Integer} StorageMaxDays - storageMaxDays. required.
   * @param {Integer} StorageMaxSize - storageMaxSize. required.
   */
  modifyInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StorageMaxDays')) {
      throw new TypeError('parameter "StorageMaxDays" is required');
    }

    if (!hasOwnProperty(params, 'StorageMaxSize')) {
      throw new TypeError('parameter "StorageMaxSize" is required');
    }

    return this.request('ModifyInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} StrategyJson - strategyJson. optional.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   */
  modifyJobGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyJobGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   * @param {String} OssFileName - ossFileName. required.
   * @param {String} OssFilePath - ossFilePath. required.
   * @param {String} UploadResult - uploadResult. required.
   */
  modifyMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'OssFileName')) {
      throw new TypeError('parameter "OssFileName" is required');
    }

    if (!hasOwnProperty(params, 'OssFilePath')) {
      throw new TypeError('parameter "OssFilePath" is required');
    }

    if (!hasOwnProperty(params, 'UploadResult')) {
      throw new TypeError('parameter "UploadResult" is required');
    }

    return this.request('ModifyMedia', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ProducerId - producerId. required.
   * @param {String} AccessPoint - accessPoint. required.
   * @param {String} Topic - topic. required.
   * @param {RepeatList} Subscriptions - subscriptions. required.
   */
  modifyNotificationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ProducerId')) {
      throw new TypeError('parameter "ProducerId" is required');
    }

    if (!hasOwnProperty(params, 'AccessPoint')) {
      throw new TypeError('parameter "AccessPoint" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    if (!hasOwnProperty(params, 'Subscriptions')) {
      throw new TypeError('parameter "Subscriptions" is required');
    }

    return this.request('ModifyNotificationConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumberId - phoneNumberId. required.
   * @param {String} Usage - usage. required.
   * @param {String} ContactFlowId - contactFlowId. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   */
  modifyPhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumberId')) {
      throw new TypeError('parameter "PhoneNumberId" is required');
    }

    if (!hasOwnProperty(params, 'Usage')) {
      throw new TypeError('parameter "Usage" is required');
    }

    return this.request('ModifyPhoneNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallId - callId. required.
   * @param {String} ContactId - contactId. required.
   */
  modifyPrivacyNumberCallDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('ModifyPrivacyNumberCallDetail', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleId - roleId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {RepeatList} PrivilegeId - privilegeIds. optional.
   * @param {RepeatList} UserId - userIds. required.
   */
  modifyRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ModifyRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Variables - variables. optional.
   */
  modifyScenario(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('ModifyScenario', params, options);
  }

  /**
   * @param {String} Provider - provider. required.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} Ip - ip. required.
   * @param {String} Port - port. required.
   * @param {Integer} SendInterface - sendInterface. required.
   */
  modifySipAgentGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Provider')) {
      throw new TypeError('parameter "Provider" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    if (!hasOwnProperty(params, 'SendInterface')) {
      throw new TypeError('parameter "SendInterface" is required');
    }

    return this.request('ModifySipAgentGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} RoutingStrategy - routingStrategy. optional.
   * @param {Boolean} AllowPrivateOutboundNumber - allowPrivateOutboundNumber. optional.
   */
  modifySkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifySkillGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} RoutingStrategy - routingStrategy. optional.
   * @param {RepeatList} OutboundPhoneNumberId - outboundPhoneNumberIds. optional.
   * @param {RepeatList} UserId - userIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   * @param {Boolean} AllowPrivateOutboundNumber - allowPrivateOutboundNumber. optional.
   */
  modifySkillGroupEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifySkillGroupEx', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StrategyId - strategyId. required.
   * @param {String} StrategyJson - strategyJson. required.
   */
  modifyStrategy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyId')) {
      throw new TypeError('parameter "StrategyId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyJson')) {
      throw new TypeError('parameter "StrategyJson" is required');
    }

    return this.request('ModifyStrategy', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SurveyId - surveyId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} FlowId - flowId. optional.
   * @param {String} FlowJson - flowJson. optional.
   * @param {String} Corpora - corpora. optional.
   * @param {String} SpeechOptimizationParam - speechOptimizationParam. optional.
   * @param {String} GlobalQuestions - globalQuestions. optional.
   * @param {String} Role - role. optional.
   * @param {Integer} Round - round. optional.
   * @param {String} BeebotId - beebotId. optional.
   * @param {String} FlowJsonOssKey - flowJsonOssKey. optional.
   */
  modifySurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    return this.request('ModifySurvey', params, options);
  }

  /**
   * @param {String} DisplayName - displayName. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   * @param {String} Phone - phone. required.
   * @param {String} Email - email. required.
   * @param {String} PrivateOutboundNumberId - privateOutboundNumberId. optional.
   * @param {RepeatList} RoleId - roleIds. required.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  modifyUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DisplayName')) {
      throw new TypeError('parameter "DisplayName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'Phone')) {
      throw new TypeError('parameter "Phone" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('ModifyUser', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   * @param {RepeatList} RoleId - roleIds. required.
   * @param {RepeatList} SkillGroupId - skillGroupIds. optional.
   * @param {RepeatList} SkillLevel - skillLevels. optional.
   */
  modifyUserEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('ModifyUserEx', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} Enabled - enabled. required.
   * @param {String} Prompt - prompt. required.
   * @param {Boolean} EnableNegativeFeedback - enableNegativeFeedback. required.
   * @param {RepeatList} NegativeFeedbackUtterances - negativeFeedbackUtterances. required.
   * @param {String} NegativeFeedbackPrompt - negativeFeedbackPrompt. required.
   * @param {String} NegativeFeedbackAction - negativeFeedbackAction. required.
   * @param {String} NegativeFeedbackActionParams - negativeFeedbackActionParams. optional.
   */
  modifyVnAskingBackConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Enabled')) {
      throw new TypeError('parameter "Enabled" is required');
    }

    if (!hasOwnProperty(params, 'Prompt')) {
      throw new TypeError('parameter "Prompt" is required');
    }

    if (!hasOwnProperty(params, 'EnableNegativeFeedback')) {
      throw new TypeError('parameter "EnableNegativeFeedback" is required');
    }

    if (!hasOwnProperty(params, 'NegativeFeedbackUtterances')) {
      throw new TypeError('parameter "NegativeFeedbackUtterances" is required');
    }

    if (!hasOwnProperty(params, 'NegativeFeedbackPrompt')) {
      throw new TypeError('parameter "NegativeFeedbackPrompt" is required');
    }

    if (!hasOwnProperty(params, 'NegativeFeedbackAction')) {
      throw new TypeError('parameter "NegativeFeedbackAction" is required');
    }

    return this.request('ModifyVnAskingBackConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. required.
   * @param {String} Name - name. required.
   */
  modifyVnCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('ModifyVnCategory', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} Utterances - utterances. required.
   * @param {String} Prompt - prompt. required.
   * @param {String} FinalAction - finalAction. required.
   * @param {String} FinalActionParams - finalActionParams. optional.
   */
  modifyVnComplainingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Utterances')) {
      throw new TypeError('parameter "Utterances" is required');
    }

    if (!hasOwnProperty(params, 'Prompt')) {
      throw new TypeError('parameter "Prompt" is required');
    }

    if (!hasOwnProperty(params, 'FinalAction')) {
      throw new TypeError('parameter "FinalAction" is required');
    }

    return this.request('ModifyVnComplainingConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} GreetingWords - greetingWords. required.
   */
  modifyVnGreetingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'GreetingWords')) {
      throw new TypeError('parameter "GreetingWords" is required');
    }

    return this.request('ModifyVnGreetingConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Description - description. optional.
   * @param {Long} Concurrency - concurrency. required.
   * @param {String} ChatbotInstanceId - chatbotInstanceId. optional.
   */
  modifyVnInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Concurrency')) {
      throw new TypeError('parameter "Concurrency" is required');
    }

    return this.request('ModifyVnInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   * @param {String} UserUtterance - userUtterance. required.
   * @param {RepeatList} SimilarUtterances - similarUtterances. optional.
   * @param {String} Answer - answer. required.
   * @param {Boolean} Interruptible - interruptible. optional.
   */
  modifyVnKnowledge(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    if (!hasOwnProperty(params, 'UserUtterance')) {
      throw new TypeError('parameter "UserUtterance" is required');
    }

    if (!hasOwnProperty(params, 'Answer')) {
      throw new TypeError('parameter "Answer" is required');
    }

    return this.request('ModifyVnKnowledge', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Json} GreetingConfig - greetingConfig. required.
   * @param {Json} AskingBackConfig - askingBackConfig. required.
   * @param {Json} RepeatingConfig - repeatingConfig. required.
   * @param {Json} UnrecognizingConfig - unrecognizingConfig. required.
   * @param {Json} ComplainingConfig - complainingConfig. required.
   * @param {Json} SilenceTimeoutConfig - silenceTimeoutConfig. required.
   */
  modifyVnNavigationConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'GreetingConfig')) {
      throw new TypeError('parameter "GreetingConfig" is required');
    }

    if (!hasOwnProperty(params, 'AskingBackConfig')) {
      throw new TypeError('parameter "AskingBackConfig" is required');
    }

    if (!hasOwnProperty(params, 'RepeatingConfig')) {
      throw new TypeError('parameter "RepeatingConfig" is required');
    }

    if (!hasOwnProperty(params, 'UnrecognizingConfig')) {
      throw new TypeError('parameter "UnrecognizingConfig" is required');
    }

    if (!hasOwnProperty(params, 'ComplainingConfig')) {
      throw new TypeError('parameter "ComplainingConfig" is required');
    }

    if (!hasOwnProperty(params, 'SilenceTimeoutConfig')) {
      throw new TypeError('parameter "SilenceTimeoutConfig" is required');
    }

    return this.request('ModifyVnNavigationConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   * @param {String} UserUtterance - userUtterance. required.
   * @param {RepeatList} SimilarUtterances - similarUtterances. optional.
   * @param {String} Prompt - prompt. optional.
   * @param {Boolean} Interruptible - interruptible. optional.
   * @param {String} RedirectionType - redirectionType. required.
   * @param {String} RedirectionTarget - redirectionTarget. optional.
   */
  modifyVnRedirection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    if (!hasOwnProperty(params, 'UserUtterance')) {
      throw new TypeError('parameter "UserUtterance" is required');
    }

    if (!hasOwnProperty(params, 'RedirectionType')) {
      throw new TypeError('parameter "RedirectionType" is required');
    }

    return this.request('ModifyVnRedirection', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} Utterances - utterances. required.
   */
  modifyVnRepeatingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Utterances')) {
      throw new TypeError('parameter "Utterances" is required');
    }

    return this.request('ModifyVnRepeatingConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Prompt - prompt. required.
   * @param {Long} Timeout - timeout. required.
   * @param {Integer} Threshold - threshold. required.
   * @param {String} FinalPrompt - finalPrompt. required.
   * @param {String} FinalAction - finalAction. required.
   * @param {String} FinalActionParams - finalActionParams. optional.
   */
  modifyVnSilenceTimeoutConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Prompt')) {
      throw new TypeError('parameter "Prompt" is required');
    }

    if (!hasOwnProperty(params, 'Timeout')) {
      throw new TypeError('parameter "Timeout" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    if (!hasOwnProperty(params, 'FinalPrompt')) {
      throw new TypeError('parameter "FinalPrompt" is required');
    }

    if (!hasOwnProperty(params, 'FinalAction')) {
      throw new TypeError('parameter "FinalAction" is required');
    }

    return this.request('ModifyVnSilenceTimeoutConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Prompt - prompt. required.
   * @param {Integer} Threshold - threshold. required.
   * @param {String} FinalPrompt - finalPrompt. required.
   * @param {String} FinalAction - finalAction. required.
   * @param {String} FinalActionParams - finalActionParams. optional.
   */
  modifyVnUnrecognizingConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Prompt')) {
      throw new TypeError('parameter "Prompt" is required');
    }

    if (!hasOwnProperty(params, 'Threshold')) {
      throw new TypeError('parameter "Threshold" is required');
    }

    if (!hasOwnProperty(params, 'FinalPrompt')) {
      throw new TypeError('parameter "FinalPrompt" is required');
    }

    if (!hasOwnProperty(params, 'FinalAction')) {
      throw new TypeError('parameter "FinalAction" is required');
    }

    return this.request('ModifyVnUnrecognizingConfig', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TargetParentId - targetParentId. optional.
   * @param {String} CategoryId - categoryId. required.
   * @param {String} TargetPreviousSiblingId - targetPreviousSiblingId. optional.
   */
  moveVnCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CategoryId')) {
      throw new TypeError('parameter "CategoryId" is required');
    }

    return this.request('MoveVnCategory', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} NavigationScriptId - navigationScriptId. required.
   * @param {String} TargetCategoryId - targetCategoryId. required.
   */
  moveVnNavigationScript(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'NavigationScriptId')) {
      throw new TypeError('parameter "NavigationScriptId" is required');
    }

    if (!hasOwnProperty(params, 'TargetCategoryId')) {
      throw new TypeError('parameter "TargetCategoryId" is required');
    }

    return this.request('MoveVnNavigationScript', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} data - Data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  orderSucceededCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('OrderSucceededCallback', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CalleeNumber - calleeNumber. required.
   * @param {RepeatList} CandidateNumber - candidateNumbers. required.
   */
  pickLocalNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CalleeNumber')) {
      throw new TypeError('parameter "CalleeNumber" is required');
    }

    if (!hasOwnProperty(params, 'CandidateNumber')) {
      throw new TypeError('parameter "CandidateNumber" is required');
    }

    return this.request('PickLocalNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CalleeNumber - calleeNumber. required.
   * @param {RepeatList} CandidateNumber - candidateNumbers. required.
   * @param {Integer} Count - count. required.
   */
  pickOutboundNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CalleeNumber')) {
      throw new TypeError('parameter "CalleeNumber" is required');
    }

    if (!hasOwnProperty(params, 'CandidateNumber')) {
      throw new TypeError('parameter "CandidateNumber" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('PickOutboundNumbers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CalleeNumber - calleeNumber. required.
   * @param {RepeatList} ServiceTag - serviceTags. optional.
   * @param {RepeatList} SkillGroupId - skillGroupIds. required.
   * @param {Integer} Count - count. required.
   * @param {RepeatList} PrioritizedCallerArea - prioritizedCallerAreas. optional.
   */
  pickOutboundNumbersByTags(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CalleeNumber')) {
      throw new TypeError('parameter "CalleeNumber" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Count')) {
      throw new TypeError('parameter "Count" is required');
    }

    return this.request('PickOutboundNumbersByTags', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   */
  preCreateMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('PreCreateMedia', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   * @param {String} Bucket - bucket. optional.
   */
  preCreateMediaEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('PreCreateMediaEx', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} FileName - fileName. required.
   * @param {String} Type - type. required.
   * @param {String} Content - content. optional.
   */
  preModifyMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('PreModifyMedia', params, options);
  }

  /**
   * @param {RepeatList} SmsUpMessage - smsUpMessages. required.
   */
  processRepliedShortMessages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SmsUpMessage')) {
      throw new TypeError('parameter "SmsUpMessage" is required');
    }

    return this.request('ProcessRepliedShortMessages', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  publishCabIvr(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('PublishCabIvr', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowVersionId - contactFlowVersionId. required.
   */
  publishContactFlowVersion(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowVersionId')) {
      throw new TypeError('parameter "ContactFlowVersionId" is required');
    }

    return this.request('PublishContactFlowVersion', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} SurveyId - surveyId. required.
   */
  publishSurvey(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'SurveyId')) {
      throw new TypeError('parameter "SurveyId" is required');
    }

    return this.request('PublishSurvey', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  publishVnInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('PublishVnInstance', params, options);
  }

  /**
   * @param {String} Provider - provider. required.
   */
  pushSipAgentGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Provider')) {
      throw new TypeError('parameter "Provider" is required');
    }

    return this.request('PushSipAgentGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} Name - name. required.
   * @param {String} Value - value. required.
   * @param {String} Dimension - dimension. optional.
   * @param {String} DimensionName - dimensionName. required.
   */
  putConfigItemForFlat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    if (!hasOwnProperty(params, 'DimensionName')) {
      throw new TypeError('parameter "DimensionName" is required');
    }

    return this.request('PutConfigItemForFlat', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} ConfigItem - configItems. required.
   */
  putConfigItemsForFlat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConfigItem')) {
      throw new TypeError('parameter "ConfigItem" is required');
    }

    return this.request('PutConfigItemsForFlat', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} name - names. required.
   * @param {RepeatList} value - values. required.
   */
  putInstanceConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'name')) {
      throw new TypeError('parameter "name" is required');
    }

    if (!hasOwnProperty(params, 'value')) {
      throw new TypeError('parameter "value" is required');
    }

    return this.request('PutInstanceConfig', params, options);
  }

  /**
   * @param {Long} TaobaoUid - taobaoUid. optional.
   * @param {Boolean} AvailableOnly - availableOnly. optional.
   */
  queryAliyunCorpNumber(params = {}, options = {}) {
    return this.request('QueryAliyunCorpNumber', params, options);
  }

  /**
   * @param {RepeatList} TaskId - taskIds. required.
   */
  queryCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('QueryCall', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   * @param {String} WorkOrderId - workOrderId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryNumberCorp(params = {}, options = {}) {
    return this.request('QueryNumberCorp', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   * @param {String} WorkOrderId - workOrderId. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryNumberCorpIdentify(params = {}, options = {}) {
    return this.request('QueryNumberCorpIdentify', params, options);
  }

  /**
   */
  queryNumberPriceLevel(params = {}, options = {}) {
    return this.request('QueryNumberPriceLevel', params, options);
  }

  /**
   */
  queryNumbersOfMainAccount(params = {}, options = {}) {
    return this.request('QueryNumbersOfMainAccount', params, options);
  }

  /**
   * @param {String} Province - province. required.
   * @param {String} City - city. required.
   * @param {Integer} RemainCount - remainCount. optional.
   * @param {Long} OrderId - orderId. required.
   * @param {Integer} MonthlyPrice - monthlyPrice. required.
   * @param {Long} SpecId - specId. optional.
   */
  queryRandomNumbers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Province')) {
      throw new TypeError('parameter "Province" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'MonthlyPrice')) {
      throw new TypeError('parameter "MonthlyPrice" is required');
    }

    return this.request('QueryRandomNumbers', params, options);
  }

  /**
   * @param {String} ContactId - contactId. required.
   * @param {String} MockResponse - mockResponse. optional.
   */
  queryRedialIndicator(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactId')) {
      throw new TypeError('parameter "ContactId" is required');
    }

    return this.request('QueryRedialIndicator', params, options);
  }

  /**
   * @param {Long} SpecId - specId. optional.
   */
  queryResDistribute(params = {}, options = {}) {
    return this.request('QueryResDistribute', params, options);
  }

  /**
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Boolean} QueryUpstream - queryUpstream. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryUnsetStatusCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryUnsetStatusCall', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallingNumber - callingNumber. optional.
   * @param {Long} BeginTimeLeftRange - beginTimeLeftRange. optional.
   * @param {Long} BeginTimeRightRange - beginTimeRightRange. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryVnConversations(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryVnConversations', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CategoryId - categoryId. optional.
   * @param {String} Type - type. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryVnNavigationScripts(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryVnNavigationScripts', params, options);
  }

  /**
   * @param {String} Province - province. required.
   * @param {String} City - city. required.
   * @param {RepeatList} SpecId - specIds. required.
   */
  queryVoiceNumberStockCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Province')) {
      throw new TypeError('parameter "Province" is required');
    }

    if (!hasOwnProperty(params, 'City')) {
      throw new TypeError('parameter "City" is required');
    }

    if (!hasOwnProperty(params, 'SpecId')) {
      throw new TypeError('parameter "SpecId" is required');
    }

    return this.request('QueryVoiceNumberStockCount', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} CallId - callId. required.
   * @param {String} TaskId - taskId. required.
   * @param {Long} ActualTime - actualTime. required.
   * @param {String} CallingNumber - callingNumber. required.
   * @param {String} CalledNumber - calledNumber. required.
   * @param {String} DispositionCode - dispositionCode. required.
   */
  recordFailure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CallId')) {
      throw new TypeError('parameter "CallId" is required');
    }

    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'ActualTime')) {
      throw new TypeError('parameter "ActualTime" is required');
    }

    if (!hasOwnProperty(params, 'CallingNumber')) {
      throw new TypeError('parameter "CallingNumber" is required');
    }

    if (!hasOwnProperty(params, 'CalledNumber')) {
      throw new TypeError('parameter "CalledNumber" is required');
    }

    if (!hasOwnProperty(params, 'DispositionCode')) {
      throw new TypeError('parameter "DispositionCode" is required');
    }

    return this.request('RecordFailure', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  refreshToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RefreshToken', params, options);
  }

  /**
   * @param {String} data - data. required.
   */
  refund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Refund', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   */
  releaseCabService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('ReleaseCabService', params, options);
  }

  /**
   * @param {Long} OwnerUid - ownerUid. optional.
   */
  releaseService(params = {}, options = {}) {
    return this.request('ReleaseService', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumberId - phoneNumberId. required.
   * @param {String} ContactFlowId - contactFlowId. required.
   */
  removeContactFlowFromPhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumberId')) {
      throw new TypeError('parameter "PhoneNumberId" is required');
    }

    if (!hasOwnProperty(params, 'ContactFlowId')) {
      throw new TypeError('parameter "ContactFlowId" is required');
    }

    return this.request('RemoveContactFlowFromPhoneNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumberId - phoneNumberId. required.
   */
  removePhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumberId')) {
      throw new TypeError('parameter "PhoneNumberId" is required');
    }

    return this.request('RemovePhoneNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleId - roleId. required.
   * @param {RepeatList} PrivilegeId - privilegeIds. required.
   */
  removePrivilegesFromRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    if (!hasOwnProperty(params, 'PrivilegeId')) {
      throw new TypeError('parameter "PrivilegeId" is required');
    }

    return this.request('RemovePrivilegesFromRole', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} UserId - userId. required.
   * @param {RepeatList} RoleId - roleIds. required.
   */
  removeRolesFromUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'RoleId')) {
      throw new TypeError('parameter "RoleId" is required');
    }

    return this.request('RemoveRolesFromUser', params, options);
  }

  /**
   */
  removeSystemSpecification(params = {}, options = {}) {
    return this.request('RemoveSystemSpecification', params, options);
  }

  /**
   * @param {Long} TbUserid - tbUserid. required.
   */
  removeTbAliyunUserMappingByTbUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TbUserid')) {
      throw new TypeError('parameter "TbUserid" is required');
    }

    return this.request('RemoveTbAliyunUserMappingByTbUid', params, options);
  }

  /**
   * @param {String} PhoneNumberId - phoneNumberId. required.
   */
  removeTestPhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumberId')) {
      throw new TypeError('parameter "PhoneNumberId" is required');
    }

    return this.request('RemoveTestPhoneNumber', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} UserId - userIds. required.
   */
  removeUsers(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('RemoveUsers', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} UserId - userIds. required.
   */
  removeUsersEx(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('RemoveUsersEx', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {RepeatList} UserId - userIds. required.
   */
  removeUsersFromSkillGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('RemoveUsersFromSkillGroup', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   */
  requestLoginInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RequestLoginInfo', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} All - all. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {RepeatList} JobId - jobIds. optional.
   * @param {RepeatList} JobReferenceId - jobReferenceIds. optional.
   */
  resumeJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    return this.request('ResumeJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {Boolean} All - all. required.
   * @param {String} JobGroupId - groupId. optional.
   * @param {RepeatList} JobId - jobIds. optional.
   */
  resumePredictiveJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    return this.request('ResumePredictiveJobs', params, options);
  }

  /**
   * @param {Long} OwnerUid - ownerUid. optional.
   */
  resumeService(params = {}, options = {}) {
    return this.request('ResumeService', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} TargetVersion - targetVersion. required.
   */
  rollbackVnInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'TargetVersion')) {
      throw new TypeError('parameter "TargetVersion" is required');
    }

    return this.request('RollbackVnInstance', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumbers - phoneNumbers. required.
   * @param {Long} ConfigId - configId. required.
   * @param {String} TemplateParam - templateParam. optional.
   */
  sendPredefinedShortMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumbers')) {
      throw new TypeError('parameter "PhoneNumbers" is required');
    }

    if (!hasOwnProperty(params, 'ConfigId')) {
      throw new TypeError('parameter "ConfigId" is required');
    }

    return this.request('SendPredefinedShortMessage', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} PhoneNumbers - phoneNumbers. required.
   * @param {String} SignName - signName. required.
   * @param {String} TemplateCode - templateCode. required.
   * @param {String} TemplateParam - templateParam. optional.
   * @param {String} SmsUpExtendCode - smsUpExtendCode. optional.
   * @param {String} OutId - outId. optional.
   */
  sendShortMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumbers')) {
      throw new TypeError('parameter "PhoneNumbers" is required');
    }

    if (!hasOwnProperty(params, 'SignName')) {
      throw new TypeError('parameter "SignName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    return this.request('SendShortMessage', params, options);
  }

  /**
   * @param {String} Provider - provider. required.
   */
  setProvider(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Provider')) {
      throw new TypeError('parameter "Provider" is required');
    }

    return this.request('SetProvider', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ConversationId - conversationId. required.
   * @param {String} InitialContext - initialContext. optional.
   */
  silenceTimeoutVn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ConversationId')) {
      throw new TypeError('parameter "ConversationId" is required');
    }

    return this.request('SilenceTimeoutVn', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Caller - caller. required.
   * @param {String} Callee - callee. required.
   * @param {String} ContractFlowId - contractFlowId. required.
   */
  simpleDial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Callee')) {
      throw new TypeError('parameter "Callee" is required');
    }

    if (!hasOwnProperty(params, 'ContractFlowId')) {
      throw new TypeError('parameter "ContractFlowId" is required');
    }

    return this.request('SimpleDial', params, options);
  }

  /**
   * @param {String} ScenarioId - scenarioId. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   */
  standardTemplateDemo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('StandardTemplateDemo', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ContactFlowId - contactFlowId. optional.
   * @param {String} CallCenterNumber - callCenterNumber. optional.
   * @param {String} Caller - caller. required.
   * @param {String} Callee - callee. required.
   * @param {String} Tag - tag. optional.
   */
  startBack2BackCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Caller')) {
      throw new TypeError('parameter "Caller" is required');
    }

    if (!hasOwnProperty(params, 'Callee')) {
      throw new TypeError('parameter "Callee" is required');
    }

    return this.request('StartBack2BackCall', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} GroupId - groupId. optional.
   * @param {String} ScenarioId - scenarioId. required.
   * @param {RepeatList} CallingNumber - callingNumbers. optional.
   * @param {String} JobJson - jobJson. required.
   * @param {Boolean} SelfHostedCallCenter - selfHostedCallCenter. optional.
   */
  startJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ScenarioId')) {
      throw new TypeError('parameter "ScenarioId" is required');
    }

    if (!hasOwnProperty(params, 'JobJson')) {
      throw new TypeError('parameter "JobJson" is required');
    }

    return this.request('StartJob', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} JobGroupId - jobGroupId. required.
   */
  submitBatchJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'JobGroupId')) {
      throw new TypeError('parameter "JobGroupId" is required');
    }

    return this.request('SubmitBatchJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {Boolean} All - all. required.
   * @param {String} ScenarioId - scenarioId. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {RepeatList} JobId - jobIds. optional.
   * @param {RepeatList} JobReferenceId - jobReferenceIds. optional.
   */
  suspendJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    return this.request('SuspendJobs', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} SkillGroupId - skillGroupId. required.
   * @param {Boolean} All - all. required.
   * @param {String} JobGroupId - groupId. optional.
   * @param {RepeatList} JobId - jobIds. optional.
   */
  suspendPredictiveJobs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'SkillGroupId')) {
      throw new TypeError('parameter "SkillGroupId" is required');
    }

    if (!hasOwnProperty(params, 'All')) {
      throw new TypeError('parameter "All" is required');
    }

    return this.request('SuspendPredictiveJobs', params, options);
  }

  /**
   * @param {Long} OwnerUid - ownerUid. optional.
   */
  suspendService(params = {}, options = {}) {
    return this.request('SuspendService', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Region - region. required.
   * @param {String} Service - service. required.
   * @param {String} FunctionName - functionName. required.
   * @param {String} Role - role. required.
   * @param {String} Parameter - parameter. optional.
   */
  testFcInvocation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Region')) {
      throw new TypeError('parameter "Region" is required');
    }

    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    if (!hasOwnProperty(params, 'FunctionName')) {
      throw new TypeError('parameter "FunctionName" is required');
    }

    if (!hasOwnProperty(params, 'Role')) {
      throw new TypeError('parameter "Role" is required');
    }

    return this.request('TestFcInvocation', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Tts - tts. required.
   */
  transformTtsToWav(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Tts')) {
      throw new TypeError('parameter "Tts" is required');
    }

    return this.request('TransformTtsToWav', params, options);
  }

  /**
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Caller - caller. optional.
   * @param {String} CalleeAgent - calleeAgent. required.
   * @param {String} CalleeCustomer - calleeCustomer. required.
   */
  twoPartiesCall(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'CalleeAgent')) {
      throw new TypeError('parameter "CalleeAgent" is required');
    }

    if (!hasOwnProperty(params, 'CalleeCustomer')) {
      throw new TypeError('parameter "CalleeCustomer" is required');
    }

    return this.request('TwoPartiesCall', params, options);
  }

  /**
   * @param {String} ProviderId - providerId. required.
   * @param {String} Type - type. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} BizId - bizId. required.
   * @param {String} SubId - subId. optional.
   */
  unbindPrivacyNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProviderId')) {
      throw new TypeError('parameter "ProviderId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('UnbindPrivacyNumber', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. required.
   * @param {Boolean} Suspend - suspend. required.
   */
  updateCabServiceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Suspend')) {
      throw new TypeError('parameter "Suspend" is required');
    }

    return this.request('UpdateCabServiceStatus', params, options);
  }

  /**
   * @param {RepeatList} numberStatus - numberStatus. required.
   */
  updateNumberStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'numberStatus')) {
      throw new TypeError('parameter "numberStatus" is required');
    }

    return this.request('UpdateNumberStatus', params, options);
  }

  /**
   * @param {Long} AliyunPk - aliyunPk. required.
   * @param {String} TaobaoAccessToken - taobaoAccessToken. required.
   * @param {Integer} TaobaoAccessTokenExpiresIn - taobaoAccessTokenExpiresIn. optional.
   */
  updateTaobaoAccessTokenByAliyunPk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunPk')) {
      throw new TypeError('parameter "AliyunPk" is required');
    }

    if (!hasOwnProperty(params, 'TaobaoAccessToken')) {
      throw new TypeError('parameter "TaobaoAccessToken" is required');
    }

    return this.request('UpdateTaobaoAccessTokenByAliyunPk', params, options);
  }

  /**
   * @param {RepeatList} Order - orders. required.
   */
  updateTaobaoOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Order')) {
      throw new TypeError('parameter "Order" is required');
    }

    return this.request('UpdateTaobaoOrder', params, options);
  }

  /**
   * @param {Long} taobaoUid - taobaoUid. required.
   * @param {Integer} status - status. optional.
   */
  updateTaobaoUserMap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'taobaoUid')) {
      throw new TypeError('parameter "taobaoUid" is required');
    }

    return this.request('UpdateTaobaoUserMap', params, options);
  }

  /**
   * @param {RepeatList} UpdateTenantData - updateTenantDataList. required.
   */
  updateTenant(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UpdateTenantData')) {
      throw new TypeError('parameter "UpdateTenantData" is required');
    }

    return this.request('UpdateTenant', params, options);
  }

  /**
   * @param {String} CccKey - cccKey. required.
   * @param {String} DayuKey - dayuKey. optional.
   */
  uploadCorpIdentifyFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CccKey')) {
      throw new TypeError('parameter "CccKey" is required');
    }

    return this.request('UploadCorpIdentifyFile', params, options);
  }

  /**
   * @param {String} Instance - instance. required.
   * @param {Long} Media - media. required.
   * @param {String} FileName - fileName. required.
   * @param {String} CallbackUrl - callbackUrl. required.
   * @param {String} CallbackHost - callbackHost. required.
   */
  uploadMedia(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Instance')) {
      throw new TypeError('parameter "Instance" is required');
    }

    if (!hasOwnProperty(params, 'Media')) {
      throw new TypeError('parameter "Media" is required');
    }

    if (!hasOwnProperty(params, 'FileName')) {
      throw new TypeError('parameter "FileName" is required');
    }

    if (!hasOwnProperty(params, 'CallbackUrl')) {
      throw new TypeError('parameter "CallbackUrl" is required');
    }

    if (!hasOwnProperty(params, 'CallbackHost')) {
      throw new TypeError('parameter "CallbackHost" is required');
    }

    return this.request('UploadMedia', params, options);
  }

  /**
   * @param {String} Instance - instance. required.
   * @param {String} CallbackBody - callbackBody. required.
   */
  uploadMediaCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Instance')) {
      throw new TypeError('parameter "Instance" is required');
    }

    if (!hasOwnProperty(params, 'CallbackBody')) {
      throw new TypeError('parameter "CallbackBody" is required');
    }

    return this.request('UploadMediaCallback', params, options);
  }

  /**
   * @param {String} PhoneNumber - phoneNumber. required.
   */
  validNotInUsePhoneNumber(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('ValidNotInUsePhoneNumber', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  validateUniqueDomainName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ValidateUniqueDomainName', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} data - Data. required.
   * @param {String} OwnerAccount - ownerAccount. optional.
   */
  verify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('Verify', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   * @param {Long} Level - level. optional.
   * @param {String} Url - url. optional.
   * @param {String} Prompt - prompt. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doCheckResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doLogicalDeleteResource', params, options);
  }

  /**
   * @param {Boolean} Interrupt - interrupt. optional.
   * @param {String} Invoker - invoker. required.
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. required.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. required.
   * @param {String} TaskIdentifier - taskIdentifier. required.
   * @param {String} TaskExtraData - taskExtraData. required.
   * @param {String} GmtWakeup - gmtWakeup. required.
   * @param {Boolean} Success - success. optional.
   * @param {String} Message - message. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Invoker')) {
      throw new TypeError('parameter "Invoker" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'Country')) {
      throw new TypeError('parameter "Country" is required');
    }

    if (!hasOwnProperty(params, 'TaskIdentifier')) {
      throw new TypeError('parameter "TaskIdentifier" is required');
    }

    if (!hasOwnProperty(params, 'TaskExtraData')) {
      throw new TypeError('parameter "TaskExtraData" is required');
    }

    if (!hasOwnProperty(params, 'GmtWakeup')) {
      throw new TypeError('parameter "GmtWakeup" is required');
    }

    return this.request('doPhysicalDeleteResource', params, options);
  }

  /**
   */
  listRegionsOfFunctionService(params = {}, options = {}) {
    return this.request('listRegionsOfFunctionService', params, options);
  }

}

module.exports = Client;
