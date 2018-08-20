
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-07-09';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} BandId - bandId. required.
   * @param {String} OfferId - offerId. required.
   */
  bandOfferOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BandId')) {
      throw new TypeError('parameter "BandId" is required');
    }

    if (!hasOwnProperty(params, 'OfferId')) {
      throw new TypeError('parameter "OfferId" is required');
    }

    return this.request('BandOfferOrder', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpAddress - ipAddress. required.
   * @param {Integer} Port - port. required.
   */
  bandPrecheck(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    return this.request('BandPrecheck', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpAddress - ipAddress. required.
   * @param {Integer} Port - port. required.
   * @param {Long} BandId - bandId. required.
   * @param {String} Direction - direction. required.
   * @param {Long} TargetBandwidth - targetBandwidth. required.
   */
  bandStartSpeedUp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    if (!hasOwnProperty(params, 'BandId')) {
      throw new TypeError('parameter "BandId" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'TargetBandwidth')) {
      throw new TypeError('parameter "TargetBandwidth" is required');
    }

    return this.request('BandStartSpeedUp', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {Long} BandId - bandId. required.
   */
  bandStatusQuery(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BandId')) {
      throw new TypeError('parameter "BandId" is required');
    }

    return this.request('BandStatusQuery', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} IpAddress - ipAddress. required.
   * @param {Integer} Port - port. required.
   * @param {Long} BandId - bandId. required.
   * @param {String} Direction - direction. required.
   */
  bandStopSpeedUp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IpAddress')) {
      throw new TypeError('parameter "IpAddress" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    if (!hasOwnProperty(params, 'BandId')) {
      throw new TypeError('parameter "BandId" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('BandStopSpeedUp', params, options);
  }

}

module.exports = Client;
