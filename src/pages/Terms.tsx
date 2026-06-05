import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import {
  ArrowLeft,
  FileText,
  Scale,
  Shield,
  Briefcase,
  AlertTriangle,
  Mail,
} from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      "By accessing or using our website, you agree to comply with these Terms & Conditions.",
      "If you do not agree with any part of these terms, please discontinue use of our website and services.",
      "These terms apply to all visitors, clients, and users of our services.",
    ],
  },
  {
    icon: Briefcase,
    title: "Services",
    content: [
      "OriginStack Solutions provides software development, AI solutions, cloud consulting, mobile applications, UI/UX design, and related technology services.",
      "Service details, deliverables, and timelines are governed by separate project agreements.",
      "We reserve the right to modify, suspend, or discontinue services at any time.",
    ],
  },
  {
    icon: Shield,
    title: "Intellectual Property",
    content: [
      "All website content, branding, logos, graphics, designs, and materials are owned by OriginStack Solutions.",
      "You may not copy, reproduce, distribute, or exploit our content without written permission.",
      "Client-owned project assets remain the property of the client as defined in project agreements.",
    ],
  },
  {
    icon: Scale,
    title: "User Responsibilities",
    content: [
      "You agree to provide accurate information when using our services.",
      "You must not misuse the website or attempt unauthorized access.",
      "You are responsible for maintaining the confidentiality of any credentials provided to you.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Disclaimer & Limitation of Liability",
    content: [
      'Services and website content are provided on an "as is" basis.',
      "We do not guarantee uninterrupted or error-free operation.",
      "OriginStack Solutions shall not be liable for indirect or consequential damages.",
    ],
  },
  {
    icon: Mail,
    title: "Contact Information",
    content: [
      "Email: info@originstacktech.com",
      "Website: https://originstacktech.com",
      "For legal or policy questions, contact our team.",
    ],
  },
];

export default function Terms() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>

            <p className="text-muted-foreground text-lg">
              Last Updated: June 2026
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-card border border-border rounded-2xl p-6 md:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-primary/10 rounded-xl">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>

                  <h2 className="text-xl font-semibold">
                    {section.title}
                  </h2>
                </div>

                <ul className="space-y-3">
                  {section.content.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-foreground/80"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}