import React, { Component } from 'react';
import { Area as G2Area, AreaConfig } from '@antv/g2plot';
import { randomString } from '../_utils';

export interface AreaProps extends AreaConfig {
  onCreated?: (chart: G2Area) => void;
}

class Area extends Component<AreaProps> {
  private root: HTMLDivElement;
  private lineInstance: G2Area;
  private containerId: string;

  static defaultProps: AreaProps = {
    forceFit: true,
    height: 400,
    yField: 'value',
    padding: 'auto',
    point: {
      visible: true
    },
    legend: {
      visible: true,
      position: 'bottom-center'
    }
  };

  constructor(props: AreaProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.lineInstance = new G2Area(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.lineInstance);
  }

  shouldComponentUpdate(nextProps: AreaProps) {
    if (this.props.data !== nextProps.data) {
      this.lineInstance.changeData(nextProps.data || []);
      return false;
    }

    return true;
  }

  renderChart = (opts: AreaConfig, isFirst: boolean = false) => {
    if (!isFirst) {
      this.lineInstance.updateConfig(opts);
    }
    this.lineInstance.render();
  };

  saveRoot = (node: HTMLDivElement) => {
    this.root = node;
  };

  render() {
    return <div ref={this.saveRoot} id={this.containerId} />;
  }
}

export default Area;
