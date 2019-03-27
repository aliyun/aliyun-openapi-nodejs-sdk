
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-1-24';
    super(config);
  }

  /**
   * @param {String} Address - eVenu. optional.
   * @param {String} Email - email. optional.
   * @param {String} UserClientIp - userClientIp. optional.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} City - eCity. optional.
   * @param {String} Province - eProvince. optional.
   * @param {String} Country - cCountry. optional.
   * @param {String} PostalCode - postalCode. optional.
   * @param {String} TelArea - telArea. optional.
   * @param {String} Telephone - telMain. optional.
   * @param {String} TelExt - telExt. optional.
   * @param {String} ZhCity - cCity. optional.
   * @param {String} ZhProvince - cProvince. optional.
   * @param {String} ZhAddress - cVenu. optional.
   * @param {String} ContactType - contactType. required.
   * @param {String} RegistrantType - regType. required.
   * @param {Boolean} TransferOutProhibited - addTransferLock. optional.
   * @param {RepeatList} DomainName - domainNameList. required.
   */
  saveBatchTaskForUpdatingRegistrantExceptOrgByNewContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ContactType')) {
      throw new TypeError('parameter "ContactType" is required');
    }

    if (!hasOwnProperty(params, 'RegistrantType')) {
      throw new TypeError('parameter "RegistrantType" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('SaveBatchTaskForUpdatingRegistrantExceptOrgByNewContact', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {String} Lang - lang. optional. default: en.
   * @param {String} UserClientIp - userClientIp. optional.
   */
  transferInRefetchWhoisEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    return this.request('TransferInRefetchWhoisEmail', params, options);
  }

}

module.exports = Client;
