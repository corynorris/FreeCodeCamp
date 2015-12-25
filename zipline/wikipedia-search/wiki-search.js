// only columns may be immediate children of rows.
var SearchResult = React.createClass({
    rawMarkup: function () {
        var rawMarkup = this.props.snippet.toString();
        return {__html: rawMarkup};
    },
    displayName: 'SearchResult',
    render: function () {

        var linkUrl = "https://en.wikipedia.org/wiki/" + encodeURIComponent(this.props.title);

        return (
            <a href={linkUrl}>
                <div className="col-sm-4 col-xs-12">
                    <div className="result">
                        <div className="result-title">
                            {this.props.title}
                        </div>
                        <div className="result-content">
                            <span dangerouslySetInnerHTML={this.rawMarkup()}/>
                        </div>
                    </div>
                </div>
            </a>
        );
    }
});


var ResultGrid = React.createClass({
    displayName: 'ResultGrid',
    render: function () {

        var groupSize = 3;
        var rows = this.props.results.map(function (content) {
            // Map our data to search results
            return <SearchResult title={content.title} snippet={content.snippet}/>;
        }).reduce(function (r, element, index) {
            // create groups
            if (index % groupSize === 0) {
                r.push([]);
            }

            r[r.length - 1].push(element);
            return r;
        }, []).map(function (rowContent) {
            // surround every group with 'row'
            return <div className="row">{rowContent}</div>;
        });

        return (
            <div className="results">{rows}</div>
        );

    }
});


var SearchBox = React.createClass({
    displayName: 'SearchBox',
    getInitialState: function () {
        return {query: ''}
    },
    handleQueryChange: function (e) {
        this.setState({query: e.target.value});
    },
    handleSubmit: function (e) {
        e.preventDefault();
        var query = this.state.query.trim();
        if (!query) return;

        this.props.onQuerySubmit({query: query});

        this.setState({query: ''});
    },
    render: function () {
        return (
            <div className="row">
                <div id="search" className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 col-xs-12">
                    <h2>React.js Wikipedia Search</h2>
                    <form className="searchForm" onSubmit={this.handleSubmit}>
                        <input type="search" className="search" placeholder="Search..." value={this.state.query}
                               onChange={this.handleQueryChange}/>
                    </form>
                </div>
            </div>
        );
    }
});


var SearchResultDisplay = React.createClass({
    handleQuerySubmit: function (query) {
        var searchUrl = this.props.url.replace("[SEARCH]", query["query"]);
        $.ajax({
            url: searchUrl,
            dataType: 'jsonp',
            type: 'POST',
            success: function (data) {
                this.setState({results: data['query']['search']});
                console.log(JSON.stringify(data));
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(searchUrl, status, err.toString());
            }.bind(this)
        });
    },
    getInitialState: function () {
        return {results: []};
    },
    displayName: 'SearchResultDisplay',
    render: function () {
        return (
            <div className="searchDisplay">
                <SearchBox onQuerySubmit={this.handleQuerySubmit}/>
                <ResultGrid results={this.state.results}/>
            </div>
        );
    }
})

//[query][search]

//apiSearchResults["query"]["search"][0]["title"];

ReactDOM.render(
    <SearchResultDisplay
        url="https://en.wikipedia.org/w/api.php?action=query&list=search&format=json&srlimit=12&srsearch=[SEARCH]"/>,
    document.getElementById('content')
);