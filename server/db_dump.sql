--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-03-26 10:31:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 3 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO postgres;

--
-- TOC entry 2991 (class 0 OID 0)
-- Dependencies: 3
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 201 (class 1259 OID 16536)
-- Name: contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    first_name text,
    last_name text,
    phone_number text,
    email text
);


ALTER TABLE public.contacts OWNER TO postgres;

--
-- TOC entry 200 (class 1259 OID 16534)
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.contacts_id_seq OWNER TO postgres;

--
-- TOC entry 2992 (class 0 OID 0)
-- Dependencies: 200
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- TOC entry 2851 (class 2604 OID 16539)
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- TOC entry 2985 (class 0 OID 16536)
-- Dependencies: 201
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacts (id, first_name, last_name, phone_number, email) FROM stdin;
1	Rosalia	Throckmorton	5929195375	emile62@hotmail.com
2	Kasha	Juhl	8535876068	tschinner@gmail.com
3	Venus	Schmeling	2682332012	kuvalis.jett@gmail.com
4	Liane	Mcewan	3148195558	reinger.bettie@corwin.com
5	Ingrid	Brinn	8576761847	ashly.kovacek@gmail.com
6	Lissa	Huff	3253279980	effertz.max@stark.com
7	Lillian	Boster	8601225391	troy.parisian@dubuque.com
8	Akilah	Sherman	2025550158	rocio95@gmail.com
9	Sid	Nicely	5673644967	laurie36@gmail.com
10	Ernestina	Roose	6536606007	estell.towne@hotmail.com
\.


--
-- TOC entry 2993 (class 0 OID 0)
-- Dependencies: 200
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contacts_id_seq', 10, true);


--
-- TOC entry 2853 (class 2606 OID 16544)
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


-- Completed on 2021-03-26 10:31:59

--
-- PostgreSQL database dump complete
--

