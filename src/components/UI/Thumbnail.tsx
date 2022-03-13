import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const Thumbnail = ({ title, src, slug }: Props) => {
  const image = <Image src={src} alt={`Cover Image for ${title}`} width={1280} height={720} />;
  return (
    <>
      {slug ? (
        <Link href={`/post/${slug}`}>
          <a aria-label={title}>{image}</a>
        </Link>
      ) : (
        image
      )}
    </>
  );
};

export default Thumbnail;
