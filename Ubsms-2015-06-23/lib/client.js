
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2015-06-23';
    super(config);
  }

  /**
   * @param {String} callerBid - callerBid. required.
   * @param {String} Bid - bid. required.
   * @param {String} ServiceCode - serviceCode. optional.
   * @param {RepeatList} StatusKey - statusKeys. optional.
   * @param {String} Password - password. optional. default: C71yxnnvXJmGFfw6.
   */
  describeBidUserBusinessStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerBid')) {
      throw new TypeError('parameter "callerBid" is required');
    }

    if (!hasOwnProperty(params, 'Bid')) {
      throw new TypeError('parameter "Bid" is required');
    }

    return this.request('DescribeBidUserBusinessStatus', params, options);
  }

  /**
   * @param {String} callerBid - callerBid. required.
   * @param {String} Password - password. optional. default: C71yxnnvXJmGFfw6.
   */
  describeBusinessStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerBid')) {
      throw new TypeError('parameter "callerBid" is required');
    }

    return this.request('DescribeBusinessStatus', params, options);
  }

  /**
   * @param {String} callerBid - callerBid. required.
   * @param {String} Uid - uid. optional.
   * @param {String} ServiceCode - serviceCode. optional.
   * @param {RepeatList} StatusKey - statusKeys. optional.
   * @param {String} Password - password. optional. default: C71yxnnvXJmGFfw6.
   */
  describeBusinessStatusOfUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'callerBid')) {
      throw new TypeError('parameter "callerBid" is required');
    }

    return this.request('DescribeBusinessStatusOfUser', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} Cmd - cmd. required.
   * @param {String} Region - region. optional.
   * @param {String} InstanceId - instanceId. optional.
   * @param {String} ClientToken - clientToken. required.
   * @param {String} Password - password. optional. default: C71yxnnvXJmGFfw6.
   */
  notifyUserBusinessCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    if (!hasOwnProperty(params, 'Cmd')) {
      throw new TypeError('parameter "Cmd" is required');
    }

    if (!hasOwnProperty(params, 'ClientToken')) {
      throw new TypeError('parameter "ClientToken" is required');
    }

    return this.request('NotifyUserBusinessCommand', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} Service - service. required.
   * @param {String} StatusKey - status. required.
   * @param {String} StatusValue - value. required.
   */
  setUserBusinessStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'Service')) {
      throw new TypeError('parameter "Service" is required');
    }

    if (!hasOwnProperty(params, 'StatusKey')) {
      throw new TypeError('parameter "StatusKey" is required');
    }

    if (!hasOwnProperty(params, 'StatusValue')) {
      throw new TypeError('parameter "StatusValue" is required');
    }

    return this.request('SetUserBusinessStatus', params, options);
  }

  /**
   * @param {String} Uid - uid. required.
   * @param {String} ServiceCode - serviceCode. required.
   * @param {String} StatusKey1 - statusKey1. optional.
   * @param {String} StatusValue1 - statusValue1. optional.
   * @param {String} StatusKey2 - statusKey2. optional.
   * @param {String} StatusValue2 - statusValue2. optional.
   * @param {String} StatusKey3 - statusKey3. optional.
   * @param {String} StatusValue3 - statusValue3. optional.
   * @param {String} StatusKey4 - statusKey4. optional.
   * @param {String} StatusValue4 - statusValue4. optional.
   * @param {String} StatusKey5 - statusKey5. optional.
   * @param {String} StatusValue5 - statusValue5. optional.
   * @param {String} StatusKey6 - statusKey6. optional.
   * @param {String} StatusValue6 - statusValue6. optional.
   * @param {String} StatusKey7 - statusKey7. optional.
   * @param {String} StatusValue7 - statusValue7. optional.
   * @param {String} StatusKey8 - statusKey8. optional.
   * @param {String} StatusValue8 - statusValue8. optional.
   * @param {String} StatusKey9 - statusKey9. optional.
   * @param {String} StatusValue9 - statusValue9. optional.
   * @param {String} StatusKey10 - statusKey10. optional.
   * @param {String} StatusValue10 - statusValue10. optional.
   * @param {String} Password - password. optional. default: C71yxnnvXJmGFfw6.
   */
  setUserBusinessStatuses(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'ServiceCode')) {
      throw new TypeError('parameter "ServiceCode" is required');
    }

    return this.request('SetUserBusinessStatuses', params, options);
  }

}

module.exports = Client;
