
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-01';
    super(config);
  }

  /**
   * @param {Long} Tid - tid. required.
   * @param {Long} Uid - uid. required.
   */
  deleteUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tid')) {
      throw new TypeError('parameter "Tid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DeleteUser', params, options);
  }

  /**
   * @param {Long} Tid - tid. required.
   * @param {Long} Uid - uid. required.
   */
  disableUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tid')) {
      throw new TypeError('parameter "Tid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('DisableUser', params, options);
  }

  /**
   * @param {Long} Tid - tid. required.
   * @param {Long} Uid - uid. required.
   */
  enableUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tid')) {
      throw new TypeError('parameter "Tid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('EnableUser', params, options);
  }

  /**
   * @param {Long} Tid - tid. required.
   * @param {String} Module - searchMoudleName. optional.
   * @param {String} StartTime - searchTimeStart. required.
   * @param {String} EndTime - searchTimeEnd. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNumber - pageNumber. required.
   */
  getOpLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tid')) {
      throw new TypeError('parameter "Tid" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    return this.request('GetOpLog', params, options);
  }

  /**
   * @param {Long} Tid - tid. required.
   * @param {String} InstanceType - dbType. required.
   * @param {String} InstanceSource - instanceSource. required.
   * @param {String} NetworkType - netType. required.
   * @param {String} EnvType - envType. required.
   * @param {String} EcsInstanceId - instanceResourceId. optional.
   * @param {String} VpcId - vpcId. optional.
   * @param {String} EcsRegion - region. optional.
   * @param {String} Host - host. required.
   * @param {Integer} Port - port. required.
   * @param {String} Sid - sid. optional.
   * @param {String} DatabaseUser - dbUser. required.
   * @param {String} DatabasePassword - password. required.
   * @param {String} InstanceAlias - alias. required.
   * @param {Long} DbaUid - dbaUid. required.
   * @param {String} SafeRule - securityName. required.
   * @param {Integer} QueryTimeout - queryTimeout. required.
   * @param {Integer} ExportTimeout - alterTimeout. required.
   */
  registerInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tid')) {
      throw new TypeError('parameter "Tid" is required');
    }

    if (!hasOwnProperty(params, 'InstanceType')) {
      throw new TypeError('parameter "InstanceType" is required');
    }

    if (!hasOwnProperty(params, 'InstanceSource')) {
      throw new TypeError('parameter "InstanceSource" is required');
    }

    if (!hasOwnProperty(params, 'NetworkType')) {
      throw new TypeError('parameter "NetworkType" is required');
    }

    if (!hasOwnProperty(params, 'EnvType')) {
      throw new TypeError('parameter "EnvType" is required');
    }

    if (!hasOwnProperty(params, 'Host')) {
      throw new TypeError('parameter "Host" is required');
    }

    if (!hasOwnProperty(params, 'Port')) {
      throw new TypeError('parameter "Port" is required');
    }

    if (!hasOwnProperty(params, 'DatabaseUser')) {
      throw new TypeError('parameter "DatabaseUser" is required');
    }

    if (!hasOwnProperty(params, 'DatabasePassword')) {
      throw new TypeError('parameter "DatabasePassword" is required');
    }

    if (!hasOwnProperty(params, 'InstanceAlias')) {
      throw new TypeError('parameter "InstanceAlias" is required');
    }

    if (!hasOwnProperty(params, 'DbaUid')) {
      throw new TypeError('parameter "DbaUid" is required');
    }

    if (!hasOwnProperty(params, 'SafeRule')) {
      throw new TypeError('parameter "SafeRule" is required');
    }

    if (!hasOwnProperty(params, 'QueryTimeout')) {
      throw new TypeError('parameter "QueryTimeout" is required');
    }

    if (!hasOwnProperty(params, 'ExportTimeout')) {
      throw new TypeError('parameter "ExportTimeout" is required');
    }

    return this.request('RegisterInstance', params, options);
  }

  /**
   * @param {Long} Tid - tid. required.
   * @param {Long} Uid - uid. required.
   * @param {String} UserNick - nickName. optional.
   * @param {String} RoleNames - roleNames. optional.
   */
  registerUser(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Tid')) {
      throw new TypeError('parameter "Tid" is required');
    }

    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    return this.request('RegisterUser', params, options);
  }

}

module.exports = Client;
