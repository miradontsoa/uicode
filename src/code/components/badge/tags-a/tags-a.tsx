import styles from "./tags-a.module.css";

const BadgeA = ({
  tags,
}: {
  tags?: {
    title: String;
    href?: String;
  }[];
}) => {
  return (
    <>
      {tags && (
        <ul className={styles.tags}>
          {tags.map((tag, index) => {
            return <li className={styles.tag} key={index}>{tag.title}</li>;
          })}
        </ul>
      )}
    </>
  );
};

export default BadgeA;
