OAuthifizer example
=========================

Welcome to OAuthifizer example

It's example project for module `oauthifizer` (https://github.com/vedi/oauthifizer).

It's an example of using dummyAuthDelegate.js. It allows you to be always successfully authenticated, and can be used for understanding how `oauthifizer` works. 

== Getting started ==

=== Installation ===

```bash
git clone https://github.com/vedi/oauthifizer-dummy-example.git
cd oauthifizer-dummy-example
npm install
```

=== Running ===

```npm start

=== Testing ===

> I use `httpie` (https://github.com/jakubroztocil/httpie) as a command line tool to test the servers. You can use any, but all the examples are created with syntax of `httpie`. Anyway it's recognizable.

In order to get authenticated use the path `/oauth`.

```http POST localhost:3000/oauth/token grant_type=password client_id=app client_secret=secret username=anylogin password=password

In order to access to restricted resource try the path `/users`.

```http localhost:3000/users Authorization:'Bearer xxx'

== License ==

MIT License. Copyright (c) 2014 Fedor Shubin.
