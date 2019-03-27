
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-03-20';
    super(config);
  }

  /**
   * @param {String} OperatorAccountId - operatorAccountId. required.
   * @param {String} OperatorAccountType - operatorAccountType. required.
   * @param {String} Title - title. required.
   * @param {Long} Category - category. required.
   * @param {String} Source - source. required.
   * @param {Integer} Severity - severity. required.
   * @param {String} Description - description. optional.
   * @param {String} OwnerId - ownerId. optional.
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} SourcePort - sourcePort. optional.
   * @param {String} DestinationIp - destinationIp. optional.
   * @param {String} DestinationPort - destinationPort. optional.
   * @param {Boolean} Confirm - confirm. optional.
   * @param {Long} OccurrenceTime - occurrenceTime. required.
   */
  createIncident(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OperatorAccountId')) {
      throw new TypeError('parameter "OperatorAccountId" is required');
    }

    if (!hasOwnProperty(params, 'OperatorAccountType')) {
      throw new TypeError('parameter "OperatorAccountType" is required');
    }

    if (!hasOwnProperty(params, 'Title')) {
      throw new TypeError('parameter "Title" is required');
    }

    if (!hasOwnProperty(params, 'Category')) {
      throw new TypeError('parameter "Category" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'Severity')) {
      throw new TypeError('parameter "Severity" is required');
    }

    if (!hasOwnProperty(params, 'OccurrenceTime')) {
      throw new TypeError('parameter "OccurrenceTime" is required');
    }

    options.method = 'POST';
    return this.request('CreateIncident', params, options);
  }

}

module.exports = Client;
