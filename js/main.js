const BtnDarkMode = document.querySelector(".dark-mode-btn");

if(window.matchMedia && window.matchMedia("(prefers-colors-scheme: dark)").matches){
    BtnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
}

if(localStorage.getItem('darkMode')=== 'dark'){
    BtnDarkMode.classList.add("dark-mode-btn--active");
    document.body.classList.add("dark");
} else if(localStorage.getItem('darkMode')=== 'light'){
    BtnDarkMode.classList.remove("dark-mode-btn--active");
    document.body.classList.remove("dark");
}



window.matchMedia("(prefers-colors-scheme: dark)").addEventListener('change', (event)=>{
    const newColorScheme = event.matches ? "dark": 'light';
    if(newColorScheme==='dark'){
        BtnDarkMode.classList.add("dark-mode-btn--active");
        document.body.classList.add("dark");
        localStorage.setItem('darkMode', "dark");
    }else{
        BtnDarkMode.classList.remove("dark-mode-btn--active");
        document.body.classList.remove("dark");
        localStorage.setItem('darkMode', "light");
    }
})


BtnDarkMode.onclick = function (){
    BtnDarkMode.classList.toggle("dark-mode-btn--active");
    const isDark = document.body.classList.toggle('dark');
    if (isDark){
        localStorage.setItem('darkMode', "dark")
    } else{
        localStorage.setItem('darkMode', "light")
    }
}