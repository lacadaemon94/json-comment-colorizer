# JSON Comment Colorizer

## Overview

JSON Comment Colorizer is a Visual Studio Code extension designed to enhance the readability and maintainability of JSON files. It highlights specific properties in JSON objects based on keywords in the comments. This tool is particularly useful for teams working with complex JSON configurations, making it easier to identify and differentiate various parts of the JSON structure.

## Features

- **Keyword Highlighting**: Colors JSON property names based on special keywords in comments.
- **Custom Colors for Different Keywords**: Supports different colors for `hardcoded`, `user`, and `dynamic` keywords.
- **Easy to Use**: Automatically highlights properties as you type or open JSON files.

## Installation

To install JSON Comment Colorizer, follow these steps:

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window.
3. Search for `JSON Comment Colorizer`.
4. Click `Install`.

## Usage

Once installed, the extension will automatically highlight JSON properties in your open JSON files. It looks for comments with specific keywords and applies coloring to the property names.

- Properties followed by `// hardcoded` will be highlighted in red.
- Properties with `// user` comments will be highlighted in blue.
- Properties with `// dynamic` comments will be highlighted in green.

## Example

```json
{
  "config": {
    "setting1": "value", // hardcoded
    "userPreference": "value", // user
    "dynamicData": "value" // dynamic
  }
}

In the above JSON, `setting1` will be highlighted in red, `userPreference` in blue, and `dynamicData` in green.