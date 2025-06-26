import React from "react";

import css from "./TagsMenu.module.css";

import { TagsMenuClient } from "./TagsMenu.client";

export const TagsMenu = () => {
  const tagsList = ["All", "Work", "Personal", "Meeting", "Shopping", "Todo"];

  return (
    <div className={css.menuContainer}>
      <TagsMenuClient tags={tagsList} />
    </div>
  );
};
