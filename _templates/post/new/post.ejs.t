---
to: src/routes/posts/<%= h.getDate() + '-' + h.inflection.dasherize(title) %>/post.ts
---
export default {
    title: '<%= title%>',
    tags: <%- JSON.stringify(tags.split(',')) %>,
    spoiler: '<%= spoiler%>',
    getContent: () => import('./document.mdx'),
}



