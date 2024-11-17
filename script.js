// Animate progress bars
document.querySelectorAll(".progress").forEach(progress => {
    const percent = progress.getAttribute("data-percent");
    progress.style.width = percent;
});
