# libri-node
An small async nodeJS wrapper for the official [LibriVox API](https://librivox.org/api/info).

[![NPM](https://nodei.co/npm/libri-node.png)](https://nodei.co/npm/libri-node/)

## Usage

Install libri-node:
```
$ npm install libri-node
```

`require()` the module in your node application:
```javascript
var librivox = require('libri-node');
```

Fetch audiobooks with query parameters and Bluebird-style promises: (see all [parameters](#available-parameters))
```javascript
librivox.getAudiobooksWhere({
	author: "Poe",
	title: "Narrative of Arthur Gordon Pym of Nantucket"
}).then(function(response) {
	if(response.error) {
		console.log("Error", response.error.message);
	} else {
		console.log("First response", response.books[0]);
		return;
	}
});
```

Fetch all audiobooks by a given author:
```javascript
librivox.getAudiobooksByAuthorLastName("Poe")
	.then(function(response) {
		if(response.error) {
		console.log("Error", response.error.message);
		} else {
			console.log("First response", response.books[0]);
			return;
		}
	});
```

## API

### `librivox.getAudiobooksWhere(params)`

#### Description
Returns an array of book objects matching the supplied parameters.

#### Available Parameters
```
id: fetches a single record
since: takes a UNIX timestamp; returns all projects cataloged since that time
author: all records by that author last name
title: all matching titles
genre: all projects of the matching genre
extended: =1 will return the full set of data about the project
limit: upper limit on number of book results; default 50
offset: number of results to skip; default 0
```

### `librivox.getAudiobooksByAuthorLastName(string)`

#### Description
Returns an array of book objects where author name exactly matches input string.

### `librivox.getAudiobooksByTitle(string)`

#### Description
Returns an array of book objects where book title exactly matches input string.


## Dependencies

libri-node makes use of the following http request modules, installed as dependencies.

1. [request](https://www.npmjs.com/package/request) (a peer dependency of request-promise)
1. [request-promise](https://www.npmjs.com/package/request-promise)

## License

Copyright (c) 2016-2017 Kaveet Laxmidas

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
