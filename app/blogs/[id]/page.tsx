
import { blogs } from '@/lib/blogs';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, User, Clock } from 'lucide-react';
import Navbar from '@/components/home/Navbar';

interface BlogPostPageProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateStaticParams() {
    return blogs.map((blog) => ({
        id: blog.id,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { id } = await params;
    const blog = blogs.find((b) => b.id === id);

    if (!blog) {
        notFound();
    }

    return (
        <>
            <Navbar />
            <article className="min-h-screen bg-background pt-24 pb-16">
                {/* Hero Section */}
                <div className="relative w-full h-[400px] md:h-[500px] mb-12">
                    <Image
                        src={blog.imageUrl}
                        alt={blog.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 flex flex-col justify-end container px-4 md:px-6 mx-auto pb-12">
                        <Link
                            href="/blogs"
                            className="text-white/80 hover:text-white mb-6 flex items-center gap-2 transition-colors w-fit"
                        >
                            <ArrowLeft className="w-5 h-5" /> Back to Blogs
                        </Link>

                        <div className="space-y-4 max-w-4xl">
                            <span className="bg-primary px-3 py-1 text-primary-foreground text-sm font-semibold rounded-full w-fit">
                                {blog.category}
                            </span>
                            <h1 className="text-3xl md:text-5xl md:leading-tight font-bold text-white">
                                {blog.title}
                            </h1>

                            <div className="flex flex-wrap items-center gap-6 text-white/90 pt-2">
                                <div className="flex items-center gap-2">
                                    <User className="w-5 h-5" />
                                    <span className="font-medium">{blog.author}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5" />
                                    <span>{blog.date}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-5 h-5" />
                                    <span>{blog.readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                    <div
                        className="prose prose-lg dark:prose-invert max-w-none 
              prose-headings:font-bold prose-headings:text-foreground 
              prose-p:text-muted-foreground prose-a:text-primary 
              prose-img:rounded-xl prose-strong:text-foreground"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Author Bio / Footer */}
                    <div className="mt-16 pt-8 border-t border-border">
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary text-2xl font-bold">
                                {blog.author.charAt(0)}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-foreground">Written by {blog.author}</h3>
                                <p className="text-muted-foreground">Tech enthusiast and content creator.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </>
    );
}
