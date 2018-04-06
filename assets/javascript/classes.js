class AJAX {
    static searchPlayer(player, f) {
        $.ajax({
            url: "http://NflArrest.com/api/v1/player/search/?term=" + player,
            method: "GET"
        }).then(f);    
    }

    static topTeams(f) {
        $.ajax({
            url: "http://NflArrest.com/api/v1/team/",
            method: "GET"
        }).then(f);
    }

    static searchNews(query, f) {
        $.ajax({
            url: "https://newsapi.org/v2/everything?" + $.param({
                q: query + " arrest nfl",
                apiKey: "003b6f29d903402b870e130d1757f4ef"
            }),
            method: "GET"
        }).then(f);
    }

    static searchGif(query, f) {
        $.ajax({
            url: "https://api.giphy.com/v1/gifs/search?" + $.param({
                api_key: key, 
                q : query, 
                limit: limit,
                offset: 0
            }),
            method: "GET"
        }).then(f);
    }
}
