
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2016-06-17';
    super(config);
  }

  p0(body, headers = {}, opts = {}) {
    const path = `/`;
    return this.post(path, {}, body, headers, opts);
  }

  p1(body, headers = {}, opts = {}) {
    const path = `/${p1}`;
    return this.post(path, {}, body, headers, opts);
  }

  p2(body, headers = {}, opts = {}) {
    const path = `/${p1}/${p2}`;
    return this.post(path, {}, body, headers, opts);
  }

  p3(body, headers = {}, opts = {}) {
    const path = `/${p1}/${p2}/${p3}`;
    return this.post(path, {}, body, headers, opts);
  }

  p4(body, headers = {}, opts = {}) {
    const path = `/${p1}/${p2}/${p3}/${p4}`;
    return this.post(path, {}, body, headers, opts);
  }

  p5(body, headers = {}, opts = {}) {
    const path = `/${p1}/${p2}/${p3}/${p4}/${p5}`;
    return this.post(path, {}, body, headers, opts);
  }

  p6(body, headers = {}, opts = {}) {
    const path = `/${p1}/${p2}/${p3}/${p4}/${p5}/${p6}`;
    return this.post(path, {}, body, headers, opts);
  }

  p7(body, headers = {}, opts = {}) {
    const path = `/${p1}/${p2}/${p3}/${p4}/${p5}/${p6}/${p7}`;
    return this.post(path, {}, body, headers, opts);
  }

  p8(body, headers = {}, opts = {}) {
    const path = `/${p1}/${p2}/${p3}/${p4}/${p5}/${p6}/${p7}/${p8}`;
    return this.post(path, {}, body, headers, opts);
  }

  p9(body, headers = {}, opts = {}) {
    const path = `/${p1}/${p2}/${p3}/${p4}/${p5}/${p6}/${p7}/${p8}/${p9}`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
