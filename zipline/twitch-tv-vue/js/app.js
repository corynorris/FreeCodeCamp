new Vue({
    el: '#app',
    methods: {

        setStreamerStatus: function(response) {            
            if (response.data.status === null) {
                return "Offline";
            }
            return  response.data.status;            
        },
        setStreamerImage: function(response) {
            if (response.data.logo === null) {
                return "http://placehold.it/100x100";
            }
            return response.data.logo;
        },
        setUrl: function(response) {
            if (response.data.url === null) {
                return "#";
            }
            return response.data.url;
        },
        setStreamerInfo: function(response, streamer) {
            streamer.status = this.setStreamerStatus(response);
            streamer.imageUrl = this.setStreamerImage(response);
            streamer.channelUrl = this.setUrl(response);
        },
        fetchStreamerData: function(streamer) {
            Vue.http.get('https://api.twitch.tv/kraken/channels/' + streamer.name)
            .then(
                function(response) { 
                    this.setStreamerInfo(response, streamer); 
                }.bind(this),
                function(response) { streamer.status = "Account Closed or Doesn't Exist"; }
                )
        },
        fetchAllStreamersData: function() {
            this.streamers.forEach(function(streamer) {
             this.fetchStreamerData(streamer);
         }.bind(this));
        },
        addChannel: function() {
            this.streamers.push({
                name: this.newChannel,
                imageUrl: "http://placehold.it/100x100",
                channelUrl: "#",
                status: ''
            });
            this.fetchStreamerData(this.streamers[this.streamers.length-1]);
        }

    },
    data: function() {
        return {
            newChannel: '',
            streamers: [{
                name: "freecodecamp",
                imageUrl: "http://placehold.it/100x100",
                channelUrl: "#",
                status: ''
            },
            {
                name: "storbeck",
                imageUrl: "http://placehold.it/100x100",
                channelUrl: "#",
                status: ''
            },
            {
                name: "terakilobyte",
                imageUrl: "http://placehold.it/100x100",
                channelUrl: "#",
                status: ''
            },
            {
                name: "ogamingsc2",
                imageUrl: "http://placehold.it/100x100",
                channelUrl: "#",
                status: ''
            },
            {
                name: "brunofin",
                imageUrl: "http://placehold.it/100x100",
                channelUrl: "#",
                status: ''
            }]
        }
    },
    created: function() {
        this.fetchAllStreamersData();
    }
});
