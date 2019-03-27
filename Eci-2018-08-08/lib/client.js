
'use strict';

const { RPCClient } = require('@alicloud/pop-core');

function hasOwnProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

class Client extends RPCClient {
  constructor(config) {
    config.apiVersion = '2018-08-08';
    super(config);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} SecurityGroupId - linkedSecurityGroupId. required.
   * @param {String} VSwitchId - linkedVSwitchId. required.
   * @param {String} ContainerGroupName - containerGroupName. required.
   * @param {String} RestartPolicy - restartPolicy. optional.
   * @param {RepeatList} Tag - labels. optional.
   * @param {RepeatList} ImageRegistryCredential - imageRegistryCredentials. optional.
   * @param {RepeatList} Container - containers. required.
   * @param {RepeatList} Volume - volumes. optional.
   * @param {String} EipInstanceId - eipInstanceId. optional.
   * @param {RepeatList} InitContainer - initContainers. optional.
   * @param {Float} Cpu - cpu. optional.
   * @param {Float} Memory - mem. optional.
   * @param {String} ResourceGroupId - resourceGroupId. optional.
   * @param {String} DnsPolicy - dnsPolicy. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {RepeatList} HostAliase - hostAliases. optional.
   * @param {RepeatList} Arn - arns. optional.
   * @param {DnsConfig} DnsConfig - undefined. optional.
   */
  createContainerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'SecurityGroupId')) {
      throw new TypeError('parameter "SecurityGroupId" is required');
    }

    if (!hasOwnProperty(params, 'VSwitchId')) {
      throw new TypeError('parameter "VSwitchId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerGroupName')) {
      throw new TypeError('parameter "ContainerGroupName" is required');
    }

    if (!hasOwnProperty(params, 'Container')) {
      throw new TypeError('parameter "Container" is required');
    }

    return this.request('CreateContainerGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Template - jsonUserTemplate. required.
   * @param {String} ClientToken - clientToken. optional.
   */
  createContainerGroupFromTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    options.method = 'POST';
    return this.request('CreateContainerGroupFromTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ContainerGroupId - bazaarInstanceId. required.
   * @param {String} ClientToken - clientToken. optional.
   */
  deleteContainerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerGroupId')) {
      throw new TypeError('parameter "ContainerGroupId" is required');
    }

    return this.request('DeleteContainerGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {Float} Cpu - cpu. required.
   * @param {Float} Memory - memory. required.
   */
  describeContainerGroupPrice(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'Cpu')) {
      throw new TypeError('parameter "Cpu" is required');
    }

    if (!hasOwnProperty(params, 'Memory')) {
      throw new TypeError('parameter "Memory" is required');
    }

    return this.request('DescribeContainerGroupPrice', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ZoneId - zoneId. optional.
   * @param {String} VSwitchId - vSwitchId. optional.
   * @param {String} NextToken - nextToken. optional.
   * @param {Integer} Limit - limit. optional.
   * @param {RepeatList} Tag - labels. optional.
   * @param {String} ContainerGroupIds - containerGroupIdParam. optional.
   * @param {String} ContainerGroupName - containerGroupName. optional.
   * @param {String} Status - status. optional.
   */
  describeContainerGroups(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    return this.request('DescribeContainerGroups', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ContainerGroupId - containerGroupId. required.
   * @param {String} ContainerName - containerName. required.
   * @param {String} StartTime - startTime. optional.
   * @param {Integer} Tail - tail. optional.
   */
  describeContainerLog(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerGroupId')) {
      throw new TypeError('parameter "ContainerGroupId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerName')) {
      throw new TypeError('parameter "ContainerName" is required');
    }

    return this.request('DescribeContainerLog', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ContainerGroupIds - containerGroupIdParam. required.
   */
  describePrimaryIp(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerGroupIds')) {
      throw new TypeError('parameter "ContainerGroupIds" is required');
    }

    return this.request('DescribePrimaryIp', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ContainerGroupId - containerGroupId. required.
   * @param {String} ContainerName - containerName. required.
   * @param {String} Command - command. required.
   */
  execContainerCommand(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerGroupId')) {
      throw new TypeError('parameter "ContainerGroupId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerName')) {
      throw new TypeError('parameter "ContainerName" is required');
    }

    if (!hasOwnProperty(params, 'Command')) {
      throw new TypeError('parameter "Command" is required');
    }

    return this.request('ExecContainerCommand', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. optional.
   * @param {String} ContainerGroupId - containerGroupId. optional.
   */
  exportContainerGroupTemplate(params = {}, options = {}) {
    return this.request('ExportContainerGroupTemplate', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ContainerGroupId - containerGroupId. required.
   * @param {String} ClientToken - clientToken. optional.
   */
  restartContainerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerGroupId')) {
      throw new TypeError('parameter "ContainerGroupId" is required');
    }

    return this.request('RestartContainerGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} RegionId - regionId. required.
   * @param {String} RegionId - regionId. required.
   * @param {String} ContainerGroupId - bazaarInstanceId. required.
   * @param {String} RestartPolicy - restartPolicy. optional.
   * @param {RepeatList} Tag - labels. optional.
   * @param {RepeatList} Volume - volumes. optional.
   * @param {RepeatList} Container - containers. optional.
   * @param {RepeatList} InitContainer - initContainers. optional.
   * @param {RepeatList} ImageRegistryCredential - imageRegistryCredentials. optional.
   * @param {String} ClientToken - clientToken. optional.
   * @param {Float} Cpu - cpu. optional.
   * @param {Float} Memory - mem. optional.
   * @param {DnsConfig} DnsConfig - undefined. optional.
   */
  updateContainerGroup(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'RegionId')) {
      throw new TypeError('parameter "RegionId" is required');
    }

    if (!hasOwnProperty(params, 'ContainerGroupId')) {
      throw new TypeError('parameter "ContainerGroupId" is required');
    }

    return this.request('UpdateContainerGroup', params, options);
  }

  /**
   * @param {Long} OwnerId - ownerId. optional.
   * @param {String} ResourceOwnerAccount - resourceOwnerAccount. optional.
   * @param {Long} ResourceOwnerId - resourceOwnerId. optional.
   * @param {String} OwnerAccount - ownerAccount. optional.
   * @param {String} Template - jsonUserTemplate. required.
   * @param {String} ClientToken - clientToken. optional.
   */
  updateContainerGroupByTemplate(params = {}, options = {}) {
    if (!hasOwnProperty(params, 'Template')) {
      throw new TypeError('parameter "Template" is required');
    }

    options.method = 'POST';
    return this.request('UpdateContainerGroupByTemplate', params, options);
  }

}

module.exports = Client;
