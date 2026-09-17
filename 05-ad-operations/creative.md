# Creative Management

> **Department / Section**: 05-ad-operations  
> **Process Owner (Accountability Seat)**: Head of Ad Operations  
> **Target Audience (Who Follows It)**: Ad Ops Specialists, Creative Coordinators  
> **Trigger / Cadence**: Triggered on Receipt of New Audio or Display Assets  
> **Last Reviewed**: 2026-09-17

---

## 1. Purpose & Outcome (Definition of Done)
- **Purpose**: Validate, normalize, and ingest audio creatives and companion visual assets to ensure high broadcast quality and exchange compliance.
- **Definition of Done**: Audio meets technical specs (-14 to -16 LUFS, correct duration), transcoded into required bitrates, companion banner verified, and uploaded to CDN.

---

## 2. Key Measurables (KPIs)
* **Creative Turnaround SLA**: Creative QA and transcoding completed within 4 hours.
* **Exchange Rejection Rate**: 0% exchange rejections due to creative spec violations.

---

## 3. Audio & Display Specifications

### Audio Specifications
* **Formats Accepted**: MP3, WAV, AAC
* **Length**: Exactly 15s, 30s, or 60s (±0.5s tolerance)
* **Bitrate**: 128 kbps minimum, 320 kbps preferred (Constant Bitrate - CBR)
* **Sample Rate**: 44.1 kHz
* **Target Loudness**: -16 LUFS (integrated) with a true peak not exceeding -1.0 dBTP
* **Content Standards**: Clear call to action (URL or promo code spoken); no harsh clipping.

### Companion Display Banners (Optional but Recommended)
* **Dimensions**: 300x250, 640x640, or 300x300
* **File Format**: JPG, PNG, GIF (max file size 150 KB)
* **Click-Through URL**: Must be secure HTTPS.

---

## 4. Core Transcoding & Hosting Flow (The 20/80 Flow)
1. **Spec Check**: Inspect audio file length, sample rate, and volume levels.
2. **Normalize (if needed)**: Run through automated transcoding pipeline to normalize loudness.
3. **Upload to Asset Storage**: Store in Audiohook CDN / S3 asset bucket.
4. **Attach to DSP Creative Library**: Register creative with metadata (Duration, Title, Advertiser, Category).

---

## 5. Related Links
* [Campaign Setup & Trafficking](./campaign-setup.md)
* [Campaign QA Checklist](./qa.md)
