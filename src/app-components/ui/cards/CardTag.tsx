"use client";
import { useUser } from "@/hooks/authenticationHooks";
import { AccountType } from "@/types";
import React from "react";
import TagApp from "../tag/TagApp";

type Props = { access?: AccountType; children: React.ReactNode };

export default function CardTag({ access, children }: Props) {
  const user = useUser();
  if (user?.accountType !== "premium") {
    return (
      <TagApp variant={access === "premium" ? "primary" : "gray"}>
        {children}
      </TagApp>
    );
  } else {
    return <></>;
  }
}
