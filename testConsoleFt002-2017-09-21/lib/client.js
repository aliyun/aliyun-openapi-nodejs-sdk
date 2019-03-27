
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-21';
    super(config);
  }

  /**
   * @param {String} RequestId - requiredValue. optional.
   * @param {String} RequestId - stringValue. optional.
   * @param {String} SwitchValue - switchValue. optional.
   * @param {String} RequestId - defaultValue. optional.
   */
  apiDefineTest(params = {}, options = {}) {
    return this.request('ApiDefineTest', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RegionId - regionNo. required.
   * @param {String} VpcId - vpcInstanceId. optional.
   * @param {String} VSwitchId - vswInstanceId. optional.
   * @param {String} ZoneId - izNo. optional.
   * @param {String} InstanceNetworkType - ecsNetworkType. optional.
   * @param {String} SecurityGroupId - groupNo. optional.
   * @param {String} InstanceIds - ecsInstanceIds. optional.
   * @param {Integer} PageNumber - pageNo. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} InnerIpAddresses - ecsInnerIps. optional.
   * @param {String} PrivateIpAddresses - ecsPrivateIps. optional.
   * @param {String} PublicIpAddresses - ecsPublicIps. optional.
   * @param {String} EipAddresses - eipAddresses. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} InternetChargeType - internetChargeType. optional.
   * @param {String} InstanceName - instanceName. optional.
   * @param {String} ImageId - imageId. optional.
   * @param {String} Status - status. optional.
   * @param {String} LockReason - lockReason. optional.
   * @param {Boolean} DeviceAvailable - deviceAvailable. optional.
   * @param {Boolean} IoOptimized - ioOptimized. optional.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} InstanceTypeFamily - instanceTypeFamily. optional.
   * @param {String} KeyPairName - keyPairName. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} HpcClusterId - hpcClusterId. optional.
   * @param {String} RdmaIpAddresses - ecsRdmaIps. optional.
   * @param {Boolean} DryRun - dryRun. optional.
   * @param {Filter} Filter - undefined. optional.
   * @param {Tag} Tag - undefined. optional.
   */
  describeInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeInstances', params, options);
  }

  /**
   * @param {String} RequestId - requiredValue. optional.
   * @param {String} RequestId - stringValue. optional.
   * @param {String} SwitchValue - switchValue. optional.
   * @param {String} RequestId - defaultValue. optional.
   */
  httpsTest(params = {}, options = {}) {
    return this.request('HttpsTest', params, options);
  }

  /**
   * @param {String} RequestId - requiredValue. optional.
   * @param {String} RequestId - stringValue. optional.
   * @param {String} SwitchValue - switchValue. optional.
   * @param {String} RequestId - defaultValue. optional.
   */
  httpsTestApi(params = {}, options = {}) {
    return this.request('HttpsTestApi', params, options);
  }

  /**
   * @param {String} RequestId - requiredValue. optional.
   * @param {String} RequestId - stringValue. optional.
   * @param {String} SwitchValue - switchValue. optional.
   * @param {String} RequestId - defaultValue. optional.
   */
  testWc001(params = {}, options = {}) {
    return this.request('TestWc001', params, options);
  }

}

module.exports = Client;
