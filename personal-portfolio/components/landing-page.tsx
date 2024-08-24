import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4 px-6 md:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <LaptopIcon className="w-6 h-6" />
          <h1 className="text-2xl font-bold">Yasiru Basnayake</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Education
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Areas of Interest
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Key Projects
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Contact
          </Link>
        </nav>
        <Button variant="ghost" size="icon" className="md:hidden">
          <MenuIcon className="w-6 h-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </header>
      <main className="flex-1">
        <section id="hero" className="bg-background py-12 md:py-24 px-6 md:px-8">
          <div className="container mx-auto max-w-3xl space-y-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight">Welcome to my Portfolio</h2>
            <p className="text-muted-foreground text-xl">
              Explore my educational background, areas of interest, and key projects as an electronic and
              telecommunication engineering undergraduate.
            </p>
            <div className="flex justify-center gap-4">
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Learn More
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-muted-foreground shadow-sm transition-colors hover:bg-muted hover:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                prefetch={false}
              >
                Contact Me
              </Link>
            </div>
          </div>
        </section>
        <section id="education" className="bg-muted py-12 md:py-24 px-6 md:px-8">
          <div className="container mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Education</h2>
              <p className="text-muted-foreground text-lg">Explore my educational background and achievements.</p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bachelor of Engineering (B.E.)</CardTitle>
                  <CardDescription>Electronic and Telecommunication Engineering</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pursuing a Bachelor's degree in Electronic and Telecommunication Engineering at XYZ University.
                    Expected graduation in 2024.
                  </p>
                  <ul className="mt-4 space-y-2 text-muted-foreground">
                    <li>
                      <strong>GPA:</strong> 3.8/4.0
                    </li>
                    <li>
                      <strong>Relevant Coursework:</strong> Digital Electronics, Communication Systems, Microprocessor
                      and Embedded Systems, Signal Processing, Wireless Networks
                    </li>
                    <li>
                      <strong>Extracurricular:</strong> Robotics Club, IEEE Student Branch
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="interests" className="bg-background py-12 md:py-24 px-6 md:px-8">
          <div className="container mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Areas of Interest</h2>
              <p className="text-muted-foreground text-lg">Discover my areas of interest and expertise.</p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <MicroscopeIcon className="w-12 h-12 text-primary" />
                      <h3 className="text-xl font-semibold">Embedded Systems</h3>
                      <p className="text-muted-foreground text-center">
                        Designing and developing embedded systems for various applications.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <WifiIcon className="w-12 h-12 text-primary" />
                      <h3 className="text-xl font-semibold">Wireless Communication</h3>
                      <p className="text-muted-foreground text-center">
                        Exploring the latest advancements in wireless technologies and protocols.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <CpuIcon className="w-12 h-12 text-primary" />
                      <h3 className="text-xl font-semibold">Digital Signal Processing</h3>
                      <p className="text-muted-foreground text-center">
                        Analyzing and processing digital signals for various applications.
                      </p>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <CodeIcon className="w-12 h-12 text-primary" />
                      <h3 className="text-xl font-semibold">Programming</h3>
                      <p className="text-muted-foreground text-center">
                        Proficient in languages like C, C++, Python, and MATLAB.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="projects" className="bg-muted py-12 md:py-24 px-6 md:px-8">
          <div className="container mx-auto max-w-3xl space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight">Key Projects</h2>
              <p className="text-muted-foreground text-lg">Explore some of my key projects and achievements.</p>
            </div>
            <div className="grid gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Smart Home Automation System</CardTitle>
                  <CardDescription>
                    Developed a comprehensive home automation system using Arduino and IoT technologies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground">
                        Designed and implemented a smart home automation system that allows users to control various
                        home appliances and devices remotely using a mobile app or voice commands. The system integrates
                        sensors, actuators, and microcontrollers to provide seamless control and monitoring of the home
                        environment.
                      </p>
                      <div className="mt-4 space-y-2 text-muted-foreground">
                        <div>
                          <strong>Technologies Used:</strong> Arduino, ESP8266, Raspberry Pi, IoT Platforms (AWS IoT,
                          Google Cloud IoT), Android/iOS Development
                        </div>
                        <div>
                          <strong>Key Features:</strong> Remote control of lights, temperature, security systems, and
                          home appliances; voice-based commands; energy monitoring; and predictive maintenance.
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Smart Home Automation System"
                        className="rounded-lg object-cover"
                        style={{ aspectRatio: "400/300", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Wireless Sensor Network for Environmental Monitoring</CardTitle>
                  <CardDescription>
                    Developed a wireless sensor network to monitor environmental parameters in a smart city.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-muted-foreground">
                        Designed and implemented a wireless sensor network (WSN) to monitor various environmental
                        parameters such as air quality, temperature, humidity, and noise levels in a smart city. The
                        data collected by the sensors is transmitted wirelessly to a central monitoring system, which
                        analyzes the information and provides real-time insights to city authorities for better
                        decision-making and resource allocation.
                      </p>
                      <div className="mt-4 space-y-2 text-muted-foreground">
                        <div>
                          <strong>Technologies Used:</strong> Wireless Sensor Nodes (Arduino, ESP8266), LoRaWAN,
                          Cloud-based Data Analytics, Visualization Dashboards
                        </div>
                        <div>
                          <strong>Key Features:</strong> Real-time monitoring of environmental parameters, data
                          visualization, anomaly detection, and predictive analytics.
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <img
                        src="/placeholder.svg"
                        width={400}
                        height={300}
                        alt="Wireless Sensor Network for Environmental Monitoring"
                        className="rounded-lg object-cover"
                        style={{ aspectRatio: "400/300", objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-background py-12 md:py-24 px-6 md:px-8">
          <div className="container mx-auto max-w-3xl space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight">Contact Me</h2>
              <p className="text-muted-foreground text-lg">
                Get in touch for any inquiries or collaboration opportunities.
              </p>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input type="text" placeholder="Name" name="name" id="name" required />
                <Input type="email" placeholder="Email" name="email" id="email" required />
              </div>
              <Textarea placeholder="Message" name="message" id="message" rows={5} required />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </section>
      </main>
      <footer className="bg-primary text-primary-foreground py-4 px-6 md:px-8 flex items-center justify-between">
        <p className="text-sm">&copy; 2024 John Doe. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Privacy Policy
          </Link>
          <Link href="#" className="hover:underline underline-offset-4" prefetch={false}>
            Terms of Service
          </Link>
        </div>
      </footer>
    </div>
  )
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function CpuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="16" x="4" y="4" rx="2" />
      <rect width="6" height="6" x="9" y="9" rx="1" />
      <path d="M15 2v2" />
      <path d="M15 20v2" />
      <path d="M2 15h2" />
      <path d="M2 9h2" />
      <path d="M20 15h2" />
      <path d="M20 9h2" />
      <path d="M9 2v2" />
      <path d="M9 20v2" />
    </svg>
  )
}


function LaptopIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}


function WifiIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 20h.01" />
      <path d="M2 8.82a15 15 0 0 1 20 0" />
      <path d="M5 12.859a10 10 0 0 1 14 0" />
      <path d="M8.5 16.429a5 5 0 0 1 7 0" />
    </svg>
  )
}
