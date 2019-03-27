
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-02-08';
    super(config);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Message - message. optional.
   */
  acceptDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('AcceptDemand', params, options);
  }

  /**
   * @param {String} AuctionId - auctionId. required.
   * @param {Float} MaxBid - price. required.
   * @param {String} Currency - currency. required.
   */
  bidDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuctionId')) {
      throw new TypeError('parameter "AuctionId" is required');
    }

    if (!hasOwnProperty(params, 'MaxBid')) {
      throw new TypeError('parameter "MaxBid" is required');
    }

    if (!hasOwnProperty(params, 'Currency')) {
      throw new TypeError('parameter "Currency" is required');
    }

    return this.request('BidDomain', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Message - message. optional.
   */
  failDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('FailDemand', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Message - message. optional.
   */
  finishDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('FinishDemand', params, options);
  }

  /**
   */
  getReserveDomainUrl(params = {}, options = {}) {
    return this.request('GetReserveDomainUrl', params, options);
  }

  /**
   * @param {String} AuctionId - auctionId. required.
   */
  queryAuctionDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuctionId')) {
      throw new TypeError('parameter "AuctionId" is required');
    }

    return this.request('QueryAuctionDetail', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  queryAuctions(params = {}, options = {}) {
    return this.request('QueryAuctions', params, options);
  }

  /**
   * @param {String} AuctionId - auctionId. required.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  queryBidRecords(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AuctionId')) {
      throw new TypeError('parameter "AuctionId" is required');
    }

    return this.request('QueryBidRecords', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   */
  queryBookingDomainInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('QueryBookingDomainInfo', params, options);
  }

  /**
   * @param {String} Status - status. optional.
   * @param {Integer} CurrentPage - currentPage. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   * @param {String} BizId - bizId. optional.
   */
  queryBrokerDemand(params = {}, options = {}) {
    return this.request('QueryBrokerDemand', params, options);
  }

  /**
   * @param {Integer} CurrentPage - currentPage. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} BizId - bizId. required.
   */
  queryBrokerDemandRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('QueryBrokerDemandRecord', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Message - message. required.
   */
  recordDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Message')) {
      throw new TypeError('parameter "Message" is required');
    }

    return this.request('RecordDemand', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Message - message. optional.
   */
  refuseDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('RefuseDemand', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Message - message. optional.
   * @param {String} DomainName - domainName. required.
   * @param {Float} Price - price. required.
   * @param {Integer} ProduceType - produceType. optional. default: 1.
   */
  requestPayDemand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'Price')) {
      throw new TypeError('parameter "Price" is required');
    }

    return this.request('RequestPayDemand', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {RepeatList} Channels - channels. optional.
   */
  reserveDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('ReserveDomain', params, options);
  }

}

module.exports = Client;
