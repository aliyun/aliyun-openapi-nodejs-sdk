
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-02';
    super(config);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StorageId - storageId. required.
   */
  addCgsInstanceStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    return this.request('AddCgsInstanceStorage', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} data - data. required.
   */
  completeCommodity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteCommodity', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} data - data. required.
   */
  completeOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CompleteOrderParam', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   */
  createCgsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateCgsInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   */
  createCgsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('CreateCgsService', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} ImageName - imageName. required.
   */
  createGwsImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'ImageName')) {
      throw new TypeError('parameter "ImageName" is required');
    }

    return this.request('CreateGwsImage', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} data - data. required.
   */
  cssProduce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('CssProduce', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  deleteCgsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DeleteCgsInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   */
  deleteCgsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DeleteCgsService', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} SnapId - snapId. required.
   */
  deleteGwsImage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SnapId')) {
      throw new TypeError('parameter "SnapId" is required');
    }

    return this.request('DeleteGwsImage', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  describeCgsInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCgsInstances', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   */
  describeCgsService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeCgsService', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  describeGrantedCgsInstances(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeGrantedCgsInstances', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ImageType - imageType. required.
   */
  describeGwsBuyImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    return this.request('DescribeGwsBuyImages', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} ImageType - imageType. required.
   * @param {String} ImageId - imageId. required.
   */
  describeGwsImageSoft(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ImageType')) {
      throw new TypeError('parameter "ImageType" is required');
    }

    if (!hasOwnProperty(params, 'ImageId')) {
      throw new TypeError('parameter "ImageId" is required');
    }

    return this.request('DescribeGwsImageSoft', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   */
  describeGwsImages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeGwsImages', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   */
  describeImportedNasFileSystems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeImportedNasFileSystems', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  describeInstanceNasBindings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('DescribeInstanceNasBindings', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   */
  describeRegions(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeRegions', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   */
  describeUnImportedNasFileSystems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeUnImportedNasFileSystems', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   */
  describeUserAcls(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeUserAcls', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  getCgsInstanceIca(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('GetCgsInstanceIca', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} data - data. required.
   */
  payOrderCallback(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('PayOrderCallback', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  rebootCgsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('RebootCgsInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} StorageId - storageId. required.
   */
  removeCgsInstanceStorage(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'StorageId')) {
      throw new TypeError('parameter "StorageId" is required');
    }

    return this.request('RemoveCgsInstanceStorage', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} FileSystemId - fileSystemId. required.
   */
  removeNasFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('RemoveNasFileSystem', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Name - name. required.
   */
  setCgsInstanceName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('SetCgsInstanceName', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} BindUserName - userName. required.
   * @param {Long} BindUserUid - userUid. required.
   */
  setCgsInstanceUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BindUserName')) {
      throw new TypeError('parameter "BindUserName" is required');
    }

    if (!hasOwnProperty(params, 'BindUserUid')) {
      throw new TypeError('parameter "BindUserUid" is required');
    }

    return this.request('SetCgsInstanceUser', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} SnapId - snapId. required.
   * @param {String} ImageName - imageName. required.
   */
  setGwsImageName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SnapId')) {
      throw new TypeError('parameter "SnapId" is required');
    }

    if (!hasOwnProperty(params, 'ImageName')) {
      throw new TypeError('parameter "ImageName" is required');
    }

    return this.request('SetGwsImageName', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} Operation - operation. required.
   * @param {String} FileSystemIds - fileSystemIds. required.
   */
  setInstanceNasBindings(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemIds')) {
      throw new TypeError('parameter "FileSystemIds" is required');
    }

    return this.request('SetInstanceNasBindings', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  startCgsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('StartCgsInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} InstanceId - instanceId. required.
   */
  stopCgsInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    return this.request('StopCgsInstance', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} data - data. required.
   */
  verifyOrderParam(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'data')) {
      throw new TypeError('parameter "data" is required');
    }

    return this.request('VerifyOrderParam', params, options);
  }

  /**
   * @param {String} RegionId - regionNo. required.
   * @param {String} AccessKeyId - appKey. optional.
   * @param {String} FileSystemId - fileSystemId. required.
   */
  importNasFileSystem(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'FileSystemId')) {
      throw new TypeError('parameter "FileSystemId" is required');
    }

    return this.request('importNasFileSystem', params, options);
  }

}

module.exports = Client;
