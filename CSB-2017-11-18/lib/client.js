
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-11-18';
    super(config);
  }

  /**
   * @param {String} Data - Data. required.
   * @param {String} RegionId - RegionId. required.
   */
  approveOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('ApproveOrderList', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} ServiceName - ServiceName. required.
   */
  checkServiceExist(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    options.method = 'POST';
    return this.request('CheckServiceExist', params, options);
  }

  /**
   * @param {String} CsbName - CsbName. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {String} Services - Services. required.
   */
  commitSuccessedServices(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Services')) {
      throw new TypeError('parameter "Services" is required');
    }

    options.method = 'POST';
    return this.request('CommitSuccessedServices', params, options);
  }

  /**
   * @param {Long} CsbId - CsbId. required.
   * @param {String} RegionId - RegionId. required.
   * @param {String} Data - Data. required.
   */
  createCredentials(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('CreateCredentials', params, options);
  }

  /**
   * @param {String} Data - Data. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} RegionId - RegionId. required.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    options.method = 'POST';
    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {Long} CsbId - CsbId. required.
   * @param {String} Data - Data. required.
   * @param {String} RegionId - RegionId. required.
   */
  createProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('CreateProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {String} Data - Data. required.
   * @param {Long} CsbId - CsbId. required.
   */
  createService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    options.method = 'POST';
    return this.request('CreateService', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {String} CasServiceId - CasServiceId. required.
   * @param {String} CasCsbName - CasCsbName. required.
   * @param {String} SrcUserId - SrcUserId. required.
   * @param {Boolean} LeafOnly - LeafOnly. optional.
   */
  deleteCasService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasServiceId')) {
      throw new TypeError('parameter "CasServiceId" is required');
    }

    if (!hasOwnProperty(params, 'CasCsbName')) {
      throw new TypeError('parameter "CasCsbName" is required');
    }

    if (!hasOwnProperty(params, 'SrcUserId')) {
      throw new TypeError('parameter "SrcUserId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteCasService', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Boolean} IgnoreDauth - IgnoreDauth. optional.
   * @param {Boolean} Force - Force. optional.
   * @param {String} Data - Data. required.
   */
  deleteCredentialsList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('DeleteCredentialsList', params, options);
  }

  /**
   * @param {String} Data - Data. required.
   * @param {String} RegionId - RegionId. required.
   */
  deleteOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('DeleteOrderList', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {Long} ProjectId - ProjectId. required.
   */
  deleteProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} Data - Data. required.
   */
  deleteProjectList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('DeleteProjectList', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} ServiceId - ServiceId. optional.
   * @param {String} ServiceName - ServiceName. optional.
   */
  deleteService(params = {}, options = {}) {
    options.method = 'POST';
    return this.request('DeleteService', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} Data - Data. required.
   */
  deleteServiceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('DeleteServiceList', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {String} CasServiceId - CasServiceId. required.
   * @param {String} CasCsbName - CasCsbName. required.
   * @param {String} SrcUserId - SrcUserId. required.
   * @param {Boolean} LeafOnly - LeafOnly. optional.
   */
  deleteUnionCasService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasServiceId')) {
      throw new TypeError('parameter "CasServiceId" is required');
    }

    if (!hasOwnProperty(params, 'CasCsbName')) {
      throw new TypeError('parameter "CasCsbName" is required');
    }

    if (!hasOwnProperty(params, 'SrcUserId')) {
      throw new TypeError('parameter "SrcUserId" is required');
    }

    options.method = 'POST';
    return this.request('DeleteUnionCasService', params, options);
  }

  /**
   * @param {String} Alias - Alias. optional.
   * @param {String} ProjectName - ProjectName. optional.
   * @param {Boolean} OnlyPending - OnlyPending. optional.
   * @param {String} ServiceName - ServiceName. optional.
   * @param {Long} ServiceId - ServiceId. optional.
   * @param {Integer} PageNum - PageNum. required.
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. optional.
   */
  findApprovalOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('FindApprovalOrderList', params, options);
  }

  /**
   * @param {Boolean} ShowDelService - ShowDelService. optional.
   * @param {String} ServiceName - ServiceName. optional.
   * @param {String} Alias - Alias. optional.
   * @param {String} ProjectName - ProjectName. optional.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} ApproveLevel - ApproveLevel. optional.
   * @param {String} RegionId - RegionId. required.
   */
  findApproveServiceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    return this.request('FindApproveServiceList', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} GroupName - GroupName. optional.
   * @param {Integer} PageNum - PageNum. required.
   */
  findCredentialsList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('FindCredentialsList', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Integer} Status - Status. optional.
   * @param {Integer} PageNum - PageNum. optional.
   * @param {String} SearchTxt - SearchTxt. optional.
   * @param {Long} CsbId - CsbId. optional.
   */
  findInstanceList(params = {}, options = {}) {
    return this.request('FindInstanceList', params, options);
  }

  /**
   * @param {String} ServiceName - ServiceName. optional.
   * @param {String} Alias - Alias. optional.
   * @param {String} ProjectName - ProjectName. optional.
   * @param {Long} CsbId - CsbId. required.
   * @param {Integer} PageNum - PageNum. required.
   * @param {String} RegionId - RegionId. optional.
   */
  findOrderableList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('FindOrderableList', params, options);
  }

  /**
   * @param {Boolean} ShowDelOrder - ShowDelOrder. optional.
   * @param {String} Alias - Alias. optional.
   * @param {Integer} PageNum - PageNum. required.
   * @param {Long} ServiceId - ServiceId. optional.
   * @param {String} ServiceName - ServiceName. optional.
   * @param {String} ProjectName - ProjectName. optional.
   * @param {String} Status - Status. optional.
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   */
  findOrderedList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    return this.request('FindOrderedList', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {Integer} PageNum - PageNum. required.
   * @param {String} ProjectName - ProjectName. optional.
   */
  findProjectList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('FindProjectList', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} OperationFlag - OperationFlag. required.
   */
  findProjectsNameList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'OperationFlag')) {
      throw new TypeError('parameter "OperationFlag" is required');
    }

    return this.request('FindProjectsNameList', params, options);
  }

  /**
   * @param {String} ServiceName - ServiceName. optional.
   * @param {String} Alias - Alias. optional.
   * @param {String} ProjectName - ProjectName. optional.
   * @param {Long} CsbId - CsbId. required.
   * @param {Boolean} ShowDelService - ShowDelService. optional.
   * @param {Integer} CasShowType - CasShowType. optional.
   * @param {Integer} PageNum - PageNum. required.
   * @param {String} RegionId - RegionId. required.
   */
  findServiceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('FindServiceList', params, options);
  }

  /**
   * @param {String} ServiceName - ServiceName. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {Long} StartTime - StartTime. optional.
   * @param {Long} EndTime - EndTime. optional.
   * @param {String} RegionId - RegionId. required.
   */
  findServiceStatisticalData(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceName')) {
      throw new TypeError('parameter "ServiceName" is required');
    }

    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    return this.request('FindServiceStatisticalData', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   */
  getInstance(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    return this.request('GetInstance', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} OrderId - OrderId. required.
   * @param {String} ServiceName - ServiceName. optional.
   */
  getOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('GetOrder', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} ProjectName - ProjectName. required.
   */
  getProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'ProjectName')) {
      throw new TypeError('parameter "ProjectName" is required');
    }

    return this.request('GetProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {Long} ServiceId - ServiceId. required.
   */
  getService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'ServiceId')) {
      throw new TypeError('parameter "ServiceId" is required');
    }

    return this.request('GetService', params, options);
  }

  /**
   * @param {String} CasCsbName - CasCsbName. required.
   * @param {String} RegionId - RegionId. required.
   * @param {String} Data - Data. required.
   */
  publishCasService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasCsbName')) {
      throw new TypeError('parameter "CasCsbName" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('PublishCasService', params, options);
  }

  /**
   * @param {String} CasCsbName - CasCsbName. required.
   * @param {String} RegionId - RegionId. required.
   * @param {String} Data - Data. required.
   */
  publishUnionCasService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CasCsbName')) {
      throw new TypeError('parameter "CasCsbName" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('PublishUnionCasService', params, options);
  }

  /**
   * @param {Long} CredentialId - CredentialId. required.
   * @param {String} RegionId - RegionId. required.
   */
  renewCredentials(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CredentialId')) {
      throw new TypeError('parameter "CredentialId" is required');
    }

    options.method = 'POST';
    return this.request('RenewCredentials', params, options);
  }

  /**
   * @param {Long} CredentialId - CredentialId. required.
   * @param {String} RegionId - RegionId. required.
   */
  replaceCredential(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CredentialId')) {
      throw new TypeError('parameter "CredentialId" is required');
    }

    options.method = 'POST';
    return this.request('ReplaceCredential', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} Data - Data. required.
   */
  updateOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('UpdateOrder', params, options);
  }

  /**
   * @param {String} Data - Data. required.
   * @param {String} RegionId - RegionId. required.
   */
  updateOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('UpdateOrderList', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} Data - Data. required.
   */
  updateProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('UpdateProject', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} Data - Data. required.
   */
  updateProjectListStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('UpdateProjectListStatus', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} Data - Data. required.
   */
  updateService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('UpdateService', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} CsbId - CsbId. required.
   * @param {String} Data - Data. required.
   */
  updateServiceListStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CsbId')) {
      throw new TypeError('parameter "CsbId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    options.method = 'POST';
    return this.request('UpdateServiceListStatus', params, options);
  }

  /**
   * @param {String} RegionId - RegionId. required.
   * @param {Long} ServiceId - ServiceId. required.
   * @param {String} Qps - Qps. required.
   */
  updateServiceQPS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceId')) {
      throw new TypeError('parameter "ServiceId" is required');
    }

    if (!hasOwnProperty(params, 'Qps')) {
      throw new TypeError('parameter "Qps" is required');
    }

    options.method = 'POST';
    return this.request('UpdateServiceQPS', params, options);
  }

}

module.exports = Client;
