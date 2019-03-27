
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-06-06';
    super(config);
  }

  /**
   * @param {String} Organization - organization. required.
   * @param {String} LabelSeries - labelSeries. required.
   * @param {RepeatList} LabelTypes - labelTypes. required.
   * @param {String} UserName - userName. required.
   * @param {Long} PK - kp. required.
   * @param {String} Endtime - endTimeString. optional.
   * @param {String} StartTime - startTimeString. optional.
   * @param {String} Token - token. optional.
   */
  addCustomerLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Organization')) {
      throw new TypeError('parameter "Organization" is required');
    }

    if (!hasOwnProperty(params, 'LabelSeries')) {
      throw new TypeError('parameter "LabelSeries" is required');
    }

    if (!hasOwnProperty(params, 'LabelTypes')) {
      throw new TypeError('parameter "LabelTypes" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    return this.request('AddCustomerLabel', params, options);
  }

  /**
   * @param {String} CustomerId - customerId. optional.
   * @param {Integer} AccountType - accountType. required.
   * @param {String} Email - email. required.
   * @param {String} Tel - tel. optional.
   * @param {String} DocFrontPic - docFrontPic. required.
   * @param {String} DocBackPic - docBackPic. required.
   * @param {String} FullName - fullName. required.
   * @param {String} DocType - docType. optional.
   * @param {String} DocNum - docNum. optional.
   * @param {String} RegisteredCountry - registeredCountry. optional.
   * @param {String} RegisteredAddress - registeredAddress. optional.
   * @param {String} RegisteredNum - registeredNum. optional.
   */
  applyIdentityRegistration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccountType')) {
      throw new TypeError('parameter "AccountType" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'DocFrontPic')) {
      throw new TypeError('parameter "DocFrontPic" is required');
    }

    if (!hasOwnProperty(params, 'DocBackPic')) {
      throw new TypeError('parameter "DocBackPic" is required');
    }

    if (!hasOwnProperty(params, 'FullName')) {
      throw new TypeError('parameter "FullName" is required');
    }

    return this.request('ApplyIdentityRegistration', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} LoginEmail - loginEmail. required.
   * @param {String} MaserAccountInfo - maserAccountInfo. required.
   */
  asyncCreateAgAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'LoginEmail')) {
      throw new TypeError('parameter "LoginEmail" is required');
    }

    if (!hasOwnProperty(params, 'MaserAccountInfo')) {
      throw new TypeError('parameter "MaserAccountInfo" is required');
    }

    return this.request('AsyncCreateAgAccount', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} Pk - pk. required.
   * @param {String} NewLoginEmail - newLoginEmail. required.
   */
  asyncModifyAgLoginEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'NewLoginEmail')) {
      throw new TypeError('parameter "NewLoginEmail" is required');
    }

    return this.request('AsyncModifyAgLoginEmail', params, options);
  }

  /**
   * @param {String} HavanaId - hid. required.
   * @param {String} SessionId - sid. optional.
   * @param {String} AppName - appName. required.
   */
  authAndActiveWithHid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('AuthAndActiveWithHid', params, options);
  }

  /**
   * @param {String} HavanaId - hid. required.
   * @param {String} SessionId - sid. optional.
   * @param {String} AppName - appName. required.
   */
  authAndRefreshLoginTicket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HavanaId')) {
      throw new TypeError('parameter "HavanaId" is required');
    }

    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('AuthAndRefreshLoginTicket', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} PkList - pkList. required.
   */
  batchQueryAgAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'PkList')) {
      throw new TypeError('parameter "PkList" is required');
    }

    return this.request('BatchQueryAgAccount', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} TraceNoList - traceNoList. required.
   */
  batchQueryCreateAccountTrace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'TraceNoList')) {
      throw new TypeError('parameter "TraceNoList" is required');
    }

    return this.request('BatchQueryCreateAccountTrace', params, options);
  }

  /**
   * @param {String} Mpk - Mpk. required.
   * @param {String} TraceNoList - traceNoList. required.
   */
  batchQueryModifyLoginEmailTrace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'TraceNoList')) {
      throw new TypeError('parameter "TraceNoList" is required');
    }

    return this.request('BatchQueryModifyLoginEmailTrace', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} TraceNo - traceNo. required.
   */
  cancelAsyncCreateAgAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'TraceNo')) {
      throw new TypeError('parameter "TraceNo" is required');
    }

    return this.request('CancelAsyncCreateAgAccount', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} TraceNo - traceNo. required.
   */
  cancelAsyncModifyLoginEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'TraceNo')) {
      throw new TypeError('parameter "TraceNo" is required');
    }

    return this.request('CancelAsyncModifyLoginEmail', params, options);
  }

  /**
   * @param {String} AccountJson - accountJsonString. optional.
   */
  createAccountProfileInfo(params = {}, options = {}) {
    return this.request('CreateAccountProfileInfo', params, options);
  }

  /**
   * @param {String} LoginEmail - loginEmail. optional.
   * @param {String} SecurityMobile - securityMobile. optional.
   * @param {String} Mpk - mpk. required.
   */
  createAgAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    return this.request('CreateAgAccount', params, options);
  }

  /**
   * @param {Long} UserId - kpId. required.
   * @param {String} ContacterName - contacterName. required.
   * @param {String} ContacterEmail - contacterEmail. optional.
   * @param {String} ContacterMobile - contacterMobile. optional.
   * @param {String} ContacterPosition - contacterPosition. optional.
   * @param {String} ContacterAddress - contacterAddress. optional.
   * @param {String} ContacterType - contacterType. optional.
   * @param {Boolean} EmailConfirmed - emailConfirmed. optional.
   * @param {Boolean} MobileConfirmed - mobileConfirmed. optional.
   * @param {String} ContacterWangwang - contacterWangwang. optional.
   * @param {String} ContacterDingding - contacterDingding. optional.
   * @param {String} ContacterStaffNo - contacterStaffNo. optional.
   */
  createContacter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ContacterName')) {
      throw new TypeError('parameter "ContacterName" is required');
    }

    return this.request('CreateContacter', params, options);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} AccountCertifyType - accountCertifyType. optional.
   * @param {String} Name - name. optional.
   * @param {String} LicenseType - licenseType. optional.
   * @param {String} LicenseNumber - licenseNumber. optional.
   * @param {String} CorporateLicenseNumber - corporateLicenseNumber. optional.
   * @param {String} CorporateName - corporateName. optional.
   */
  createRealNameCertification(params = {}, options = {}) {
    return this.request('CreateRealNameCertification', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   */
  customerSensitiveInfoLogicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('CustomerSensitiveInfoLogicalDelete', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   */
  customerSensitiveInfoPhysicalDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('CustomerSensitiveInfoPhysicalDelete', params, options);
  }

  /**
   * @param {Long} UserId - kpId. required.
   * @param {Long} ContacterId - contacterId. required.
   */
  deleteContacter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ContacterId')) {
      throw new TypeError('parameter "ContacterId" is required');
    }

    return this.request('DeleteContacter', params, options);
  }

  /**
   * @param {Long} PK - kp. required.
   * @param {String} LabelSeries - labelSeries. required.
   * @param {RepeatList} LabelTypes - labelTypes. required.
   * @param {String} UserName - userName. required.
   * @param {String} Organization - organization. required.
   * @param {String} Token - token. optional.
   */
  deleteCustomerLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    if (!hasOwnProperty(params, 'LabelSeries')) {
      throw new TypeError('parameter "LabelSeries" is required');
    }

    if (!hasOwnProperty(params, 'LabelTypes')) {
      throw new TypeError('parameter "LabelTypes" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'Organization')) {
      throw new TypeError('parameter "Organization" is required');
    }

    return this.request('DeleteCustomerLabel', params, options);
  }

  /**
   * @param {Long} UserId - kpId. required.
   * @param {String} Type - type. optional.
   * @param {String} LocaleString - localeString. optional.
   */
  findAllContacter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('FindAllContacter', params, options);
  }

  /**
   * @param {Long} UserId - kpId. required.
   * @param {String} LocaleString - localeString. optional.
   */
  findBizCategoryConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('FindBizCategoryConfig', params, options);
  }

  /**
   * @param {Long} ContacterId - contacterId. required.
   * @param {String} Type - type. optional.
   * @param {String} LocaleString - localeString. optional.
   */
  findContacter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContacterId')) {
      throw new TypeError('parameter "ContacterId" is required');
    }

    return this.request('FindContacter', params, options);
  }

  /**
   * @param {Long} UserId - kpId. required.
   */
  findCustomerInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('FindCustomerInfo', params, options);
  }

  /**
   * @param {Long} HId - hid. required.
   * @param {String} TaxVersion - version. optional.
   */
  findFinanceTax(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HId')) {
      throw new TypeError('parameter "HId" is required');
    }

    return this.request('FindFinanceTax', params, options);
  }

  /**
   * @param {Long} KpId - kpId. required.
   */
  findFinanceTaxDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'KpId')) {
      throw new TypeError('parameter "KpId" is required');
    }

    return this.request('FindFinanceTaxDetail', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   */
  getAgAccountAk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('GetAgAccountAk', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   */
  getAgRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('GetAgRelation', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   * @param {String} HavanaId - havanaId. optional.
   * @param {String} Mobile - mobile. optional.
   * @param {String} AliyunId - aliyunId. required.
   * @param {String} Email - email. optional.
   */
  getAliyunPKByAliyunID(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AliyunId')) {
      throw new TypeError('parameter "AliyunId" is required');
    }

    return this.request('GetAliyunPKByAliyunID', params, options);
  }

  /**
   * @param {String} CustomerId - customerId. required.
   */
  getIdentityRegistrationByCustomer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    return this.request('GetIdentityRegistrationByCustomer', params, options);
  }

  /**
   * @param {String} CustomerId - customerId. required.
   * @param {String} FilePath - filePath. required.
   */
  getUploadIdentityRegistrationDocConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CustomerId')) {
      throw new TypeError('parameter "CustomerId" is required');
    }

    if (!hasOwnProperty(params, 'FilePath')) {
      throw new TypeError('parameter "FilePath" is required');
    }

    return this.request('GetUploadIdentityRegistrationDocConfig', params, options);
  }

  /**
   * @param {String} PK - pk. required.
   */
  loadRealNameInfoByPk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    return this.request('LoadRealNameInfoByPk', params, options);
  }

  /**
   * @param {String} AppName - appName. required.
   * @param {String} Hid - hid. required.
   * @param {String} MappingScenes - mappingScenes. required.
   * @param {String} Bid - bid. optional.
   */
  mapPkFromHid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    if (!hasOwnProperty(params, 'MappingScenes')) {
      throw new TypeError('parameter "MappingScenes" is required');
    }

    return this.request('MapPkFromHid', params, options);
  }

  /**
   * @param {String} AppName - appName. required.
   * @param {String} Pk - pk. required.
   * @param {String} MappingScenes - mappingScenes. required.
   */
  mapPkToHid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'MappingScenes')) {
      throw new TypeError('parameter "MappingScenes" is required');
    }

    return this.request('MapPkToHid', params, options);
  }

  /**
   * @param {Long} UserId - kpId. required.
   * @param {String} ParamList - paramList. required.
   */
  modifyBizCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ParamList')) {
      throw new TypeError('parameter "ParamList" is required');
    }

    return this.request('ModifyBizCategory', params, options);
  }

  /**
   * @param {Long} ContacterId - contacterId. required.
   * @param {Long} UserId - kpId. required.
   * @param {String} ContacterName - contacterName. required.
   * @param {String} ContacterEmail - contacterEmail. optional.
   * @param {String} ContacterMobile - contacterMobile. optional.
   * @param {String} ContacterPosition - contacterPosition. optional.
   * @param {String} ContacterAddress - contacterAddress. optional.
   * @param {String} ContacterType - contacterType. optional.
   * @param {Boolean} EmailConfirmed - emailConfirmed. optional.
   * @param {Boolean} MobileConfirmed - mobileConfirmed. optional.
   * @param {String} ContacterWangwang - contacterWangwang. optional.
   * @param {String} ContacterDingding - contacterDingding. optional.
   * @param {String} ContacterStaffNo - contacterStaffNo. optional.
   */
  modifyContacter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContacterId')) {
      throw new TypeError('parameter "ContacterId" is required');
    }

    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'ContacterName')) {
      throw new TypeError('parameter "ContacterName" is required');
    }

    return this.request('ModifyContacter', params, options);
  }

  /**
   * @param {Long} UserId - kpId. required.
   * @param {String} Website - website. optional.
   * @param {String} Biz - biz. optional.
   * @param {String} CustomerCategory - customerCategory. optional.
   * @param {String} CustomerSubCategory - customerSubCategory. optional.
   */
  modifyCustomerInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    return this.request('ModifyCustomerInfo', params, options);
  }

  /**
   * @param {Long} HId - hid. required.
   * @param {String} FinanceTax - financeTax. required.
   * @param {String} FinanceTaxCertificateImgName - financeTaxCertificateImgName. optional.
   * @param {String} financeTaxCertificateImgUrl - financeTaxCertificateImgUrl. optional.
   * @param {String} SecondFinanceTax - secondFinanceTax. optional.
   * @param {String} SecondFinanceTaxCertificateImgName - secondFinanceTaxCertificateImgName. optional.
   * @param {String} SecondFinanceTaxCertificateImgUrl - secondFinanceTaxCertificateImgUrl. optional.
   */
  operateFinanceTax(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HId')) {
      throw new TypeError('parameter "HId" is required');
    }

    if (!hasOwnProperty(params, 'FinanceTax')) {
      throw new TypeError('parameter "FinanceTax" is required');
    }

    return this.request('OperateFinanceTax', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   * @param {String} HavanaId - havanaId. optional.
   * @param {String} AddressVersion - version. optional.
   */
  queryAccountAddressInfo(params = {}, options = {}) {
    return this.request('QueryAccountAddressInfo', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   * @param {String} HavanaId - havanaId. optional.
   * @param {String} AddressVersion - version. optional.
   */
  queryAccountAddressInfoWithoutHavana(params = {}, options = {}) {
    return this.request('QueryAccountAddressInfoWithoutHavana', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   * @param {String} HavanaId - havanaId. optional.
   */
  queryAccountProfileInfo(params = {}, options = {}) {
    return this.request('QueryAccountProfileInfo', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   */
  queryAccountRealNameInfo(params = {}, options = {}) {
    return this.request('QueryAccountRealNameInfo', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   */
  queryAccountSite(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('QueryAccountSite', params, options);
  }

  /**
   * @param {Long} PK - kp. required.
   * @param {String} LabelSeries - labelSeries. optional.
   * @param {String} Token - token. optional.
   */
  queryCustomerLabel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PK')) {
      throw new TypeError('parameter "PK" is required');
    }

    return this.request('QueryCustomerLabel', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   * @param {String} HavanaId - havanaId. optional.
   */
  queryEncryptedAccountProfileInfo(params = {}, options = {}) {
    return this.request('QueryEncryptedAccountProfileInfo', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   * @param {String} HavanaId - havanaId. optional.
   * @param {String} EnterpriseVersion - enterpriseVersion. optional.
   */
  queryEnterpriseInfo(params = {}, options = {}) {
    return this.request('QueryEnterpriseInfo', params, options);
  }

  /**
   * @param {String} Type - type. required.
   */
  queryEnumConfigByType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('QueryEnumConfigByType', params, options);
  }

  /**
   * @param {String} Email - email. required.
   * @param {Boolean} IsEmailConfirmed - isEmailConfirmed. optional.
   * @param {String} Mobile - mobile. optional.
   * @param {Boolean} IsMobileLogin - isMobileLogin. optional.
   * @param {Boolean} IsMobileConfirmed - isMobileConfirmed. optional.
   * @param {String} PlainPassword - plainPassword. optional.
   * @param {String} NationalityCode - nationalityCode. optional.
   * @param {String} PreferredLanguage - preferredLanguage. optional.
   * @param {String} Bid - Bid. required.
   * @param {String} accountTypeCode - accountTypeCode. optional.
   */
  registerInternalAccountForBuc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('RegisterInternalAccountForBuc', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} Pk - pk. required.
   */
  releaseAgAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('ReleaseAgAccount', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} TraceNo - traceNo. required.
   */
  resendAsyncCreateAgAccount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'TraceNo')) {
      throw new TypeError('parameter "TraceNo" is required');
    }

    return this.request('ResendAsyncCreateAgAccount', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} TraceNo - traceNo. required.
   */
  resendAsyncModifyLoginEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'TraceNo')) {
      throw new TypeError('parameter "TraceNo" is required');
    }

    return this.request('ResendAsyncModifyLoginEmail', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} Pk - pk. required.
   */
  separateAgRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    return this.request('SeparateAgRelation', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   * @param {String} Address - address. optional.
   * @param {String} Address2 - address2. optional.
   * @param {String} PostCode - postCode. optional.
   * @param {Json} ProvinceJsonString - province. optional.
   * @param {Json} CityJsonString - city. optional.
   */
  updateAccountAddressInfo(params = {}, options = {}) {
    return this.request('UpdateAccountAddressInfo', params, options);
  }

  /**
   * @param {String} PK - pk. optional.
   * @param {String} Head - head. optional.
   * @param {String} TrueName - trueName. optional.
   * @param {String} FirstName - firstName. optional.
   * @param {String} LastName - lastName. optional.
   * @param {String} AccountAttribute - accountAttribute. optional.
   * @param {String} Address - address. optional.
   * @param {String} Address2 - address2. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} Fax - fax. optional.
   * @param {String} PostCode - postCode. optional.
   * @param {String} ContactMethod - contactMethod. optional.
   * @param {String} CertType - certType. optional.
   * @param {Json} ProvinceJsonString - province. optional.
   * @param {Json} CityJsonString - city. optional.
   * @param {String} BindAlipayNo - bindAlipayNo. optional.
   */
  updateAccountProfileInfo(params = {}, options = {}) {
    return this.request('UpdateAccountProfileInfo', params, options);
  }

  /**
   * @param {String} Mpk - mpk. required.
   * @param {String} AgAccountType - agAccountType. required.
   * @param {String} Status - status. required.
   */
  updateAgServiceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Mpk')) {
      throw new TypeError('parameter "Mpk" is required');
    }

    if (!hasOwnProperty(params, 'AgAccountType')) {
      throw new TypeError('parameter "AgAccountType" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateAgServiceStatus', params, options);
  }

  /**
   * @param {String} PK - aliyunPK. optional.
   * @param {String} Name - name. optional.
   * @param {String} Fax - fax. optional.
   * @param {String} Phone - phone. optional.
   * @param {String} Years - years. optional.
   * @param {String} EnterpriseSize - enterpriseSize. optional.
   * @param {String} Address - detailAddress. optional.
   * @param {Json} ProvinceJsonString - province. optional.
   * @param {Json} CityJsonString - city. optional.
   * @param {String} Alias - alias. optional.
   */
  updateOrInsertEnterpriseInfo(params = {}, options = {}) {
    return this.request('UpdateOrInsertEnterpriseInfo', params, options);
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

}

module.exports = Client;
