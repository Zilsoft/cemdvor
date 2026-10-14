import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const { marketLink, cartLink, searchLink } = attributes;
	
	return (
		<div { ...useBlockProps.save() }>
			<div className="inner-header">
				<InnerBlocks.Content />
				<div className="right-section">
					{ searchLink && (
						<div className="header-search-link">
							<a href={ searchLink } aria-label="Поиск"></a>
						</div>
					) }
					{ cartLink && (
						<div className="header-cart-link">
							<a href={ cartLink } aria-label="Корзина"></a>
						</div>
					) }
					{ marketLink && (
						<div className="header-market-link">
							<a href={ marketLink } aria-label="Магазин"></a>
						</div>
					) }
				</div>
			</div>
		</div>
	);
}
