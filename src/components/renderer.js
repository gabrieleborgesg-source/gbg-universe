function renderText(elementId, value) {
  const element = document.getElementById(elementId);

  if (element && value !== undefined && value !== null) {
    element.textContent = value;
  }
}

function renderSite(siteData) {
  if (!siteData || !siteData.site) {
    return;
  }

  renderText("site-name", siteData.site.name);
  renderText("site-description", siteData.site.description);

  if (siteData.navigation) {
    renderText("nav-home", siteData.navigation.home);
    renderText("nav-diario", siteData.navigation.diario);
    renderText("nav-stories", siteData.navigation.stories);
    renderText("nav-guias", siteData.navigation.guias);
  }

  if (siteData.footer) {
    renderText("footer-copyright", siteData.footer.copyright);
    renderText("footer-phrase", siteData.footer.phrase);
  }
}

function renderSection(sectionData, titleId, descriptionId) {
  if (!sectionData) {
    return;
  }

  renderText(titleId, sectionData.section);
  renderText(descriptionId, sectionData.description);
}
