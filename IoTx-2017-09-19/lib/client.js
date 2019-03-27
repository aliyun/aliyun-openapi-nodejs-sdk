
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-09-19';
    super(config);
  }

  /**
   * @param {String} CompanyId - companyId. optional.
   * @param {String} SystemOrganizationId - systemOrgId. optional.
   * @param {String} SystemId - systemId. optional.
   * @param {String} BuId - buId. optional.
   */
  queryRole(params = {}, options = {}) {
    return this.request('QueryRole', params, options);
  }

}

module.exports = Client;
