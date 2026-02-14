
import { blogs } from '@/lib/blogs';
import { BlogCard } from '@/components/BlogCard';
import Navbar from '@/components/home/Navbar';

export default function BlogsPage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-background pt-24 pb-16">
                {/* Header Section */}
                <section className="container px-4 md:px-6 mb-16 mx-auto">
                    <div className="max-w-3xl mx-auto text-center space-y-4">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
                            Our Latest <span className="text-primary">Insights</span>
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Discover the latest trends, tips, and stories from the world of technology and design.
                        </p>
                    </div>
                </section>

                {/* Blogs Grid */}
                <section className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog) => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>
                </section>

                {/* Newsletter / CTA Section (Optional Modern Touch) */}
                <section className="container px-4 md:px-6 mx-auto mt-20">
                    <div className="bg-primary/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay in the loop</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                            Subscribe to our newsletter to get the latest articles and updates delivered straight to your inbox.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                            />
                            <button className="px-6 py-2 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
