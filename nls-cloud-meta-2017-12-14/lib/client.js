
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-12-14';
    super(config);
  }

  createMetaToken(query, body, headers = {}, opts = {}) {
    const path = `/top/token/create`;
    return this.post(path, query, body, headers, opts);
  }

  verifyMetaToken(query, headers = {}, opts = {}) {
    const path = `/top/token/verify`;
    return this.get(path, query, headers, opts);
  }

}

module.exports = Client;
