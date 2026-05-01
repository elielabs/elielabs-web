---
title: "Technical Implementation: End-to-End GA4 Tracking for Elie Labs"
description: "Internal documentation for GA4 setup, script injection in Astro, and defining conversion event/UTM protocols."
---

This log serves as a personal reference for the GA4 tracking implementation at Elie Labs to ensure data consistency across all current and future products.

### 1. GA4 Account Setup & Script Retrieval

The first step was establishing the analytical foundation in Google Analytics:
*   **Property Creation**: Created the Elie Labs property, ensuring the timezone and currency were set for accurate reporting.
*   **Data Stream**: Set up a web stream for elielabs.com to generate the Measurement ID: G-XXXXXXXXXX.
*   **Script Collection**: Retrieved the Global Site Tag (gtag.js) from the "Installation instructions" section in the GA4 Admin panel.

### 2. Injecting GA4 into Astro (Starlight)

In the Starlight framework, I avoided modifying individual HTML files. Instead, I injected the tracking script globally using the head attribute within the astro.config.mjs file.

This approach ensures that the tracking script is loaded on every page of the documentation and product site automatically, keeping the codebase clean and modular.

```javascript
// astro.config.mjs
export default defineConfig({
  integrations: [
    starlight({
      head: [
        {
          tag: 'script',
          attrs: {
            src: '[https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX](https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX)',
            async: true,
          },
        },
        {
          tag: 'script',
          content: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `,
        },
      ],
    }),
  ],
});
```

### 3. Creating Product-Specific Button Events

Standard page views are insufficient for tracking conversions. I implemented a custom event named click_extension_install to track when a user actually intends to download a product.

Instead of hardcoding unique events for every tool, I use a product parameter to distinguish between the different extensions in our ecosystem.

```javascript
// Implementation snippet for product buttons
<LinkButton href="[Chrome_Store_URL]" onclick="gtag('event', 'click_extension_install', { 'product': 'notion-ai-bridge' });">
  Install Extension
</LinkButton>
```

**Current Product Matrix for Parameters:**
*   notion-ai-bridge: For Notion AI Bridge: Export & Prompt.
*   notion-to-ppt: For Notion to PPT Generator.
*   ai-floating-messenger: For ChatGPT & Gemini Floating Messenger.

### 4. Establishing UTM Protocol for Social Traffic

To identify which social platforms drive the most valuable traffic (X vs. Reddit), I established a strict UTM link protocol. I must use these tagged links for every social media post instead of raw URLs to ensure proper attribution in the GA4 Acquisition reports.

*   **X (Twitter) Protocol**:
    `https://elielabs.com/?utm_source=twitter&utm_medium=social&utm_campaign=v2_launch`
*   **Reddit Protocol**:
    `https://elielabs.com/?utm_source=reddit&utm_medium=social&utm_campaign=v2_launch`

### 🚨 Critical Reminders (Self-Correction)

*   **Custom Dimension Registration**: GA4 will ignore the product parameter in standard reports unless I manually register it as a "Custom Dimension" in the Admin panel under "Custom Definitions."
*   **DebugView**: Always use the GA4 DebugView when testing new button triggers to ensure the click_extension_install event fires with the correct product string before deploying to production.