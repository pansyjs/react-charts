import React, { Component } from 'react';
import { Column as G2Column, ColumnConfig } from '@antv/g2plot';
import { randomString } from '../common/utils';

export interface ColumnProps extends ColumnConfig {
  onCreated?: (chart: G2Column) => void;
}

class Column extends Component<ColumnProps> {
  private root: HTMLDivElement;
  private instance: G2Column;
  private containerId: string;

  static defaultProps: ColumnProps = {
    forceFit: true,
    yField: 'value',
    padding: 'auto',
    legend: {
      visible: true,
      position: 'bottom-center'
    }
  };

  constructor(props: ColumnProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.instance = new G2Column(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.instance);
  }

  shouldComponentUpdate(nextProps: ColumnProps) {
    if (this.props.data !== nextProps.data) {
      this.instance.changeData(nextProps.data || []);
      return false;
    }

    return true;
  }

  renderChart = (opts: ColumnConfig, isFirst: boolean = false) => {
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

export default Column;
