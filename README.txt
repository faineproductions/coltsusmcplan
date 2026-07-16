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
