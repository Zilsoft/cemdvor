
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
import { IconShoppingCart, IconBuildingStore } from '@tabler/icons-react';
import './editor.scss';

export default function Edit( { attributes, setAttributes } ) {
	const { marketLink, cartLink } = attributes;
	
	return (
		<>
			<InspectorControls>
				<PanelBody title="Header Links">
					<TextControl
						label="Market Link"
						value={ marketLink }
						onChange={ ( value ) => setAttributes( { marketLink: value } ) }
					/>
					<TextControl
						label="Cart Link"
						value={ cartLink }
						onChange={ ( value ) => setAttributes( { cartLink: value } ) }
					/>
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div className="inner-header">
					<InnerBlocks />
					<div className="right-section">
						<div className="header-search"></div>
						<div className="header-mode-switcher"></div>
						{ cartLink && (
							<div className="header-cart-link">
								<a href={ cartLink } aria-label="Корзина">
									<IconShoppingCart className="header-cart-icon" />
								</a>
							</div>
						) }
						{ marketLink && (
							<div className="header-market-link">
								<a href={ marketLink } aria-label="Магазин">
									<IconBuildingStore className="header-market-icon" />
								</a>
							</div>
						) }
					</div>
				</div>
			</div>
		</>
	);
}
