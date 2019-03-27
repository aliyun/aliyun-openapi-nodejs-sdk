
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-18';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} Ips - ips. required.
   */
  createWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    return this.request('CreateWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {RepeatList} Ips - ips. required.
   */
  deleteWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Ips')) {
      throw new TypeError('parameter "Ips" is required');
    }

    return this.request('DeleteWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} Ip - ip. required.
   */
  describeBgpPackByIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'Ip')) {
      throw new TypeError('parameter "Ip" is required');
    }

    return this.request('DescribeBgpPackByIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   */
  describeBgpPackElasticThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    return this.request('DescribeBgpPackElasticThreshold', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Long} BegTime - begTime. required.
   */
  describeCap(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BegTime')) {
      throw new TypeError('parameter "BegTime" is required');
    }

    return this.request('DescribeCap', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   */
  describeCreditInfo(params = {}, options = {}) {
    return this.request('DescribeCreditInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   */
  describeDdosCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('DescribeDdosCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   */
  describeDdosCredit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    return this.request('DescribeDdosCredit', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {Integer} Days - days. optional. default: 30.
   */
  describeDdosCreditHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    return this.request('DescribeDdosCreditHistory', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeDdosEventList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeDdosEventList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} DdosType - ddosType. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {RepeatList} InstanceIds - instanceIds. required.
   */
  describeDdosThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'DdosType')) {
      throw new TypeError('parameter "DdosType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceIds')) {
      throw new TypeError('parameter "InstanceIds" is required');
    }

    return this.request('DescribeDdosThreshold', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Days - day. optional. default: 7.
   */
  describeFlexibleProtectionFlow(params = {}, options = {}) {
    return this.request('DescribeFlexibleProtectionFlow', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Days - days. optional. default: 1.
   */
  describeFlowgraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeFlowgraph', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} DdosStatus - ddosStatus. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} InstanceIp - instanceIp. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 20.
   */
  describeInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    return this.request('DescribeInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   */
  describeRegionDdosThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    return this.request('DescribeRegionDdosThreshold', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeRegions(params = {}, options = {}) {
    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeTrafficInfo(params = {}, options = {}) {
    return this.request('DescribeTrafficInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InstanceId - instanceId. required.
   */
  describeWhiteList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeWhiteList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InstanceId - instanceId. required.
   */
  modifyDdosStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyDdosStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DdosRegionId - regionId. required.
   * @param {String} InstanceType - instanceType. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {Integer} Bps - bps. optional.
   * @param {Integer} Pps - pps. optional.
   * @param {Boolean} IsAuto - isAuto. optional.
   */
  modifyDefenseThreshold(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DdosRegionId')) {
      throw new TypeError('parameter "DdosRegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('ModifyDefenseThreshold', params, options);
  }

  /**
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryAliuidDdosDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryAliuidDdosDetail', params, options);
  }

  /**
   * @param {String} StartTime - startTime. required.
   * @param {String} EndTime - endTime. required.
   */
  queryDdosEventCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('QueryDdosEventCount', params, options);
  }

}

module.exports = Client;
