
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2016-11-11';
    super(config);
  }

  /**
   * @param {String} Website - website. required.
   * @param {String} Language - language. required.
   * @param {Long} Id - id. required.
   * @param {Integer} ShowLevel - showLevel. optional.
   */
  getDocumentById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Website')) {
      throw new TypeError('parameter "Website" is required');
    }

    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('GetDocumentById', params, options);
  }

  /**
   * @param {Long} ProductId - productId. optional.
   * @param {Long} ParentId - parentId. required.
   * @param {String} Website - website. required.
   * @param {String} Language - language. required.
   * @param {Integer} NodeType - nodeType. optional.
   * @param {Integer} StartPos - startPos. optional.
   * @param {Integer} PageSize - pageSize. optional.
   */
  getDocumentList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    if (!hasOwnProperty(params, 'Website')) {
      throw new TypeError('parameter "Website" is required');
    }

    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    return this.request('GetDocumentList', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   * @param {String} Website - website. optional.
   * @param {String} Language - language. optional.
   * @param {String} Title - title. optional.
   * @param {String} Creator - creator. optional.
   * @param {String} Modifier - modifier. optional.
   * @param {Long} NodeId - nodeId. optional.
   * @param {Integer} Status - status. optional.
   * @param {String} Reason - reason. optional.
   * @param {String} Solution - solution. optional.
   * @param {String} ProductAlias - productAlias. optional.
   * @param {Integer} NodeType - nodeType. optional.
   */
  getPopContentStructureList(params = {}, options = {}) {
    return this.request('GetPopContentStructureList', params, options);
  }

  /**
   * @param {String} Website - website. required.
   * @param {String} Language - language. required.
   * @param {Long} Id - id. required.
   * @param {Integer} ShowLevel - showLevel. optional.
   */
  queryMenuTreeByParentId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Website')) {
      throw new TypeError('parameter "Website" is required');
    }

    if (!hasOwnProperty(params, 'Language')) {
      throw new TypeError('parameter "Language" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('QueryMenuTreeByParentId', params, options);
  }

}

module.exports = Client;
