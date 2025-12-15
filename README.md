# Shamir's Secret Sharing (Node.js)

This project implements **Shamir’s Secret Sharing reconstruction** using
Lagrange Interpolation in JavaScript.

## Concept
A secret is divided into multiple shares.
Any `k` shares can reconstruct the secret, but fewer than `k` cannot.

## Features
- Supports values encoded in different bases
- Uses Lagrange interpolation to recover the secret
- Reads input from JSON files
- Clean and modular Node.js implementation

## Tech Stack
- Node.js
- JavaScript
- File System (fs)

## How It Works
1. Read shares from JSON
2. Decode values using their base
3. Select minimum `k` shares
4. Apply Lagrange interpolation
5. Recover the secret (constant term)

## Run the Project
```bash
npm install
npm start
