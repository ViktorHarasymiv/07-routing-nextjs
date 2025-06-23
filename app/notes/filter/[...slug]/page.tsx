import NotesClient from "./Notes.client";

import css from "./NotesPage.module.css";

import { Note } from "../../../../types/note";
import { fetchNotes } from "../../../../lib/api";

interface NotesHttpResponse {
  notes: Note[];
  totalPages: number;
}

type Props = {
  params: Promise<{ slug: string[] }>;
};

const Notes = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === "all" ? "" : slug[0];

  const response: NotesHttpResponse = await fetchNotes(1, "", category);

  console.log(response);

  return (
    <section className={css.app}>
      <NotesClient initialValue={response} tag={category} />
    </section>
  );
};

export default Notes;
