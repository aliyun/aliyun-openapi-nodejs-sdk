
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-02-02';
    super(config);
  }

  roaHttpApi(query, body, headers = {}, opts = {}) {
    const path = `/web/getData/Object`;
    return this.post(path, query, body, headers, opts);
  }

  roaHttpApiTransmission(body, headers = {}, opts = {}) {
    const path = `/web/getData/String`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
