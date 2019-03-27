
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-05-11';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  checkDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('CheckDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {RepeatList} SubOrderParam - subOrders. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SubOrderParam')) {
      throw new TypeError('parameter "SubOrderParam" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} ContactTemplateId - templateId. required.
   */
  deleteContactTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactTemplateId')) {
      throw new TypeError('parameter "ContactTemplateId" is required');
    }

    return this.request('DeleteContactTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} DomainName - domainName. required.
   */
  getWhoisInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('GetWhoisInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} registry - registry. required.
   * @param {RepeatList} PreDeleteDomainParam - domainParams. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  importPreDeleteDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'registry')) {
      throw new TypeError('parameter "registry" is required');
    }

    if (!hasOwnProperty(params, 'PreDeleteDomainParam')) {
      throw new TypeError('parameter "PreDeleteDomainParam" is required');
    }

    return this.request('ImportPreDeleteDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} type - type. required.
   * @param {String} startDate - startDate. required.
   * @param {String} endDate - endDate. required.
   * @param {Integer} pageNum - pageNum. required.
   * @param {Integer} pageSize - pageSize. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  oSuborderDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'type')) {
      throw new TypeError('parameter "type" is required');
    }

    if (!hasOwnProperty(params, 'startDate')) {
      throw new TypeError('parameter "startDate" is required');
    }

    if (!hasOwnProperty(params, 'endDate')) {
      throw new TypeError('parameter "endDate" is required');
    }

    if (!hasOwnProperty(params, 'pageNum')) {
      throw new TypeError('parameter "pageNum" is required');
    }

    if (!hasOwnProperty(params, 'pageSize')) {
      throw new TypeError('parameter "pageSize" is required');
    }

    return this.request('OSuborderDomain', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} TaskNo - taskNo. required.
   * @param {String} DomainName - domainName. optional.
   * @param {String} SaleId - saleId. optional.
   * @param {Integer} TaskStatus - taskStatus. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryBatchTaskDetailList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskNo')) {
      throw new TypeError('parameter "TaskNo" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryBatchTaskDetailList', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} BeginCreateTime - beginCreateTime. optional.
   * @param {String} EndCreateTime - endCreateTime. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryBatchTaskList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryBatchTaskList', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} ContactType - contactType. required.
   */
  queryContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    return this.request('QueryContact', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} CCompany - cCompany. optional.
   * @param {String} ECompany - eCompany. optional.
   * @param {Long} ContactTemplateId - contactTemplateId. optional.
   * @param {Boolean} DefaultTemplate - defaultTemplate. optional.
   * @param {String} AuditStatus - auditStatus. optional.
   * @param {String} RegType - regType. optional.
   * @param {Integer} PageNum - pageNum. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 500.
   */
  queryContactTemplate(params = {}, options = {}) {
    return this.request('QueryContactTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   */
  queryCurrentDns(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('QueryCurrentDns', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   */
  queryDefaultDns(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('QueryDefaultDns', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} SaleId - saleId. required.
   */
  queryDomainBySaleId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SaleId')) {
      throw new TypeError('parameter "SaleId" is required');
    }

    return this.request('QueryDomainBySaleId', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} GroupId - groupId. optional.
   * @param {String} QueryType - queryType. optional.
   * @param {String} StartDate - startDate. optional.
   * @param {String} EndDate - endDate. optional.
   * @param {Long} DeadStartDate - deadStartDate. optional.
   * @param {Long} DeadEndDate - deadEndDate. optional.
   * @param {Long} RegStartDate - regStartDate. optional.
   * @param {Long} RegEndDate - regEndDate. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} OrderByType - orderByType. optional.
   * @param {String} OrderKeyType - orderKeyType. optional.
   * @param {String} DomainType - domainType. optional.
   * @param {String} ProductDomainType - productDomainType. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
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
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} ContactTemplateId - contactTemplateId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {String} SaleId - saleId. optional.
   */
  queryFailReasonList(params = {}, options = {}) {
    return this.request('QueryFailReasonList', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} OrderID - orderID. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  queryOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderID')) {
      throw new TypeError('parameter "OrderID" is required');
    }

    return this.request('QueryOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} SaleId - saleId. optional.
   * @param {String} DomainName - domainName. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Long} StartDate - startDate. optional.
   * @param {Long} EndDate - endDate. optional.
   */
  queryOrderProductList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryOrderProductList', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} ContactTemplateId - id. optional.
   * @param {Boolean} DefaultTemplate - defaultTemplate. optional.
   * @param {String} CCity - cCity. optional.
   * @param {String} CCompany - cCompany. optional.
   * @param {String} CCountry - cCountry. optional.
   * @param {String} CName - cName. optional.
   * @param {String} CProvince - cProvince. optional.
   * @param {String} CVenu - cVenu. optional.
   * @param {String} ECity - eCity. optional.
   * @param {String} ECompany - eCompany. optional.
   * @param {String} EName - eName. optional.
   * @param {String} EProvince - eProvince. optional.
   * @param {String} EVenu - eVenu. optional.
   * @param {String} Email - email. optional.
   * @param {String} PostalCode - postalCode. optional.
   * @param {String} TelArea - telArea. optional.
   * @param {String} TelMain - telMain. optional.
   * @param {String} TelExt - telExt. optional.
   * @param {String} RegType - regType. optional.
   */
  saveContactTemplate(params = {}, options = {}) {
    return this.request('SaveContactTemplate', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Long} ContactTemplateId - contactTemplateId. required.
   * @param {String} Credential - credential. required.
   * @param {String} CredentialNo - credentialNo. required.
   */
  saveContactTemplateCredential(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactTemplateId')) {
      throw new TypeError('parameter "ContactTemplateId" is required');
    }

    if (!hasOwnProperty(params, 'Credential')) {
      throw new TypeError('parameter "Credential" is required');
    }

    if (!hasOwnProperty(params, 'CredentialNo')) {
      throw new TypeError('parameter "CredentialNo" is required');
    }

    return this.request('SaveContactTemplateCredential', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} taskType - taskType. required.
   * @param {String} dataSource - dataSource. required.
   * @param {String} dataContent - dataContent. required.
   * @param {String} taskParam - taskParam. required.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  saveOrUpdateWhoisPopProtection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'taskType')) {
      throw new TypeError('parameter "taskType" is required');
    }

    if (!hasOwnProperty(params, 'dataSource')) {
      throw new TypeError('parameter "dataSource" is required');
    }

    if (!hasOwnProperty(params, 'dataContent')) {
      throw new TypeError('parameter "dataContent" is required');
    }

    if (!hasOwnProperty(params, 'taskParam')) {
      throw new TypeError('parameter "taskParam" is required');
    }

    return this.request('SaveOrUpdateWhoisPopProtection', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. optional.
   * @param {String} SaleId - saleId. optional.
   * @param {Boolean} AliyunDns - aliyunDns. required.
   * @param {RepeatList} DnsList - dnsList. optional.
   */
  saveTaskForModifyingDomainDns(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunDns')) {
      throw new TypeError('parameter "AliyunDns" is required');
    }

    return this.request('SaveTaskForModifyingDomainDns', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} SaleId - saleId. optional.
   * @param {String} Credential - credential. required.
   * @param {String} CredentialNo - credentialNo. required.
   */
  saveTaskForSubmittingDomainNameCredential(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Credential')) {
      throw new TypeError('parameter "Credential" is required');
    }

    if (!hasOwnProperty(params, 'CredentialNo')) {
      throw new TypeError('parameter "CredentialNo" is required');
    }

    return this.request('SaveTaskForSubmittingDomainNameCredential', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} SaleId - saleId. optional.
   * @param {Long} ContactTemplateId - contactTemplateId. required.
   */
  saveTaskForSubmittingDomainNameCredentialByTemplateId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ContactTemplateId')) {
      throw new TypeError('parameter "ContactTemplateId" is required');
    }

    return this.request('SaveTaskForSubmittingDomainNameCredentialByTemplateId', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} SaleId - saleId. optional.
   * @param {Long} ContactTemplateId - contactTemplateId. required.
   * @param {String} ContactType - contactType. required.
   * @param {Boolean} AddTransferLock - addTransferLock. optional. default: false.
   */
  saveTaskForUpdatingContactByTempateId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ContactTemplateId')) {
      throw new TypeError('parameter "ContactTemplateId" is required');
    }

    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    return this.request('SaveTaskForUpdatingContactByTempateId', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} SaleId - saleId. optional.
   * @param {Long} ContactTemplateId - contactTemplateId. required.
   * @param {String} ContactType - contactType. required.
   * @param {Boolean} AddTransferLock - addTransferLock. optional. default: false.
   */
  saveTaskForUpdatingContactByTemplateId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'ContactTemplateId')) {
      throw new TypeError('parameter "ContactTemplateId" is required');
    }

    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    return this.request('SaveTaskForUpdatingContactByTemplateId', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} DomainName - domainName. required.
   * @param {String} SaleId - saleId. required.
   * @param {String} ContactType - contactType. required.
   * @param {String} CCity - cCity. optional.
   * @param {String} CCompany - cCompany. optional.
   * @param {String} CCountry - cCountry. optional.
   * @param {String} CName - cName. optional.
   * @param {String} CProvince - cProvince. optional.
   * @param {String} CVenu - cVenu. optional.
   * @param {String} ECity - eCity. optional.
   * @param {String} ECompany - eCompany. optional.
   * @param {String} EName - eName. optional.
   * @param {String} EProvince - eProvince. optional.
   * @param {String} EVenu - eVenu. optional.
   * @param {String} Email - email. optional.
   * @param {String} PostalCode - postalCode. optional.
   * @param {String} TelArea - telArea. optional.
   * @param {String} TelMain - telMain. optional.
   * @param {String} TelExt - telExt. optional.
   * @param {String} RegType - regType. optional.
   * @param {Boolean} AddTransferLock - addTransferLock. optional.
   */
  updateContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'SaleId')) {
      throw new TypeError('parameter "SaleId" is required');
    }

    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    return this.request('UpdateContact', params, options);
  }

  /**
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {Integer} DataSource - dataSource. required.
   * @param {String} DataContent - dataContent. required.
   * @param {Boolean} WhoisProtect - whoisProtect. required.
   */
  whoisProtection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataSource')) {
      throw new TypeError('parameter "DataSource" is required');
    }

    if (!hasOwnProperty(params, 'DataContent')) {
      throw new TypeError('parameter "DataContent" is required');
    }

    if (!hasOwnProperty(params, 'WhoisProtect')) {
      throw new TypeError('parameter "WhoisProtect" is required');
    }

    return this.request('WhoisProtection', params, options);
  }

}

module.exports = Client;
