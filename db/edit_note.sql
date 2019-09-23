UPDATE ptteaching_note
SET subjective = $1, objective = $2, assessment = $3, plan = $4
WHERE note_id = $5;