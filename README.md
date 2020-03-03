# Backend API
This is the API for the silent-auction backend. The base route is located at: 
https://silent-auction-69.herokuapp.com/

This document describes the endpoints and methods available. 



## Tables: 

### Protected / Auth Routes: /api/auth


### Users: 



### Auctions 


### Items: /api/items

| name           | item_description         | auctions_id         | pictures_id          |
|----------------|--------------------------|---------------------|----------------------|
| *required*     |                          | *foreign key*       | *foreign key*        |


**METHODS**

| GET    | /api/items          | Returns a list of all items  |
|--------|---------------------|------------------------------|
| GET    | /api/items/:id      | Returns an item by its id    |
|--------|---------------------|------------------------------|

POST 

### Bids 


### Pictures 