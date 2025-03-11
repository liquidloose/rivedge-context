import { TextControl, TextareaControl } from '@wordpress/components'
import { InnerBlocks } from '@wordpress/block-editor'
import { __ } from '@wordpress/i18n';


export default function Edit(props, context) {
	const {
		attributes: { allPosts },
		setAttributes,
	} = props
	return (
		<div>
			<TextareaControl
				__nextHasNoMarginBottom
				__next40pxDefaultSize
				label={__('Record ID')}
				value={allPosts}
				onChange={(val) =>
					setAttributes({ allPosts: val })
				}
			/>
		</div>
	)
}