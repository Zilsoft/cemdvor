// Переключение цветовой темы (светлая/тёмная)
( function() {
	const STORAGE_KEY = 'cemdvor-theme';
	const DARK_CLASS = 'dark-mode-cemdvor';

	// 1. Применяем сохранённую тему сразу
	const savedTheme = localStorage.getItem( STORAGE_KEY );
	if ( savedTheme === 'dark' ) {
		document.body.classList.add( DARK_CLASS );
	}

	// 2. Находим кнопку и навешиваем обработчик
	document.addEventListener( 'DOMContentLoaded', function() {
		const toggleButton = document.querySelector( '.header-theme-toggle' );

		if ( ! toggleButton ) {
			return;
		}

		// Синхронизируем ARIA-атрибут с текущим состоянием
		const updateAria = () => {
			const isDark = document.body.classList.contains( DARK_CLASS );
			toggleButton.setAttribute( 'aria-pressed', isDark ? 'true' : 'false' );
		};

		// 3. Обработчик клика
		toggleButton.addEventListener( 'click', function() {
			document.body.classList.toggle( DARK_CLASS );

			const isDark = document.body.classList.contains( DARK_CLASS );
			localStorage.setItem( STORAGE_KEY, isDark ? 'dark' : 'light' );

			updateAria();
		} );

		// Инициализация ARIA при загрузке
		updateAria();
	} );
} )();

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