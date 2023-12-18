import {
  BriefcaseIcon,
  BuildingLibraryIcon,
  CubeTransparentIcon,
  PuzzlePieceIcon,
  QuestionMarkCircleIcon,
  RectangleGroupIcon,
  ServerStackIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import styles from "./ListIcon.module.css";

export default function ListIcon({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) {
  return (
    <span className={className}>
      <IconContent iconName={iconName} />
    </span>
  );
}

function IconContent({ iconName }: { iconName: string }) {
  if (iconName === "courses") {
    return <BuildingLibraryIcon className={styles.icon} />;
  }
  if (iconName === "design-system") {
    return <PuzzlePieceIcon className={styles.icon} />;
  }
  if (iconName === "ecommerce") {
    return <ShoppingCartIcon className={styles.icon} />;
  }
  if (iconName === "framework") {
    return <CubeTransparentIcon className={styles.icon} />;
  }
  if (iconName === "hosting") {
    return <ServerStackIcon className={styles.icon} />;
  }
  if (iconName === "jobs") {
    return <BriefcaseIcon className={styles.icon} />;
  }
  if (iconName === "ui-components") {
    return <RectangleGroupIcon className={styles.icon} />;
  }
  return <QuestionMarkCircleIcon className={styles.icon} />;
}
