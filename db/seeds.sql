-- User table
CREATE TABLE ptteaching_users (
	user_id SERIAL PRIMARY KEY,
  username VARCHAR(15),
  email VARCHAR(25),
  password VARCHAR(20)
);

SELECT * FROM ptteaching_users;

-- dummy user
INSERT INTO ptteaching_users (username, email, password)
VALUES ('Grizzly', 'sweet@gmail.com', 'quseek'),
('Mark', 'mar@gmail.com', 'doom'),
('Catie', 'dogsareawesome@gmail.com', 'doggies');

-- Hash table
CREATE TABLE mtg_credentials (
	user_id INTEGER REFERENCES mtg_users(user_id),
  hash TEXT
);

SELECT * FROM ptteaching_credentials;

-- Patients table
CREATE TABLE ptteaching_patients (
	pt_id SERIAL PRIMARY KEY,
  pt_code INTEGER,
  user_id INTEGER REFERENCES ptteaching_users(user_id)
);

SELECT * FROM ptteaching_patients;

-- dummy data
INSERT INTO ptteaching_patients (pt_code, user_id)
VALUES (1111, 1);

-- CPT CODES
CREATE TABLE ptteaching_cptcodes (
	CPT_code TEXT,
  CPT_type TEXT
);

INSERT INTO ptteaching_cptcodes (CPT_code, CPT_type)
VALUES ('97110', 'Therapeutic Exercise'),
('97140', 'Manual Therapy'),
('97112', 'Neuromuscular Re-Education'),
('97530', 'Therapeutic Activities'),
('97010', 'Hot/Cold Packs'),
('97014', 'Electrical Stimulation Unattended'),
('G0283', 'Electrical Stimulation, Medicare Non-Wound Unattended'),
('97035', 'Ultrasound/Phonophoresis'),
('97161', 'PT Evaluation: Low Complexity'),
('97116', 'Gait Training'),
('97162', 'PT Evaluation: Moderate Complexity'),
('97535', 'Self Care/Home Management Training'),
('97016', 'Vasopneumatic Device'),
('97032', 'Electrical Stimulation Manual'),
('97012', 'Mechanical Traction'),
('97164', 'PT Re-Evaluation'),
('97113', 'Aquatic Exercise'),
('97150', 'Group Therapy'),
('97124', 'Massage'),
('97018	', 'Paraffin Bath'),
('NC001', 'No Charges This Visit'),
('97163	', 'PT Evaluation: High Complexity'),
('98941', 'Spinal, Three or Four Regions'),
('97022', 'Whirlpool'),
('97033', 'Iontophoresis'),
('98940', 'Chiropractic Manipulative Treatment (CMT); Spinal, One or Two Regions'),
('97039', 'Laser/Other'),
('97026', 'Infrared Light'),
('97750	', 'FCE/Performance Test'),
('98943', 'CMT, Extraspinal, One or More Regions');

-- pt notes
CREATE TABLE ptteaching_note (
	note_id SERIAL PRIMARY KEY,
  pt_id INTEGER REFERENCES ptteaching_patients(pt_id),
 	subjective TEXT,
  objective TEXT,
  assessment TEXT,
  plan TEXT
);

INSERT INTO ptteaching_note (pt_id, subjective, objective, assessment, plan)
VALUES (1, 'subjective', 'objective', 'assessment', 'plan');

-- pt goals
CREATE TABLE ptteaching_goals (
	pt_goal_id SERIAL PRIMARY KEY,
  pt_goals TEXT,
  pt_id INTEGER REFERENCES ptteaching_patients(pt_id)
);

SELECT * FROM ptteaching_goals;