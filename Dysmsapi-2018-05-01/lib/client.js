
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-05-01';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} BizId - bizId. optional.
   * @param {String} StartDate - startDate. required.
   * @param {String} EndDate - endDate. required.
   * @param {Long} PageSize - pageSize. required.
   * @param {Long} CurrentPage - currentPage. required.
   */
  querySendDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'StartDate')) {
      throw new TypeError('parameter "StartDate" is required');
    }

    if (!hasOwnProperty(params, 'EndDate')) {
      throw new TypeError('parameter "EndDate" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    return this.request('QuerySendDetails', params, options);
  }

  /**
   * @param {String} AccessKeyId - appKey. optional.
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} PhoneNumbers - phoneNumbers. required.
   * @param {String} ContentCode - contentCode. required.
   * @param {String} ContentParam - contentParam. optional.
   * @param {String} ExternalId - externalId. optional.
   */
  sendSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PhoneNumbers')) {
      throw new TypeError('parameter "PhoneNumbers" is required');
    }

    if (!hasOwnProperty(params, 'ContentCode')) {
      throw new TypeError('parameter "ContentCode" is required');
    }

    return this.request('SendSms', params, options);
  }

}

module.exports = Client;
