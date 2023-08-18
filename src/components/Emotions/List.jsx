import React, { useState } from 'react'
import emotionsList from './items'
import ListView from './ListView'

const List = () => {
    const [items, setItems] = useState(emotionsList);

    function filterEmotions(searchPattern){
        if(searchPattern === ''){
            setItems(emotionsList)
        }else{
            let newEmotions = filterEmotionsBySearchPattern(searchPattern);
            setItems(newEmotions)
        }
    }

    function filterEmotionsBySearchPattern(searchPattern){
        let filterEmotions = emotionsList.map( emotion => emotion.toLowerCase().includes(searchPattern.toLowerCase()) ? emotion : null)
        return filterEmotions;
    }

  return (
    <ListView elements={items} funcfilterEmotions={filterEmotions} />
  )
}

export default List