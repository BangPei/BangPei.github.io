$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/channels',
    type: 'get',
    dataType: 'json',
    data: {
        part: 'snippet,statistics',
        id: 'UCw0WUEbolbozCjGAuztgusQ',
        key: 'AIzaSyDwL-0trWSwc0OmnHa1HNE2iaMwe84Tkvo'
    },
    success: function (result) {
        $.each(result.items, function (i, data) {
            $('#imgProfile').html(`
            <img src="` + data.snippet.thumbnails.default.url + `" class="img-thumbnail rounded-circle">
            `)
            $('#nameChannels').html(`
            <a href="https://www.youtube.com/channel/UCw0WUEbolbozCjGAuztgusQ?view_as=subscriber">
            <h6 class="text-dark">` + data.snippet.title + `</h6></a>
            `)
            $('#Subscriber').html(`
            <p class="font-weight-bold">` + data.statistics.subscriberCount + ` Subscribers</p>
            `)
        })
    }
});
$.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'get',
    dataType: 'json',
    data: {
        key: 'AIzaSyDwL-0trWSwc0OmnHa1HNE2iaMwe84Tkvo',
        channelId: 'UCw0WUEbolbozCjGAuztgusQ',
        maxResults: 1,
        order: 'date',
        part: 'snippet'
    },
    success: function (result) {
        $.each(result.items, function (i, data) {
            $('#lastVideo').html(`
            <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/` + data.id.videoId + `?rel=0"
            allowfullscreen></iframe>
            `)
            $('#title').html(`
            <p class="font-weight-bold">` + data.snippet.title + `</p>
            `)
        })
    }
});