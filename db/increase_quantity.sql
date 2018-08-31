update cart
set quantity = quantity +1;

update cart
set quantity = quantity -1
where quantity > 0