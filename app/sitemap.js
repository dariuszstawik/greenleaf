const fs = require("fs");
const path = require("path");

function getFoldersRecursive(filePath) {
  const folders = [];

  function shouldIgnoreFolder(folderName) {
    const ignoredPrefixes = ["[", "(", "_", "-"];
    return ignoredPrefixes.some((prefix) => folderName.startsWith(prefix));
  }

  function traverse(currentPath) {
    const files = fs.readdirSync(currentPath, { withFileTypes: true });

    files.forEach((file) => {
      if (file.isDirectory()) {
        const folderName = file.name;
        if (!shouldIgnoreFolder(folderName)) {
          folders.push(folderName);
          traverse(path.join(currentPath, folderName));
        }
      }
    });
  }

  traverse(filePath);
  return folders;
}

function getFilesRecursive(filePath) {
  const files = [];

  function traverse(currentPath) {
    const filesInCurrentPath = fs.readdirSync(currentPath, {
      withFileTypes: true,
    });

    filesInCurrentPath.forEach((file) => {
      if (file.isDirectory()) {
        traverse(path.join(currentPath, file.name));
      } else {
        files.push(path.join(currentPath, file.name));
      }
    });
  }

  traverse(filePath);
  return files;
}

const staticPages = getFoldersRecursive("/app");
