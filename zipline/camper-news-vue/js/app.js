new Vue({
    el: '#app',
    methods: {
        fetchStories: function() {
            this.$http.get('http://www.freecodecamp.com/news/hot')
                .then(function(stories) {
                    this.stories = stories['data'];
                });
        },
        decodeHtml: function(html) {
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        }
    },
    data: function() {
        return {
            stories: []
        }
    },
    created: function() {
        this.fetchStories();
    }
});
