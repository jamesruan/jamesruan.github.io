browserify:
	browserify -x jquery -x highlight.js -x json-stringify-safe -x jsml-jquery javascripts/index.js |uglifyjs > javascripts/index.min.js
