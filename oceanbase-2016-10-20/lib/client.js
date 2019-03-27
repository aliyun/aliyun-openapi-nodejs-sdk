
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2016-10-20';
    super(config);
  }

  checkObInstanceOwner(query, headers = {}, opts = {}) {
    const path = `/CheckObInstanceOwner`;
    return this.get(path, query, headers, opts);
  }

  createInstance(query, headers = {}, opts = {}) {
    const path = `/CreateInstance`;
    return this.get(path, query, headers, opts);
  }

  deleteInstance(query, headers = {}, opts = {}) {
    const path = `/DeleteInstance`;
    return this.get(path, query, headers, opts);
  }

}

module.exports = Client;
