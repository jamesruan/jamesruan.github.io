browserify:
	browserify -x jquery -x highlight.js -x json-stringify-safe -x jsml-jquery -x grammar javascripts/index.js |uglifyjs > javascripts/index.min.js
