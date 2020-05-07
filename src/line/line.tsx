import React, { Component } from 'react';
import { Line as G2Line, LineConfig } from '@antv/g2plot';
import { randomString } from '../common/utils';

export interface LineProps extends LineConfig {
  onCreated?: (chart: G2Line) => void;
}

class Line extends Component<LineProps> {
  private root: HTMLDivElement;
  private lineInstance: G2Line;
  private containerId: string;

  static defaultProps: LineProps = {
    forceFit: true,
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

  constructor(props: LineProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.lineInstance = new G2Line(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.lineInstance);
  }

  shouldComponentUpdate(nextProps: LineProps) {
    if (this.props.data !== nextProps.data) {
      this.lineInstance.changeData(nextProps.data || []);
      return false;
    }

    return true;
  }

  renderChart = (opts: LineConfig, isFirst: boolean = false) => {
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

export default Line;
