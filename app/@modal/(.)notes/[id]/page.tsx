"use client";

import Modal from "../../../../components/Modal/Modal";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchNoteById } from "../../../../lib/api";

import { useRouter } from "next/navigation";

import css from "./NoteDetails.module.css";

const NotePreview = () => {
  const router = useRouter();

  const close = () => router.back();

  const { id } = useParams<{ id: string }>();
  const noteId = Number(id);

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", id],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  });

  if (isLoading) return <p className="loader">Loading, please wait...</p>;
  if (error || !note) return <p className="error">Something went wrong.</p>;

  return (
    <Modal>
      <div className={css.container}>
        <h2 className={css.header}>{note.title}</h2>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>{note.createdAt}</p>
        <p className={css.tag}>{note.tag}</p>
        <button className={css.backBtn} onClick={close}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default NotePreview;
