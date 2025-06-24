// import NoteForm from "../NoteForm/NoteForm";

// import { useEffect } from "react";
"use client";

import { useRouter } from "next/navigation";

import { createPortal } from "react-dom";

import css from "./NoteModal.module.css";

// interface NoteModalProps {
//   onClose: () => void;
// }

type Props = {
  children: React.ReactNode;
};

export default function NoteModal({ children }: Props) {
  // const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   if (event.target === event.currentTarget) {
  //     onClose();
  //   }
  // };

  // useEffect(() => {
  //   const backdropClose = (e: KeyboardEvent) => {
  //     if (e.key === "Escape") {
  //       onClose();
  //     }
  //   };
  //   document.addEventListener("keydown", backdropClose);
  //   document.body.style.overflow = "hidden";

  //   return () => {
  //     document.removeEventListener("keydown", backdropClose);
  //     document.body.style.overflow = "";
  //   };
  // }, [onClose]);

  const router = useRouter();

  const close = () => router.back();

  return createPortal(
    <div
      className={css.backdrop}
      // onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        {children}
        <button onClick={close}>Close</button>
      </div>
    </div>,
    document.body
  );
}
