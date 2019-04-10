
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2019-03-25';
    super(config);
  }

  addImage(body, headers = {}, opts = {}) {
    const path = `/v2/image/add`;
    return this.post(path, {}, body, headers, opts);
  }

  deleteImage(body, headers = {}, opts = {}) {
    const path = `/v2/image/delete`;
    return this.post(path, {}, body, headers, opts);
  }

  searchImage(body, headers = {}, opts = {}) {
    const path = `/v2/image/search`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
