.PHONY: all dev build preview clean

all: build

dev:
	npm --prefix portfolio run dev

build:
	npm --prefix portfolio run build

preview:
	npm --prefix portfolio run preview

clean:
	rm -rf docs portfolio/dist
