select *
from products
join images on products.product_id = images.product_id
where category_id = $1;