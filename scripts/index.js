import { initViewSelect } from "./view-select.js";
import { initCalendar } from "./calendar.js";
import { initEventCreateButton } from "./event-create-button.js";
import { initEventFormDialog } from "./event-form-dialog.js";
import { initNotifications } from "./notifications.js";
import { initEventStore } from "./event-store.js";

initCalendar();
initEventStore();
initEventCreateButton();
initEventFormDialog();
initNotifications();
initViewSelect();