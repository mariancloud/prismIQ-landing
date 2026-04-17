"use client"

import { useState } from "react"
import { ChevronDown, Upload, FileSearch, Scale, FileText } from "lucide-react"

const steps = [
  {
    id: "step-1",
    icon: Upload,
    title: "Connect your ERA/835 feed",
    description: "Upload denied claims or connect your ERA/835 feed directly. Accepts all major clearinghouse formats.",
  },
  {
    id: "step-2",
    icon: FileSearch,
    title: "Claim IQ™ translates the denial",
    description: "Every CARC code is translated into plain English. PrismIQ identifies the denial reason, cross-references current payer policy, and flags whether the claim is appealable and at what confidence level.",
  },
  {
    id: "step-3",
    icon: Scale,
    title: "Policy Alignment Analysis",
    description: "The AI cross-references the specific procedure, payer, and denial reason against live policy language using RAG (retrieval-augmented generation). You get the exact policy clause the payer used — and the counter-argument.",
  },
  {
    id: "step-4",
    icon: FileText,
    title: "Appeal letter, ready to send",
    description: "A fully constructed appeal letter, citing clinical criteria, payer policy language, and medical necessity documentation. Not a template. A built argument.",
  },
]

export function ClaimFlowSection() {
  const [expandedStep, setExpandedStep] = useState<string | null>("step-1")

  return (
    <section id="claim-iq" className="py-20 lg:py-32 bg-card">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center text-balance">
          835 Claim Flow Walkthrough
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          From denied claim to appeal-ready in four steps.
        </p>

        <div className="flex flex-col gap-4">
          {steps.map((step, index) => (
            <div
              key={step.id}
              className="rounded-xl bg-background border border-border overflow-hidden transition-all"
            >
              <button
                onClick={() => setExpandedStep(expandedStep === step.id ? null : step.id)}
                className="w-full flex items-center gap-4 p-6 text-left transition-colors hover:bg-muted/30"
              >
                <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
                  <step.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                      Step {index + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                </div>
                <ChevronDown 
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    expandedStep === step.id ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              {expandedStep === step.id && (
                <div className="px-6 pb-6 pt-2">
                  <div className="pl-14">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
