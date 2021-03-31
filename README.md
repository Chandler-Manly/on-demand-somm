# ON-DEMAND-SOMM

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Architecture](#component-architecture)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)
- [Contributions](#contributions--instructions)
<br>

## Overview

_ON-DEMAND-SOMM is a platform for wine novices and aficionados to aggregate their tasting notes. Our team saw an opportunity to simplify and improve this critical part of the wine education process. Moreover, this web-application is a resource to aid wine enthusiasts during their journey._


<br>

## MVP

_ON-DEMAND-SOMM is a responsive React and Ruby on Rails web application that provides a platform for wine enthusiasts of all levels to log comprehensive tasting notes and keep track of their experiences. The public view of the site includes the landing page, complete wine list, and our latest blog post. Once registered and logged in, the user will have full access to the user dashboard enabling cellar management, and full CRUD capabilities on their contributed wines. Secondarily, this platform offers a cellar management tracker where clients can keep track of their preciously stored vino collection._

<br>

## Goals

- _Further develop Ruby on Rails knowledge_
- _Further develop React JS knowledge_
- _Practice Product Management from idea to MVP launch_

<br>

## Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      React, Axios       | _Builds front-end._ |
|   React Router Dom   | _Provides client-side navigation._ |
| Auth, bcrypt, JWT | _User authentication._ |
|     Ruby on Rails      | _Builds back-end._ |


<br>

## Client (Front End)

## Wireframes

![Landing Screen](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197087/Landing_Screen_obnsi6.png)

![Login Screen](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/Login_Screen_zkvzob.png)

![Blog](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/Blog_Screen_ookayv.png)

![Blog Detail](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/Blog-Detail_Screen_bznpax.png)

![All Wine](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/Wine-All_Screen_yzycuu.png)

![Wine Detail](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/Wine-Detail_Screen_vhutn9.png)

![User Dashboard](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/User-Dashboard_Screen_nnpg6q.png)

![User Dashboard - Tasting](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/User-Dashboard_Screen_tasting_notes_cyrar7.png)

![User Dashboard - Cellar](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/User-Dashboard_Screen_cellar_biawcy.png)

![User Create Wine](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/User-Dashboard_Screen_tasting_notes_create_g8b0ke.png)

![User Wine Details](https://res.cloudinary.com/dygk00sc0/image/upload/v1617197086/User-Wine-Detail_Screen_mq4bqx.png)

## Component Tree

[ON-DEMAND-SOMM Component Tree](https://whimsical.com/pets-r-us-BYYb4aEnZ6ZQp5euw1pyeM)

***

## Component Architecture

``` structure
src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
|__ components/
      |__ Wine
      |__ WineCard
      |__ WineCards
      |__ Blog
      |__ BlogCard
      |__ BlogCards
      |__ Search
      |__ shared
      |__ modal
|__ screens/
      |__ Landing.jsx
      |__ Login / Register
      |__ Wines.jsx
      |__ WineCreate
      |__ WineDetails/Edit/Delete
      |__ User Dashboard
      |__ User Dashboard Cellar
      |__ User Dashboard Tasting
      |__ Blogs
      |__ Blog Details
|__ containers/
      |__ MainContainer
      |__ WineContainer
      |__ BlogContainer
|__ services/
      |__ apiConfig           
      |__ wines.js
      |__ blog.js
      |__ auth.js            
|__ layouts/
      |__ layout.jsx
```

## Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| File Structure, dependencies, and route layout    |    L     |     3 hrs      |     TBD     |    TBD    |
| Backend setup: Build a Ruby on Rails server, exposing RESTful JSON endpoints. Build a database with at least 3 tables, Utilize Rails to define models for interacting with the database.Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between non-User tables|    H     |     10 hrs      |     TBD     |     TBD     |
| Frontend setup: styling with flexbox, full CRUD, implement react-router, consume data from Rails API |    H     |     25 hrs      |     TBD     |     TBD     |
| Unit Testing (may require additional research but should be testing throughout dev-process) |    H     |     3 hrs      |     TBD     |     TBD     |
| Post MVP (Let's tackle payments so we can get paid $$$) |    H     |     10 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     51 hrs      |     TBD     |     TBD     |



<br>

## Server (Back End)

***
## ERD Model

![ON-DEMAND-SOMM ERD](https://res.cloudinary.com/dygk00sc0/image/upload/v1617201897/on-demand-somm_tbpyis.png)
<br>

***

## Post-MVP

- Implement Stripe payment processing
- Add content for premium study package 
- Allow users to 'like' or 'dislike' a wine
- Create Wine recommendation algorithm (based on likes)
- Blind-Taste Test Exercise (User presented with clues and will have to provide answer wines)
- Improve SEO and market on social media platforms
- Invest proceeds into the Sapphire Coding Scholarship Fund 

***

## Code Showcase
- Placeholder
- Placeholder

***
## Code Issues & Resolutions
- Placeholder
- Placeholder

***
## Contributing

1. Fork and clone
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request


<br>

***
***
<br>
<br>

## FOR DEVELOPMENT PURPOSES ONLY: P4 ASSETS
Payment: https://stripe.com/docs/stripe-js/react
3rd Party API: https://www.programmableweb.com/api/wine-searcher-rest-api-v1
3rd Party API: https://www.programmableweb.com/api/cocktails-rest-api-v1
Chat Bots: https://www.freecodecamp.org/news/how-to-build-a-chatbot-with-react/

Sentiment Analysis: https://www.programmableweb.com/api/summarizebot-rest-api-v10

UI component modal with positive z index

Design Tip: Slight gradient on header 

Mailer: https://medium.com/@dflores_89085/using-actionmailer-with-react-redux-822e0b575dc3

Bootstap icons: https://icons.getbootstrap.com/icons/chat-right-dots-fill/
Material UI: https://material-ui.com/store/?utm_source=docs&utm_medium=referral&utm_campaign=home-store#populars

Wine animation: https://www.animatedimages.org/cat-wine-706.htm?page=2


Screen readers: Follow up! 

Social media accounts to link:<br> 
FB: https://www.facebook.com/On-Demand-Somm-109988864519549<br>
IG: https://www.instagram.com/on_demand_somm/<br>
Twitter: https://twitter.com/ondemandsomm<br>

It takes a village provide shoutouts to these additional resources: 
Guildsomm <br>
CMS <br>
WSET <br>
Wine Enthusiast<br> 
Decanter<br>
Robert Parker<br>
Vinous <br>

Icons 
https://www.w3schools.com/icons/default.asp

fas fa-user-circle <br>
far fa-user-circle<br>
far fa-thumbs-down<br>
far fa-thumbs-up<br>
fas fa-shopping-bag	<br>
fab fa-stripe-s	<br>
far fa-comment 	<br>


Unsplash Photos <br>
https://images.unsplash.com/photo-1596142332133-327e2a0ff006?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dmluZXlhcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
https://images.unsplash.com/photo-1567590997610-cca4b1fd9027?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8dmluZXlhcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
https://images.unsplash.com/photo-1573062337052-54ad1468bb5e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8dmluZXlhcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
https://images.unsplash.com/photo-1567072629554-20e689de2400?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8dmluZXlhcmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
https://images.unsplash.com/photo-1603229663670-fcd42046959f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fHZpbmV5YXJkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60

food&wine<br>
https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZCUyMGFuZCUyMHdpbmV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60
https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2QlMjBhbmQlMjB3aW5lfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60
https://images.unsplash.com/photo-1507434965515-61970f2bd7c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGZvb2QlMjBhbmQlMjB3aW5lfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60
https://images.unsplash.com/photo-1601925228316-1225f01caa12?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDF8fGZvb2QlMjBhbmQlMjB3aW5lfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60

https://images.unsplash.com/photo-1485963631004-f2f00b1d6606?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fGZvb2QlMjB3aW5lfGVufDB8fDB8&auto=format&fit=crop&w=400&q=60

farm to table<br>
https://images.unsplash.com/photo-1459663148042-6d8cb9340411?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGZhcm0lMjB0byUyMHRhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60
https://images.unsplash.com/photo-1567539549213-cc1697632146?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZmFybSUyMHRvJTIwdGFibGV8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60
https://images.unsplash.com/photo-1470072768013-bf9532016c10?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGZhcm0lMjB0byUyMHRhYmxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60

My tasting notes <br>
https://images.unsplash.com/photo-1517842645767-c639042777db?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHRhc3RpbmclMjBub3Rlc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60

https://images.unsplash.com/photo-1513618827672-0d7c5ad591b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHRhc3RpbmclMjBub3Rlc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60

Cellar management <br> 
https://images.unsplash.com/photo-1570339012089-0e2dcfbb4439?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzZ8fGNlbGxhcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60
