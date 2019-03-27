
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-09-16';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TargetImageType - targetImageType. optional.
   * @param {String} SourceImageType - sourceImageType. optional.
   * @param {String} SourceImageValue - sourceImageValue. optional.
   * @param {String} TargetImageValue - targetImageValue. optional.
   */
  compareFaces(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('CompareFaces', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} MaterialValue - materialValue. required.
   * @param {Boolean} DontSaveDB - dontSaveDB. required.
   * @param {String} ClientTag - clientTag. required.
   * @param {Integer} MaxNumPhotosPerCategory - maxNumPhotosPerCategory. required.
   * @param {String} RetAttributes - retAttributes. required.
   * @param {Integer} MaxFaceNum - maxFaceNum. required.
   */
  detectFaceAttributes(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MaterialValue')) {
      throw new TypeError('parameter "MaterialValue" is required');
    }

    if (!hasOwnProperty(params, 'DontSaveDB')) {
      throw new TypeError('parameter "DontSaveDB" is required');
    }

    if (!hasOwnProperty(params, 'ClientTag')) {
      throw new TypeError('parameter "ClientTag" is required');
    }

    if (!hasOwnProperty(params, 'MaxNumPhotosPerCategory')) {
      throw new TypeError('parameter "MaxNumPhotosPerCategory" is required');
    }

    if (!hasOwnProperty(params, 'RetAttributes')) {
      throw new TypeError('parameter "RetAttributes" is required');
    }

    if (!hasOwnProperty(params, 'MaxFaceNum')) {
      throw new TypeError('parameter "MaxFaceNum" is required');
    }

    options.method = 'POST';
    return this.request('DetectFaceAttributes', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Biz - biz. required.
   * @param {String} TicketId - ticketId. required.
   */
  getMaterials(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Biz')) {
      throw new TypeError('parameter "Biz" is required');
    }

    if (!hasOwnProperty(params, 'TicketId')) {
      throw new TypeError('parameter "TicketId" is required');
    }

    return this.request('GetMaterials', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Biz - biz. required.
   * @param {String} TicketId - ticketId. required.
   */
  getStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Biz')) {
      throw new TypeError('parameter "Biz" is required');
    }

    if (!hasOwnProperty(params, 'TicketId')) {
      throw new TypeError('parameter "TicketId" is required');
    }

    return this.request('GetStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Biz - biz. required.
   * @param {String} TicketId - ticketId. required.
   * @param {Map} Binding - binding. optional.
   * @param {Map} UserData - userData. optional.
   * @param {Map} VerifyConfigs - verifyConfigs. optional.
   */
  getVerifyToken(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Biz')) {
      throw new TypeError('parameter "Biz" is required');
    }

    if (!hasOwnProperty(params, 'TicketId')) {
      throw new TypeError('parameter "TicketId" is required');
    }

    return this.request('GetVerifyToken', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} VerifyToken - verifyToken. required.
   * @param {RepeatList} Material - materials. required.
   */
  submitMaterials(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VerifyToken')) {
      throw new TypeError('parameter "VerifyToken" is required');
    }

    if (!hasOwnProperty(params, 'Material')) {
      throw new TypeError('parameter "Material" is required');
    }

    options.method = 'POST';
    return this.request('SubmitMaterials', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Biz - biz. required.
   * @param {String} TicketId - ticketId. required.
   * @param {RepeatList} Material - materials. required.
   */
  submitVerification(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Biz')) {
      throw new TypeError('parameter "Biz" is required');
    }

    if (!hasOwnProperty(params, 'TicketId')) {
      throw new TypeError('parameter "TicketId" is required');
    }

    if (!hasOwnProperty(params, 'Material')) {
      throw new TypeError('parameter "Material" is required');
    }

    options.method = 'POST';
    return this.request('SubmitVerification', params, options);
  }

}

module.exports = Client;
