CREATE DATABASE signor_db
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_Philippines.1252'
    LC_CTYPE = 'English_Philippines.1252'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

GRANT TEMPORARY ON DATABASE signor_db TO PUBLIC;

GRANT ALL ON DATABASE signor_db TO postgres;