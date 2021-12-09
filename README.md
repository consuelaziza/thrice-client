User Stories
404: As an anon/user I can see a 404 page if I try to reach a page that does not exist so that I know it's my fault
Signup: As an anon I can sign up in the platform so that I can start adding my old clothes I want to sell
Login: As a user I can login to the platform so that I can see my favorite closets
Logout: As a user I can logout from the platform so no one else can use it
Add sell items: As a user I can add an item so that I can sell it
List of other members/items: As a user I want to see the other closets so that I can choose one I want to purchase from



Backlog
Search other users: As a user I want to search other closets by catagory 
Add to favorites: As a user I want to add other users to favorite(or follow) so that I can go back to that users closet.
User profile:
Sell to Thrice: if you want to sell to thrice we will then refurbish the item and sell it ourselves either as newly designed item or only slightly upgraded.
Connect with local seamstresses/seamsters/tailors: The ability to connect with Thrice as a seamstress/seamster/tailor and monetize your skills making new items with old clothes. This program will be called Thrickle so(sew) you can make a nickle with Thrice.
The Thrickle NFT: we will create the Thrickle NFT platform to collect the different patterns that come from the collabs with the Thrickle seamstresses/seamsters/tailors. 
The Thrickle collection: This collection will be high end do to the high level of skill we have a ranking system and auctions.

see other users profile and their products
Geo Location:

Client
Routes
/ - Homepage
/auth/signup - Signup form
/auth/login - Login form
/product - product list
/product/create - create a item
/produtcs/:id - item detail
/profile - my details and products for sale

404

Home Page (public)
Sign in Page (anon only)
Log in Page (anon only)
Product List Page (public only)
Product Create (user only)
Product Detail Page (public only)
My Profile Page (user only)
404 Page (public)
Components
Product Card component
Input: product: any
Output: favorite(productId: string, on: boolean)
Search component
Output: change(terms: string)
IO
Services
Auth Service
auth.login(user)
auth.signup(user)
auth.logout()
auth.getUser() // synchronous
Product Service
product.list()
product.create(data)
product.detail(id)
product.addFavorite(id)
product.removeFavorite(id)
Server
Models

User model

username - String // required
email - String // required & unique
password - String // required
favorites - [ObjectID<Product>]
product - [ObjectID<Product>]
image - String

Product model

writer - ObjectID<User> // required
title - String // required
description - String
price - Number
images - Array
sold - Number
views - Number
quantity - String

API Endpoints/Backend Routes

GET /auth
POST /auth/signup

POST /auth/login
POST /auth/logout
POST /user/me/favorite
DELETE /user/me/favorite/:productId

GET /product
POST /create-product
PATCH/edit-product/:id
GET /product/:id


Links
Trello/Kanban
Link to your trello board or picture of your physical board

Git
The url to your repository and to your deployed project

Client repository Link 
https://github.com/consuelaziza/thrice-client

Server repository Link
https://github.com/consuelaziza/thrice-server

Deploy Link

Slides
The url to your presentation slides

Slides Link