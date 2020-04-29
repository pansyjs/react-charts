import React, { Component } from 'react';
import { Liquid as G2Liquid, LiquidConfig } from '@antv/g2plot';
import { randomString } from '../_utils';

export interface LiquidProps extends LiquidConfig {
  onCreated?: (chart: G2Liquid) => void;
}

class Liquid extends Component<LiquidProps> {
  private root: HTMLDivElement;
  private instance: G2Liquid;
  private containerId: string;

  static defaultProps: Partial<LiquidProps> = {
    forceFit: true,
    yField: 'value',
    padding: 'auto'
  };

  constructor(props: LiquidProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.instance = new G2Liquid(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.instance);
  }

  renderChart = (opts: LiquidProps, isFirst: boolean = false) => {
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

export default Liquid;
