
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-06-22';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Name - name. optional.
   * @param {String} IsBuc - isBuc. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  addAccountFromAliyun(params = {}, options = {}) {
    return this.request('AddAccountFromAliyun', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Data - data. optional.
   * @param {String} Tags - tags. optional.
   * @param {Integer} CategoryId - categoryId. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  addInformation(params = {}, options = {}) {
    return this.request('AddInformation', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Id - id. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  deleteAccount(params = {}, options = {}) {
    return this.request('DeleteAccount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  getAccountByName(params = {}, options = {}) {
    return this.request('GetAccountByName', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  getInformationCount(params = {}, options = {}) {
    return this.request('GetInformationCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Current - current. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  queryAccount(params = {}, options = {}) {
    return this.request('QueryAccount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  queryChannelCategoryEntry(params = {}, options = {}) {
    return this.request('QueryChannelCategoryEntry', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  queryChannelTagEntry(params = {}, options = {}) {
    return this.request('QueryChannelTagEntry', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Account - account. optional.
   * @param {Integer} ChannelId - channelId. optional.
   * @param {Integer} Current - current. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} Time - time. optional.
   */
  queryInformationAccountInputNumber(params = {}, options = {}) {
    return this.request('QueryInformationAccountInputNumber', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Current - current. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  queryInformationByNameAndChannel(params = {}, options = {}) {
    return this.request('QueryInformationByNameAndChannel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Time - time. optional.
   * @param {Integer} ChannelId - channelId. optional.
   * @param {String} Account - account. optional.
   * @param {Integer} Current - current. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  queryInformationFromCount(params = {}, options = {}) {
    return this.request('QueryInformationFromCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Code - code. optional.
   */
  queryUserForInformation(params = {}, options = {}) {
    return this.request('QueryUserForInformation', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  queryUserProperty(params = {}, options = {}) {
    return this.request('QueryUserProperty', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} Id - id. optional.
   * @param {String} Role - role. optional.
   * @param {String} Status - status. optional.
   * @param {Integer} ChannelId - channelId. optional.
   */
  updateAccount(params = {}, options = {}) {
    return this.request('UpdateAccount', params, options);
  }

}

module.exports = Client;
