<script>
function checkLoginStatus() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
        window.location.href = "index.html";
    }
}

window.addEventListener("DOMContentLoaded", () => {
    checkLoginStatus();
});
</script>
