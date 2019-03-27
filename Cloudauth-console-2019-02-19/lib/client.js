
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-02-19';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} GroupId - groupId. optional.
   */
  deleteUserGroup(params = {}, options = {}) {
    return this.request('DeleteUserGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} UserId - userId. optional.
   */
  deleteUserInfo(params = {}, options = {}) {
    return this.request('DeleteUserInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeCertificateTypeList(params = {}, options = {}) {
    return this.request('DescribeCertificateTypeList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} Keyword - keyword. optional.
   */
  describeDeviceList(params = {}, options = {}) {
    return this.request('DescribeDeviceList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Key - key. optional.
   */
  describeExcelAnalysisResult(params = {}, options = {}) {
    return this.request('DescribeExcelAnalysisResult', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} CertificateNo - certificateNo. optional.
   * @param {String} PhoneNo - phoneNo. optional.
   */
  describeIdentifyRecordList(params = {}, options = {}) {
    return this.request('DescribeIdentifyRecordList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Key - key. optional.
   */
  describeSignedUrl(params = {}, options = {}) {
    return this.request('DescribeSignedUrl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeUploadPreSign(params = {}, options = {}) {
    return this.request('DescribeUploadPreSign', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeUserGroupList(params = {}, options = {}) {
    return this.request('DescribeUserGroupList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} UserName - userName. optional.
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {String} CertificateNo - certificateNo. optional.
   * @param {String} PhoneNo - phoneNo. optional.
   * @param {Long} UserGroupId - userGroupId. optional.
   */
  describeUserInfoList(params = {}, options = {}) {
    return this.request('DescribeUserInfoList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  getAccountProject(params = {}, options = {}) {
    return this.request('GetAccountProject', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} GroupName - groupName. optional.
   */
  saveUserGroup(params = {}, options = {}) {
    return this.request('SaveUserGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} UserGroupId - userGroupId. optional.
   * @param {Long} Birthday - birthday. optional.
   * @param {String} ImageBase64 - imageBase64. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} ImageUrl - imageUrl. optional.
   * @param {Integer} Sex - sex. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} CertificateNo - certificateNo. optional.
   * @param {String} PhoneNo - phoneNo. optional.
   * @param {String} CertificateType - certificateType. optional.
   */
  saveUserInfo(params = {}, options = {}) {
    return this.request('SaveUserInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} IotId - iotId. optional.
   */
  unbindDevice(params = {}, options = {}) {
    return this.request('UnbindDevice', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} GroupId - userGroupId. optional.
   * @param {String} GroupName - userGroupName. optional.
   */
  updateUserGroup(params = {}, options = {}) {
    return this.request('UpdateUserGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} UserGroupId - userGroupId. optional.
   * @param {Long} Birthday - birthday. optional.
   * @param {String} ImageBase64 - imageBase64. optional.
   * @param {String} GroupName - groupName. optional.
   * @param {String} ImageUrl - imageUrl. optional.
   * @param {Integer} Sex - sex. optional.
   * @param {String} UserName - userName. optional.
   * @param {Long} UserId - userId. optional.
   * @param {String} CertificateNo - certificateNo. optional.
   * @param {String} PhoneNo - phoneNo. optional.
   * @param {String} CertificateType - certificateType. optional.
   */
  updateUserInfo(params = {}, options = {}) {
    return this.request('UpdateUserInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} UserId - userId. required.
   * @param {String} UserName - userName. required.
   * @param {String} ProjectId - projectId. required.
   * @param {String} IotId - iotId. optional.
   * @param {String} IdentifyingImageBase64 - identifyingImageBase64. optional.
   * @param {Long} IdentifyingTime - identifyingTime. optional.
   * @param {String} IdentifyingImageUrl - identifyingImageUrl. optional.
   * @param {String} DeviceName - deviceName. optional.
   */
  uploadIdentifyRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserId')) {
      throw new TypeError('parameter "UserId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('UploadIdentifyRecord', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  verifyAccountProject(params = {}, options = {}) {
    return this.request('VerifyAccountProject', params, options);
  }

}

module.exports = Client;
