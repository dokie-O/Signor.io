CREATE TABLE users (
    id					SERIAL PRIMARY KEY,
    email				TEXT UNIQUE NOT NULL,
    family_name     	TEXT,
	given_name			TEXT,
	middle_name			TEXT,
	account_type        TEXT NOT NULL, -- student, teacher, admin 
	password_hash   	TEXT,
   	
    created_at        	TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at        	TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    is_online			BOOLEAN,
	last_login_at     	TIMESTAMPTZ,
	is_active         	BOOLEAN NOT NULL DEFAULT TRUE, -- deletion handling
	
	is_pldl_authorized	BOOLEAN NOT NULL DEFAULT FALSE,

	profile_picture_url	TEXT,
	
    oauth_provider    	TEXT,
    oauth_id          	TEXT,
    oauth_access_token 	TEXT,
    oauth_refresh_token TEXT,
    oauth_expires_at  	TIMESTAMPTZ
);

CREATE TABLE audit_log (
    id                  SERIAL PRIMARY KEY,
    timestamp           TIMESTAMPTZ NOT NULL,
    action				TEXT NOT NULL,
    user_id				INTEGER,
    status				TEXT,
    operation_type		TEXT,
    table_name			TEXT,
    record_id			TEXT,
	column_name			TEXT,
    old_value			TEXT,
    new_value			TEXT,
    session_id			UUID,
    request_id			UUID,
    user_ip				INET,
    application_name	TEXT
);