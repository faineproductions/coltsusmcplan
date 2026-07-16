MARINE PREP PRO

Files:
- index.html
- app.js
- manifest.json
- sw.js
- icon.svg

iPhone preview:
Tap the ZIP in Files, then Preview Content. The app interface should appear.
Apple Quick Look may not reliably preserve all saved data.

Best use:
Host the five files on a static web host, then open the URL in Safari and use
Share > Add to Home Screen. Data is saved locally in that browser/device.

Features:
- 52-week Year 1 plan
- Dashboard and readiness score
- Weekly checklists
- Tap-to-open demonstrations
- Calendar
- Timer
- Progress logs and charts
- Swim gates
- Ruck and joint tracking
- Achievements
- Supplement reminders

Version 2:
- Strength tab for Strength A, B, C, bodyweight, and recovery workouts.
- Step-by-step exercise diagrams with Previous and Next controls.
- Tap any written step to display its visual.

Version 3:
- Added Training Mode selector.
- Modes: Normal Week, Finals Week, Equipmentless Week, Pre-College Week,
  Recovery Week, and Swimming-Focus Week.
- Each special mode saves its checklist independently.
- Switching modes does not change or erase the selected normal Year 1 week.

Version 4:
- Visible v4 label in the app header and browser title.
- Marine readiness score expanded to 0–1000.
- Automatic weight and difficulty recommendations from exercise logs.
- Exercise logging for weight, sets, reps, RPE, pain, and notes.
- Actual video button opens a YouTube search for the exercise.
- Expanded achievements.
- Full statistics page and readiness history.
- Ship-date countdown.
- Export/import backup.
- Automatic progression guide.

Version 4.1 hotfix:
- Fixed a JavaScript syntax error in the statistics code.
- The error prevented tabs, buttons, and most interactive features from working.
- Added visible v4.1 and BUILD 4.1 labels.

Version 4.2:
- Removed BUILD number from the YEAR 1 badge.
- Readiness categories are now tappable.
- Each category explains the score, data used, strengths, weaknesses, and next actions.
- Added detailed explanations for consistency, strength, endurance, swimming, rucking, and recovery.

Version 4.3:
- Added Hotel Week training mode.
- Hotel Week uses quiet, low-space joint armor, posture, mobility, and lower-body maintenance.
- Normal sightseeing and travel walking counts as the main conditioning.
- Push-ups and other conspicuous floor work are not required.

Version 4.4:
- Added Supabase email magic-link sign-in.
- Added automatic cloud backup to the app_backups table.
- Added manual Back up this device, Restore cloud backup, and Sign out controls.
- Local storage remains the offline source of truth.
- Added conflict protection so a blank or older installation does not silently overwrite a newer cloud backup.
- Added visible sync state and last-cloud-save time.

Version 4.5:
- Fixed mixed-version caching where v4.4 HTML could load with the old v4.3 app.js.
- Added versioned asset URLs.
- Added immediate service-worker activation and removal of old caches.
- Changed page navigation to network-first updates.
- Added clear success/error messages and a Sending state for email sign-in.

Version 4.6:
- Readiness categories now begin at a true 0%.
- Categories only gain readiness from saved evidence for that category.
- No starting bonus or assumed readiness is awarded.
- Monday and other completed workouts remain user data and are expected to restore through cloud sync after updating.

Version 5.1 major feature release:
- Expanded Today dashboard and minimum viable workout.
- Missed-workout handling.
- Pain-location tracking and conservative recovery safeguards.
- Running log, pace/mileage summaries, growth warning, and run/walk timer.
- Swimming confidence tracker.
- Marine benchmark comparison.
- Guided complete test-day records.
- Calendar/travel training-mode planning.
- Five-entry backup/checkpoint history, including pre-update checkpoints.
- In-app reminders and weekly reflection.
- Notes search and personal exercise substitutions.
- On-device-only progress photo storage using IndexedDB.
- Light/dark appearance control.

Version 5.2:
- Combined Progress Log and Command into one Tools & Progress area.
- Added a three-line slide-out menu in the upper-right corner.
- Kept the bottom bar for frequently used daily sections.
- Added menu shortcuts for Tools & Progress, Statistics, Appearance, and Cloud Backup.
- Preserved old Log and Command navigation calls for compatibility.

Version 5.3:
- Fixed unreadable Command tools tab text color.
- Cleaned up a stray visible HTML artifact in Tools & Progress.
- Updated cache-busting so the corrected styles load reliably.

Version 5.4:
- Fixed unreadable header and description text colors in the three-line slide-out menu.
- Ensured menu buttons, titles, and supporting text stay readable in dark and light themes.

Version 5.5:
- Bottom bar now contains Home, Week, Calendar, and Logs.
- Moved Statistics and Strength Library into the three-line menu.
- Command tools remain in the three-line menu.

Version 5.6:
- Added daily walking totals for distance, time, steps, and notes.
- Added rolling 7-day walking totals.
- Walking remains separate from run and ruck readiness scoring.

Version 5.7:
- Added tap-to-edit for progress, exercise, walking, running, and test-day logs.
- Saved entries reload into their original form and update in place.
- Added edit status and cancel controls.

Version 5.8:
- Walking log now auto-loads saved values when a date is selected.
- Selecting a date with an existing walking entry fills distance, time, steps, and notes.
- Selecting a date with no saved entry clears the form for a new record.
- Saving while an existing date is loaded updates that entry instead of duplicating it.

Version 5.9:
- Every dated log now loads saved values when its date is selected.
- Added date selectors to progress and individual strength exercise logs.
- Running and test-day dates now load matching entries directly.
- Unused dates clear the form for new data; loaded dates update the existing record.

Version 6.0:
- Replaced email magic-link authentication with an email one-time-code flow.
- The user stays inside the pinned Home Screen app and types the emailed code directly.
- Avoids Safari opening the link and creating the session in the wrong browser context.
- Existing Supabase cloud backups and accounts remain compatible.

Version 6.1:
- Cloud initialization now times out instead of hanging indefinitely.
- Added Retry cloud connection button and diagnostic status.
- Added online/offline detection and automatic retry when connectivity returns.
- Added timeouts for Supabase session and backup requests.

Version 6.2:
- Replaced email-code authentication with direct email and password authentication.
- Added Create account and Sign in buttons.
- Removed dependency on SMTP, Resend, magic links, OTP codes, and Safari redirects.
- Added 15-second authentication timeouts and readable Supabase error messages.
- Existing app_backups cloud storage and local offline data remain compatible.

Version 6.3:
- Added a prominent back arrow to every exercise demonstration.
- Added a second Back to Strength Library button at the bottom of each demo.
- Backdrop and Close controls now return reliably to the Strength Library.
- Replaced YouTube search pages with one preselected direct instructional video for every exercise.
- Shows the selected instructional channel beneath the video button.

Version 6.4:
- Removed long-form exercise tutorials.
- Video buttons now open only quick YouTube Shorts-style demonstrations.
- Exercises without a suitable short clip show no video rather than linking to a long or weak tutorial.
- Renamed the button to Watch quick demo.

Version 6.5:
- Added individual completion checkboxes to every planned item on Home → Today.
- Added individual completion checkboxes to every planned item on the Week tab.
- The full-day checkbox checks or clears all items for that day.
- Days show partial progress such as “1 of 4 items checked” and “In progress.”
- Weekly progress now reflects individual items instead of requiring all-or-nothing days.
- Existing completed-day data remains compatible and is treated as all items complete.

Version 6.6:
- Standardized set-based exercise prescriptions as SetsxReps • Seconds Rest.
- Added exercise-specific recommended rest periods.
- Preserved existing running, walking, swimming, and interval instructions without artificial set-rest labels.
- Updated prescriptions consistently on Today, Week, Strength Library, and exercise demos.

Version 6.7:
- Fixed blank Today and Week exercise lists caused by a missing HTML escaping helper.
- Preserved individual exercise checkboxes and recommended rest formatting.

Version 6.7.1:
- Rebuilt Today and Week exercise rendering with direct DOM elements instead of fragile HTML strings.
- Restored all exercises, individual checkboxes, demos, and set/rep/rest labels.
- Added safe plan fallbacks and visible rendering-error notices.
- Added a one-time display-cache cleanup.
- Changed HTML and JavaScript fetching to network-first to prevent stale blank screens.

Version 6.7.2:
- Stores Hotel Week and every other alternate training mode separately for each selected Year 1 week.
- Prevents Week 1 alternate-mode checkmarks from appearing in Week 2, Week 3, or later weeks.
- Alternate-mode banners now state which Year 1 week owns the displayed progress.
- Migrates the former shared alternate-mode record into only the first week opened after upgrading.
- Keeps normal-week and cloud/local backup compatibility.
- Calendar completion now reflects individual normal-week items.
