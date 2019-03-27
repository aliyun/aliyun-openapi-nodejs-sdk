
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2017-12-07';
    super(config);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AddressList - queries.addressList. optional.
   * @param {String} Description - queries.description. required.
   * @param {String} GroupName - queries.groupName. required.
   * @param {String} GroupType - queries.groupType. required.
   * @param {String} AutoAddTagEcs - queries.autoAddTagEcs. optional.
   * @param {String} TagKey - queries.tagKey. optional.
   * @param {String} TagValue - queries.tagValue. optional.
   * @param {String} TagRelation - queries.tagRelation. optional.
   * @param {RepeatList} TagList - queries.tagList. optional.
   */
  addAddressBook(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'GroupType')) {
      throw new TypeError('parameter "GroupType" is required');
    }

    return this.request('AddAddressBook', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AclAction - queries.action. required.
   * @param {String} ApplicationId - queries.applicationId. required.
   * @param {String} ApplicationName - queries.applicationName. required.
   * @param {String} Description - queries.description. required.
   * @param {String} DestPort - queries.destPort. optional.
   * @param {String} Destination - queries.destination. required.
   * @param {String} DestinationType - queries.destinationType. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} Proto - queries.proto. required.
   * @param {String} Source - queries.source. required.
   * @param {String} SourceType - queries.sourceType. required.
   * @param {String} NewOrder - queries.newOrder. required.
   * @param {String} DestPortType - queries.destPortType. optional.
   * @param {String} DestPortGroup - queries.destPortGroup. optional.
   */
  addControlPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AclAction')) {
      throw new TypeError('parameter "AclAction" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationId')) {
      throw new TypeError('parameter "ApplicationId" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationName')) {
      throw new TypeError('parameter "ApplicationName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Destination')) {
      throw new TypeError('parameter "Destination" is required');
    }

    if (!hasOwnProperty(params, 'DestinationType')) {
      throw new TypeError('parameter "DestinationType" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'Proto')) {
      throw new TypeError('parameter "Proto" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'NewOrder')) {
      throw new TypeError('parameter "NewOrder" is required');
    }

    return this.request('AddControlPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} PatchName - queries.patchName. required.
   * @param {String} RuleContent - queries.ruleContent. required.
   * @param {String} VulId - queries.vulId. required.
   * @param {String} VulLevel - queries.vulLevel. required.
   */
  addVirtualPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PatchName')) {
      throw new TypeError('parameter "PatchName" is required');
    }

    if (!hasOwnProperty(params, 'RuleContent')) {
      throw new TypeError('parameter "RuleContent" is required');
    }

    if (!hasOwnProperty(params, 'VulId')) {
      throw new TypeError('parameter "VulId" is required');
    }

    if (!hasOwnProperty(params, 'VulLevel')) {
      throw new TypeError('parameter "VulLevel" is required');
    }

    return this.request('AddVirtualPatch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AppGroupId - queries.appGroupId. required.
   * @param {RepeatList} AppIdList - queries.appIdList. required.
   */
  batchUpdateAppGroupId(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppGroupId')) {
      throw new TypeError('parameter "AppGroupId" is required');
    }

    if (!hasOwnProperty(params, 'AppIdList')) {
      throw new TypeError('parameter "AppIdList" is required');
    }

    return this.request('BatchUpdateAppGroupId', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AllEvent - queries.allEvent. optional.
   * @param {RepeatList} EventIdList - queries.eventIdList. optional.
   */
  cancelIgnoreInvadeEvent(params = {}, options = {}) {
    return this.request('CancelIgnoreInvadeEvent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  checkStsGrant(params = {}, options = {}) {
    return this.request('CheckStsGrant', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyGroupUUID - queries.strategyGroupUUID. required.
   * @param {String} Revision - queries.revision. optional.
   * @param {String} CommitMessage - queries.commitMessage. required.
   */
  commitStrategyGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyGroupUUID')) {
      throw new TypeError('parameter "StrategyGroupUUID" is required');
    }

    if (!hasOwnProperty(params, 'CommitMessage')) {
      throw new TypeError('parameter "CommitMessage" is required');
    }

    return this.request('CommitStrategyGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.vpcId. required.
   * @param {String} AppGroupId - queries.appGroupId. optional.
   * @param {RepeatList} AppParamList - queries.appParamList. required.
   */
  createApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'AppParamList')) {
      throw new TypeError('parameter "AppParamList" is required');
    }

    return this.request('CreateApp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.vpcId. required.
   * @param {String} AppGroupName - queries.appGroupName. required.
   * @param {String} Remark - queries.remark. optional.
   * @param {String} Level - queries.level. optional.
   * @param {String} BizId - queries.bizId. optional.
   */
  createAppGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'AppGroupName')) {
      throw new TypeError('parameter "AppGroupName" is required');
    }

    return this.request('CreateAppGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.vpcId. optional.
   * @param {String} BizName - queries.bizName. optional.
   * @param {String} Remark - queries.remark. optional.
   * @param {String} Level - queries.level. optional.
   */
  createBiz(params = {}, options = {}) {
    return this.request('CreateBiz', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} TaskName - queries.TaskName. optional.
   * @param {String} MaxSize - queries.MaxSize. optional.
   * @param {String} LimitTime - queries.LimitTime. optional.
   * @param {String} CapProtocol - queries.CapProtocol. optional.
   * @param {String} ConfigType - queries.ConfigType. optional.
   * @param {String} LocalIP - queries.LocalIP. optional.
   * @param {String} LocalPort - queries.LocalPort. optional.
   * @param {String} RemoteIP - queries.RemoteIP. optional.
   * @param {String} RemotePort - queries.RemotePort. optional.
   * @param {String} SourceCode - queries.sourceCode. optional.
   * @param {String} Bid - queries.bid. optional.
   */
  createCaptureTask(params = {}, options = {}) {
    return this.request('CreateCaptureTask', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {String} Keyword - keyword. required.
   */
  createEcsKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    return this.request('CreateEcsKeyword', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} GroupName - groupName. required.
   * @param {String} Type - type. required.
   * @param {String} IpSegment - ipSegment. required.
   */
  createIpSegement(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'IpSegment')) {
      throw new TypeError('parameter "IpSegment" is required');
    }

    return this.request('CreateIpSegement', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RegionNo - queries.regionNo. required.
   * @param {String} VpcId - queries.vpcId. required.
   * @param {String} StrategyGroupName - queries.strategyGroupName. required.
   * @param {String} Description - queries.description. required.
   * @param {String} InstanceList - queries.instanceList. required.
   * @param {String} InitialTemplate - queries.initialTemplate. required.
   */
  createStrategyGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    if (!hasOwnProperty(params, 'StrategyGroupName')) {
      throw new TypeError('parameter "StrategyGroupName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'InstanceList')) {
      throw new TypeError('parameter "InstanceList" is required');
    }

    if (!hasOwnProperty(params, 'InitialTemplate')) {
      throw new TypeError('parameter "InitialTemplate" is required');
    }

    return this.request('CreateStrategyGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyGroupUUID - queries.strategyGroupUUID. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} IpProtocol - queries.ipProtocol. required.
   * @param {String} PortRange - queries.portRange. required.
   * @param {String} Policy - queries.policy. required.
   * @param {String} SourceCidrIp - queries.sourceCidrIp. optional.
   * @param {String} SourceGroupId - queries.sourceGroupId. optional.
   * @param {String} SourceAddressGroup - queries.sourceAddressGroup. optional.
   * @param {String} DestCidrIp - queries.destCidrIp. optional.
   * @param {String} DestGroupId - queries.destGroupId. optional.
   * @param {String} DestAddressGroup - queries.destAddressGroup. optional.
   * @param {String} Priority - queries.priority. required.
   * @param {String} Description - queries.description. required.
   */
  createStrategyGroupRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyGroupUUID')) {
      throw new TypeError('parameter "StrategyGroupUUID" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'PortRange')) {
      throw new TypeError('parameter "PortRange" is required');
    }

    if (!hasOwnProperty(params, 'Policy')) {
      throw new TypeError('parameter "Policy" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateStrategyGroupRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyTemplateName - queries.strategyTemplateName. required.
   * @param {String} Description - queries.description. required.
   */
  createStrategyTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyTemplateName')) {
      throw new TypeError('parameter "StrategyTemplateName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateStrategyTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyTemplateName - queries.strategyTemplateName. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} IpProtocol - queries.ipProtocol. required.
   * @param {String} PortRange - queries.portRange. required.
   * @param {String} Policy - queries.policy. required.
   * @param {String} SourceCidrIp - queries.sourceCidrIp. optional.
   * @param {String} SourceGroupId - queries.sourceGroupId. optional.
   * @param {String} SourceAddressGroup - queries.sourceAddressGroup. optional.
   * @param {String} DestCidrIp - queries.destCidrIp. optional.
   * @param {String} DestGroupId - queries.destGroupId. optional.
   * @param {String} DestAddressGroup - queries.destAddressGroup. optional.
   * @param {String} Priority - queries.priority. required.
   * @param {String} Description - queries.description. required.
   */
  createStrategyTemplateRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyTemplateName')) {
      throw new TypeError('parameter "StrategyTemplateName" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'PortRange')) {
      throw new TypeError('parameter "PortRange" is required');
    }

    if (!hasOwnProperty(params, 'Policy')) {
      throw new TypeError('parameter "Policy" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('CreateStrategyTemplateRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcFirewallName - queries.vpcFirewallName. required.
   * @param {String} ConnectType - queries.connectType. required.
   * @param {String} LocalVpcId - queries.localVpcId. required.
   * @param {String} LocalVpcRegion - queries.localVpcRegion. required.
   * @param {String} PeerVpcId - queries.peerVpcId. required.
   * @param {String} PeerVpcRegion - queries.peerVpcRegion. required.
   * @param {String} FirewallSwitch - queries.firewallSwitch. required.
   * @param {String} LocalVpcCidrList - queries.localVpcCidrList. required.
   * @param {String} PeerVpcCidrList - queries.peerVpcCidrList. required.
   */
  createVpcFirewallConfigure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcFirewallName')) {
      throw new TypeError('parameter "VpcFirewallName" is required');
    }

    if (!hasOwnProperty(params, 'ConnectType')) {
      throw new TypeError('parameter "ConnectType" is required');
    }

    if (!hasOwnProperty(params, 'LocalVpcId')) {
      throw new TypeError('parameter "LocalVpcId" is required');
    }

    if (!hasOwnProperty(params, 'LocalVpcRegion')) {
      throw new TypeError('parameter "LocalVpcRegion" is required');
    }

    if (!hasOwnProperty(params, 'PeerVpcId')) {
      throw new TypeError('parameter "PeerVpcId" is required');
    }

    if (!hasOwnProperty(params, 'PeerVpcRegion')) {
      throw new TypeError('parameter "PeerVpcRegion" is required');
    }

    if (!hasOwnProperty(params, 'FirewallSwitch')) {
      throw new TypeError('parameter "FirewallSwitch" is required');
    }

    if (!hasOwnProperty(params, 'LocalVpcCidrList')) {
      throw new TypeError('parameter "LocalVpcCidrList" is required');
    }

    if (!hasOwnProperty(params, 'PeerVpcCidrList')) {
      throw new TypeError('parameter "PeerVpcCidrList" is required');
    }

    return this.request('CreateVpcFirewallConfigure', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AclAction - queries.action. required.
   * @param {String} ApplicationId - queries.applicationId. required.
   * @param {String} ApplicationName - queries.applicationName. required.
   * @param {String} Description - queries.description. required.
   * @param {String} DestPort - queries.destPort. optional.
   * @param {String} Destination - queries.destination. required.
   * @param {String} DestinationType - queries.destinationType. required.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. required.
   * @param {String} Proto - queries.proto. required.
   * @param {String} Source - queries.source. required.
   * @param {String} SourceType - queries.sourceType. required.
   * @param {String} NewOrder - queries.newOrder. required.
   * @param {String} DestPortType - queries.destPortType. optional.
   * @param {String} DestPortGroup - queries.destPortGroup. optional.
   */
  createVpcFirewallControlPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AclAction')) {
      throw new TypeError('parameter "AclAction" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationId')) {
      throw new TypeError('parameter "ApplicationId" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationName')) {
      throw new TypeError('parameter "ApplicationName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Destination')) {
      throw new TypeError('parameter "Destination" is required');
    }

    if (!hasOwnProperty(params, 'DestinationType')) {
      throw new TypeError('parameter "DestinationType" is required');
    }

    if (!hasOwnProperty(params, 'VpcFirewallId')) {
      throw new TypeError('parameter "VpcFirewallId" is required');
    }

    if (!hasOwnProperty(params, 'Proto')) {
      throw new TypeError('parameter "Proto" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    if (!hasOwnProperty(params, 'NewOrder')) {
      throw new TypeError('parameter "NewOrder" is required');
    }

    return this.request('CreateVpcFirewallControlPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} GroupUuid - queries.groupUuid. required.
   * @param {String} GroupType - queries.groupType. optional.
   */
  deleteAddressBook(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupUuid')) {
      throw new TypeError('parameter "GroupUuid" is required');
    }

    return this.request('DeleteAddressBook', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} AppIdList - queries.appIdList. required.
   */
  deleteApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppIdList')) {
      throw new TypeError('parameter "AppIdList" is required');
    }

    return this.request('DeleteApp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} AppGroupIdList - queries.appGroupIdList. required.
   */
  deleteAppGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppGroupIdList')) {
      throw new TypeError('parameter "AppGroupIdList" is required');
    }

    return this.request('DeleteAppGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} BizIdList - queries.bizIdList. required.
   */
  deleteBiz(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'BizIdList')) {
      throw new TypeError('parameter "BizIdList" is required');
    }

    return this.request('DeleteBiz', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} TaskID - queries.TaskID. optional.
   * @param {String} SourceCode - queries.sourceCode. optional.
   * @param {String} Bid - queries.bid. optional.
   */
  deleteCaptureTask(params = {}, options = {}) {
    return this.request('DeleteCaptureTask', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AclUuid - queries.aclUuid. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} Description - queries.description. required.
   */
  deleteControlPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AclUuid')) {
      throw new TypeError('parameter "AclUuid" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('DeleteControlPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {String} Keyword - keyword. required.
   */
  deleteEcsKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    return this.request('DeleteEcsKeyword', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {String} IpSegment - ipSegment. required.
   */
  deleteIpSegment(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'IpSegment')) {
      throw new TypeError('parameter "IpSegment" is required');
    }

    return this.request('DeleteIpSegment', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyGroupUUID - queries.strategyGroupUUID. required.
   * @param {String} RegionNo - queries.regionNo. required.
   */
  deleteStrategyGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyGroupUUID')) {
      throw new TypeError('parameter "StrategyGroupUUID" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('DeleteStrategyGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyGroupUUID - queries.strategyGroupUUID. required.
   * @param {String} RuleUUID - queries.ruleUUID. required.
   */
  deleteStrategyGroupRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyGroupUUID')) {
      throw new TypeError('parameter "StrategyGroupUUID" is required');
    }

    if (!hasOwnProperty(params, 'RuleUUID')) {
      throw new TypeError('parameter "RuleUUID" is required');
    }

    return this.request('DeleteStrategyGroupRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyTemplateName - queries.strategyTemplateName. required.
   */
  deleteStrategyTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyTemplateName')) {
      throw new TypeError('parameter "StrategyTemplateName" is required');
    }

    return this.request('DeleteStrategyTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyTemplateName - queries.strategyTemplateName. required.
   * @param {String} RuleUUID - queries.ruleUUID. required.
   */
  deleteStrategyTemplateRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyTemplateName')) {
      throw new TypeError('parameter "StrategyTemplateName" is required');
    }

    if (!hasOwnProperty(params, 'RuleUUID')) {
      throw new TypeError('parameter "RuleUUID" is required');
    }

    return this.request('DeleteStrategyTemplateRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RuleUuid - queries.ruleUuid. required.
   */
  deleteVirtualPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RuleUuid')) {
      throw new TypeError('parameter "RuleUuid" is required');
    }

    return this.request('DeleteVirtualPatch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} VpcFirewallIdList - queries.vpcFirewallIdList. required.
   */
  deleteVpcFirewallConfigure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcFirewallIdList')) {
      throw new TypeError('parameter "VpcFirewallIdList" is required');
    }

    return this.request('DeleteVpcFirewallConfigure', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AclUuid - queries.aclUuid. required.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. required.
   * @param {String} Description - queries.description. optional.
   */
  deleteVpcFirewallControlPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AclUuid')) {
      throw new TypeError('parameter "AclUuid" is required');
    }

    if (!hasOwnProperty(params, 'VpcFirewallId')) {
      throw new TypeError('parameter "VpcFirewallId" is required');
    }

    return this.request('DeleteVpcFirewallControlPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} VpcNo - vpcNo. required.
   * @param {String} RegionNo - regionNo. required.
   * @param {Long} Id - id. optional.
   * @param {String} Type - type. optional.
   * @param {Integer} LinkDay - linkDay. optional.
   * @param {String} LinkUnit - linkUnit. optional.
   * @param {String} Direction - direction. optional.
   * @param {String} TempVersion - tempVersion. optional.
   * @param {String} RequestType - requestType. optional.
   */
  describeAbnormalInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcNo')) {
      throw new TypeError('parameter "VpcNo" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    return this.request('DescribeAbnormalInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeAclConfigStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeAclConfigStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CurrentPage - queries.pageNo. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} Query - queries.query. optional.
   * @param {String} GroupType - queries.groupType. optional.
   * @param {String} ContainPort - queries.containPort. optional.
   */
  describeAddressBook(params = {}, options = {}) {
    return this.request('DescribeAddressBook', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeAnomalousAssets(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeAnomalousAssets', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AppId - queries.appId. required.
   */
  describeApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    return this.request('DescribeApp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeAppConsumList(params = {}, options = {}) {
    return this.request('DescribeAppConsumList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeAppDetail(params = {}, options = {}) {
    return this.request('DescribeAppDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} BizName - queries.BizName. optional.
   * @param {String} AppGroupName - queries.AppGroupName. optional.
   * @param {String} ProcName - queries.ProcessName. optional.
   * @param {String} PrivateIp - queries.PrivateIp. optional.
   * @param {String} EcsTags - queries.EcsTags. optional.
   * @param {String} EcsName - queries.EcsName. optional.
   * @param {String} PublicIp - queries.PublicIp. optional.
   * @param {String} ListenPort - queries.ListenPort. optional.
   * @param {String} EcsInstanceId - queries.EcsInstanceId. optional.
   */
  describeAppDetailList(params = {}, options = {}) {
    return this.request('DescribeAppDetailList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} SourceAppId - queries.SourceAppId. optional.
   * @param {String} DestAppId - queries.DestAppId. optional.
   * @param {String} SourceIP - queries.SourceIP. optional.
   * @param {String} DestIP - queries.DestIP. optional.
   * @param {String} RelaStatus - queries.Status. optional.
   */
  describeAppFlowDetail(params = {}, options = {}) {
    return this.request('DescribeAppFlowDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AppGroupId - queries.appGroupId. required.
   */
  describeAppGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppGroupId')) {
      throw new TypeError('parameter "AppGroupId" is required');
    }

    return this.request('DescribeAppGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} ConsumGroupId - queries.ConsumGroupId. optional.
   * @param {String} SrcAppGroupId - queries.SrcAppGroupId. optional.
   */
  describeAppGroupConsumAppList(params = {}, options = {}) {
    return this.request('DescribeAppGroupConsumAppList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} ConsumGroupId - queries.ConsumGroupId. optional.
   * @param {String} SrcAppGroupId - queries.SrcAppGroupId. optional.
   */
  describeAppGroupConsumList(params = {}, options = {}) {
    return this.request('DescribeAppGroupConsumList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} ConsumGroupId - queries.ConsumGroupId. optional.
   * @param {String} SrcAppGroupId - queries.SrcAppGroupId. optional.
   */
  describeAppGroupDetail(params = {}, options = {}) {
    return this.request('DescribeAppGroupDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} BizName - queries.BizName. optional.
   * @param {String} AppGroupName - queries.AppGroupName. optional.
   * @param {String} Remark - queries.Remark. optional.
   * @param {String} Level - queries.Level. optional.
   */
  describeAppGroupDetailList(params = {}, options = {}) {
    return this.request('DescribeAppGroupDetailList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.viewType. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} VpcId - queries.vpcId. optional.
   * @param {String} BizId - queries.bizId. optional.
   * @param {String} AppGroupName - queries.appGroupName. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {RepeatList} SortList - queries.sortList. optional.
   */
  describeAppGroupList(params = {}, options = {}) {
    return this.request('DescribeAppGroupList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeAppGroupListWithRelation(params = {}, options = {}) {
    return this.request('DescribeAppGroupListWithRelation', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} ConsumGroupId - queries.ConsumGroupId. optional.
   * @param {String} SrcAppGroupId - queries.SrcAppGroupId. optional.
   */
  describeAppGroupProduceAppList(params = {}, options = {}) {
    return this.request('DescribeAppGroupProduceAppList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} ConsumGroupId - queries.ConsumGroupId. optional.
   * @param {String} SrcAppGroupId - queries.SrcAppGroupId. optional.
   */
  describeAppGroupProduceList(params = {}, options = {}) {
    return this.request('DescribeAppGroupProduceList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} SourceBizName - queries.SourceBizName. optional.
   * @param {String} DestBizName - queries.DestBizName. optional.
   * @param {String} DestAppGroupName - queries.DestAppGroupName. optional.
   * @param {String} SourceAppGroupName - queries.SourceAppGroupName. optional.
   * @param {String} RelaStatus - queries.RelaStatus. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeAppGroupRelaList(params = {}, options = {}) {
    return this.request('DescribeAppGroupRelaList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} IpProtocol - queries.ipProtocol. optional.
   * @param {String} Popular - queries.popular. optional.
   */
  describeAppInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeAppInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.viewType. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} EcsInstanceId - queries.ecsInstanceId. optional.
   * @param {String} EcsTags - queries.ecsTags. optional.
   * @param {String} EcsName - queries.ecsName. optional.
   * @param {String} PublicIp - queries.publicIp. optional.
   * @param {String} PrivateIp - queries.privateIp. optional.
   * @param {String} VpcId - queries.vpcId. optional.
   * @param {String} ProcName - queries.procName. optional.
   * @param {String} BizName - queries.bizName. optional.
   * @param {String} AppGroupName - queries.appGroupName. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} ListenPort - queries.listenPort. optional.
   * @param {String} BizId - queries.bizId. optional.
   * @param {String} AppGroupId - queries.appGroupId. optional.
   * @param {String} Type - queries.type. optional.
   * @param {String} Tags - queries.tags. optional.
   * @param {RepeatList} SortList - queries.sortList. optional.
   */
  describeAppListByEcs(params = {}, options = {}) {
    return this.request('DescribeAppListByEcs', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} ConsumGroupId - queries.ConsumGroupId. optional.
   * @param {String} SrcAppGroupId - queries.SrcAppGroupId. optional.
   */
  describeAppListWithRelation(params = {}, options = {}) {
    return this.request('DescribeAppListWithRelation', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeAppProduceList(params = {}, options = {}) {
    return this.request('DescribeAppProduceList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} StartTime - queries.StartTime. optional.
   * @param {String} EndTime - queries.EndTime. optional.
   * @param {String} SourceBizName - queries.SourceBizName. optional.
   * @param {String} DestBizName - queries.DestBizName. optional.
   * @param {String} DestAppGroupName - queries.DestAppGroupName. optional.
   * @param {String} SourceAppGroupName - queries.SourceAppGroupName. optional.
   * @param {String} RelaStatus - queries.RelaStatus. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} SourceIP - queries.SourceIP. optional.
   * @param {String} DestIP - queries.DestIP. optional.
   * @param {String} DestPort - queries.DestPort. optional.
   */
  describeAppRelaList(params = {}, options = {}) {
    return this.request('DescribeAppRelaList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} Direction - queries.direction. required.
   */
  describeApplicationPortDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('DescribeApplicationPortDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} Direction - queries.direction. required.
   */
  describeApplicationPortRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('DescribeApplicationPortRatio', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAssetInfo(params = {}, options = {}) {
    return this.request('DescribeAssetInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CurrentPage - queries.currentPage. required.
   * @param {String} PageSize - queries.pageSize. required.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} Status - queries.status. optional.
   * @param {String} SearchItem - queries.search. optional.
   * @param {String} Type - queries.type. optional.
   * @param {String} ResourceType - queries.resourceType. optional.
   */
  describeAssetList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeAssetList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAssetRegionList(params = {}, options = {}) {
    return this.request('DescribeAssetRegionList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Period - queries.period. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeAssetRisk(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeAssetRisk', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAssetStatusList(params = {}, options = {}) {
    return this.request('DescribeAssetStatusList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAssetTypeList(params = {}, options = {}) {
    return this.request('DescribeAssetTypeList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeAttackType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeAttackType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAutoGroupTemplateConfig(params = {}, options = {}) {
    return this.request('DescribeAutoGroupTemplateConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeAutogroupStatus(params = {}, options = {}) {
    return this.request('DescribeAutogroupStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} BizId - queries.bizId. optional.
   */
  describeBiz(params = {}, options = {}) {
    return this.request('DescribeBiz', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} ConsumBizId - queries.ConsumBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeBizConsumAppGroupList(params = {}, options = {}) {
    return this.request('DescribeBizConsumAppGroupList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeBizDetail(params = {}, options = {}) {
    return this.request('DescribeBizDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} Remark - queries.Remark. optional.
   * @param {String} BizName - queries.BizName. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} Level - queries.Level. optional.
   */
  describeBizDetailList(params = {}, options = {}) {
    return this.request('DescribeBizDetailList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} SourceAppGroupName - queries.SourceAppGroupName. optional.
   * @param {String} DestAppGroupName - queries.DestAppGroupName. optional.
   * @param {String} RelaStatus - queries.Status. optional.
   */
  describeBizFlowDetail(params = {}, options = {}) {
    return this.request('DescribeBizFlowDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.viewType. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} VpcId - queries.vpcId. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} BizId - queries.bizId. optional.
   * @param {String} BizName - queries.bizName. optional.
   * @param {String} Remark - queries.remark. optional.
   * @param {String} Level - queries.level. optional.
   * @param {RepeatList} SortList - queries.sortList. optional.
   */
  describeBizList(params = {}, options = {}) {
    return this.request('DescribeBizList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeBizListWithRelation(params = {}, options = {}) {
    return this.request('DescribeBizListWithRelation', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeBizProduceAppGroupList(params = {}, options = {}) {
    return this.request('DescribeBizProduceAppGroupList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} SourceBizName - queries.SourceBizName. optional.
   * @param {String} DestBizName - queries.DestBizName. optional.
   * @param {String} RelaStatus - queries.RelaStatus. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeBizRelaList(params = {}, options = {}) {
    return this.request('DescribeBizRelaList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.vpcId. required.
   */
  describeBizTopo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DescribeBizTopo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} TaskID - queries.TaskID. optional.
   * @param {String} SourceCode - queries.sourceCode. optional.
   */
  describeCaptureFileAddr(params = {}, options = {}) {
    return this.request('DescribeCaptureFileAddr', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} TaskName - queries.TaskName. optional.
   * @param {String} IP - queries.IP. optional.
   * @param {String} StartTime - queries.StartTime. optional.
   * @param {String} EndTime - queries.EndTime. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} SourceCode - queries.sourceCode. optional.
   * @param {String} Bid - queries.bid. optional.
   */
  describeCaptureTask(params = {}, options = {}) {
    return this.request('DescribeCaptureTask', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyGroupUUID - queries.strategyGroupUUID. required.
   * @param {String} CurrentPage - queries.currentPage. required.
   * @param {String} PageSize - queries.pageSize. required.
   */
  describeCommitHistory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyGroupUUID')) {
      throw new TypeError('parameter "StrategyGroupUUID" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeCommitHistory', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AssetsIP - queries.assetsIP. optional.
   * @param {String} AssetsType - queries.assetsType. optional.
   * @param {String} ResourceType - queries.resourceType. optional.
   * @param {String} AssetsRegion - queries.assetsRegion. optional.
   * @param {String} GroupName - queries.groupName. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} Direction - queries.direction. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeConfiguredAssetsIP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeConfiguredAssetsIP', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DestinationIP - queries.destinationIP. optional.
   * @param {String} DestinationRegion - queries.destinationRegion. optional.
   * @param {String} DestinationISP - queries.destinationISP. optional.
   * @param {String} GroupName - queries.groupName. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} Direction - queries.direction. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeConfiguredDestinationIP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeConfiguredDestinationIP', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DestinationPort - queries.destinationPort. optional.
   * @param {String} IsRiskPort - queries.isRiskPort. optional.
   * @param {String} GroupName - queries.groupName. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} Direction - queries.direction. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeConfiguredDestinationPort(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeConfiguredDestinationPort', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DomainName - queries.domainName. optional.
   * @param {String} GroupName - queries.groupName. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} Direction - queries.direction. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeConfiguredDomainNames(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeConfiguredDomainNames', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} ConsumGroupId - queries.ConsumGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   */
  describeConsumBizList(params = {}, options = {}) {
    return this.request('DescribeConsumBizList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Direction - queries.direction. required.
   * @param {String} CurrentPage - queries.pageNo. required.
   * @param {String} PageSize - queries.pageSize. required.
   * @param {String} Source - queries.source. optional.
   * @param {String} Destination - queries.destination. optional.
   * @param {String} Description - queries.description. optional.
   * @param {String} Proto - queries.proto. optional.
   * @param {String} AclAction - queries.action. optional.
   */
  describeControlPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeControlPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeDefaultIPSConfig(params = {}, options = {}) {
    return this.request('DescribeDefaultIPSConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EcsInstanceId - queries.ecsInstanceId. required.
   */
  describeEcsInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EcsInstanceId')) {
      throw new TypeError('parameter "EcsInstanceId" is required');
    }

    return this.request('DescribeEcsInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} VpcId - queries.vpcId. optional.
   * @param {String} InstanceId - queries.instanceId. optional.
   * @param {String} InnerIP - queries.innerIP. optional.
   * @param {String} PublicIP - queries.publicIP. optional.
   * @param {String} CurrentPage - queries.currentPage. required.
   * @param {String} PageSize - queries.pageSize. required.
   */
  describeEcsInstanceList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeEcsInstanceList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ValueKey - queries.valueKey. optional.
   */
  describeEcsInstanceTags(params = {}, options = {}) {
    return this.request('DescribeEcsInstanceTags', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CurrentPage - queries.pageNo. required.
   * @param {String} PageSize - queries.pageSize. required.
   * @param {String} TagKey - queries.tagKey. optional.
   * @param {String} TagValue - queries.tagValue. optional.
   * @param {String} TagRelation - queries.tagRelation. optional.
   * @param {RepeatList} TagList - queries.tagList. optional.
   */
  describeEcsInstancesByTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeEcsInstancesByTag', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. optional.
   */
  describeEcsKeyword(params = {}, options = {}) {
    return this.request('DescribeEcsKeyword', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} DestIp - destIp. required.
   * @param {Integer} DestPort - destPort. required.
   * @param {String} VpcNo - vpcNo. required.
   * @param {String} PageSize - pageSize. optional.
   * @param {String} StartTime - startTime. required.
   * @param {String} SrcIp - srcIp. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} CurrentPage - currentPage. optional.
   * @param {String} RegionNo - regionNo. required.
   * @param {String} Direction - direction. required.
   */
  describeExternalFlowDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DestIp')) {
      throw new TypeError('parameter "DestIp" is required');
    }

    if (!hasOwnProperty(params, 'DestPort')) {
      throw new TypeError('parameter "DestPort" is required');
    }

    if (!hasOwnProperty(params, 'VpcNo')) {
      throw new TypeError('parameter "VpcNo" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'SrcIp')) {
      throw new TypeError('parameter "SrcIp" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('DescribeExternalFlowDetails', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} DestIp - destIp. required.
   * @param {String} DestPort - destPort. required.
   * @param {String} VpcNo - vpcNo. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} SrcIp - srcIp. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} RegionNo - regionNo. required.
   * @param {String} Direction - direction. required.
   */
  describeExternalIpCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DestIp')) {
      throw new TypeError('parameter "DestIp" is required');
    }

    if (!hasOwnProperty(params, 'DestPort')) {
      throw new TypeError('parameter "DestPort" is required');
    }

    if (!hasOwnProperty(params, 'VpcNo')) {
      throw new TypeError('parameter "VpcNo" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'SrcIp')) {
      throw new TypeError('parameter "SrcIp" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('DescribeExternalIpCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeGLobalInstance(params = {}, options = {}) {
    return this.request('DescribeGLobalInstance', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   * @param {String} ConsumGroupId - queries.ConsumGroupId. optional.
   * @param {String} SrcAppGroupId - queries.SrcAppGroupId. optional.
   * @param {String} SourceAppName - queries.SourceAppName. optional.
   * @param {String} DestAppName - queries.DestAppName. optional.
   * @param {String} RelaStatus - queries.Status. optional.
   * @param {String} SourceIP - queries.SourceIP. optional.
   * @param {String} DestIP - queries.DestIP. optional.
   */
  describeGroupFlowDetail(params = {}, options = {}) {
    return this.request('DescribeGroupFlowDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} VpcNo - vpcNo. optional.
   * @param {String} RegionNo - regionNo. optional.
   */
  describeHighRiskPortList(params = {}, options = {}) {
    return this.request('DescribeHighRiskPortList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} IpAddress - queries.ipAddress. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} ResourceType - queries.resourceType. optional.
   * @param {String} VpcId - queries.vpcId. optional.
   */
  describeIPList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeIPList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - queries.type. required.
   * @param {String} ServiceName - queries.serviceName. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} PublicIp - queries.publicIp. optional.
   * @param {String} IpProtocol - queries.protocol. optional.
   * @param {String} SrcIp - queries.sourceIp. optional.
   * @param {String} IspName - queries.ispName. optional.
   * @param {String} Area - queries.area. optional.
   * @param {RepeatList} BlackBehavior - queries.blackBehavior. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeInternetAccessSource(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    return this.request('DescribeInternetAccessSource', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeInternetDropTrafficTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeInternetDropTrafficTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeInternetOpenDataIntegrity(params = {}, options = {}) {
    return this.request('DescribeInternetOpenDataIntegrity', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ServiceName - queries.serviceName. optional.
   * @param {String} ServiceNameFuzzy - queries.serviceNameFuzzy. optional.
   * @param {String} RiskLevel - queries.riskLevel. optional.
   * @param {String} SuggestLevel - queries.suggestLevel. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} AssetsInstanceId - queries.assetsInstanceId. optional.
   * @param {String} AssetsInstanceName - queries.assetsInstanceName. optional.
   * @param {String} PublicIp - queries.publicIp. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} AssetsType - queries.assetsType. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {RepeatList} SortList - queries.sortList. optional.
   */
  describeInternetOpenDetail(params = {}, options = {}) {
    return this.request('DescribeInternetOpenDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ServiceName - queries.serviceName. optional.
   * @param {String} ServiceNameFuzzy - queries.serviceNameFuzzy. optional.
   * @param {String} RiskLevel - queries.riskLevel. optional.
   * @param {String} SuggestLevel - queries.suggestLevel. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} AssetsInstanceId - queries.assetsInstanceId. optional.
   * @param {String} AssetsInstanceName - queries.assetsInstanceName. optional.
   * @param {String} PublicIp - queries.publicIp. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} AssetsType - queries.assetsType. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeInternetOpenIp(params = {}, options = {}) {
    return this.request('DescribeInternetOpenIp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ServiceName - queries.serviceName. optional.
   * @param {String} ServiceNameFuzzy - queries.serviceNameFuzzy. optional.
   * @param {String} RiskLevel - queries.riskLevel. optional.
   * @param {String} SuggestLevel - queries.suggestLevel. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeInternetOpenPort(params = {}, options = {}) {
    return this.request('DescribeInternetOpenPort', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ServiceName - queries.serviceName. optional.
   * @param {String} ServiceNameFuzzy - queries.serviceNameFuzzy. optional.
   * @param {String} RiskLevel - queries.riskLevel. optional.
   * @param {String} SuggestLevel - queries.suggestLevel. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeInternetOpenService(params = {}, options = {}) {
    return this.request('DescribeInternetOpenService', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   */
  describeInternetOpenStatistic(params = {}, options = {}) {
    return this.request('DescribeInternetOpenStatistic', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeInternetServiceNameList(params = {}, options = {}) {
    return this.request('DescribeInternetServiceNameList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} PublicIp - queries.publicIp. optional.
   * @param {String} InstanceId - queries.instanceId. optional.
   * @param {String} InstanceName - queries.instanceName. optional.
   * @param {String} Tag - queries.tag. optional.
   * @param {String} IpProtocol - queries.protocol. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeInternetSlb(params = {}, options = {}) {
    return this.request('DescribeInternetSlb', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Direction - queries.direction. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} TrafficTime - queries.trafficTime. optional.
   * @param {String} Limit - queries.limit. optional.
   * @param {String} SrcIP - queries.srcIP. optional.
   * @param {String} NatIP - queries.natIP. optional.
   * @param {String} Order - queries.order. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   * @param {String} TrafficType - queries.trafficType. optional.
   */
  describeInternetTimeTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeInternetTimeTop', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} DataType - queries.dataType. required.
   * @param {String} Period - queries.period. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} Interval - queries.interval. optional.
   */
  describeInternetTopTrafficTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeInternetTopTrafficTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} DataType - queries.dataType. required.
   * @param {String} RuleResult - queries.ruleResult. optional.
   * @param {String} RuleSource - queries.ruleSource. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} ShowCountryName - queries.showCountryName. optional.
   * @param {String} Limit - queries.limit. optional.
   */
  describeInternetTrafficTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    return this.request('DescribeInternetTrafficTop', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} LineType - queries.dataType. required.
   * @param {String} Period - queries.period. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeInternetTrafficTopRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'LineType')) {
      throw new TypeError('parameter "LineType" is required');
    }

    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeInternetTrafficTopRatio', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} SrcPublicIP - queries.srcPublicIP. optional.
   * @param {String} SrcPrivateIP - queries.srcPrivateIP. optional.
   * @param {String} TrafficType - queries.trafficType. optional.
   */
  describeInternetTrafficTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeInternetTrafficTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AssetsInstanceId - queries.assetsInstanceId. required.
   * @param {String} EventUuid - queries.eventUuid. required.
   */
  describeInvadeEventDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AssetsInstanceId')) {
      throw new TypeError('parameter "AssetsInstanceId" is required');
    }

    if (!hasOwnProperty(params, 'EventUuid')) {
      throw new TypeError('parameter "EventUuid" is required');
    }

    return this.request('DescribeInvadeEventDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ProcessStatus - queries.processStatus. optional.
   * @param {RepeatList} ProcessStatusList - queries.processStatusList. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} AssetsInstanceId - queries.assetsInstanceId. optional.
   * @param {String} AssetsInstanceName - queries.assetsInstanceName. optional.
   * @param {RepeatList} RiskLevel - queries.riskLevel. optional.
   * @param {String} IsIgnore - queries.isIgnore. optional.
   * @param {String} AssetsIP - queries.assetsIP. optional.
   * @param {String} EventKey - queries.eventKey. optional.
   * @param {String} EventName - queries.eventName. optional.
   * @param {String} EventUuid - queries.eventUuid. optional.
   */
  describeInvadeEventList(params = {}, options = {}) {
    return this.request('DescribeInvadeEventList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   */
  describeInvadeEventNameList(params = {}, options = {}) {
    return this.request('DescribeInvadeEventNameList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   */
  describeInvadeEventStatistic(params = {}, options = {}) {
    return this.request('DescribeInvadeEventStatistic', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. optional.
   * @param {String} EndTime - queries.endTime. optional.
   * @param {String} Interval - queries.interval. optional.
   */
  describeInvadeTrend(params = {}, options = {}) {
    return this.request('DescribeInvadeTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. optional.
   */
  describeIpSegment(params = {}, options = {}) {
    return this.request('DescribeIpSegment', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeIspInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeIspInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeLocationInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeLocationInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AssetIP - queries.assetIP. optional.
   * @param {String} AssetRegion - queries.assetRegion. optional.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} StartTime - queries.startTime. required.
   */
  describeNetworkConcurrentTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeNetworkConcurrentTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} Direction - queries.direction. optional.
   * @param {RepeatList} FilterList - queries.filterList. optional.
   */
  describeNetworkTrafficDataType(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeNetworkTrafficDataType', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeNetworkTrafficFilter(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeNetworkTrafficFilter', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} AppName - queries.appName. optional.
   * @param {String} AssetIP - queries.assetIP. optional.
   * @param {String} AssetRegion - queries.assetRegion. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} DataType - queries.dataType. required.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} DstIP - queries.dstIP. optional.
   * @param {String} DstPort - queries.dstPort. optional.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} IpProperty - queries.ipProperty. optional.
   * @param {String} Isp - queries.isp. optional.
   * @param {String} Location - queries.location. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} RuleResult - queries.ruleResult. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} SrcIP - queries.srcIP. optional.
   * @param {String} StartTime - queries.startTime. required.
   */
  describeNetworkTrafficList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeNetworkTrafficList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} AppName - queries.appName. optional.
   * @param {String} AssetIP - queries.assetIP. optional.
   * @param {String} AssetRegion - queries.assetRegion. optional.
   * @param {String} DataType - queries.dataType. required.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} DstIP - queries.dstIP. optional.
   * @param {String} DstPort - queries.dstPort. optional.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} IpProperty - queries.ipProperty. optional.
   * @param {String} Isp - queries.isp. optional.
   * @param {String} Location - queries.location. optional.
   * @param {String} RuleResult - queries.ruleResult. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} SrcIP - queries.srcIP. optional.
   * @param {String} StartTime - queries.startTime. required.
   */
  describeNetworkTrafficTopRatio(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeNetworkTrafficTopRatio', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} AppName - queries.appName. optional.
   * @param {String} AssetIP - queries.assetIP. optional.
   * @param {String} AssetRegion - queries.assetRegion. optional.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} DstIP - queries.dstIP. optional.
   * @param {String} DstPort - queries.dstPort. optional.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} IpProperty - queries.ipProperty. optional.
   * @param {String} Isp - queries.isp. optional.
   * @param {String} Location - queries.location. optional.
   * @param {String} SrcIP - queries.srcIP. optional.
   * @param {String} StartTime - queries.startTime. required.
   */
  describeNetworkTrafficTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeNetworkTrafficTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeNoticeConfig(params = {}, options = {}) {
    return this.request('DescribeNoticeConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} ResourceType - queries.resourceType. optional.
   * @param {String} AssetsRegion - queries.assetsRegion. optional.
   * @param {String} GroupName - queries.groupName. optional.
   * @param {String} PublicIP - queries.publicIP. optional.
   * @param {String} PrivateIP - queries.privateIP. optional.
   * @param {String} SecurityRisk - queries.securityRisk. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   */
  describeOutgoingAssetList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeOutgoingAssetList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} AssetsIP - queries.assetsIP. optional.
   * @param {String} AssetsType - queries.assetsType. optional.
   * @param {String} ResourceType - queries.resourceType. optional.
   * @param {String} AssetsRegion - queries.assetsRegion. optional.
   * @param {String} GroupName - queries.groupName. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} Direction - queries.direction. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeOutgoingAssetTrafficList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeOutgoingAssetTrafficList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} CategoryId - queries.categoryId. optional.
   * @param {String} TypeId - queries.typeId. optional.
   * @param {String} DstType - queries.dstType. optional.
   */
  describeOutgoingDestinationCategory(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeOutgoingDestinationCategory', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} CategoryId - queries.categoryId. optional.
   * @param {String} TagId - queries.tagId. optional.
   * @param {String} SecuritySuggest - queries.securitySuggest. optional.
   * @param {String} AclCoverage - queries.aclCoverage. optional.
   * @param {String} DstIP - queries.dstIP. optional.
   * @param {String} PublicIP - queries.publicIP. optional.
   * @param {String} PrivateIP - queries.privateIP. optional.
   * @param {String} ApplicationName - queries.applicationName. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   */
  describeOutgoingDestinationIP(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeOutgoingDestinationIP', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} TagId - queries.tagId. optional.
   * @param {String} AclCoverage - queries.aclCoverage. optional.
   * @param {String} DstIP - queries.dstIP. required.
   * @param {String} PublicIP - queries.publicIP. optional.
   * @param {String} PrivateIP - queries.privateIP. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   */
  describeOutgoingDestinationIPDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'DstIP')) {
      throw new TypeError('parameter "DstIP" is required');
    }

    return this.request('DescribeOutgoingDestinationIPDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} CategoryId - queries.categoryId. optional.
   * @param {String} TagId - queries.tagId. optional.
   * @param {String} SecuritySuggest - queries.securitySuggest. optional.
   * @param {String} AclCoverage - queries.aclCoverage. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} PublicIP - queries.publicIP. optional.
   * @param {String} PrivateIP - queries.privateIP. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   */
  describeOutgoingDomain(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeOutgoingDomain', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} TagId - queries.tagId. optional.
   * @param {String} AclCoverage - queries.aclCoverage. optional.
   * @param {String} Domain - queries.domain. required.
   * @param {String} PublicIP - queries.publicIP. optional.
   * @param {String} PrivateIP - queries.privateIP. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   */
  describeOutgoingDomainDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'Domain')) {
      throw new TypeError('parameter "Domain" is required');
    }

    return this.request('DescribeOutgoingDomainDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   */
  describeOutgoingStatistic(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeOutgoingStatistic', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} DstType - queries.dstType. optional.
   * @param {String} TagId - queries.tagId. optional.
   */
  describeOutgoingTag(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeOutgoingTag', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} Domain - queries.domain. optional.
   * @param {String} SrcIP - queries.sourceIp. optional.
   * @param {String} IsMalicious - queries.isMalicious. optional.
   */
  describeOutgoingUnauthorizedDomainName(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('DescribeOutgoingUnauthorizedDomainName', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} PageName - queries.pageName. required.
   * @param {String} TabName - queries.tabName. required.
   */
  describePageDocuments(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'PageName')) {
      throw new TypeError('parameter "PageName" is required');
    }

    if (!hasOwnProperty(params, 'TabName')) {
      throw new TypeError('parameter "TabName" is required');
    }

    return this.request('DescribePageDocuments', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VulLevel - queries.vulLevel. required.
   * @param {String} Switch - queries.switch. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describePatchSumInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VulLevel')) {
      throw new TypeError('parameter "VulLevel" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribePatchSumInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Direction - queries.direction. required.
   * @param {String} Order - queries.priority. required.
   */
  describePolicyPriorUsed(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'Order')) {
      throw new TypeError('parameter "Order" is required');
    }

    return this.request('DescribePolicyPriorUsed', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} ConsumGroupId - queries.ConsumGroupId. optional.
   */
  describeProduceBizList(params = {}, options = {}) {
    return this.request('DescribeProduceBizList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeProductNews(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeProductNews', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeProtectLevel(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeProtectLevel', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeRegionInfo(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeRegionInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} DataType - queries.dataType. required.
   * @param {String} RuleSource - queries.ruleSource. optional.
   * @param {String} RuleResult - queries.ruleResult. optional.
   * @param {String} SrcIP - queries.srcIP. optional.
   * @param {String} DstIP - queries.dstIP. optional.
   * @param {String} VulLevel - queries.vulLevel. optional.
   */
  describeRiskEventGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    return this.request('DescribeRiskEventGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AttackType - queries.attackType. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} RuleResult - queries.ruleResult. required.
   * @param {String} RuleSource - queries.ruleSource. optional.
   * @param {String} DstIP - queries.dstIP. optional.
   * @param {String} SrcIP - queries.srcIP. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} Direction - queries.direction. optional.
   */
  describeSecurityEventLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'RuleResult')) {
      throw new TypeError('parameter "RuleResult" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeSecurityEventLog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Period - queries.period. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeSecurityProtection(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Period')) {
      throw new TypeError('parameter "Period" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeSecurityProtection', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeSecurityResponse(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeSecurityResponse', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Period - queries.period. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   */
  describeSecurityWarning(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeSecurityWarning', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AclId - queries.aclId. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   */
  describeSlbAcl(params = {}, options = {}) {
    return this.request('DescribeSlbAcl', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyGroupUUID - queries.strategyGroupUUID. required.
   * @param {String} Revision - queries.revision. optional.
   */
  describeStrategyDiff(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyGroupUUID')) {
      throw new TypeError('parameter "StrategyGroupUUID" is required');
    }

    return this.request('DescribeStrategyDiff', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyGroupUUID - queries.strategyGroupUUID. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} CurrentPage - queries.currentPage. required.
   * @param {String} PageSize - queries.pageSize. required.
   */
  describeStrategyGroupRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyGroupUUID')) {
      throw new TypeError('parameter "StrategyGroupUUID" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeStrategyGroupRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} VpcId - queries.vpcId. optional.
   * @param {String} Source - queries.source. optional.
   * @param {String} InitialTemplate - queries.initialTemplate. optional.
   * @param {String} CommitStatus - queries.commitStatus. optional.
   * @param {String} StrategyGroupName - queries.strategyGroupName. optional.
   * @param {String} InstanceId - queries.instanceId. optional.
   * @param {String} Description - queries.description. optional.
   * @param {String} CurrentPage - queries.currentPage. required.
   * @param {String} PageSize - queries.pageSize. required.
   */
  describeStrategyGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeStrategyGroups', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CurrentPage - queries.currentPage. required.
   * @param {String} PageSize - queries.pageSize. required.
   */
  describeStrategyTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeStrategyTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyTemplateName - queries.strategyTemplateName. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} CurrentPage - queries.currentPage. required.
   * @param {String} PageSize - queries.pageSize. required.
   */
  describeStrategyTemplateRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyTemplateName')) {
      throw new TypeError('parameter "StrategyTemplateName" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeStrategyTemplateRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeStsGrant(params = {}, options = {}) {
    return this.request('DescribeStsGrant', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   */
  describeStsStatus(params = {}, options = {}) {
    return this.request('DescribeStsStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CurrentPage - currentPage. optional.
   * @param {String} EndTime - endTime. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} LogType - logType. required.
   * @param {String} RiskType - riskType. optional.
   */
  describeSystemLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'LogType')) {
      throw new TypeError('parameter "LogType" is required');
    }

    return this.request('DescribeSystemLog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} StartTime - queries.StartTime. optional.
   * @param {String} EndTime - queries.EndTime. optional.
   * @param {String} SourceCode - queries.sourceCode. optional.
   * @param {String} Bid - queries.bid. optional.
   */
  describeTaskLimitParam(params = {}, options = {}) {
    return this.request('DescribeTaskLimitParam', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} ProcessState - queries.processState. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} ThreatType - queries.threatType. optional.
   */
  describeThreatEvent(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeThreatEvent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} Interval - queries.interval. optional.
   * @param {String} ProcessState - queries.processState. optional.
   */
  describeThreatTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    return this.request('DescribeThreatTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} AppId - queries.appId. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} RuleId - queries.ruleId. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} DstIP - queries.dstIP. optional.
   * @param {String} SrcIP - queries.srcIP. optional.
   * @param {String} SrcPrivateIP - queries.srcPrivateIP. optional.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} AssetRegion - queries.assetRegion. optional.
   * @param {String} RuleResult - queries.ruleResult. optional.
   * @param {String} IpProtocol - queries.ipProtocol. optional.
   * @param {String} SrcPort - queries.srcPort. optional.
   * @param {String} DstPort - queries.dstPort. optional.
   * @param {String} AttackType - queries.attackType. optional.
   * @param {String} RuleSource - queries.ruleSource. optional.
   * @param {String} VulLevel - queries.vulLevel. optional.
   * @param {String} Isp - queries.isp. optional.
   * @param {String} Location - queries.location. optional.
   * @param {String} DomainName - queries.domainName. optional.
   * @param {String} FlowType - queries.flowType. optional.
   * @param {String} FirewallType - queries.firewallType. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. optional.
   * @param {String} SrcVpcId - queries.srcVpcId. optional.
   * @param {String} DstVpcId - queries.dstVpcId. optional.
   * @param {String} SrcVpcRegionNo - queries.srcVpcRegionNo. optional.
   * @param {String} DstVpcRegionNo - queries.dstVpcRegionNo. optional.
   */
  describeTrafficLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    return this.request('DescribeTrafficLog', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeUserBuyVersion(params = {}, options = {}) {
    return this.request('DescribeUserBuyVersion', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Keyword - queries.keyword. optional.
   * @param {String} CurrentPage - queries.pageNo. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   * @param {String} Switch - queries.switch. optional.
   * @param {String} VulLevel - queries.vulLevel. optional.
   */
  describeVirtualPatch(params = {}, options = {}) {
    return this.request('DescribeVirtualPatch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} VpcId - queries.vpcId. required.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} IPProtocol - queries.ipProtocol. optional.
   * @param {String} RiskLevel - queries.riskLevel. optional.
   * @param {String} PeerVpcId - queries.peerVpcId. optional.
   * @param {String} PeerAssetIP - queries.peerAssetIP. optional.
   * @param {String} PeerAssetInstanceId - queries.peerAssetInstanceId. optional.
   * @param {String} PeerAssetInstanceName - queries.peerAssetInstanceName. optional.
   * @param {String} AssetIP - queries.assetIP. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeVpcFirewallAccessDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DescribeVpcFirewallAccessDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} VpcId - queries.vpcId. required.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} AppName - queries.appName. optional.
   * @param {String} IPProtocol - queries.ipProtocol. optional.
   * @param {String} RiskLevel - queries.riskLevel. optional.
   * @param {String} EcsInstanceId - queries.ecsInstanceId. optional.
   * @param {String} EcsInstanceName - queries.ecsInstanceName. optional.
   * @param {String} AssetIP - queries.assetIP. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeVpcFirewallAssetList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DescribeVpcFirewallAssetList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. required.
   * @param {String} CurrentPage - queries.pageNo. required.
   * @param {String} PageSize - queries.pageSize. required.
   * @param {String} Source - queries.source. optional.
   * @param {String} Destination - queries.destination. optional.
   * @param {String} Description - queries.description. optional.
   * @param {String} Proto - queries.proto. optional.
   * @param {String} AclAction - queries.action. optional.
   */
  describeVpcFirewallControlPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcFirewallId')) {
      throw new TypeError('parameter "VpcFirewallId" is required');
    }

    if (!hasOwnProperty(params, 'CurrentPage')) {
      throw new TypeError('parameter "CurrentPage" is required');
    }

    if (!hasOwnProperty(params, 'PageSize')) {
      throw new TypeError('parameter "PageSize" is required');
    }

    return this.request('DescribeVpcFirewallControlPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. required.
   * @param {String} LocalVpcId - queries.localVpcId. optional.
   * @param {String} PeerVpcId - queries.peerVpcId. optional.
   */
  describeVpcFirewallDetail(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcFirewallId')) {
      throw new TypeError('parameter "VpcFirewallId" is required');
    }

    return this.request('DescribeVpcFirewallDetail', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} RegionNo - queries.regionNo. optional.
   * @param {String} ConnectType - queries.connectType. optional.
   * @param {String} VpcId - queries.vpcId. optional.
   * @param {String} FirewallSwitchStatus - queries.firewallSwitchStatus. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeVpcFirewallList(params = {}, options = {}) {
    return this.request('DescribeVpcFirewallList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeVpcFirewallPageShowStatus(params = {}, options = {}) {
    return this.request('DescribeVpcFirewallPageShowStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. required.
   * @param {String} Order - queries.priority. required.
   */
  describeVpcFirewallPolicyPriorUsed(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcFirewallId')) {
      throw new TypeError('parameter "VpcFirewallId" is required');
    }

    if (!hasOwnProperty(params, 'Order')) {
      throw new TypeError('parameter "Order" is required');
    }

    return this.request('DescribeVpcFirewallPolicyPriorUsed', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} VpcId - queries.vpcId. required.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. optional.
   * @param {String} Port - queries.port. optional.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} AppName - queries.appName. optional.
   * @param {String} IPProtocol - queries.ipProtocol. optional.
   * @param {String} RiskLevel - queries.riskLevel. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeVpcFirewallPortList(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DescribeVpcFirewallPortList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} VpcId - queries.vpcId. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. optional.
   * @param {String} ShowPort - queries.showPort. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   * @param {String} Limit - queries.limit. optional.
   */
  describeVpcFirewallSessionTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    return this.request('DescribeVpcFirewallSessionTop', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeVpcFirewallSummaryInfo(params = {}, options = {}) {
    return this.request('DescribeVpcFirewallSummaryInfo', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} FirewallConfigureStatus - queries.firewallConfigureStatus. optional.
   * @param {String} CurrentPage - queries.currentPage. optional.
   * @param {String} PageSize - queries.pageSize. optional.
   */
  describeVpcFirewallSummaryList(params = {}, options = {}) {
    return this.request('DescribeVpcFirewallSummaryList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} VpcId - queries.vpcId. required.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. optional.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   * @param {String} Limit - queries.limit. optional.
   * @param {String} TrafficTime - queries.trafficTime. optional.
   * @param {String} PrivateIP - queries.privateIP. optional.
   */
  describeVpcFirewallTrafficTimeTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DescribeVpcFirewallTrafficTimeTop', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} VpcId - queries.vpcId. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. optional.
   * @param {String} DataType - queries.dataType. required.
   * @param {String} Direction - queries.direction. optional.
   * @param {String} Sort - queries.sort. optional.
   * @param {String} Order - queries.order. optional.
   * @param {String} Limit - queries.limit. optional.
   */
  describeVpcFirewallTrafficTop(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'DataType')) {
      throw new TypeError('parameter "DataType" is required');
    }

    return this.request('DescribeVpcFirewallTrafficTop', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StartTime - queries.startTime. required.
   * @param {String} EndTime - queries.endTime. required.
   * @param {String} VpcId - queries.vpcId. required.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. optional.
   * @param {String} PrivateIP - queries.privateIP. optional.
   * @param {String} TrafficType - queries.trafficType. optional.
   */
  describeVpcFirewallTrafficTrend(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'VpcId')) {
      throw new TypeError('parameter "VpcId" is required');
    }

    return this.request('DescribeVpcFirewallTrafficTrend', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeVpcInstanceList(params = {}, options = {}) {
    return this.request('DescribeVpcInstanceList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  describeVpcRegionList(params = {}, options = {}) {
    return this.request('DescribeVpcRegionList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   * @param {String} RegionNo - queries.RegionNo. optional.
   * @param {String} LinkDay - queries.LinkDay. optional.
   * @param {String} LinkUnit - queries.LinkUnit. optional.
   * @param {String} BizId - queries.BizId. optional.
   * @param {String} AppGroupId - queries.AppGroupId. optional.
   * @param {String} AppId - queries.AppId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} SrcBizId - queries.SrcBizId. optional.
   * @param {String} ProductBizId - queries.ProductBizId. optional.
   * @param {String} ProductGroupId - queries.ProductGroupId. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} PageSize - queries.PageSize. optional.
   * @param {String} CurrentPage - queries.CurrentPage. optional.
   */
  describeVpcSnapList(params = {}, options = {}) {
    return this.request('DescribeVpcSnapList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} DestIp - destIp. required.
   * @param {String} DestPort - destPort. required.
   * @param {String} VpcNo - vpcNo. required.
   * @param {String} StartTime - startTime. required.
   * @param {String} SrcIp - srcIp. required.
   * @param {String} EndTime - endTime. required.
   * @param {String} RegionNo - regionNo. required.
   * @param {String} Direction - direction. required.
   */
  exportExternalFlowDetails(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'DestIp')) {
      throw new TypeError('parameter "DestIp" is required');
    }

    if (!hasOwnProperty(params, 'DestPort')) {
      throw new TypeError('parameter "DestPort" is required');
    }

    if (!hasOwnProperty(params, 'VpcNo')) {
      throw new TypeError('parameter "VpcNo" is required');
    }

    if (!hasOwnProperty(params, 'StartTime')) {
      throw new TypeError('parameter "StartTime" is required');
    }

    if (!hasOwnProperty(params, 'SrcIp')) {
      throw new TypeError('parameter "SrcIp" is required');
    }

    if (!hasOwnProperty(params, 'EndTime')) {
      throw new TypeError('parameter "EndTime" is required');
    }

    if (!hasOwnProperty(params, 'RegionNo')) {
      throw new TypeError('parameter "RegionNo" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    return this.request('ExportExternalFlowDetails', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AllEvent - queries.allEvent. optional.
   * @param {RepeatList} EventIdList - queries.eventIdList. optional.
   */
  ignoreInvadeEvent(params = {}, options = {}) {
    return this.request('IgnoreInvadeEvent', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AddressList - queries.addressList. optional.
   * @param {String} Description - queries.description. required.
   * @param {String} GroupName - queries.groupName. required.
   * @param {String} GroupUuid - queries.groupUuid. required.
   * @param {String} GroupType - queries.groupType. required.
   * @param {String} AutoAddTagEcs - queries.autoAddTagEcs. optional.
   * @param {String} TagKey - queries.tagKey. optional.
   * @param {String} TagValue - queries.tagValue. optional.
   * @param {String} TagRelation - queries.tagRelation. optional.
   * @param {RepeatList} TagList - queries.tagList. optional.
   */
  modifyAddressBook(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'GroupName')) {
      throw new TypeError('parameter "GroupName" is required');
    }

    if (!hasOwnProperty(params, 'GroupUuid')) {
      throw new TypeError('parameter "GroupUuid" is required');
    }

    if (!hasOwnProperty(params, 'GroupType')) {
      throw new TypeError('parameter "GroupType" is required');
    }

    return this.request('ModifyAddressBook', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AppId - queries.appId. required.
   * @param {String} AppGroupId - queries.appGroupId. optional.
   * @param {RepeatList} ProcPortList - queries.procPortList. required.
   */
  modifyApp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppId')) {
      throw new TypeError('parameter "AppId" is required');
    }

    if (!hasOwnProperty(params, 'ProcPortList')) {
      throw new TypeError('parameter "ProcPortList" is required');
    }

    return this.request('ModifyApp', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AppGroupId - queries.appGroupId. required.
   * @param {String} AppGroupName - queries.appGroupName. optional.
   * @param {String} Remark - queries.remark. optional.
   * @param {String} Level - queries.level. optional.
   * @param {String} BizId - queries.bizId. optional.
   */
  modifyAppGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AppGroupId')) {
      throw new TypeError('parameter "AppGroupId" is required');
    }

    return this.request('ModifyAppGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {Integer} AutoSecurityGroup - autoSecurityGroup. optional.
   * @param {Integer} AutoEcsTagKey - autoEcsTagKey. optional.
   * @param {Integer} Active - active. optional.
   * @param {Integer} AutoIpSegment - autoIpSegment. optional.
   * @param {Integer} AutoEcsKeyWord - autoEcsKeyWord. optional.
   */
  modifyAutoGroupTemplateConfig(params = {}, options = {}) {
    return this.request('ModifyAutoGroupTemplateConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} BizId - queries.bizId. optional.
   * @param {String} BizName - queries.bizName. optional.
   * @param {String} Remark - queries.remark. optional.
   * @param {String} Level - queries.level. optional.
   */
  modifyBiz(params = {}, options = {}) {
    return this.request('ModifyBiz', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AclAction - queries.action. required.
   * @param {String} ApplicationId - queries.applicationId. required.
   * @param {String} ApplicationName - queries.applicationName. required.
   * @param {String} Description - queries.description. required.
   * @param {String} DestPort - queries.destPort. optional.
   * @param {String} Destination - queries.destination. required.
   * @param {String} DestinationType - queries.destinationType. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} Proto - queries.proto. required.
   * @param {String} Source - queries.source. required.
   * @param {String} AclUuid - queries.aclUuid. required.
   * @param {String} SourceType - queries.sourceType. required.
   * @param {String} DestPortType - queries.destPortType. optional.
   * @param {String} DestPortGroup - queries.destPortGroup. optional.
   */
  modifyControlPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AclAction')) {
      throw new TypeError('parameter "AclAction" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationId')) {
      throw new TypeError('parameter "ApplicationId" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationName')) {
      throw new TypeError('parameter "ApplicationName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Destination')) {
      throw new TypeError('parameter "Destination" is required');
    }

    if (!hasOwnProperty(params, 'DestinationType')) {
      throw new TypeError('parameter "DestinationType" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'Proto')) {
      throw new TypeError('parameter "Proto" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'AclUuid')) {
      throw new TypeError('parameter "AclUuid" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    return this.request('ModifyControlPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Direction - queries.direction. required.
   * @param {String} NewOrder - queries.newOrder. required.
   * @param {String} OldOrder - queries.oldOrder. required.
   */
  modifyControlPolicyPosition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'NewOrder')) {
      throw new TypeError('parameter "NewOrder" is required');
    }

    if (!hasOwnProperty(params, 'OldOrder')) {
      throw new TypeError('parameter "OldOrder" is required');
    }

    return this.request('ModifyControlPolicyPosition', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} CtiRules - queries.ctiRules. required.
   * @param {String} BasicRules - queries.basicRules. required.
   * @param {String} EnableDefault - queries.enableDefault. required.
   * @param {String} EnableAllPatch - queries.enableAllPatch. required.
   * @param {String} RunMode - queries.runMode. required.
   */
  modifyDefaultIPSConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'CtiRules')) {
      throw new TypeError('parameter "CtiRules" is required');
    }

    if (!hasOwnProperty(params, 'BasicRules')) {
      throw new TypeError('parameter "BasicRules" is required');
    }

    if (!hasOwnProperty(params, 'EnableDefault')) {
      throw new TypeError('parameter "EnableDefault" is required');
    }

    if (!hasOwnProperty(params, 'EnableAllPatch')) {
      throw new TypeError('parameter "EnableAllPatch" is required');
    }

    if (!hasOwnProperty(params, 'RunMode')) {
      throw new TypeError('parameter "RunMode" is required');
    }

    return this.request('ModifyDefaultIPSConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} ViewType - queries.ViewType. optional.
   * @param {String} ConfigScope - queries.ConfigScope. optional.
   * @param {String} Id - queries.Id. optional.
   * @param {String} SourceBizId - queries.SourceBizId. optional.
   * @param {String} DestBizId - queries.DestBizId. optional.
   * @param {String} SourceAppGroupId - queries.SourceAppGroupId. optional.
   * @param {String} DestAppGroupId - queries.DestAppGroupId. optional.
   * @param {String} SourceAppId - queries.SourceAppId. optional.
   * @param {String} DestAppId - queries.DestAppId. optional.
   * @param {String} ConfigType - queries.ConfigType. optional.
   * @param {String} SourceIP - queries.SourceIP. optional.
   * @param {String} DestIP - queries.DestIP. optional.
   * @param {String} DestPort - queries.DestPort. optional.
   * @param {String} VpcId - queries.VpcId. optional.
   */
  modifyFirstFlowConfig(params = {}, options = {}) {
    return this.request('ModifyFirstFlowConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} VpcNo - vpcNo. optional.
   * @param {String} PortList - portList. optional.
   * @param {String} RegionNo - regionNo. optional.
   */
  modifyHighRiskPortList(params = {}, options = {}) {
    return this.request('ModifyHighRiskPortList', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} TimeLimit - timeLimit. optional.
   * @param {String} Route - route. optional.
   * @param {String} Project - project. required.
   */
  modifyNoticeConfig(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Project')) {
      throw new TypeError('parameter "Project" is required');
    }

    return this.request('ModifyNoticeConfig', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} ObjectOperation - queries.objectOperation. required.
   * @param {String} ObjectType - queries.objectType. required.
   * @param {String} Direction - queries.direction. required.
   * @param {RepeatList} ObjectList - queries.objectList. required.
   */
  modifyObjectGroupOperation(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'ObjectOperation')) {
      throw new TypeError('parameter "ObjectOperation" is required');
    }

    if (!hasOwnProperty(params, 'ObjectType')) {
      throw new TypeError('parameter "ObjectType" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'ObjectList')) {
      throw new TypeError('parameter "ObjectList" is required');
    }

    return this.request('ModifyObjectGroupOperation', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyGroupUUID - queries.strategyGroupUUID. required.
   * @param {String} InstanceList - queries.instanceList. required.
   * @param {String} Description - queries.description. required.
   */
  modifyStrategyGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyGroupUUID')) {
      throw new TypeError('parameter "StrategyGroupUUID" is required');
    }

    if (!hasOwnProperty(params, 'InstanceList')) {
      throw new TypeError('parameter "InstanceList" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('ModifyStrategyGroup', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyGroupUUID - queries.strategyGroupUUID. required.
   * @param {String} RuleUUID - queries.ruleUUID. required.
   * @param {String} Direction - queries.direction. required.
   * @param {String} IpProtocol - queries.ipProtocol. required.
   * @param {String} PortRange - queries.portRange. required.
   * @param {String} Policy - queries.policy. required.
   * @param {String} SourceCidrIp - queries.sourceCidrIp. optional.
   * @param {String} SourceGroupId - queries.sourceGroupId. optional.
   * @param {String} SourceAddressGroup - queries.sourceAddressGroup. optional.
   * @param {String} DestCidrIp - queries.destCidrIp. optional.
   * @param {String} DestGroupId - queries.destGroupId. optional.
   * @param {String} DestAddressGroup - queries.destAddressGroup. optional.
   * @param {String} Priority - queries.priority. required.
   * @param {String} Description - queries.description. required.
   */
  modifyStrategyGroupRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyGroupUUID')) {
      throw new TypeError('parameter "StrategyGroupUUID" is required');
    }

    if (!hasOwnProperty(params, 'RuleUUID')) {
      throw new TypeError('parameter "RuleUUID" is required');
    }

    if (!hasOwnProperty(params, 'Direction')) {
      throw new TypeError('parameter "Direction" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'PortRange')) {
      throw new TypeError('parameter "PortRange" is required');
    }

    if (!hasOwnProperty(params, 'Policy')) {
      throw new TypeError('parameter "Policy" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('ModifyStrategyGroupRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyTemplateName - queries.strategyTemplateName. required.
   * @param {String} Description - queries.description. required.
   */
  modifyStrategyTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyTemplateName')) {
      throw new TypeError('parameter "StrategyTemplateName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('ModifyStrategyTemplate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} StrategyTemplateName - queries.strategyTemplateName. required.
   * @param {String} RuleUUID - queries.ruleUUID. required.
   * @param {String} IpProtocol - queries.ipProtocol. required.
   * @param {String} PortRange - queries.portRange. required.
   * @param {String} Policy - queries.policy. required.
   * @param {String} SourceCidrIp - queries.sourceCidrIp. optional.
   * @param {String} SourceGroupId - queries.sourceGroupId. optional.
   * @param {String} SourceAddressGroup - queries.sourceAddressGroup. optional.
   * @param {String} DestCidrIp - queries.destCidrIp. optional.
   * @param {String} DestGroupId - queries.destGroupId. optional.
   * @param {String} DestAddressGroup - queries.destAddressGroup. optional.
   * @param {String} Priority - queries.priority. required.
   * @param {String} Description - queries.description. required.
   */
  modifyStrategyTemplateRule(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'StrategyTemplateName')) {
      throw new TypeError('parameter "StrategyTemplateName" is required');
    }

    if (!hasOwnProperty(params, 'RuleUUID')) {
      throw new TypeError('parameter "RuleUUID" is required');
    }

    if (!hasOwnProperty(params, 'IpProtocol')) {
      throw new TypeError('parameter "IpProtocol" is required');
    }

    if (!hasOwnProperty(params, 'PortRange')) {
      throw new TypeError('parameter "PortRange" is required');
    }

    if (!hasOwnProperty(params, 'Policy')) {
      throw new TypeError('parameter "Policy" is required');
    }

    if (!hasOwnProperty(params, 'Priority')) {
      throw new TypeError('parameter "Priority" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    return this.request('ModifyStrategyTemplateRule', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} SourceCode - queries.sourceCode. required.
   * @param {String} Operation - queries.operation. required.
   * @param {RepeatList} EventIdList - queries.eventIdList. optional.
   */
  modifyThreatEventState(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'SourceCode')) {
      throw new TypeError('parameter "SourceCode" is required');
    }

    if (!hasOwnProperty(params, 'Operation')) {
      throw new TypeError('parameter "Operation" is required');
    }

    return this.request('ModifyThreatEventState', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} PatchName - queries.patchName. required.
   * @param {String} RuleContent - queries.ruleContent. required.
   * @param {String} VulId - queries.vulId. required.
   * @param {String} VulLevel - queries.vulLevel. required.
   * @param {String} RuleUuid - queries.ruleUuid. required.
   */
  modifyVirtualPatch(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'PatchName')) {
      throw new TypeError('parameter "PatchName" is required');
    }

    if (!hasOwnProperty(params, 'RuleContent')) {
      throw new TypeError('parameter "RuleContent" is required');
    }

    if (!hasOwnProperty(params, 'VulId')) {
      throw new TypeError('parameter "VulId" is required');
    }

    if (!hasOwnProperty(params, 'VulLevel')) {
      throw new TypeError('parameter "VulLevel" is required');
    }

    if (!hasOwnProperty(params, 'RuleUuid')) {
      throw new TypeError('parameter "RuleUuid" is required');
    }

    return this.request('ModifyVirtualPatch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. required.
   * @param {String} VpcFirewallName - queries.vpcFirewallName. required.
   */
  modifyVpcFirewallConfigure(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcFirewallId')) {
      throw new TypeError('parameter "VpcFirewallId" is required');
    }

    if (!hasOwnProperty(params, 'VpcFirewallName')) {
      throw new TypeError('parameter "VpcFirewallName" is required');
    }

    return this.request('ModifyVpcFirewallConfigure', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AclAction - queries.action. required.
   * @param {String} ApplicationId - queries.applicationId. required.
   * @param {String} ApplicationName - queries.applicationName. required.
   * @param {String} Description - queries.description. required.
   * @param {String} DestPort - queries.destPort. optional.
   * @param {String} Destination - queries.destination. required.
   * @param {String} DestinationType - queries.destinationType. required.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. required.
   * @param {String} Proto - queries.proto. required.
   * @param {String} Source - queries.source. required.
   * @param {String} AclUuid - queries.aclUuid. required.
   * @param {String} SourceType - queries.sourceType. required.
   * @param {String} DestPortType - queries.destPortType. optional.
   * @param {String} DestPortGroup - queries.destPortGroup. optional.
   */
  modifyVpcFirewallControlPolicy(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AclAction')) {
      throw new TypeError('parameter "AclAction" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationId')) {
      throw new TypeError('parameter "ApplicationId" is required');
    }

    if (!hasOwnProperty(params, 'ApplicationName')) {
      throw new TypeError('parameter "ApplicationName" is required');
    }

    if (!hasOwnProperty(params, 'Description')) {
      throw new TypeError('parameter "Description" is required');
    }

    if (!hasOwnProperty(params, 'Destination')) {
      throw new TypeError('parameter "Destination" is required');
    }

    if (!hasOwnProperty(params, 'DestinationType')) {
      throw new TypeError('parameter "DestinationType" is required');
    }

    if (!hasOwnProperty(params, 'VpcFirewallId')) {
      throw new TypeError('parameter "VpcFirewallId" is required');
    }

    if (!hasOwnProperty(params, 'Proto')) {
      throw new TypeError('parameter "Proto" is required');
    }

    if (!hasOwnProperty(params, 'Source')) {
      throw new TypeError('parameter "Source" is required');
    }

    if (!hasOwnProperty(params, 'AclUuid')) {
      throw new TypeError('parameter "AclUuid" is required');
    }

    if (!hasOwnProperty(params, 'SourceType')) {
      throw new TypeError('parameter "SourceType" is required');
    }

    return this.request('ModifyVpcFirewallControlPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. required.
   * @param {String} NewOrder - queries.newOrder. required.
   * @param {String} OldOrder - queries.oldOrder. required.
   */
  modifyVpcFirewallControlPolicyPosition(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcFirewallId')) {
      throw new TypeError('parameter "VpcFirewallId" is required');
    }

    if (!hasOwnProperty(params, 'NewOrder')) {
      throw new TypeError('parameter "NewOrder" is required');
    }

    if (!hasOwnProperty(params, 'OldOrder')) {
      throw new TypeError('parameter "OldOrder" is required');
    }

    return this.request('ModifyVpcFirewallControlPolicyPosition', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} VpcFirewallId - queries.vpcFirewallId. required.
   * @param {String} FirewallSwitch - queries.firewallSwitch. required.
   */
  modifyVpcFirewallSwitchStatus(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'VpcFirewallId')) {
      throw new TypeError('parameter "VpcFirewallId" is required');
    }

    if (!hasOwnProperty(params, 'FirewallSwitch')) {
      throw new TypeError('parameter "FirewallSwitch" is required');
    }

    return this.request('ModifyVpcFirewallSwitchStatus', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} RoleName - RoleName. optional.
   * @param {String} InstanceId - InstanceId. optional.
   * @param {String} BizName - BizName. optional.
   * @param {String} Tag - Tag. optional.
   */
  moveMachineToOtherRole(params = {}, options = {}) {
    return this.request('MoveMachineToOtherRole', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  openBuyProbation(params = {}, options = {}) {
    return this.request('OpenBuyProbation', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} BizType - bizType. optional.
   * @param {String} UserType - userType. optional.
   * @param {String} BuyVersion - version. optional.
   * @param {String} AliUid - aliUid. optional.
   * @param {String} RegionNoList - regionNoList. optional.
   */
  openFinFreeVersion(params = {}, options = {}) {
    return this.request('OpenFinFreeVersion', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  putDisableAllFwSwitch(params = {}, options = {}) {
    return this.request('PutDisableAllFwSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} IpaddrList - queries.ipList. optional.
   */
  putDisableFwSwitch(params = {}, options = {}) {
    return this.request('PutDisableFwSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  putEnableAllFwSwitch(params = {}, options = {}) {
    return this.request('PutEnableAllFwSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} IpaddrList - queries.ipList. optional.
   */
  putEnableFwSwitch(params = {}, options = {}) {
    return this.request('PutEnableFwSwitch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} InstanceId - instanceId. required.
   * @param {String} BizName - bizName. required.
   * @param {String} RoleName - roleName. required.
   * @param {String} Tag - tag. optional.
   */
  putMachineToRole(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'InstanceId')) {
      throw new TypeError('parameter "InstanceId" is required');
    }

    if (!hasOwnProperty(params, 'BizName')) {
      throw new TypeError('parameter "BizName" is required');
    }

    if (!hasOwnProperty(params, 'RoleName')) {
      throw new TypeError('parameter "RoleName" is required');
    }

    return this.request('PutMachineToRole', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} data - queries.data. optional.
   * @param {String} Direction - queries.direction. optional.
   */
  putOrderControlPolicy(params = {}, options = {}) {
    return this.request('PutOrderControlPolicy', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} Patches - queries.patches. optional.
   */
  putuserDisablePatch(params = {}, options = {}) {
    return this.request('PutuserDisablePatch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {RepeatList} Patches - queries.patches. optional.
   */
  putuserEnablePatch(params = {}, options = {}) {
    return this.request('PutuserEnablePatch', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} BizType - bizType. optional.
   * @param {String} UserType - userType. optional.
   * @param {String} BuyVersion - version. optional.
   * @param {String} AliUid - aliUid. optional.
   * @param {String} RegionNoList - regionNoList. optional.
   */
  releaseFreeVersion(params = {}, options = {}) {
    return this.request('ReleaseFreeVersion', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AclUuid - queries.aclUuid. required.
   */
  resetRuleHitCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AclUuid')) {
      throw new TypeError('parameter "AclUuid" is required');
    }

    return this.request('ResetRuleHitCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} AclUuid - queries.aclUuid. required.
   */
  resetVpcFirewallRuleHitCount(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'AclUuid')) {
      throw new TypeError('parameter "AclUuid" is required');
    }

    return this.request('ResetVpcFirewallRuleHitCount', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. required.
   * @param {String} Keyword - keyword. required.
   * @param {Integer} Check - check. required.
   */
  selectActiveKeyword(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Type')) {
      throw new TypeError('parameter "Type" is required');
    }

    if (!hasOwnProperty(params, 'Keyword')) {
      throw new TypeError('parameter "Keyword" is required');
    }

    if (!hasOwnProperty(params, 'Check')) {
      throw new TypeError('parameter "Check" is required');
    }

    return this.request('SelectActiveKeyword', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   * @param {String} Type - type. optional.
   */
  startCalculate(params = {}, options = {}) {
    return this.request('StartCalculate', params, options);
  }

  /**
   * @param {String} SourceIp - sourceIp. optional.
   * @param {String} Lang - lang. optional.
   */
  updateBuyVersion(params = {}, options = {}) {
    return this.request('UpdateBuyVersion', params, options);
  }

}

module.exports = Client;
