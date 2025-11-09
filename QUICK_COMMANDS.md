# Quick Commands - Web & Mobile App

## 🌐 Web App Commands

### Development (Local Testing)
```bash
npm run dev
```
- Starts development server at `http://localhost:5173`
- Hot reload enabled
- Use this while developing

### Production Build
```bash
npm run build
```
- Builds web app for production
- Output in `dist/` folder
- Use this before deploying or syncing to mobile

### Preview Production Build
```bash
npm run preview
```
- Preview the production build locally
- Test before deploying

---

## 📱 Mobile App Commands

### Build & Sync (After Web Changes)
```bash
npm run build && npx cap sync
```
- Builds web app
- Syncs changes to Android project
- **Use this every time you make changes to your web app**

### Open Android Studio
```bash
npx cap open android
```
- Opens Android Studio with your project
- Build APK from Android Studio

---

## 🔄 Complete Workflow

### When You Make Changes to Your Web App:

1. **Build web app:**
   ```bash
   npm run build
   ```

2. **Sync with Android:**
   ```bash
   npx cap sync
   ```

3. **Build APK in Android Studio:**
   - Open Android Studio: `npx cap open android`
   - Build > Build Bundle(s) / APK(s) > Build APK(s)
   - Or click Run button to install on device

### One-Line Command (Recommended):
```bash
npm run build && npx cap sync
```

Then open Android Studio and build the APK.

---

## 📝 Summary

**Most Used Commands:**
- `npm run dev` - Develop web app
- `npm run build && npx cap sync` - Build web + sync mobile
- `npx cap open android` - Open Android Studio

**That's it!** These are the only commands you need regularly.

