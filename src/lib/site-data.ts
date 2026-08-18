export const site = {
  name: "Honourableak Venture",
  short: "HAKV",
  tagline: "Premium Aluminum Fabrication & Architectural Glass",
  ceo: "Sanusi Hakeem Segun",
  phones: ["08141263424", "08144064827"],
  emails: ["SanusiHakeem48@gmail.com", "honourableak48@gmail.com"],
  address: {
    line1: "No. 60 Oladun Street",
    line2: "Powerline Bus Stop, Isheri",
    country: "Nigeria",
  },
  whatsapp: "2348141263424",
  socials: {
    facebook: "#",
    instagram: "#",
    linkedin: "#",
    tiktok: "#",
  },
};

// Google Drive media (folder: 1FyP-ERhTKqO78ZMXwHH1hM2y2DGULAED)
export const driveVideos: { id: string; name: string }[] = [
  { id: "1lnwlmaIDTupy5m3NqLp9uAroYUwEZzq0", name: "Site walkthrough 01" },
  { id: "1fBpE3-zEDyr2VexDxU5IUMDaI3QrC3K9", name: "Curtain wall install" },
  { id: "1BNtG3XiCq7TEvIkp7tPnqxiMqS56mTUN", name: "Aluminum fabrication" },
  { id: "1-5pCVN8yt7rvmrIUX4yM_72MDxJP5QOl", name: "Frameless glass fit-out" },
  { id: "107YUrCw7z1RXK_1_onRY1s0QJSs2SXCJ", name: "Office partitioning" },
  { id: "1mqR0wac6swY8Rn_wOClMCKymDwjWwtiR", name: "Window commissioning" },
  { id: "1r52EkXyTT3Db8yCoFAdMScaUbCmsWr-v", name: "Facade detail" },
  { id: "1idm_5s6BAcz_SazV9zfAlqHxP-FZYfRr", name: "Project handover" },
  { id: "1Rga4GJvC81dX6Gf5jneiN-zQZRwgssWF", name: "Commercial site" },
  { id: "1O1bYr5EYfN09VDvwyOt8yWHoDr_mkEJt", name: "Residential install" },
];

export const driveThumb = (id: string, size = 1200) =>
  `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;

export const drivePreview = (id: string) =>
  `https://drive.google.com/file/d/${id}/preview`;

// Real client media (frames captured from the connected Google Drive folder).
const id = (i: number) => driveVideos[i].id;

export const driveMedia = {
  hero: driveThumb(id(6), 1600),
  project1: driveThumb(id(1), 1600),
  project2: driveThumb(id(5), 1600),
  workshop: driveThumb(id(4), 1200),
  detail: driveThumb(id(3), 1000),
  bathroom: driveThumb(id(2), 1200),
  stairs: driveThumb(id(7), 1200),
};
