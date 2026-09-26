export type Course = {
  slug: string; name: string; short: string; tagline: string; accent: string;
  image: string; projectImage: string; description: string; lead: string;
  skills: string[]; outcome: string; forWhom: string; seoTitle: string; seoDescription: string;
};

export const courses: Course[] = [
  {
    slug: "ican-code", name: "I CAN CODE", short: "Code", tagline: "Build your first program.", accent: "purple",
    image: "/images/course-code.jpg", projectImage: "/images/project-code.jpg",
    description: "Learn how code works, practise Python fundamentals and build a small working program you can explain.",
    lead: "No coding experience? Start with the basics, practise one step at a time and finish with something you built yourself.",
    skills: ["Python basics", "Variables and simple logic", "Conditions and loops", "Functions", "Problem solving", "A mini Python project"],
    outcome: "A working Python program you can demonstrate and explain.",
    forWhom: "For complete beginners, teens curious about coding and adults exploring a new direction.",
    seoTitle: "Beginner Python Coding Course | I CAN CODE",
    seoDescription: "Start coding with I CAN CODE. A four-week beginner Python course with small groups, guided practice and a real project. Online or in person.",
  },
  {
    slug: "ican-edit", name: "I CAN EDIT", short: "Edit", tagline: "Tell your first story.", accent: "orange",
    image: "/images/course-edit.jpg", projectImage: "/images/project-edit.jpg",
    description: "Learn how to turn raw footage into a clear video using a practical editing workflow.",
    lead: "Turn clips into a story. Learn the editing process hands on and leave with a finished video you can share.",
    skills: ["Editing workflow", "Selecting and arranging shots", "Cuts and transitions", "Audio and music", "Titles and graphics", "Colour basics and export"],
    outcome: "A short, polished video edited and exported by you.",
    forWhom: "For complete beginners, young creatives and aspiring social media or video creators.",
    seoTitle: "Beginner Video Editing Course | I CAN EDIT",
    seoDescription: "Learn video editing in four weeks with I CAN EDIT. Build a short finished video through guided, practical sessions in a small group.",
  },
  {
    slug: "ican-data", name: "I CAN ANALYSE DATA", short: "Analyse Data", tagline: "Turn data into answers.", accent: "green",
    image: "/images/course-data.jpg", projectImage: "/images/project-data.jpg",
    description: "Learn to organise, clean, explore and visualise data using tools analysts use in real work.",
    lead: "Open a dataset and know what to do next. Clean it, find a useful answer and turn your results into a simple dashboard.",
    skills: ["Excel and data fundamentals", "Importing and understanding data", "Data cleaning", "Simple analysis", "Charts and visualisation", "A mini dashboard"],
    outcome: "A simple data analysis dashboard built from a real-style dataset.",
    forWhom: "For complete beginners, students exploring data careers and professionals who want more confidence with data.",
    seoTitle: "Beginner Data Analytics Course | I CAN ANALYSE DATA",
    seoDescription: "Explore data analytics with I CAN ANALYSE DATA. A practical four-week beginner course covering Excel, cleaning, charts and a mini dashboard.",
  },
];
export function getCourse(slug: string) { return courses.find(course => course.slug === slug); }
