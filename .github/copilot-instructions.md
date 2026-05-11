# Copilot Instructions For This Repository

This repository is the source implementation of organization-level lint
conventions.

## Priority

When generating or editing code in this repository, keep these priorities in
order:

1. Keep ESLint rule definitions deterministic and explicit.
2. Preserve compatibility with organization-level policy from
   `produck/.github`.
3. Keep central toolkit usage aligned with organization bridge conventions.

## AI Collaboration Guardrails

- Use Chinese for explanation and review communication unless another language
  is required.
- Do not invent APIs, packages, configuration keys, commands, environment
  variables, or files.
- Do not add dependencies unless necessary and explicitly justified.
- Use Node-first execution for path checks, file processing, and output
  processing.
- For large output commands, use two phases: capture full output first, then
  analyze.
- For organization toolkit commands, prefer
  `npm exec --package=@produck/agent-toolkit@latest`.
- Before high-impact operations with central toolkit, observe and record the
  resolved package version.
- Commit messages must follow bracketed-tag grammar from organization policy.
- If AI collaboration assumptions change, update:
  - `docs/ai-collaboration.md`
  - relevant README content

Repository-specific rules can be stricter than the organization baseline and
take precedence here.

## Validation Commands

Before proposing completion, run:

- `npm run lint`
