import { settingBtnElement } from "./elements.js"

const themeToggle = () => {
    const currentTheme = document.documentElement.getAttribute("dark-theme")
    
    let newTheme;
    if(currentTheme === "light"){
        newTheme = "dark"
    } else {
        newTheme = "light"
    }

    document.documentElement.setAttribute("dark-theme", newTheme)
}

settingBtnElement.addEventListener("click", themeToggle)