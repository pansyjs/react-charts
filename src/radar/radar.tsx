import React, { Component } from 'react';
import { Radar as G2Radar, RadarConfig } from '@antv/g2plot';
import { randomString } from '../_utils';

export interface RadarProps extends RadarConfig {
  onCreated?: (chart: G2Radar) => void;
}

class Radar extends Component<RadarProps> {
  private root: HTMLDivElement;
  private instance: G2Radar;
  private containerId: string;

  static defaultProps: Partial<RadarProps> = {
    forceFit: true,
    padding: 'auto',
    radiusField: 'value',
    legend: {
      visible: true,
      position: 'bottom-center'
    }
  };

  constructor(props: RadarProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.instance = new G2Radar(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.instance);
  }

  shouldComponentUpdate(nextProps: RadarProps) {
    if (this.props.data !== nextProps.data) {
      this.instance.changeData(nextProps.data || []);
      return false;
    }

    return true;
  }

  renderChart = (opts: RadarConfig, isFirst: boolean = false) => {
    if (!isFirst) {
      this.instance.updateConfig(opts);
    }
    this.instance.render();
  };

  saveRoot = (node: HTMLDivElement) => {
    this.root = node;
  };

  render() {
    return <div ref={this.saveRoot} id={this.containerId} />;
  }
}

export default Radar;
