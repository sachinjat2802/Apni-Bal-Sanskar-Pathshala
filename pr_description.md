🔒 Fix hardcoded admin credentials vulnerability

🎯 **What:** The vulnerability fixed
The `src/app/admin/page.tsx` file contained hardcoded credentials (`admin` / `password`) that were verified purely on the client-side using JavaScript.

⚠️ **Risk:** The potential impact if left unfixed
Any visitor to the admin page could trivially view the source code to discover the credentials or manually toggle the CSS `.hidden` classes to access the dashboard. This would result in completely unauthorized access to whatever administrative functions might be built into the panel.

🛡️ **Solution:** How the fix addresses the vulnerability
The user explicitly requested a backend authentication mechanism, so the static export constraint (`output: "export"`) in `next.config.ts` was removed. An API route (`src/app/api/login/route.ts`) was implemented that checks submitted credentials against securely configured server-side environment variables (`ADMIN_USERNAME` and `ADMIN_PASSWORD`), with a fallback for local testing. The frontend JavaScript was updated to authenticate using a `fetch` POST request to this secure API endpoint instead of checking strings on the client.
