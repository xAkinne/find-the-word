
<div align="center">
  <img src="https://rm.akinne.xyz/findtheword/image-original.png" alt="Logo" width="200" height="200">
</div>

<h1 align="center">Find the word!</h1>
<p style="text-align: center;">Gotta Find 'Em All</p>

<br><br>

## Table of Contents
1. [Description](#description)
2. [Origin Story](#origin-story)
3. [Installation and Configuration](#installation-and-configuration)
4. [License](#license)

## Description

**Find the word!** is a dynamic word search puzzle generator. It creates a grid filled with random letters derived from the target word (default: "cow"). With the default settings (32 rows x 20 columns), it typically generates around 150 occurrences of the target word for players to find. This project is primarily designed for printing and solving on paper, though it can also be enjoyed using a graphic program.

Check out the live demo on [the website](https://rm.akinne.xyz/findtheword).

## Origin Story

The idea for **Find the word!** was sparked by the book *"20,000 Cows!: An Almost Impossible Word Search"* by Alex Cheddar. I was fascinated by the concept but couldn't find the book in time, so I decided to create my own version. The result is a simple, customizable code where you can adjust parameters like the number of rows, columns, and the target word, allowing you to tailor the puzzle to your preferences.

## Installation and Configuration

To get started with **Find the word!**:

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/find-the-word.git
   ```
   Alternatively, you can download the repository as a ZIP file directly from GitHub.

2. **Configuration:**
   - Open the main script file (`script.js`).
   - At the top of the file, you'll find configuration variables:
     - `rows` – Number of rows in the grid.
     - `cols` – Number of columns in the grid.
     - `word` – The target word to search for. (The word must have **3 letters**, which have to be **unique**)
   - Modify these variables to customize your puzzle.

3. **Run the Project:**
   - Open the associated HTML file in your web browser to view and play the word search puzzle.

<hr>

<div style="display: flex; justify-content: space-between;">
  <span>License: GNU GPL 3.0</span>
  <span>Created by <a href="https://akinne.xyz">Akinne</a></span>
</div>
