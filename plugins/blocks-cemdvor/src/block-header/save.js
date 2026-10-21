import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { cleanPhone, formatPhone } from './utils'

export default function save( { attributes } ) {
	const { marketLink, cartLink, searchLink, emailLink, phoneLink1, phoneLink2, phoneLink3 } = attributes;
	
	return (
		<div { ...useBlockProps.save() }>
			<div className="inner-header">
				<InnerBlocks.Content />
				<div className="working-hours-mobile">
					<button
						className="working-hours-toggle"
						aria-label="Показать график работы"
						type="button"
					>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
							<circle cx="12" cy="12" r="9" />
							<path d="M12 7v5l3 3" />
						</svg>
					</button>
					<div className="working-hours-modal" aria-hidden="true">
						<div className="working-hours-modal__content">
							<button className="working-hours-modal__close" aria-label="Закрыть" type="button">×</button>
							<h3>График работы:</h3>
							<p>Пн-Пт: 8:00–17:00</p>
							<p>Сб: 8:00–14:00</p>
							<p>Вс: выходной</p>
						</div>
					</div>
				</div>
				<div className="working-hours">
					<span>График работы:</span>
					<span>Пн-Пт: 8:00-17:00</span>
					<span>Сб: 8:00-14:00</span>
					<span>Вс: выходной</span>
				</div>
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
