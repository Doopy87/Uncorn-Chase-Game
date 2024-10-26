# Security Policy for Evie's Unicorn Spelling Game 🛡️

Welcome to the Security Policy for **Evie's Unicorn Spelling Game**. This document outlines the steps for reporting vulnerabilities and our commitment to ensuring a safe experience for users, especially young learners.

## Supported Versions

The following versions of Evie's Unicorn Spelling Game are currently supported with security updates:

| Version       | Supported          |
| ------------- | ------------------ |
| v1.1.x        | ✅ Yes             |
| < v1.1        | ❌ No              |

## Reporting a Vulnerability

If you discover a security vulnerability in Evie's Unicorn Spelling Game, we appreciate your help in disclosing it responsibly. Here's how you can report any potential issues:

1. **Contact**: Please email us at `security@evieunicorn.com` with the subject line "Security Vulnerability Report."

2. **Include Details**: Provide as much information as possible about the vulnerability. This includes:
   - Description of the issue.
   - Steps to reproduce the issue.
   - Any potential impact or risks associated.

3. **Response Time**: We strive to respond to security reports within **48 hours** and provide an estimated timeline for resolving the issue.

4. **Responsible Disclosure**: We kindly request that you avoid publicly disclosing the vulnerability until it has been resolved and updated in a new version.

## Security Measures

We have implemented the following measures to maintain the security of Evie's Unicorn Spelling Game:

- **Content Security Policy (CSP)**: Restricts the types of content that can be loaded, ensuring only trusted scripts and resources are used in the game.
- **Sanitized User Inputs**: Ensures all user inputs, such as keyboard input for spelling, are validated and sanitized to prevent injection attacks.
- **HTTPS Requirement**: Although primarily run locally, we recommend hosting the game over HTTPS for any web-based deployments to prevent man-in-the-middle attacks.

## Security Best Practices for Developers

For contributors and developers working on the game, please adhere to the following best practices:

- **Code Review**: Ensure all code changes are reviewed to avoid accidental vulnerabilities.
- **Dependency Management**: Keep dependencies, such as Phaser.js, updated to the latest secure versions.
- **Limit External Scripts**: Use only essential libraries and ensure all external scripts are from reputable sources.

## Scope of Security Support

The following are **outside the scope** of our security policy:

- Vulnerabilities in third-party libraries or dependencies (please report those to the respective maintainers).
- Issues related to modifications or forks of the game by third parties.

## Contact Us

If you have questions or concerns about the Security Policy, please reach out to us at `security@evieunicorn.com`.

Thank you for helping us keep Evie's Unicorn Spelling Game safe and secure for everyone!
