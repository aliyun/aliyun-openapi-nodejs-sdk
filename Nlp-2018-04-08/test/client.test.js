'use strict';

const expect = require('expect.js');

const Client = require('../');

const client = new Client({
  endpoint: 'http://nlp.cn-shanghai.aliyuncs.com',
  accessKeyId: process.env.ACCESS_KEY_ID,
  accessKeySecret: process.env.ACCESS_KEY_SECRET
});

describe('client', function () {

  it('should ok', async () => {
    const response = await client.translate('general', JSON.stringify({
      "q":"hello",
      "source":"en",
      "target":"zh",
      "format":"text"
    }), {
      'content-type': 'application/json'
    });
    expect(response).to.be.ok();
    expect(response.data).to.be.ok();
    expect(response.data.translated_text).to.be('你好');
  });

});
