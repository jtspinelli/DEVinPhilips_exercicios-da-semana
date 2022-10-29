export const toast = document.getElementById("toast");

toast.addEventListener("click", (event) => {
    if(outsideClick(event)) {
        closeAndClearToast();
    }
})

export function mostrarToast() {
    toast.classList.toggle("hidden");
}

function outsideClick(event) {
    return event.target.id == 'toast';
}

function closeAndClearToast() {
    toast.classList.toggle("hidden");
    toast.innerHTML = '';
}