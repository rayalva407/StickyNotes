package com.genspark.StickyNotes.Service;

import com.genspark.StickyNotes.Model.StickyNote;

import java.util.List;

public interface StickyNoteService {
    StickyNote createNote(StickyNote stickyNote);
    List<StickyNote> listNotes();
    StickyNote editNote(StickyNote stickyNote);
    String deleteNote(long id);
}
