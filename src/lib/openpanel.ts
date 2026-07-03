import { OpenPanel } from "@openpanel/web"

const clientId = process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID

/**
 * Singleton OpenPanel client. `null` when no client id is configured so
 * tracking silently no-ops in local/dev environments without env vars.
 */
export const op = clientId
  ? new OpenPanel({
      clientId,
      trackScreenViews: true,
      trackOutgoingLinks: true,
    })
  : null
