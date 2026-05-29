import type { FAQ } from "@/data/types";

interface ServiceFAQsProps {
  faqs: FAQ[];
  serviceId: string;
}

export function ServiceFAQs({ faqs, serviceId }: ServiceFAQsProps) {
  if (!faqs.length) return null;

  return (
    <section
      className="mt-10 rounded-[8px] border border-border bg-section-alt p-4 sm:p-6 md:p-8"
      aria-labelledby={`faqs-${serviceId}`}
    >
      <h3
        id={`faqs-${serviceId}`}
        className="text-lg font-bold text-heading sm:text-xl"
      >
        Frequently Asked Questions
      </h3>
      <dl className="mt-6 space-y-6">
        {faqs.map((faq) => (
          <div key={faq.question} className="min-w-0">
            <dt className="text-base font-semibold text-heading sm:text-lg">
              {faq.question}
            </dt>
            <dd className="mt-2 text-sm leading-relaxed text-body sm:text-base">
              {faq.answer}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
