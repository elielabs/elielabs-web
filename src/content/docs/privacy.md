---
title: Privacy & Refund Policy
description: Privacy Policy and Refund Policy for all Chrome Extensions and products developed by Elie Labs.
---

**Last Updated:** April 17, 2026

This Privacy Policy applies to **all Chrome Extensions** and software products developed by **Elie Labs** (including but not limited to "Notion to PPT Generator", **"Notion AI Bridge"** (formerly ChatGPT & Gemini to Notion Clipper), "AI Floating Messenger", and future releases).

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
* We use **Lemon Squeezy** as our Merchant of Record (MoR) and payment processor.
* Elie Labs does not store your credit card or payment details. Lemon Squeezy securely handles all transactions and provides us only with your **email address** and **license key** solely for license verification, order fulfillment, and customer support purposes.

## 3. Third-Party Services

To provide functionality, our extensions may interact with the following trusted third-party services. We recommend reviewing their privacy policies:

* **Lemon Squeezy:** For secure checkout, license management, and payment processing.
* **Canny.io:** For roadmap voting and user feedback.
* **Target APIs & Notion:** Depending on the extension you use, data is sent directly to specific APIs (e.g., Notion API) at your direct request.
* **Supported AI Platforms:** Our tools interact locally with your active sessions on platforms including **OpenAI (ChatGPT), Google (Gemini), Anthropic (Claude), Perplexity, and DeepSeek** via your browser. We do not intercept these chats.
* **ImgBB (Image Hosting):** Specifically for "Notion AI Bridge", when you clip AI-generated diagrams or artifacts that require visual saving, the extension temporarily uploads an anonymous, cropped screenshot of that specific artifact to ImgBB (`api.imgbb.com`) to generate a secure public URL. This is strictly required because Notion's API mandates public URLs for embedding images into documents. We do not upload your personal photos or full browser screens.

## 4. Permissions Usage

Our extensions request the minimum permissions necessary to function.

* **Host Permissions (`<all_urls>` / all websites):**
  * **For AI Floating Messenger:** Required solely to display the floating chat UI over the websites you currently browse.
  * **For Notion AI Bridge:** Required to safely capture screenshots (`captureVisibleTab`) of complex AI artifacts (like charts or interactive code components) from supported AI platforms. Chrome's security model requires this permission to trigger screenshots via injected in-page UI buttons.
  * *We NEVER use these permissions to track your browsing history, monitor unrelated tabs, or inject ads.*
* **Host Permissions (Specific Domains):** E.g., `*://*.notion.so/*` is required to read the page content you want to process or convert.
* **Storage:** Required to save your settings and preferences locally.
* **Alarms:** Required to schedule lightweight background tasks (e.g., daily license validation).
* **Identity:** Required for OAuth authentication with third-party services.

## 5. Changes to This Policy

We may update this Privacy Policy to reflect changes in our products or legal requirements. The latest version will always be available at [elielabs.com/privacy](https://elielabs.com/privacy).

## 6. Contact Us

If you have any questions about this Privacy Policy or our engineering practices, please contact us at:

**Email:** elielabs.service@gmail.com

---

## 7. Refund Policy

Due to the digital nature of our products (Chrome Extensions and Notion Templates), all sales are generally final. 

* **One-Time Purchases & Templates:** Once a license key is issued or a Notion template is duplicated, the product is considered delivered and consumed. Therefore, we do not offer refunds for these items.
* **Subscriptions:** You may cancel your subscription at any time. Cancellation will take effect at the end of your current billing cycle. We do not provide prorated refunds for partial months.
* **Technical Guarantee:** We stand behind our engineering. If our extension experiences a critical bug that prevents it from functioning as advertised, and our support team cannot provide a workaround or fix within 7 days of your report, we will issue a full refund. 

To request a technical refund, please contact us at **elielabs.service@gmail.com** within 14 days of your purchase, including your license key and a description of the issue.