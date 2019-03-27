
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2016-12-22';
    super(config);
  }

  imageDetection(body, headers = {}, opts = {}) {
    const path = `/image/detection`;
    return this.post(path, {}, body, headers, opts);
  }

  imageResult(taskid, headers = {}, opts = {}) {
    const path = `/image/result/${taskid}`;
    return this.get(path, {}, headers, opts);
  }

  imageResults(body, headers = {}, opts = {}) {
    const path = `/image/results`;
    return this.post(path, {}, body, headers, opts);
  }

  sampleFeedback(body, headers = {}, opts = {}) {
    const path = `/sample/feedback`;
    return this.post(path, {}, body, headers, opts);
  }

  textKeywordFilter(body, headers = {}, opts = {}) {
    const path = `/text/keyword_filter`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
