
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-01-07';
    super(config);
  }

  /**
   * @param {String} FormatType - formatType. required.
   * @param {String} TargetLanguage - targetLanguage. required.
   * @param {String} SourceLanguage - sourceLanguage. required.
   * @param {String} SourceText - sourceText. required.
   * @param {String} Scene - scene. required.
   */
  translateECommerce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FormatType')) {
      throw new TypeError('parameter "FormatType" is required');
    }

    if (!hasOwnProperty(params, 'TargetLanguage')) {
      throw new TypeError('parameter "TargetLanguage" is required');
    }

    if (!hasOwnProperty(params, 'SourceLanguage')) {
      throw new TypeError('parameter "SourceLanguage" is required');
    }

    if (!hasOwnProperty(params, 'SourceText')) {
      throw new TypeError('parameter "SourceText" is required');
    }

    if (!hasOwnProperty(params, 'Scene')) {
      throw new TypeError('parameter "Scene" is required');
    }

    return this.request('TranslateECommerce', params, options);
  }

  /**
   * @param {String} FormatType - formatType. required.
   * @param {String} SourceLanguage - sourceLanguage. required.
   * @param {String} TargetLanguage - targetLanguage. required.
   * @param {String} SourceText - sourceText. required.
   * @param {String} Scene - scene. optional. default: general.
   */
  translateGeneral(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'FormatType')) {
      throw new TypeError('parameter "FormatType" is required');
    }

    if (!hasOwnProperty(params, 'SourceLanguage')) {
      throw new TypeError('parameter "SourceLanguage" is required');
    }

    if (!hasOwnProperty(params, 'TargetLanguage')) {
      throw new TypeError('parameter "TargetLanguage" is required');
    }

    if (!hasOwnProperty(params, 'SourceText')) {
      throw new TypeError('parameter "SourceText" is required');
    }

    return this.request('TranslateGeneral', params, options);
  }

}

module.exports = Client;
