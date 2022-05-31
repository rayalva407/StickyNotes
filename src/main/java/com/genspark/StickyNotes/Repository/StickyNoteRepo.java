package com.genspark.StickyNotes.Repository;

import com.genspark.StickyNotes.Model.StickyNote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StickyNoteRepo extends JpaRepository<StickyNote, Long> {
}
