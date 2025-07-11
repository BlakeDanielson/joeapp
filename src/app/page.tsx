'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import { 
  Monitor, 
  Zap, 
  Eye, 
  Shield, 
  TrendingUp, 
  Globe, 
  Server, 
  Brain, 
  Timer, 
  Target,
  ChevronRight,
  CheckCircle,
  BarChart3,
  Activity,
  Users,
  GamepadIcon,
  Cpu,
  Database,
  Cloud,
  Gauge,
  Code,
  Rocket,
  DollarSign,
  LineChart,
  BookOpen,
  ExternalLink,
  FileText,
  Play,
  Building
} from 'lucide-react';

export default function DatadogPresentation() {
  const [animatedNumbers, setAnimatedNumbers] = useState({
    latencyReduction: 0,
    mttrReduction: 0,
    costSavings: 0,
    performanceGain: 0
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedNumbers({
        latencyReduction: 70,
        mttrReduction: 80,
        costSavings: 20,
        performanceGain: 35
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: 'hero', title: 'Introduction', icon: <Target className="w-4 h-4" /> },
    { id: 'how-it-works', title: 'How Datadog Works', icon: <Monitor className="w-4 h-4" /> },
    { id: 'why-gaming', title: 'Why Gaming Industry', icon: <GamepadIcon className="w-4 h-4" /> },
    { id: 'roll20-benefits', title: 'Roll20 Benefits', icon: <TrendingUp className="w-4 h-4" /> },
    { id: 'why-development', title: 'For Development', icon: <Cpu className="w-4 h-4" /> },
    { id: 'business-impact', title: 'Business Impact', icon: <Target className="w-4 h-4" /> },
    { id: 'case-studies', title: 'Results & Metrics', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'resources', title: 'Resources', icon: <Globe className="w-4 h-4" /> },
    { id: 'next-steps', title: 'Next Steps', icon: <ChevronRight className="w-4 h-4" /> }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-primary/5">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Datadog
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center space-x-2"
                >
                  {section.icon}
                  <span className="text-sm">{section.title}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              For Roll20&apos;s Development & Operations Teams
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
              Elevate Roll20&apos;s Gaming Experience
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Unified observability platform designed for real-time gaming platforms. 
              Proactive monitoring, instant troubleshooting, and seamless scalability on AWS.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Eye className="w-5 h-5 mr-2" />
                See How It Works
              </Button>
              <Button size="lg" variant="outline">
                <GamepadIcon className="w-5 h-5 mr-2" />
                Gaming Industry Focus
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How Datadog Works */}
      <section id="how-it-works" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How Datadog Works</h2>
            <p className="text-xl text-muted-foreground">
              Unified agent-based architecture providing complete visibility into your entire stack
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Server className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Datadog Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Lightweight software collecting metrics, traces, and logs from your entire environment
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                  <Globe className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">700+ Integrations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Pre-configured integrations with AWS, Node.js, Nginx, and JavaScript libraries
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Activity className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Unified Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Centralized and interconnected metrics, traces, logs, and user experience data
                </p>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                  <Brain className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">AI-Powered Watchdog</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Automatically surfaces anomalies and potential issues without manual configuration
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Single Pane of Glass</h3>
                  <p className="text-muted-foreground">
                    Jump from frontend errors to backend traces to logs in seconds
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Gaming Industry */}
      <section id="why-gaming" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Datadog for Gaming?</h2>
            <p className="text-xl text-muted-foreground">
              Real-time gaming demands real-time observability
            </p>
          </div>

          <Tabs defaultValue="performance" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-3">
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
              <TabsTrigger value="scalability">Scalability</TabsTrigger>
            </TabsList>

            <TabsContent value="performance" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Gauge className="w-5 h-5 text-primary" />
                      <span>Real User Monitoring (RUM)</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Track Core Web Vitals and load times</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Identify geographic performance variations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Pinpoint JavaScript errors and bottlenecks</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Activity className="w-5 h-5 text-secondary" />
                      <span>Application Performance Monitoring</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Distributed tracing for Node.js backends</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Identify slow database queries</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Optimize character sheet loading</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="troubleshooting" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Shield className="w-5 h-5 text-primary" />
                      <span>Rapid Issue Resolution</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>Mean Time to Resolution</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={animatedNumbers.mttrReduction} className="w-24" />
                          <span className="text-sm font-medium">{animatedNumbers.mttrReduction}% reduction</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Correlate frontend errors with backend traces and logs instantly
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Database className="w-5 h-5 text-secondary" />
                      <span>Log Management</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Centralized log search and analysis</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Filter by user ID, campaign, or tags</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Eliminate manual log file parsing</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="scalability" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Cloud className="w-5 h-5 text-primary" />
                      <span>AWS Integration</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Unified view of EC2, S3, RDS, Lambda</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Auto-scaling monitoring and alerts</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>Serverless function visibility</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <TrendingUp className="w-5 h-5 text-secondary" />
                      <span>Cost Optimization</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span>AWS Cost Reduction</span>
                        <div className="flex items-center space-x-2">
                          <Progress value={animatedNumbers.costSavings} className="w-24" />
                          <span className="text-sm font-medium">{animatedNumbers.costSavings}% savings</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Identify underutilized resources and optimize performance
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Roll20 Specific Benefits */}
      <section id="roll20-benefits" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Datadog for Roll20</h2>
            <p className="text-xl text-muted-foreground">
              Addressing your unique challenges as a virtual tabletop platform
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            <AccordionItem value="frontend-performance">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center space-x-2">
                  <Monitor className="w-5 h-5 text-primary" />
                  <span>Frontend Performance & JavaScript Errors</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Roll20&apos;s platform is heavily reliant on JavaScript for the virtual tabletop experience. 
                      Errors can break immersion and frustrate players.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Datadog Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      Browser RUM automatically captures and groups JavaScript errors with stack traces, 
                      user session information, and browser details for rapid debugging.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="realtime-collaboration">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-secondary" />
                  <span>Real-time Collaboration & WebRTC</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Voice and video chat functionality is critical to the Roll20 experience. 
                      WebRTC issues can disrupt game sessions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Datadog Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      Monitor signaling servers, underlying network performance, and user experience metrics 
                      that indicate WebRTC communication problems.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="backend-performance">
              <AccordionTrigger className="text-lg font-semibold">
                <div className="flex items-center space-x-2">
                  <Cpu className="w-5 h-5 text-primary" />
                  <span>Backend Performance with Node.js & Nginx</span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid md:grid-cols-2 gap-6 mt-4">
                  <div>
                    <h4 className="font-semibold mb-2">The Challenge</h4>
                    <p className="text-sm text-muted-foreground">
                      Complex backend requests for character sheets, campaign data, and real-time updates 
                      need to be fast and reliable.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Datadog Solution</h4>
                    <p className="text-sm text-muted-foreground">
                      APM provides out-of-the-box Node.js tracing and Nginx integration with detailed metrics 
                      on request rates, error rates, and response times.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Why Datadog for Software Development */}
      <section id="why-development" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Datadog for Software Development?</h2>
            <p className="text-xl text-muted-foreground">
              Empowering development teams with the tools they need to build better software faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Developer Productivity</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Reduce debugging time by 70%</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Proactive issue detection before user reports</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Collaborative debugging with shared dashboards</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-3">
                  <Rocket className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-lg">Deployment Confidence</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Monitor deployments in real-time</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Automatic rollback triggers</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Feature flag monitoring</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg">Security & Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Security event monitoring</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Compliance dashboard automation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Anomaly detection for unusual patterns</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Built by Developers, for Developers</h3>
                  <p className="text-muted-foreground">
                    Datadog was created by engineers who understand the pain points of modern software development
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15min</div>
                  <div className="text-sm text-muted-foreground">Average setup time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary mb-1">700+</div>
                  <div className="text-sm text-muted-foreground">Integrations available</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Monitoring coverage</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Business Impact for Roll20 */}
      <section id="business-impact" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Business Impact for Roll20</h2>
            <p className="text-xl text-muted-foreground">
              Transform observability into competitive advantage and business growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <h3 className="text-xl font-bold">Revenue Protection</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Prevent revenue loss from downtime (avg. $5,600/minute for SaaS)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Reduce customer churn from poor performance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Optimize subscription renewals through better UX</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold">Customer Experience</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Improve user satisfaction scores by 25%</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Reduce support tickets by 40%</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Increase session duration and engagement</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Building className="w-5 h-5 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold">Operational Efficiency</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Reduce engineering time spent on firefighting</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Automate incident response workflows</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Enable data-driven capacity planning</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <LineChart className="w-5 h-5 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold">Strategic Growth</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Scale infrastructure proactively with user growth</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Make informed product decisions with real data</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">Accelerate time-to-market for new features</span>
                </li>
              </ul>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">ROI Calculator</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">$2.3M</div>
                    <div className="text-sm text-muted-foreground">Annual revenue protected</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">345%</div>
                    <div className="text-sm text-muted-foreground">Average ROI in year 1</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">6 months</div>
                    <div className="text-sm text-muted-foreground">Time to break-even</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">15%</div>
                    <div className="text-sm text-muted-foreground">Improvement in team velocity</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  *Based on average metrics from similar gaming platforms using Datadog
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Studies & Metrics */}
      <section id="case-studies" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-xl text-muted-foreground">
              Real metrics from gaming and web platforms using Datadog
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">
                  {animatedNumbers.latencyReduction}%
                </div>
                <CardTitle className="text-lg">Latency Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Companies using Datadog APM report up to 70% reduction in application latency
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {animatedNumbers.mttrReduction}%
                </div>
                <CardTitle className="text-lg">MTTR Reduction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Mean Time to Resolution reduced by up to 80% with unified observability
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-primary mb-2">
                  {animatedNumbers.costSavings}%
                </div>
                <CardTitle className="text-lg">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gaming companies reported 20% reduction in AWS costs through optimization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="text-3xl font-bold text-secondary mb-2">
                  {animatedNumbers.performanceGain}%
                </div>
                <CardTitle className="text-lg">Performance Gain</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  User-facing performance improved by 35% with RUM implementation
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Transform Roll20&apos;s Observability?</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Join thousands of gaming and web platforms that rely on Datadog for mission-critical observability
                </p>
                <div className="flex justify-center space-x-2">
                  <Badge variant="outline" className="text-sm">700+ Integrations</Badge>
                  <Badge variant="outline" className="text-sm">Real-time Monitoring</Badge>
                  <Badge variant="outline" className="text-sm">AI-Powered Insights</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Resources & Case Studies */}
      <section id="resources" className="py-16 px-4 bg-muted/20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Gaming Industry Resources</h2>
            <p className="text-xl text-muted-foreground">
              Case studies, whitepapers, and resources specifically for gaming companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Unity Technologies Case Study</CardTitle>
                    <p className="text-sm text-muted-foreground">Gaming Engine Platform</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  How Unity reduced deployment time by 85% and improved developer productivity with unified observability.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">Performance</Badge>
                    <Badge variant="outline" className="text-xs">DevOps</Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Read Case Study
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Riot Games: League of Legends</CardTitle>
                    <p className="text-sm text-muted-foreground">Multiplayer Gaming Platform</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Scaling observability for 180M+ monthly active users with real-time monitoring and proactive alerting.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">Scale</Badge>
                    <Badge variant="outline" className="text-xs">Real-time</Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:bg-secondary/10">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Watch Video
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Gaming Infrastructure Whitepaper</CardTitle>
                    <p className="text-sm text-muted-foreground">Technical Deep Dive</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Best practices for monitoring real-time gaming applications, WebRTC, and multiplayer architectures.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">Architecture</Badge>
                    <Badge variant="outline" className="text-xs">WebRTC</Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Download PDF
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Discord Engineering Blog</CardTitle>
                    <p className="text-sm text-muted-foreground">Voice Chat Platform</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  How Discord monitors voice quality and real-time communication for millions of concurrent users.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">Voice</Badge>
                    <Badge variant="outline" className="text-xs">Real-time</Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:bg-secondary/10">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Read Blog
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Gaming Metrics Benchmark</CardTitle>
                    <p className="text-sm text-muted-foreground">Industry Standards</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Performance benchmarks and KPIs for gaming platforms, including latency, throughput, and uptime standards.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">Benchmarks</Badge>
                    <Badge variant="outline" className="text-xs">KPIs</Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:bg-primary/10">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    View Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Rocket className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AWS Gaming Solutions</CardTitle>
                    <p className="text-sm text-muted-foreground">Cloud Architecture</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Joint Datadog-AWS guide for optimizing gaming infrastructure with monitoring, scaling, and cost optimization.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <Badge variant="outline" className="text-xs">AWS</Badge>
                    <Badge variant="outline" className="text-xs">Cloud</Badge>
                  </div>
                  <Button size="sm" variant="ghost" className="group-hover:bg-secondary/10">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Explore Guide
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Gaming Industry Community</h3>
                <p className="text-lg text-muted-foreground mb-6">
                  Join thousands of gaming engineers and CTOs sharing best practices and insights
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Users className="w-4 h-4 mr-2" />
                    Join Gaming Community
                  </Button>
                  <Button variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Subscribe to Newsletter
                  </Button>
                </div>
                <div className="flex justify-center space-x-6 mt-6">
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">5,000+</div>
                    <div className="text-sm text-muted-foreground">Gaming Engineers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-secondary">200+</div>
                    <div className="text-sm text-muted-foreground">Gaming Companies</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-bold text-primary">50+</div>
                    <div className="text-sm text-muted-foreground">Case Studies</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <section id="next-steps" className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Next Steps</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let&apos;s discuss how Datadog can specifically address Roll20&apos;s observability needs
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Timer className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Free Trial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Start with a 14-day free trial to see immediate value in your Roll20 infrastructure
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle>Technical Deep Dive</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Schedule a technical session with our solutions engineers familiar with gaming platforms
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Custom Demo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  See Datadog in action with a demo tailored to Roll20&apos;s specific use cases and challenges
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12">
            <Button size="lg" className="bg-primary hover:bg-primary/90 mr-4">
              <ChevronRight className="w-5 h-5 mr-2" />
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline">
              <Users className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Monitor className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Datadog
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            Empowering Roll20 with unified observability for exceptional gaming experiences
          </p>
        </div>
      </footer>
    </div>
  );
}
