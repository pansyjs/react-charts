import React, { Component } from 'react';
import { Pie as G2Pie, PieConfig } from '@antv/g2plot';
import { randomString } from '../common/utils';

export interface PieProps extends PieConfig {
  onCreated?: (chart: G2Pie) => void;
}

class Pie extends Component<PieProps> {
  private root: HTMLDivElement;
  private lineInstance: G2Pie;
  private containerId: string;

  static defaultProps: PieProps = {
    forceFit: true,
    angleField: 'value',
    padding: 'auto',
    legend: {
      visible: true,
      position: 'bottom-center'
    }
  };

  constructor(props: PieProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.lineInstance = new G2Pie(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.lineInstance);
  }

  shouldComponentUpdate(nextProps: PieProps) {
    if (this.props.data !== nextProps.data) {
      this.lineInstance.changeData(nextProps.data || []);
      return false;
    }

    return true;
  }

  renderChart = (opts: PieProps, isFirst: boolean = false) => {
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

export default Pie;
