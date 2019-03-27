
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-05-20';
    super(config);
  }

  simpleAutoCut(query, headers = {}, opts = {}) {
    const path = `/simpleautocut`;
    return this.get(path, query, headers, opts);
  }

}

module.exports = Client;
