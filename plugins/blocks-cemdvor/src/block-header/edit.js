
import { useBlockProps, InnerBlocks, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';
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
							<div className="header-cert-link">
								<a href={ cartLink } aria-label="Корзина"></a>
							</div>
						) }
						{ marketLink && (
							<div className="header-market-link">
								<a href={ marketLink }>Магазин</a>
							</div>
						) }
					</div>
				</div>
			</div>
		</>
	);
}
