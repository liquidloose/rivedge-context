<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>

	<?php
	// WP_Query arguments to fetch articles sorted by newest to oldest
	$args = array(
		'post_type'      => 'article',  // Use your custom post type name
		'posts_per_page' => 10,         // Number of posts to display (adjust as needed)
		'order'          => 'DESC',     // Descending order (newest first)
		'orderby'        => 'date',     // Order by publish date
		'post_status'    => 'publish',  // Only get published posts
	);

	$article_query = new WP_Query($args);
	$posts_data = array();

	if ($article_query->have_posts()) {
		while ($article_query->have_posts()) {
			$article_query->the_post();

			// Get post data
			$post_id = get_the_ID();
			$post_data = array(
				'id' => $post_id,
				'title' => get_the_title(),
				'excerpt' => get_the_excerpt(),
				'permalink' => get_permalink(),
				'date' => get_the_date('c'),
				'modified' => get_the_modified_date('c'),
				'author' => get_the_author(),
				'author_id' => get_the_author_meta('ID'),
				'featured_image' => array(
					'url' => get_the_post_thumbnail_url($post_id, 'full'),
					'alt' => get_post_meta(get_post_thumbnail_id($post_id), '_wp_attachment_image_alt', true)
				),
				'categories' => get_the_category(),
				'tags' => get_the_tags(),
				'meta' => get_post_meta($post_id)
			);

			$posts_data[] = $post_data;
		}
		wp_reset_postdata();
	}

	// Convert to JSON
	$posts_json = json_encode($posts_data, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

	// Store in block attributes or context - assuming $attributes is available
	if (isset($attributes)) {
		$attributes['allPosts'] = $posts_json;
	}

	$attributes['allPosts'] = $posts_data;
	//print_r($posts_data[1]);
	?>

</div>