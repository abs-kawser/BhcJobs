# BhcJobs - React Native App

This project was developed as part of a given task to build the **BhcJobs** mobile application using **React Native CLI**. The task required implementing a Landing Page, Login Screen, and Registration Screen with full API integration as provided in the task document. All required screens have been completed with dynamic data fetched from the provided APIs. UI accuracy has been tested and verified on Android devices up to **Android 16**. The production APK is available for download via the Google Drive link below.

📦 **Download APK:** [Click here to download](https://drive.google.com/file/d/1X9SRrHOEg2vacEIVteII6PKeJAHJYaP7/view?usp=drive_link)

🔗 **GitHub Repository:** [https://github.com/abs-kawser/BhcJobs](https://github.com/abs-kawser/BhcJobs)

---

## Features

- **Landing Page**
  - Hero / Banner section
  - Popular Industries section (fetched from API)
  - Recommended Jobs section (fetched from API)
  - Popular Companies section (fetched from API)
  - Smooth animations using gesture handler for an enhanced user experience
  - UI accuracy tested and matched against the reference design at [bhcjobs.com](https://bhcjobs.com)

- **Login Screen**
  - Phone & password input fields
  - Form validation
  - Loading indicator during API request
  - API integration with `/api/job_seeker/login`

- **Registration Screen**
  - Full registration form (name, phone, email, password, confirm password, passport number, date of birth, gender)
  - OTP verification screen after successful registration
  - Loading indicator during API request
  - API integration with `/api/job_seeker/register` and `/api/job_seeker/phone_verify`

- **Navigation**
  - Smooth navigation between Login and Registration screens

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| React Native CLI | Mobile framework |
| React Navigation | Screen navigation |
| Axios | API calls |
| React Native Gesture Handler | Animations & gesture support |
| React Native Reanimated | Smooth UI animations |
| useState / useEffect | State management |

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or above)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [React Native CLI](https://reactnative.dev/docs/environment-setup)
- Android Studio (for Android emulator or physical device)

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/abs-kawser/BhcJobs.git
cd BhcJobs
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
```

### 3. Run on Android

```bash
npx react-native run-android
```

---

## APK Installation (Android)

1. Download the APK from the link below:
   👉 [Download app-release.apk](https://drive.google.com/file/d/1X9SRrHOEg2vacEIVteII6PKeJAHJYaP7/view?usp=drive_link)
2. Enable **Install from Unknown Sources** on your Android device
3. Open the APK file and install

> Tested on Android versions up to **Android 16**

---

## API Reference

**Base URL:** `https://dev.bhcjobs.com`

**Image Storage URL:** `https://dev.bhcjobs.com/storage`

### GET Endpoints

| Endpoint | Description |
|----------|-------------|
| `/api/industry/get` | Fetch all industries |
| `/api/job/get` | Fetch all jobs |
| `/api/company/get` | Fetch all companies |

### POST Endpoints

| Endpoint | Description | Required Fields |
|----------|-------------|-----------------|
| `/api/job_seeker/register` | Register new user | name, phone, email, password, confirm_password, passport_number, dob, gender |
| `/api/job_seeker/phone_verify` | Verify OTP | phone, otp |
| `/api/job_seeker/login` | Login user | phone, password |


