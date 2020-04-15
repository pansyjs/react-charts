import React, { Component } from 'react';
import { StepLine as G2StepLine, StepLineConfig } from '@antv/g2plot';
import { randomString } from '../_utils';

export interface StepLineProps extends StepLineConfig {
  onCreated?: (chart: G2StepLine) => void;
}

class StepLine extends Component<StepLineProps> {
  private root: HTMLDivElement;
  private instance: G2StepLine;
  private containerId: string;

  static defaultProps: StepLineProps = {
    forceFit: true,
    yField: 'value',
    padding: 'auto',
    legend: {
      visible: true,
      position: 'bottom-center'
    }
  };

  constructor(props: StepLineProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.instance = new G2StepLine(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.instance);
  }

  shouldComponentUpdate(nextProps: StepLineProps) {
    if (this.props.data !== nextProps.data) {
      this.instance.changeData(nextProps.data || []);
      return false;
    }

    return true;
  }

  renderChart = (opts: StepLineConfig, isFirst: boolean = false) => {
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

export default StepLine;
