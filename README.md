# Backend API
This is the API for the silent-auction backend. The base route is located at: 
https://silent-auction-69.herokuapp.com/

This document describes the endpoints and methods available. 



## Tables: 

### Protected / Auth Routes: /api/auth


### Users: 



### Auctions 


### Items --   /api/items

| id             | name           | item_description         | auctions_id         | pictures_id          |
-----------------|----------------|--------------------------|---------------------|----------------------|
| created by sql | *required*     |                          | *foreign key*       | *foreign key*        |

`auctions_id` references `id` field of `auctions` table, and `pictures_id` references `id` field of `pictures` table 



**METHODS**

`GET` METHODS for `items`
*/api/items*  -- Returns a list of all items in the database
*/api/items/:id*  -- Returns a specific item in the database by the `id` passed in the url



`POST` METHODS for `items`
*/api/items*  -- Adds an `item` to the database that references an auction
example: 

```
{
    "name": "cool item name",
    "item_description": "This is a wicked sick widget. Bid away!",
    "auctions_id": "1",
}
```

### Bids 
| id                  | user_id                             | auctions_id                         | amount                               |
|---------------------|-------------------------------------|-------------------------------------|--------------------------------------|
| *created by db*     | *req, references users table*       | *req, references auctions table*    | *integer in cents, required*         |

`user_id` references `id` field of `users` table. `auctions_id` references `id` field of `auctions` table. `amount` is an integer **IN CENTS**. 

**METHODS**
`GET` methods for `bids`
*/api/bids*   -- returns all bids in the database
*/api/bids/:id    -- returns a specific bid based on the `id` passed in the url


### Pictures 