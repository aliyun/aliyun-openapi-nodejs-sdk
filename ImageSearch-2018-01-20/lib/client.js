
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-01-20';
    super(config);
  }

  addItem(query, body, headers = {}, opts = {}) {
    const path = `/item/add`;
    return this.post(path, query, body, headers, opts);
  }

  deleteItem(query, body, headers = {}, opts = {}) {
    const path = `/item/delete`;
    return this.post(path, query, body, headers, opts);
  }

  searchItem(query, body, headers = {}, opts = {}) {
    const path = `/item/search`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
