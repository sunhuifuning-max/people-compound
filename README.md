# People Compound — Production Build v16

People Strategy for What's Next.

## Included
- Premium People Compound website architecture
- Six-section navigation: Solutions, Services, Leadership & Coaching, Assessments, Insights, About
- Free Leadership Assessment and Organizational Health Check
- Personalized assessment reports and 30/60/90-day action plans
- Resend report delivery API architecture
- SEO-oriented Insights hub with categories, featured insight and six cornerstone articles
- Individual insight pages with assessment and consultation CTAs
- Responsive design

## Production follow-up
- Verify `npm install` and `npm run build` in the deployment environment.
- Configure Resend credentials and sender-domain authentication.
- Add privacy policy, terms and consent language.
- Add analytics, Search Console, sitemap and robots configuration.
- Connect contact/lead forms to the selected CRM or email workflow.

## Launch configuration (v13)
- Canonical site: https://www.peoplecompound.com
- Public email: helen.sun@peoplecompound.com
- Lead notification: helen.sun@peoplecompound.com
- Calendly: https://calendly.com/helen-sun-peoplecompound/30min
- GA4: G-35C7ZW5DVG
- Business/legal name: Hui's Consulting
- Public location: Bridgewater, NJ

### Vercel environment variables
Set these in Vercel for Production (and Preview if desired):
- NEXT_PUBLIC_SITE_URL=https://www.peoplecompound.com
- NEXT_PUBLIC_GA4_ID=G-35C7ZW5DVG
- NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/helen-sun-peoplecompound/30min
- RESEND_API_KEY=<your Resend API key>
- REPORT_FROM_EMAIL=People Compound <helen.sun@peoplecompound.com>
- CONTACT_TO_EMAIL=helen.sun@peoplecompound.com

### Cloudflare / Resend
Keep DNS at Cloudflare. In Resend, verify the sending domain and add every DNS record Resend shows in Cloudflare DNS. Do not commit the Resend API key to GitHub.

### Deployment
1. Create a private GitHub repository and push this project.
2. Import the repository into Vercel.
3. Add the environment variables above.
4. Add www.peoplecompound.com as the Vercel domain; configure the DNS records Vercel provides in Cloudflare.
5. Confirm the apex domain redirects/canonicalizes consistently to https://www.peoplecompound.com.
6. Confirm Resend shows peoplecompound.com as verified before testing email.
7. Deploy and test: contact form, assessment report email, Calendly link, GA4, sitemap, robots.txt, mobile navigation, and all primary routes.

## v15 updates
- Solutions page now presents **By Growth Stage** before **By Challenge**.
- Added three selected case studies to the Insights page:
  1. In-house TA capability building for a multinational pharmaceutical company entering the U.S. market.
  2. High-potential talent development and succession.
  3. Culture and value alignment for cross-country, cross-cultural collaboration during U.S. market entry.
- Case study language is based on the provided TA capability-building and high-potential program source materials plus client outcome details supplied for this build.


## v16 updates
- Homepage proof strip now includes: 15+ years, 120+ employees scaled, 40+ senior leaders recruited, $2M recruiting savings, HR infrastructure built from scratch multiple times, and SPHR.
- Homepage now includes four compact selected case studies.
- Insights now includes four full case studies, including the total rewards architecture case.
- Insights now includes a practical HR template library with email-request links.
- Navigation label updated from Leadership to Leadership & Coaching.
- Resend delivery routes now use a shared helper, clearer configuration handling, and server-side error logging.

## Resend email setup — required for live delivery
The website is wired for Resend. The sending domain can be verified in Resend/Cloudflare, but Vercel still needs the Resend API key. In Vercel → Project → Settings → Environment Variables, add for Production:
- RESEND_API_KEY = your Resend API key
- REPORT_FROM_EMAIL = People Compound <helen.sun@peoplecompound.com>
- CONTACT_TO_EMAIL = helen.sun@peoplecompound.com

After saving the variables, redeploy. Test both the contact form and an assessment report. If Resend rejects a request, the server logs now record the Resend response while the public site shows a safe, user-friendly message. Never commit the API key to GitHub.
