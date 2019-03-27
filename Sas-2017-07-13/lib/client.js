
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-13';
    super(config);
  }

  /**
   * @param {String} DipperNamespace - namespace. required.
   */
  getDipperConfigure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DipperNamespace')) {
      throw new TypeError('parameter "DipperNamespace" is required');
    }

    return this.request('GetDipperConfigure', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   */
  getSasEventDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('GetSasEventDetail', params, options);
  }

  /**
   * @param {Integer} Category - category. optional.
   * @param {Integer} Start - start. required.
   * @param {Integer} Limit - limit. required.
   */
  getSasEventsList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('GetSasEventsList', params, options);
  }

  /**
   * @param {Integer} Date - date. optional.
   */
  getSasEventsTrend(params = {}, options = {}) {
    return this.request('GetSasEventsTrend', params, options);
  }

  /**
   * @param {Integer} Date - date. optional.
   */
  getSasSecurityEventCount(params = {}, options = {}) {
    return this.request('GetSasSecurityEventCount', params, options);
  }

  /**
   */
  getSasUserBuyVersion(params = {}, options = {}) {
    return this.request('GetSasUserBuyVersion', params, options);
  }

  /**
   * @param {String} privateCloudVersion - privateCloudVersion. required.
   * @param {String} privateCloudVersion - publishVersion. required.
   */
  iDataSyncService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'privateCloudVersion')) {
      throw new TypeError('parameter "privateCloudVersion" is required');
    }

    if (!hasOwnProperty(params, 'privateCloudVersion')) {
      throw new TypeError('parameter "privateCloudVersion" is required');
    }

    return this.request('IDataSyncService', params, options);
  }

  /**
   */
  isSasServiceOpening(params = {}, options = {}) {
    return this.request('IsSasServiceOpening', params, options);
  }

  /**
   */
  openSasService(params = {}, options = {}) {
    return this.request('OpenSasService', params, options);
  }

  /**
   * @param {String} DipperNamespace - namespace. required.
   */
  queryDipperConfigure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DipperNamespace')) {
      throw new TypeError('parameter "DipperNamespace" is required');
    }

    return this.request('QueryDipperConfigure', params, options);
  }

  /**
   * @param {String} PrivateCloudVersion - privateCloudVersion. required.
   * @param {String} PublishVersion - publishVersion. required.
   * @param {Long} PublishVersionCode - publishVersionCode. required.
   */
  queryLatestUpdateInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PrivateCloudVersion')) {
      throw new TypeError('parameter "PrivateCloudVersion" is required');
    }

    if (!hasOwnProperty(params, 'PublishVersion')) {
      throw new TypeError('parameter "PublishVersion" is required');
    }

    if (!hasOwnProperty(params, 'PublishVersionCode')) {
      throw new TypeError('parameter "PublishVersionCode" is required');
    }

    return this.request('QueryLatestUpdateInfo', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   */
  getEventDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('getEventDetail', params, options);
  }

  /**
   * @param {Integer} Category - category. optional.
   * @param {Integer} Start - start. required.
   * @param {Integer} Limit - limit. required.
   */
  getEventsList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Start')) {
      throw new TypeError('parameter "Start" is required');
    }

    if (!hasOwnProperty(params, 'Limit')) {
      throw new TypeError('parameter "Limit" is required');
    }

    return this.request('getEventsList', params, options);
  }

  /**
   * @param {Integer} Date - date. optional.
   */
  getSecurityEventCount(params = {}, options = {}) {
    return this.request('getSecurityEventCount', params, options);
  }

  /**
   */
  getUserBuyVersion(params = {}, options = {}) {
    return this.request('getUserBuyVersion', params, options);
  }

}

module.exports = Client;
