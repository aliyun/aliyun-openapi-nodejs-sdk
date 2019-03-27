
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-14';
    super(config);
  }

  /**
   * @param {String} Content - content. optional.
   */
  predictDepartment(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('PredictDepartment', params, options);
  }

  /**
   * @param {String} Content - content. optional.
   */
  predictDeviceInputModel(params = {}, options = {}) {
    return this.request('PredictDeviceInputModel', params, options);
  }

  /**
   * @param {String} Content - content. optional.
   */
  trainDeviceInputModel(params = {}, options = {}) {
    return this.request('TrainDeviceInputModel', params, options);
  }

  /**
   * @param {String} Content - content. required.
   * @param {String} CallCenter - callCenter. optional.
   * @param {String} Seat - seat. optional.
   */
  yingziPredictDepartment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('YingziPredictDepartment', params, options);
  }

  /**
   * @param {String} Content - content. required.
   * @param {String} CallCenter - callCenter. optional.
   * @param {String} Seat - seat. optional.
   */
  yingziPredictSimilarEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('YingziPredictSimilarEvent', params, options);
  }

  /**
   * @param {String} Content - content. required.
   * @param {String} CallCenter - callCenter. optional.
   * @param {String} Seat - seat. optional.
   */
  yingziPredictTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Content')) {
      throw new TypeError('parameter "Content" is required');
    }

    return this.request('YingziPredictTag', params, options);
  }

  /**
   */
  yingziTrainTag(params = {}, options = {}) {
    return this.request('YingziTrainTag', params, options);
  }

  /**
   * @param {String} Model - model. optional.
   */
  youdaAdcPredict(params = {}, options = {}) {
    return this.request('YoudaAdcPredict', params, options);
  }

  /**
   * @param {String} Model - model. optional.
   */
  youdaAdcTrain(params = {}, options = {}) {
    return this.request('YoudaAdcTrain', params, options);
  }

  /**
   * @param {String} Model - model. optional.
   */
  youdaAecPredict(params = {}, options = {}) {
    return this.request('YoudaAecPredict', params, options);
  }

  /**
   * @param {String} Model - model. optional.
   */
  youdaAecTrain(params = {}, options = {}) {
    return this.request('YoudaAecTrain', params, options);
  }

}

module.exports = Client;
