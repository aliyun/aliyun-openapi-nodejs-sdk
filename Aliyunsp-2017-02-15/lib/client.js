
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-02-15';
    super(config);
  }

  /**
   * @param {Long} aliuid - aliUid. required.
   * @param {Integer} status - status. required.
   * @param {String} site - site. required.
   * @param {String} articleCode - articleCode. optional.
   * @param {String} articleItemCode - articleItemCode. optional.
   * @param {String} offering - offering. optional.
   * @param {String} unclearAmount - unclearAmount. optional.
   * @param {String} unclearBillAmount - unclearBillAmount. optional.
   */
  creditForISV(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'aliuid')) {
      throw new TypeError('parameter "aliuid" is required');
    }

    if (!hasOwnProperty(params, 'status')) {
      throw new TypeError('parameter "status" is required');
    }

    if (!hasOwnProperty(params, 'site')) {
      throw new TypeError('parameter "site" is required');
    }

    return this.request('CreditForISV', params, options);
  }

  /**
   * @param {String} Region - region. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {Integer} PageNum - pageNum. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   * @param {String} InstanceIDs - instanceIDs. optional.
   * @param {String} EndTimeStart - endTimeStart. optional.
   * @param {String} EndTimeEnd - endTimeEnd. optional.
   * @param {String} CreateTimeStart - createTimeStart. optional.
   * @param {String} CreateTimeEnd - createTimeEnd. optional.
   * @param {String} RenewStatus - renewStatus. optional.
   */
  queryAvailableInstances(params = {}, options = {}) {
    return this.request('QueryAvailableInstances', params, options);
  }

  /**
   * @param {Integer} RenewalPeriod - renewalPeriod. optional.
   * @param {String} InstanceIDs - instanceIDs. required.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ProductCode - productCode. optional.
   * @param {String} ProductType - productType. optional.
   * @param {String} SubscriptionType - subscriptionType. optional.
   * @param {String} RenewalPeriodUnit - renewalPeriodUnit. optional.
   * @param {String} RenewalStatus - renewalStatus. required.
   */
  setRenewal(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceIDs')) {
      throw new TypeError('parameter "InstanceIDs" is required');
    }

    if (!hasOwnProperty(params, 'RenewalStatus')) {
      throw new TypeError('parameter "RenewalStatus" is required');
    }

    return this.request('SetRenewal', params, options);
  }

  /**
   * @param {String} Pk - pk. optional.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  doLogicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('doLogicalDeleteResource', params, options);
  }

  /**
   * @param {String} Pk - pk. required.
   * @param {String} Bid - bid. optional.
   * @param {Long} Hid - hid. required.
   * @param {String} Country - country. optional.
   * @param {String} TaskIdentifier - taskIdentifier. optional.
   * @param {String} TaskExtraData - taskExtraData. optional.
   * @param {String} GmtWakeup - gmtWakeup. optional.
   */
  doPhysicalDeleteResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Pk')) {
      throw new TypeError('parameter "Pk" is required');
    }

    if (!hasOwnProperty(params, 'Hid')) {
      throw new TypeError('parameter "Hid" is required');
    }

    return this.request('doPhysicalDeleteResource', params, options);
  }

}

module.exports = Client;
