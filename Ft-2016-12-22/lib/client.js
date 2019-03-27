
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2016-12-22';
    super(config);
  }

  imageDetection(body, headers = {}, opts = {}) {
    const path = `/image/detection`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
