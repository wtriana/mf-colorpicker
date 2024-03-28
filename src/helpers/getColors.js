export const getColorList = () => {
    return JSON.parse(localStorage.getItem('colorList')) || [];
}

export const getLastColor = () => {
    const listColor = getColorList();

    return listColor[0] || "#159753";
}