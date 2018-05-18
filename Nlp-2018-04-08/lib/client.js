
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2018-04-08';
    super(config);
  }

  entity(domain, body, headers = {}, opts = {}) {
    const path = `/nlp/api/entity/${domain}`;
    return this.post(path, {}, body, headers, opts);
  }

  reviewAnalysis(domain, body, headers = {}, opts = {}) {
    const path = `/nlp/api/reviewanalysis/${domain}`;
    return this.post(path, {}, body, headers, opts);
  }

  sentiment(domain, body, headers = {}, opts = {}) {
    const path = `/nlp/api/sentiment/${domain}`;
    return this.post(path, {}, body, headers, opts);
  }

  translate(domain, body, headers = {}, opts = {}) {
    const path = `/nlp/api/translate/${domain}`;
    return this.post(path, {}, body, headers, opts);
  }

  wordPos(domain, body, headers = {}, opts = {}) {
    const path = `/nlp/api/wordpos/${domain}`;
    return this.post(path, {}, body, headers, opts);
  }

  wordSegment(domain, body, headers = {}, opts = {}) {
    const path = `/nlp/api/wordsegment/${domain}`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
