
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { marketLink, cartLink, searchLink } = attributes;
	
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
		</>
	);
}
