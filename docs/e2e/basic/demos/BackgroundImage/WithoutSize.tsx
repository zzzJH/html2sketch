import React from 'react';
import { useElements, TestLayout } from '@docs-utils';

/**
 *
 */
export default () => {
  const { elements, ref } = useElements();

  return (
    <TestLayout elements={elements}>
      <div ref={ref}>
        <div
          style={{
            width: 186,
            height: 186,
            backgroundImage:
              'url("https://gw.alipayobjects.com/zos/rmsportal/mZBWtboYbnMkTBaRIuWQ.png")',
          }}
        />
      </div>
    </TestLayout>
  );
};
