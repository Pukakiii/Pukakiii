// Client instrumentation — runs once per page load in the browser.
// Importing the OpenPanel singleton instantiates the SDK (screen views,
// outgoing links) when NEXT_PUBLIC_OPENPANEL_CLIENT_ID is configured;
// without it the export is null and nothing loads.
import "@/lib/openpanel"

export {}
