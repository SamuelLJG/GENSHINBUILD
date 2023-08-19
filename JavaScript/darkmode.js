function darkmode() {
    var e = document.body;
    e.classList.toggle("dark"), e = e.classList.contains("dark") ? "DARK" : "LIGHT", localStorage.setItem("PageTheme", JSON.stringify(e))
}
setInterval(() => {
    var e = JSON.parse(localStorage.getItem("PageTheme"));
    document.body.classList = "DARK" === e ? "dark" : ""
}, 5);


