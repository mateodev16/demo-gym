import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function TestimonialsSkeleton() {
  return (
    <SkeletonTheme baseColor="#1a1a1a" highlightColor="#262626">
      <article className="border-2 bg-black border-zinc-900 rounded-2xl p-8 flex flex-col justify-between h-full">
        <div>
          <div className="flex mb-8 justify-between items-start">
            <div className="flex gap-1">
              <Skeleton width={20} height={20} count={5} containerClassName="flex gap-1" />
            </div>
            <Skeleton circle width={48} height={48} />
          </div>
          <div className="mb-8">
            <Skeleton count={3} height={18} style={{ marginBottom: '8px' }} />
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-6">
          <Skeleton width="60%" height={24} />
          <Skeleton width="40%" height={16} style={{ marginTop: '8px' }} />
        </div>
      </article>
    </SkeletonTheme>
  );
}