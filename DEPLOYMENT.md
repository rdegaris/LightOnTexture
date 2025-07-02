# LightOnTexture Deployment Guide

This document contains detailed deployment information and troubleshooting steps for the LightOnTexture photography portfolio.

## Deployment Overview

**Live Site**: [https://www.lightontexture.com](https://www.lightontexture.com)
**Deployed**: July 2, 2025
**Platform**: AWS Amplify
**Domain Registrar**: GoDaddy

## AWS Amplify Configuration

### Repository Connection
- **Source**: GitHub repository
- **Branch**: `main`
- **Auto-deployment**: Enabled on push to main

### Build Settings
```yaml
# amplify.yml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

### Environment Variables
No environment variables currently required.

## Domain & DNS Configuration

### GoDaddy DNS Records

#### Current Active Records:
```
Type    Name    Value                           TTL
CNAME   www     d1234abcd5efgh.amplifyapp.com   1 Hour
```

#### Domain Forwarding:
```
Source: lightontexture.com
Destination: https://www.lightontexture.com
Type: Permanent (301) Redirect
HTTPS: Enabled with auto SSL
```

### SSL Certificates
- **www.lightontexture.com**: Managed by AWS Amplify
- **lightontexture.com**: Managed by GoDaddy (for forwarding)

## Deployment Process

### Automatic Deployment
1. Code changes pushed to `main` branch on GitHub
2. AWS Amplify detects webhook trigger
3. Build process runs according to `amplify.yml`
4. New version deployed to `d1234abcd5efgh.amplifyapp.com`
5. Custom domain `www.lightontexture.com` serves new content
6. Root domain `lightontexture.com` forwards via GoDaddy

### Manual Deployment
If needed, deployments can be triggered manually in AWS Amplify console.

## Key Configuration Files

### `public/_redirects`
```
/*    /index.html   200
```
**Purpose**: Enables React Router SPA routing on AWS Amplify
**Critical**: Required for direct navigation to routes like `/about`, `/panorama-color`, etc.

### `amplify.yml`
**Purpose**: Defines build process for AWS Amplify
**Location**: Project root
**Auto-detected**: Yes, Amplify uses this automatically

## Troubleshooting

### Common Issues & Solutions

#### 404 Errors on Page Refresh
**Problem**: Direct navigation to routes returns 404
**Solution**: Ensure `public/_redirects` file exists with SPA redirect rule
**Status**: ✅ Fixed

#### Images Not Loading
**Problem**: Images referenced from `src/assets/` don't work in production
**Solution**: Move all images to `public/` folder and use absolute paths (`/image.jpg`)
**Status**: ✅ Fixed

#### DNS Propagation Issues
**Problem**: Domain not resolving to correct destination
**Solution**: 
- Check DNS records in GoDaddy
- Wait 24-48 hours for full propagation
- Use DNS checker tools to verify propagation
**Status**: ✅ Resolved

#### SSL Certificate Issues
**Problem**: Mixed content or SSL warnings
**Solution**:
- Ensure all resources use HTTPS
- Wait for certificate provisioning (can take several hours)
- Check certificate status in AWS Amplify console
**Status**: ✅ Resolved

### Monitoring & Logs

#### AWS Amplify Console
- **URL**: AWS Amplify Console → LightOnTexture app
- **Build Logs**: View deployment success/failure details
- **Custom Domain**: Monitor SSL certificate status
- **Analytics**: Traffic and performance metrics

#### DNS Monitoring
- **Tools**: 
  - `nslookup www.lightontexture.com`
  - `dig www.lightontexture.com`
  - Online DNS checkers
- **Expected Results**:
  - `www.lightontexture.com` → `d1234abcd5efgh.amplifyapp.com`
  - `lightontexture.com` → Should redirect to `https://www.lightontexture.com`

## Performance Optimization

### Current Optimizations
- ✅ Vite build optimization
- ✅ Tailwind CSS purging unused styles
- ✅ Image compression (manual)
- ✅ AWS Amplify CDN distribution

### Future Optimizations
- [ ] Image format conversion (WebP)
- [ ] Lazy loading for gallery images
- [ ] Service worker for caching
- [ ] Lighthouse performance audit

## Security

### HTTPS Configuration
- ✅ AWS Amplify SSL certificate (auto-renewing)
- ✅ GoDaddy SSL for domain forwarding
- ✅ HTTPS redirect enforced
- ✅ Secure headers via AWS Amplify

### Content Security
- No sensitive data in frontend code
- All images and assets served from same domain
- No external CDN dependencies that could be compromised

## Backup & Recovery

### Code Backup
- **Primary**: GitHub repository
- **Branches**: `main` (production)
- **History**: Full commit history preserved

### Asset Backup
- **Images**: Stored in `public/` folder in repository
- **Fonts**: Custom font included in repository
- **Configuration**: All config files in version control

### Recovery Process
1. AWS Amplify can redeploy from any commit
2. Domain can be reconnected if needed
3. DNS records can be recreated from this documentation

## Contact Information

### Technical Support
- **AWS Amplify**: AWS Support Console
- **GoDaddy**: GoDaddy Support Portal
- **DNS Issues**: Check propagation with online tools first

### Deployment History
- **Initial Deploy**: July 2, 2025
- **Domain Connection**: July 2, 2025
- **SSL Activation**: July 2, 2025

---

**Last Updated**: July 2, 2025
**Next Review**: January 2026 (6 months)
