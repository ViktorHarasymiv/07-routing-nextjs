"use client";
import { useRouter } from "next/navigation";
import Modal from "../../../../components/Modal/Modal";
import { Note } from "../../../../types/note";
import css from "./NoteDetails.module.css";

type Props = {
  noteData: Note | undefined;
  isLoading: boolean;
  error: Error | null;
};

const NotePreview = ({ noteData, isLoading, error }: Props) => {
  const router = useRouter();
  const close = () => router.back();

  if (isLoading) return <p className="loader">Loading, please wait...</p>;
  if (error || !noteData) return <p className="error">Something went wrong.</p>;

  return (
    <Modal onClose={close}>
      <div className={css.container}>
        <h2 className={css.header}>{noteData.title}</h2>
        <p className={css.content}>{noteData.content}</p>
        <p className={css.date}>{noteData.createdAt}</p>
        <p className={css.tag}>{noteData.tag}</p>
      </div>
    </Modal>
  );
};

export default NotePreview;
