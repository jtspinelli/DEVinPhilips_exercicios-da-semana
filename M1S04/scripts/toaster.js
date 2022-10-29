export const toast = document.getElementById("toast");

toast.addEventListener("click", (event) => {
    if(outsideClick(event)) {
        closeAndClearToast();
    }
})

function outsideClick(event) {
    return event.target.id == 'toast';
}

function closeAndClearToast() {
    toast.classList.toggle("hidden");
    toast.innerHTML = '';
}