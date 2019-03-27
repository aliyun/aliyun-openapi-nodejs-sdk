
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-01-16';
    super(config);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {RepeatList} ItemList - itemList. optional.
   */
  addSupplierNewItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('AddSupplierNewItems', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} BizUid - bizUid. required.
   * @param {String} OutTradeId - outTradeId. optional.
   * @param {String} LockSeatAppKey - lockSeatAppKey. required.
   * @param {String} ExtJson - extJson. optional.
   */
  createMovieTicketOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BizUid')) {
      throw new TypeError('parameter "BizUid" is required');
    }

    if (!hasOwnProperty(params, 'LockSeatAppKey')) {
      throw new TypeError('parameter "LockSeatAppKey" is required');
    }

    return this.request('CreateMovieTicketOrder', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} BizUid - bizUid. required.
   * @param {String} OutTradeId - outTradeId. required.
   * @param {Long} ItemId - itemId. optional.
   * @param {Long} Quantity - quantity. optional. default: 1.
   * @param {Long} TotalAmount - totalAmount. optional. default: 0.
   * @param {String} ExtJson - extJson. optional. default: {}.
   * @param {RepeatList} ItemList - itemList. optional.
   * @param {String} DeliveryAddress - deliveryAddress. optional.
   * @param {Long} OrderExpireTime - orderExpireTime. optional. default: 900.
   */
  createOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BizUid')) {
      throw new TypeError('parameter "BizUid" is required');
    }

    if (!hasOwnProperty(params, 'OutTradeId')) {
      throw new TypeError('parameter "OutTradeId" is required');
    }

    return this.request('CreateOrder', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} SubBizId - subBizId. optional.
   * @param {RepeatList} ItemIdList - itemIdList. required.
   */
  deleteBizItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ItemIdList')) {
      throw new TypeError('parameter "ItemIdList" is required');
    }

    return this.request('DeleteBizItems', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} SubBizId - subBizId. optional.
   * @param {RepeatList} ItemList - itemList. required.
   */
  modifyBizItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ItemList')) {
      throw new TypeError('parameter "ItemList" is required');
    }

    return this.request('ModifyBizItems', params, options);
  }

  /**
   * @param {String} ChannelId - channelId. required.
   * @param {String} RequestId - requestId. required.
   * @param {String} OperationDate - operationDate. optional.
   * @param {String} PayTypes - payTypes. optional.
   * @param {Long} Amount - amount. optional.
   */
  notifyPayOrderStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'RequestId')) {
      throw new TypeError('parameter "RequestId" is required');
    }

    return this.request('NotifyPayOrderStatus', params, options);
  }

  /**
   * @param {String} ChannelId - channelId. required.
   * @param {String} RequestId - requestId. required.
   * @param {String} OperationDate - operationDate. optional.
   * @param {String} PayTypes - payTypes. optional.
   * @param {Long} Amount - amount. optional.
   * @param {String} TenantOrderId - tenantOrderId. required.
   */
  notifyWithholdFund(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'ChannelId')) {
      throw new TypeError('parameter "ChannelId" is required');
    }

    if (!hasOwnProperty(params, 'RequestId')) {
      throw new TypeError('parameter "RequestId" is required');
    }

    if (!hasOwnProperty(params, 'TenantOrderId')) {
      throw new TypeError('parameter "TenantOrderId" is required');
    }

    return this.request('NotifyWithholdFund', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Ip - ip. optional.
   * @param {String} DivisionCode - level3DivisionCode. optional. default: 1.
   */
  queryAddress(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('QueryAddress', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {Long} CityCode - cityCode. required.
   * @param {Long} PageNumber - pageNumber. required.
   * @param {String} ExtJson - extJson. optional.
   */
  queryAllCinemas(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'CityCode')) {
      throw new TypeError('parameter "CityCode" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    return this.request('QueryAllCinemas', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {Json} ExtJson - extJson. optional.
   */
  queryAllCities(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('QueryAllCities', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} SubBizId - subBizId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {String} UserId - userId. optional.
   */
  queryBizItemList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    return this.request('QueryBizItemList', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} SubBizId - subBizId. optional.
   * @param {Integer} PageSize - pageSize. required.
   * @param {Integer} PageNumber - pageNumber. required.
   * @param {String} UserId - userId. optional.
   */
  queryBizItems(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    return this.request('QueryBizItems', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} GroupId - groupId. required.
   * @param {Long} PageNumber - pageNumber. optional.
   * @param {Long} PageSize - pageSize. optional.
   */
  queryGuideItemGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'GroupId')) {
      throw new TypeError('parameter "GroupId" is required');
    }

    return this.request('QueryGuideItemGroup', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {Long} CityCode - cityCode. required.
   * @param {String} ExtJson - extJson. optional.
   */
  queryHotMovies(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'CityCode')) {
      throw new TypeError('parameter "CityCode" is required');
    }

    return this.request('QueryHotMovies', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {Long} ItemId - itemId. required.
   */
  queryItemDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ItemId')) {
      throw new TypeError('parameter "ItemId" is required');
    }

    return this.request('QueryItemDetail', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} DivisionCode - divisionCode. required.
   * @param {String} Ip - ip. optional.
   * @param {RepeatList} ItemList - itemList. required.
   */
  queryItemInventory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'DivisionCode')) {
      throw new TypeError('parameter "DivisionCode" is required');
    }

    if (!hasOwnProperty(params, 'ItemList')) {
      throw new TypeError('parameter "ItemList" is required');
    }

    return this.request('QueryItemInventory', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} BizUid - bizUid. optional.
   * @param {Long} LmOrderId - lmOrderId. optional.
   */
  queryLogistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('QueryLogistics', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} Topic - topic. required.
   * @param {String} ExtJson - extJson. optional.
   */
  queryMessages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'Topic')) {
      throw new TypeError('parameter "Topic" is required');
    }

    return this.request('QueryMessages', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {Long} MovieId - movieId. required.
   * @param {Long} PageNumber - pageNumber. required.
   * @param {String} ExtJson - extJson. optional.
   */
  queryMovieComments(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MovieId')) {
      throw new TypeError('parameter "MovieId" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    return this.request('QueryMovieComments', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {Long} CinemaId - cinemaId. required.
   * @param {String} ExtJson - extJson. optional.
   */
  queryMovieSchedules(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'CinemaId')) {
      throw new TypeError('parameter "CinemaId" is required');
    }

    return this.request('QueryMovieSchedules', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {Long} ScheduleId - scheduleId. required.
   * @param {String} ExtJson - extJson. optional.
   */
  queryMovieSeats(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ScheduleId')) {
      throw new TypeError('parameter "ScheduleId" is required');
    }

    return this.request('QueryMovieSeats', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} BizUid - bizUid. required.
   * @param {String} OrderId - orderId. required.
   * @param {String} ExtJson - extJson. optional.
   */
  queryMovieTickets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BizUid')) {
      throw new TypeError('parameter "BizUid" is required');
    }

    if (!hasOwnProperty(params, 'OrderId')) {
      throw new TypeError('parameter "OrderId" is required');
    }

    return this.request('QueryMovieTickets', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} BizUid - bizUid. required.
   * @param {Long} PageSize - pageSize. required.
   * @param {Long} PageNumber - pageNumber. required.
   * @param {String} FilterOption - filterOption. optional.
   */
  queryOrderList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BizUid')) {
      throw new TypeError('parameter "BizUid" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    if (!hasOwnProperty(params, 'PageNumber')) {
      throw new TypeError('parameter "PageNumber" is required');
    }

    return this.request('QueryOrderList', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} BizUid - bizUid. required.
   * @param {Long} LmOrderId - lmOrderId. required.
   */
  queryOrderLogistics(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BizUid')) {
      throw new TypeError('parameter "BizUid" is required');
    }

    if (!hasOwnProperty(params, 'LmOrderId')) {
      throw new TypeError('parameter "LmOrderId" is required');
    }

    return this.request('QueryOrderLogistics', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {Long} CityCode - cityCode. required.
   * @param {Json} ExtJson - extJson. optional.
   */
  queryUpcomingMovies(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'CityCode')) {
      throw new TypeError('parameter "CityCode" is required');
    }

    return this.request('QueryUpcomingMovies', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} SellerId - sellerId. optional.
   * @param {String} LmOrderId - lmOrderId. optional.
   * @param {String} Reason - reason. optional.
   */
  refundPoint(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    return this.request('RefundPoint', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} LockSeatApplyKey - lockSeatApplyKey. required.
   * @param {String} BizUid - bizUid. required.
   * @param {String} ExtJson - extJson. optional.
   */
  releaseMovieSeat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'LockSeatApplyKey')) {
      throw new TypeError('parameter "LockSeatApplyKey" is required');
    }

    if (!hasOwnProperty(params, 'BizUid')) {
      throw new TypeError('parameter "BizUid" is required');
    }

    return this.request('ReleaseMovieSeat', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} MessageIds - messageIds. required.
   * @param {String} ExtJson - extJson. optional.
   */
  removeMessages(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'MessageIds')) {
      throw new TypeError('parameter "MessageIds" is required');
    }

    options.method = 'POST';
    return this.request('RemoveMessages', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {String} BizUid - bizUid. required.
   * @param {Long} LmOrderId - lmOrderId. required.
   */
  repayOrder(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'BizUid')) {
      throw new TypeError('parameter "BizUid" is required');
    }

    if (!hasOwnProperty(params, 'LmOrderId')) {
      throw new TypeError('parameter "LmOrderId" is required');
    }

    return this.request('RepayOrder', params, options);
  }

  /**
   * @param {String} BizId - bizId. required.
   * @param {Long} ScheduleId - scheduleId. required.
   * @param {String} SeatIds - seatIds. required.
   * @param {String} SeatNames - seatNames. required.
   * @param {String} BizUid - bizUid. required.
   * @param {String} Mobile - mobile. required.
   * @param {String} ExtJson - extJson. optional.
   */
  reserveMovieSeat(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizId')) {
      throw new TypeError('parameter "BizId" is required');
    }

    if (!hasOwnProperty(params, 'ScheduleId')) {
      throw new TypeError('parameter "ScheduleId" is required');
    }

    if (!hasOwnProperty(params, 'SeatIds')) {
      throw new TypeError('parameter "SeatIds" is required');
    }

    if (!hasOwnProperty(params, 'SeatNames')) {
      throw new TypeError('parameter "SeatNames" is required');
    }

    if (!hasOwnProperty(params, 'BizUid')) {
      throw new TypeError('parameter "BizUid" is required');
    }

    if (!hasOwnProperty(params, 'Mobile')) {
      throw new TypeError('parameter "Mobile" is required');
    }

    return this.request('ReserveMovieSeat', params, options);
  }

}

module.exports = Client;
