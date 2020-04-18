import React, { Component } from 'react';
import { Rose as G2Rose, RoseConfig } from '@antv/g2plot';
import { randomString } from '../_utils';

export interface RoseProps extends RoseConfig {
  onCreated?: (chart: G2Rose) => void;
}

class Rose extends Component<RoseProps> {
  private root: HTMLDivElement;
  private lineInstance: G2Rose;
  private containerId: string;

  static defaultProps: Partial<RoseProps> = {
    forceFit: true,
    padding: 'auto',
    radiusField: 'value',
    legend: {
      visible: true,
      position: 'bottom-center'
    }
  };

  constructor(props: RoseProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.lineInstance = new G2Rose(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.lineInstance);
  }

  shouldComponentUpdate(nextProps: RoseProps) {
    if (this.props.data !== nextProps.data) {
      this.lineInstance.changeData(nextProps.data || []);
      return false;
    }

    return true;
  }

  renderChart = (opts: RoseProps, isFirst: boolean = false) => {
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

export default Rose;
