# Branch Protection Rules

To enforce CI checks before merging, configure GitHub branch protection:

## GitHub Settings

1. Go to repository **Settings** → **Branches**
2. Click **Add rule** under Branch protection rules
3. Apply to branch: `main`
4. Enable:
   - ✅ Require status checks to pass before merging
   - ✅ Require branches to be up to date before merging
   - ✅ Require code reviews before merging (optional)
   - ✅ Dismiss stale pull request approvals (optional)
   - ✅ Include administrators

## Status Checks Required

These checks must pass:
- `test (18.x)` - Tests on Node 18
- `test (20.x)` - Tests on Node 20
- `lint` - TypeScript strict mode check

## Enforcement

With these rules enabled:
- ❌ Cannot push directly to `main` if tests fail
- ❌ Cannot merge PR if any check fails
- ✅ Must pass all tests before deploying

## CLI Verification (Optional)

Before pushing, verify locally:

```bash
npm test                    # Run unit tests
npm run build              # Compile TypeScript
npm run build:storybook    # Build Storybook
```

All three must pass for CI to succeed.
