// Logo Configuration for Hickory High School Band
// Update these URLs with the official logos from Google Drive

export const LOGO_CONFIG = {
  // For light backgrounds (navigation, light sections)
  dark: {
    url: "https://drive.google.com/uc?export=view&id=1y_NWLdD2aYq8Len7p7xXuh_x8FDAnHRT",
    alt: "Hickory High School Bands Logo - Dark"
  },
  
  // For dark backgrounds (footer, dark sections)
  light: {
    url: "", // UPDATE: Add white/light version logo ID here
    alt: "Hickory High School Bands Logo - Light"
  },
  
  // For teal backgrounds (hero overlays, teal sections)
  onTeal: {
    url: "", // UPDATE: Add logo that works on teal background
    alt: "Hickory High School Bands Logo - On Teal"
  },
  
  // High resolution version for hero sections
  hero: {
    url: "", // UPDATE: Add high-res version if available
    alt: "Hickory High School Bands Logo - Hero"
  }
};

// Instructions for updating logos:
// 1. Go to Google Drive folder: https://drive.google.com/drive/folders/1GJxW69I_2EfjE5_6RVVXVVGdR4K3KQPy
// 2. For each logo file, right-click → Get link → Copy link
// 3. Change the link format from:
//    https://drive.google.com/file/d/FILE_ID/view?usp=sharing
//    to:
//    https://drive.google.com/uc?export=view&id=FILE_ID
// 4. Update the URLs above with the converted links

// Recommended logo selection based on website color scheme:
// - Dark logos (black/navy) for light backgrounds
// - Light logos (white/transparent) for dark backgrounds  
// - Logos with transparent backgrounds work best
// - Consider logos that include "Hickory Bands" or "HHS" text