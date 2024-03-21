// pages/api/meta.ts
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // メタデータのオブジェクト
  const metaData = {
    title: "Home",
    description:
      "This is an about page of our example Next.js application with meta tags.",
    ogImage: "https://fc-dev-call.replit.app/image",
    frame: {
      version: "vNext",
      image: "https://fc-dev-call.replit.app/image",
      buttons: [
        {
          label: "Spec",
          action: "link",
          target: "https://github.com/sakuyacatcat/farcaster-frames-sandbox",
        },
        {
          label: "Image",
          action: "link",
          target: "https://fc-dev-call.replit.app/image",
        },
        {
          label: "Frame Validator",
          action: "link",
          target: "https://warpcast.com/~/developers/frames",
        },
        {
          label: "Vercel",
          action: "link",
          target: "https://farcaster-frames-sandbox.vercel.app/",
        },
      ],
    },
  };

  // JSONレスポンスとしてメタデータを返却
  res.status(200).json(metaData);
}
