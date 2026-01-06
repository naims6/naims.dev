"use client"

import { useState } from "react"
import { Copy, Mail, Check, Loader2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { BlurFade } from "@/components/animation-wrapper"
import Link from "next/link"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"

type ContactFormData = {
  from_name: string
  from_email: string
  message: string
}

export default function Contact() {
  const [copied, setCopied] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const email = "naim.sorker06@gmail.com" 

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    // Validate message word count
    const wordCount = data.message.trim().split(/\s+/).length
    if (wordCount < 10) {
      toast.error("Message must be at least 10 words long.", {
        style: {
           border: '1px solid #713200',
           padding: '16px',
           color: '#713200',
        },
        iconTheme: {
           primary: '#713200',
           secondary: '#FFFAEE',
        },
      })
      return
    }

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    // Fallback if keys are not set (for safety)
    if (!serviceId || !templateId || !publicKey) {
      toast.error("Email service is not configured correctly.")
      return
    }

    const templateParams = {
        from_name: data.from_name,
        from_email: data.from_email,
        message: data.message,
    };

    try {
      await emailjs.send(serviceId, templateId, templateParams, publicKey)
      setIsSuccess(true)
      toast.success("Message sent successfully!")
      reset()
    } catch (error) {
      console.error(error)
      toast.error("Failed to send message. Please try again.")
    }
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
    toast.success("Email copied to clipboard!")
  }

  return (
    <div className="mt-12 mb-2">
      <BlurFade delay={0.2} inView>
        <h1 className="text-xl font-medium mb-5 border-l-4 border-primary pl-3">
          Get in Touch
        </h1>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <Card className="bg-linear-to-br from-background/50 to-muted/50 backdrop-blur-2xl border-input shadow-md text-center py-8">
          <CardHeader>
            <CardTitle className="text-3xl font-bold tracking-tight mb-2">Let&apos;s Work Together!</CardTitle>
            <CardDescription className="text-base max-w-lg mx-auto">
              I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2 mt-2">
                  <Dialog onOpenChange={(open) => !open && setIsSuccess(false)}>
                    <DialogTrigger asChild>
                      <Button size="lg" className="gap-2 text-base font-medium px-8">
                        <Mail className="w-5 h-5" />
                        Say Hello
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Say Hello!</DialogTitle>
                        <DialogDescription>
                           Send me a message and I&apos;ll get back to you as soon as possible.
                        </DialogDescription>
                      </DialogHeader>
                      {isSuccess ? (
                        <div className="flex flex-col items-center justify-center py-10 space-y-4 animate-in fade-in zoom-in duration-300">
                          <div className="rounded-full bg-green-100 p-3 dark:bg-green-900/30">
                            <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
                          </div>
                          <h3 className="text-xl font-semibold">Message Sent!</h3>
                          <p className="text-center text-muted-foreground px-4">
                            Thank you for reaching out! I&apos;ve received your message and will respond as soon as I can.
                          </p>
                          <Button variant="outline" onClick={() => setIsSuccess(false)} className="mt-4">
                            Send Another
                          </Button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
                          <div className="grid gap-2">
                            <Label htmlFor="from_name" className="text-left">Name</Label>
                            <Input 
                              id="from_name" 
                              placeholder="Your name" 
                              {...register("from_name", { required: "Name is required" })}
                              disabled={isSubmitting}
                              className={errors.from_name ? "border-red-500" : ""}
                            />
                            {errors.from_name && <span className="text-xs text-red-500 text-left flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.from_name.message}</span>}
                          </div>
                          <div className="grid gap-2">
                             <Label htmlFor="from_email" className="text-left">Email</Label>
                             <Input 
                                id="from_email" 
                                type="email" 
                                placeholder="Your email" 
                                {...register("from_email", { 
                                  required: "Email is required",
                                  pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Invalid email address"
                                  }
                                })}
                                disabled={isSubmitting} 
                                className={errors.from_email ? "border-red-500" : ""}
                              />
                             {errors.from_email && <span className="text-xs text-red-500 text-left flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.from_email.message}</span>}
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="message" className="text-left">Message <span className="text-xs text-muted-foreground font-normal">(min 10 words)</span></Label>
                            <Textarea 
                              id="message" 
                              placeholder="Type your message here..." 
                              {...register("message", { required: "Message is required" })}
                              disabled={isSubmitting} 
                              className={errors.message ? "border-red-500" : ""}
                            />
                            {errors.message && <span className="text-xs text-red-500 text-left flex items-center gap-1"><AlertCircle className="w-3 h-3"/> {errors.message.message}</span>}
                          </div>
                          <DialogFooter>
                            <Button type="submit" className="w-full" disabled={isSubmitting}>
                              {isSubmitting ? (
                                <>
                                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                  Sending...
                                </>
                              ) : (
                                "Send Message"
                              )}
                            </Button>
                          </DialogFooter>
                        </form>
                      )}
                    </DialogContent>
                  </Dialog>
                  
                  <TooltipProvider>
                      <Tooltip>
                          <TooltipTrigger asChild>
                              <Button variant="outline" size="lg" className="w-12 px-0" onClick={handleCopy}>
                                  {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                                  <span className="sr-only">Copy email</span>
                              </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                              <p>{copied ? "Copied!" : "Copy email"}</p>
                          </TooltipContent>
                      </Tooltip>
                  </TooltipProvider>
              </div>
              
              <p className="text-sm text-muted-foreground mt-4">
                  Or find me on <Link href="https://www.linkedin.com/in/naims6/" target="_blank" className="text-foreground font-medium">LinkedIn</Link> and <Link href="https://github.com/naims6" target="_blank" className="text-foreground font-medium">GitHub</Link>
              </p>
          </CardContent>
        </Card>
      </BlurFade>
    </div>
  )
}
