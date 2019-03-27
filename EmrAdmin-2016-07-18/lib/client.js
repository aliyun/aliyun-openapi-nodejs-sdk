
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-07-18';
    super(config);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} ContactGroupId - contactGroupId. required.
   * @param {String} InstanceType - instanceType. optional.
   * @param {Boolean} Active - active. required.
   */
  createAlarmRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ContactGroupId')) {
      throw new TypeError('parameter "ContactGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Active')) {
      throw new TypeError('parameter "Active" is required');
    }

    return this.request('CreateAlarmRelation', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} VerificationCode - verificationCode. required.
   */
  createContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    if (!hasOwnProperty(params, 'VerificationCode')) {
      throw new TypeError('parameter "VerificationCode" is required');
    }

    return this.request('CreateContact', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Name - name. required.
   * @param {RepeatList} ContactIdList - contactIdList. required.
   * @param {String} Description - description. optional.
   */
  createContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ContactIdList')) {
      throw new TypeError('parameter "ContactIdList" is required');
    }

    return this.request('CreateContactGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BizId - bizId. required.
   */
  deleteAlarmRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('DeleteAlarmRelation', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  deleteContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteContact', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  deleteContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DeleteContactGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   */
  describeContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('DescribeContactGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} InstanceType - instanceType. optional.
   */
  getAlarmRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('GetAlarmRelation', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   */
  getVerificationCode(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('GetVerificationCode', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listAlarmHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListAlarmHistory', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListContact', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {Integer} PageNumber - pageNumber. optional. default: 1.
   * @param {Integer} PageSize - pageSize. optional. default: 10.
   */
  listContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('ListContactGroup', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} BizId - bizId. required.
   * @param {String} InstanceType - instanceType. optional.
   * @param {String} AlarmType - alarmType. required.
   * @param {String} ContactGroupId - contactGroupId. required.
   * @param {Boolean} Active - active. required.
   */
  updateAlarmRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'AlarmType')) {
      throw new TypeError('parameter "AlarmType" is required');
    }

    if (!hasOwnProperty(params, 'ContactGroupId')) {
      throw new TypeError('parameter "ContactGroupId" is required');
    }

    if (!hasOwnProperty(params, 'Active')) {
      throw new TypeError('parameter "Active" is required');
    }

    return this.request('UpdateAlarmRelation', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. required.
   * @param {String} PhoneNumber - phoneNumber. required.
   * @param {String} VerificationCode - verificationCode. optional.
   */
  updateContact(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumber')) {
      throw new TypeError('parameter "PhoneNumber" is required');
    }

    return this.request('UpdateContact', params, options);
  }

  /**
   * @param {String} AccessKeyId - AccessKeyId. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} Id - id. required.
   * @param {String} Name - name. required.
   * @param {RepeatList} ContactIdList - contactIdList. required.
   * @param {String} Description - description. optional.
   */
  updateContactGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ContactIdList')) {
      throw new TypeError('parameter "ContactIdList" is required');
    }

    return this.request('UpdateContactGroup', params, options);
  }

}

module.exports = Client;
