# Connecting Firebase to Telegram

This guide explains how to setup a workflow where an event in Firebase (like a contact form submission) triggers a notification to a Telegram bot.

## 1. Telegram Bot Setup

### A. Create a Bot
1. Open Telegram and search for [@BotFather](https://t.me/botfather).
2. Send `/newbot` and follow the instructions to get your **Bot API Token**.
3. Copy the token. You will need it for your environment variables.

### B. Get Your Chat ID
1. Search for your new bot in Telegram and press **Start**.
2. Send a message to the bot (e.g., "Hello").
3. Use a tool or a simple script to fetch your `chat_id`. 
   > **Note:** In this project, you can use the built-in helper at `/get-chat-id.html` (run locally) to find your ID.

---

## 2. Firebase Configuration

### A. Setup Firestore
1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a project and enable **Firestore Database**.
3. Use the following rules for development (allows writing but restricts reading):
   ```js
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /contacts/{document=**} {
         allow write: if true;
         allow read: if false;
       }
     }
   }
   ```

### B. Get Web Config
1. Register a Web App in your Firebase project settings.
2. Copy the `firebaseConfig` object.

---

## 3. Integration Logic

### Option A: Client-Side Trigger (Easier)
You can trigger the Telegram message directly from your React/Vite app when the Firebase write succeeds.

```javascript
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';

async function handleSubmit(data) {
  // 1. Save to Firebase
  await addDoc(collection(db, "contacts"), data);
  
  // 2. Trigger Telegram Message
  const botToken = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
  const chatId = import.meta.env.VITE_TELEGRAM_CHAT_ID;
  const text = `New Contact Form Submission!\nName: ${data.name}\nEmail: ${data.email}`;
  
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: text })
  });
}
```

---

## 4. Environment Variables

Create or update your `.env` file with these keys:

```env
VITE_FIREBASE_API_KEY=your_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_TELEGRAM_BOT_TOKEN=your_bot_token
VITE_TELEGRAM_CHAT_ID=your_chat_id
```
