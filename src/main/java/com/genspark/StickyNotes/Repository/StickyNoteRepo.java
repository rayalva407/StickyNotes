package com.genspark.StickyNotes.Repository;

import com.genspark.StickyNotes.Model.StickyNote;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StickyNoteRepo extends JpaRepository<StickyNote, Long> {
}
