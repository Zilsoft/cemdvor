
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { cleanPhone, formatPhone } from './utils'
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { marketLink, cartLink, searchLink, emailLink, phoneLink1, phoneLink2, phoneLink3 } = attributes;
	
	return (
		<>
			<InspectorControls>
				<PanelBody title="Ссылки:">
					<TextControl
						label="Ссылка на поиск"
						value={ searchLink }
						onChange={ ( value ) => setAttributes( { searchLink: value } ) }
					/>
					<TextControl
						label="Ссылка для отправки e-mail"
						value={ emailLink }
						onChange={ ( value ) => {
							const normalized = value && ! value.startsWith( 'mailto:' ) && value.includes( '@' )
								? `mailto:${ value }`
								: value;
							setAttributes( { emailLink: normalized } );
						} }
						help="Введите email или полный mailto:"
					/>
					<TextControl
						label="Ссылка на магазин"
						value={ marketLink }
						onChange={ ( value ) => setAttributes( { marketLink: value } ) }
					/>
					<TextControl
						label="Ссылка на корзину"
						value={ cartLink }
						onChange={ ( value ) => setAttributes( { cartLink: value } ) }
					/>
				</PanelBody>
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
				<div className="inner-header">
					<InnerBlocks />
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
		</>
	);
}
