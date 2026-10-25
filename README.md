# ATELIER PROPORTION — Editorial Comp-Card & Character Reference Showcase

An interactive editorial showcase, comp-card archive, and proportion blueprint database tailored for tall talent management (>165 cm stature), character design plates, and high-fashion modeling.

## 🚀 Key Features

- **Verified Physical Measurement Ledger**: Stature thresholding (>165 cm), Bust-Waist-Hip ratios, cup sizes, shoe conversions, and head-to-body proportion calculations.
- **Interactive Multi-Angle Comp-Cards**: High-resolution 4-view inspection (Headshot, 90° lateral profile, 45° angle, full-body stature silhouette).
- **Craniofacial Blueprint Reference**: Jawline gonion angles, cheekbone splay index, eye symmetry tilt, and Golden Ratio guide overlays.
- **Orthographic Character & Talent Studio**: 8-head proportional grid workbench with plumb line guides.
- **Custom Comp-Card Entry**: Add your own models and characters with live `localStorage` persistence.
- **Print / PDF Ready**: Dedicated `@media print` layout to export 300 DPI comp-cards directly from your browser.
- **Zero Build Step**: Native HTML5, modern Tailwind CSS via CDN, and Vanilla JS. Fully compatible with GitHub Pages out of the box.

---

## 💻 Local Testing & Preview

You can open the project directly in your browser:

1. Navigate to this directory in File Explorer or PowerShell:
   ```powershell
   cd C:\Users\yf22_\.gemini\antigravity\scratch\editorial-compcard-showcase
   ```
2. Double-click `index.html` to open it in Chrome, Edge, or Firefox.
3. Or serve it locally using Python:
   ```powershell
   python -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

---

## 🌐 Deploy to GitHub Pages (2 Minutes)

Follow these simple steps to push and deploy for free on GitHub Pages:

### Step 1: Initialize Git in this directory
Open PowerShell inside `editorial-compcard-showcase` and run:

```powershell
cd C:\Users\yf22_\.gemini\antigravity\scratch\editorial-compcard-showcase
git init
git add .
git commit -m "Initial release: Editorial comp-card & blueprint database"
git branch -M main
```

### Step 2: Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new).
2. Name your repository (for example: `editorial-showcase` or `talent-compcards`).
3. Keep it **Public** (required for free GitHub Pages).
4. Click **Create repository**.

### Step 3: Link and Push
Run the command GitHub gives you (replace `<your-username>` and `<repo-name>` with yours):

```powershell
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### Step 4: Enable GitHub Pages
1. In your GitHub repository, click **Settings** (top tab).
2. On the left sidebar, click **Pages**.
3. Under **Build and deployment > Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and folder `/(root)`.
5. Click **Save**.

Your website will be live in about 60 seconds at:
```
https://<your-username>.github.io/<repo-name>/
```
