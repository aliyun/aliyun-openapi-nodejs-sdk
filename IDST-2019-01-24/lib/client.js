
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2019-01-24';
    super(config);
  }

  videoAnthology(body, headers = {}, opts = {}) {
    const path = `/video/anthology`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
