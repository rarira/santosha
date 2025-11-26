import "@/styles/globals.css";

import type { Metadata } from "next";

import { cn } from "@/lib/utils";

import { noto_sans_kr } from "@/libs/font";
import ScheduleHeader from "./schedule/_components/schedule-header";

export const metadata: Metadata = {
  title: "Santosha Yoga Studio - 수업 시간표",
  description: "주간 요가 수업 일정을 확인하세요.",
};

export default function ScheduleLayout({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  return (
    <html
      lang="ko"
      className={cn(
        "min-h-screen noto-sans-kr antialiased",
        noto_sans_kr.variable
      )}
      suppressHydrationWarning
    >
      <body className="flex-col justify-items-center bg-background">
        <ScheduleHeader />

        {children}
      </body>
    </html>
  );
}
