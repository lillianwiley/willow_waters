update cart
set quantity = $1
where product_id = $2 and user_id = $3;
