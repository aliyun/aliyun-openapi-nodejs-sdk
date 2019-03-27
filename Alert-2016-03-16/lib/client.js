
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2016-03-16';
    super(config);
  }

  putCMSAlert(query, body, headers = {}, opts = {}) {
    const path = `/alarms/postAlarms`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
