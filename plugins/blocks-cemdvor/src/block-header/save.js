import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { cleanPhone, formatPhone } from './utils'

export default function save( { attributes } ) {
	const { marketLink, cartLink, searchLink, emailLink, phoneLink1, phoneLink2, phoneLink3 } = attributes;
	
	return (
		<div { ...useBlockProps.save() }>
			<div className="inner-header">
				<InnerBlocks.Content />
				<div className="right-section">
					<div className="theme-toggle-wrap">
						<button
							className="header-theme-toggle"
							aria-label="Переключить тему"
							type="button"
						></button>
					</div>
					<div className="header-phones">
						{ phoneLink1 && (
							<a 	
								href={ `tel:${cleanPhone(phoneLink1)}` } 
								className="header-phone-link" 
								aria-label="Позвонить"
							>{ formatPhone( phoneLink1 ) }</a>
						) }		
						{ phoneLink2 && (
							<a 
								href={ `tel:${ cleanPhone( phoneLink2 ) }` } 
								className="header-phone-link" 
								aria-label="Позвонить"
							>{ formatPhone( phoneLink2 ) }</a>
						) }
						{ phoneLink3 && (
							<a 
								href={ `tel:${ cleanPhone( phoneLink3 ) }` } 
								className="header-phone-link" 
								aria-label="Позвонить"
							>{ formatPhone( phoneLink3 ) }</a>
						) }
					</div>
					<div className="header-icon-group">
						{ searchLink && (
							<div className="header-search-link" data-tooltip="Поиск">
								<a href={ searchLink } aria-label="Поиск"></a>
							</div>
						) }
						{ emailLink && (
							<div className="header-email-link" data-tooltip="Написать">
								<a href={ emailLink } aria-label="Написать"></a>
							</div>
						) }
						{ cartLink && (
							<div className="header-cart-link" data-tooltip="Корзина">
								<a href={ cartLink } aria-label="Корзина"></a>
							</div>
						) }
						{ marketLink && (
							<div className="header-market-link" data-tooltip="Магазин">
								<a href={ marketLink } aria-label="Магазин"></a>
							</div>
						) }
					</div>
				</div>
			</div>
		</div>
	);
}
