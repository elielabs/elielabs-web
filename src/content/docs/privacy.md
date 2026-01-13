---
title: Privacy Policy
description: Privacy Policy for all Chrome Extensions and products developed by Elie Labs.
---

**Last Updated:** January 13, 2026

This Privacy Policy applies to **all Chrome Extensions** and software products developed by **Elie Labs** (including but not limited to "Notion to PPT Generator", "ChatGPT & Gemini to Notion Clipper", and future releases).

At Elie Labs, we are software engineers who value precision and security. We build tools that respect your data ownership.

## 1. Our "Local-First" Philosophy

**We do not sell your data.**
**We do not act as a middleman for your content.**

Our extensions are architected to run **locally within your browser**. When you use our tools to process data (e.g., converting notes, saving chats, or formatting slides), the data flow occurs directly between your browser and the destination service APIs (such as Notion, Google Drive, or OpenAI). **Your personal content does not pass through Elie Labs servers.**

## 2. What Data We Collect (and What We Don't)

### A. Your Content (Notes, Slides, Chats)
* **We DO NOT store or view your content.**
* All processing logic (parsing, formatting, converting) happens inside the Chrome Extension background script or your local browser environment.

### B. Authentication Tokens
* **We DO NOT have access to your passwords.**
* When you log in to third-party services (e.g., Notion, Google) via our extensions, the authentication tokens (OAuth) are stored securely in your browser's local storage (`chrome.storage.local`). These tokens never leave your device except to communicate directly with the respective API providers.

### C. Usage Data
* **We DO NOT track individual user behavior.**
* We may collect anonymous, aggregated metrics provided by the **Chrome Web Store** (such as daily active users or uninstall rates) to monitor the health of our products. This data is not personally identifiable.

### D. Payment Information
* We use **Gumroad** as our payment processor.
* Elie Labs does not store your credit card details. Gumroad provides us with your **email address** and **license key** solely for license verification and customer support purposes.

## 3. Third-Party Services

To provide functionality, our extensions may interact with the following trusted third-party services. We recommend reviewing their privacy policies:

* **Gumroad:** For license management and payments.
* **Canny.io:** For roadmap voting and user feedback.
* **Target APIs:** Depending on the extension you use, data may be sent to specific APIs (e.g., Notion API, Google Slides API) at your direct request.

## 4. Permissions Usage

Our extensions request the minimum permissions necessary to function.
* **Host Permissions (e.g., `*://*.notion.so/*`):** Required to read the page content you want to process or convert.
* **Storage:** Required to save your settings and preferences locally.
* **Identity:** Required for OAuth authentication with third-party services.

We never use these permissions to track your browsing history or inject ads.

## 5. Changes to This Policy

We may update this Privacy Policy to reflect changes in our products or legal requirements. The latest version will always be available at [elielabs.com/privacy](https://elielabs.com/privacy).

## 6. Contact Us

If you have any questions about this Privacy Policy or our engineering practices, please contact us at:

**Email:** elielabs.service@gmail.com