# HydraServer

A simple example of a full-featured server implementing the [Hydra](http://www.hydra-cg.com/) API Specification.

Built on [json-server](https://github.com/typicode/json-server) and using example data from [Wikibus](https://github.com/wikibus).

### Developer Notes/Lessons Learned

Lessons:
* Need certain headers
   * Hydra `Link` apiDocumentation header.
   * CORS `Allow-*` headers such that a different client can access the Link header in a fetch response


### TODOs:

- maybe make this a lot simpler
- the remade api from wikibus is interesting but complex to manage
- maybe writing code to make a more legit server would be more graspable