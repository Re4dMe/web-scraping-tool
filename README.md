### About
The project is under construction and some features are not implemented yet. However, it offers a blueprint for building a distributed web scraping system designed to support data-driven professionals, such as data scientists or ml researchers, gather large amounts of data from the internet and keep it regularly updated.

![web-scrap-system](https://github.com/user-attachments/assets/be434959-7377-44ab-8bb5-f71b5e1e1151)

The goal of developing this web scraping system is to efficiently extract web data for use in data mining or machine learning applications. It allow users to schedule tasks of scraping specific sites (please see the diagram for details). For example, a quant might needs to retreive market news everyday 9:00, and open-close price every 1 hour between 9:30 a.m. - 4:00 p.m. Or a data scientists might want to analysis texts from social media every week. 

The system is designed to be distributed by leverage Rabbitmq. Tasks added by user will be published to a queue, and any node (each running multiple web crawlers) can consume these tasks, fetch the corresponding data from the web, and write the results to a PostgreSQL server.

### Deploy Rabbitmq & Postgres
Rabbitmq:
```
docker pull rabbitmq
```
Postgres:   
```
docker pull postgres
```
Create container then set password of postgres as `yourpassword`
```
docker run --name postgres -e POSTGRES_PASSWORD=yourpassword -d postgres
```
Run psql command in docker container: 
```
docker exec -it <container-id> psql -U postgres 
```
Install modules
```
cd client
npm install
```
```
cd server
npm install
```
Compile with tsc and run
```
cd client
npm run tsc-build
npm run start
```
```
cd server
npm run tsc-build
npm run start
```
