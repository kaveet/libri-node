var rp = require('request-promise');

module.exports = {

    /**
     * Return all audiobooks conforming to parameters
     * @param  {[string]} where Options to search with
     *                          id: fetches a single record
     *                          since: takes a UNIX timestamp; returns all projects cataloged since that time
     *                          author: all records by that author last name
     *                          title: all matching titles
     *                          genre: all projects of the matching genre
     *						    extended: =1 will return the full set of data about the project
     */

    getAudiobooksWhere: function(where) {

        var options = {
            uri: "https://librivox.org/api/feed/audiobooks",
            qs: {
                format: "json",
                id: where.id ? where.id : undefined,
                since: where.since ? where.since : undefined,
                author: where.author ? where.author : undefined,
                title: where.title ? where.title : undefined,
                genre: where.genre ? where.genre : undefined,
                extended: where.extended ? where.extended : false,
                limit: where.limit ? where.limit : undefined,
                offset: where.offset ? where.offset : undefined
            },
            json: true
        };

        return rp(options).then(function(response) {
            return response.books;
        }).catch(function(error) {
            return { error: error };
        })

    },

    getAudiobooksByAuthorLastName: function(authorLastName) {
    	return this.getAudiobooksWhere({ author: authorLastName });
    },

    getAudiobooksByTitle: function(title) {
    	return this.getAudiobooksWhere({ title: title });
    }

    getAudiobooksByGenre: function(genre) {
    	return this.getAudiobooksWhere({ genre: genre });
    }

};
