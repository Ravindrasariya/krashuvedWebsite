import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { queryClient, apiRequest } from "@/lib/queryClient";
import { useLanguage } from "@/lib/language-context";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Plus, Image, MessageSquare } from "lucide-react";
import type { Banner, Testimonial } from "@shared/schema";

function BannerForm({ onSuccess }: { onSuccess: () => void }) {
  const { toast } = useToast();
  const [form, setForm] = useState({
    imageUrl: "",
    captionEn: "",
    captionHi: "",
    subCaptionEn: "",
    subCaptionHi: "",
    sortOrder: 0,
  });

  const mutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/banners", { ...form, active: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/banners"] });
      setForm({ imageUrl: "", captionEn: "", captionHi: "", subCaptionEn: "", subCaptionHi: "", sortOrder: 0 });
      toast({ title: "Banner added successfully" });
      onSuccess();
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Plus className="w-5 h-5" /> Add New Banner
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <Label>Image URL</Label>
          <Input
            value={form.imageUrl}
            onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
            placeholder="/images/banner1.png"
            data-testid="input-banner-image"
          />
        </div>
        <div>
          <Label>Caption (English)</Label>
          <Input
            value={form.captionEn}
            onChange={(e) => setForm({ ...form, captionEn: e.target.value })}
            placeholder="Enter English caption"
            data-testid="input-banner-caption-en"
          />
        </div>
        <div>
          <Label>Caption (Hindi)</Label>
          <Input
            value={form.captionHi}
            onChange={(e) => setForm({ ...form, captionHi: e.target.value })}
            placeholder="Hindi caption"
            data-testid="input-banner-caption-hi"
          />
        </div>
        <div>
          <Label>Sub-caption (English)</Label>
          <Input
            value={form.subCaptionEn}
            onChange={(e) => setForm({ ...form, subCaptionEn: e.target.value })}
            placeholder="Optional sub-caption"
            data-testid="input-banner-subcaption-en"
          />
        </div>
        <div>
          <Label>Sub-caption (Hindi)</Label>
          <Input
            value={form.subCaptionHi}
            onChange={(e) => setForm({ ...form, subCaptionHi: e.target.value })}
            placeholder="Optional Hindi sub-caption"
            data-testid="input-banner-subcaption-hi"
          />
        </div>
        <div>
          <Label>Sort Order</Label>
          <Input
            type="number"
            value={form.sortOrder}
            onChange={(e) => setForm({ ...form, sortOrder: parseInt(e.target.value) || 0 })}
            data-testid="input-banner-sort"
          />
        </div>
      </div>
      <Button
        className="mt-4"
        onClick={() => mutation.mutate()}
        disabled={mutation.isPending || !form.imageUrl || !form.captionEn || !form.captionHi}
        data-testid="button-add-banner"
      >
        {mutation.isPending ? "Adding..." : "Add Banner"}
      </Button>
    </Card>
  );
}

function TestimonialForm({ onSuccess }: { onSuccess: () => void }) {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "",
    designation: "",
    descriptionEn: "",
    descriptionHi: "",
    photoUrl: "",
  });

  const mutation = useMutation({
    mutationFn: () => apiRequest("POST", "/api/testimonials", { ...form, active: true }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      setForm({ name: "", designation: "", descriptionEn: "", descriptionHi: "", photoUrl: "" });
      toast({ title: "Testimonial added successfully" });
      onSuccess();
    },
    onError: (err: Error) => {
      toast({ title: "Error", description: err.message, variant: "destructive" });
    },
  });

  return (
    <Card className="p-6">
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Plus className="w-5 h-5" /> Add New Testimonial
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Label>Name</Label>
          <Input
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Full name"
            data-testid="input-testimonial-name"
          />
        </div>
        <div>
          <Label>Designation</Label>
          <Input
            value={form.designation}
            onChange={(e) => setForm({ ...form, designation: e.target.value })}
            placeholder="e.g., Farmer, Cold Store Manager"
            data-testid="input-testimonial-designation"
          />
        </div>
        <div className="sm:col-span-2">
          <Label>Photo URL (optional)</Label>
          <Input
            value={form.photoUrl}
            onChange={(e) => setForm({ ...form, photoUrl: e.target.value })}
            placeholder="/images/photo.png"
            data-testid="input-testimonial-photo"
          />
        </div>
        <div className="sm:col-span-2">
          <Label>Description (English)</Label>
          <Textarea
            value={form.descriptionEn}
            onChange={(e) => setForm({ ...form, descriptionEn: e.target.value })}
            placeholder="English testimonial text"
            data-testid="input-testimonial-desc-en"
          />
        </div>
        <div className="sm:col-span-2">
          <Label>Description (Hindi)</Label>
          <Textarea
            value={form.descriptionHi}
            onChange={(e) => setForm({ ...form, descriptionHi: e.target.value })}
            placeholder="Hindi testimonial text"
            data-testid="input-testimonial-desc-hi"
          />
        </div>
      </div>
      <Button
        className="mt-4"
        onClick={() => mutation.mutate()}
        disabled={mutation.isPending || !form.name || !form.designation || !form.descriptionEn || !form.descriptionHi}
        data-testid="button-add-testimonial"
      >
        {mutation.isPending ? "Adding..." : "Add Testimonial"}
      </Button>
    </Card>
  );
}

export default function Admin() {
  const { t } = useLanguage();
  const { toast } = useToast();

  const { data: bannerList, isLoading: loadingBanners } = useQuery<Banner[]>({
    queryKey: ["/api/banners"],
  });

  const { data: testimonialsList, isLoading: loadingTestimonials } = useQuery<Testimonial[]>({
    queryKey: ["/api/testimonials"],
  });

  const deleteBannerMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/banners/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/banners"] });
      toast({ title: "Banner deleted" });
    },
  });

  const deleteTestimonialMutation = useMutation({
    mutationFn: (id: number) => apiRequest("DELETE", `/api/testimonials/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/testimonials"] });
      toast({ title: "Testimonial deleted" });
    },
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10" data-testid="page-admin">
      <h1 className="text-3xl font-bold mb-2">{t("Admin Panel", "\u0905\u0921\u094D\u092E\u093F\u0928 \u092A\u0948\u0928\u0932")}</h1>
      <p className="text-muted-foreground mb-8">{t("Manage banners and testimonials", "\u092C\u0948\u0928\u0930 \u0914\u0930 \u092A\u094D\u0930\u0936\u0902\u0938\u093E\u092A\u0924\u094D\u0930 \u092A\u094D\u0930\u092C\u0902\u0927\u093F\u0924 \u0915\u0930\u0947\u0902")}</p>

      <Tabs defaultValue="banners">
        <TabsList className="mb-6">
          <TabsTrigger value="banners" className="gap-1.5" data-testid="tab-banners">
            <Image className="w-4 h-4" /> {t("Banners", "\u092C\u0948\u0928\u0930")}
          </TabsTrigger>
          <TabsTrigger value="testimonials" className="gap-1.5" data-testid="tab-testimonials">
            <MessageSquare className="w-4 h-4" /> {t("Testimonials", "\u092A\u094D\u0930\u0936\u0902\u0938\u093E\u092A\u0924\u094D\u0930")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="banners" className="space-y-6">
          <BannerForm onSuccess={() => {}} />

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("Existing Banners", "\u092E\u094C\u091C\u0942\u0926\u093E \u092C\u0948\u0928\u0930")}</h3>
            {loadingBanners ? (
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <Skeleton key={i} className="h-24 rounded-md" />
                ))}
              </div>
            ) : bannerList && bannerList.length > 0 ? (
              <div className="space-y-3">
                {bannerList.map((banner) => (
                  <Card key={banner.id} className="p-4 flex items-center gap-4" data-testid={`admin-banner-${banner.id}`}>
                    <img
                      src={banner.imageUrl}
                      alt={banner.captionEn}
                      className="w-24 h-16 object-cover rounded-md flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm truncate">{banner.captionEn}</p>
                      <p className="text-muted-foreground text-xs truncate">{banner.captionHi}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => deleteBannerMutation.mutate(banner.id)}
                      disabled={deleteBannerMutation.isPending}
                      data-testid={`button-delete-banner-${banner.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">{t("No banners yet", "\u0905\u092D\u0940 \u0915\u094B\u0908 \u092C\u0948\u0928\u0930 \u0928\u0939\u0940\u0902")}</p>
            )}
          </div>
        </TabsContent>

        <TabsContent value="testimonials" className="space-y-6">
          <TestimonialForm onSuccess={() => {}} />

          <div>
            <h3 className="font-semibold text-lg mb-4">{t("Existing Testimonials", "\u092E\u094C\u091C\u0942\u0926\u093E \u092A\u094D\u0930\u0936\u0902\u0938\u093E\u092A\u0924\u094D\u0930")}</h3>
            {loadingTestimonials ? (
              <div className="space-y-3">
                {[1, 2].map((i) => (
                  <Skeleton key={i} className="h-24 rounded-md" />
                ))}
              </div>
            ) : testimonialsList && testimonialsList.length > 0 ? (
              <div className="space-y-3">
                {testimonialsList.map((testimonial) => (
                  <Card key={testimonial.id} className="p-4 flex items-center gap-4" data-testid={`admin-testimonial-${testimonial.id}`}>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm">{testimonial.name}</p>
                      <p className="text-muted-foreground text-xs">{testimonial.designation}</p>
                      <p className="text-muted-foreground text-xs truncate mt-1">{testimonial.descriptionEn}</p>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => deleteTestimonialMutation.mutate(testimonial.id)}
                      disabled={deleteTestimonialMutation.isPending}
                      data-testid={`button-delete-testimonial-${testimonial.id}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </Card>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm">{t("No testimonials yet", "\u0905\u092D\u0940 \u0915\u094B\u0908 \u092A\u094D\u0930\u0936\u0902\u0938\u093E\u092A\u0924\u094D\u0930 \u0928\u0939\u0940\u0902")}</p>
            )}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
