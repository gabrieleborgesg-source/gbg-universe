async function loadJSON(path) {
  try {
    const response = await fetch(path);

    if (!response.ok) {
      throw new Error(`Erro ao carregar ${path}`);
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function loadSiteData() {
  const [site, diario, stories, guias] = await Promise.all([
    loadJSON("src/data/site.json"),
    loadJSON("src/data/diario.json"),
    loadJSON("src/data/stories.json"),
    loadJSON("src/data/guias.json")
  ]);

  return {
    site,
    diario,
    stories,
    guias
  };
}
