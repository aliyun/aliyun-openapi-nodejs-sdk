
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-08-22';
    super(config);
  }

  monthlySlaList(query, body, headers = {}, opts = {}) {
    const path = `/monthly_sla/list.json`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
