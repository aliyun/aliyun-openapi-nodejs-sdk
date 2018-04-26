# imm-2017-09-06-nodejs-sdk

Base on [@alicloud/pop-core](https://www.npmjs.com/package/@alicloud/pop-core)

## Installation

```
npm i @alicloud/imm-2017-09-06
```

## Usage

```js
const IMM = require('@alicloud/imm-2017-09-06');

var client = new IMM({
  endpoint:'http://imm.cn-shanghai.aliyuncs.com',
  accessKeyId: 'your_app_key_id',
  accessKeySecret: 'your_app_key_secret',
  apiVersion: '2017-09-06'
});

try{
  var params = {
    MaxKeys: 10,
    Marker: ''
  };

  var result = await client.ListProjects(params);
  console.log(result);
}catch(err){
  console.log(err);
}
```


You can also use original `client.request` directly:

```js
var params = {
  Marker: '',
  MaxKeys: 10
};
client.request('ListProjects', params)
```

## About the options

```js
client.ListProjects(params, options)
client.request('ListProjects', params, options)
```

```js
options = {
  timeout: 3000, // default 3000 ms
  formatAction: true, // default true, format the action to Action
  formatParams: true, // default true, format the parameter name to first letter upper case
  method: 'GET', // set the http method, default is GET
  headers: {}, // set the http request headers
}
```

For more details, see [@alicloud/pop-core](https://www.npmjs.com/package/@alicloud/pop-core)


And the [API Document](https://help.aliyun.com/document_detail/63881.html)



## License

[MIT](LICENSE)
