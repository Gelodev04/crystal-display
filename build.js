const fs = require("fs");
const path = require("path");

// Create public directory if it doesn't exist
const publicDir = path.join(__dirname, "public");
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Copy index.html from src to public
const indexSrc = path.join(__dirname, "src", "index.html");
const indexDest = path.join(publicDir, "index.html");
let indexContent = fs.readFileSync(indexSrc, "utf8");

// Fix the CSS path from ../dist/styles.css to /styles.css
indexContent = indexContent.replace("../dist/styles.css", "/styles.css");

fs.writeFileSync(indexDest, indexContent);
console.log("✓ Copied and updated index.html");

// Copy styles.css from dist to public
const stylesSrc = path.join(__dirname, "dist", "styles.css");
const stylesDest = path.join(publicDir, "styles.css");
if (fs.existsSync(stylesSrc)) {
  fs.copyFileSync(stylesSrc, stylesDest);
  console.log("✓ Copied styles.css");
}

// Copy assets directory to public
const assetsSrc = path.join(__dirname, "assets");
const assetsDest = path.join(publicDir, "assets");
if (fs.existsSync(assetsSrc)) {
  // Recursive copy function
  function copyRecursive(src, dest) {
    if (fs.statSync(src).isDirectory()) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach((item) => {
        copyRecursive(path.join(src, item), path.join(dest, item));
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  }

  copyRecursive(assetsSrc, assetsDest);
  console.log("✓ Copied assets directory");
}

// Copy app.js if needed
const appSrc = path.join(__dirname, "app.js");
const appDest = path.join(publicDir, "app.js");
if (fs.existsSync(appSrc)) {
  fs.copyFileSync(appSrc, appDest);
  console.log("✓ Copied app.js");
}

console.log("\n✅ Build complete! Output in /public directory");
