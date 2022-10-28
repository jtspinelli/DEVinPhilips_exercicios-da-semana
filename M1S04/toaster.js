export const toast = document.getElementById("toast");

toast.addEventListener("click", (event) => {
    if(outsideClick(event)) {
        toast.classList.toggle("hidden");
        toast.innerHTML = '';
    }
})

function outsideClick(event) {
    return event.target.id == 'toast';
}