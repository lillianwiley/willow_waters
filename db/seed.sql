create table images(
    img_id serial primary key,
    img text,
    product_id integer,
    main boolean
);
create table cart (
    cart_id serial primary key,
    guest_id integer,
    user_id integer,
    product_id integer,
    quantity integer
);

create table portfolio (
    portfolio_id serial primary key,
    img text,
    display boolean
)

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
    price float,
    category_id integer,
    foreign key(category_id) references categories(category_id)
);

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

insert into products
(title, description, price, category_id)
values
('Zoe', '8x10 Charcoal Drawing Original. Zoe was inspired by a moment of feeling low and needing inspiration. She is the first girl in this charcoal series.', 75.00, 3),
('Celeste', '8x10 Charcoal Drawing Original. Celeste spends time gardening, designing, and she dances to deep house music.', 75.00, 3),
('Lia', '8x10 Charcoal Drawing Original. Lia is a modern princess who can still be a bamf! Her hair goes down to her waist and her catholic upbringing influences her gothic heroine chic style to this day.', 75.00, 3),
('Analiza', '8x10Analiza hails from Spanish Town Jamaica and has a style from the 1850s. She has a free and independant will and chooses to remain so.', 75.00, 3),
('Celestine', 'Meet Celestine the Selkie. She emerges from the water, sheds her seal fur to reveal her beautiful womanly form.', 75.00, 3),
('Hitomi', 'Hitmoi lives in Yokoshoma and works part time at an Izakaya. Her favorite class of sake is Junmai Daiginjo and her passion is International Studies.', 75.00, 3),
('Leo', 'Leo likes to chill among the banana leaves. Exploring and travelling are what delight her most. Named after a star sign she was born for adventure and kicking ass.', 75.00, 3),
('Mia', 'Mia is the rock for many people in her life. She is confident, beautiful, brave but even she needs gets weighed down every now and then.', 75.00, 3),
('State of Texas Wildflowers', '4x8 Watercolor of Texas surrounded by wildflowers.', 25.00, 2),
('4 little cacti in a row', "8x12 Watercolor Print. If you don't have that magical green thumb, worry no more! This little print won't die on you and brings life to everything we love about cacti and succulents without worrying about watering!", 25.00, 2),
('Custom Wedding Stationary', 'Moody spring wedding vibes for these save the dates! I would love to work with you and design a full wedding stationary set for your special day. Contact me for a quote', null, 1),
('Little Elephant flower girl card', 'Whoever you may want to be your flower girl, ask them with a custom card they will love!', null, 1),
('Floral Wedding Suite', 'Watercolor floral wedding suite. This was designed for a beautiful whimsical romantic wedding.', null, 1),
('Wedding shoes', 'Whether you are a no heel kind of gal, or just want a pair of custom shoes to commemerate your big day, you will love these customizeable shoes! They are water resistant and make a beautiful statement. Prices may vary based on design and detail.', 85.00, 1),
('Watercolor Pet Portraits', 'Treat yourself to a wonderful watercolor portrait of you fur babies! Price is determined by size of portrait and design you request.', null, 4),
('Home Portrait', 'Celebrate your home with a custom watercolor portrait.', null, 4),
('Holiday Stationary', 'Spread your holiday cheer by sending your loved ones some custom holiday stationary like this Poinsetta themed set!', null, 5),
('Holiday Stationary', 'Enjoy the holiday season with your custom garland stationary set.', null, 5);
