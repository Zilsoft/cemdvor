import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { cleanPhone, formatPhone } from './utils'

export default function Edit({ attributes, setAttributes }) {

	const { phoneLink1, phoneLink2, phoneLink3 } = attributes;

	return (
		<>
			<InspectorControls>
				<PanelBody title="Телефоны для связи:">
					<TextControl
						label="Телефон 1"
						value={ formatPhone( phoneLink1 ) } 
						onChange={ ( value ) => {
							const cleaned = cleanPhone( value );
							setAttributes( { phoneLink1: cleaned } ); 
						} }
						help="+7 (999) 123-45-67"
					/>
					<TextControl
						label="Телефон 2"
						value={ formatPhone( phoneLink2 ) } 
						onChange={ ( value ) => {
							const cleaned = cleanPhone( value );
							setAttributes( { phoneLink2: cleaned } ); 
						} }
						help="+7 (999) 123-45-67"
					/>
					<TextControl
						label="Телефон 3"
						value={ formatPhone( phoneLink3 ) } 
						onChange={ ( value ) => {
							const cleaned = cleanPhone( value );
							setAttributes( { phoneLink3: cleaned } ); 
						} }
						help="+7 (999) 123-45-67"
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div className="working-phones">
					{ phoneLink1 && (
						<a 
							href={ `tel:${cleanPhone(phoneLink1)}` } 
							className="working-phone-link" 
							aria-label="Позвонить"
						>{ formatPhone( phoneLink1 ) }</a>
					) }		
					{ phoneLink2 && (
						<a 
							href={ `tel:${ cleanPhone( phoneLink2 ) }` } 
							className="working-phone-link" 
							aria-label="Позвонить"
						>{ formatPhone( phoneLink2 ) }</a>
					) }
					{ phoneLink3 && (
						<a 
							href={ `tel:${ cleanPhone( phoneLink3 ) }` } 
							className="working-phone-link" 
							aria-label="Позвонить"
						>{ formatPhone( phoneLink3 ) }</a>
					) }
				</div>
			</div>
		</>
	);
}
