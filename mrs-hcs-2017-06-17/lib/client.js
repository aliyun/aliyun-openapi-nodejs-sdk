
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-06-17';
    super(config);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   */
  activateGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('ActivateGateway', params, options);
  }

  /**
   */
  assumeRole(params = {}, options = {}) {
    return this.request('AssumeRole', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} EndPoint - endPoint. required.
   */
  bindGatewayBucket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'EndPoint')) {
      throw new TypeError('parameter "EndPoint" is required');
    }

    return this.request('BindGatewayBucket', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} GatewayIp - gatewayIp. required.
   * @param {String} InnerIp - innerIp. optional.
   * @param {String} NetworkType - networkType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   */
  connectGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'GatewayIp')) {
      throw new TypeError('parameter "GatewayIp" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    return this.request('ConnectGateway', params, options);
  }

  /**
   * @param {String} GatewayName - gatewayName. required.
   * @param {String} GatewayModel - gatewayModel. required.
   * @param {String} GatewayForm - gatewayForm. required.
   * @param {String} GatewayComments - gatewayComments. optional.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {String} EcsInstanceRegion - ecsInstanceRegion. required.
   * @param {String} GatewayLocation - location. required.
   * @param {String} GatewayIp - gatewayIp. required.
   * @param {String} NetworkType - networkType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} EndPoint - endPoint. required.
   */
  createGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayName')) {
      throw new TypeError('parameter "GatewayName" is required');
    }

    if (!hasOwnProperty(params, 'GatewayModel')) {
      throw new TypeError('parameter "GatewayModel" is required');
    }

    if (!hasOwnProperty(params, 'GatewayForm')) {
      throw new TypeError('parameter "GatewayForm" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceRegion')) {
      throw new TypeError('parameter "EcsInstanceRegion" is required');
    }

    if (!hasOwnProperty(params, 'GatewayLocation')) {
      throw new TypeError('parameter "GatewayLocation" is required');
    }

    if (!hasOwnProperty(params, 'GatewayIp')) {
      throw new TypeError('parameter "GatewayIp" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'EndPoint')) {
      throw new TypeError('parameter "EndPoint" is required');
    }

    return this.request('CreateGateway', params, options);
  }

  /**
   * @param {String} GatewayName - gatewayName. required.
   * @param {String} GatewayModel - gatewayModel. required.
   * @param {String} GatewayForm - gatewayForm. required.
   * @param {String} GatewayComments - gatewayComments. optional.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {String} EcsInstanceRegion - ecsInstanceRegion. required.
   * @param {String} GatewayLocation - location. required.
   * @param {String} GatewayIp - gatewayIp. required.
   * @param {String} InnerIp - innerIp. optional.
   * @param {String} NetworkType - networkType. required.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} ResourceId - resourceId. required.
   * @param {String} Bucket - bucket. required.
   * @param {String} EndPoint - endPoint. required.
   */
  createGatewayJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayName')) {
      throw new TypeError('parameter "GatewayName" is required');
    }

    if (!hasOwnProperty(params, 'GatewayModel')) {
      throw new TypeError('parameter "GatewayModel" is required');
    }

    if (!hasOwnProperty(params, 'GatewayForm')) {
      throw new TypeError('parameter "GatewayForm" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceRegion')) {
      throw new TypeError('parameter "EcsInstanceRegion" is required');
    }

    if (!hasOwnProperty(params, 'GatewayLocation')) {
      throw new TypeError('parameter "GatewayLocation" is required');
    }

    if (!hasOwnProperty(params, 'GatewayIp')) {
      throw new TypeError('parameter "GatewayIp" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'ResourceId')) {
      throw new TypeError('parameter "ResourceId" is required');
    }

    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'EndPoint')) {
      throw new TypeError('parameter "EndPoint" is required');
    }

    return this.request('CreateGatewayJob', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   */
  deregisterGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('DeregisterGateway', params, options);
  }

  /**
   * @param {String} ImageKey - imageKey. required.
   */
  describeGatewayImageUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageKey')) {
      throw new TypeError('parameter "ImageKey" is required');
    }

    return this.request('DescribeGatewayImageUrl', params, options);
  }

  /**
   */
  describeGatewayImages(params = {}, options = {}) {
    return this.request('DescribeGatewayImages', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   */
  describeGatewayServices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('DescribeGatewayServices', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} GatewayName - gatewayName. optional.
   * @param {String} GatewayModel - gatewayModel. optional.
   * @param {String} GatewayForm - gatewayForm. optional.
   * @param {String} GatewayLocation - gatewayLocation. optional.
   * @param {String} NetworkType - networkType. optional.
   * @param {String} EcsInstanceId - ecsInstanceId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  describeGateways(params = {}, options = {}) {
    return this.request('DescribeGateways', params, options);
  }

  /**
   * @param {String} JobId - jobId. optional.
   */
  describeJob(params = {}, options = {}) {
    return this.request('DescribeJob', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {Boolean} NfsStatus - nfsStatus. required.
   * @param {Boolean} CifsStatus - cifsStatus. required.
   */
  modifyGatewayServices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'NfsStatus')) {
      throw new TypeError('parameter "NfsStatus" is required');
    }

    if (!hasOwnProperty(params, 'CifsStatus')) {
      throw new TypeError('parameter "CifsStatus" is required');
    }

    return this.request('ModifyGatewayServices', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {String} EcsInstanceRegion - ecsInstanceRegion. required.
   * @param {String} GatewayLocation - location. required.
   * @param {String} GatewayModel - gatewayModel. required.
   * @param {String} ProvisionedInstance - provisionedInstance. optional.
   */
  provisionGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceRegion')) {
      throw new TypeError('parameter "EcsInstanceRegion" is required');
    }

    if (!hasOwnProperty(params, 'GatewayLocation')) {
      throw new TypeError('parameter "GatewayLocation" is required');
    }

    if (!hasOwnProperty(params, 'GatewayModel')) {
      throw new TypeError('parameter "GatewayModel" is required');
    }

    return this.request('ProvisionGateway', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   * @param {String} EcsInstanceId - ecsInstanceId. required.
   * @param {String} EcsInstanceRegion - ecsInstanceRegion. required.
   * @param {String} GatewayLocation - location. required.
   * @param {String} GatewayModel - gatewayModel. required.
   */
  provisionGatewayJob(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EcsInstanceRegion')) {
      throw new TypeError('parameter "EcsInstanceRegion" is required');
    }

    if (!hasOwnProperty(params, 'GatewayLocation')) {
      throw new TypeError('parameter "GatewayLocation" is required');
    }

    if (!hasOwnProperty(params, 'GatewayModel')) {
      throw new TypeError('parameter "GatewayModel" is required');
    }

    return this.request('ProvisionGatewayJob', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} GatewayForm - gatewayForm. required.
   * @param {String} GatewayName - gatewayName. required.
   * @param {String} GatewayComments - gatewayComments. optional.
   */
  registerGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayForm')) {
      throw new TypeError('parameter "GatewayForm" is required');
    }

    if (!hasOwnProperty(params, 'GatewayName')) {
      throw new TypeError('parameter "GatewayName" is required');
    }

    return this.request('RegisterGateway', params, options);
  }

  /**
   * @param {String} GatewayId - gatewayId. required.
   */
  validateGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GatewayId')) {
      throw new TypeError('parameter "GatewayId" is required');
    }

    return this.request('ValidateGateway', params, options);
  }

}

module.exports = Client;
