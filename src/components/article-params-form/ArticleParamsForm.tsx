import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';


export type OnClick = () => void;

export const ArticleParamsForm = () => {

  const [isFormOpen, setFromOpened] = useState(false)

  function toggleOpenedForm() {
    setFromOpened(!isFormOpen);
  }

	return (
		<>
			<ArrowButton 
        OnClick = {()=>{toggleOpenedForm()}}
        isFormOpen = {isFormOpen}/>
			<aside className={clsx(styles.container, isFormOpen && styles.container_open)}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
