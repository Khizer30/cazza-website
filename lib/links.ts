export const LINKS = {
  home: "/",
  blog: "/blog",

  solutionSection: "/#solution",
  platformsSection: "/#platforms",
  pricingSection: "/#pricing",
  faqSection: "/#faq",

  privacyPolicy: "/privacy-policy",
  termsAndConditions: "/terms-and-conditions",

  appLogin: "https://app.cazza.ai/login",
  appSignup: "https://app.cazza.ai/signup"
} as const;

export type LinkKey = keyof typeof LINKS;
