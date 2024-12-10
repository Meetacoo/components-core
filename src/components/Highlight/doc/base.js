const { default: Highlight, HighlightProvider } = _Highlight;
const BaseExample = () => {
  return (
    <HighlightProvider>
      <Highlight>哈哈哈西西西西呃呃呃</Highlight>
    </HighlightProvider>
  );
};

render(<BaseExample />);
