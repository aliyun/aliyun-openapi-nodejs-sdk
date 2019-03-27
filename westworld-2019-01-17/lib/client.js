
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2019-01-17';
    super(config);
  }

  identifyStarFace(body, headers = {}, opts = {}) {
    const path = `/service/pic.findStar`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
