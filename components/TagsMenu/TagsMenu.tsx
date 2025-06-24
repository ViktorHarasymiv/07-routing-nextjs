import React from "react";

import css from "./TagsMenu.module.css";

import { TagsMenuClient } from "./TagsMenu.client";

export const TagsMenu = async () => {
  return (
    <div className={css.menuContainer}>
      <TagsMenuClient />
    </div>
  );
};
