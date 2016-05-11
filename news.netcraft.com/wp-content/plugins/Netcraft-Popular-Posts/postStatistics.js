jQuery(document).ready(function($) {

    function popular_posts_sidebar() {
        $articleList = $('#most-read-articles-list');
        
        if ($articleList.length > 0) {
            // Fetch the most popular posts
            $.get(netcraft_ajax.url, function(posts) {

                // Append posts to the sidebar
                $.each(posts, function(key, val) {
                    $articleList.append('<li><a href="' + val.url + '">' + val.title + '</a></li>');
                });

                // Display the most popular sidebar section
                $('#most-read-loading').hide();

            }, 'json');
        }
        
    }
    popular_posts_sidebar();
});
