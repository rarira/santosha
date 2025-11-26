SET session_replication_role = replica;

--
-- Data for Name: auth.users (Admin accounts)
--
INSERT INTO auth.users (id, email, encrypted_password, email_confirmed_at, created_at, updated_at, raw_app_meta_data, raw_user_meta_data, is_super_admin, role, aud, confirmation_token, email_change_token_new, recovery_token, email_change_token_current) VALUES ('ff648a44-398c-4671-b868-f1763155c475', 'rarira@gmail.com', '$2a$10$raKe1H8QAc.eORVNLLbCt.vnQuZeben/ouz3NZoQQF8PBL5VE65Cy', '2025-11-26 09:27:57.611668+00', '2025-11-26 09:27:57.611668+00', '2025-11-26 09:27:57.611668+00', '{"provider": "email", "providers": ["email"]}'::jsonb, '{}'::jsonb, false, 'authenticated', 'authenticated', NULL, NULL, NULL, NULL) ON CONFLICT (id) DO NOTHING;

--
-- Data for Name: auth.identities
--
INSERT INTO auth.identities (provider_id, id, user_id, identity_data, provider, last_sign_in_at, created_at, updated_at) VALUES ('ff648a44-398c-4671-b868-f1763155c475', 'ff648a44-398c-4671-b868-f1763155c475', 'ff648a44-398c-4671-b868-f1763155c475', '{"sub": "ff648a44-398c-4671-b868-f1763155c475", "email": "rarira@gmail.com", "email_verified": false, "phone_verified": false}', 'email', now(), now(), now());

--
-- Data for Name: categories
--
INSERT INTO public.categories (id, created_at, name, extra_info) VALUES (1, '2024-05-08 08:45:07.672191+00', '요가', 'ClassScore') ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, extra_info = EXCLUDED.extra_info;
INSERT INTO public.categories (id, created_at, name, extra_info) VALUES (2, '2024-05-08 08:48:32.011796+00', '라이프스타일', NULL) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, extra_info = EXCLUDED.extra_info;

--
-- Data for Name: centers
--
INSERT INTO public.centers (id, name, address, description, naver_place_id, social_link, additional_info, created_at, updated_at) VALUES (1, '우노요가스튜디오', '경기도 용인시 수지구 성복2로 76번길26-6 샤르망1차 3층', NULL, '20670849', NULL, NULL, now(), now()) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, address = EXCLUDED.address, description = EXCLUDED.description, naver_place_id = EXCLUDED.naver_place_id, social_link = EXCLUDED.social_link, additional_info = EXCLUDED.additional_info, updated_at = now();
INSERT INTO public.centers (id, name, address, description, naver_place_id, social_link, additional_info, created_at, updated_at) VALUES (2, '아름다운핫요가 1호점', '경기 화성시 봉담읍 동화길 93-12 701호 702호', NULL, '21852415', 'https://www.instagram.com/beautifulhotyoga/', NULL, now(), now()) ON CONFLICT (id) DO UPDATE SET name = EXCLUDED.name, address = EXCLUDED.address, description = EXCLUDED.description, naver_place_id = EXCLUDED.naver_place_id, social_link = EXCLUDED.social_link, additional_info = EXCLUDED.additional_info, updated_at = now();

--
-- Data for Name: posts
--
INSERT INTO public.posts (id, created_at, title, body, published_at, teaser, category_id, views, image, extra_info) VALUES (5, now(), 'Ashtanga', '아쉬탕가 요가는 동적이고 체계적인 시퀀스를 따르는 파워풀한 요가 스타일입니다.', now(), '힘과 유연성을 동시에 키우는 파워풀한 요가', 1, 0, '{"id": "0df4d424-e5b0-4c97-a70a-a6f58698430e", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-f41da9a5-f776-4782-8fb8-1129e5da8b75.jpg"}', '{"aerobic": 1, "strength": 1, "endurance": 1, "flexibility": 1}') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, body = EXCLUDED.body, published_at = EXCLUDED.published_at, teaser = EXCLUDED.teaser, category_id = EXCLUDED.category_id, image = EXCLUDED.image, extra_info = EXCLUDED.extra_info;
INSERT INTO public.posts (id, created_at, title, body, published_at, teaser, category_id, views, image, extra_info) VALUES (13, now(), 'Vinyasa', '빈야사 요가는 호흡과 움직임을 연결하는 흐름이 있는 요가입니다.', now(), '호흡과 움직임의 조화로운 흐름', 1, 0, '{"id": "d6c8d6cf-e1de-40ba-b933-5fed5966febc", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-7215f096-4040-47b9-b6aa-74d546effa15.jpg"}', '{"aerobic": 1, "strength": 1, "endurance": 1, "flexibility": 1}') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, body = EXCLUDED.body, published_at = EXCLUDED.published_at, teaser = EXCLUDED.teaser, category_id = EXCLUDED.category_id, image = EXCLUDED.image, extra_info = EXCLUDED.extra_info;
INSERT INTO public.posts (id, created_at, title, body, published_at, teaser, category_id, views, image, extra_info) VALUES (14, now(), 'Hatha', '하타 요가는 기본 자세를 천천히 익히는 전통적인 요가 스타일입니다.', now(), '기초부터 탄탄하게 배우는 전통 요가', 1, 0, '{"id": "02160b20-9127-47de-8aef-17df576cd60d", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-146c4d7d-91a6-4a5e-817e-14d0bda5a40a.jpg"}', '{"aerobic": 1, "strength": 2, "endurance": 2, "flexibility": 1}') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, body = EXCLUDED.body, published_at = EXCLUDED.published_at, teaser = EXCLUDED.teaser, category_id = EXCLUDED.category_id, image = EXCLUDED.image, extra_info = EXCLUDED.extra_info;
INSERT INTO public.posts (id, created_at, title, body, published_at, teaser, category_id, views, image, extra_info) VALUES (15, now(), '리프레시', '리프레시 요가는 편안하고 회복에 중점을 둔 요가입니다.', now(), '몸과 마음을 편안하게 회복시키는 요가', 1, 0, '{"id": "9a5eff14-8170-4616-a5ef-d8cb4f3929d3", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-e35ae702-e541-433c-9577-9256e1fe74c2.jpg"}', '{"aerobic": 2, "strength": 3, "endurance": 2, "flexibility": 3}') ON CONFLICT (id) DO UPDATE SET title = EXCLUDED.title, body = EXCLUDED.body, published_at = EXCLUDED.published_at, teaser = EXCLUDED.teaser, category_id = EXCLUDED.category_id, image = EXCLUDED.image, extra_info = EXCLUDED.extra_info;

--
-- Data for Name: schedules
--
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Vinyasa', 'studio', 1, 1, '10:00:00', '11:00:00', '초급~중급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Hatha', 'studio', 1, 1, '19:00:00', '20:00:00', '초급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Ashtanga', 'studio', 1, 2, '10:00:00', '11:30:00', '중급~고급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('리프레시', 'studio', 1, 2, '19:30:00', '20:30:00', '모든 레벨');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Vinyasa', 'studio', 1, 3, '10:00:00', '11:00:00', '초급~중급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Hatha', 'studio', 1, 3, '19:00:00', '20:00:00', '초급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Ashtanga', 'studio', 1, 4, '10:00:00', '11:30:00', '중급~고급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('리프레시', 'studio', 1, 4, '14:00:00', '15:00:00', '모든 레벨');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Vinyasa', 'studio', 1, 5, '10:00:00', '11:00:00', '초급~중급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Hatha', 'studio', 1, 5, '19:00:00', '20:00:00', '초급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Ashtanga', 'studio', 1, 6, '09:00:00', '10:30:00', '중급~고급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('Vinyasa', 'studio', 1, 6, '11:00:00', '12:00:00', '초급~중급');
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES ('리프레시', 'studio', 1, 6, '14:00:00', '15:00:00', '모든 레벨');

--
-- Reset sequences to correct values
--
SELECT setval('public.categories_id_seq', (SELECT MAX(id) FROM public.categories));
SELECT setval('public.centers_id_seq', (SELECT MAX(id) FROM public.centers));
SELECT setval('public.posts_id_seq', (SELECT MAX(id) FROM public.posts));
SELECT setval('public.schedules_id_seq', (SELECT MAX(id) FROM public.schedules));

SET session_replication_role = DEFAULT;

