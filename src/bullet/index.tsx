import React, {
  CSSProperties,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  forwardRef
} from 'react';
import { deepMix } from '@antv/util';
import { Bullet as G2Bullet, BulletConfig } from '@antv/g2plot';
import ErrorBoundary from '../common/components/error-boundary';
import useChart from '../common/hooks/use-chart';

export interface BulletProps extends BulletConfig {
  chartRef?: MutableRefObject<G2Bullet | undefined>;
  style?: CSSProperties;
  className?: string;
}

const defaultConfig: Partial<BulletProps> = {
  forceFit: true,
  yField: 'value'
};

const Bullet = forwardRef((props: BulletProps, ref) => {
  const { chartRef, style = {}, className, ...rest } = props;
  const { chart, container } = useChart<G2Bullet, BulletProps>(G2Bullet, rest);

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

Bullet.defaultProps = deepMix({}, G2Bullet.getDefaultOptions(), defaultConfig);

export default Bullet;
