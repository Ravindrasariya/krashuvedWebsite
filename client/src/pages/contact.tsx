import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/lib/language-context";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submitMutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/feedback", form),
    onSuccess: () => {
      toast({ title: t("Thank you!", "\u0927\u0928\u094D\u092F\u0935\u093E\u0926!"), description: t("Your feedback has been submitted.", "\u0906\u092A\u0915\u0940 \u092A\u094D\u0930\u0924\u093F\u0915\u094D\u0930\u093F\u092F\u093E \u0938\u092C\u092E\u093F\u091F \u0939\u094B \u0917\u0908 \u0939\u0948\u0964") });
      setForm({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({ title: t("Error", "\u0924\u094D\u0930\u0941\u091F\u093F"), description: t("Something went wrong. Please try again.", "\u0915\u0941\u091B \u0917\u0932\u0924 \u0939\u094B \u0917\u092F\u093E\u0964 \u0915\u0943\u092A\u092F\u093E \u092A\u0941\u0928\u0903 \u092A\u094D\u0930\u092F\u093E\u0938 \u0915\u0930\u0947\u0902\u0964"), variant: "destructive" });
    },
  });

  const contactCards = [
    {
      icon: Phone,
      labelEn: "Phone",
      labelHi: "\u092B\u094B\u0928",
      value: "+91 888 258 9392",
      color: "#4CAF50",
    },
    {
      icon: Mail,
      labelEn: "Email",
      labelHi: "\u0908\u092E\u0947\u0932",
      value: "info@krashuved.com",
      color: "#FF9800",
    },
    {
      icon: MapPin,
      labelEn: "Corporate Office",
      labelHi: "\u0915\u0949\u0930\u094D\u092A\u094B\u0930\u0947\u091F \u0915\u093E\u0930\u094D\u092F\u093E\u0932\u092F",
      valueEn: "172 Divya Vihar, Aurobindo, Jakhya, Bhawarasala, Sanwer, Indore, 453555",
      valueHi: "172 \u0926\u093F\u0935\u094D\u092F \u0935\u093F\u0939\u093E\u0930, \u0911\u0930\u094B\u092C\u093F\u0902\u0926\u094B, \u091C\u0916\u094D\u092F\u093E, \u092D\u0935\u0930\u093E\u0938\u0932\u093E, \u0938\u093E\u0902\u0935\u0947\u0930, \u0907\u0902\u0926\u094C\u0930, 453555",
      color: "#4CAF50",
    },
  ];

  return (
    <div data-testid="page-contact">
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#4CAF50]/8 via-background to-[#FF9800]/8" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#4CAF50]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF9800]/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="secondary" className="mb-6 text-xs tracking-wider uppercase px-4 py-1.5">
            {t("Contact Us", "\u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902")}
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            {t("Get In ", "\u0938\u0902\u092A\u0930\u094D\u0915 ")}
            <span className="relative inline-block">
              {t("Touch", "\u0915\u0930\u0947\u0902")}
              <span className="absolute -bottom-1 left-0 w-full h-1 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#FF9800]" />
            </span>
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
            {t(
              "Get in touch with us for any queries, support or booking a demo for our products. We're here to help you.",
              "\u0915\u093F\u0938\u0940 \u092D\u0940 \u092A\u094D\u0930\u0936\u094D\u0928, \u0938\u0939\u093E\u092F\u0924\u093E \u092F\u093E \u0939\u092E\u093E\u0930\u0947 \u0909\u0924\u094D\u092A\u093E\u0926\u094B\u0902 \u0915\u0947 \u0921\u0947\u092E\u094B \u092C\u0941\u0915 \u0915\u0930\u0928\u0947 \u0915\u0947 \u0932\u093F\u090F \u0939\u092E\u0938\u0947 \u0938\u0902\u092A\u0930\u094D\u0915 \u0915\u0930\u0947\u0902\u0964 \u0939\u092E \u0906\u092A\u0915\u0940 \u092E\u0926\u0926 \u0915\u0947 \u0932\u093F\u090F \u092F\u0939\u093E\u0901 \u0939\u0948\u0902\u0964"
            )}
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="relative bg-card rounded-xl border border-border p-8 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                  data-testid={`contact-card-${i}`}
                >
                  <div className="h-1 w-full absolute top-0 left-0" style={{ backgroundColor: card.color }} />
                  <div className="w-14 h-14 rounded-xl mx-auto mb-5 flex items-center justify-center" style={{ backgroundColor: `${card.color}15` }}>
                    <Icon className="w-7 h-7" style={{ color: card.color }} />
                  </div>
                  <p className="font-semibold text-sm mb-2">{t(card.labelEn, card.labelHi)}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {"valueEn" in card ? t(card.valueEn, card.valueHi) : card.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-muted/20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2">
              {t("Send Us Your Feedback", "\u0905\u092A\u0928\u0940 \u092A\u094D\u0930\u0924\u093F\u0915\u094D\u0930\u093F\u092F\u093E \u092D\u0947\u091C\u0947\u0902")}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#4CAF50] to-[#FF9800] mx-auto mt-3 rounded-full" />
          </div>
          <div className="bg-card rounded-xl border border-border p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label>{t("Your Name", "\u0906\u092A\u0915\u093E \u0928\u093E\u092E")}</Label>
                <Input
                  placeholder={t("Enter your name", "\u0905\u092A\u0928\u093E \u0928\u093E\u092E \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902")}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  data-testid="input-feedback-name"
                />
              </div>
              <div className="space-y-2">
                <Label>{t("Email", "\u0908\u092E\u0947\u0932")}</Label>
                <Input
                  type="email"
                  placeholder={t("Enter your email", "\u0905\u092A\u0928\u093E \u0908\u092E\u0947\u0932 \u0926\u0930\u094D\u091C \u0915\u0930\u0947\u0902")}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  data-testid="input-feedback-email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label>{t("Message", "\u0938\u0902\u0926\u0947\u0936")}</Label>
              <Textarea
                placeholder={t("Write your message here...", "\u0905\u092A\u0928\u093E \u0938\u0902\u0926\u0947\u0936 \u092F\u0939\u093E\u0901 \u0932\u093F\u0916\u0947\u0902...")}
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                data-testid="input-feedback-message"
              />
            </div>
            <Button
              className="w-full sm:w-auto gap-2"
              onClick={() => submitMutation.mutate()}
              disabled={submitMutation.isPending || !form.name || !form.email || !form.message}
              data-testid="button-submit-feedback"
            >
              <Send className="w-4 h-4" />
              {submitMutation.isPending ? t("Sending...", "\u092D\u0947\u091C \u0930\u0939\u0947 \u0939\u0948\u0902...") : t("Submit Feedback", "\u092A\u094D\u0930\u0924\u093F\u0915\u094D\u0930\u093F\u092F\u093E \u092D\u0947\u091C\u0947\u0902")}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
