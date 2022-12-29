## What is Buffer in Nodejs?
Buffer is a container in memory that has fixed size length that gets some data and quickly sends it to another place.

We can do some processes with it

## Why we need buffers in nodejs?
Js didn't have a good way to deal with raw data and nodejs has the web server technology so it has to deal with network requests and files transmission.

Files are trasmited over the network in chunks which is obviously
Raw binary data (0s and 1s) so it should have some good way to do that.
This is the reason why buffers are introduced.

## Featues of Buffer:

>  If i put a string that is longer than the buffer, it will only write the first 6 characters

> buffer kinda act like an array but the difference is that it is a fixed size and it is a global object of nodejs

> There are several mathods to deal with buffers.
