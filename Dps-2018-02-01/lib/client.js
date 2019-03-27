
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-02-01';
    super(config);
  }

  nlpApi(body, headers = {}, opts = {}) {
    const path = `/${orgCode}/nlp/api`;
    return this.post(path, {}, body, headers, opts);
  }

  testRoaApi(query, body, headers = {}, opts = {}) {
    const path = `/${orgCode}/conan/test`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
