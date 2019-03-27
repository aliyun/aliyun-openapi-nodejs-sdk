
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2016-01-02';
    super(config);
  }

  testRoaApi(query, body, headers = {}, opts = {}) {
    const path = `/web/cloudapi`;
    return this.post(path, query, body, headers, opts);
  }

  testRoaGlobalApi(pathParam, query, body, headers = {}, opts = {}) {
    const path = `/web/getData`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
