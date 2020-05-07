import React, { Component } from 'react';
import { Calendar as G2Calendar, CalendarConfig } from '@antv/g2plot';
import { CalendarViewConfig } from '@antv/g2plot/esm/plots/calendar/layer';
import { randomString } from '../common/utils';

export interface CalendarProps extends CalendarViewConfig, CalendarConfig {
  onCreated?: (chart: G2Calendar) => void;
}

class Calendar extends Component<CalendarProps> {
  private root: HTMLDivElement;
  private instance: G2Calendar;
  private containerId: string;

  static defaultProps: Partial<CalendarProps> = {
    forceFit: true
  };

  constructor(props: CalendarProps) {
    super(props);
    this.containerId = randomString();
  }

  componentDidMount() {
    const { onCreated, ...opts } = this.props;
    this.instance = new G2Calendar(this.root, opts);
    this.renderChart(opts, true);

    onCreated && onCreated(this.instance);
  }

  renderChart = (opts: CalendarProps, isFirst: boolean = false) => {
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

export default Calendar;
