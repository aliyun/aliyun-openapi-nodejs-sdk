
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-13';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RecordId - recordId. required.
   * @param {Long} OrderId - orderId. required.
   */
  createAliDnsRecordId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RecordId')) {
      throw new TypeError('parameter "RecordId" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CreateAliDnsRecordId', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Name - name. required.
   * @param {String} Cert - cert. required.
   * @param {String} Key - key. required.
   */
  createCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Cert')) {
      throw new TypeError('parameter "Cert" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    return this.request('CreateCertificate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} CertificateId - certificateId. required.
   * @param {String} Name - name. required.
   */
  createCertificateName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateCertificateName', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ProductCode - productCode. required.
   * @param {String} Domain - domain. required.
   * @param {String} From - from. required.
   */
  createCooperationOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductCode')) {
      throw new TypeError('parameter "ProductCode" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'From')) {
      throw new TypeError('parameter "From" is required');
    }

    return this.request('CreateCooperationOrder', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} CertificateId - certificateId. required.
   * @param {String} Domain - domain. optional.
   * @param {String} CloudProduct - cloudProduct. required.
   * @param {String} Region - region. optional.
   */
  createDeployment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    if (!hasOwnProperty(params, 'CloudProduct')) {
      throw new TypeError('parameter "CloudProduct" is required');
    }

    return this.request('CreateDeployment', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} OrderId - orderId. required.
   * @param {String} Type - type. required.
   */
  createDomainVerifyConfigurationStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CreateDomainVerifyConfigurationStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DocId - docId. required.
   */
  createFilingSignatureDocument(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DocId')) {
      throw new TypeError('parameter "DocId" is required');
    }

    return this.request('CreateFilingSignatureDocument', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {Long} OrderId - orderId. required.
   */
  createOrderAudit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CreateOrderAudit', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} OrderId - orderId. required.
   */
  createOrderCancel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CreateOrderCancel', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   * @param {Integer} DocumentType - documentType. required.
   * @param {String} OssKey - ossKey. required.
   * @param {String} ExtName - extName. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  createOrderDocument(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'DocumentType')) {
      throw new TypeError('parameter "DocumentType" is required');
    }

    if (!hasOwnProperty(params, 'OssKey')) {
      throw new TypeError('parameter "OssKey" is required');
    }

    if (!hasOwnProperty(params, 'ExtName')) {
      throw new TypeError('parameter "ExtName" is required');
    }

    return this.request('CreateOrderDocument', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   * @param {String} Domain - domain. required.
   * @param {String} CompanyName - companyName. optional.
   * @param {String} CompanyPhone - companyPhone. optional.
   * @param {String} CompanyCode - companyCode. optional.
   * @param {String} PersonName - personName. required.
   * @param {String} PersonPhone - personPhone. required.
   * @param {Integer} CompanyType - companyType. optional.
   * @param {String} PersonEmail - personEmail. optional.
   * @param {String} PersonIdCardNumber - personIdCardNumber. optional.
   * @param {String} CompanyAddress - companyAddress. optional.
   * @param {String} City - city. optional.
   * @param {String} Province - province. optional.
   * @param {String} PostCode - postCode. optional.
   * @param {Integer} DomainAuthType - domainAuthType. optional.
   * @param {Integer} CreateCsr - createCsr. optional.
   * @param {String} CsrContent - csrContent. optional.
   * @param {String} PersonDepartment - personDepartment. optional.
   * @param {String} PersonTitle - personTitle. optional.
   * @param {String} LeaderName - leaderName. optional.
   * @param {String} LeaderTitle - leaderTitle. optional.
   * @param {String} LeaderEmail - leaderEmail. optional.
   * @param {String} LeaderPhone - leaderPhone. optional.
   * @param {String} CountryCode - countryCode. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  createOrderMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'PersonName')) {
      throw new TypeError('parameter "PersonName" is required');
    }

    if (!hasOwnProperty(params, 'PersonPhone')) {
      throw new TypeError('parameter "PersonPhone" is required');
    }

    if (!hasOwnProperty(params, 'CountryCode')) {
      throw new TypeError('parameter "CountryCode" is required');
    }

    return this.request('CreateOrderMaterial', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Reason - reason. required.
   * @param {Long} OrderId - orderId. required.
   */
  createOrderRevoke(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Reason')) {
      throw new TypeError('parameter "Reason" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('CreateOrderRevoke', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DocId - docId. required.
   * @param {String} DocTitle - docTitle. required.
   * @param {String} PeopleId - peopleId. required.
   * @param {Integer} PositionType - positionType. required.
   * @param {String} HandSignImg - handSignImg. optional.
   * @param {String} SignKeyword - signKeyword. optional.
   * @param {Integer} KeywordStrategy - keywordStrategy. optional.
   * @param {Integer} PositionPage - positionPage. optional.
   * @param {Integer} PositionX - positionX. optional.
   * @param {Integer} PositionY - positionY. optional.
   * @param {Integer} Validity - validity. optional.
   * @param {Integer} Quantity - quantity. optional.
   * @param {String} CustomApi - customApi. optional.
   * @param {String} NotifyUrl - notifyUrl. optional.
   * @param {String} ReturnUrl - returnUrl. optional.
   */
  createSignature(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DocId')) {
      throw new TypeError('parameter "DocId" is required');
    }

    if (!hasOwnProperty(params, 'DocTitle')) {
      throw new TypeError('parameter "DocTitle" is required');
    }

    if (!hasOwnProperty(params, 'PeopleId')) {
      throw new TypeError('parameter "PeopleId" is required');
    }

    if (!hasOwnProperty(params, 'PositionType')) {
      throw new TypeError('parameter "PositionType" is required');
    }

    return this.request('CreateSignature', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DocTitle - docTitle. required.
   * @param {String} DocContent - docContent. required.
   */
  createSignatureDocument(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DocTitle')) {
      throw new TypeError('parameter "DocTitle" is required');
    }

    if (!hasOwnProperty(params, 'DocContent')) {
      throw new TypeError('parameter "DocContent" is required');
    }

    return this.request('CreateSignatureDocument', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} PeopleName - peopleName. required.
   * @param {String} IdentityNumber - identityNumber. required.
   * @param {String} Mobile - mobile. required.
   * @param {String} Email - email. required.
   */
  createSignaturePeopleCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PeopleName')) {
      throw new TypeError('parameter "PeopleName" is required');
    }

    if (!hasOwnProperty(params, 'IdentityNumber')) {
      throw new TypeError('parameter "IdentityNumber" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('CreateSignaturePeopleCertificate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} DeploymentId - deploymentId. required.
   */
  createUnDeployment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DeploymentId')) {
      throw new TypeError('parameter "DeploymentId" is required');
    }

    return this.request('CreateUnDeployment', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DocId - docId. required.
   * @param {String} DocTitle - docTitle. required.
   * @param {String} PeopleId - peopleId. required.
   * @param {Integer} PositionType - positionType. required.
   * @param {String} HandSignImg - handSignImg. optional.
   * @param {String} SignKeyword - signKeyword. optional.
   * @param {Integer} KeywordStrategy - keywordStrategy. optional.
   * @param {Integer} PositionPage - positionPage. optional.
   * @param {Integer} PositionX - positionX. optional.
   * @param {Integer} PositionY - positionY. optional.
   * @param {Integer} Validity - validity. optional.
   * @param {Integer} Quantity - quantity. optional.
   * @param {String} CustomApi - customApi. optional.
   * @param {String} NotifyUrl - notifyUrl. optional.
   * @param {String} ReturnUrl - returnUrl. optional.
   */
  createWebSignature(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DocId')) {
      throw new TypeError('parameter "DocId" is required');
    }

    if (!hasOwnProperty(params, 'DocTitle')) {
      throw new TypeError('parameter "DocTitle" is required');
    }

    if (!hasOwnProperty(params, 'PeopleId')) {
      throw new TypeError('parameter "PeopleId" is required');
    }

    if (!hasOwnProperty(params, 'PositionType')) {
      throw new TypeError('parameter "PositionType" is required');
    }

    return this.request('CreateWebSignature', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} CertificateId - certificateId. required.
   */
  deleteCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    return this.request('DeleteCertificate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} OrderId - orderId. required.
   */
  deleteOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('DeleteOrder', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCertificateBrandList(params = {}, options = {}) {
    return this.request('DescribeCertificateBrandList', params, options);
  }

  /**
   * @param {Long} CertificateId - certificateId. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCertificateDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    return this.request('DescribeCertificateDetail', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} ShowSize - showSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCertificateList(params = {}, options = {}) {
    return this.request('DescribeCertificateList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCertificateStatusCount(params = {}, options = {}) {
    return this.request('DescribeCertificateStatusCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} CertificateId - certificateId. required.
   */
  describeDeploymentDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    return this.request('DescribeDeploymentDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CloudProduct - cloudProduct. required.
   * @param {Long} CertificateId - certificateId. required.
   */
  describeDeploymentDomainList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CloudProduct')) {
      throw new TypeError('parameter "CloudProduct" is required');
    }

    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    return this.request('DescribeDeploymentDomainList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} CertificateId - certificateId. required.
   */
  describeDeploymentProduct(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    return this.request('DescribeDeploymentProduct', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CloudProduct - cloudProduct. required.
   * @param {Long} CertificateId - certificateId. required.
   */
  describeDeploymentRegionList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CloudProduct')) {
      throw new TypeError('parameter "CloudProduct" is required');
    }

    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    return this.request('DescribeDeploymentRegionList', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeDomainVerifyConfigurationStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('DescribeDomainVerifyConfigurationStatus', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeDomainVerifyInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('DescribeDomainVerifyInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} CertificateId - certificateId. required.
   * @param {String} ServerType - serverType. required.
   */
  describeDownloadCertificate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CertificateId')) {
      throw new TypeError('parameter "CertificateId" is required');
    }

    if (!hasOwnProperty(params, 'ServerType')) {
      throw new TypeError('parameter "ServerType" is required');
    }

    return this.request('DescribeDownloadCertificate', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeDownloadDomainVerifyConfiguration(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('DescribeDownloadDomainVerifyConfiguration', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} OrderId - orderId. required.
   * @param {String} ExpectationType - expectationType. required.
   */
  describeExpectationResult(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'ExpectationType')) {
      throw new TypeError('parameter "ExpectationType" is required');
    }

    return this.request('DescribeExpectationResult', params, options);
  }

  /**
   * @param {String} Category - category. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeHelpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    return this.request('DescribeHelpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeLocationList(params = {}, options = {}) {
    return this.request('DescribeLocationList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} OssKey - ossKey. required.
   */
  describeOSSDownloadInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OssKey')) {
      throw new TypeError('parameter "OssKey" is required');
    }

    return this.request('DescribeOSSDownloadInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} OrderId - orderId. required.
   * @param {Integer} DocumentType - documentType. required.
   */
  describeOSSUploadInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'DocumentType')) {
      throw new TypeError('parameter "DocumentType" is required');
    }

    return this.request('DescribeOSSUploadInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Long} OrderId - orderId. required.
   */
  describeOrderAuditFailRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('DescribeOrderAuditFailRecord', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeOrderDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('DescribeOrderDetail', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   * @param {String} Type - type. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeOrderDocument(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DescribeOrderDocument', params, options);
  }

  /**
   * @param {Long} BrandId - brandId. optional.
   * @param {String} Status - status. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} ShowSize - showSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeOrderList(params = {}, options = {}) {
    return this.request('DescribeOrderList', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeOrderMaterial(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('DescribeOrderMaterial', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSignatureCapacity(params = {}, options = {}) {
    return this.request('DescribeSignatureCapacity', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSignatureStatistics(params = {}, options = {}) {
    return this.request('DescribeSignatureStatistics', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} TransactionId - transactionId. required.
   */
  describeSignatureTradeDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TransactionId')) {
      throw new TypeError('parameter "TransactionId" is required');
    }

    return this.request('DescribeSignatureTradeDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SearchType - searchType. optional.
   * @param {String} SearchValue - searchValue. optional.
   * @param {Integer} ShowSize - showSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   */
  describeSignatureTradeList(params = {}, options = {}) {
    return this.request('DescribeSignatureTradeList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CloudProduct - cloudProduct. required.
   */
  describeStsAuthStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CloudProduct')) {
      throw new TypeError('parameter "CloudProduct" is required');
    }

    return this.request('DescribeStsAuthStatus', params, options);
  }

}

module.exports = Client;
