const search = require('youtube-search');

var keywords="youtube api"

var opts={
    maxResults:10,
    key:"AIzaSyD0mNP-r-Grr_jhy0JNxDN8_HnHWjL4mpo"
};


export function search_yt(tokens){
    return search(tokens[0], opts, function(err, results) {
        if(err) return console.log(err);  
        return results;
    }
}


