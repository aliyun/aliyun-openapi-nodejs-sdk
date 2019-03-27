
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-07-04';
    super(config);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityAccountServiceAuthIdentity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityAccountServiceAuthIdentity', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Token - token. required.
   * @param {String} Key - key. required.
   * @param {String} LoginSource - loginSource. required.
   */
  cityAccountServiceRegisterIdentity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    if (!hasOwnProperty(params, 'Key')) {
      throw new TypeError('parameter "Key" is required');
    }

    if (!hasOwnProperty(params, 'LoginSource')) {
      throw new TypeError('parameter "LoginSource" is required');
    }

    return this.request('CityAccountServiceRegisterIdentity', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} Token - token. required.
   */
  cityAccountServiceUnRegisterIdentity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Token')) {
      throw new TypeError('parameter "Token" is required');
    }

    return this.request('CityAccountServiceUnRegisterIdentity', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   */
  cityAppkeyGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityAppkeyGet', params, options);
  }

  /**
   * @param {String} Component - component. required.
   * @param {String} Domain - domain. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentAdd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Component')) {
      throw new TypeError('parameter "Component" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentAdd', params, options);
  }

  /**
   * @param {Json} Component - component. required.
   * @param {String} DomainName - domainName. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentAddRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Component')) {
      throw new TypeError('parameter "Component" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentAddRequest', params, options);
  }

  /**
   * @param {Long} ComponentId - componentId. required.
   * @param {String} Domain - domain. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ComponentId')) {
      throw new TypeError('parameter "ComponentId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentDelete', params, options);
  }

  /**
   * @param {Long} ComponentId - componentId. required.
   * @param {String} DomainName - domainName. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentDeleteRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ComponentId')) {
      throw new TypeError('parameter "ComponentId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentDeleteRequest', params, options);
  }

  /**
   * @param {Long} ComponentId - componentId. required.
   * @param {String} Domain - domain. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentDetailGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ComponentId')) {
      throw new TypeError('parameter "ComponentId" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentDetailGet', params, options);
  }

  /**
   * @param {Long} ComponentId - componentId. required.
   * @param {String} DomainName - domainName. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentDetailGetRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ComponentId')) {
      throw new TypeError('parameter "ComponentId" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentDetailGetRequest', params, options);
  }

  /**
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} Domain - domain. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentListGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentListGet', params, options);
  }

  /**
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} DomainName - domainName. required.
   * @param {Long} CityId - cityId. required.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentListGetRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'CityId')) {
      throw new TypeError('parameter "CityId" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentListGetRequest', params, options);
  }

  /**
   * @param {String} Component - component. required.
   * @param {String} Domain - domain. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Component')) {
      throw new TypeError('parameter "Component" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentModify', params, options);
  }

  /**
   * @param {Json} Component - component. required.
   * @param {String} DomainName - domainName. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentModifyRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Component')) {
      throw new TypeError('parameter "Component" is required');
    }

    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentModifyRequest', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {Long} CityId - cityId. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentTemplatesGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentTemplatesGet', params, options);
  }

  /**
   * @param {String} DomainName - domainName. required.
   * @param {Long} CityId - cityId. required.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityComponentTemplatesGetRequest(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DomainName')) {
      throw new TypeError('parameter "DomainName" is required');
    }

    if (!hasOwnProperty(params, 'CityId')) {
      throw new TypeError('parameter "CityId" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityComponentTemplatesGetRequest', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityDataBoardCountAvailableCard(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardCountAvailableCard', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Icon - icon. optional.
   * @param {String} OrgList - orgList. optional.
   * @param {String} RoleList - roleList. optional.
   * @param {String} UserList - userList. optional.
   */
  cityDataBoardCreate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardCreate', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   */
  cityDataBoardDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardDelete', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   */
  cityDataBoardGetAccessors(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardGetAccessors', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityDataBoardGetList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardGetList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   * @param {String} ModelId - modelId. optional.
   */
  cityDataBoardGetModelDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardGetModelDetail', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   */
  cityDataBoardGetModelList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardGetModelList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   */
  cityDataBoardGetPerms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardGetPerms', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppIds - appIds. optional.
   */
  cityDataBoardGetPermsInBatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardGetPermsInBatch', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   * @param {String} QueryJson - queryJson. optional.
   */
  cityDataBoardQueryData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardQueryData', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   * @param {String} StandardDimType - standardDimType. optional.
   * @param {String} StandardDimLevel - standardDimLevel. optional.
   */
  cityDataBoardQueryStandardDim(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardQueryStandardDim', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} Icon - icon. optional.
   * @param {String} OrgList - orgList. optional.
   * @param {String} RoleList - roleList. optional.
   * @param {String} UserList - userList. optional.
   */
  cityDataBoardUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityDataBoardUpdate', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} IoTToken - ioTToken. required.
   */
  cityDatamanagerBizmodelGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityDatamanagerBizmodelGet', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} IoTToken - ioTToken. required.
   * @param {Long} DataViewId - dataViewId. optional.
   * @param {String} ActionCode - actionCode. optional.
   */
  cityDatamanagerDataviewAction(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    return this.request('CityDatamanagerDataviewAction', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} IoTToken - ioTToken. required.
   * @param {Long} DataViewId - dataViewId. required.
   */
  cityDatamanagerDataviewDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'DataViewId')) {
      throw new TypeError('parameter "DataViewId" is required');
    }

    return this.request('CityDatamanagerDataviewDetail', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} PreviewDataView - previewDataView. required.
   */
  cityDatamanagerDataviewPreview(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'PreviewDataView')) {
      throw new TypeError('parameter "PreviewDataView" is required');
    }

    return this.request('CityDatamanagerDataviewPreview', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} DataView - dataView. required.
   */
  cityDatamanagerDataviewSave(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'DataView')) {
      throw new TypeError('parameter "DataView" is required');
    }

    return this.request('CityDatamanagerDataviewSave', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} IoTToken - ioTToken. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} State - state. optional.
   * @param {String} DataViewName - dataViewName. optional.
   */
  cityDatamanagerDataviewSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('CityDatamanagerDataviewSearch', params, options);
  }

  /**
   * @param {String} Domain - domain. required.
   * @param {String} IoTToken - ioTToken. required.
   * @param {Long} BizModelId - bizModelId. required.
   */
  cityDatamanagerGetDataFieldList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'BizModelId')) {
      throw new TypeError('parameter "BizModelId" is required');
    }

    return this.request('CityDatamanagerGetDataFieldList', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminApiGroupServiceDeleteByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiGroupServiceDeleteByTenantId', params, options);
  }

  /**
   * @param {Long} ApiId - apiId. required.
   * @param {Long} GroupId - groupId. required.
   */
  cityGwAdminApiGroupServiceInsert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiId')) {
      throw new TypeError('parameter "ApiId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('CityGwAdminApiGroupServiceInsert', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiGroupServiceQueryAllByTenantId(params = {}, options = {}) {
    return this.request('CityGwAdminApiGroupServiceQueryAllByTenantId', params, options);
  }

  /**
   * @param {Long} GroupId - groupId. required.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiGroupServiceQueryByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('CityGwAdminApiGroupServiceQueryByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Long} ApiId - apiId. optional.
   * @param {Long} GroupId - groupId. optional.
   */
  cityGwAdminApiGroupServiceUpdateByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiGroupServiceUpdateByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminApiMethodRouterServiceDeleteByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiMethodRouterServiceDeleteByTenantId', params, options);
  }

  /**
   * @param {String} MethodRouterName - methodRouterName. required.
   * @param {Long} ServiceRouterId - serviceRouterId. required.
   * @param {String} Description - description. optional.
   */
  cityGwAdminApiMethodRouterServiceInsert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MethodRouterName')) {
      throw new TypeError('parameter "MethodRouterName" is required');
    }

    if (!hasOwnProperty(params, 'ServiceRouterId')) {
      throw new TypeError('parameter "ServiceRouterId" is required');
    }

    return this.request('CityGwAdminApiMethodRouterServiceInsert', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiMethodRouterServiceQueryAllByTenantId(params = {}, options = {}) {
    return this.request('CityGwAdminApiMethodRouterServiceQueryAllByTenantId', params, options);
  }

  /**
   * @param {String} MethodRouterName - methodRouterName. required.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiMethodRouterServiceQueryByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MethodRouterName')) {
      throw new TypeError('parameter "MethodRouterName" is required');
    }

    return this.request('CityGwAdminApiMethodRouterServiceQueryByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} MethodRouterName - methodRouterName. optional.
   * @param {Long} ServiceRouterId - serviceRouterId. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminApiMethodRouterServiceUpdateByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiMethodRouterServiceUpdateByTenantId', params, options);
  }

  /**
   * @param {Integer} Timeout - timeout. optional.
   */
  cityGwAdminApiMockServiceMock(params = {}, options = {}) {
    return this.request('CityGwAdminApiMockServiceMock', params, options);
  }

  /**
   * @param {Integer} Type - type. required.
   */
  cityGwAdminApiPublishServicePublish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CityGwAdminApiPublishServicePublish', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} TenantIds - tenantIds. required.
   */
  cityGwAdminApiResourceServiceAuthPerm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'TenantIds')) {
      throw new TypeError('parameter "TenantIds" is required');
    }

    return this.request('CityGwAdminApiResourceServiceAuthPerm', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} tenantIds - tenantIds. required.
   */
  cityGwAdminApiResourceServiceCancelAuthPerm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'tenantIds')) {
      throw new TypeError('parameter "tenantIds" is required');
    }

    return this.request('CityGwAdminApiResourceServiceCancelAuthPerm', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminApiResourceServiceDeleteByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiResourceServiceDeleteByTenantId', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   * @param {String} ActionCode - actionCode. required.
   * @param {String} ApiIds - apiIds. required.
   * @param {String} Description - description. optional.
   */
  cityGwAdminApiResourceServiceInsert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'ActionCode')) {
      throw new TypeError('parameter "ActionCode" is required');
    }

    if (!hasOwnProperty(params, 'ApiIds')) {
      throw new TypeError('parameter "ApiIds" is required');
    }

    return this.request('CityGwAdminApiResourceServiceInsert', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Integer} Type - type. required.
   */
  cityGwAdminApiResourceServicePublish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CityGwAdminApiResourceServicePublish', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiResourceServiceQueryAllByTenantId(params = {}, options = {}) {
    return this.request('CityGwAdminApiResourceServiceQueryAllByTenantId', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiResourceServiceQueryByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('CityGwAdminApiResourceServiceQueryByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminApiResourceServiceQueryDetailById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiResourceServiceQueryDetailById', params, options);
  }

  /**
   * @param {String} ApiName - apiName. required.
   */
  cityGwAdminApiResourceServiceQueryResource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    return this.request('CityGwAdminApiResourceServiceQueryResource', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} ActionCode - actionCode. optional.
   * @param {String} ApiIds - apiIds. required.
   * @param {String} Description - description. optional.
   */
  cityGwAdminApiResourceServiceUpdateByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'ApiIds')) {
      throw new TypeError('parameter "ApiIds" is required');
    }

    return this.request('CityGwAdminApiResourceServiceUpdateByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminApiServiceDeleteByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiServiceDeleteByTenantId', params, options);
  }

  /**
   * @param {String} ApiName - apiName. required.
   * @param {Long} HsfServiceId - hsfServiceId. required.
   * @param {String} NeedPop - needPop. required.
   * @param {String} PopApi - popApi. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminApiServiceInsert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    if (!hasOwnProperty(params, 'HsfServiceId')) {
      throw new TypeError('parameter "HsfServiceId" is required');
    }

    if (!hasOwnProperty(params, 'NeedPop')) {
      throw new TypeError('parameter "NeedPop" is required');
    }

    return this.request('CityGwAdminApiServiceInsert', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminApiServiceNameRouterServiceDeleteByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiServiceNameRouterServiceDeleteByTenantId', params, options);
  }

  /**
   * @param {String} ServiceRouterName - serviceRouterName. required.
   * @param {String} HsfInterfaceName - hsfInterfaceName. required.
   * @param {String} HsfMethodName - hsfMethodName. required.
   * @param {String} HsfVersion - hsfVersion. required.
   * @param {String} HsfGroup - hsfGroup. required.
   * @param {Integer} Timeout - timeout. optional.
   * @param {Long} AppId - appId. required.
   * @param {String} Description - description. optional.
   */
  cityGwAdminApiServiceNameRouterServiceInsert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceRouterName')) {
      throw new TypeError('parameter "ServiceRouterName" is required');
    }

    if (!hasOwnProperty(params, 'HsfInterfaceName')) {
      throw new TypeError('parameter "HsfInterfaceName" is required');
    }

    if (!hasOwnProperty(params, 'HsfMethodName')) {
      throw new TypeError('parameter "HsfMethodName" is required');
    }

    if (!hasOwnProperty(params, 'HsfVersion')) {
      throw new TypeError('parameter "HsfVersion" is required');
    }

    if (!hasOwnProperty(params, 'HsfGroup')) {
      throw new TypeError('parameter "HsfGroup" is required');
    }

    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('CityGwAdminApiServiceNameRouterServiceInsert', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiServiceNameRouterServiceQueryAllByTenantId(params = {}, options = {}) {
    return this.request('CityGwAdminApiServiceNameRouterServiceQueryAllByTenantId', params, options);
  }

  /**
   * @param {String} ServiceRouterName - serviceRouterName. required.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiServiceNameRouterServiceQueryByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceRouterName')) {
      throw new TypeError('parameter "ServiceRouterName" is required');
    }

    return this.request('CityGwAdminApiServiceNameRouterServiceQueryByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} ServiceRouterName - serviceRouterName. optional.
   * @param {String} HsfInterfaceName - hsfInterfaceName. optional.
   * @param {String} HsfMethodName - hsfMethodName. optional.
   * @param {String} HsfVersion - hsfVersion. optional.
   * @param {String} HsfGroup - hsfGroup. optional.
   * @param {Integer} Timeout - timeout. optional.
   * @param {Long} AppId - appId. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminApiServiceNameRouterServiceUpdateByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiServiceNameRouterServiceUpdateByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Integer} Type - type. required.
   */
  cityGwAdminApiServicePublish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CityGwAdminApiServicePublish', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiServiceQueryAllByTenantId(params = {}, options = {}) {
    return this.request('CityGwAdminApiServiceQueryAllByTenantId', params, options);
  }

  /**
   * @param {String} ApiName - apiName. required.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminApiServiceQueryByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ApiName')) {
      throw new TypeError('parameter "ApiName" is required');
    }

    return this.request('CityGwAdminApiServiceQueryByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminApiServiceQueryDetailById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminApiServiceQueryDetailById', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Long} HsfServiceId - hsfServiceId. optional.
   * @param {String} NeedPop - needPop. required.
   * @param {String} PopApi - popApi. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminApiServiceUpdateByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'NeedPop')) {
      throw new TypeError('parameter "NeedPop" is required');
    }

    return this.request('CityGwAdminApiServiceUpdateByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminAppServiceDeleteByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminAppServiceDeleteByTenantId', params, options);
  }

  /**
   * @param {String} AppName - appName. required.
   * @param {String} Description - description. optional.
   */
  cityGwAdminAppServiceInsert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('CityGwAdminAppServiceInsert', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminAppServiceQueryAllByTenantId(params = {}, options = {}) {
    return this.request('CityGwAdminAppServiceQueryAllByTenantId', params, options);
  }

  /**
   * @param {String} AppName - appName. required.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminAppServiceQueryByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppName')) {
      throw new TypeError('parameter "AppName" is required');
    }

    return this.request('CityGwAdminAppServiceQueryByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} AppName - appName. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminAppServiceUpdateByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminAppServiceUpdateByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminGroupServiceDeleteByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminGroupServiceDeleteByTenantId', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   * @param {String} ActionCode - actionCode. optional.
   * @param {String} ScopeCode - scopeCode. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminGroupServiceInsert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('CityGwAdminGroupServiceInsert', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   * @param {String} ActionCode - actionCode. optional.
   * @param {String} ScopeCode - scopeCode. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminGroupServiceInsert1(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('CityGwAdminGroupServiceInsert1', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminGroupServiceQueryAllByTenantId(params = {}, options = {}) {
    return this.request('CityGwAdminGroupServiceQueryAllByTenantId', params, options);
  }

  /**
   * @param {String} GroupName - groupName. required.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminGroupServiceQueryByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    return this.request('CityGwAdminGroupServiceQueryByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} GroupName - groupName. optional.
   * @param {String} ActionCode - actionCode. optional.
   * @param {String} ScopeCode - scopeCode. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminGroupServiceUpdateByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminGroupServiceUpdateByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminHsfServiceDeleteByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminHsfServiceDeleteByTenantId', params, options);
  }

  /**
   * @param {String} HsfInterfaceName - hsfInterfaceName. required.
   * @param {String} HsfMethodName - hsfMethodName. required.
   * @param {String} HsfGroup - hsfGroup. required.
   * @param {String} HsfVersion - hsfVersion. required.
   * @param {Integer} Timeout - timeout. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminHsfServiceInsert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HsfInterfaceName')) {
      throw new TypeError('parameter "HsfInterfaceName" is required');
    }

    if (!hasOwnProperty(params, 'HsfMethodName')) {
      throw new TypeError('parameter "HsfMethodName" is required');
    }

    if (!hasOwnProperty(params, 'HsfGroup')) {
      throw new TypeError('parameter "HsfGroup" is required');
    }

    if (!hasOwnProperty(params, 'HsfVersion')) {
      throw new TypeError('parameter "HsfVersion" is required');
    }

    return this.request('CityGwAdminHsfServiceInsert', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminHsfServiceQueryAllByTenantId(params = {}, options = {}) {
    return this.request('CityGwAdminHsfServiceQueryAllByTenantId', params, options);
  }

  /**
   * @param {String} HsfInterfaceName - hsfInterfaceName. required.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminHsfServiceQueryByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'HsfInterfaceName')) {
      throw new TypeError('parameter "HsfInterfaceName" is required');
    }

    return this.request('CityGwAdminHsfServiceQueryByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} HsfMethodName - hsfMethodName. optional.
   * @param {String} HsfGroup - hsfGroup. optional.
   * @param {String} HsfVersion - hsfVersion. optional.
   * @param {Integer} Timeout - timeout. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminHsfServiceUpdateByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminHsfServiceUpdateByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminOutGwServiceDeleteByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminOutGwServiceDeleteByTenantId', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} ReqProtocol - reqProtocol. required.
   * @param {String} ServiceProvider - serviceProvider. required.
   * @param {String} Uri - uri. required.
   * @param {String} NeedReqSign - needReqSign. required.
   * @param {String} NeedResVerify - needResVerify. required.
   * @param {String} NeedQosLimit - needQosLimit. required.
   * @param {String} SensitiveParameterIn - sensitiveParameterIn. optional.
   * @param {String} SensitiveParameterOut - sensitiveParameterOut. optional.
   * @param {String} Properties - properties. optional.
   * @param {String} SecurityInfo - securityInfo. optional.
   * @param {String} qosInfos - qosInfos. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminOutGwServiceInsert(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'ReqProtocol')) {
      throw new TypeError('parameter "ReqProtocol" is required');
    }

    if (!hasOwnProperty(params, 'ServiceProvider')) {
      throw new TypeError('parameter "ServiceProvider" is required');
    }

    if (!hasOwnProperty(params, 'Uri')) {
      throw new TypeError('parameter "Uri" is required');
    }

    if (!hasOwnProperty(params, 'NeedReqSign')) {
      throw new TypeError('parameter "NeedReqSign" is required');
    }

    if (!hasOwnProperty(params, 'NeedResVerify')) {
      throw new TypeError('parameter "NeedResVerify" is required');
    }

    if (!hasOwnProperty(params, 'NeedQosLimit')) {
      throw new TypeError('parameter "NeedQosLimit" is required');
    }

    return this.request('CityGwAdminOutGwServiceInsert', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {Integer} Type - type. required.
   */
  cityGwAdminOutGwServicePublish(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CityGwAdminOutGwServicePublish', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminOutGwServiceQueryAllByTenantId(params = {}, options = {}) {
    return this.request('CityGwAdminOutGwServiceQueryAllByTenantId', params, options);
  }

  /**
   * @param {String} Name - name. required.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  cityGwAdminOutGwServiceQueryByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CityGwAdminOutGwServiceQueryByTenantId', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   */
  cityGwAdminOutGwServiceQueryDetailById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityGwAdminOutGwServiceQueryDetailById', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} ReqProtocol - reqProtocol. optional.
   * @param {String} ServiceProvider - serviceProvider. optional.
   * @param {String} Uri - uri. optional.
   * @param {String} NeedReqSign - needReqSign. required.
   * @param {String} NeedResVerify - needResVerify. required.
   * @param {String} NeedQosLimit - needQosLimit. required.
   * @param {String} SensitiveParameterIn - sensitiveParameterIn. optional.
   * @param {String} SensitiveParameterOut - sensitiveParameterOut. optional.
   * @param {String} Properties - properties. optional.
   * @param {String} SecurityInfo - securityInfo. optional.
   * @param {String} QosInfos - qosInfos. optional.
   * @param {String} Description - description. optional.
   */
  cityGwAdminOutGwServiceUpdateByTenantId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    if (!hasOwnProperty(params, 'NeedReqSign')) {
      throw new TypeError('parameter "NeedReqSign" is required');
    }

    if (!hasOwnProperty(params, 'NeedResVerify')) {
      throw new TypeError('parameter "NeedResVerify" is required');
    }

    if (!hasOwnProperty(params, 'NeedQosLimit')) {
      throw new TypeError('parameter "NeedQosLimit" is required');
    }

    return this.request('CityGwAdminOutGwServiceUpdateByTenantId', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityHomePageGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityHomePageGet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} Auid - auid. optional.
   * @param {String} Domain - domain. required.
   * @param {String} OrganizationId - organizationId. required.
   */
  cityOrganizationServiceCheckDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('CityOrganizationServiceCheckDelete', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} Auid - auid. optional.
   * @param {String} Domain - domain. required.
   * @param {String} OrganizationId - organizationId. required.
   */
  cityOrganizationServiceDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    return this.request('CityOrganizationServiceDelete', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} Auid - auid. optional.
   * @param {String} Domain - domain. required.
   */
  cityOrganizationServiceGetAllList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityOrganizationServiceGetAllList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} Auid - auid. optional.
   * @param {String} Domain - domain. required.
   * @param {String} OrganizationId - organizationId. required.
   * @param {Long} PageNo - pageNo. required.
   * @param {Long} PageSize - pageSize. required.
   */
  cityOrganizationServiceGetChildList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('CityOrganizationServiceGetChildList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {String} TenantId - tenantId. optional.
   * @param {String} Auid - auid. optional.
   * @param {String} Data - data. required.
   */
  cityOrganizationServiceModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('CityOrganizationServiceModify', params, options);
  }

  /**
   * @param {Long} CityId - cityId. optional.
   */
  cityPaaSCityConfigQuery(params = {}, options = {}) {
    return this.request('CityPaaSCityConfigQuery', params, options);
  }

  /**
   * @param {Long} CityId - cityId. optional.
   * @param {String} Data - data. optional.
   */
  cityPaaSCityConfigUpdate(params = {}, options = {}) {
    return this.request('CityPaaSCityConfigUpdate', params, options);
  }

  /**
   * @param {String} Data - data. optional.
   */
  cityPaaSCityCreate(params = {}, options = {}) {
    return this.request('CityPaaSCityCreate', params, options);
  }

  /**
   * @param {Long} CityId - cityId. optional.
   */
  cityPaaSCityDelete(params = {}, options = {}) {
    return this.request('CityPaaSCityDelete', params, options);
  }

  /**
   * @param {Long} CityId - cityId. optional.
   */
  cityPaaSCityLocationQuery(params = {}, options = {}) {
    return this.request('CityPaaSCityLocationQuery', params, options);
  }

  /**
   * @param {Long} CityId - cityId. optional.
   */
  cityPaaSCityPublish(params = {}, options = {}) {
    return this.request('CityPaaSCityPublish', params, options);
  }

  /**
   * @param {Long} CityId - cityId. optional.
   */
  cityPaaSCityQuery(params = {}, options = {}) {
    return this.request('CityPaaSCityQuery', params, options);
  }

  /**
   * @param {Long} PageSize - pageSize. optional.
   * @param {Long} PageNo - pageNo. optional.
   */
  cityPaaSCityQueryPaging(params = {}, options = {}) {
    return this.request('CityPaaSCityQueryPaging', params, options);
  }

  /**
   * @param {Long} CityId - cityId. optional.
   * @param {String} Data - data. optional.
   */
  cityPaaSCityUpdate(params = {}, options = {}) {
    return this.request('CityPaaSCityUpdate', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   */
  cityPermServiceGetAllList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityPermServiceGetAllList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   */
  cityPersonalSettingsServiceGetAccountMeta(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityPersonalSettingsServiceGetAccountMeta', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   */
  cityPersonalSettingsServiceGetUserProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityPersonalSettingsServiceGetUserProfile', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {String} AppKey - appKey. required.
   * @param {String} OldPwd - oldPwd. required.
   * @param {String} NewPwd - newPwd. required.
   */
  cityPersonalSettingsServiceModifyUserPassword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AppKey')) {
      throw new TypeError('parameter "AppKey" is required');
    }

    if (!hasOwnProperty(params, 'OldPwd')) {
      throw new TypeError('parameter "OldPwd" is required');
    }

    if (!hasOwnProperty(params, 'NewPwd')) {
      throw new TypeError('parameter "NewPwd" is required');
    }

    return this.request('CityPersonalSettingsServiceModifyUserPassword', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Data - data. required.
   */
  cityPersonalSettingsServiceUpdateUserProfile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('CityPersonalSettingsServiceUpdateUserProfile', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {Long} ParentId - parentId. required.
   * @param {String} AreaName - areaName. required.
   */
  cityRegionalismServiceAddArea(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    if (!hasOwnProperty(params, 'AreaName')) {
      throw new TypeError('parameter "AreaName" is required');
    }

    return this.request('CityRegionalismServiceAddArea', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {Long} AreaId - areaId. required.
   */
  cityRegionalismServiceDeleteArea(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AreaId')) {
      throw new TypeError('parameter "AreaId" is required');
    }

    return this.request('CityRegionalismServiceDeleteArea', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   */
  cityRegionalismServiceGetCityAllAreas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityRegionalismServiceGetCityAllAreas', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   */
  cityRegionalismServiceGetCityAllAreas1(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityRegionalismServiceGetCityAllAreas1', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   */
  cityRegionalismServicePublishNotify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityRegionalismServicePublishNotify', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {Long} AreaId - areaId. required.
   */
  cityRegionalismServiceQueryAreaByParentId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AreaId')) {
      throw new TypeError('parameter "AreaId" is required');
    }

    return this.request('CityRegionalismServiceQueryAreaByParentId', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {Long} AreaId - areaId. required.
   */
  cityRegionalismServiceQueryParentAreaById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'AreaId')) {
      throw new TypeError('parameter "AreaId" is required');
    }

    return this.request('CityRegionalismServiceQueryParentAreaById', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {Long} ParentId - parentId. required.
   * @param {String} SortAreas - sortAreas. required.
   */
  cityRegionalismServiceSortArea(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    if (!hasOwnProperty(params, 'SortAreas')) {
      throw new TypeError('parameter "SortAreas" is required');
    }

    return this.request('CityRegionalismServiceSortArea', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {Long} ParentId - parentId. required.
   * @param {Long} AreaId - areaId. required.
   * @param {String} AreaName - areaName. required.
   */
  cityRegionalismServiceUpdateArea(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'ParentId')) {
      throw new TypeError('parameter "ParentId" is required');
    }

    if (!hasOwnProperty(params, 'AreaId')) {
      throw new TypeError('parameter "AreaId" is required');
    }

    if (!hasOwnProperty(params, 'AreaName')) {
      throw new TypeError('parameter "AreaName" is required');
    }

    return this.request('CityRegionalismServiceUpdateArea', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {String} Data - data. required.
   */
  cityRoleServiceAddOrModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('CityRoleServiceAddOrModify', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {String} RoleCode - roleCode. required.
   */
  cityRoleServiceDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RoleCode')) {
      throw new TypeError('parameter "RoleCode" is required');
    }

    return this.request('CityRoleServiceDelete', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   */
  cityRoleServiceGetAllList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityRoleServiceGetAllList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   * @param {String} RoleCode - roleCode. required.
   */
  cityRoleServiceIsAuthDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'RoleCode')) {
      throw new TypeError('parameter "RoleCode" is required');
    }

    return this.request('CityRoleServiceIsAuthDelete', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} OrganizationId - organizationId. required.
   * @param {String} Data - data. required.
   */
  cityUserServiceAdjustingOrganization(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'OrganizationId')) {
      throw new TypeError('parameter "OrganizationId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('CityUserServiceAdjustingOrganization', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} Data - data. required.
   */
  cityUserServiceCheckPerm(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('CityUserServiceCheckPerm', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} DeleteAuid - deleteAuid. required.
   * @param {String} OrganizationId - organizationId. optional.
   * @param {String} RoleCode - roleCode. optional.
   */
  cityUserServiceDelete(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'DeleteAuid')) {
      throw new TypeError('parameter "DeleteAuid" is required');
    }

    return this.request('CityUserServiceDelete', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} OrganizationId - organizationId. optional.
   * @param {String} RoleCode - roleCode. optional.
   * @param {String} KeyWord - keyWord. optional.
   * @param {Long} PageNo - pageNo. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  cityUserServiceGetAllList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityUserServiceGetAllList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   */
  cityUserServiceGetAllOrganization(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityUserServiceGetAllOrganization', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. optional.
   * @param {String} Domain - domain. required.
   */
  cityUserServiceGetAllRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityUserServiceGetAllRole', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} Data - data. required.
   */
  cityUserServiceModify(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    return this.request('CityUserServiceModify', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityUserServiceQueryMenus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityUserServiceQueryMenus', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   * @param {String} AppGroupId - appGroupId. optional.
   * @param {String} ComponentIds - componentIds. optional.
   */
  cityViewCompBindComponents(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityViewCompBindComponents', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   * @param {String} OldState - oldState. optional.
   * @param {String} NewState - newState. optional.
   */
  cityViewCompFullUpdateApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityViewCompFullUpdateApp', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   */
  cityViewCompQueryAppAllInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityViewCompQueryAppAllInfo', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} AppId - appId. optional.
   * @param {String} PageNo - pageNo. optional.
   * @param {String} PageSize - pageSize. optional.
   */
  cityViewCompQueryComponentByAppId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityViewCompQueryComponentByAppId', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} IconCategory - iconCategory. optional.
   */
  cityViewCompQueryIcons(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityViewCompQueryIcons', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityWarnBizmodelGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnBizmodelGet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} BizModelId - bizModelId. required.
   */
  cityWarnDataFieldGetList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'BizModelId')) {
      throw new TypeError('parameter "BizModelId" is required');
    }

    return this.request('CityWarnDataFieldGetList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} WarnEventId - warnEventId. required.
   */
  cityWarnEventGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnEventId')) {
      throw new TypeError('parameter "WarnEventId" is required');
    }

    return this.request('CityWarnEventGet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} EventName - eventName. optional.
   * @param {String} WarnEventId - warnEventId. optional.
   * @param {Long} WarnTypeId - warnTypeId. optional.
   * @param {String} WarnLevelIdList - warnLevelIdList. optional.
   * @param {Long} WarnRuleId - warnRuleId. optional.
   * @param {String} StatusList - statusList. optional.
   * @param {String} OrderDuration - orderDuration. optional.
   * @param {String} OrderByGmtCreate - orderByGmtCreate. optional.
   * @param {Long} GmtCreateStart - gmtCreateStart. optional.
   * @param {Long} GmtCreateEnd - gmtCreateEnd. optional.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  cityWarnEventSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('CityWarnEventSearch', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnRuleId - warnRuleId. optional.
   * @param {String} Type - type. required.
   */
  cityWarnEventStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('CityWarnEventStatistic', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityWarnEventStatusList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnEventStatusList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} BizModelId - bizModelId. required.
   */
  cityWarnGetDataFieldList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'BizModelId')) {
      throw new TypeError('parameter "BizModelId" is required');
    }

    return this.request('CityWarnGetDataFieldList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityWarnLevelColor(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnLevelColor', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnLevelId - warnLevelId. required.
   */
  cityWarnLevelGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnLevelId')) {
      throw new TypeError('parameter "WarnLevelId" is required');
    }

    return this.request('CityWarnLevelGet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityWarnLevelGetByCity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnLevelGetByCity', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityWarnLevelInit(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnLevelInit', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Color - color. optional.
   * @param {String} Des - des. optional.
   */
  cityWarnLevelUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityWarnLevelUpdate', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {String} EmergencyPlan - emergencyPlan. optional.
   * @param {Long} WarnTypeId - warnTypeId. required.
   */
  cityWarnRuleAdd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'WarnTypeId')) {
      throw new TypeError('parameter "WarnTypeId" is required');
    }

    return this.request('CityWarnRuleAdd', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnRuleId - warnRuleId. required.
   */
  cityWarnRuleGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnRuleId')) {
      throw new TypeError('parameter "WarnRuleId" is required');
    }

    return this.request('CityWarnRuleGet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  cityWarnRuleGetByCity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('CityWarnRuleGetByCity', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityWarnRuleGetComponentList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnRuleGetComponentList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} Component - component. optional.
   */
  cityWarnRuleGetDeviceTypeList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnRuleGetDeviceTypeList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} DeviceType - deviceType. optional.
   */
  cityWarnRuleGetPropertyList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnRuleGetPropertyList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnRuleId - warnRuleId. required.
   */
  cityWarnRuleNotifyGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnRuleId')) {
      throw new TypeError('parameter "WarnRuleId" is required');
    }

    return this.request('CityWarnRuleNotifyGet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityWarnRuleNotifyMethodList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnRuleNotifyMethodList', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnRuleId - warnRuleId. required.
   * @param {String} NotifyMethodList - notifyMethodList. optional.
   * @param {String} OrganizationList - organizationList. optional.
   * @param {String} RoleList - roleList. optional.
   * @param {String} Des - des. optional.
   */
  cityWarnRuleNotifyUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnRuleId')) {
      throw new TypeError('parameter "WarnRuleId" is required');
    }

    return this.request('CityWarnRuleNotifyUpdate', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnRuleId - warnRuleId. required.
   */
  cityWarnRuleRemove(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnRuleId')) {
      throw new TypeError('parameter "WarnRuleId" is required');
    }

    return this.request('CityWarnRuleRemove', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnRuleId - warnRuleId. required.
   */
  cityWarnRuleScriptGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnRuleId')) {
      throw new TypeError('parameter "WarnRuleId" is required');
    }

    return this.request('CityWarnRuleScriptGet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnRuleId - warnRuleId. required.
   */
  cityWarnRuleScriptRelease(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnRuleId')) {
      throw new TypeError('parameter "WarnRuleId" is required');
    }

    return this.request('CityWarnRuleScriptRelease', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnRuleId - warnRuleId. required.
   * @param {String} Script - script. required.
   */
  cityWarnRuleScriptSave(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnRuleId')) {
      throw new TypeError('parameter "WarnRuleId" is required');
    }

    if (!hasOwnProperty(params, 'Script')) {
      throw new TypeError('parameter "Script" is required');
    }

    return this.request('CityWarnRuleScriptSave', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} PageNo - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} RuleName - ruleName. optional.
   * @param {Long} WarnTypeId - warnTypeId. optional.
   * @param {String} RuleStatus - ruleStatus. optional.
   */
  cityWarnRuleSearch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'PageNo')) {
      throw new TypeError('parameter "PageNo" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('CityWarnRuleSearch', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnRuleId - warnRuleId. required.
   * @param {String} Status - status. required.
   */
  cityWarnRuleStatusSet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnRuleId')) {
      throw new TypeError('parameter "WarnRuleId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('CityWarnRuleStatusSet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} Id - id. required.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {String} EmergencyPlan - emergencyPlan. optional.
   * @param {Long} WarnTypeId - warnTypeId. optional.
   */
  cityWarnRuleUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityWarnRuleUpdate', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} Code - code. required.
   * @param {String} Name - name. required.
   * @param {String} Icon - icon. optional.
   * @param {String} Description - description. optional.
   * @param {Long} ParentId - parentId. optional.
   */
  cityWarnTypeAdd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CityWarnTypeAdd', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnTypeId - warnTypeId. required.
   * @param {Boolean} BContainSons - bContainSons. optional.
   */
  cityWarnTypeGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnTypeId')) {
      throw new TypeError('parameter "WarnTypeId" is required');
    }

    return this.request('CityWarnTypeGet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Boolean} BContainSons - bContainSons. optional.
   */
  cityWarnTypeGetByCity(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnTypeGetByCity', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  cityWarnTypeIconListGet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('CityWarnTypeIconListGet', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} WarnTypeId - warnTypeId. required.
   */
  cityWarnTypeRemove(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'WarnTypeId')) {
      throw new TypeError('parameter "WarnTypeId" is required');
    }

    return this.request('CityWarnTypeRemove', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} Id - id. required.
   * @param {String} Code - code. optional.
   * @param {String} Name - name. optional.
   * @param {String} Icon - icon. optional.
   * @param {String} Description - description. optional.
   */
  cityWarnTypeUpdate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('CityWarnTypeUpdate', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   */
  edgeConsoleDeviceTest(params = {}, options = {}) {
    return this.request('EdgeConsoleDeviceTest', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} MessageIds - messageIds. optional.
   */
  messageServiceDeleteReceivedStationLetter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceDeleteReceivedStationLetter', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} TaskIds - taskIds. optional.
   */
  messageServiceDeleteSendStationLetter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceDeleteSendStationLetter', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} Status - status. required.
   * @param {String} Type - type. required.
   */
  messageServiceGetCountReceivedStationLetter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('MessageServiceGetCountReceivedStationLetter', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  messageServiceGetEmailSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceGetEmailSetting', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} MessageId - messageId. optional.
   */
  messageServiceGetReceivedStationLetterDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceGetReceivedStationLetterDetail', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} NotifyRecordId - notifyRecordId. optional.
   * @param {Long} TaskId - taskId. optional.
   */
  messageServiceGetSendStationLetterDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceGetSendStationLetterDetail', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {Integer} PageNum - page_num. required.
   */
  messageServiceGetSmsServiceSignature(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('MessageServiceGetSmsServiceSignature', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {Integer} PageNum - page_num. required.
   */
  messageServiceGetSmsServiceTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('MessageServiceGetSmsServiceTemplate', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} queryType - queryType. optional.
   * @param {Long} MessageId - messageId. optional.
   * @param {Long} TaskId - taskId. optional.
   */
  messageServiceGetStationLetterDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceGetStationLetterDetail', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} MessageIds - messageIds. optional.
   */
  messageServiceMarkReadReceivedStationLetter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceMarkReadReceivedStationLetter', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {Integer} PageNum - page_num. required.
   * @param {String} Type - type. required.
   * @param {String} Status - status. required.
   */
  messageServiceQueryReceiveStationLetter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('MessageServiceQueryReceiveStationLetter', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Integer} PageSize - page_size. required.
   * @param {Integer} PageNum - page_num. required.
   */
  messageServiceQuerySendStationLetterRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('MessageServiceQuerySendStationLetterRecord', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {Long} TaskId - taskId. optional.
   */
  messageServiceRecallSendStationLetter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceRecallSendStationLetter', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} EmailAddress - emailAddress. optional.
   * @param {String} EmailPwd - emailPwd. optional.
   * @param {String} SmtServerAddress - smtServerAddress. optional.
   * @param {String} SmtServerPort - smtServerPort. optional.
   */
  messageServiceRegisterEmail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceRegisterEmail', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} keyId - keyId. optional.
   * @param {String} keySecret - keySecret. optional.
   */
  messageServiceRegisterSms(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceRegisterSms', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   * @param {String} ReceiverOrganizationList - receiverOrganizationList. optional.
   * @param {String} ReceiverRoleList - receiverRoleList. optional.
   * @param {String} ReceiverUserList - receiverUserList. optional.
   * @param {String} MessageType - messageType. optional.
   * @param {String} Title - title. optional.
   * @param {String} Content - content. optional.
   */
  messageServiceSendStationLetter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServiceSendStationLetter', params, options);
  }

  /**
   * @param {String} IoTToken - ioTToken. required.
   * @param {String} Domain - domain. required.
   */
  messageServicesGetEmailSetting(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IoTToken')) {
      throw new TypeError('parameter "IoTToken" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('MessageServicesGetEmailSetting', params, options);
  }

  /**
   * @param {String} productKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} deviceStatus - data. required.
   */
  updateDeivceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'productKey')) {
      throw new TypeError('parameter "productKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'deviceStatus')) {
      throw new TypeError('parameter "deviceStatus" is required');
    }

    return this.request('UpdateDeivceStatus', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceStatusList - data. required.
   */
  updateDeivceStatusList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceStatusList')) {
      throw new TypeError('parameter "DeviceStatusList" is required');
    }

    return this.request('UpdateDeivceStatusList', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceEventList - data. required.
   */
  updateDeviceEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceEventList')) {
      throw new TypeError('parameter "DeviceEventList" is required');
    }

    return this.request('UpdateDeviceEvent', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceInfo - data. required.
   */
  updateDeviceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceInfo')) {
      throw new TypeError('parameter "DeviceInfo" is required');
    }

    return this.request('UpdateDeviceInfo', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} OnlineState - data. required.
   * @param {Long} Time - time. required.
   */
  updateDeviceOnlineState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'OnlineState')) {
      throw new TypeError('parameter "OnlineState" is required');
    }

    if (!hasOwnProperty(params, 'Time')) {
      throw new TypeError('parameter "Time" is required');
    }

    return this.request('UpdateDeviceOnlineState', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceStatus - data. required.
   */
  updateDeviceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceStatus')) {
      throw new TypeError('parameter "DeviceStatus" is required');
    }

    return this.request('UpdateDeviceStatus', params, options);
  }

  /**
   * @param {String} ProductKey - productKey. required.
   * @param {String} DeviceName - deviceName. required.
   * @param {String} DeviceStatusList - data. required.
   */
  updateDeviceStatusList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    if (!hasOwnProperty(params, 'DeviceName')) {
      throw new TypeError('parameter "DeviceName" is required');
    }

    if (!hasOwnProperty(params, 'DeviceStatusList')) {
      throw new TypeError('parameter "DeviceStatusList" is required');
    }

    return this.request('UpdateDeviceStatusList', params, options);
  }

  /**
   * @param {String} Nick - nick. optional.
   * @param {String} Name - name. optional.
   * @param {Integer} Age - age. optional.
   * @param {String} IoTToken - ioTToken. optional.
   */
  yaohuaHelloService(params = {}, options = {}) {
    return this.request('YaohuaHelloService', params, options);
  }

}

module.exports = Client;
