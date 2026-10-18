import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { marketLink, cartLink, searchLink, emailLink } = attributes;
	
	return (
		<div { ...useBlockProps.save() }>
			<div className="inner-header">
				<InnerBlocks.Content />
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
	);
}
