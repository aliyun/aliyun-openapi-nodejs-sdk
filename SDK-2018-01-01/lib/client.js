
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-01-01';
    super(config);
  }

  demo(query, body, headers = {}, opts = {}) {
    const path = `/helloworld`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
