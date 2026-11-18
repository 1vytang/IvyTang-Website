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
  | "research"
  | "extracurriculars"
  | "scout"
  | "wicys"
  | "robotics"
  | "chirp"
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
            <span>{apps[id].label}</span>
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

        <h3>Languages &amp; tools</h3>
        <Tags
          items={["Java", "C/C++", "Python", "JavaScript", "React", "SQL", "HTML/CSS", "Linux", "Git", "VS Code"]}
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
        <Folder items={["flowmersion", "sanguine", "fuse", "supermentors"]} open={open} />
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

  supermentors: {
    title: "supermentors_site",
    label: "supermentors_site",
    icon: "globe",
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
      </div>
    ),
  },

  /* ----- Research ----- */

  research: {
    title: "airtag_research.pdf",
    label: "AirTag Research",
    icon: "chart",
    width: 720,
    render: () => (
      <div className="doc">
        <h2>Detecting AirTag-like trackers</h2>
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
        <div className="callout">
          <Image src="/research_team.png" alt="The research team collecting data around Boston" width={334} height={418} sizes="120px" />
          <div>
            <strong>The paper on this research is under peer review.</strong>
            <span>Collecting data around Boston with the team!</span>
          </div>
        </div>
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
        <Folder items={["scout", "wicys", "robotics", "chirp"]} open={open} />
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
              I started as a junior developer on an interactive marketing website for the snowsports company
              Flowmersion (also called Baseline Tech). With designers and other developers, I helped build a polished,
              client-facing site that showed off their snowboard analytics product and went through several rounds of
              changes based on client feedback.
            </p>
            <p>
              That project made me better at working on a diverse team, explaining technical decisions clearly, and
              turning client requirements into code that works and is easy to maintain. The finished site supported
              Flowmersion&apos;s product marketing and public launch.
            </p>
          </div>
        </div>
        <p>
          This past semester I was a Senior Developer, leading the team of programmers that built a new client
          project for Superpower Mentors. I managed team members, coordinated technical deliverables, and made sure
          we shipped a high-quality product on time.
        </p>
        <div className="btn-row">
          <button type="button" className="btn" onClick={() => open("flowmersion")}>open flowmersion_site</button>
          <button type="button" className="btn" onClick={() => open("supermentors")}>open supermentors_site</button>
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
        <Tags items={["Secretary", "200+ member newsletter", "Events"]} />
        <Pic src="/wicys_post.png" alt="WiCyS event post" w={1332} h={1350} />
        <p>
          I joined WiCyS in Spring 2025 and was elected Secretary in Fall 2025. It matters to me because I care about
          giving gender minorities more access and representation in STEM and cybersecurity. That started in
          childhood, with activities like Girl Scouts and captaining an all-girls FIRST Robotics team, which are what
          let me pursue cybersecurity in the first place. They showed me how much mentorship and opportunity help
          talented students thrive.
        </p>
        <p>
          As Secretary, I work with the executive board to plan technical workshops, community events, and networking
          opportunities. These include our annual CTF with NU Security Club and talks from people across the
          cybersecurity industry. I also write a weekly newsletter for 200+ members about upcoming events and
          national WiCyS opportunities. During the 2025–2026 school year, I helped recruit 30+ new members through
          outreach and club fairs.
        </p>
        <p>
          <Ext href="https://www.instagram.com/nuwicys/">See our recent events on Instagram ↗</Ext>
        </p>
      </div>
    ),
  },

  robotics: {
    title: "parity_bits.exe",
    label: "Parity Bits",
    icon: "robot",
    width: 660,
    render: () => (
      <div className="doc">
        <h2>FIRST Robotics: The Parity Bits</h2>
        <Tags items={["Captain", "High school", "MA State Championships"]} />
        <div className="pics">
          <Pic src="/pb_gbh.png" alt="The Parity Bits robotics team featured by GBH" w={1296} h={958} />
          <Pic src="/pb_group.png" alt="The Parity Bits team group photo" w={1266} h={982} />
        </div>
        <p>
          I was Captain of The Parity Bits, an all-girls FIRST Robotics team. We won awards at the Massachusetts State
          Championships in the 2023 and 2024 seasons, and Boston radio station GBH featured our team.
        </p>
        <p>
          <Ext href="https://www.wgbh.org/news/national/2023-04-04/lexington-robotics-team-engineers-space-for-girls-to-thrive-in-stem">
            Read the GBH story ↗
          </Ext>
        </p>
      </div>
    ),
  },

  chirp: {
    title: "chirp_fundraiser",
    label: "CHIRP Fundraiser",
    icon: "photo",
    width: 660,
    render: () => (
      <div className="doc">
        <h2>Library Fundraising Webpage</h2>
        <Tags items={["Youth STEAM Initiative", "Web", "Community"]} />
        <div className="pics">
          <Pic src="/steam_team.png" alt="Youth STEAM Initiative team" w={2210} h={1224} />
          <Pic src="/steam_team2.png" alt="Youth STEAM Initiative team at an event" w={1032} h={792} />
        </div>
        <p>
          I built and launched a fundraising webpage for the renovation of the local library in Lexington,
          Massachusetts.
        </p>
        <p>
          <Ext href="https://youthsteaminitiative.org/chirp.html">More details here ↗</Ext>
        </p>
      </div>
    ),
  },

  /* ----- Extras ----- */

  travel: {
    title: "travels.mp4",
    label: "travels.mp4",
    icon: "torii",
    width: 720,
    render: () => (
      <div className="doc">
        <video className="player" src="/asia_photos.mp4" autoPlay muted loop playsInline controls preload="metadata" />
        <p className="caption">Moments from my travels in Asia. I took all the photos myself.</p>
      </div>
    ),
  },

  links: {
    title: "Internet",
    label: "Internet",
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
        <li>
          <Icon name="photo" size={32} />
          <Ext href="https://www.instagram.com/nuwicys/">NU WiCyS Instagram</Ext>
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
          <Icon name="folder" size={36} />
          <span>
            <strong>old_portfolio/</strong>
            <small>Replaced by this desktop</small>
          </span>
        </li>
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
  "projects",
  "research",
  "extracurriculars",
  "travel",
  "links",
  "trash",
];

export function isAppId(value: string | null): value is AppId {
  return value !== null && Object.prototype.hasOwnProperty.call(apps, value);
}
