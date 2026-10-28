// All the text on the site lives here. Edit this file to update the page.

export const profile = {
  name: 'Sai Kumar Reddy Mamidala',
  shortName: 'Sai Mamidala',
  role: 'SAP FICO consultant specializing in S/4HANA Finance, Accounts Payable and Procure-to-Pay.',
  intro:
    'Seven years delivering S/4HANA Finance and ECC solutions for large retail and global enterprises, from invoice verification and EDI integrations to data conversion and cutover.',
  email: 'mamidalasaireddy16@gmail.com',
  github: 'https://github.com/Mamidalasaireddy',
  // Add your LinkedIn profile URL here and a LinkedIn icon appears automatically.
  linkedin: '',
};

export type RoleGroup = {
  heading?: string;
  items: string[];
};

export type Role = {
  company: string;
  title: string;
  period: string;
  groups: RoleGroup[];
};

export const experience: Role[] = [
  {
    company: 'The Home Depot',
    title: 'SAP FICO Consultant',
    period: 'Apr 2024 to present',
    groups: [
      {
        heading: 'Store onboarding rollouts, AP hypercare and Palantir conversion',
        items: [
          'Support S/4HANA Accounts Payable and P2P for store onboarding rollouts, covering EDI 810 invoices, EDI 812 chargebacks and returns, EDI 850 sales, ERS invoices and RTV, and EDI 820 remittance advice.',
          'Built and maintain a daily hypercare reconciliation tracker for rollout stores, comparing success counts and amounts by interface, document type and company code using BigQuery and SAP tables, and flagging interfaces still missing a data source.',
          'Work on the Invoice object in Palantir-driven legacy-to-S/4HANA data conversion, covering open and paid invoices across mock cutover cycles.',
          'Validate converted invoices against SAP (invoice header and item, vendor open items, GR/IR and PO references), resolving mismatches in counts, amounts, document types and statuses ahead of business sign-off.',
          'Provide AP functional input on Palantir dashboards for open and parked invoices, and on S/4-side logic for store-level STO dashboards covering open shipments, transfers and receipts.',
          'Own the functional overview and documentation of the automated open-item and paid-item invoice files sent daily to the vendor portal, and extended them to new document types introduced for store onboarding.',
          'Investigate production issues across AP batch jobs, interfaces and authorizations, and drive fixes with Basis, security, ABAP and EDI teams.',
        ],
      },
      {
        heading: 'AI-enabled delivery',
        items: [
          'Use Claude with SAP ABAP and BigQuery MCP connectors to read custom ABAP programs, review short dumps and system logs, and query SAP data, shortening root-cause analysis for AP and interface issues.',
          'Use generative AI to draft functional specs, test scenarios, UAT scripts and meeting follow-ups, and to cross-check reconciliation logic.',
        ],
      },
      {
        heading: 'Core AP responsibilities',
        items: [
          'Resolve LIV, parked and blocked invoice, GR/IR, tolerance and tax issues, and support chargeback, dispute, Vistex rebate and payment run processing (APP, ACH, wire, check).',
          'Write and run HP ALM test scripts for SIT, UAT and regression cycles, and work with finance, procurement, supply chain and offshore teams.',
        ],
      },
    ],
  },
  {
    company: 'Walmart',
    title: 'SAP FI Consultant',
    period: 'Nov 2022 to Apr 2024',
    groups: [
      {
        items: [
          'Implemented S/4HANA Accounts Payable with LIV for invoice validation, approvals and chargebacks.',
          'Configured invoice posting, parking and changes, enforcing discount, tolerance and rounding rules.',
          'Integrated EDI 810/812 vendor invoices and chargebacks through AIF, enabling touchless processing and faster error resolution.',
          'Designed intercompany settlement and billing solutions that streamlined cross-company postings.',
          'Supported SAP Payments (APP, ACH, wire, check), house bank setup, lockbox processing and bank integrations.',
          'Partnered with Avalara for tax calculation and compliance, and with Vistex for accurate vendor rebate settlements.',
          'Built HP ALM test scripts for UAT and regression, validating AP and payment processes end to end, and worked with offshore, finance, procurement and IT teams on enhancements and production support.',
        ],
      },
    ],
  },
  {
    company: 'HCL',
    title: 'SAP FI Analyst',
    period: 'Aug 2019 to Nov 2022',
    groups: [
      {
        items: [
          'Delivered L2/L3 production support for FI/CO (GL, AP, AR, CO), meeting SLAs and keeping systems stable.',
          'Resolved invoice posting errors, payment rejections, reconciliation issues and asset discrepancies from daily tickets.',
          'Implemented multi-bank electronic bank statements and Direct Debit System (DDS), and configured dunning, credit management and automatic clearing.',
          'Designed interfaces for commission, refund and unbilled rental revenue integrations, and configured profit center substitution rules to improve reporting accuracy.',
          'Processed intercompany netting, supported month-end and year-end close, and prepared test cases and training materials for UAT and end-user adoption.',
        ],
      },
    ],
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    category: 'SAP modules',
    items: [
      'S/4HANA Finance',
      'ECC 6.0',
      'FI (AP, AR, GL, Asset Accounting)',
      'CO (Cost Center, Profit Center, Internal Orders)',
      'MM and SD integration',
      'Universal Journal (ACDOCA)',
      'Business Partner',
    ],
  },
  {
    category: 'AP and P2P',
    items: [
      'MIRO, MIR7, MRBR',
      'Three-way match',
      'Parked and blocked invoices',
      'GR/IR clearing',
      'Evaluated receipt settlement (ERS)',
      'Return-to-vendor (RTV)',
      'Credit memos',
      'Tolerance groups',
      'Duplicate invoice checks',
      'Chargebacks and dispute management',
    ],
  },
  {
    category: 'Integrations',
    items: [
      'EDI 810, 812, 820, 850, 864',
      'IDoc monitoring and reprocessing (WE02, WE05, BD87)',
      'SAP AIF',
      'Custom ABAP interface programs and batch jobs',
      'Vendor portals (DCI)',
      'OpenText',
      'MFT file transfers',
    ],
  },
  {
    category: 'Payments and banking',
    items: [
      'Automatic Payment Program (F110)',
      'SAP Payments',
      'ACH, wire, check',
      'House banks',
      'Lockbox (BAI2)',
      'Electronic bank statements',
      'EDI 820 remittance',
    ],
  },
  {
    category: 'Tax and rebates',
    items: ['Sovos', 'Taxware', 'Avalara', 'Vistex Co-op Rebates (VCR)'],
  },
  {
    category: 'Data and analytics',
    items: [
      'Google BigQuery (SQL)',
      'SAP table analysis (RBKP, RSEG, BSIK, BSAK, EKKO, EKPO)',
      'Tableau',
      'Palantir dashboards',
      'Advanced Excel',
      'Data validation and reconciliation',
    ],
  },
  {
    category: 'AI and automation',
    items: [
      'Claude and generative AI assistants',
      'Model Context Protocol (MCP) connectors for SAP ABAP and BigQuery',
      'Prompt engineering',
      'AI-assisted ABAP analysis',
      'Test script and documentation generation',
    ],
  },
  {
    category: 'Delivery and testing',
    items: [
      'HP ALM',
      'SIT, UAT, regression testing',
      'Mock cutover and hypercare',
      'Functional specifications',
      'Jira, Confluence, ServiceNow',
      'Agile/Scrum',
      'L2/L3 production support',
    ],
  },
  {
    category: 'Tools',
    items: ['SAP Fiori', 'SAP GUI', 'SAP Solution Manager', 'ST22 short dumps', 'SM21 system log', 'SM37 batch jobs'],
  },
];

export const education = {
  degree: "Bachelor's in Electrical and Electronics Engineering",
  school: 'Vaagdevi College of Engineering',
};
