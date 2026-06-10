import type { MetadataRoute } from "next"

// สร้างไฟล์ manifest สำหรับกำหนดค่า PWA และลักษณะแอปของเบราว์เซอร์
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PSU-TUYF Platform",
    short_name: "PSU-TUYF",
    description: "A modernized campus information platform for the Faculty of Science and Technology, Prince of Songkla University.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0a2540", // สี PSU Navy Blue ของโครงการ
    icons: [
      {
        src: "/images/logo/logo-psu-tuyf.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  }
}
