import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	
	const { marketLink, searchLink, emailLink } = attributes;
	const innerBlocksProps = useInnerBlocksProps.save( { className: "nav-account-link" } );
	
	return (
		<div { ...useBlockProps.save() }>
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
	);
}
