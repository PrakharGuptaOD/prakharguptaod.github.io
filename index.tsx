import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar } from "lucide-react";

const Index = () => {
  const blogPosts = [
    {
      title: "My First Blog Post",
      description: "This is the first post on my blog site",
      date: "March 1, 2024",
      slug: "first-post"
    },
    {
      title: "Second Blog Post",
      description: "Some thoughts about blogging",
      date: "March 2, 2024",
      slug: "second-post"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="py-16 px-4 bg-[#F5F5DC]">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-left">My Blog</h1>
          <p className="text-gray-600 text-lg text-left">A Collection of Thoughts and Experiences</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 bg-[#E5E5E5]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="hover:shadow-lg transition-shadow backdrop-blur-sm bg-white/90">
              <CardHeader>
                <div className="flex items-center text-gray-500 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
                <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                <CardDescription>{post.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center text-primary hover:text-primary/80">
                  <FileText className="h-4 w-4 mr-2" />
                  <span>Read More</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-[#D3D3D3] py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>© 2024 My Blog. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
