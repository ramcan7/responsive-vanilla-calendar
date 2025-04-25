export function validateEvent(event) {
    if(event.startTime >= event.endTime) {
        return "La hora de fin debe ser después de la hora de inicio.";
    }

    return null;
}