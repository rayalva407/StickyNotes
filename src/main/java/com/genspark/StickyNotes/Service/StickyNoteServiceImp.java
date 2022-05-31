package com.genspark.StickyNotes.Service;

import com.genspark.StickyNotes.Model.StickyNote;
import com.genspark.StickyNotes.Repository.StickyNoteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StickyNoteServiceImp implements StickyNoteService {

    @Autowired
    StickyNoteRepo stickyNoteRepo;

    @Override
    public StickyNote createNote(StickyNote stickyNote) {
        if (!stickyNoteRepo.existsById(stickyNote.getId())) {
            return stickyNoteRepo.save(stickyNote);
        }
        return stickyNote;
    }

    @Override
    public List<StickyNote> listNotes() {
        return stickyNoteRepo.findAll();
    }

    @Override
    public StickyNote editNote(StickyNote stickyNote) {
        return stickyNoteRepo.save(stickyNote);
    }

    @Override
    public String deleteNote(long noteId) {
        stickyNoteRepo.deleteById(noteId);
        return "Successfully deleted note #" + noteId;
    }
}
