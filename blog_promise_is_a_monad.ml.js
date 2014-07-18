\h3{Promise is a Monad}

The Promise here is defined as \cite{\"A \emphasis{promise} represents the eventual result of an asynchronous operation\"} \link+[Promises/A+]{http://promisesaplus.com/}.

The first time I heard about promise, I did some quick search to see what it likes. And I concluded that promise is just a monad.

\h4{Monad}

I'd learned haskell programming for a few hours before I met the complicated \emphasis{monad}, and I gave up the learning right there. The word monad is like a ghost, which haunted me whenever I'm trying to learn some functional programming.

Then some day I happend click into \link+[this page]{http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html}. The pictures are such a good illustration that until then I know what a monad really like, in the most basic form though.

So, I'd like to rephrase that page in Javascript below.

\h5{Functors}

Functors are functions that wrap a value in the context, and define how to apply a function to the value inside its context.

\code+[javascript]{begin}

//Basic form:
function Functor(a){
    this.a = a;
    return this;
}

//fmap : Functor(a) -> (a->b) -> Functor(b)
Functor.prototype.fmap = function(f){
    return new Functor(f(this.a));
};

//Maybe is a Functor:
function Maybe(a){
    if(a !== undefined){
        this.key = "Just";
        this.value = a;
    }else{
        this.key = "Nothing";
        this.value = undefined;
    }
    return this;
}

Maybe.prototype.fmap = function(f){
    if(this.key === "Just"){
        return new Maybe(f(this.value));
    }else{
        return new Maybe();
    }
}

var inc = function(i){
    return i+1;
}

console.log(new Maybe(3).fmap(inc));
//{ key: 'Just', value: 4 }
console.log(new Maybe().fmap(inc));
//{ key: 'Nothing', value: undefined }

\code+{end}

\h5{Applicatives}

Applicatives are functions that wrap values or functions, and that knows how to apply function wrapped in a context to a value wrapped in context.
\code+[javascript]{begin}

//Basic form:
function Applicatives(a){
    this.a = a;
    return this;
}

//lift : Applicatives(a) -> Applicatives(a->b) -> Applicatives(b)

Applicatives.prototype.lift = function(a){
    return new Applicatives(a.a(this.a));
};

//Counter is an Applicatives:

function Counter(a){
    this.value = a;
}

Counter.prototype.set_counter = function(counter){
    return(new Counter(counter.value(this.value)));
};

var inc_counter = new Counter(function(a){
    return a+1;
});
var reset_counter = new Counter(function(a){
    return 0;
});

var a = new Counter(0).set_counter(inc_counter);
console.log(a);
//{ value: 1 }
console.log(a.set_counter(inc_counter));
//{ value: 2 }
console.log(a.set_counter(reset_counter));
//{ value: 0 }
\code+{end}

\h5{Monads}

So comes the monads. Monads are functions that wrap values, and knows how to apply functions that returns a wrapped value to a wrapped value.


\code+[javascript]{begin}

//Basic form:
function Monads(a){
    this.a = a;
    return this;
}

//bind : Monads(a) -> (a -> Monads(b)) -> Monads(b)

Monads.prototype.bind = function(f){
    return f(this.a);
};

//Promise as a monad:

//Promise: (a::(resolve, reject) -> Promise (b)) -> Promise(b)
function Promise(i){
    if(i!=null)
    {
        assert.ok(i instanceof Function);
        i = i(this.resolve, this.reject);
        this.value = i.value;
        this.rejected = i.rejected;
    }
}

//resolve: a -> Promise(a)
Promise.prototype.resolve = function(value){
    var r = new Promise();
    r.value = value;
    r.rejected = false;
    return r;
};

//reject: a -> Promise(a)
Promise.prototype.reject = function(value){
    var r = new Promise();
    r.value = value;
    r.rejected = true;
    return r;
};

//then: a -> (a -> (b::(resolve,reject) -> Promise(c))) -> Promise(c)
Promise.prototype.then = function(success, error){
    //success or error should be a -> (b::(resolve,reject) -> Promise(c)) or null
    var x;
    if(this.rejected){
        try{
            if(error==null){
                x = null;
            }else{
                assert.ok(error instanceof Function);
                x = error(this.value);
                //x: a::(resolve, reject) -> Promise(b);
            }
        }catch(e)
        {
            return this.reject(e);
        }
        if(x==null){
            return this.reject(this.value);
        }else{
            return new Promise(x);
        }
    }else{
        try{
            if(success==null){
                x = null;
            }else{
                assert.ok(success instanceof Function);
                x = success(this.value);
                //x: a::(resolve, reject) -> Promise(b);
            }
        }catch(e)
        {
            return this.reject(e);
        }
        if(x==null){
            return this.resolve(this.value);
        }else{
            return new Promise(x);
        }
    }
};

//inc: a -> (b::(resolve, reject) -> Promise(c))
var inc = function(a){
    return function(resolve, reject){
        if(a>0){
            return resolve(a+1);
        }else if(a<0){
            return resolve(a-1);
        }else{
            return reject(a);
        }
    };
};

//id: a -> (b -> (c::(resolve, reject) -> Promise(d)))
//id is used to reset the value wrapped in Promise
var id = function(id){
    return(function(a){
        return(function(resolve, reject){
            return resolve(id);
        });
    });
}

//print: a -> (b::(resolve, reject) -> Promise(c))
var print = function(a){
    return function(resolve, reject){
        console.log("value wrapped in Promise is: " + a);
        return resolve(a);
    };
}

var a = new Promise(function(resolve, reject){
    console.log("startup");
    return resolve("startup");
});
//{ value: 'startup', rejected: false }
b = a.then(id(0));
//{ value: 0, rejected: false }
c = b.then(inc);
//{ value: 0, rejected: true }
d = b.then(id(1)).then(inc).then(inc);
//{ value: 3, rejected: false }
e = d.then(inc).then(print);
//value wrapped in Promise is: 4
\code+{end}
