"use client";
import React from "react";
import TagApp from "../tag/TagApp";

type Props = { children: React.ReactNode };

export default function CardTag({ children }: Props) {
  // TODO: Add card tag such as taiwlind , css module, react native here
  return <TagApp variant={"gray"}>{children}</TagApp>;
}
