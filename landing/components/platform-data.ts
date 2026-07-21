export type PhaseBlock = {
  subheading: string
  body: string
}

export type Phase = {
  number: string
  label: string
  heading: string
  blocks: PhaseBlock[]
}

export const phases: Phase[] = [
  {
    number: '01',
    label: 'Before the Claim',
    heading: 'Stop the denial before it starts.',
    blocks: [
      {
        subheading: 'Intake',
        body: 'Referrals, faxes, and intake forms are read, structured, and validated at the front door — not after a claim bounces back 30 days later.',
      },
      {
        subheading: 'Eligibility',
        body: 'Real coverage details at the moment of scheduling — deductibles, co-insurance, procedure-specific pre-cert rules — not just an active/inactive flag.',
      },
      {
        subheading: 'Prior Authorization',
        body: "PrismIQ reads the chart, matches it to the payer's clinical coverage policy, and files a complete authorization packet. No portal logins. No hold queues. No missed documents.",
      },
    ],
  },
  {
    number: '02',
    label: 'During the Claim',
    heading: 'Get it right the first time.',
    blocks: [
      {
        subheading: 'Coding & Charge Capture',
        body: 'Clinical documentation is cross-checked against charges before submission — catching under-coding, missed charges, and documentation gaps that trigger denials downstream.',
      },
      {
        subheading: 'Claims Submission',
        body: 'Every claim is scrubbed against payer-specific edit rules and your own historical denial patterns. Fewer first-pass rejections. Faster cash.',
      },
    ],
  },
  {
    number: '03',
    label: 'After the Claim',
    heading: "Recover what you're owed.",
    blocks: [
      {
        subheading: 'Denial Management & Appeals',
        body: "PrismIQ reads the patient record, maps the clinical narrative to the payer's own published policy language, and drafts a complete appeal — chart citations, regulatory references, supporting documentation included.",
      },
      {
        subheading: 'Remittance & Payment Posting',
        body: 'Every 835 ERA file is parsed in real time. Underpayments, contract shortfalls, and silent zero-balance write-offs are flagged before they settle into an aging bucket.',
      },
      {
        subheading: 'Patient Collections',
        body: "Accurate patient estimates delivered up front. Automated balance follow-up after. Patient responsibility doesn't quietly become bad debt.",
      },
    ],
  },
]
