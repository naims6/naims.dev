"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Sparkles, Bot, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminChatPage() {
  return (
    <div className="container mx-auto p-4 max-w-4xl mt-12 flex flex-col items-center justify-center min-h-[70vh]">
      <Card className="w-full bg-card/60 backdrop-blur-md border-primary/20 shadow-xl text-center p-6 sm:p-10">
        <CardHeader className="flex flex-col items-center pb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 border border-primary/20">
            <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          </div>
          <CardTitle className="text-2xl sm:text-3xl font-bold">
            Gemini AI Agent Active
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 max-w-lg mx-auto">
          <p className="text-muted-foreground leading-relaxed">
            The previous manual chat messaging route has been upgraded to an automated, intelligent <strong>Google GenAI Agent</strong> that responds directly to portfolio visitors using your portfolio data.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild variant="default" className="gap-2">
              <Link href="/">
                <ArrowLeft className="w-4 h-4" />
                Go to Portfolio & Test Chat
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
