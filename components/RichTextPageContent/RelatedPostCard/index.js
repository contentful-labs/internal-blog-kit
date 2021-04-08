import Link from "next/link";
import RelatedPostCardStyles from "./RelatedPostCard.module.css";

export default function RelatedPostCard(props) {
  const { slug, title, excerpt } = props;

  return (
    <aside className={RelatedPostCardStyles.RelatedPostCard}>
      <Link href={`/blog/${slug}`} title='Related Post'>
        <a className='cardLink'>
          <h4 className={RelatedPostCardStyles.header}>Related Post</h4>
          <h3 className={RelatedPostCardStyles.title}> { title } </h3>
          <div>{excerpt}</div>
        </a>
      </Link>
    </aside>
  );
}
