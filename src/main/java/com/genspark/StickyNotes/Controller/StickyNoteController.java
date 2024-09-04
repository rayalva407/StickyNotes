package com.genspark.StickyNotes.Controller;

import com.genspark.StickyNotes.Model.StickyNote;
import com.genspark.StickyNotes.Service.StickyNoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class StickyNoteController {
    @Autowired
    StickyNoteService stickyNoteService;

    @PostMapping("/notes")
    public StickyNote createNote(@RequestBody StickyNote stickyNote) {
        return stickyNoteService.createNote(stickyNote);
    }

    @GetMapping("/notes")
    public List<StickyNote> listNotes() {
        return stickyNoteService.listNotes();
    }

    @PutMapping("/notes")
    public StickyNote editNote(@RequestBody StickyNote stickyNote) {
        return stickyNoteService.editNote(stickyNote);
    }

    @DeleteMapping("/notes/{noteId}")
    public String deleteNote(@PathVariable long noteId) {
        return stickyNoteService.deleteNote(noteId);
    }
}
