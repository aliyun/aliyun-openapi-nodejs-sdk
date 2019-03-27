
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-10-09';
    super(config);
  }

  /**
   * @param {String} Name - name. required.
   */
  sayHello(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    options.method = 'POST';
    return this.request('SayHello', params, options);
  }

  /**
   * @param {String} GmtCreate - gmtCreate. optional.
   * @param {String} Committer - committer. optional.
   * @param {String} GmtModified - gmtModified. optional.
   * @param {String} Name - name. optional.
   * @param {String} Classify - classify. optional.
   * @param {String} ProcessActor - processActor. optional.
   * @param {String} Degree - degree. optional.
   * @param {String} Urge - urge. optional.
   * @param {String} Status - status. optional.
   * @param {String} Content - content. optional.
   * @param {String} AliyunPk - aliyunPk. optional.
   */
  submitNewTicket(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('SubmitNewTicket', params, options);
  }

}

module.exports = Client;
