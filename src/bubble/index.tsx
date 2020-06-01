import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Bubble as G2Bubble, BubbleConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface BulletProps extends BubbleConfig {
  chartRef?: MutableRefObject<G2Bubble | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<BulletProps> = {
  forceFit: true,
  yField: 'value'
};

const Bubble = forwardRef((props: BulletProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Bubble, BulletProps>(G2Bubble, rest);

  useEffect(() => {
    if (chartRef) {
      chartRef.current = chart.current;
    }
  }, [chart.current]);

  useImperativeHandle(ref, () => ({
    getChart: () => chart.current
  }));

  return (
    <ErrorBoundary>
      <div className={className} style={style} ref={container} />
    </ErrorBoundary>
  );
});

Bubble.defaultProps = deepMix({}, G2Bubble.getDefaultOptions(), defaultConfig);

export default Bubble;
