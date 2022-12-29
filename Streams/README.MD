## What is stream in BackendEnd development?

Let's understand the streams in nodejs for now!

Stream takes the data in chunks and process on it in realtime.

## Why do we need streams?

Let's understand this with an example:

Suppose client is uploading a file which is larger then it's RAM,
assume that he has 8 gigs of RAM and file size is 9 Gigs. When this file is being uploaded to the ec2 by website (client). The file data will be transmitted in a chunks to the server and server will start writing it on hard disk. Where do this chunks are stored? (temporarily to write it on hard disk)

The obvious answer will be on RAM, right?
Yes absolutly but this huge size can not be stored in RAM in single upload coz as I mentioned earlier it is larger than our RAM size.

So solution of this situation would be like this:

File will be trasmitted in chunks.
(chunks is the smaller segments of this file) let's assume each chunks is 100 kb, as soon as Server starts getting this chunks on a RAM it will start writing each of this chunks on harddisk and cleans up the already written chunks form RAM simuntiniously.

It is not excetly (not 100%) the stream but this example clears that What streams do?

## Types of Stream in NODEJS:

1. Readable
2. Writable
3. Duplex - 1 and 2 both = 3
4. Transform

**Problem of manipulating stream event is called blackpressure learn more about that from authentic sources**