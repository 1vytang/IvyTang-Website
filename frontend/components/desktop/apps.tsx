import Image from "next/image";
import type { ReactNode } from "react";
import { Icon, type IconName } from "./icons";

/**
 * Every window on the desktop is defined here.
 * To add a project: add an entry to `apps`, then list its id in a folder's
 * `items` (or in `desktopIcons` to put it straight on the desktop).
 */

export type AppId =
  | "welcome"
  | "about"
  | "projects"
  | "flowmersion"
  | "sanguine"
  | "fuse"
  | "supermentors"
  | "moredip"
  | "research"
  | "analyst"
  | "itintern"
  | "extracurriculars"
  | "scout"
  | "wicys"
  | "travel"
  | "links"
  | "trash";

export type OpenFn = (id: AppId) => void;

export type AppDef = {
  /** Text in the window's title bar and taskbar tab. */
  title: string;
  /** Text under the icon on the desktop or in a folder. */
  label: string;
  icon: IconName;
  /** Preferred window width in px (shrinks to fit small screens). */
  width: number;
  /** On phones, show as a card at the bottom instead of a full-screen sheet. */
  compact?: boolean;
  render: (open: OpenFn) => ReactNode;
};

/* ---------- small building blocks ---------- */

function Pic({ src, alt, w, h, caption }: { src: string; alt: string; w: number; h: number; caption?: string }) {
  return (
    <figure className="pic">
      <Image src={src} alt={alt} width={w} height={h} sizes="(max-width: 640px) 100vw, 640px" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}

function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

function Ext({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a className="link" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function Folder({ items, open, note }: { items: AppId[]; open: OpenFn; note?: string }) {
  return (
    <>
      <div className="folder-grid">
        {items.map((id) => (
          <button key={id} type="button" className="file" onClick={() => open(id)}>
            <Icon name={apps[id].icon} size={52} />
            {/* a zero-width space before "." and "_" lets long file names wrap at those points */}
            <span>{apps[id].label.replace(/([._])/g, "\u200B$1")}</span>
          </button>
        ))}
      </div>
      <p className="folder-status">
        {items.length} items{note ? ` · ${note}` : ""}
      </p>
    </>
  );
}

/* ---------- the apps ---------- */

export const apps: Record<AppId, AppDef> = {
  welcome: {
    title: "welcome.txt",
    label: "My Computer",
    icon: "computer",
    width: 460,
    compact: true,
    render: (open) => (
      <div className="welcome">
        <h1>Hi, I&apos;m Ivy</h1>
        <p>
          I&apos;m a cybersecurity student at Northeastern University, and I&apos;m interested in quality assurance,
          security vulnerabilities, and systems.
        </p>
        <p>
          This is my desktop. Click any icon to open a project. You can drag windows around, minimize them, or
          close them.
        </p>
        <div className="btn-row">
          <button type="button" className="btn" onClick={() => open("about")}>about_me.txt</button>
          <button type="button" className="btn" onClick={() => open("projects")}>Projects</button>
          <button type="button" className="btn" onClick={() => open("research")}>Research</button>
        </div>
      </div>
    ),
  },

  about: {
    title: "about_me.txt",
    label: "about_me.txt",
    icon: "notes",
    width: 640,
    render: () => (
      <div className="doc">
        <div className="about-head">
          <Image className="about-photo" src="/ivy.png" alt="Ivy smiling." width={1122} height={1410} sizes="180px" />
          <div>
            <h2>Ivy Tang</h2>
            <p>
              I&apos;m an aspiring cybersecurity analyst at Northeastern University, interested in quality assurance,
              security vulnerabilities, and systems.
            </p>
          </div>
        </div>

        <h3>Relevant coursework</h3>
        <p>
          Introduction to Cybersecurity, Computer Systems, Object-Oriented Design, Systems Security, Network
          Fundamentals
        </p>

        <h3>Security tools</h3>
        <Tags
          items={[
            "Microsoft Defender",
            "Microsoft Sentinel",
            "KQL",
            "Entra ID",
            "Azure PIM",
            "ServiceNow",
            "BlueVoyant",
            "Tenable",
            "Wireshark",
            "Burp Suite",
            "Nmap",
            "Action1",
          ]}
        />

        <h3>Languages</h3>
        <Tags items={["Python", "PowerShell", "Bash", "SQL", "C/C++", "Java", "JavaScript", "TypeScript"]} />

        <h3>Systems &amp; tools</h3>
        <Tags
          items={["Linux", "Windows", "macOS", "Git", "React", "Next.js", "Microsoft 365", "SharePoint", "Google Workspace"]}
        />

        <h3>Academics</h3>
        <ul className="list">
          <li>Northeastern University: Dean&apos;s List, Madrid study abroad, VICEROY Scholar</li>
          <li>Lexington High School: Honor Roll</li>
        </ul>

        <h3>You can also find me…</h3>
        <ul className="list stars">
          <li>Running a 5-star pet-sitting business with 60+ previous customers</li>
          <li>Competing in silly challenges, like winning a local spicy-eating competition</li>
          <li>Keeping a Pinterest account of my food and cultural experiences</li>
        </ul>
      </div>
    ),
  },

  /* ----- Projects ----- */

  projects: {
    title: "Projects",
    label: "Projects",
    icon: "folder",
    width: 520,
    render: (open) => (
      <>
        <p className="folder-intro">
          Technical work from my classes and extracurriculars. Some source code is private because of academic
          policy. READMEs are on my GitHub (@1vytang), and I can share the full code on request.
        </p>
        <Folder items={["moredip", "supermentors", "flowmersion", "sanguine", "fuse"]} open={open} />
      </>
    ),
  },

  flowmersion: {
    title: "flowmersion_site",
    label: "flowmersion_site",
    icon: "globe",
    width: 640,
    render: () => (
      <div className="doc">
        <h2>Flowmersion Product Website</h2>
        <Tags items={["Client project", "Team of 10", "Supabase", "Responsive"]} />
        <p>
          A multi-page marketing website for Flowmersion (also called Baseline Tech), an XR-focused snowsports
          startup building Snow-in, a clip-on analytics device for snowboarders.
        </p>
        <p>
          I worked with 4 developers, 5 designers, and the client to replace one outdated webpage with a modern,
          responsive multi-page site that has interactive components and CMS-driven content.
        </p>
        <p>
          The site has a secure waitlist that sends a confirmation email when people sign up, with the data stored
          and managed in Supabase. It&apos;s built into the site itself and replaced an external Google Form.
        </p>
        <p>
          <Ext href="https://github.com/Scout-NU/baseline-tech-website">View the GitHub repository ↗</Ext>
        </p>
      </div>
    ),
  },

  sanguine: {
    title: "sanguine.jar",
    label: "sanguine.jar",
    icon: "cards",
    width: 680,
    render: () => (
      <div className="doc">
        <h2>Sanguine: a playable card game</h2>
        <Tags items={["Java", "Swing", "MVC", "Unit tests + mocks"]} />
        <Pic src="/sanguine.png" alt="Sanguine game board GUI" w={2264} h={1382} />
        <p>
          Sanguine is a two-player strategy card game inspired by Queen&apos;s Blood. We built it with object-oriented
          design principles and an MVC (model, view, controller) architecture.
        </p>
        <p>
          My partner and I pair-programmed it from scratch, with a Java Swing GUI and hundreds of tests (using mocks)
          that check each component.
        </p>
        <p>
          It also has two AI strategies, so it can play itself automatically. Two people can play it together, and it
          offers a simple, good-looking game experience.
        </p>
      </div>
    ),
  },

  fuse: {
    title: "fuse_driver.c",
    label: "fuse_driver.c",
    icon: "code",
    width: 680,
    render: () => (
      <div className="doc">
        <h2>FUSE Filesystem Driver</h2>
        <Tags items={["C", "FUSE", "Linux", "Systems"]} />
        <Pic src="/fuse.png" alt="Autograder results for the filesystem project" w={2752} h={1412} caption="Autograder results" />
        <p>
          A custom FUSE filesystem driver on a 1MB disk image. It can create, delete, and rename files, and manage
          directories.
        </p>
        <p>
          It supports nested directories, moving files between directories, and reading and writing small files. I
          started from the course&apos;s starter code and turned it into a working filesystem.
        </p>
        <p>
          Going beyond the course requirements, I added support for large files, dynamic allocation, and growing
          files.
        </p>
      </div>
    ),
  },

  moredip: {
    title: "moredip_site",
    label: "moredip_site",
    icon: "dip",
    width: 620,
    render: () => (
      <div className="doc">
        <h2>MoreDip Website</h2>
        <p className="meta">Scout client project · In progress</p>
        <Tags items={["React", "Next.js", "TypeScript", "Tailwind CSS", "Shopify", "E-commerce"]} />
        <p>
          MoreDip is a high-protein dip brand, and my Scout team is building an interactive website for it right now.
        </p>
        <p>
          The site is integrated with Shopify, so customers can browse the dips, check out, and place orders right on
          the site.
        </p>
        <p>
          <Ext href="https://github.com/Scout-NU/moredip">View the GitHub repository ↗</Ext>
        </p>
      </div>
    ),
  },

  supermentors: {
    title: "superpowermentors_site",
    label: "superpowermentors_site",
    icon: "bolt",
    width: 620,
    render: () => (
      <div className="doc">
        <h2>Superpower Mentors Website</h2>
        <Tags items={["React", "Node.js", "Senior Developer", "Team lead"]} />
        <p>
          Superpower Mentors (SPM) was my first project as a Senior Developer at Scout, where I led a team of four
          junior developers.
        </p>
        <p>
          SPM connects experienced mentors with younger students who face learning difficulties. We built the
          multi-page site from scratch in React and Node.js. Its features include a pop-up quiz that lets the
          organization see statistics on user responses, an embedded Typeform for student applications, and
          interactive elements with transitions.
        </p>
        <p>
          <Ext href="https://github.com/Scout-NU/superpower-mentors">View the GitHub repository ↗</Ext>
        </p>
      </div>
    ),
  },

  /* ----- Research ----- */

  analyst: {
    title: "security_analyst_coop.log",
    label: "Security Analyst Co-op",
    icon: "shield",
    width: 640,
    render: () => (
      <div className="doc">
        <h2>Security Analyst Co-op</h2>
        <p className="meta">Northeastern University · Sep 2026 – Present</p>
        <Tags items={["Microsoft Defender", "Sentinel / KQL", "ServiceNow", "BlueVoyant", "Entra ID", "Azure PIM", "Tenable"]} />
        <h3>Incident triage</h3>
        <p>
          I triage 50+ security incidents and phishing reports every week using ServiceNow, BlueVoyant, and Microsoft
          Defender. For lower-severity threats I handle remediation myself: analyzing sign-in activity, resetting
          passwords, and blocking suspicious users.
        </p>
        <h3>Access reviews</h3>
        <p>
          I run privileged access reviews in Microsoft Entra ID and Azure PIM, checking role assignments against what
          people actually need so the university stays close to least privilege.
        </p>
        <h3>Vulnerability and event analysis</h3>
        <p>
          I analyze vulnerability and security-event data in Tenable and Microsoft Sentinel (KQL), and help build
          automation workflows for IP intelligence and asset discovery.
        </p>
      </div>
    ),
  },

  itintern: {
    title: "it_internship.doc",
    label: "IT Internship",
    icon: "badge",
    width: 640,
    render: () => (
      <div className="doc">
        <h2>IT Intern</h2>
        <p className="meta">Coca-Cola Beverages Northeast · May – Aug 2026</p>
        <Tags items={["Action1", "Endpoint security", "Device provisioning", "SharePoint"]} />
        <h3>Vulnerabilities and endpoints</h3>
        <p>
          I monitored company-wide vulnerabilities in Action1 and supported endpoint security through computer imaging,
          iPad provisioning, and device troubleshooting.
        </p>
        <h3>Mobile devices</h3>
        <p>
          I managed the mobile device lifecycle through Verizon, from provisioning and access support to suspending
          service.
        </p>
        <h3>SharePoint migration</h3>
        <p>
          I supported the company-wide move from OneDrive to SharePoint by writing documentation and building
          SharePoint sites for 3+ departments.
        </p>
      </div>
    ),
  },

  research: {
    title: "airtag_research.pdf",
    label: "AirTag Research",
    icon: "chart",
    width: 720,
    render: () => (
      <div className="doc">
        <h2>Detecting AirTag-like trackers</h2>
        <p className="meta">Research Intern · Northeastern Cybersecurity and Privacy Institute · Sep 2025 – Apr 2026</p>
        <Tags items={["Network privacy", "BLE", "ESP32", "Data analysis"]} />
        <p>
          My research is in network privacy and security. We&apos;re building a device that notices when someone is
          being followed by an AirTag-like tracker and alerts them, no matter what phone or ecosystem they use.
        </p>
        <p>
          We built and tested a Bluetooth Low Energy (BLE) traffic capture module on an ESP32. With it, we collected
          advertising traffic from several tracker brands, including AirTag, SmartTag, MiLi, HelloTag, Chipolo, and
          AirPods.
        </p>
        <p>
          We captured and parsed traffic from tags in connected, nearby, and lost states. From that traffic we pulled
          out key metadata such as carrier frequency offset (CFO), MAC address, and manufacturer-specific payloads.
        </p>
        <Pic src="/graph2.png" alt="Violin plot of carrier frequency offset across observed tags" w={1864} h={920} caption="CFO violin plot of observed tags" />
        <p>
          We ran statistical and structural analysis on thousands of BLE packets. It showed stable CFO-based
          fingerprints that tell persistent, nearby adversary tags apart from background devices in the lost state.
        </p>
        <p>
          We store the fingerprints we see and track how long they stick around. That lets us spot long-term trackers
          even though they change their identifiers quickly.
        </p>
      </div>
    ),
  },

  /* ----- Extracurriculars ----- */

  extracurriculars: {
    title: "Extracurriculars",
    label: "Extracurriculars",
    icon: "folder",
    width: 520,
    render: (open) => (
      <>
        <p className="folder-intro">Leadership and passions outside the classroom.</p>
        <Folder items={["scout", "wicys"]} open={open} />
      </>
    ),
  },

  scout: {
    title: "scout.doc",
    label: "Scout",
    icon: "notes",
    width: 660,
    render: (open) => (
      <div className="doc">
        <h2>Scout</h2>
        <Tags items={["Junior → Senior Developer", "Client work"]} />
        <div className="split">
          <Pic src="/scout_spotlight.png" alt="Scout newsletter spotlight featuring Ivy" w={636} h={932} />
          <div>
            <p>
              I started as a junior developer making an interactive marketing website for the snowsports company
              Flowmersion (also called Baseline Tech). I helped build a polished, client-facing site that showed off
              their snowboard analytics product and went through several rounds of changes based on client feedback.
            </p>
          </div>
        </div>
        <p>
          These past two semesters I have been a Senior Developer, leading the team of programmers to build new
          websites for Superpower Mentors and MoreDip. I manage team members, coordinate technical deliverables, and
          make sure we ship a high-quality product on time.
        </p>
        <p>
          Right now my team is building an interactive website for MoreDip, a high-protein dip brand, with Shopify
          built in so customers can check out and place orders.
        </p>
        <div className="btn-row">
          <button type="button" className="btn" onClick={() => open("flowmersion")}>open flowmersion_site</button>
          <button type="button" className="btn" onClick={() => open("supermentors")}>open superpowermentors_site</button>
          <button type="button" className="btn" onClick={() => open("moredip")}>open moredip_site</button>
        </div>
      </div>
    ),
  },

  wicys: {
    title: "wicys.png",
    label: "WiCyS",
    icon: "photo",
    width: 660,
    render: () => (
      <div className="doc">
        <h2>Women in CyberSecurity (WiCyS)</h2>
        <Tags items={["Vice President", "Technical workshops", "200+ student newsletter", "Events"]} />
        <Pic src="/wicys_vp.png" alt="NU WiCyS board feature: Ivy Tang, Vice-President, Cybersecurity major from Lexington, MA" w={1092} h={888} />
        <p>I joined WiCyS in Spring 2025, was elected Secretary in Fall 2025, and am now Vice President.</p>
        <p>
          As Vice President, I coordinate and present technical cybersecurity workshops, and I work with the executive
          board to plan community events and networking opportunities. These include our annual CTF with CTF Club and NU
          Security Club as well as talks from people across the cybersecurity industry. During the 2025–2026 school
          year, I helped recruit 30+ new members through outreach and club fairs.
        </p>
        <p>
          <Ext href="https://www.instagram.com/nuwicys/">See our recent events on Instagram ↗</Ext>
        </p>
      </div>
    ),
  },

  /* ----- Extras ----- */

  travel: {
    title: "photography.mp4",
    label: "photography.mp4",
    icon: "torii",
    width: 720,
    render: () => (
      <div className="doc">
        <video className="player" src="/asia_photos.mp4" autoPlay muted loop playsInline controls preload="metadata" />
        <p className="caption">Fun fact: I love photography (see above), and I bring my digital camera around with me a lot!</p>
      </div>
    ),
  },

  links: {
    title: "Social",
    label: "Social",
    icon: "globe",
    width: 420,
    render: () => (
      <ul className="links">
        <li>
          <Icon name="globe" size={32} />
          <Ext href="https://www.linkedin.com/in/ivy-tang-northeastern/">LinkedIn</Ext>
        </li>
        <li>
          <Icon name="code" size={32} />
          <Ext href="https://github.com/1vytang">GitHub · @1vytang</Ext>
        </li>
        <li>
          <Icon name="mail" size={32} />
          <a className="link" href="mailto:tang.ivy@northeastern.edu">tang.ivy@northeastern.edu</a>
        </li>
      </ul>
    ),
  },

  trash: {
    title: "Trash",
    label: "Trash",
    icon: "trash",
    width: 400,
    render: () => (
      <ul className="trash-list">
        <li>
          <Icon name="code" size={36} />
          <span>
            <strong>bugs.log</strong>
            <small>All squashed (mostly)</small>
          </span>
        </li>
      </ul>
    ),
  },
};

/** Icons shown on the desktop, top-to-bottom then left-to-right. */
export const desktopIcons: AppId[] = [
  "welcome",
  "about",
  "analyst",
  "itintern",
  "research",
  "projects",
  "extracurriculars",
  "travel",
  "links",
  "trash",
];

export function isAppId(value: string | null): value is AppId {
  return value !== null && Object.prototype.hasOwnProperty.call(apps, value);
}
