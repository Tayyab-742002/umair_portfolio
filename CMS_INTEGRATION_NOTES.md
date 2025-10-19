# CMS Integration Notes

This file contains placeholders and TODOs for integrating Sanity CMS into the Reinvention 2.0 website.

## Placeholders to Replace with Sanity CMS

### 1. Blog Posts (`src/pages/Blog.tsx`)
- **Current:** Hardcoded array of blog posts
- **TODO:** Replace with Sanity query to fetch blog posts
- **Schema needed:**
  - title, excerpt, category, date, readTime, image, content (portable text)
  - slug for routing

### 2. Case Studies (`src/pages/CaseStudies.tsx`)
- **Current:** Hardcoded case study data
- **TODO:** Replace with Sanity query
- **Schema needed:**
  - name, role, problem, process, results (array), quote
  - Optional: image/photo

### 3. Self-Audits/Quizzes (`src/pages/Quiz.tsx`)
- **Current:** Hardcoded quiz data in component
- **TODO:** Replace with Sanity queries for dynamic quizzes
- **Schema needed:**
  - Quiz title, description, instructions
  - Sections (array of objects with title and questions)
  - Scoring ranges and interpretations

### 4. Services Page (`src/pages/Services.tsx`)
- **Current:** Hardcoded program details and pricing
- **TODO:** Fetch from Sanity for easy updates
- **Schema needed:**
  - Week-by-week breakdown
  - What's included items
  - Pricing information

### 5. About Page Journey Content (`src/pages/About.tsx`)
- **Current:** Hardcoded journey story
- **TODO:** Make editable via Sanity
- **Schema needed:**
  - Journey sections with titles and content
  - Framework pillars with descriptions

### 6. Contact Information
- **Current:** Hardcoded social links and contact details
- **TODO:** Store in Sanity settings
- **Schema needed:**
  - Social media URLs
  - Location information
  - Contact email

### 7. Testimonials (`src/pages/Home.tsx`)
- **Current:** Hardcoded on home page
- **TODO:** Reusable testimonial schema in Sanity
- **Schema needed:**
  - Quote, author name, role, optional image

## Sanity Schema Suggestions

```typescript
// Example schema structure (not complete)

export const blogPost = {
  name: 'blogPost',
  title: 'Blog Post',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug', options: { source: 'title' } },
    { name: 'excerpt', type: 'text' },
    { name: 'category', type: 'string' },
    { name: 'publishedAt', type: 'datetime' },
    { name: 'readTime', type: 'string' },
    { name: 'image', type: 'image' },
    { name: 'content', type: 'array', of: [{ type: 'block' }] },
  ],
}

export const caseStudy = {
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    { name: 'name', type: 'string' },
    { name: 'role', type: 'string' },
    { name: 'problem', type: 'text' },
    { name: 'process', type: 'text' },
    { name: 'results', type: 'array', of: [{ type: 'string' }] },
    { name: 'quote', type: 'text' },
    { name: 'image', type: 'image', options: { hotspot: true } },
  ],
}

export const quiz = {
  name: 'quiz',
  title: 'Self-Audit Quiz',
  type: 'document',
  fields: [
    { name: 'title', type: 'string' },
    { name: 'slug', type: 'slug' },
    { name: 'description', type: 'text' },
    { name: 'instructions', type: 'text' },
    {
      name: 'sections',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string' },
          { name: 'questions', type: 'array', of: [{ type: 'string' }] },
        ],
      }],
    },
    {
      name: 'scoring',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'range', type: 'string' },
          { name: 'level', type: 'string' },
          { name: 'interpretation', type: 'text' },
        ],
      }],
    },
  ],
}
```

## Implementation Steps

1. Set up Sanity project and install `@sanity/client` in this project
2. Create schemas for all content types above
3. Populate Sanity Studio with initial content
4. Create API utility functions to fetch data
5. Replace hardcoded data with Sanity queries in each component
6. Add loading states and error handling
7. Implement preview mode for editors

## Environment Variables to Add

```
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2024-01-01
```

## Notes

- Keep static content (like navigation items, footer structure) in the codebase
- Use Sanity for dynamic content that needs regular updates
- Implement proper image optimization with Sanity's image pipeline
- Consider adding preview functionality for draft content
