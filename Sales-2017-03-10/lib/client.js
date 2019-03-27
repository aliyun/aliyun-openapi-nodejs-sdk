
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-10';
    super(config);
  }

  /**
   * @param {Long} Uid - uid. optional.
   * @param {Long} RamUid - ramUid. optional.
   * @param {String} AliyunID - aliyunID. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Type - type. optional.
   * @param {String} BizCategory - bizCategory. optional.
   * @param {String} BizCategorySub - bizCategorySub. optional.
   * @param {Integer} OrderDirection - orderDirection. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} OperaterEmpid - operaterEmpid. optional.
   * @param {String} Operater - operater. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. optional.
   */
  ccsCountCustomer(params = {}, options = {}) {
    return this.request('CcsCountCustomer', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {Long} RamUid - ramUid. optional.
   * @param {Integer} Type - type. required.
   * @param {String} Name - name. required.
   * @param {String} BizCategory - bizCategory. required.
   * @param {String} BizCategorySub - bizCategorySub. optional.
   * @param {String} OperaterEmpid - operaterEmpid. required.
   * @param {String} Operater - operater. required.
   * @param {String} AppName - appName. required.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. required.
   */
  ccsCreateCustomer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'BizCategory')) {
      throw new TypeError('parameter "BizCategory" is required');
    }

    if (!hasOwnProperty(params, 'OperaterEmpid')) {
      throw new TypeError('parameter "OperaterEmpid" is required');
    }

    if (!hasOwnProperty(params, 'Operater')) {
      throw new TypeError('parameter "Operater" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'LastModifiedEmpid')) {
      throw new TypeError('parameter "LastModifiedEmpid" is required');
    }

    return this.request('CcsCreateCustomer', params, options);
  }

  /**
   * @param {Long} Uid - uid. optional.
   * @param {Long} RamUid - ramUid. optional.
   * @param {String} AliyunID - aliyunID. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Type - type. optional.
   * @param {String} BizCategory - bizCategory. optional.
   * @param {String} BizCategorySub - bizCategorySub. optional.
   * @param {Integer} OrderDirection - orderDirection. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} OperaterEmpid - operaterEmpid. optional.
   * @param {String} Operater - operater. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. optional.
   */
  ccsCustomerList(params = {}, options = {}) {
    return this.request('CcsCustomerList', params, options);
  }

  /**
   * @param {Long} Cid - cid. optional.
   * @param {String} OperateReason - operateReason. optional.
   * @param {String} OperaterEmpid - operaterEmpid. optional.
   * @param {String} Operater - operater. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. optional.
   */
  ccsDeleteBusinessManager(params = {}, options = {}) {
    return this.request('CcsDeleteBusinessManager', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {Long} CustomerUid - customerUid. required.
   * @param {String} OperaterEmpid - operaterEmpid. required.
   * @param {String} Operater - operater. required.
   * @param {String} AppName - appName. required.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. required.
   */
  ccsDispatchUidToParter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'CustomerUid')) {
      throw new TypeError('parameter "CustomerUid" is required');
    }

    if (!hasOwnProperty(params, 'OperaterEmpid')) {
      throw new TypeError('parameter "OperaterEmpid" is required');
    }

    if (!hasOwnProperty(params, 'Operater')) {
      throw new TypeError('parameter "Operater" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'LastModifiedEmpid')) {
      throw new TypeError('parameter "LastModifiedEmpid" is required');
    }

    return this.request('CcsDispatchUidToParter', params, options);
  }

  /**
   * @param {Long} RamUid - ramUid. optional.
   * @param {RepeatList} ReleaseCid - releaseCids. optional.
   * @param {RepeatList} RelateCid - relateCids. optional.
   * @param {String} OperaterEmpid - operaterEmpid. optional.
   * @param {String} Operater - operater. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. optional.
   */
  ccsDispatherCustomer2Ram(params = {}, options = {}) {
    return this.request('CcsDispatherCustomer2Ram', params, options);
  }

  /**
   * @param {Long} Cid - cid. optional.
   */
  ccsFindArchitectsByCid(params = {}, options = {}) {
    return this.request('CcsFindArchitectsByCid', params, options);
  }

  /**
   * @param {Long} Uid - uid. optional.
   */
  ccsFindArchitectsByUid(params = {}, options = {}) {
    return this.request('CcsFindArchitectsByUid', params, options);
  }

  /**
   * @param {Long} Cid - cid. required.
   * @param {RepeatList} Categorys - categorys. optional.
   */
  ccsFindBusinessManagerByCid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    return this.request('CcsFindBusinessManagerByCid', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {RepeatList} Categorys - categorys. optional.
   */
  ccsFindBusinessManagerByUid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('CcsFindBusinessManagerByUid', params, options);
  }

  /**
   * @param {RepeatList} Uids - uids. required.
   * @param {RepeatList} Categorys - categorys. optional.
   */
  ccsFindBusinessManagerByUids(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uids')) {
      throw new TypeError('parameter "Uids" is required');
    }

    return this.request('CcsFindBusinessManagerByUids', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {Long} Cid - cid. required.
   * @param {String} OperaterEmpid - operaterEmpid. optional.
   * @param {String} Operater - operater. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. optional.
   */
  ccsQueryCustomerInfoByCid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    return this.request('CcsQueryCustomerInfoByCid', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {Long} RamUid - ramUid. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} CustomerStatus - customerStatus. optional.
   * @param {String} AliyunID - aliyunID. optional.
   * @param {String} InspectTimeStart - inspectTimeStart. optional.
   * @param {String} InspectTimeEnd - inspectTimeEnd. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} OperaterEmpid - operaterEmpid. optional.
   * @param {String} Operater - operater. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. optional.
   * @param {String} Gc - gc. optional.
   * @param {String} CertificationType - certificationType. optional.
   * @param {String} FuzzyName - fuzzyName. optional.
   */
  ccsQueryCustomerList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('CcsQueryCustomerList', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {Long} RamUid - ramUid. optional.
   * @param {String} InspectTimeStart - inspectTimeStart. optional.
   * @param {String} InspectTimeEnd - inspectTimeEnd. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} OperaterEmpid - operaterEmpid. optional.
   * @param {String} Operater - operater. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. optional.
   */
  ccsQueryExpireCustomerList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('CcsQueryExpireCustomerList', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} OperaterEmpid - operaterEmpid. optional.
   * @param {String} Operater - operater. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. optional.
   */
  ccsQueryInspectCustomerCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('CcsQueryInspectCustomerCount', params, options);
  }

  /**
   * @param {Long} TeamId - teamId. optional.
   * @param {String} Category - category. optional.
   * @param {Integer} DailyObservingQuota - dailyObservingQuota. optional.
   * @param {Integer} DailyAssociatedQuota - dailyAssociatedQuota. optional.
   * @param {Integer} DailyKeepedQuota - dailyKeepedQuota. optional.
   * @param {Integer} TotalObservingQuota - totalObservingQuota. optional.
   * @param {Integer} TotalAssociatedQuota - totalAssociatedQuota. optional.
   * @param {Integer} TotalKeepedQuota - totalKeepedQuota. optional.
   * @param {Integer} DailyObservingInitial - dailyObservingInitial. optional.
   * @param {Integer} DailyAssociatedInitial - dailyAssociatedInitial. optional.
   * @param {Integer} DailyKeepedInitial - dailyKeepedInitial. optional.
   * @param {Integer} TotalObservingInitial - totalObservingInitial. optional.
   * @param {Integer} TotalAssociatedInitial - totalAssociatedInitial. optional.
   * @param {Integer} TotalKeepedInitial - totalKeepedInitial. optional.
   * @param {String} OperaterEmpid - operaterEmpid. optional.
   * @param {String} Operater - operater. optional.
   * @param {String} AppName - appName. optional.
   * @param {String} RequestId - requestId. optional.
   * @param {String} LastModifiedEmpid - lastModifiedEmpid. optional.
   */
  ccsUpdateDepartmentInventory(params = {}, options = {}) {
    return this.request('CcsUpdateDepartmentInventory', params, options);
  }

  /**
   * @param {String} Cid - cid. required.
   */
  csQueryAccountListByCid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Cid')) {
      throw new TypeError('parameter "Cid" is required');
    }

    return this.request('CsQueryAccountListByCid', params, options);
  }

  /**
   * @param {RepeatList} Uid - uids. required.
   */
  csQueryCustomerInfoByUids(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('CsQueryCustomerInfoByUids', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Token - token. required.
   * @param {String} Act - act. required.
   */
  deleteAliyunAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'Act')) {
      throw new TypeError('parameter "Act" is required');
    }

    return this.request('DeleteAliyunAccount', params, options);
  }

  /**
   * @param {RepeatList} PersonInfo - personInfos. optional.
   * @param {Long} TeamId - teamId. required.
   * @param {String} OperateEmpId - operateEmpId. required.
   */
  mcsCreatePersonInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TeamId')) {
      throw new TypeError('parameter "TeamId" is required');
    }

    if (!hasOwnProperty(params, 'OperateEmpId')) {
      throw new TypeError('parameter "OperateEmpId" is required');
    }

    return this.request('McsCreatePersonInfo', params, options);
  }

  /**
   * @param {Long} ParentId - parentId. required.
   * @param {String} TeamCname - teamCname. required.
   * @param {String} TeamEname - teamEname. optional.
   * @param {String} LeaderId - leaderId. optional.
   * @param {String} LeaderName - leaderName. optional.
   * @param {String} DomainIds - domainIds. optional.
   * @param {String} BidCategories - bidCategories. optional.
   * @param {RepeatList} Admin - admins. optional.
   * @param {String} OperateEmpId - operateEmpId. required.
   * @param {Integer} TeamType - teamType. optional.
   * @param {Integer} LeafFlag - leafFlag. optional.
   */
  mcsCreateTeamInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    if (!hasOwnProperty(params, 'TeamCname')) {
      throw new TypeError('parameter "TeamCname" is required');
    }

    if (!hasOwnProperty(params, 'OperateEmpId')) {
      throw new TypeError('parameter "OperateEmpId" is required');
    }

    return this.request('McsCreateTeamInfo', params, options);
  }

  /**
   * @param {Long} TeamId - teamId. required.
   * @param {RepeatList} EmpId - empIds. required.
   * @param {String} OperateEmpId - operateEmpId. required.
   * @param {Integer} IsAdmin - isAdmin. required.
   */
  mcsDeletePersonTeamRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TeamId')) {
      throw new TypeError('parameter "TeamId" is required');
    }

    if (!hasOwnProperty(params, 'EmpId')) {
      throw new TypeError('parameter "EmpId" is required');
    }

    if (!hasOwnProperty(params, 'OperateEmpId')) {
      throw new TypeError('parameter "OperateEmpId" is required');
    }

    if (!hasOwnProperty(params, 'IsAdmin')) {
      throw new TypeError('parameter "IsAdmin" is required');
    }

    return this.request('McsDeletePersonTeamRelation', params, options);
  }

  /**
   * @param {Long} TeamId - id. required.
   * @param {String} OperateEmpId - operateEmpId. required.
   */
  mcsDeleteTeamInfoById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TeamId')) {
      throw new TypeError('parameter "TeamId" is required');
    }

    if (!hasOwnProperty(params, 'OperateEmpId')) {
      throw new TypeError('parameter "OperateEmpId" is required');
    }

    return this.request('McsDeleteTeamInfoById', params, options);
  }

  /**
   * @param {RepeatList} TeamId - teamIds. required.
   */
  mcsGetAllLeafTeams(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TeamId')) {
      throw new TypeError('parameter "TeamId" is required');
    }

    return this.request('McsGetAllLeafTeams', params, options);
  }

  /**
   * @param {RepeatList} EmpId - empIds. required.
   * @param {RepeatList} AttributeFlag - attributeFlag. required.
   */
  mcsListAttributeInfoByCondition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EmpId')) {
      throw new TypeError('parameter "EmpId" is required');
    }

    if (!hasOwnProperty(params, 'AttributeFlag')) {
      throw new TypeError('parameter "AttributeFlag" is required');
    }

    return this.request('McsListAttributeInfoByCondition', params, options);
  }

  /**
   * @param {RepeatList} EmpId - empIds. required.
   */
  mcsListDomainByEmpIds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EmpId')) {
      throw new TypeError('parameter "EmpId" is required');
    }

    return this.request('McsListDomainByEmpIds', params, options);
  }

  /**
   * @param {RepeatList} TeamId - teamIds. optional.
   * @param {Boolean} ContainSublevel - containSublevel. optional.
   * @param {Integer} TeamType - teamType. optional.
   */
  mcsListTeamInfoByCondition(params = {}, options = {}) {
    return this.request('McsListTeamInfoByCondition', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Long} ParentId - parentId. optional.
   * @param {String} TeamCname - teamCname. required.
   * @param {String} TeamEname - teamEname. optional.
   * @param {String} LeaderId - leaderId. optional.
   * @param {String} LeaderName - leaderName. optional.
   * @param {String} DomainIds - domainIds. optional.
   * @param {RepeatList} Admin - admins. optional.
   * @param {String} OperateEmpId - operateEmpId. required.
   * @param {Integer} TeamType - teamType. optional.
   */
  mcsModifyTeamInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'TeamCname')) {
      throw new TypeError('parameter "TeamCname" is required');
    }

    if (!hasOwnProperty(params, 'OperateEmpId')) {
      throw new TypeError('parameter "OperateEmpId" is required');
    }

    return this.request('McsModifyTeamInfo', params, options);
  }

  /**
   * @param {Integer} DictType - dictType. required.
   * @param {String} DictCode - dictCode. optional.
   * @param {String} DictParentCode - dictParentCode. optional.
   */
  mcsQueryGenericDictList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DictType')) {
      throw new TypeError('parameter "DictType" is required');
    }

    return this.request('McsQueryGenericDictList', params, options);
  }

  /**
   * @param {RepeatList} EmpId - empIds. required.
   */
  mcsQueryPersonInfoList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EmpId')) {
      throw new TypeError('parameter "EmpId" is required');
    }

    return this.request('McsQueryPersonInfoList', params, options);
  }

  /**
   * @param {String} EmpId - empId. required.
   */
  mcsQuerySuperAdminByEmpID(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EmpId')) {
      throw new TypeError('parameter "EmpId" is required');
    }

    return this.request('McsQuerySuperAdminByEmpID', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Boolean} IsAll - isAll. required.
   */
  mcsQueryTeamListByParentId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'IsAll')) {
      throw new TypeError('parameter "IsAll" is required');
    }

    return this.request('McsQueryTeamListByParentId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {RepeatList} Admin - admins. optional.
   * @param {String} OperateType - operateType. required.
   * @param {String} OperateEmpId - operateEmpId. required.
   */
  mcsUpdateAdminInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'OperateType')) {
      throw new TypeError('parameter "OperateType" is required');
    }

    if (!hasOwnProperty(params, 'OperateEmpId')) {
      throw new TypeError('parameter "OperateEmpId" is required');
    }

    return this.request('McsUpdateAdminInfo', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   * @param {String} BpmsId - bpmsId. optional.
   * @param {String} AuditResult - auditResult. optional.
   * @param {String} ProcInstId - procInstId. optional.
   * @param {String} DeleteReasonCode - deleteReasonCode. optional.
   * @param {String} ApplicationDescription - applicationDescription. optional.
   * @param {String} OperatorRecords - operatorRecords. optional.
   */
  ppsBpmsCallbackProjectDelete(params = {}, options = {}) {
    return this.request('PpsBpmsCallbackProjectDelete', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   * @param {String} BpmsId - bpmsId. optional.
   * @param {String} AuditResult - auditResult. optional.
   * @param {String} ProcInstId - procInstId. optional.
   * @param {String} OperatorRecords - operatorRecords. optional.
   */
  ppsBpmsCallbackTenderAudit(params = {}, options = {}) {
    return this.request('PpsBpmsCallbackTenderAudit', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {Integer} ProjectPattern - projectPattern. required.
   * @param {Integer} ProjectStage - projectStage. required.
   * @param {String} CustomerAccount - customerAccount. optional.
   * @param {Long} CustomerId - customerId. required.
   * @param {String} ContactName - contactName. required.
   * @param {String} ContactPhone - contactPhone. required.
   * @param {Float} ExpectedMoney - expectedMoney. required.
   * @param {String} ProjectMemo - projectMemo. required.
   * @param {String} Str_bidTime - str_bidTime. optional.
   * @param {String} Puid - puid. required.
   */
  ppsCreateProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectPattern')) {
      throw new TypeError('parameter "ProjectPattern" is required');
    }

    if (!hasOwnProperty(params, 'ProjectStage')) {
      throw new TypeError('parameter "ProjectStage" is required');
    }

    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    if (!hasOwnProperty(params, 'ContactName')) {
      throw new TypeError('parameter "ContactName" is required');
    }

    if (!hasOwnProperty(params, 'ContactPhone')) {
      throw new TypeError('parameter "ContactPhone" is required');
    }

    if (!hasOwnProperty(params, 'ExpectedMoney')) {
      throw new TypeError('parameter "ExpectedMoney" is required');
    }

    if (!hasOwnProperty(params, 'ProjectMemo')) {
      throw new TypeError('parameter "ProjectMemo" is required');
    }

    if (!hasOwnProperty(params, 'Puid')) {
      throw new TypeError('parameter "Puid" is required');
    }

    return this.request('PpsCreateProject', params, options);
  }

  /**
   * @param {String} ProjectName - projectName. required.
   * @param {RepeatList} CustomerUid - customerUids. optional.
   * @param {Long} CustomerCid - customerCid. required.
   * @param {Integer} ProjectStage - projectStage. required.
   * @param {Integer} ProjectPattern - projectPattern. required.
   * @param {String} Str_bidTime - str_bidTime. optional.
   * @param {String} ProjectPrice - projectPrice. required.
   * @param {String} IncomeType - incomeType. required.
   * @param {Integer} ProjectRisk - projectRisk. required.
   * @param {Integer} ServiceCycle - serviceCycle. required.
   * @param {String} ExpectedBindingTime - expectedBindingTime. required.
   * @param {String} ImaginaryEnemyCode - imaginaryEnemyCode. optional.
   * @param {String} ImaginaryEnemyOther - imaginaryEnemyOther. optional.
   * @param {String} ProjectMemo - projectMemo. required.
   * @param {String} Puid - puid. required.
   */
  ppsInlandPublicCloudCreateProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'CustomerCid')) {
      throw new TypeError('parameter "CustomerCid" is required');
    }

    if (!hasOwnProperty(params, 'ProjectStage')) {
      throw new TypeError('parameter "ProjectStage" is required');
    }

    if (!hasOwnProperty(params, 'ProjectPattern')) {
      throw new TypeError('parameter "ProjectPattern" is required');
    }

    if (!hasOwnProperty(params, 'ProjectPrice')) {
      throw new TypeError('parameter "ProjectPrice" is required');
    }

    if (!hasOwnProperty(params, 'IncomeType')) {
      throw new TypeError('parameter "IncomeType" is required');
    }

    if (!hasOwnProperty(params, 'ProjectRisk')) {
      throw new TypeError('parameter "ProjectRisk" is required');
    }

    if (!hasOwnProperty(params, 'ServiceCycle')) {
      throw new TypeError('parameter "ServiceCycle" is required');
    }

    if (!hasOwnProperty(params, 'ExpectedBindingTime')) {
      throw new TypeError('parameter "ExpectedBindingTime" is required');
    }

    if (!hasOwnProperty(params, 'ProjectMemo')) {
      throw new TypeError('parameter "ProjectMemo" is required');
    }

    if (!hasOwnProperty(params, 'Puid')) {
      throw new TypeError('parameter "Puid" is required');
    }

    return this.request('PpsInlandPublicCloudCreateProject', params, options);
  }

  /**
   * @param {String} Pid - pid. required.
   */
  ppsInlandPublicCloudGetProjectById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pid')) {
      throw new TypeError('parameter "Pid" is required');
    }

    return this.request('PpsInlandPublicCloudGetProjectById', params, options);
  }

  /**
   * @param {String} ParterUid - parterUid. required.
   * @param {Integer} ParterUidType - parterUidType. required.
   * @param {String} CustomerId - customerId. optional.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} ProjectPattern - projectPattern. optional.
   * @param {String} GmtCreateBegin - gmtCreateBegin. optional.
   * @param {String} GmtCreateEnd - gmtCreateEnd. optional.
   * @param {String} ProjectStatus - projectStatus. optional.
   * @param {String} LoseEfficacyTimeBegin - loseEfficacyTimeBegin. optional.
   * @param {String} LoseEfficacyTimeStartEnd - loseEfficacyTimeStartEnd. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  ppsInlandPublicCloudGetProjectList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParterUid')) {
      throw new TypeError('parameter "ParterUid" is required');
    }

    if (!hasOwnProperty(params, 'ParterUidType')) {
      throw new TypeError('parameter "ParterUidType" is required');
    }

    return this.request('PpsInlandPublicCloudGetProjectList', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   * @param {String} ProjectName - projectName. required.
   * @param {RepeatList} CustomerUid - customerUids. optional.
   * @param {Long} CustomerCid - customerCid. optional.
   * @param {Integer} ProjectStage - projectStage. required.
   * @param {Integer} ProjectPattern - projectPattern. required.
   * @param {String} Str_bidTime - str_bidTime. optional.
   * @param {String} ProjectPrice - projectPrice. required.
   * @param {String} IncomeType - incomeType. required.
   * @param {Integer} ProjectRisk - projectRisk. required.
   * @param {Integer} ServiceCycle - serviceCycle. required.
   * @param {String} ExpectedBindingTime - expectedBindingTime. required.
   * @param {String} ImaginaryEnemyCode - imaginaryEnemyCode. optional.
   * @param {String} ImaginaryEnemyOther - imaginaryEnemyOther. optional.
   * @param {String} ProjectMemo - projectMemo. required.
   * @param {String} Puid - puid. required.
   */
  ppsInlandPublicCloudModifyProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectStage')) {
      throw new TypeError('parameter "ProjectStage" is required');
    }

    if (!hasOwnProperty(params, 'ProjectPattern')) {
      throw new TypeError('parameter "ProjectPattern" is required');
    }

    if (!hasOwnProperty(params, 'ProjectPrice')) {
      throw new TypeError('parameter "ProjectPrice" is required');
    }

    if (!hasOwnProperty(params, 'IncomeType')) {
      throw new TypeError('parameter "IncomeType" is required');
    }

    if (!hasOwnProperty(params, 'ProjectRisk')) {
      throw new TypeError('parameter "ProjectRisk" is required');
    }

    if (!hasOwnProperty(params, 'ServiceCycle')) {
      throw new TypeError('parameter "ServiceCycle" is required');
    }

    if (!hasOwnProperty(params, 'ExpectedBindingTime')) {
      throw new TypeError('parameter "ExpectedBindingTime" is required');
    }

    if (!hasOwnProperty(params, 'ProjectMemo')) {
      throw new TypeError('parameter "ProjectMemo" is required');
    }

    if (!hasOwnProperty(params, 'Puid')) {
      throw new TypeError('parameter "Puid" is required');
    }

    return this.request('PpsInlandPublicCloudModifyProject', params, options);
  }

  /**
   * @param {String} Pid - pid. required.
   */
  ppsInlandPublicCloudProjectCompleteApply(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pid')) {
      throw new TypeError('parameter "Pid" is required');
    }

    return this.request('PpsInlandPublicCloudProjectCompleteApply', params, options);
  }

  /**
   * @param {String} Pid - pid. required.
   */
  ppsInlandPublicCloudProjectFail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pid')) {
      throw new TypeError('parameter "Pid" is required');
    }

    return this.request('PpsInlandPublicCloudProjectFail', params, options);
  }

  /**
   * @param {String} Pid - pid. required.
   */
  ppsInlandPublicCloudQueryReviewStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pid')) {
      throw new TypeError('parameter "Pid" is required');
    }

    return this.request('PpsInlandPublicCloudQueryReviewStatus', params, options);
  }

  /**
   * @param {String} BpmsId - bpmsId. optional.
   * @param {String} OrginatorId - orginatorId. optional.
   * @param {String} InitData - initData. optional.
   * @param {String} AuditEmployes - auditEmployes. optional.
   */
  ppsInternationalCallBPMS(params = {}, options = {}) {
    return this.request('PpsInternationalCallBPMS', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   * @param {String} ProjectName - projectName. required.
   * @param {Integer} ProjectPattern - projectPattern. required.
   * @param {Integer} ProjectStage - projectStage. required.
   * @param {String} CustomerAccount - customerAccount. optional.
   * @param {String} ContactName - contactName. required.
   * @param {String} ContactPhone - contactPhone. required.
   * @param {Float} ExpectedMoney - expectedMoney. required.
   * @param {String} ProjectMemo - projectMemo. required.
   * @param {String} Str_bidTime - str_bidTime. optional.
   */
  ppsModifyProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectPattern')) {
      throw new TypeError('parameter "ProjectPattern" is required');
    }

    if (!hasOwnProperty(params, 'ProjectStage')) {
      throw new TypeError('parameter "ProjectStage" is required');
    }

    if (!hasOwnProperty(params, 'ContactName')) {
      throw new TypeError('parameter "ContactName" is required');
    }

    if (!hasOwnProperty(params, 'ContactPhone')) {
      throw new TypeError('parameter "ContactPhone" is required');
    }

    if (!hasOwnProperty(params, 'ExpectedMoney')) {
      throw new TypeError('parameter "ExpectedMoney" is required');
    }

    if (!hasOwnProperty(params, 'ProjectMemo')) {
      throw new TypeError('parameter "ProjectMemo" is required');
    }

    return this.request('PpsModifyProject', params, options);
  }

  /**
   * @param {String} Pid - pid. required.
   */
  ppsProjectCompleteApply(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pid')) {
      throw new TypeError('parameter "Pid" is required');
    }

    return this.request('PpsProjectCompleteApply', params, options);
  }

  /**
   * @param {RepeatList} ProjectId - projectIds. optional.
   * @param {Boolean} IsMoney - isMoney. optional.
   * @param {String} EmpId - empId. optional.
   * @param {RepeatList} ExportYear - exportYear. optional.
   * @param {Boolean} IncludeFenxiaoSubProject - includeFenxiaoSubProject. optional.
   * @param {String} Language - language. optional.
   */
  ppsProjectExportGetGoChinaData(params = {}, options = {}) {
    return this.request('PpsProjectExportGetGoChinaData', params, options);
  }

  /**
   * @param {String} Pid - pid. required.
   */
  ppsProjectFail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pid')) {
      throw new TypeError('parameter "Pid" is required');
    }

    return this.request('PpsProjectFail', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  ppsQueryProjectById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('PpsQueryProjectById', params, options);
  }

  /**
   * @param {String} Cid - cid. optional.
   * @param {String} ParterUid - parterUid. required.
   * @param {String} ProjectName - projectName. optional.
   * @param {String} ProjectPattern - projectPattern. optional.
   * @param {String} GmtCreateStart - gmtCreateStart. optional.
   * @param {String} GmtCreateEnd - gmtCreateEnd. optional.
   * @param {String} ProjectStatus - projectStatus. optional.
   * @param {String} LoseEfficacyTimeStart - loseEfficacyTimeStart. optional.
   * @param {String} LoseEfficacyTimeStartEnd - loseEfficacyTimeStartEnd. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  ppsQueryProjectList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParterUid')) {
      throw new TypeError('parameter "ParterUid" is required');
    }

    return this.request('PpsQueryProjectList', params, options);
  }

  /**
   * @param {String} OriginUrl - originUrl. required.
   */
  spsCreateQrcodeByUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OriginUrl')) {
      throw new TypeError('parameter "OriginUrl" is required');
    }

    return this.request('SpsCreateQrcodeByUrl', params, options);
  }

  /**
   * @param {Long} Aliuid - aliuid. required.
   * @param {String} SecretaryItemId - secretaryItemId. required.
   * @param {String} EmpEventld - empEventld. required.
   * @param {String} ChannelType - channelType. required.
   * @param {String} MsgContent - content. required.
   * @param {Long} MscUserMessageRequestId - mscUserMessageRequestId. required.
   * @param {String} Description - description. required.
   * @param {String} MsgTitle - title. optional.
   */
  spsReceiveMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Aliuid')) {
      throw new TypeError('parameter "Aliuid" is required');
    }

    if (!hasOwnProperty(params, 'SecretaryItemId')) {
      throw new TypeError('parameter "SecretaryItemId" is required');
    }

    if (!hasOwnProperty(params, 'EmpEventld')) {
      throw new TypeError('parameter "EmpEventld" is required');
    }

    if (!hasOwnProperty(params, 'ChannelType')) {
      throw new TypeError('parameter "ChannelType" is required');
    }

    if (!hasOwnProperty(params, 'MsgContent')) {
      throw new TypeError('parameter "MsgContent" is required');
    }

    if (!hasOwnProperty(params, 'MscUserMessageRequestId')) {
      throw new TypeError('parameter "MscUserMessageRequestId" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('SpsReceiveMessage', params, options);
  }

  /**
   * @param {String} EmpId - empId. required.
   * @param {String} MsgContent - content. required.
   * @param {String} MsgTitle - title. optional.
   * @param {String} TempleteParasJson - templeteParasJson. required.
   */
  spsSendSiteMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EmpId')) {
      throw new TypeError('parameter "EmpId" is required');
    }

    if (!hasOwnProperty(params, 'MsgContent')) {
      throw new TypeError('parameter "MsgContent" is required');
    }

    if (!hasOwnProperty(params, 'TempleteParasJson')) {
      throw new TypeError('parameter "TempleteParasJson" is required');
    }

    return this.request('SpsSendSiteMessage', params, options);
  }

}

module.exports = Client;
