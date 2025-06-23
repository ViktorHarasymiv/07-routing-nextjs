"use client";

import React from "react";

import Link from "next/link";

import css from "./TagsMenu.module.css";

type Props = {
  tag: string;
  key: number;
};

export const TagsMenuClient = ({ tag, key }: Props) => {
  return (
    <li key={key} className={css.menuItem}>
      <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
        {tag}
      </Link>
    </li>
  );
};
