import { useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes } ) {

	const { marketLink, searchLink, emailLink } = attributes;
	const innerBlocksProps = useInnerBlocksProps(
		{ className: "nav-account-link" },
		{ allowedBlocks: [ 'woocommerce/customer-account' ] }
	);

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
				</PanelBody>
			</InspectorControls>
			<div { ...useBlockProps() }>
				<div className="nav-icons">
					{ searchLink && (
						<div className="nav-search-link" data-tooltip="Поиск">
							<a href={ searchLink } aria-label="Поиск"></a>
						</div>
					) }
					{ emailLink && (
						<div className="nav-email-link" data-tooltip="Написать">
							<a href={ emailLink } aria-label="Написать"></a>
						</div>
					) }
					{ marketLink && (
						<div className="nav-market-link" data-tooltip="Магазин">
							<a href={ marketLink } aria-label="Магазин"></a>
						</div>
					) }
					<div { ...innerBlocksProps } />
				</div>
			</div>
		</>
	);
}
