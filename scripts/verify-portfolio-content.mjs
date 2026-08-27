import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const read = (path) => readFileSync(join(root, path), "utf8");

const main = read("src/main.tsx");
const publications = read("src/components/TestimonialCarousel.tsx");
const footer = read("src/components/Footer.tsx");
const styles = read("src/styles.css");
const resfesPath = join(root, "src/components/ResfesSection.tsx");
const lightboxPath = join(root, "src/components/ImageLightbox.tsx");

const failures = [];
const expect = (condition, message) => {
  if (!condition) failures.push(message);
};

for (const index of [1, 2, 3, 4]) {
  const image = `resfes${index}.jpg`;
  expect(main.includes(`/img/${image}`), `${image} is missing from the marquee`);
  expect(existsSync(join(root, "img", image)), `${image} is missing from img/`);
  expect(existsSync(join(root, "public/img", image)), `${image} is missing from public/img/`);
}

expect(existsSync(resfesPath), "ResfesSection.tsx is missing");
if (existsSync(resfesPath)) {
  const resfes = read("src/components/ResfesSection.tsx");
  for (const index of [1, 2, 3, 4]) {
    expect(resfes.includes(`/img/resfes${index}.jpg`), `resfes${index}.jpg is missing from ResfesSection`);
  }
  expect(resfes.includes("Second Runner-up"), "RESFES award title is missing");
  expect(resfes.includes("Information Technology Sub-committee"), "RESFES category is missing");
  expect(resfes.includes("https://www.facebook.com/share/v/1Y1YuTCAAf/"), "Facebook video link is missing");
  expect(resfes.includes("rotateResfesTwo"), "resfes2 orientation treatment is missing");
}

expect(main.includes("<ResfesSection />"), "ResfesSection is not mounted in the page");
expect(main.indexOf("<ProjectsSection />") < main.indexOf("<ResfesSection />"), "ResfesSection must follow ProjectsSection");
expect(main.indexOf("<ResfesSection />") < main.indexOf("<PartnerSection />"), "ResfesSection must precede Contact");

const expectedPapers = [
  "SingLoRA-CLIP: Highly Efficient VLM Adaptation with a Single Parameter Matrix",
  "Enhancing AGWO-YOLO for Surveillance: Real-Time Human Detection with Adaptive Grey Wolf Optimizer",
  "Grounding DINO and distillation-enhanced model for advanced traffic sign detection and classification in autonomous vehicles",
  "Enhancing semantic scene segmentation for indoor autonomous systems using advanced attention-supported improved UNet",
  "Semantic scene segmentation for indoor autonomous vision systems: leveraging an enhanced and efficient U-NET architecture",
];

for (const title of expectedPapers) {
  expect(publications.includes(title), `Publication is missing: ${title}`);
}

for (const badge of ["CORE C", "CORE B", "Q1", "Q2"]) {
  expect(publications.includes(`label: \"${badge}\"`), `Publication badge is missing: ${badge}`);
}

expect((publications.match(/label: \"Q1\"/g) ?? []).length === 2, "Expected exactly two Q1 badges");
expect(publications.includes("5 peer-reviewed publications"), "Publication count is not updated to five");
expect(!read("src/main.tsx").includes("three peer-reviewed"), "Hero still describes three papers");
expect(![main, publications, footer].join("\n").includes("3 peer-reviewed papers"), "Old publication count is still present");

expect(footer.includes("mailto:namnguyenfnw@gmail.com"), "Footer email link is missing");
expect(footer.includes("namnguyenfnw@gmail.com"), "Footer email text is missing");
expect(footer.includes("tel:+84325235826"), "Footer phone link is missing");
expect(footer.includes("0325235826"), "Footer phone text is missing");
expect(styles.includes("@media (prefers-reduced-motion: reduce)"), "Reduced-motion media query is missing");
for (const className of [".animate-marquee", ".animate-fade-in-up", ".animate-velvet-rise", ".velvet-orb"]) {
  expect(styles.includes(className), `Reduced-motion coverage is missing for ${className}`);
}

expect(main.includes("marquee-viewport"), "Marquee viewport interaction hook is missing");
expect(main.includes("data-paused"), "Marquee lightbox pause state is missing");
expect(main.includes("setSelectedImage"), "Marquee image selection is missing");
expect(main.includes("View full-size image"), "Marquee image controls need accessible labels");
expect(
  styles.includes(".marquee-viewport:hover .animate-marquee") &&
    styles.includes("animation-play-state: paused"),
  "Marquee does not pause on hover",
);
expect(existsSync(lightboxPath), "ImageLightbox.tsx is missing");
if (existsSync(lightboxPath)) {
  const lightbox = read("src/components/ImageLightbox.tsx");
  expect(lightbox.includes("<dialog"), "Image lightbox must use a native dialog");
  expect(lightbox.includes("showModal()"), "Image lightbox does not open modally");
  expect(lightbox.includes("Close image preview"), "Image lightbox close button is not accessible");
  expect(lightbox.includes("object-contain"), "Image lightbox must preserve the full image");
}

if (failures.length > 0) {
  console.error(`Portfolio verification failed (${failures.length}):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Portfolio content verification passed.");
