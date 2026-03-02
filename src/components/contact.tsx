"use client";

import { useState } from "react";
import {
  Mail,
  Check,
  Loader2,
  AlertCircle,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Twitter,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BlurFade } from "@/components/animation-wrapper";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

type ContactFormData = {
  from_name: string;
  from_email: string;
  message: string;
};

export default function Contact() {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    const wordCount = data.message.trim().split(/\s+/).length;
    if (wordCount < 5) {
      toast.error("Message must be at least 5 words long.");
      return;
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured correctly.");
      return;
    }

    const templateParams = {
      from_name: data.from_name,
      from_email: data.from_email,
      message: data.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      setIsSuccess(true);
      toast.success("Message sent successfully!");
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "amdadislam733@gmail.com",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+880 1540-138209",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Dhaka, Bangladesh",
    },
  ];

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "https://github.com/naims6" },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/naims6",
    },
    { icon: <Facebook className="w-5 h-5" />, href: "https://facebook.com" },
    { icon: <Twitter className="w-5 h-5" />, href: "https://twitter.com" },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/8801540138209",
    },
  ];

  return (
    <section className="mt-20 mb-20" id="contact">
      <BlurFade delay={0.2} inView>
        <h2 className="text-xl font-medium mb-10 border-l-4 border-primary pl-3">
          Get in Touch
        </h2>
      </BlurFade>

      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Contact Info */}
        <div className="space-y-10">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-foreground/90">
              Contact Information
            </h3>

            <div className="space-y-4">
              {contactInfo.map((info, i) => (
                <BlurFade key={info.title} delay={0.25 + i * 0.1} inView>
                  <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white/30 dark:bg-black/20 backdrop-blur-xl border border-white/40 dark:border-white/5 hover:border-primary/50 transition-all duration-300 shadow-sm">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground/90 uppercase tracking-wider">
                        {info.title}
                      </p>
                      <p className="text-sm text-muted-foreground font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>

          <BlurFade delay={0.6} inView>
            <div className="space-y-6">
              <h3 className="text-xl font-bold tracking-tight text-primary">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    target="_blank"
                    className="p-3.5 rounded-xl bg-white/30 dark:bg-black/20 backdrop-blur-xl border border-white/40 dark:border-white/5 hover:border-primary/50 hover:text-primary transition-all duration-300 shadow-sm"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>

        {/* Right Side: Message Form */}
        <BlurFade delay={0.4} inView>
          <div className="p-8 md:p-10 rounded-4xl bg-white/30 dark:bg-zinc-900/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 overflow-hidden relative shadow-xl">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none" />

            <h3 className="text-2xl font-bold mb-8 relative z-10 text-foreground/90 tracking-tight">
              Send Message
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 relative z-10"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2.5">
                  <Label
                    htmlFor="from_name"
                    className="text-sm font-bold text-muted-foreground uppercase tracking-wider ml-1"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="from_name"
                    placeholder="Your Full Name"
                    {...register("from_name", { required: "Name is required" })}
                    className="bg-zinc-100/50 dark:bg-black/20 border-white/20 dark:border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 h-12 rounded-xl transition-all"
                  />
                  {errors.from_name && (
                    <p className="text-[10px] font-bold text-destructive flex items-center gap-1 mt-1 ml-1 uppercase tracking-tighter">
                      <AlertCircle className="w-3 h-3" />{" "}
                      {errors.from_name.message}
                    </p>
                  )}
                </div>
                <div className="space-y-2.5">
                  <Label
                    htmlFor="from_email"
                    className="text-sm font-bold text-muted-foreground uppercase tracking-wider ml-1"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="from_email"
                    type="email"
                    placeholder="your email"
                    {...register("from_email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email",
                      },
                    })}
                    className="bg-zinc-100/50 dark:bg-black/20 border-white/20 dark:border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 h-12 rounded-xl transition-all"
                  />
                  {errors.from_email && (
                    <p className="text-[10px] font-bold text-destructive flex items-center gap-1 mt-1 ml-1 uppercase tracking-tighter">
                      <AlertCircle className="w-3 h-3" />{" "}
                      {errors.from_email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2.5">
                <Label
                  htmlFor="message"
                  className="text-sm font-bold text-muted-foreground uppercase tracking-wider ml-1"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, requirements..."
                  rows={6}
                  {...register("message", { required: "Message is required" })}
                  className="bg-zinc-100/50 dark:bg-black/20 border-white/20 dark:border-white/5 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 rounded-2xl resize-none transition-all"
                />
                {errors.message && (
                  <p className="text-[10px] font-bold text-destructive flex items-center gap-1 mt-1 ml-1 uppercase tracking-tighter">
                    <AlertCircle className="w-3 h-3" /> {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-14 text-base font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 shadow-lg shadow-primary/20 rounded-xl"
              >
                {isSubmitting ? (
                  <Loader2 className="w-6 h-6 animate-spin text-primary-foreground" />
                ) : isSuccess ? (
                  <div className="flex items-center gap-2">
                    <Check className="w-6 h-6" /> Sent Successfully
                  </div>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
