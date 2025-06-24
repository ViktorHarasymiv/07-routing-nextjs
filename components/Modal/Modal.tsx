"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import css from "./Modal.module.css";

interface Props {
  children: React.ReactNode;
}

export default function NoteModal({ children }: Props) {
  const router = useRouter();

  const close = () => router.back();

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      close();
    }
  };

  useEffect(() => {
    const backdropClose = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }
    };
    document.addEventListener("keydown", backdropClose);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", backdropClose);
      document.body.style.overflow = "";
    };
  });

  return (
    <div
      onClick={handleBackdropClick}
      className={css.backdrop}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>{children}</div>
    </div>
  );
}
