
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-7-15';
    super(config);
  }

  /**
   * @param {String} Name - name. required.
   * @param {String} Description - description. required.
   * @param {String} DataFiles - dataFiles. optional.
   * @param {Long} ProjectId - projectId. optional.
   * @param {String} Language - language. optional.
   */
  addProject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Name')) {
      throw new TypeError('parameter "Name" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('AddProject', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   */
  cancelShareProject(params = {}, options = {}) {
    return this.request('CancelShareProject', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  cancelShareTask(params = {}, options = {}) {
    return this.request('CancelShareTask', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   */
  cancelSharedProject(params = {}, options = {}) {
    return this.request('CancelSharedProject', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  cancelSharedTask(params = {}, options = {}) {
    return this.request('CancelSharedTask', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   * @param {String} Language - language. optional.
   * @param {String} Products - products. optional.
   * @param {String} TaskName - taskName. optional.
   * @param {String} DbType - dbType. optional.
   * @param {String} Schemas - schemas. optional.
   * @param {String} DbVersion - dbVersion. optional.
   */
  createTask(params = {}, options = {}) {
    return this.request('CreateTask', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   */
  deleteProject(params = {}, options = {}) {
    return this.request('DeleteProject', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  deleteTask(params = {}, options = {}) {
    return this.request('DeleteTask', params, options);
  }

  /**
   * @param {Long} RefId - refId. required.
   * @param {String} Types - types. optional.
   * @param {String} System - system. optional.
   */
  downloadReport(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RefId')) {
      throw new TypeError('parameter "RefId" is required');
    }

    return this.request('DownloadReport', params, options);
  }

  /**
   */
  getAbstact(params = {}, options = {}) {
    return this.request('GetAbstact', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getCompatible(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetCompatible', params, options);
  }

  /**
   * @param {Integer} TaskID - taskId. required.
   * @param {String} GraphType - graphType. required.
   */
  getCostGraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskID')) {
      throw new TypeError('parameter "TaskID" is required');
    }

    if (!hasOwnProperty(params, 'GraphType')) {
      throw new TypeError('parameter "GraphType" is required');
    }

    return this.request('GetCostGraph', params, options);
  }

  /**
   * @param {Integer} TaskID - taskId. required.
   */
  getCostList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskID')) {
      throw new TypeError('parameter "TaskID" is required');
    }

    return this.request('GetCostList', params, options);
  }

  /**
   * @param {Integer} ProjectId - projectId. required.
   */
  getDBLinks(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetDBLinks', params, options);
  }

  /**
   * @param {Integer} ProjectId - projectId. required.
   */
  getDBPortrait(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetDBPortrait', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getDeploymentIslet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetDeploymentIslet', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   * @param {Integer} Islet - islet. required.
   */
  getIsetObjectList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'Islet')) {
      throw new TypeError('parameter "Islet" is required');
    }

    return this.request('GetIsetObjectList', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getIsletAdsSql(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetIsletAdsSql', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getIsletAdsTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetIsletAdsTable', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   * @param {String} Schema - schema. optional.
   * @param {String} ObjType - objType. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  getIsletCrossObjectDetail(params = {}, options = {}) {
    return this.request('GetIsletCrossObjectDetail', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getIsletCrossObjectList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetIsletCrossObjectList', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   * @param {Integer} Islet - islet. required.
   */
  getIsletDDL(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'Islet')) {
      throw new TypeError('parameter "Islet" is required');
    }

    return this.request('GetIsletDDL', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   * @param {Integer} Islet - islet. required.
   * @param {String} Schema - schema. optional.
   * @param {String} ObjType - objType. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  getIsletObjectDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'Islet')) {
      throw new TypeError('parameter "Islet" is required');
    }

    return this.request('GetIsletObjectDetail', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getManHour(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetManHour', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getMigratePlans(params = {}, options = {}) {
    return this.request('GetMigratePlans', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   * @param {Integer} Islet - islet. optional.
   */
  getMigrateResourcePlan(params = {}, options = {}) {
    return this.request('GetMigrateResourcePlan', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   */
  getOSInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetOSInfo', params, options);
  }

  /**
   * @param {Integer} ProjectId - projectId. required.
   */
  getObjectDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetObjectDetail', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   * @param {String} Owner - owner. optional.
   * @param {String} ObjectName - objectName. optional.
   * @param {String} ObjectType - ObjectType. optional.
   */
  getObjectPortrait(params = {}, options = {}) {
    return this.request('GetObjectPortrait', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   * @param {String} Schema - schema. optional.
   * @param {String} ObjectType - objectType. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  getP2JDetail(params = {}, options = {}) {
    return this.request('GetP2JDetail', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getP2JSchema(params = {}, options = {}) {
    return this.request('GetP2JSchema', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getP2JSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetP2JSummary', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} GraphType - graphType. required.
   * @param {String} StartTime - startTime. optional.
   * @param {String} EndTime - endTime. optional.
   */
  getPerformanceGraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'GraphType')) {
      throw new TypeError('parameter "GraphType" is required');
    }

    return this.request('GetPerformanceGraph', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   * @param {String} DbType - dbType. required.
   * @param {String} DbVersion - dbVersion. required.
   */
  getProjectCompatible(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'DbType')) {
      throw new TypeError('parameter "DbType" is required');
    }

    if (!hasOwnProperty(params, 'DbVersion')) {
      throw new TypeError('parameter "DbVersion" is required');
    }

    return this.request('GetProjectCompatible', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   * @param {String} Schema - schema. optional.
   * @param {String} ObjectType - objectType. optional.
   * @param {String} Compatible - compatible. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  getProjectCompatibleDetail(params = {}, options = {}) {
    return this.request('GetProjectCompatibleDetail', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   */
  getProjectDependency(params = {}, options = {}) {
    return this.request('GetProjectDependency', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   */
  getProjectDetail(params = {}, options = {}) {
    return this.request('GetProjectDetail', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  getProjectJobs(params = {}, options = {}) {
    return this.request('GetProjectJobs', params, options);
  }

  /**
   */
  getProjectListByFinish(params = {}, options = {}) {
    return this.request('GetProjectListByFinish', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  getProjectOuterObjects(params = {}, options = {}) {
    return this.request('GetProjectOuterObjects', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   */
  getProjectOuterSchemas(params = {}, options = {}) {
    return this.request('GetProjectOuterSchemas', params, options);
  }

  /**
   * @param {Integer} ProjectId - projectId. required.
   */
  getProjectSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetProjectSummary', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   */
  getProjectTables(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetProjectTables', params, options);
  }

  /**
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNum - pageNum. required.
   * @param {String} QueryType - queryType. optional.
   * @param {String} QueryValue - queryValue. optional.
   */
  getProjects(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    return this.request('GetProjects', params, options);
  }

  /**
   * @param {String} RefId - refId. required.
   */
  getReports(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RefId')) {
      throw new TypeError('parameter "RefId" is required');
    }

    return this.request('GetReports', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getReverseDependency(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetReverseDependency', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getRiskSQLType(params = {}, options = {}) {
    return this.request('GetRiskSQLType', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   * @param {String} RiskType - riskType. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  getRiskSqls(params = {}, options = {}) {
    return this.request('GetRiskSqls', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   */
  getSchemaDatabase(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaDatabase', params, options);
  }

  /**
   * @param {String} Label - label. required.
   * @param {Long} ProjectId - projectId. required.
   * @param {String} Schemas - schemas. optional.
   * @param {Integer} PageNo - pageNo. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {String} ObjectName - objectName. optional.
   */
  getSchemaDatabaseObject(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaDatabaseObject', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Schemas - schemas. optional.
   */
  getSchemaDatabaseObjectSpace(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaDatabaseObjectSpace', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   */
  getSchemaDatabaseObjectSql(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaDatabaseObjectSql', params, options);
  }

  /**
   * @param {String} Label - label. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNum - pageNum. optional.
   */
  getSchemaDatabaseObjectSqlDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Label')) {
      throw new TypeError('parameter "Label" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaDatabaseObjectSqlDetail', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   */
  getSchemaDatabaseObjectTable(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaDatabaseObjectTable', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Label - label. optional.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNum - pageNum. optional.
   */
  getSchemaDatabaseObjectTableDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaDatabaseObjectTableDetail', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getSchemaDependency(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetSchemaDependency', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   * @param {Integer} Islet - islet. required.
   */
  getSchemaIslet(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'Islet')) {
      throw new TypeError('parameter "Islet" is required');
    }

    return this.request('GetSchemaIslet', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   */
  getSchemaList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaList', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   * @param {String} Schemas - schemas. optional.
   */
  getSchemaStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaStatistic', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Schemas - schemas. optional.
   */
  getSchemaVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSchemaVolume', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   */
  getSolution(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    return this.request('GetSolution', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   */
  getSpecialObjects(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSpecialObjects', params, options);
  }

  /**
   * @param {String} Type - type. required.
   * @param {String} ProjectId - projectId. required.
   * @param {Integer} PageSize - pageSize. optional.
   * @param {Integer} PageNum - pageNum. optional.
   */
  getSpecialObjectsDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSpecialObjectsDetail', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   */
  getSystemMetricGraph(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetSystemMetricGraph', params, options);
  }

  /**
   * @param {Integer} TaskID - taskId. required.
   * @param {String} SchemaName - schemaName. optional.
   * @param {Integer} PageNum - pageNum. required.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} Condition - condition. optional.
   * @param {String} TableName - tableName. optional.
   */
  getTableVolumeList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskID')) {
      throw new TypeError('parameter "TaskID" is required');
    }

    if (!hasOwnProperty(params, 'PageNum')) {
      throw new TypeError('parameter "PageNum" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('GetTableVolumeList', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   */
  getTagList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('GetTagList', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskCompatible(params = {}, options = {}) {
    return this.request('GetTaskCompatible', params, options);
  }

  /**
   */
  getTaskCount(params = {}, options = {}) {
    return this.request('GetTaskCount', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskDR(params = {}, options = {}) {
    return this.request('GetTaskDR', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskDashboard(params = {}, options = {}) {
    return this.request('GetTaskDashboard', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   * @param {Integer} Offset - offset. required.
   * @param {Integer} Size - size. required.
   * @param {String} Schema - schema. optional.
   */
  getTaskDependentObjects(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'Offset')) {
      throw new TypeError('parameter "Offset" is required');
    }

    if (!hasOwnProperty(params, 'Size')) {
      throw new TypeError('parameter "Size" is required');
    }

    return this.request('GetTaskDependentObjects', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskDependentSchemas(params = {}, options = {}) {
    return this.request('GetTaskDependentSchemas', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskDetail(params = {}, options = {}) {
    return this.request('GetTaskDetail', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskOuterObjectsCount(params = {}, options = {}) {
    return this.request('GetTaskOuterObjectsCount', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskPercent(params = {}, options = {}) {
    return this.request('GetTaskPercent', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskReportInfo(params = {}, options = {}) {
    return this.request('GetTaskReportInfo', params, options);
  }

  /**
   * @param {String} TaskId - taskId. optional.
   */
  getTaskSQLCompatible(params = {}, options = {}) {
    return this.request('GetTaskSQLCompatible', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   * @param {String} Schema - schema. optional.
   * @param {String} Compatible - compatible. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  getTaskSQLCompatibleDetail(params = {}, options = {}) {
    return this.request('GetTaskSQLCompatibleDetail', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskSchemas(params = {}, options = {}) {
    return this.request('GetTaskSchemas', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   */
  getTaskSpec(params = {}, options = {}) {
    return this.request('GetTaskSpec', params, options);
  }

  /**
   * @param {String} Name - name. optional.
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  getTasksByName(params = {}, options = {}) {
    return this.request('GetTasksByName', params, options);
  }

  /**
   * @param {String} DbType - dbType. required.
   * @param {String} SqlText - sqlText. required.
   */
  getTransformSql(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DbType')) {
      throw new TypeError('parameter "DbType" is required');
    }

    if (!hasOwnProperty(params, 'SqlText')) {
      throw new TypeError('parameter "SqlText" is required');
    }

    return this.request('GetTransformSql', params, options);
  }

  /**
   * @param {Integer} TaskID - taskId. required.
   */
  getVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskID')) {
      throw new TypeError('parameter "TaskID" is required');
    }

    return this.request('GetVolume', params, options);
  }

  /**
   * @param {Integer} PorjectID - projectID. required.
   */
  getVolumeSummary(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PorjectID')) {
      throw new TypeError('parameter "PorjectID" is required');
    }

    return this.request('GetVolumeSummary', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. optional.
   * @param {String} DbType - dbType. optional.
   */
  listTaskIds(params = {}, options = {}) {
    return this.request('ListTaskIds', params, options);
  }

  /**
   * @param {Integer} Offset - offset. optional.
   * @param {Integer} Size - size. optional.
   */
  listTasks(params = {}, options = {}) {
    return this.request('ListTasks', params, options);
  }

  /**
   * @param {String} ProjectId - projectId. required.
   * @param {String} Schemas - schemas. optional.
   */
  querySchemaDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    return this.request('QuerySchemaDetail', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   * @param {Integer} DrType - drType. optional.
   */
  saveTaskDR(params = {}, options = {}) {
    return this.request('SaveTaskDR', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. required.
   * @param {String} SearchContents - searchContents. required.
   * @param {String} Offset - pageNum. optional.
   * @param {String} Size - size. optional.
   */
  searchObjectPortrait(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ProjectId')) {
      throw new TypeError('parameter "ProjectId" is required');
    }

    if (!hasOwnProperty(params, 'SearchContents')) {
      throw new TypeError('parameter "SearchContents" is required');
    }

    return this.request('SearchObjectPortrait', params, options);
  }

  /**
   * @param {Long} ProjectId - projectId. optional.
   * @param {Long} TargetUid - targetUid. optional.
   */
  shareProject(params = {}, options = {}) {
    return this.request('ShareProject', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   * @param {Long} UserId - userId. optional.
   */
  shareTask(params = {}, options = {}) {
    return this.request('ShareTask', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. required.
   * @param {Integer} MaxCpu - maxCpu. required.
   * @param {Integer} MaxMem - maxMem. required.
   * @param {Long} MaxVolume - maxVolume. required.
   */
  startTask(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskId')) {
      throw new TypeError('parameter "TaskId" is required');
    }

    if (!hasOwnProperty(params, 'MaxCpu')) {
      throw new TypeError('parameter "MaxCpu" is required');
    }

    if (!hasOwnProperty(params, 'MaxMem')) {
      throw new TypeError('parameter "MaxMem" is required');
    }

    if (!hasOwnProperty(params, 'MaxVolume')) {
      throw new TypeError('parameter "MaxVolume" is required');
    }

    return this.request('StartTask', params, options);
  }

  /**
   * @param {Integer} TaskID - taskId. required.
   */
  submitAllOss(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskID')) {
      throw new TypeError('parameter "TaskID" is required');
    }

    return this.request('SubmitAllOss', params, options);
  }

  /**
   * @param {Integer} TaskID - taskId. required.
   * @param {Long} MaxVolume - maxVolume. optional.
   */
  submitMaxVolume(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'TaskID')) {
      throw new TypeError('parameter "TaskID" is required');
    }

    return this.request('SubmitMaxVolume', params, options);
  }

  /**
   * @param {Integer} TaskId - taskId. optional.
   * @param {String} TableVolumeList - tableVolumeList. optional.
   */
  submitVolumeList(params = {}, options = {}) {
    return this.request('SubmitVolumeList', params, options);
  }

  /**
   * @param {Integer} TaskId - taskId. optional.
   * @param {String} CostList - costList. optional.
   */
  sumbitCostList(params = {}, options = {}) {
    return this.request('SumbitCostList', params, options);
  }

  /**
   * @param {Long} TaskId - taskId. optional.
   * @param {String} ReportInfo - reportInfo. optional.
   */
  updateTaskReportInfo(params = {}, options = {}) {
    return this.request('UpdateTaskReportInfo', params, options);
  }

}

module.exports = Client;
