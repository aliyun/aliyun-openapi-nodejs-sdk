
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-11-11';
    super(config);
  }

  createTrigger(apiVersion, instanceName, tableName, body, headers = {}, opts = {}) {
    const path = `/${apiVersion}/instance/${instanceName}/table/${tableName}/trigger`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteTrigger(apiVersion, instanceName, tableName, triggerName, headers = {}, opts = {}) {
    const path = `/${apiVersion}/instance/${instanceName}/table/${tableName}/trigger/${triggerName}`;
    return this.delete(path, {}, headers, opts);
  }

  getTrigger(apiVersion, instanceName, tableName, triggerName, headers = {}, opts = {}) {
    const path = `/${apiVersion}/instance/${instanceName}/table/${tableName}/trigger/${triggerName}`;
    return this.get(path, {}, headers, opts);
  }

  listTrigger(apiVersion, instanceName, tableName, headers = {}, opts = {}) {
    const path = `/${apiVersion}/instance/${instanceName}/table/${tableName}/trigger`;
    return this.get(path, {}, headers, opts);
  }

}

module.exports = Client;
