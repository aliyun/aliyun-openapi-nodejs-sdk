
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
   */
  createUserRandomCode(params = {}, options = {}) {
    return this.request('CreateUserRandomCode', params, options);
  }

  /**
   */
  getAllDBGatewayRouters(params = {}, options = {}) {
    return this.request('GetAllDBGatewayRouters', params, options);
  }

  /**
   * @param {String} DBGatewayInstanceId - dbGatewayInstanceId. required.
   * @param {String} DBGatewayInstanceVersion - dbGatewayInstanceVersion. optional.
   * @param {String} ProcessStatus - progressStatus. optional.
   * @param {String} UpgradeStatus - upgradeStatus. optional.
   * @param {String} OtherStatus - otherStatus. optional.
   * @param {String} DaemonExceptions - daemonExceptions. optional.
   * @param {String} SessionId - sessionId. optional.
   */
  heartbeat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DBGatewayInstanceId')) {
      throw new TypeError('parameter "DBGatewayInstanceId" is required');
    }

    return this.request('Heartbeat', params, options);
  }

  /**
   * @param {String} VerificationCode - verificationCode. required.
   * @param {String} LocalIP - localIP. required.
   */
  registerDBGateway(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VerificationCode')) {
      throw new TypeError('parameter "VerificationCode" is required');
    }

    if (!hasOwnProperty(params, 'LocalIP')) {
      throw new TypeError('parameter "LocalIP" is required');
    }

    return this.request('RegisterDBGateway', params, options);
  }

}

module.exports = Client;
