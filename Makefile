all: build publish
.PHONY: all build publish


build:
	docker build -t corka149/mini-pwa-s:latest .


publish:
	docker push corka149/mini-pwa-s:latest
