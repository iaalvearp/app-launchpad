import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/I18nProvider";
import { useSeo } from "@/hooks/use-seo";
import { FinalCTA } from "@/components/sections/FinalCTA";

const BlogPost = () => {
  const { slug } = useParams();
  const { t, lang } = useI18n();
  const post = t.blog.find((p) => p.slug === slug);

  useSeo({
    title: post ? `${post.title} · AlPy Blog` : t.seo.blog.title,
    description: post?.description ?? t.seo.blog.description,
    canonical: "enlace_real_aquí",
    jsonLd: post && {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      inLanguage: lang,
      author: { "@type": "Organization", name: "AlPy" },
      publisher: { "@type": "Organization", name: "AlPy" },
    },
  });

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <>
      <article className="pt-32 pb-20">
        <div className="container max-w-3xl">
          <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {t.blogIndex.backHome}
          </Link>
          <div className="mt-6 flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.2em] text-primary/80">
            <span>{post.tag}</span>
            <span className="text-muted-foreground/60">·</span>
            <span className="text-muted-foreground">{post.readTime}</span>
            <span className="text-muted-foreground/60">·</span>
            <time className="text-muted-foreground">{new Date(post.date).toLocaleDateString(lang === "es" ? "es-ES" : "en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]"
          >
            {post.title}
          </motion.h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{post.description}</p>

          <div className="mt-12 space-y-7">
            {post.body.map((block, i) => {
              if (block.h) return <h2 key={i} className="text-2xl md:text-3xl font-bold tracking-tight mt-10">{block.h}</h2>;
              if (block.list) return (
                <ul key={i} className="space-y-2 pl-1">
                  {block.list.map((it) => (
                    <li key={it} className="flex gap-3 text-base text-foreground/85 leading-relaxed">
                      <span className="text-primary mt-1">›</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              );
              return <p key={i} className="text-base md:text-lg text-foreground/85 leading-relaxed">{block.p}</p>;
            })}
          </div>
        </div>
      </article>
      <FinalCTA />
    </>
  );
};
export default BlogPost;
