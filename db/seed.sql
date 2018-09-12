drop table if exists images;
create table images(
    img_id serial primary key,
    img_url text,
    product_id integer,
    main boolean
);

drop table if exists cart;
create table cart (
    cart_id serial primary key,
    guest_id integer,
    user_id integer,
    product_id integer,
    quantity integer
);

drop table if exists portfolio;
create table portfolio (
    portfolio_id serial primary key,
    img text,
    display boolean
);

drop table if exists users;
create table users (
    id serial primary key,
    user_name varchar(180),
    email varchar(180),
    picture text,
    auth_id text
);

drop table if exists products;
create table products (
    product_id serial primary key,
    title text,
    description text,
    price varchar(80),
    category_id integer,
    foreign key(category_id) references categories(category_id)
);

drop table if exists categories;
create table categories(
category_id serial primary key,
category varchar(180)
);

insert into categories
(category)
values
('Weddings'),
('Floral and Cacti'),
('Charcoal'),
('Custom'),
('Other');

insert into images(img_url, product_id, main)
values
('https://s3-us-west-1.amazonaws.com/willow-waters/7d68ebcc-145e-43ca-9a3f-17ba14f8814c-Zoe.jpg', 1, true),('https://s3-us-west-1.amazonaws.com/willow-waters/44c2ac86-dfc5-401b-9133-7aad4300df21-real_celeste.jpg', 2, true),('https://s3-us-west-1.amazonaws.com/willow-waters/cd038e83-a9dd-420b-9c0d-c2834ff44ee5-Lia.jpg', 3, true),('https://s3-us-west-1.amazonaws.com/willow-waters/f1b7f8a3-89dc-4d5f-a0c3-7f86464609ab-Analiza.jpg', 4,  true),('https://s3-us-west-1.amazonaws.com/willow-waters/0469903f-8caa-4455-a4ea-3acf3fafa54b-celestine.jpg', 5,  true),('https://s3-us-west-1.amazonaws.com/willow-waters/40170342-5e39-415d-90a5-8de04b6a97ac-hitomi.jpg', 6, true),('https://s3-us-west-1.amazonaws.com/willow-waters/cbd58691-94ed-4bb2-bece-cdd6e89ac877-Leo.jpg', 7, true),('https://s3-us-west-1.amazonaws.com/willow-waters/0a6dc498-170f-4da2-ad85-d6cdce9a7a0c-mia.jpg', 8,  true),('https://s3-us-west-1.amazonaws.com/willow-waters/25a5c750-ffbe-4e26-be81-c8a4a5795db1-texas.jpg', 9,  true),('https://s3-us-west-1.amazonaws.com/willow-waters/e8dbaf17-4ea1-4068-adc9-682a9717491c-Cacti_2-6x8.jpg', 10, true),('https://s3-us-west-1.amazonaws.com/willow-waters/fa3307b4-cb3b-4b8d-9af5-958a9ba7a959-Cacti_1-6x6.jpg', 11, true),('https://s3-us-west-1.amazonaws.com/willow-waters/3c50679e-507a-4902-87bb-e869cf060bce-Multli_Prickly-Pear.jpg', 12, true),('https://s3-us-west-1.amazonaws.com/willow-waters/31f9f7f0-f7f3-4878-885c-d8f632430e00-Leaves-Blue.jpg', 13, true),('https://s3-us-west-1.amazonaws.com/willow-waters/c44324ab-c349-4114-96fe-e24884b369c2-Leaves-Light-6x6.jpg', 14, true),('https://s3-us-west-1.amazonaws.com/willow-waters/1da38435-4d80-4fe2-8312-63e3f07aed75-Leaves-Fall-6x6.jpg', 15, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/f22e5367-4ed2-4cdc-b21d-7f4d262db628-Blue-China.jpg', 16, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/610cbfe6-4998-4780-aa92-94a5df976feb-Floral-Poster-12x18.jpg', 17, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/7f4aee0f-eb10-4361-a0b7-d1e30dd80319-Gold-Flowers-6x6.jpg', 18, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/4e4dff73-5fe3-4209-8907-8a4eb9d1bec6-floral_bouquet-12x12.jpg', 19, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/867e892f-144a-4a3d-aa29-af42e96b17cc-Mini-Floral-6x8.jpg', 20, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/add30784-6296-4dfa-ad4d-3b3a3537b0f0-Random-Flowers-12x12.jpg', 21, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/41a312a6-9d76-4137-84a8-0e4837bd6bc8-wedding-set.jpg', 22, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/74dab5df-990e-4767-8a45-26a9458cd265-wedding_shoes.jpg', 23, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/64e2d58c-8c23-425b-8642-31a2b98dc0aa-pet_portrait.jpg', 24, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/3efedd01-ae97-4ea3-9e95-4cbbfd94d525-pacittis-home.jpg', 25, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/cb74f797-5d1e-4a0b-8b1e-a458d35772bf-citrus-shoes.jpg', 26,true),
('https://s3-us-west-1.amazonaws.com/willow-waters/f92036a2-e63b-4730-b144-54cd6e50f040-holiday_stationary.jpg', 27, true),
('https://s3-us-west-1.amazonaws.com/willow-waters/3ecead14-9292-4ac2-8cc5-d71b67f9d563-Modern-Shapes-12x18.jpg', 28, true);


insert into products
(title, description, price, category_id)
values
('Zoe', '8x10 Charcoal Drawing Original. Zoe was inspired by a moment of feeling low and needing inspiration. She is the first girl in this charcoal series.', 75.00, 3),
('Celeste', '8x10 Charcoal Drawing Original. Celeste spends time gardening, designing, and she dances to deep house music.', 75.00, 3),
('Lia', '8x10 Charcoal Drawing Original. Lia is a modern princess who can still be a bamf! Her hair goes down to her waist and her catholic upbringing influences her gothic heroine chic style to this day.', 75.00, 3),
('Analiza', '8x10Analiza hails from Spanish Town Jamaica and has a style from the 1850s. She has a free and independant will and chooses to remain so.', 75.00, 3 ),
('Celestine', 'Meet Celestine the Selkie. She emerges from the water, sheds her seal fur to reveal her beautiful womanly form.', 75.00, 3),
('Hitomi', 'Hitmoi lives in Yokoshoma and works part time at an Izakaya. Her favorite class of sake is Junmai Daiginjo and her passion is International Studies.', 75.00, 3 ),
('Leo', 'Leo likes to chill among the banana leaves. Exploring and travelling are what delight her most. Named after a star sign she was born for adventure and kicking ass.', 75.00, 3 ),
('Mia', 'Mia is the rock for many people in her life. She is confident, beautiful, brave but even she needs gets weighed down every now and then.', 75.00, 3 ),
('State of Texas Wildflowers', '4x8 Watercolor of Texas surrounded by wildflowers.', 25.00, 2),
('4 little cacti in a row', E'6x8 Watercolor Print. If you don\'t have that magical green thumb, worry no more! This little print won\'t die on you and brings life to everything we love about cacti and succulents without worrying about watering!', 25.00, 2),
('Cacti Collage', '6x6 Watercolor Print', 25.00, 2),
('Geo Cacti', '8x10 Watercolor Print', 30.00, 2),
('Blue leaves', '6x6 Watercolor Print', 25.00, 2),
('Green leaves', '6x6 Watercolor Print', 25.00, 2),
('Purple leaves', '6x6 Watercolor Print', 25.00, 2),
('Blue China', '12x12 Watercolor Print', 30.00, 2),
('Blue Floral Poster', '12x18 Watercolor Poster Print', 40.00, 2),
('Gold Flowers', '6x6 Textured Gold Flowers', 30.00, 2),
('Floral Bouquet', '12x12 Watercolor Print', 40.00, 2),
('Mini Floral Arrangement', '6x8 Watercolor Print', 25.00, 2),
('Flower collage', '12x12 Watercolor Print', 30.00, 2),
('Custom Wedding Suite', 'Watercolor floral wedding suite. This was designed for a beautiful whimsical romantic wedding. I would love to work with you and design a full wedding stationary set for your special day. Contact me for a quote', null, 1),
('Wedding shoes', 'Whether you are a no heel kind of gal, or just want a pair of custom shoes to commemerate your big day, you will love these customizeable shoes! They are water resistant and make a beautiful statement. Prices may vary based on design and detail.', 85.00, 1),
('Watercolor Pet Portraits', 'Treat yourself to a wonderful watercolor portrait of you fur babies! Price is determined by size of portrait and design you request.', null, 4),
('Home Portrait', 'Celebrate your home with a custom watercolor portrait.', null, 4),
('Citrus Shoes', 'For a citrusy themed Florida wedding, these are magical and fresh on your feet! Shoes can be done with any customized painting. They are water resistant and add a beautiful pop of color. Prices may vary based on design and detail.', 85.00, 4),
('Holiday Stationary', 'Spread your holiday cheer by sending your loved ones some custom holiday stationary like this Poinsetta themed set!', null, 4 ),
('Modern Shapes', '12x18 Watercolor Print', 40.00, 2);