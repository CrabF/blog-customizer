import arrow from 'src/images/arrow.svg';

import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

/** Функция для обработки открытия/закрытия формы */
export interface OnClick{
  OnClick:() => void,
  isFormOpen: boolean
} 

export const ArrowButton = ({OnClick, isFormOpen}:OnClick) => {

	return (
		/* Не забываем указаывать role и aria-label атрибуты для интерактивных элементов */
		<div
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0}
      onClick={OnClick}
			className = {clsx(styles.container, isFormOpen && styles.container_open)}>
			<img src={arrow} alt='иконка стрелочки' className={clsx(styles.arrow, isFormOpen && styles.arrow_open)} />
		</div>
	);
};