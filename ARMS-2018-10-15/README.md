### 安装

``` javascript
 $ npm install @alicloud/arms-2018-10-15 --save
```

### 使用方法
1. 安装@alicloud/arms-2018-10-15,请需要根据官方文档做一些配置
2. 产品文档: https://help.aliyun.com/document_detail/42924.html
3. 号码隐私保护控制台: https://arms.console.aliyun.com
3. Node.js版本 >= v8.0.0
4. 不支持在浏览器上使用

### DEMO

``` javascript
const Arms = require("@alicloud/arms-2018-10-15")
// ACCESS_KEY_ID/ACCESS_KEY_SECRET 根据实际申请的账号信息进行替换
const accessKeyId = 'yourAccessKeyId'
const secretAccessKey = 'yourAccessKeySecret'
const regionId = 'cn-hangzhou';
const endpoint = 'http://arms.cn-hangzhou.aliyuncs.com';
//初始化
const arms = new Arms({
  accessKeyId,
  secretAccessKey,
  regionId,
  endpoint,
});

// metricQuery 示例,特别提示参数Filters参数要拼接成如下形式
arms.metricQuery({
  IintervalInSec: 3600000,
  StartTime: 1538352000000,
  EndTime: 1540372944007,
  Metric: 'webstat.url',
  Measures: ['pv', 'uv'],
  "Filters.1.Key": "appId",
  "Filters.1.Value": 1111, // 替换成你的appId
}, {
  TIMEOUT: 30000
}).then(function (res) {
  console.log(res)
}, function (err) {
  console.log('error', err)
});

// 数据集查询
arms.aRMSQueryDataSet({
  datasetId:111,// 替换成你的数据集ID
  minTime: 1538352000000,
  maxTime: 1540372944007,
  intervalInSec:60,
}).then(function (res) {
  console.log(res)
}, function (err) {
  console.log('error', err)
});

```
