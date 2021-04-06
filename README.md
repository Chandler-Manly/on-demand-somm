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

- Deployed via [Netlify](https://infallible-booth-6493d7.netlify.app/)

<br>

## MVP

_ON-DEMAND-SOMM is a responsive, React, and Ruby on Rails web application that provides a platform for wine enthusiasts of all levels to log comprehensive tasting notes and keep track of their beverage experiences. The public view of the site includes the landing page, complete wine list, and our latest blog post. Once registered and logged in, the user will have full access to the user dashboard enabling cellar management, and full CRUD capabilities on their contributed wines. Secondarily, this platform offers a cellar management tracker where clients can keep track of their preciously stored vino collection._

_MVP is full crud on user wines - per proposal review with David and Shay._

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

![ON-DEMAND-SOMM Component Tree](https://res.cloudinary.com/dygk00sc0/image/upload/v1617209200/on-demand-somm_2x_k6suos.png)  

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
| File Structure, dependencies, and route layout    |    L     |     3 hrs      |     4 hrs     |    TBD    |
| Backend setup: Build a Ruby on Rails server, exposing RESTful JSON endpoints|    H     |     2 hrs      |     1 hr     |     TBD     |
| Build a database with at least 3 tables|    H     |     3 hrs      |     1 hr    |     TBD     |
| Utilize Rails to define models for interacting with the database|    H     |     3 hrs      |     5 hrs     |     TBD     |
| Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between non-User tables|    H     |     2 hrs      |     3 hrs     |     TBD     |
| Frontend setup: styling with flexbox|    H     |     10 hrs      |     12 hrs     |     TBD     |
| Full CRUD, implement react-router|    H     |     10 hrs      |     12 hrs     |     TBD     |
| Consume data from Rails API |    H     |     5 hrs      |     2 hrs     |     TBD     |
| Unit Testing (may require additional research but will be testing throughout dev-process) |    H     |     3 hrs      |     3 hrs     |     TBD     |
| Post MVP (Let's tackle payments so we can get paid $$$) |    H     |     10 hrs      |     TBD     |     TBD     |
| TOTAL               |          |     51 hrs      |     43 hrs     |     TBD     |



<br>

## Server (Back End)

***
## ERD Model

![ON-DEMAND-SOMM ERD](https://res.cloudinary.com/dygk00sc0/image/upload/v1617398434/on-demand-somm_hpff9a.png)
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

## Open-Source: Contributing

1. Fork and clone
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request


<br>

***
***