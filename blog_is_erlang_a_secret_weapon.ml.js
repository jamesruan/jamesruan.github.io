\h3{Is Erlang a Secret Weapon?}

Recently I'm learning some basics of \link+[the Erlang programming language]{http://www.erlang.org}.

Erlang is an interesting language for its simplicity (which said by some erlang programmer) and its philosophy of \"Let it crash\".
The name is in honor of Danish mathematician and engineer Agner Krarup Erlang.
Its early version is implemented on Prolog and went out form lab in the year 1995, although born as a proprietary language within Ericsson, it went open sourced in 1998, not so long from its application in the telephony industry.

Erlang is now a generally purpose language, while its major advantage is binary data manipulation and concurrency and excellent scaling capability, although its SMP support is not finished until 2006, and the most effcient running environment is a VM.
Google's Go is a concurrency oriented of python-like language with a compiled static code.
Google's V8 and Node.js brings Javascript a dynamic competitor of the field.
Both two language received more attention than Erlang, while their large scale capability and long time durability and robustness lacking industrial proof.
But their competitor Erlang has been serving the instrustial for decades and prove to be good at scaling and running non-stopped serving millions of telephony users.

So why is Erlang still a minority in the minorities of programming language?
Is it poorly implemented or lacking critical applications or libraries? No.
Is it as hard to master as Haskell or Lisp? No. Is it complex and complicating the users as C++ or Javascript? No.
I see it as a perfect balance between art and engineering, between imperative and functional style.
Its language features make it a secret weapon to certain problems, though not the silver bullet.
Erlang is basically a funtional language which encourages programmers writing code in a concurrency-safe way, which differs from the popular way of constructing code.
People tend to use a lot of mutex or R/W for threading synchronization rather than using thread-safe functions or avoiding race conditions.
That makes multi-threading concurrency buggy and hard to be applied generally.
Erlang encourages programmers using multi-process to provides concurrency, and asynchronized event driven model to further improve in-process lock-free concurrency.

Other functional programming language also has those advantages mentioned above, while Erlang still remains outstanding because it's unique way of IPC.
IPC in Erlang is facillaited by keywords, which make the message passing between processes succinct and elegent, and programmes usually don't need to use lower level interfaces provided by OS.
And Erlang community even has mature framework of multi-processing cooperation called OTP (Open Telecom Platform).
Even more, OTP is capable of extending multi-process to multi-server and form an server cluster.

And that cluster can operate 24 hours x 7 days, because you don't need to stop the server to fix some part of it.
Because Erlang's philosophy "Let it crash", codes are almost write in a deterministic way, any unexpeceted error will cause the program to log and exit, and supervisor's will restart the stopped node.
When you know about the unexpeceted exit, you can debug it online, fix it, without disturing cooperating part of it.  Almost every piece of code (if designed properly) could replaced while the code is hot running!

So some just conclude that Erlang is a secret weapon that Ericsson want's to hide from the world, given that the community is not that active and attracting to new developers.
