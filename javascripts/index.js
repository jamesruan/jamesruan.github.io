var $ = require('jquery');
var ko = require('knockout');
var ML= require('ML');
var aside=[
{show:ko.observable(true), title:"Profile", target:"profile.ml.js", child: false},
{show:ko.observable(false), title:"Projects", target:"project.ml.js", child: [
    {show: ko.observable(true), title:"Ebony", target:"project_ebony.ml.js", child: false}
]},
{show: ko.observable(false), title:"Collection", target:"collection.ml.js", child: [
    {show: ko.observable(false), title:"Music", target:"collection_music.ml.js", child: [
        {show: ko.observable(true), title:"Theory", target:"collection_music_theory.ml.js", child: false}
    ]}
]},
{show: ko.observable(false), title:"Blog", target:"blog.ml.js", child: [
        {show: ko.observable(true), title:"Promise is a Monad", target:"blog_promise_is_a_monad.ml.js", child: false}
    ]}
];

var viewModel = function(aside){
    var self = this;
    self.aside = aside;
    self.theme = ko.observable("ebony/stylesheets/main_ivory.css");
    self.showToggle = function(){
        if(this.child){
            if(this.show()){
                this.show(false);
            }else{
                this.show(true);
            }
        }
        ML.render_file(this.target, $("#content"), false);
    };
    self.toggle_theme = function (){
            var ebony = "ebony/stylesheets/main_ebony.css";
            var ivory = "ebony/stylesheets/main_ivory.css";
            if(self.theme() === ebony){
                self.theme(ivory);
                $("#main_css").attr("href", ivory);
            }else{
                self.theme(ebony);
                $("#main_css").attr("href", ebony);
            }
        }
    ML.render_file(self.aside[0].target, $("#content"), false);
};

ko.applyBindings(new viewModel(aside));

