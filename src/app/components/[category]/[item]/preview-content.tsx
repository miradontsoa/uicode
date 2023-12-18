"use client";

import React, { useEffect, useState } from "react";
import defaultPreview from "@/code/components/preview.png";
import Image from "next/image";
export default function PreviewContent({
  slug,
  categorySlug,
}: {
  slug: string;
  categorySlug: string;
}) {
  const [previewImage, setPreviewImage] = useState(defaultPreview);
  const [isImage, setIsImage] = useState(false);
  useEffect(() => {
    import(`#/code/components/${categorySlug}/${slug}/example.png`)
      .then(({ default: componentImage }) => {
        setPreviewImage(componentImage);
        setIsImage(true);
      })
      .catch((error) => {
        setIsImage(false);
      });
  }, []);
  return (
    <>
      {isImage ? (
        <Image
          priority={true}
          className="h-auto w-full"
          src={previewImage}
          alt="preview"
          width={1024}
          height={640}
        />
      ) : (
        <h6 className="mb-0">No preview or demo ...</h6>
      )}
    </>
  );
}
