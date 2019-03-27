
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-12-25';
    super(config);
  }

  listApps(query, headers = {}, opts = {}) {
    const path = `/v4/openapi/apps`;
    return this.get(path, query, headers, opts);
  }

}

module.exports = Client;
