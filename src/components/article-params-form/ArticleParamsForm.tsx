import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from '../text';
import { fontFamilyClasses, fontFamilyOptions, fontColors, backgroundColors, contentWidthArr, fontSizeOptions, ArticleStateType, defaultArticleState } from '../../constants/articleProps'



import styles from './ArticleParamsForm.module.scss';
import { useRef, useState } from 'react';
import clsx from 'clsx';
import { Select } from '../select';
import { Separator } from '../separator';
import { RadioGroup } from '../radio-group';
import { useOutsideClickClose } from '../select/hooks/useOutsideClickClose';

export interface ArticleOptions {
  setChangeArticle: (param:ArticleStateType)=>void,
  articleOptions: ArticleStateType
}

export const ArticleParamsForm = ({setChangeArticle, articleOptions}: ArticleOptions) => {

  const [isOpen, setFormOpened] = useState<boolean>(false);
  const rootRef = useRef(null)
 
  const [formState, setFormState] = useState({
    fontFamilyOption: articleOptions.fontFamilyOption,
    fontColor: articleOptions.fontColor,
    fontSizeOption: articleOptions.fontSizeOption,
    backgroundColor: articleOptions.backgroundColor,
    contentWidth: articleOptions.contentWidth
  })  

  useOutsideClickClose({
    isOpen,
    rootRef,
    onClose: ()=>{toggleOpenedForm()},
    onChange: ()=>{toggleOpenedForm}
  })
  
  function toggleOpenedForm() {
    setFormOpened(!isOpen);
  }

  function updateApp() {
    setChangeArticle(formState);
    event?.preventDefault();
    toggleOpenedForm();
  }

  function resetForm() {
    setFormState(defaultArticleState);
    setChangeArticle(defaultArticleState)
  }

	return (
		<>
			<ArrowButton 
        OnClick = {()=>{toggleOpenedForm()}}
        isFormOpen = {isOpen}/>
			<aside 
        className={clsx(styles.container, isOpen && styles.container_open)}
        ref={rootRef}>
				<form 
          className={styles.form}
          
        >
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
            selected={formState.fontFamilyOption} 
            options={fontFamilyOptions}
            onChange={(selectedOption)=>{
              setFormState({
                ...formState,
                fontFamilyOption: selectedOption
              })
            }}
            title='шрифт'
          />

          <RadioGroup 
            name={'18'} 
            options={fontSizeOptions} 
            selected={formState.fontSizeOption}
            onChange={(selectedOption)=>{
              setFormState({
                ...formState,
                fontSizeOption: selectedOption
              })
              
            }} 
            title= 'размер шрифта' 
          />

          <Select 
            selected={formState.fontColor} 
            options={fontColors}
            onChange={(selectedOption)=>{
              setFormState({
                ...formState,
                fontColor: selectedOption
              })
            }}
            title='цвет шрифта'
          />

          <Separator />

          <Select 
            selected={formState.backgroundColor} 
            options={backgroundColors}
            onChange={(selectedOption)=>{
              setFormState({
                ...formState,
                backgroundColor: selectedOption
              })
              
            }}
            title='цвет фона'
          />

          <Select 
            selected={formState.contentWidth} 
            options={contentWidthArr}
            onChange={(selectedOption)=>{
              setFormState({
                ...formState,
                contentWidth: selectedOption
              })
              
            }}
            title='ширина контента'
          />
					<div className={styles.bottomContainer}>
						<Button onClick={()=>{
              resetForm()}} title='Сбросить' type='reset' />
						<Button onClick={()=>{
              updateApp()
            }} title='Применить' type='submit' />
					</div>
				</form>
			</aside>
		</>
	);
};
