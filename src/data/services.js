export const services = [
  {
    slug: "accounting",
    title: "Accounting",
    summary:
      "Clear financial insights that help you to understand your numbers and make informed decisions.",
    highlights: [
      "Financial statement preparation",
      "Expense tracking & analysis",
      "Ongoing financial oversight",
    ],
    details: [
      "Prepare accurate income statements, balance sheets, and cash flow reports.",
      "Identify trends and opportunities through detailed financial analysis.",
      "Ensure your financial records align with accounting standards and best practices.",
    ],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    summary:
      "Proactive strategies designed to minimize tax liability and avoid any potential surprises.",
    highlights: [
      "Year-round tax strategy",
      "Deductions & credit optimization",
      "Future-focused planning",
    ],
    details: [
      "Analyze your financial situation to identify tax-saving opportunities.",
      "Plan ahead for estimated payments and major financial changes.",
      "Develop strategies that support both short-term savings and long-term goals.",
    ],
  },
  {
    slug: "tax-preparation",
    title: "Tax Preparation",
    summary:
      "Accurate, timely tax returns prepared with the care and attention to detail that you deserve.",
    highlights: [
      "Federal & state returns",
      "Business and individual filings",
      "Error-free submissions",
    ],
    details: [
      "Prepare and review tax returns to ensure accuracy and compliance.",
      "Organize documentation to support deductions and income reporting.",
      "Reduce the risk of audits with properly prepared filings.",
    ],
  },
  {
    slug: "electronic-filing",
    title: "Electronic Filing",
    summary:
      "Fast, secure electronic submission for peace of mind and quicker processing.",
    highlights: [
      "Secure e-file submission",
      "Faster confirmations",
      "Reduced filing errors",
    ],
    details: [
      "Submit tax returns electronically to approved government systems.",
      "Receive faster acknowledgements and processing confirmations.",
      "Minimize errors commonly associated with paper filings.",
    ],
  },
  {
    slug: "notary-public-financials",
    title: "Notary Public Financials",
    summary:
      "Trusted notary services for important financial and legal documents.",
    highlights: [
      "Certified document notarization",
      "Financial document support",
      "Reliablle and professional service",
    ],
    details: [
      "Notarize financial and legal documents accurately and securely.",
      "Verify identities and signatures in compliance with state regulations.",
      "Provide dependable service for sensitive and time-critical paperwork.",
    ],
  },
  {
    slug: "bookkeeping",
    title: "Bookkeeping",
    summary:
      "Accurate, organized records that keep your business compliant and ready for growth.",
    highlights: [
      "Monthly reconciliation",
      "Accounts payable/receivable",
      "Clean, audit-ready records",
    ],
    details: [
      "Set up or clean up your books with a consistent, easy-to-read chart of accounts.",
      "Monthly close with reconciled bank and credit card statements.",
      "Clear reports so you always know where your money is going.",
    ],
  },
];

export const getServiceBySlug = (slug) =>
  services.find((service) => service.slug === slug);
