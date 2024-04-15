import { useEffect, Dispatch } from 'react';

type useHeightType = {
  showCollapse?: boolean;
  setCollapseHeight: Dispatch<React.SetStateAction<string | undefined>>;
  refCollapse: React.RefObject<HTMLElement>;
  contentRef: React.RefObject<HTMLElement>;
};
export default function useHeight({ showCollapse, setCollapseHeight, refCollapse, contentRef }: useHeightType) {
  useEffect(() => {
    if (!showCollapse) {
      setCollapseHeight('0px');
    }
    // eslint-disable-next-line
  }, [showCollapse]);

  useEffect(() => {
    const collapseEl = refCollapse.current;
    const handleResize = (content: ResizeObserverEntry) => {
      if (!collapseEl) {
        return;
      }

      const contentHeight = content.contentRect.height;
      const computed = window.getComputedStyle(collapseEl);

      const offsetY =
        parseFloat(computed.paddingTop) +
        parseFloat(computed.paddingBottom) +
        parseFloat(computed.marginBottom) +
        parseFloat(computed.marginTop);

      const height = `${contentHeight + offsetY}px`;

      setCollapseHeight(height);
    };

    const observer = new ResizeObserver(([content]) => {
      handleResize(content);
    });

    observer.observe(contentRef.current as Element);

    return () => {
      observer.disconnect();
    };
    // eslint-disable-next-line
  }, []);
}
