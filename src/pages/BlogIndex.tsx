import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { useI18n } from "@/i18n/I18nProvider";
import { useSeo } from "@/hooks/use-seo";

const BlogIndex = () => {
  const { t } = useI18n();
  useSeo({ title: t.seo.blog.title, description: t.seo.blog.description, canonical: "enlace_real_aquí" });
  return (
    <>
      <PageHeader eyebrow={t.blogIndex.eyebrow} title={t.blogIndex.title} subtitle={t.blogIndex.subtitle} />
      <section className="py-16 lg:py-20">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {t.blog.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="rounded-xl border border-border/60 bg-gradient-card p-7 flex flex-col transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:border-primary/40"
              >
                <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-primary/80 mb-4">
                  <span>{post.tag}</span>
                  <span className="text-muted-foreground/60">·</span>
                  <span className="text-muted-foreground">{post.readTime}</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-3 leading-tight">
                  <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{post.description}</p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-all"
                >
                  {t.blogIndex.readMore} <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default BlogIndex;
