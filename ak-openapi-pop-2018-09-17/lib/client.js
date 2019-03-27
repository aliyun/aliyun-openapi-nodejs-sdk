
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-09-17';
    super(config);
  }

  /**
   * @param {String} RegionId - regionId. optional. default: center.
   * @param {String} Ticket - ticket. required.
   * @param {String} TicketType - ticketType. optional.
   * @param {Long} ExpireTime - expireTime. required.
   */
  generateShortTermAccessKeyByTicket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Ticket')) {
      throw new TypeError('parameter "Ticket" is required');
    }

    if (!hasOwnProperty(params, 'ExpireTime')) {
      throw new TypeError('parameter "ExpireTime" is required');
    }

    return this.request('GenerateShortTermAccessKeyByTicket', params, options);
  }

}

module.exports = Client;
