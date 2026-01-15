import Image from "next/image";

/**
 * FAQ Data
 * Update this array to change dropdown content.
 *
 * Add:
 *  - imageSrc: screenshot/visual for the project (stored in /public/projects/...)
 *  - imageAlt: accessible description
 */
const faqData = [
  {
    question: "Flowmersion Marketing Website",
    imageSrc: "/flowmersion.png",
    imageAlt: "Flowmersion marketing website preview",
    answer: (
      <>
        <p>
          A multi-page marketing website developed for Flowmersion AKA Baseline-Tech, an XR-focused snowsports startup building a clip-on
          analytics device named Snow-in for snowboarders.
        </p>
        <p>
          I collaborated with 4 developers and 5 designers to replace a single outdated webpage with a modern,
          responsive site featuring interactive components and CMS-driven content.
        </p>
        <p>
          The platform includes a secure waitlist and confirmation email when users enter their data. Data collection and management is backed by Supabase. This is fully integrated within the website providing a seamless experience and replaces a previous external Google form.
        </p>
          {/* GitHub link */}
    <p className="pt-2">
      <a
        href="https://github.com/Scout-NU/baseline-tech-website"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-white underline underline-offset-4 hover:text-white/80 transition"
      >
        View GitHub repository →
      </a>
    </p>
      </>
    ),
  },
  {
    question: "Sanguine Playable Game",
    imageSrc: "/sanguine.png",
    imageAlt: "Sanguine game GUI preview",
    answer: (
      <>
        <p>
          Sanguine is a two-player strategy card game inspired by Queen’s Blood, which was implemented using object-oriented design
          principles and the MVC (model, view, controller) architecture.
        </p>
        <p>
          The project was built from scratch in a pair-programmed setting with a Java Swing GUI in Intellij and automated tests (with mocks) to validate components.
        </p>
        <p>
          Additionally, two AI strategies enable automated gameplay. This project received an A in CS 3100 (Program
          Design &amp; Implementation).
        </p>
      </>
    ),
  },
  {
    question: "FUSE Filesystem Driver",
    imageSrc: "/fuse.png",
    imageAlt: "Filesystem driver diagram or terminal output",
    answer: (
      <>
        <p>
          This project features a custom FUSE filesystem driver supporting file creation, deletion, renaming, and directory management on a
          1MB disk image.
        </p>
        <p>
          In addition, the project supports nested directories, moving files between directories, and read/write operations for small files,
          extending the starter code into a functional filesystem.
        </p>
        <p>
          I further extended the project beyond course requirements by implementing filesystem support for large files, dynamic
          allocation, and growth handling. The project received full credit with extra credit in CS 3650 (Computer
          Systems).
        </p>
      </>
    ),
  },
  {
    question: "Ongoing — Supermentors Mentorship Platform",
    answer: (
      <>
        <p>
          Supermentors is an ongoing project where I serve as a senior developer through Scout, leading a team of three junior developers.
        </p>
        <p>
          The platform will connect college mentors with younger students through the Supermentors organization and is being built from scratch using React and
          Node.js, with plans for secure authentication and mentor profiles.
        </p>
      </>
    ),
  },
];

export default function Projects() {
  return (
    <div
      className="
        relative min-h-screen overflow-hidden
        pt-32 md:pt-40 pb-24 px-6
        bg-gradient-to-b from-[#0B0B0C] via-[#111827] to-[#0B0B0C]
      "
    >
      {/* Soft background glow */}
      <div
        className="absolute top-0 left-1/4 w-[620px] h-[620px] rounded-full opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(14,27,34,0.0) 70%)",
          filter: "blur(90px)",
        }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[620px] h-[620px] rounded-full opacity-40 pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.10) 0%, rgba(14,27,34,0.0) 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="relative z-10">
        {/* Panel 1 */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-center md:text-left mx-auto md:mx-0 max-w-xl">
              <h2 className="font-['Manrope'] text-[52px] md:text-[56px] font-semibold">
                <span className="bg-gradient-to-r from-white to-[#A6A6A6] bg-clip-text text-transparent">Projects</span>
              </h2>

              <p className="text-white/90 font-['Manrope'] text-[22px] md:text-[24px] font-medium leading-tight">
                Introduction
              </p>

              <div className="space-y-4 text-white/90 font-['Manrope'] text-[19px] md:text-[20px] leading-relaxed">
                <p>
                  The following projects represent my technical work completed across coursework and extracurriculars. Due to academic policies, source code for certain projects are not publicly visible.
                  READMEs are available on my GitHub @1vytang and full code can be shared upon request.
                </p>
                <p>
                  Each project was chosen to highlight different skills including systems programming, full-stack development, and
                  collaborative software design. The projects either have potential for real-world applications or are actively used by real
                  users.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/baseline-tech.png"
                alt="Projects panel graphic"
                width={720}
                height={560}
                priority
                className="block w-full h-auto max-h-[540px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Panel 2 */}
        <div className="max-w-7xl mx-auto mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex items-center justify-center order-2 md:order-1">
              <Image
                src="/sanguine-pic.png"
                alt="What I learned panel graphic"
                width={581}
                height={462}
                priority
                className="block w-full h-auto max-h-[340px] object-contain"
              />
            </div>

            <div className="space-y-6 order-1 md:order-2 text-center md:text-left mx-auto md:mx-0 max-w-xl">
              <h2 className="font-['Manrope'] text-[52px] md:text-[56px] font-semibold">
                <span className="bg-gradient-to-r from-white to-[#A6A6A6] bg-clip-text text-transparent">
                  What I Learned
                </span>
              </h2>

              <div className="space-y-4 text-white/90 font-['Manrope'] text-[19px] md:text-[20px] leading-relaxed">
                <p>
                  Beyond technical skills, these projects strengthened my ability to collaborate across team sizes,
                  work within tight deadlines, and grow as a programmer.
                </p>
                <p>
                  Together, they helped me understand realistic development workflows and improved my
                  problem-solving approach in both independent and team-based environments.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Panel 3 - FAQ */}
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="font-['Manrope'] text-[52px] md:text-[56px] font-semibold">
                <span className="bg-gradient-to-r from-white to-[#A6A6A6] bg-clip-text text-transparent">
                  Project Descriptions
                </span>
              </h2>
              <p className="text-white/90 font-['Manrope'] text-[22px] md:text-[24px] font-medium leading-tight">
                Learn more about the details of past and ongoing projects.
              </p>
            </div>

            <div className="space-y-4 mt-10">
              {faqData.map((faq, index) => (
                <details
                  key={index}
                  className="
                    group rounded-xl border border-white/10
                    bg-white/5 backdrop-blur-sm
                    px-5 md:px-6 py-4
                  "
                >
                  <summary className="text-[18px] md:text-[20px] font-semibold text-white cursor-pointer flex justify-between items-center">
                    <span>{faq.question}</span>
                    <svg
                      width="22"
                      height="44"
                      viewBox="0 0 25 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-transform duration-300 group-open:rotate-90 opacity-90"
                    >
                      <path
                        d="M5.07147 13.6089L7.26587 11.4166L19.2182 23.3648C19.4109 23.5562 19.5638 23.7839 19.6681 24.0347C19.7725 24.2854 19.8262 24.5544 19.8262 24.826C19.8262 25.0976 19.7725 25.3665 19.6681 25.6173C19.5638 25.8681 19.4109 26.0957 19.2182 26.2872L7.26587 38.2416L5.07354 36.0492L16.2917 24.8291L5.07147 13.6089Z"
                        fill="white"
                      />
                    </svg>
                  </summary>

                  {/* Content */}
                  <div className="mt-6 space-y-5 text-white/80 leading-relaxed text-[16px] md:text-[17px]">
                    {faq.imageSrc ? (
                      <Image
                        src={faq.imageSrc}
                        alt={faq.imageAlt}
                        width={1000}
                        height={560}
                        className="w-full rounded-lg border border-white/10 object-cover"
                      />
                    ) : null}

                    {/* Paragraph spacing for answer blocks */}
                    <div className="space-y-4">{faq.answer}</div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
