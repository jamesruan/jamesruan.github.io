
var $=require('jquery');
var jsml=require('jsml-jquery');
var grammar = require('../ebony/javascripts/grammar.js');

function get_file(url){
    var string = $.ajax({url: url, async: false, cache: false, dataType: "text"
    }).responseText;
    return string;
}

$(document).ready( function (){

    var on_content_load = function(){
        $("a.content-target").click(function(){
            function load_content(file){
                var text = get_file(file);
                var parsed = grammar.parse(text);
                $("#content").jsml(parsed);
            }
            var file = $(this).attr("title");
            load_content(file);
        });
    };

    var aside_default = $("a.aside-target.default").attr("title");
    $("#aside").load(aside_default, on_content_load);

    $("a.aside-target").click(function(){
        var file = $(this).attr("title");
        $("#aside").load(file, on_content_load);
    });
});
