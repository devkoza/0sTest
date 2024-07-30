'use client';

import ContentLoaderNew from '@/components/ui/loader/content-loader-new';

interface BlockTypes {
  className?: string;
}

function Block({ className, ...props }: BlockTypes) {
  return (
    <ContentLoaderNew
      speed={2}
      id="loader2"
      width={'50%'}
      height={'50%'}
      viewBox="0 0 200 200"
      backgroundColor="#f1f1f1"
      foregroundColor="#dddddd"
      className={className}
      uniqueKey="block-loader-2"
      {...props}
    >
      <rect x="0" y="0" rx="12" ry="12" width="50%" height="50%" />
    </ContentLoaderNew>
  );
}

export default function BlockLoader2() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-6 xl:grid-cols-6 xl:gap-6">
      <Block />
      <Block className="hidden sm:block" />
      <Block className="hidden md:block" />
      <Block className="hidden xl:block" />
    </div>
  );
}
