
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-07';
    super(config);
  }

  /**
   * @param {String} FieldType - fieldType. optional. default: general.
   * @param {String} SourceText - sourceText. required.
   * @param {String} SourceLanguage - sourceLanguage. required.
   * @param {String} TargetLanguage - targetLanguage. required.
   * @param {String} ContentFormat - format. required.
   * @param {String} AppName - appName. optional. default: cloud-standard-common.
   */
  machineTranslateECommerce(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceText')) {
      throw new TypeError('parameter "SourceText" is required');
    }

    if (!hasOwnProperty(params, 'SourceLanguage')) {
      throw new TypeError('parameter "SourceLanguage" is required');
    }

    if (!hasOwnProperty(params, 'TargetLanguage')) {
      throw new TypeError('parameter "TargetLanguage" is required');
    }

    if (!hasOwnProperty(params, 'ContentFormat')) {
      throw new TypeError('parameter "ContentFormat" is required');
    }

    options.method = 'POST';
    return this.request('MachineTranslateECommerce', params, options);
  }

  /**
   * @param {String} FieldType - fieldType. optional. default: general.
   * @param {String} SourceText - sourceText. required.
   * @param {String} SourceLanguage - sourceLanguage. required.
   * @param {String} TargetLanguage - targetLanguage. required.
   * @param {String} ContentFormat - format. required.
   * @param {String} AppName - appName. optional. default: cloud-standard-common.
   */
  machineTranslateGeneral(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceText')) {
      throw new TypeError('parameter "SourceText" is required');
    }

    if (!hasOwnProperty(params, 'SourceLanguage')) {
      throw new TypeError('parameter "SourceLanguage" is required');
    }

    if (!hasOwnProperty(params, 'TargetLanguage')) {
      throw new TypeError('parameter "TargetLanguage" is required');
    }

    if (!hasOwnProperty(params, 'ContentFormat')) {
      throw new TypeError('parameter "ContentFormat" is required');
    }

    options.method = 'POST';
    return this.request('MachineTranslateGeneral', params, options);
  }

}

module.exports = Client;
