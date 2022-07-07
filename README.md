# Food Order Systems

## About
This project is for study some topics:
  - PostgreSQL
  - TypeORM
  - Front-end API consuming
  - Docker compose configuration with multiples DOCKERFILEs

Out of scope:
  - Beautiful Front-end (the objective is study how to consume an API)
  - multiples routes
  - clean code (again, the objective is test, try somethings new)

____________________________________________________

## Quick start

``` bash
# clone this repository
git clone https://github.com/dezzare/food-order-delivery.git

# Build with Docker
cd food-order-delivery
docker compose up --build

# Front-end: http://localhost:3000
# Back-end: http://localhost:5000

# Stopping containers 
docker compose down 

# Cleaning
docker images
docker rmi #ImageId
```


