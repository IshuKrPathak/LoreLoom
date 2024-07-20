import { NextRequest } from "next/server";
import { RunEventType, RunOpts } from "@gptscript-ai/gptscript";

export async function POST(request: NextRequest) {
  const { story, pages, path } = await request.json();

  const opts: RunOpts = {
    disableCache: true,
    input: `--story ${story} --pages ${pages} --path ${path}`,
  };
}
