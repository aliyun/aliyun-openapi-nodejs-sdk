# aliyun-openapi-nodejs-sdk

Aliyun OpenAPI Node.js SDK

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
| Dds(MongoDB) | Dds-2015-12-012015-12-01 | [@alicloud/dds-2015-12-01](https://www.npmjs.com/package/@alicloud/dds-2015-12-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Dds-2015-12-01 |
| ImageSearch | 2018-01-20 | [@alicloud/imagesearch-2018-01-20](https://www.npmjs.com/package/@alicloud/imagesearch-2018-01-20) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/ImageSearch-2018-01-20|
| imm |  2017-09-06 | [@alicloud/imm-2017-09-06](https://www.npmjs.com/package/@alicloud/imm-2017-09-06) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/imm-2017-09-06 |
| Iot |  2017-04-20 | [@alicloud/iot-2017-04-20](https://www.npmjs.com/package/@alicloud/iot-2017-04-20) |  |
| Push |  2016-08-01 | [@alicloud/push-2016-08-01](https://www.npmjs.com/package/@alicloud/push-2016-08-01) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Push-2016-08-01 |
| Dm(邮件推送) | 2017-06-22 | [@alicloud/dm-2017-06-22](https://www.npmjs.com/package/@alicloud/dm-2017-06-22) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Dm-2017-06-22 |
| Nlp(自然语言处理) | 2018-04-08 | [@alicloud/nlp-2018-04-08](https://www.npmjs.com/package/@alicloud/nlp-2018-04-08) | https://github.com/aliyun/aliyun-openapi-nodejs-sdk/tree/master/Nlp-2018-04-08 |

如果您所需要使用的云产品是通过 POP 网关开放，但上述的产品列表中不存在您需要的产品或对应版本，请提 [issue](https://github.com/aliyun/aliyun-openapi-nodejs-sdk/issues/new)，描述所需的产品名及版本号，相关人员会为您生成并发布到 NPM 仓库中。

## 自定义 SDK

自定义 SDK 是非 POP 网关暴露的 OpenAPI，由于具有特殊的客户端逻辑，因此不适于 POP 网关，此类 SDK 无法通过元数据自动生成，由云产品自身提供或开放 OpenAPI 信息，由第三方提供。

下面是自定义 SDK 的列表：

|    产品名    | 版本号 | NPM 包名 | 相关链接 |
| ----------- | ------ | -------- | -------- |
| 函数计算 | 2016-08-15 | [@alicloud/fc](https://www.npmjs.com/package/@alicloud/fc) | https://github.com/aliyun/fc-nodejs-sdk |
| OSS(对象存储) |  | [ali-oss](https://www.npmjs.com/package/ali-oss) | https://github.com/ali-sdk/ali-oss |

如果上述列表中没有您需要的云产品及相关版本，请提交一个 [issue](https://github.com/aliyun/aliyun-openapi-nodejs-sdk/issues/new)，我们将尽快提供相关 Node.js SDK。
