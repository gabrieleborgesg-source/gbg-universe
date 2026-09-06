document.addEventListener("DOMContentLoaded", async () => {
  const data = await loadSiteData();

  if (!data) {
    return;
  }

  if (data.site) {
    renderSite(data.site);
  }

  renderSection(
    data.diario,
    "diario-title",
    "diario-description"
  );

  renderSection(
    data.stories,
    "stories-title",
    "stories-description"
  );

  renderSection(
    data.guias,
    "guias-title",
    "guias-description"
  );
});
