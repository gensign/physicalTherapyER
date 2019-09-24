DELETE FROM ptteaching_billing 
WHERE pt_id = $1;
DELETE FROM ptteaching_patients 
WHERE pt_id = $1;