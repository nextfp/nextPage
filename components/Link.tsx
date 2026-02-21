/* eslint-disable jsx-a11y/anchor-has-content */

import type { LinkProps } from "next/link";
import Link from "next/link";
import type { AnchorHTMLAttributes } from "react";

const CustomLink = ({
  href,
  ...rest
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const url: string = href;
  const isInternalLink = href?.startsWith("/");
  const isAnchorLink = href?.startsWith("#");

  if (isInternalLink) {
    return <Link href={url} {...rest} />;
  }

  if (isAnchorLink) {
    return <a href={url} {...rest} />;
  }

  return <a target="_blank" rel="noopener noreferrer" href={href} {...rest} />;
};

export default CustomLink;
