SET session_replication_role = replica;

--
-- Data for Name: categories
--
INSERT INTO public.categories (id, created_at, name, extra_info) VALUES
(1, '2024-05-08 08:45:07.672191+00', '요가', 'ClassScore'),
(2, '2024-05-08 08:48:32.011796+00', '라이프스타일', NULL);

--
-- Data for Name: centers
--
INSERT INTO public.centers (id, name, address, phone, email, description, link, created_at, updated_at) VALUES
(1, '우노요가스튜디오', '경기도 용인시 수지구 성복2로 76번길26-6 샤르망1차 3층', NULL, NULL, NULL, 'https://place.map.kakao.com/20670849', now(), now());

--
-- Data for Name: posts (Yoga Classes)
--
INSERT INTO public.posts (id, created_at, title, body, published_at, teaser, category_id, views, image, extra_info) VALUES
(5, now(), 'Ashtanga', '아쉬탕가 요가는 동적이고 체계적인 시퀀스를 따르는 파워풀한 요가 스타일입니다.', now(), '힘과 유연성을 동시에 키우는 파워풀한 요가', 1, 0, 
'{"id": "0df4d424-e5b0-4c97-a70a-a6f58698430e", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-f41da9a5-f776-4782-8fb8-1129e5da8b75.jpg"}', 
'{"aerobic": 1, "strength": 1, "endurance": 1, "flexibility": 1}'),

(13, now(), 'Vinyasa', '빈야사 요가는 호흡과 움직임을 연결하는 흐름이 있는 요가입니다.', now(), '호흡과 움직임의 조화로운 흐름', 1, 0,
'{"id": "d6c8d6cf-e1de-40ba-b933-5fed5966febc", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-7215f096-4040-47b9-b6aa-74d546effa15.jpg"}',
'{"aerobic": 1, "strength": 1, "endurance": 1, "flexibility": 1}'),

(14, now(), 'Hatha', '하타 요가는 기본 자세를 천천히 익히는 전통적인 요가 스타일입니다.', now(), '기초부터 탄탄하게 배우는 전통 요가', 1, 0,
'{"id": "02160b20-9127-47de-8aef-17df576cd60d", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-146c4d7d-91a6-4a5e-817e-14d0bda5a40a.jpg"}',
'{"aerobic": 1, "strength": 2, "endurance": 2, "flexibility": 1}'),

(15, now(), '리프레시', '리프레시 요가는 편안하고 회복에 중점을 둔 요가입니다.', now(), '몸과 마음을 편안하게 회복시키는 요가', 1, 0,
'{"id": "9a5eff14-8170-4616-a5ef-d8cb4f3929d3", "fullPath": "images/posts/de351e75-782e-4df7-9c1f-6c388c80276d-e35ae702-e541-433c-9577-9256e1fe74c2.jpg"}',
'{"aerobic": 2, "strength": 3, "endurance": 2, "flexibility": 3}');

--
-- Data for Name: schedules (Weekly Schedule for Each Class)
--
INSERT INTO public.schedules (title, class_type, center_id, day_of_week, start_time, end_time, additional_info) VALUES
-- Sunday (0) - No classes

-- Monday (1)
('Vinyasa', 'studio', 1, 1, '10:00', '11:00', '초급~중급'),
('Hatha', 'studio', 1, 1, '19:00', '20:00', '초급'),

-- Tuesday (2)
('Ashtanga', 'studio', 1, 2, '10:00', '11:30', '중급~고급'),
('리프레시', 'studio', 1, 2, '19:30', '20:30', '모든 레벨'),

-- Wednesday (3)
('Vinyasa', 'studio', 1, 3, '10:00', '11:00', '초급~중급'),
('Hatha', 'studio', 1, 3, '19:00', '20:00', '초급'),

-- Thursday (4)
('Ashtanga', 'studio', 1, 4, '10:00', '11:30', '중급~고급'),
('리프레시', 'studio', 1, 4, '14:00', '15:00', '모든 레벨'),

-- Friday (5)
('Vinyasa', 'studio', 1, 5, '10:00', '11:00', '초급~중급'),
('Hatha', 'studio', 1, 5, '19:00', '20:00', '초급'),

-- Saturday (6)
('Ashtanga', 'studio', 1, 6, '09:00', '10:30', '중급~고급'),
('Vinyasa', 'studio', 1, 6, '11:00', '12:00', '초급~중급'),
('리프레시', 'studio', 1, 6, '14:00', '15:00', '모든 레벨');

--
-- Storage objects for post images
--
INSERT INTO storage.objects (name, bucket_id, owner, created_at, updated_at, last_accessed_at, metadata) VALUES 
('posts/de351e75-782e-4df7-9c1f-6c388c80276d-7215f096-4040-47b9-b6aa-74d546effa15.jpg', 'images', NULL, '2025-11-25 10:56:59.91654+00', '2025-11-25 10:56:59.91654+00', '2025-11-25 10:56:59.91654+00', '{"eTag": "\"caa6c69af6368cc892d53deb22ebc857\"", "size": 219216, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2025-11-25T10:56:59.902Z", "contentLength": 219216, "httpStatusCode": 200}'),
('posts/de351e75-782e-4df7-9c1f-6c388c80276d-e35ae702-e541-433c-9577-9256e1fe74c2.jpg', 'images', NULL, '2025-11-25 10:56:59.974523+00', '2025-11-25 10:56:59.974523+00', '2025-11-25 10:56:59.974523+00', '{"eTag": "\"3dff6ef6d25c186e0f239781ae06b7b7\"", "size": 23432, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2025-11-25T10:56:59.966Z", "contentLength": 23432, "httpStatusCode": 200}'),
('posts/de351e75-782e-4df7-9c1f-6c388c80276d-146c4d7d-91a6-4a5e-817e-14d0bda5a40a.jpg', 'images', NULL, '2025-11-25 10:56:59.974709+00', '2025-11-25 10:56:59.974709+00', '2025-11-25 10:56:59.974709+00', '{"eTag": "\"f6c91bb01fb0d5f93435a74e21a1ffe1\"", "size": 93087, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2025-11-25T10:56:59.966Z", "contentLength": 93087, "httpStatusCode": 200}'),
('posts/de351e75-782e-4df7-9c1f-6c388c80276d-f41da9a5-f776-4782-8fb8-1129e5da8b75.jpg', 'images', NULL, '2025-11-25 10:56:59.985523+00', '2025-11-25 10:56:59.985523+00', '2025-11-25 10:56:59.985523+00', '{"eTag": "\"21ff19bdb22372cd383e261005c3330c\"", "size": 279415, "mimetype": "image/jpeg", "cacheControl": "max-age=3600", "lastModified": "2025-11-25T10:56:59.978Z", "contentLength": 279415, "httpStatusCode": 200}');

SET session_replication_role = DEFAULT;
