SET session_replication_role = replica;

--
-- PostgreSQL database dump
--

-- \restrict dSdYIJpEfnf4VeTWJSKK64BFRO5pUXP3xiXmp3rnXOMezB9O1bAkEOyqcNWqh7m

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
	('00000000-0000-0000-0000-000000000000', '543e420f-5c83-42e1-aa17-8525816803d3', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"rarira@gmail.com","user_id":"bfe5efd7-6ad4-45b7-9896-d41370c0e63f","user_phone":""}}', '2025-11-26 10:27:36.884957+00', ''),
	('00000000-0000-0000-0000-000000000000', '3b67f7e5-cd13-463d-8e2a-d01503fc1c41', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"rarira@gmail.com","user_id":"4ecb83fb-674d-4f0f-9009-40a4f87b35e1","user_phone":""}}', '2025-11-26 10:30:22.90999+00', ''),
	('00000000-0000-0000-0000-000000000000', '0a93b903-b770-4bc2-a19f-9a0b6e0e7d50', '{"action":"user_signedup","actor_id":"00000000-0000-0000-0000-000000000000","actor_username":"service_role","actor_via_sso":false,"log_type":"team","traits":{"provider":"email","user_email":"rarira@gmail.com","user_id":"94c8b404-5e60-48d7-a802-d3f28282ae57","user_phone":""}}', '2025-11-26 10:31:06.236028+00', ''),
	('00000000-0000-0000-0000-000000000000', '76be063f-577f-4463-b5cb-c10a1ec94a71', '{"action":"login","actor_id":"94c8b404-5e60-48d7-a802-d3f28282ae57","actor_username":"rarira@gmail.com","actor_via_sso":false,"log_type":"account","traits":{"provider":"email"}}', '2025-11-26 13:41:47.435692+00', '');


--
-- Data for Name: flow_state; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: users; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."users" ("instance_id", "id", "aud", "role", "email", "encrypted_password", "email_confirmed_at", "invited_at", "confirmation_token", "confirmation_sent_at", "recovery_token", "recovery_sent_at", "email_change_token_new", "email_change", "email_change_sent_at", "last_sign_in_at", "raw_app_meta_data", "raw_user_meta_data", "is_super_admin", "created_at", "updated_at", "phone", "phone_confirmed_at", "phone_change", "phone_change_token", "phone_change_sent_at", "email_change_token_current", "email_change_confirm_status", "banned_until", "reauthentication_token", "reauthentication_sent_at", "is_sso_user", "deleted_at", "is_anonymous") VALUES
	('00000000-0000-0000-0000-000000000000', '94c8b404-5e60-48d7-a802-d3f28282ae57', 'authenticated', 'authenticated', 'rarira@gmail.com', '$2a$10$V0i5br4bNg.mPL0sRd66Tua.2Vhz7e/2BWSfh20kcCQYwlhSIGQP2', '2025-11-26 10:31:06.236878+00', NULL, '', NULL, '', NULL, '', '', NULL, '2025-11-26 13:41:47.436597+00', '{"provider": "email", "providers": ["email"]}', '{"email_verified": true}', NULL, '2025-11-26 10:31:06.233447+00', '2025-11-26 13:41:47.438998+00', NULL, NULL, '', '', NULL, '', 0, NULL, '', NULL, false, NULL, false);


--
-- Data for Name: identities; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."identities" ("provider_id", "user_id", "identity_data", "provider", "last_sign_in_at", "created_at", "updated_at", "id") VALUES
	('94c8b404-5e60-48d7-a802-d3f28282ae57', '94c8b404-5e60-48d7-a802-d3f28282ae57', '{"sub": "94c8b404-5e60-48d7-a802-d3f28282ae57", "email": "rarira@gmail.com", "email_verified": false, "phone_verified": false}', 'email', '2025-11-26 10:31:06.234973+00', '2025-11-26 10:31:06.235+00', '2025-11-26 10:31:06.235+00', '1361cbf6-3f6c-4a01-a69e-b1964efcc0f3');


--
-- Data for Name: instances; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_clients; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: sessions; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."sessions" ("id", "user_id", "created_at", "updated_at", "factor_id", "aal", "not_after", "refreshed_at", "user_agent", "ip", "tag", "oauth_client_id", "refresh_token_hmac_key", "refresh_token_counter") VALUES
	('19cad1cf-c54c-40df-9f6a-67d44281b551', '94c8b404-5e60-48d7-a802-d3f28282ae57', '2025-11-26 13:41:47.436641+00', '2025-11-26 13:41:47.436641+00', NULL, 'aal1', NULL, NULL, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/142.0.0.0 Safari/537.36', '172.18.0.1', NULL, NULL, NULL, NULL);


--
-- Data for Name: mfa_amr_claims; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."mfa_amr_claims" ("session_id", "created_at", "updated_at", "authentication_method", "id") VALUES
	('19cad1cf-c54c-40df-9f6a-67d44281b551', '2025-11-26 13:41:47.439358+00', '2025-11-26 13:41:47.439358+00', 'password', '20598f21-2582-446d-ad5b-816aaa78c34d');


--
-- Data for Name: mfa_factors; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: mfa_challenges; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_authorizations; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: oauth_consents; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: one_time_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--



--
-- Data for Name: refresh_tokens; Type: TABLE DATA; Schema: auth; Owner: supabase_auth_admin
--

INSERT INTO "auth"."refresh_tokens" ("instance_id", "id", "token", "user_id", "revoked", "created_at", "updated_at", "parent", "session_id") VALUES
	('00000000-0000-0000-0000-000000000000', 1, 'q574ej6wpqki', '94c8b404-5e60-48d7-a802-d3f28282ae57', false, '2025-11-26 13:41:47.438131+00', '2025-11-26 13:41:47.438131+00', NULL, '19cad1cf-c54c-40df-9f6a-67d44281b551');


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
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 1, true);


--
-- PostgreSQL database dump complete
--

-- \unrestrict dSdYIJpEfnf4VeTWJSKK64BFRO5pUXP3xiXmp3rnXOMezB9O1bAkEOyqcNWqh7m

RESET ALL;

--
-- ============================================================
-- PUBLIC SCHEMA DATA
-- ============================================================
--

--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."categories" ("id", "created_at", "name", "extra_info") VALUES
	(1, '2024-05-08 08:45:07.672191+00', '요가', 'ClassScore'),
	(2, '2024-05-08 08:48:32.011796+00', '라이프스타일', NULL);


--
-- Data for Name: centers; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."centers" ("id", "name", "address", "description", "additional_info", "created_at", "updated_at", "naver_place_id", "social_link") VALUES
	(2, '아름다운핫요가 1호점', '경기 화성시 봉담읍 동화길 93-12 701호 702호', NULL, NULL, '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00', '21852415', 'https://www.instagram.com/beautifulhotyoga/'),
	(1, '우노요가스튜디오', '경기도 용인시 수지구 성복2로 76번길26-6 샤르망1차 3층', NULL, NULL, '2025-11-26 10:26:22.029911+00', '2025-11-26 13:42:37.89101+00', '1247004434', 'https://www.instagram.com/unoyogastudio/'),
	(3, '아름다운핫요가 2호점', '경기 화성시 봉담읍 상리중심상가길 28-18 MG빌딩 308호', NULL, NULL, '2025-11-26 13:43:05.062653+00', '2025-11-26 13:43:05.062653+00', '1365716576', 'https://www.instagram.com/beautifulhotyoga/');


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- Data for Name: posts; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."posts" ("id", "created_at", "title", "body", "published_at", "teaser", "backlinks", "image", "category_id", "views", "extra_info") VALUES
	(5, '2025-11-26 10:26:22.029911+00', 'Ashtanga', '아쉬탕가 요가는 동적이고 체계적인 시퀀스를 따르는 파워풀한 요가 스타일입니다.', '2025-11-26 10:26:22.029911+00', '힘과 유연성을 동시에 키우는 파워풀한 요가', NULL, '{"id": "0df4d424-e5b0-4c97-a70a-a6f58698430e", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-f41da9a5-f776-4782-8fb8-1129e5da8b75.jpg"}', 1, 0, '{"aerobic": 1, "strength": 1, "endurance": 1, "flexibility": 1}'),
	(13, '2025-11-26 10:26:22.029911+00', 'Vinyasa', '빈야사 요가는 호흡과 움직임을 연결하는 흐름이 있는 요가입니다.', '2025-11-26 10:26:22.029911+00', '호흡과 움직임의 조화로운 흐름', NULL, '{"id": "d6c8d6cf-e1de-40ba-b933-5fed5966febc", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-7215f096-4040-47b9-b6aa-74d546effa15.jpg"}', 1, 0, '{"aerobic": 1, "strength": 1, "endurance": 1, "flexibility": 1}'),
	(14, '2025-11-26 10:26:22.029911+00', 'Hatha', '하타 요가는 기본 자세를 천천히 익히는 전통적인 요가 스타일입니다.', '2025-11-26 10:26:22.029911+00', '기초부터 탄탄하게 배우는 전통 요가', NULL, '{"id": "02160b20-9127-47de-8aef-17df576cd60d", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-146c4d7d-91a6-4a5e-817e-14d0bda5a40a.jpg"}', 1, 0, '{"aerobic": 1, "strength": 2, "endurance": 2, "flexibility": 1}'),
	(15, '2025-11-26 10:26:22.029911+00', '리프레시', '리프레시 요가는 편안하고 회복에 중점을 둔 요가입니다.', '2025-11-26 10:26:22.029911+00', '몸과 마음을 편안하게 회복시키는 요가', NULL, '{"id": "9a5eff14-8170-4616-a5ef-d8cb4f3929d3", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-e35ae702-e541-433c-9577-9256e1fe74c2.jpg"}', 1, 0, '{"aerobic": 2, "strength": 3, "endurance": 2, "flexibility": 3}');


--
-- Data for Name: schedules; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."schedules" ("id", "title", "class_type", "center_id", "day_of_week", "start_time", "end_time", "additional_info", "created_at", "updated_at") VALUES
	(1, 'Vinyasa', 'studio', 1, 1, '10:00:00', '11:00:00', '초급~중급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(2, 'Hatha', 'studio', 1, 1, '19:00:00', '20:00:00', '초급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(3, 'Ashtanga', 'studio', 1, 2, '10:00:00', '11:30:00', '중급~고급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(4, '리프레시', 'studio', 1, 2, '19:30:00', '20:30:00', '모든 레벨', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(5, 'Vinyasa', 'studio', 1, 3, '10:00:00', '11:00:00', '초급~중급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(6, 'Hatha', 'studio', 1, 3, '19:00:00', '20:00:00', '초급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(7, 'Ashtanga', 'studio', 1, 4, '10:00:00', '11:30:00', '중급~고급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(8, '리프레시', 'studio', 1, 4, '14:00:00', '15:00:00', '모든 레벨', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(9, 'Vinyasa', 'studio', 1, 5, '10:00:00', '11:00:00', '초급~중급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(10, 'Hatha', 'studio', 1, 5, '19:00:00', '20:00:00', '초급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(11, 'Ashtanga', 'studio', 1, 6, '09:00:00', '10:30:00', '중급~고급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(12, 'Vinyasa', 'studio', 1, 6, '11:00:00', '12:00:00', '초급~중급', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00'),
	(13, '리프레시', 'studio', 1, 6, '14:00:00', '15:00:00', '모든 레벨', '2025-11-26 10:26:22.029911+00', '2025-11-26 10:26:22.029911+00');


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."categories_id_seq"', 2, true);


--
-- Name: centers_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."centers_id_seq"', 3, true);


--
-- Name: inquiries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."inquiries_id_seq"', 1, false);


--
-- Name: posts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."posts_id_seq"', 15, true);


--
-- Name: schedules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."schedules_id_seq"', 13, true);


--
-- PostgreSQL database dump complete
--

-- \unrestrict uOOKuFC6fZEGRGmBPGTOCUMTexuOFuRS9NRxUZ43QUdMf1cutV1w07fdHyEqBlw

RESET ALL;

--
-- Reset sequences to correct values
--
SELECT setval('public.categories_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.categories));
SELECT setval('public.centers_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.centers));
SELECT setval('public.posts_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.posts));
SELECT setval('public.schedules_id_seq', (SELECT COALESCE(MAX(id), 1) FROM public.schedules));

SET session_replication_role = DEFAULT;
