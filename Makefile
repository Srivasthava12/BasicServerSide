
default: build

dc-build:
	docker-compose build

sh: dc-build
	docker-compose run --entrypoint=sh --service-ports app

start: dc-build
	docker-compose run --service-ports app npm run dev

build:
	docker build -t webserver .

prod: build
	docker run -it -p 8080:80 -p 443:443 webserver