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
  Send,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BlurFade } from "@/components/animation-wrapper";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SectionHeader } from "../section-header";
import PrimaryCtaButton from "@/components/primary-cta-button";

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
      value: "naim.sorker06@gmail.com",
      color: "from-red-500 via-red-400 to-red-300",
      shadowColor: "rgba(239,68,68,1)",
      iconColor: "text-red-600",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+880 1908-390036",
      color: "from-cyan-500 via-cyan-400 to-cyan-300",
      shadowColor: "rgba(6,182,212,1)",
      iconColor: "text-cyan-600",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Tangail, Dhaka, Bangladesh",
      color: "from-orange-500 via-orange-400 to-orange-300",
      shadowColor: "rgba(249,115,22,1)",
      iconColor: "text-orange-600",
    },
  ];

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/naims6",
      label: "GitHub",
      color: "from-gray-700 via-gray-600 to-gray-500",
      shadowColor: "rgba(75,85,99,1)",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/naims6",
      label: "LinkedIn",
      color: "from-blue-600 via-blue-500 to-blue-400",
      shadowColor: "rgba(37,99,235,1)",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/naim.sorker6",
      label: "Facebook",
      color: "from-blue-500 via-blue-400 to-blue-300",
      shadowColor: "rgba(59,130,246,1)",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/+8801908390036",
      label: "WhatsApp",
      color: "from-green-500 via-green-400 to-green-300",
      shadowColor: "rgba(34,197,94,1)",
    },
  ];

  return (
    <section
      className="pt-20 pb-6 scroll-mt-28 relative overflow-hidden"
      id="contact"
    >
      {/* Background decorative blobs for glassmorphism effect */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-[80px] pointer-events-none" />

      <SectionHeader title="Get in Touch" className="px-4 mb-12" />

      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-6 items-stretch">
          {/* Left Side: Contact Info - Takes 2 columns */}
          <BlurFade delay={0} inView className="lg:col-span-2 flex flex-col">
            <div className="flex-1 p-6 rounded-3xl bg-gradient-to-br from-white/50 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Decorative gradient blob */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-3xl" />

              <div className="relative z-10 h-full flex flex-col">
                <div className="mb-6">
                  <h3 className="text-xl font-bold tracking-tight mb-1">
                    Let&apos;s Connect
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Have a project in mind?
                  </p>
                </div>

                <div className="space-y-3">
                  {contactInfo.map((info, i) => (
                    <BlurFade key={info.title} delay={0.1 + i * 0.05} inView>
                      <div className="group flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-white/5 backdrop-blur-sm border border-white/40 dark:border-white/10 hover:bg-white/80 dark:hover:bg-white/10 hover:scale-[1.02] transition-all duration-300 shadow-sm">
                        <div
                          className={`relative w-9 h-9 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform duration-300`}
                        >
                          {info.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                            {info.title}
                          </p>
                          <p className="text-xs font-semibold text-foreground truncate">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </BlurFade>
                  ))}
                </div>

                <BlurFade
                  delay={0.3}
                  inView
                  className="mt-6 pt-4 border-t border-border/50"
                >
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider mb-3">
                    Follow Me
                  </p>
                  <div className="flex gap-2">
                    {socialLinks.map((link, i) => (
                      <a
                        key={i}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-8 h-8 rounded-lg bg-gradient-to-br ${link.color} flex items-center justify-center text-white shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300`}
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </BlurFade>
              </div>
            </div>
          </BlurFade>

          {/* Right Side: Form - Takes 3 columns */}
          <BlurFade delay={0.1} inView className="lg:col-span-3 flex flex-col">
            <div className="flex-1 p-8 rounded-3xl bg-gradient-to-br from-white/50 to-white/20 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/50 dark:border-white/10 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_40px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-primary/10 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold tracking-tight mb-6">
                  Send an Email
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label
                        htmlFor="from_name"
                        className="text-xs font-bold text-muted-foreground uppercase tracking-wider"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="from_name"
                        placeholder="John Doe"
                        {...register("from_name", {
                          required: "Name is required",
                        })}
                        className="bg-white/70 dark:bg-white/5 border-border/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all placeholder:text-muted-foreground/50"
                      />
                      {errors.from_name && (
                        <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.from_name.message}
                        </p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="from_email"
                        className="text-xs font-bold text-muted-foreground uppercase tracking-wider"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="from_email"
                        type="email"
                        placeholder="john@example.com"
                        {...register("from_email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address",
                          },
                        })}
                        className="bg-white/70 dark:bg-white/5 border-border/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 h-12 rounded-xl transition-all placeholder:text-muted-foreground/50"
                      />
                      {errors.from_email && (
                        <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.from_email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="message"
                      className="text-xs font-bold text-muted-foreground uppercase tracking-wider"
                    >
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project, ideas, or any questions you have..."
                      {...register("message", {
                        required: "Message is required",
                      })}
                      className="bg-white/70 dark:bg-white/5 border-border/50 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 rounded-xl resize-none min-h-[140px] transition-all placeholder:text-muted-foreground/50"
                    />
                    {errors.message && (
                      <p className="text-xs text-destructive flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <PrimaryCtaButton
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    disabled={isSubmitting}
                    className="w-full h-12 mt-2"
                    icon={
                      isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : isSuccess ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Send className="w-5 h-5" />
                      )
                    }
                  >
                    {isSubmitting
                      ? "Sending..."
                      : isSuccess
                        ? "Sent!"
                        : "Send Email"}
                  </PrimaryCtaButton>
                </form>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
