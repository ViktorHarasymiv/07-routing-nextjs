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

export async function generateMetadata() {
  return {
    title: `NoteHub | Notes`,
    description: "NoteHub list",
    openGraph: {
      title: `NoteHub | Notes`,
      description: "NoteHub list",
      url: `https://notehub.com/notes/`,
      siteName: "NoteHub",
      images: [
        {
          url: "https://ac.goit.global/fullstack/react/og-meta.jpg",
          width: 1200,
          height: 630,
          alt: "Note App image",
        },
      ],
      type: "article",
    },
  };
}

const Notes = async ({ params }: Props) => {
  const { slug } = await params;
  const category = slug[0] === "All" ? "" : slug[0];

  const response: NotesHttpResponse = await fetchNotes("", 1, category);

  return (
    <section className={css.app}>
      <NotesClient initialValue={response} tag={category} />
    </section>
  );
};

export default Notes;
