const fs = require('fs');
const path = require('path');

// This script copies the contents of out/404.html to out/404.html
// This ensures GitHub Pages serves this for all 404 errors

function generate404() {
  const outDir = path.join(process.cwd(), 'out');
  const indexPath = path.join(outDir, 'index.html');
  const notFoundPath = path.join(outDir, '404.html');

  // Make sure the 'out' directory exists
  if (!fs.existsSync(outDir)) {
    console.error('The "out" directory does not exist! Run "next build" first.');
    process.exit(1);
  }

  // If 404.html already exists from Next.js, we don't need to do anything
  if (fs.existsSync(notFoundPath)) {
    console.log('404.html already exists');
    return;
  }

  // Otherwise, create a 404.html file
  try {
    if (fs.existsSync(indexPath)) {
      // Copy index.html to 404.html
      fs.copyFileSync(indexPath, notFoundPath);
      console.log('Successfully created 404.html from index.html');
    } else {
      console.error('index.html not found in "out" directory!');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error creating 404.html:', error);
    process.exit(1);
  }
}

generate404(); 