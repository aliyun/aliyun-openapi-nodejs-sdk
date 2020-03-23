
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-12-30';
    super(config);
  }

  /**
   * @param {String} DbName - dbName. required.
   * @param {String} FaceId - faceId. required.
   * @param {String} ImageUrl - imageUrl. required.
   * @param {String} EntityId - entityId. required.
   * @param {String} ExtraData - extraData. optional.
   */
  addFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
    }

    if (!hasOwnProperty(params, 'ImageUrl')) {
      throw new TypeError('parameter "ImageUrl" is required');
    }

    if (!hasOwnProperty(params, 'EntityId')) {
      throw new TypeError('parameter "EntityId" is required');
    }

    return this.request('AddFace', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  bodyPosture(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('BodyPosture', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURLA - imageUrlA. required.
   * @param {String} ImageURLB - imageUrlB. required.
   */
  compareFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURLA')) {
      throw new TypeError('parameter "ImageURLA" is required');
    }

    if (!hasOwnProperty(params, 'ImageURLB')) {
      throw new TypeError('parameter "ImageURLB" is required');
    }

    options.method = 'POST';
    return this.request('CompareFace', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  createFaceDb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateFaceDb', params, options);
  }

  /**
   * @param {String} DbName - dbName. required.
   * @param {String} FaceId - faceId. required.
   */
  deleteFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'FaceId')) {
      throw new TypeError('parameter "FaceId" is required');
    }

    return this.request('DeleteFace', params, options);
  }

  /**
   * @param {String} Name - name. required.
   */
  deleteFaceDb(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('DeleteFaceDb', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  detectBodyCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('DetectBodyCount', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  detectFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('DetectFace', params, options);
  }

  /**
   * @param {RepeatList} Tasks - tasks. required.
   */
  detectLivingFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tasks')) {
      throw new TypeError('parameter "Tasks" is required');
    }

    options.method = 'POST';
    return this.request('DetectLivingFace', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  detectMask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('DetectMask', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  detectPedestrian(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('DetectPedestrian', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  enhanceFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('EnhanceFace', params, options);
  }

  /**
   * @param {String} ImageUrl - imageUrl. required.
   */
  extractFaceFeature(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageUrl')) {
      throw new TypeError('parameter "ImageUrl" is required');
    }

    return this.request('ExtractFaceFeature', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   * @param {Float} Sharp - sharp. required.
   * @param {Float} Smooth - smooth. required.
   * @param {Float} White - white. required.
   */
  faceBeauty(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'Sharp')) {
      throw new TypeError('parameter "Sharp" is required');
    }

    if (!hasOwnProperty(params, 'Smooth')) {
      throw new TypeError('parameter "Smooth" is required');
    }

    if (!hasOwnProperty(params, 'White')) {
      throw new TypeError('parameter "White" is required');
    }

    options.method = 'POST';
    return this.request('FaceBeauty', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {Float} Strength - strength. required.
   */
  faceFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'Strength')) {
      throw new TypeError('parameter "Strength" is required');
    }

    options.method = 'POST';
    return this.request('FaceFilter', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   * @param {String} MakeupType - makeupType. required.
   * @param {String} ResourceType - resourceType. required.
   * @param {Float} Strength - strength. required.
   */
  faceMakeup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'MakeupType')) {
      throw new TypeError('parameter "MakeupType" is required');
    }

    if (!hasOwnProperty(params, 'ResourceType')) {
      throw new TypeError('parameter "ResourceType" is required');
    }

    if (!hasOwnProperty(params, 'Strength')) {
      throw new TypeError('parameter "Strength" is required');
    }

    options.method = 'POST';
    return this.request('FaceMakeup', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   * @param {Integer} ShapeType - shapeType. required.
   * @param {Float} Strength - strength. required.
   */
  faceTidyup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    if (!hasOwnProperty(params, 'ShapeType')) {
      throw new TypeError('parameter "ShapeType" is required');
    }

    if (!hasOwnProperty(params, 'Strength')) {
      throw new TypeError('parameter "Strength" is required');
    }

    options.method = 'POST';
    return this.request('FaceTidyup', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  handPosture(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('HandPosture', params, options);
  }

  /**
   */
  listFaceDbs(params = {}, options = {}) {
    return this.request('ListFaceDbs', params, options);
  }

  /**
   * @param {String} DbName - dbName. required.
   * @param {String} FromScrollId - fromScrollId. optional.
   */
  listFaces(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    return this.request('ListFaces', params, options);
  }

  /**
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeExpression(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeExpression', params, options);
  }

  /**
   * @param {Integer} ImageType - imageType. optional. default: 0.
   * @param {String} ImageURL - imageUrl. required.
   */
  recognizeFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ImageURL')) {
      throw new TypeError('parameter "ImageURL" is required');
    }

    options.method = 'POST';
    return this.request('RecognizeFace', params, options);
  }

  /**
   * @param {RepeatList} Task - tasks. required.
   */
  recognizePublicFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Task')) {
      throw new TypeError('parameter "Task" is required');
    }

    options.method = 'POST';
    return this.request('RecognizePublicFace', params, options);
  }

  /**
   * @param {String} DbName - dbName. required.
   * @param {String} ImageUrl - imageUrl. required.
   * @param {Integer} Limit - limit. required.
   */
  searchFace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbName')) {
      throw new TypeError('parameter "DbName" is required');
    }

    if (!hasOwnProperty(params, 'ImageUrl')) {
      throw new TypeError('parameter "ImageUrl" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('SearchFace', params, options);
  }

}

module.exports = Client;
