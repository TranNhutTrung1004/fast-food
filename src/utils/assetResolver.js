const assetModules = import.meta.glob("../assets/**/*", {
  eager: true,
  import: "default",
});

const assetMap = Object.fromEntries(
  Object.entries(assetModules).map(([path, url]) => [
    path.replace("../assets/", ""),
    url,
  ])
);

export const getAssetUrl = (relativePath) => {
  if (!relativePath) return "";
  const normalized = relativePath.replace(/^\/+/, "");
  return assetMap[normalized] || "";
};
