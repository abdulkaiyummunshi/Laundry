
document.querySelectorAll(".playBtn").forEach(btn => {
    btn.addEventListener("click", function (event) {
        event.preventDefault();
        document.getElementById("videoModal").classList.add("active");
    });
});

document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("videoModal").classList.remove("active");
    setTimeout(() => {
        document.getElementById("videoFrame").src = document.getElementById("videoFrame").src;
    }, 400);
});
