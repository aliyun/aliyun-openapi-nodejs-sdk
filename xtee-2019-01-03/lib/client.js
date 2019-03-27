
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2019-01-03';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} service - service. required.
   * @param {String} content - content. optional.
   */
  describeSafConsole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'service')) {
      throw new TypeError('parameter "service" is required');
    }

    return this.request('DescribeSafConsole', params, options);
  }

}

module.exports = Client;
