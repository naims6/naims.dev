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
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BlurFade } from "@/components/animation-wrapper";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SectionHeader } from "../section-header";
import { Send } from "lucide-react";

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
      color: "from-gray-700 via-gray-600 to-gray-500",
      shadowColor: "rgba(75,85,99,1)",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/naims6",
      color: "from-blue-600 via-blue-500 to-blue-400",
      shadowColor: "rgba(37,99,235,1)",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/naim.sorker6",
      color: "from-blue-500 via-blue-400 to-blue-300",
      shadowColor: "rgba(59,130,246,1)",
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      href: "https://wa.me/+8801908390036",
      color: "from-green-500 via-green-400 to-green-300",
      shadowColor: "rgba(34,197,94,1)",
    },
  ];

  return (
    <section className="mt-20 scroll-mt-28" id="contact">
      <SectionHeader title="Get in Touch" className="px-4" />

      <div className="grid md:grid-cols-2 gap-10 items-stretch">
        {/* Left Side: Contact Info Card */}
        <BlurFade delay={0} inView className="flex flex-col h-full">
          <div className="flex-1 space-y-10 p-8 md:p-10 rounded-3xl bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden relative h-full flex flex-col justify-between transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none" />

            <div className="space-y-8 relative z-10">
              <h3 className="text-2xl font-bold tracking-tight text-foreground/90">
                Contact Information
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <BlurFade key={info.title} delay={0.1 + i * 0.05} inView>
                    <div className="group flex items-center gap-4 p-5 rounded-2xl bg-white/40 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 hover:border-primary/50 transition-all duration-300 shadow-sm">
                      <div className="relative w-12 h-12 rounded-xl overflow-hidden">
                        {/* 3D Background */}
                        <div
                          className={`absolute inset-0 bg-linear-to-br ${info.color} transition-transform duration-300 group-hover:scale-105`}
                        />
                        {/* 3D Shadow */}
                        <div
                          className="absolute inset-0 rounded-xl"
                          style={{
                            boxShadow: `inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2), 0 2px 0 0 ${info.shadowColor}, 0 4px 8px -2px ${info.shadowColor.replace("1)", "0.4)")}`,
                          }}
                        />
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                          {info.icon}
                        </div>
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

            <BlurFade delay={0.25} inView className="relative z-10">
              <div className="space-y-6 pt-6 border-t border-white/10">
                <h3 className="text-xl font-bold tracking-tight text-primary">
                  Follow Me
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      target="_blank"
                      className="group relative w-12 h-12 rounded-xl overflow-hidden flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                    >
                      {/* 3D Background */}
                      <div
                        className={`absolute inset-0 bg-linear-to-br ${link.color} transition-transform duration-300 group-hover:scale-105`}
                      />
                      {/* 3D Shadow */}
                      <div
                        className="absolute inset-0 rounded-xl transition-all duration-300"
                        style={{
                          boxShadow: `inset 0 1px 0 rgba(255,255,255,0.3), inset 0 -1px 0 rgba(0,0,0,0.2), 0 2px 0 0 ${link.shadowColor}, 0 4px 8px -2px ${link.shadowColor.replace("1)", "0.4)")}`,
                        }}
                      />
                      {/* Shine effect */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      </div>
                      {/* Icon */}
                      <div className="relative text-white transition-transform duration-300 group-hover:scale-110">
                        {link.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </BlurFade>

        {/* Right Side: Message Form Card */}
        <BlurFade delay={0.1} inView className="flex flex-col h-full">
          <div className="flex-1 p-8 md:p-10 rounded-3xl bg-white/30 dark:bg-white/5 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] overflow-hidden relative h-full transition-all duration-300">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent pointer-events-none" />

            <h3 className="text-2xl font-bold mb-8 relative z-10 text-foreground/90 tracking-tight">
              Send Message
            </h3>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 relative z-10 flex-1 flex flex-col"
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
                    className="bg-zinc-100/50 dark:bg-white/5 border-white/20 dark:border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 h-12 rounded-xl transition-all"
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
                    className="bg-zinc-100/50 dark:bg-white/5 border-white/20 dark:border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 h-12 rounded-xl transition-all"
                  />
                  {errors.from_email && (
                    <p className="text-[10px] font-bold text-destructive flex items-center gap-1 mt-1 ml-1 uppercase tracking-tighter">
                      <AlertCircle className="w-3 h-3" />{" "}
                      {errors.from_email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-2.5 flex-1 flex flex-col">
                <Label
                  htmlFor="message"
                  className="text-sm font-bold text-muted-foreground uppercase tracking-wider ml-1"
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project, requirements..."
                  {...register("message", { required: "Message is required" })}
                  className="bg-zinc-100/50 dark:bg-white/5 border-white/20 dark:border-white/10 focus:border-primary/50 focus:ring-1 focus:ring-primary/20 rounded-2xl resize-none transition-all flex-1 min-h-[150px]"
                />
                {errors.message && (
                  <p className="text-[10px] font-bold text-destructive flex items-center gap-1 mt-1 ml-1 uppercase tracking-tighter">
                    <AlertCircle className="w-3 h-3" /> {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full inline-flex items-center justify-center gap-3 px-8 py-4 font-bold text-white transition-all duration-300 ease-out rounded-2xl overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {/* 3D Background with gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-blue-600 via-blue-500 to-indigo-600 transition-all duration-300 group-hover:scale-105" />

                {/* 3D Edge/Depth effect */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2),0_4px_0_0_rgba(37,99,235,1),0_8px_16px_-4px_rgba(37,99,235,0.5)] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.2),0_6px_0_0_rgba(37,99,235,1),0_12px_20px_-4px_rgba(37,99,235,0.6)] transition-all duration-300 group-hover:-translate-y-1" />

                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>

                {/* Content */}
                <span className="relative flex items-center gap-3">
                  {isSubmitting ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : isSuccess ? (
                    <Check className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                  ) : (
                    <Send className="w-6 h-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  )}
                  <span className="text-lg tracking-wide">
                    {isSubmitting
                      ? "Sending..."
                      : isSuccess
                        ? "Sent Successfully"
                        : "Send Message"}
                  </span>
                </span>
              </button>
            </form>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
