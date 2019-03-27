
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-02-24';
    super(config);
  }

  /**
   * @param {String} Topic - topic. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  getMessages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('GetMessages', params, options);
  }

  /**
   * @param {Json} MsgIds - msgIds. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  removeMessages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'MsgIds')) {
      throw new TypeError('parameter "MsgIds" is required');
    }

    return this.request('RemoveMessages', params, options);
  }

  /**
   * @param {Long} PageIndex - pageIndex. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmGetCinemas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('TaobaoFilmGetCinemas', params, options);
  }

  /**
   * @param {Long} CityCode - cityCode. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmGetHotShows(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CityCode')) {
      throw new TypeError('parameter "CityCode" is required');
    }

    return this.request('TaobaoFilmGetHotShows', params, options);
  }

  /**
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmGetRegionList(params = {}, options = {}) {
    return this.request('TaobaoFilmGetRegionList', params, options);
  }

  /**
   * @param {Long} CinemaId - cinemaId. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmGetSchedules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CinemaId')) {
      throw new TypeError('parameter "CinemaId" is required');
    }

    return this.request('TaobaoFilmGetSchedules', params, options);
  }

  /**
   * @param {Long} ScheduleId - scheduleId. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmGetSeats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScheduleId')) {
      throw new TypeError('parameter "ScheduleId" is required');
    }

    return this.request('TaobaoFilmGetSeats', params, options);
  }

  /**
   * @param {Long} ShowId - showId. required.
   * @param {Long} PageIndex - pageIndex. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmGetShowComments(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ShowId')) {
      throw new TypeError('parameter "ShowId" is required');
    }

    if (!hasOwnProperty(params, 'PageIndex')) {
      throw new TypeError('parameter "PageIndex" is required');
    }

    return this.request('TaobaoFilmGetShowComments', params, options);
  }

  /**
   * @param {Long} CityCode - cityCode. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmGetSoonShows(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CityCode')) {
      throw new TypeError('parameter "CityCode" is required');
    }

    return this.request('TaobaoFilmGetSoonShows', params, options);
  }

  /**
   * @param {String} LockSeatApplyKey - lockSeatApplyKey. required.
   * @param {String} ExtUserId - extUserId. required.
   * @param {String} ExtOrderId - extOrderId. required.
   * @param {Long} TotalPrice - totalPrice. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmIssueOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LockSeatApplyKey')) {
      throw new TypeError('parameter "LockSeatApplyKey" is required');
    }

    if (!hasOwnProperty(params, 'ExtUserId')) {
      throw new TypeError('parameter "ExtUserId" is required');
    }

    if (!hasOwnProperty(params, 'ExtOrderId')) {
      throw new TypeError('parameter "ExtOrderId" is required');
    }

    if (!hasOwnProperty(params, 'TotalPrice')) {
      throw new TypeError('parameter "TotalPrice" is required');
    }

    return this.request('TaobaoFilmIssueOrder', params, options);
  }

  /**
   * @param {Long} ScheduleId - scheduleId. required.
   * @param {String} SeatIds - seatIds. required.
   * @param {String} SeatNames - seatNames. required.
   * @param {String} Mobile - mobile. required.
   * @param {String} ExtUserId - extUserId. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmLockSeat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ScheduleId')) {
      throw new TypeError('parameter "ScheduleId" is required');
    }

    if (!hasOwnProperty(params, 'SeatIds')) {
      throw new TypeError('parameter "SeatIds" is required');
    }

    if (!hasOwnProperty(params, 'SeatNames')) {
      throw new TypeError('parameter "SeatNames" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    if (!hasOwnProperty(params, 'ExtUserId')) {
      throw new TypeError('parameter "ExtUserId" is required');
    }

    return this.request('TaobaoFilmLockSeat', params, options);
  }

  /**
   * @param {String} LockSeatApplyKey - lockSeatApplyKey. required.
   * @param {String} ExtUserId - extUserId. required.
   * @param {String} ParamsJson - paramsJson. optional.
   */
  taobaoFilmUnLockSeat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LockSeatApplyKey')) {
      throw new TypeError('parameter "LockSeatApplyKey" is required');
    }

    if (!hasOwnProperty(params, 'ExtUserId')) {
      throw new TypeError('parameter "ExtUserId" is required');
    }

    return this.request('TaobaoFilmUnLockSeat', params, options);
  }

}

module.exports = Client;
