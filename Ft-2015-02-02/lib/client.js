
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2015-02-02';
    super(config);
  }

  roaAnonymousApi(query, headers = {}, opts = {}) {
    const path = `/RoaAnonymousApi`;
    return this.get(path, query, headers, opts);
  }

  roaDubboApi(query, headers = {}, opts = {}) {
    const path = `/RoaDubboApi`;
    return this.get(path, query, headers, opts);
  }

  roaDynamicHostHttpApi(query, body, headers = {}, opts = {}) {
    const path = `/web/getData/dynamic`;
    return this.post(path, query, body, headers, opts);
  }

  roaHttpApi(body, headers = {}, opts = {}) {
    const path = `/web/getData`;
    return this.post(path, {}, body, headers, opts);
  }

  roaHttpIgnoreHttpsApi(body, headers = {}, opts = {}) {
    const path = `/ignorehttps`;
    return this.post(path, {}, body, headers, opts);
  }

  roaIllegalDynamicHostHttpApi(query, body, headers = {}, opts = {}) {
    const path = `/web/getData/dynamic/illegal`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
