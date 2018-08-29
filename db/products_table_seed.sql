create table products (
    product_id serial primary key,
    title text,
    description text,
    price decimal
);

insert into products
(title, description, price)
values
('Zoe', '8x10 Charcoal Drawing Original. Zoe was inspired by a moment of feeling low and needing inspiration. She is the first girl in this charcoal series.', 75.00),
('Celeste', '8x10 Charcoal Drawing Original. Celeste spends time gardening, designing, and she dances to deep house music.', 75.00),
('Lia', '8x10 Charcoal Drawing Original. Lia is a modern princess who can still be a bamf! Her hair goes down to her waist and her catholic upbringing influences her gothic heroine chic style to this day.' 75.00),
('Analiza', 'Analiza hails from Spanish Town Jamaica and has a style from the 1850s. She has a free and independant will and chooses to remain so.' 75.00),
('Celestine', 'Meet Celestine the Selkie. She emerges from the water, sheds her seal fur to reveal her beautiful womanly form.', 75.00),
('Hitomi', 'Hitmoi lives in Yokoshoma and works part time at an Izakaya. Her favorite class of sake is Junmai Daiginjo and her passion is International Studies.', 75.00),
('Leo', 'Leo likes to chill among the banana leaves. Exploring and travelling are what delight her most. Named after a star sign she was born for adventure and kicking ass.', 75.00),
('Mia', 'Mia is the rock for many people in her life. She is confident, beautiful, brave but even she needs gets weighed down every now and then.', 75.00);
