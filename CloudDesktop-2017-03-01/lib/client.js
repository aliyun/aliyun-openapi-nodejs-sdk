
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} SecurityGroupId - securityGroupId. required.
   * @param {String} AdType - adType. required.
   * @param {String} DomainName - domainName. required.
   * @param {String} AdAdminName - adAdminName. required.
   * @param {String} AdAdminPassword - adAdminPassword. required.
   * @param {String} AdIpAddress - adIpAddress. required.
   * @param {String} AdBackupIpAddress - adBackupIpAddress. optional.
   * @param {String} AdDnsIpAddress - adDnsIpAddress. optional.
   * @param {String} AdBackupDnsIpAddress - adBackupDnsIpAddress. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} AdOU - adOU. optional.
   * @param {String} AdGroup - adGroup. optional.
   * @param {String} AdTrustDomain - adTrustDomain. optional.
   */
  allocOwnerAuthConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'AdType')) {
      throw new TypeError('parameter "AdType" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AdAdminName')) {
      throw new TypeError('parameter "AdAdminName" is required');
    }

    if (!hasOwnProperty(params, 'AdAdminPassword')) {
      throw new TypeError('parameter "AdAdminPassword" is required');
    }

    if (!hasOwnProperty(params, 'AdIpAddress')) {
      throw new TypeError('parameter "AdIpAddress" is required');
    }

    return this.request('AllocOwnerAuthConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} SecurityGroupId - securityGroupId. required.
   */
  allocOwnerAuthDefault(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    return this.request('AllocOwnerAuthDefault', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} OldPassword - oldPassword. required.
   * @param {String} NewPassword - newPassword. required.
   */
  changeActivityDirectoryPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OldPassword')) {
      throw new TypeError('parameter "OldPassword" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    return this.request('ChangeActivityDirectoryPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} data - data. required.
   */
  checkOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CheckOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  checkOwnerRoleAuthorized(params = {}, options = {}) {
    return this.request('CheckOwnerRoleAuthorized', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ImageId - imageId. required.
   * @param {String} DestinationRegionId - destinationRegionId. required.
   * @param {String} DestinationImageName - destinationImageName. required.
   * @param {String} DestinationDescription - destinationDescription. optional.
   */
  copyImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationRegionId')) {
      throw new TypeError('parameter "DestinationRegionId" is required');
    }

    if (!hasOwnProperty(params, 'DestinationImageName')) {
      throw new TypeError('parameter "DestinationImageName" is required');
    }

    return this.request('CopyImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} CompanyAlias - companyAlias. required.
   */
  createCompanyAlias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CompanyAlias')) {
      throw new TypeError('parameter "CompanyAlias" is required');
    }

    return this.request('CreateCompanyAlias', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ChargeType - chargeType. required.
   * @param {String} TypeItemId - typeItemId. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} VSwitchId - vSwitchId. required.
   * @param {String} ImageType - imageType. optional.
   * @param {String} ImageId - imageId. required.
   * @param {String} UserDiskType - userDiskType. optional.
   * @param {String} UserDiskSize - userDiskSize. optional.
   * @param {Integer} Period - period. optional.
   * @param {String} Cycle - cycle. optional. default: Month.
   * @param {String} UserName - userName. required.
   * @param {String} UserGroup - userGroup. required.
   * @param {String} ClientToken - clientToken. optional.
   * @param {String} ExtraDiskType - extraDiskType. optional.
   * @param {Integer} ExtraDiskSize - extraDiskSize. optional.
   */
  createDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChargeType')) {
      throw new TypeError('parameter "ChargeType" is required');
    }

    if (!hasOwnProperty(params, 'TypeItemId')) {
      throw new TypeError('parameter "TypeItemId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'UserGroup')) {
      throw new TypeError('parameter "UserGroup" is required');
    }

    return this.request('CreateDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} ImageName - imageName. required.
   * @param {String} ImageDescription - imageDescription. optional.
   */
  createImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    if (!hasOwnProperty(params, 'ImageName')) {
      throw new TypeError('parameter "ImageName" is required');
    }

    return this.request('CreateImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} PolicyJson - policyJson. optional.
   * @param {String} Description - description. optional.
   */
  createPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreatePolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} SnapshotName - snapshotName. required.
   * @param {String} SnapshotDescription - snapshotDescription. optional.
   * @param {String} TargetDisk - targetDisk. required.
   */
  createSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotName')) {
      throw new TypeError('parameter "SnapshotName" is required');
    }

    if (!hasOwnProperty(params, 'TargetDisk')) {
      throw new TypeError('parameter "TargetDisk" is required');
    }

    return this.request('CreateSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserName - userName. required.
   * @param {String} Email - email. required.
   */
  createUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('CreateUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DesktopId - desktopId. required.
   */
  deleteDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('DeleteDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} ImageId - imageIds. required.
   */
  deleteImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('DeleteImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} PolicyId - policyId. required.
   */
  deletePolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    return this.request('DeletePolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} SnapshotId - snapshotIds. required.
   */
  deleteSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('DeleteSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} UserName - userNames. required.
   */
  deleteUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('DeleteUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserName - userName. optional.
   */
  describeActivityDirectoryUsers(params = {}, options = {}) {
    return this.request('DescribeActivityDirectoryUsers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   */
  describeAutoSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('DescribeAutoSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ChargeType - chargeType. optional.
   * @param {String} TypeItemId - typeItemId. required.
   * @param {String} ZoneId - zoneId. required.
   */
  describeAvailableResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TypeItemId')) {
      throw new TypeError('parameter "TypeItemId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    return this.request('DescribeAvailableResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeCbImageForSpec(params = {}, options = {}) {
    return this.request('DescribeCbImageForSpec', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeCbOwnerVpc(params = {}, options = {}) {
    return this.request('DescribeCbOwnerVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeCbUserDiskSize(params = {}, options = {}) {
    return this.request('DescribeCbUserDiskSize', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeCbUserDiskType(params = {}, options = {}) {
    return this.request('DescribeCbUserDiskType', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeCompanyAlias(params = {}, options = {}) {
    return this.request('DescribeCompanyAlias', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeDesktopOwner(params = {}, options = {}) {
    return this.request('DescribeDesktopOwner', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopType - desktopType. optional.
   * @param {String} TypeItemId - typeItemId. optional.
   */
  describeDesktopTypeItems(params = {}, options = {}) {
    return this.request('DescribeDesktopTypeItems', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   */
  describeDesktopVNC(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('DescribeDesktopVNC', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} ImageType - imageType. required.
   */
  describeDesktopValidImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    return this.request('DescribeDesktopValidImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} DesktopName - desktopName. optional.
   * @param {String} DesktopIp - desktopIp. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Page - page. optional.
   * @param {String} DesktopId - desktopId. optional.
   */
  describeDesktops(params = {}, options = {}) {
    return this.request('DescribeDesktops', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeDesktopsOverview(params = {}, options = {}) {
    return this.request('DescribeDesktopsOverview', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TypeItemId - typeItemId. optional.
   * @param {String} ImageType - imageType. optional. default: private.
   * @param {String} ImageId - imageId. optional.
   * @param {String} ImageName - imageName. optional.
   * @param {String} FromDate - fromDate. optional.
   * @param {String} ToDate - toDate. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeImages(params = {}, options = {}) {
    return this.request('DescribeImages', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. optional.
   */
  describePolicies(params = {}, options = {}) {
    return this.request('DescribePolicies', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeProxyServers(params = {}, options = {}) {
    return this.request('DescribeProxyServers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeSAMLConfig(params = {}, options = {}) {
    return this.request('DescribeSAMLConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  describeSAMLSpMetadata(params = {}, options = {}) {
    return this.request('DescribeSAMLSpMetadata', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SnapshotId - snapshotId. optional.
   * @param {String} SnapshotName - snapshotName. optional.
   * @param {String} SnapshotDescription - snapshotDescription. optional.
   * @param {String} DesktopName - desktopName. optional.
   * @param {String} FromDate - fromDate. optional.
   * @param {String} ToDate - toDate. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  describeSnapshot(params = {}, options = {}) {
    return this.request('DescribeSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Url - url. required.
   */
  describeUrlIps(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    return this.request('DescribeUrlIps', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserName - userName. required.
   */
  describeUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('DescribeUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} DesktopName - desktopName. optional.
   * @param {String} FromDate - fromDate. optional.
   * @param {String} ToDate - toDate. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Page - page. optional.
   */
  describeUserActions(params = {}, options = {}) {
    return this.request('DescribeUserActions', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} Email - email. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNumber - pageNumber. optional.
   */
  describeUsers(params = {}, options = {}) {
    return this.request('DescribeUsers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} pk - Pk. required.
   * @param {String} interrupt - Interrupt. optional.
   * @param {String} bid - Bid. optional.
   * @param {Long} hid - Hid. optional.
   * @param {String} country - Country. optional.
   * @param {String} taskIdentifier - TaskIdentifier. optional.
   * @param {String} taskExtraData - TaskExtraData. optional.
   * @param {String} gmtWakeup - GmtWakeup. optional.
   * @param {Long} level - Level. optional.
   * @param {String} url - Url. optional.
   * @param {String} prompt - Prompt. optional.
   */
  doCheckResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    return this.request('DoCheckResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} pk - Pk. required.
   * @param {String} interrupt - Interrupt. optional.
   * @param {String} bid - Bid. optional.
   * @param {Long} hid - Hid. optional.
   * @param {String} country - Country. optional.
   * @param {String} taskIdentifier - TaskIdentifier. optional.
   * @param {String} taskExtraData - TaskExtraData. optional.
   * @param {String} gmtWakeup - GmtWakeup. optional.
   * @param {String} invoker - Invoker. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    return this.request('DoLogicalDeleteResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} pk - Pk. required.
   * @param {String} interrupt - Interrupt. optional.
   * @param {String} bid - Bid. optional.
   * @param {Long} hid - Hid. optional.
   * @param {String} country - Country. optional.
   * @param {String} taskIdentifier - TaskIdentifier. optional.
   * @param {String} taskExtraData - TaskExtraData. optional.
   * @param {String} gmtWakeup - GmtWakeup. optional.
   * @param {String} invoker - Invoker. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'pk')) {
      throw new TypeError('parameter "pk" is required');
    }

    return this.request('DoPhysicalDeleteResource', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DomainName - domainName. required.
   * @param {String} AdAdminName - adAdminName. required.
   * @param {String} AdAdminPwd - adAdminPwd. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} InstanceIp - instanceIp. required.
   * @param {Integer} InstancePort - instancePort. optional.
   * @param {String} BackupInstanceId - backupInstanceId. optional.
   * @param {String} BackupIp - backupIp. optional.
   * @param {Integer} BackupPort - backupPort. optional.
   * @param {String} Dns - dns. optional.
   */
  innerAddSysVpcActivityDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'AdAdminName')) {
      throw new TypeError('parameter "AdAdminName" is required');
    }

    if (!hasOwnProperty(params, 'AdAdminPwd')) {
      throw new TypeError('parameter "AdAdminPwd" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIp')) {
      throw new TypeError('parameter "InstanceIp" is required');
    }

    return this.request('InnerAddSysVpcActivityDirectory', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Upn - upn. required.
   * @param {String} Password - password. required.
   */
  innerAuthenticateUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Upn')) {
      throw new TypeError('parameter "Upn" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('InnerAuthenticateUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} AppId - appId. required.
   * @param {Long} AppType - appType. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {Long} GroupId - groupId. optional.
   * @param {Long} PlatformId - platformId. optional.
   * @param {Boolean} IsForce - isForce. optional.
   * @param {Boolean} IsGrayRelease - isGrayRelease. optional.
   * @param {String} Logs - logs. optional.
   */
  innerChangeUpdateAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('InnerChangeUpdateAppInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Upn - upn. required.
   * @param {String} OldPassword - oldPassword. required.
   * @param {String} NewPassword - newPassword. required.
   */
  innerChangeUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Upn')) {
      throw new TypeError('parameter "Upn" is required');
    }

    if (!hasOwnProperty(params, 'OldPassword')) {
      throw new TypeError('parameter "OldPassword" is required');
    }

    if (!hasOwnProperty(params, 'NewPassword')) {
      throw new TypeError('parameter "NewPassword" is required');
    }

    return this.request('InnerChangeUserPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} CompanyAlias - companyAlias. required.
   */
  innerCreateCompanyAlias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'CompanyAlias')) {
      throw new TypeError('parameter "CompanyAlias" is required');
    }

    return this.request('InnerCreateCompanyAlias', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} DesktopId - desktopId. required.
   * @param {Integer} Port - port. required.
   */
  innerCreateDesktopAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('InnerCreateDesktopAccess', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. required.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {Long} OwnerId - ownerId. required.
   */
  innerCreateProxyOwnerMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKeyId')) {
      throw new TypeError('parameter "AccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerCreateProxyOwnerMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AppType - appType. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {String} FileName - fileName. optional.
   * @param {String} FileKey - fileKey. optional.
   * @param {String} GroupId - groupId. optional.
   * @param {String} PlatformId - platformId. optional.
   * @param {String} WorkId - workId. optional.
   * @param {String} Suffix - suffix. optional.
   * @param {Boolean} IsForce - isForce. optional.
   * @param {Boolean} IsGrayRelease - isGrayRelease. optional.
   * @param {String} Logs - logs. optional.
   */
  innerCreateUpdateAppInfo(params = {}, options = {}) {
    return this.request('InnerCreateUpdateAppInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} AppName - appName. required.
   * @param {String} Description - description. optional.
   */
  innerCreateUpdateAppType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('InnerCreateUpdateAppType', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   */
  innerCreateUpdateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('InnerCreateUpdateGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Endpoint - endpoint. required.
   * @param {String} Bucket - bucket. required.
   */
  innerCreateUpdateOSS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Endpoint')) {
      throw new TypeError('parameter "Endpoint" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    return this.request('InnerCreateUpdateOSS', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Platform - platform. required.
   * @param {String} Description - description. optional.
   */
  innerCreateUpdatePlatform(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Platform')) {
      throw new TypeError('parameter "Platform" is required');
    }

    return this.request('InnerCreateUpdatePlatform', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   */
  innerDeleteCompanyAlias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerDeleteCompanyAlias', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} AppTypeId - appTypeId. required.
   */
  innerDeleteUpdateAppType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppTypeId')) {
      throw new TypeError('parameter "AppTypeId" is required');
    }

    return this.request('InnerDeleteUpdateAppType', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. required.
   */
  innerDeleteUpdateGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('InnerDeleteUpdateGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  innerDeleteUpdateOSS(params = {}, options = {}) {
    return this.request('InnerDeleteUpdateOSS', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} PlatformId - platformId. required.
   */
  innerDeleteUpdatePlatform(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PlatformId')) {
      throw new TypeError('parameter "PlatformId" is required');
    }

    return this.request('InnerDeleteUpdatePlatform', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   */
  innerDescribeCompanyAlias(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerDescribeCompanyAlias', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} DesktopId - desktopId. required.
   * @param {Integer} Port - port. required.
   */
  innerDescribeDesktopAccess(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('InnerDescribeDesktopAccess', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} DesktopId - desktopId. required.
   */
  innerDescribeDesktopAccessIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerDescribeDesktopAccessIp', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} DesktopId - desktopId. required.
   */
  innerDescribeDesktopById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerDescribeDesktopById', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} UserName - userName. required.
   */
  innerDescribeDesktopByUserName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('InnerDescribeDesktopByUserName', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   */
  innerDescribeDesktopOwner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerDescribeDesktopOwner', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} DesktopId - desktopId. required.
   */
  innerDescribeDesktopVNC(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerDescribeDesktopVNC', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  innerDescribeImageForSpec(params = {}, options = {}) {
    return this.request('InnerDescribeImageForSpec', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  innerDescribeOwnerVpcForCD(params = {}, options = {}) {
    return this.request('InnerDescribeOwnerVpcForCD', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} EcsInstanceId - ecsInstanceId. optional.
   */
  innerDescribeProxyOwnerMapping(params = {}, options = {}) {
    return this.request('InnerDescribeProxyOwnerMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} EcsInstanceId - ecsInstanceId. optional.
   * @param {String} Status - status. optional.
   */
  innerDescribeProxyServers(params = {}, options = {}) {
    return this.request('InnerDescribeProxyServers', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   */
  innerDescribeSAMLConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerDescribeSAMLConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} AppType - appType. optional.
   * @param {Long} Group - group. optional.
   * @param {Boolean} IsForce - isForce. optional.
   * @param {Long} Platform - platform. optional.
   * @param {Boolean} IsGrayRelease - isGrayRelease. optional.
   * @param {String} AppVersion - appVersion. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} Page - page. optional.
   */
  innerDescribeUpdateAppInfos(params = {}, options = {}) {
    return this.request('InnerDescribeUpdateAppInfos', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} AppTypeId - appTypeId. optional.
   */
  innerDescribeUpdateAppTypes(params = {}, options = {}) {
    return this.request('InnerDescribeUpdateAppTypes', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} GroupId - groupId. optional.
   */
  innerDescribeUpdateGroups(params = {}, options = {}) {
    return this.request('InnerDescribeUpdateGroups', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  innerDescribeUpdateOSS(params = {}, options = {}) {
    return this.request('InnerDescribeUpdateOSS', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} PlatformId - platformId. optional.
   */
  innerDescribeUpdatePlatforms(params = {}, options = {}) {
    return this.request('InnerDescribeUpdatePlatforms', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} UserName - userName. required.
   */
  innerDescribeUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('InnerDescribeUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Email - email. required.
   * @param {Long} OwnerId - ownerId. required.
   */
  innerDescribeUserByEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerDescribeUserByEmail', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  innerDescribeUserDiskSizeForSpec(params = {}, options = {}) {
    return this.request('InnerDescribeUserDiskSizeForSpec', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  innerDescribeUserDiskTypeForSpec(params = {}, options = {}) {
    return this.request('InnerDescribeUserDiskTypeForSpec', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. required.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {Long} OwnerId - ownerId. required.
   */
  innerDestroyProxyOwnerMapping(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKeyId')) {
      throw new TypeError('parameter "AccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerDestroyProxyOwnerMapping', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   */
  innerGetDesktopPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerGetDesktopPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {String} Ip - ip. optional.
   * @param {Integer} InnerIp - innerIp. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Type - type. optional.
   * @param {String} Status - status. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} SwitchId - switchId. optional.
   * @param {String} UsingStatus - usingStatus. optional.
   */
  innerModifyProxyServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    return this.request('InnerModifyProxyServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SlbId - slbId. required.
   * @param {String} CmIp - cmIp. required.
   * @param {String} CmUrl - cmUrl. required.
   * @param {Integer} MaxOwner - maxOwner. optional.
   * @param {Integer} MaxEcs - maxEcs. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} SwitchId - switchId. optional.
   */
  innerPeAddSlb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SlbId')) {
      throw new TypeError('parameter "SlbId" is required');
    }

    if (!hasOwnProperty(params, 'CmIp')) {
      throw new TypeError('parameter "CmIp" is required');
    }

    if (!hasOwnProperty(params, 'CmUrl')) {
      throw new TypeError('parameter "CmUrl" is required');
    }

    return this.request('InnerPeAddSlb', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SwitchId - switchId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} ZoneId - zoneId. required.
   * @param {String} Cider - cider. required.
   */
  innerPeAddSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SwitchId')) {
      throw new TypeError('parameter "SwitchId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'ZoneId')) {
      throw new TypeError('parameter "ZoneId" is required');
    }

    if (!hasOwnProperty(params, 'Cider')) {
      throw new TypeError('parameter "Cider" is required');
    }

    return this.request('InnerPeAddSwitch', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TypeItemId - typeItemId. required.
   * @param {String} TypeId - typeId. required.
   * @param {String} EcsTypeId - ecsTypeId. required.
   * @param {Integer} Cpu - cpu. required.
   * @param {Integer} Memory - memory. required.
   * @param {String} SysDiskCategory - sysDiskCategory. required.
   * @param {String} UsrDiskCategory - usrDiskCategory. required.
   * @param {Integer} SysDiskSize - sysDiskSize. required.
   * @param {Integer} UsrDiskSize - usrDiskSize. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} SnapshotPolicyId - snapshotPolicyId. required.
   */
  innerPeAddTypeItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TypeItemId')) {
      throw new TypeError('parameter "TypeItemId" is required');
    }

    if (!hasOwnProperty(params, 'TypeId')) {
      throw new TypeError('parameter "TypeId" is required');
    }

    if (!hasOwnProperty(params, 'EcsTypeId')) {
      throw new TypeError('parameter "EcsTypeId" is required');
    }

    if (!hasOwnProperty(params, 'Cpu')) {
      throw new TypeError('parameter "Cpu" is required');
    }

    if (!hasOwnProperty(params, 'Memory')) {
      throw new TypeError('parameter "Memory" is required');
    }

    if (!hasOwnProperty(params, 'SysDiskCategory')) {
      throw new TypeError('parameter "SysDiskCategory" is required');
    }

    if (!hasOwnProperty(params, 'UsrDiskCategory')) {
      throw new TypeError('parameter "UsrDiskCategory" is required');
    }

    if (!hasOwnProperty(params, 'SysDiskSize')) {
      throw new TypeError('parameter "SysDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'UsrDiskSize')) {
      throw new TypeError('parameter "UsrDiskSize" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'SnapshotPolicyId')) {
      throw new TypeError('parameter "SnapshotPolicyId" is required');
    }

    return this.request('InnerPeAddTypeItem', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} SlbId - slbId. required.
   * @param {String} CmIp - cmIp. required.
   * @param {String} CmSecurityId - cmSecurityId. required.
   * @param {Integer} MaxOwnerCount - maxOwnerCount. required.
   * @param {Integer} MaxEcsCount - maxEcsCount. required.
   */
  innerPeAddVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'SlbId')) {
      throw new TypeError('parameter "SlbId" is required');
    }

    if (!hasOwnProperty(params, 'CmIp')) {
      throw new TypeError('parameter "CmIp" is required');
    }

    if (!hasOwnProperty(params, 'CmSecurityId')) {
      throw new TypeError('parameter "CmSecurityId" is required');
    }

    if (!hasOwnProperty(params, 'MaxOwnerCount')) {
      throw new TypeError('parameter "MaxOwnerCount" is required');
    }

    if (!hasOwnProperty(params, 'MaxEcsCount')) {
      throw new TypeError('parameter "MaxEcsCount" is required');
    }

    return this.request('InnerPeAddVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   */
  innerPeDeleteDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerPeDeleteDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   */
  innerPeDeleteOwner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerPeDeleteOwner', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} CmUrl - cmUrl. required.
   */
  innerPeDeleteSlb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CmUrl')) {
      throw new TypeError('parameter "CmUrl" is required');
    }

    return this.request('InnerPeDeleteSlb', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SwitchId - switchId. required.
   */
  innerPeDeleteSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SwitchId')) {
      throw new TypeError('parameter "SwitchId" is required');
    }

    return this.request('InnerPeDeleteSwitch', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TypeItemId - typeItemId. required.
   */
  innerPeDeleteTypeItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TypeItemId')) {
      throw new TypeError('parameter "TypeItemId" is required');
    }

    return this.request('InnerPeDeleteTypeItem', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   */
  innerPeDeleteVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('InnerPeDeleteVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} CmSlb - cmSlb. required.
   */
  innerPeGetSlb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CmSlb')) {
      throw new TypeError('parameter "CmSlb" is required');
    }

    return this.request('InnerPeGetSlb', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SwitchId - switchId. required.
   */
  innerPeGetSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SwitchId')) {
      throw new TypeError('parameter "SwitchId" is required');
    }

    return this.request('InnerPeGetSwitch', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TypeItemId - typeItemId. required.
   */
  innerPeGetTypeItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TypeItemId')) {
      throw new TypeError('parameter "TypeItemId" is required');
    }

    return this.request('InnerPeGetTypeItem', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   */
  innerPeGetVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('InnerPeGetVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} DesktopId - desktopId. required.
   * @param {Boolean} ForceStop - forceStop. optional.
   */
  innerPeRebootDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerPeRebootDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} DesktopId - desktopId. required.
   */
  innerPeStartDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerPeStartDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} DesktopId - desktopId. required.
   * @param {Boolean} ForceStop - forceStop. optional.
   */
  innerPeStopDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerPeStopDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} DesktopName - desktopName. optional.
   * @param {String} Status - status. optional.
   * @param {String} TypeItemId - typeItemId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} SwitchId - switchId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} EcsInnerIp - ecsInnerIp. optional.
   * @param {String} EcsPublicIp - ecsPulicIp. optional.
   * @param {Integer} EcsInBandwidth - ecsInBandwidth. optional.
   * @param {Integer} EcsOutBandwidth - ecsOutBandwidth. optional.
   * @param {String} AccessIp - accessIp. optional.
   * @param {String} UserName - userName. optional.
   * @param {String} DesktopChargeType - desktopChargeType. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {String} SecurityGroups - securityGroups. optional.
   * @param {String} BusinessId - businessId. optional.
   * @param {String} EipAddress - eipAddress. optional.
   * @param {String} EipInstanceId - eipInstanceId. optional.
   * @param {String} CreateDate - createDate. optional.
   * @param {String} ExpiredDate - expiredDate. optional.
   * @param {String} Commit - commit. optional.
   */
  innerPeUpdateDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerPeUpdateDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} Status - status. optional.
   * @param {String} CmUrl - cmUrl. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} OwnerSecId - ownerSecId. optional.
   * @param {String} InstanceSecId - instanceSecId. optional.
   * @param {Integer} MaxEcs - maxEcs. optional.
   * @param {String} OwnerVpcId - ownerVpcId. optional.
   */
  innerPeUpdateOwner(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerPeUpdateOwner', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} CmUrl - cmUrl. required.
   * @param {String} SlbId - slbId. optional.
   * @param {String} CmIp - cmIp. optional.
   * @param {Integer} MaxOwner - maxOwner. optional.
   * @param {Integer} MaxEcs - maxEcs. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} SwitchId - switchId. optional.
   */
  innerPeUpdateSlb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CmUrl')) {
      throw new TypeError('parameter "CmUrl" is required');
    }

    return this.request('InnerPeUpdateSlb', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SwitchId - switchId. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} Cider - cider. optional.
   */
  innerPeUpdateSwitch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SwitchId')) {
      throw new TypeError('parameter "SwitchId" is required');
    }

    return this.request('InnerPeUpdateSwitch', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} TypeItemId - typeItemId. required.
   * @param {String} TypeId - typeId. optional.
   * @param {String} EcsTypeId - ecsTypeId. optional.
   * @param {Integer} Cpu - cpu. optional.
   * @param {Integer} Memory - memory. optional.
   * @param {String} SysDiskCategory - sysDiskCategory. optional.
   * @param {String} UsrDiskCategory - usrDiskCategory. optional.
   * @param {Integer} SysDiskSize - sysDiskSize. optional.
   * @param {Integer} UsrDiskSize - usrDiskSize. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} SnapshotPolicyId - snapshotPolicyId. optional.
   */
  innerPeUpdateTypeItem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TypeItemId')) {
      throw new TypeError('parameter "TypeItemId" is required');
    }

    return this.request('InnerPeUpdateTypeItem', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   * @param {String} SlbId - slbId. optional.
   * @param {String} CmIp - cmIp. optional.
   * @param {String} CmSecurityId - cmSecurityId. optional.
   * @param {Integer} MaxOwnerCount - maxOwnerCount. optional.
   * @param {Integer} MaxEcsCount - maxEcsCount. optional.
   */
  innerPeUpdateVpc(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('InnerPeUpdateVpc', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} Message - message. required.
   * @param {String} FromRegionId - fromRegionId. required.
   * @param {String} Parameter - parameter. optional.
   */
  innerRegionMessage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    if (!hasOwnProperty(params, 'FromRegionId')) {
      throw new TypeError('parameter "FromRegionId" is required');
    }

    return this.request('InnerRegionMessage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Ip - ip. required.
   * @param {String} InnerIp - innerIp. required.
   * @param {String} Status - status. required.
   * @param {String} Type - type. required.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {String} VpcId - vpcId. required.
   * @param {String} SwitchId - switchId. required.
   * @param {String} UsingStatus - usingStatus. optional.
   */
  innerRegisterProxyServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessKeyId')) {
      throw new TypeError('parameter "AccessKeyId" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    if (!hasOwnProperty(params, 'InnerIp')) {
      throw new TypeError('parameter "InnerIp" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'SwitchId')) {
      throw new TypeError('parameter "SwitchId" is required');
    }

    return this.request('InnerRegisterProxyServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} Upn - upn. required.
   * @param {String} Event - event. required.
   * @param {Boolean} Result - result. required.
   * @param {String} DesktopId - desktopId. optional.
   * @param {String} ResultDetail - resultDetail. optional.
   * @param {String} ClientType - clientType. optional.
   * @param {String} ClientIp - clientIp. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} AgentVersion - agentVersion. optional.
   */
  innerRegisterUserAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'Upn')) {
      throw new TypeError('parameter "Upn" is required');
    }

    if (!hasOwnProperty(params, 'Event')) {
      throw new TypeError('parameter "Event" is required');
    }

    if (!hasOwnProperty(params, 'Result')) {
      throw new TypeError('parameter "Result" is required');
    }

    return this.request('InnerRegisterUserAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} AppId - appId. required.
   * @param {Boolean} Release - release. required.
   */
  innerReleaseUpdateAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'Release')) {
      throw new TypeError('parameter "Release" is required');
    }

    return this.request('InnerReleaseUpdateAppInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} VpcId - vpcId. required.
   */
  innerRemoveSysVpcActivityDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('InnerRemoveSysVpcActivityDirectory', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   */
  innerRemoveUserActivityDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    return this.request('InnerRemoveUserActivityDirectory', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} Availability - availability. required.
   * @param {Long} StartTime - startTime. required.
   * @param {String} Description - description. optional.
   */
  innerReportDesktopAvailability(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'Availability')) {
      throw new TypeError('parameter "Availability" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('InnerReportDesktopAvailability', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Upn - upn. required.
   */
  innerRequestRestUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Upn')) {
      throw new TypeError('parameter "Upn" is required');
    }

    return this.request('InnerRequestRestUserPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Upn - upn. required.
   * @param {String} DesktopId - desktopId. required.
   */
  innerRequestSetDesktopUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Upn')) {
      throw new TypeError('parameter "Upn" is required');
    }

    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('InnerRequestSetDesktopUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   */
  innerUnregisterProxyServer(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    return this.request('InnerUnregisterProxyServer', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Session - session. required.
   * @param {String} ClientType - clientType. optional.
   * @param {String} ClientIp - clientIp. optional.
   * @param {String} ClientVersion - clientVersion. optional.
   * @param {String} AgentVersion - agentVersion. optional.
   * @param {String} ConnectedDateTime - connectedDateTime. optional.
   * @param {String} DisconnectedDateTime - disconnectedDateTime. optional.
   * @param {String} DisconnectedReason - disconnectedReason. optional.
   */
  innerUpdateUserAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Session')) {
      throw new TypeError('parameter "Session" is required');
    }

    return this.request('InnerUpdateUserAction', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} VpcId - vpcId. required.
   */
  innerUseSysVpcActivityDirectory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('InnerUseSysVpcActivityDirectory', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} Upn - upn. required.
   * @param {String} VerifyCode - verifyCode. required.
   */
  innerVerifyRestUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Upn')) {
      throw new TypeError('parameter "Upn" is required');
    }

    if (!hasOwnProperty(params, 'VerifyCode')) {
      throw new TypeError('parameter "VerifyCode" is required');
    }

    return this.request('InnerVerifyRestUserPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} DesktopName - desktopName. required.
   */
  modifyDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'DesktopName')) {
      throw new TypeError('parameter "DesktopName" is required');
    }

    return this.request('ModifyDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} Password - password. required.
   */
  modifyDesktopAdminPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'Password')) {
      throw new TypeError('parameter "Password" is required');
    }

    return this.request('ModifyDesktopAdminPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} UserName - userName. required.
   * @param {String} UserGroup - userGroup. required.
   */
  modifyDesktopUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'UserGroup')) {
      throw new TypeError('parameter "UserGroup" is required');
    }

    return this.request('ModifyDesktopUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} UserGroup - userGroup. required.
   * @param {Boolean} Reboot - reboot. required.
   */
  modifyDesktopUserGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'UserGroup')) {
      throw new TypeError('parameter "UserGroup" is required');
    }

    if (!hasOwnProperty(params, 'Reboot')) {
      throw new TypeError('parameter "Reboot" is required');
    }

    return this.request('ModifyDesktopUserGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} ImageId - imageId. required.
   * @param {String} Description - description. optional.
   */
  modifyImageInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('ModifyImageInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} PolicyId - policyId. required.
   * @param {String} Name - name. optional.
   * @param {String} PolicyJson - policyJson. optional.
   * @param {String} Description - description. optional.
   */
  modifyPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    return this.request('ModifyPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} FileName - fileName. optional.
   * @param {String} FileKey - fileKey. optional.
   * @param {Boolean} SamlEnable - samlEnable. required.
   * @param {String} SamlAuth - samlAuth. optional.
   * @param {String} SamlCheck - samlCheck. optional.
   */
  modifySAMLConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SamlEnable')) {
      throw new TypeError('parameter "SamlEnable" is required');
    }

    return this.request('ModifySAMLConfig', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {String} SnapshotDescription - snapshotDescription. optional.
   */
  modifySnapshotInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('ModifySnapshotInfo', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} UserName - userName. required.
   * @param {String} Email - email. required.
   */
  modifyUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    if (!hasOwnProperty(params, 'Email')) {
      throw new TypeError('parameter "Email" is required');
    }

    return this.request('ModifyUser', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} data - data. required.
   */
  produceDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('ProduceDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {Boolean} ForceStop - forceStop. optional.
   */
  rebootDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('RebootDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} data - data. required.
   */
  refundDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('RefundDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  releaseOwner(params = {}, options = {}) {
    return this.request('ReleaseOwner', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {Integer} Period - period. required.
   * @param {String} Cycle - cycle. optional. default: Month.
   * @param {String} ClientToken - clientToken. optional.
   */
  renewDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('RenewDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} ImageId - imageId. required.
   * @param {String} ImageType - imageType. required.
   */
  replaceDesktopImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    return this.request('ReplaceDesktopImage', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   */
  requestUploadFile(params = {}, options = {}) {
    return this.request('RequestUploadFile', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} DiskId - diskId. required.
   */
  resetDesktopDisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    if (!hasOwnProperty(params, 'DiskId')) {
      throw new TypeError('parameter "DiskId" is required');
    }

    return this.request('ResetDesktopDisk', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {Boolean} SystemDisk - systemDisk. optional.
   * @param {Boolean} DataDisk - dataDisk. optional.
   * @param {Boolean} StartAfterReset - startAfterReset. optional.
   */
  resetDiskFromAutoSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('ResetDiskFromAutoSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} SnapshotId - snapshotId. required.
   * @param {Boolean} StartAfterReset - startAfterReset. optional.
   */
  resetDiskFromSnapshot(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SnapshotId')) {
      throw new TypeError('parameter "SnapshotId" is required');
    }

    return this.request('ResetDiskFromSnapshot', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {RepeatList} UserName - userNames. required.
   */
  resetUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('ResetUserPassword', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {String} PolicyId - policyId. optional.
   */
  setDesktopPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('SetDesktopPolicy', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   */
  startDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('StartDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} DesktopId - desktopId. required.
   * @param {Boolean} ForceStop - forceStop. optional.
   */
  stopDesktop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DesktopId')) {
      throw new TypeError('parameter "DesktopId" is required');
    }

    return this.request('StopDesktop', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {Boolean} Unlock - unlock. optional.
   * @param {RepeatList} UserName - userNames. required.
   */
  unlockUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'UserName')) {
      throw new TypeError('parameter "UserName" is required');
    }

    return this.request('UnlockUser', params, options);
  }

}

module.exports = Client;
