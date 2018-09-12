select *
from cart
join products on products.product_id = cart.product_id
join images on products.product_id = images.product_id
where user_id = $1
order by cart.cart_id desc;