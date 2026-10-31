import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<div { ...useBlockProps.save() }>
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
		</div>
	);
}
