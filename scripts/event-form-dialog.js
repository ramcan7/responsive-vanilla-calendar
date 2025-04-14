export function initEventFormDialog() {
    document.addEventListener("event-create-request", () => {
        console.log("open dialogue requested");
    });
}