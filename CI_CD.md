# CI/CD Pipeline

**@hybrid/ui-system** uses GitHub Actions for continuous integration.

## Workflow: Test & Build

Runs on every **push to main** and on **pull requests**.

### Jobs

#### 1. Test (Matrix: Node 18.x, 20.x)
- Install dependencies
- Compile TypeScript (`npm run build`)
- Run unit tests (`npm test`)
- Build Storybook (`npm run build:storybook`)

**Must pass** before merging to main.

#### 2. Lint
- Check TypeScript in strict mode (`npx tsc --noEmit --strict`)

**Must pass** before merging to main.

#### 3. Publish (After Test + Lint)
- Triggered only on push to main (not on PRs)
- Builds package for distribution
- Creates build summary

### Status Badge

Add to README:

```markdown
[![Test & Build](https://github.com/JoshuaWink/hybrid-ui-system/actions/workflows/test.yml/badge.svg)](https://github.com/JoshuaWink/hybrid-ui-system/actions)
```

## Branch Protection

Configure in **Settings → Branches → Branch protection rules** to:
- Require all CI checks to pass
- Require branches up to date
- Dismiss stale reviews
- Include administrators

See [BRANCH_PROTECTION.md](./BRANCH_PROTECTION.md) for setup.

## Local Testing

Before pushing, run:

```bash
npm test              # Unit tests (Vitest)
npm run build        # TypeScript compilation
npm run build:storybook  # Storybook build
```

## Failure Actions

If CI fails:
1. Check workflow logs: **Actions** tab on GitHub
2. Run failed test locally: `npm test`
3. Fix issue
4. Commit and push (workflow re-runs automatically)

## Skipping CI (Not Recommended)

To skip CI (only for emergencies):

```bash
git commit --no-verify -m "message"  # Skips pre-commit hooks
git push origin main --force        # Skips GitHub Actions
```

**⚠️ Use only in critical situations.** CI exists to maintain code quality.
