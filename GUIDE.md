# Personal Website Maintenance Guide

## Updating Your Website

### 1. Making Changes
1. Make your changes to the website files
2. Test your changes locally using:
   ```bash
   npm run dev
   ```
3. When satisfied, build the project:
   ```bash
   npm run build
   ```

### 2. Committing Changes
Before committing, always check what files are being added:
```bash
git status
```

#### Files to NEVER commit:
- `node_modules/` directory
- `.next/` directory (build files)
- `.env` files
- System files (like `.DS_Store`)
- Large media files (>100MB)

#### If you accidentally commit large files:
1. Remove them from Git tracking:
   ```bash
   git rm -r --cached node_modules/
   git commit -m "Remove node_modules from Git tracking"
   ```
2. If files are in Git history, clean the history:
   ```bash
   git filter-branch --force --index-filter 'git rm -r --cached --ignore-unmatch node_modules/' --prune-empty --tag-name-filter cat -- --all
   ```

### 3. Pushing Changes
1. Add your changes:
   ```bash
   git add .
   ```
2. Commit with a descriptive message:
   ```bash
   git commit -m "Your descriptive message here"
   ```
3. Push to GitHub:
   ```bash
   git push origin main
   ```

### 4. Deployment
- Your website will automatically deploy to GitHub Pages
- The GitHub Actions workflow (`.github/workflows/deploy.yml`) handles the build and deployment
- Your site will be available at: `https://michele-mignani.github.io/personal-website`

## Common Issues and Solutions

### 1. Large Files in Git History
If you get errors about large files when pushing:
1. Check which files are too large:
   ```bash
   git rev-list --objects --all | git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | sort -k3nr | head -n 10
   ```
2. Remove them from history using `git filter-branch` as shown above

### 2. Build Issues
If the website doesn't build correctly:
1. Check the GitHub Actions logs in your repository
2. Try building locally to debug:
   ```bash
   npm run build
   ```

### 3. Website Not Updating
If changes aren't showing up on the live site:
1. Check if the GitHub Actions workflow completed successfully
2. Verify that the changes were pushed to the main branch
3. Wait a few minutes for GitHub Pages to update

## Best Practices

1. **Keep Dependencies Updated**
   - Regularly update your dependencies:
     ```bash
     npm update
     ```
   - Check for security vulnerabilities:
     ```bash
     npm audit
     ```

2. **Image Optimization**
   - Use optimized images (compress before adding)
   - Consider using Next.js Image component for automatic optimization

3. **Code Organization**
   - Keep your code organized in appropriate directories
   - Use meaningful file and component names
   - Comment your code where necessary

4. **Regular Backups**
   - Keep a local backup of your website
   - Consider using a separate branch for major changes

## Need Help?

If you encounter any issues:
1. Check the GitHub Actions logs
2. Review the Next.js documentation
3. Check the GitHub Pages documentation
4. Contact the repository maintainer

Remember: Always test your changes locally before pushing to GitHub!
