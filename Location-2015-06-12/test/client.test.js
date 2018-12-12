'use strict';

const expect = require('expect.js');

const Client = require('../');

const client = new Client({
  accessKeyId: process.env.ACCESS_KEY_ID,
  accessKeySecret: process.env.ACCESS_KEY_SECRET,
  endpoint: 'https://location-readonly.aliyuncs.com'
});

describe('client', () => {
  it('describeEndpoint should ok', async function () {
    const result = await client.describeEndpoint({
      Id: 'cn-hangzhou',
      ServiceCode: 'ecs'
    });
    expect(result).to.be.ok();
  })

  it('describeEndpoints should ok', async function () {
    const result = await client.describeEndpoints({
      Id: 'cn-hangzhou',
      ServiceCode: 'ecs'
    });
    expect(result).to.be.eql({});
  })

  it('describeRegions should ok', async function () {
    const result = await client.describeRegions({
    });
    expect(result).to.be.eql({});
  })

  it('describeServices should ok', async function () {
    const result = await client.describeServices({
      RegionId: 'cn-hangzhou'
    });
    expect(result).to.be.eql({});
  })

  it('listEndpoints should ok', async function () {
    const result = await client.listEndpoints({
    });
    expect(result).to.be.eql({});
  })

  it('listEndpointsByIp should ok', async function () {
    const result = await client.listEndpoints({
      Ip: 'ip'
    });
    expect(result).to.be.eql({});
  })
})

// client.listEndpoints({
//   // RegionId: 'cn-hangzhou',
//   // Id: 'cn-hangzhou',
//   // ServiceCode: 'ecs'
// }).then((res) => {
//   console.log(JSON.stringify(res, null, 2));
// }, (err) => {
//   console.log(err);
//   console.log(err.stack);
// });
