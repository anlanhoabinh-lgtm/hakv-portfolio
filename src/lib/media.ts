// Stills captured from the client's own Google Drive project footage,
// self-hosted so they always render (Drive blocks hotlinked thumbnails).
import f0 from "@/assets/media/hakv-0.jpg.asset.json";
import f1 from "@/assets/media/hakv-1.jpg.asset.json";
import f2 from "@/assets/media/hakv-2.jpg.asset.json";
import f3 from "@/assets/media/hakv-3.jpg.asset.json";
import f4 from "@/assets/media/hakv-4.jpg.asset.json";
import f5 from "@/assets/media/hakv-5.jpg.asset.json";
import f6 from "@/assets/media/hakv-6.jpg.asset.json";
import f7 from "@/assets/media/hakv-7.jpg.asset.json";

export const frames: string[] = [f0, f1, f2, f3, f4, f5, f6, f7].map((f) => f.url);

export const media = {
  hero: frames[6],
  project1: frames[1],
  project2: frames[5],
  workshop: frames[4],
  detail: frames[3],
  bathroom: frames[2],
  stairs: frames[7],
};
