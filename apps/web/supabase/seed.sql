SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Ubuntu 15.1-1.pgdg20.04+1)
-- Dumped by pg_dump version 15.7 (Ubuntu 15.7-1.pgdg20.04+1)

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
-- Data for Name: audit_log_entries; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."audit_log_entries" ("instance_id", "id", "payload", "created_at", "ip_address") VALUES
	('00000000-0000-0000-0000-000000000000', '72a9f903-0ebd-4c6f-a968-ba110e380922', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"rarira@gmail.com","user_id":"de351e75-782e-4df7-9c1f-6c388c80276d","user_phone":""}}', '2024-05-03 04:01:01.757199+00', ''),
	('00000000-0000-0000-0000-000000000000', '5c179f49-3620-47a7-81f2-beb1a414bc50', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-03 04:03:46.244641+00', ''),
	('00000000-0000-0000-0000-000000000000', '3cd49dff-6837-4353-a46c-00f99a22b763', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-03 04:56:18.490535+00', ''),
	('00000000-0000-0000-0000-000000000000', '176841e0-a13b-4f6e-88a6-837cb8cd48fb', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-03 05:17:55.576365+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f2d2d54a-a99d-4190-970a-4d00995183c5', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-03 05:17:55.576987+00', ''),
	('00000000-0000-0000-0000-000000000000', '7d525d98-2976-41fc-9468-aaac7c59a342', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-06 08:47:04.832656+00', ''),
	('00000000-0000-0000-0000-000000000000', '5f70b1ef-0a68-472d-912c-4e121146b665', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-06 08:47:04.841039+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ce9d3ebb-37f9-4a5c-a6b5-34b0c7172a51', '{"action":"logout","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-06 09:24:14.034996+00', ''),
	('00000000-0000-0000-0000-000000000000', '5d35ef7a-5857-421a-b08e-746aca7a90ea', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-06 09:24:22.752246+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c148ebab-2777-45ad-ba99-689e57303adf', '{"action":"logout","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-06 09:24:42.229609+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dd113862-5510-46c9-8b84-7389255e369e', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-06 09:26:54.420689+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd0caf009-27d6-4b27-a511-71978f8ea90a', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-07 01:56:42.046529+00', ''),
	('00000000-0000-0000-0000-000000000000', '09715832-3aa4-4714-acaf-bdd598596564', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-07 01:56:42.053976+00', ''),
	('00000000-0000-0000-0000-000000000000', '4595a111-c3de-4b75-b1e8-c173063e3a2a', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-07 06:07:30.679841+00', ''),
	('00000000-0000-0000-0000-000000000000', '2d624117-cf4c-4ca4-a0ab-eec17fbdea88', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-07 06:07:30.686483+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bad9cac5-8fdd-45b3-bf20-a68aec288bf0', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-07 09:52:46.432356+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd1d9e94f-da05-4e06-9950-f539d6fac232', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-07 09:52:46.444729+00', ''),
	('00000000-0000-0000-0000-000000000000', '38a2a116-db4b-49ff-aa6d-cd1d804b832d', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-07 10:51:37.457666+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fd61c9a8-30da-4d07-b76c-24b6fc0b9c75', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-07 10:51:37.458789+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd81fecf4-ea04-4585-b242-f4c4b505e101', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 01:38:48.440892+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bbf97450-4195-4a1a-bc68-87dd4b2838ba', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 01:38:48.448824+00', ''),
	('00000000-0000-0000-0000-000000000000', '21caa444-30b2-4baa-975f-382d29ffda60', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 05:20:52.142817+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e3a88eef-8fdf-442e-882a-f8317c79655c', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 05:20:52.144751+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c0374ef3-281b-4bcd-84b6-6f41b4144ff8', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 07:35:37.75724+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fb1c490b-d0c2-4988-a52f-5b93fe8990b4', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 07:35:37.764999+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bad784a5-b848-4db6-9313-87b7f4f93d00', '{"action":"logout","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-08 08:00:55.744972+00', ''),
	('00000000-0000-0000-0000-000000000000', '198ab19a-87e1-4706-9da5-46bce51961da', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-08 08:02:16.70815+00', ''),
	('00000000-0000-0000-0000-000000000000', '92d27854-8ee5-4d04-a2f3-9eafab40d33f', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 09:01:35.978152+00', ''),
	('00000000-0000-0000-0000-000000000000', '8d9bb439-1ae2-455c-a110-02ba480a24ab', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 09:01:35.983103+00', ''),
	('00000000-0000-0000-0000-000000000000', '09a169f6-9f46-4f5c-ad7d-5ad036950d54', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 12:33:54.545749+00', ''),
	('00000000-0000-0000-0000-000000000000', '4db5fd86-d7ad-4e16-b2df-cea1f233d7de', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-08 12:33:54.555263+00', ''),
	('00000000-0000-0000-0000-000000000000', '67443c1a-e951-4744-8ecb-0253ac6cf387', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 06:30:23.567671+00', ''),
	('00000000-0000-0000-0000-000000000000', 'cdfa35ed-f74f-4f16-bc79-525c6e7576c8', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 06:30:23.579498+00', ''),
	('00000000-0000-0000-0000-000000000000', '956ca041-1747-44e3-b36f-044645d146b4', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 13:28:36.520299+00', ''),
	('00000000-0000-0000-0000-000000000000', '14fd6a5b-1e9f-4fdc-afdb-ed8f532aa7c1', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-10 13:28:36.527235+00', ''),
	('00000000-0000-0000-0000-000000000000', '85161110-ddc3-4a5c-891b-bfb1d5b4defa', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-11 07:26:52.906453+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b88debd9-6264-4744-81cc-92c4208e92f4', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-11 07:26:52.916648+00', ''),
	('00000000-0000-0000-0000-000000000000', '5436b6f5-8afe-48ba-bfa9-6be5fdd1c13f', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-11 08:47:20.110558+00', ''),
	('00000000-0000-0000-0000-000000000000', '258ef554-125e-481c-847b-8e2d69cfdf49', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-11 08:47:20.111425+00', ''),
	('00000000-0000-0000-0000-000000000000', 'aac93935-d1fe-40c4-ae2c-4d3245dc4ed1', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-12 11:11:38.149508+00', ''),
	('00000000-0000-0000-0000-000000000000', '07bc9d7d-deb8-45a8-8cac-0a74315434ee', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-12 11:11:38.156947+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b1b1180b-45eb-4c33-8c0c-63643d8bdc18', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-13 01:51:43.331692+00', ''),
	('00000000-0000-0000-0000-000000000000', '394c8722-5233-424a-a73c-466aff9a8f7a', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-13 01:51:43.344497+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bc866e57-0a11-4313-9762-554038093eda', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-13 06:40:07.092769+00', ''),
	('00000000-0000-0000-0000-000000000000', '59ac4640-896f-48c5-a6e7-6beb05e32ba6', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-13 06:40:07.102559+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f990e84a-bf3b-4175-b18f-5350f796e1b8', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-13 09:43:58.098441+00', ''),
	('00000000-0000-0000-0000-000000000000', '79f3f48b-46c4-4e51-b45e-12cd8da8195e', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-13 09:43:58.105284+00', ''),
	('00000000-0000-0000-0000-000000000000', '627fae8e-6a7d-4df8-b38c-8d176504b430', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-13 15:11:51.391006+00', ''),
	('00000000-0000-0000-0000-000000000000', '42493185-5bef-4d68-9e8a-0b820fbc924f', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-13 15:11:51.394108+00', ''),
	('00000000-0000-0000-0000-000000000000', '28b3a0de-c19b-4450-bf27-6884fd7968c3', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-14 01:23:41.827544+00', ''),
	('00000000-0000-0000-0000-000000000000', '052a843a-a45c-4dc3-ae7b-d5f355dc25a6', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-14 01:23:41.841709+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bd780fca-867c-4d08-be03-a6775e06bc3b', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-14 09:41:37.4132+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c67eabed-5f4e-476f-ac37-2292d7b05566', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-14 09:41:37.418734+00', ''),
	('00000000-0000-0000-0000-000000000000', '8898cd26-ed2a-4b62-8a73-4857a44bde29', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-15 13:58:57.213086+00', ''),
	('00000000-0000-0000-0000-000000000000', '3e53dab3-50de-4060-adf3-06d3bad9ac92', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-15 13:58:57.232264+00', ''),
	('00000000-0000-0000-0000-000000000000', '2f0baf93-c746-4009-9ef6-842ba1b13213', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 01:46:49.882371+00', ''),
	('00000000-0000-0000-0000-000000000000', '4b5e3ffe-dc72-4e1a-b409-ada96e3d5124', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 01:46:49.903045+00', ''),
	('00000000-0000-0000-0000-000000000000', '46b43701-a2f6-4395-8f93-01ccfe46cf72', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 02:49:35.322343+00', ''),
	('00000000-0000-0000-0000-000000000000', '1e15acbf-1f3a-4f09-aab2-20b5a40727e6', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 02:49:35.324444+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a75b9b7d-09f3-4681-b66b-d3dc999e3cc4', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 03:47:44.056387+00', ''),
	('00000000-0000-0000-0000-000000000000', '1f2f735e-6313-487e-90f1-6a86e6d46ede', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 03:47:44.058126+00', ''),
	('00000000-0000-0000-0000-000000000000', '725008aa-2e95-4e59-aab2-a2eb742fdaf4', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 04:45:54.776429+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fa2e8f04-782a-423f-964d-ee683cef7c6f', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 04:45:54.77828+00', ''),
	('00000000-0000-0000-0000-000000000000', '3b1beb20-dab0-4378-b05a-b331802a1dc4', '{"action":"logout","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-16 04:47:32.437844+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ac5e6883-7e02-44b7-ae73-66a0669b6cda', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-16 04:48:50.882959+00', ''),
	('00000000-0000-0000-0000-000000000000', 'fd8a9ba4-fe78-42e7-928e-2ff4ba1d4094', '{"action":"logout","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-16 04:48:56.642323+00', ''),
	('00000000-0000-0000-0000-000000000000', '04e4fe8b-e038-4bf9-bf1c-f662e56ad07d', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-16 04:49:24.815559+00', ''),
	('00000000-0000-0000-0000-000000000000', '1d96dfed-b776-42c0-9b63-68fb45a2eba5', '{"action":"logout","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-05-16 04:49:41.727727+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ddc6e5bd-8812-43b1-bb0a-774c687e8584', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-05-16 04:52:03.396536+00', ''),
	('00000000-0000-0000-0000-000000000000', '270d1570-e9c9-4e5f-85bf-dcb8849c4b5f', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 12:42:54.413677+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f1a2e083-603b-419d-b80a-7f69560d3c1b', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-16 12:42:54.422021+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e87c510-3734-4eb5-8b76-72f269a51f62', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-17 02:05:58.849038+00', ''),
	('00000000-0000-0000-0000-000000000000', '4ad0dfd5-41db-48a7-8014-f4f3b7c8ef53', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-17 02:05:58.861861+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f7ab4a6a-4359-44f5-a3b3-2305924bc426', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-17 11:50:38.081727+00', ''),
	('00000000-0000-0000-0000-000000000000', '4db86061-c25d-4c60-bc1b-dee5c291de1f', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-17 11:50:38.092092+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c5f07659-0941-4a7f-a101-afa4d333d6fa', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-18 12:01:41.710122+00', ''),
	('00000000-0000-0000-0000-000000000000', '98f65289-124b-427b-a2a5-9b6ef4508091', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-18 12:01:41.731018+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bf47dc4d-2423-417c-b4fb-b4ab57e72caa', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-18 13:00:27.28703+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c45bc2b1-8752-4a37-80a4-4fa1d5b08465', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-18 13:00:27.296826+00', ''),
	('00000000-0000-0000-0000-000000000000', '50afa37a-dcb3-4386-917a-53a97c0393e7', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-18 14:01:20.703474+00', ''),
	('00000000-0000-0000-0000-000000000000', '4fa6e004-ab6a-4232-91a3-6eefe784ca3c', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-18 14:01:20.706656+00', ''),
	('00000000-0000-0000-0000-000000000000', '5d798a1b-0422-4ff1-a4fb-8f46009a737d', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-21 04:59:14.355262+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b6b9cdec-837a-4d37-a41d-69964ba83f13', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-21 04:59:14.376442+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c58df235-8df7-4e06-8612-dda696cde3cc', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-21 06:08:57.394046+00', ''),
	('00000000-0000-0000-0000-000000000000', '3fed090a-80c9-4629-aaad-6e4a4ab6b599', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-05-21 06:08:57.396192+00', ''),
	('00000000-0000-0000-0000-000000000000', '32256b73-b0df-419e-a084-02e934ba2161', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-04 07:04:54.948774+00', ''),
	('00000000-0000-0000-0000-000000000000', '0bbeec0c-53ed-4a2b-80e5-e7406f9b239b', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-04 07:04:54.957065+00', ''),
	('00000000-0000-0000-0000-000000000000', '8adff1d2-f38a-486e-aef0-b85728645239', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-05 14:01:27.131349+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ba0f4a53-1588-48c3-9a18-4f713a2e1c54', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-05 14:01:27.14599+00', ''),
	('00000000-0000-0000-0000-000000000000', '6e3217a4-31c2-4274-b0de-2e9e88b5609b', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-07 03:57:20.126426+00', ''),
	('00000000-0000-0000-0000-000000000000', '64cf7f00-2580-4f31-8644-c24a3546e495', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-07 03:57:20.140377+00', ''),
	('00000000-0000-0000-0000-000000000000', '81a747f0-de08-4398-b97f-2cc36853ca98', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-07 14:07:41.32272+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd53094ac-2fba-4e8a-92a8-39accd778671', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-07 14:07:41.326321+00', ''),
	('00000000-0000-0000-0000-000000000000', '7e64a4b0-69fe-4f69-9689-dbf60f26d249', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-08 13:12:33.197879+00', ''),
	('00000000-0000-0000-0000-000000000000', '9e2df77c-9335-4ab7-b8ce-97a4676e42cb', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-10 01:48:24.574724+00', ''),
	('00000000-0000-0000-0000-000000000000', 'afc62c09-4f77-49fe-8c80-fa3d97bcdeb7', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-10 01:48:24.582106+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b6eda36a-abdf-4a6b-9cda-d9daaa84d18c', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 07:05:01.052725+00', ''),
	('00000000-0000-0000-0000-000000000000', '2853cc59-b4f7-49a6-9785-aaaeca58058c', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 07:05:01.064861+00', ''),
	('00000000-0000-0000-0000-000000000000', '4980d0aa-6842-4d1c-b26d-4cc360f86c4e', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 08:16:18.252901+00', ''),
	('00000000-0000-0000-0000-000000000000', '2177090d-f733-4347-8e13-05f04e5d9ae1', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 08:16:18.257424+00', ''),
	('00000000-0000-0000-0000-000000000000', '4d13eca6-c651-42b5-9644-326fe7c332d3', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 09:14:43.472242+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e2f777e9-221f-4528-85dd-19de77c6d22d', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 09:14:43.47534+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f35a01d2-6974-481a-b7d4-e14b38207257', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 10:40:40.753503+00', ''),
	('00000000-0000-0000-0000-000000000000', 'ab1b7d22-fd23-4298-b5b5-d0cab720acfd', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 10:40:40.755306+00', ''),
	('00000000-0000-0000-0000-000000000000', '9602178e-edff-472c-aad8-83c4d6bc9879', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 11:38:34.959829+00', ''),
	('00000000-0000-0000-0000-000000000000', 'af3bf8d9-987a-46c7-91de-793eef242bc2', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 11:38:34.960588+00', ''),
	('00000000-0000-0000-0000-000000000000', '184c6eaf-ad66-4c37-803a-806e60ffa23a', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 16:54:46.688301+00', ''),
	('00000000-0000-0000-0000-000000000000', 'd313f1e2-9607-4ee9-9339-7d81ae9e4274', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-12 16:54:46.690154+00', ''),
	('00000000-0000-0000-0000-000000000000', 'a1c6878d-ecc7-439d-974f-8c03d8f63498', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 01:15:06.565644+00', ''),
	('00000000-0000-0000-0000-000000000000', '5f43f53e-fddc-4dfb-a4e5-7f564aacc55a', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 01:15:06.567336+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e2e9b8b-d770-429f-93f1-7097f5b2d90a', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 02:13:15.904672+00', ''),
	('00000000-0000-0000-0000-000000000000', '6ed42c34-e963-4e89-9d03-525e62ebbef7', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 02:13:15.907287+00', ''),
	('00000000-0000-0000-0000-000000000000', 'f2f8a0ba-7d9c-4c73-996a-ebc45d88fd57', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 03:11:10.496903+00', ''),
	('00000000-0000-0000-0000-000000000000', '53e5c805-04f0-4b73-958a-377fde9b63d9', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 03:11:10.502219+00', ''),
	('00000000-0000-0000-0000-000000000000', '12fb1d65-8350-4570-a5a3-9e6d96b91277', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 04:09:01.010519+00', ''),
	('00000000-0000-0000-0000-000000000000', '6e5554ad-3f8c-46bf-91aa-7af14056b43a', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 04:09:01.011967+00', ''),
	('00000000-0000-0000-0000-000000000000', 'be4b0552-6990-48e2-adb9-f36082d6ffc2', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 13:24:08.518994+00', ''),
	('00000000-0000-0000-0000-000000000000', '82a74bfb-62b9-4dce-8e55-06c823106b8d', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 13:24:08.526351+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b4516932-e238-41e5-a263-d63c2569c33e', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 14:22:12.80751+00', ''),
	('00000000-0000-0000-0000-000000000000', '4ae3cec5-180a-43a4-86c6-7a3158b87acd', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 14:22:12.808757+00', ''),
	('00000000-0000-0000-0000-000000000000', '553d06d4-4527-4bfb-943f-f24111fc5823', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 15:23:19.377412+00', ''),
	('00000000-0000-0000-0000-000000000000', '62656871-6dc9-453c-8e5f-e796248338ca', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-13 15:23:19.380082+00', ''),
	('00000000-0000-0000-0000-000000000000', '9247f02d-77fb-4856-95f4-1593dbe87eb1', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 05:14:07.97342+00', ''),
	('00000000-0000-0000-0000-000000000000', '40bb53dc-254f-4588-9d4f-1baf7a3316de', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 05:14:07.981902+00', ''),
	('00000000-0000-0000-0000-000000000000', '35b5aff8-fc85-4210-9cf8-ef3c13d3436a', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 06:40:56.831004+00', ''),
	('00000000-0000-0000-0000-000000000000', '2cc64d9b-be67-4164-b184-79d0d606453d', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 06:40:56.835094+00', ''),
	('00000000-0000-0000-0000-000000000000', '8998618f-7312-497a-a96c-90b036b60da3', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 10:59:37.454751+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e72163f8-f7f1-4a2e-ba3b-442f2a13f819', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 10:59:37.456051+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b832e9cc-6b27-408e-a918-b11df911aa4a', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 13:18:41.744386+00', ''),
	('00000000-0000-0000-0000-000000000000', '8d68836c-b065-45b9-b14d-cfcc4bff88f2', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 13:18:41.746132+00', ''),
	('00000000-0000-0000-0000-000000000000', '87feb59e-3468-4b0a-a782-662f96d9b089', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 14:16:33.166778+00', ''),
	('00000000-0000-0000-0000-000000000000', 'bd4dfbed-1b4d-46e5-9b28-2f508cf0fd56', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 14:16:33.169041+00', ''),
	('00000000-0000-0000-0000-000000000000', '670da2ef-4541-4057-a519-0ed376c193ca', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 15:20:44.080931+00', ''),
	('00000000-0000-0000-0000-000000000000', '4e18ba48-a2e3-4b57-ba0f-a74f81afea3e', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 15:20:44.083617+00', ''),
	('00000000-0000-0000-0000-000000000000', 'c6b7060d-8c0e-41c5-a314-51341d7f03f4', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 16:18:55.92063+00', ''),
	('00000000-0000-0000-0000-000000000000', 'dff624ae-9bf4-4bfa-b588-ccef0cbb4360', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-14 16:18:55.923042+00', ''),
	('00000000-0000-0000-0000-000000000000', '5ea6cad6-521d-4263-bc1a-91be20bd5317', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-15 10:45:45.185376+00', ''),
	('00000000-0000-0000-0000-000000000000', '07f8b103-adac-4ae2-bb3c-90e6bcf00b4e', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-15 10:45:45.196115+00', ''),
	('00000000-0000-0000-0000-000000000000', '83f070ca-f5cc-477c-94ee-bf87555b62eb', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"user_email":"potener36@gmail.com","user_id":"6adf10e4-9f7c-4cf8-956f-ef3238c9d961","user_phone":""}}', '2024-06-16 10:57:30.568219+00', ''),
	('00000000-0000-0000-0000-000000000000', '639c6f65-903b-41fe-8ba0-adba673b8bbf', '{"action":"login","actor_id":"6adf10e4-9f7c-4cf8-956f-ef3238c9d961","actor_username":"potener36@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 10:58:36.25345+00', ''),
	('00000000-0000-0000-0000-000000000000', '40c266d4-a8a9-413b-9c22-7bca9ea7e298', '{"action":"logout","actor_id":"6adf10e4-9f7c-4cf8-956f-ef3238c9d961","actor_username":"potener36@gmail.com","actor_via_sso":false,"log_type":"account"}', '2024-06-16 11:06:30.315881+00', ''),
	('00000000-0000-0000-0000-000000000000', 'e99f355c-6ca1-464b-88e7-df756c7ccc28', '{"action":"login","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2024-06-16 11:06:47.664451+00', ''),
	('00000000-0000-0000-0000-000000000000', '3b02d296-6ad5-458f-b6be-d782ce18f073', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-16 11:24:27.792358+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b027abfd-b972-43ee-96a2-ba274ed00f5f', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-16 11:24:27.794151+00', ''),
	('00000000-0000-0000-0000-000000000000', 'b4d8aff5-da7c-4775-985c-4bd3b053136c', '{"action":"token_refreshed","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-17 14:22:35.472343+00', ''),
	('00000000-0000-0000-0000-000000000000', '90afc270-db43-4105-8c56-6fbfcc2a395d', '{"action":"token_revoked","actor_id":"de351e75-782e-4df7-9c1f-6c388c80276d","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"token"}', '2024-06-17 14:22:35.482015+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '6adf10e4-9f7c-4cf8-956f-ef3238c9d961', 'authenticated', 'authenticated', 'potener36@gmail.com', '$2a$10$acKM/9lzaG8a/s02JhN7TOvnSILPFFn.EkYBCLcoEgEPcGYdpJzk.', '2024-06-16 10:57:30.578498+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-16 10:58:36.262812+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-06-16 10:57:30.549167+00', '2024-06-16 10:58:36.288389+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false),
	('00000000-0000-0000-0000-000000000000', 'de351e75-782e-4df7-9c1f-6c388c80276d', 'authenticated', 'authenticated', 'rarira@gmail.com', '$2a$10$BGvLCzKdkxAFLlSPPajp0.FOErWMH.MO9sVO6W.WeZmBrEzepgaH.', '2024-05-03 04:01:01.761004+00', NULL, '', NULL, '', NULL, '', '', NULL, '2024-06-16 11:06:47.665116+00', '{"provider": "email", "providers": ["email"]}', '{}', NULL, '2024-05-03 04:01:01.751383+00', '2024-06-17 14:22:35.497189+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('de351e75-782e-4df7-9c1f-6c388c80276d', 'de351e75-782e-4df7-9c1f-6c388c80276d', '{"sub": "de351e75-782e-4df7-9c1f-6c388c80276d", "email": "rarira@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-05-03 04:01:01.755571+00', '2024-05-03 04:01:01.755628+00', '2024-05-03 04:01:01.755628+00', 'ba62cbbc-edde-4448-ab7a-e9dcb4574d70'),
	('6adf10e4-9f7c-4cf8-956f-ef3238c9d961', '6adf10e4-9f7c-4cf8-956f-ef3238c9d961', '{"sub": "6adf10e4-9f7c-4cf8-956f-ef3238c9d961", "email": "potener36@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2024-06-16 10:57:30.559008+00', '2024-06-16 10:57:30.559598+00', '2024-06-16 10:57:30.559598+00', '82f2a932-7b3f-4f3b-84b9-f810941d06e2');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag") VALUES
	('2e9dba0c-cfaa-42ed-9657-a13e3172b311', 'de351e75-782e-4df7-9c1f-6c388c80276d', '2024-06-16 11:06:47.665189+00', '2024-06-16 11:06:47.665189+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', '116.121.43.246', NULL),
	('d562ddb9-20b8-4c3c-98ff-3a2f0fac33d7', 'de351e75-782e-4df7-9c1f-6c388c80276d', '2024-05-16 04:52:03.397511+00', '2024-06-17 14:22:35.503784+00', NULL, 'aal1', NULL, '2024-06-17 14:22:35.503697', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36', '116.121.43.246', NULL),
	('fa085e73-e360-4ccf-a30d-3da92e786b23', 'de351e75-782e-4df7-9c1f-6c388c80276d', '2024-06-08 13:12:33.21369+00', '2024-06-10 01:48:24.601146+00', NULL, 'aal1', NULL, '2024-06-10 01:48:24.601061', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36', '116.121.43.246', NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('d562ddb9-20b8-4c3c-98ff-3a2f0fac33d7', '2024-05-16 04:52:03.400706+00', '2024-05-16 04:52:03.400706+00', 'password', 'cfa47b80-61d9-4b7c-8db7-2e2d85af6eb4'),
	('fa085e73-e360-4ccf-a30d-3da92e786b23', '2024-06-08 13:12:33.231793+00', '2024-06-08 13:12:33.231793+00', 'password', '5aa883d1-1c59-4eb6-b6a8-1365d909eff8'),
	('2e9dba0c-cfaa-42ed-9657-a13e3172b311', '2024-06-16 11:06:47.673254+00', '2024-06-16 11:06:47.673254+00', 'password', 'b44d60b9-6116-44e3-9b5a-7ce8c007fcc8');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 35, '6myasOPhf7xYpE1EAltunA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-05-16 04:52:03.398709+00', '2024-05-16 12:42:54.422636+00', NULL, 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 36, 'nnNeEHPbuc0m4IZcb-3Mlw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-05-16 12:42:54.427533+00', '2024-05-17 02:05:58.863071+00', '6myasOPhf7xYpE1EAltunA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 37, 'T-CwtdydMcVXaZ_GXbGjKg', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-05-17 02:05:58.870364+00', '2024-05-17 11:50:38.093381+00', 'nnNeEHPbuc0m4IZcb-3Mlw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 38, 'LB9DcLlv3Yp361GAEg5rfA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-05-17 11:50:38.105774+00', '2024-05-18 12:01:41.731712+00', 'T-CwtdydMcVXaZ_GXbGjKg', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 39, 'KTz0X-CEZOwC8amXtXiKAA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-05-18 12:01:41.745809+00', '2024-05-18 13:00:27.29743+00', 'LB9DcLlv3Yp361GAEg5rfA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 40, 'sFBE3fhtPAgO9tUOExPUlA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-05-18 13:00:27.302936+00', '2024-05-18 14:01:20.707321+00', 'KTz0X-CEZOwC8amXtXiKAA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 41, 'cWpIPyPKyo-URcDGERXUGw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-05-18 14:01:20.708541+00', '2024-05-21 04:59:14.377717+00', 'sFBE3fhtPAgO9tUOExPUlA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 42, 'eh9KUA-BbCP34YlT4S3hDg', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-05-21 04:59:14.390382+00', '2024-05-21 06:08:57.404897+00', 'cWpIPyPKyo-URcDGERXUGw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 43, 'zav1AEbUEiDpUG9mJY1cYw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-05-21 06:08:57.406184+00', '2024-06-04 07:04:54.958214+00', 'eh9KUA-BbCP34YlT4S3hDg', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 44, 'qlhifGT1CFQ85KlF564iNw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-04 07:04:54.965091+00', '2024-06-05 14:01:27.146613+00', 'zav1AEbUEiDpUG9mJY1cYw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 45, 'AbpkRLmIbVhNbqj79WCLpw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-05 14:01:27.158709+00', '2024-06-07 03:57:20.141558+00', 'qlhifGT1CFQ85KlF564iNw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 46, 'HI8Oc7uT5_LLrYvx-ObrTA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-07 03:57:20.155702+00', '2024-06-07 14:07:41.326926+00', 'AbpkRLmIbVhNbqj79WCLpw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 48, '4T5wAsGpt0zd5OS3pwkjDA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-08 13:12:33.221108+00', '2024-06-10 01:48:24.583206+00', NULL, 'fa085e73-e360-4ccf-a30d-3da92e786b23'),
	('00000000-0000-0000-0000-000000000000', 49, '2-Ju0txhk0WtXP2er4H3QQ', 'de351e75-782e-4df7-9c1f-6c388c80276d', false, '2024-06-10 01:48:24.591868+00', '2024-06-10 01:48:24.591868+00', '4T5wAsGpt0zd5OS3pwkjDA', 'fa085e73-e360-4ccf-a30d-3da92e786b23'),
	('00000000-0000-0000-0000-000000000000', 47, '8ZbktzkfqXJxe2fkAwJ04Q', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-07 14:07:41.333229+00', '2024-06-12 07:05:01.065943+00', 'HI8Oc7uT5_LLrYvx-ObrTA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 50, 'hbLMfdgyC4W7sttJV41RHA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-12 07:05:01.071168+00', '2024-06-12 08:16:18.257922+00', '8ZbktzkfqXJxe2fkAwJ04Q', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 51, '4m7BZPnjcrqpV8_stRwzMA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-12 08:16:18.259502+00', '2024-06-12 09:14:43.478149+00', 'hbLMfdgyC4W7sttJV41RHA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 52, 'cr1_K6gRMLGl6bxKB5KaIA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-12 09:14:43.481332+00', '2024-06-12 10:40:40.75584+00', '4m7BZPnjcrqpV8_stRwzMA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 53, 'n5zP0yZzyayseRKa7MlRCw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-12 10:40:40.756995+00', '2024-06-12 11:38:34.961043+00', 'cr1_K6gRMLGl6bxKB5KaIA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 54, 'xrfAPWISPyNVR7xuhbeplA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-12 11:38:34.962952+00', '2024-06-12 16:54:46.690655+00', 'n5zP0yZzyayseRKa7MlRCw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 55, 'h4XFQqJVmvX-DmI82lJvuw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-12 16:54:46.692785+00', '2024-06-13 01:15:06.567793+00', 'xrfAPWISPyNVR7xuhbeplA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 56, 'KkWSMHv9ZvGBXArEwc_CeA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-13 01:15:06.569862+00', '2024-06-13 02:13:15.907811+00', 'h4XFQqJVmvX-DmI82lJvuw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 57, 'wmVewWa7Mv-PfN0EU9_MYw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-13 02:13:15.910498+00', '2024-06-13 03:11:10.502724+00', 'KkWSMHv9ZvGBXArEwc_CeA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 58, 'BbZUc3h3OMLCAG6NkEweEw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-13 03:11:10.508637+00', '2024-06-13 04:09:01.012432+00', 'wmVewWa7Mv-PfN0EU9_MYw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 59, 'VP6QdLo97VcTImikD5uNDQ', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-13 04:09:01.013971+00', '2024-06-13 13:24:08.526894+00', 'BbZUc3h3OMLCAG6NkEweEw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 60, 'rEEji0Tan7zopK6b8p7gTQ', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-13 13:24:08.534735+00', '2024-06-13 14:22:12.809252+00', 'VP6QdLo97VcTImikD5uNDQ', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 61, '2P9wwR0l_k8GLy5C5eG4_A', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-13 14:22:12.811982+00', '2024-06-13 15:23:19.380556+00', 'rEEji0Tan7zopK6b8p7gTQ', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 62, 'tbWaQ-RCHmXDwnp7ehkWtw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-13 15:23:19.383055+00', '2024-06-14 05:14:07.982455+00', '2P9wwR0l_k8GLy5C5eG4_A', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 63, 'qy0aeoRu4KW-h7qBAdU4hw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-14 05:14:07.986821+00', '2024-06-14 06:40:56.835613+00', 'tbWaQ-RCHmXDwnp7ehkWtw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 64, 'hocBtB8SJPIxSairVdfQdA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-14 06:40:56.838826+00', '2024-06-14 10:59:37.456544+00', 'qy0aeoRu4KW-h7qBAdU4hw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 65, 'QuSxgaLMPgwfHBUyylTaMQ', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-14 10:59:37.45905+00', '2024-06-14 13:18:41.746602+00', 'hocBtB8SJPIxSairVdfQdA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 66, 'qK9-SprydJRGOb5WtZOA3Q', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-14 13:18:41.753388+00', '2024-06-14 14:16:33.169507+00', 'QuSxgaLMPgwfHBUyylTaMQ', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 67, 'kvVlvUpDjCiTIIWYpISR-w', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-14 14:16:33.172122+00', '2024-06-14 15:20:44.084092+00', 'qK9-SprydJRGOb5WtZOA3Q', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 68, '7uBqktiG4mu5FWgxvmavEQ', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-14 15:20:44.086619+00', '2024-06-14 16:18:55.925898+00', 'kvVlvUpDjCiTIIWYpISR-w', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 69, 't2tfwUKrzhOu10L0z8C-gw', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-14 16:18:55.927888+00', '2024-06-15 10:45:45.196608+00', '7uBqktiG4mu5FWgxvmavEQ', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 72, 'meSTejs0_71Z7Fy5_6skvw', 'de351e75-782e-4df7-9c1f-6c388c80276d', false, '2024-06-16 11:06:47.668837+00', '2024-06-16 11:06:47.668837+00', NULL, '2e9dba0c-cfaa-42ed-9657-a13e3172b311'),
	('00000000-0000-0000-0000-000000000000', 70, 'sAl5vDF8jGAfUaGlAA0HjA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-15 10:45:45.212342+00', '2024-06-16 11:24:27.79469+00', 't2tfwUKrzhOu10L0z8C-gw', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 73, '3IBnFhJxq8KUptdE6t_abA', 'de351e75-782e-4df7-9c1f-6c388c80276d', true, '2024-06-16 11:24:27.797952+00', '2024-06-17 14:22:35.483018+00', 'sAl5vDF8jGAfUaGlAA0HjA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7'),
	('00000000-0000-0000-0000-000000000000', 74, 'alQGCZyl01vmTF9bF88O-g', 'de351e75-782e-4df7-9c1f-6c388c80276d', false, '2024-06-17 14:22:35.494258+00', '2024-06-17 14:22:35.494258+00', '3IBnFhJxq8KUptdE6t_abA', 'd562ddb9-20b8-4c3c-98ff-3a2f0fac33d7');


--
-- Data for Name: sso_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_providers; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: saml_relay_states; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sso_domains; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: key; Type: TABLE DATA; Schema: pgsodium; Owner: supabase_admin
--



--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."categories" ("id", "created_at", "name", "extra_info") VALUES
	(2, '2024-05-08 08:48:32.011796+00', '라이프스타일', NULL),
	(1, '2024-05-08 08:45:07.672191+00', '요가', 'ClassScore');


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."contacts" ("id", "created_at", "name", "email", "phone_no", "content", "replied") VALUES
	(18, '2024-06-04 06:38:48.266055+00', 'Inseong Park', 'rariradev@gmail.com', '01064569520', 'qhrhtlvdh', true),
	(19, '2024-06-04 07:49:02.491781+00', '야야야', 'rarira@gmail.com', '', '언제쯤 끙차 가능한가요?', true),
	(25, '2024-06-16 10:59:07.880757+00', 'Inseong Park', 'rariradev@gmail.com', '', 'hihihihihi', true);


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."users" ("id", "created_at", "first_name", "email", "last_name", "user_id") VALUES
	(1, '2024-05-02 10:54:27.657782+00', 'Ethan', 'rarira@gmail.com', 'Park', 'de351e75-782e-4df7-9c1f-6c388c80276d'),
	(2, '2024-06-16 11:31:23.449157+00', 'Lizzy', 'potener36@gmail.com', 'Choi', '6adf10e4-9f7c-4cf8-956f-ef3238c9d961');


--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."posts" ("id", "created_at", "title", "body", "published_at", "teaser", "backlinks", "image", "category_id", "author_id", "views", "extra_info") VALUES
	(5, '2024-05-07 10:56:40.203925+00', 'Ashtanga', '<h4><strong>Ashtanga&nbsp;Yoga란?</strong></h4><p>아쉬탕가&nbsp;요가는&nbsp;현대의&nbsp;모든&nbsp;빈야사(Vinyasa)&nbsp;요가의&nbsp;뿌리가&nbsp;되는&nbsp;역동적인&nbsp;요가&nbsp;수련입니다.&nbsp;지속적인&nbsp;신체&nbsp;수련을&nbsp;통해&nbsp;내면&nbsp;깊은&nbsp;곳까지&nbsp;연결해&nbsp;영적&nbsp;수련으로&nbsp;나아가게&nbsp;하는&nbsp;여정이며,&nbsp;정서적인&nbsp;안정을&nbsp;도모하고,&nbsp;몸을&nbsp;정화하며&nbsp;균형을&nbsp;통해&nbsp;깨달음을&nbsp;얻도록&nbsp;하는&nbsp;인도&nbsp;전통&nbsp;요가입니다.</p><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191014_159/15710468325654QU0K_JPEG/mosaSsWObM.jpeg?type=f540_540" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191014_199/1571046833112t19Au_JPEG/mosataZC31.jpeg?type=f540_540" alt=""></a></p></li></ul><h4><strong>아쉬탕가&nbsp;요가의&nbsp;기원</strong></h4><p>아쉬탕가&nbsp;요가는&nbsp;전통적으로&nbsp;스승과&nbsp;제자로&nbsp;전수(parampara)&nbsp;되어&nbsp;전파되었는데,&nbsp;일반적으로&nbsp;크리슈나마차리야(Tirumalai&nbsp;Krishnamacharya)에&nbsp;의해&nbsp;창시되었다고&nbsp;전해지고&nbsp;있습니다.&nbsp;크리슈나마차리야는&nbsp;여러&nbsp;제자들에게&nbsp;요가를&nbsp;전수하였으며,&nbsp;현대의&nbsp;여러&nbsp;가지&nbsp;요가는&nbsp;크리슈나마차리야의&nbsp;제자들에&nbsp;의해&nbsp;개발되고&nbsp;전&nbsp;세계로&nbsp;전파되었습니다.<br><br>파타비조이스(K.&nbsp;Pattabhi&nbsp;Jois)도&nbsp;크리슈나마차리야의&nbsp;제자&nbsp;중&nbsp;한&nbsp;명이며,&nbsp;파타비조이스는&nbsp;12살&nbsp;때&nbsp;처음&nbsp;아쉬탕가&nbsp;요가를&nbsp;접하고&nbsp;그&nbsp;역동적인&nbsp;모습에&nbsp;반하여&nbsp;요가를&nbsp;수련하게&nbsp;되었고,&nbsp;고향인&nbsp;인도&nbsp;남부지역&nbsp;마이소르(Mysore)에&nbsp;Ashtanga&nbsp;Yoga&nbsp;Institute를&nbsp;세우고&nbsp;아쉬탕가&nbsp;요가를&nbsp;발전&nbsp;및&nbsp;전파시켰습니다.&nbsp;서양의&nbsp;많은&nbsp;요기들이&nbsp;인도&nbsp;마이소르에&nbsp;방문하여&nbsp;아쉬탕가&nbsp;요가를&nbsp;수련하면서&nbsp;전세계에&nbsp;알려지게&nbsp;되었고,&nbsp;파타비조이스&nbsp;또한&nbsp;해외&nbsp;워크샵&nbsp;등을&nbsp;통해&nbsp;아쉬탕가&nbsp;요가를&nbsp;소개하고&nbsp;전파하였으며&nbsp;70년동안&nbsp;요가를&nbsp;가르치고&nbsp;헌신하다가&nbsp;93세의&nbsp;생을&nbsp;마감했습니다.<br><br>현재는&nbsp;파타비조이스의&nbsp;손자인&nbsp;샤랏조이스(R.&nbsp;Sharath&nbsp;Jois)&nbsp;에로&nbsp;계승되었고,&nbsp;매년&nbsp;전&nbsp;세계의&nbsp;수많은&nbsp;학생들이&nbsp;마이소르의&nbsp;Sharath&nbsp;Yoga&nbsp;Centre를&nbsp;방문하여&nbsp;아쉬탕가&nbsp;요가를&nbsp;배우고&nbsp;수련하고&nbsp;있으며,&nbsp;각자의&nbsp;나라로&nbsp;돌아가&nbsp;아쉬탕가&nbsp;전통&nbsp;그대로&nbsp;요가를&nbsp;전수하고&nbsp;있습니다.</p><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20200129_159/1580272313012jz5ji_PNG/mosaUdwopa.png?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20200129_20/1580272313500kCmHh_JPEG/mosapKuls8.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20200129_111/1580272313927cb7iE_JPEG/mosa4YZJB7.jpeg?type=f353_353" alt=""></a></p></li></ul><h4><strong>아쉬탕가&nbsp;요가의&nbsp;8가지</strong></h4><ul><li><p><strong><em><span style="color: rgb(34, 34, 34)">1</span></em></strong>Yama(야마:도덕률)</p></li><li><p><strong><em><span style="color: rgb(34, 34, 34)">2</span></em></strong>Niyama(니야마:자기정화와&nbsp;공부)</p></li><li><p><strong><em><span style="color: rgb(34, 34, 34)">3</span></em></strong>Asana(아사나:요가자세)</p></li><li><p><strong><em><span style="color: rgb(34, 34, 34)">4</span></em></strong>Pranayama(프라나야마:호흡제어)</p></li><li><p><strong><em><span style="color: rgb(34, 34, 34)">5</span></em></strong>Pratyahara(프라티야하라:감각제어)</p></li><li><p><strong><em><span style="color: rgb(34, 34, 34)">6</span></em></strong>Dharana(다라나:집중)</p></li><li><p><strong><em><span style="color: rgb(34, 34, 34)">7</span></em></strong>Dhyana(디야나:명상)</p></li><li><p><strong><em><span style="color: rgb(34, 34, 34)">8</span></em></strong>Samadhi(사마디:삼매,깨달음)</p></li></ul><h4><strong>아쉬탕가&nbsp;요가&nbsp;수련의&nbsp;핵심요소(Tristhana)</strong></h4><p>아쉬탕가&nbsp;요가를&nbsp;수련할&nbsp;때&nbsp;가장&nbsp;중요한&nbsp;실천&nbsp;요소는&nbsp;트리스타나(Tristhana)입니다.&nbsp;아쉬탕가를&nbsp;수련하는&nbsp;데&nbsp;있어&nbsp;호흡(Breath),&nbsp;아사나(Asana)&nbsp;그리고&nbsp;시선(Drishti:응시점)이&nbsp;가장&nbsp;중요한&nbsp;요소입니다.&nbsp;이러한&nbsp;3요소를&nbsp;바탕으로&nbsp;하여&nbsp;행해지는&nbsp;깊은&nbsp;수련을&nbsp;통해&nbsp;진정한&nbsp;신체적&nbsp;그리고&nbsp;정신적&nbsp;치유&nbsp;효과를&nbsp;가져오게&nbsp;됩니다.&nbsp;<br><br>파타비조이스는&nbsp;호흡을&nbsp;그중&nbsp;가장&nbsp;중요한&nbsp;요소로&nbsp;이야기하였습니다.&nbsp;정화된&nbsp;상태로&nbsp;발전하기&nbsp;위해서는&nbsp;깊은&nbsp;호흡을&nbsp;통한&nbsp;길이어야&nbsp;합니다..&nbsp;이&nbsp;호흡의&nbsp;핵심을&nbsp;지키지&nbsp;않으면&nbsp;아사나는&nbsp;단순한&nbsp;기교에&nbsp;불과하다고&nbsp;여겨진다고&nbsp;하였습니다.&nbsp;호흡은&nbsp;몸을&nbsp;정화하고&nbsp;독소를&nbsp;배출합니다.&nbsp;들이마시는&nbsp;숨은&nbsp;몸속에&nbsp;충분한&nbsp;산소를&nbsp;공급하고,&nbsp;내쉬는&nbsp;숨은&nbsp;허파를&nbsp;통해&nbsp;혈액의&nbsp;독소를&nbsp;배출하여&nbsp;줍니다.<br><br>아쉬탕가&nbsp;요가의&nbsp;아사나는&nbsp;그&nbsp;순서가&nbsp;정해져&nbsp;있으며,&nbsp;각각의&nbsp;아사나는&nbsp;빈야사를&nbsp;통해&nbsp;연결되어&nbsp;있고&nbsp;후반부로&nbsp;갈수록&nbsp;아사나의&nbsp;난이도는&nbsp;점점&nbsp;높아지게&nbsp;구성되어&nbsp;있습니다.&nbsp;신체적&nbsp;수련인&nbsp;요가&nbsp;아사나는&nbsp;몸의&nbsp;가장&nbsp;깊숙한&nbsp;곳까지&nbsp;비틀고&nbsp;구부리고&nbsp;접어서&nbsp;몸의&nbsp;내부를&nbsp;청소하게&nbsp;됩니다.&nbsp;꾸준한&nbsp;수련은&nbsp;몸을&nbsp;건강하게&nbsp;하여&nbsp;신체적인&nbsp;힘도&nbsp;강화하며&nbsp;또한&nbsp;유연성을&nbsp;길러주어,&nbsp;오랫동안&nbsp;축적된&nbsp;몸의&nbsp;긴장,&nbsp;경직,&nbsp;통증들이&nbsp;아사나&nbsp;수련을&nbsp;통해&nbsp;치유의&nbsp;과정을&nbsp;겪게&nbsp;됩니다.&nbsp;수련이&nbsp;깊어지게&nbsp;되면,&nbsp;몸속에&nbsp;내재되어&nbsp;있는&nbsp;감정들이&nbsp;분출되고&nbsp;여러가지&nbsp;감정의&nbsp;변화를&nbsp;요가&nbsp;수련을&nbsp;통해&nbsp;경험하게&nbsp;됩니다..<br><br>아쉬탕가&nbsp;요가에서는&nbsp;각각의&nbsp;자세마다&nbsp;응시점(Drishti)이&nbsp;정해져&nbsp;있습니다.&nbsp;이&nbsp;특정한&nbsp;지점에&nbsp;시선을&nbsp;고정함으로써&nbsp;수련의&nbsp;영적인&nbsp;발전을&nbsp;할&nbsp;수&nbsp;있습니다.&nbsp;드리시티는&nbsp;단순하게&nbsp;시선을&nbsp;한곳에&nbsp;고정하는&nbsp;것과&nbsp;더불어,&nbsp;마음이&nbsp;영적인&nbsp;틀&nbsp;안에&nbsp;머물러&nbsp;있도록&nbsp;하여&nbsp;집중하도록&nbsp;훈련하는&nbsp;것입니다.&nbsp;요가&nbsp;수련에&nbsp;있어&nbsp;마음이&nbsp;안정되어&nbsp;있으면&nbsp;신체의&nbsp;균형도&nbsp;이루게&nbsp;되는데,&nbsp;시선이&nbsp;흐트러지면&nbsp;신체의&nbsp;균형도&nbsp;깨져&nbsp;요가&nbsp;수련을&nbsp;방해하게&nbsp;됩니다.&nbsp;시선은&nbsp;1)두&nbsp;눈썹&nbsp;사이(Bhrumadhya)&nbsp;2)&nbsp;위쪽(Urdhva)&nbsp;3)&nbsp;코끝(Nasagra)&nbsp;4)&nbsp;배꼽(Nabhi&nbsp;Chakra)&nbsp;5)&nbsp;손가락(Hastagram)&nbsp;6)발가락(Padayogram)&nbsp;7)&nbsp;엄지손가락(Angusthamadhyam)&nbsp;8)&nbsp;왼쪽(Parsva)&nbsp;&nbsp;9)&nbsp;오른쪽(Parsva)의&nbsp;총&nbsp;9개의&nbsp;드리시티가&nbsp;있습니다.</p><h4><strong>아쉬탕가&nbsp;요가&nbsp;수련방법</strong></h4><ul><li><p><span>1</span>마이솔&nbsp;스타일(Mysore&nbsp;Style)&nbsp;수련</p></li></ul><p>구루지&nbsp;파타비조이스가&nbsp;살면서&nbsp;아쉬탕가&nbsp;요가를&nbsp;가르쳤던&nbsp;Mysore(보통&nbsp;마이솔이라&nbsp;칭함)&nbsp;지역의&nbsp;이름에서&nbsp;딴&nbsp;온&nbsp;수련&nbsp;방식으로&nbsp;아쉬탕가&nbsp;요가&nbsp;만이&nbsp;가지고&nbsp;있는&nbsp;독특한&nbsp;수련방식이자&nbsp;아쉬탕가&nbsp;요가의&nbsp;본질입니다.&nbsp;스승과&nbsp;제자의&nbsp;1:1&nbsp;교육을&nbsp;통해&nbsp;아쉬탕가&nbsp;요가&nbsp;아사나를&nbsp;배우고&nbsp;순서를&nbsp;익히게&nbsp;되며,&nbsp;수련자&nbsp;개인의&nbsp;신체&nbsp;상태에&nbsp;따라&nbsp;배우고&nbsp;수련하게&nbsp;됩니다.&nbsp;아쉬탕가&nbsp;요가의&nbsp;아사나의&nbsp;순서는&nbsp;이전&nbsp;자세를&nbsp;기반으로&nbsp;확장되어&nbsp;서로&nbsp;연관되어&nbsp;있으며,&nbsp;점점&nbsp;뒤쪽의&nbsp;아사나의&nbsp;난이도는&nbsp;높아지게&nbsp;됩니다.&nbsp;그래서&nbsp;마이솔&nbsp;수련법은&nbsp;한&nbsp;번에&nbsp;한&nbsp;개씩&nbsp;아사나를&nbsp;배우고&nbsp;습득한&nbsp;후&nbsp;그&nbsp;다음&nbsp;아사나로&nbsp;넘어가면서&nbsp;아쉬탕가&nbsp;요가&nbsp;전체&nbsp;시리즈를&nbsp;습득하게&nbsp;됩니다.&nbsp;중간에&nbsp;흥미가&nbsp;느껴지는&nbsp;자세로&nbsp;뛰어&nbsp;넘어가거나&nbsp;초보자&nbsp;때부터&nbsp;한꺼번에&nbsp;전체&nbsp;시퀀스를&nbsp;수련하지&nbsp;않습니다.<br><br>마이솔&nbsp;수련은&nbsp;본인에게&nbsp;적합한&nbsp;난이도의&nbsp;아사나&nbsp;진도&nbsp;안에서&nbsp;깊이&nbsp;호흡하며&nbsp;자기&nbsp;주도적으로&nbsp;수련하는&nbsp;방식입니다.&nbsp;수련자는&nbsp;본인이&nbsp;받은&nbsp;아사나까지만&nbsp;수련을&nbsp;진행하므로&nbsp;모든&nbsp;수련자가&nbsp;동일하게&nbsp;수련하지&nbsp;않고&nbsp;개별적으로&nbsp;본인이&nbsp;받은&nbsp;아사나까지만&nbsp;수련하게&nbsp;됩니다.&nbsp;</p><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20200129_163/1580273913427jy10L_JPEG/mosauJDf4f.jpeg?type=f540_540" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20200129_43/15802739143863EyRr_JPEG/mosaVGxg0j.jpeg?type=f540_540" alt=""></a></p></li></ul><ul><li><p><span>1</span>레드&nbsp;클래스(Led&nbsp;Class)</p></li></ul><p>아쉬탕가&nbsp;요가의&nbsp;또&nbsp;다른&nbsp;특별한&nbsp;수련&nbsp;방식으로&nbsp;아쉬탕가&nbsp;요가는&nbsp;전체의&nbsp;시퀀스의&nbsp;고유의&nbsp;빈야사&nbsp;카운트를&nbsp;가지고&nbsp;있습니다.&nbsp;<br><br>지도자의&nbsp;산스크리트어로&nbsp;짜인&nbsp;빈야사&nbsp;카운트의&nbsp;구령에&nbsp;맞춰&nbsp;모든&nbsp;수련자는&nbsp;다&nbsp;함께&nbsp;동일한&nbsp;아사나를&nbsp;수련합니다.&nbsp;레드클래스는&nbsp;지도자의&nbsp;카운트에&nbsp;따라&nbsp;수행하고&nbsp;지도자의&nbsp;카운트에&nbsp;맞추어&nbsp;수련하며&nbsp;아쉬탕가&nbsp;요가의&nbsp;일정한&nbsp;빈야사&nbsp;패턴을&nbsp;습득하는&nbsp;것이&nbsp;주요&nbsp;목적입니다.<br><br>레드클래스시&nbsp;전체&nbsp;시퀀스의&nbsp;진도를&nbsp;나가지&nbsp;않은&nbsp;수련생의&nbsp;경우는&nbsp;본인이&nbsp;받은&nbsp;아사나까지&nbsp;수련하고&nbsp;피니싱&nbsp;시퀀스가&nbsp;진행될&nbsp;때까지&nbsp;매트에서&nbsp;기다렸다가&nbsp;피니싱&nbsp;시퀀스부터&nbsp;함께&nbsp;시작하고&nbsp;수련을&nbsp;다&nbsp;같이&nbsp;마무리합니다.</p><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20200129_19/15802739877996b6R1_JPEG/mosaAhwo7l.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20200129_237/15802739886246iCCB_JPEG/mosaDT0i6S.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20200129_219/1580273989461P0m1J_JPEG/mosaAchg4r.jpeg?type=f353_353" alt=""></a></p></li></ul><h4><strong>아쉬탕가&nbsp;요가&nbsp;시리즈의&nbsp;종류</strong></h4><p>1)&nbsp;Primary&nbsp;Series<br>몸을&nbsp;정화하고&nbsp;건강을&nbsp;유지하는데&nbsp;필요한&nbsp;모든&nbsp;요소를&nbsp;포함하고&nbsp;있습니다.&nbsp;프라이머리&nbsp;시리즈의&nbsp;수련은&nbsp;햄스트링을&nbsp;늘리고&nbsp;등을&nbsp;펴고&nbsp;강하게&nbsp;만들며,&nbsp;코어&nbsp;근육을&nbsp;더욱&nbsp;강화시켜&nbsp;몸&nbsp;전체를&nbsp;정화합니다.&nbsp;수리야나마스카라,&nbsp;전굴,&nbsp;후굴,&nbsp;비틀기,&nbsp;강력한&nbsp;들어&nbsp;올리기,&nbsp;머리&nbsp;서기&nbsp;등을&nbsp;포함하며&nbsp;일련의&nbsp;자세들을&nbsp;순서에&nbsp;따라&nbsp;능숙하게&nbsp;해낼&nbsp;수&nbsp;있도록&nbsp;꾸준히&nbsp;반복적으로&nbsp;수련하는&nbsp;것이&nbsp;중요하며,&nbsp;요가&nbsp;자세의&nbsp;진전이&nbsp;보이기&nbsp;전까지는&nbsp;다음&nbsp;자세로&nbsp;넘어가지&nbsp;않습니다.<br><br>2)&nbsp;Intermediate&nbsp;Series<br>Second&nbsp;Series라고&nbsp;불리기도&nbsp;하는&nbsp;이&nbsp;시리즈는&nbsp;신경&nbsp;체계를&nbsp;정화하는&nbsp;데&nbsp;중점을&nbsp;준&nbsp;아사나&nbsp;시퀀스로서&nbsp;심화된&nbsp;후굴,&nbsp;고관절을&nbsp;열어주는&nbsp;동작,&nbsp;힘을&nbsp;쓰는&nbsp;자세&nbsp;등을&nbsp;포함하고&nbsp;있습니다.&nbsp;<br><br>3)&nbsp;Advanced&nbsp;Series<br>힘과&nbsp;우아함이&nbsp;균형을&nbsp;이루도록&nbsp;중점을&nbsp;주며,&nbsp;총&nbsp;A,&nbsp;B,&nbsp;C,&nbsp;D&nbsp;4개의&nbsp;어드밴스드&nbsp;시리즈로&nbsp;구성되어&nbsp;있습니다.</p><h4><strong>아쉬탕가&nbsp;마이솔&nbsp;에티켓/팁</strong></h4><p>A. 아쉬탕가&nbsp;요가의&nbsp;경우&nbsp;땀이&nbsp;많이&nbsp;배출되므로&nbsp;위생상&nbsp;개인&nbsp;매트를&nbsp;준비합니다.<br>B. 땀이&nbsp;많이&nbsp;나는&nbsp;수련이므로,&nbsp;수련시&nbsp;타월(개인타올&nbsp;또는&nbsp;요가원에&nbsp;비치된&nbsp;타월)을&nbsp;준비합니다.<br>C. 타인의&nbsp;수련이&nbsp;방해가&nbsp;되지&nbsp;않도록&nbsp;개인위생에&nbsp;신경&nbsp;씁니다(발냄새,&nbsp;진한&nbsp;향수&nbsp;등)<br>D. 스마트폰을&nbsp;가지고&nbsp;수련장에&nbsp;들어오지&nbsp;않습니다.<br>E. 수련장에서는&nbsp;불필요한&nbsp;말을&nbsp;하지&nbsp;않습니다.<br>F. 처음&nbsp;시작&nbsp;시는&nbsp;본인의&nbsp;체력&nbsp;상태에&nbsp;따라&nbsp;수련하고&nbsp;주&nbsp;6회&nbsp;수련을&nbsp;목표로&nbsp;합니다.<br>G. 아사나는&nbsp;지도자가&nbsp;준&nbsp;아사나까지&nbsp;수련하고&nbsp;지도자의&nbsp;허락&nbsp;없이&nbsp;다음&nbsp;아사나를&nbsp;수련하지&nbsp;않습니다.&nbsp;<br>H. 아사나를&nbsp;건너뛰거나&nbsp;순서를&nbsp;바꿔&nbsp;수련하지&nbsp;않습니다.<br>I. 수련&nbsp;시&nbsp;불필요한&nbsp;행동을&nbsp;자제합니다.&nbsp;불필요한&nbsp;행동은&nbsp;습관성이&nbsp;될&nbsp;수&nbsp;있습니다.<br>J. 피니싱&nbsp;시퀀스를&nbsp;종료하고&nbsp;수카사나는&nbsp;수련장&nbsp;뒤쪽에서&nbsp;합니다.<br>K. 수련이&nbsp;끝난&nbsp;후&nbsp;충분한&nbsp;수분을&nbsp;섭취합니다.&nbsp;찬물은&nbsp;수련&nbsp;시&nbsp;몸을&nbsp;데워&nbsp;순환을&nbsp;돕는&nbsp;과정에서&nbsp;방해가&nbsp;되므로&nbsp;좋지&nbsp;않습니다.&nbsp;같은&nbsp;맥락에서&nbsp;수련이&nbsp;끝난&nbsp;후&nbsp;찬물로&nbsp;샤워하지&nbsp;않습니다<br>L. 수련&nbsp;후&nbsp;매트를&nbsp;깨끗하게&nbsp;닦아&nbsp;청결을&nbsp;유지합니다.<br>M. 수련&nbsp;전&nbsp;적어도&nbsp;2시간&nbsp;전부터&nbsp;공복을&nbsp;유지합니다.<br>N. 수련장&nbsp;밖에서는&nbsp;수련에&nbsp;방해가&nbsp;되지&nbsp;않도록&nbsp;큰소리로&nbsp;대화하지&nbsp;않습니다.<br>O. 문데이와&nbsp;여성의&nbsp;생리&nbsp;기간에는&nbsp;수련을&nbsp;하지&nbsp;않습니다.<br>P. 임산부의&nbsp;경우&nbsp;지도자의&nbsp;안내를&nbsp;반드시&nbsp;받습니다.<br>Q. 부상&nbsp;또는&nbsp;병이&nbsp;있는&nbsp;경우&nbsp;지도자와&nbsp;충분한&nbsp;상담&nbsp;후&nbsp;수련을&nbsp;진행합니다.</p><ul><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191201_72/1575171991786LQTVa_JPEG/mosax6TtBW.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191201_114/1575171992395etN4e_JPEG/mosa2iAjX1.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191201_116/1575171992970nh91C_JPEG/mosaqOzGB8.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191201_269/15751719943106oo6n_JPEG/mosaRYTYCh.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191201_271/1575171995447c0RIj_JPEG/mosa2LM8Nt.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191201_24/1575171996187hxEvO_JPEG/mosaZozY6H.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191201_154/1575171996939O9pTF_JPEG/mosaH1KvaY.jpeg?type=f353_353" alt=""></a></p></li><li><p><a target="_blank" rel="noopener noreferrer nofollow" href="https://tristhana.modoo.at/?link=1t4ttnri#"><img src="https://modo-phinf.pstatic.net/20191201_151/15751719977059TFsl_JPEG/mosaZoybZf.jpeg?type=f353_353" alt=""></a></p></li></ul>', '2024-05-07 10:54:37.466+00', '아쉬탕가 요가는 현대의 모든 빈야사(Vinyasa) 요가의 뿌리가 되는 역동적인 요가 수련입니다. ', '{"{\"url\": \"http://google.com\", \"date\": \"2024-05-07T10:54:25.161Z\"}"}', '{"id": "0df4d424-e5b0-4c97-a70a-a6f58698430e", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-f41da9a5-f776-4782-8fb8-1129e5da8b75"}', 1, 'de351e75-782e-4df7-9c1f-6c388c80276d', 0, '{"aerobic": 1, "strength": 1, "endurance": 1, "flexibility": 1}'),
	(15, '2024-06-16 11:08:48.947857+00', '리프레시', '<p>adasdqwdwq</p><p>as</p><p>dasda</p><p>sdas</p><p>d</p><p>qwd</p><p>qwf</p>', '2024-06-16 11:07:09.492+00', 'ㄹ;ㅍ;ㅁㄴㅇㅁㄴㅇㅂㅈㅇㅂ', '{"{\"url\": \"http://google.com\", \"date\": \"2024-06-16T11:05:55.487Z\"}"}', '{"id": "9a5eff14-8170-4616-a5ef-d8cb4f3929d3", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-e35ae702-e541-433c-9577-9256e1fe74c2"}', 1, 'de351e75-782e-4df7-9c1f-6c388c80276d', 0, '{"aerobic": 2, "strength": 3, "endurance": 2, "flexibility": 3}'),
	(13, '2024-06-12 07:43:04.105908+00', 'Vinyasa', '<p><span>빈야사 요가는 대중적으로 가장 많이 알려진 요가 장르 중 하나입니다. 대부분의 요가 학원에서는 빈야사 요가 수업을 기본으로 진행하고 있습니다. 그만큼 인기가 있다는 뜻이며 수강생도 많습니다. 하지만 난이도는 쉬운 편 보다는 어느 정도 레벨이 있는 편에 속합니다. 여러 가지 요가 동작을 쉬지 않고 이어서 하기 때문에 유산소와 근력 운동을 함께 하는 효과가 납니다. (그래서 체력 소모가 꽤 큽니다.)</span></p><p>&nbsp;</p><p><span>그래서 빈야사 요가는 요가 입문자에게는 조금 어려울 수 있습니다. 하지만 체력을 기른 뒤에 꾸준히 하다 보면 운동 효과를 톡톡히 볼 수 있는 장르입니다. 매니아도 많고 그만큼 큰 성취감을 느낄 수 있는 요가 종류입니다. 오늘은 빈야사 요가에 대해 정리해보도록 할게요.</span></p><p>&nbsp;</p><h2><span>1. 빈야사의 어원</span></h2><p><span>빈야사(Vinyasa)는 산스크리트어 ''Vinyas''에서 유래된 단어입니다. </span><strong><span style="color: rgb(0, 109, 215)">''흐르다'', ''연결하다''라는 뜻으로 해석합니다.</span></strong> 즉, 빈야사요가는 호흡과 동작을 끊지 않고 물 흐르듯이 부드럽게 연결하면서 진행하는 요가입니다. 그래서 ''플로우(Flow) 요가''라고 부르기도 합니다.</p><p>&nbsp;</p><h2><span>2. 빈야사 요가의 특징</span></h2><p><span>빈야사 요가는 다양한 요가 장르를 포괄하는 상위 개념입니다. 빈야사 요가가 발전하면서 빈야사를 기본으로 한 많은 요가 장르들이 생겨났습니다. </span><strong><span style="color: rgb(0, 109, 215)">동작을 쉬지 않고 계속 연결해나가는 아쉬탕가 요가, 비트람 요가, 포레스트 요가</span></strong> 등이 모두 빈야사 요가의 아래에 있다고 볼 수 있습니다.</p><p>&nbsp;</p><p><span>빈야사 요가는 동작을 끊지 않고 이어나가기 때문에 유산소 운동에 가까운 동작들이 많습니다. 기본적으로는 선 자세와 엎드린 자세를 계속 반복하면서 전신을 모두 사용합니다. 그래서 요가 초보자나 체력이 부족하신 분들은 처음에 수업을 따라가기가 힘들 수 있습니다. 하지만 꾸준히 수련해 나가면 몸의 근력, 밸런스, 유연성을 골고루 갖출 수 있는 요가 종류입니다.</span></p><p>&nbsp;</p><p></p><p><span><img src="https://blog.kakaocdn.net/dn/5dW14/btrkJmKwEL8/R2EhgQrZuLLDVakVCEkXpk/img.jpg"></span></p><p>빈야사 요가란?</p><p></p><h2><span>3. 우짜이 호흡법</span></h2><p><span>빈야사 요가는 수련 과정에서 동작과 호흡이 서로 분리되지 않고 연결되도록 조절하는 것이 중요합니다. 동작도 중요하지만 호흡에도 계속 신경을 쓰고, 내가 어떻게 호흡하고 있는지 인식해야 합니다. 빈야사 요가의 핵심인 ''우짜이 호흡''에 대해 알아보겠습니다.</span></p><p>&nbsp;</p><h4><span>3-1. 소리내는 법</span></h4><p><span>빈야사 요가 수업에서 수련생들이 ''흐으으으으으음'' 하고 숨을 내뱉는 소리를 들어보셨을 텐데요. 우짜이 호흡법에서는 이 숨소리가 매우 중요한 포인트입니다.&nbsp;</span></p><ul><li><p><span style="color: rgb(51, 51, 51)">손에 입김을 불 때 하는 ''하~'' 소리를 내면서 입을 닫습니다.</span></p></li><li><p><span style="color: rgb(51, 51, 51)">들이마실 때도 ''하~'' 소리를 내면서 입을 닫습니다.</span></p></li><li><p><span style="color: rgb(51, 51, 51)">코로는 공기가 지나가게만 하고 소리는 목구멍으로 냅니다. 코로 숨 쉴 때 나는 ''쌕쌕'' 소리를 내지 않습니다.</span></p></li></ul><p>&nbsp;</p><h4><span>3-2. 흉곽의 움직임</span></h4><p><span>우짜이 호흡은 가슴과 횡경막을 사용해서 공기로 폐를 가득 채우는 호흡법입니다. 따라서 </span><span style="color: rgb(51, 51, 51)">복부의 움직임은 크지 않고 대신 흉곽(갈비뼈)를 크게 움직입니다.</span></p><ul><li><p><span>숨을 가득 들이쉬면서 흉곽 전체를 가득 부풀립니다. 배꼽은 안쪽으로 당겨서 복부가 아닌 가슴으로 호흡합니다.</span></p></li><li><p><span>숨을 깊게 내쉬면서 흉곽과 배꼽을 최대한 조입니다. 한방울 남은 공기까지도 내보낸다는 느낌으로 호흡합니다.&nbsp;</span></p></li></ul><p>&nbsp;</p><p><span>단, 우짜이 호흡은 평소에 우리가 사용하는 호흡법이 아니기 때문에, 잘못 따라 하는 경우 가슴 두근거림 등의 부작용이 생길 수 있습니다. 따라서 요가 선생님 등 전문가에게 제대로 배워서 수행해야 합니다. 요가 학원에서 먼저 배운 다음에 제가 알려드린 설명을 바탕으로 혼자 연습해 보시는 것을 추천합니다.&nbsp;</span></p><p>&nbsp;</p><h2><span>4. 빈야사 시퀀스</span></h2><p><span>빈야사 요가는 매 수업마다 집중적으로 수련하는 부위를 정해서 시퀀스를 짜지만, 기본적으로 반복하는 구조는 같습니다. 빈야사 요가의 아사나 구성과 기본적인 시퀀스를 알려드리겠습니다.</span></p><p>&nbsp;</p><p></p><p><span><img src="https://blog.kakaocdn.net/dn/cSB6Ce/btrkK7ZCmjr/1AD58OkiQqYISP5COocJS1/img.png"></span></p><p>수리야나마스카 동작</p><p></p><ul><li><p><span style="color: rgb(51, 51, 51)">명상이나 우짜이 호흡</span></p></li><li><p><span style="color: rgb(51, 51, 51)">워밍업</span></p></li><li><p><span style="color: rgb(51, 51, 51)">태양 경배 자세(수리야나마스카)</span></p></li><li><p><span style="color: rgb(51, 51, 51)">수련 부위 별 아사나 (어깨, 허리, 골반 등...)</span></p></li><li><p><span style="color: rgb(51, 51, 51)">쿨다운</span></p></li><li><p><span style="color: rgb(51, 51, 51)">송장 자세(사바아사나)</span></p></li></ul><p>&nbsp;</p><p><span>위의 시퀀스에서 특히 ''수리야나마스카(Surya Namaskar)''는 빈야사 요가의 핵심이라고 할 수 있습니다. 빈야사 수업에서 꼭 반복적으로 수련하는 동작이고 코어를 중심으로 전신 근력을 모두 사용하는 동작입니다. 선 자세와 엎드린 자세를 계속 반복하기 때문에 몸의 체온을 높여서 땀을 내고, 전신 밸런스를 잡는 데에 도움이 됩니다.</span></p><p>&nbsp;</p><hr><p><span>지금까지 빈야사 요가에 대해 알아보았습니다. </span><strong><span style="color: rgb(0, 109, 215)">빈야사 요가는 핵심인 ''우짜이 호흡''과 ''수리야나마스카''의 반복을 통해 몸에 열과 땀을 내서 체내 노폐물을 배출하는 데에 도움이 됩니다.</span></strong> 그래서 유산소 운동을 하는 것 처럼 다이어트에도 큰 효과가 있는 요가입니다. 그리고 에너지의 전신 순환을 원활하게 하고 정신 또한 맑아지게 합니다.</p><p>&nbsp;</p><p><span>누구든 자신에게 맞는 요가를 찾아서 꾸준히 수련하시면 반드시 기대했던 것 보다 큰 효과를 얻으실 수 있습니다. 요가의 생명은 꾸준함입니다. 오늘 소개드린 빈야사 요가가 이 글을 읽으신 누군가의 인생 요가가 되길 바라며 마무리 하겠습니다.&nbsp;</span></p>', '2024-06-12 07:40:36.268+00', '빈야사는 운동과 같은 현대 요가 스타일과 아사나(자세) 사이의 부드러운 전환을 주요하게 다루는 요가라고 볼 수 있다', '{"{\"url\": \"https://duman.tistory.com/15http://google.com\", \"date\": \"2024-06-12T07:40:36.266Z\"}"}', '{"id": "d6c8d6cf-e1de-40ba-b933-5fed5966febc", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-7215f096-4040-47b9-b6aa-74d546effa15"}', 1, 'de351e75-782e-4df7-9c1f-6c388c80276d', 0, '{"aerobic": 1, "strength": 1, "endurance": 1, "flexibility": 1}'),
	(14, '2024-06-12 07:48:53.679469+00', 'Hatha', '<p><span><br>하타요가란?</span></p><p><span>하타요가의 </span><strong><span>''하''는 ''태양''을, ''타''는 ''달''</span></strong><span>을 의미하는 것으로 이는 </span><strong><span>음과 양의 조화</span></strong><span>를 뜻한다.</span></p><p><span>음과 양의 조화, 즉 성질이 다른 에너지의 조화를 통하여 육체를 통제하고, 육체와 연결된 정신도 통제하게 되며 그로 인해 삼매에 이르게 하는 요가 수련법이다.</span></p><p><span>그리하여 하타요가의 수련법에는 육체적 수련인 아사나(asana), 호흡 수련인 프라나 야마(pranayama)를 바탕으로 반다(bandha)와 무드라(mudra)라는 수행 방법으로 구성된다.</span></p><p><span>​</span></p><p><span>하타요가의 장점</span></p><p><span>1. 규칙적인 호흡을 도와 심신 안정에 효과적이다.</span></p><p><span>2. 만성 허리 통증, 관절염, 비만에 도움을 준다.</span></p><p><span>3. 두통 완화에 좋다.</span></p><p><span>4. 혈액 순환을 원활하게 하여 피부 미용에 좋다.</span></p><p><span>5. 척추 정렬에 효과적이다.</span></p><p><span>6. 유연성과 근력을 기를 수 있다.</span></p><p><span>​</span></p><p><img src="https://mblogthumb-phinf.pstatic.net/MjAyMjA4MzFfMzAg/MDAxNjYxOTM0NDY2NTcz.roHIDITrIVKEwpWp4IHT4iYm4-iROqPbWfQCIvXisMEg.XvOH2F9IRdoFBUTQvEY2G8S1AE5QlHjRa40P96964i4g.JPEG.natureyogapilates/%ED%95%98%ED%83%80%EC%9A%94%EA%B0%802.jpg?type=w800" alt=""></p><p><span>하타요가의 역사</span></p><p><span>하타요가는 힌두교의 한 종파인 나트파가 전한 요가인데, 13세경 북인도의 성자 고나크나크가 개조했다고 전해진다. 시바파의 탄트라라는 교의에 따라서, 기식이라는 생명 에너지를 이용하여 쿤달리니라는 뱀의 모습을 해서 척추 최하부에 숨어있는 성력을 각성시키고, 그로 인해 에너지가 머무는 몇 군데의 차크라를 경유시키며 척추를 따라 상승하는 것을 지향한다. 그래서 하타요가를 ''쿤달리니 요가'' 라고도 한다.</span></p><p><span>하타요가의 교의와 실습에 대한 고전적 체계는 ''하타요가 프라디피카''라는 서적에 소개되어 있다.</span></p><p><span>​</span></p><p><span>하타요가의 특징</span></p><p><span>하타 요가는 우리가 많이 알고 있는 힐링 요가, 빈야사 요가 , 아쉬탕가 등의 근원이 되는 요가이다.</span></p><p><span>동작을 보다 오래 유지한다는 특징이 있는데, 이로 하여금 몸의 유연성과 근력뿐만 아니라 마음가짐을 함께 다스리며 정신과 심신의 안정을 누리는 데에 도움이 된다.</span></p><p><img src="https://mblogthumb-phinf.pstatic.net/MjAyMjA4MzFfMTY0/MDAxNjYxOTM0NDk1OTgy.hamIxtDLugf4KswnI5Ur2gD-X-z1bjHUbIaNU7O-9JQg.fspfsDih8L51ABvK5fat61V6jfcozBcfR2r9KcbL4NEg.JPEG.natureyogapilates/%ED%95%98%ED%83%80%EC%9A%94%EA%B0%801.jpg?type=w800" alt=""></p>', '2024-06-12 07:44:47.763+00', '하타요가의 수련법에는 육체적 수련인 아사나(asana), 호흡 수련인 프라나 야마(pranayama)를 바탕으로 반다(bandha)와 무드라(mudra)라는 수행 방법으로 구성된다.', '{"{\"url\": \"http://google.com\", \"date\": \"2024-06-12T07:40:36.266Z\"}"}', '{"id": "02160b20-9127-47de-8aef-17df576cd60d", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-146c4d7d-91a6-4a5e-817e-14d0bda5a40a"}', 1, 'de351e75-782e-4df7-9c1f-6c388c80276d', 0, '{"aerobic": 1, "strength": 2, "endurance": 2, "flexibility": 1}');


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."buckets" ("id", "name", "owner", "created_at", "updated_at", "public", "avif_autodetection", "file_size_limit", "allowed_mime_types", "owner_id") VALUES
	('images', 'images', NULL, '2024-05-07 10:28:40.433331+00', '2024-05-07 10:28:40.433331+00', true, false, 10485760, '{image/*}', NULL);


--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--

INSERT INTO "storage"."objects" ("id", "bucket_id", "name", "owner", "created_at", "updated_at", "last_accessed_at", "metadata", "version", "owner_id") VALUES
	('41f3c556-1ba9-40aa-9ec2-4f9d27833dd0', 'images', 'posts/de351e75-782e-4df7-9c1f-6c388c80276d-146c4d7d-91a6-4a5e-817e-14d0bda5a40a', NULL, '2024-06-18 08:54:44.56357+00', '2024-06-18 08:54:53.400171+00', '2024-06-18 08:54:44.56357+00', '{"eTag": "\"f6c91bb01fb0d5f93435a74e21a1ffe1\"", "size": 93087, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-06-18T08:54:54.000Z", "contentLength": 93087, "httpStatusCode": 200}', '49eb609e-7d2d-4a47-b6fd-84e50505ebf6', NULL),
	('f61c0846-532b-42a4-887c-820b986d11ed', 'images', 'posts/de351e75-782e-4df7-9c1f-6c388c80276d-7215f096-4040-47b9-b6aa-74d546effa15', NULL, '2024-06-18 08:54:44.590362+00', '2024-06-18 08:54:59.481794+00', '2024-06-18 08:54:44.590362+00', '{"eTag": "\"caa6c69af6368cc892d53deb22ebc857\"", "size": 219216, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-06-18T08:55:00.000Z", "contentLength": 219216, "httpStatusCode": 200}', '56e0714e-775a-43f1-a74d-5994a25052b7', NULL),
	('7e7fbc13-28c8-46cb-83b4-4b8e00070edb', 'images', 'posts/de351e75-782e-4df7-9c1f-6c388c80276d-e35ae702-e541-433c-9577-9256e1fe74c2', NULL, '2024-06-18 08:54:44.517605+00', '2024-06-18 08:55:06.890606+00', '2024-06-18 08:54:44.517605+00', '{"eTag": "\"3dff6ef6d25c186e0f239781ae06b7b7\"", "size": 23432, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-06-18T08:55:07.000Z", "contentLength": 23432, "httpStatusCode": 200}', '5e99b512-bf14-4a6e-9bc8-085934263f6b', NULL),
	('2f9d953e-9770-4aac-920f-c973f8e7ca7d', 'images', 'posts/de351e75-782e-4df7-9c1f-6c388c80276d-f41da9a5-f776-4782-8fb8-1129e5da8b75', NULL, '2024-06-18 08:54:44.744781+00', '2024-06-18 08:55:14.05832+00', '2024-06-18 08:54:44.744781+00', '{"eTag": "\"21ff19bdb22372cd383e261005c3330c\"", "size": 279415, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2024-06-18T08:55:14.000Z", "contentLength": 279415, "httpStatusCode": 200}', '1816e193-8a97-4ff5-ad9f-2858e3d05de7', NULL);


--
-- Data for Name: s3_multipart_uploads; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: s3_multipart_uploads_parts; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 74, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."categories_id_seq"', 7, true);


--
-- Name: inquiries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."inquiries_id_seq"', 25, true);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."posts_id_seq"', 15, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."users_id_seq"', 1, true);


--
-- PostgreSQL database dump complete
--

RESET ALL;
