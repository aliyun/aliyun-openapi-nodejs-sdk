
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-01-12';
    super(config);
  }

  imageAsyncScan(query, body, headers = {}, opts = {}) {
    const path = `/green/image/asyncscan`;
    return this.post(path, query, body, headers, opts);
  }

  imageAsyncScanResults(query, body, headers = {}, opts = {}) {
    const path = `/green/image/results`;
    return this.post(path, query, body, headers, opts);
  }

  imageScanFeedback(query, body, headers = {}, opts = {}) {
    const path = `/green/image/feedback`;
    return this.post(path, query, body, headers, opts);
  }

  imageSyncScan(query, body, headers = {}, opts = {}) {
    const path = `/green/image/scan`;
    return this.post(path, query, body, headers, opts);
  }

  textFeedback(query, body, headers = {}, opts = {}) {
    const path = `/green/text/feedback`;
    return this.post(path, query, body, headers, opts);
  }

  textScan(query, body, headers = {}, opts = {}) {
    const path = `/green/text/scan`;
    return this.post(path, query, body, headers, opts);
  }

  videoAsyncScan(query, body, headers = {}, opts = {}) {
    const path = `/green/video/asyncscan`;
    return this.post(path, query, body, headers, opts);
  }

  videoAsyncScanResults(query, body, headers = {}, opts = {}) {
    const path = `/green/video/results`;
    return this.post(path, query, body, headers, opts);
  }

  videoFeedback(query, body, headers = {}, opts = {}) {
    const path = `/green/video/feedback`;
    return this.post(path, query, body, headers, opts);
  }

}

module.exports = Client;
