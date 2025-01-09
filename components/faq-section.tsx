'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const faqs = [
  {
    question: "What is n0va.one?",
    answer: "n0va.one is a platform that allows you to create a personalized bio page to showcase all your online presence in one place."
  },
  {
    question: "Is n0va.one free to use?",
    answer: "Yes, n0va.one offers a free plan with basic features. We also offer a premium plan with advanced customization options."
  },
  {
    question: "What can I do with n0va.one?",
    answer: "With n0va.one, you can create a stunning bio page, link all your social media profiles, showcase your content, and share your online presence through a single link."
  },
  {
    question: "Is n0va.one safe to use?",
    answer: "Yes, n0va.one is safe to use. We prioritize the security and privacy of our users' data and employ industry-standard security measures."
  },
  {
    question: "How long does it take to set up a n0va.one profile?",
    answer: "Setting up a basic n0va.one profile takes just a few minutes. You can always add more content and customize your page further at any time."
  }
]

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-white"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`} className="border-zinc-700">
                  <AccordionTrigger className="text-white hover:text-purple-400 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-zinc-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

