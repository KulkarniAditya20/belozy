
export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    date: string;
    imageUrl: string;
    category: string;
    readTime: string;
}

export const blogs: BlogPost[] = [
    {
        id: '1',
        title: 'The Future of Web Development in 2024',
        excerpt: 'Explore the emerging trends and technologies shaping the web development landscape this year.',
        content: `
      <h2>Introduction</h2>
      <p>The web development landscape is constantly evolving, with new technologies and frameworks emerging at a rapid pace. In 2024, we are seeing a shift towards more efficient, scalable, and user-centric solutions.</p>
      
      <h3>1. AI-Driven Development</h3>
      <p>Artificial Intelligence is playing a bigger role in how we write and optimize code. From AI-powered coding assistants to automated testing, developers are leveraging these tools to boost productivity.</p>
      
      <h3>2. The Rise of Server Components</h3>
      <p>React Server Components are changing the way we think about data fetching and rendering. By moving logic to the server, we can reduce bundle sizes and improve performance.</p>
      
      <h3>Conclusion</h3>
      <p>Staying ahead of the curve is essential for any developer. Embracing these new trends will help you build better, faster, and more engaging web applications.</p>
    `,
        author: 'Alex Johnson',
        date: 'Oct 15, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072',
        category: 'Technology',
        readTime: '5 min read',
    },
    {
        id: '2',
        title: 'Mastering Tailwind CSS: Tips and Tricks',
        excerpt: 'Learn how to build beautiful, responsive designs faster with Tailwind CSS utility classes.',
        content: `
      <h2>Why Tailwind CSS?</h2>
      <p>Tailwind CSS has revolutionized the way we style web applications. Its utility-first approach allows for rapid prototyping and consistent design systems.</p>
      
      <h3>Customizing the Configuration</h3>
      <p>One of the most powerful features of Tailwind is its configuration file. You can define your own color palette, spacing scale, and breakpoints to match your brand identity.</p>
      
      <h3>Component Extraction</h3>
      <p>While utility classes are great, sometimes you need reusable components. Extracting common patterns into components (using @apply or React components) keeps your code clean and maintainable.</p>
    `,
        author: 'Sarah Williams',
        date: 'Oct 22, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&q=80&w=2031',
        category: 'Design',
        readTime: '4 min read',
    },
    {
        id: '3',
        title: 'Understanding Next.js App Router',
        excerpt: 'A comprehensive guide to the new App Router in Next.js 13 and how it improves routing.',
        content: `
      <h2>The New Paradigm</h2>
      <p>Next.js 13 introduced the App Router, a significant shift from the traditional Pages Router. It leverages React Server Components and simplifies layouts and data fetching.</p>
      
      <h3>Layouts and Templates</h3>
      <p>The new file-system based router makes it easy to define shared layouts that persist across route changes, improving the user experience and performance.</p>
    `,
        author: 'Michael Chen',
        date: 'Nov 05, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?auto=format&fit=crop&q=80&w=1964',
        category: 'Development',
        readTime: '6 min read',
    },
    {
        id: '4',
        title: 'UI/UX Best Practices for Modern Apps',
        excerpt: 'Key principles for creating intuitive and engaging user interfaces that users love.',
        content: `
      <h2>User-Centered Design</h2>
      <p>Great design starts with understanding the user. Conduct user research, create personas, and test your designs to ensure they meet user needs.</p>
      
      <h3>Accessibility Matters</h3>
      <p>Building accessible applications isn't just a legal requirement; it's the right thing to do. meaningful semantic HTML and ARIA attributes ensure everyone can use your app.</p>
    `,
        author: 'Emily Davis',
        date: 'Nov 12, 2023',
        imageUrl: 'https://images.unsplash.com/photo-1586717791821-3f44a5638d48?auto=format&fit=crop&q=80&w=2070',
        category: 'Design',
        readTime: '5 min read',
    },
];
