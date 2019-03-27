
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-09-10';
    super(config);
  }

  /**
   * @param {Long} CrowdId - crowdId. optional.
   * @param {RepeatList} TagIds - tagIds. optional.
   */
  analysisCrowd(params = {}, options = {}) {
    return this.request('AnalysisCrowd', params, options);
  }

  /**
   * @param {Long} AccountId - accountId. optional.
   * @param {Long} BrandId - brandId. optional.
   * @param {RepeatList} ChannelBrandReqs - channelBrandReqs. optional.
   */
  auth2Brand(params = {}, options = {}) {
    return this.request('Auth2Brand', params, options);
  }

  /**
   * @param {String} RequestJsonData - requestJsonData. optional.
   */
  calCrowdScale(params = {}, options = {}) {
    return this.request('CalCrowdScale', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {String} Desc - desc. optional.
   */
  createBrand(params = {}, options = {}) {
    return this.request('CreateBrand', params, options);
  }

  /**
   * @param {Integer} ParentCategoryId - parentCategoryId. optional.
   * @param {String} Name - name. optional.
   */
  createCategory(params = {}, options = {}) {
    return this.request('CreateCategory', params, options);
  }

  /**
   * @param {String} RequestJsonData - requestJsonData. optional.
   */
  defineCrowd(params = {}, options = {}) {
    return this.request('DefineCrowd', params, options);
  }

  /**
   * @param {Long} FileId - fileId. optional.
   * @param {RepeatList} FileColumns - fileColumns. optional.
   */
  defineFileSchema(params = {}, options = {}) {
    return this.request('DefineFileSchema', params, options);
  }

  /**
   * @param {Long} FileId - fileId. optional.
   * @param {Integer} OptionType - optionType. optional.
   * @param {Integer} ColumnIndex - columnIndex. optional.
   * @param {RepeatList} OptionDefines - optionDefines. optional.
   * @param {String} TagName - tagName. optional.
   * @param {String} TagDesc - tagDesc. optional.
   * @param {Long} ValidTime - validTime. optional.
   * @param {Integer} CategoryId - categoryId. optional.
   */
  defineTag(params = {}, options = {}) {
    return this.request('DefineTag', params, options);
  }

  /**
   * @param {Long} CrowdId - crowdId. required.
   */
  deleteCrowd(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CrowdId')) {
      throw new TypeError('parameter "CrowdId" is required');
    }

    return this.request('DeleteCrowd', params, options);
  }

  /**
   * @param {Long} FileId - fileId. optional.
   */
  deleteFile(params = {}, options = {}) {
    return this.request('DeleteFile', params, options);
  }

  /**
   * @param {RepeatList} AccountIds - accountIds. optional.
   */
  describeAuthBrand(params = {}, options = {}) {
    return this.request('DescribeAuthBrand', params, options);
  }

  /**
   */
  describeAuthChannelBrand(params = {}, options = {}) {
    return this.request('DescribeAuthChannelBrand', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} PageNo - pageNo. optional.
   */
  describeBrand(params = {}, options = {}) {
    return this.request('DescribeBrand', params, options);
  }

  /**
   * @param {Integer} CategoryId - categoryId. optional.
   * @param {Boolean} Recursive - recursive. optional.
   */
  describeCategory(params = {}, options = {}) {
    return this.request('DescribeCategory', params, options);
  }

  /**
   */
  describeChannelBrand(params = {}, options = {}) {
    return this.request('DescribeChannelBrand', params, options);
  }

  /**
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} CalStatus - calStatus. optional.
   * @param {Integer} SyncStatus - syncStatus. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   */
  describeCrowd(params = {}, options = {}) {
    return this.request('DescribeCrowd', params, options);
  }

  /**
   * @param {String} FileName - fileName. optional.
   * @param {Long} FileId - fileId. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {RepeatList} DataSchemaStatusList - dataSchemaStatusList. optional.
   */
  describeFile(params = {}, options = {}) {
    return this.request('DescribeFile', params, options);
  }

  /**
   * @param {Long} CategoryId - categoryId. optional.
   * @param {Boolean} IncludeChild - includeChild. optional.
   * @param {String} Keyword - keyword. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Boolean} OnlyFavorite - onlyFavorite. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   */
  describeTag(params = {}, options = {}) {
    return this.request('DescribeTag', params, options);
  }

  /**
   * @param {Long} CrowdId - crowdId. optional.
   */
  downloadCrowd(params = {}, options = {}) {
    return this.request('DownloadCrowd', params, options);
  }

  /**
   * @param {Long} CrowdId - crowdId. optional.
   */
  downloadUDReport(params = {}, options = {}) {
    return this.request('DownloadUDReport', params, options);
  }

  /**
   * @param {Long} TagId - tagId. optional.
   * @param {RepeatList} TagIds - tagIds. optional.
   * @param {Boolean} Favorite - favorite. optional.
   */
  favoriteTag(params = {}, options = {}) {
    return this.request('FavoriteTag', params, options);
  }

  /**
   * @param {Long} CrowdId - crowdId. optional.
   */
  fetchCrowd(params = {}, options = {}) {
    return this.request('FetchCrowd', params, options);
  }

  /**
   * @param {Long} CrowdId - crowdId. required.
   */
  fetchCrowdDefine(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CrowdId')) {
      throw new TypeError('parameter "CrowdId" is required');
    }

    return this.request('FetchCrowdDefine', params, options);
  }

  /**
   * @param {Long} FileId - fileId. optional.
   */
  fetchFileSchema(params = {}, options = {}) {
    return this.request('FetchFileSchema', params, options);
  }

  /**
   * @param {Long} FileId - fileId. optional.
   */
  fetchFileSchemaData(params = {}, options = {}) {
    return this.request('FetchFileSchemaData', params, options);
  }

  /**
   * @param {Long} TagId - tagId. optional.
   */
  fetchTag(params = {}, options = {}) {
    return this.request('FetchTag', params, options);
  }

  /**
   * @param {String} OssPath - ossPath. required.
   * @param {String} SrcFileName - srcFileName. required.
   */
  processAfterUploadFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'OssPath')) {
      throw new TypeError('parameter "OssPath" is required');
    }

    if (!hasOwnProperty(params, 'SrcFileName')) {
      throw new TypeError('parameter "SrcFileName" is required');
    }

    return this.request('ProcessAfterUploadFile', params, options);
  }

  /**
   * @param {Long} FileId - fileId. optional.
   * @param {Integer} OptionType - optionType. optional.
   * @param {Integer} ColumnIndex - columnIndex. optional.
   * @param {RepeatList} OptionDefines - optionDefines. optional.
   * @param {String} TagName - tagName. optional.
   * @param {String} TagDesc - tagDesc. optional.
   * @param {Long} ValidTime - validTime. optional.
   * @param {Integer} CategoryId - categoryId. optional.
   * @param {Long} TagId - tagId. optional.
   */
  redefineTag(params = {}, options = {}) {
    return this.request('RedefineTag', params, options);
  }

  /**
   */
  requestUploadFile(params = {}, options = {}) {
    return this.request('RequestUploadFile', params, options);
  }

  /**
   * @param {Long} CrowdId - crowdId. optional.
   * @param {Integer} ChannelType - channelType. optional.
   * @param {RepeatList} ChannelBrands - channelBrands. optional.
   * @param {String} OuterAccountNo - outerAccountNo. optional.
   */
  syncCrowd(params = {}, options = {}) {
    return this.request('SyncCrowd', params, options);
  }

  /**
   * @param {Integer} Id - id. optional.
   * @param {String} Name - name. optional.
   * @param {String} Desc - desc. optional.
   */
  updateBrand(params = {}, options = {}) {
    return this.request('UpdateBrand', params, options);
  }

  /**
   * @param {String} RequestJsonData - requestJsonData. optional.
   */
  updateCategory(params = {}, options = {}) {
    return this.request('UpdateCategory', params, options);
  }

  /**
   * @param {String} RequestJsonData - requestJsonData. optional.
   */
  updateCrowd(params = {}, options = {}) {
    return this.request('UpdateCrowd', params, options);
  }

}

module.exports = Client;
