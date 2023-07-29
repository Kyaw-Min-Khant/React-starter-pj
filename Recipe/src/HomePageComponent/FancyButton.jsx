import React, { forwardRef } from "react";
import ScrollSpy from "react-scrollspy-navigation/dist/ScrollSpy";
const FancyButton = forwardRef(({ href, text, onClick }, ref) => (
  <a ref={ref} href={href} onClick={onClick}>
    {text}
  </a>
));
<ScrollSpy>
  <FancyButton link="#box-1" text="Box 1" ref={React.createRef()} />
  <FancyButton link="#box-2" text="Box 2" ref={React.createRef()} />
  <FancyButton link="#box-3" text="Box 3" ref={React.createRef()} />
</ScrollSpy>;
export default FancyButton;
