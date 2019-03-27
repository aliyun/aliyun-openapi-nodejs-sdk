
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-29';
    super(config);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {RepeatList} TaskDetailNo - taskDetailNos. required.
   */
  acknowledgeTaskResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskDetailNo')) {
      throw new TypeError('parameter "TaskDetailNo" is required');
    }

    return this.request('AcknowledgeTaskResult', params, options);
  }

  /**
   * @param {String} Keyword - keyword. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  batchFuzzyMatchDomainSensitiveWord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    return this.request('BatchFuzzyMatchDomainSensitiveWord', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} InstanceId - saleId. required.
   * @param {String} ActionType - actionType. required.
   */
  cancelDomainVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ActionType')) {
      throw new TypeError('parameter "ActionType" is required');
    }

    return this.request('CancelDomainVerification', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - saleId. required.
   * @param {String} QualificationType - qualificationType. required.
   */
  cancelQualificationVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'QualificationType')) {
      throw new TypeError('parameter "QualificationType" is required');
    }

    return this.request('CancelQualificationVerification', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} FeeCommand - feeCommand. optional.
   * @param {String} FeeCurrency - feeCurrency. optional.
   * @param {Integer} FeePeriod - feePeriod. optional.
   * @param {String} Lang - lang. optional. default: en.
   */
  checkDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CheckDomain', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  checkDomainSunriseClaim(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CheckDomainSunriseClaim', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} CheckAction - checkAction. required.
   */
  checkMaxYearOfServerLock(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'CheckAction')) {
      throw new TypeError('parameter "CheckAction" is required');
    }

    return this.request('CheckMaxYearOfServerLock', params, options);
  }

  /**
   * @param {Integer} FeePeriod - feePeriod. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  checkProcessingServerLockApply(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CheckProcessingServerLockApply', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} TransferAuthorizationCode - transferCode. optional.
   */
  checkTransferInFeasibility(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CheckTransferInFeasibility', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} Email - email. required.
   * @param {RepeatList} DomainName - domains. required.
   */
  confirmTransferInEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ConfirmTransferInEmail', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} DomainGroupId - groupId. optional.
   */
  deleteDomainGroup(params = {}, options = {}) {
    return this.request('DeleteDomainGroup', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} Email - data. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  deleteEmailVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('DeleteEmailVerification', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} RegistrantProfileId - templateId. required.
   */
  deleteRegistrantProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegistrantProfileId')) {
      throw new TypeError('parameter "RegistrantProfileId" is required');
    }

    return this.request('DeleteRegistrantProfile', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Email - email. required.
   */
  emailVerified(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('EmailVerified', params, options);
  }

  /**
   * @param {String} Keyword - keyword. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  fuzzyMatchDomainSensitiveWord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    return this.request('FuzzyMatchDomainSensitiveWord', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  getQualificationUploadPolicy(params = {}, options = {}) {
    return this.request('GetQualificationUploadPolicy', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} BeginCreateTime - beginCreateTime. optional.
   * @param {Long} EndCreateTime - endCreateTime. optional.
   * @param {String} Email - email. optional.
   * @param {Integer} VerificationStatus - verificationStatus. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 500.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  listEmailVerification(params = {}, options = {}) {
    return this.request('ListEmailVerification', params, options);
  }

  /**
   * @param {String} DomainName - domainName. optional.
   * @param {Long} EndStartDate - endStartDate. optional.
   * @param {Long} BeginStartDate - beginStartDate. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 500.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} LockProductId - lockProductId. optional.
   * @param {Integer} ServerLockStatus - serverLockStatus. optional.
   * @param {Long} StartExpireDate - startExpireDate. optional.
   * @param {Long} EndExpireDate - endExpireDate. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  listServerLock(params = {}, options = {}) {
    return this.request('ListServerLock', params, options);
  }

  /**
   * @param {String} ClaimKey - claimKey. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  lookupTmchNotice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ClaimKey')) {
      throw new TypeError('parameter "ClaimKey" is required');
    }

    return this.request('LookupTmchNotice', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} TaskNo - taskNo. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} InstanceId - saleId. optional.
   * @param {Integer} TaskResultStatus - taskStatus. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  pollTaskResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('PollTaskResult', params, options);
  }

  /**
   * @param {Long} EndExpirationDate - endExpirationDate. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} StartExpirationDate - startExpirationDate. optional.
   * @param {String} ProductDomainType - productDomainType. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} DomainGroupId - domainGroupId. optional.
   * @param {Boolean} DomainNameSort - domainNameSort. optional.
   * @param {Integer} DomainStatus - domainStatus. optional.
   * @param {Integer} EndLength - endLength. optional.
   * @param {String} Excluded - excluded. optional.
   * @param {Boolean} ExcludedPrefix - excludedPrefix. optional.
   * @param {Boolean} ExcludedSuffix - excludedSuffix. optional.
   * @param {Boolean} ExpirationDateSort - expirationDateSort. optional.
   * @param {Integer} Form - form. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Boolean} KeyWordPrefix - keyWordPrefix. optional.
   * @param {Boolean} KeyWordSuffix - keyWordSuffix. optional.
   * @param {Boolean} ProductDomainTypeSort - productDomainTypeSort. optional.
   * @param {Boolean} RegistrationDateSort - registrationDateSort. optional.
   * @param {Integer} StartLength - startLength. optional.
   * @param {Integer} TradeType - tradeType. optional.
   * @param {String} Suffixs - suffixs. optional.
   * @param {Long} StartRegistrationDate - startRegistrationDate. optional.
   * @param {Long} EndRegistrationDate - endRegistrationDate. optional.
   */
  queryAdvancedDomainList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryAdvancedDomainList', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} StartDate - startDate. optional.
   * @param {Long} EndDate - endDate. optional.
   */
  queryChangeLogList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryChangeLogList', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} ContactType - contactType. required.
   */
  queryContactInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    return this.request('QueryContactInfo', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryDSRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('QueryDSRecord', params, options);
  }

  /**
   * @param {String} InstanceId - saleId. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryDnsHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryDnsHost', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryDomainAdminDivision(params = {}, options = {}) {
    return this.request('QueryDomainAdminDivision', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} InstanceId - saleId. required.
   */
  queryDomainByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryDomainByInstanceId', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainGroupName - groupName. optional.
   * @param {Boolean} ShowDeletingGroup - showDeletingGroup. optional. default: false.
   */
  queryDomainGroupList(params = {}, options = {}) {
    return this.request('QueryDomainGroupList', params, options);
  }

  /**
   * @param {Long} EndExpirationDate - deadEndDate. optional.
   * @param {Long} StartExpirationDate - deadStartDate. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} QueryType - queryType. optional.
   * @param {Long} StartRegistrationDate - regStartDate. optional.
   * @param {Long} EndRegistrationDate - regEndDate. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} OrderByType - orderByType. optional.
   * @param {String} OrderKeyType - orderKeyType. optional.
   * @param {String} ProductDomainType - productDomainType. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} DomainGroupId - groupId. optional.
   */
  queryDomainList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryDomainList', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {Boolean} FetchImage - fetchImage. optional. default: false.
   */
  queryDomainRealNameVerificationInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('QueryDomainRealNameVerificationInfo', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryDomainSuffix(params = {}, options = {}) {
    return this.request('QueryDomainSuffix', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} Email - email. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryEmailVerification(params = {}, options = {}) {
    return this.request('QueryEmailVerification', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryEnsAssociation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('QueryEnsAssociation', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} RealNameVerificationAction - auditAction. required.
   */
  queryFailReasonForDomainRealNameVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RealNameVerificationAction')) {
      throw new TypeError('parameter "RealNameVerificationAction" is required');
    }

    return this.request('QueryFailReasonForDomainRealNameVerification', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} RegistrantProfileID - templateId. required.
   */
  queryFailReasonForRegistrantProfileRealNameVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegistrantProfileID')) {
      throw new TypeError('parameter "RegistrantProfileID" is required');
    }

    return this.request('QueryFailReasonForRegistrantProfileRealNameVerification', params, options);
  }

  /**
   * @param {String} QualificationType - qualificationType. required.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} InstanceId - saleId. required.
   * @param {Integer} Limit - limit. required.
   */
  queryFailingReasonListForQualification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QualificationType')) {
      throw new TypeError('parameter "QualificationType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('QueryFailingReasonListForQualification', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   */
  queryLocalEnsAssociation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('QueryLocalEnsAssociation', params, options);
  }

  /**
   * @param {String} InstanceId - saleId. required.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} QualificationType - qualificationType. required.
   */
  queryQualificationDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'QualificationType')) {
      throw new TypeError('parameter "QualificationType" is required');
    }

    return this.request('QueryQualificationDetail', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} RegistrantProfileId - contactTemplateId. required.
   * @param {Boolean} FetchImage - fetchImage. optional. default: false.
   */
  queryRegistrantProfileRealNameVerificationInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegistrantProfileId')) {
      throw new TypeError('parameter "RegistrantProfileId" is required');
    }

    return this.request('QueryRegistrantProfileRealNameVerificationInfo', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} RegistrantOrganization - eCompany. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} RegistrantProfileId - contactTemplateId. optional.
   * @param {Boolean} DefaultRegistrantProfile - defaultTemplate. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 500.
   * @param {String} ZhRegistrantOrganization - cCompany. optional.
   * @param {String} RegistrantType - regType. optional.
   * @param {String} RealNameStatus - auditStatus. optional.
   * @param {String} Email - email. optional.
   * @param {String} RegistrantProfileType - contactTemplateType. optional.
   */
  queryRegistrantProfiles(params = {}, options = {}) {
    return this.request('QueryRegistrantProfiles', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} InstanceId - saleId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryServerLock(params = {}, options = {}) {
    return this.request('QueryServerLock', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TaskNo - taskNo. required.
   * @param {String} DomainName - domainName. optional.
   * @param {String} DomainNameCursor - domainNameCursor. optional.
   * @param {Integer} TaskStatus - taskStatus. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} TaskDetailNoCursor - taskDetailNoCursor. optional.
   */
  queryTaskDetailHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskNo')) {
      throw new TypeError('parameter "TaskNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryTaskDetailHistory', params, options);
  }

  /**
   * @param {Integer} TaskStatus - taskStatus. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} TaskNo - taskNo. required.
   * @param {String} DomainName - domainName. optional.
   * @param {String} InstanceId - saleId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryTaskDetailList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskNo')) {
      throw new TypeError('parameter "TaskNo" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryTaskDetailList', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} BeginCreateTime - beginCreateTime. optional.
   * @param {Long} EndCreateTime - endCreateTime. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} CreateTimeCursor - createTimeCursor. optional.
   * @param {String} TaskNoCursor - taskNoCursor. optional.
   */
  queryTaskInfoHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryTaskInfoHistory', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} BeginCreateTime - beginCreateTimeLong. optional.
   * @param {Long} EndCreateTime - endCreateTimeLong. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryTaskList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryTaskList', params, options);
  }

  /**
   * @param {String} InstanceId - saleId. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryTransferInByInstanceId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('QueryTransferInByInstanceId', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Long} SubmissionStartDate - startDate. optional.
   * @param {Long} SubmissionEndDate - endDate. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} SimpleTransferInStatus - transferInStatus. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryTransferInList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryTransferInList', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryTransferOutInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('QueryTransferOutInfo', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} RegistrantProfileID - contactTemplateId. required.
   * @param {String} IdentityCredential - credential. required.
   * @param {String} IdentityCredentialNo - credentialNo. required.
   * @param {String} IdentityCredentialType - credentialType. required.
   */
  registrantProfileRealNameVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegistrantProfileID')) {
      throw new TypeError('parameter "RegistrantProfileID" is required');
    }

    if (!hasOwnProperty(params, 'IdentityCredential')) {
      throw new TypeError('parameter "IdentityCredential" is required');
    }

    if (!hasOwnProperty(params, 'IdentityCredentialNo')) {
      throw new TypeError('parameter "IdentityCredentialNo" is required');
    }

    if (!hasOwnProperty(params, 'IdentityCredentialType')) {
      throw new TypeError('parameter "IdentityCredentialType" is required');
    }

    options.method = 'POST';
    return this.request('RegistrantProfileRealNameVerification', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} Email - data. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  resendEmailVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('ResendEmailVerification', params, options);
  }

  /**
   * @param {String} InstanceId - saleId. required.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   */
  resetQualificationVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ResetQualificationVerification', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} Remark - remark. optional.
   * @param {String} InstanceIds - instanceIds. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveBatchDomainRemark(params = {}, options = {}) {
    return this.request('SaveBatchDomainRemark', params, options);
  }

  /**
   * @param {RepeatList} OrderActivateParam - orderActivateParamList. required.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} CouponNo - couponNo. optional.
   * @param {Boolean} UseCoupon - useCoupon. optional.
   * @param {String} PromotionNo - promotionNo. optional.
   * @param {Boolean} UsePromotion - usePromotion. optional.
   */
  saveBatchTaskForCreatingOrderActivate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderActivateParam')) {
      throw new TypeError('parameter "OrderActivateParam" is required');
    }

    return this.request('SaveBatchTaskForCreatingOrderActivate', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {RepeatList} OrderRedeemParam - orderRedeemParamList. required.
   * @param {String} CouponNo - couponNo. optional.
   * @param {Boolean} UseCoupon - useCoupon. optional.
   * @param {String} PromotionNo - promotionNo. optional.
   * @param {Boolean} UsePromotion - usePromotion. optional.
   */
  saveBatchTaskForCreatingOrderRedeem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderRedeemParam')) {
      throw new TypeError('parameter "OrderRedeemParam" is required');
    }

    return this.request('SaveBatchTaskForCreatingOrderRedeem', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {RepeatList} OrderRenewParam - orderRenewParamList. required.
   * @param {String} CouponNo - couponNo. optional.
   * @param {Boolean} UseCoupon - useCoupon. optional.
   * @param {String} PromotionNo - promotionNo. optional.
   * @param {Boolean} UsePromotion - usePromotion. optional.
   */
  saveBatchTaskForCreatingOrderRenew(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderRenewParam')) {
      throw new TypeError('parameter "OrderRenewParam" is required');
    }

    return this.request('SaveBatchTaskForCreatingOrderRenew', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {RepeatList} OrderTransferParam - orderTransferParamList. required.
   * @param {String} CouponNo - couponNo. optional.
   * @param {Boolean} UseCoupon - useCoupon. optional.
   * @param {String} PromotionNo - promotionNo. optional.
   * @param {Boolean} UsePromotion - usePromotion. optional.
   */
  saveBatchTaskForCreatingOrderTransfer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderTransferParam')) {
      throw new TypeError('parameter "OrderTransferParam" is required');
    }

    return this.request('SaveBatchTaskForCreatingOrderTransfer', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {RepeatList} DomainName - domainNameList. required.
   * @param {Boolean} Status - status. required.
   */
  saveBatchTaskForDomainNameProxyService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SaveBatchTaskForDomainNameProxyService', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {RepeatList} DomainName - domainNameList. required.
   * @param {Boolean} AliyunDns - aliyunDns. required.
   * @param {RepeatList} DomainNameServer - dnsList. optional.
   */
  saveBatchTaskForModifyingDomainDns(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AliyunDns')) {
      throw new TypeError('parameter "AliyunDns" is required');
    }

    return this.request('SaveBatchTaskForModifyingDomainDns', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {RepeatList} DomainName - domainNameList. required.
   * @param {Boolean} Status - status. required.
   */
  saveBatchTaskForTransferProhibitionLock(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SaveBatchTaskForTransferProhibitionLock', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {RepeatList} DomainName - domainNameList. required.
   * @param {Boolean} Status - status. required.
   */
  saveBatchTaskForUpdateProhibitionLock(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SaveBatchTaskForUpdateProhibitionLock', params, options);
  }

  /**
   * @param {String} Address - eVenu. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} City - eCity. optional.
   * @param {String} RegistrantOrganization - eCompany. optional.
   * @param {String} RegistrantName - eName. optional.
   * @param {String} Province - eProvince. optional.
   * @param {String} Country - cCountry. optional.
   * @param {String} Email - email. optional.
   * @param {String} PostalCode - postalCode. optional.
   * @param {String} TelArea - telArea. optional.
   * @param {String} Telephone - telMain. optional.
   * @param {String} TelExt - telExt. optional.
   * @param {String} ZhCity - cCity. optional.
   * @param {String} ZhRegistrantOrganization - cCompany. optional.
   * @param {String} ZhRegistrantName - cName. optional.
   * @param {String} ZhProvince - cProvince. optional.
   * @param {String} ZhAddress - cVenu. optional.
   * @param {String} ContactType - contactType. required.
   * @param {String} RegistrantType - regType. required.
   * @param {Boolean} TransferOutProhibited - addTransferLock. optional.
   * @param {RepeatList} DomainName - domainNameList. required.
   */
  saveBatchTaskForUpdatingContactInfoByNewContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    if (!hasOwnProperty(params, 'RegistrantType')) {
      throw new TypeError('parameter "RegistrantType" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveBatchTaskForUpdatingContactInfoByNewContact', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} RegistrantProfileId - contactTemplateId. required.
   * @param {String} ContactType - contactType. required.
   * @param {Boolean} TransferOutProhibited - addTransferLock. optional. default: false.
   * @param {RepeatList} DomainName - domainNameList. required.
   */
  saveBatchTaskForUpdatingContactInfoByRegistrantProfileId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegistrantProfileId')) {
      throw new TypeError('parameter "RegistrantProfileId" is required');
    }

    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveBatchTaskForUpdatingContactInfoByRegistrantProfileId', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainGroupName - groupName. optional.
   * @param {Long} DomainGroupId - groupId. optional.
   */
  saveDomainGroup(params = {}, options = {}) {
    return this.request('SaveDomainGroup', params, options);
  }

  /**
   * @param {Boolean} DefaultRegistrantProfile - defaultTemplate. optional.
   * @param {String} Country - cCountry. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} RegistrantProfileId - id. optional.
   * @param {String} City - eCity. optional.
   * @param {String} RegistrantOrganization - eCompany. optional.
   * @param {String} RegistrantName - eName. optional.
   * @param {String} Province - eProvince. optional.
   * @param {String} Address - eVenu. optional.
   * @param {String} Email - email. optional.
   * @param {String} PostalCode - postalCode. optional.
   * @param {String} TelArea - telArea. optional.
   * @param {String} Telephone - telMain. optional.
   * @param {String} TelExt - telExt. optional.
   * @param {String} ZhRegistrantOrganization - cCompany. optional.
   * @param {String} ZhRegistrantName - cName. optional.
   * @param {String} ZhProvince - cProvince. optional.
   * @param {String} ZhAddress - cVenu. optional.
   * @param {String} ZhCity - cCity. optional.
   * @param {String} RegistrantType - regType. optional.
   * @param {String} RegistrantProfileType - contactTemplateType. optional.
   */
  saveRegistrantProfile(params = {}, options = {}) {
    return this.request('SaveRegistrantProfile', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Integer} KeyTag - keyTag. required.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Integer} Algorithm - algorithm. required.
   * @param {Integer} DigestType - digestType. required.
   * @param {String} Digest - digest. required.
   */
  saveSingleTaskForAddingDSRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'KeyTag')) {
      throw new TypeError('parameter "KeyTag" is required');
    }

    if (!hasOwnProperty(params, 'Algorithm')) {
      throw new TypeError('parameter "Algorithm" is required');
    }

    if (!hasOwnProperty(params, 'DigestType')) {
      throw new TypeError('parameter "DigestType" is required');
    }

    if (!hasOwnProperty(params, 'Digest')) {
      throw new TypeError('parameter "Digest" is required');
    }

    return this.request('SaveSingleTaskForAddingDSRecord', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForApprovingTransferOut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveSingleTaskForApprovingTransferOut', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} Address - address. required.
   */
  saveSingleTaskForAssociatingEns(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Address')) {
      throw new TypeError('parameter "Address" is required');
    }

    return this.request('SaveSingleTaskForAssociatingEns', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForCancelingTransferIn(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveSingleTaskForCancelingTransferIn', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForCancelingTransferOut(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveSingleTaskForCancelingTransferOut', params, options);
  }

  /**
   * @param {String} InstanceId - saleId. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DnsName - dnsName. required.
   * @param {RepeatList} Ip - ipList. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForCreatingDnsHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DnsName')) {
      throw new TypeError('parameter "DnsName" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('SaveSingleTaskForCreatingDnsHost', params, options);
  }

  /**
   * @param {String} ZhRegistrantName - cName. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {Integer} SubscriptionDuration - periodNum. optional. default: 1.
   * @param {Long} RegistrantProfileId - contactTemplateId. optional.
   * @param {Boolean} EnableDomainProxy - domainProtect. optional. default: true.
   * @param {Boolean} PermitPremiumActivation - permitPremiumActivation. optional. default: false.
   * @param {Boolean} AliyunDns - aliyunDns. optional. default: true.
   * @param {String} Dns1 - dns1. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} ZhCity - cCity. optional.
   * @param {String} ZhRegistrantOrganization - cCompany. optional.
   * @param {String} Country - cCountry. optional.
   * @param {String} Dns2 - dns2. optional.
   * @param {String} ZhProvince - cProvince. optional.
   * @param {String} ZhAddress - cVenu. optional.
   * @param {String} City - eCity. optional.
   * @param {String} RegistrantOrganization - eCompany. optional.
   * @param {String} RegistrantName - eName. optional.
   * @param {String} Province - eProvince. optional.
   * @param {String} Address - eVenu. optional.
   * @param {String} Email - email. optional.
   * @param {String} PostalCode - postalCode. optional.
   * @param {String} TelArea - telArea. optional.
   * @param {String} Telephone - telMain. optional.
   * @param {String} TelExt - telExt. optional.
   * @param {String} RegistrantType - regType. optional.
   * @param {Boolean} TrademarkDomainActivation - trademarkDomainActivation. optional. default: false.
   * @param {String} CouponNo - couponNo. optional.
   * @param {Boolean} UseCoupon - useCoupon. optional.
   * @param {String} PromotionNo - promotionNo. optional.
   * @param {Boolean} UsePromotion - usePromotion. optional.
   */
  saveSingleTaskForCreatingOrderActivate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveSingleTaskForCreatingOrderActivate', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {Long} CurrentExpirationDate - beginDate. required.
   * @param {String} CouponNo - couponNo. optional.
   * @param {Boolean} UseCoupon - useCoupon. optional.
   * @param {String} PromotionNo - promotionNo. optional.
   * @param {Boolean} UsePromotion - usePromotion. optional.
   */
  saveSingleTaskForCreatingOrderRedeem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'CurrentExpirationDate')) {
      throw new TypeError('parameter "CurrentExpirationDate" is required');
    }

    return this.request('SaveSingleTaskForCreatingOrderRedeem', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {Integer} SubscriptionDuration - periodNum. required.
   * @param {Long} CurrentExpirationDate - beginDate. required.
   * @param {String} CouponNo - couponNo. optional.
   * @param {Boolean} UseCoupon - useCoupon. optional.
   * @param {String} PromotionNo - promotionNo. optional.
   * @param {Boolean} UsePromotion - usePromotion. optional.
   */
  saveSingleTaskForCreatingOrderRenew(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'SubscriptionDuration')) {
      throw new TypeError('parameter "SubscriptionDuration" is required');
    }

    if (!hasOwnProperty(params, 'CurrentExpirationDate')) {
      throw new TypeError('parameter "CurrentExpirationDate" is required');
    }

    return this.request('SaveSingleTaskForCreatingOrderRenew', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} AuthorizationCode - transferPwd. required.
   * @param {Long} RegistrantProfileId - contactTemplateId. required.
   * @param {Boolean} PermitPremiumTransfer - permitPremiumTransfer. optional. default: false.
   * @param {String} CouponNo - couponNo. optional.
   * @param {Boolean} UseCoupon - useCoupon. optional.
   * @param {String} PromotionNo - promotionNo. optional.
   * @param {Boolean} UsePromotion - usePromotion. optional.
   */
  saveSingleTaskForCreatingOrderTransfer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AuthorizationCode')) {
      throw new TypeError('parameter "AuthorizationCode" is required');
    }

    if (!hasOwnProperty(params, 'RegistrantProfileId')) {
      throw new TypeError('parameter "RegistrantProfileId" is required');
    }

    return this.request('SaveSingleTaskForCreatingOrderTransfer', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Integer} KeyTag - keyTag. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForDeletingDSRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'KeyTag')) {
      throw new TypeError('parameter "KeyTag" is required');
    }

    return this.request('SaveSingleTaskForDeletingDSRecord', params, options);
  }

  /**
   * @param {String} InstanceId - saleId. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DnsName - dnsName. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForDeletingDnsHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DnsName')) {
      throw new TypeError('parameter "DnsName" is required');
    }

    return this.request('SaveSingleTaskForDeletingDnsHost', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   */
  saveSingleTaskForDisassociatingEns(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveSingleTaskForDisassociatingEns', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {Boolean} Status - status. required.
   */
  saveSingleTaskForDomainNameProxyService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SaveSingleTaskForDomainNameProxyService', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Integer} KeyTag - keyTag. required.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {Integer} Algorithm - algorithm. required.
   * @param {Integer} DigestType - digestType. required.
   * @param {String} Digest - digest. required.
   */
  saveSingleTaskForModifyingDSRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'KeyTag')) {
      throw new TypeError('parameter "KeyTag" is required');
    }

    if (!hasOwnProperty(params, 'Algorithm')) {
      throw new TypeError('parameter "Algorithm" is required');
    }

    if (!hasOwnProperty(params, 'DigestType')) {
      throw new TypeError('parameter "DigestType" is required');
    }

    if (!hasOwnProperty(params, 'Digest')) {
      throw new TypeError('parameter "Digest" is required');
    }

    return this.request('SaveSingleTaskForModifyingDSRecord', params, options);
  }

  /**
   * @param {String} InstanceId - saleId. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DnsName - dnsName. required.
   * @param {RepeatList} Ip - ipList. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForModifyingDnsHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'DnsName')) {
      throw new TypeError('parameter "DnsName" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('SaveSingleTaskForModifyingDnsHost', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForQueryingTransferAuthorizationCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveSingleTaskForQueryingTransferAuthorizationCode', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForSynchronizingDSRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveSingleTaskForSynchronizingDSRecord', params, options);
  }

  /**
   * @param {String} InstanceId - saleId. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveSingleTaskForSynchronizingDnsHost(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('SaveSingleTaskForSynchronizingDnsHost', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {Boolean} Status - status. required.
   */
  saveSingleTaskForTransferProhibitionLock(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SaveSingleTaskForTransferProhibitionLock', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {Boolean} Status - status. required.
   */
  saveSingleTaskForUpdateProhibitionLock(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('SaveSingleTaskForUpdateProhibitionLock', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} InstanceId - saleId. optional.
   * @param {Long} RegistrantProfileId - contactTemplateId. required.
   * @param {String} ContactType - contactType. required.
   * @param {Boolean} AddTransferLock - addTransferLock. optional. default: false.
   */
  saveSingleTaskForUpdatingContactInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'RegistrantProfileId')) {
      throw new TypeError('parameter "RegistrantProfileId" is required');
    }

    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    return this.request('SaveSingleTaskForUpdatingContactInfo', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} InstanceId - saleId. required.
   */
  saveTaskForSubmittingDomainDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('SaveTaskForSubmittingDomainDelete', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} IdentityCredential - credential. required.
   * @param {String} IdentityCredentialNo - credentialNo. required.
   * @param {String} IdentityCredentialType - credentialType. required.
   * @param {RepeatList} DomainName - domainNameList. required.
   */
  saveTaskForSubmittingDomainRealNameVerificationByIdentityCredential(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IdentityCredential')) {
      throw new TypeError('parameter "IdentityCredential" is required');
    }

    if (!hasOwnProperty(params, 'IdentityCredentialNo')) {
      throw new TypeError('parameter "IdentityCredentialNo" is required');
    }

    if (!hasOwnProperty(params, 'IdentityCredentialType')) {
      throw new TypeError('parameter "IdentityCredentialType" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    options.method = 'POST';
    return this.request('SaveTaskForSubmittingDomainRealNameVerificationByIdentityCredential', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} InstanceId - saleId. required.
   * @param {Long} RegistrantProfileId - contactTemplateId. required.
   */
  saveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'RegistrantProfileId')) {
      throw new TypeError('parameter "RegistrantProfileId" is required');
    }

    return this.request('SaveTaskForSubmittingDomainRealNameVerificationByRegistrantProfileID', params, options);
  }

  /**
   * @param {String} PostalCode - postalCode. optional.
   * @param {String} Address - eVenu. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} City - eCity. optional.
   * @param {String} RegistrantOrganization - eCompany. optional.
   * @param {String} RegistrantName - eName. optional.
   * @param {String} Province - eProvince. optional.
   * @param {String} Email - email. optional.
   * @param {String} Country - cCountry. optional.
   * @param {String} TelArea - telArea. required.
   * @param {String} Telephone - telMain. required.
   * @param {String} TelExt - telExt. optional.
   * @param {String} ZhCity - cCity. optional.
   * @param {String} ZhRegistrantOrganization - cCompany. optional.
   * @param {String} ZhRegistrantName - cName. optional.
   * @param {String} ZhProvince - cProvince. optional.
   * @param {String} ZhAddress - cVenu. optional.
   * @param {String} RegistrantType - regType. required.
   * @param {RepeatList} DomainName - domainNameList. required.
   * @param {String} IdentityCredentialType - credentialType. required.
   * @param {String} IdentityCredentialNo - credentialNo. required.
   * @param {String} IdentityCredential - credential. required.
   * @param {Boolean} TransferOutProhibited - addTransferLock. required.
   */
  saveTaskForUpdatingRegistrantInfoByIdentityCredential(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TelArea')) {
      throw new TypeError('parameter "TelArea" is required');
    }

    if (!hasOwnProperty(params, 'Telephone')) {
      throw new TypeError('parameter "Telephone" is required');
    }

    if (!hasOwnProperty(params, 'RegistrantType')) {
      throw new TypeError('parameter "RegistrantType" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'IdentityCredentialType')) {
      throw new TypeError('parameter "IdentityCredentialType" is required');
    }

    if (!hasOwnProperty(params, 'IdentityCredentialNo')) {
      throw new TypeError('parameter "IdentityCredentialNo" is required');
    }

    if (!hasOwnProperty(params, 'IdentityCredential')) {
      throw new TypeError('parameter "IdentityCredential" is required');
    }

    if (!hasOwnProperty(params, 'TransferOutProhibited')) {
      throw new TypeError('parameter "TransferOutProhibited" is required');
    }

    options.method = 'POST';
    return this.request('SaveTaskForUpdatingRegistrantInfoByIdentityCredential', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} RegistrantProfileId - templateId. required.
   * @param {RepeatList} DomainName - domainNameList. required.
   * @param {Boolean} TransferOutProhibited - addTransferLock. required.
   */
  saveTaskForUpdatingRegistrantInfoByRegistrantProfileID(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegistrantProfileId')) {
      throw new TypeError('parameter "RegistrantProfileId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'TransferOutProhibited')) {
      throw new TypeError('parameter "TransferOutProhibited" is required');
    }

    return this.request('SaveTaskForUpdatingRegistrantInfoByRegistrantProfileID', params, options);
  }

  /**
   * @param {Long} EndExpirationDate - endExpirationDate. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} StartExpirationDate - startExpirationDate. optional.
   * @param {String} ProductDomainType - productDomainType. optional.
   * @param {Integer} PageSize - pageSize. optional. default: 200.
   * @param {Long} DomainGroupId - domainGroupId. optional.
   * @param {Integer} DomainStatus - domainStatus. optional.
   * @param {Integer} EndLength - endLength. optional.
   * @param {String} Excluded - excluded. optional.
   * @param {Boolean} ExcludedPrefix - excludedPrefix. optional.
   * @param {Boolean} ExcludedSuffix - excludedSuffix. optional.
   * @param {Integer} Form - form. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Boolean} KeyWordPrefix - keyWordPrefix. optional.
   * @param {Boolean} KeyWordSuffix - keyWordSuffix. optional.
   * @param {Integer} StartLength - startLength. optional.
   * @param {Integer} TradeType - tradeType. optional.
   * @param {String} Suffixs - suffixs. optional.
   * @param {Long} StartRegistrationDate - startRegistrationDate. optional.
   * @param {Long} EndRegistrationDate - endRegistrationDate. optional.
   * @param {String} ScrollId - scrollId. optional.
   */
  scrollDomainList(params = {}, options = {}) {
    return this.request('ScrollDomainList', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} Email - data. required.
   * @param {Boolean} SendIfExist - sendIfExist. optional. default: false.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  submitEmailVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('SubmitEmailVerification', params, options);
  }

  /**
   * @param {String} Token - token. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  transferInCheckMailToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('TransferInCheckMailToken', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} TransferAuthorizationCode - transferCode. required.
   */
  transferInReenterTransferAuthorizationCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'TransferAuthorizationCode')) {
      throw new TypeError('parameter "TransferAuthorizationCode" is required');
    }

    return this.request('TransferInReenterTransferAuthorizationCode', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  transferInRefetchWhoisEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('TransferInRefetchWhoisEmail', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  transferInResendMailToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('TransferInResendMailToken', params, options);
  }

  /**
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} FileToUpload - fileToUpload. optional.
   * @param {RepeatList} DomainName - domainList. optional.
   * @param {Long} DomainGroupId - groupId. required.
   * @param {Boolean} Replace - replace. required.
   * @param {Integer} DataSource - dataSource. required.
   */
  updateDomainToDomainGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainGroupId')) {
      throw new TypeError('parameter "DomainGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Replace')) {
      throw new TypeError('parameter "Replace" is required');
    }

    if (!hasOwnProperty(params, 'DataSource')) {
      throw new TypeError('parameter "DataSource" is required');
    }

    options.method = 'POST';
    return this.request('UpdateDomainToDomainGroup', params, options);
  }

  /**
   * @param {String} Province - e_province. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} City - e_city. optional.
   * @param {String} RegistrantOrganization - e_company. optional.
   * @param {String} Country - c_country. optional.
   * @param {String} RegistrantName - e_name. optional.
   * @param {String} Address - e_venu. optional.
   * @param {String} Email - email. optional.
   * @param {String} PostalCode - postalcode. optional.
   * @param {String} TelArea - telArea. optional.
   * @param {String} Telephone - telMain. optional.
   * @param {String} TelExt - telExt. optional.
   * @param {String} ZhRegistrantOrganization - c_company. optional.
   * @param {String} ZhRegistrantName - c_name. optional.
   * @param {String} ZhProvince - c_province. optional.
   * @param {String} ZhAddress - c_venu. optional.
   * @param {String} ZhCity - c_city. optional.
   * @param {String} RegistrantType - regType. optional.
   * @param {String} DomainName - domainName. optional.
   */
  verifyContactField(params = {}, options = {}) {
    return this.request('VerifyContactField', params, options);
  }

  /**
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} Token - token. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  verifyEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('VerifyEmail', params, options);
  }

}

module.exports = Client;
