# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Which versions are eligible for receiving such patches depends on the CVSS v3.0 Rating:

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x   | :white_check_mark: |

## Reporting a Vulnerability

The TypeScript Utility Types team takes security bugs seriously. We appreciate your efforts to responsibly disclose your findings, and will make every effort to acknowledge your contributions.

### How to Report a Security Vulnerability

**Please do not report security vulnerabilities through public GitHub issues.**

Instead, please report them via email to **kylepillay@gmail.com**.

You should receive a response within 48 hours. If for some reason you do not, please follow up via email to ensure we received your original message.

Please include the following information in your report:

- Type of issue (e.g., type system vulnerability, dependency vulnerability, etc.)
- Full paths of source file(s) related to the manifestation of the issue
- The location of the affected source code (tag/branch/commit or direct URL)
- Any special configuration required to reproduce the issue
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the issue, including how an attacker might exploit it

This information will help us triage your report more quickly.

## Preferred Languages

We prefer all communications to be in English.

## Security Update Process

When we receive a security bug report, we will:

1. Confirm the problem and determine the affected versions
2. Audit code to find any similar problems
3. Prepare fixes for all supported releases
4. Release new security fix versions as soon as possible

## Comments on this Policy

If you have suggestions on how this process could be improved, please submit a pull request or open an issue to discuss.

## Disclosure Policy

When we receive a security bug report, we will:

- Confirm receipt of your vulnerability report
- Work with you to understand the scope and severity of the issue
- Provide an estimated timeline for a fix
- Notify you when the issue is fixed
- Credit you in the release notes (if you wish)

We ask that you:

- Give us reasonable time to fix the issue before public disclosure
- Make a good faith effort to avoid privacy violations, destruction of data, and interruption or degradation of our service
- Do not access or modify data that doesn't belong to you
- Contact us immediately if you inadvertently access sensitive information

## Security Best Practices for Users

While this is a type-only library with no runtime code, we recommend:

1. **Keep TypeScript Updated**: Use the latest stable version of TypeScript
2. **Review Dependencies**: Regularly audit your project's dependencies
3. **Use Strict Mode**: Enable `strict: true` in your `tsconfig.json`
4. **Stay Informed**: Watch this repository for security updates
5. **Report Issues**: If you find a security issue, report it responsibly

## Known Security Considerations

### Type System Limitations

This library provides TypeScript utility types. Please note:

- Types are erased at runtime and provide no runtime security
- Type assertions can bypass type checking
- The `any` type can circumvent type safety
- This library cannot prevent runtime security issues

### Dependencies

We maintain minimal dependencies to reduce the attack surface:

- No runtime dependencies
- Only development dependencies for building and testing
- Regular dependency updates via Dependabot

## Security Updates

Security updates will be released as patch versions and announced via:

- GitHub Security Advisories
- Release notes
- NPM package updates

Subscribe to repository notifications to stay informed about security updates.

## Acknowledgments

We would like to thank the following individuals for responsibly disclosing security issues:

<!-- List will be populated as issues are reported and fixed -->

*No security issues have been reported yet.*

---

Thank you for helping keep TypeScript Utility Types and our users safe!
