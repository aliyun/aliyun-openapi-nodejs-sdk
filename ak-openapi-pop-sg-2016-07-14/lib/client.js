
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-14';
    super(config);
  }

  /**
   * @param {String} Ticket - ticket. required.
   * @param {String} TicketType - ticketType. required.
   * @param {Long} ExpireTime - expireTime. required.
   */
  queryShortTermAccessKeyForTicket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ticket')) {
      throw new TypeError('parameter "Ticket" is required');
    }

    if (!hasOwnProperty(params, 'TicketType')) {
      throw new TypeError('parameter "TicketType" is required');
    }

    if (!hasOwnProperty(params, 'ExpireTime')) {
      throw new TypeError('parameter "ExpireTime" is required');
    }

    return this.request('QueryShortTermAccessKeyForTicket', params, options);
  }

}

module.exports = Client;
