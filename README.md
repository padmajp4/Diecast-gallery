🏎️ Diecast Collection — Web App

A modern, fully responsive web application to showcase and manage my personal 1:64 diecast car collection.
Built with vanilla JavaScript, JSON-driven data, Google Sheets sync, and Firebase Hosting.

🔗 Live Website
👉 https://www.diecast.padmajp.com/

🚗 Features
- Beautiful car gallery with images, brands, series, and filters
- Detailed modal view with carousel, description, tags, and related cars
- Shareable URL for each car
- Google Sheets → GitHub JSON sync (automated via GitHub Actions)
- Admin upload system for images
- Mobile-friendly, fast, clean UI
- OG image support for social sharing
- Brand logos & metadata badges
- Support for multiple images per car
- Quantity indicator (stacked car icons)

🛠️ Tech Stack

Frontend: HTML, CSS, JavaScript
Data Source: Google Sheets (synced via GitHub Actions)
Hosting: Firebase Hosting
CI/CD: GitHub Actions (Car sheet → JSON → Deploy)
Images: Uploaded manually to GitHub + referenced in Sheets

📁 Project Structure
/assets          → Images, brand logos, icon sets
/js              → Main app logic (home, modal, config, admin)
data.json        → Generated car database (auto from Sheets)
firebase.json    → Hosting configuration
.github/workflows → Sheet-to-JSON sync automation

🔄 Data Workflow

Add or update car details in Google Sheets
Workflow runs and syncs the sheet → JSON file in GitHub
Website updates automatically using Firebase Hosting
This makes it easy to scale the collection without touching code.

📸 Screenshots (Optional)
You can drag-and-drop screenshots here later.

📬 Feedback / Contact
If you’d like to discuss diecasts, the project, or improvements:

Padmaj P Kumar
🔗 Live Site: https://www.diecast.padmajp.com/

Just say "add badges".

If you want a more minimal, fun, or technical README style, I can rewrite it too.
