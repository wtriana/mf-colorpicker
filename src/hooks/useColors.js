import { useEffect, useState } from "react";
import { getColorList, getLastColor } from "../helpers/getColors";

export const useColors = () => {
    const [color, setColor] = useState( getLastColor() )
    const [colorList, setColorList] = useState( getColorList() );
  
    const handleChangeColor = (e) => {
      setColor(e.target.value)
    }
  
    const handleSubmitSaveColor = (e) => {
      e.preventDefault()
      const copyColor = [color, ...colorList];
      setColorList(copyColor);
    }

    useEffect(()=>{
      localStorage.setItem('colorList',JSON.stringify(colorList))
    },[colorList]);

    return { color, colorList, handleChangeColor, handleSubmitSaveColor }
} 