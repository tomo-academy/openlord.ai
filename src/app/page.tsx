import Image from "next/image";

import { DarkModeToggle } from "@/components/atoms/DarkModeToggle";
import { Chat } from "@/components/chat/Chat";
import { SettingsPanel } from "@/components/chat/SettingsPanel";

export default function ChatPage() {
  return (
    <div className="flex h-svh w-full flex-col overflow-hidden px-4">
      <div className="sticky top-0 z-10 flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          <Image priority src="/cropped_circle_image (1).png" width={32} height={32} alt="TOMO Logo" className="rounded-full" />
          <div className="text-lg font-semibold">TOMO</div>
        </div>
        <div className="flex gap-1">
          <DarkModeToggle />
          <SettingsPanel />
        </div>
      </div>

      <div className="flex w-full flex-1 overflow-y-scroll">
        <Chat />
      </div>
    </div>
  );
}
