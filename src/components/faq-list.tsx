import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-content";

export function FaqList({ limit }: { limit?: number }) {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {faqs.slice(0, limit).map((faq, index) => (
        <AccordionItem value={`faq-${index}`} key={faq.question}>
          <AccordionTrigger className="py-5 text-left text-lg font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base text-muted-foreground">
            <p>{faq.answer}</p>
            {"items" in faq && faq.items ? (
              <ul className="mt-3 list-disc space-y-1 pl-5">
                {faq.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
