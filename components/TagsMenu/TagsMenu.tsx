import React from "react";

import css from "./TagsMenu.module.css";

import { TagsMenuClient } from "./TagsMenu.client";

export const TagsMenu = async () => {
  const tagsList = ["all", "Work", "Personal", "Meeting", "Shopping", "Todo"];

  return (
    <div className={css.menuContainer}>
      <button className={css.menuButton}>Notes ▾</button>
      <ul className={css.menuList}>
        {/* список тегів */}
        {tagsList.map((tag, index) => {
          return <TagsMenuClient key={index} tag={tag} />;
        })}
      </ul>
    </div>
  );
};
