const ghPages = require("gh-pages");

const publishConfiguration = {
  dotfiles: false,
  add: false,
};

ghPages.publish("public", publishConfiguration, publishCallback);

function publishCallback(error) {
  if (error != null) {
    console.error("error:", error);
    throw error;
  }

  console.log("successfully deployed 🚀");
}
