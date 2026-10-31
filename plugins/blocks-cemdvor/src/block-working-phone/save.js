import { useBlockProps } from '@wordpress/block-editor';
import { cleanPhone, formatPhone } from './utils'

export default function save( { attributes } ) {

	const { phoneLink1, phoneLink2, phoneLink3 } = attributes;

	return (
		<div { ...useBlockProps.save() }>
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
	);
}
