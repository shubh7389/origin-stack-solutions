import { Header } from "@/components/Header";
import { Footer } from "@/components/sections/Footer";
import {
  ArrowLeft,
  Shield,
  Eye,
  Database,
  Lock,
  Mail,
  Globe,
} from "lucide-react";

const sections = [
  {
    icon: Eye,
    title: "Information We Collect",
    content: [
      "Name, email address, company information, and contact details submitted through our website.",
      "Project requirements, inquiries, and communication records.",
      "Browser type, device information, IP address, and website usage analytics.",
      "Cookies and similar technologies used to improve website performance and user experience.",
    ],
  },
  {
    icon: Database,
    title: "How We Use Your Information",
    content: [
      "Respond to inquiries and provide project consultations.",
      "Deliver software development, AI, cloud, and technology services.",
      "Improve website functionality, performance, and customer experience.",
      "Send important service updates and project communications.",
      "Comply with legal obligations and protect our business interests.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "We implement industry-standard security measures to protect your information.",
      "Access to personal data is limited to authorized personnel only.",
      "Data is stored using secure cloud infrastructure and business platforms.",
      "Regular monitoring is performed to maintain system security and reliability.",
    ],
  },
  {
    icon: Globe,
    title: "Third-Party Services",
    content: [
      "We may use trusted third-party services such as hosting providers, analytics tools, cloud platforms, and communication services.",
      "These providers only receive information necessary to perform their services.",
      "Third-party services operate under their own privacy policies and security practices.",
    ],
  },
  {
    icon: Shield,
    title: "Your Rights",
    content: [
      "Request access to the personal information we hold about you.",
      "Request correction of inaccurate or incomplete information.",
      "Request deletion of your personal information where legally applicable.",
      "Object to or restrict certain processing activities.",
      "Withdraw consent for communications at any time.",
    ],
  },
  {
    icon: Mail,
    title: "Contact Us",
    content: [
      "For questions about this Privacy Policy or your personal information, contact us.",
      "Email: info@originstacktech.com",
      "Website: https://originstacktech.com",
      "We will respond to privacy-related requests as quickly as possible.",
    ],
  },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </a>

          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>

            <p className="text-muted-foreground text-lg">
              Last Updated: June 2026
            </p>
          </div>

          <div className="mb-12 text-foreground/80 leading-relaxed">
            <p>
              OriginStack Solutions respects your privacy and is committed
              to protecting your personal information. This Privacy Policy
              explains how we collect, use, store, and safeguard information
              obtained through our website and services.
            </p>
          </div>

          <div className="space-y-8">
            {sections.map((section) => (
              <div
                key={section.title}
                className="bg-card border border-border rounded-2xl p-6 md:p-8 hover:shadow-card transition-smooth"
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

          <div className="mt-12 p-6 bg-primary/5 border border-primary/20 rounded-2xl">
            <h3 className="text-lg font-semibold mb-2">
              Privacy Questions?
            </h3>

            <p className="text-foreground/70 mb-4">
              If you have questions regarding this Privacy Policy, please
              contact us at{" "}
              <a
                href="mailto:info@originstacktech.com"
                className="text-primary hover:underline"
              >
                info@originstacktech.com
              </a>
            </p>

            <a
              href="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to Homepage
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}