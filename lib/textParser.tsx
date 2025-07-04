import { Fragment } from "react";
export const textParser = (text: string) => text.split(/\n/g);

export const textParseWithBreak = (text: string) =>
  textParser(text).map((line) => (
    <Fragment key={line}>
      {line}
      <br />
    </Fragment>
  ));
