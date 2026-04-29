import Link from "next/link";
import { ArrowRight, Layers, Palette, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    icon: Zap,
    title: "Next.js 16 App Router",
    description:
      "최신 App Router 기반의 파일 시스템 라우팅과 서버 컴포넌트를 활용합니다.",
    badge: "서버 컴포넌트",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description:
      "유틸리티 퍼스트 CSS 프레임워크로 빠르고 일관된 스타일링을 제공합니다.",
    badge: "CSS-first 설정",
  },
  {
    icon: Layers,
    title: "shadcn/ui",
    description:
      "재사용 가능하고 커스터마이즈 가능한 UI 컴포넌트 라이브러리입니다.",
    badge: "접근성 준수",
  },
  {
    icon: Shield,
    title: "TypeScript",
    description:
      "정적 타입 검사로 런타임 오류를 사전에 방지하고 개발 생산성을 높입니다.",
    badge: "타입 안전",
  },
];

export default function HomePage() {
  return (
    <div className="container mx-auto max-w-screen-xl px-4 py-16">
      {/* 히어로 섹션 */}
      <section className="flex flex-col items-center text-center gap-6 pb-16">
        <Badge variant="secondary" className="text-sm">
          🚀 Next.js 16 + shadcn/ui 스타터 킷
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          빠르게 시작하는
          <br />
          <span className="text-primary">모던 웹 개발</span>
        </h1>

        <p className="max-w-2xl text-lg text-muted-foreground">
          Next.js 16, TypeScript, Tailwind CSS v4, shadcn/ui로 구성된 프로덕션
          레디 스타터 킷입니다. 다크모드, 접근성, 반응형 레이아웃이 기본
          포함되어 있습니다.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button size="lg" render={<Link href="/components" />}>
            컴포넌트 보기
            <ArrowRight className="ml-2 size-4" />
          </Button>
          <Button variant="outline" size="lg" render={<Link href="/about" />}>
            소개
          </Button>
        </div>
      </section>

      {/* 기능 카드 섹션 */}
      <section>
        <h2 className="mb-8 text-center text-2xl font-bold tracking-tight">
          주요 기능
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description, badge }) => (
            <Card key={title} className="flex flex-col">
              <CardHeader>
                <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="size-5 text-primary" />
                </div>
                <CardTitle className="text-base">{title}</CardTitle>
                <CardDescription className="text-sm">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <Badge variant="secondary">{badge}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
