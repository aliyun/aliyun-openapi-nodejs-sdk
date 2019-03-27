
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-17';
    super(config);
  }

  /**
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} TargetImageType - targetImageType. optional.
   * @param {String} SourceImageType - sourceImageType. optional.
   * @param {String} SourceImageValue - sourceImageValue. optional.
   * @param {String} TargetImageValue - targetImageValue. optional.
   */
  compareFaces(params = {}, options = {}) {
    return this.request('CompareFaces', params, options);
  }

  /**
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
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} Biz - biz. required.
   * @param {String} TicketId - ticketId. required.
   * @param {Map} Binding - binding. optional.
   * @param {Map} UserData - userData. optional.
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

    return this.request('SubmitMaterials', params, options);
  }

}

module.exports = Client;
