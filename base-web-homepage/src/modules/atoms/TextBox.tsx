import * as React from "react";
import { Textarea } from "baseui/textarea";

const TextBox = () => {
  const [value, setValue] = React.useState("Hello");
  return (
    <Textarea
      value={value}
      //onChange={e => setValue(e.target.value)}
      placeholder="Controlled Input"
      clearOnEscape
    />
  );
}
export default TextBox;