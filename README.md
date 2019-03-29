English | [简体中文](./README-CN.md)


<p align="center">
<a href=" https://www.alibabacloud.com"><img src="https://aliyunsdk-pages.alicdn.com/icons/AlibabaCloud.svg"></a>
</p>

<h1 align="center">Alibaba Cloud SDK for Node.js</h1>

The Alibaba Cloud SDK for Node.js allows you to access Alibaba Cloud services such as Elastic Compute Service (ECS), Server Load Balancer (SLB), and CloudMonitor. You can access Alibaba Cloud services without the need to handle API related tasks, such as signing and constructing your requests.


## Online Demo
[OpenAPI Explorer](https://api.aliyun.com/#/?product=Ecs&api=DescribeAccessPoints&params={}&tab=DEMO&lang=NODEJS) provides the ability to call the cloud product OpenAPI online, and dynamically generate SDK Example code and quick retrieval interface, which can significantly reduce the difficulty of using the cloud API.


## Installation
You must install the SDK with `npm`, such as:

```bash
npm install @alicloud/iot-2017-04-20
```


## Quick Examples

At the beginning, you need to sign up for an Alibaba Cloud account and retrieve your [Credentials](https://usercenter.console.aliyun.com/#/manage/ak).

```js
const IotClient = require('@alicloud/iot-2017-04-20');

async function demo() {
  const client = new IotClient({
    endpoint: '******',
    accessKeyId: 'your access key id',
    accessKeySecret: 'your access key secret'
  });

  const res = await client.applyDeviceWithNames({
    DeviceName: 'demo', 
    ProductKey: 'your publick key'
  });
}

demo();
```


## SDK Standard

> The standard SDK is the SDK that is automatically generated with the OpenAPI information, which corresponding to the OpenAPI that is provided by the Alibaba Cloud POP gateway.

### Core SDK

The core SDK implements the basic signature function. The OpenAPI which POP gateway provided can be called through the core SDK. Users who use the core SDK should care about the OpenAPI information of the product and pass the parameters themselves.

- [POP Core SDK](https://www.npmjs.com/package/@alicloud/pop-core)

### Extended SDK

The Extension SDK is an SDK that is automatically generated with the OpenAPI metadata. Following are the generated product SDKs:

|    Product Name    |  Version |  Npm Package | Reference  |
| ----------- | ------ | -------- | -------- |
| RAM(access control) | 2015-05-01 | [@alicloud/ram-2015-05-01](https://www.npmjs.com/package/@alicloud/ram-2015-05-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Ram-2015-05-01 |
| SLB(load balance) | 2014-05-15 | [@alicloud/slb-2014-05-15](https://www.npmjs.com/package/@alicloud/slb-2014-05-15) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Slb-2014-05-15 |
| RDS(cloud db) | 2014-08-15 | [@alicloud/rds-2014-08-15](https://www.npmjs.com/package/@alicloud/rds-2014-08-15) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Rds-2014-08-15 |
| ROS(resource management) | 2015-09-01 | [@alicloud/ros-2015-09-01](https://www.npmjs.com/package/@alicloud/ros-2015-09-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/ROS-2015-09-01 |
| CS(docker) | 2016-08-01 | [@alicloud/cs-2016-08-01](https://www.npmjs.com/package/@alicloud/cs-2015-12-15) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/CS-2015-12-15 |
| Dds(MongoDB) | 2015-12-01 | [@alicloud/dds-2015-12-01](https://www.npmjs.com/package/@alicloud/dds-2015-12-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Dds-2015-12-01 |
| ImageSearch | 2018-01-20 | [@alicloud/imagesearch-2018-01-20](https://www.npmjs.com/package/@alicloud/imagesearch-2018-01-20) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/ImageSearch-2018-01-20|
| imm |  2017-09-06 | [@alicloud/imm-2017-09-06](https://www.npmjs.com/package/@alicloud/imm-2017-09-06) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/imm-2017-09-06 |
| Iot |  2017-04-20 | [@alicloud/iot-2017-04-20](https://www.npmjs.com/package/@alicloud/iot-2017-04-20) |  |
| Push |  2016-08-01 | [@alicloud/push-2016-08-01](https://www.npmjs.com/package/@alicloud/push-2016-08-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Push-2016-08-01 |
| Dm(mail push) | 2017-06-22 | [@alicloud/dm-2017-06-22](https://www.npmjs.com/package/@alicloud/dm-2017-06-22) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Dm-2017-06-22 |
| Nlp(natural language) | 2018-04-08 | [@alicloud/nlp-2018-04-08](https://www.npmjs.com/package/@alicloud/nlp-2018-04-08) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Nlp-2018-04-08 |
| rtc | 2018-01-11 | [@alicloud/rtc-2018-01-11](https://www.npmjs.com/package/@alicloud/rtc-2018-01-11) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/rtc-2018-01-11 |

If the cloud product you need is provided by the POP gateway, but the product or version you need does not exist in the above product list, please open [issue](https://github.com/aliyun/aliyun-openapi- Nodejs-sdk/issues/new), tell us the product name and version you needed, we will generate it and published to the NPM.

## Custom SDK

The custom SDK is the OpenAPI not exposed by the POP gateway. Due to the special logic, it isn't suitable for the POP gateway. So we can't generate SDK  automatically, and the OpenAPI metadata is provided by the products themselves or third parties.

Custom SDK list:

|    Product Name    | Version | NPM Package | Reference |
| ----------- | ------ | -------- | -------- |
| FC(function compute) | 2016-08-15 | [@alicloud/fc](https://www.npmjs.com/package/@alicloud/fc) | https://github.com/aliyun/fc-nodejs-sdk |
| OSS(object storage service) |  | [ali-oss](https://www.npmjs.com/package/ali-oss) | https://github.com/ali-sdk/ali-oss |

If the product you needed is not in the above list, please open an [issue] (https://github.com/aliyun/aliyun-openapi-nodejs-sdk/issues/new) and we will provide it as soon as possible.


## Issues
[Opening an Issue](https://github.com/aliyun/aliyun-openapi-nodejs-sdk/issues/new), Issues not conforming to the guidelines may be closed immediately.


## Changelog
Detailed changes for each release are documented in the [release notes]().


## API Reference
You can visit the API and its parameters in [Product List](https://www.alibabacloud.com/en)


## License
[MIT](LICENSE)
