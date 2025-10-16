import axios from "axios";
import type { Note, NoteTag } from "../types/note";

export interface NoteResponse {
    results: Note[];
    total_pages: number;
    page: number;
    total_results: number;
}

export interface NewNotePayload {
    title: string;
    content: string;
    tag: NoteTag;
}

// Створюємо екземпляр axios з базовими налаштуваннями
const apiClient = axios.create({
    baseURL: "https://notehub-public.goit.study/api/",
    headers: {
        Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
    },
});

export const fetchNotes = async (
    query: string,
    page: number
): Promise<NoteResponse> => {
    // передаємо дженерик прямо у get<NoteResponse>() для типобезпеки.
    const response = await apiClient.get<NoteResponse>("/notes", {
        params: { query, page },
    });
    // Повертаємо дані API як є, без перетворень.
    return response.data;
};

// Створення нової нотатки
export const createNote = async (noteData: NewNotePayload): Promise<Note> => {
    const response = await apiClient.post<Note>("/notes", noteData);
    return response.data;
};

// Видалення нотатки за ID.
export const deleteNote = async (noteId: string): Promise<Note> => {
    if (!noteId) {
        throw new Error("Note ID is required for deletion");
    }
    const response = await apiClient.delete<Note>(`/notes/${noteId}`);
    return response.data;
};

