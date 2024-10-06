import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create the certs directory if it doesn't exist
const certsDir = path.resolve(__dirname, "../certs");

if (!fs.existsSync(certsDir)) {
  fs.mkdirSync(certsDir);
}

const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "pkcs1",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs1",
    format: "pem",
  },
});

fs.writeFileSync(path.join(certsDir, "private.pem"), privateKey);
fs.writeFileSync(path.join(certsDir, "public.pem"), publicKey);