import Disclaimer from "@/components/Disclaimer";
import PatchNoteTimeline from "@/components/PatchNoteTimeline";
import { PATCH_NOTES } from "@/data/patchNotes";

export const metadata = {
  title: "패치노트 | 크럼블 도감",
};

export default function PatchNotesPage() {
  return (
    <div>
      <h1 className="font-display mb-1 text-2xl font-bold text-ink">패치노트</h1>
      <p className="mb-4 text-sm text-ink-soft">사전예약부터 최신 업데이트까지의 타임라인입니다.</p>
      <Disclaimer>
        공식 발표·보도자료와 커뮤니티 반응을 교차 확인해 정리했습니다. 일부 항목(예: 8/3 업데이트)은
        공식 원문을 확보하지 못해 커뮤니티 반응 기반으로만 표기했습니다.
      </Disclaimer>
      <PatchNoteTimeline notes={PATCH_NOTES} />
    </div>
  );
}
