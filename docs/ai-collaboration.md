# AI Collaboration Policy (Repo Level)

This repository is the source implementation of Produck organization lint
rules.

Because of that special role, this repository links with organization-level
governance from `produck/.github`.

## Inherited Organization Baseline

The following rules are inherited from `produck/.github`:

- Use Chinese for discussion unless another language is required.
- Prefer existing repository patterns; avoid inventing APIs, commands,
  config keys, or files.
- Avoid adding dependencies unless explicitly justified.
- Treat auth, secrets, infrastructure, and production configuration as
  high-risk and require human review.
- Follow Node-first execution policy for output processing and file
  orchestration.
- For large outputs, use capture-first then analyze (two-phase flow), not
  one-shot shell pipelines.
- Central toolkit execution uses `@produck/agent-toolkit@latest` by default
  for organization tooling tasks.
- Observe and record resolved toolkit version before high-impact operations.
- Commit messages follow bracketed tag grammar and allowed tag/target
  whitelist.

Precedence: repository-specific rules may be stricter than this baseline.

## Repository Exception Notes

- This repository uses tab indentation for source style (exception
  documented).

## Policy Linkage

- Organization source: `https://github.com/produck/.github`

This repository adheres to organization-level policies and does not define
additional technical contracts.

## Commands

- `npm run lint` - Enforce organization-level policies.

## Maintenance

This repository maintains only policies explicitly defined in
`produck/.github`. If new policies emerge, they should be defined at the
organization level first. No additional local contracts are introduced beyond
what is required.
