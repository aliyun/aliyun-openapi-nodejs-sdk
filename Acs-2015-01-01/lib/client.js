
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2015-01-01';
    super(config);
  }

  deleteAccountBinding(product, aliyunUid, headers = {}, opts = {}) {
    const path = `/AccountBinding/${product}/${aliyunUid}`;
    headers['accept'] = 'application/xml';
    return this.delete(path, {}, headers, opts);
  }

  deleteApi(productName, versionName, apiName, headers = {}, opts = {}) {
    const path = `/Api/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.delete(path, {}, headers, opts);
  }

  deleteControlPolicy(product, controlPolicyName, headers = {}, opts = {}) {
    const path = `/ControlPolicy/${product}/${controlPolicyName}`;
    headers['accept'] = 'application/xml';
    return this.delete(path, {}, headers, opts);
  }

  deleteFlowControl(productName, versionName, apiName, headers = {}, opts = {}) {
    const path = `/FlowControl/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.delete(path, {}, headers, opts);
  }

  deleteFlowSpecial(product, name, headers = {}, opts = {}) {
    const path = `/FlowSpecial/${product}/${name}`;
    headers['accept'] = 'application/xml';
    return this.delete(path, {}, headers, opts);
  }

  deletePolicy(controlPolicyName, product, userId, headers = {}, opts = {}) {
    const path = `/Policy/${product}/${controlPolicyName}/${userId}`;
    headers['accept'] = 'application/xml';
    return this.delete(path, {}, headers, opts);
  }

  deleteProduct(productName, headers = {}, opts = {}) {
    const path = `/Product/${productName}`;
    headers['accept'] = 'application/xml';
    return this.delete(path, {}, headers, opts);
  }

  deleteTairCache(headers = {}, opts = {}) {
    const path = `/TairCache`;
    headers['accept'] = 'application/xml';
    return this.delete(path, {}, headers, opts);
  }

  deleteVersion(productName, versionName, headers = {}, opts = {}) {
    const path = `/Version/${productName}/${versionName}`;
    headers['accept'] = 'application/xml';
    return this.delete(path, {}, headers, opts);
  }

  getAccountBinding(product, query, headers = {}, opts = {}) {
    const path = `/AccountBinding/${product}`;
    headers['accept'] = 'application/xml';
    return this.get(path, query, headers, opts);
  }

  getApi(productName, versionName, apiName, headers = {}, opts = {}) {
    const path = `/Api/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getApiBackup(productName, versionName, apiName, query, headers = {}, opts = {}) {
    const path = `/ApiBackUp/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, query, headers, opts);
  }

  getApiBackupList(productName, versionName, apiName, headers = {}, opts = {}) {
    const path = `/ApiBackUpList/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getApiDoc(productName, versionName, apiName, language, environment, query, headers = {}, opts = {}) {
    const path = `/ApiDoc/${productName}/${versionName}/${apiName}/${language}/${environment}`;
    headers['accept'] = 'application/xml';
    return this.get(path, query, headers, opts);
  }

  getApiDocNew(productName, versionName, apiName, language, isDraft, headers = {}, opts = {}) {
    const path = `/ApiDocNew/${productName}/${versionName}/${apiName}/${language}/${isDraft}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getApiDocument(productName, versionName, apiName, language, site, isDraft, headers = {}, opts = {}) {
    const path = `/ApiDocument/${productName}/${versionName}/${apiName}/${language}/${site}/${isDraft}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getApiNew(productName, versionName, apiName, headers = {}, opts = {}) {
    const path = `/${productName}/${versionName}/${apiName}?new`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getApiWithOffline(productName, versionName, apiName, headers = {}, opts = {}) {
    const path = `/ApiWithOffline/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getConfig(configKey, headers = {}, opts = {}) {
    const path = `/PopConfig/${configKey}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getControlPolicy(product, controlPolicyName, headers = {}, opts = {}) {
    const path = `/ControlPolicy/${product}/${controlPolicyName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getControlPolicyByProduct(product, headers = {}, opts = {}) {
    const path = `/ControlPolicy/${product}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getDocTag(product, tagId, language, headers = {}, opts = {}) {
    const path = `/DocTag/${product}/${tagId}/${language}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getDocTagList(productName, headers = {}, opts = {}) {
    const path = `/DocTag/${productName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getFlowSpecial(product, name, headers = {}, opts = {}) {
    const path = `/FlowSpecial/${product}/${name}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getFlowSpecialAPI(product, query, headers = {}, opts = {}) {
    const path = `/GetFlowSpecialAPI/${product}/${name}`;
    headers['accept'] = 'application/xml';
    return this.get(path, query, headers, opts);
  }

  getFlowSpecialByProduct(product, headers = {}, opts = {}) {
    const path = `/FlowSpecial/${product}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getFlowSpecialByUserId(popUserId, product, headers = {}, opts = {}) {
    const path = `/GetFlowSpecialByUserId/${product}/${popUserId}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getGatedLaunchApi(productName, versionName, apiName, headers = {}, opts = {}) {
    const path = `/GatedLaunch/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getGatedLaunchPolicy(productName, policyName, headers = {}, opts = {}) {
    const path = `/GatedLaunchPolicy/${productName}/${policyName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getGatedLaunchPolicyByProduct(product, headers = {}, opts = {}) {
    const path = `/GatedLaunchPolicy/${product}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getGlobal(headers = {}, opts = {}) {
    const path = `/`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getProduct(productName, headers = {}, opts = {}) {
    const path = `/Product/${productName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getProductDoc(productName, language, headers = {}, opts = {}) {
    const path = `/ProductDoc/${productName}/${language}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getProductDocNew(productName, language, isDraft, headers = {}, opts = {}) {
    const path = `/ProductDocNew/${productName}/${language}/${isDraft}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getProductDocument(productName, language, site, isDraft, headers = {}, opts = {}) {
    const path = `/ProductDocument/${productName}/${language}/${site}/${isDraft}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getSecretKey(product, headers = {}, opts = {}) {
    const path = `/SecretKey/${product}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getSystemMeta(metaName, headers = {}, opts = {}) {
    const path = `/PopSystemMeta/${metaName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getTairCache(headers = {}, opts = {}) {
    const path = `/TairCache`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getVersion(productName, versionName, headers = {}, opts = {}) {
    const path = `/Version/${productName}/${versionName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getVersionDoc(productName, versionName, language, headers = {}, opts = {}) {
    const path = `/VersionDoc/${productName}/${versionName}/${language}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getVersionDocNew(productName, versionName, language, isDraft, headers = {}, opts = {}) {
    const path = `/VersionDocNew/${productName}/${versionName}/${language}/${isDraft}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getVersionDocument(productName, versionName, language, site, isDraft, headers = {}, opts = {}) {
    const path = `/VersionDocument/${productName}/${versionName}/${language}/${site}/${isDraft}`;
    headers['accept'] = 'application/xml';
    return this.get(path, {}, headers, opts);
  }

  getVersionWithAllApi(productName, versionName, query, headers = {}, opts = {}) {
    const path = `/VersionWithAllApi/${productName}/${versionName}`;
    headers['accept'] = 'application/xml';
    return this.get(path, query, headers, opts);
  }

  putAccountBinding(product, aliyunUid, bucEmpId, body, headers = {}, opts = {}) {
    const path = `/AccountBinding/${product}/${aliyunUid}/${bucEmpId}`;
    headers['accept'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putApi(productName, versionName, apiName, body, headers = {}, opts = {}) {
    const path = `/Api/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putApiDoc(productName, versionName, apiName, language, environment, body, headers = {}, opts = {}) {
    const path = `/ApiDoc/${productName}/${versionName}/${apiName}/${language}/${environment}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putApiDocument(productName, versionName, apiName, language, site, body, headers = {}, opts = {}) {
    const path = `/ApiDocument/${productName}/${versionName}/${apiName}/${language}/${site}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putApiErrorMapping(productName, versionName, apiName, body, headers = {}, opts = {}) {
    const path = `/ErrorMapping/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putApiGatedLaunch(productName, versionName, apiName, body, headers = {}, opts = {}) {
    const path = `/GatedLaunch/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.post(path, {}, body, headers, opts);
  }

  putApiNew(productName, versionName, apiName, body, headers = {}, opts = {}) {
    const path = `/${productName}/${versionName}/${apiName}?new`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putApiParameters(productName, versionName, apiName, body, headers = {}, opts = {}) {
    const path = `/Parameters/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putApiRelease(productName, versionName, apiName, body, headers = {}, opts = {}) {
    const path = `/Release/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putApiResultMapping(productName, versionName, apiName, body, headers = {}, opts = {}) {
    const path = `/ResultMapping/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putApiRollback(productName, versionName, apiName, query, body, headers = {}, opts = {}) {
    const path = `/Rollback/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, query, body, headers, opts);
  }

  putApiStatus(productName, versionName, apiName, query, body, headers = {}, opts = {}) {
    const path = `/Status/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, query, body, headers, opts);
  }

  putApiVisibility(productName, versionName, apiName, body, headers = {}, opts = {}) {
    const path = `/ApiVisibility/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putConfig(body, headers = {}, opts = {}) {
    const path = `/PopConfig`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putControlPolicy(body, headers = {}, opts = {}) {
    const path = `/ControlPolicy`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putDocTag(product, tagId, language, body, headers = {}, opts = {}) {
    const path = `/DocTag/${product}/${tagId}/${language}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putFlowControl(productName, versionName, apiName, body, headers = {}, opts = {}) {
    const path = `/FlowControl/${productName}/${versionName}/${apiName}`;
    headers['accept'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putFlowSpecial(body, headers = {}, opts = {}) {
    const path = `/FlowSpecial`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putGatedLaunchPolicy(body, headers = {}, opts = {}) {
    const path = `/GatedLaunchPolicy`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putGlobalErrorMapping(body, headers = {}, opts = {}) {
    const path = `/ErrorMapping`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putPolicy(body, headers = {}, opts = {}) {
    const path = `/Policy`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putProduct(productName, body, headers = {}, opts = {}) {
    const path = `/Product/${productName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putProductDoc(productName, language, body, headers = {}, opts = {}) {
    const path = `/ProductDoc/${productName}/${language}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putProductDocument(productName, language, site, body, headers = {}, opts = {}) {
    const path = `/ProductDocument/${productName}/${language}/${site}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putSecretKey(body, headers = {}, opts = {}) {
    const path = `/SecretKey`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putSystemMeta(body, headers = {}, opts = {}) {
    const path = `/PopSystemMeta`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putVersion(productName, versionName, body, headers = {}, opts = {}) {
    const path = `/Version/${productName}/${versionName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putVersionDoc(productName, versionName, language, body, headers = {}, opts = {}) {
    const path = `/VersionDoc/${productName}/${versionName}/${language}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putVersionErrorMapping(productName, versionName, body, headers = {}, opts = {}) {
    const path = `/ErrorMapping/${productName}/${versionName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putVersionParameters(productName, versionName, body, headers = {}, opts = {}) {
    const path = `/Parameters/${productName}/${versionName}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  releaseApiDoc(productName, versionName, apiName, language, body, headers = {}, opts = {}) {
    const path = `/ReleaseApiDoc/${productName}/${versionName}/${apiName}/${language}`;
    headers['accept'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

  putVersionDocument(productName, versionName, language, site, body, headers = {}, opts = {}) {
    const path = `/VersionDocument/${productName}/${versionName}/${language}/${site}`;
    headers['accept'] = 'application/xml';
    headers['content-type'] = 'application/xml';
    return this.put(path, {}, body, headers, opts);
  }

}

module.exports = Client;
