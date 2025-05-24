"use client";

import { Switch } from "@/components/ui/Switch";

import { useTaleReadStore } from "@/stores/tale-read";

interface Props {}

const TaleContentBookmarkedCardSwitch: React.FC<Props> = () => {
  const bookmarkedContentCardActive = useTaleReadStore(
    (s) => s.bookmarkedContentCardActive
  );
  const setBookmarkedContentCardActive = useTaleReadStore(
    (s) => s.setBookmarkedContentCardActive
  );

  return (
    <Switch
      id="tale_content_bookmarked_card"
      checked={bookmarkedContentCardActive}
      onCheckedChange={(v) => setBookmarkedContentCardActive(v)}
    />
  );
};

export { TaleContentBookmarkedCardSwitch };
