"use client";

import React, { useState } from "react";

import Link from "next/link";

import css from "./TagsMenu.module.css";

export const TagsMenuClient = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const tagsList: string[] = [
    "All",
    "Work",
    "Personal",
    "Meeting",
    "Shopping",
    "Todo",
  ];
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
          {tagsList.map((tag, index) => {
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
