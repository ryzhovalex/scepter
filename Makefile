export t=.
export args

lint:
	npx eslint --fix $(args) src/$(t)

test:
	ng test

check: lint test

dev:
	ng s --port 3000
