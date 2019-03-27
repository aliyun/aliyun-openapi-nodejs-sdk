
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-05-25';
    super(config);
  }

  /**
   * @param {String} MobileNumber - mobileNumber. required.
   * @param {Long} eventId - eventId. optional.
   */
  checkMobileIsExistsInEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MobileNumber')) {
      throw new TypeError('parameter "MobileNumber" is required');
    }

    return this.request('CheckMobileIsExistsInEvent', params, options);
  }

  /**
   * @param {Long} TicketId - ticketId. required.
   */
  findETicketByTid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TicketId')) {
      throw new TypeError('parameter "TicketId" is required');
    }

    return this.request('FindETicketByTid', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   */
  findETicketListByEid(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('FindETicketListByEid', params, options);
  }

  /**
   * @param {Long} EventTicketId - eventTicketId. required.
   * @param {String} JsonParams - jsonParams. required.
   */
  modifyEventTicket(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventTicketId')) {
      throw new TypeError('parameter "EventTicketId" is required');
    }

    if (!hasOwnProperty(params, 'JsonParams')) {
      throw new TypeError('parameter "JsonParams" is required');
    }

    return this.request('ModifyEventTicket', params, options);
  }

}

module.exports = Client;
