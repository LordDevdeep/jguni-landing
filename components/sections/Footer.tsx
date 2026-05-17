"use client";

import { Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

const logoUrl = "https://jguni.in/images/logo-animation.svg";

const footerLinks = {
  Programs: ["AI & ML", "Cybersecurity", "Data Science", "Design", "Aviation"],
  Admissions: ["Apply", "Scholarships", "Fees", "Brochure", "Campus Tour"],
  Campus: ["Labs", "Library", "Hostel", "Sports", "Events"],
};

const socials = [
  { icon: <Linkedin className="h-4 w-4" />, label: "LinkedIn" },
  { icon: <Instagram className="h-4 w-4" />, label: "Instagram" },
  { icon: <Youtube className="h-4 w-4" />, label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-[#f8f7f3]">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <img src={logoUrl} alt="JG University" className="h-14 w-11 object-contain" />
              <div>
                <p className="text-xl font-black text-slate-950">JG University</p>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-rose-900">
                  Ahmedabad
                </p>
              </div>
            </div>
            <p className="max-w-sm leading-7 text-slate-600">
              A student-first university experience with practical programs,
              academic mentoring, campus life, and career support.
            </p>
            <div className="mt-6 space-y-3 text-sm font-semibold text-slate-600">
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-rose-900" />
                Gujarat, India
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-rose-900" />
                +91 28123 45678
              </p>
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-rose-900" />
                admissions@jguni.in
              </p>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-black uppercase tracking-[0.16em] text-slate-950">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm font-semibold text-slate-600 hover:text-rose-900">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-slate-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-semibold text-slate-500">
            © {new Date().getFullYear()} JG University. All rights reserved.
          </p>
          <div className="flex gap-2">
            {socials.map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-900/10 bg-white text-slate-600 hover:text-rose-900"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
