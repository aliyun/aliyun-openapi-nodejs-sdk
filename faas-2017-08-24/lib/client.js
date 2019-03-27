
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-08-24';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} Description - description. optional.
   * @param {String} Bucket - bucket. required.
   * @param {String} Object - object. required.
   * @param {String} FpgaType - fpgaType. required.
   * @param {String} Name - name. optional.
   * @param {String} ShellUUID - shellUUID. required.
   * @param {String} Tags - tags. optional.
   * @param {String} RoleArn - roleArn. required.
   * @param {Boolean} Encrypted - encrypted. optional. default: false.
   * @param {String} KeyId - keyId. optional.
   * @param {String} Email - email. optional.
   */
  createFpgaImageTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Bucket')) {
      throw new TypeError('parameter "Bucket" is required');
    }

    if (!hasOwnProperty(params, 'Object')) {
      throw new TypeError('parameter "Object" is required');
    }

    if (!hasOwnProperty(params, 'FpgaType')) {
      throw new TypeError('parameter "FpgaType" is required');
    }

    if (!hasOwnProperty(params, 'ShellUUID')) {
      throw new TypeError('parameter "ShellUUID" is required');
    }

    if (!hasOwnProperty(params, 'RoleArn')) {
      throw new TypeError('parameter "RoleArn" is required');
    }

    options.method = 'POST';
    return this.request('CreateFpgaImageTask', params, options);
  }

  /**
   * @param {Long} callerUid - aliyunId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} FpgaImageUUID - fpgaImageUUID. required.
   */
  deleteFpgaImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerUid')) {
      throw new TypeError('parameter "callerUid" is required');
    }

    if (!hasOwnProperty(params, 'FpgaImageUUID')) {
      throw new TypeError('parameter "FpgaImageUUID" is required');
    }

    options.method = 'POST';
    return this.request('DeleteFpgaImage', params, options);
  }

  /**
   * @param {Long} callerUid - aliyunId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} FpgaImageUUID - fpgaImageUUID. required.
   * @param {String} ImageID - imageID. required.
   */
  deletePublishFpgaImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerUid')) {
      throw new TypeError('parameter "callerUid" is required');
    }

    if (!hasOwnProperty(params, 'FpgaImageUUID')) {
      throw new TypeError('parameter "FpgaImageUUID" is required');
    }

    if (!hasOwnProperty(params, 'ImageID')) {
      throw new TypeError('parameter "ImageID" is required');
    }

    options.method = 'POST';
    return this.request('DeletePublishFpgaImage', params, options);
  }

  /**
   * @param {Long} callerUid - aliyunId. required.
   * @param {String} RegionId - regionId. required.
   */
  describeFpgaImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerUid')) {
      throw new TypeError('parameter "callerUid" is required');
    }

    options.method = 'POST';
    return this.request('DescribeFpgaImages', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleArn - roleArn. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  describeFpgaInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('DescribeFpgaInstances', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} FpgaUUID - fpgaUUID. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} RoleArn - roleArn. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  describeLoadTaskStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FpgaUUID')) {
      throw new TypeError('parameter "FpgaUUID" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    options.method = 'POST';
    return this.request('DescribeLoadTaskStatus', params, options);
  }

  /**
   * @param {Long} callerUid - aliyunId. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} ImageID - imageID. required.
   */
  describePublishFpgaImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageID')) {
      throw new TypeError('parameter "ImageID" is required');
    }

    options.method = 'POST';
    return this.request('DescribePublishFpgaImages', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} FpgaUUID - fpgaUUID. required.
   * @param {String} FpgaType - fpgaType. required.
   * @param {String} FpgaImageUUID - fpgaImageUUID. required.
   * @param {String} FpgaImageType - fpgaImageType. required.
   * @param {String} ShellUUID - shellUUID. required.
   * @param {String} RoleArn - roleArn. optional.
   * @param {String} OwnerAlias - ownerAlias. optional. default: self.
   * @param {String} Object - object. optional.
   * @param {String} SecurityToken - securityToken. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  loadFpgaImageTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'FpgaUUID')) {
      throw new TypeError('parameter "FpgaUUID" is required');
    }

    if (!hasOwnProperty(params, 'FpgaType')) {
      throw new TypeError('parameter "FpgaType" is required');
    }

    if (!hasOwnProperty(params, 'FpgaImageUUID')) {
      throw new TypeError('parameter "FpgaImageUUID" is required');
    }

    if (!hasOwnProperty(params, 'FpgaImageType')) {
      throw new TypeError('parameter "FpgaImageType" is required');
    }

    if (!hasOwnProperty(params, 'ShellUUID')) {
      throw new TypeError('parameter "ShellUUID" is required');
    }

    options.method = 'POST';
    return this.request('LoadFpgaImageTask', params, options);
  }

  /**
   * @param {Long} callerUid - aliyunId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} FpgaImageUUID - fpgaImageUUID. required.
   * @param {String} ImageID - imageID. required.
   */
  publishFpgaImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerUid')) {
      throw new TypeError('parameter "callerUid" is required');
    }

    if (!hasOwnProperty(params, 'FpgaImageUUID')) {
      throw new TypeError('parameter "FpgaImageUUID" is required');
    }

    if (!hasOwnProperty(params, 'ImageID')) {
      throw new TypeError('parameter "ImageID" is required');
    }

    options.method = 'POST';
    return this.request('PublishFpgaImage', params, options);
  }

  /**
   * @param {String} RegionId - regionId. required.
   */
  pullCreateTask(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('PullCreateTask', params, options);
  }

  /**
   * @param {Long} callerUid - aliyunId. required.
   * @param {Long} OwnerId - ownerId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} FpgaImageObjectName - fpgaImageObjectName. required.
   * @param {String} FpgaImageUUID - fpgaImageUUID. required.
   * @param {String} State - state. required.
   */
  updateCreateTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerUid')) {
      throw new TypeError('parameter "callerUid" is required');
    }

    if (!hasOwnProperty(params, 'OwnerId')) {
      throw new TypeError('parameter "OwnerId" is required');
    }

    if (!hasOwnProperty(params, 'FpgaImageObjectName')) {
      throw new TypeError('parameter "FpgaImageObjectName" is required');
    }

    if (!hasOwnProperty(params, 'FpgaImageUUID')) {
      throw new TypeError('parameter "FpgaImageUUID" is required');
    }

    if (!hasOwnProperty(params, 'State')) {
      throw new TypeError('parameter "State" is required');
    }

    options.method = 'POST';
    return this.request('UpdateCreateTask', params, options);
  }

  /**
   * @param {Long} callerUid - aliyunId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} FpgaImageUUID - fpgaImageUUID. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Tags - tags. optional.
   */
  updateImageAttribute(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerUid')) {
      throw new TypeError('parameter "callerUid" is required');
    }

    if (!hasOwnProperty(params, 'FpgaImageUUID')) {
      throw new TypeError('parameter "FpgaImageUUID" is required');
    }

    options.method = 'POST';
    return this.request('UpdateImageAttribute', params, options);
  }

}

module.exports = Client;
