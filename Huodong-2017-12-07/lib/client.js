
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-07';
    super(config);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {Long} EventTicketId - eventTicketId. required.
   * @param {Json} EventOrderDTO - eventOrderDTO. required.
   * @param {String} EventOrderTicketDTOListJsonStr - eventOrderTicketDTOListJsonStr. optional.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'EventTicketId')) {
      throw new TypeError('parameter "EventTicketId" is required');
    }

    if (!hasOwnProperty(params, 'EventOrderDTO')) {
      throw new TypeError('parameter "EventOrderDTO" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} PurchaserPk - purchaserPk. required.
   * @param {Integer} EventId - eventId. required.
   */
  hasSignupEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PurchaserPk')) {
      throw new TypeError('parameter "PurchaserPk" is required');
    }

    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('HasSignupEvent', params, options);
  }

  /**
   * @param {String} serviceName - serviceName. optional.
   * @param {String} methodName - methodName. optional.
   * @param {String} paramsJson - paramsJson. optional.
   */
  popProxyService(params = {}, options = {}) {
    return this.request('PopProxyService', params, options);
  }

  /**
   * @param {Json} EventThemeSO - eventThemeSO. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  selectAllEventThemes(params = {}, options = {}) {
    return this.request('SelectAllEventThemes', params, options);
  }

  /**
   * @param {Json} EventBaseInfoDTO - eventBaseInfoDTO. required.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  selectAllEvents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventBaseInfoDTO')) {
      throw new TypeError('parameter "EventBaseInfoDTO" is required');
    }

    return this.request('SelectAllEvents', params, options);
  }

  /**
   * @param {Json} EventOrderDTO - eventOrderDTO. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  selectAllOrders(params = {}, options = {}) {
    return this.request('SelectAllOrders', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   */
  selectOneEventByEventId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('SelectOneEventByEventId', params, options);
  }

  /**
   * @param {Long} OrderId - orderId. required.
   */
  selectOneOrderByOrderId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('SelectOneOrderByOrderId', params, options);
  }

}

module.exports = Client;
