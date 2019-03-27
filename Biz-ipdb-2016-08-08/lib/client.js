
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-08-08';
    super(config);
  }

  /**
   * @param {String} Value - value. required.
   * @param {String} PairValue - destValue. optional.
   * @param {Integer} ActionTag - actionTag. optional.
   * @param {String} Description - description. optional.
   */
  addIpPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('AddIpPolicy', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. required.
   * @param {String} LocationNo - no. required.
   * @param {String} LocationType - nodeType. required.
   * @param {String} Key - key. required.
   * @param {String} Value - value. required.
   */
  addLocationAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizLine')) {
      throw new TypeError('parameter "BizLine" is required');
    }

    if (!hasOwnProperty(params, 'LocationNo')) {
      throw new TypeError('parameter "LocationNo" is required');
    }

    if (!hasOwnProperty(params, 'LocationType')) {
      throw new TypeError('parameter "LocationType" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('AddLocationAttribute', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. required.
   * @param {String} IpType - ipType. optional.
   * @param {String} Segment - segment. required.
   * @param {String} LocationNo - locationNo. optional.
   * @param {String} LocationType - locationType. optional.
   * @param {String} Submitter - submitter. required.
   */
  allocateIpSegment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizLine')) {
      throw new TypeError('parameter "BizLine" is required');
    }

    if (!hasOwnProperty(params, 'Segment')) {
      throw new TypeError('parameter "Segment" is required');
    }

    if (!hasOwnProperty(params, 'Submitter')) {
      throw new TypeError('parameter "Submitter" is required');
    }

    return this.request('AllocateIpSegment', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. required.
   * @param {String} CnName - cnName. required.
   * @param {String} EnName - enName. required.
   * @param {Boolean} Partner - partner. required.
   */
  createBizLine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizLine')) {
      throw new TypeError('parameter "BizLine" is required');
    }

    if (!hasOwnProperty(params, 'CnName')) {
      throw new TypeError('parameter "CnName" is required');
    }

    if (!hasOwnProperty(params, 'EnName')) {
      throw new TypeError('parameter "EnName" is required');
    }

    if (!hasOwnProperty(params, 'Partner')) {
      throw new TypeError('parameter "Partner" is required');
    }

    return this.request('CreateBizLine', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   * @param {String} BizLine - bizLine. required.
   * @param {String} LocationId - no. required.
   * @param {String} IpType - type. required.
   * @param {String} Value - value. required.
   * @param {String} Cluster - cluster. required.
   * @param {String} Pod - pod. optional.
   * @param {String} Vlan - vlan. optional.
   * @param {String} Description - description. optional.
   * @param {String} House - house. optional.
   * @param {Boolean} ThirdParty - thirdParty. required.
   * @param {Boolean} Force - force. optional.
   */
  createIpSegment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizLine')) {
      throw new TypeError('parameter "BizLine" is required');
    }

    if (!hasOwnProperty(params, 'LocationId')) {
      throw new TypeError('parameter "LocationId" is required');
    }

    if (!hasOwnProperty(params, 'IpType')) {
      throw new TypeError('parameter "IpType" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'ThirdParty')) {
      throw new TypeError('parameter "ThirdParty" is required');
    }

    return this.request('CreateIpSegment', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. required.
   * @param {String} IpType - ipType. required.
   * @param {String} NodeType - nodeType. required.
   * @param {String} NetIpType - netIpType. required.
   * @param {String} SysOwner - sysOwner. required.
   * @param {Boolean} IpPublic - ipPublic. required.
   * @param {Boolean} CheckPod - checkPod. required.
   * @param {String} Description - description. optional.
   */
  createIpType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizLine')) {
      throw new TypeError('parameter "BizLine" is required');
    }

    if (!hasOwnProperty(params, 'IpType')) {
      throw new TypeError('parameter "IpType" is required');
    }

    if (!hasOwnProperty(params, 'NodeType')) {
      throw new TypeError('parameter "NodeType" is required');
    }

    if (!hasOwnProperty(params, 'NetIpType')) {
      throw new TypeError('parameter "NetIpType" is required');
    }

    if (!hasOwnProperty(params, 'SysOwner')) {
      throw new TypeError('parameter "SysOwner" is required');
    }

    if (!hasOwnProperty(params, 'IpPublic')) {
      throw new TypeError('parameter "IpPublic" is required');
    }

    if (!hasOwnProperty(params, 'CheckPod')) {
      throw new TypeError('parameter "CheckPod" is required');
    }

    return this.request('CreateIpType', params, options);
  }

  /**
   * @param {Long} PolicyId - policyId. required.
   */
  deleteIpPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PolicyId')) {
      throw new TypeError('parameter "PolicyId" is required');
    }

    return this.request('DeleteIpPolicy', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. optional.
   */
  describeBizLines(params = {}, options = {}) {
    return this.request('DescribeBizLines', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. required.
   * @param {String} NetworkScope - networkScope. optional.
   * @param {String} PageNumber - pageNumber. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} RegionNo - regionId. required.
   */
  describeIpSegments(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizLine')) {
      throw new TypeError('parameter "BizLine" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('DescribeIpSegments', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. optional.
   */
  describeIpTypes(params = {}, options = {}) {
    return this.request('DescribeIpTypes', params, options);
  }

  /**
   * @param {Long} LocationId - locationId. optional.
   */
  detailLocationAttribute(params = {}, options = {}) {
    return this.request('DetailLocationAttribute', params, options);
  }

  /**
   * @param {Long} LocationId - locationId. optional.
   * @param {String} LocationNo - no. optional.
   * @param {String} LocationType - nodeType. optional.
   * @param {String} BizLine - bizLine. optional.
   */
  detailNetCluster(params = {}, options = {}) {
    return this.request('DetailNetCluster', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. optional.
   * @param {String} LocationId - locationId. optional.
   * @param {String} LocationType - locationType. optional.
   */
  detailRouteType(params = {}, options = {}) {
    return this.request('DetailRouteType', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   */
  findIpAttribute(params = {}, options = {}) {
    return this.request('FindIpAttribute', params, options);
  }

  /**
   * @param {String} Ip - ip. optional.
   */
  findIpInfo(params = {}, options = {}) {
    return this.request('FindIpInfo', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. optional.
   */
  listLocationTree(params = {}, options = {}) {
    return this.request('ListLocationTree', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. required.
   * @param {String} LocationId - no. required.
   * @param {String} Cluster - cluster. required.
   * @param {String} IpType - ipType. required.
   * @param {String} Value - value. required.
   */
  mapIpSegment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizLine')) {
      throw new TypeError('parameter "BizLine" is required');
    }

    if (!hasOwnProperty(params, 'LocationId')) {
      throw new TypeError('parameter "LocationId" is required');
    }

    if (!hasOwnProperty(params, 'Cluster')) {
      throw new TypeError('parameter "Cluster" is required');
    }

    if (!hasOwnProperty(params, 'IpType')) {
      throw new TypeError('parameter "IpType" is required');
    }

    if (!hasOwnProperty(params, 'Value')) {
      throw new TypeError('parameter "Value" is required');
    }

    return this.request('MapIpSegment', params, options);
  }

  /**
   * @param {Boolean} ListAll - isAll. optional.
   */
  queryIpPolicy(params = {}, options = {}) {
    return this.request('QueryIpPolicy', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. optional.
   * @param {String} NodeName - nodeName. required.
   * @param {String} NodeType - nodeType. required.
   * @param {String} NetworkScope - networkScope. optional.
   * @param {String} PageNumber - pageNumber. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  queryIpSegmentByNodeType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'NodeName')) {
      throw new TypeError('parameter "NodeName" is required');
    }

    if (!hasOwnProperty(params, 'NodeType')) {
      throw new TypeError('parameter "NodeType" is required');
    }

    return this.request('QueryIpSegmentByNodeType', params, options);
  }

  /**
   * @param {String} BizLine - bizLine. optional.
   * @param {String} SysOwner - sysOwner. optional.
   * @param {String} Cluster - cluster. optional.
   * @param {String} Pod - pod. optional.
   * @param {String} Value - value. optional.
   * @param {Integer} Page - page. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryPreMappingIpSegments(params = {}, options = {}) {
    return this.request('QueryPreMappingIpSegments', params, options);
  }

}

module.exports = Client;
