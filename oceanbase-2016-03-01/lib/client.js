
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2016-03-01';
    super(config);
  }

  checkObInstanceOwner(query, headers = {}, opts = {}) {
    const path = `/CheckObInstanceOwner`;
    return this.get(path, query, headers, opts);
  }

}

module.exports = Client;
