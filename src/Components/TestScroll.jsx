import React, { useLayoutEffect, useRef, useState } from 'react';

function TestScroll() {
  const containerRef = useRef(null);
  const [hasScrollbar, setHasScrollbar] = useState(false);

  useLayoutEffect(() => {
    console.log('useLayoutEffect triggered');
    console.log("containerRef "+containerRef);
    if (containerRef.current) {
      console.log('containerRef is set:', containerRef.current);
      const hasScroll = containerRef.current.scrollHeight > containerRef.current.clientHeight;
      console.log('scrollHeight:', containerRef.current.scrollHeight);
      console.log('clientHeight:', containerRef.current.clientHeight);
      console.log('Has scrollbar:', hasScroll);
      setHasScrollbar(hasScroll);
    } else {
      console.log('containerRef.current is null or undefined');
    }
  }, []);

  return (
    <div ref={containerRef} style={{ overflowY: 'auto', maxHeight: '200px', height: '100px' }}>
      {/* Add some content to potentially overflow */}
      <p>Content line 1</p>
      <p>Content line 2</p>
      <p>Content line 3</p>
      <p>Content line 4</p>
      <p>Content line 5</p>
      <p>Content line 6</p>
    </div>
  );
}

export default TestScroll;
