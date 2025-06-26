"use client";

import React, { useState } from "react";

import Link from "next/link";

import css from "./TagsMenu.module.css";

interface Props {
  tags: string[];
}

export const TagsMenuClient = ({ tags }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className={css.menuButton}
      >
        Notes{" "}
        <span
          style={
            openMenu !== false
              ? { display: "inline-block", transform: "rotate(60deg)" }
              : {}
          }
        >
          ▾
        </span>
      </button>
      {openMenu && (
        <ul className={css.menuList}>
          {tags.map((tag, index) => {
            return (
              <li key={index} className={css.menuItem}>
                <Link
                  onClick={() => setOpenMenu((prev) => !prev)}
                  href={`/notes/filter/${tag}`}
                  className={css.menuLink}
                >
                  {tag}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
