
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-11-20';
    super(config);
  }

  /**
   * @param {Long} ServiceId - serviceId. required.
   * @param {String} ChannelCode - channelCode. required.
   * @param {RepeatList} MessageResources - messageServiceResourceList. required.
   */
  authorizeMessageService(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ServiceId')) {
      throw new TypeError('parameter "ServiceId" is required');
    }

    if (!hasOwnProperty(params, 'ChannelCode')) {
      throw new TypeError('parameter "ChannelCode" is required');
    }

    if (!hasOwnProperty(params, 'MessageResources')) {
      throw new TypeError('parameter "MessageResources" is required');
    }

    return this.request('AuthorizeMessageService', params, options);
  }

  /**
   * @param {String} AccessCode - accessCode. required.
   * @param {RepeatList} PhoneNumList - phoneNumList. required.
   * @param {String} ParamsJsonStr - paramsJsonStr. required.
   * @param {String} SignName - signName. required.
   * @param {String} TemplateCode - templateCode. required.
   */
  batchSendSMS(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessCode')) {
      throw new TypeError('parameter "AccessCode" is required');
    }

    if (!hasOwnProperty(params, 'PhoneNumList')) {
      throw new TypeError('parameter "PhoneNumList" is required');
    }

    if (!hasOwnProperty(params, 'ParamsJsonStr')) {
      throw new TypeError('parameter "ParamsJsonStr" is required');
    }

    if (!hasOwnProperty(params, 'SignName')) {
      throw new TypeError('parameter "SignName" is required');
    }

    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    return this.request('BatchSendSMS', params, options);
  }

  /**
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {String} SpaceId - spaceId. required.
   * @param {String} IotId - iotId. required.
   * @param {String} OperatorType - operatorType. required.
   * @param {String} OperatorId - operatorId. required.
   * @param {String} Category - category. optional.
   * @param {String} Model - model. optional.
   * @param {String} Description - description. optional.
   * @param {String} Name - name. optional.
   * @param {String} ScopeId - scopeId. optional.
   */
  bindDevice2Space(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    if (!hasOwnProperty(params, 'OperatorType')) {
      throw new TypeError('parameter "OperatorType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorId')) {
      throw new TypeError('parameter "OperatorId" is required');
    }

    return this.request('BindDevice2Space', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {String} TriggerRuleId - triggerRuleId. required.
   * @param {String} ScopeId - scopeId. required.
   */
  bindEventTriggerRules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'TriggerRuleId')) {
      throw new TypeError('parameter "TriggerRuleId" is required');
    }

    if (!hasOwnProperty(params, 'ScopeId')) {
      throw new TypeError('parameter "ScopeId" is required');
    }

    return this.request('BindEventTriggerRules', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} Name - name. optional.
   * @param {Long} EventTypeId - eventTypeId. optional.
   */
  countEvent(params = {}, options = {}) {
    return this.request('CountEvent', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {Long} EventTypeId - eventTypeId. optional.
   * @param {RepeatList} EventIdList - eventIdList. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   */
  countEventRecord(params = {}, options = {}) {
    return this.request('CountEventRecord', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {Integer} OnlyRoot - onlyRoot. optional.
   * @param {Long} ParentId - parentId. optional.
   */
  countEventType(params = {}, options = {}) {
    return this.request('CountEventType', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} Description - description. optional.
   * @param {Long} EventTypeId - eventTypeId. optional.
   * @param {String} EventTriggerRuleId - eventTriggerRuleId. optional.
   * @param {String} ExtraInfo - extraInfo. optional.
   * @param {String} Name - name. required.
   */
  createEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateEvent', params, options);
  }

  /**
   * @param {String} Code - code. required.
   * @param {String} Name - name. required.
   * @param {String} Description - description. optional.
   * @param {Long} ParentId - parentId. optional.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} Level - level. optional.
   * @param {String} Type - type. optional.
   * @param {String} Icon - icon. optional.
   * @param {String} Creator - creator. optional.
   * @param {String} Modifier - modifier. optional.
   */
  createEventType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Code')) {
      throw new TypeError('parameter "Code" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('CreateEventType', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} BusinessId - businessId. optional.
   * @param {Json} Geo - geoDTO. optional.
   * @param {String} SpaceName - name. required.
   * @param {String} Description - description. optional.
   * @param {String} TypeCode - typeCode. required.
   * @param {String} UsesCode - usesCode. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} SpaceScope - spaceScope. optional.
   * @param {String} Attribute - attribute. optional.
   * @param {RepeatList} ChildSpace - childSpace. optional.
   * @param {String} BizType - bizType. required.
   * @param {String} OperatorType - operatorType. required.
   * @param {String} OperatorId - operatorId. required.
   */
  createRootSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpaceName')) {
      throw new TypeError('parameter "SpaceName" is required');
    }

    if (!hasOwnProperty(params, 'TypeCode')) {
      throw new TypeError('parameter "TypeCode" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorType')) {
      throw new TypeError('parameter "OperatorType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorId')) {
      throw new TypeError('parameter "OperatorId" is required');
    }

    return this.request('CreateRootSpace', params, options);
  }

  /**
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} ParentSpaceId - parentSpaceId. required.
   * @param {String} BusinessId - businessId. optional.
   * @param {Json} Geo - geoDTO. optional.
   * @param {String} SpaceName - name. required.
   * @param {String} Description - description. optional.
   * @param {String} TypeCode - typeCode. required.
   * @param {String} UsesCode - usesCode. optional.
   * @param {Integer} Status - status. optional.
   * @param {Integer} SpaceScope - spaceScope. optional.
   * @param {String} Attribute - attribute. optional.
   * @param {RepeatList} ChildSpace - childSpace. optional.
   * @param {String} BizType - bizType. required.
   * @param {String} OperatorType - operatorType. required.
   * @param {String} OperatorId - operatorId. required.
   */
  createSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'ParentSpaceId')) {
      throw new TypeError('parameter "ParentSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'SpaceName')) {
      throw new TypeError('parameter "SpaceName" is required');
    }

    if (!hasOwnProperty(params, 'TypeCode')) {
      throw new TypeError('parameter "TypeCode" is required');
    }

    if (!hasOwnProperty(params, 'BizType')) {
      throw new TypeError('parameter "BizType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorType')) {
      throw new TypeError('parameter "OperatorType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorId')) {
      throw new TypeError('parameter "OperatorId" is required');
    }

    return this.request('CreateSpace', params, options);
  }

  /**
   * @param {String} SpaceId - spaceId. required.
   * @param {String} RelationType - relationType. required.
   * @param {String} OperatorId - operatorId. required.
   * @param {String} OperatorType - operatorType. required.
   * @param {String} ScopeId - scopeId. optional. default: "".
   * @param {RepeatList} ObjectDTOList - objectDTOList. required.
   */
  createSpaceRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    if (!hasOwnProperty(params, 'RelationType')) {
      throw new TypeError('parameter "RelationType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorId')) {
      throw new TypeError('parameter "OperatorId" is required');
    }

    if (!hasOwnProperty(params, 'OperatorType')) {
      throw new TypeError('parameter "OperatorType" is required');
    }

    if (!hasOwnProperty(params, 'ObjectDTOList')) {
      throw new TypeError('parameter "ObjectDTOList" is required');
    }

    return this.request('CreateSpaceRelation', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {String} ScopeId - scopeId. optional.
   */
  deleteEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    return this.request('DeleteEvent', params, options);
  }

  /**
   * @param {Long} EventTypeId - eventTypeId. required.
   * @param {String} ScopeId - scopeId. optional.
   */
  deleteEventType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventTypeId')) {
      throw new TypeError('parameter "EventTypeId" is required');
    }

    return this.request('DeleteEventType', params, options);
  }

  /**
   * @param {String} TemplateCode - templateCode. required.
   * @param {String} AccessCode - accessCode. required.
   */
  getTemplateDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TemplateCode')) {
      throw new TypeError('parameter "TemplateCode" is required');
    }

    if (!hasOwnProperty(params, 'AccessCode')) {
      throw new TypeError('parameter "AccessCode" is required');
    }

    return this.request('GetTemplateDetail', params, options);
  }

  /**
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} SpaceId - spaceId. required.
   * @param {String} TypeCode - typeCode. optional.
   * @param {String} TypeTag - typeTag. optional.
   * @param {String} TypeTagExclude - typeTagExclude. optional.
   * @param {RepeatList} TypeCodeList - typeCodeList. optional.
   * @param {String} SpaceName - name. optional.
   * @param {String} NameLike - nameLike. optional.
   * @param {String} UsesCode - usesCode. optional.
   * @param {Json} Attributes - attributeMap. optional.
   * @param {Integer} CurrentPage - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryAllChildSpaceBy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryAllChildSpaceBy', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} SpaceId - spaceId. required.
   */
  queryChildSpaceInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    return this.request('QueryChildSpaceInfo', params, options);
  }

  /**
   * @param {String} SpaceId - spaceId. required.
   * @param {String} TypeCode - typeCode. optional.
   * @param {String} ScopeId - scopeId. optional. default: "".
   * @param {String} Name - name. optional.
   * @param {String} UsesCode - usesCode. optional.
   * @param {Integer} Status - status. optional.
   */
  queryChildSpaceInfoBy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    return this.request('QueryChildSpaceInfoBy', params, options);
  }

  /**
   * @param {String} IotId - iotId. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  queryDeviceDetailExt(params = {}, options = {}) {
    return this.request('QueryDeviceDetailExt', params, options);
  }

  /**
   * @param {String} DeviceNameLike - deviceNameLike. optional.
   * @param {String} NicknameLike - nicknameLike. optional.
   * @param {Long} CategoryId - categoryId. optional.
   * @param {String} SpacePathLike - spacePathLike. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} ProductKey - productKey. optional.
   * @param {RepeatList} DeviceStatus - deviceStatusList. optional.
   * @param {RepeatList} SpaceId - spaceIdList. optional.
   * @param {String} Model - model. optional.
   * @param {RepeatList} IotId - iotIdList. optional.
   */
  queryDeviceListBySpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryDeviceListBySpace', params, options);
  }

  /**
   * @param {Integer} OrderType - orderType. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} Name - name. optional.
   * @param {Long} EventTypeId - eventTypeId. optional.
   */
  queryEvent(params = {}, options = {}) {
    return this.request('QueryEvent', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {String} ScopeId - scopeId. required.
   */
  queryEventById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'ScopeId')) {
      throw new TypeError('parameter "ScopeId" is required');
    }

    return this.request('QueryEventById', params, options);
  }

  /**
   * @param {Long} EventId - eventId. required.
   * @param {String} ScopeId - scopeId. required.
   */
  queryEventHandlerByEventId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventId')) {
      throw new TypeError('parameter "EventId" is required');
    }

    if (!hasOwnProperty(params, 'ScopeId')) {
      throw new TypeError('parameter "ScopeId" is required');
    }

    return this.request('QueryEventHandlerByEventId', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {Long} EventTypeId - eventTypeId. optional.
   * @param {RepeatList} EventIdList - eventIdList. optional.
   * @param {RepeatList} StatusList - statusList. optional.
   * @param {Long} StartTime - startTime. optional.
   * @param {Long} EndTime - endTime. optional.
   * @param {Integer} OrderType - orderType. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Limit - limit. optional.
   */
  queryEventRecord(params = {}, options = {}) {
    return this.request('QueryEventRecord', params, options);
  }

  /**
   * @param {Long} EventRecordId - eventRecordId. required.
   * @param {String} ScopeId - scopeId. optional.
   */
  queryEventRecordById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventRecordId')) {
      throw new TypeError('parameter "EventRecordId" is required');
    }

    return this.request('QueryEventRecordById', params, options);
  }

  /**
   * @param {Integer} OrderType - orderType. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {String} ScopeId - scopeId. optional.
   * @param {Integer} OnlyRoot - onlyRoot. optional.
   * @param {Long} ParentId - parentId. optional.
   */
  queryEventType(params = {}, options = {}) {
    return this.request('QueryEventType', params, options);
  }

  /**
   * @param {Long} EventTypeId - eventTypeId. required.
   * @param {String} ScopeId - scopeId. optional.
   */
  queryEventTypeById(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventTypeId')) {
      throw new TypeError('parameter "EventTypeId" is required');
    }

    return this.request('QueryEventTypeById', params, options);
  }

  /**
   * @param {String} SpaceId - spaceId. required.
   * @param {String} RelationType - relationType. required.
   * @param {String} Name - name. optional.
   * @param {Integer} CurrentPage - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} ScopeId - scopeId. optional. default: "".
   */
  queryRelationsInInAllSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    if (!hasOwnProperty(params, 'RelationType')) {
      throw new TypeError('parameter "RelationType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryRelationsInInAllSpace', params, options);
  }

  /**
   * @param {String} SpaceId - spaceId. required.
   * @param {String} RelationType - relationType. required.
   * @param {Integer} CurrentPage - pageNo. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {String} ScopeId - scopeId. optional. default: "".
   * @param {String} Name - name. optional.
   */
  queryRelationsInSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    if (!hasOwnProperty(params, 'RelationType')) {
      throw new TypeError('parameter "RelationType" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryRelationsInSpace', params, options);
  }

  /**
   * @param {Json} QueryDTO - queryDTO. required.
   * @param {String} ScopeId - scopeId. optional. default: "".
   */
  queryRootSpaceInfoByAddr(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'QueryDTO')) {
      throw new TypeError('parameter "QueryDTO" is required');
    }

    return this.request('QueryRootSpaceInfoByAddr', params, options);
  }

  /**
   * @param {String} AccessCode - accessCode. required.
   * @param {String} SignName - signName. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  querySignList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessCode')) {
      throw new TypeError('parameter "AccessCode" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QuerySignList', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {String} BusinessId - businessId. required.
   */
  querySpaceByBusinessId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'BusinessId')) {
      throw new TypeError('parameter "BusinessId" is required');
    }

    return this.request('QuerySpaceByBusinessId', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional. default: “”.
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {RepeatList} RelObjectIdList - relObjectIdList. required.
   */
  querySpaceByRelationIds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'RelObjectIdList')) {
      throw new TypeError('parameter "RelObjectIdList" is required');
    }

    return this.request('QuerySpaceByRelationIds', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {RepeatList} SpaceIds - spaceIdList. required.
   */
  querySpaceInfoByIds(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpaceIds')) {
      throw new TypeError('parameter "SpaceIds" is required');
    }

    return this.request('QuerySpaceInfoByIds', params, options);
  }

  /**
   * @param {String} AccessCode - accessCode. required.
   * @param {String} TemplateName - templateName. optional.
   * @param {Integer} CurrentPage - currentPage. required.
   * @param {Integer} PageSize - pageSize. required.
   */
  queryTemplateList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AccessCode')) {
      throw new TypeError('parameter "AccessCode" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('QueryTemplateList', params, options);
  }

  /**
   * @param {String} DeviceName - deviceName. optional.
   * @param {String} ProductKey - productKey. required.
   * @param {String} NickName - nickName. optional.
   * @param {String} Props - props. optional.
   */
  registerDeviceExt(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProductKey')) {
      throw new TypeError('parameter "ProductKey" is required');
    }

    return this.request('RegisterDeviceExt', params, options);
  }

  /**
   * @param {String} Type - type. optional.
   * @param {String} Para - para. optional.
   * @param {Long} EventId - eventId. optional.
   * @param {String} ScopeId - scopeId. optional.
   */
  registerEventHandler(params = {}, options = {}) {
    return this.request('RegisterEventHandler', params, options);
  }

  /**
   * @param {Long} Uid - uid. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} Name - name. required.
   */
  registerSMSServiceMetadata(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Uid')) {
      throw new TypeError('parameter "Uid" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('RegisterSMSServiceMetadata', params, options);
  }

  /**
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} SpaceId - spaceId. required.
   */
  removeSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    return this.request('RemoveSpace', params, options);
  }

  /**
   * @param {String} SpaceId - spaceId. required.
   * @param {String} ScopeId - scopeId. optional. default: "".
   * @param {RepeatList} RelationIdList - relationIdList. required.
   */
  removeSpaceRelation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    if (!hasOwnProperty(params, 'RelationIdList')) {
      throw new TypeError('parameter "RelationIdList" is required');
    }

    return this.request('RemoveSpaceRelation', params, options);
  }

  /**
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} OperatorType - operatorType. required.
   * @param {String} OperatorId - operatorId. required.
   * @param {String} ThingId - thingId. required.
   */
  removeThing(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'OperatorType')) {
      throw new TypeError('parameter "OperatorType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorId')) {
      throw new TypeError('parameter "OperatorId" is required');
    }

    if (!hasOwnProperty(params, 'ThingId')) {
      throw new TypeError('parameter "ThingId" is required');
    }

    return this.request('RemoveThing', params, options);
  }

  /**
   * @param {String} TriggerRuleId - triggerRuleId. required.
   * @param {String} Data - data. required.
   * @param {String} ScopeId - scopeId. required.
   */
  triggerEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TriggerRuleId')) {
      throw new TypeError('parameter "TriggerRuleId" is required');
    }

    if (!hasOwnProperty(params, 'Data')) {
      throw new TypeError('parameter "Data" is required');
    }

    if (!hasOwnProperty(params, 'ScopeId')) {
      throw new TypeError('parameter "ScopeId" is required');
    }

    return this.request('TriggerEvent', params, options);
  }

  /**
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} OperatorType - operatorType. required.
   * @param {String} OperatorId - operatorId. required.
   * @param {String} ThingId - thingId. required.
   */
  unBindDeviceFromSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'OperatorType')) {
      throw new TypeError('parameter "OperatorType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorId')) {
      throw new TypeError('parameter "OperatorId" is required');
    }

    if (!hasOwnProperty(params, 'ThingId')) {
      throw new TypeError('parameter "ThingId" is required');
    }

    return this.request('UnBindDeviceFromSpace', params, options);
  }

  /**
   * @param {Long} EventHandlerId - eventHandlerId. required.
   * @param {String} ScopeId - scopeId. optional.
   */
  unregisterEventHandler(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventHandlerId')) {
      throw new TypeError('parameter "EventHandlerId" is required');
    }

    return this.request('UnregisterEventHandler', params, options);
  }

  /**
   * @param {String} NickName - nickName. optional.
   * @param {String} Props - props. optional.
   * @param {String} IotId - iotId. optional.
   * @param {String} AccessKeyId - accessKeyId. optional.
   */
  updateDeviceExt(params = {}, options = {}) {
    return this.request('UpdateDeviceExt', params, options);
  }

  /**
   * @param {Long} Id - id. optional.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} Name - name. optional.
   * @param {String} Description - description. optional.
   * @param {Long} EventTypeId - eventTypeId. optional.
   * @param {String} ExtraInfo - extraInfo. optional.
   */
  updateEvent(params = {}, options = {}) {
    return this.request('UpdateEvent', params, options);
  }

  /**
   * @param {String} ScopeId - scopeId. optional.
   * @param {Long} EventRecordId - eventRecordId. required.
   * @param {String} Status - status. required.
   */
  updateEventRecordStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EventRecordId')) {
      throw new TypeError('parameter "EventRecordId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    return this.request('UpdateEventRecordStatus', params, options);
  }

  /**
   * @param {Long} Id - id. required.
   * @param {String} Code - code. optional.
   * @param {String} Name - name. optional.
   * @param {String} Type - type. optional.
   * @param {String} Icon - icon. optional.
   * @param {String} Description - description. optional.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} Modifier - modifier. optional.
   * @param {String} Level - level. optional.
   */
  updateEventType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Id')) {
      throw new TypeError('parameter "Id" is required');
    }

    return this.request('UpdateEventType', params, options);
  }

  /**
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} SpaceId - spaceId. required.
   * @param {String} OperatorType - operatorType. required.
   * @param {String} OperatorId - operatorId. required.
   * @param {String} Description - description. optional.
   * @param {String} BusinessId - businessId. optional.
   * @param {String} UsesCode - usesCode. optional.
   * @param {String} Attribute - attribute. required.
   * @param {String} BizType - model. optional.
   * @param {String} Name - name. required.
   */
  updateSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    if (!hasOwnProperty(params, 'OperatorType')) {
      throw new TypeError('parameter "OperatorType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorId')) {
      throw new TypeError('parameter "OperatorId" is required');
    }

    if (!hasOwnProperty(params, 'Attribute')) {
      throw new TypeError('parameter "Attribute" is required');
    }

    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    return this.request('UpdateSpace', params, options);
  }

  /**
   * @param {String} RootSpaceId - rootSpaceId. required.
   * @param {String} ScopeId - scopeId. optional.
   * @param {String} SpaceId - spaceId. required.
   * @param {Integer} Status - status. required.
   * @param {String} OperatorType - operatorType. required.
   * @param {String} OperatorId - operatorId. required.
   */
  updateSpaceStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RootSpaceId')) {
      throw new TypeError('parameter "RootSpaceId" is required');
    }

    if (!hasOwnProperty(params, 'SpaceId')) {
      throw new TypeError('parameter "SpaceId" is required');
    }

    if (!hasOwnProperty(params, 'Status')) {
      throw new TypeError('parameter "Status" is required');
    }

    if (!hasOwnProperty(params, 'OperatorType')) {
      throw new TypeError('parameter "OperatorType" is required');
    }

    if (!hasOwnProperty(params, 'OperatorId')) {
      throw new TypeError('parameter "OperatorId" is required');
    }

    return this.request('UpdateSpaceStatus', params, options);
  }

}

module.exports = Client;
