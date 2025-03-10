<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Rivedge Context – hello from a dynamic block!', 'rivedge-context' ); ?>
	<pre style="background-color: #f1f1f1; padding: 10px; overflow: auto; max-height: 300px;">
		<?php
		echo "All Attributes:\n";
		print_r($attributes['recordId']);

		?>
	</pre>
</div>