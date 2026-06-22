export function DesktopOnlyNotice() {
  return (
    <section className="desktop-only-notice" aria-labelledby="desktop-notice-title">
      <div className="notice-mark" aria-hidden="true">
        1024+
      </div>
      <h1 id="desktop-notice-title">이 포트폴리오는 PC 환경에 최적화되어 있습니다.</h1>
      <p>1024px 이상의 화면에서 확인해 주세요.</p>
    </section>
  );
}
