/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n'

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor'
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components'

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss'

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 * @return {WPElement} Element to render.
 */
export default function Edit({ attributes, setAttributes, isSelected }) {
	const { recordId } = attributes

	// Function to handle the record ID change
	const handleRecordIdChange = (value) => {
		setAttributes({ recordId: value})
	}

	return (
		<>
			<InspectorControls>
				<PanelBody title={__('Record Settings', 'rivedge-context')}>
					<TextareaControl
						label={__('Record ID', 'rivedge-context')}
						value={recordId}
						onChange={handleRecordIdChange}
						type="string"
						help={__('Enter the ID of the record you want to display', 'rivedge-context')}
					/>
				</PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				<p>
					{__(
						'Rivedge Context – hello from the editor!',
						'rivedge-context'
					)}
				</p>

				{recordId ? (
					<p>{__('Currently selected record ID: ', 'rivedge-context') + recordId}</p>
				) : (
					<p>{__('No record selected', 'rivedge-context')}</p>
				)}
			</div>
		</>
	)
}
