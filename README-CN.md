[English](./README.md) | 简体中文

<p align="center">
<a href=" https://www.alibabacloud.com"><img src="https://aliyunsdk-pages.alicdn.com/icons/Aliyun.svg"></a>
</p>

<h1 align="center">Alibaba Cloud SDK for Node.js</h1>

欢迎使用 Alibaba Cloud SDK for Node.js ，适用于阿里云的 Node.js SDK 让您不用复杂编程即可访问云服务器、云监控等多个阿里云服务。


## 使用 Demo 及其示例
您可以在 [OpenAPI Explorer](https://api.aliyun.com/#/?product=Ecs&api=DescribeAccessPoints&params={}&tab=DEMO&lang=NODEJS) 中查看您所使用的产品代码示例。


## 安装
SDK 使用 `npm` 安装，例如：

```bash
npm install @alicloud/iot-2017-04-20
```


## 快速开始

- 要使用阿里云 Node.js SDK，您需要一个云账号以及一对 Access Key ID 和 Access Key Secret。请在阿里云控制台中的 [AccessKey 管理页面](https://usercenter.console.aliyun.com/#/manage/ak)上创建和查看您的 Access Key，或者联系您的系统管理员。

- 要使用阿里云 SDK 访问某个产品的 API，您需要事先在[阿里云控制台](https://home.console.aliyun.com/new#/)中开通这个产品。

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

## 标准 SDK

> 注：标准 SDK 指的是经由阿里云标准 POP 网关实现调用的 OpenAPI 对应的，可以自动基于 OpenAPI 信息而生成的 SDK。

### 核心 SDK

核心 SDK 是指实现基本的签名功能的核心部分，任意 POP 网关的 OpenAPI 均可以通过核心 SDK 来进行调用。使用核心 SDK 需要用户关心产品的 OpenAPI 信息，需要用户自行传递参数。

- [POP Core SDK](https://www.npmjs.com/package/@alicloud/pop-core)

### 延伸 SDK

延伸 SDK 是基于核心 SDK 及云产品 OpenAPI 元数据自动生成而得到的 SDK。延伸 SDK 能提示用户方法名、参数、及参数校验等扩展功能。下列是已生成的产品 SDK：

|    产品名    |  版本号 |  NPM 包名 | 相关链接  |
| ----------- | ------ | -------- | -------- |
| RAM(权限控制) | 2015-05-01 | [@alicloud/ram-2015-05-01](https://www.npmjs.com/package/@alicloud/ram-2015-05-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Ram-2015-05-01 |
| SLB(负载均衡) | 2014-05-15 | [@alicloud/slb-2014-05-15](https://www.npmjs.com/package/@alicloud/slb-2014-05-15) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Slb-2014-05-15 |
| RDS(云数据库) | 2014-08-15 | [@alicloud/rds-2014-08-15](https://www.npmjs.com/package/@alicloud/rds-2014-08-15) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Rds-2014-08-15 |
| ROS(资源编排) | 2015-09-01 | [@alicloud/ros-2015-09-01](https://www.npmjs.com/package/@alicloud/ros-2015-09-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/ROS-2015-09-01 |
| CS(容器服务) | 2016-08-01 | [@alicloud/cs-2016-08-01](https://www.npmjs.com/package/@alicloud/cs-2015-12-15) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/CS-2015-12-15 |
| Dds(MongoDB) | 2015-12-01 | [@alicloud/dds-2015-12-01](https://www.npmjs.com/package/@alicloud/dds-2015-12-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Dds-2015-12-01 |
| ImageSearch | 2018-01-20 | [@alicloud/imagesearch-2018-01-20](https://www.npmjs.com/package/@alicloud/imagesearch-2018-01-20) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/ImageSearch-2018-01-20|
| imm |  2017-09-06 | [@alicloud/imm-2017-09-06](https://www.npmjs.com/package/@alicloud/imm-2017-09-06) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/imm-2017-09-06 |
| Iot |  2017-04-20 | [@alicloud/iot-2017-04-20](https://www.npmjs.com/package/@alicloud/iot-2017-04-20) |  |
| Push |  2016-08-01 | [@alicloud/push-2016-08-01](https://www.npmjs.com/package/@alicloud/push-2016-08-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Push-2016-08-01 |
| Dm(邮件推送) | 2017-06-22 | [@alicloud/dm-2017-06-22](https://www.npmjs.com/package/@alicloud/dm-2017-06-22) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Dm-2017-06-22 |
| Nlp(自然语言处理) | 2018-04-08 | [@alicloud/nlp-2018-04-08](https://www.npmjs.com/package/@alicloud/nlp-2018-04-08) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Nlp-2018-04-08 |
| rtc | 2018-01-11 | [@alicloud/rtc-2018-01-11](https://www.npmjs.com/package/@alicloud/rtc-2018-01-11) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/rtc-2018-01-11 |

如果您所需要使用的云产品是通过 POP 网关开放，但上述的产品列表中不存在您需要的产品或对应版本，请提 [issue](https://github.com/aliyun/aliyun-openapi-nodejs-sdk/issues/new)，描述所需的产品名及版本号，相关人员会为您生成并发布到 NPM 仓库中。

## 自定义 SDK

自定义 SDK 是非 POP 网关暴露的 OpenAPI，由于具有特殊的客户端逻辑，因此不适于 POP 网关，此类 SDK 无法通过元数据自动生成，由云产品自身提供或开放 OpenAPI 信息，由第三方提供。

下面是自定义 SDK 的列表：

|    产品名    | 版本号 | NPM 包名 | 相关链接 |
| ----------- | ------ | -------- | -------- |
| 函数计算 | 2016-08-15 | [@alicloud/fc](https://www.npmjs.com/package/@alicloud/fc) | https://github.com/aliyun/fc-nodejs-sdk |
| OSS(对象存储) |  | [ali-oss](https://www.npmjs.com/package/ali-oss) | https://github.com/ali-sdk/ali-oss |

如果上述列表中没有您需要的云产品及相关版本，请提交一个 [issue](https://github.com/aliyun/aliyun-openapi-nodejs-sdk/issues/new)，我们将尽快提供相关 Node.js SDK。


## 问题
[提交Issue](https://github.com/aliyun/aliyun-openapi-nodejs-sdk/issues/new)，不符合指南的问题可能会立即关闭。


## 发行说明
每个版本的详细更改记录在[发行说明][release notes]()中.


## API 参考
要知道您想访问的产品提供的 API 以及它们的参数，请参考开放 API 的[产品列表](https://develop.aliyun.com/tools/openapilist)。


## 许可证
[MIT](LICENSE)
