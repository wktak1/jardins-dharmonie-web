import type { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/site-content";

const BOLD_RE = /\*\*([^*]+)\*\*/g;
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function renderBold(text: string, keyPrefix: string): ReactNode[] {
  const parts: ReactNode[] = [];
  let cursor = 0;
  let key = 0;
  for (const match of text.matchAll(BOLD_RE)) {
    if (match.index > cursor) {
      parts.push(text.slice(cursor, match.index));
    }
    parts.push(
      <strong
        key={`${keyPrefix}-b-${key++}`}
        className="font-semibold text-foreground"
      >
        {match[1]}
      </strong>,
    );
    cursor = match.index + match[0].length;
  }
  if (cursor < text.length) {
    parts.push(text.slice(cursor));
  }
  return parts;
}

function renderAnswer(answer: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let key = 0;
  for (const match of answer.matchAll(LINK_RE)) {
    if (match.index > cursor) {
      nodes.push(...renderBold(answer.slice(cursor, match.index), `t-${key}`));
    }
    nodes.push(
      <a
        key={`l-${key++}`}
        href={match[2]}
        className="font-semibold text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
      >
        {renderBold(match[1], `lt-${key}`)}
      </a>,
    );
    cursor = match.index + match[0].length;
  }
  if (cursor < answer.length) {
    nodes.push(...renderBold(answer.slice(cursor), `t-end`));
  }
  return nodes;
}

export function FaqList({ limit }: { limit?: number }) {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {faqs.slice(0, limit).map((faq, index) => (
        <AccordionItem value={`faq-${index}`} key={faq.question}>
          <AccordionTrigger className="py-5 text-left text-lg font-semibold">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-base text-muted-foreground">
            <p>{renderAnswer(faq.answer)}</p>
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
