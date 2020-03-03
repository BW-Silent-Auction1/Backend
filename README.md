# Backend API
This is the API for the silent-auction backend. The base route is located at: 
https://silent-auction-69.herokuapp.com/

This document describes the endpoints and methods available. 



## Tables: 

### Protected / Auth Routes: /api/auth


### Users: 



### Auctions 


### Items: /api/items
`auctions_id` references `id` field of `auctions` table, and `pictures_id` references `id` field of `pictures` table 

| id             | name           | item_description         | auctions_id         | pictures_id          |
-----------------|----------------|--------------------------|---------------------|----------------------|
| created by sql | *required*     |                          | *foreign key*       | *foreign key*        |


**METHODS**

GET METHODS
/api/items  -- Returns a list of all items in the database
/api/items/:id  -- Returns a specific item in the database by the `id` passed in the url



POST METHODS 
/api/items  -- Adds an `item` to the database that references an auction
example: 

```
{
    "name": "cool item name",
    "item_description": "This is a wicked sick widget. Bid away!",
    "auctions_id": "1",
}
```

### Bids 


### Pictures 