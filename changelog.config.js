module.exports = {
    "breakingChangePrefix": "๐งจ ",
    "closedIssuePrefix": "โ ",
    "enableWritingScopes": true,
    "maxMessageLength": 64,
    "minMessageLength": 3,
    "questions": [
      "type",
      "scope",
      "subject",
      "body",
      "breaking",
      "issues",
      "lerna"
    ],
    "scopes": [],
    "types": {
      "chore": {
        "description": "Build process or auxiliary tool changes",
        "emoji": "๐ค",
        "value": "chore"
      },
      "ci": {
        "description": "CI related changes",
        "emoji": "๐ก",
        "value": "ci"
      },
      "docs": {
        "description": "Documentation only changes",
        "emoji": "โ๏ธ",
        "value": "docs"
      },
      "feat": {
        "description": "A new feature",
        "emoji": "๐ธ",
        "value": "feat"
      },
      "fix": {
        "description": "A bug fix",
        "emoji": "๐",
        "value": "fix"
      },
      "perf": {
        "description": "A code change that improves performance",
        "emoji": "โก๏ธ",
        "value": "perf"
      },
      "refactor": {
        "description": "A code change that neither fixes a bug or adds a feature",
        "emoji": "๐ก",
        "value": "refactor"
      },
      "release": {
        "description": "Create a release commit",
        "emoji": "๐น",
        "value": "release"
      },
      "style": {
        "description": "Markup, white-space, formatting, missing semi-colons...",
        "emoji": "๐",
        "value": "style"
      },
      "test": {
        "description": "Adding missing tests",
        "emoji": "๐",
        "value": "test"
      }
    }
  };