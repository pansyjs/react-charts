import React, { Component } from 'react';
import { Bullet as G2Bullet, BulletConfig } from '@antv/g2plot';
import { randomString } from '../common/utils';

export interface BulletProps extends BulletConfig {
  onCreated?: (chart: G2Bullet) => void;
}

class Bullet extends Component<BulletProps> {
  private root: HTMLDivElement;
  private instance: G2Bullet;
  private containerId: string;

  static defaultProps: Partial<BulletProps> = {
    forceFit: true,
    yField: 'value',
    padding: 'auto',
    legend: {
      visible: true,
      position: 'bottom-center'
    }
  };

  constructor(props: BulletProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.instance = new G2Bullet(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.instance);
  }

  shouldComponentUpdate(nextProps: BulletProps) {
    if (this.props.data !== nextProps.data) {
      this.instance.changeData(nextProps.data || []);
      return false;
    }

    return true;
  }

  renderChart = (opts: BulletProps, isFirst: boolean = false) => {
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

export default Bullet;
