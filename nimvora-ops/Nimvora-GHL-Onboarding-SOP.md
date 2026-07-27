# Nimvora — GoHighLevel Onboarding SOP
### Done-for-you AI lead follow-up system (contact every lead in <60s, auto-book the call)

**Purpose:** Take a service-business client from *contract signed* to *system live and stable*.
**Who this is for:** A VA or ops person with **no prior GoHighLevel (GHL) experience**. Follow it top to bottom. Do not skip gates.
**Vocabulary note:** Throughout, "**HL**" or "**GHL**" = GoHighLevel. "**Sub-account**" = the client's own workspace inside our agency GHL account (also called a "Location"). "**A2P**" = the carrier registration that lets us legally send business SMS in the US. "**Speed-to-lead**" = how fast a new lead is contacted.

---

## HOW TO USE THIS DOCUMENT

1. Work **one phase at a time**. Do not start the next phase until the current phase's **Gate** (green checklist at the end of the phase) is 100% met.
2. Every task has four parts: **What it is → Steps → Done looks like → If it stalls**.
3. **Owner** tells you who must act: **[AGENCY]** = us (you, the VA/builder), **[CLIENT]** = the customer.
4. When a task's owner is **[CLIENT]**, your job is to *request, chase, and confirm* — never to wait silently. Chasing cadence is defined in the "If it stalls" box.
5. If anything is unclear or a decision is needed that isn't covered here, **log it in the Onboarding Tracker** (see below) and flag the account manager. Do **not** guess on: legal business name, sending domain, phone porting, or billing.

### The Onboarding Tracker (single source of truth)
For every client, create a copy of the tracker (Google Sheet or GHL opportunity notes) with these columns:
`Task | Phase | Owner | Status (Not started / Waiting on client / In progress / Blocked / Done) | Date requested | Date done | Notes`
Update it **daily**. If a client-owned item sits in "Waiting on client" for **>48 business hours**, escalate.

---

# WEEK 1 — KICKOFF, ACCESS & FOUNDATION

**Goal of the week:** The client's GHL sub-account exists, every credential and integration we need is collected and connected, and **A2P registration is submitted** (because it has the longest lead time of anything in the whole project).

> ⚠️ **The single most important rule in this SOP:** Submit A2P (Task 1.6) on **Day 1**. Everything else can flex; A2P cannot. It gates SMS go-live and can take up to 2–3 weeks to approve.

---

### Task 1.1 — Send the Welcome & Kickoff packet
**Owner:** [AGENCY]
**What it is:** The first client touch after signing. Sets expectations and requests everything we need up front so we're not chasing piecemeal.
**Steps:**
1. Send the welcome email (template: *"Welcome to Nimvora — let's get your lead system live"*).
2. Attach/link the **Access Request Form** (Task 1.2) and the **Business Intake Form** (Task 1.3).
3. Book the **45-minute Kickoff Call** on the calendar within 3 business days of signing.
4. Set expectations in writing: "System live in ~3 weeks, provided we receive access items within 5 business days. SMS go-live depends on carrier (A2P) approval, which is outside our control."
**Done looks like:** Welcome email sent, kickoff call booked, both forms delivered to client.
**If it stalls:** No reply in 24h → follow up by email + text. No reply in 48h → call. Log every attempt in the tracker.

---

### Task 1.2 — Collect access & credentials (Access Request Form)
**Owner:** [CLIENT] to provide, [AGENCY] to confirm each item works
**What it is:** Gathering the logins/permissions we need to build. This is the #1 thing that stalls onboardings, so treat it as the priority of Week 1.
**Steps — request each of these:**
1. **Business legal info** (for A2P): exact legal business name, EIN/Tax ID, business address, business website URL, support email, support phone. *(Required — A2P cannot be submitted without EIN.)*
2. **Domain/DNS access** OR a technical contact who can add DNS records (for email + calendar/website links). Preferred: they add us as a user to their domain registrar (GoDaddy, Namecheap, etc.).
3. **Lead sources** — access to wherever new leads come from:
   - Website contact/quote form (who manages the site?)
   - **Facebook**: add us as an advertiser/admin on their Facebook Business Page + Ad Account (for Facebook Lead Ads).
   - **Google**: Google Business Profile / Google Ads if used.
   - Any call-tracking number or existing CRM.
4. **Calendar**: which calendar the booked calls should land on (Google Calendar or Outlook) and permission to connect it.
5. **Existing contact list / CRM export** (CSV) if they want past leads imported.
6. **Branding**: logo (PNG), brand colors, and the phone number/email they want SMS/email to appear to come from.
**How to request access safely:** Always have the **client** initiate credential sharing (they invite us as a user, or they enter passwords themselves). **Never** ask for or store raw passwords in plain text. Use their "invite a user / add admin" flows wherever possible.
**Done looks like:** Every row on the Access Request Form is received AND verified working (you logged in / saw the connection succeed).
**If it stalls:** Any item missing after 48h → send a single consolidated chase listing *only* what's still outstanding (never re-ask for what you already have). After 5 business days of a missing critical item (EIN, domain, lead source), escalate to the account manager — the timeline is now at risk and the client must be told.

---

### Task 1.3 — Run the Kickoff Call & complete Business Intake
**Owner:** [AGENCY] leads, [CLIENT] provides answers
**What it is:** A structured call to capture how the business actually operates, so the AI and workflows match reality.
**Steps — capture answers to:**
1. **Services & pricing tiers** (what do they sell, rough price ranges).
2. **Service area** (zip codes / radius) and **business hours + timezone**.
3. **Qualifying questions** — what makes a lead "good"? (e.g., homeowner vs renter, in service area, job type, urgency, budget). These become the AI's qualification logic.
4. **Booking rules** — call length, who takes the calls, buffer time, max bookings/day, round-robin among multiple staff?
5. **Tone/voice** — how should the AI text sound? (friendly/professional/casual). Any words to avoid.
6. **Current process** — how do leads get contacted today, and how fast? (This becomes your ROI baseline.)
7. **Success metric** — what does the client want to see in 30 days? (usually: faster response, more booked calls).
**Done looks like:** Business Intake Form fully filled; you could explain their business to a stranger. Baseline response time recorded.
**If it stalls:** If client can't answer qualification/booking rules on the call, send a short follow-up form with just those items and set a 48h deadline — the build can't start without them.

---

### Task 1.4 — Create & configure the GHL sub-account
**Owner:** [AGENCY]
**What it is:** Spin up the client's workspace inside our agency GHL.
**Steps:**
1. In the agency dashboard, **Accounts → Add Sub-Account** (Location). Name it with the client's business name.
2. Set the sub-account **timezone** (from Intake) — critical; the whole system's timing depends on it.
3. Load **Business Profile**: legal name, address, website, logo, brand colors (Settings → Business Profile).
4. Apply the **Nimvora snapshot** if we have one (a saved template of our standard pipeline/workflows) — this pre-loads much of Week 2's build. If unsure whether to load a snapshot, ask the account manager BEFORE building manually.
**Done looks like:** Sub-account exists, timezone correct, business profile + branding loaded.
**If it stalls:** If sub-account creation fails or the snapshot won't import, screenshot the error and post in the internal build channel — do not proceed to workflows on a half-configured account.

---

### Task 1.5 — Provision the phone number
**Owner:** [AGENCY]
**What it is:** Get the sending phone number that will text/call leads.
**Steps:**
1. In the sub-account: **Settings → Phone Numbers → Add Number**. Choose a local number in the client's area code (from Intake service area).
2. Confirm the number is attached to the sub-account and shows as active.
3. Do **not** attempt live SMS sends yet — sending is blocked until A2P (Task 1.6) is approved.
**Done looks like:** One active local number on the sub-account.
**If it stalls:** No numbers available in the preferred area code → pick the nearest area code in the service area and note it. Billing/wallet error → confirm the sub-account has payment/rebilling set up (escalate to account manager).

---

### Task 1.6 — Submit A2P 10DLC registration ⚠️ DAY 1 PRIORITY
**Owner:** [AGENCY] submits using [CLIENT] business info
**What it is:** The mandatory US carrier registration that authorizes business SMS. Without it, texts get filtered/blocked. It has the **longest and least predictable lead time** in the project, so it goes first.
**Steps:**
1. In the sub-account: **Settings → Trust Center (or Phone → A2P)**.
2. Complete **Brand registration** using the client's exact **legal name, EIN, address, website, and support contact** (from Task 1.2). EIN must match IRS records exactly.
3. Complete **Campaign registration**: describe the use case (customer care / lead follow-up), and provide **sample messages** and the **opt-in/opt-out** description. Use our standard approved sample messages and always include "Reply STOP to opt out."
4. Submit and record the **submission date** in the tracker. Set a reminder to check status every 2 business days.
**Done looks like:** Brand + Campaign submitted; status = "Pending"; submission date logged.
**If it stalls / gets rejected:** Most rejections are (a) EIN/legal name mismatch, (b) no clear opt-in language, or (c) sample messages missing STOP. Fix the specific flagged item and resubmit same day. If it stays pending past **10 business days**, tell the account manager so the client's go-live expectation is reset in writing.

---

### Task 1.7 — Authenticate the sending domain (email)
**Owner:** [AGENCY] configures, [CLIENT] or their tech contact adds DNS records if needed
**What it is:** Set up email so our automated emails land in inboxes, not spam.
**Steps:**
1. In the sub-account: **Settings → Email Services → Dedicated Domain / Domain Authentication**.
2. Enter the sending subdomain (e.g., `mail.clientdomain.com`).
3. GHL generates DNS records (SPF, DKIM, CNAME). Add them at the domain registrar (or send them to the client's tech contact with clear instructions).
4. Return to GHL and click **Verify** until all records show green.
**Done looks like:** Domain shows "Verified"; a test email from the sub-account lands in an inbox (not spam).
**If it stalls:** DNS records not verifying after 24h (DNS can take time to propagate) → re-check for typos, wait, re-verify. If the client won't/can't give domain access, fall back to GHL's default sending domain and note that deliverability will be lower (flag to account manager).

---

### Task 1.8 — Import existing contacts (if applicable)
**Owner:** [AGENCY]
**What it is:** Load the client's past leads/customers so nothing is lost.
**Steps:**
1. Clean the CSV: one header row, at minimum `First Name, Phone, Email`. Remove obvious junk rows.
2. **Contacts → Import Contacts**, map columns, and **tag** the import (e.g., `imported-legacy`) so these contacts are NOT accidentally pushed into the new-lead follow-up (they never opted in for that).
3. Confirm count imported matches the file.
**Done looks like:** Contacts imported, correctly tagged, and excluded from live workflows.
**If it stalls:** Import errors (bad phone formats) → fix formatting in the CSV and re-import. If no list is provided, skip this task and note "no import" in the tracker.

---

## ✅ WEEK 1 GATE — do not start Week 2 until ALL are true:
- [ ] Sub-account created, correct timezone, branding loaded
- [ ] **A2P Brand + Campaign submitted** (date logged)
- [ ] Phone number provisioned and active
- [ ] Sending domain authenticated (or documented fallback)
- [ ] All lead sources access confirmed working (form, Facebook, Google, etc.)
- [ ] Calendar access confirmed
- [ ] Business Intake fully complete (services, qualification rules, booking rules, tone, hours/timezone)
- [ ] Contacts imported & tagged (or "no import" noted)

---

# WEEK 2 — BUILD

**Goal of the week:** The full system is built inside GHL — pipeline, calendar, the 60-second follow-up workflow, the AI qualification bot, and all message templates — and passes internal (team-side) testing. A2P may still be pending; that's fine, we test with team phones.

---

### Task 2.1 — Build the pipeline
**Owner:** [AGENCY]
**What it is:** The visual stages a lead moves through, so the client can see status at a glance.
**Steps:**
1. **Opportunities → Pipelines → Create Pipeline**. Name it e.g. "Lead Follow-Up".
2. Create stages (standard set): `New Lead → Contacted → Engaged/Qualifying → Appointment Booked → Showed → Won → Lost/Unqualified`.
3. Confirm stage names match how the client described their process in Intake.
**Done looks like:** Pipeline with clear, ordered stages that mirror the client's real sales flow.
**If it stalls:** If the client's process doesn't fit the standard stages, adapt names but keep the same logical order; note changes in the tracker.

---

### Task 2.2 — Build and connect the booking calendar
**Owner:** [AGENCY]
**What it is:** The calendar that leads get booked into automatically.
**Steps:**
1. **Calendars → Create Calendar**. Set call length, buffers, business hours, timezone (from Intake).
2. Connect the staff member(s)' Google/Outlook calendar(s) so GHL respects their real availability and writes bookings back.
3. If multiple staff take calls, configure **round-robin**.
4. Set booking rules: min notice, max per day, confirmation + reminder settings.
**Done looks like:** You can open the booking link, see correct availability, and a test booking appears on the connected calendar.
**If it stalls:** Availability shows wrong hours → recheck timezone on BOTH the calendar and the sub-account. Calendar won't connect → have the client re-authorize; token may have expired.

---

### Task 2.3 — Connect lead sources into GHL
**Owner:** [AGENCY]
**What it is:** Make sure every new lead, from every source, lands in GHL instantly (this is what makes 60-second follow-up possible).
**Steps:**
1. **Facebook Lead Ads:** Settings → Integrations → connect Facebook, then map the Lead Form fields to GHL contact fields.
2. **Website form:** either replace with a GHL form/embed, or connect via webhook/Zapier so submissions create a GHL contact instantly.
3. **Google / call tracking / other:** connect via native integration or webhook.
4. For each source, ensure a new lead gets a **source tag** (e.g., `source-facebook`) on creation.
**Done looks like:** A test submission from EACH live source creates a GHL contact within seconds, correctly tagged.
**If it stalls:** Facebook not passing leads → recheck page/ad-account permissions and re-map fields. Website form owner unresponsive → escalate; you cannot guarantee speed-to-lead on a source you don't control.

---

### Task 2.4 — Build message templates (SMS + email)
**Owner:** [AGENCY]
**What it is:** The actual words the system sends. Must sound like the client and always be compliant.
**Steps:**
1. Write the **first-touch SMS** (fires within 60s): friendly, uses the lead's first name, references their inquiry, asks one engaging question. Always include the business name and **"Reply STOP to opt out."**
2. Write the **first-touch email** (backup channel).
3. Write **follow-up sequence** messages (e.g., no-reply nudges at +5 min, +1 hr, +1 day, +3 days).
4. Write **booking confirmation** and **reminder** messages.
5. Use merge fields (`{{contact.first_name}}`, `{{calendar.booking_link}}`) — never hardcode names.
**Done looks like:** All templates written, on-brand (matches Intake tone), compliant (STOP language present), merge fields correct.
**If it stalls:** Unsure of tone → pull 2–3 examples from the client's existing marketing and mirror it. Never send without STOP language — that's a compliance hard rule.

---

### Task 2.5 — Build the 60-second speed-to-lead workflow
**Owner:** [AGENCY]
**What it is:** The core automation. The moment a lead is created, it fires instant outreach and starts qualifying.
**Steps:**
1. **Automation → Workflows → Create Workflow.**
2. **Trigger:** Contact Created (or "Form/FB Lead submitted") — filtered to the live lead-source tags only (exclude `imported-legacy`).
3. **Action 1 (0 seconds):** Send first-touch SMS.
4. **Action 2 (0 seconds):** Move opportunity to "Contacted".
5. **Action 3 (~1 min):** Send first-touch email.
6. **Action 4:** Hand off to the **AI qualification bot** (Task 2.6) to handle the reply conversation.
7. **Follow-up branch:** if no reply, run the timed nudge sequence; stop the sequence the instant they reply or book.
8. Add **opt-out handling:** STOP → mark Do-Not-Contact and exit all workflows.
**Done looks like:** A new test lead triggers an SMS in under 60 seconds and moves to "Contacted" automatically.
**If it stalls:** SMS not firing → confirm the trigger filter matches the test lead's tags, and remember live SMS needs A2P approved (use a team phone + check logs). Workflow loops or double-sends → check for overlapping triggers.

---

### Task 2.6 — Configure the AI qualification & booking bot
**Owner:** [AGENCY]
**What it is:** The AI that texts back and forth with the lead to qualify them and get the call booked — the "employee" that never sleeps.
**Steps:**
1. Enable **Conversation AI** (AI Employee) on the sub-account.
2. Set mode to **qualify + book** for the follow-up conversation.
3. Load the **knowledge/prompt**: services, service area, hours, pricing ranges, FAQs, and the **qualification questions** from Intake.
4. Define the **goal**: qualify against the client's criteria, then offer the booking link and confirm the appointment.
5. Set **guardrails**: stay on topic, hand off to a human for anything outside scope, honor STOP/opt-out, respect business hours for tone.
6. Set the **handoff rule**: when a lead is qualified and wants to book, drop the calendar link (or book directly) and notify staff.
**Done looks like:** In a test conversation, the bot greets, asks qualifying questions, handles a basic objection, and offers/creates a booking.
**If it stalls:** Bot answers off-brand or makes up info → tighten the knowledge base and add explicit "if you don't know, say you'll have the team follow up." Bot won't book → confirm the calendar link/merge field is correct and the calendar has availability.

---

### Task 2.7 — Set up internal notifications & reporting
**Owner:** [AGENCY]
**What it is:** Make sure the client's staff know when something needs a human, and that we can prove results.
**Steps:**
1. Notify staff (SMS/email/GHL app) on: **appointment booked**, **hot lead / human handoff requested**.
2. Build/enable a simple **dashboard**: leads in, response time, conversations, appointments booked.
3. Set up a **weekly report** (email) to the client owner.
**Done looks like:** A test booking sends a staff notification; dashboard shows test activity.
**If it stalls:** Notifications not arriving → confirm staff contact details and notification channel are set on the user profile.

---

### Task 2.8 — Internal end-to-end test (team-side)
**Owner:** [AGENCY]
**What it is:** Full dry run using team phones/emails before the client ever sees it.
**Steps:**
1. Submit a fake lead through **each** connected source.
2. Confirm: SMS fires <60s → bot converses → qualifies → books → calendar updates → staff notified → opportunity moves through stages.
3. Test the **STOP** opt-out and confirm the contact exits everything.
4. Fix every defect found; re-run until clean.
**Done looks like:** At least 2 consecutive fully clean end-to-end runs from every live source.
**If it stalls:** Any step fails → fix and RE-RUN the whole flow (not just the broken step). Do not advance to Week 3 on a partially working system.

---

## ✅ WEEK 2 GATE — do not start Week 3 until ALL are true:
- [ ] Pipeline built and matches client's real process
- [ ] Calendar built, connected, correct availability, test booking works
- [ ] Every live lead source creates a tagged contact in seconds
- [ ] All SMS/email templates written, on-brand, STOP-compliant
- [ ] 60-second workflow fires and moves stages automatically
- [ ] AI bot qualifies and books in test conversations
- [ ] Notifications + dashboard + weekly report configured
- [ ] 2+ clean internal end-to-end runs from every source

---

# WEEK 3 — TESTING, TRAINING & A2P CLEARANCE

**Goal of the week:** The client themselves validates the system (UAT), staff are trained, A2P is confirmed **approved**, and we're cleared to send real SMS. This is the last week before real leads flow.

---

### Task 3.1 — Confirm A2P is APPROVED
**Owner:** [AGENCY]
**What it is:** The hard gate for SMS go-live. Verify, don't assume.
**Steps:**
1. Check **Trust Center / A2P status** — Brand AND Campaign must show **Approved/Registered**.
2. Send one real test SMS to a team phone and confirm delivery in the logs.
**Done looks like:** A2P Approved + a real SMS delivered successfully.
**If it stalls:** Still pending → **go-live cannot include live SMS.** Notify the account manager and client immediately; either (a) push go-live, or (b) launch email-only and switch SMS on the day A2P clears. Never send business SMS on an unapproved brand.

---

### Task 3.2 — Client User Acceptance Testing (UAT)
**Owner:** [AGENCY] guides, [CLIENT] tests
**What it is:** The client runs a fake lead through the system and approves the experience in writing.
**Steps:**
1. Give the client a short UAT script: "Submit yourself as a lead from your website/FB and reply to the texts."
2. Have them confirm: response felt fast, messages sounded like their brand, booking worked, the appointment hit the right calendar.
3. Collect **written sign-off** (email or form) approving message wording and booking behavior.
**Done looks like:** Client has personally seen a lead go through and approved it in writing.
**If it stalls:** Client requests wording/tone changes → make them, then re-run UAT. Client goes quiet → the system can't go live without sign-off; escalate and re-book a UAT session.

---

### Task 3.3 — Train the client & staff
**Owner:** [AGENCY]
**What it is:** Teach the people who'll use it daily, so they don't need us for routine things.
**Steps:**
1. Run a 30–45 min training (record it). Cover: where to see leads (Conversations + Opportunities), how to take over a conversation from the bot, how bookings appear, how to read the dashboard/weekly report.
2. Deliver a **1-page quick-start guide** and the recording.
3. Confirm each staff member can log in and find their leads.
**Done looks like:** Staff can log in, locate a conversation, and take over from the bot unaided.
**If it stalls:** Staff can't log in → resend invites, confirm roles/permissions. Low attendance → send the recording + guide and require a confirmation reply.

---

### Task 3.4 — Pre-launch checklist & final review
**Owner:** [AGENCY]
**What it is:** Last sweep before flipping it live.
**Steps:**
1. Re-verify timezone, business hours, and that after-hours behavior is correct.
2. Confirm opt-out/STOP works and DND is honored.
3. Confirm imported/legacy contacts are still excluded from live workflows.
4. Confirm billing/rebilling is active so nothing shuts off on launch day.
5. Turn OFF any test/demo workflows and delete test contacts/bookings.
**Done looks like:** Clean account, only production workflows live, no test data left behind.
**If it stalls:** Any check fails → fix before go-live. This checklist is non-negotiable.

---

## ✅ WEEK 3 GATE — do not go live until ALL are true:
- [ ] **A2P Approved** and a real SMS delivered
- [ ] Client completed UAT and signed off in writing
- [ ] Staff trained; can find and take over leads
- [ ] Pre-launch checklist fully passed
- [ ] Test data removed, only production workflows enabled

---

# GO-LIVE

**Goal:** Flip the system on for real leads and watch it closely for 72 hours.

### Task 4.1 — Flip live & announce
**Owner:** [AGENCY]
**Steps:**
1. Enable all production workflows and confirm the AI bot is active.
2. Confirm every lead source is pointing at the live system.
3. Send the client a "You're live" message with the dashboard link and what to expect.
**Done looks like:** System is live; client notified.
**If it stalls:** Any source not confirmed live → do not announce until it is.

### Task 4.2 — First real-lead verification
**Owner:** [AGENCY]
**Steps:**
1. Watch the first 3–5 **real** leads flow through end-to-end.
2. Confirm each got contacted <60s, was handled by the bot, and moved stages correctly.
**Done looks like:** Real leads confirmed flowing correctly with fast response.
**If it stalls:** A real lead stalls → jump in, hand-handle that lead so the client loses nothing, then fix the root cause immediately.

### Task 4.3 — 72-hour active monitoring
**Owner:** [AGENCY]
**Steps:**
1. Check conversations, response times, deliverability, and bookings at least twice daily for 3 days.
2. Watch for: undelivered SMS, bot going off-script, timezone/booking errors, duplicate messages.
**Done looks like:** 72 hours with real leads and no unresolved defects.
**If it stalls:** Any recurring defect → pause the affected piece, fix, re-test, resume.

## ✅ GO-LIVE GATE:
- [ ] System live, all sources pointed at it
- [ ] 3–5 real leads verified end-to-end
- [ ] 72 hours monitored with no unresolved issues

---

# POST-GO-LIVE — STABILIZATION & HANDOFF (Days 1–14)

**Goal:** Prove the system is stable on real volume, tune the edges, and transition the client to steady-state (retention starts here).

### Task 5.1 — Week-1 tuning
**Owner:** [AGENCY]
**Steps:** Review real conversations; refine bot answers, message timing, and qualification logic based on what actual leads say. Fix any deliverability dips.
**Done looks like:** Bot handling real leads smoothly; client-reported issues resolved.
**If it stalls:** Pattern of bad bot replies → update knowledge base and add guardrails; re-review after 2 days.

### Task 5.2 — Day-14 results review call
**Owner:** [AGENCY] + [CLIENT]
**Steps:** Present the numbers vs. the baseline from Task 1.3 (response time before/after, leads contacted, appointments booked). Tie it back to the 40–60% conversion-lift promise. Confirm the client is happy and set the ongoing cadence (monthly reporting/optimization).
**Done looks like:** Client has seen real results, confirms satisfaction, and understands the ongoing service.
**If it stalls:** Results below expectations → diagnose (lead quality? volume? bot?) and set a concrete improvement plan before the call ends. Never let the 14-day mark pass without a results conversation.

### Task 5.3 — Formal handoff to account management
**Owner:** [AGENCY]
**Steps:** Move the account from "onboarding" to "managed." Hand over the tracker, recordings, credentials list, and open items to the account manager/retention owner.
**Done looks like:** Account manager confirms receipt; onboarding tracker marked COMPLETE.

## ✅ ONBOARDING COMPLETE when:
- [ ] 14 days of stable real-lead operation
- [ ] Day-14 results reviewed with client, satisfaction confirmed
- [ ] Account formally handed to account management

---

# APPENDIX A — COMMON FAILURE POINTS (memorize these)
| Failure | Where it bites | Prevention |
|---|---|---|
| A2P started late / rejected | Blocks all SMS at go-live | Submit Day 1; match EIN/legal name exactly; include STOP + opt-in |
| Wrong timezone | Messages/bookings fire at wrong times | Set timezone on sub-account AND calendar in Week 1; re-verify pre-launch |
| Client access delays | Whole timeline slips | Request everything Day 1; chase at 48h; escalate at 5 days |
| Legacy contacts pushed into live workflow | Compliance risk, angry old customers | Tag imports; exclude from triggers |
| Missing STOP language | Compliance violation | Hard rule: no template ships without it |
| Facebook/website lead not passing | Speed-to-lead silently broken | Test EVERY source end-to-end before go-live |
| Bot hallucinates pricing/answers | Bad client experience | Tight knowledge base + "defer to team if unsure" guardrail |
| Calendar not writing back | Double-bookings | Connect real Google/Outlook; test a live booking |
| "Done" at go-live | Month-2 churn | 72h watch + 14-day stabilization + results call |

# APPENDIX B — ESCALATION RULES (when the VA must stop and flag a human)
Stop and escalate to the account manager for any of: EIN/legal name issues, phone porting requests, billing/rebilling failures, A2P rejection or >10 business days pending, client silent >5 business days on a critical item, any compliance question (opt-in/opt-out), or a client asking to change the signed scope. Never guess on these.
