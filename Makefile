browserify:
	browserify -x jquery -x knockout -x highlight.js -x json-stringify-safe -x jsml-jquery -x grammar -x ML -x Sammy javascripts/index.js |uglifyjs > javascripts/index.min.js
