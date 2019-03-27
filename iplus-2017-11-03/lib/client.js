
'use strict';

const { ROAClient } = require('@alicloud/pop-core');

class Client extends ROAClient {
  constructor(config) {
    config.apiVersion = '2017-11-03';
    super(config);
  }

  addLocation(body, headers = {}, opts = {}) {
    const path = `/rest/gis/addLocation.json`;
    return this.post(path, {}, body, headers, opts);
  }

  changeLocationType(body, headers = {}, opts = {}) {
    const path = `/rest/gis/changeLocationType.json`;
    return this.post(path, {}, body, headers, opts);
  }

  commonLinkGraph(body, headers = {}, opts = {}) {
    const path = `/rest/graph/commonLinkGraph.json`;
    return this.post(path, {}, body, headers, opts);
  }

  compareTrack(body, headers = {}, opts = {}) {
    const path = `/rest/gis/compareTrack.json`;
    return this.post(path, {}, body, headers, opts);
  }

  findObjects(body, headers = {}, opts = {}) {
    const path = `/rest/gis/findObjects.json`;
    return this.post(path, {}, body, headers, opts);
  }

  getFastGraph(body, headers = {}, opts = {}) {
    const path = `/rest/graph/getFastGraph.json`;
    return this.post(path, {}, body, headers, opts);
  }

  getGraph(body, headers = {}, opts = {}) {
    const path = `/rest/graph/getGraph.json`;
    return this.post(path, {}, body, headers, opts);
  }

  getGroupGraph(body, headers = {}, opts = {}) {
    const path = `/rest/graph/getGroupGraph.json`;
    return this.post(path, {}, body, headers, opts);
  }

  getHeatMap(body, headers = {}, opts = {}) {
    const path = `/rest/gis/getHeatMap.json`;
    return this.post(path, {}, body, headers, opts);
  }

  kinshipGraph(body, headers = {}, opts = {}) {
    const path = `/rest/graph/kinshipGraph.json`;
    return this.post(path, {}, body, headers, opts);
  }

  matchTracks(body, headers = {}, opts = {}) {
    const path = `/rest/gis/matchTracks.json`;
    return this.post(path, {}, body, headers, opts);
  }

  pathAnalysisGraph(body, headers = {}, opts = {}) {
    const path = `/rest/graph/pathAnalysisGraph.json`;
    return this.post(path, {}, body, headers, opts);
  }

  persistLink(body, headers = {}, opts = {}) {
    const path = `/rest/etl/persistLink.json`;
    return this.post(path, {}, body, headers, opts);
  }

  persistNode(body, headers = {}, opts = {}) {
    const path = `/rest/etl/persistNode.json`;
    return this.post(path, {}, body, headers, opts);
  }

  queryLinks(body, headers = {}, opts = {}) {
    const path = `/rest/search/queryLinks.json`;
    return this.post(path, {}, body, headers, opts);
  }

  queryNodes(body, headers = {}, opts = {}) {
    const path = `/rest/search/queryNodes.json`;
    return this.post(path, {}, body, headers, opts);
  }

  queryOlpMetaConfig(headers = {}, opts = {}) {
    const path = `/rest/meta/queryOlpMetaConfig.json`;
    return this.get(path, {}, headers, opts);
  }

  searchTrack(body, headers = {}, opts = {}) {
    const path = `/rest/gis/searchTrack.json`;
    return this.post(path, {}, body, headers, opts);
  }

  shareAnalysis(body, headers = {}, opts = {}) {
    const path = `/rest/collaboration/shareAnalysis.json`;
    return this.post(path, {}, body, headers, opts);
  }

  updateOlpMetaConfig(body, headers = {}, opts = {}) {
    const path = `/rest/meta/updateOlpMetaConfig.json`;
    return this.post(path, {}, body, headers, opts);
  }

}

module.exports = Client;
