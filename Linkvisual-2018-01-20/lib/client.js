
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-20';
    super(config);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  addEventRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('AddEventRecordPlanDevice', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  addRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('AddRecordPlanDevice', params, options);
  }

  /**
   */
  createEventRecordPlan(params = {}, options = {}) {
    return this.request('CreateEventRecordPlan', params, options);
  }

  /**
   */
  createRecordPlan(params = {}, options = {}) {
    return this.request('CreateRecordPlan', params, options);
  }

  /**
   */
  createTimeTemplate(params = {}, options = {}) {
    return this.request('CreateTimeTemplate', params, options);
  }

  /**
   */
  deleteEventRecordPlan(params = {}, options = {}) {
    return this.request('DeleteEventRecordPlan', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  deleteEventRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('DeleteEventRecordPlanDevice', params, options);
  }

  /**
   */
  deleteRecordPlan(params = {}, options = {}) {
    return this.request('DeleteRecordPlan', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  deleteRecordPlanDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('DeleteRecordPlanDevice', params, options);
  }

  /**
   */
  deleteTimeTemplate(params = {}, options = {}) {
    return this.request('DeleteTimeTemplate', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDeviceEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDeviceEvent', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDeviceEventPicture(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDeviceEventPicture', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDeviceEventRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDeviceEventRecord', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDeviceFileVod(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDeviceFileVod', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDevicePictureFile(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDevicePictureFile', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryDevicePictureLifeCycle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryDevicePictureLifeCycle', params, options);
  }

  /**
   */
  queryDeviceRecordLifeCycle(params = {}, options = {}) {
    return this.request('QueryDeviceRecordLifeCycle', params, options);
  }

  /**
   */
  queryEventRecordPlanDetail(params = {}, options = {}) {
    return this.request('QueryEventRecordPlanDetail', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryEventRecordPlanDeviceByDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryEventRecordPlanDeviceByDevice', params, options);
  }

  /**
   */
  queryEventRecordPlanDeviceByPlan(params = {}, options = {}) {
    return this.request('QueryEventRecordPlanDeviceByPlan', params, options);
  }

  /**
   */
  queryEventRecordPlans(params = {}, options = {}) {
    return this.request('QueryEventRecordPlans', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryLiveStreaming(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryLiveStreaming', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryMonthRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryMonthRecord', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryPictureFiles(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryPictureFiles', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryRecord', params, options);
  }

  /**
   */
  queryRecordPlanDetail(params = {}, options = {}) {
    return this.request('QueryRecordPlanDetail', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryRecordPlanDeviceByDevice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryRecordPlanDeviceByDevice', params, options);
  }

  /**
   */
  queryRecordPlanDeviceByPlan(params = {}, options = {}) {
    return this.request('QueryRecordPlanDeviceByPlan', params, options);
  }

  /**
   */
  queryRecordPlans(params = {}, options = {}) {
    return this.request('QueryRecordPlans', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  queryRecordUrl(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('QueryRecordUrl', params, options);
  }

  /**
   */
  queryTimeTemplate(params = {}, options = {}) {
    return this.request('QueryTimeTemplate', params, options);
  }

  /**
   */
  queryTimeTemplateDetail(params = {}, options = {}) {
    return this.request('QueryTimeTemplateDetail', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  setDevicePictureLifeCycle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('SetDevicePictureLifeCycle', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  setDeviceRecordLifeCycle(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('SetDeviceRecordLifeCycle', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  stopLiveStreaming(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('StopLiveStreaming', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  triggerCapturePicture(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('TriggerCapturePicture', params, options);
  }

  /**
   * @param {String} IotId - iotId. required.
   */
  triggerRecord(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'IotId')) {
      throw new TypeError('parameter "IotId" is required');
    }

    return this.request('TriggerRecord', params, options);
  }

  /**
   */
  updateEventRecordPlan(params = {}, options = {}) {
    return this.request('UpdateEventRecordPlan', params, options);
  }

  /**
   */
  updateRecordPlan(params = {}, options = {}) {
    return this.request('UpdateRecordPlan', params, options);
  }

  /**
   */
  updateTimeTemplate(params = {}, options = {}) {
    return this.request('UpdateTimeTemplate', params, options);
  }

}

module.exports = Client;
