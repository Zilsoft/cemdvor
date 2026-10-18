
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { marketLink, cartLink, searchLink, emailLink } = attributes;
	
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
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div className="inner-header">
					<InnerBlocks />
					<div className="theme-toggle-wrap">
						<button
							className="header-theme-toggle"
							aria-label="Переключить тему"
							type="button"
						></button>
					</div>
					<div className="right-section">
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
		</>
	);
}
