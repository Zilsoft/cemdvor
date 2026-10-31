// Модалка графика работы (только для мобильных)
( function () {
	const toggle = document.querySelector( '.working-hours-toggle' );
	const modal = document.querySelector( '.working-hours-modal' );
	const closeBtn = document.querySelector( '.working-hours-modal__close' );

	if ( ! toggle || ! modal ) return;

	// Открыть
	toggle.addEventListener( 'click', () => {
		modal.classList.add( 'is-open' );
		modal.setAttribute( 'aria-hidden', 'false' );
	} );

	// Закрыть по крестику
	if ( closeBtn ) {
		closeBtn.addEventListener( 'click', () => {
			modal.classList.remove( 'is-open' );
			modal.setAttribute( 'aria-hidden', 'true' );
		} );
	}

	// Закрыть по клику на фон
	modal.addEventListener( 'click', ( e ) => {
		if ( e.target === modal ) {
			modal.classList.remove( 'is-open' );
			modal.setAttribute( 'aria-hidden', 'true' );
		}
	} );

	// Закрыть по Escape
	document.addEventListener( 'keydown', ( e ) => {
		if ( e.key === 'Escape' && modal.classList.contains( 'is-open' ) ) {
			modal.classList.remove( 'is-open' );
			modal.setAttribute( 'aria-hidden', 'true' );
		}
	} );
} )();