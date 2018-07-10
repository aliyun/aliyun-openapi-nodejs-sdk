
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-05-18';
    super(config);
  }

  createToken(body, headers = {}, opts = {}) {
    const path = `/pop/2018-05-18/tokens`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
