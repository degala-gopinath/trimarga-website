
import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteConfig';

const BUSINESS_TYPES = [
  'Restaurant / Cafe',
  'Boutique / Retail',
  'Salon / Studio',
  'Clinic',
  'Services',
  'Other'
];

const NEED_OPTIONS = [
  'Website',
  'E-commerce',
  'Google Profile',
  'Social Media',
  'Meta Ads',
  'Google Ads',
  'SEO',
  'GEO',
  'Branding',
  'Complete Setup',
  'Not sure'
];

export default function EnquiryForm({ preselectedNeed = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    phone: '',
    email: '',
    businessType: '',
    needs: preselectedNeed ? [preselectedNeed] : [],
    city: '',
    message: '',
    companyFax: '' // Honeypot spam trap
  });

  const [submitted, setSubmitted] = useState(false);

  const toggleNeed = (option) => {
    setFormData((prev) => ({
      ...prev,
      needs: prev.needs.includes(option)
        ? prev.needs.filter((item) => item !== option)
        : [...prev.needs, option]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.companyFax) return;

    // Validate all mandatory fields
    if (
      !formData.name.trim() ||
      !formData.businessName.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.businessType ||
      !formData.city.trim()
    ) {
      return;
    }

    // Demo only: no enquiry is transmitted here.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-[#FBAF01] bg-[#110F0C] p-8 sm:p-12 space-y-6">
        <div className="inline-flex h-10 w-10 items-center justify-center bg-[#FBAF01] text-[#0A0907]">
          <Check className="h-5 w-5 stroke-[3]" />
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
          Enquiry Details Validated
        </h3>

        <p className="text-base leading-relaxed text-white/90">
          Your details have been validated locally, but they have not
          been sent to Trimarga. For enquiries, please message us on
          WhatsApp until online form delivery is connected.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-3">
          <a
            href={SITE_CONFIG.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center btn-primary bg-[#FBAF01] px-6 py-3 text-xs font-extrabold uppercase tracking-wider text-[#0A0907] hover:bg-white"
          >
            WhatsApp ({SITE_CONFIG.phoneDisplay})
          </a>

          <button
            type="button"
            onClick={() => setSubmitted(false)}
            className="inline-flex items-center justify-center border border-white/25 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:border-[#FBAF01]"
          >
            Edit Details
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-white/15 bg-[#110F0C] p-6 sm:p-10 space-y-6"
    >
      {/* Honeypot Field */}
      <input
        type="text"
        name="company_fax"
        value={formData.companyFax}
        onChange={(e) =>
          setFormData({
            ...formData,
            companyFax: e.target.value
          })
        }
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />

      {/* Name and Business Name */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.14em] text-white/85 mb-2">
            Your name <span className="text-[#FBAF01]">*</span>
          </label>

          <input
            type="text"
            required
            value={formData.name}
            onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
            }
            placeholder="Full name"
            className="w-full border border-white/20 bg-[#0A0907] px-4 py-3 text-sm text-white placeholder-white/35 focus:border-[#FBAF01] focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.14em] text-white/85 mb-2">
            Business name <span className="text-[#FBAF01]">*</span>
          </label>

          <input
            type="text"
            required
            value={formData.businessName}
            onChange={(e) =>
              setFormData({
                ...formData,
                businessName: e.target.value
              })
            }
            placeholder="Shop, clinic, studio, or company"
            className="w-full border border-white/20 bg-[#0A0907] px-4 py-3 text-sm text-white placeholder-white/35 focus:border-[#FBAF01] focus:outline-none"
          />
        </div>
      </div>

      {/* Phone and Email */}
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.14em] text-white/85 mb-2">
            Phone / WhatsApp <span className="text-[#FBAF01]">*</span>
          </label>

          <input
            type="tel"
            required
            value={formData.phone}
            onChange={(e) =>
              setFormData({
                ...formData,
                phone: e.target.value
              })
            }
            placeholder="Main reply channel"
            className="w-full border border-white/20 bg-[#0A0907] px-4 py-3 text-sm text-white placeholder-white/35 focus:border-[#FBAF01] focus:outline-none"
          />
        </div>

        {/* Email - Mandatory */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.14em] text-white/85 mb-2">
            Email <span className="text-[#FBAF01]">*</span>
          </label>

          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
            }
            placeholder="name@business.com"
            className="w-full border border-white/20 bg-[#0A0907] px-4 py-3 text-sm text-white placeholder-white/35 focus:border-[#FBAF01] focus:outline-none"
          />
        </div>
      </div>

      {/* Business Type and Location */}
      <div className="grid gap-6 sm:grid-cols-2">
        {/* Business Type - Mandatory */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.14em] text-white/85 mb-2">
            Business type <span className="text-[#FBAF01]">*</span>
          </label>

          <select
            required
            value={formData.businessType}
            onChange={(e) =>
              setFormData({
                ...formData,
                businessType: e.target.value
              })
            }
            className="w-full border border-white/20 bg-[#0A0907] px-4 py-3 text-sm text-white focus:border-[#FBAF01] focus:outline-none"
          >
            <option value="" disabled>
              Select Business Type
            </option>

            {BUSINESS_TYPES.map((type) => (
              <option
                key={type}
                value={type}
                className="bg-[#0A0907] text-white"
              >
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Location - Mandatory */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-[0.14em] text-white/85 mb-2">
            City / Area <span className="text-[#FBAF01]">*</span>
          </label>

          <input
            type="text"
            required
            value={formData.city}
            onChange={(e) =>
              setFormData({
                ...formData,
                city: e.target.value
              })
            }
            placeholder="Needed for local SEO and ads advice"
            className="w-full border border-white/20 bg-[#0A0907] px-4 py-3 text-sm text-white placeholder-white/35 focus:border-[#FBAF01] focus:outline-none"
          />
        </div>
      </div>

      {/* Service Selection */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.14em] text-white/85 mb-3">
          What do you need?
        </label>

        <div className="flex flex-wrap gap-2">
          {NEED_OPTIONS.map((option) => {
            const checked = formData.needs.includes(option);

            return (
              <button
                key={option}
                type="button"
                onClick={() => toggleNeed(option)}
                className={`border px-3.5 py-2 text-xs font-semibold transition-colors ${
                  checked
                    ? 'border-[#FBAF01] bg-[#FBAF01] text-[#0A0907]'
                    : 'border-white/20 bg-[#0A0907] text-white/80 hover:border-white/50'
                }`}
              >
                {option}
              </button>
            );
          })}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-[0.14em] text-white/85 mb-2">
          Message
        </label>

        <textarea
          rows={3}
          value={formData.message}
          onChange={(e) =>
            setFormData({
              ...formData,
              message: e.target.value
            })
          }
          placeholder="Tell us about your business and what you would like to achieve..."
          className="w-full border border-white/20 bg-[#0A0907] px-4 py-3 text-sm text-white placeholder-white/35 focus:border-[#FBAF01] focus:outline-none"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-2 btn-primary bg-[#FBAF01] px-6 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-[#0A0907] hover:bg-white"
      >
        <span>Send My Details</span>
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="text-xs text-white/50">
        Online form delivery is not yet connected.
        For enquiries, contact {SITE_CONFIG.email}.
      </p>
    </form>
  );
}
