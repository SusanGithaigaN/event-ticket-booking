# Conference Ticket Generator

## Project Overview
The **Conference Ticket Generator** is a React-based application designed to allow users to fill out a form with their details, validate the inputs, and generate a personalized conference ticket. The application prioritizes accessibility, responsiveness, and state persistence.

---

## Features

### 📝 Form Elements
- **Full Name**: Text input for the user's full name.
- **Email Address**: Email input field with validation.
- **Avatar Upload**: Image upload feature using Cloudinary or other external image hosting services. Only the image URL is submitted.
- **Submit Button**: Validates the form and triggers ticket generation upon successful submission.

### ✅ Form Validation
- All fields are required.
- Email must be in a valid format.
- Avatar upload accepts only Cloudinary URLs or valid external image links.
- Displays clear and accessible error messages near respective fields.

### 💾 State Persistence
- User inputs are stored using **IndexedDB** or **localStorage**.
- Data remains intact even if the page is refreshed.

### ♿ Accessibility
- All form fields, hints, and error messages are screen-reader accessible.
- Focusable elements with clear hover and focus states.
- Supports complete keyboard navigation.

### 🎫 Ticket Generation
- Displays a personalized conference ticket upon successful form submission.
  - **Full Name**
  - **Email Address**
  - **Avatar** (image from the provided URL)
- Ticket generation occurs only when all validations are passed.

### 📱 Responsive Design
- Form and ticket layout seamlessly adapt to all screen sizes.
- Optimized for mobile and desktop screens.
- Ensures proper spacing and stacking for small screens.

---

## How It Works

1. **Fill the Form**:
   - Enter your full name and email address.
   - Upload your avatar (via Cloudinary URL or valid image link).

2. **Validation**:
   - Ensure all inputs meet the validation criteria.
   - Fix any issues based on clear error messages provided near invalid fields.

3. **Generate Ticket**:
   - Upon successful validation, the app generates and displays a conference ticket.

4. **Persistence**:
   - Inputs are saved locally, allowing users to resume their progress even after a page refresh.

---

## Acceptance Criteria

### Form Validation
- All required fields must be completed.
- Email address must follow a valid format.
- Avatar upload accepts only valid external image links.
- Displays relevant error messages near invalid inputs.

### State Persistence
- User inputs persist across sessions using **IndexedDB** or **localStorage**.

### Ticket Generation
- Displays full name, email address, and avatar.
- Ticket appears only after successful validation.

### Accessibility
- All form elements and messages are screen-reader accessible.
- Supports complete navigation and submission using the keyboard.

### Responsive Design
- Fully responsive form and ticket layout.
- Optimized for both mobile and desktop screens.

---

## Tech Stack
- **Frontend**: React 
- **State Management**: IndexedDB 
- **Hosting**: Netlify
---
