
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-12-12';
    super(config);
  }

  /**
   * @param {String} ChannelId - channelId. required.
   * @param {String} DeviceSn - deviceSn. required.
   * @param {Integer} NetworkType - networkType. required.
   * @param {String} Tac - tac. required.
   * @param {String} CellId - cellId. required.
   */
  keepAlive(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceSn')) {
      throw new TypeError('parameter "DeviceSn" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'Tac')) {
      throw new TypeError('parameter "Tac" is required');
    }

    if (!hasOwnProperty(params, 'CellId')) {
      throw new TypeError('parameter "CellId" is required');
    }

    options.method = 'POST';
    return this.request('KeepAlive', params, options);
  }

  /**
   * @param {String} ChannelId - channelId. required.
   * @param {String} DeviceSn - deviceSn. required.
   * @param {Integer} Status - status. required.
   */
  pushDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceSn')) {
      throw new TypeError('parameter "DeviceSn" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    options.method = 'POST';
    return this.request('PushDeviceStatus', params, options);
  }

  /**
   * @param {String} ChannelId - channelId. required.
   * @param {String} DeviceSn - deviceSn. required.
   * @param {Long} TradeTime - tradeTime. required.
   * @param {String} OrderId - orderId. required.
   * @param {String} CommodityId - commodityId. required.
   * @param {String} CommodityName - commodityName. required.
   * @param {Float} SalePrice - salePrice. required.
   * @param {Float} TradePrice - tradePrice. required.
   * @param {Integer} TradeStatus - tradeStatus. required.
   */
  pushExtraTradeDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceSn')) {
      throw new TypeError('parameter "DeviceSn" is required');
    }

    if (!hasOwnProperty(params, 'TradeTime')) {
      throw new TypeError('parameter "TradeTime" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    if (!hasOwnProperty(params, 'CommodityId')) {
      throw new TypeError('parameter "CommodityId" is required');
    }

    if (!hasOwnProperty(params, 'CommodityName')) {
      throw new TypeError('parameter "CommodityName" is required');
    }

    if (!hasOwnProperty(params, 'SalePrice')) {
      throw new TypeError('parameter "SalePrice" is required');
    }

    if (!hasOwnProperty(params, 'TradePrice')) {
      throw new TypeError('parameter "TradePrice" is required');
    }

    if (!hasOwnProperty(params, 'TradeStatus')) {
      throw new TypeError('parameter "TradeStatus" is required');
    }

    options.method = 'POST';
    return this.request('PushExtraTradeDetail', params, options);
  }

  /**
   * @param {String} ChannelId - channelId. required.
   * @param {String} DeviceSn - deviceSn. required.
   * @param {Integer} Type - type. required.
   * @param {String} FaultType - faultType. required.
   * @param {String} FaultComment - faultComment. required.
   * @param {Long} Time - time. required.
   */
  pushFaultEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceSn')) {
      throw new TypeError('parameter "DeviceSn" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'FaultType')) {
      throw new TypeError('parameter "FaultType" is required');
    }

    if (!hasOwnProperty(params, 'FaultComment')) {
      throw new TypeError('parameter "FaultComment" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    options.method = 'POST';
    return this.request('PushFaultEvent', params, options);
  }

  /**
   * @param {String} ChannelId - channelId. required.
   * @param {String} DeviceSn - deviceSn. required.
   * @param {String} OuterTradeId - outerTradeId. required.
   * @param {Long} TradeTime - tradeTime. required.
   * @param {String} TradeOrderId - tradeOrderId. required.
   * @param {String} AlipayOrderId - alipayOrderId. optional.
   * @param {String} CommodityId - commodityId. required.
   * @param {String} CommodityName - commodityName. required.
   * @param {Float} SalePrice - salePrice. optional.
   * @param {Float} TradePrice - tradePrice. optional.
   * @param {Integer} TradeStatus - tradeStatus. required.
   * @param {Integer} VerificationStatus - verificationStatus. required.
   * @param {Long} StartTime - optionActingStartTime. optional.
   * @param {Long} EndTime - optionActingEndTime. optional.
   */
  pushTradeDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'DeviceSn')) {
      throw new TypeError('parameter "DeviceSn" is required');
    }

    if (!hasOwnProperty(params, 'OuterTradeId')) {
      throw new TypeError('parameter "OuterTradeId" is required');
    }

    if (!hasOwnProperty(params, 'TradeTime')) {
      throw new TypeError('parameter "TradeTime" is required');
    }

    if (!hasOwnProperty(params, 'TradeOrderId')) {
      throw new TypeError('parameter "TradeOrderId" is required');
    }

    if (!hasOwnProperty(params, 'CommodityId')) {
      throw new TypeError('parameter "CommodityId" is required');
    }

    if (!hasOwnProperty(params, 'CommodityName')) {
      throw new TypeError('parameter "CommodityName" is required');
    }

    if (!hasOwnProperty(params, 'TradeStatus')) {
      throw new TypeError('parameter "TradeStatus" is required');
    }

    if (!hasOwnProperty(params, 'VerificationStatus')) {
      throw new TypeError('parameter "VerificationStatus" is required');
    }

    options.method = 'POST';
    return this.request('PushTradeDetail', params, options);
  }

}

module.exports = Client;
