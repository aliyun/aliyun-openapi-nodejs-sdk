
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2016-02-29';
    super(config);
  }

  checkInstanceName(query, headers = {}, opts = {}) {
    const path = `/CheckInstanceName`;
    return this.get(path, query, headers, opts);
  }

  checkObInstanceOwner(query, headers = {}, opts = {}) {
    const path = `/CheckObInstanceOwner`;
    return this.get(path, query, headers, opts);
  }

  createInstance(query, headers = {}, opts = {}) {
    const path = `/CreateInstance`;
    return this.get(path, query, headers, opts);
  }

  deleteInstance(query, headers = {}, opts = {}) {
    const path = `/DeleteInstance`;
    return this.get(path, query, headers, opts);
  }

  getIndexAdviceByInstanceId(query, headers = {}, opts = {}) {
    const path = `/GetIndexAdviceByInstanceId`;
    return this.get(path, query, headers, opts);
  }

  getInstanceAllTypeRtAndCountPerfData(query, headers = {}, opts = {}) {
    const path = `/GetInstanceAllTypeRtAndCountPerfData`;
    return this.get(path, query, headers, opts);
  }

  getInstanceClassList(query, headers = {}, opts = {}) {
    const path = `/GetInstanceClassList`;
    return this.get(path, query, headers, opts);
  }

  getInstanceConnectionInfo(query, headers = {}, opts = {}) {
    const path = `/GetInstanceConnectionInfo`;
    return this.get(path, query, headers, opts);
  }

  getInstanceDataSourceConfig(query, headers = {}, opts = {}) {
    const path = `/GetInstanceDataSourceConfig`;
    return this.get(path, query, headers, opts);
  }

  getInstanceDetail(query, headers = {}, opts = {}) {
    const path = `/GetInstanceDetail`;
    return this.get(path, query, headers, opts);
  }

  getInstanceList(query, headers = {}, opts = {}) {
    const path = `/GetInstanceList`;
    return this.get(path, query, headers, opts);
  }

  getInstanceMonitorStatusList(query, headers = {}, opts = {}) {
    const path = `/GetInstanceMonitorStatusList`;
    return this.get(path, query, headers, opts);
  }

  getInstanceOpLog(query, headers = {}, opts = {}) {
    const path = `/GetInstanceOpLog`;
    return this.get(path, query, headers, opts);
  }

  getInstanceRtAndCountPerfData(query, headers = {}, opts = {}) {
    const path = `/GetInstanceRtAndCountPerfData`;
    return this.get(path, query, headers, opts);
  }

  getInstanceSlowSqlList(query, headers = {}, opts = {}) {
    const path = `/GetInstanceSlowSqlList`;
    return this.get(path, query, headers, opts);
  }

  getInstanceSqlPerfData(query, headers = {}, opts = {}) {
    const path = `/GetInstanceSqlPerfData`;
    return this.get(path, query, headers, opts);
  }

  getInstanceSqlType(query, headers = {}, opts = {}) {
    const path = `/GetInstanceSqlType`;
    return this.get(path, query, headers, opts);
  }

  getInstanceSqlTypePerfData(query, headers = {}, opts = {}) {
    const path = `/GetInstanceSqlTypePerfData`;
    return this.get(path, query, headers, opts);
  }

  getInstanceTypeRtAndCountPerfData(query, headers = {}, opts = {}) {
    const path = `/GetInstanceTypeRtAndCountPerfData`;
    return this.get(path, query, headers, opts);
  }

  getObInstanceConnectionInfo(query, headers = {}, opts = {}) {
    const path = `/GetObInstanceConnectionInfo`;
    return this.get(path, query, headers, opts);
  }

  getObRegionGroupList(query, headers = {}, opts = {}) {
    const path = `/GetObRegionGroupList`;
    return this.get(path, query, headers, opts);
  }

  getOneSqlTuningDetail(query, headers = {}, opts = {}) {
    const path = `/GetOneSqlTuningDetail`;
    return this.get(path, query, headers, opts);
  }

  getSqlTuningDetail(query, headers = {}, opts = {}) {
    const path = `/GetSqlTuningDetail`;
    return this.get(path, query, headers, opts);
  }

  getTaskStatus(query, headers = {}, opts = {}) {
    const path = `/GetTaskStatus`;
    return this.get(path, query, headers, opts);
  }

  getUserInstanceOverview(query, headers = {}, opts = {}) {
    const path = `/GetUserInstanceOverview`;
    return this.get(path, query, headers, opts);
  }

  setInstanceDBPassword(query, headers = {}, opts = {}) {
    const path = `/SetInstanceDBPassword`;
    return this.get(path, query, headers, opts);
  }

  setInstanceMaintainTime(query, headers = {}, opts = {}) {
    const path = `/SetInstanceMaintainTime`;
    return this.get(path, query, headers, opts);
  }

  updateInstanceClass(query, headers = {}, opts = {}) {
    const path = `/UpdateInstanceClass`;
    return this.get(path, query, headers, opts);
  }

  updateInstanceDataSourceConfig(query, headers = {}, opts = {}) {
    const path = `/UpdateInstanceDataSourceConfig`;
    return this.get(path, query, headers, opts);
  }

  updateInstanceNickName(query, headers = {}, opts = {}) {
    const path = `/UpdateInstanceNickName`;
    return this.get(path, query, headers, opts);
  }

}

module.exports = Client;
