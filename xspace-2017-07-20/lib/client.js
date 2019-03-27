
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-07-20';
    super(config);
  }

  queryCustomerById(query, body, headers = {}, opts = {}) {
    const path = `/customer`;
    return this.post(path, query, body, headers, opts);
  }

  queryCustomerByPhone(query, body, headers = {}, opts = {}) {
    const path = `/customerbyphone`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
