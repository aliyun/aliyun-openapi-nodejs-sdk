
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-20';
    super(config);
  }

  /**
   * @param {String} ModelId - id. required.
   * @param {String} DataId - data_id. required.
   * @param {String} RegionId - RegionId. required.
   */
  addDataToAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    options.method = 'POST';
    return this.request('AddDataToAsrLmModel', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} Url - url. required.
   * @param {String} RegionId - RegionId. required.
   */
  createAsrLmData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Url')) {
      throw new TypeError('parameter "Url" is required');
    }

    options.method = 'POST';
    return this.request('CreateAsrLmData', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} BaseId - base_id. required.
   * @param {String} RegionId - RegionId. required.
   */
  createAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'BaseId')) {
      throw new TypeError('parameter "BaseId" is required');
    }

    options.method = 'POST';
    return this.request('CreateAsrLmModel', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} WordWeights - word_weights. required.
   * @param {String} RegionId - RegionId. required.
   */
  createAsrVocab(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'WordWeights')) {
      throw new TypeError('parameter "WordWeights" is required');
    }

    options.method = 'POST';
    return this.request('CreateAsrVocab', params, options);
  }

  /**
   * @param {String} DataId - data_id. required.
   * @param {Boolean} Force - force. optional.
   * @param {String} RegionId - RegionId. optional.
   */
  deleteAsrLmData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteAsrLmData', params, options);
  }

  /**
   * @param {String} ModelId - id. required.
   * @param {Boolean} Force - force. optional.
   * @param {String} RegionId - RegionId. required.
   */
  deleteAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteAsrLmModel', params, options);
  }

  /**
   * @param {String} Id - id. optional.
   * @param {String} RegionId - RegionId. required.
   */
  deleteAsrVocab(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('DeleteAsrVocab', params, options);
  }

  /**
   * @param {String} ModelId - id. required.
   * @param {String} RegionId - RegionId. required.
   */
  deployAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    options.method = 'POST';
    return this.request('DeployAsrLmModel', params, options);
  }

  /**
   * @param {String} DataId - data_id. required.
   * @param {String} RegionId - RegionId. required.
   */
  getAsrLmData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    options.method = 'POST';
    return this.request('GetAsrLmData', params, options);
  }

  /**
   * @param {String} ModelId - id. required.
   * @param {String} RegionId - RegionId. required.
   */
  getAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    options.method = 'POST';
    return this.request('GetAsrLmModel', params, options);
  }

  /**
   * @param {String} Id - id. optional.
   * @param {String} RegionId - RegionId. required.
   */
  getAsrVocab(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('GetAsrVocab', params, options);
  }

  /**
   * @param {Integer} PageNumber - page_number. optional.
   * @param {Integer} PageSize - page_size. optional.
   * @param {String} ModelId - model_id. optional.
   * @param {String} RegionId - RegionId. required.
   */
  listAsrLmData(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ListAsrLmData', params, options);
  }

  /**
   * @param {Integer} PageNumber - page_number. optional.
   * @param {Integer} PageSize - page_size. optional.
   * @param {String} DataId - data_id. optional.
   * @param {String} RegionId - RegionId. required.
   */
  listAsrLmModel(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ListAsrLmModel', params, options);
  }

  /**
   * @param {Integer} PageNumber - page_number. optional.
   * @param {Integer} PageSize - page_size. optional.
   * @param {String} RegionId - RegionId. required.
   */
  listAsrVocab(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('ListAsrVocab', params, options);
  }

  /**
   * @param {String} ModelId - id. required.
   * @param {String} DataId - data_id. required.
   * @param {String} RegionId - RegionId. required.
   */
  removeDataFromAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    options.method = 'POST';
    return this.request('RemoveDataFromAsrLmModel', params, options);
  }

  /**
   * @param {String} ModelId - id. required.
   * @param {String} RegionId - RegionId. required.
   */
  stopTrainAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    options.method = 'POST';
    return this.request('StopTrainAsrLmModel', params, options);
  }

  /**
   * @param {String} ModelId - id. required.
   * @param {String} RegionId - RegionId. required.
   */
  trainAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    options.method = 'POST';
    return this.request('TrainAsrLmModel', params, options);
  }

  /**
   * @param {String} ModelId - id. required.
   * @param {String} RegionId - RegionId. required.
   */
  undeployAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    options.method = 'POST';
    return this.request('UndeployAsrLmModel', params, options);
  }

  /**
   * @param {String} DataId - data_id. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - RegionId. required.
   */
  updateAsrLmData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataId')) {
      throw new TypeError('parameter "DataId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    options.method = 'POST';
    return this.request('UpdateAsrLmData', params, options);
  }

  /**
   * @param {String} ModelId - id. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} RegionId - RegionId. required.
   */
  updateAsrLmModel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ModelId')) {
      throw new TypeError('parameter "ModelId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    options.method = 'POST';
    return this.request('UpdateAsrLmModel', params, options);
  }

  /**
   * @param {String} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} WordWeights - word_weights. required.
   * @param {String} RegionId - RegionId. required.
   */
  updateAsrVocab(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'WordWeights')) {
      throw new TypeError('parameter "WordWeights" is required');
    }

    options.method = 'POST';
    return this.request('UpdateAsrVocab', params, options);
  }

}

module.exports = Client;
