
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-09-22';
    super(config);
  }

  roaSearch(query, body, headers = {}, opts = {}) {
    const path = `/bin/sp`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
