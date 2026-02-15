
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/lib/blogs';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
    blog: BlogPost;
}

export const BlogCard = ({ blog }: BlogCardProps) => {
    return (
        <div className="group flex flex-col bg-card border border-border/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
            {/* Image Container */}
            <div className="relative h-56 w-full overflow-hidden">
                <Image
                    src={blog.imageUrl}
                    alt={blog.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground shadow-sm">
                    {blog.category}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-grow p-6">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{blog.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{blog.readTime}</span>
                    </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blogs/${blog.id}`}>
                        {blog.title}
                    </Link>
                </h3>

                <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                    {blog.excerpt}
                </p>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-border/50">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                            {blog.author.charAt(0)}
                        </div>
                        <span className="text-sm font-medium text-foreground">{blog.author}</span>
                    </div>

                    <Link
                        href={`/blogs/${blog.id}`}
                        className="flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                    >
                        Read Article <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </div>
    );
};
