import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { fontFamilyClasses, fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, OptionType } from '../../constants/articleProps'

import styles from './ArticleParamsForm.module.scss';
import { useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';


export type OnClick = () => void;

export const ArticleParamsForm = () => {

  const [isFormOpen, setFromOpened] = useState(false);
  const [selectFont, setFormSelected] = useState({
    title: 'Open Sans', 
    value: 'Open Sans', 
    className: 'open-sans'
  })

  const [selectRadio, setRadioSelected] = useState({
    title: '18px', 
    value: '18px', 
    className: 'font-size-18' 
  })

  const [selectColorFont, setColorFont] = useState<OptionType>({
    title: 'Черный',
		value: '#000000',
		className: 'font-black',
		optionClassName: 'option-black'
  })

  const [selectColorBackground, setColorBackground] = useState<OptionType>({
    title: 'Белый',
		value: '#FFFFFF',
		className: 'bg-white',
		optionClassName: 'option-white'
  })

  const [selectWidthContent, setWidthContent] = useState<OptionType>({
    title: 'Широкий',
		value: '1394px',
		className: 'width-wide',
		optionClassName: 'option-wide',
  })

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
          <Text 
            children={'Задайте параметры'}
            as={'h2'}
            size={31}
            weight={800}
            fontStyle='normal'
            uppercase={true}
            align='left'
            family={fontFamilyClasses[0]}
          />

          <Select 
            selected={selectFont} 
            options={fontFamilyOptions}
            onChange={(selectedOption)=>{
              setFormSelected(selectedOption)
              
            }}
            title='шрифт'
          />

          <RadioGroup 
            name={'18'} 
            options={fontSizeOptions} 
            selected={selectRadio}
            onChange={(selectedOption)=>{
              setRadioSelected(selectedOption)
              
            }} 
            title= 'размер шрифта' 
          />

          <Select 
            selected={selectColorFont} 
            options={fontColors}
            onChange={(selectedOption)=>{
              setColorFont(selectedOption)
            }}
            title='цвет шрифта'
          />

          <Separator />

          <Select 
            selected={selectColorBackground} 
            options={backgroundColors}
            onChange={(selectedOption)=>{
              setColorBackground(selectedOption)
              
            }}
            title='цвет фона'
          />

          <Select 
            selected={selectWidthContent} 
            options={contentWidthArr}
            onChange={(selectedOption)=>{
              setWidthContent(selectedOption)
              
            }}
            title='ширина контента'
          />
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' type='reset' />
						<Button title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
