"use client";
import React from "react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { fetchNoteById } from "../../../../lib/api";

import NotePreview from "./NotePreview.client";

const NotesPage = () => {
  const { id } = useParams<{ id: string }>();
  const noteId = Number(id);

  const {
    data: note,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["note", noteId],
    queryFn: () => fetchNoteById(noteId),
    refetchOnMount: false,
  });
  return <NotePreview noteData={note} isLoading={isLoading} error={error} />;
};

export default NotesPage;
