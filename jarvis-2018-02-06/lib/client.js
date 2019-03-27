
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-02-06';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} WhiteListType - WhiteListType. required.
   * @param {String} ProductName - ProductName. required.
   * @param {Integer} DstPort - DstPort. optional.
   * @param {String} SrcIP - SrcIP. required.
   * @param {String} InstanceIdList - InstanceIdList. optional.
   * @param {String} InstanceInfoList - InstanceInfoList. optional.
   * @param {Integer} LiveTime - LiveTime. optional.
   * @param {String} Note - Note. optional.
   * @param {String} Lang - lang. optional.
   */
  createAccessWhiteListGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'WhiteListType')) {
      throw new TypeError('parameter "WhiteListType" is required');
    }

    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'SrcIP')) {
      throw new TypeError('parameter "SrcIP" is required');
    }

    return this.request('CreateAccessWhiteListGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} SrcIP - SrcIP. required.
   */
  createAllEcsWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'SrcIP')) {
      throw new TypeError('parameter "SrcIP" is required');
    }

    return this.request('CreateAllEcsWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} CdnIpList - CdnIpList. required.
   */
  createCdnIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'CdnIpList')) {
      throw new TypeError('parameter "CdnIpList" is required');
    }

    return this.request('CreateCdnIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} CdnUidList - CdnUidList. required.
   */
  createCdnSubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'CdnUidList')) {
      throw new TypeError('parameter "CdnUidList" is required');
    }

    return this.request('CreateCdnSubscription', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} WhiteListType - WhiteListType. required.
   * @param {String} ProductName - ProductName. required.
   * @param {Integer} DstPort - DstPort. optional.
   * @param {String} SrcIP - SrcIP. required.
   * @param {String} InstanceIdList - InstanceIdList. optional.
   * @param {String} InstanceInfoList - InstanceInfoList. optional.
   * @param {Integer} LiveTime - LiveTime. optional.
   * @param {String} Note - Note. optional.
   * @param {String} Lang - lang. optional.
   */
  createConsoleAccessWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'WhiteListType')) {
      throw new TypeError('parameter "WhiteListType" is required');
    }

    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'SrcIP')) {
      throw new TypeError('parameter "SrcIP" is required');
    }

    return this.request('CreateConsoleAccessWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} GmtCreate - GmtCreate. required.
   * @param {Integer} SrcPort - SrcPort. optional.
   * @param {Integer} FeedBack - FeedBack. required.
   * @param {String} PunishType - PunishType. required.
   * @param {String} DstIP - DstIP. optional.
   * @param {Integer} DstPort - DstPort. optional.
   * @param {String} ProtocolName - ProtocolName. optional.
   * @param {String} SrcIP - SrcIP. required.
   * @param {String} Lang - lang. optional.
   */
  createCpmcPunishFeedBack(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'GmtCreate')) {
      throw new TypeError('parameter "GmtCreate" is required');
    }

    if (!hasOwnProperty(params, 'FeedBack')) {
      throw new TypeError('parameter "FeedBack" is required');
    }

    if (!hasOwnProperty(params, 'PunishType')) {
      throw new TypeError('parameter "PunishType" is required');
    }

    if (!hasOwnProperty(params, 'SrcIP')) {
      throw new TypeError('parameter "SrcIP" is required');
    }

    return this.request('CreateCpmcPunishFeedBack', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} WhiteListType - WhiteListType. required.
   * @param {String} ProductName - ProductName. required.
   * @param {Integer} DstPort - DstPort. optional.
   * @param {String} SrcUid - SrcUid. required.
   * @param {String} InstanceIdList - InstanceIdList. required.
   * @param {Integer} LiveTime - LiveTime. optional.
   * @param {String} Note - Note. optional.
   * @param {String} Lang - lang. optional.
   */
  createUidWhiteListGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'WhiteListType')) {
      throw new TypeError('parameter "WhiteListType" is required');
    }

    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'SrcUid')) {
      throw new TypeError('parameter "SrcUid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIdList')) {
      throw new TypeError('parameter "InstanceIdList" is required');
    }

    return this.request('CreateUidWhiteListGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} GroupIdList - GroupIdList. optional.
   * @param {String} SourceCode - SourceCode. optional.
   * @param {String} Lang - lang. optional.
   */
  deleteAccessWhiteListGroup(params = {}, options = {}) {
    return this.request('DeleteAccessWhiteListGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} CdnIp - CdnIp. required.
   * @param {Integer} ItemId - ItemId. required.
   */
  deleteCdnIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'CdnIp')) {
      throw new TypeError('parameter "CdnIp" is required');
    }

    if (!hasOwnProperty(params, 'ItemId')) {
      throw new TypeError('parameter "ItemId" is required');
    }

    return this.request('DeleteCdnIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - SourceCode. optional.
   * @param {String} CdnUidList - CdnUidList. required.
   */
  deleteCdnSubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CdnUidList')) {
      throw new TypeError('parameter "CdnUidList" is required');
    }

    return this.request('DeleteCdnSubscription', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} DisableWhitelist - DisableWhitelist. optional.
   * @param {String} SourceCode - SourceCode. optional.
   * @param {String} Lang - lang. optional.
   */
  deleteConsoleAccessWhiteList(params = {}, options = {}) {
    return this.request('DeleteConsoleAccessWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} GroupIdList - GroupIdList. optional.
   * @param {String} SourceCode - SourceCode. optional.
   * @param {String} Lang - lang. optional.
   */
  deleteUidWhiteListGroup(params = {}, options = {}) {
    return this.request('DeleteUidWhiteListGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SrcIP - SrcIP. optional.
   * @param {String} DstIP - DstIP. optional.
   * @param {String} queryProduct - queryProduct. optional.
   * @param {String} SourceCode - SourceCode. optional.
   * @param {String} Lang - lang. optional.
   */
  deleteWhiteListConditional(params = {}, options = {}) {
    return this.request('DeleteWhiteListConditional', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SrcIP - SrcIP. optional.
   * @param {String} DstIP - DstIP. optional.
   * @param {String} queryProduct - queryProduct. optional.
   * @param {String} SourceCode - SourceCode. optional.
   * @param {String} Lang - lang. optional.
   */
  deleteWhiteListDbItemConditional(params = {}, options = {}) {
    return this.request('DeleteWhiteListDbItemConditional', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} Lang - lang. optional.
   */
  describeAccessWhiteListEipList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeAccessWhiteListEipList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Status - Status. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Integer} CurrentPage - CurrentPage. optional.
   * @param {Integer} WhiteListType - WhiteListType. optional.
   * @param {String} queryProduct - queryProduct. optional.
   * @param {String} DstIP - DstIP. optional.
   * @param {String} SrcIP - SrcIP. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAccessWhiteListGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeAccessWhiteListGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} Lang - lang. optional.
   */
  describeAccessWhiteListSlbList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeAccessWhiteListSlbList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} Lang - lang. optional.
   */
  describeAccessWhitelistEcsList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeAccessWhitelistEcsList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} Lang - lang. optional.
   */
  describeCdnCertify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeCdnCertify', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Integer} CurrentPage - CurrentPage. optional.
   * @param {Integer} WlState - WlState. optional.
   * @param {String} SrcIP - SrcIP. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCdnIpList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeCdnIpList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Integer} CurrentPage - CurrentPage. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VendorName - VendorName. optional.
   * @param {Integer} SubscriptionState - SubscriptionState. optional.
   */
  describeCdnSubscription(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeCdnSubscription', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Integer} CurrentPage - CurrentPage. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCdnVendor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeCdnVendor', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Status - Status. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Integer} CurrentPage - CurrentPage. optional.
   * @param {Integer} WhiteListType - WhiteListType. optional.
   * @param {String} queryProduct - queryProduct. optional.
   * @param {String} DstIP - DstIP. optional.
   * @param {String} SrcIP - SrcIP. optional.
   * @param {String} Lang - lang. optional.
   */
  describeConsoleAccessWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeConsoleAccessWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} SrcIP - SrcIP. optional.
   * @param {String} PunishStatus - PunishStatus. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {Integer} currentPage - currentPage. optional.
   * @param {String} Lang - lang. optional.
   */
  describeCpmcPunishList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeCpmcPunishList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} sourceCode - sourceCode. required.
   * @param {Long} srcUid - srcUid. required.
   */
  describeDdosDefenseInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'sourceCode')) {
      throw new TypeError('parameter "sourceCode" is required');
    }

    if (!hasOwnProperty(params, 'srcUid')) {
      throw new TypeError('parameter "srcUid" is required');
    }

    return this.request('DescribeDdosDefenseInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Integer} CurrentPage - CurrentPage. optional.
   * @param {String} Lang - lang. optional.
   */
  describeEcsListPage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeEcsListPage', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} sourceCode - sourceCode. required.
   * @param {String} phoneNum - phoneNum. required.
   */
  describePhoneInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'sourceCode')) {
      throw new TypeError('parameter "sourceCode" is required');
    }

    if (!hasOwnProperty(params, 'phoneNum')) {
      throw new TypeError('parameter "phoneNum" is required');
    }

    return this.request('DescribePhoneInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} sourceCode - sourceCode. required.
   * @param {Long} srcUid - srcUid. optional.
   * @param {String} SrcIP - SrcIP. optional.
   * @param {String} PunishStatus - PunishStatus. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {Integer} currentPage - currentPage. optional.
   * @param {String} Lang - lang. optional.
   */
  describePunishList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'sourceCode')) {
      throw new TypeError('parameter "sourceCode" is required');
    }

    return this.request('DescribePunishList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} SrcIP - SrcIP. required.
   * @param {String} DstIP - DstIP. required.
   * @param {String} Period - Period. required.
   * @param {String} Region - Region. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {Integer} currentPage - currentPage. optional.
   * @param {String} Lang - lang. optional.
   */
  describeResetRecordList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'SrcIP')) {
      throw new TypeError('parameter "SrcIP" is required');
    }

    if (!hasOwnProperty(params, 'DstIP')) {
      throw new TypeError('parameter "DstIP" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    return this.request('DescribeResetRecordList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} Lang - lang. optional.
   */
  describeResetRecordQueryCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeResetRecordQueryCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} sourceCode - sourceCode. required.
   * @param {Long} srcUid - srcUid. required.
   * @param {String} queryRegionId - regionId. optional.
   * @param {String} riskType - riskType. optional.
   * @param {String} riskDescribe - riskDescribe. optional.
   * @param {Integer} currentPage - currentPage. optional.
   * @param {Integer} pageSize - pageSize. optional.
   * @param {String} queryProduct - product. optional.
   * @param {String} status - status. optional.
   */
  describeRiskListDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'sourceCode')) {
      throw new TypeError('parameter "sourceCode" is required');
    }

    if (!hasOwnProperty(params, 'srcUid')) {
      throw new TypeError('parameter "srcUid" is required');
    }

    return this.request('DescribeRiskListDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Peroid - Peroid. optional.
   * @param {String} SourceCode - SourceCode. optional.
   * @param {String} QueryProduct - Product. optional.
   * @param {String} QueryRegionId - RegionId. optional.
   */
  describeRiskTrend(params = {}, options = {}) {
    return this.request('DescribeRiskTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} TargetIp - TargetIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeSpecialEcs(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeSpecialEcs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {String} Lang - lang. optional.
   */
  describeUidGcLevel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeUidGcLevel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Status - Status. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} PageSize - PageSize. optional.
   * @param {Integer} CurrentPage - CurrentPage. optional.
   * @param {Integer} WhiteListType - WhiteListType. optional.
   * @param {String} DstIP - DstIP. optional.
   * @param {String} SrcUid - SrcUid. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUidWhiteListGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeUidWhiteListGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} WhiteListType - WhiteListType. required.
   * @param {String} ProductName - ProductName. required.
   * @param {String} SrcIP - SrcIP. required.
   * @param {Integer} AutoConfig - AutoConfig. required.
   * @param {String} Lang - lang. optional.
   */
  modifyAccessWhiteListAutoShare(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'WhiteListType')) {
      throw new TypeError('parameter "WhiteListType" is required');
    }

    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'SrcIP')) {
      throw new TypeError('parameter "SrcIP" is required');
    }

    if (!hasOwnProperty(params, 'AutoConfig')) {
      throw new TypeError('parameter "AutoConfig" is required');
    }

    return this.request('ModifyAccessWhiteListAutoShare', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourceCode - SourceCode. required.
   * @param {Integer} WhiteListType - WhiteListType. required.
   * @param {String} ProductName - ProductName. required.
   * @param {String} SrcUid - SrcUid. required.
   * @param {Integer} AutoConfig - AutoConfig. required.
   * @param {String} Lang - lang. optional.
   */
  modifyUidWhiteListAutoShare(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'WhiteListType')) {
      throw new TypeError('parameter "WhiteListType" is required');
    }

    if (!hasOwnProperty(params, 'ProductName')) {
      throw new TypeError('parameter "ProductName" is required');
    }

    if (!hasOwnProperty(params, 'SrcUid')) {
      throw new TypeError('parameter "SrcUid" is required');
    }

    if (!hasOwnProperty(params, 'AutoConfig')) {
      throw new TypeError('parameter "AutoConfig" is required');
    }

    return this.request('ModifyUidWhiteListAutoShare', params, options);
  }

}

module.exports = Client;
