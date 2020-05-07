import React, { Component } from 'react';
import { Donut as G2Donut, DonutConfig } from '@antv/g2plot';
import { randomString } from '../common/utils';

export interface DonutProps extends DonutConfig {
  onCreated?: (chart: G2Donut) => void;
}

class Donut extends Component<DonutProps> {
  private root: HTMLDivElement;
  private lineInstance: G2Donut;
  private containerId: string;

  static defaultProps: DonutProps = {
    forceFit: true,
    angleField: 'value',
    padding: 'auto'
  };

  constructor(props: DonutProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.lineInstance = new G2Donut(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.lineInstance);
  }

  shouldComponentUpdate(nextProps: DonutProps) {
    if (this.props.data !== nextProps.data) {
      this.lineInstance.changeData(nextProps.data || []);
      return false;
    }

    return true;
  }

  renderChart = (opts: DonutProps, isFirst: boolean = false) => {
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

export default Donut;
