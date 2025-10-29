import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Users,
  BookOpen,
  Trophy,
  Target,
  Heart,
  Rocket,
  GraduationCap,
  Briefcase,
  UserPlus,
  Baby,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Home() {
  const { language, t } = useLanguage();
  const isRTL = language === "ar";
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  const stats = [
    { number: "500+", label: t("stats.children"), icon: Users },
    { number: "10", label: t("stats.projects"), icon: BookOpen },
    { number: "7", label: t("stats.books"), icon: Trophy },
    { number: "4", label: t("stats.participations"), icon: Target },
  ];

  const targetGroups = [
    {
      title: t("join.children.title"),
      description: t("join.children.description"),
      icon: Baby,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: t("join.students.title"),
      description: t("join.students.description"),
      icon: GraduationCap,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: t("join.graduates.title"),
      description: t("join.graduates.description"),
      icon: UserPlus,
      color: "bg-green-100 text-green-600",
    },
    {
      title: t("join.employees.title"),
      description: t("join.employees.description"),
      icon: Briefcase,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  const successStories = [
    {
      title: t("impact.story1.title"),
      description: t("impact.story1.description"),
      achievement: t("impact.story1.achievement"),
    },
    {
      title: t("impact.story2.title"),
      description: t("impact.story2.description"),
      achievement: t("impact.story2.achievement"),
    },
    {
      title: t("impact.story3.title"),
      description: t("impact.story3.description"),
      achievement: t("impact.story3.achievement"),
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-base px-4 py-2 bg-accent/20 text-accent-foreground border-accent/30">
              <Sparkles className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t("hero.badge")}
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
              {t("hero.title.part1")}{" "}
              <span className="text-gradient">{t("hero.title.heritage")}</span>
              {" "}{t("hero.title.part2")}{" "}
              <span className="text-gradient">{t("hero.title.technology")}</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
              {t("hero.description")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gradient-primary text-primary-foreground text-lg px-8 py-6">
                <Rocket className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t("hero.cta.primary")}
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6">
                {t("hero.cta.secondary")}
                <ArrowIcon className={`h-5 w-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 text-base px-4 py-2 bg-accent/20 text-accent-foreground border-accent/30">
                <Heart className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
                {t("story.badge")}
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                {t("story.title")}
              </h2>
            </div>

            <Card className="border-2 border-border">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t("story.p1")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t("story.p2")}
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t("story.p3")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="impact" className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-base px-4 py-2 bg-accent/20 text-accent-foreground border-accent/30">
              <Trophy className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t("impact.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("impact.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("impact.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {successStories.map((story, index) => (
              <Card key={index} className="border-2 border-border hover:border-primary transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{story.description}</p>
                  <Badge className="bg-accent/20 text-accent-foreground border-accent/30">
                    {story.achievement}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section id="join" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-base px-4 py-2 bg-accent/20 text-accent-foreground border-accent/30">
              <Users className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t("join.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("join.title")}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("join.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {targetGroups.map((group, index) => {
              const Icon = group.icon;
              return (
                <Card key={index} className="border-2 border-border hover:border-primary transition-all hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${group.color} mb-4`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{group.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{group.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gradient-primary text-primary-foreground text-lg px-8 py-6">
              <Rocket className={`h-5 w-5 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t("join.cta")}
            </Button>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 text-base px-4 py-2 bg-accent/20 text-accent-foreground border-accent/30">
              <Rocket className={`h-4 w-4 ${isRTL ? 'ml-2' : 'mr-2'}`} />
              {t("vision.badge")}
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("vision.title")}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t("vision.description")}
            </p>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              {t("vision.cta")}
              <ArrowIcon className={`h-5 w-5 ${isRTL ? 'mr-2' : 'ml-2'}`} />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              {t("contact.title")}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t("contact.description")}
            </p>
            <Button size="lg" className="gradient-primary text-primary-foreground text-lg px-8 py-6">
              {t("contact.cta")}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
